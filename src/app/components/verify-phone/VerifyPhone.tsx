/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

//Components
import { Input, Button } from 'antd';
import { RouteComponentProps, navigate } from '@reach/router';
// Styles
import './VerifyPhone.less';

// API
import {
  CreateToken,
  VerifyToken,
  GenerateToken,
  GetUserInformation,
} from '../../../API';
// Props Types
// export interface VerifyPhoneProps extends RouteComponentProps {
//   route: string;
// }

const VerifyPhone: React.FC<RouteComponentProps> = (props: any) => {
  const [userNumber, setUserNumber] = React.useState({});
  const { register, handleSubmit, setValue } = useForm();

  type FormValues = {
    otpcode: string;
  };

  useEffect(() => {
    register('otpcode');
    setUserNumber(props.location.state.data);
    const createToken = async () => {
      const result = await CreateToken(userNumber).then((response) => response);
      console.log(result);
    };
    // createToken();
  }, [userNumber]);

  const handleChange = (e: any) => {
    setValue('otpcode', e.target.value);
  };
  const navigateBack = () => {
    navigate(-1);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const info = { ...data, ...userNumber };
    const verifyToken = async () => {
      const result = await VerifyToken(info).then((response) => {
        console.log(response);
        if (response.status === 200) {
          const generateToken = async () => {
            const result = await GenerateToken(data.otpcode).then(
              (response) => {
                console.log(response);
                if (response.status === 201) {
                  const getUserInformation = async () => {
                    const information = await GetUserInformation(
                      response.data.data.token,
                    ).then((response) => response);
                    console.log(information);
                  };
                  getUserInformation();
                } else {
                  console.log(response);
                }
              },
            );
            // console.log(result);
            localStorage.setItem('user_token', JSON.stringify(result));
          };
          generateToken();
        } else {
          console.log(response);
        }
      });
    };
    verifyToken();
    console.log(info);
  };

  return (
    <div className="verifyPhone_container">
      <div className="verifyPhone_innerContainer">
        <div className="verifyPhone_inner">
          <div>
            <form
              className="verifyPhone_verifyCode"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="verifyPhone_header">
                <h2>Verify Mobile Number</h2>
              </div>
              <Input
                placeholder="Enter Code"
                size="large"
                onChange={handleChange}
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
                <Button type="primary" htmlType="submit" size="large">
                  {' '}
                  Send Code
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhone;
