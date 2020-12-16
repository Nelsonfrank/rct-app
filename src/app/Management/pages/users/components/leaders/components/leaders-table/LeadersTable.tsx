import React from 'react';

//Components
import { Table } from 'antd';

// Props Types
// export interface LeadersTableProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    buyer: 'Mike Johnson',
    variety: 'Morogoro',
    amount: 32,
    destination: 'Dar es salaam',
  },
  {
    key: '2',
    buyer: 'John Doe',
    variety: 'Kyela',
    amount: 20,
    destination: 'Nairobi',
  },
];

const LeadersTable: React.FC = () => {
  const columns = [
    {
      title: 'Buyer',
      dataIndex: 'buyer',
      key: 'buyer',
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
  return <Table dataSource={dataSource} columns={columns} />;
};

export default LeadersTable;
