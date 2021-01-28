/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';

//Components
import { Table, Space, Tag, Tooltip, Divider, Popconfirm } from 'antd';
import {
  StopOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { navigate } from '@reach/router';
import Notification from '../../../../../../../components/notification';

import { Auth } from '../../../../../../../../auth/AuthContext';
// Api
import {
  GetAllUsers,
  DeleteSeller,
  DisableSeller,
} from '../../../../../../../../API';
const { Column } = Table;

// Props Types
// export interface SellersTableProps {}

type sellerProps = {
  firstName: string;
  lastName: string;
  phone: string;
  platform: string;
  leader: string;
  location: string;
  tags: string[];
}[];
const SellersTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [sellers, setSellers] = useState<sellerProps>([]);
  const [hidePopup] = useState(false);

  const { adminAccessToken } = useContext(Auth);

  const handleDeleteSeller = async (sellerId: string) => {
    const response = await DeleteSeller(sellerId, adminAccessToken).then(
      (response) => response,
    );
    if (response.status === 200) {
      getSellers();
      Notification(true, 'Seller Deleted Successfully');
    } else {
      Notification(false, 'Fail To Delete Seller', response.message);
    }
    console.log(sellerId);
  };
  const handleDisableSeller = async (sellerId: any) => {
    const payload = {
      toggle: 'false',
    };
    const response = await DisableSeller(
      sellerId,
      payload,
      adminAccessToken,
    ).then((response) => response);
    if (response.status === 200) {
      Notification(true, 'Seller Disabled Successfully');
    } else {
      Notification(false, 'Fail To Delete Seller', response.message);
    }
  };

  const handleUpdateSeller = (sellerId: any) => {
    const data = {
      event: 'update seller',
      sellerId: sellerId,
    };
    navigate('add-sellers-form', { state: { data: data } });
  };

  const getSellers = async () => {
    const result = await GetAllUsers().then((response) => response);
    console.log(result);
    console.log(result);
    if (result.status === 200) {
      const res = result.data.data.sellerInformations.map((item: any) => {
        return {
          keys: item.id,
          firstName: item.full_name && item.full_name.split(' ')[0],
          lastName: item.full_name && item.full_name.split(' ')[1],
          phone: item.phone_number,
          platform: item.platform_name,
          leader: item.platform_leader,
          location: item.location,
          tags: [item.is_tbs_certified.length !== 0 ? 'TBS Certificed' : ''],
        };
      });
      setSellers(res);
    } else {
      Notification(false, 'Failed to fetch sellers', result.messages);
    }
  };
  useEffect(() => {
    getSellers();

    // console.log(sellers);
  }, []);
  const handleOnRowChange = (selectedRowKey: any) => {
    setSelectedRowKeys(selectedRowKey);
  };
  const randomColorGenenrator = (tags: string) => {
    return tags === 'TBS Certificed' ? '#f50' : '#2db7f5';
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: handleOnRowChange,
  };
  return (
    <Table dataSource={sellers} rowSelection={rowSelection}>
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Phone Number" dataIndex="phone" key="phone" />
      <Column
        title="Platform"
        dataIndex="platform"
        key="platform"
        // eslint-disable-next-line
        sorter={(a: any, b: any) => a.platform - b.platform}
      />
      <Column title="Platform Leader" dataIndex="leader" key="leader" />
      <Column
        title="Location"
        dataIndex="location"
        key="location"
        // eslint-disable-next-line
        sorter={(a: any, b: any) => a.location - b.location}
      />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <>
            {tags.map((tag: any) => (
              <Tag color={randomColorGenenrator(tag)} key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        dataIndex="keys"
        key="keys"
        render={(keys) => (
          <>
            <Space split={<Divider type="vertical" />}>
              <div onClick={() => handleUpdateSeller(keys)}>
                <Tooltip title="Edit">
                  <EditOutlined style={{ fontSize: '1.25rem' }} />
                </Tooltip>
              </div>
              <div onClick={() => navigate('view')}>
                <Tooltip title="View More">
                  <EyeOutlined style={{ fontSize: '1.25rem' }} />
                </Tooltip>
              </div>
              <div>
                <Popconfirm
                  title="Disable Seller？"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => handleDisableSeller(keys)}
                >
                  <Tooltip
                    title="Disable Buyer"
                    visible={hidePopup}
                    trigger="hover"
                  >
                    <StopOutlined style={{ fontSize: '1.25rem' }} />
                  </Tooltip>
                </Popconfirm>
              </div>
              <div>
                <Popconfirm
                  title="Delete Seller?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => handleDeleteSeller(keys)}
                >
                  <Tooltip
                    title="Delete Buyer"
                    color={'red'}
                    visible={hidePopup}
                    trigger="hover"
                  >
                    <DeleteOutlined
                      style={{ fontSize: '1.25rem', color: '#ff0000' }}
                    />
                  </Tooltip>
                </Popconfirm>
              </div>
            </Space>
          </>
        )}
      />
    </Table>
  );
};

export default SellersTable;
