import React, { useEffect } from 'react';
import Register from '../../components/Auth/Register';
import Layout from '../../components/Layout';

function RegisterContainer() {
  useEffect(() => {
    document.title = 'Register - MERN';
  }, []);
  return (
    <Layout>
      <Register />;
    </Layout>
  );
}

export default RegisterContainer;
