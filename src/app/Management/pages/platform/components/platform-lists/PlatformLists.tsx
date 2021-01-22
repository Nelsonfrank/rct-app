/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';

//Components
import { Table, Space, Divider, Tooltip, Button } from 'antd';
import { StopOutlined, DeleteOutlined } from '@ant-design/icons';
import Card from '../../../../../components/card';
import { navigate, RouteComponentProps } from '@reach/router';
import { GetAllPlatform } from '../../../../../../API';
import Notification from '../../../../../components/notification';
// Props Types
// export interface PlatformListProps {}

const PlatformList: React.FC<RouteComponentProps> = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [platforms, setPlatforms] = useState([]);

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

  useEffect(() => {
    const getAllPlatform = async () => {
      const result = await GetAllPlatform().then((response) => response);
      if (result.status === 200) {
        setPlatforms(result.data.data.platform);
      } else {
        Notification(false, 'Failed to fetch Platform');
      }
      console.log(result);
    };
    getAllPlatform();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'platform_name',
      key: 'platform_name',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.platform_name.length - b.platform_name.length,
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
      dataIndex: 'platform_region',
      key: 'platform_region',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.platform_region.length - b.platform_region.length,
      },
    },
    {
      title: 'Contacts',
      dataIndex: 'phone_number',
      key: 'phone_number',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.phone_number.length - b.phone_number.length,
      },
    },
    {
      title: 'Platform Leader',
      dataIndex: 'user_name',
      key: 'user_name',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.user_name.length - b.user_name.length,
      },
    },
    {
      title: 'Number Of Member',
      dataIndex: 'numberOfMembers',
      key: 'numberOfMembers',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.numberOfMembers.length - b.numberOfMembers.length,
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
    <Card
      title="Platform List"
      styles={{ minHeight: '90vh', overflowY: 'auto' }}
    >
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
        dataSource={platforms}
        columns={columns}
      />
    </Card>
  );
};

export default PlatformList;
