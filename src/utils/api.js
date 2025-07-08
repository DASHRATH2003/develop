import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://backendinnomatriocs.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    // Log request details for debugging
    console.log('Making request to:', config.url);
    console.log('Request config:', config);

    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => {
    // Log successful response for debugging
    console.log('Received response from:', response.config.url);
    console.log('Response data:', response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    if (error.response) {
      // Server responded with error
      console.error('Server error response:', error.response.data);
      throw new Error(error.response.data.message || `Server error: ${error.response.status}`);
    } else if (error.request) {
      // Request made but no response
      console.error('No response received:', error.request);
      throw new Error('No response from server. Please check your connection.');
    } else {
      // Error in request setup
      console.error('Request setup error:', error.message);
      throw new Error('Error setting up request. Please try again.');
    }
  }
);

// Auth API
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Jobs API
export const getAllJobs = async () => {
  try {
    const response = await api.get('/jobs');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getJob = async (id) => {
  try {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createJob = async (jobData) => {
  try {
    const response = await api.post('/jobs', jobData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateJob = async (id, jobData) => {
  try {
    const response = await api.patch(`/jobs/${id}`, jobData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteJob = async (id) => {
  try {
    const response = await api.delete(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 