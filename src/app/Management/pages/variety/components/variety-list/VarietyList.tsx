/* eslint-disable react/display-name */
import React, { useState } from 'react';

//Components
import { Table, Space, Divider, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { RouteComponentProps, navigate } from '@reach/router';
import Card from '../../../../../components/card';
// Props Types
// export interface VarietyListProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    name: 'Super Kyela',
    origin: 'Mbeya',
    admin: 'Mwaitege',
    country: 'Tanzania',
  },
  {
    key: '2',
    name: 'Super Kilombero',
    origin: 'Morogoro',
    admin: 'Musa John',
    country: 'Tanzania',
  },
];

const VarietyList: React.FC<RouteComponentProps> = () => {
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.variety.length - b.variety.length,
      },
    },
    {
      title: 'Admin',
      dataIndex: 'admin',
      key: 'admin',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.destination.length - b.destination.length,
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Space split={<Divider type="vertical" />}>
            <EditOutlined style={{ fontSize: '1.25rem' }} />
            <DeleteOutlined color="#ff0000" style={{ fontSize: '1.25rem' }} />
          </Space>
        </>
      ),
    },
  ];
  return (
    <Card title="Varieties" styles={{ minHeight: '90vh' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '4rem',
        }}
      >
        <Button
          type="primary"
          size="large"
          onClick={() => navigate('variety/add-variety-form')}
        >
          {' '}
          Add Variety
        </Button>
      </div>
      <Divider />
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
      />
    </Card>
  );
};

export default VarietyList;
