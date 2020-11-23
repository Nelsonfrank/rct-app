import React from 'react';

// Props Types
// export interface OptionButtonsProps {}

const OptionButtons: React.FC = () => {
  // Styles
  const styles: React.CSSProperties = {
    fontWeight: 550,
    borderRadius: 5,
    textTransform: 'uppercase',
  };
  return (
    <>
      <div style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <button
              type="button"
              style={{ ...styles, backgroundColor: '#000', color: '#fff' }}
            >
              Language
            </button>
          </div>
          <div>
            <button
              type="button"
              style={{ ...styles, backgroundColor: '#bdc682', color: '#fff' }}
            >
              Price Rate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionButtons;
