import React from 'react';

// Components
import SectionHeader from './components/section-header';
import Card from '../../../components/card';
import { Button } from 'antd';
// Styles
import './SectionCardList.less';
//Images
import Slider1 from '../../../../assets/images/slider-1.jpg';

// Props Types
export interface SectionCardListProps {
  title: string;
  route?: string;
}

const SectionCardList: React.FC<SectionCardListProps> = (
  props: SectionCardListProps,
) => {
  const { title, route } = props;
  return (
    <>
      <SectionHeader title={title} route={route} />
      <div className="card--list_group">
        <Card
          className="card-section_container"
          img={Slider1}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
        ></Card>
        <Card
          className="card-section_container"
          img={Slider1}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
        ></Card>
        <Card
          className="card-section_container"
          img={Slider1}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
        ></Card>
        <Card
          className="card-section_container"
          img={Slider1}
          imgTitle="Sarafina John"
          imgDescrip="Arusha"
        ></Card>
      </div>
      <div className="SeeAll-Btn-sm">
        <Button type="primary" shape="round" size="large">
          See All
        </Button>
      </div>
    </>
  );
};

export default SectionCardList;
