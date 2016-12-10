import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDsOUUsg9c42vskIZnhja_rL0-oPhR5uhY',
      authDomain: 'learning-c7953.firebaseapp.com',
      databaseURL: 'https://learning-c7953.firebaseio.com',
      storageBucket: 'learning-c7953.appspot.com',
      messagingSenderId: '366915271305'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!!</Text>
      </View>
    );
  }
}


export default App;
