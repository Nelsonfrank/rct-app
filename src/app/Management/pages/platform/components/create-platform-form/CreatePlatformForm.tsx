import React from 'react';

// dependence
import { Input, InputNumber, Select, Radio, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';
// Styles
import './CreatePlatform.less';
// export interface CreatePlatformFormProps {}

const { Option } = Select;
const CreatePlatformForm: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <div className="create-platform-container">
        <h1 className="create-platform-header">Create Platform Form</h1>
        <hr className="platform-divider" />
        <h3>Platform Information</h3>
        <hr className="platform-divider" />
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
              defaultValue="region"
              style={{ width: '100%' }}
            >
              <Option value="region">Region</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div>
          <h3>Add Platform Leader</h3>
          <hr className="platform-divider" />

          <div>
            <div className="create-platform-location">
              <div className="platform-location-options">
                <Input placeholder="First Name" size="large" />
              </div>
              <div className="platform-location-options">
                <Input placeholder="Surname Name" size="large" />
              </div>
            </div>
            <div className="create-platform-location">
              <div className="platform-location-options">
                <InputNumber
                  placeholder="Phone Number"
                  size="large"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="platform-location-options">
                <Radio.Group>
                  <Radio value={'male'}>Male</Radio>
                  <Radio value={'female'}>Female</Radio>
                </Radio.Group>
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
