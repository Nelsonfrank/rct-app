import React, { useState } from 'react';

// dependencies
import { Input, InputNumber, DatePicker, Button, Select } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { region, variety } from './country-dial';

// Styles
import './PriceRateForm.less';

// Props Types
// export interface PriceRateFormProps {}

const PriceRateForm: React.FC<RouteComponentProps> = () => {
  const { Option } = Select;

  const [countrySelected, setcountrySelected] = useState('');

  const handleOnSelectChange = (value: any) => {
    setcountrySelected(value);
  };

  return (
    <>
      <div className="price-rate-container">
        <div>
          <h1 className="price-rate-form-header">Add Price Rate</h1>
        </div>
        <hr />
        <div className="price-rate-inner">
          <div className="price-rate-input">
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
          <div className="price-rate-input">
            <Select
              size="large"
              showSearch
              style={{ width: '100%' }}
              placeholder="Variety"
              optionFilterProp="children"
              filterOption={(input, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={(e) => handleOnSelectChange(e)}
            >
              {variety.map((item) => (
                <Option key={item.name} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="price-rate-input">
            <InputNumber
              size="large"
              placeholder="Price"
              style={{ width: '100%' }}
            />
          </div>

          <div className="price-rate-input">
            <Input.Group compact>
              <Input
                style={{ width: '30%' }}
                disabled
                defaultValue="Price Effect Date  (From)"
                size="large"
              />
              <DatePicker style={{ width: '70%' }} size="large" />
            </Input.Group>
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
              style={{
                padding: '1.33rem 1.875rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRateForm;
