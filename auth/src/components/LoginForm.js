import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  constructor(){
    super();
    this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
  }

  handleOnChangeUsername(text) {
    this.setState({username: text});
  }
  handleOnChangePassword(text) {
    this.setState({password: text});
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
        <CardSection />
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
