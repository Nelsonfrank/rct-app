import React from 'react';

//Components
import Card from '../../../../../components/card';

//Images
import Placeholder from '../../../../../../assets/images/profile.webp';

// export interface RecentWorkProps {}

const RecentWork: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Related Sellers</h2>
        <div className="sells-lists">
          <Card
            className="card-sells_container"
            img={Placeholder}
            imgTitle="Darell Steward"
            imgDescrip="Arusha"
          ></Card>
          <Card
            className="card-sells_container"
            img={Placeholder}
            imgTitle="Darell Steward"
            imgDescrip="Arusha"
          ></Card>
          <Card
            className="card-sells_container"
            img={Placeholder}
            imgTitle="Darell Steward"
            imgDescrip="Arusha"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
