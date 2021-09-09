import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { getAuthData } from './storage';

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  'https://chamados.corumba.ms.gov.br/apirest.php';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = () => {
  const loginData: LoginData = {
    username: CLIENT_ID,
    password: CLIENT_SECRET,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/initSession',
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = {
    ...config.headers,
    'Session-Token': getAuthData()['session_token']
  };

  console.log('teste', headers);
  

  return axios({ ...config, baseURL: BASE_URL, headers });
};

// // Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     //
//     return config;
//   },
//   function (error) {
//     //
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     //
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 401) {
//       history.push('/admin/auth');
//     }
//     return Promise.reject(error);
//   }
// );
