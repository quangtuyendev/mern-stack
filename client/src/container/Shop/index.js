import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { productApi } from '../../api/productApi';
import Layout from '../../components/Layout';
import ShopPage from '../../components/Shop';
import ProductItem from '../../components/Shop/ProductItem';
import { AuthContext } from '../../contexts/AuthProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { showLoading, hideLoading } from '../../actions/loading';
import ProductList from '../../components/Shop/ProductList';

function ShopContainer() {
  const { loading, dispatch: loadingDispatch } = useContext(LoadingContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const token = localStorage.getItem('token') || '';

  const {
    auth: { isAuthenticated },
  } = useContext(AuthContext);
  const history = useHistory();

  function handleSearchProducts(searchValue) {
    setSearch(searchValue);
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        loadingDispatch(showLoading());
        const { data } = await productApi.fetchProducts(search);
        loadingDispatch(hideLoading());
        setProducts(data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error.message);
      }
    }
    if (isAuthenticated) fetchProducts();
  }, [token, isAuthenticated, loadingDispatch, search]);

  useEffect(() => {
    document.title = 'Shop - MERN';
    if (!isAuthenticated) history.push('/signin');
  }, [history, isAuthenticated]);

  function renderProducts() {
    return products.map((item) => <ProductItem key={item._id} {...item} />);
  }
  return isAuthenticated ? (
    <Layout>
      <ShopPage
        searchResult={search}
        handleSearchProducts={handleSearchProducts}
        loading={loading}
      >
        <ProductList>{renderProducts()}</ProductList>
      </ShopPage>
    </Layout>
  ) : null;
}

export default ShopContainer;
