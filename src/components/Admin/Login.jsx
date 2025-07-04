import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Verify token is valid
          const response = await api.get('/auth/me');
          if (response.data.status === 'success') {
            navigate('/admin/dashboard');
          }
        } catch (error) {
          // Clear invalid tokens
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Basic validation
      if (!email || !password) {
        setError('Please enter both email and password');
        setLoading(false);
        return;
      }

      const response = await api.post('/auth/login', {
        email,
        password
      });

      if (response.data && response.data.token) {
        // Store token
        localStorage.setItem('token', response.data.token);
        
        // Store user data
        const userData = response.data.data && response.data.data.user ? response.data.data.user : {
          name: email.split('@')[0],
          email: email,
          role: 'admin'
        };
        localStorage.setItem('user', JSON.stringify(userData));

        // Set authorization header for future requests
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        // Verify token works by making a test request
        try {
          await api.get('/auth/me');
          // If successful, navigate to dashboard
          window.scrollTo(0, 0);
          navigate('/admin/dashboard', { replace: true });
        } catch (verifyError) {
          throw new Error('Authentication failed after login');
        }
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid email or password');
      // Clear any invalid tokens
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/admin/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 