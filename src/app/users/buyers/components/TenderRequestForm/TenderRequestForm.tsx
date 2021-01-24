import React from 'react';

// Component
import { Input, Select, Button, InputNumber, Divider } from 'antd';
import { RouteComponentProps } from '@reach/router';
//Styles
import './TenderRequestForm.less';
// export interface TenderRequestProps {}

const TenderRequest: React.FC<RouteComponentProps> = () => {
  const { Option } = Select;

  return (
    <div>
      <div className="tenderrequest_container">
        <div className="request-quantity_input">
          <h3>Give Tender</h3>
          <Input
            size="large"
            placeholder="RICE"
            style={{ width: '100%' }}
            disabled
          />
        </div>
        <div className="request-quantity_input">
          <h3>Quantity Needed</h3>
          <InputNumber
            size="large"
            placeholder="Quantity in Kg"
            style={{ width: '100%' }}
          />
        </div>
        <div className="select-option">
          <div className="option-select">
            <Select size="large" defaultValue="grade" style={{ width: '100%' }}>
              <Option value="grade">Select Grade</Option>
              <Option value="one">1</Option>
              <Option value="two">2</Option>
              <Option value="three">3</Option>
            </Select>
          </div>
          <div className="option-select">
            <Select
              size="large"
              defaultValue="variety"
              style={{ width: '100%' }}
            >
              <Option value="variety">Select Variety</Option>
              <Option value="kyela">Kyela</Option>
              <Option value="mbeya">Mbeya</Option>
              <Option value="shinyanga">Shinyanga</Option>
            </Select>
          </div>
        </div>
        <div className="request-textarea">
          <Input.TextArea
            value={''}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            placeholder="Other Necessary Details"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
        <div className="request-action_btn">
          <Button size="large" type="primary">
            Request Tender
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TenderRequest;
