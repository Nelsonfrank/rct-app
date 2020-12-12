import React from 'react';

// Components
import { Input, InputNumber, Button, Divider } from 'antd';
import { navigate, RouteComponentProps } from '@reach/router';

//Styles
import './Signup.less';

// Props type
// export interface SignupProps {}

const Signup: React.FC<RouteComponentProps> = () => {
  return (
    <div>
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
                <Button
                  type="primary"
                  size="large"
                  onClick={() => navigate('/verify-phone')}
                >
                  {' '}
                  SignUp
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
