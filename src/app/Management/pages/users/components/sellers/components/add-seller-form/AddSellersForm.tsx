//dependencies
import React, { useEffect, useState } from 'react';
import { Input, Divider, Radio, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { Select } from 'antd';
import { country, region } from './country-dial';
const { Option } = Select;

// styles
import './AddSellersForm.less';

const AddSellersForm: React.FC<RouteComponentProps> = () => {
  const [countrySelected, setcountrySelected] = useState('');
  const [countryCode, setcountryCode] = useState();
  const [isTbsCertified, setisTbsCertified] = useState(false);

  useEffect(() => {
    handlePickCountryDial(country, countrySelected);
  }, [countrySelected]);

  const handlePickCountryDial = (countryList: any, countryPickes: string) => {
    const value = countryList.filter(
      (item: any) => item.code === countryPickes,
    );
    // console.log(value);
    const item =
      Array.isArray(value) && value.length >= 1 ? value[0].dial_code : '';
    setcountryCode(item);
  };

  const handleOnSelectChange = (value: any) => {
    // e.preventDefault();
    setcountrySelected(value);
  };

  return (
    <div style={{ minHeight: '90vh', marginTop: '2rem' }}>
      <div className="form-header">
        <h1>Add Sellers Form</h1>
      </div>
      <div className="add-seller-form-container">
        <Divider style={{ marginTop: 0 }} />
        <div className="add-sellers-name">
          <div className="add-sellers-name_item">
            <Input placeholder="First Name" size="large" />
          </div>
          <div className="add-sellers-name_item">
            <Input placeholder="Last Name" size="large" />
          </div>
        </div>
        <div className="add-seller-input">
          <Select
            size="large"
            showSearch
            style={{ width: '100%' }}
            placeholder="Select Country"
            optionFilterProp="children"
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={(e) => handleOnSelectChange(e)}
          >
            {country.map((item) => (
              <Option key={item.code} value={item.code}>
                {item.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="add-seller-input">
          <Input
            addonBefore={countryCode || '+255'}
            placeholder="PhoneNumber"
            size="large"
          />
        </div>
        <div className="add-sellers-name">
          <div className="add-sellers-name_item">
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
          <div className="add-sellers-name_item">
            <Input placeholder="Platform" size="large" />
          </div>
        </div>
        <div className="add-seller-input">
          <Select
            style={{ width: '100%' }}
            size="large"
            placeholder="Experience"
          >
            <Option value="jack">0 - 11 years</Option>
            <Option value="lucy">12 - 20 years</Option>
            <Option value="Yiminghe">20 years - above</Option>
          </Select>
        </div>
        <div className="add-seller-input">
          <Select
            style={{ width: '100%' }}
            size="large"
            placeholder="Applicant Category"
          >
            <Option value="individual">Individual</Option>
            <Option value="platform">Platform</Option>
            <Option value="association">Association</Option>
          </Select>
        </div>
        <div className="add-seller-input">
          <Input placeholder="Website" size="large" />
        </div>
        <div className="add-seller-input">
          <p style={{ marginLeft: '0.5rem', marginBottom: '0rem' }}>
            TBS Certified?
          </p>
          <Radio.Group
            size="large"
            onChange={() => setisTbsCertified(!isTbsCertified)}
            value={isTbsCertified}
          >
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </div>
        <div className="add-seller-input">
          <Input
            placeholder="User Batch Number"
            size="large"
            disabled={!isTbsCertified}
          />
        </div>
        <div className="add-seller-input">
          <Button type="primary" size="large">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddSellersForm;
