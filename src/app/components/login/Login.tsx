import React from 'react';

// Components
import { InputNumber, Button, Divider } from 'antd';
import { navigate, RouteComponentProps, Link } from '@reach/router';
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
                <Button
                  type="primary"
                  size="large"
                  onClick={() => navigate('/verify-phone')}
                >
                  {' '}
                  Login
                </Button>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginTop: 10 }}>
                  <p>
                    Dont have an account?!.{' '}
                    <Link to="/signup"> Register Here</Link>
                  </p>
                </div>
                <div>
                  <Link to="/">
                    <p>Go Back</p>
                  </Link>
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
