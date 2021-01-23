/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

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
// Api
import { GetAllUsers } from '../../../../../../../../API';
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

  useEffect(() => {
    const getSellers = async () => {
      const result = await GetAllUsers().then((response) => response);

      console.log(result);
      if (result.status === 200) {
        const res = result.data.data.sellerInformations.map((item: any) => {
          return {
            firstName: item.full_name.split(' ')[0],
            lastName: item.full_name.split(' ')[1],
            phone: item.phone_number,
            platform: item.platform_name,
            leader: item.platform_leader,
            location: item.location,
            tags: [item.is_tbs_certified.length !== 0 ? 'TBS Certificed' : ''],
          };
        });
        console.log(res);
        setSellers(res);
        // if (res.length !== 0) {
        //   const name = res[0];
        //   const response = ;
        //   const sellerValues = [response];
        //   setSellers(sellerValues);
        //   // setSellers(sellerValues);
        //   // console.log(sellerValues);
        // }
      } else {
        Notification(false, 'Failed to fetch sellers');
      }
    };
    getSellers();

    // console.log(sellers);
  }, []);
  const handleOnRowChange = (selectedRowKey: any) => {
    setSelectedRowKeys(selectedRowKey);
  };
  const randomColorGenenrator = () => {
    const color = ['#2db7f5', '#f50', '#2db7f5', '#9B59B6'];
    const random = Math.floor(Math.random() * color.length);
    return color[random];
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
              <Tag color={randomColorGenenrator()} key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={() => (
          <>
            <Space split={<Divider type="vertical" />}>
              <div>
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
                <Tooltip title="Disable Buyer">
                  <StopOutlined style={{ fontSize: '1.25rem' }} />
                </Tooltip>
              </div>
              <div>
                <Popconfirm title="Delete User？" okText="Yes" cancelText="No">
                  <Tooltip title="Delete Buyer" color={'red'}>
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
