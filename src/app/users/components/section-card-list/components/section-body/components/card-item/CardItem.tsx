import React from 'react';

// Images
import ProfileImg from '../../../../../../../../assets/images/profile.webp';

// Props Type
// export interface CardItemProps {}

const CardItem: React.FC = () => {
  return (
    <>
      <div style={{ width: 170, borderRadius: '5px' }}>
        <img
          src={ProfileImg}
          alt="ProfileImg"
          style={{
            width: '100%',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          }}
        />
        <div
          style={{
            backgroundColor: '#bdc682',
            width: '100%',
            borderBottomLeftRadius: '3px',
            borderBottomRightRadius: '3px',
            padding: '0 0.25rem',
          }}
        >
          <p
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: '0.875rem',
            }}
          >
            Sarafina Milling
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
