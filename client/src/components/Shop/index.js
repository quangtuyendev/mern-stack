import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import Header from './Header';

ShopPage.propTypes = {
  t: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function ShopPage({ children, loading, t }) {
  return (
    <>
      <Header />
      {!loading ? (
        <Container>
          <Row>{children}</Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col sm="12">
              <h5 className="display-4">{t('loading')}</h5>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default withTranslation('translations')(ShopPage);
