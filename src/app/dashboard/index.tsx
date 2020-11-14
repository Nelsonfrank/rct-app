import React from 'react';
import { Layout } from 'antd';
import Navigation from './components/header';
import Slider from './components/sider';
import './Dashboard.less';

const Dashboard: React.FC = () => {
  return (
    <>
      <Layout style={{ width: '100%' }}>
        <Slider isCollapsable={true} className="sideBar" />
        <Layout className="site-layout" style={{ width: '100%' }}>
          <Navigation name="RCT" />
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
