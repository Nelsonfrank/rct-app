/* eslint-disable react/display-name */
import React from 'react';

//Components
import { Table, Space, Divider, Tooltip } from 'antd';
import { StopOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

// Props Types
// export interface LeadersTableProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    name: 'Mike Johnson',
    platform: 'Morogoro',
    country: 'Tanzania',
  },
  {
    key: '2',
    name: 'John Doe',
    platform: 'Kyela',
    country: 'Tanzania',
  },
];

const LeadersTable: React.FC = () => {
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
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.country.length - b.country.length,
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
              <Tooltip title="Edit">
                <EditOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Disable Leader">
                <StopOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Delete Leader" color={'red'}>
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
  return <Table dataSource={dataSource} columns={columns} />;
};

export default LeadersTable;
