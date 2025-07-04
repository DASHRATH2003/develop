import React, { useEffect } from 'react';
import { FaGavel, FaUserShield, FaFileContract, FaHandshake, FaExclamationTriangle, FaFileAlt } from 'react-icons/fa';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaGavel className="mx-auto h-16 w-16 text-blue-300 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-200">Please read these terms carefully before using our services</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Last Updated */}
          <div className="text-gray-600 mb-8">
            Last Updated: March 15, 2024
          </div>

          {/* Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaHandshake className="mr-3 text-blue-600" />
              Agreement to Terms
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                By accessing or using Innomatrics Technologies' services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </div>
          </section>

          {/* Use License */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaFileContract className="mr-3 text-blue-600" />
              Use License
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Permitted Use</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access our services for personal or business use</li>
                  <li>Use features and functionalities as provided</li>
                  <li>Download or print materials for personal use</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Restrictions</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use materials for commercial purposes</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUserShield className="mr-3 text-blue-600" />
              User Responsibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Account Security</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Maintain account confidentiality</li>
                  <li>• Update account information</li>
                  <li>• Report unauthorized access</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Content Guidelines</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Provide accurate information</li>
                  <li>• Respect intellectual property</li>
                  <li>• Follow community guidelines</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaExclamationTriangle className="mr-3 text-blue-600" />
              Disclaimer
            </h2>
            <div className="bg-yellow-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                Our services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaFileAlt className="mr-3 text-blue-600" />
              Modifications to Terms
            </h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                We reserve the right to revise these terms of service at any time without notice. By using our services, you agree to be bound by the current version of these terms of service.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="border-t pt-8">
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at legal@innomatricstech.com or call us at +91 8431655799.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
