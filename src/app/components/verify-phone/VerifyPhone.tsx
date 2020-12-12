import React from 'react';

//Components
import { Input, Button } from 'antd';
import { RouteComponentProps, navigate } from '@reach/router';
// Styles
import './VerifyPhone.less';
// Props Types
// export interface VerifyPhoneProps extends RouteComponentProps {
//   route: string;
// }

const VerifyPhone: React.FC<RouteComponentProps> = () => {
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <div className="verifyPhone_container">
      <div className="verifyPhone_innerContainer">
        <div className="verifyPhone_inner">
          <div>
            <div className="verifyPhone_verifyCode">
              <div className="verifyPhone_header">
                <h2>Verify Mobile Number</h2>
              </div>
              <Input
                placeholder="Enter Code"
                size="large"
                style={{ width: '100%' }}
              />
              <div className="verifyPhone_resendCode">
                <span style={{ marginRight: 5 }} onClick={navigateBack}>
                  <p>Change Number</p>
                </span>
                <span>
                  <a href="#">Resend Code</a>
                </span>
              </div>
              <div className="verifyPhone_btn">
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

export default VerifyPhone;
