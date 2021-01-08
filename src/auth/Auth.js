import React, { Component } from 'react';
import { AuthProvider } from './AuthContext';

class Auth extends Component {
  state = {
    authenticated: false,
    userId: '',
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      userId: '',
    });
  };

  handleAuthentication = () => {
    this.setState({
      authenticated: true,
      userId: localStorage.getItem('accessToken'),
    });
  };

  render() {
    const authProviderValue = {
      ...this.state,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout,
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;
