import React from 'react';

//Components
import CardItem from './components/card-item';

// Props Types
export interface SectionBodyProps {
  objectList?: { name: string; image?: string }[];
}

const SectionBody: React.FC<SectionBodyProps> = (props: SectionBodyProps) => {
  const { objectList } = props;

  return (
    <>
      <div
        style={{
          marginTop: '0.75rem',
        }}
      >
        <CardItem username="item1" key="item" />
      </div>
    </>
  );
};

export default SectionBody;
