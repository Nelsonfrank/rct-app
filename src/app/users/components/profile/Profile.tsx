import React from 'react';

//Components
import { Tabs } from 'antd';
import { RouteComponentProps } from '@reach/router';
import UserInfo from './components/user-info';
import RecentTender from './components/recent-tender';
import UserAvatar from './components/user-avatar';
//Styles
import './Profile.less';

// export interface UserProfileProps {}

const { TabPane } = Tabs;

const Heading = (props: { fullName: string; userCategory: string }) => (
  <div>
    <h1 className="username">{props.fullName}</h1>
    <p>{props.userCategory}</p>
  </div>
);

export interface UserProfileProfile extends RouteComponentProps {
  userInfo: {
    id: number;
    profileImg: string;
    recentTenders: {
      id: number;
      tenderImg: string;
      title: string;
      descript: string;
    }[];
    userCategory: string;
    firstName: string;
    lastName: string;
    nationality: string;
    phone: string;
    email: string;
    website: string;
    scaleStatus: string;
    experience: string;
    fullName: string;
    tags: string[];
    tenderDetails: {
      variety: string;
      grade: string;
      stock?: string;
      request?: string;
      location?: string;
      pickupLocation?: string;
    }[];
  }[];
}
const UserProfile: React.FC<UserProfileProfile> = (
  props: UserProfileProfile,
) => {
  return (
    <>
      <div>
        {props.userInfo
          .filter((item) => item.id === 1)
          .map((item) => {
            const {
              profileImg,
              recentTenders,
              userCategory,
              fullName,
              firstName,
              lastName,
              tags,
              nationality,
              scaleStatus,
              phone,
              email,
              website,
              experience,
            } = item;
            return (
              <div className="userprofile-container" key={item.id}>
                <UserAvatar
                  profileImage={profileImg}
                  recentTenders={[recentTenders[0], recentTenders[1]]}
                />
                <div className="userprofile_detailed">
                  <Heading fullName={fullName} userCategory={userCategory} />
                  <div>
                    <Tabs
                      defaultActiveKey="1"
                      size="large"
                      style={{ fontSize: 16 }}
                    >
                      <TabPane tab="Info" key="1">
                        <UserInfo
                          firstName={firstName}
                          lastName={lastName}
                          nationality={nationality}
                          scaleStatus={scaleStatus}
                          phone={phone}
                          website={website}
                          email={email}
                          experience={experience}
                          tags={tags}
                          // tenderDetails={}
                        />
                      </TabPane>
                      <TabPane tab="Recent Tender" key="2">
                        <RecentTender tenderItem={recentTenders} />
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserProfile;
