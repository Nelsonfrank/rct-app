import React from 'react';

//Dependencies
import { RouteComponentProps } from '@reach/router';
import { Button } from 'antd';
import { navigate } from '@reach/router';
//Components
import PlatformList from './components/platform-lists';

//Styles
import './Platform.less';

// export interface PlatformProps {}

const Platform: React.FC<RouteComponentProps> = () => {
  const handleAddPlatform = () => {
    navigate('add-platform-form');
  };
  return (
    <>
      <div className="platform-container">
        <div className="platform-heading">
          <Button size="large" type="primary" onClick={handleAddPlatform}>
            Add Platform
          </Button>
        </div>
        <PlatformList />
      </div>
    </>
  );
};

export default Platform;
