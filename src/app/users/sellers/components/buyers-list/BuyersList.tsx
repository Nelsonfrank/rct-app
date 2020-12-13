import React from 'react';

//Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

// export interface BuyersListProps {}

const BuyersList: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <List btnTitle="Request Tender" routes="tender-bid-form" />
    </>
  );
};

export default BuyersList;
