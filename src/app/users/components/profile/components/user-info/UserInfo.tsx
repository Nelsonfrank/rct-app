/* eslint-disable no-constant-condition */
import React from 'react';

//Components
import { Button, Tag } from 'antd';
import SectionCard from '../../../section-card-list';
import { navigate } from '@reach/router';

// placeholder data
import { ShopByBuyerData } from '../../ProfileData';

export interface UserInfoProps {
  firstName: string;
  lastName: string;
  nationality?: string;
  phone?: string;
  email?: string;
  website?: string;
  scaleStatus?: string;
  experience?: string;
  tags?: string[];
  tenderDetails?: {
    variety: string;
    grade: string;
    stock?: string;
    request?: string;
    location?: string;
    pickupLocation?: string;
  }[];
}

const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
  const { phone, scaleStatus, experience, tags } = props;

  // interface AvailableStockProps {
  //   item: {
  //     variety?: string;
  //     grade?: string;
  //     stock?: string;
  //     pickupLocation?: string;
  //   }[];
  // }
  // const AvailableStock = (props: AvailableStockProps) => (
  //   <div>
  //     <div style={{ marginBottom: '1.25rem', marginTop: '1.25rem' }}>
  //       <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
  //         Available Stock
  //       </h2>
  //       <div
  //         style={{
  //           display: 'flex',
  //           justifyContent: 'space-between',
  //           flexWrap: 'wrap',
  //         }}
  //       >
  //         {props.item.map((_item) => (
  //           <>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>Variety: </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.variety}
  //               </p>
  //             </div>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>Grade: </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.grade}
  //               </p>
  //             </div>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>Stock: </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.stock}
  //               </p>
  //             </div>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>
  //                 Pickup Location:{' '}
  //               </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.pickupLocation}
  //               </p>
  //             </div>
  //           </>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  // interface StockRequiredProps {
  //   item: {
  //     variety?: string;
  //     grade?: string;
  //     request?: string;
  //     location?: string;
  //   }[];
  //   shopBySeller: boolean;
  //   shopByBuyer: boolean;
  //   recentTenderRequest: boolean;
  //   recentTenderBid: boolean;
  // }
  // const StockRequired = (props: StockRequiredProps) => (
  //   <div>
  //     <div style={{ marginBottom: '1.25rem', marginTop: '1.25rem' }}>
  //       <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
  //         Available Stock
  //       </h2>
  //       <div
  //         style={{
  //           display: 'flex',
  //           justifyContent: 'space-between',
  //           flexWrap: 'wrap',
  //         }}
  //       >
  //         {props.item.map((_item) => (
  //           <>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>Variety: </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.variety}
  //               </p>
  //             </div>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>Grade: </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.grade}
  //               </p>
  //             </div>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>Request: </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.request}
  //               </p>
  //             </div>
  //             <div style={{ display: 'flex' }}>
  //               <h3 style={{ textTransform: 'capitalize' }}>Location: </h3>
  //               <p
  //                 style={{
  //                   fontSize: 16,
  //                   marginLeft: '1rem',
  //                   textAlign: 'center',
  //                 }}
  //               >
  //                 {_item.location}
  //               </p>
  //             </div>
  //           </>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <div style={{ width: '80%' }}>
        <div style={{ marginBottom: '1.25rem', marginTop: '1.25rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Contact Person:
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {phone ? (
              <div style={{ display: 'flex' }}>
                <h3>Phone Number: </h3>
                <p
                  style={{
                    fontSize: 16,
                    marginLeft: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {phone}
                </p>
              </div>
            ) : null}
            {scaleStatus ? (
              <div style={{ display: 'flex' }}>
                <h3>Scale Status: </h3>
                <p
                  style={{
                    fontSize: 16,
                    marginLeft: '1rem',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                  }}
                >
                  {scaleStatus}
                </p>
              </div>
            ) : null}
            {experience ? (
              <div style={{ display: 'flex' }}>
                <h3>Experience: </h3>
                <p
                  style={{
                    fontSize: 16,
                    marginLeft: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {experience} years in rice business
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            style={{
              marginBottom: '1.25rem',
              marginTop: '1.25rem',
            }}
          >
            {(tags || []).length !== 0 ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Label:
                  </h3>
                  <div style={{ display: 'flex' }}>
                    {(tags || []).map((item: string) => (
                      <Tag
                        key={item}
                        color="#f50"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '14px' }}
                      >
                        {item}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            <hr />
          </div>
          {/* <div>{true ? <AvailableStock /> : <StockRequired />}</div> */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Action</h3>
            <Button
              type="primary"
              onClick={() => navigate('tender-request-form')}
            >
              {/* {shopBySeller || shopByPlatform
                ? 'Give Tender'
                : shopByBuyer
                ? 'Request Tender'
                : recentTenderBid
                ? 'Chat With Seller'
                : 'Chat with Buyer'} */}
            </Button>
          </div>
        </div>
        <div style={{ marginTop: '4rem' }}>
          <SectionCard
            title="Related Sellers"
            route="/"
            listItems={ShopByBuyerData}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
