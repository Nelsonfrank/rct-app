import React, { ReactNode } from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import HeaderNavigation from './components/header-navigation';

// Styles
import './Navigation.less';

// Props Types
export interface NavigationProps extends RouteComponentProps {
  children: ReactNode;
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  // Props
  const { children } = props;

  return (
    <>
      <HeaderNavigation />
      <div style={{ margin: '0rem 0.5rem', padding: '0.5rem 0 0 0' }}>
        {children}
      </div>
    </>
  );
};

export default Navigation;
