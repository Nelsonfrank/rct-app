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
    platform: 'Mbeya',
    added_by: 'Juma Salehe',
  },
  {
    key: '2',
    name: 'Super Kilombero',
    platform: 'Morogoro',
    added_by: 'Alfred John',
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
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.platform.length - b.platform.length,
      },
    },
    {
      title: 'Added By',
      dataIndex: 'added_by',
      key: 'added_by',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.added_by.length - b.added_by.length,
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
    <Card title="Varieties" styles={{ minHeight: '90vh', overflowY: 'auto' }}>
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
