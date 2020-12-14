import React from 'react';

// Components
import SectionHeader from './components/section-header';
import Card from '../../../components/card';
import { Button } from 'antd';
import { Link, navigate } from '@reach/router';
// Styles
import './SectionCardList.less';
//Images
import Request1 from '../../../../assets/images/11.jpg';
import Request2 from '../../../../assets/images/7.jpg';
import Request3 from '../../../../assets/images/13.jpg';
import User1 from '../../../../assets/images/2.png';
import Platform from '../../../../assets/images/14.jpg';

// Props Types
export interface SectionCardListProps {
  title: string;
  route: string;
  users?: boolean;
  tenderRequest?: boolean;
}

const SectionCardList: React.FC<SectionCardListProps> = (
  props: SectionCardListProps,
) => {
  const { title, route, users, tenderRequest } = props;
  return (
    <>
      <SectionHeader title={title} route={route} />
      <div className="card--list_group">
        <Card
          styles={{ margin: '0 10px' }}
          className="card-section_container"
          img={users ? User1 : tenderRequest ? Request2 : Platform}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
          onClick={() => navigate('buyers/user-profile')}
        ></Card>
        <Card
          styles={{ margin: '0 10px' }}
          className="card-section_container"
          img={users ? User1 : tenderRequest ? Request1 : Platform}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
          onClick={() => navigate('buyers/user-profile')}
        ></Card>
        <Card
          styles={{ margin: '0 10px' }}
          className="card-section_container"
          img={users ? User1 : tenderRequest ? Request2 : Platform}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
          onClick={() => navigate('buyers/user-profile')}
        ></Card>
        <Card
          styles={{ margin: '0 10px' }}
          className="card-section_container"
          img={users ? User1 : tenderRequest ? Request3 : Platform}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
          onClick={() => navigate('buyers/user-profile')}
        ></Card>
      </div>
      <div className="SeeAll-Btn-sm">
        <Button type="primary" shape="round" size="large">
          <Link to={route}>See All</Link>
        </Button>
      </div>
    </>
  );
};

export default SectionCardList;
