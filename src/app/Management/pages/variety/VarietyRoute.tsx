import React from 'react';
import VarietyList from './components/variety-list';
import AddVarietyForm from './components/add-variety-form';
import { Router } from '@reach/router';

// export interface VarietyRoutesProps {}

const VarietyRoutes: React.FC = () => {
  return (
    <Router>
      <VarietyList path="/" />
      <AddVarietyForm path="add-variety-form" />
    </Router>
  );
};

export default VarietyRoutes;
