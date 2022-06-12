import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.API_URL}` //`http://localhost:6767/api`
});
console.log(process.env.API_URL);
export const fetcher = url => api.get(url).then(res => res.data);

export default api;