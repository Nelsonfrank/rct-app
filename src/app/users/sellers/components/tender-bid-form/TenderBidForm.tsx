import React from 'react';

// Component
import { Input, Select, Button, InputNumber, Divider, Radio } from 'antd';
import { RouteComponentProps } from '@reach/router';
//Styles
import './TenderBidForm.less';

// export interface TenderBidProps {}

const TenderBid: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <div>
        <div>
          <h3 className="Bid-link-direction">
            Home <span>{'>'}</span> Buyers {'>'} Post Tender
          </h3>
        </div>
        <Divider
          style={{
            margin: '0  0 0.5rem 0 ',
            borderTop: '2px solid rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
      <div className="tenderBid_container">
        <div className="Bid-quantity_input">
          <h3>Request Tender</h3>
          <Input
            size="large"
            placeholder="RICE"
            style={{ width: '100%' }}
            disabled
          />
        </div>
        <div className="Bid-quantity_input">
          <h3>Quantity Needed</h3>
          <InputNumber
            size="large"
            placeholder="Quantity in Kg"
            style={{ width: '100%' }}
          />
        </div>
        <div className="option-select_bid">
          <h3>Variety</h3>
          <Select size="large" defaultValue="variety" style={{ width: '100%' }}>
            <Select.Option value="variety">Select Variety</Select.Option>
            <Select.Option value="kyela">Kyela</Select.Option>
            <Select.Option value="mbeya">Mbeya</Select.Option>
            <Select.Option value="shinyanga">Shinyanga</Select.Option>
          </Select>
        </div>
        <div>
          <h3>Is it graded?</h3>
          <Radio.Group name="radiogroup" defaultValue={false}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>

          <div className="option-select_bid">
            <Select size="large" defaultValue="grade" style={{ width: '100%' }}>
              <Select.Option value="grade">Select Grade</Select.Option>
              <Select.Option value="one">One</Select.Option>
              <Select.Option value="two">Two</Select.Option>
              <Select.Option value="three">Three</Select.Option>
            </Select>
          </div>
        </div>
        <div className="option-select_bid">
          <h3>Is it Batch Certified?</h3>
          <Radio.Group name="radiogroup" defaultValue={false}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
          <div>
            <Input
              size="large"
              placeholder="Add Batch Certified Number"
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="Bid-quantity_input">
          <h3>Pickup Location</h3>
          <Input
            size="large"
            placeholder="Add Pickup Location"
            style={{ width: '100%' }}
          />
        </div>

        <div className="Bid-textarea">
          <Input.TextArea
            value={''}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            placeholder="Other Necessary Details"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </div>
        <div className="Bid-action_btn">
          <Button size="large" type="primary">
            Post Tender
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TenderBid;
