import React, { useState } from 'react';
import {
  BellOutlined,
  QuestionCircleOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';

// Styles
import './Navigation.less';

// Props Types
// export interface NavigationProps {}

const Navigation: React.FC = () => {
  //State
  const [isOpen, setisOpen] = useState(true);

  return (
    <>
      <div className={isOpen ? 'navigation--user_closed' : 'navigation--user'}>
        <div className="navigation--menu" onClick={() => setisOpen(!isOpen)}>
          <MenuOutlined style={{ fontSize: 24 }} />
        </div>
        <div className="user--app">
          <div className="app--logo">
            <h2 style={{ marginBottom: 0 }}>RCT APP</h2>
          </div>
          <div className="navigation--user_action">
            <div>
              <BellOutlined style={{ fontSize: 18, margin: '0 0.25rem' }} />
            </div>
            <div>
              <QuestionCircleOutlined
                style={{ fontSize: 18, margin: '0 0.25rem' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? 'nav--list' : 'nav--list_closed'}>
        <div className="nav-close">
          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            className="nav--close_btn"
            onClick={() => setisOpen(!isOpen)}
          >
            <CloseOutlined style={{ fontSize: 28 }} />
          </button>
        </div>
        <div className="user--nav">
          <ul className="nav--option">
            <li>
              <a href="#" className="nav--option_item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav--option_item">
                Tender Request
              </a>
            </li>
            <li>
              <a href="#" className="nav--option_item">
                Tender Bid
              </a>
            </li>
            <li>
              <a href="#" className="nav--option_item">
                Report
              </a>
            </li>
            <li>
              <a href="#" className="nav--option_item">
                My Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
