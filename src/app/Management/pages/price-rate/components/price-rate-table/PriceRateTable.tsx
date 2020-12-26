import React from 'react';

// dependencies
import { Table, Button, Divider } from 'antd';
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
    admin: 'John Alfred',
  },
  {
    key: '2',
    variety: 'Super Shinyanga',
    price: '2200/=',
    admin: 'Peter Paul',
  },
  {
    key: '3',
    variety: 'Super Singida',
    price: '1800/=',
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
    title: 'Admin',
    dataIndex: 'admin',
    key: 'admin',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.admin.length - b.admin.length,
    },
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
