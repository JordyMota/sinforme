import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.0.108:3001',
  baseURL: 'http://osinforme.com.br',
});

api.interceptors.response.use(undefined, (error) => {
    console.log(error);
    // if (error.response.status === 500) {
    //     error.response.data = { message: 'Internal Server Error' };
    // }
});

export default api;
