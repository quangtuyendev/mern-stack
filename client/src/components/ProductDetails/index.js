import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

function ProductDetails({ product, error }) {
  const { images, ...info } = product;
  return Object.keys(product).length ? (
    <div className="container body">
      <div className="row">
        <div className="col-md-12 col-sm-12 ">
          <div className="x_panel">
            <div className="x_content">
              <ProductImage images={images} />
              <ProductInfo info={info} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container body">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="mt-4">{error}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
