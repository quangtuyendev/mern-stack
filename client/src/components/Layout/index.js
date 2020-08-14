import PropTypes from 'prop-types';
import React from 'react';
import Navbar from '../Navbar';

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
