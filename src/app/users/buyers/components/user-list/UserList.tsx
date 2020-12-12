import React from 'react';

// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';
// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default UserList;
