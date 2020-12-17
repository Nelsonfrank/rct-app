import React from 'react';

//Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

// placeholder data
import { ListDataPlaceholder } from './TenderBidData';
// export interface TenderBidsProps {}

const TenderBids: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <List
        btnTitle="Request Tender"
        routes="tender-bid-form"
        itemData={ListDataPlaceholder}
      />
    </>
  );
};

export default TenderBids;
