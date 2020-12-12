import React from 'react';

// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';
// export interface PlatformsProps {}

const Platforms: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default Platforms;
