import React from 'react';
import { BellOutlined, InboxOutlined } from '@ant-design/icons';
import { Badge, Tooltip } from 'antd';
import './Header.less';
export interface HeaderType {
  name: string;
}
const styles = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};
const Header: React.SFC<HeaderType> = () => {
  return (
    <div>
      <div className="navigation">
        <div style={styles}>
          <div className="navigation--notification">
            <Tooltip placement="top" title="Notification">
              <Badge count={null}>
                <BellOutlined className="navigation--icon" />
              </Badge>
            </Tooltip>
          </div>
          <div className="navigation--DM">
            <Tooltip placement="top" title="Message">
              <Badge count={5}>
                <InboxOutlined className="navigation--icon" />
              </Badge>
            </Tooltip>
          </div>
          <div>
            <div className="profile">
              <div className="profile--shape">
                <p className="user--name">N</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
