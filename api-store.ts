import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:6767/api`
});

export const fetcher = url => api.get(url).then(res => res.data);

export default api;