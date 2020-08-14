import axiosClient from './axiosClient';

export const productApi = {
  fetchProducts: async () => {
    const END_POINT = 'products';
    const response = await axiosClient.get(`/${END_POINT}`);
    return response;
  },
};
