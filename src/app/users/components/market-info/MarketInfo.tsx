// dependencies
import React from 'react';
import { Table } from 'antd';
import { RouteComponentProps } from '@reach/router';

const dataSource = [
  {
    key: '1',
    serial: '1',
    variety: 'Kyela',
    price: '1,200/=',
  },
  {
    key: '2',
    serial: '2',
    variety: 'Shinyanga',
    price: '1,000/=',
  },
];

const columns = [
  {
    title: 'S/N',
    dataIndex: 'serial',
    key: 'serial',
  },
  {
    title: 'Variety',
    dataIndex: 'variety',
    key: 'variety',
  },
  {
    title: 'Price(TZS/kgs)',
    dataIndex: 'price',
    key: 'price',
  },
];

// export interface MarketInfoProps {}

const MarketInfo: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default MarketInfo;
