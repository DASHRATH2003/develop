import React, { forwardRef, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Career.css";
import careerImage from "../../assets/career.jpg";
import InfoBlock from "./Info Block/InfoBlock";
import { Link } from 'react-router-dom';
import { FaBriefcase, FaGraduationCap, FaUsers, FaRocket, FaLaptopCode, FaChartLine, FaPalette, FaSearchDollar, FaHandshake, FaHeart, FaGlobe, FaCoffee } from 'react-icons/fa';
import { getAllJobs } from '../../utils/api';

// Shared data arrays moved outside components
const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "5+ years",
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    description: "Looking for an experienced full-stack developer to lead development of enterprise applications."
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    description: "Seeking a creative designer to craft beautiful and intuitive user experiences."
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2+ years",
    skills: ["SEO", "Social Media", "Content Marketing", "Google Analytics", "Email Marketing"],
    description: "Join our marketing team to drive growth through digital channels."
  },
  {
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    skills: ["React Native", "iOS", "Android", "API Integration", "App Store Deployment"],
    description: "Build next-generation mobile applications for our clients."
  }
];

const benefits = [
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Career Growth",
    description: "Clear career progression paths and regular promotions based on performance"
  },
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Latest Technology",
    description: "Work with cutting-edge technologies and modern development tools"
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Great Culture",
    description: "Collaborative environment with focus on learning and innovation"
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications"
  }
];

const departments = [
  {
    icon: <FaLaptopCode className="w-12 h-12" />,
    name: "Engineering",
    roles: ["Full Stack Developer", "Mobile Developer", "DevOps Engineer"]
  },
  {
    icon: <FaPalette className="w-12 h-12" />,
    name: "Design",
    roles: ["UI/UX Designer", "Graphic Designer", "Motion Designer"]
  },
  {
    icon: <FaSearchDollar className="w-12 h-12" />,
    name: "Marketing",
    roles: ["Digital Marketer", "Content Writer", "SEO Specialist"]
  },
  {
    icon: <FaBriefcase className="w-12 h-12" />,
    name: "Management",
    roles: ["Project Manager", "Product Owner", "Scrum Master"]
  }
];

const CompanyValues = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Company Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <FaHandshake className="text-blue-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Integrity</h3>
          <p className="text-gray-600">We believe in honesty, transparency, and doing what's right for our clients and employees.</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <FaHeart className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Passion</h3>
          <p className="text-gray-600">We're passionate about technology and creating innovative solutions that make a difference.</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <FaGlobe className="text-purple-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">We embrace new technologies and ideas to stay ahead in the digital landscape.</p>
        </div>
        <div className="text-center">
          <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <FaUsers className="text-red-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
          <p className="text-gray-600">We believe in collaboration, mutual respect, and supporting each other's growth.</p>
        </div>
      </div>
    </div>
  </section>
);

const CompanyBenefits = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Join Innomatrics?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaLaptopCode className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold ml-4">Latest Technology Stack</h3>
          </div>
          <p className="text-gray-600">Work with cutting-edge technologies and modern development practices.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaGraduationCap className="text-green-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold ml-4">Learning & Development</h3>
          </div>
          <p className="text-gray-600">Regular training sessions, workshops, and certification support.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaRocket className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold ml-4">Career Growth</h3>
          </div>
          <p className="text-gray-600">Clear career paths and opportunities for rapid advancement.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <FaCoffee className="text-red-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold ml-4">Work-Life Balance</h3>
          </div>
          <p className="text-gray-600">Flexible working hours and hybrid work options available.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaChartLine className="text-yellow-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold ml-4">Competitive Package</h3>
          </div>
          <p className="text-gray-600">Attractive salary, health benefits, and performance bonuses.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <FaUsers className="text-indigo-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold ml-4">Great Culture</h3>
          </div>
          <p className="text-gray-600">Fun team events, celebrations, and a supportive work environment.</p>
        </div>
      </div>
    </div>
  </section>
);

