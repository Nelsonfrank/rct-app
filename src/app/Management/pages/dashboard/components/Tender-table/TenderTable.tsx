import React from 'react';
import Card from '../../../../../components/card';
import { Tabs } from 'antd';
//Components
import TenderRequest from './components/tender-request';
import TenderBid from './components/tender-bid';

//Interface
// export interface TenderTableProps {}

const { TabPane } = Tabs;
const TenderTable: React.FC = () => {
  return (
    <Card styles={{ width: '95.6%' }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tender Request" key="1">
          <Card
            styles={{ width: '100%' }}
            actionBtn="View More"
            actionBtnRoute="dashboard/tender-request"
          >
            <TenderRequest />
          </Card>
        </TabPane>
        <TabPane tab="Tender Given" key="2">
          <Card
            styles={{ width: '100%' }}
            actionBtn="View More"
            actionBtnRoute="dashboard/tender-given"
          >
            <TenderBid />
          </Card>
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default TenderTable;
