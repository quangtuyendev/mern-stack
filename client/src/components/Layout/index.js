import PropTypes from 'prop-types';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
