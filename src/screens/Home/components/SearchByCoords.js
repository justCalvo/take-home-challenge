import React, { useState } from 'react';
import { Button, Alert, ActivityIndicator } from 'react-native';

// API
import { GetTimeZoneByCoordinates } from '../../../utils/TimeZoneAPI';

// components
import CustomTextInput from '../../../components/CustomTextInput';
import DisplayModal from '../../../components/DisplayModal';

// style
import { Palette } from '../../../Theme/Palette';

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

  return (
    <>
      <CustomTextInput
        onChange={setLatitude}
        value={latitude}
        keyboardType="numeric"
        placeholder="Input Latitude"
        returnKeyType="done"
      />
      <CustomTextInput
        onChange={setLongitude}
        value={longitude}
        keyboardType="numeric"
        placeholder="Input Longitude"
        returnKeyType="done"
      />
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

export default SearchByCoords;
