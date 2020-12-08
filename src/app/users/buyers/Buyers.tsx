import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import UserProfile from '../components/profile';

// Props Types
// export interface BuyersProps {}

const Buyers: React.FC<RouteComponentProps> = () => {
  return <UserProfile />;
};

export default Buyers;
