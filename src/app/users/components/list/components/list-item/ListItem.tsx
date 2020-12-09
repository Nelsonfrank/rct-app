import React from 'react';

//Components
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// Styles
import './ListItem.less';

// Images
import CardImage from '../../../../../../assets/images/slider-1.webp';
// export interface ListItemProps {}

const ListItem: React.FC = () => {
  return (
    <div className="listItemContainer">
      <div className="listitemImageContainer">
        <img src={CardImage} alt="cover image" className="listitemImage" />
      </div>
      <div className="listDetailsContainer">
        <div className="listDetails">
          <h3 className="listDetailsHeader" style={{ margin: '0rem' }}>
            East Africa milling Ltd
          </h3>
          <p className="listDetailsParag dispay-parag">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            tempore eligendi iste distinctio totam magni quisquam maxime culpa.
            Ab corrupti nesciunt tempore recusandae amet suscipit doloremque
            corporis, temporibus maxime doloribus?
          </p>
          <div className="listOptions">
            <div className="listOptions_items">
              <p className="listDetailsParag listDetailsParagBold">
                {' '}
                <span style={{ fontWeight: 600, marginRight: 2 }}>
                  Variety:{' '}
                </span>
                Super Kiyela
              </p>
              <p className="listDetailsParag listDetailsParagBold dispay-item">
                <span style={{ fontWeight: 600, marginRight: 2 }}>Grade: </span>{' '}
                One
              </p>
              <p className="listDetailsParag listDetailsParagBold pickup_location">
                <span style={{ fontWeight: 600, marginRight: 2 }}>
                  Pickup Location:{' '}
                </span>{' '}
                Morogoro
              </p>
            </div>
            <div className="moreDetailsBtn">
              <Button type="primary">More Details</Button>
            </div>
          </div>
        </div>
        <div className="listItemIconBtn">
          <RightOutlined className="listItemIcon" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
