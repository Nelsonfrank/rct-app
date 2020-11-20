import React from 'react';

//Components
import { Divider } from 'antd';
import { RouteComponentProps } from '@reach/router';
import BuyersTable from './components/buyers-table';
import Card from '../../../../../components/card';

// Props Types
// export interface BuyersProps {}

const Buyers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Card title="Buyers" styles={{ minHeight: '90vh' }}>
        <Divider />
        <BuyersTable />
      </Card>
    </>
  );
};

export default Buyers;
