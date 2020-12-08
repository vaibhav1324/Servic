import axios from 'axios';

const DEFAULT_HEADERS: Record<string, string> = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: DEFAULT_HEADERS,
});

instance.interceptors.request.use((request) => {
  // add user token to the request header once user logs in.
  return request;
});

export default instance;
