import React from 'react';

//Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';
// export interface TenderRequestsProps {}

const TenderRequests: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <List />
    </>
  );
};

export default TenderRequests;
