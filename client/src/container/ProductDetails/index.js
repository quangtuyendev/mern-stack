import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../../api/productApi';
import Layout from '../../components/Layout';
import ProductDetails from '../../components/ProductDetails';
import { AuthContext } from '../../contexts/AuthProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { showLoading, hideLoading } from '../../actions/loading';
import Loading from '../../components/common/Loading';

function ProductDetailsContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState('');
  const { loading, dispatch: loadingDispatch } = useContext(LoadingContext);
  const {
    auth: { isAuthenticated },
  } = useContext(AuthContext);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        loadingDispatch(showLoading());
        const { data } = await productApi.fetchProductDetails(id);
        setProduct(data);
        loadingDispatch(hideLoading());
      } catch (error) {
        loadingDispatch(hideLoading());
        setError(error.response.data.msg);
      }
    }
    if (isAuthenticated) fetchProductDetails();
  }, [isAuthenticated, id, loadingDispatch]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <ProductDetails error={error} product={product} />
      )}
    </Layout>
  );
}

export default ProductDetailsContainer;
