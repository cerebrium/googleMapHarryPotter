import React, { useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { NativeRouter as Router, Route, Link } from "react-router-native"
import Geolocation from '@react-native-community/geolocation';

const MapPage = (props) => {
  const [ userLatitude, setUserLatitude ] = useState(0)
  const [ userLongitude, setUserLongitude ] = useState(0)
  const [ user, setUser ] = useState(null)
  const [ markerLat, setMarkerLat ] = useState(47.6048)
  const [ markerLong, setMarkerLong ] = useState(-122.3375)

  useEffect( ()=> {
    try {
      // works in the simulator
      Geolocation.getCurrentPosition((locationData) => {
        console.log('latitude: ', locationData.coords.latitude, 'longitude: ', locationData.coords.longitude)
        setUserLatitude(locationData.coords.latitude)
        setUserLongitude(locationData.coords.longitude)
      });

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

    fetch('http://10.1.7.200:3001/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: props.user.name,
        email: props.user.email,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      setUser(responseJson)
      // setting which marker should show up
      if (responseJson.events.length > 0) {
        setMarkerLat(47.6155)
        setMarkerLong(-122.3398)
      }
    })
  }, [])

  var content
  if (userLatitude !== 0) {
    content = (
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
            // for deployment will want to change this to be actual location
            latitude: markerLat,
            longitude: markerLong,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker 
            coordinate={{
              latitude: markerLat,
              longitude: markerLong
            }}  
            title={'First Location'}
            description={'Locate the secret entrance to Diagon Alley!'}
          />
        </MapView>
      </View>
    )
  } else {
    content = (
    <> 
      <Text>Loading...</Text>
    </>
    )
  }

  return (
    <>
      {content}
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
    color: 'gold',
    fontSize: 20
  }
});
export default MapPage;

// bubble gum wall
// Latitude: 47.6048 Longitude: -122.3375

// amazon spheres
// Latitude: 47.6155 Longitude: 122.3398
