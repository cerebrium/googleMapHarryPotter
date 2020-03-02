import React, { useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { NativeRouter as Router, Route, Link } from "react-router-native"
import Geolocation from '@react-native-community/geolocation';



const MapPage = () => {
  const [ userLocation, setUserLocation ] = useState('')

  useEffect( ()=> {
    try {
      Geolocation.getCurrentPosition(info => console.log(info));
      // navigator.geolocation.getCurrentPosition( (returnedLocation) => {
      //   if (returnedLocation) {
      //     let myLocation = JSON.stringify(returnedLocation)
      //     console.log(myLocation)
      //   }
      // })
    } catch (error) {
      console.log('error: ', error)
    }
  }, [])

  return (
    <>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
});
export default MapPage;
