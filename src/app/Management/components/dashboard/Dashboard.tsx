import React from 'react';
//Components
import Card from '../../../components/card';
import { Tabs } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
//Styles
import './Dashboard.less';

//Types
export interface DashboardProps {
  title?: string;
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const { TabPane } = Tabs;

const Chart = (
  data: { name: string; uv: number; pv: number; amt: number }[],
) => (
  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
);

const Dashboard: React.FC<DashboardProps> = () => {
  const callback = (key: string) => {
    console.log(key);
  };
  return (
    <div>
      <div className="dashboard">
        <Card
          styles={{ width: 250 }}
          title="235,000"
          subtitle="Total Tons"
          actionBtn="View More"
        />
        <Card
          styles={{ width: 250 }}
          title="123,456"
          subtitle="Total Seller"
          actionBtn="View More"
        />
        <Card
          styles={{ width: 250 }}
          title="432,578"
          subtitle="Total Buyers"
          actionBtn="View More"
        />
        <Card
          styles={{ width: 250 }}
          title="17,000"
          subtitle="Total Tender"
          actionBtn="View More"
        />
        <Card
          styles={{ width: 250 }}
          title="17,000"
          subtitle="Total Tender"
          actionBtn="View More"
        />
      </div>

      <Card>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Users" key="1">
            {Chart(data)}
          </TabPane>
          <TabPane tab="Tenders" key="2">
            {Chart(data)}
          </TabPane>
          <TabPane tab="Prices" key="3">
            {Chart(data)}
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Dashboard;
