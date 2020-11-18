import React from 'react';

//Components
import { Table } from 'antd';

//Types
// export interface TenderRequestProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    amount: 32,
    variety: 'Morogoro',
    destination: 'Dar es salaam',
  },
  {
    key: '2',
    name: 'John Doe',
    amount: 20,
    variety: 'Kyela',
    destination: 'Nairobi',
  },
];

const TenderRequest: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Variety',
      dataIndex: 'variety',
      key: 'variety',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.variety.length - b.variety.length,
      },
    },
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.destination.length - b.destination.length,
      },
    },
  ];
  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default TenderRequest;
