import React from 'react';
//Components
import { Tabs, Table } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { RouteComponentProps } from '@reach/router';
import Card from '../../../components/card';
import TenderTable from './components/Tender-table';
//Styles
import './Dashboard.less';

//Types
export interface DashboardProps extends RouteComponentProps {
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

const price = [
  {
    id: '1',
    variety: 'Kiyela',
    price: '2000',
    region: 'Mbeya',
  },
  {
    id: '2',
    variety: 'Mbeya',
    price: '2500',
    region: 'Mbeya',
  },
  {
    id: '3',
    variety: 'Shinyanga',
    price: '2300',
    region: 'Shinyanga',
  },
  {
    id: '4',
    variety: 'Magugu',
    price: '2300',
    region: 'Arusha',
  },
  {
    id: '5',
    variety: 'Morogoro',
    price: '2300',
    region: 'Mbeya',
  },
  {
    id: '6',
    variety: 'Mbeya',
    price: '2300',
    region: 'Mbeya',
  },
  {
    id: '7',
    variety: 'Kilombero',
    price: '2300',
    region: 'Morogoro',
  },
  {
    id: '8',
    variety: 'Ruvuma',
    price: '2300',
    region: 'Ruvuma',
  },
];
const PriceRate = (
  data: { variety: string; price: string; region: string }[],
  style?: React.CSSProperties,
) => {
  const columns = [
    {
      title: 'S/N',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Variety',
      dataIndex: 'variety',
      key: 'variety',
    },
    {
      title: 'Price (TZS)',
      dataIndex: 'price',
      key: 'price',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.price - b.price,
      },
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.region.length - b.region.length,
      },
    },
  ];
  return (
    <Card
      styles={{ ...style }}
      actionBtn="View More"
      actionBtnRoute="dashboard/variety"
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <h2>Today Price Rate(Tzs/Kg)</h2>
        </div>
        <Table dataSource={price} columns={columns} pagination={false} />
      </div>
    </Card>
  );
};

const Dashboard: React.FC<DashboardProps> = () => {
  const callback = (key: string) => {
    console.log(key);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <Card
          styles={{ width: 250 }}
          title="20"
          subtitle="Total Platform"
          actionBtn="View More"
          actionBtnRoute="dashboard/platforms"
        />
        <Card
          styles={{ width: 250 }}
          title="123,456"
          subtitle="Total Seller"
          actionBtn="View More"
          actionBtnRoute="dashboard/users/sellers"
        />
        <Card
          styles={{ width: 250 }}
          title="432,578"
          subtitle="Total Buyers"
          actionBtn="View More"
          actionBtnRoute="dashboard/users/buyers"
        />
        <Card
          styles={{ width: 250 }}
          title="17,000"
          subtitle="Total Tender Request"
          actionBtn="View More"
          actionBtnRoute="dashboard/tender-request"
        />
        <Card
          styles={{ width: 250 }}
          title="17,000"
          subtitle="Total Tender Given"
          actionBtn="View More"
          actionBtnRoute="dashboard/tender-given"
        />
      </div>
      <div className="dashboard--section">
        <Card styles={{ width: '65%' }}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane
              tab="Users"
              key="1"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
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
        {PriceRate(price, { width: '30%' })}
      </div>
      <div className="dashboard--section">
        <TenderTable />
      </div>
    </div>
  );
};

export default Dashboard;
