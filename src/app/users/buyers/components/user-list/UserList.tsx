import React, { useEffect } from 'react';

// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

import { GetAllUsers } from '../../../../../API/API';
// placeholder data
import { ListDataPlaceholder } from './UserInfoData';

// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = () => {
  useEffect(() => {
    const FetchUserList = async () => {
      const value = await GetAllUsers().then((response) => response);
      console.log(value);
    };
    FetchUserList();
  }, []);

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
