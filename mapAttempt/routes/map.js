import React, { useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { NativeRouter as Router, Route, Link } from "react-router-native"
import Geolocation from '@react-native-community/geolocation';

const MapPage = () => {
  const [ userLocation, setUserLocation ] = useState('')

  useEffect( ()=> {
    try {
      // works in the simulator
      Geolocation.getCurrentPosition(info => console.log(info));

      // works in xpo and maybe deployment?
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
      <View style={styles.overallContainer}>
        <View style={styles.navBar}>
          <Link to="/"><Text style={styles.linkStyle}>Home | </Text></Link>
          <Link to="/map"><Text style={styles.linkStyle}>Map | </Text></Link>
          <Link to="/diagonalley"><Text style={styles.linkStyle}>Diagon Alley</Text></Link>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 47.6048,
            longitude: -122.3375,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker 
            coordinate={{
              latitude: 47.6048,
              longitude: -122.3375
            }}  
          />
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 750,
  },
  overallContainer: { 
    flex: 1,
    backgroundColor: 'black'
  },
  navBar: {
    flexDirection: "row",
    justifyContent: 'center',
    paddingTop: 35,
    marginBottom: 0,
    
  },
  linkStyle: {
    color: 'white',
    fontSize: 20
  }
});
export default MapPage;

// bubble gum wall
// Latitude: 47.6048 Longitude: -122.3375.
