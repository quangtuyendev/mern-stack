import PropTypes from 'prop-types';
import React from 'react';

ProductImage.propTypes = {
  images: PropTypes.array,
};

ProductImage.defaultProps = {
  images: [],
};

function ProductImage({ images }) {
  /* This component should render a slick slider. Current is test only */
  function renderThumbImages() {
    return images.map((item, index) => (
      <a href="/" key={item}>
        <img src={item} alt={`Thumbnail ${index}`} />
      </a>
    ));
  }

  return (
    <div className="col-md-7 col-sm-7 ">
      <div className="product-image">
        <img src={images[0]} alt="..." />
      </div>
      <div className="product_gallery">{renderThumbImages()}</div>
    </div>
  );
}

export default ProductImage;
