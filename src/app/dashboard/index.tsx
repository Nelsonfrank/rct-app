import React from 'react';
import Layout from './components/Layout';
import './Dashboard.less';

const Dashboard: React.FC = () => {
  return (
    <>
      <Layout>
        <div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
          <p>Hello, World</p>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
