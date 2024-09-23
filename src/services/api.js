import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2727',  // Verifique se a URL da API está correta
});

export const getData = async () => {
  try {
    const response = await api.get('/schools');  // Certifique-se de que o endpoint está correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};
