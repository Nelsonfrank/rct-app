import React, { useState } from 'react';

// Components
import { Input, Button, Divider, Select } from 'antd';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { country } from '../country-dial';
import { UserLogin } from '../../../API';
const { Option } = Select;

//Styles
import './Login.less';

// export interface LoginProps {}

type FormValues = {
  phoneNumber: string;
};
const Login: React.FC<RouteComponentProps> = () => {
  const [countrySelected, setcountrySelected] = useState('');
  const [countryCode, setcountryCode] = useState();

  const { register, handleSubmit, setValue } = useForm();

  const handleChange = (e: any) => {
    setValue('phone_number', e.target.value);
  };
  const handleOnSelectChange = (value: any) => {
    setValue('dial_code', value);
    setcountrySelected(value);
  };
  const handlePickCountryDial = (countryList: any, countryPickes: string) => {
    const value = countryList.filter(
      (item: any) => item.code === countryPickes,
    );
    const item =
      Array.isArray(value) && value.length >= 1 ? value[0].dial_code : '';
    setcountryCode(item);
  };

  React.useEffect(() => {
    register('dial_code'); // custom register Antd input
    register('phone_number'); // custom register Antd input
    handlePickCountryDial(country, countrySelected);
  }, [register, countrySelected]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    const login = async () => {
      const result = await UserLogin(data).then((response) => response);
      if (result.status === 200) {
        navigate('/verify-phone', { state: { data: data } });
      } else if (result.status === 201) {
        navigate('/signup', { state: { data: data } });
      }
    };

    login();
  };

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
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
              <div className="add-seller-input">
                <Select
                  size="large"
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="Select Country"
                  optionFilterProp="children"
                  filterOption={(input: any, option: any) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  onChange={(e) => handleOnSelectChange(e)}
                >
                  {country.map((item) => (
                    <Option key={item.code} value={item.dial_code}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="login_phoneNo">
                <Input
                  placeholder="Phone Number"
                  addonBefore={countryCode || '+255'}
                  name="phone_number"
                  size="large"
                  // ref={register}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="login_btn">
                <Button type="primary" htmlType="submit" size="large">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
