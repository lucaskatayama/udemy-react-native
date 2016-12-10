import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

const styles = {
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: null
  }

  handleOnChangeUsername = (text) => {
    this.setState({username: text});
  }
  handleOnChangePassword = (text) => {
    this.setState({password: text});
  }

  handleButtonClick = () => {
    this.setState({error: null});
    const { username, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(username, password)
          .catch(() => {
            this.setState({error: 'Authentication Failed.'});
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.username}
            placeholder="user@domain.com"
            autoCorrect={false}
            onChangeText={this.handleOnChangeUsername}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            placeholder="password"
            secureTextEntry
            onChangeText={this.handleOnChangePassword}
          />
        </CardSection>
        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPress={this.handleButtonClick}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
