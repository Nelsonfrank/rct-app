import React from 'react';
//dependencies
import Profile from '../../../components/profile';
import { RouteComponentProps } from '@reach/router';
// placeholder data
import { SellerProfileData } from './SellerData';

// export interface SellerProfileProps {}

const SellerProfile: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Profile userInfo={SellerProfileData} />
    </>
  );
};

export default SellerProfile;
