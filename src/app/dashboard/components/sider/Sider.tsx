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
import Logo from '../../../../assets/images/rct-logo.jpeg';
const { Sider } = Layout;
const { SubMenu } = Menu;
import './Sider.less';

export interface Props {
  isCollapsable?: boolean;
  className?: string;
}

// eslint-disable-next-line react/prop-types
const Navigation: React.FC<Props> = ({ isCollapsable, className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible={isCollapsable}
      collapsed={isCollapsable ? collapsed : undefined}
      onCollapse={isCollapsable ? onCollapse : undefined}
      className={className}
      style={{ overflow: 'auto', minHeight: '200vh' }}
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
        {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu> */}
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
