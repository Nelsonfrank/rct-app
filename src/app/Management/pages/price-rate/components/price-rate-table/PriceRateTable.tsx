/* eslint-disable react/display-name */
import React from 'react';

// dependencies
import { Table, Button, Tooltip, Divider, Space } from 'antd';
import { StopOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Card from '../../../../../components/card';
import { RouteComponentProps, navigate } from '@reach/router';

//Styles
import './PriceRateTable.less';

//Props Type
// export interface PriceRateTableProps {}

const dataSource = [
  {
    key: '1',
    variety: 'Super Kyela',
    price: '2000/=',
    region: 'Mbeya',
    admin: 'John Alfred',
  },
  {
    key: '2',
    variety: 'Super Shinyanga',
    price: '2200/=',
    region: 'Shinyanga',
    admin: 'Peter Paul',
  },
  {
    key: '3',
    variety: 'Super Singida',
    price: '1800/=',
    region: 'Singida',
    admin: 'Peter John',
  },
];

const columns = [
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
    title: 'Price (TZS)',
    dataIndex: 'price',
    key: 'price',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.price.length - b.price.length,
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
    title: 'Effect Date',
    dataIndex: 'admin',
    key: 'admin',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.admin.length - b.admin.length,
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
            <Tooltip title="Update">
              <EditOutlined style={{ fontSize: '1.25rem' }} />
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

const PriceRateTable: React.FC<RouteComponentProps> = () => {
  const handleAddPriceRate = () => {
    navigate('price-rate/price-rate-form');
  };

  return (
    <>
      <Card title="Price Rate" styles={{ minHeight: '90vh' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '4rem',
          }}
        >
          <Button type="primary" size="large" onClick={handleAddPriceRate}>
            {' '}
            Add Price Rate
          </Button>
        </div>
        <Divider />
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

export default PriceRateTable;
