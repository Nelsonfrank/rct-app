import React from 'react';

// Components
import CardContainer from '../../../../../components/card';
import { Divider, Tag, Card } from 'antd';
import { RouteComponentProps } from '@reach/router';

// styles
import './TenderRequestView.less';

// export interface TenderRequestViewProps {}
const ImageContainer = () => (
  <Card
    hoverable
    style={{ width: 240, marginBottom: '1.25rem', marginRight: '1rem' }}
    cover={
      <img
        alt="example"
        src="https://images.unsplash.com/photo-1592997571659-0b21ff64313b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
    }
  >
    <Card.Meta title="Image" description="Image sample" />
  </Card>
);
const TenderRequestView: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <CardContainer
        title="Tender Request View"
        backButton
        styles={{ minHeight: '90vh' }}
      >
        <Divider />
        <div className="Tender-request-container">
          <h2>Tender Information</h2>
          <div className="tender-request-info">
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
                <h3 className="item-part-title"> Price(TZS/Kg):</h3>
              </div>
              <div className="item-info">
                {' '}
                <h3 className="item-info-detail">1800/=</h3>
              </div>
            </div>
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title"> Batch Number:</h3>
              </div>
              <div className="item-info">
                {' '}
                <h3 className="item-info-detail">12436578</h3>
              </div>
            </div>
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title"> Pickup Location:</h3>
              </div>
              <div className="item-info">
                {' '}
                <h3 className="item-info-detail">Mbeya Mjini</h3>
              </div>
            </div>
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title">Description:</h3>
              </div>
              <div className="item-description">
                <h3 className="item-description-detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  quisquam a aspernatur ducimus nostrum, eum itaque animi
                  facere, mollitia ea atque nulla omnis dignissimos ad
                  consectetur fuga recusandae suscipit sapiente.
                </h3>
              </div>
            </div>
          </div>
          <Divider />
          <h2>Seller Information</h2>
          <div className="tender-request-info">
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title">Full Name:</h3>
              </div>
              <div className="item-info">
                <h3 className="item-info-detail">Juma Alfred Ally</h3>
              </div>
            </div>
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title">Phone Number:</h3>
              </div>
              <div className="item-info">
                <h3 className="item-info-detail">+255 6423 234 213</h3>
              </div>
            </div>
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title">Platform:</h3>
              </div>
              <div className="item-info">
                <h3 className="item-info-detail">Mbeya Group</h3>
              </div>
            </div>
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title">Location:</h3>
              </div>
              <div className="item-info">
                <h3 className="item-info-detail">Mbeya Mjini</h3>
              </div>
            </div>
            <div className="detail-item">
              <div className="item-part">
                <h3 className="item-part-title">Tags:</h3>
              </div>
              <div className="item-info">
                <div className="item-info-detail">
                  <Tag color="#f50">Individual</Tag>
                  <Tag color="#2db7f5">RCT Approved</Tag>
                  <Tag color="#87d068">TBS Certified</Tag>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <h2>Images</h2>
          <div className="image-container">
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
            <ImageContainer />
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default TenderRequestView;
