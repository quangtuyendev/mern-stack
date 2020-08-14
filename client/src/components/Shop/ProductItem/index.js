import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';

ProductItem.propTypes = {
  t: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
};

function ProductItem({ title, images, description, t }) {
  return (
    <Col sm={4}>
      <Card>
        <CardImg top width="100%" src={images[0]} alt={title} />
        <CardBody>
          <CardTitle>
            <h4>{title}</h4>
          </CardTitle>
          <CardText>{description}</CardText>
          <Button color="primary" size="lg">
            {t('addToCart')}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default withTranslation('translations')(ProductItem);
