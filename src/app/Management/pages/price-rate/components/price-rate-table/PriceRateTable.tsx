import React from 'react';

// dependencies
import { Table, Button } from 'antd';
import { RouteComponentProps, navigate } from '@reach/router';

//Styles
import './PriceRateTable.less';

//Props Type
// export interface PriceRateTableProps {}

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const PriceRateTable: React.FC<RouteComponentProps> = () => {
  const handleAddPriceRate = () => {
    navigate('price-rate/price-rate-form');
  };

  return (
    <>
      <div className="price-rate-table-container">
        <div className="price-rate-table-actionBtn">
          <Button type="primary" size="large" onClick={handleAddPriceRate}>
            Add Price Rate
          </Button>
        </div>
        <div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default PriceRateTable;
