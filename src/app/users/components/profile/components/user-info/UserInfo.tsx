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
}

const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
  const {
    nationality,
    firstName,
    lastName,
    phone,
    email,
    website,
    scaleStatus,
    experience,
    tags,
  } = props;
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
            {firstName ? (
              <div>
                <h3>First Name</h3>
                <p style={{ fontSize: 16 }}>{firstName}</p>
              </div>
            ) : null}
            {lastName ? (
              <div>
                <h3>LastName</h3>
                <p style={{ fontSize: 16 }}>{lastName}</p>
              </div>
            ) : null}
            {nationality ? (
              <div>
                <h3>Nationality</h3>
                <p style={{ fontSize: 16 }}>{nationality}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {phone ? (
              <div>
                <h3>Phone</h3>
                <p style={{ fontSize: 16 }}>{phone}</p>
              </div>
            ) : null}
            {email ? (
              <div>
                <h3>Email</h3>
                <p style={{ fontSize: 16 }}>{email}</p>
              </div>
            ) : null}
            {website ? (
              <div>
                <h3>Website</h3>
                <p style={{ fontSize: 16 }}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`http://${website}`}
                  >
                    {website}
                  </a>
                </p>
              </div>
            ) : null}
          </div>
          <hr />
          <div
            style={{
              marginBottom: '1.25rem',
              marginTop: '1.25rem',
            }}
          >
            {scaleStatus ? (
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
                  <p style={{ fontSize: 16 }}>{scaleStatus}</p>
                </div>
              </div>
            ) : null}
            <hr />
            {experience ? (
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
                    {experience} years in the rice value chain
                  </p>
                </div>
              </div>
            ) : null}
            <hr />
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
