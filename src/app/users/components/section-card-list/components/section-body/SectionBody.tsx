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
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '0.75rem',
        }}
      >
        <CardItem />
        <CardItem />
      </div>
    </>
  );
};

export default SectionBody;
