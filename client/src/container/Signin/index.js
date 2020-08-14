import React, { useEffect } from 'react';
import Signin from '../../components/Auth/Signin';
import Layout from '../../components/Layout';

function SigninContainer() {
  useEffect(() => {
    document.title = 'Signin - MERN';
  }, []);
  return (
    <Layout>
      <Signin />;
    </Layout>
  );
}

export default SigninContainer;
