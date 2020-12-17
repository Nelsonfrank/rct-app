import React from 'react';

export interface UserAvatarProps {
  profileImage: string;
  recentTenders: {
    id: number;
    tenderImg: string;
    title: string;
    descript: string;
  }[];
}

const UserAvatar: React.FC<UserAvatarProps> = (props: UserAvatarProps) => {
  const { profileImage, recentTenders } = props;
  return (
    <div className="profile-sidebar">
      <div className="profile-image_container">
        <img
          src={profileImage}
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
            {recentTenders.map((item) => (
              <div className="recent-work_item" key={item.id}>
                <img
                  src={item.tenderImg}
                  alt="User Recent Work"
                  className="recent-work_picture"
                />
              </div>
            ))}
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
