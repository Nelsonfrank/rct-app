import React, { useState } from 'react';

// Components
import { Input, Button, Divider, Select } from 'antd';
import { RouteComponentProps, Link } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { country } from '../../../components/country-dial';
import {
  ManagementLogin,
  GenerateTokenByPassword,
  GetUserInformation,
} from '../../../../API';
const { Option } = Select;

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
  const [countrySelected, setcountrySelected] = useState('');
  const [countryCode, setcountryCode] = useState();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { dial_code: '+255', phone_number: '', password: '' },
  });

  const handleChange = (e: any) => {
    setValue('phone_number', e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setValue('password', e.target.value);
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
    register('dial_code');
    register('phone_number');
    register('password');
    handlePickCountryDial(country, countrySelected);
  }, [register, countrySelected]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    const ManagementSignin = async () => {
      const result = await ManagementLogin(data).then((response) => response);
      if (result.status === 200) {
        const generateTokenByPwd = async () => {
          const value = await GenerateTokenByPassword(data).then(
            (response) => response,
          );

          if (value.status === 201) {
            localStorage.setItem('accessToken', value.data.data.token);

            const getUserInfo = async () => {
              const result = await GetUserInformation(
                value.data.data.token,
              ).then((response) => response);
              console.log(result);
              if (result.status === 200) {
                localStorage.setItem('UserRole', result.data.data.user.role);
                handleAuth();
              } else {
                console.log(result);
              }
            };
            getUserInfo();
          } else {
            console.log(value);
          }
        };

        generateTokenByPwd();
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
                  {country.map(
                    (item: {
                      code: string | number | undefined;
                      dial_code: React.ReactText;
                      name: React.ReactNode;
                    }) => (
                      <Option key={item.code} value={item.dial_code}>
                        {item.name}
                      </Option>
                    ),
                  )}
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
                <Button type="primary" htmlType="submit" size="large">
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
