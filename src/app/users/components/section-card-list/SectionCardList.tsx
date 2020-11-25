import React from 'react';

// Components
import SectionHeader from './components/section-header';
import SectionBody from './components/section-body';

// Props Types
export interface SectionCardListProps {
  title: string;
  route?: string;
  objectList: { name: string; image?: string }[];
}

const SectionCardList: React.FC<SectionCardListProps> = (
  props: SectionCardListProps,
) => {
  const { title, route, objectList } = props;
  return (
    <>
      <SectionHeader title={title} route={route} />
      <SectionBody objectList={objectList} />
    </>
  );
};

export default SectionCardList;
