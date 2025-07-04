import React, { useEffect } from 'react';
import { FaIndustry, FaBuilding, FaHospital, FaPlane, FaShoppingBag, FaGraduationCap } from 'react-icons/fa';

const Industries = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const industries = [
    {
      icon: <FaBuilding className="w-12 h-12 text-blue-600" />,
      title: "Construction",
      description: "Digital solutions for construction and real estate industries."
    },
    {
      icon: <FaHospital className="w-12 h-12 text-blue-600" />,
      title: "Healthcare",
      description: "Innovative technology solutions for healthcare providers."
    },
    {
      icon: <FaPlane className="w-12 h-12 text-blue-600" />,
      title: "Travel & Tourism",
      description: "Digital transformation for travel and tourism businesses."
    },
    {
      icon: <FaShoppingBag className="w-12 h-12 text-blue-600" />,
      title: "Retail & E-commerce",
      description: "End-to-end solutions for retail and e-commerce businesses."
    },
    {
      icon: <FaGraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Education",
      description: "Technology solutions for educational institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaIndustry className="mx-auto h-16 w-16 text-blue-300 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl text-blue-200">Delivering innovative solutions across diverse sectors</p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                {industry.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Industry-Specific Solutions?</h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help your business with tailored technology solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Industries;