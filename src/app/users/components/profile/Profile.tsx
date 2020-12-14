import React from 'react';

//Components
import { Tabs } from 'antd';
import { RouteComponentProps } from '@reach/router';
import UserInfo from './components/user-info';
import RecentWork from './components/recent-work';
import UserAvatar from './components/user-avatar';
//Styles
import './Profile.less';

// export interface UserProfileProps {}

const { TabPane } = Tabs;

const Heading = () => (
  <div>
    <h1 className="username">Darell Steward</h1>
    <p>Seller</p>
  </div>
);

const UserProfile: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <div>
        <div className="userprofile-container">
          <UserAvatar />
          <div className="userprofile_detailed">
            <Heading />
            <div>
              <Tabs defaultActiveKey="1" size="large" style={{ fontSize: 16 }}>
                <TabPane tab="Info" key="1">
                  <UserInfo />
                </TabPane>
                <TabPane tab="Recent Work" key="2">
                  <RecentWork />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
