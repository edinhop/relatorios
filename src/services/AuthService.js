import { api } from './api';
import jwt_decode from 'jwt-decode';

const PREFIX = '@desbravador';

export default {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      api
        .post('/login', { email, password })
        .then(({ data }) => {
          localStorage.setItem(PREFIX, data.token);
          setHeaderAutorization(data.token);
          resolve(jwt_decode(data.token));
        })
        .catch(() => reject('Credenciais invalidas'));
    });
  },

  getLoggedUser: () => {
    let token = localStorage.getItem(PREFIX);

    if (!token) return false;

    setHeaderAutorization(token);
    return jwt_decode(token);
  },

  logout: async () => {
    localStorage.removeItem(PREFIX);
    setHeaderAutorization(null);
  },
};

function setHeaderAutorization(token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
