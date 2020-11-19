import React, { useState } from 'react';
import {
  BellOutlined,
  InboxOutlined,
  MenuOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Badge } from 'antd';
import { Tooltip } from 'antd';
// import Slider from '../sider';
import './Header.less';
export interface HeaderType {
  name: string;
}

const Header: React.FC<HeaderType> = () => {
  const [sideBar, showSideBar] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        backgroundColor: '#fff',
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* <div style={{ display: sideBar ? 'block' : 'none' }}>
        <Slider isCollapsable={false} />
      </div> */}
      <div className="navigation">
        <div
          style={{ display: 'flex', marginLeft: '1rem' }}
          onClick={() => showSideBar(!sideBar)}
        >
          <div className="screen-sm" style={{ alignSelf: 'center' }}>
            {sideBar ? (
              <MenuFoldOutlined style={{ fontSize: '1.25rem' }} />
            ) : (
              <MenuOutlined style={{ fontSize: '1.25rem' }} />
            )}
          </div>
        </div>
        <div className="navigation--options">
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
