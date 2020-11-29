import React from 'react';

// Components
import { Link, RouteComponentProps } from '@reach/router';
import { Button } from 'antd';

//Styles
import './SectionHeader.less';
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
        alignItems: 'center',
        margin: '1.5rem 0 0 0',
        padding: '0 0.5rem',
        width: '100%',
        borderRadius: '4px',
      }}
    >
      <div>
        <h2 className="section--header_title">{title}</h2>
      </div>
      <div className="actionBtn-section">
        <Button type="ghost" className="view-all_button">
          <Link to={route}>{'View All >'}</Link>
        </Button>
      </div>
    </div>
  );
};

export default SectionHeader;
