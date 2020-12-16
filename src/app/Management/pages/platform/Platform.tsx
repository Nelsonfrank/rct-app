import React from 'react';

//Dependencies
import { RouteComponentProps } from '@reach/router';

//Components
import PlatformRoutes from './PlatformRoutes';
//Styles
import './Platform.less';

// export interface PlatformProps {}

const Platform: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <div>
        <PlatformRoutes />
      </div>
    </>
  );
};

export default Platform;
