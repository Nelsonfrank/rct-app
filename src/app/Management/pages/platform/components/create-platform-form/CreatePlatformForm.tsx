import React from 'react';

// dependence
import { Input, InputNumber, Select, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';

// components
import BackButton from '../../../../components/back-button';
// Styles
import './CreatePlatform.less';

import { region } from './country-dial';
// export interface CreatePlatformFormProps {}

const { Option } = Select;
const CreatePlatformForm: React.FC<RouteComponentProps> = () => {
  const [countrySelected, setcountrySelected] = React.useState('');

  const handleOnSelectChange = (value: any) => {
    setcountrySelected(value);
    console.log(countrySelected);
  };
  return (
    <>
      <BackButton routes="/dashboard/platforms" />
      <div className="create-platform-container">
        <h1 className="create-platform-header">Create Platform</h1>
        <hr className="platform-divider" />
        <h3 className="platform-info">Platform Information</h3>
        <div>
          <Input placeholder="Platform Name" size="large" />
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
                <Option key={item.city} value={item.city}>
                  {item.city}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <h3 className="platform-info">Add Platform Leader</h3>

          <div>
            <div className="create-platform-location">
              <div className="platform-location-options">
                <Input placeholder="First Name" size="large" />
              </div>
              <div className="platform-location-options">
                <Input placeholder="Surname" size="large" />
              </div>
            </div>
            <div className="create-platform-location">
              <div
                className="platform-location-options"
                style={{ width: '100%' }}
              >
                <InputNumber
                  placeholder="Phone Number"
                  size="large"
                  style={{ width: '100%' }}
                />
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
          <Button size="large" type="primary">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreatePlatformForm;
