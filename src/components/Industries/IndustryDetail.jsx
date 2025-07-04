import React from 'react';
import { useParams } from 'react-router-dom';

const IndustryDetail = () => {
  const { industry } = useParams();

  const industryData = {
    retail: {
      title: "Retail Software Solutions",
      heroImage: "https://img.freepik.com/free-vector/retail-management-software-abstract-concept-illustration_335657-3897.jpg",
      description: "Transform your retail business with our cutting-edge software solutions. From inventory management to point-of-sale systems, we deliver comprehensive solutions that streamline operations and enhance customer experience.",
      features: [
        "Point of Sale (POS) Systems",
        "Inventory Management",
        "Customer Relationship Management",
        "E-commerce Integration",
        "Analytics and Reporting"
      ]
    },
    realestate: {
      title: "Real Estate Technology Solutions",
      heroImage: "https://img.freepik.com/free-vector/real-estate-searching-concept-illustration_114360-340.jpg",
      description: "Revolutionize property management and real estate operations with our innovative software solutions. We help real estate businesses streamline their processes and enhance client satisfaction.",
      features: [
        "Property Management Systems",
        "Virtual Property Tours",
        "Client Portal Solutions",
        "Real Estate CRM",
        "Market Analysis Tools"
      ]
    },
    pharmaceuticals: {
      title: "Pharmaceutical Software Solutions",
      heroImage: "https://img.freepik.com/free-vector/pharmaceutical-medicine-research-concept-illustration_114360-7076.jpg",
      description: "Enhance your pharmaceutical operations with our specialized software solutions. From research and development to supply chain management, we provide comprehensive solutions for the pharmaceutical industry.",
      features: [
        "Clinical Trial Management",
        "Quality Control Systems",
        "Regulatory Compliance Tools",
        "Supply Chain Management",
        "Laboratory Information Systems"
      ]
    },
    fmcg: {
      title: "FMCG Digital Solutions",
      heroImage: "https://img.freepik.com/free-vector/supply-chain-management-abstract-concept-illustration_335657-4747.jpg",
      description: "Optimize your FMCG business with our advanced software solutions. We help you manage inventory, track distribution, and enhance supply chain efficiency.",
      features: [
        "Supply Chain Optimization",
        "Distribution Management",
        "Trade Promotion Management",
        "Demand Forecasting",
        "Route Optimization"
      ]
    },
    ev: {
      title: "Electric Vehicle Technology Solutions",
      heroImage: "https://img.freepik.com/free-vector/electric-car-concept-illustration_114360-6873.jpg",
      description: "Power the future of transportation with our innovative EV software solutions. From charging infrastructure to fleet management, we provide comprehensive solutions for the EV industry.",
      features: [
        "Charging Station Management",
        "Fleet Management Systems",
        "Battery Analytics",
        "Predictive Maintenance",
        "User Mobile Applications"
      ]
    },
    technology: {
      title: "Enterprise Technology Solutions",
      heroImage: "https://img.freepik.com/free-vector/digital-transformation-concept-illustration_114360-5520.jpg",
      description: "Drive digital transformation with our enterprise technology solutions. We help businesses leverage cutting-edge technology to enhance operations and achieve their goals.",
      features: [
        "Cloud Solutions",
        "Digital Transformation",
        "Enterprise Resource Planning",
        "Business Intelligence",
        "Custom Software Development"
      ]
    }
  };

  const currentIndustry = industryData[industry?.toLowerCase()] || industryData.technology;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={currentIndustry.heroImage}
          alt={currentIndustry.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{currentIndustry.title}</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              {currentIndustry.description}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentIndustry.features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail; 