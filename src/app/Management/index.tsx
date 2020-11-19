import React from 'react';
// Components
import Layout from './components/Layout';
import Dashboard from './components/dashboard';
//styles
import './Management.less';

const Management: React.FC = () => {
  return (
    <>
      <Layout>
        <div style={{ marginLeft: '200px', marginTop: '50px' }}>
          <Dashboard />
        </div>
      </Layout>
    </>
  );
};

export default Management;
