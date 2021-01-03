// dependencies
import React from 'react';
import Card from '../../../../../components/card';

// export interface InfoCardsProps {}

const InfoCards: React.FC = () => {
  return (
    <div className="dashboard">
      <Card
        className="dashboard-card"
        title="20"
        subtitle="Total Platform"
        actionBtn="View More"
        actionBtnRoute="dashboard/platforms"
      />
      <Card
        className="dashboard-card"
        title="123,456"
        subtitle="Total Seller"
        actionBtn="View More"
        actionBtnRoute="dashboard/users/sellers"
      />
      <Card
        className="dashboard-card"
        title="432,578"
        subtitle="Total Buyers"
        actionBtn="View More"
        actionBtnRoute="dashboard/users/buyers"
      />
      <Card
        className="dashboard-card"
        title="17,000"
        subtitle="Total Tender Request"
        actionBtn="View More"
        actionBtnRoute="dashboard/tender-request"
      />
      <Card
        className="dashboard-card"
        title="17,000"
        subtitle="Total Tender Given"
        actionBtn="View More"
        actionBtnRoute="dashboard/tender-given"
      />
    </div>
  );
};

export default InfoCards;
