import React from 'react';

//Components
import { Button, Tag } from 'antd';
import SectionCard from '../../../section-card-list';
import { navigate } from '@reach/router';
// export interface UserInfoProps {}

const UserInfo: React.FC = () => {
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
            }}
          >
            <div>
              <h3>First Name</h3>
              <p style={{ fontSize: 16 }}>Darell</p>
            </div>
            <div>
              <h3>LastName</h3>
              <p style={{ fontSize: 16 }}>Steward</p>
            </div>
            <div>
              <h3>Nationality</h3>
              <p style={{ fontSize: 16 }}>Tanzanian</p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3>Phone</h3>
              <p style={{ fontSize: 16 }}>+255 684 xxx xxx</p>
            </div>
            <div>
              <h3>Email</h3>
              <p style={{ fontSize: 16 }}>xxxx@gmail.com</p>
            </div>
            <div>
              <h3>Website</h3>
              <p style={{ fontSize: 16 }}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://rct.co.tz/home/"
                >
                  www.rct.co.tz
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div
            style={{
              marginBottom: '1.25rem',
              marginTop: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Scale Status:
                </h3>
                <p style={{ fontSize: 16 }}>Large</p>
              </div>
            </div>
            <hr />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Experience:
                </h3>
                <p style={{ fontSize: 16 }}>
                  11-20 years in the rice value chain
                </p>
              </div>
            </div>
            <hr />
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
                  <Tag color="#f50" style={{ padding: '0.2rem 0.5rem' }}>
                    RCT Approved
                  </Tag>
                  <Tag color="#87d068" style={{ padding: '0.2rem 0.5rem' }}>
                    TBS Certified
                  </Tag>
                  <Tag color="#108ee9" style={{ padding: '0.2rem 0.5rem' }}>
                    Individual
                  </Tag>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Action</h3>
            <Button
              type="primary"
              onClick={() => navigate('tender-request-form')}
            >
              Give Tender
            </Button>
          </div>
        </div>
        <div style={{ marginTop: '4rem' }}>
          <SectionCard title="Related Sellers" route="/" users />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
