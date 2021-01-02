// dependencies
import React from 'react';
import { RouteComponentProps } from '@reach/router';

// components
import TenderTable from './components/Tender-table';
import PriceRate from './components/price-rate';
import Charts from './components/charts';
import InfoCards from './components/info-cards';

//Styles
import './Dashboard.less';

//Types
export interface DashboardProps extends RouteComponentProps {
  title?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="dashboard-container">
      <InfoCards />
      <div className="dashboard--section">
        <Charts />
        <PriceRate style={{ width: '97%' }} />
      </div>
      <div className="dashboard--section">
        <TenderTable />
      </div>
    </div>
  );
};

export default Dashboard;
