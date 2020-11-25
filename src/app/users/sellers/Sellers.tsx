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

const data = [
  {
    name: 'John Doe',
    image: 'https://imageplaceholder_webp.com',
  },
  {
    name: 'Sarah John',
    image: 'https://imageplaceholder_webp.com',
  },
];
const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <OptionButtons />
        <Header />
        <SectionCardList
          title="Recent Tender Request"
          route="#"
          objectList={data}
        />
        <SectionCardList title="Shop By Seller" route="#" objectList={data} />
      </Navigation>
    </>
  );
};

export default Sellers;
