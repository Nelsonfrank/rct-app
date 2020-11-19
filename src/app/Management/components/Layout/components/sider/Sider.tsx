import React, { useState } from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  AccountBookOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import Logo from '../../../../../../assets/images/rct-logo.jpeg';
const { Sider } = Layout;
const { SubMenu } = Menu;
import './Sider.less';

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
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Varieties
        </Menu.Item>
        <Menu.Item key="3" icon={<AccountBookOutlined />}>
          Price Rate
        </Menu.Item>
        <SubMenu key="sub1" icon={<TeamOutlined />} title="Users">
          <Menu.Item key="4">Sellers</Menu.Item>
          <Menu.Item key="5">Buyers</Menu.Item>
          <Menu.Item key="6">Leaders</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<MessageOutlined />}>
          Messages
        </Menu.Item>
        <Menu.Item key="10" icon={<FileOutlined />}>
          Report
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navigation;
