import axiosClient from './axiosClient';

const END_POINT = 'products';
export const productApi = {
  fetchProducts: async (search = '') => {
    const response = await axiosClient.get(`/${END_POINT}?search=${search}`);
    return response;
  },
  fetchProductDetails: async (id) => {
    const response = await axiosClient.get(`/${END_POINT}/${id}`);
    return response;
  },
};
