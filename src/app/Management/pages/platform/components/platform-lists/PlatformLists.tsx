/* eslint-disable react/display-name */
import React, { useState } from 'react';

//Components
import { Table, Space, Divider, Tooltip, Button } from 'antd';
import { EyeOutlined, StopOutlined, DeleteOutlined } from '@ant-design/icons';
import Card from '../../../../../components/card';
import { navigate, RouteComponentProps } from '@reach/router';
// Props Types
// export interface PlatformListProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    name: 'Kambarage Group',
    country: 'Tanzania',
    region: 'Mara',
    leader: 'John Joshua',
    contacts: '+255 689 302 932',
    memberno: '120',
  },
  {
    key: '2',
    name: 'Mwanza Association',
    country: 'Tanzania',
    region: 'Mwanza',
    leader: 'Alfred Jumanne',
    contacts: '+255 682 098 123',
    memberno: '300',
  },
];

const PlatformList: React.FC<RouteComponentProps> = () => {
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

  const handleAddPlatform = () => {
    navigate('platforms/add-platform-form');
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.name.length - b.name.length,
      },
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.country.length - b.country.length,
      },
    },
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
      title: 'Contacts',
      dataIndex: 'contacts',
      key: 'contacts',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.contacts.length - b.contacts.length,
      },
    },
    {
      title: 'Platform Leader',
      dataIndex: 'leader',
      key: 'leader',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.leader.length - b.leader.length,
      },
    },
    {
      title: 'Number Of Member',
      dataIndex: 'memberno',
      key: 'memberno',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.memberno.length - b.memberno.length,
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Space split={<Divider type="vertical" />}>
            <div onClick={() => navigate('tender-request/view')}>
              <Tooltip title="View More">
                <EyeOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Disable Request">
                <StopOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Delete Request">
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
    <Card title="Platform List" styles={{ minHeight: '90vh' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '4rem',
        }}
      >
        <Button type="primary" size="large" onClick={handleAddPlatform}>
          {' '}
          Add Platform
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

export default PlatformList;
