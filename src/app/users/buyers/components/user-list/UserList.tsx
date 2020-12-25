import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';
import {
  FetchAllSellersRequest,
  FetchAllSellersSuccess,
  FetchAllSellersError,
} from '../../../../../redux/buyer/action';

import { Button } from 'antd';
import { GetAllUsers } from '../../../../../API';

// placeholder data
import { ListDataPlaceholder } from './UserInfoData';

// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchUserList = () => async (dispatch: any) => {
      dispatch(FetchAllSellersRequest());
      const value = await GetAllUsers()
        .then((response) => {
          dispatch(FetchAllSellersSuccess(response));
          return response.data;
        })
        .catch((error) => {
          dispatch(FetchAllSellersError(error));
          console.log(error);
        });
      console.log(value);
    };
    dispatch(FetchUserList());
  }, []);

  console.log(data);
  return (
    <div>
      <List
        btnTitle="Give Tender"
        routes="tender-request-form"
        itemData={ListDataPlaceholder}
      />
      <Button type="primary" onClick={() => console.log(data)}>
        Trigger Action
      </Button>
    </div>
  );
};

export default UserList;
