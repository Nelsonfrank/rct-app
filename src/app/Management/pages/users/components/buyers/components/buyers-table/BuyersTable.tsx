import React, { useState } from 'react';

//Components
import { Table } from 'antd';

// Props Types
// export interface BuyersTableProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    firstName: 'Mike',
    lastName: 'Johnson',
    phoneNumber: '+255689300100',
    location: 'Dar es salaam',
  },
  {
    key: '2',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+255689101300',
    location: 'Nairobi',
  },
];

const BuyersTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.variety.length - b.variety.length,
      },
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.destination.length - b.destination.length,
      },
    },
  ];
  return (
    <Table
      rowSelection={rowSelection}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default BuyersTable;
