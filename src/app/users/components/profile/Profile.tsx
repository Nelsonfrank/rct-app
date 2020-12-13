import React from 'react';

//Components
import Card from '../../../components/card';
import { Button, Tabs } from 'antd';
import { RouteComponentProps } from '@reach/router';

//Images
import Placeholder from '../../../../assets/images/profile.webp';
import Profile from '../../../../assets/images/Profile-icon.jpg';
//Styles
import './Profile.less';
// export interface UserProfileProps {}

const { TabPane } = Tabs;

const UserProfile: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <div>
        <div className="userprofile-container">
          <div>
            <div className="profile-image_container">
              <img
                src={Profile}
                alt="user profile picture"
                className="profile-picture"
              />
            </div>
            <div>
              <div className="recent-work_container">
                <div className="recent-work_heading">
                  <h2>Recent Work</h2>
                </div>
                <div className="recent-work">
                  <div className="recent-work_item">
                    <img
                      src={Placeholder}
                      alt="User Recent Work"
                      className="recent-work_picture"
                    />
                  </div>
                  <div>
                    <img
                      src={Placeholder}
                      alt="User Recent Work"
                      className="recent-work_picture"
                    />
                  </div>
                </div>
                <div className="recent-work_linkContainer ">
                  <span>
                    <a href="#" className="recent-work_link">
                      See more
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="userprofile_detailed">
            <div>
              <h1 className="username">Darell Steward</h1>
              <p>Seller</p>
            </div>
            <div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Info" key="1">
                  <div style={{ width: '80%' }}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates eum aut repudiandae labore tenetur nemo
                      officiis consequatur velit dicta? Quas, eum eveniet
                      laboriosam minima ullam veniam numquam molestiae iure
                      labore?
                    </p>
                    <div
                      style={{ marginBottom: '1.25rem', marginTop: '1.25rem' }}
                    >
                      <h2 style={{ fontSize: '1.125rem' }}>PERSONAL</h2>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <h3>Joined Date</h3>
                          <p>10 may 2010</p>
                        </div>
                        <div>
                          <h3>Birthday</h3>
                          <p>2 April</p>
                        </div>
                        <div>
                          <h3>Nationality</h3>
                          <p>Tanzanian</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <h2
                        style={{
                          fontSize: '1.125rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        Contacts
                      </h2>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <h3>Phone</h3>
                          <p>+255 684 xxx xxx</p>
                        </div>
                        <div>
                          <h3>Email</h3>
                          <p>example@mail.com</p>
                        </div>
                        <div>
                          <h3>twitter</h3>
                          <p>@example_tz</p>
                        </div>
                      </div>
                      <div>
                        <h3>In-app Chats</h3>
                        <Button type="primary">Chat with Seller</Button>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Stats" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Related Seller" key="3">
                  <div>
                    <div className="sells-lists">
                      <Card
                        className="card-sells_container"
                        img={Placeholder}
                        imgTitle="Darell Steward"
                        imgDescrip="Arusha"
                      ></Card>
                      <Card
                        className="card-sells_container"
                        img={Placeholder}
                        imgTitle="Darell Steward"
                        imgDescrip="Arusha"
                      ></Card>
                      <Card
                        className="card-sells_container"
                        img={Placeholder}
                        imgTitle="Darell Steward"
                        imgDescrip="Arusha"
                      ></Card>
                      <Card
                        className="card-sells_container"
                        img={Placeholder}
                        imgTitle="Darell Steward"
                        imgDescrip="Arusha"
                      ></Card>
                      <Card
                        className="card-sells_container"
                        img={Placeholder}
                        imgTitle="Darell Steward"
                        imgDescrip="Arusha"
                      ></Card>
                      <Card
                        className="card-sells_container"
                        img={Placeholder}
                        imgTitle="Darell Steward"
                        imgDescrip="Arusha"
                      ></Card>
                    </div>
                  </div>
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
