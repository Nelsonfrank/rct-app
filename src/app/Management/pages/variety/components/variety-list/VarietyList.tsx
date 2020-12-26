/* eslint-disable react/display-name */
import React, { useState } from 'react';

//Components
import { Table, Space, Divider, Tooltip, Button } from 'antd';
import { StopOutlined, DeleteOutlined } from '@ant-design/icons';
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
            <div>
              <Tooltip title="Disable Buyer">
                <StopOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Delete Buyer" color={'red'}>
                <DeleteOutlined
                  style={{ fontSize: '1.25rem', color: '#ff0000' }}
                />
              </Tooltip>
            </div>
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