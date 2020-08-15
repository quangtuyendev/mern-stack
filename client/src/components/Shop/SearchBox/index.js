import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

SearchBox.propTypes = {
  handleSearchProducts: PropTypes.func.isRequired,
  searchResult: PropTypes.string,
  t: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {
  searchResult: '',
};

function SearchBox({ handleSearchProducts, searchResult, t }) {
  const [search, setSearch] = useState('');

  function handleChange({ target: { value } }) {
    setSearch(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearchProducts(search);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form-inline products-form-search"
      >
        <input
          onChange={handleChange}
          className="form-control mr-sm-2"
          type="text"
          placeholder={t('searchBoxPlaceholder')}
        />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
          {t('searchBtn')}
        </button>
      </form>
      {searchResult && (
        <h5 className="my-3">
          {t('searchResultMsg')}: {searchResult}
        </h5>
      )}
    </>
  );
}

export default withTranslation('translations')(SearchBox);