const GrowthOpportunities = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Growth Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Technical Growth</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Advanced Technology Training
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certification Support
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mentorship Programs
            </li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Leadership Growth</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Team Lead Opportunities
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Project Management Training
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Leadership Workshops
            </li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Personal Growth</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Soft Skills Development
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Communication Training
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Work-Life Balance Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const CareerComponent = forwardRef((props, ref) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const experienceRef = useRef();
  const phoneRef = useRef();
  
  const [loading, setLoading] = useState(false);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Uploaded file:", file);
  };

  useEffect(() => {
    emailjs.init("iQsjiARc7-03nKSZz");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_mch4m6h";
    const templateId = "template_t7wlj2d";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        experience: experienceRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
      });
      alert(
        "Email successfully sent. Please check your inbox.\n\nName: " +
          nameRef.current.value +
          "\nEmail: " +
          emailRef.current.value +
          "\nExperience: " +
          experienceRef.current.value +
          "\nPhone: " +
          phoneRef.current.value
      );
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="career-section bg-cover bg-center" ref={ref}>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              Career
            </h1>
            <p className="text-xl font-semibold text-gray-100 md:text-2xl">
              Build a robust career and be a part of our team
            </p>
            <hr className="text-sky-600 w-[50%] " />
          </div>
        </div>
      </section>
      <InfoBlock/>
      <div ref={ref} className="bg-gray-200 ; career-container ">
        <div className="career-content">
          <div className="career-image">
            <img src={careerImage} alt="Career" />
          </div>
          <div className="career-form border rounded-lg p-6 bg-white shadow-md">
            <h2 className="career-title">Apply for a Career</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  ref={nameRef}
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  ref={phoneRef}
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Enter your phone no"
                />
              </div>
              <div className="form-group">
                <label htmlFor="experience" className="form-label">Years of Experience</label>
                <input
                  type="number"
                  ref={experienceRef}
                  id="experience"
                  name="experience"
                  className="form-input"
                  placeholder="Years of experience"
                />
              </div>
              <div className="form-group">
                <label htmlFor="resume" className="form-label">Upload Resume (PDF)</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="form-input"
                />
              </div>
              <button type="submit" className="form-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

const Career = forwardRef((props, ref) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log('Starting to fetch jobs...');
        setLoading(true);
        setError(null);
        
        // Try fetching active jobs first
        try {
          const activeJobs = await getAllJobs();
          console.log('Received jobs:', activeJobs);
          
          if (Array.isArray(activeJobs)) {
            setJobs(activeJobs);
          } else {
            console.warn('Received non-array response:', activeJobs);
            setJobs([]);
          }
        } catch (activeError) {
          console.error('Error fetching active jobs:', activeError);
          // If active jobs fail, try fetching all jobs
          const allJobs = await getAllJobs();
          if (Array.isArray(allJobs)) {
            setJobs(allJobs);
          } else {
            throw new Error('Invalid data format received from server');
          }
        }
      } catch (error) {
        console.error('Final error fetching jobs:', error);
        setError(error.message || 'Failed to fetch jobs. Please try again later.');
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div ref={ref} className="career-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl mb-8">Build your career with a company that's transforming the digital landscape</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition duration-300">
                View Openings
              </button>
              <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-md transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <CompanyValues />

      {/* Benefits Section */}
      <CompanyBenefits />

      {/* Growth Opportunities Section */}
      <GrowthOpportunities />

      {/* Job Listings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-12">
              {error}
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No open positions at the moment. Please check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div key={job._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        job.type === 'Full-time' ? 'bg-blue-100 text-blue-800' :
                        job.type === 'Part-time' ? 'bg-green-100 text-green-800' :
                        job.type === 'Contract' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Department:</span> {job.department}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Location:</span> {job.location}
                      </p>
                      <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Experience:</span> {job.experience}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills && job.skills.map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 line-clamp-3">{job.description}</p>
                    <div className="flex justify-between items-center">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                        Apply Now
                      </button>
                      <span className="text-sm text-gray-500">
                        Posted {new Date(job.posted).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <InfoBlock />
    </div>
  );
});

export default Career;