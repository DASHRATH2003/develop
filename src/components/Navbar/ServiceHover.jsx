import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHover = () => {
  return (
    <div className="services-dropdown py-2">
      <Link
        to="/webdev"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        Web Development
      </Link>
      <Link
        to="/appdev"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        App Development
      </Link>
      <Link
        to="/digitalmarket"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        Digital Marketing
      </Link>
      <Link
        to="/logodesign"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        Logo Design
      </Link>
      <Link
        to="/socialmedia"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        Social Media
      </Link>
      <Link
        to="/devops"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50"
      >
        DevOps
      </Link>
    </div>
  );
};

export default ServiceHover;
