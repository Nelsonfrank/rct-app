import React, { useState } from 'react';

//Components
import { Layout } from 'antd';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  AccountBookOutlined,
  MessageOutlined,
  BlockOutlined,
  UpSquareOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { Link } from '@reach/router';
//Logo
import Logo from '../../../../../../assets/images/rct-logo.jpeg';

//Styles
import './Sider.less';

const { Sider } = Layout;
const { SubMenu } = Menu;
export interface NavigationProps {
  isCollapsable?: boolean;
  className?: string;
  isCollapsed: (value: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { className, isCollapsable, isCollapsed } = props;

  const onCollapse = () => {
    setCollapsed(!collapsed);
    isCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible={isCollapsable}
      collapsed={isCollapsable ? collapsed : undefined}
      onCollapse={isCollapsable ? onCollapse : undefined}
      className={className}
      style={{
        overflow: 'auto',
        minHeight: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: 200,
      }}
    >
      <div className="logo">
        <img
          src={Logo}
          alt="Logo"
          className={`${collapsed ? 'logo--image' : 'logo--image_collapsed'}`}
        />
      </div>
      <Menu
        className="sider--menu"
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="variety"> Varieties</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<AccountBookOutlined />}>
          <Link to="price-rate">Price Rate</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<TeamOutlined />} title="Users">
          <Menu.Item key="4">
            <Link to="users/sellers">Sellers</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="users/buyers">Buyers</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="users/leaders">Leaders</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<BlockOutlined />}>
          <Link to="platforms">Platforms</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<UpSquareOutlined />}>
          <Link to="platforms">Tender Request</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<AppstoreAddOutlined />}>
          <Link to="platforms">Tender Given</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<MessageOutlined />}>
          <Link to="/dashboard">Feedback</Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<FileOutlined />}>
          <Link to="logs">Logs</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navigation;
