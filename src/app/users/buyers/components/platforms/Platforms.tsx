import React from 'react';

// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

// placeholder data
import { ListDataPlaceholder } from './PlatformData';

// export interface PlatformsProps {}

const Platforms: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <List
        btnTitle="Give Tender"
        routes="tender-request-form"
        itemData={ListDataPlaceholder}
      />
    </div>
  );
};

export default Platforms;
