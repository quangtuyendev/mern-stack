import PropTypes from 'prop-types';
import React from 'react';

ProductInfo.propTypes = {
  info: PropTypes.object,
};

ProductInfo.defaultProps = {
  info: {},
};

function ProductInfo({ info }) {
  const { title, description, sizes, price } = info;

  function renderProductSize() {
    return sizes.map((item) => (
      <li key={item}>
        <button type="button" className="btn btn-default btn-xs">
          {item.toUpperCase()}
        </button>
      </li>
    ));
  }
  return (
    <div className="col-md-5 col-sm-5 " style={{ border: '0px solid #e5e5e5' }}>
      <h3 className="prod_title">{title}</h3>
      <p>{description}</p>
      <br />
      <div>
        <h2>Available Colors</h2>
        <ul className="list-inline prod_color display-layout">
          <li>
            <p>Green</p>
            <div className="color bg-green" />
          </li>
          <li>
            <p>Blue</p>
            <div className="color bg-blue" />
          </li>
          <li>
            <p>Red</p>
            <div className="color bg-red" />
          </li>
          <li>
            <p>Orange</p>
            <div className="color bg-orange" />
          </li>
        </ul>
      </div>
      <br />
      {sizes && (
        <div>
          <h2>
            Size <small>Please select one</small>
          </h2>
          <ul className="list-inline prod_size display-layout">
            {renderProductSize()}
          </ul>
        </div>
      )}
      <br />
      <div>
        <div className="product_price">
          <h1 className="price">Ksh{price}</h1>
          <span className="price-tax">Ex Tax: Ksh{price}</span>
          <br />
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-default btn-lg">
          Add to Cart
        </button>
        <button type="button" className="btn btn-default btn-lg">
          Add to Wishlist
        </button>
      </div>
      <div className="product_social">
        <ul className="list-inline display-layout">
          <li>
            <a href="/">
              <i className="fa fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-envelope-square" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-rss-square" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductInfo;
