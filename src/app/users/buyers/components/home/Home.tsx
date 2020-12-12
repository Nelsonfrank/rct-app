import React from 'react';

// Components
import Header from '../../../components/header';
import CardSection from '../../../components/section-card-list';
import Card from '../../../../components/card';
import { RouteComponentProps } from '@reach/router';
//Styles
import './Home.less';
// export interface BuyerHomeProps {}

const BuyerHome: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      <div className="buyer--card_group">
        <Card
          subtitle="Tender Request"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae earum sequi vero blanditiis aliquid impedit eos aut vel
              reprehenderit velit sunt natus voluptates iure, facere neque nemo
              non culpa.
            </p>
          </div>
        </Card>
        <Card
          subtitle="Tender Bid"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae earum sequi vero blanditiis aliquid impedit eos aut vel
              reprehenderit velit sunt natus voluptates iure, facere neque nemo
              non culpa.
            </p>
          </div>
        </Card>
        <Card
          subtitle="Price Rate"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae earum sequi vero blanditiis aliquid impedit eos aut vel
              reprehenderit velit sunt natus voluptates iure, facere neque nemo
              non culpa.
            </p>
          </div>
        </Card>
        <CardSection title="Recent Tender Request" route="tender-requests" />
        <CardSection title="Shop by Seller" route="shop-by-sellers" />
        <CardSection title="Shop By Platform" route="shop-by-platforms" />
      </div>
    </>
  );
};

export default BuyerHome;
