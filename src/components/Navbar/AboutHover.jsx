import React from 'react';
import { Link } from 'react-router-dom';

const AboutHover = () => {
  return (
    <div className="services-dropdown py-2">
      <Link
        to="/about/overview"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        Company Overview
      </Link>
      <Link
        to="/about/vision-mission"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        Our Vision & Mission
      </Link>
      <Link
        to="/about/why-us"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        Why Us
      </Link>
    </div>
  );
};

export default AboutHover; 