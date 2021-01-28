/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// Components
import { Input, Button, Divider } from 'antd';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import Notification from '../notification';
// Api
import { CompleteRegistration } from '../../../API';
//Styles
import './Signup.less';

// Props type
// export interface SignupProps {}

const Signup: React.FC<RouteComponentProps> = (props: any) => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    const phoneDetail = props.location.state.data;
    setValue('dial_code', phoneDetail.dial_code);
    setValue('phone_number', phoneDetail.phone_number);
    console.log(phoneDetail);
  }, []);

  useEffect(() => {
    register('first_name', { required: true });
    register('last_name', { required: true });
    register('dial_code', { required: true });
    register('phone_number', { required: true });
  }, [register]);

  const handleFirstNameChange = (event: any) => {
    setValue('first_name', event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setValue('last_name', event.target.value);
  };

  const handlePhoneChange = (event: any) => {
    setValue('phone_number', event.target.value);
  };
  const onSubmit = (data: any) => {
    const payload = {
      dial_code: data.dial_code,
      phone_number: data.phone_number,
      name: `${data.first_name} ${data.last_name}`,
    };
    // console.log(payload);

    const completeUserRegistration = async () => {
      const updateResponse = await CompleteRegistration(payload)
        .then((response) => response)
        .catch((error) => error);

      if (updateResponse.status === 200) {
        Notification(true, 'Account Update Successfully');
        const phoneInfo = {
          dial_code: data.dial_code,
          phone_number: data.phone_number,
        };
        navigate('/app/verify-phone', { state: { data: phoneInfo } });
      } else {
        Notification(false, 'Account Update Failed');
      }
    };

    completeUserRegistration();
  };

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
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
              <div className="signup_username">
                <div className="signup_names">
                  <Input
                    placeholder="First Name"
                    size="large"
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="signup_names">
                  <Input
                    placeholder="Last Name"
                    size="large"
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
              <div className="signup_phoneNo">
                <Input
                  placeholder="Phone Number"
                  size="large"
                  style={{ width: '100%' }}
                  value={props.location.state.data.phone_number}
                  maxLength={9}
                  addonBefore={getValues('dial_code') || '+255'}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="signup_btn">
                <Button type="primary" size="large" htmlType="submit">
                  {' '}
                  SignUp
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
                    Update Phone Number?!. <Link to="/login"> Click Here</Link>
                  </p>
                </div>
                <div>
                  <Link to="/">
                    <p>Go Home</p>
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

export default Signup;
