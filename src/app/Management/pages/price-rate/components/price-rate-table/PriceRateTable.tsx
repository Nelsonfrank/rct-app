/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';

// dependencies
import { Table, Button, Tooltip, Divider, Space } from 'antd';
import {
  HistoryOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import Card from '../../../../../components/card';
import { RouteComponentProps, navigate } from '@reach/router';
import Notification from '../../../../../components/notification';
//Styles
import './PriceRateTable.less';

// API
import { GetPriceRate } from '../../../../../../API';
//Props Type
// export interface PriceRateTableProps {}

const dataSource = [
  {
    key: '1',
    variety: 'Super Kyela',
    price: '2000/=',
    region: 'Mbeya',
    effectiveDate: 'Jan 26, 2020',
  },
  {
    key: '2',
    variety: 'Super Shinyanga',
    price: '2200/=',
    region: 'Shinyanga',
    effectiveDate: 'Feb 25 2021',
  },
  {
    key: '3',
    variety: 'Super Singida',
    price: '1800/=',
    region: 'Singida',
    effectiveDate: 'jan 26 2020',
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
    dataIndex: 'effectiveDate',
    key: 'effectiveDate',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) =>
        a.effectiveDate.length - b.effectiveDate.length,
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
            <Tooltip title="Update">
              <EditOutlined style={{ fontSize: '1.25rem' }} />
            </Tooltip>
          </div>
          <div onClick={() => navigate('price-rate/price-history')}>
            <Tooltip title="Price History">
              <HistoryOutlined style={{ fontSize: '1.25rem' }} />
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
type priceRateProps = {
  key: string;
  variety: string;
  price: string;
  region: string;
  effectiveDate: string;
}[];
const PriceRateTable: React.FC<RouteComponentProps> = () => {
  const [priceRate, setPriceRate] = useState<priceRateProps>([]);

  useEffect(() => {
    const getPriceRate = async () => {
      const priceRateResponse = await GetPriceRate().then(
        (response) => response,
      );

      if (priceRateResponse.status === 200) {
        const data = priceRateResponse.data.data.map((item: any) => {
          return {
            key: item.id,
            variety: item.variety,
            price: item.price_rate,
            region: item.region,
            effectiveDate: item.date,
          };
        });
        setPriceRate(data);
        // console.log(data);
      } else {
        Notification(
          false,
          'Fail to fetch Price Rate',
          priceRateResponse.message,
        );
      }
    };
    getPriceRate();
  }, []);
  const handleAddPriceRate = () => {
    navigate('price-rate/price-rate-form');
  };

  return (
    <>
      <Card
        title="Price Rate"
        styles={{ minHeight: '90vh', overflowY: 'auto' }}
      >
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
        <Table dataSource={priceRate} columns={columns} />
      </Card>
    </>
  );
};

export default PriceRateTable;
