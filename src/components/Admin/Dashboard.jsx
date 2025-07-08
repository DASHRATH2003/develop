import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllJobs, createJob, updateJob, deleteJob } from '../../utils/api';
import { Pencil, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    type: 'Full-time',
    experience: '',
    salary: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchJobs();
  }, [navigate]);

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs();
      setJobs(data);
    } catch (err) {
      setError('Failed to fetch jobs');
      if (err.response?.status === 401) {
        navigate('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        ...formData,
        requirements: formData.requirements.split('\n').filter(r => r.trim())
      };

      if (editingJob) {
        await updateJob(editingJob._id, jobData);
      } else {
        await createJob(jobData);
      }

      setShowForm(false);
      setEditingJob(null);
      setFormData({
        title: '',
        description: '',
        requirements: '',
        location: '',
        type: 'Full-time',
        experience: '',
        salary: ''
      });
      fetchJobs();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save job');
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      ...job,
      requirements: job.requirements.join('\n')
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await deleteJob(id);
        fetchJobs();
      } catch (err) {
        setError('Failed to delete job');
      }
    }
  };

  if (loading) return <div className="text-center text-lg mt-10 font-medium text-gray-600">Loading jobs...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingJob(null);
            setFormData({
              title: '',
              description: '',
              requirements: '',
              location: '',
              type: 'Full-time',
              experience: '',
              salary: ''
            });
          }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition"
        >
          + Add Job
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {showForm && (
        <div className="bg-white border rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">{editingJob ? 'Edit Job' : 'Add New Job'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Job Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Experience</label>
              <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Salary</label>
              <input type="text" name="salary" value={formData.salary} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Job Type</label>
              <select name="type" value={formData.type} onChange={handleInputChange} className="w-full border rounded px-3 py-2">
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block font-medium mb-1">Description</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" className="w-full border rounded px-3 py-2"></textarea>
            </div>
            <div className="sm:col-span-2">
              <label className="block font-medium mb-1">Requirements (one per line)</label>
              <textarea name="requirements" value={formData.requirements} onChange={handleInputChange} rows="3" className="w-full border rounded px-3 py-2"></textarea>
            </div>
            <div className="flex justify-end gap-3 sm:col-span-2">
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">Cancel</button>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                {editingJob ? 'Update Job' : 'Create Job'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white border rounded-lg p-5 shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{job.location} • {job.type}</p>
            <p className="text-gray-700 text-sm mb-4">{job.description.slice(0, 100)}...</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{job.experience} exp | ₹{job.salary}</span>
              <div className="flex gap-3">
                <button onClick={() => handleEdit(job)} title="Edit" className="text-indigo-600 hover:text-indigo-800 transition"><Pencil size={18} /></button>
                <button onClick={() => handleDelete(job._id)} title="Delete" className="text-red-600 hover:text-red-800 transition"><Trash2 size={18} /></button>
              </div>
            </div>
          </div>
        ))}
        {jobs.length === 0 && (
          <div className="col-span-full text-center text-gray-500 text-lg mt-6">
            No jobs posted yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
