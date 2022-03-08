import axios from 'axios';
import configs from './configs';

const instance = axios.create({
  baseURL: configs?.baseURL ?? '',
  headers: {
    'content-type': 'application/json',
  },
});

const getAPIData = async (method, url, postData, headers) => {
  const response = await instance({
    method,
    url,
    data: postData,
    headers: headers,
  });
  return response;
};

export default getAPIData;
