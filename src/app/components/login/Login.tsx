import React from 'react';

// Components
import { Input, InputNumber, Button, Divider } from 'antd';
import { RouteComponentProps } from '@reach/router';
import VerifyPhone from '../verify-phone';
//Styles
import './Login.less';

// export interface LoginProps {}

const Login: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <div className="login_container">
        <div className="login_innerContainer">
          <div className="login_inner">
            <div className="login_header">
              <h2>Sign In</h2>
              <Divider
                style={{
                  margin: '0  0 0.5rem 0 ',
                  borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <div className="login_phoneNo">
                <InputNumber
                  placeholder="Phone Number"
                  size="large"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="login_btn">
                <Button type="primary" size="large">
                  {' '}
                  Login
                </Button>
              </div>
            </div>
            <Divider
              style={{
                margin: '0.5rem 0 ',
                borderTop: '2px solid rgba(0, 0, 0, 0.06)',
              }}
            />

            <div>
              <div className="login_verifyCode">
                <div className="login_header">
                  <h2>Verify Mobile Number</h2>
                </div>
                <Input
                  placeholder="Enter Code"
                  size="large"
                  style={{ width: '100%' }}
                />
                <div className="login_resendCode">
                  <span style={{ marginRight: 5 }}>
                    <a href="#">Change Number</a>
                  </span>
                  <span>
                    <a href="#">Resend Code</a>
                  </span>
                </div>
                <div className="login_btn">
                  <Button type="primary" size="large">
                    {' '}
                    Send Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
