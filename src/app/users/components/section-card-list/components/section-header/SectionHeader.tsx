import React from 'react';

// Props Types
// export interface SectionHeaderProps {}

const SectionHeader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        alignItems: 'center',
        margin: '0rem',
        padding: '0 0.125rem',
        width: '100%',
        borderRadius: '4px',
      }}
    >
      <div>
        <p
          style={{
            marginBottom: 0,
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Recent Tender Requests
        </p>
      </div>
      <div>
        <p
          style={{
            marginBottom: 0,
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          {'View All >'}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
