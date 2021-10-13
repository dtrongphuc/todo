import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { localStorage } from 'utils/localStorage';

const client = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

// Add a request interceptor
client.interceptors.request.use(
  function (config: AxiosRequestConfig): AxiosRequestConfig {
    // Get token from local storage
    const token: string = localStorage('token').get();

    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // If UNAUTHORIZED
    if (error.response?.status === 401) {
      localStorage('token').remove();
    }
    return Promise.reject(error);
  }
);

export default client;
