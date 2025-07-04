import React, { useEffect } from 'react';
import { FaShieldAlt, FaUserLock, FaCookie, FaEnvelope, FaDatabase, FaUserSecret } from 'react-icons/fa';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto h-16 w-16 text-blue-300 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-200">Your privacy is our top priority</p>
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

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUserLock className="mr-3 text-blue-600" />
              Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              At Innomatrics Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaDatabase className="mr-3 text-blue-600" />
              Information We Collect
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>IP address and device information</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUserSecret className="mr-3 text-blue-600" />
              How We Use Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Primary Uses</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Provide and maintain our services</li>
                  <li>• Process your transactions</li>
                  <li>• Send you service updates</li>
                  <li>• Respond to your inquiries</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Additional Uses</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Improve our services</li>
                  <li>• Analyze usage patterns</li>
                  <li>• Prevent fraud</li>
                  <li>• Ensure security</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCookie className="mr-3 text-blue-600" />
              Cookies and Tracking
            </h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Essential Cookies</h4>
                  <p className="text-gray-600">Required for basic site functionality</p>
                </div>
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Analytics Cookies</h4>
                  <p className="text-gray-600">Help us improve our services</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaEnvelope className="mr-3 text-blue-600" />
              Contact Us
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@innomatricstech.com
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +91 8431655799
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 2nd Floor, Akshay Complex, BTM 2nd Stage, Bengaluru
                </p>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section>
            <div className="border-t pt-8">
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
