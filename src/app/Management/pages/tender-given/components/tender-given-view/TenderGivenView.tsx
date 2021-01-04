// dependencies
import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Divider } from 'antd';
//components
import CardContainer from '../../../../../components/card';

// Styles
import './TenderGivenView.less';
// export interface TenderGivenViewProps {}

const TenderGivenView: React.FC<RouteComponentProps> = () => {
  return (
    <CardContainer
      title="Tender Given View"
      backButtonRoute="/dashboard/tender-given"
      styles={{ minHeight: '90vh' }}
    >
      <Divider />
      <div className="Tender-given-container">
        <h2>Tender Information</h2>
        <div className="tender-given-info">
          <div className="detail-item">
            <div className="item-part">
              <h3 className=" item-part-title">Quantity:</h3>
            </div>
            <div className="item-info">
              <h3 className="item-info-detail">1000 kgs</h3>
            </div>
          </div>
          <div className="detail-item">
            <div className="item-part">
              <h3 className="item-part-title"> Grade:</h3>
            </div>
            <div className="item-info">
              <h3 className="item-info-detail">1</h3>
            </div>
          </div>

          <div className="detail-item">
            <div className="item-part">
              <h3 className="item-part-title"> Variety:</h3>
            </div>
            <div className="item-info">
              {' '}
              <h3 className="item-info-detail">Super Kyela</h3>
            </div>
          </div>
          <div className="detail-item">
            <div className="item-part">
              <h3 className="item-part-title">Destination:</h3>
            </div>
            <div className="item-info">
              <h3 className="item-info-detail">Dar es salaam</h3>
            </div>
          </div>
          <div className="detail-item">
            <div className="item-part">
              <h3 className="item-part-title">Description:</h3>
            </div>
            <div className="item-description">
              <h3 className="item-description-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                quisquam a aspernatur ducimus nostrum, eum itaque animi facere,
                mollitia ea atque nulla omnis dignissimos ad consectetur fuga
                recusandae suscipit sapiente.
              </h3>
            </div>
          </div>
        </div>
        <Divider />
        <h2>Buyer Information</h2>
        <div className="tender-given-info">
          <div className="detail-item">
            <div className="item-part">
              <h3 className="item-part-title"> Full Name:</h3>
            </div>
            <div className="item-info">
              {' '}
              <h3 className="item-info-detail">Alfred Juma</h3>
            </div>
          </div>
          <div className="detail-item">
            <div className="item-part">
              <h3 className="item-part-title">Phone Number:</h3>
            </div>
            <div className="item-info">
              {' '}
              <h3 className="item-info-detail">+255 6423 234 213</h3>
            </div>
          </div>
          <div className="detail-item">
            <div className="item-part">
              <h3 className="item-part-title">Location:</h3>
            </div>
            <div className="item-info">
              {' '}
              <h3 className="item-info-detail">Mbeya Mjini</h3>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default TenderGivenView;
