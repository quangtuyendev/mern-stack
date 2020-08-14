import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

ChangeLanguage.propTypes = {
  i18n: PropTypes.object.isRequired,
};

function ChangeLanguage({ i18n }) {
  const defaultLanguage = localStorage.getItem('i18nextLng');
  const changeLanguage = ({ target: { value } }) => {
    i18n.changeLanguage(value);
  };

  return (
    <select
      value={defaultLanguage}
      onChange={changeLanguage}
      style={{ width: 200, marginLeft: 'auto' }}
      className="custom-select"
    >
      <option value="en">English</option>
      <option value="vi">Vietnamse</option>
    </select>
  );
}

export default withTranslation('translations')(ChangeLanguage);
