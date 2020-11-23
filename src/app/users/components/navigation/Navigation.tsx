import React, { ReactNode, useState } from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import HeaderNavigation from './components/header-navigation';
import BottomNavigation from './components/bottom-navigation';

// Styles
import './Navigation.less';

// Props Types
export interface NavigationProps extends RouteComponentProps {
  children: ReactNode;
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  // State
  const [isNavOption, setIsNavOption] = useState(false);

  // Props
  const { children } = props;

  const checkNavOption = (option: boolean) => {
    setIsNavOption(option);
  };
  return (
    <>
      <HeaderNavigation CheckNavOption={checkNavOption} />
      <div
        style={{ marginLeft: '0.5rem' }}
        className={
          isNavOption ? 'navigation-childern_closed' : 'navigation-childern'
        }
      >
        {children}
      </div>
      <BottomNavigation navOptionOpened={isNavOption} />
    </>
  );
};

export default Navigation;
