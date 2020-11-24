import React from 'react';

//Styles
import './OptionButtons.less';

// Props Types
// export interface OptionButtonsProps {}

const OptionButtons: React.FC = () => {
  // Inline-Styles
  const styles: React.CSSProperties = {
    fontWeight: 550,
    borderRadius: 5,
    textTransform: 'uppercase',
  };
  return (
    <>
      <div style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <button
              type="button"
              style={{ ...styles, backgroundColor: '#000', color: '#fff' }}
              className="actionButton"
            >
              Language
            </button>
          </div>
          <div>
            <button
              type="button"
              style={{
                ...styles,
                backgroundColor: '#bdc682',
                border: '2px solid #bdc682',
                color: '#fff',
              }}
              className="actionButton"
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
