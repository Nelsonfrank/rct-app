// dependencies
import React from 'react';
import { Table } from 'antd';
import Card from '../../../../../components/card';
import { price } from './data';
export interface PriceRateProps {
  style?: React.CSSProperties;
}

const PriceRate: React.FC<PriceRateProps> = (props: PriceRateProps) => {
  const { style } = props;
  const columns = [
    {
      title: 'S/N',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Variety',
      dataIndex: 'variety',
      key: 'variety',
    },
    {
      title: 'Price (TZS)',
      dataIndex: 'price',
      key: 'price',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.price - b.price,
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
  ];
  return (
    <Card
      styles={{ ...style }}
      actionBtn="View More"
      actionBtnRoute="dashboard/price-rate"
    >
      <div>
        <div>
          <h2>Today Price Rate(Tzs/Kg)</h2>
        </div>
        <Table dataSource={price} columns={columns} pagination={false} />
      </div>
    </Card>
  );
};

export default PriceRate;
