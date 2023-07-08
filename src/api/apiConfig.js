import {EndPoint} from '../constants/APIEndpoints';
import {BASE_URL} from '../constants/constants';

export const apiConfig = {
  login: {
    name: 'login',
    url: `${BASE_URL + EndPoint.login}`,
    method: 'POST',
  },
  register: {
    name: 'register',
    url: `${BASE_URL + EndPoint.register}`,
    method: 'POST',
  },
  // Add other API endpoints here
};
