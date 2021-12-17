import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = 'categories';
    return axiosClient.get(url, { params });
  },
};

export default categoryApi;
