import React from 'react';
//Components
import Card from '../../../components/card';
//Styles
import './Dashboard.less';

//Types
export interface DashboardProps {
  title?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="dashboard">
      <Card title="235,000" subtitle="Total Tons" />
      <Card title="123,456" subtitle="Total Seller" />
      <Card title="432,578" subtitle="Total Buyers" />
      <Card title="17,000" subtitle="Total Tender" />
      <Card title="17,000" subtitle="Total Tender" />
    </div>
  );
};

export default Dashboard;
