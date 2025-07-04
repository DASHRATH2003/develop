import React, { useEffect } from 'react';
import { FaExclamationCircle, FaInfoCircle, FaFileAlt, FaLink, FaImage, FaCopyright } from 'react-icons/fa';

const ContentDisclaimer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaExclamationCircle className="mx-auto h-16 w-16 text-blue-300 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Content Disclaimer</h1>
            <p className="text-xl text-blue-200">Important information about our content and services</p>
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

          {/* General Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaInfoCircle className="mr-3 text-blue-600" />
              General Disclaimer
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                The information provided on Innomatrics Technologies' website is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our website.
              </p>
            </div>
          </section>

          {/* Content Usage */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaFileAlt className="mr-3 text-blue-600" />
              Content Usage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Permitted Use</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Personal reference</li>
                  <li>• Educational purposes</li>
                  <li>• Non-commercial sharing</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Prohibited Use</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Commercial reproduction</li>
                  <li>• Unauthorized distribution</li>
                  <li>• Content modification</li>
                </ul>
              </div>
            </div>
          </section>

          {/* External Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaLink className="mr-3 text-blue-600" />
              External Links
            </h2>
            <div className="bg-yellow-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </div>
          </section>

          {/* Media Content */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaImage className="mr-3 text-blue-600" />
              Media Content
            </h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                All images, videos, and other media content on our website are either owned by us, licensed to us, or used with permission. These materials may not be copied, reproduced, or distributed without our explicit consent.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">• Stock photos are licensed from respective providers</p>
                <p className="text-gray-600">• Client work is shown with permission</p>
                <p className="text-gray-600">• Portfolio items may be subject to copyright</p>
              </div>
            </div>
          </section>

          {/* Copyright Notice */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCopyright className="mr-3 text-blue-600" />
              Copyright Notice
            </h2>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-600">
                © {new Date().getFullYear()} Innomatrics Technologies. All rights reserved. Any redistribution or reproduction of part or all of the contents in any form is prohibited without our express written permission.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="border-t pt-8">
              <p className="text-gray-600">
                For any questions or concerns about this disclaimer, please contact us at legal@innomatricstech.com or call us at +91 8431655799.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContentDisclaimer;
