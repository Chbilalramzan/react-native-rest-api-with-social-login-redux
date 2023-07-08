import {BASE_URL, IMAGE_CONFIG_HEADER} from '../constants/constants';
import {store} from '../redux/store';
import {fetchWithInterceptor} from './Interceptor';

export const getRequest = (endPoint, params) => {
  const queryParams = new URLSearchParams(params).toString();
  if (queryParams) {
    endPoint += `?${queryParams}`;
  }

  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  };

  const authToken = store.getState().auth.token;
  if (authToken) {
    options.headers = {
      ...options.headers,
      Authorization: authToken,
    };
  }

  return fetchWithInterceptor(`${BASE_URL}/${endPoint}`, options);
};

export const postRequest = (endPoint, data) => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  };

  //   const authToken = store.getState().auth.token;
  //   if (authToken) {
  //     options.headers = {
  //       ...options.headers,
  //       Authorization: authToken,
  //     };
  //   }  console.log(endPoint);
  console.log('================Sent====================');
  console.log(endPoint);
  console.log(data);
  console.log('====================================');

  return fetchWithInterceptor(`${BASE_URL}${endPoint}`, options);
};

export const postMultipartRequest = (endPoint, data) => {
  const options = {
    method: 'POST',
    headers: IMAGE_CONFIG_HEADER,
    body: data,
  };

  const authToken = store.getState().auth.token;

  if (authToken) {
    options.headers = {
      ...options.headers,
      Authorization: authToken,
    };
  }

  return fetchWithInterceptor(`${BASE_URL}/${endPoint}`, options);
};

export const postOTP = (endPoint, data) => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  };

  console.log('================Sent====================');
  console.log(endPoint);
  console.log(data);
  console.log('====================================');

  return fetchWithInterceptor(`${endPoint}`, options);
};
