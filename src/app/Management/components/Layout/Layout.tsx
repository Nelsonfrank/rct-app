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
          <Navigation name="RCT" />
          <div
            style={{ marginLeft: isCollapsed ? 80 : 200, marginTop: '60px' }}
          >
            {children}
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
