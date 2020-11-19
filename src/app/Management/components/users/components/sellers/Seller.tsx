import React from 'react';

//Components
import { Divider } from 'antd';
import { RouteComponentProps } from '@reach/router';
import SellersTable from './components/sellers-table';
import Card from '../../../../../components/card';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Card title="Sellers" styles={{ height: '90vh' }}>
        <Divider />
        <SellersTable />
      </Card>
    </>
  );
};

export default Sellers;
