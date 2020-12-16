import React from 'react';

// dependencies
import { Router } from '@reach/router';

//Components
import PlatformList from './components/platform-lists';
import CreatePlatformList from './components/create-platform-form';

// export interface PlatformRoutesProps {}

const PlatformRoutes: React.FC = () => {
  return (
    <Router>
      <PlatformList path="/" />
      <CreatePlatformList path="add-platform-form" />
    </Router>
  );
};

export default PlatformRoutes;
