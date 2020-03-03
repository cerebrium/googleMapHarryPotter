import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TextInput, ImageBackground, Button } from 'react-native'
import titleBackground from './cobro-titleScreen.jpg'
import { NativeRouter as Router, Route, Link } from "react-router-native"
import MapPage from './routes/map'
import Home from './routes/home'
import DiagonAlley from './routes/diagonAlley'

const App = () => {
  // state
  const [ userName, setUserName ] = useState('')
  const [ userEmail, setUserEmail ] = useState('')
  const [ user, setUser ] = useState(null)

  // function to send to backend
  const susbmitInfo = (e) => {
    fetch('http://10.1.7.200:3001/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      setUser(responseJson)
    })
  }

  // conditional rendering for the login bit
  var userNameGotten
  if (user) {
    userNameGotten = (
      <Router>
        <Route exact path='/' render = { () => <Home user={user} /> } /> 
        <Route exact path='/map' render = { () => <MapPage user={user} /> } /> 
        <Route exact path='/diagonalley' render = { () => <DiagonAlley user={user} /> } />
      </Router>
    )
  } else {
    userNameGotten = (
      <ImageBackground
        source={titleBackground}
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Potter Go</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username:</Text>
            <TextInput
              style={styles.inputBoxes}
              placeholder="NShankland"
              onChangeText={(text) => setUserName(text)}
              userName={userName}
            />
            <Text style={styles.inputLabel}>Email:</Text>
            <TextInput
              style={styles.inputBoxes}
              placeholder="Nshankland@gmail.com"
              onChangeText={(text) => setUserEmail(text)}
              userEmail={userEmail}
            />
          </View>
          <View style={styles.submitButton}>
            <Button
              title='Submit'
              color='gold'
              onPress={susbmitInfo}
            ></Button>
          </View>
        </View>
      </ImageBackground>
    )
  }

  return (
    <>
      {userNameGotten}
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 60,
    color: 'gold'
  },
  inputBoxes: {
    height: 30, 
    borderColor: 'gray', 
    width: 200,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    textAlign: 'center'
  },
  inputContainer: {
    marginTop: 200,
    height: '25%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#060E18',
    borderRadius: 15,
    opacity: .9
  },
  inputLabel: {
    fontSize: 40,
    marginTop: 10,
    color: 'gold'
  },
  titleContainer: {
    marginTop: 45,
    height: '10%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#060E18',
    borderRadius: 15,
    opacity: .9
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: '#060E18',
    opacity: .9,
    height: 40,
    width: 100,
    borderRadius: 15
  }
});

export default App;
