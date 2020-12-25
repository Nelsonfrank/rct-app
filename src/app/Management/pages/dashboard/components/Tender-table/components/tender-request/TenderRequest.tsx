import React from 'react';

//Components
import { Table } from 'antd';

//Types
// export interface TenderRequestProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    seller: 'Mike Johnson',
    variety: 'Kilombero',
    amount: 32,
    location: 'Dar es salaam',
  },
  {
    key: '2',
    seller: 'John Doe',
    variety: 'Kyela',
    amount: 20,
    location: 'Mbeya',
  },
  {
    key: '3',
    seller: 'Mike Johnson',
    variety: 'Kilombero',
    amount: 32,
    location: 'Dar es salaam',
  },
  {
    key: '4',
    seller: 'John Doe',
    variety: 'Kyela',
    amount: 20,
    location: 'Mbeya',
  },
  {
    key: '5',
    seller: 'Mike Johnson',
    variety: 'Kilombero',
    amount: 32,
    location: 'Dar es salaam',
  },
];

const TenderRequest: React.FC = () => {
  const columns = [
    {
      title: 'Seller',
      dataIndex: 'seller',
      key: 'seller',
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
      title: 'Amount(Tonnes)',
      dataIndex: 'amount',
      key: 'amount',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.amount - b.amount,
      },
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.location.length - b.location.length,
      },
    },
  ];
  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default TenderRequest;
