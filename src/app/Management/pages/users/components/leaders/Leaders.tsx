import React from 'react';

//Components
import { Divider } from 'antd';
import { RouteComponentProps } from '@reach/router';
import LeadersTable from './components/leaders-table';
import Card from '../../../../../components/card';

// Props Types
// export interface LeadersProps {}

const Leaders: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Card title="Leaders" styles={{ minHeight: '90vh', overflowY: 'auto' }}>
        <Divider />
        <LeadersTable />
      </Card>
    </>
  );
};

export default Leaders;
