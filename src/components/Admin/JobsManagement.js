import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import AddJobForm from './AddJobForm';
import axios from 'axios';

const JobsTable = ({ jobs, onEdit, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Position
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Department
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Experience
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {jobs.map((job, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">{job.title}</div>
              <div className="text-sm text-gray-500">{job.type}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{job.department}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{job.location}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{job.experience}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {job.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="flex space-x-3">
                <button 
                  onClick={() => onEdit(job)} 
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <FiEdit2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onDelete(job.id)} 
                  className="text-red-600 hover:text-red-900"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const JobsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/jobs');
      setJobs(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch jobs. Please try again later.');
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddJob = async (newJob) => {
    try {
      const response = await axios.post('https://backendinnomatrics.onrender.com/api/jobs', newJob, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setJobs(prevJobs => [...prevJobs, response.data]);
      setError(null);
    } catch (err) {
      setError('Failed to add job. Please try again.');
      console.error('Error adding job:', err);
    }
  };

  const handleEdit = async (job) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/jobs/${job._id}`, job, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setJobs(prevJobs => prevJobs.map(j => j._id === job._id ? response.data : j));
      setError(null);
    } catch (err) {
      setError('Failed to update job. Please try again.');
      console.error('Error updating job:', err);
    }
  };

  const handleDelete = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await axios.delete(`http://localhost:5000/api/jobs/${jobId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setJobs(prevJobs => prevJobs.filter(job => job._id !== jobId));
        setError(null);
      } catch (err) {
        setError('Failed to delete job. Please try again.');
        console.error('Error deleting job:', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-600">Loading jobs...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Jobs Management</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage job postings and applications
        </p>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="mb-6 flex justify-between items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button 
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FiPlus className="w-5 h-5 mr-2" />
          Add Job
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <JobsTable 
          jobs={jobs.filter(job => 
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase())
          )} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{jobs.length}</span> of{' '}
          <span className="font-medium">{jobs.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {showAddForm && (
        <AddJobForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddJob}
        />
      )}
    </div>
  );
};

export default JobsManagement; 