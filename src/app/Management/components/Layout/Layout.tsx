import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Navigation from './components/header';
import Slider from './components/sider';
import './LayoutWrapper.less';

export interface Props {
  children?: ReactNode;
}

const LayoutWrapper: React.FC<Props> = (Props) => {
  const { children } = Props;
  return (
    <>
      <Layout style={{ width: '100%' }}>
        <Slider isCollapsable={true} className="sideBar" />
        <Layout
          className="site-layout"
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Navigation name="RCT" />
          {children}
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
