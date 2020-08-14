import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

function Header({ t }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">MERN Stack project</h1>
        <p className="lead">{t('jumbotron.desc')}</p>
      </div>
    </div>
  );
}

export default withTranslation('translations')(Header);
