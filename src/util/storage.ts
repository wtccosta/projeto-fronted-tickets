// import { ListFormat } from "typescript";

const tokenKey = 'Session-Token';

type LoginResponse = {
  'session-token': object;

};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem('Session-Token', JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(tokenKey) ?? '{}';
  console.log('STR:', str);
  
  return JSON.parse(str);
};

export const removeAuthData = () => {
  localStorage.removeItem(tokenKey);
};
