/* eslint-disable react/display-name */
import React, { useState } from 'react';

//Components
import { Table, Space, Divider, Tooltip } from 'antd';
import { EyeOutlined, StopOutlined, DeleteOutlined } from '@ant-design/icons';
import Card from '../../../../../components/card';
import { RouteComponentProps, navigate } from '@reach/router';

// Props Types
// export interface TenderGivenListProps {}

// placeholder data
const dataSource = [
  {
    key: '1',
    quantity: '1000',
    grade: '1',
    variety: 'Super Kyela',
    destination: 'Mbeya Mjini',
  },
  {
    key: '2',
    quantity: '3000',
    grade: '1',
    variety: 'Super Ifakara',
    destination: 'Ifakara',
  },
];

const TenderGivenList: React.FC<RouteComponentProps> = () => {
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
      title: 'Quantity(kg)',
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
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
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
            <div onClick={() => navigate('tender-given/view')}>
              <Tooltip title="View More">
                <EyeOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Disable Tender">
                <StopOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Delete Tender">
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
    <Card title="Tender Given" styles={{ minHeight: '90vh' }}>
      <Divider />
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
      />
    </Card>
  );
};

export default TenderGivenList;
