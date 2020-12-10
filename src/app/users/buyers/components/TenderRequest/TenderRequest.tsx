import React from 'react';

// Component
import { Input, Select, Button, InputNumber, Divider } from 'antd';

//Styles
import './TenderRequest.less';
// export interface TenderRequestProps {}

const TenderRequest: React.FC = () => {
  const { Option } = Select;

  return (
    <div>
      <div>
        <div>
          <h3 className="link-direction">
            Home <span>{'>'}</span> Shop By Seller {'>'} Give Tender
          </h3>
        </div>
        <Divider
          style={{
            margin: '0  0 0.5rem 0 ',
            borderTop: '2px solid rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
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
          <div className="option-select">
            <Select size="large" defaultValue="grade" style={{ width: '100%' }}>
              <Option value="grade">Select Grade</Option>
              <Option value="one">One</Option>
              <Option value="two">Two</Option>
              <Option value="three">Three</Option>
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
