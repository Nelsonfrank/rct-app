import React, { useState, useEffect, useContext } from 'react';

// dependence
import { Input, Select, Button } from 'antd';
import { RouteComponentProps, navigate } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  CreatePlatform,
  CreateLeader,
  RefreshToken,
} from '../../../../../../API';
import { Auth } from '../../../../../../auth/AuthContext';
// components
import BackButton from '../../../../components/back-button';
import Notification from '../../../../../components/notification';
import { image } from './image_base64';
// Styles
import './CreatePlatform.less';

import { region } from './country-dial';
// export interface CreatePlatformFormProps {}

const { Option } = Select;
type FormValues = {
  platform_name: string;
  platform_country_dial_code: string;
  platform_region: string;
  phone_number: string;
  first_name: string;
  surname: string;
};
const CreatePlatformForm: React.FC<RouteComponentProps> = () => {
  const { userAccessToken } = useContext(Auth);
  const [countrySelected, setcountrySelected] = useState('');
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, errors, formState } = useForm({
    mode: 'onChange',
  });
  useEffect(() => {
    console.log(formState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    register('platform_name', { required: true });
    register('platform_region', { required: true });
    register('first_name', { required: true });
    register('surname', { required: true });
    register('phone_number', { required: true, pattern: /^\d+$/ });
  }, [register]);

  const handleOnSelectChange = (value: any) => {
    setcountrySelected(value);
    setValue('platform_region', value);
    console.log(countrySelected);
  };

  const handlePlatformNameChange = (e: { target: { value: any } }) => {
    setValue('platform_name', e.target.value);
  };

  const handleFirstNameChange = (e: { target: { value: any } }) => {
    setValue('first_name', e.target.value);
  };

  const handleSurnameChange = (e: { target: { value: any } }) => {
    setValue('surname', e.target.value);
  };
  const handlePhoneNumberChange = (e: { target: { value: any } }) => {
    setValue('phone_number', e.target.value);
  };

  // const createLeader = async (
  //   payload: { dial_code: string; phone_number: string; name: string },
  //   platformId: string,
  //   accessToken: string,
  // ) => {
  //   return await CreateLeader(payload, platformId, accessToken).then(
  //     (response) => response,
  //   );
  // };

  // const createPlatform = async (
  //   payload: CreatePlatformTypes,
  //   accessToken: string | null,
  // ) => {
  //   return await CreatePlatform(payload, accessToken).then(
  //     (response) => response,
  //   );
  // };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    const platformValue = {
      platform_name: data.platform_name,
      platform_country_dial_code: '+255',
      platform_region: data.platform_region,
      image_string: image,
    };

    const platformLeaderInfo = {
      dial_code: '+255',
      phone_number: data.phone_number,
      name: `${data.first_name} ${data.surname}`,
      role: 'leader',
    };
    setLoading(true);

    const AddPlatform = async () => {
      const result = await CreatePlatform(platformValue, userAccessToken).then(
        (response) => response,
      );
      if (result.status === 200) {
        const createLeader = async () => {
          const createLeaderResponse = await CreateLeader(
            platformLeaderInfo,
            result.data.data,
            userAccessToken,
          ).then((response) => response);
          console.log(createLeaderResponse);
          setLoading(false);
          navigate(-1);
          Notification(true, 'Platform Created Successfully');
        };
        createLeader();
      } else if (result.message === `Request failed with status code 401`) {
        const token = localStorage.getItem('refreshToken');
        const refreshToken = {
          refresh_token: token,
        };
        const refreshTokenCall = async () => {
          const response = await RefreshToken(refreshToken).then(
            (response) => response,
          );

          if (response.status === 201) {
            localStorage.setItem('accessToken', response.data.data.token);
            localStorage.setItem(
              'refreshToken',
              response.data.data.refreshToken,
            );

            const AddPlatform = async () => {
              const result = await CreatePlatform(
                platformValue,
                response.data.data.token,
              ).then((response) => response);
              if (result.status === 200) {
                const createLeader = async () => {
                  const createLeaderResponse = await CreateLeader(
                    platformLeaderInfo,
                    result.data.data,
                    response.data.data.token,
                  ).then((response) => response);
                  console.log(createLeaderResponse);
                  setLoading(false);
                  navigate(-1);
                  Notification(true, 'Platform Created Successfully');
                };
                createLeader();
              }
            };
            AddPlatform();
          }
        };
        refreshTokenCall();
      } else {
        setLoading(false);
        Notification(false, 'Failed to Create Platform', result.message);
      }
    };
    AddPlatform();
  };
  return (
    <>
      <BackButton />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="create-platform-container"
      >
        <h1 className="create-platform-header">Create Platform</h1>
        <hr className="platform-divider" />
        <h3 className="platform-info">Platform Information</h3>
        <div>
          <Input
            placeholder="Platform Name"
            size="large"
            onChange={handlePlatformNameChange}
          />
          <span style={{ fontSize: '1rem', color: 'red' }}>
            {errors.platform_name && 'Platform Name is required'}
          </span>
        </div>
        <div className="create-platform-location">
          <div className="platform-location-options">
            <Input value="Tanzania" disabled size="large" />
          </div>
          <div className="platform-location-options">
            <Select
              size="large"
              showSearch
              style={{ width: '100%' }}
              placeholder="Region"
              optionFilterProp="children"
              filterOption={(input, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={(e) => handleOnSelectChange(e)}
            >
              {region.map((item) => (
                <Option key={item.city} value={item.admin_name}>
                  {item.admin_name}
                </Option>
              ))}
            </Select>
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.platform_region && 'Region is required'}
            </span>
          </div>
        </div>
        <div>
          <h3 className="platform-info">Add Platform Leader</h3>

          <div>
            <div className="create-platform-location">
              <div className="platform-location-options">
                <Input
                  placeholder="First Name"
                  size="large"
                  onChange={handleFirstNameChange}
                />
                <span style={{ fontSize: '1rem', color: 'red' }}>
                  {errors.first_name && 'First name is required'}
                </span>
              </div>
              <div className="platform-location-options">
                <Input
                  placeholder="Surname"
                  size="large"
                  onChange={handleSurnameChange}
                />
                <span style={{ fontSize: '1rem', color: 'red' }}>
                  {errors.surname && 'Surname is required'}
                </span>
              </div>
            </div>
            <div className="create-platform-location">
              <div
                className="platform-location-options"
                style={{ width: '100%' }}
              >
                <Input
                  placeholder="Phone Number"
                  addonBefore={'+255'}
                  maxLength={9}
                  size="large"
                  onChange={handlePhoneNumberChange}
                  style={{ width: '100%' }}
                />
                <span style={{ fontSize: '1rem', color: 'red' }}>
                  {errors.phone_number && 'Phone number is required'}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2.5rem',
          }}
        >
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={loading}
            // disabled={!formState.isValid}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreatePlatformForm;
