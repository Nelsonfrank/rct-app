import React from 'react';

// Components
import { navigate, RouteComponentProps } from '@reach/router';
import Card from '../../../../components/card';
import placeholder from '../../../../../assets/images/2.png';

// placeholder data

// export interface PlatformsProps {}

const Platforms: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <h1>Platforms</h1>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
        <Card
          imgTitle="Mbeya"
          imgDescrip="Some description here"
          img={placeholder}
          styles={{ maxWidth: '300px' }}
          onClick={() => navigate('platform-subscriber-list')}
        />
      </div>
    </div>
  );
};

export default Platforms;
