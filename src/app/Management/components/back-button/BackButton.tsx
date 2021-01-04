// dependencies
import React from 'react';
import { Button } from 'antd';
import { navigate } from '@reach/router';
import { ArrowLeftOutlined } from '@ant-design/icons';

// Props Types
export interface BackButtonProps {
  routes: string;
}

const BackButton: React.FC<BackButtonProps> = (props: BackButtonProps) => {
  const { routes } = props;
  return (
    <>
      <div>
        <div style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
          <Button type="text" onClick={() => navigate(routes)}>
            <ArrowLeftOutlined
              style={{ fontSize: '1.875rem', fontWeight: 600 }}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default BackButton;
