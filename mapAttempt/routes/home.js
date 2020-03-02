import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NativeRouter as Router, Route, Link } from "react-router-native"

const Home = () => {
    return (
        <>
            <View style={styles.overallContainer}>
                <View style={styles.navBar}>
                    <Link to="/map"><Text>Map | </Text></Link>
                    <Link to="/diagonalley"><Text>Diagon Alley</Text></Link>
                </View>
                <View style={styles.contentContainer}>
                    <Text>
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
        flex: 1
    },
    navBar: {
        paddingTop: 40,
        flexDirection: 'row',
    },
    contentContainer: {
        paddingTop: 25,
    }
  });

export default Home