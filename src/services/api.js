import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2727', 
});

export const getData = async () => {
  try {
    const response = await api.get('/schools'); 
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};
