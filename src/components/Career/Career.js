import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiMapPin, FiBriefcase, FiClock, FiDollarSign } from 'react-icons/fi';

// Define the API URL based on environment
const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

// Decorative SVG Components
const WaveBackground = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-0">
    <svg viewBox="0 0 1440 320" className="w-full h-auto">
      <path
        fill="#EEF2FF"
        fillOpacity="0.4"
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
);

const CirclePattern = () => (
  <div className="absolute top-0 right-0 -z-10 opacity-10">
    <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
      <defs>
        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-blue-500" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
  </div>
);

const TeamIllustration = () => (
  <div className="absolute right-0 bottom-0 opacity-10 -z-10">
    <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
      <circle cx="250" cy="250" r="200" fill="#3B82F6" fillOpacity="0.1"/>
      <circle cx="250" cy="250" r="150" fill="#3B82F6" fillOpacity="0.1"/>
      <circle cx="250" cy="250" r="100" fill="#3B82F6" fillOpacity="0.1"/>
    </svg>
  </div>
);

const BackgroundDecoration = () => (
  <>
    {/* Abstract shapes */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Top right decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-bl-full transform rotate-12"></div>
      
      {/* Bottom left decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 rounded-tr-full"></div>
      
      {/* Center decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-teal-500/5 rounded-full blur-3xl"></div>
    </div>

    {/* Grid pattern overlay */}
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA3AF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }}></div>

    {/* Curved wave decoration */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 320" className="w-full h-auto">
        <path fill="#ffffff" fillOpacity="0.05" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </>
);

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${API_URL}/jobs`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        if (!response.data) {
          throw new Error('No data received from server');
        }

        const activeJobs = response.data.filter(job => {
          const isActive = !job.status || job.status.toLowerCase() === 'active';
          return isActive;
        });
        
        setJobs(activeJobs);
        if (activeJobs.length > 0) {
          setSelectedJob(activeJobs[0]);
        }
        
        setLoading(false);
      } catch (err) {
        setError(
          `Failed to fetch jobs. ${err.message}. ` +
          `Status: ${err.response?.status}. ` +
          `Details: ${err.response?.data?.message || 'Unknown error'}`
        );
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center relative">
        <BackgroundDecoration />
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center relative">
        <BackgroundDecoration />
        <div className="text-center py-10 px-4 max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/10">
            <div className="text-red-300 mb-4">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Retry Loading Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center relative">
        <BackgroundDecoration />
        <div className="text-center py-10 px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">No open positions at the moment</h2>
            <p className="text-white/80">Please check back later for new opportunities</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-12 px-4 relative">
      <BackgroundDecoration />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 relative bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-100/80">
            Discover opportunities to grow your career with Innomatrics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {/* Job List */}
          <div className="md:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-6 text-white flex items-center">
                <span className="mr-2">Open Positions</span>
                <svg className="w-5 h-5 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </h2>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className={`p-4 rounded-xl cursor-pointer transition-all transform hover:scale-102 border ${
                      selectedJob?._id === job._id
                        ? 'bg-white/20 border-blue-400/50 shadow-lg'
                        : 'bg-white/10 hover:bg-white/15 border-white/10'
                    }`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <h3 className="font-semibold text-white">{job.title}</h3>
                    <div className="flex items-center text-blue-100/80 text-sm mt-2">
                      <FiMapPin className="mr-2" />
                      <span>{job.location || 'Remote'}</span>
                    </div>
                    {job.type && (
                      <div className="flex items-center text-blue-100/80 text-sm mt-1">
                        <FiBriefcase className="mr-2" />
                        <span>{job.type}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="md:col-span-2">
            {selectedJob ? (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/10">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  {selectedJob.title}
                </h2>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center text-blue-100/80 bg-white/5 rounded-xl p-4 border border-white/5">
                    <FiMapPin className="mr-3 text-blue-300" />
                    <span>{selectedJob.location || 'Remote'}</span>
                  </div>
                  {selectedJob.type && (
                    <div className="flex items-center text-blue-100/80 bg-white/5 rounded-xl p-4 border border-white/5">
                      <FiBriefcase className="mr-3 text-blue-300" />
                      <span>{selectedJob.type}</span>
                    </div>
                  )}
                  {selectedJob.experience && (
                    <div className="flex items-center text-blue-100/80 bg-white/5 rounded-xl p-4 border border-white/5">
                      <FiClock className="mr-3 text-blue-300" />
                      <span>{selectedJob.experience}</span>
                    </div>
                  )}
                  {selectedJob.salary && (
                    <div className="flex items-center text-blue-100/80 bg-white/5 rounded-xl p-4 border border-white/5">
                      <FiDollarSign className="mr-3 text-blue-300" />
                      <span>{selectedJob.salary}</span>
                    </div>
                  )}
                </div>

                {selectedJob.description && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Job Description</h3>
                    <div className="prose max-w-none">
                      <p className="text-blue-100/80 bg-white/5 rounded-xl p-4 border border-white/5">
                        {selectedJob.description}
                      </p>
                    </div>
                  </div>
                )}

                {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-white">Requirements</h3>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-blue-100/80">
                          <span className="mr-2 text-blue-300">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium">
                  Apply Now
                </button>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center border border-white/10">
                <div className="text-blue-100/80">
                  Select a position to view details
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career; 