import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container, Row } from 'reactstrap';
import Loading from '../common/Loading';
import Header from './Header';
import SearchBox from './SearchBox';

ShopPage.propTypes = {
  t: PropTypes.func.isRequired,
  searchResult: PropTypes.string,
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSearchProducts: PropTypes.func.isRequired,
};

ShopPage.defaultProps = {
  searchResult: '',
};

function ShopPage({ searchResult, children, loading, handleSearchProducts }) {
  return (
    <>
      <Header />
      {!loading ? (
        <Container>
          <SearchBox
            searchResult={searchResult}
            handleSearchProducts={handleSearchProducts}
          />
          <Row>{children}</Row>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default withTranslation('translations')(ShopPage);
