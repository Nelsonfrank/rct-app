import React, { useState } from 'react';

//dependencies
import { Table, Divider } from 'antd';
import { RouteComponentProps } from '@reach/router';
import Card from '../../../components/card';
//styles
import './Logs.less';

// Props Types
// export interface LogsProps {}

const dataSource = [
  {
    key: '1',
    action: 'Delete Seller',
    performer: 'John Doe',
    role: 'Admin',
    time: 'Dec 10th, 12:00pm',
  },
  {
    key: '2',
    action: 'Add 10 Sellers',
    performer: 'Ally Juma',
    role: 'Leader',
    time: 'Dec 10th, 11:00am',
  },
];

const columns = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.action.length - b.action.length,
    },
  },
  {
    title: 'Performer',
    dataIndex: 'performer',
    key: 'performer',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.performer.length - b.performer.length,
    },
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.role.length - b.role.length,
    },
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.time.length - b.time.length,
    },
  },
];
const Logs: React.FC<RouteComponentProps> = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  return (
    <>
      <Card title="Logs" styles={{ minHeight: '90vh', overflowY: 'auto' }}>
        <Divider />
        <Table
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
        />
        ;
      </Card>
    </>
  );
};

export default Logs;
