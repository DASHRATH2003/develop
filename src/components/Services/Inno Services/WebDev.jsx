import React, { forwardRef, useEffect } from "react";
import app from "../../../assets/webDevelopment.jpg";
import app2 from "../../../assets/webDevelopment2.jpg";
import w1 from "../../../assets/webServices/w1.jpg";
import w2 from "../../../assets/webServices/w2.jpg";
import w3 from "../../../assets/webServices/w3.jpg";
import w4 from "../../../assets/webServices/w4.webp";
import w5 from "../../../assets/webServices/w5.jpg";
import w6 from "../../../assets/webServices/w6.avif";
import "./WebDev.css";
import { Link } from 'react-router-dom';
import { FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WebDev = forwardRef((props, ref) => {
  const technologies = [
    { name: 'React', icon: <FaReact className="text-blue-600 text-2xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-blue-600 text-2xl" /> },
    { name: 'Angular', icon: <FaAngular className="text-blue-600 text-2xl" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-blue-600 text-2xl" /> },
    { name: 'PHP/Laravel', icon: <FaPhp className="text-blue-600 text-2xl" /> },
    { name: 'Python/Django', icon: <FaPython className="text-blue-600 text-2xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-blue-600 text-2xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-2xl" /> }
  ];

  const services = [
    {
      icon: <FaDesktop className="w-8 h-8 text-blue-600" />,
      title: "Custom Web Application Development",
      description: "Tailored web solutions built from scratch to meet your unique business requirements.",
      features: [
        "Scalable architecture",
        "Custom functionality",
        "Third-party integrations",
        "API development",
        "Performance optimization"
      ],
      image: w1
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "E-Commerce Development",
      description: "Robust online stores with seamless shopping experiences and secure payment processing.",
      features: [
        "Shopping cart development",
        "Payment gateway integration",
        "Inventory management",
        "Order processing system",
        "Customer account management"
      ],
      image: w2
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Solutions",
      description: "Large-scale web applications for enterprise-level business operations.",
      features: [
        "ERP systems",
        "CRM integration",
        "Business process automation",
        "Data analytics",
        "Reporting tools"
      ],
      image: w3
    },
    {
      icon: <FaCloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Cloud-based web applications with high availability and scalability.",
      features: [
        "AWS/Azure integration",
        "Cloud deployment",
        "Load balancing",
        "Auto-scaling",
        "Disaster recovery"
      ],
      image: w4
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "CMS Development",
      description: "Custom content management systems for easy website management.",
      features: [
        "WordPress customization",
        "Headless CMS solutions",
        "Custom admin panels",
        "Multi-user access control",
        "SEO-friendly architecture"
      ],
      image: w5
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
      title: "Web Security Solutions",
      description: "Comprehensive security measures to protect your web assets.",
      features: [
        "SSL implementation",
        "Firewall configuration",
        "DDoS protection",
        "Security audits",
        "Compliance consulting"
      ],
      image: w6
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin by thoroughly understanding your business needs, target audience, and project goals through our comprehensive discovery process.",
      icon: <FaLightbulb className="text-blue-600 w-6 h-6" />
    },
    {
      number: "02",
      title: "Planning & Architecture",
      description: "Our team designs the technical architecture and creates a detailed project roadmap with milestones and deliverables.",
      icon: <FaChartLine className="text-blue-600 w-6 h-6" />
    },
    {
      number: "03",
      title: "UI/UX Design",
      description: "We craft intuitive user interfaces and engaging user experiences that drive conversions and user satisfaction.",
      icon: <FaDesktop className="text-blue-600 w-6 h-6" />
    },
    {
      number: "04",
      title: "Development",
      description: "We implement the solution using modern technologies and best practices in web development with clean, maintainable code.",
      icon: <FaCode className="text-blue-600 w-6 h-6" />
    },
    {
      number: "05",
      title: "Testing & QA",
      description: "Rigorous testing ensures your application is bug-free, secure, and performs optimally across all devices and browsers.",
      icon: <FaShieldAlt className="text-blue-600 w-6 h-6" />
    },
    {
      number: "06",
      title: "Deployment & Support",
      description: "We handle the deployment process and provide ongoing support and maintenance to keep your application running smoothly.",
      icon: <FaRocket className="text-blue-600 w-6 h-6" />
    }
  ];

  const caseStudies = [
    {
      title: "E-Commerce Platform for Retail Giant",
      description: "Built a scalable online store handling 50,000+ daily transactions",
      result: "Increased conversions by 35%",
      image: app
    },
    {
      title: "Enterprise SaaS Solution",
      description: "Developed a custom SaaS platform for workforce management",
      result: "Reduced operational costs by 40%",
      image: app2
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=2000&t=st=1709704844~exp=1709705444~hmac=49a8c4842faa0f1f6b5b7f5c3c0c4e4a4e4e4e4a4e4e4e4a4e4e4e4a4e4e4e4a')",
          }}
        ></div>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
              Web Development Services
            </h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
              Innomatrics Tech delivers cutting-edge web solutions that drive business growth and digital transformation
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Digital Presence with Innomatrics
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Innomatrics Tech, we specialize in building high-performance web applications that deliver 
            exceptional user experiences and measurable business results. With over a decade of experience, our team 
            of certified developers creates solutions that are scalable, secure, and tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Comprehensive Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technologies We Excel In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    {React.cloneElement(tech.icon, { className: "w-8 h-8 text-blue-600" })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Proven Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold text-blue-600 mr-4">{step.number}</div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block">
                    <strong>Result:</strong> {caseStudy.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Innomatrics */}
        <div className="mb-20 bg-blue-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Innomatrics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-xl">Years in Web Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-xl">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl">Certified Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-xl">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2">★★★★★</div>
                <div className="text-gray-600">5.0 Rating</div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Innomatrics transformed our digital presence with their web application. Their team delivered 
                beyond our expectations with a solution that's both powerful and easy to use."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  JS
                </div>
                <div>
                  <p className="font-medium text-gray-900">John Smith</p>
                  <p className="text-gray-500">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2">★★★★★</div>
                <div className="text-gray-600">5.0 Rating</div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "The e-commerce platform developed by Innomatrics increased our online sales by 120% in the first 
                quarter. Their attention to detail and technical expertise is unmatched."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  MJ
                </div>
                <div>
                  <p className="font-medium text-gray-900">Maria Johnson</p>
                  <p className="text-gray-500">Marketing Director, RetailPlus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Web Solution?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how Innomatrics Tech can help you achieve your digital goals with our expert web development services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 border border-2 border-blue-600 text-lg font-bold rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WebDev;