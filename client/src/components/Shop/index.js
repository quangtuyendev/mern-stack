import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import Loading from '../common/Loading';
import SearchBox from './SearchBox';

ShopPage.propTypes = {
  t: PropTypes.func.isRequired,
  searchResult: PropTypes.string,
  children: PropTypes.array.isRequired,
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
          <Row>
            <Col sm="12">
              <SearchBox
                searchResult={searchResult}
                handleSearchProducts={handleSearchProducts}
              />
            </Col>
          </Row>
          <Row>{children}</Row>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default withTranslation('translations')(ShopPage);
