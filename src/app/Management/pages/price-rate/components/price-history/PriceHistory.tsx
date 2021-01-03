/* eslint-disable react/display-name */
import React from 'react';

// dependencies
import { Table, Divider } from 'antd';
import Card from '../../../../../components/card';
import { RouteComponentProps } from '@reach/router';

//Props Type
// export interface PriceHistoryListProps {}

const dataSource = [
  {
    key: '1',
    variety: 'Super Kyela',
    price: '2000/=',
    region: 'Mbeya',
    startDate: 'Jan 26, 2020',
    endDate: 'Jan 26, 2021',
  },
  {
    key: '2',
    region: 'Shinyanga',
    variety: 'Super Shinyanga',
    price: '2200/=',
    startDate: 'Jan 26, 2020',
    endDate: 'Feb 25 2021',
  },
  {
    key: '3',
    region: 'Singida',
    variety: 'Super Singida',
    price: '1800/=',
    startDate: 'Jan 26, 2020',
    endDate: 'Feb 25 2021',
  },
  {
    key: '4',
    variety: 'Super Kyela',
    price: '2200/=',
    region: 'Mbeya',
    startDate: 'Jan 26, 2021',
    endDate: 'N/A',
  },
];

const columns = [
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.region.length - b.region.length,
    },
  },
  {
    title: 'Variety',
    dataIndex: 'variety',
    key: 'variety',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.variety.length - b.variety.length,
    },
  },
  {
    title: 'Price (TZS)',
    dataIndex: 'price',
    key: 'price',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.price.length - b.price.length,
    },
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.startDate.length - b.startDate.length,
    },
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.endDate.length - b.endDate.length,
    },
  },
];

const PriceHistoryList: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Card
        title="Price History"
        styles={{ minHeight: '90vh', overflowY: 'auto' }}
      >
        <Divider />
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

export default PriceHistoryList;
