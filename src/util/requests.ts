import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { Tech } from 'types/Techs';
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
    'Session-Token': getAuthData()['session_token'],
  };

  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const getTech = async (id: string) => {

  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/User/${id}`,
    withCredentials: false,
  };
  const { data } = await requestBackend(config);
  
  return data as Tech;  
};

