import axiosClient from './axiosClient';

export const authApi = {
  signin: async (userInfo) => {
    const END_POINT = 'users/signin';
    const response = await axiosClient.post(`/${END_POINT}`, userInfo);
    return response;
  },

  register: async (userInfo) => {
    const END_POINT = 'users/register';
    const response = await axiosClient.post(`/${END_POINT}`, userInfo);
    return response;
  },
};
