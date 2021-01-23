/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import React, { useEffect, useContext, useState } from 'react';

//Components
import { Table, Space, Divider, Tooltip } from 'antd';
import { StopOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Notification from '../../../../../../../components/notification';

// API
import { GetAllLeader, RefreshToken } from '../../../../../../../../API';

// Auth
import { Auth } from '../../../../../../../../auth/AuthContext';
// Props Types
// export interface LeadersTableProps {}

const LeadersTable: React.FC = () => {
  const [leader, setLeader] = useState([]);
  const { userAccessToken } = useContext(Auth);

  useEffect(() => {
    const fetchAllLeader = async () => {
      const leaderResponse = await GetAllLeader(userAccessToken).then(
        (response) => response,
      );
      if (leaderResponse.status === 200) {
        const leaderData = leaderResponse.data.data
          .map((item: any) => {
            return {
              key: item.user_id,
              name: item.name,
              platform: item.platform_name,
              region: item.platform_region,
              phone_number: item.phone_number,
            };
          })
          .filter((item: any) => {
            return item.name !== null;
          });
        setLeader(leaderData);

        console.log(leaderData);
      } else if (
        leaderResponse.message === 'Request failed with status code 401'
      ) {
        const token = localStorage.getItem('refreshToken');
        const refreshToken = {
          refresh_token: token,
        };
        const refreshTokenCall = async () => {
          const response = await RefreshToken(refreshToken).then(
            (response) => response,
          );
          if (response.status === 201) {
            localStorage.setItem('accessToken', response.data.data.token);
            localStorage.setItem(
              'refreshToken',
              response.data.data.refreshToken,
            );

            const fetchAllLeader = async () => {
              const leaderResponse = await GetAllLeader(
                response.data.data.token,
              ).then((response) => response);
              if (leaderResponse.status === 200) {
                const leaderData = leaderResponse.data.data
                  .map((item: any) => {
                    return {
                      key: item.user_id,
                      name: item.name,
                      platform: item.platform_name,
                      region: item.platform_region,
                      phone_number: item.phone_number,
                    };
                  })
                  .filter((item: any) => {
                    return item.name !== null;
                  });
                setLeader(leaderData);
                console.log(leaderData);
              }
            };
            fetchAllLeader();
          } else {
            Notification(false, 'Fail to fetch Leader');
          }
        };
        refreshTokenCall();
      } else {
        Notification(false, 'Fail to fetch Leader');
      }
    };
    fetchAllLeader();
  }, []);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.phone_number.length - b.phone_number.length,
      },
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.platform.length - b.platform.length,
      },
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.region.length - b.region.length,
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Space split={<Divider type="vertical" />}>
            <div>
              <Tooltip title="Edit">
                <EditOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Disable Leader">
                <StopOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Delete Leader" color={'red'}>
                <DeleteOutlined
                  style={{ fontSize: '1.25rem', color: '#ff0000' }}
                />
              </Tooltip>
            </div>
          </Space>
        </>
      ),
    },
  ];
  return <Table dataSource={leader} columns={columns} />;
};

export default LeadersTable;
