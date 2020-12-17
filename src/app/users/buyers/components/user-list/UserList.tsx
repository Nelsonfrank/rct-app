import React from 'react';

// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

// placeholder data
import { ListDataPlaceholder } from './UserInfoData';
// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = () => {
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

export default UserList;
