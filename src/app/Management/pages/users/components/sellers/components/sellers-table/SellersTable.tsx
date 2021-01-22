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

// Api
import { GetAllUsers } from '../../../../../../../../API';
const { Column } = Table;

// Props Types
// export interface SellersTableProps {}

// placeholder data
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    phone: '07812121212',
    platform: 'mbeya',
    leader: 'Mr.John Doe',
    location: 'Mbeya',
    tags: ['Individual', 'TBS Certified'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    phone: '07812121212',
    platform: 'mbeya',
    leader: 'Mr.John Doe',
    location: 'Mbeya',
    tags: ['Individual', 'TBS Certified'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    phone: '07812121212',
    platform: 'mbeya',
    leader: 'Mr.John Doe',
    location: 'Mbeya',
    tags: ['Individual', 'TBS Certified'],
  },
];
export interface sellerProps {
  sellers:
    | {
        firstName: string;
        lastName: string;
        phone: string;
        platform: string;
        leader: string;
        locations: string;
        tags: string[];
      }[]
    | undefined;
}
const SellersTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [sellers, setSellers] = useState();

  useEffect(() => {
    const getSellers = async () => {
      const result = await GetAllUsers().then((response) => response);

      // console.log(result);
      const res = result.data.data.sellerInformations;
      if (res.length !== 0) {
        const name = res.full_name.split(' ');
        const response = {
          firstName: name[0],
          lastName: name[1],
          phone: res.phone_number,
          platform: res.platform_name,
          leader: res.platform_leader,
          locations: res.location,
          tags: [res.is_tbs_certified.length !== 0 ? 'TBS Certificed' : ''],
        };
        const sellerValues = [response];
        // setSellers(sellerValues);
        console.log(sellerValues);
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
    <Table dataSource={data} rowSelection={rowSelection}>
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
