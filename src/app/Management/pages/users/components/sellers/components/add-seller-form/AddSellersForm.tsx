//dependencies
import React, { useEffect, useState } from 'react';
import { Input, Divider, Radio, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
  const [idFileList, setIdFileState] = useState<any>([]);
  const [TBSFileList, setTBSFileState] = useState<any>([]);
  useEffect(() => {
    handlePickCountryDial(country, countrySelected);
  }, [countrySelected]);

  const handlePickCountryDial = (countryList: any, countryPickes: string) => {
    const value = countryList.filter(
      (item: any) => item.code === countryPickes,
    );
    const item =
      Array.isArray(value) && value.length >= 1 ? value[0].dial_code : '';
    setcountryCode(item);
  };

  const handleOnSelectChange = (value: any) => {
    setcountrySelected(value);
  };

  const Idprops = {
    name: 'file',
    onRemove: (file: any) => {
      const index = idFileList.indexOf(file);
      const newFileList = idFileList.slice();
      newFileList.splice(index, 1);
      setIdFileState(newFileList);
    },
    beforeUpload: (file: any) => {
      setIdFileState([...idFileList, file]);
      return false;
    },
    idFileList,
  };
  const TBSprops = {
    name: 'file',
    onRemove: (file: any) => {
      const index = TBSFileList.indexOf(file);
      const newFileList = TBSFileList.slice();
      newFileList.splice(index, 1);
      setTBSFileState(newFileList);
    },
    beforeUpload: (file: any) => {
      setTBSFileState([...TBSFileList, file]);
      return false;
    },
    TBSFileList,
  };
  return (
    <div style={{ minHeight: '90vh', marginTop: '2rem' }}>
      <div className="form-header">
        <h1>Add Sellers</h1>
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
            value="Tanzania"
            disabled
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
            <Select
              style={{ width: '100%' }}
              size="large"
              placeholder="Platform"
            >
              <Option value="kyela">Mbeya Association</Option>
              <Option value="shinganya">Shinyanga Association</Option>
              <Option value="Magugu">Arusha Association</Option>
              <Option value="Kilombero">Morogoro Association</Option>
            </Select>
          </div>
        </div>
        <div className="add-seller-input">
          <Input
            addonBefore={countryCode || '+255'}
            placeholder="PhoneNumber"
            size="large"
          />
        </div>
        <div className="add-seller-input">
          <Select
            style={{ width: '100%' }}
            size="large"
            placeholder="Experience"
          >
            <Option value="0-5">0 - 5 years</Option>
            <Option value="6-10">6 - 10 years</Option>
            <Option value="11-20">11 - 20 years</Option>
            <Option value="21+">21 years - above</Option>
          </Select>
        </div>
        <div className="add-seller-input">
          <Select
            style={{ width: '100%' }}
            size="large"
            placeholder="Applicant Category"
          >
            <Option value="individual">Individual</Option>
            <Option value="association">Association</Option>
            <Option value="company">Company</Option>
          </Select>
        </div>
        <div className="add-seller-input">
          <Select
            style={{ width: '100%' }}
            size="large"
            placeholder="Scale Status"
          >
            <Option value="small">Small</Option>
            <Option value="medium">Medium</Option>
            <Option value="large">Large</Option>
          </Select>
        </div>
        <div className="add-seller-input">
          <Input placeholder="P.O Box Address" size="large" />
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
        <div className="add-sellers-name">
          <div className="add-sellers-name_item">
            <Input
              placeholder="TBS Certification Number"
              size="large"
              disabled={!isTbsCertified}
            />
          </div>
          <div className="add-sellers-name_item">
            <Upload {...TBSprops} style={{ width: '100%' }} accept="image/*">
              <Button
                icon={<UploadOutlined />}
                size="large"
                disabled={!isTbsCertified}
              >
                Attach TBS Certificate Image
              </Button>
            </Upload>
          </div>
        </div>
        <div className="add-seller-input">
          <Select
            style={{ width: '100%' }}
            size="large"
            placeholder="Select Your Identification"
          >
            <Option value="voter">Voter Id</Option>
            <Option value="nida">National Id</Option>
            <Option value="driving-license">Driving License Id</Option>
          </Select>
        </div>
        <div className="add-sellers-name">
          <div className="add-sellers-name_item">
            <Input placeholder="Add Id Number" size="large" />
          </div>
          <div className="add-sellers-name_item">
            <Upload {...Idprops} style={{ width: '100%' }} accept="image/*">
              <Button icon={<UploadOutlined />} size="large">
                Attach Identification Image
              </Button>
            </Upload>
          </div>
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
