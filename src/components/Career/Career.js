import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiMapPin, FiBriefcase, FiClock, FiDollarSign } from 'react-icons/fi';

// Define the API URL based on environment
const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'https://backendinnomatriocs.onrender.com/api';

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative">
        <CirclePattern />
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading opportunities...</p>
        </div>
        <WaveBackground />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative">
        <CirclePattern />
        <div className="text-center py-10 px-4 max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <div className="text-red-600 mb-4">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
            >
              Retry Loading Jobs
            </button>
          </div>
        </div>
        <WaveBackground />
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative">
        <CirclePattern />
        <div className="text-center py-10 px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">No open positions at the moment</h2>
            <p className="text-gray-600">Please check back later for new opportunities</p>
          </div>
        </div>
        <WaveBackground />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 relative">
      <CirclePattern />
      <TeamIllustration />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          </div>
          
          {/* Career Illustration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="#3B82F6" strokeWidth="4" strokeDasharray="8 8"/>
              <circle cx="100" cy="100" r="40" fill="#3B82F6" fillOpacity="0.2"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Join Our Team
            <div className="absolute -top-6 -right-6 w-12 h-12 opacity-20">
              <svg viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="#3B82F6" strokeWidth="2"/>
                <path d="M20 12V28M12 20H28" stroke="#3B82F6" strokeWidth="2"/>
              </svg>
            </div>
          </h1>
          <p className="text-xl text-gray-600 relative">
            Discover opportunities to grow your career with Innomatrics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {/* Job List */}
          <div className="md:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <span className="mr-2">Open Positions</span>
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </h2>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className={`p-4 rounded-lg cursor-pointer transition-all transform hover:scale-102 ${
                      selectedJob?._id === job._id
                        ? 'bg-blue-50 border-blue-500 shadow-md'
                        : 'bg-white hover:bg-gray-50 border-gray-200 hover:shadow-md'
                    } border`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <h3 className="font-semibold text-gray-800">{job.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-2">
                      <FiMapPin className="mr-2" />
                      <span>{job.location || 'Remote'}</span>
                    </div>
                    {job.type && (
                      <div className="flex items-center text-gray-600 text-sm mt-1">
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
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                  {selectedJob.title}
                  <div className="ml-4 opacity-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M12 8V16M8 12H16" stroke="#3B82F6" strokeWidth="2"/>
                    </svg>
                  </div>
                </h2>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                    <FiMapPin className="mr-3 text-blue-500" />
                    <span>{selectedJob.location || 'Remote'}</span>
                  </div>
                  {selectedJob.type && (
                    <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                      <FiBriefcase className="mr-3 text-blue-500" />
                      <span>{selectedJob.type}</span>
                    </div>
                  )}
                  {selectedJob.experience && (
                    <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                      <FiClock className="mr-3 text-blue-500" />
                      <span>{selectedJob.experience}</span>
                    </div>
                  )}
                  {selectedJob.salary && (
                    <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                      <FiDollarSign className="mr-3 text-blue-500" />
                      <span>{selectedJob.salary}</span>
                    </div>
                  )}
                </div>

                {selectedJob.description && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Job Description</h3>
                    <div className="prose max-w-none text-gray-600">
                      <p className="whitespace-pre-wrap bg-gray-50 rounded-lg p-4">
                        {selectedJob.description}
                      </p>
                    </div>
                  </div>
                )}

                {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Requirements</h3>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-md hover:shadow-lg font-medium">
                  Apply Now
                </button>
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center">
                <div className="text-gray-600">
                  Select a position to view details
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <WaveBackground />
    </div>
  );
};

export default Career; 