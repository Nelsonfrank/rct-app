// dependencies
import React from 'react';
import { Tabs } from 'antd';
import Card from '../../../../../components/card';

// components
import PriceRateChats from './components/price-rate';
import TenderCharts from './components/tender-charts';
import UserCharts from './components/users';
// export interface ChartsProps {}

const { TabPane } = Tabs;

const Charts: React.FC = () => {
  return (
    <Card styles={{ width: '97%' }}>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab="Users"
          key="1"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <UserCharts />
        </TabPane>
        <TabPane tab="Tenders" key="2">
          <TenderCharts />
        </TabPane>
        <TabPane tab="Prices" key="3">
          <PriceRateChats />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default Charts;
