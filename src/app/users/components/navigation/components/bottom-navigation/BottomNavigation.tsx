import React from 'react';

// Components
import {
  HomeOutlined,
  ShoppingOutlined,
  TeamOutlined,
  MessageOutlined,
} from '@ant-design/icons';

// Styles
import './BottomNavigation.less';

// Props Types
export interface BottomNavigationProps {
  navOptionOpened: boolean;
}

const BottomNavigation: React.FC<BottomNavigationProps> = (
  props: BottomNavigationProps,
) => {
  const { navOptionOpened } = props;
  return (
    <>
      <div className={navOptionOpened ? 'nav--bottom_closed' : 'nav--buttom'}>
        <div className="nav-buttom_container">
          <div className="nav--bottom_border" />
          <div className="nav--bottom_list">
            <div className="nav-buttom_item">
              <a href="#">
                <HomeOutlined style={{ fontSize: 24 }} />
                <p style={{ marginBottom: 0 }}>Home</p>
              </a>
            </div>
            <div className="nav-buttom_item">
              <a href="#">
                <ShoppingOutlined style={{ fontSize: 24 }} />
                <p style={{ marginBottom: 0 }}>Buy</p>
              </a>
            </div>
            <div className="nav-buttom_item">
              <a href="#">
                <TeamOutlined style={{ fontSize: 24 }} />
                <p style={{ marginBottom: 0 }}>Sellers</p>
              </a>
            </div>
            <div className="nav-buttom_item">
              <a href="#">
                <MessageOutlined style={{ fontSize: 24 }} />
                <p style={{ marginBottom: 0 }}>Chats</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
