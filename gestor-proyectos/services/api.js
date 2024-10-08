import axios from 'axios';

// Create a new instance of Axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Use environment variable for API base URL
});

// Add a request interceptor to include the token in all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
