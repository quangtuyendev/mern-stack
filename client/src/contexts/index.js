import React from 'react';
import AuthProvider from './AuthProvider';
import LoadingProvider from './LoadingProvider';

function Provider({ children }) {
  return (
    <AuthProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </AuthProvider>
  );
}

export default Provider;
