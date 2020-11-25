import React from 'react';

// Components
import { Link, RouteComponentProps } from '@reach/router';
// Props Types
export interface SectionHeaderProps extends RouteComponentProps {
  title: string;
  route?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (
  props: SectionHeaderProps,
) => {
  const { title, route = '#' } = props;
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
          {title}
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
          <Link to={route}>{'View All >'}</Link>
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
