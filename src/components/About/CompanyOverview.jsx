import React from "react";
import "./About.css";
import Companyimage from "../../assets/Companyimage.jpg";
import {Link} from "react-router-dom";

const CompanyOverview = () => {
  return (
    <div className="company-overview">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${Companyimage})`, // ✅ Correct format
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Company Overview
            </h1>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-lg md:text-xl leading-relaxed">
              Driving digital transformation through innovative technology
              solutions since 2023
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">
                Innomatrics Tech
              </h2>
              <p className="text-lg text-gray-600">
                Innomatrics Tech is a premier technology solutions
                provider headquartered in Bangalore, with a global presence
                serving clients across over all india . Since
                our founding in 2023, we've been at the forefront of digital
                innovation, helping businesses transform their operations
                through cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600">
                Our comprehensive suite of services includes custom software
                development, enterprise solutions, mobile app development, UI/UX
                design, cloud computing, and digital marketing services. We
                serve diverse industries including healthcare, finance,
                education, e-commerce, and manufacturing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Excellence in Delivery
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We've successfully delivered over 500 projects with a 98%
                      client satisfaction rate, maintaining rigorous quality
                      standards throughout our development process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Innovation First
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Our dedicated R&D team invests 15% of our revenue annually
                      in emerging technologies like AI, blockchain, and IoT to
                      keep our solutions at the cutting edge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Innomatrics Team Working"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-2/3">
                <h4 className="font-bold text-gray-900">Our Commitment</h4>
                <p className="text-sm text-gray-600">
                  "To deliver transformative technology solutions that drive
                  measurable business results"
                </p>
              </div>
            </div>
          </div>

          {/* Company Milestones */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-4 border-r border-gray-200 last:border-r-0">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  2022
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Founded</h3>
                <p className="text-gray-600">
                  Established in Bangalore with 5 team members
                </p>
              </div>
              <div className="text-center p-4 border-r border-gray-200 last:border-r-0">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  2023
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Global Expansion
                </h3>
                <p className="text-gray-600">
                  Opened first international office in India
                </p>
              </div>
              <div className="text-center p-4 border-r border-gray-200 last:border-r-0">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  2024
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  AI Division
                </h3>
                <p className="text-gray-600">
                  Launched our artificial intelligence practice
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  2025
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Today</h3>
                <p className="text-gray-600">
                  150+ employees serving clients worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  We challenge conventional thinking to develop groundbreaking
                  solutions that create real value for our clients.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                  Integrity
                </h3>
                <p className="text-gray-600 text-center">
                  We conduct business with honesty, transparency, and respect,
                  building trust through ethical practices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                  Collaboration
                </h3>
                <p className="text-gray-600 text-center">
                  We believe in the power of teamwork, both within our
                  organization and in partnership with our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Team Preview */}
          

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Partner with Innomatrics Tech to leverage cutting-edge
              solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Contact Us
              </button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
