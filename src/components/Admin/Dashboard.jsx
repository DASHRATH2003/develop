import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    location: '',
    type: 'Full-time',
    status: 'Open',
    department: '',
    experience: '',
    skills: []
  });
  const [showJobForm, setShowJobForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to get current user data
        await api.get('/auth/me');
        setLoading(false);
      } catch (error) {
        console.error('Auth check error:', error);
        navigate('/admin/login');
      }
    };

    checkAuth();
  }, [navigate]);

  // Get user data with proper error handling
  const getUserData = () => {
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        return null;
      }
      return JSON.parse(userData);
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  };

  const user = getUserData();

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get('/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        if (error.response?.status === 401) {
          navigate('/admin/login');
        }
      }
    };

    if (activeTab === 'jobs' && !loading) {
      fetchJobs();
    }
  }, [activeTab, loading, navigate]);

  // Handle UI setup
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Hide main navigation, footer, info bar and social icons
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    const infoBar = document.querySelector('.bg-blue-800.text-white.text-sm');
    const socialIcons = document.querySelector('.social-icons');
    
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (infoBar) infoBar.style.display = 'none';
    if (socialIcons) socialIcons.style.display = 'none';

    return () => {
      // Show main navigation, footer, info bar and social icons when component unmounts
      if (nav) nav.style.display = 'block';
      if (footer) footer.style.display = 'block';
      if (infoBar) infoBar.style.display = 'block';
      if (socialIcons) socialIcons.style.display = 'block';
    };
  }, []);

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/admin/login');
    }
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    const jobData = {
      ...newJob,
      skills: newJob.skills.length ? newJob.skills : ['Not specified'],
    };

    try {
      const response = await api.post('/jobs', jobData);
      
      if (response.data.status === 'success') {
        setJobs([response.data.data, ...jobs]);
        setNewJob({
          title: '',
          description: '',
          location: '',
          type: 'Full-time',
          status: 'Open',
          department: '',
          experience: '',
          skills: []
        });
        setShowJobForm(false);
        setSuccessMessage('Job posted successfully!');
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error creating job:', error);
      if (error.response?.status === 401) {
        // Try to refresh token first
        try {
          const refreshResponse = await api.post('/auth/refresh-token');
          if (refreshResponse.data.token) {
            // Retry job creation with the same data
            const retryResponse = await api.post('/jobs', jobData);
            if (retryResponse.data.status === 'success') {
              setJobs([retryResponse.data.data, ...jobs]);
              setNewJob({
                title: '',
                description: '',
                location: '',
                type: 'Full-time',
                status: 'Open',
                department: '',
                experience: '',
                skills: []
              });
              setShowJobForm(false);
              setSuccessMessage('Job posted successfully!');
              setTimeout(() => {
                setSuccessMessage('');
              }, 3000);
              return;
            }
          }
        } catch (refreshError) {
          navigate('/admin/login');
        }
      } else {
        alert(error.response?.data?.message || 'Failed to create job. Please try again.');
      }
    }
  };

  const handleJobChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const deleteJob = async (id) => {
    try {
      await api.delete(`/jobs/${id}`);
      setJobs(jobs.filter(job => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
      if (error.response?.status === 401) {
        navigate('/admin/login');
      } else {
        alert('Failed to delete job. Please try again.');
      }
    }
  };

  const toggleJobStatus = async (id) => {
    try {
      const job = jobs.find(j => j._id === id);
      const response = await api.patch(`/jobs/${id}`, {
        status: job.status === 'Open' ? 'Closed' : 'Open'
      });
      
      setJobs(jobs.map(j => j._id === id ? response.data : j));
    } catch (error) {
      console.error('Error updating job status:', error);
      if (error.response?.status === 401) {
        navigate('/admin/login');
      } else {
        alert('Failed to update job status. Please try again.');
      }
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // If no user data, redirect to login
  if (!user) {
    navigate('/admin/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-fade-in-out">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {successMessage}
          </div>
        </div>
      )}

      {/* Admin Navigation */}
      <nav className="bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-white">Innomatrics Admin Panel</h1>
              <div className="hidden md:flex space-x-4">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'dashboard' ? 'bg-black/20 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('jobs')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'jobs' ? 'bg-black/20 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  Job Management
                </button>
                <button 
                  onClick={() => setActiveTab('users')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'users' ? 'bg-black/20 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  User Management
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'settings' ? 'bg-black/20 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  Settings
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white text-lg hidden md:block">Welcome, {user.name || 'Admin'}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600/90 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && (
          <div className="px-4 py-6 sm:px-0">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Total Users Card */}
              <div className="bg-white/10 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-white/20">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-200 truncate">Total Users</dt>
                        <dd className="text-lg font-bold text-white">1,248</dd>
                        <dt className="text-xs font-medium text-green-400 mt-1">+12% from last month</dt>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Posts Card */}
              <div className="bg-white/10 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-white/20">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-200 truncate">Total Posts</dt>
                        <dd className="text-lg font-bold text-white">86</dd>
                        <dt className="text-xs font-medium text-green-400 mt-1">+5 new this week</dt>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Inquiries Card */}
              <div className="bg-white/10 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-white/20">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-200 truncate">New Inquiries</dt>
                        <dd className="text-lg font-bold text-white">14</dd>
                        <dt className="text-xs font-medium text-yellow-400 mt-1">3 require attention</dt>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Jobs Card */}
              <div className="bg-white/10 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-white/20">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-amber-500/20 rounded-md p-3">
                      <svg className="h-6 w-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-200 truncate">Active Jobs</dt>
                        <dd className="text-lg font-bold text-white">{jobs.filter(job => job.status === 'Open').length}</dd>
                        <dt className="text-xs font-medium text-blue-400 mt-1">{jobs.reduce((acc, job) => acc + job.applicants, 0)} total applicants</dt>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
              <div className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg border border-white/20 overflow-hidden">
                <div className="divide-y divide-white/10">
                  {[
                    { id: 1, action: 'New user registered', time: '2 minutes ago', user: 'John Doe', icon: 'user' },
                    { id: 2, action: 'Blog post published', time: '1 hour ago', user: 'Jane Smith', icon: 'document' },
                    { id: 3, action: 'Job application received', time: '3 hours ago', user: 'Frontend Developer position', icon: 'briefcase' },
                    { id: 4, action: 'Contact form submission', time: '5 hours ago', user: 'Robert Johnson', icon: 'mail' },
                  ].map((activity) => (
                    <div key={activity.id} className="p-4 hover:bg-white/5 transition-colors duration-150">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-500/20 rounded-full p-2 mr-3">
                          {activity.icon === 'user' && (
                            <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          )}
                          {activity.icon === 'document' && (
                            <svg className="h-5 w-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {activity.icon === 'briefcase' && (
                            <svg className="h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                          {activity.icon === 'mail' && (
                            <svg className="h-5 w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{activity.action}</p>
                          <p className="text-sm text-gray-300 truncate">{activity.user}</p>
                        </div>
                        <div className="ml-4 text-xs text-gray-400">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 px-4 py-3 text-right">
                  <button className="text-sm font-medium text-blue-400 hover:text-blue-300">
                    View all activity &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <button 
                  onClick={() => setActiveTab('jobs')}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-200 text-left"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Post a New Job</h3>
                      <p className="text-gray-300 text-sm">Add a new job opening to your careers page</p>
                    </div>
                  </div>
                </button>
                <button className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-200 text-left">
                  <div className="flex items-center">
                    <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Create New Post</h3>
                      <p className="text-gray-300 text-sm">Add a new blog post to your website</p>
                    </div>
                  </div>
                </button>
                <button className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-200 text-left">
                  <div className="flex items-center">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">View Inquiries</h3>
                      <p className="text-gray-300 text-sm">Check recent contact form submissions</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Job Management</h2>
              <button
                onClick={() => setShowJobForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Job
              </button>
            </div>

            {showJobForm && (
              <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Add New Job Opening</h3>
                <form onSubmit={handleJobSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newJob.title}
                        onChange={handleJobChange}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-1">
                        Department *
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={newJob.department}
                        onChange={handleJobChange}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
                        Experience Required *
                      </label>
                      <input
                        type="text"
                        id="experience"
                        name="experience"
                        value={newJob.experience}
                        onChange={handleJobChange}
                        placeholder="e.g. 2-3 years"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={newJob.location}
                        onChange={handleJobChange}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">
                        Job Type *
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={newJob.type}
                        onChange={handleJobChange}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">
                        Status *
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={newJob.status}
                        onChange={handleJobChange}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-300 mb-1">
                        Skills (comma-separated)
                      </label>
                      <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={newJob.skills.join(', ')}
                        onChange={(e) => {
                          const skillsArray = e.target.value.split(',').map(skill => skill.trim()).filter(Boolean);
                          setNewJob(prev => ({ ...prev, skills: skillsArray }));
                        }}
                        placeholder="e.g. React, Node.js, MongoDB"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                        Job Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={newJob.description}
                        onChange={handleJobChange}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowJobForm(false)}
                      className="px-4 py-2 border border-white/20 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200"
                    >
                      Post Job
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg border border-white/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/5">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Applicants
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Posted
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {jobs.map((job) => (
                      <tr key={job._id} className="hover:bg-white/5 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">{job.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{job.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-300">
                            {job.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            job.status === 'Open' 
                              ? 'bg-green-900/30 text-green-300' 
                              : 'bg-red-900/30 text-red-300'
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {job.applicants}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {job.posted}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => toggleJobStatus(job._id)}
                            className={`mr-2 ${
                              job.status === 'Open' 
                                ? 'text-yellow-400 hover:text-yellow-300' 
                                : 'text-green-400 hover:text-green-300'
                            }`}
                          >
                            {job.status === 'Open' ? 'Close' : 'Reopen'}
                          </button>
                          <button className="text-blue-400 hover:text-blue-300 mr-2">Edit</button>
                          <button 
                            onClick={() => deleteJob(job._id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {jobs.length === 0 && (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-white">No job openings</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Get started by posting a new job opening.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setShowJobForm(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      New Job
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-white mb-6">User Management</h2>
            <div className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg border border-white/20 overflow-hidden">
              <div className="px-4 py-5 sm:px-6 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-white">All Users</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/5">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Last Active
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastActive: '2 hours ago' },
                      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active', lastActive: '5 hours ago' },
                      { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Author', status: 'Pending', lastActive: '1 day ago' },
                      { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Subscriber', status: 'Active', lastActive: '3 days ago' },
                      { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'Subscriber', status: 'Inactive', lastActive: '2 weeks ago' },
                    ].map((user) => (
                      <tr key={user.id} className="hover:bg-white/5 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-medium">
                              {user.name.charAt(0)}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-white">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.role === 'Admin' ? 'bg-purple-900/30 text-purple-300' :
                            user.role === 'Editor' ? 'bg-blue-900/30 text-blue-300' :
                            user.role === 'Author' ? 'bg-green-900/30 text-green-300' :
                            'bg-gray-900/30 text-gray-300'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === 'Active' ? 'bg-green-900/30 text-green-300' :
                            user.status === 'Pending' ? 'bg-yellow-900/30 text-yellow-300' :
                            'bg-red-900/30 text-red-300'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {user.lastActive}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-400 hover:text-blue-300 mr-2">Edit</button>
                          <button className="text-red-400 hover:text-red-300">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-white/20 text-sm font-medium rounded-md text-gray-300 bg-white/5 hover:bg-white/10">
                    Previous
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-white/20 text-sm font-medium rounded-md text-gray-300 bg-white/5 hover:bg-white/10">
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                      <span className="font-medium">24</span> users
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-white/20 bg-white/5 text-sm font-medium text-gray-400 hover:bg-white/10">
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button aria-current="page" className="z-10 bg-blue-600 border-blue-600 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        1
                      </button>
                      <button className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        2
                      </button>
                      <button className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        3
                      </button>
                      <span className="relative inline-flex items-center px-4 py-2 border border-white/20 bg-white/5 text-sm font-medium text-gray-400">
                        ...
                      </span>
                      <button className="bg-white/5 border-white/20 text-gray-400 hover:bg-white/10 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        8
                      </button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-white/20 bg-white/5 text-sm font-medium text-gray-400 hover:bg-white/10">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
            <div className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg border border-white/20 overflow-hidden">
              <div className="divide-y divide-white/10">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-white">General Settings</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="site-name" className="block text-sm font-medium text-gray-300 mb-1">
                        Site Name
                      </label>
                      <input
                        type="text"
                        id="site-name"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="Innomatrics"
                      />
                    </div>
                    <div>
                      <label htmlFor="site-url" className="block text-sm font-medium text-gray-300 mb-1">
                        Site URL
                      </label>
                      <input
                        type="url"
                        id="site-url"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="https://innomatrics.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="timezone" className="block text-sm font-medium text-gray-300 mb-1">
                        Timezone
                      </label>
                      <select
                        id="timezone"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>(UTC+01:00) Berlin</option>
                        <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                        <option>(UTC+00:00) London</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date-format" className="block text-sm font-medium text-gray-300 mb-1">
                        Date Format
                      </label>
                      <select
                        id="date-format"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>F j, Y</option>
                        <option>Y-m-d</option>
                        <option>m/d/Y</option>
                        <option>d/m/Y</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-white">Email Settings</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="admin-email" className="block text-sm font-medium text-gray-300 mb-1">
                        Admin Email
                      </label>
                      <input
                        type="email"
                        id="admin-email"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="admin@innomatrics.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="from-email" className="block text-sm font-medium text-gray-300 mb-1">
                        From Email
                      </label>
                      <input
                        type="email"
                        id="from-email"
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="noreply@innomatrics.com"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email-template" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Template
                      </label>
                      <textarea
                        id="email-template"
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="Hello {name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Innomatrics Team"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-white">Security</h3>
                  <div className="mt-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="two-factor"
                          name="two-factor"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-white/10 rounded bg-white/5"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="two-factor" className="font-medium text-gray-300">
                          Enable Two-Factor Authentication
                        </label>
                        <p className="text-gray-400">Require admins to use two-factor authentication</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="password-reset"
                          name="password-reset"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-white/10 rounded bg-white/5"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="password-reset" className="font-medium text-gray-300">
                          Require Password Reset
                        </label>
                        <p className="text-gray-400">Force users to reset their password every 90 days</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;