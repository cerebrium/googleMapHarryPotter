import React, { useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import { NativeRouter as Router, Route, Link } from "react-router-native"
import brickImage from '../waldemar-brandt-bricks.jpg'

const DiagonAlley = () => {

    const [ leftOffset, setLeftOffset ] = useState(-1000)
    const [ topOffset, setTopOffset ] = useState(50)
    const [ winCounter, setWinCounter ] = useState(0)

    useEffect( ()=> {
        try {
            // works in the simulator
            Geolocation.getCurrentPosition((locationData) => {
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
    }, [])

    // interval for making the bricks appear and dissapoear
    var myFunction = (conditionalizer) => {
        if (conditionalizer === 0) {
            console.log('conditionalizer: ', conditionalizer)
            let changeLocationOfBrick = () => {
                let x = Math.floor(Math.random() * Math.floor(300))
                let y = Math.floor(Math.random() * Math.floor(750))
                console.log(x, y)
                setLeftOffset(x)
                setTopOffset(y)
            }
            var myInterval = setInterval(changeLocationOfBrick, 1000)
        } else {
            console.log('in the clearing portion')
            clearInterval(myInterval)
            console.log('did it get here?')
        }
    }
    useEffect(() => {
        console.log('useeffect called')
        myFunction(0)
    }, [])
    
    var content
    if (winCounter < 6) {
        content = (
            <View style={styles.overallContainer}>
                <View style={styles.titleContent}>
                    <View style={styles.navBar}>
                        <Link to="/"><Text style={styles.linkStyle}>Home | </Text></Link>
                        <Link to="/map"><Text style={styles.linkStyle}>Map | </Text></Link>
                        <Link to="/diagonalley"><Text style={styles.linkStyle}>Diagon Alley</Text></Link>
                    </View>
                    <Text style={styles.titleText}>
                        Diagon Alley
                    </Text>
                    <Text>
                        collect 10 bricks to enter
                    </Text>
                    <Text style={styles.titleText}>{winCounter}</Text>
                </View>
                <TouchableOpacity
                    onPress={ ()=>{
                        let myNumber = winCounter
                        myNumber++
                        if (myNumber === 6) {
                            myFunction(1)
                        }
                        setWinCounter(myNumber)
                    }}
                    style={{
                        marginBottom: topOffset,
                        marginLeft: leftOffset,
                        height: 30,
                        width: 50,
                        zIndex: 0, 
                    }}
                > 
                    <Image 
                        source={brickImage}
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                    />     
                </TouchableOpacity>   
            </View>
        )
    } else {
        content = (
            <>
                <View style={styles.overallContainerWin}>
                    <Text style={styles.titleText}>YOU WIN</Text>
                    <Text style={styles.titleText}>CODE: ButterBeerFTW</Text>
                    <Link to='/'><Text style={styles.titleText}>Home</Text></Link>
                </View>
            </>
        )
    }
    return (
        <>
            {content}
        </>
    )
}

const styles = StyleSheet.create({
    overallContainer: {
        flex: 1,
        backgroundColor: 'black',
        height: '100%',
        width: '100%'
    },
    overallContainerWin: {
        flex: 1,
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBar: {
        paddingTop: 40,
        flexDirection: 'row'
    },
    linkStyle: {
      color: 'gold',
      fontSize: 20
    },
    titleText: {
        color: 'red',
        fontSize: 30,
    },
    titleContent: {
        flex: 1,
        alignItems: 'center'
    }
  });


export default DiagonAlley