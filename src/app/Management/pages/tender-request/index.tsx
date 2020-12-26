// dependencies
import React from 'react';
import { RouteComponentProps } from '@reach/router';

// components
import TenderRequestList from './components/tender-request-list';
// export interface TenderRequestProps {}

const TenderRequest: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <TenderRequestList />
    </>
  );
};

export default TenderRequest;
