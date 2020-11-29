import React from 'react';

//Components
import CardItem from './components/card-item';

// Props Types
// export interface SectionBodyProps {}

const SectionBody: React.FC = () => {
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
