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
    <Card styles={{ width: '95.6%' }} actionBtn="View More">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tender Request" key="1">
          <TenderRequest />
        </TabPane>
        <TabPane tab="Tender Given" key="2">
          <TenderBid />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default TenderTable;
