import React, { useEffect } from 'react';
import { FaMoneyBillWave, FaRegClock, FaExchangeAlt, FaRegTimesCircle, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

const RefundCancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaMoneyBillWave className="mx-auto h-16 w-16 text-blue-300 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-xl text-blue-200">Understanding our refund and cancellation terms</p>
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

          {/* General Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaInfoCircle className="mr-3 text-blue-600" />
              General Policy
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                At Innomatrics Technologies, we strive to ensure complete satisfaction with our services. This policy outlines our procedures for refunds and cancellations to maintain transparency and fairness in our business relationships.
              </p>
            </div>
          </section>

          {/* Refund Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaMoneyBillWave className="mr-3 text-blue-600" />
              Refund Terms
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Eligible Services</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Digital Marketing Services</li>
                  <li>Website Development Projects</li>
                  <li>Mobile Application Development</li>
                  <li>Consulting Services</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Refund Conditions</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Service not matching agreed specifications</li>
                  <li>Significant delay in project delivery</li>
                  <li>Technical issues preventing service delivery</li>
                  <li>Breach of service agreement terms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRegTimesCircle className="mr-3 text-blue-600" />
              Cancellation Policy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Notice Period</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 7 days for monthly services</li>
                  <li>• 14 days for quarterly services</li>
                  <li>• 30 days for annual contracts</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-4">Cancellation Fees</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 10% fee if within notice period</li>
                  <li>• 25% fee if outside notice period</li>
                  <li>• Custom terms for special projects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaRegClock className="mr-3 text-blue-600" />
              Processing Time
            </h2>
            <div className="bg-yellow-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                Refund requests are processed within 7-14 business days from the date of approval. The time to receive the refund may vary depending on your payment method and financial institution.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Credit Card Refunds</h4>
                  <p className="text-gray-600">3-5 business days</p>
                </div>
                <div className="bg-white rounded p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Bank Transfer Refunds</h4>
                  <p className="text-gray-600">5-7 business days</p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Request */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaExchangeAlt className="mr-3 text-blue-600" />
              How to Request
            </h2>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                To request a refund or cancellation, please follow these steps:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Contact our support team via email or phone</li>
                <li>Provide your order/service details</li>
                <li>Explain the reason for refund/cancellation</li>
                <li>Submit any supporting documentation</li>
              </ol>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-600" />
                Contact Us
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  For any questions about refunds or cancellations, please contact our support team:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>Email:</strong> support@innomatricstech.com
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91 8431655799
                  </p>
                  <p className="text-gray-600">
                    <strong>Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
