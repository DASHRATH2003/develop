// import React, { forwardRef, useEffect, useRef, useState } from "react";
// import "./Career.css";
// import careerImage from "../../assets/career.jpg";
// import InfoBlock from "./Info Block/InfoBlock";
// import { FaBriefcase, FaGraduationCap, FaUsers, FaRocket, FaLaptopCode, FaChartLine, FaPalette, FaSearchDollar, FaHandshake, FaHeart, FaGlobe, FaCoffee } from 'react-icons/fa';

// // Static job data
// const openPositions = [
//   {
//     title: "Senior Full Stack Developer",
//     department: "Engineering",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     experience: "5+ years",
//     skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
//     description: "Looking for an experienced full-stack developer to lead development of enterprise applications."
//   },
//   {
//     title: "UI/UX Designer",
//     department: "Design",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     experience: "3+ years",
//     skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
//     description: "Seeking a creative designer to craft beautiful and intuitive user experiences."
//   },
//   {
//     title: "Digital Marketing Specialist",
//     department: "Marketing",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     experience: "2+ years",
//     skills: ["SEO", "Social Media", "Content Marketing", "Google Analytics", "Email Marketing"],
//     description: "Join our marketing team to drive growth through digital channels."
//   },
//   {
//     title: "Mobile App Developer",
//     department: "Engineering",
//     location: "Remote / Hybrid",
//     type: "Full-time",
//     experience: "3+ years",
//     skills: ["React Native", "iOS", "Android", "API Integration", "App Store Deployment"],
//     description: "Build next-generation mobile applications for our clients."
//   }
// ];

// const CompanyValues = () => (
//   <section className="py-16 bg-white">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center mb-12">Our Company Values</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div className="text-center">
//           <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//             <FaHandshake className="text-blue-600 text-2xl" />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Integrity</h3>
//           <p className="text-gray-600">We believe in honesty, transparency, and doing what's right for our clients and employees.</p>
//         </div>
//         <div className="text-center">
//           <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//             <FaHeart className="text-green-600 text-2xl" />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Passion</h3>
//           <p className="text-gray-600">We're passionate about technology and creating innovative solutions that make a difference.</p>
//         </div>
//         <div className="text-center">
//           <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//             <FaGlobe className="text-purple-600 text-2xl" />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Innovation</h3>
//           <p className="text-gray-600">We embrace new technologies and ideas to stay ahead in the digital landscape.</p>
//         </div>
//         <div className="text-center">
//           <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
//             <FaUsers className="text-red-600 text-2xl" />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
//           <p className="text-gray-600">We believe in collaboration, mutual respect, and supporting each other's growth.</p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const Career = forwardRef((props, ref) => {
//   const jobs = openPositions;

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   return (
//     <div ref={ref} className="career-page">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
//             <p className="text-xl mb-8">Build your career with a company that's transforming the digital landscape</p>
//             <div className="flex justify-center space-x-4">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition duration-300">
//                 View Openings
//               </button>
//               <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-md transition duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <CompanyValues />

//       {/* Job Listings Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>

//           {jobs.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-gray-600">No open positions at the moment. Please check back later.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {jobs.map((job, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
//                       <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                         job.type === 'Full-time' ? 'bg-blue-100 text-blue-800' :
//                         job.type === 'Part-time' ? 'bg-green-100 text-green-800' :
//                         job.type === 'Contract' ? 'bg-purple-100 text-purple-800' :
//                         'bg-gray-100 text-gray-800'
//                       }`}>
//                         {job.type}
//                       </span>
//                     </div>
//                     <div className="mb-4">
//                       <p className="text-gray-600 mb-2">
//                         <span className="font-semibold">Department:</span> {job.department}
//                       </p>
//                       <p className="text-gray-600 mb-2">
//                         <span className="font-semibold">Location:</span> {job.location}
//                       </p>
//                       <p className="text-gray-600 mb-2">
//                         <span className="font-semibold">Experience:</span> {job.experience}
//                       </p>
//                     </div>
//                     <div className="mb-4">
//                       <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {job.skills.map((skill, i) => (
//                           <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <p className="text-gray-700 mb-6 line-clamp-3">{job.description}</p>
//                     <div className="flex justify-between items-center">
//                       <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
//                         Apply Now
//                       </button>
//                       <span className="text-sm text-gray-500">Open Position</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <InfoBlock />
//     </div>
//   );
// });

// export default Career;
