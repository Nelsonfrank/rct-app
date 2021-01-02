import React, { ReactNode, useState } from 'react';
import { Layout } from 'antd';
import Navigation from './components/header';
import Sider from './components/sider';
import './LayoutWrapper.less';

export interface Props {
  children?: ReactNode;
}

const LayoutWrapper: React.FC<Props> = (Props) => {
  const { children } = Props;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sideBar, showSideBar] = useState(false);

  const handleShowSideBar = () => {
    showSideBar(!sideBar);
  };
  const SiderCollapsed = (value: boolean) => {
    setIsCollapsed(value);
  };
  return (
    <>
      <Layout style={{ width: '100%' }}>
        <Sider
          isCollapsable={true}
          className="sideBar"
          isCollapsed={SiderCollapsed}
        />
        <Layout
          className="site-layout"
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Navigation
            handleShowNavBar={handleShowSideBar}
            isNavBarOpened={sideBar}
          />
          <div
            style={{ marginTop: '60px', display: sideBar ? 'none' : 'block' }}
            className={
              isCollapsed ? 'marginAfterCollapse' : 'marginBeforeCollapse'
            }
          >
            {children}
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
