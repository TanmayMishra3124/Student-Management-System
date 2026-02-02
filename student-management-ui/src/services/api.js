import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

const api = axios.create({
  baseURL: API_URL,
});

export const getStudents = () => api.get('/');
export const getStudent = (id) => api.get(`/${id}`);
export const createStudent = (student) => api.post('/', student);
export const updateStudent = (id, student) => api.put(`/${id}`, student);
export const deleteStudent = (id) => api.delete(`/${id}`);

export default api;
