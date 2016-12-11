import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, Container } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDsOUUsg9c42vskIZnhja_rL0-oPhR5uhY',
      authDomain: 'learning-c7953.firebaseapp.com',
      databaseURL: 'https://learning-c7953.firebaseio.com',
      storageBucket: 'learning-c7953.appspot.com',
      messagingSenderId: '366915271305'
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn){
      case true:
      return (
        <Container>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </Container>
      );
      case false:
        return <LoginForm />
      default:
        return (
          <Container>
            <Spinner size={'large'}/>
          </Container>
        )
    }

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
