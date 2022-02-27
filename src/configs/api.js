import axios from 'axios';
import configs from './configs';

const instance = axios.create({
  baseURL: configs?.baseURL ?? '',
  headers: {
    'content-type': 'application/json',
  },
});

const getAPIData = async (method, url, postData) => {
  const response = await instance({
    method,
    url,
    data: postData,
  });
  return response;
};

export default getAPIData;
