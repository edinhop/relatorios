import { api } from './api';

export const LoginService = {
  login: async (email, senha) => {
    const credentials = {
      email: email,
      password: senha,
    };
    return await api.post('/login', credentials);
  },
  resetPassword: async email => {
    return await api.post('/auth/forgot_password', { email });
  },
};
