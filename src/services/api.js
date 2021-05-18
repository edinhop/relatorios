import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL,
});
