import axios from 'axios';

// const API_URL = 'https://leetassist-ie0e.onrender.com/api';
const API_URL = 'http://localhost:5000/api'

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API methods
export const analyzeProblem = async (problemText) => {
  try {
    const res = await api.post('/ai/analyze', { problemText });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const login = async (email, password) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const register = async (name, email, password) => {
  try {
    const res = await api.post('/auth/register', { name, email, password });
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export const getUser = async () => {
  try {
    const res = await api.get('/auth/user');
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export default api;
