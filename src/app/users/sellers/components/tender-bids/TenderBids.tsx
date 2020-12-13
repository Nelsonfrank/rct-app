import React from 'react';

//Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';
// export interface TenderBidsProps {}

const TenderBids: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <List btnTitle="Request Tender" routes="tender-bid-form" />
    </>
  );
};

export default TenderBids;
