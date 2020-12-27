import React from 'react';
//dependencies
import { RouteComponentProps, navigate } from '@reach/router';
import { Button } from 'antd';

// Components
import Card from '../../../../../components/card';
// Styles
import './PlatformList.less';

// export interface PlatformListsProps {}

const PlatformLists: React.FC<RouteComponentProps> = () => {
  const handleAddPlatform = () => {
    navigate('platforms/add-platform-form');
  };
  return (
    <>
      <div className="platform-container">
        <div className="platform-heading">
          <Button size="large" type="primary" onClick={handleAddPlatform}>
            Add Platform
          </Button>
        </div>

        <div className="platformlist-row">
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Mbeya Platform</h3>
            <p>24,000 Sellers</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Shinyanga Platform</h3>
            <p>12,000 Sellers</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Morogoro Platform</h3>
            <p>12,000 Sellers</p>{' '}
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Arusha Platform</h3>
            <p>12,000 Sellers</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Mwanza Platform</h3>
            <p>12,000 Sellers</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Kigoma Platfom</h3>
            <p>12,000 Sellers</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Musoma Platform</h3>
            <p>12,000 Sellers</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Mpwapwa Platform</h3>
            <p>12,000 Sellers</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>Lindi Platform</h3>
            <p>12,000 Sellers</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PlatformLists;
