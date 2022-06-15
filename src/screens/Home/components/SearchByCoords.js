import React, { useState } from 'react';
import { View, Button, Alert, ActivityIndicator, Platform, StyleSheet } from 'react-native';

// API
import { GetTimeZoneByCoordinates } from '../../../utils/TimeZoneAPI';

// components
import CustomTextInput from '../../../components/CustomTextInput';
import DisplayModal from '../../../components/DisplayModal';

// style
import { Palette } from '../../../Theme/Palette';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchByCoords = ({ data, setData }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = async() => {
    if (latitude.length > 0 && longitude.length > 0) {
      setLoading(true);
      const response = await GetTimeZoneByCoordinates(latitude, longitude);
      setData(response.data);
      setModalVisible(true)
    } else {
      Alert.alert('Try Again', 'Please enter latitude and longitude');
    }
    setLoading(false);
  }

  const handleIOSNegative = (type, setType) => {
    if (!type.includes('-')) {
      setType(`-${type}`)
    } else {
      const removeNegative = type.slice(1);
      setType(removeNegative);
    }
  }

  return (
    <>
    <View style={styles.row}>
      {Platform.OS === 'ios' && <Ionicons name="remove-circle-outline" size={30} color={Palette.primary} onPress={() => handleIOSNegative(latitude, setLatitude)} />}
      <CustomTextInput
        onChange={setLatitude}
        value={latitude}
        keyboardType="numeric"
        placeholder="Input Latitude"
        returnKeyType="done"
      />
    </View>
    <View style={styles.row}>
      {Platform.OS === 'ios' && <Ionicons name="remove-circle-outline" size={30} color={Palette.primary} onPress={() => handleIOSNegative(longitude, setLongitude)}/>}  
      <CustomTextInput
        onChange={setLongitude}
        value={longitude}
        keyboardType="numeric"
        placeholder="Input Longitude"
        returnKeyType="done"
      />
    </View>
      <ActivityIndicator animating={loading} color={Palette.primary} />
      <Button onPress={handlePress} title="Submit" />
      {data && data.status !== "FAILED" && (
        <DisplayModal 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
          data={data}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex', 
    flexDirection: 'row'
  },
});

export default SearchByCoords;
