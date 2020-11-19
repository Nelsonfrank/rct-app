import React from 'react';
// Components
import Layout from './components/Layout';
import ManagementRoutes from './ManagementRoutes';
//styles
import './Management.less';

const Management: React.FC = () => {
  return (
    <>
      <Layout>
        <ManagementRoutes />
      </Layout>
    </>
  );
};

export default Management;
