import React from 'react';

//Components
import { RightOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
// Styles
import './ListItem.less';
import { navigate } from '@reach/router';

export interface ListItemProps {
  id: number;
  image: string;
  ownerName: string;
  description: string;
  variety?: string;
  grade?: string;
  pickupLocation?: string;
  stock?: string;
  need?: string;
  isAllChecked: boolean;
  addCheckedItem: (value: { ownerName: string; id: number }) => void;
  removeCheckedItem: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const {
    id,
    image,
    ownerName,
    description,
    variety,
    grade,
    pickupLocation,
    stock,
    need,
    isAllChecked,
    addCheckedItem,
    removeCheckedItem,
  } = props;

  React.useEffect(() => {
    isAllChecked ? setIsChecked(true) : setIsChecked(false);
  }, [isAllChecked]);

  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
    isChecked ? removeCheckedItem(id) : addCheckedItem({ ownerName, id });
  };

  const handleMoreDetails = () => {
    navigate('user-profile');
  };
  return (
    <>
      <Checkbox
        key={id}
        checked={isChecked}
        value={id}
        style={{ display: 'flex', margin: '1rem 0.125rem' }}
        onChange={toggleCheckBox}
      >
        <div className="listItemContainer">
          <div className="listitemImageContainer">
            <img src={image} alt="cover image" className="listitemImage" />
          </div>
          <div className="listDetailsContainer">
            <div className="listDetails">
              <h3 className="listDetailsHeader" style={{ margin: '0rem' }}>
                {ownerName}
              </h3>
              <p className="listDetailsParag dispay-parag">{description}</p>
              <div className="listOptions">
                <div className="listOptions_items">
                  {variety ? (
                    <p className="listDetailsParag listDetailsParagBold">
                      {' '}
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Variety:{' '}
                      </span>
                      {variety}
                    </p>
                  ) : null}
                  {grade ? (
                    <p className="listDetailsParag listDetailsParagBold dispay-item">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Grade:{' '}
                      </span>{' '}
                      {grade}
                    </p>
                  ) : null}
                  {stock ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Stock:{' '}
                      </span>{' '}
                      {stock}
                    </p>
                  ) : null}
                  {pickupLocation ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Pickup Location:{' '}
                      </span>{' '}
                      {pickupLocation}
                    </p>
                  ) : null}
                  {need ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Buyers Need:{' '}
                      </span>{' '}
                      {need}
                    </p>
                  ) : null}
                </div>
                <div className="moreDetailsBtn">
                  <Button type="primary" onClick={handleMoreDetails}>
                    More Details
                  </Button>
                </div>
              </div>
            </div>
            <div className="listItemIconBtn" onClick={handleMoreDetails}>
              <RightOutlined className="listItemIcon" />
            </div>
          </div>
        </div>
      </Checkbox>
      <hr />
    </>
  );
};

export default ListItem;
