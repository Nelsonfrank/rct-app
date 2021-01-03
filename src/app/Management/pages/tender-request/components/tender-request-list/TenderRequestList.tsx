/* eslint-disable react/display-name */
import React, { useState } from 'react';

//Components
import { Table, Space, Divider, Tooltip, Tag } from 'antd';
import { EyeOutlined, StopOutlined, DeleteOutlined } from '@ant-design/icons';
import Card from '../../../../../components/card';
import { navigate, RouteComponentProps } from '@reach/router';
// Props Types
// export interface TenderRequestsListProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    quantity: '1000',
    grade: '1',
    variety: 'Super Kyela',
    pickupLocation: 'Mbeya Mjini',
    price: '2000/=',
    tags: ['TBS Certified', 'RCT Approved'],
  },
  {
    key: '2',
    quantity: '3000',
    grade: '1',
    variety: 'Super Ifakara',
    pickupLocation: 'Ifakara',
    price: '2000/=',
    tags: ['TBS Certified', 'RCT Approved'],
  },
];

const TenderRequestsList: React.FC<RouteComponentProps> = () => {
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

  const randomColorGenenrator = () => {
    const color = ['#2db7f5', '#f50', '#2db7f5', '#9B59B6'];
    const random = Math.floor(Math.random() * color.length);
    return color[random];
  };

  const columns = [
    {
      title: 'Quantity(kgs)',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.quantity.length - b.quantity.length,
      },
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.grade.length - b.grade.length,
      },
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
      title: 'Price (TZS/kg)',
      dataIndex: 'price',
      key: 'price',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.price.length - b.price.length,
      },
    },
    {
      title: 'Pickup Location',
      dataIndex: 'pickupLocation',
      key: 'pickupLocation',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.pickupLocation.length - b.pickupLocation.length,
      },
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => (
            <Tag color={randomColorGenenrator()} key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
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
    <Card
      title="Tender Request"
      styles={{ minHeight: '90vh', overflowY: 'auto' }}
    >
      <Divider />
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
      />
    </Card>
  );
};

export default TenderRequestsList;
