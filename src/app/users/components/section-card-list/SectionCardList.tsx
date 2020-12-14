import React from 'react';

// Components
import SectionHeader from './components/section-header';
import Card from '../../../components/card';
import { Button } from 'antd';
import { Link } from '@reach/router';
// Styles
import './SectionCardList.less';
//Images
import ProfileIcon from '../../../../assets/images/Profile-icon.jpg';
import PlatformIcon from '../../../../assets/images/Platform-icon.png';

// Props Types
export interface SectionCardListProps {
  title: string;
  route: string;
  users?: boolean;
}

const SectionCardList: React.FC<SectionCardListProps> = (
  props: SectionCardListProps,
) => {
  const { title, route, users } = props;
  return (
    <>
      <SectionHeader title={title} route={route} />
      <div className="card--list_group">
        <Card
          className="card-section_container"
          img={users ? ProfileIcon : PlatformIcon}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
        ></Card>
        <Card
          className="card-section_container"
          img={users ? ProfileIcon : PlatformIcon}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
        ></Card>
        <Card
          className="card-section_container"
          img={users ? ProfileIcon : PlatformIcon}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
        ></Card>
        <Card
          className="card-section_container"
          img={users ? ProfileIcon : PlatformIcon}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
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
