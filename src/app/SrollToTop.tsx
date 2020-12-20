// ScrollToTop.jsx
import React from 'react';
import { RouteComponentProps, useLocation } from '@reach/router';

export interface ScrollToTopProps extends RouteComponentProps {
  children: React.ReactChild | React.ReactChild[];
}

const ScrollToTop: React.FC<ScrollToTopProps> = (props: ScrollToTopProps) => {
  const location = useLocation();

  const { children } = props;

  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return <>{children}</>;
};

export default ScrollToTop;
