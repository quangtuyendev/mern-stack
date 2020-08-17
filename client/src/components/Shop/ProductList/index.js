import PropTypes from 'prop-types';

ProductList.propTypes = {
  children: PropTypes.array.isRequired,
};

function ProductList({ children }) {
  return children;
}

export default ProductList;
