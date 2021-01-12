// dependencies
import React from 'react';
import { Divider, Tag, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { DownloadOutlined } from '@ant-design/icons';
// Components
import CardContainer from '../../../../../../../components/card';

const SellerView: React.FC<RouteComponentProps> = () => {
  return (
    <CardContainer
      title="Seller Information"
      backButtonRoute="/dashboard/users/sellers"
      styles={{ minHeight: '90vh' }}
    >
      <Divider />
      <div className="Tender-request-container">
        <h2>Basic Information</h2>
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
        <h2>TBS Certificate</h2>
        <div className="">
          <CardContainer subtitle="TBS Certificate" styles={{ width: '450px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button type="text">
                <DownloadOutlined
                  style={{ fontSize: '1.875rem', fontWeight: 700 }}
                />
              </Button>
            </div>
          </CardContainer>
        </div>
        <h2>Identification ()</h2>
        <div className="">
          <CardContainer subtitle="" styles={{ width: '450px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button type="text">
                <DownloadOutlined
                  style={{ fontSize: '1.875rem', fontWeight: 700 }}
                />
              </Button>
            </div>
          </CardContainer>
        </div>
        {/* <div className="image-container">
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
        </div> */}
      </div>
    </CardContainer>
  );
};

export default SellerView;
