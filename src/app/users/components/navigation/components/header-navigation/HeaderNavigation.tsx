import React, { useState } from 'react';

// Components
import { Input } from 'antd';
import { Divider } from 'antd';
import {
  // BellOutlined,
  // QuestionCircleOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';

// Styles
import './HeaderNavigation.less';

// Props Types
export interface HeaderNavigationProps {
  hideOptions?: boolean;
}

const { Search } = Input;

const HeaderNavigation: React.FC<HeaderNavigationProps> = (
  props: HeaderNavigationProps,
) => {
  //State
  const [isOpen, setisOpen] = useState(false);

  const { hideOptions } = props;
  const toggleNavigationOption = () => {
    setisOpen(!isOpen);
  };

  const onSearch = (value: string) => console.log(value);

  // const DividerComponent = ()=>

  return (
    <>
      <div
        className={
          isOpen ? 'navigation--user_closed' : 'navigation--user_container'
        }
      >
        <div className="navigation--user">
          <div className="navigation--menu" onClick={toggleNavigationOption}>
            <div className="humbergerIcon">
              <MenuOutlined style={{ fontSize: 24 }} />
            </div>
            <div className="app--logo">
              <h2 style={{ marginBottom: 0 }}>RCT APP</h2>
            </div>
          </div>
          <div className="user--app">
            <div className="search--input">
              <Search
                placeholder="Search Here"
                size="large"
                onSearch={onSearch}
                allowClear
                style={{ width: '90%' }}
                enterButton
              />
            </div>
            <div className="navigation--user_action">
              {/* <div>
              <BellOutlined style={{ fontSize: 20, margin: '0 0.25rem' }} />
            </div>
            <div>
              <QuestionCircleOutlined
                style={{ fontSize: 20, margin: '0 0.25rem' }}
              />
            </div> */}
              <div className="registry-container">
                <span className="register--welcome">Welcome!</span>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href="#">Sign In</a>{' '}
                  <span style={{ padding: '0 0.25rem' }}>{` | `}</span>
                  <a href="#">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider
          style={{
            margin: '0  0 0.5rem 0 ',
            borderTop: '2px solid rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
      <div
        className="option--group"
        style={{ display: hideOptions ? 'none' : 'block' }}
      >
        <div className="options-lgscreen">
          <div className="option--item__lgscreen ">
            <p style={{ marginBottom: 0 }}>
              <a href="#">Tender request</a>
            </p>
          </div>
          <div className="option--item__lgscreen ">
            <p style={{ marginBottom: 0 }}>
              <a href="#">Tender bid</a>
            </p>
          </div>
          <div className="option--item__lgscreen ">
            <p style={{ marginBottom: 0 }}>
              <a href="#">Price rate</a>
            </p>
          </div>
          <div className="option--item__lgscreen ">
            <p style={{ marginBottom: 0 }}>
              <a href="#">Varieties</a>
            </p>
          </div>
          <div className="option--item__lgscreen ">
            <p style={{ marginBottom: 0 }}>
              <a href="#">Sellers</a>
            </p>
          </div>
        </div>
        <Divider
          style={{
            margin: '0.5rem 0 ',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
      <div className={isOpen ? 'nav--list' : 'nav--list_closed'}>
        <div className="nav-close">
          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            className="nav--close_btn"
            onClick={toggleNavigationOption}
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

export default HeaderNavigation;
