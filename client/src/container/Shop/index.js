import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { productApi } from '../../api/productApi';
import Layout from '../../components/Layout';
import ShopPage from '../../components/Shop';
import ProductItem from '../../components/Shop/ProductItem';
import { AuthContext } from '../../contexts/AuthContext';

function ShopContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token') || '';
  const {
    auth: { isAuthenticated },
  } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data } = await productApi.fetchProducts();
        setLoading(false);
        setProducts(data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error.message);
      }
    }
    if (isAuthenticated) fetchProducts();
  }, [token, isAuthenticated]);

  useEffect(() => {
    document.title = 'Shop - MERN';
    if (!isAuthenticated) history.push('/signin');
  }, [history, isAuthenticated]);

  function renderProducts() {
    return products.map((item) => <ProductItem key={item._id} {...item} />);
  }
  return isAuthenticated ? (
    <Layout>
      <ShopPage loading={loading}>{renderProducts()}</ShopPage>
    </Layout>
  ) : null;
}

export default ShopContainer;
