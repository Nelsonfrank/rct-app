/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';

//Components
import { Table, Space, Divider, Tooltip, Button } from 'antd';
import { StopOutlined, DeleteOutlined } from '@ant-design/icons';
import { RouteComponentProps, navigate } from '@reach/router';
import Card from '../../../../../components/card';
import Notification from '../../../../../components/notification';
//API
import { GetAllVariety } from '../../.././../../../API';
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

type varietyProps = {
  key: string;
  name: string;
  platform: string;
  region: string;
  added_by: string;
}[];
const VarietyList: React.FC<RouteComponentProps> = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [variety, setVariety] = useState<varietyProps>([]);
  useEffect(() => {
    const getAllVariety = async () => {
      const varietyResponse = await GetAllVariety().then(
        (response) => response,
      );

      if (varietyResponse.status === 200) {
        const data = varietyResponse.data.data.map((item: any) => {
          return {
            key: item.id,
            name: item.variety_name,
            platform: item.platform_name,
            region: item.platform_region,
            added_by: item.user_name,
          };
        });
        setVariety(data);
        // console.log(data);
      } else {
        Notification(false, 'Fail to Fetch Variety');
      }
    };
    getAllVariety();
  }, []);
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
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.region.length - b.region.length,
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
        dataSource={variety}
        columns={columns}
      />
    </Card>
  );
};

export default VarietyList;
