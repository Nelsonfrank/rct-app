import React from 'react';

//dependencies
import { Table } from 'antd';
import { RouteComponentProps } from '@reach/router';
//styles
import './Logs.less';

// Props Types
// export interface LogsProps {}

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
const Logs: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <div className="logs-container">
        <div className="logs-header-container">
          <h1 className="logs-header">Logs</h1>
        </div>
        <hr className="logs-divider" />
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </>
  );
};

export default Logs;
