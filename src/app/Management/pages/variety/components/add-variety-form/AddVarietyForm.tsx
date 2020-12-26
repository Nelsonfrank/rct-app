import React from 'react';

// dependencies
import { Input, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';

// Styles
import './AddVarietyForm.less';

// Props Types
// export interface PriceRateFormProps {}

const AddVarietyForm: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <div className="add-variety-container">
        <div>
          <h1 className="add-variety-form-header">Add Variety form</h1>
        </div>
        <hr />
        <div className="add-variety-inner">
          <div className="add-variety-input">
            <Input size="large" placeholder="Name" />
          </div>
          <div className="add-variety-input">
            <Input size="large" placeholder="Origin Region" />
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

export default AddVarietyForm;
