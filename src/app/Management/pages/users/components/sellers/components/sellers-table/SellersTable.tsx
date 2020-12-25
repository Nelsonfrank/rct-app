import React, { useState } from 'react';

//Components
import { Table, Space, Button } from 'antd';

const { Column, ColumnGroup } = Table;

// Props Types
// export interface SellersTableProps {}

// placeholder data
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    phone: '07812121212',
    platform: 'mbeya',
    leader: 'Mr.John Doe',
    location: 'Mbeya',
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    phone: '07812121212',
    platform: 'mbeya',
    leader: 'Mr.John Doe',
    location: 'Mbeya',
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    phone: '07812121212',
    platform: 'mbeya',
    leader: 'Mr.John Doe',
    location: 'Mbeya',
  },
];

const SellersTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleOnRowChange = (selectedRowKey: any) => {
    setSelectedRowKeys(selectedRowKey);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: handleOnRowChange,
  };
  return (
    <Table dataSource={data} rowSelection={rowSelection}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Phone Number" dataIndex="phone" key="phone" />
      <Column
        title="Platform"
        dataIndex="platform"
        key="platform"
        // eslint-disable-next-line
        sorter={(a: any, b: any) => a.platform - b.platform}
      />
      <Column title="Platform Leader" dataIndex="leader" key="leader" />
      <Column
        title="Location"
        dataIndex="location"
        key="location"
        // eslint-disable-next-line
        sorter={(a: any, b: any) => a.location - b.location}
      />

      <Column
        title="Action"
        key="action"
        render={() => (
          <Space size="middle">
            <Button type="ghost">Disable</Button>
            <Button danger>Delete</Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default SellersTable;
