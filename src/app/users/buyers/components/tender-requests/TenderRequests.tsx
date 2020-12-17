import React from 'react';

//Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

// Placeholder Data
import { ListDataPlaceholder } from './TenderRequestData';
// export interface TenderRequestsProps {}

const TenderRequests: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <List
        btnTitle="Give Tender"
        routes="tender-request-form"
        itemData={ListDataPlaceholder}
      />
    </>
  );
};

export default TenderRequests;
