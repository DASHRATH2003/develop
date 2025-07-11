import React from "react";
import "./About.css";
import aboutCorporate from "../../assets/aboutCorporate.jpg";
import {Link} from "react-router-dom";
const VisionMission = () => {
  const coreValues = [
    {
      title: "Excellence",
      description:
        "We pursue the highest standards in all our deliverables, ensuring quality that exceeds expectations.",
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      examples: [
        "ISO 9001 certified quality processes",
        "98% client satisfaction rate",
        "Rigorous testing protocols",
      ],
    },
    {
      title: "Innovation",
      description:
        "We embrace emerging technologies and creative thinking to deliver groundbreaking solutions.",
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      examples: [
        "15% of revenue invested in R&D",
        "Dedicated innovation lab",
        "Regular tech hackathons",
      ],
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices.",
      icon: (
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
      ),
      examples: [
        "Transparent pricing models",
        "Ethical data practices",
        "Client confidentiality guarantee",
      ],
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership to achieve extraordinary results.",
      icon: (
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
      ),
      examples: [
        "Cross-functional project teams",
        "Client co-creation workshops",
        "Strategic partner ecosystem",
      ],
    },
    {
      title: "Customer Focus",
      description:
        "We measure our success by our clients' success and satisfaction.",
      icon: (
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      examples: [
        "Dedicated account managers",
        "Quarterly business reviews",
        "Customized solution approach",
      ],
    },
    {
      title: "Sustainability",
      description:
        "We develop solutions that create long-term value for businesses and communities.",
      icon: (
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      examples: [
        "Green computing initiatives",
        "Social impact projects",
        "Sustainable business practices",
      ],
    },
  ];

  return (
    <div className="vision-mission">
      {/* Hero Section - Full width */}
      <div
        className="relative w-full h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${aboutCorporate})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text Content */}
        <div className="relative z-10 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our Vision & Mission
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-4">
            Guiding principles that drive our innovation and define our
            commitment to excellence in technology solutions
          </p>
        </div>
      </div>

      {/* Rest of the content with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="ml-4 text-3xl font-bold text-gray-900">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To be the most trusted global partner for digital transformation,
              recognized for pioneering technology solutions that redefine
              industries and create sustainable value for businesses worldwide.
            </p>
            <div className="space-y-4">
              {[
                "Leading digital transformation across 25+ countries by 2025",
                "Developing AI solutions that impact 1 million+ businesses",
                "Setting the global standard for ethical technology practices",
                "Creating an ecosystem where technology drives meaningful human progress",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
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
                      d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="ml-4 text-3xl font-bold text-gray-900">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To empower organizations of all sizes with transformative
              technology solutions that drive measurable business outcomes,
              through a combination of deep expertise, innovative thinking, and
              unwavering commitment to our clients' success.
            </p>
            <div className="space-y-4">
              {[
                "Deliver tailored solutions that address unique business challenges",
                "Combine technical excellence with strategic business insight",
                "Foster long-term partnerships built on trust and results",
                "Make advanced technology accessible and impactful for all",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            The fundamental beliefs that guide our decisions, actions, and
            relationships
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {value.description}
                </p>
                <ul className="space-y-2">
                  {value.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Innomatrics, we've cultivated a unique culture that blends
                professional excellence with a supportive, innovative
                environment. Our team thrives on collaboration, continuous
                learning, and a shared passion for technology that makes a
                difference.
              </p>
              <div className="space-y-4">
                {[
                  "Weekly knowledge sharing sessions",
                  "Annual innovation challenges with rewards",
                  "Flexible work arrangements",
                  "Community volunteer programs",
                  "Continuous learning stipends",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Innomatrics team culture"
                className="rounded-lg shadow-md w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl w-2/3">
                <h4 className="font-bold text-lg mb-2">
                  "Together We Innovate"
                </h4>
                <p className="text-blue-100">
                  Our team motto that drives everything we do
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you're looking for technology solutions or want to join our
            team, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/careers">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Explore Careers
            </button></Link>
           <Link to="/contact">
           <button className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 border-2 border-white rounded-lg transition-colors duration-300">
              Contact Our Team
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
