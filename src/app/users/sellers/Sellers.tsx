import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import Navigation from '../components/navigation';
import Header from '../components/header';
import CardSection from '../components/section-card-list';
import Card from '../../components/card';

// Styles
import './Sellers.less';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <Header />
        <div className="seller--card_group">
          <Card subtitle="Tender Request" className="seller--card">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                recusandae earum sequi vero blanditiis aliquid impedit eos aut
                vel reprehenderit velit sunt natus voluptates iure, facere neque
                nemo non culpa.
              </p>
            </div>
          </Card>
          <Card subtitle="Tender Bid" className="seller--card">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                recusandae earum sequi vero blanditiis aliquid impedit eos aut
                vel reprehenderit velit sunt natus voluptates iure, facere neque
                nemo non culpa.
              </p>
            </div>
          </Card>
          <Card subtitle="Price Rate" className="seller--card">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                recusandae earum sequi vero blanditiis aliquid impedit eos aut
                vel reprehenderit velit sunt natus voluptates iure, facere neque
                nemo non culpa.
              </p>
            </div>
          </Card>
          <CardSection title="Recent Tender Request" />
          <CardSection title="Shop by Seller" />
          <CardSection title="Shop By Platform" />
        </div>
      </Navigation>
    </>
  );
};

export default Sellers;
