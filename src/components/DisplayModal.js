import React, { useCallback, useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import moment from 'moment';

// style
import { Palette } from "../Theme/Palette";
import Ionicons from '@expo/vector-icons/Ionicons';

const DisplayModal = ({ modalVisible, setModalVisible, data }) => {
  const [localCurrentTime, setLocalCurrentTime] = useState();

  const formatInputTimeZone = useCallback(() => {
    if (data) {
      const convertUTC = data.timestamp - data.gmtOffset;
      setLocalCurrentTime(moment.utc(convertUTC).format('H:mm A'))
    }
  }, [data]);

  useEffect(() => {
    formatInputTimeZone();
  }, [data]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible) }
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
          <Ionicons name="close-circle-outline" size={30} color={Palette.primary} />
          </Pressable>
          <Text style={styles.modalText}>Country: {data.countryName}</Text>
          <Text style={styles.modalText}>Time Zone: {data.zoneName}</Text>
          <Text style={styles.modalText}>Local Current Time: {localCurrentTime}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeButton: {
    paddingBottom: 10,
    marginLeft: 'auto',
    marginRight: 0,
  },
});

export default DisplayModal;