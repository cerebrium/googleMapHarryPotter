import React, { useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import { NativeRouter as Router, Route, Link } from "react-router-native"
import brickImage from '../waldemar-brandt-bricks.jpg'

const DiagonAlley = () => {

    const [ leftOffset, setLeftOffset ] = useState(-100)
    const [ topOffset, setTopOffset ] = useState(50)

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
    useEffect( () => {
        // make the bricks appear lots of places
        // first
        setTimeout(() => {
            setLeftOffset(75)
            setTopOffset(300)
        }, 3000)

        // second
        setTimeout(() => {
            setLeftOffset(10)
            setTopOffset(500)
        }, 6000)

        // third
        setTimeout(() => {
            setLeftOffset(25)
            setTopOffset(50)
        }, 9000)

        // fourth
        setTimeout(() => {
            setLeftOffset(150)
            setTopOffset(600)
        }, 12000)

        // fifth
        setTimeout(() => {
            setLeftOffset(50)
            setTopOffset(100)
        }, 15000)
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
                    <TouchableOpacity
                        onPress={ ()=>{
                            alert('hello')
                        }}
                    > 
                        <Image 
                            source={brickImage}
                            style={{
                                marginTop: topOffset,
                                marginLeft: leftOffset,
                                height: 50,
                                width: 50,
                                borderRadius: 50,
                                zIndex: 0, 
                            }}
                        />     
                    </TouchableOpacity>   
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