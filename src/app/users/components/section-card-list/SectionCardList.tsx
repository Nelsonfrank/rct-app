import React from 'react';

// Components
import SectionHeader from './components/section-header';
import Card from '../../../components/card';
import { Button } from 'antd';
import { Link, navigate } from '@reach/router';
// Styles
import './SectionCardList.less';

// Props Types
export interface SectionCardListProps {
  title: string;
  route: string;
  users?: boolean;
  tenderRequest?: boolean;
  listItems: {
    id: number;
    img: string;
    title: string;
    cardDescrip: string;
    routes: string;
  }[];
  cardStyles?: React.CSSProperties;
}

const SectionCardList: React.FC<SectionCardListProps> = (
  props: SectionCardListProps,
) => {
  const { title, route, listItems, cardStyles } = props;
  return (
    <>
      <SectionHeader title={title} route={route} />
      <div className="card--list_group">
        {listItems
          ? listItems.map((item) => (
              <Card
                key={item.id}
                styles={{ margin: '0 10px', ...cardStyles }}
                className="card-section_container"
                img={item.img}
                imgTitle={item.title}
                imgDescrip={item.cardDescrip}
                onClick={() => navigate(item.routes)}
              ></Card>
            ))
          : null}
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
