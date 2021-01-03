import React from 'react';

//Components
import { Divider, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';
import SellersTable from './components/sellers-table';
import Card from '../../../../../components/card';
import { navigate } from '@reach/router';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Card title="Sellers" styles={{ minHeight: '90vh', overflowY: 'auto' }}>
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
            onClick={() => navigate('add-sellers-form')}
          >
            {' '}
            Add Sellers
          </Button>
        </div>
        <Divider />
        <SellersTable />
      </Card>
    </>
  );
};

export default Sellers;
