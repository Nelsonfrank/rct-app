import React, { Component } from 'react';
import { AuthProvider } from './AuthContext';
import { navigate } from '@reach/router';
class Auth extends Component {
  state = {
    authenticated: false,
    userRole: '',
    userAccessToken: localStorage.getItem('accessToken'),
    adminAccessToken: sessionStorage.getItem('accessToken'),
    userInfo: JSON.parse(sessionStorage.getItem('UserInfo')) || {},
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      userRole: '',
      userAccessToken: '',
    });
    navigate('/');
  };

  dashboardLogout = () => {
    sessionStorage.clear();
    this.setState({
      authenticated: false,
      adminRole: '',
      adminAccessToken: '',
    });
    navigate('/management/signin');
  };
  handleAuthentication = () => {
    this.setState({
      authenticated: true,
      userRole: JSON.parse(localStorage.getItem('UserRole')),
      userAccessToken: localStorage.getItem('accessToken'),
    });
  };

  handleAuthDashboard = () => {
    this.setState({
      authenticated: true,
      adminRole: JSON.parse(sessionStorage.getItem('adminRole')),
      adminAccessToken: sessionStorage.getItem('accessToken'),
      userInfo: JSON.parse(sessionStorage.getItem('UserInfo')),
    });
  };
  render() {
    const authProviderValue = {
      ...this.state,
      handleAuthentication: this.handleAuthentication,
      handleAuthDashboard: this.handleAuthDashboard,
      logout: this.logout,
      dashboardLogout: this.dashboardLogout,
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;
