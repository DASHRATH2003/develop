import axios from 'axios';

// Log the API URL for debugging
console.log('API URL:', process.env.REACT_APP_API_URL || 'https://backendinnomatrics.onrender.com/api');

const API_URL = process.env.REACT_APP_API_URL || 'https://backendinnomatrics.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true,
  timeout: 10000 // 10 second timeout
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Log request details
    console.log(`Making ${config.method.toUpperCase()} request to: ${config.baseURL}${config.url}`);
    console.log('Request headers:', config.headers);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    // Log successful response
    console.log(`Response from ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    
    if (error.response) {
      // Server responded with an error
      console.error('Server error:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
      throw new Error(error.response.data?.message || `Server error: ${error.response.status}`);
    } else if (error.request) {
      // Request made but no response
      console.error('No response received:', {
        request: error.request,
        config: error.config
      });
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
    console.log('Fetching all jobs...');
    const response = await api.get('/jobs');
    console.log('Jobs response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getAllJobs:', error);
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