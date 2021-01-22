import React, { useState } from 'react';

// Components
import { Input, Button, Divider } from 'antd';
import { RouteComponentProps, Link } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  ManagementLogin,
  GenerateTokenByPassword,
  GetUserInformation,
} from '../../../../API';
import Notification from '../../../components/notification';
//Styles
// import './ManagementSignin.less';

export interface ManagementSignInProps extends RouteComponentProps {
  handleAuth: () => void;
}

type FormValues = {
  phone_number: string;
  password: string;
};
const ManagementSignin: React.FC<ManagementSignInProps> = (
  props: ManagementSignInProps,
) => {
  const { handleAuth } = props;
  const [loading, setloading] = useState(false);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { dial_code: '+255', phone_number: '', password: '' },
  });

  const handleChange = (e: any) => {
    setValue('phone_number', e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setValue('password', e.target.value);
  };

  React.useEffect(() => {
    register('phone_number');
    register('password');
  }, [register]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const inputValue = {
      dial_code: '+255',
      ...data,
    };
    console.log(inputValue);
    setloading(true);
    const ManagementSignin = async () => {
      const result = await ManagementLogin(inputValue)
        .then((response) => response)
        .catch((error) => error.response.message);
      if (result.status === 200) {
        const generateTokenByPwd = async () => {
          const value = await GenerateTokenByPassword(inputValue).then(
            (response) => response,
          );

          if (value.status === 201) {
            localStorage.setItem('accessToken', value.data.data.token);
            localStorage.setItem('refreshToken', value.data.data.refreshToken);
            localStorage.setItem('authenticated', value.data.data.token);

            const getUserInfo = async () => {
              const result = await GetUserInformation(
                value.data.data.token,
              ).then((response) => response);
              console.log(result);
              if (result.status === 200) {
                localStorage.setItem('UserRole', result.data.data.user.role);
                localStorage.setItem(
                  'UserInfo',
                  JSON.stringify(result.data.data.user),
                );
                handleAuth();
              } else {
                Notification(false, value);
              }
              setloading(false);
            };
            getUserInfo();
          } else {
            Notification(false, value);
          }
        };

        generateTokenByPwd();
      } else {
        setloading(false);
        Notification(false, result);
      }
      console.log(result);
    };

    ManagementSignin();
  };

  return (
    <div>
      <div className="login_container">
        <div className="login_innerContainer">
          <div className="login_inner">
            <div className="login_header">
              <h2>Management Sign In</h2>
              <Divider
                style={{
                  margin: '0  0 0.5rem 0 ',
                  borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                }}
              />
            </div>
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
              <div className="login_phoneNo">
                <Input
                  placeholder="Phone Number"
                  addonBefore={'+255'}
                  name="phone_number"
                  size="large"
                  // ref={register}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="login_phoneNo">
                <Input
                  placeholder="Password"
                  name="password"
                  size="large"
                  type="password"
                  onChange={handlePasswordChange}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="login_btn">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                >
                  {' '}
                  Signin
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
                    Are you seller or buyer?!.{' '}
                    <Link to="/app/login"> Sign In Here</Link>
                  </p>
                </div>
                <div>
                  <Link to="/">
                    <p>Go Back</p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSignin;
