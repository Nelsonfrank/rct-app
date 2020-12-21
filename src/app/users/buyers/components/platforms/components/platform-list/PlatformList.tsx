// dependencies
import React from 'react';
import { RouteComponentProps } from '@reach/router';
// components
import List from '../../../../../components/list';

// placeholder data
import { ListDataPlaceholder } from '../../PlatformData';

// export interface PlatformListProps {}

const PlatformList: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <List
        btnTitle="Give Tender"
        routes="tender-request-form"
        itemData={ListDataPlaceholder}
      />
    </>
  );
};

export default PlatformList;
