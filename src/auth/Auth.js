import React, { Component } from 'react';
import { AuthProvider } from './AuthContext';
import { navigate } from '@reach/router';
class Auth extends Component {
  state = {
    authenticated: false,
    userRole: '',
    userAccessToken: '',
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      userRole: '',
      userAccessToken: '',
    });
  };

  handleAuthentication = () => {
    this.setState({
      authenticated: true,
      userRole: localStorage.getItem('UserRole'),
      userAccessToken: localStorage.getItem('accessToken'),
    });
  };

  handleAuthDashboard = () => {
    this.setState({
      authenticated: true,
      userRole: localStorage.getItem('UserRole'),
      userAccessToken: localStorage.getItem('accessToken'),
    });

    navigate('/management/dashboard');
  };
  render() {
    const authProviderValue = {
      ...this.state,
      handleAuthentication: this.handleAuthentication,
      handleAuthDashboard: this.handleAuthDashboard,
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
