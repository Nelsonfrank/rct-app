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
        <Dashboard />
      </Layout>
    </>
  );
};

export default Management;
