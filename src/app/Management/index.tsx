import React from 'react';
// Components
import { RouteComponentProps } from '@reach/router';
import ManagementRoutes from './ManagementRoutes';
//styles
import './Management.less';

const Management: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <ManagementRoutes path="/" />
    </>
  );
};

export default Management;
