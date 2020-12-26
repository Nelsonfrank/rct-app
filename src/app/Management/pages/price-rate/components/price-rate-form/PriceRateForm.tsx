import React from 'react';

// dependencies
import { Input, InputNumber, DatePicker, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';

// Styles
import './PriceRateForm.less';

// Props Types
// export interface PriceRateFormProps {}

const PriceRateForm: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <div className="price-rate-container">
        <div>
          <h1 className="price-rate-form-header">Add Price Rate form</h1>
        </div>
        <hr />
        <div className="price-rate-inner">
          <div className="price-rate-input">
            <Input size="large" placeholder="Variety" />
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
                defaultValue="Date"
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
