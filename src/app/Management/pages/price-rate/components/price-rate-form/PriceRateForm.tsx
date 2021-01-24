import React, { useState, useEffect } from 'react';

// dependencies
import { Input, InputNumber, DatePicker, Button, Select } from 'antd';
import { navigate, RouteComponentProps } from '@reach/router';
import { region } from './country-dial';
import { useForm, SubmitHandler } from 'react-hook-form';

// components
import BackButton from '../../../../components/back-button';
import Notification from '../../../../../components/notification';
// Styles
import './PriceRateForm.less';

//API
import { GetAllVariety, AddPriceRate } from '../../../../../../API';
// Props Types
// export interface PriceRateFormProps {}
type varietyProps = {
  key: string;
  name: string;
  platform: string;
  region: string;
  added_by: string;
}[];
const PriceRateForm: React.FC<RouteComponentProps> = () => {
  const { Option } = Select;

  // state
  const [variety, setVariety] = useState<varietyProps>([]);

  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    const getAllVariety = async () => {
      const varietyResponse = await GetAllVariety().then(
        (response) => response,
      );

      if (varietyResponse.status === 200) {
        const data = varietyResponse.data.data.map((item: any) => {
          return {
            key: item.id,
            name: item.variety_name,
          };
        });
        setVariety(data);
        // console.log(data);
      } else {
        Notification(false, 'Fail to Fetch Variety');
      }
    };
    getAllVariety();
  }, []);

  useEffect(() => {
    register('region', { required: true });
    register('variety_name', { required: true });
    register('price', { required: true });
    register('date', { required: true });
  }, [register]);

  const handleRegionChange = (value: any) => {
    setValue('region', value);
  };

  const handleVarietyChange = (value: any) => {
    setValue('variety_name', value);
  };

  const handlePriceChange = (value: any) => {
    setValue('price', value);
  };

  const handleDateChange = (event: any) => {
    setValue('date', new Date(event).toISOString());
  };

  type FormValues = {
    region: string;
    variety_name: string;
    price: string;
    date: string;
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    const payload = {
      price_rate: data.price,
      region: data.region,
      variety: data.variety_name,
      date: data.date,
    };

    const addPriceRate = async () => {
      const priceRateResponce = await AddPriceRate(payload).then(
        (response) => response,
      );

      if (priceRateResponce.status === 200) {
        Notification(true, 'Price Rate Added Successfully');
        navigate(-1);
      } else {
        Notification(
          false,
          'Failed to Add Price Rate',
          priceRateResponce.message,
        );
      }
    };
    addPriceRate();
  };
  return (
    <>
      <BackButton />
      <div className="price-rate-container">
        <div>
          <h1 className="price-rate-form-header">Add Price Rate</h1>
        </div>
        <hr />
        <form className="price-rate-inner" onSubmit={handleSubmit(onSubmit)}>
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
              onChange={handleRegionChange}
            >
              {region.map((item) => (
                <Option key={item.city} value={item.city}>
                  {item.city}
                </Option>
              ))}
            </Select>
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.region && 'Region is required'}
            </span>
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
              onChange={handleVarietyChange}
            >
              {variety.map((item) => (
                <Option key={item.key} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.variety_name && 'Variety is required'}
            </span>
          </div>
          <div className="price-rate-input">
            <InputNumber
              size="large"
              placeholder="Price (TZS/Kg)"
              style={{ width: '100%' }}
              onChange={handlePriceChange}
            />
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.price && 'Price is required'}
            </span>
          </div>

          <div className="price-rate-input">
            <Input.Group compact>
              <Input
                style={{ width: '30%' }}
                disabled
                defaultValue="Price Effect Date  (From)"
                size="large"
              />
              <DatePicker
                style={{ width: '70%' }}
                size="large"
                onChange={handleDateChange}
              />
            </Input.Group>
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.date && 'Date is required'}
            </span>
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
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PriceRateForm;
