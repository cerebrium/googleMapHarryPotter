import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NativeRouter as Router, Route, Link } from "react-router-native"

const Home = () => {
    return (
        <>
            <View style={styles.overallContainer}>
                <View style={styles.navBar}>
                    <Link to="/map"><Text style={styles.linkStyle}>Map | </Text></Link>
                    <Link to="/diagonalley"><Text style={styles.linkStyle}>Diagon Alley</Text></Link>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>
                        Welcome to Potter App
                    </Text>
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
      color: 'white',
      fontSize: 20
    },
    titleText: {
        color: 'white',
        fontSize: 20
    }
  });

export default Home