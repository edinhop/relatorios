import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  function(config) {
    // lógica para adicionar o refresh token se estiver armazenado
    // no localstore, esse refresh token para obter o novo access token
    // é preciso usar o access token para accessar o restante dos recursos
    // ele é adicionado no header de todas as requesições em todas as páginas.
    return config; // ADICIONE UM console.log PARA VER O QUE O TEM DENTRO DE CONFIG
  },
  function(error) {
    return Promise.reject(error);
  }
);
