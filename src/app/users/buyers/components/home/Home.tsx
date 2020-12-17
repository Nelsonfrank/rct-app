import React from 'react';

// Components
import Header from '../../../components/header';
import CardSection from '../../../components/section-card-list';
import Card from '../../../../components/card';
import { RouteComponentProps } from '@reach/router';

// placeholder data
import {
  ShopBySellersData,
  TenderRequestsData,
  ShopByPlatformsData,
} from './BuyerSectionData';
//Styles
import './Home.less';
// export interface BuyerHomeProps {}

const BuyerHome: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      <div className="buyer--card_group">
        <Card
          subtitle="1. Give Tender"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <Card
          subtitle="2. Request Tender"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <Card
          subtitle="3. Price Rate"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <CardSection
          title="Recent Tender Request"
          route="tender-requests"
          listItems={TenderRequestsData}
        />
        <CardSection
          title="Shop by Seller"
          route="shop-by-sellers"
          listItems={ShopBySellersData}
        />
        <CardSection
          title="Shop By Platform"
          route="shop-by-platforms"
          listItems={ShopByPlatformsData}
        />
      </div>
    </>
  );
};

export default BuyerHome;
