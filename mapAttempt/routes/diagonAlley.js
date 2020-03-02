import React, { useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { NativeRouter as Router, Route, Link } from "react-router-native"
import brickImage from '../waldemar-brandt-bricks.jpg'

const DiagonAlley = () => {

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
    })
    

    return (
        <>
            <View style={styles.overallContainer}>
                <View style={styles.navBar}>
                    <Link to="/"><Text style={styles.linkStyle}>Home | </Text></Link>
                    <Link to="/map"><Text style={styles.linkStyle}>Map | </Text></Link>
                    <Link to="/diagonalley"><Text style={styles.linkStyle}>Diagon Alley</Text></Link>
                </View>
                    <Text style={styles.titleText}>
                        Diagon Alley
                    </Text>
                <View style={styles.circleTrace}>
                    <Image 
                        style={{
                            marginTop: 50,
                            height: 550,
                            width: 250,
                            borderRadius: 50
                        }}
                        source={brickImage}
                    />
                </View>    
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    overallContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black'
    },
    navBar: {
        paddingTop: 40,
        flexDirection: 'row',
    },
    contentContainer: {
        paddingTop: 25,
    },
    linkStyle: {
      color: 'gold',
      fontSize: 20
    },
    titleText: {
        color: 'red',
        fontSize: 30,
    }
  });


export default DiagonAlley