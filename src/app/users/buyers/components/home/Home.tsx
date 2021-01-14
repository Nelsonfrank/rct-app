import React, { useState } from 'react';

// Components
import Header from '../../../components/header';
import CardSection from '../../../components/section-card-list';
import Card from '../../../../components/card';
import { RouteComponentProps } from '@reach/router';
import { Modal, Checkbox } from 'antd';
// placeholder data
import {
  ShopBySellersData,
  TenderRequestsData,
  ShopByPlatformsData,
} from './BuyerSectionData';
//Styles
import './Home.less';
// export interface BuyerHomeProps {}

const BuyerHome: React.FC<RouteComponentProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const options = [
    { label: 'Grade 1', value: 'Apple' },
    { label: 'Grade 2', value: 'Pear' },
    { label: 'Grade 3', value: 'Orange' },
  ];

  function handleGradeChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  function handleVarietyChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }
  return (
    <>
      <Header />
      <div className="buyer--card_group">
        <Card
          subtitle="1. Give Tender"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <Card
          subtitle="2. Request Tender"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <Card
          subtitle="3. Price Rate"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <CardSection
          title="Recent Tender Request"
          route="tender-requests"
          listItems={TenderRequestsData}
        />
        <CardSection
          title="Shop by Seller"
          viewAllAction={handleOpenModal}
          listItems={ShopBySellersData}
        />
        <CardSection
          title="Shop By Platform"
          route="shop-by-platforms"
          listItems={ShopByPlatformsData}
        />
      </div>
      <Modal
        title="Shop By Seller"
        centered
        visible={isModalOpen}
        okText={'Next'}
        onOk={() => {
          console.log('ok');
        }}
      >
        <h3>Choose grade</h3>
        <div style={{ marginBottom: '1.25rem' }}>
          <Checkbox.Group options={options} onChange={handleGradeChange} />
        </div>

        <h3>Choose Variety</h3>
        <div>
          <Checkbox.Group onChange={handleVarietyChange}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox value="kyela">kyela</Checkbox>
                <Checkbox value="Shinyanga">Shinyanga</Checkbox>
                <Checkbox value="Magugu">Magugu</Checkbox>
                <Checkbox value="Mbeya">Mbeya</Checkbox>
              </div>
            </div>
          </Checkbox.Group>
        </div>
      </Modal>
    </>
  );
};

export default BuyerHome;
