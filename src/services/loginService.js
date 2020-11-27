import { api } from './api';

const CLIENT = 'my-react-app';
const SECRET_KEY = '@321';

export const LoginService = {
  login: async (email, senha) => {
    const PATH = `?grant_type=password&username=${email}&password=${senha}`;

    const headers = {
      Authorization: `Basic ${btoa(`${CLIENT}:${SECRET_KEY}`)}`,
    };

    return await api.post(`oauth/token${PATH}`, {}, { headers });
  },
};
