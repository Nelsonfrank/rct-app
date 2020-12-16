import React from 'react';

// Components
import Card from '../../../../../components/card';
// Styles
import './PlatformList.less';

// export interface PlatformListsProps {}

const PlatformLists: React.FC = () => {
  return (
    <>
      <div>
        <div className="platformlist-row">
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 3</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
          <Card
            className="platformlist-card"
            styles={{ margin: '1rem 1.125rem' }}
          >
            <h3>platformlist-Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PlatformLists;
