/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

//Components
import { Input, Button } from 'antd';
import { RouteComponentProps, navigate } from '@reach/router';
import Notification from '../notification';
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
export interface VerifyPhoneProps extends RouteComponentProps {
  route?: string;
  handleAuth?: () => void;
}

const VerifyPhone: React.FC<VerifyPhoneProps> = (props: any) => {
  const [userNumber, setUserNumber] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const { handleAuth } = props;
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
    createToken();
  }, [userNumber]);

  const handleChange = (e: any) => {
    setValue('otpcode', e.target.value);
  };
  const navigateBack = () => {
    navigate(-1);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    const info = { ...data, ...userNumber };
    const verifyToken = async () => {
      await VerifyToken(info).then((response) => {
        console.log(response);
        if (response.status === 200) {
          const generateToken = async () => {
            await GenerateToken(data.otpcode).then((response) => {
              console.log(response);
              if (response.status === 201) {
                setLoading(false);
                localStorage.setItem('accessToken', response.data.data.token);
                localStorage.setItem(
                  'refreshToken',
                  response.data.data.refreshToken,
                );
                localStorage.setItem('authenticated', response.data.data.token);
                const getUserInformation = async () => {
                  const information = await GetUserInformation(
                    response.data.data.token,
                  ).then((response) => response);
                  console.log(information);
                  if (information.status === 200) {
                    setLoading(false);
                    localStorage.setItem(
                      'UserRole',
                      JSON.stringify(information.data.data.roles),
                    );
                    localStorage.setItem(
                      'UserInfo',
                      JSON.stringify(information.data.data.user),
                    );
                    const roleList = information.data.data.roles.map(
                      (item: any) => {
                        return item.role;
                      },
                    );
                    if (roleList.includes('regular')) {
                      navigate('/');
                    } else if (roleList.includes('seller')) {
                      navigate('/app/sellers');
                    } else {
                      navigate('/');
                    }
                    console.log(roleList);
                    handleAuth();
                    console.log(information);
                  } else {
                    setLoading(false);
                    Notification(false, information.message);
                  }
                };
                getUserInformation();
              } else {
                setLoading(false);
                console.log(response);
              }
            });

            navigate('/');
          };
          generateToken();
        } else {
          Notification(false, 'Fail to verify token');
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
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                >
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
