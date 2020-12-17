import React from 'react';

//Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

// placeholder data
import { ListDataPlaceholder } from './BuyerListsData';

// export interface BuyersListProps {}

const BuyersList: React.FC<RouteComponentProps> = () => {
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

export default BuyersList;
