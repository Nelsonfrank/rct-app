import React, { Component } from 'react';
import { AuthProvider } from './AuthContext';
import { navigate } from '@reach/router';
class Auth extends Component {
  state = {
    authenticated: false,
    userRole: '',
    userAccessToken: localStorage.getItem('accessToken'),
    userInfo: {},
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      userRole: '',
      userAccessToken: '',
    });
    navigate('/management/signin');
  };

  handleAuthentication = () => {
    const isAuth = localStorage.getItem('authenticated');
    this.setState({
      authenticated: !!isAuth,
      userRole: JSON.parse(localStorage.getItem('UserRole')),
      userAccessToken: localStorage.getItem('accessToken'),
    });
  };

  handleAuthDashboard = () => {
    this.setState({
      authenticated: true,
      userRole: JSON.parse(localStorage.getItem('UserRole')),
      userAccessToken: localStorage.getItem('accessToken'),
      userInfo: JSON.parse(localStorage.getItem('UserInfo')),
    });
    // console.log(this.state.userInfo);
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
