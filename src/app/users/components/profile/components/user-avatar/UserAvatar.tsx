import React from 'react';

//Images
import Placeholder from '../../../../../../assets/images/profile.webp';
import Profile from '../../../../../../assets/images/user-one.jpg';
// export interface UserAvatarProps {}

const UserAvatar: React.FC = () => {
  return (
    <div className="profile-sidebar">
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
  );
};

export default UserAvatar;
