import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

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
    error: null,
    loading: false
  }

  handleOnChangeUsername = (text) => {
    this.setState({username: text});
  }
  handleOnChangePassword = (text) => {
    this.setState({password: text});
  }

  handleButtonClick = () => {
    this.setState({error: null, loading: true});
    const { username, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(username, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFailed);
      });
  }

  onLoginFailed = () => {
    this.setState({error: 'Authentication Failed', loading: false});
  }

  onLoginSuccess = () => {
    this.setState({
      username: '',
      password: '',
      loading: false,
      error: null
    });
  }

  renderButton() {
    const button = this.state.loading
      ? <Spinner size="small"/>
      : <Button onPress={this.handleButtonClick}>Log in</Button>;
    return button;
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
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
