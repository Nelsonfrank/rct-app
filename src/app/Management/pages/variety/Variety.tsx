import React from 'react';
import VarietyRoutes from './VarietyRoute';
import { RouteComponentProps } from '@reach/router';

const Variety: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <VarietyRoutes />
    </>
  );
};

export default Variety;
