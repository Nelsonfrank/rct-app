import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import Navigation from '../components/navigation';
import OptionButtons from '../components/option-buttons';
import Header from '../components/header';
import SectionCardList from '../components/section-card-list';
// Styles
import './Sellers.less';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <OptionButtons />
        <Header />
        <div style={{ marginBottom: 60 }}>
          <SectionCardList />
          <SectionCardList />
        </div>
      </Navigation>
    </>
  );
};

export default Sellers;
