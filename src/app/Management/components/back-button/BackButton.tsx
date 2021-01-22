// dependencies
import React from 'react';
import { Button } from 'antd';
import { navigate } from '@reach/router';
import { ArrowLeftOutlined } from '@ant-design/icons';

// Props Types

const BackButton: React.FC = () => {
  return (
    <>
      <div>
        <div style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
          <Button type="text" onClick={() => navigate(-1)}>
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
