import React from 'react';

// Components
import { Input, InputNumber, Button, Divider } from 'antd';
import { RouteComponentProps } from '@reach/router';

//Styles
import './Signup.less';

// Props type
// export interface SignupProps {}

const Signup: React.FC<RouteComponentProps> = () => {
  return (
    <div className="signup_container">
      <div className="signup_innerContainer">
        <div className="signup_inner">
          <div className="signup_header">
            <h2>Sign Up</h2>
            <Divider
              style={{
                margin: '0  0 0.5rem 0 ',
                borderTop: '2px solid rgba(0, 0, 0, 0.06)',
              }}
            />
          </div>
          <div style={{ width: '100%' }}>
            <div className="signup_username">
              <div className="signup_names">
                <Input placeholder="First Name" size="large" />
              </div>
              <div className="signup_names">
                <Input placeholder="Last Name" size="large" />
              </div>
            </div>
            <div className="signup_phoneNo">
              <InputNumber
                placeholder="Phone Number"
                size="large"
                style={{ width: '100%' }}
              />
            </div>
            <div className="signup_btn">
              <Button type="primary" size="large">
                {' '}
                SignUp
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
            <div className="signup_verifyCode">
              <div className="signup_header">
                <h2>Verify Mobile Number</h2>
              </div>
              <Input
                placeholder="Enter Code"
                size="large"
                style={{ width: '100%' }}
              />
              <div className="signup_resendCode">
                <span style={{ marginRight: 5 }}>
                  <a href="#">Change Number</a>
                </span>
                <span>
                  <a href="#">Resend Code</a>
                </span>
              </div>
              <div className="signup_btn">
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
  );
};

export default Signup;
