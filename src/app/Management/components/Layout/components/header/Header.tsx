import React from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from '@reach/router';
import './Header.less';
export interface HeaderType {
  handleShowNavBar: () => void;
  isNavBarOpened: boolean;
}

const Header: React.FC<HeaderType> = ({
  handleShowNavBar,
  isNavBarOpened,
}: HeaderType) => {
  return (
    <>
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
        <div className="navigation">
          <div
            style={{ display: 'flex', marginLeft: '1rem' }}
            onClick={handleShowNavBar}
          >
            <div className="screen-sm" style={{ alignSelf: 'center' }}>
              <MenuOutlined style={{ fontSize: '1.25rem' }} />
            </div>
          </div>
          <div className="navigation--options">
            <div className="navigation--notification">
              <Button type="link">Update Profile</Button>
              {/* <Tooltip placement="top" title="Notification">
              <Badge count={null}>
                <BellOutlined className="navigation--icon" />
              </Badge>
            </Tooltip> */}
            </div>
            <div className="navigation--DM">
              <Button type="link">Logout</Button>
              {/* <Tooltip placement="top" title="Message">
              <Badge count={5}>
                <InboxOutlined className="navigation--icon" />
              </Badge>
            </Tooltip> */}
            </div>
            {/* <div>
            <div className="profile">
              <div className="profile--shape">
                <p className="user--name">N</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      <div className={isNavBarOpened ? 'nav--list' : 'nav--list_closed'}>
        <div className="nav-close">
          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            className="nav--close_btn"
            onClick={() => handleShowNavBar()}
          >
            <CloseOutlined style={{ fontSize: 28 }} />
          </button>
        </div>
        <div className="user--nav">
          <ul className="nav--option">
            <li onClick={() => handleShowNavBar()}>
              <Link to="/dashboard" className="nav--option_item">
                Dashboard
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="variety" className="nav--option_item">
                {' '}
                Varieties
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="price-rate" className="nav--option_item">
                Price Rate
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="users/sellers" className="nav--option_item">
                Sellers
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="users/buyers" className="nav--option_item">
                Buyers
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="users/leaders" className="nav--option_item">
                Leaders
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="platforms" className="nav--option_item">
                Platforms
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="tender-request" className="nav--option_item">
                Tender Request
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="tender-given" className="nav--option_item">
                Tender Given
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="/dashboard" className="nav--option_item">
                Feedback
              </Link>
            </li>
            <li onClick={() => handleShowNavBar()}>
              <Link to="/dashboard" className="nav--option_item">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
