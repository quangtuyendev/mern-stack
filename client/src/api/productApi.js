import axiosClient from './axiosClient';

export const productApi = {
  fetchProducts: async (search = '') => {
    const END_POINT = 'products';
    const response = await axiosClient.get(`/${END_POINT}?search=${search}`);
    return response;
  },
};
