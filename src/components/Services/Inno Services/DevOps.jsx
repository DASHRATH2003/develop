import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DevOps = () => {
  const services = [
    {
      title: "CI/CD Pipeline Implementation",
      description: "Automated build, test, and deployment processes for faster and more reliable software delivery.",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using tools like Terraform and CloudFormation.",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker implementation for scalable and manageable containerized applications.",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Expert management of AWS, Azure, and Google Cloud platforms for optimal performance and cost.",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Monitoring and Logging",
      description: "Comprehensive monitoring solutions using tools like Prometheus, Grafana, and ELK Stack.",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Security Implementation",
      description: "DevSecOps practices for building security into the development lifecycle.",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const tools = [
    { name: "Kubernetes", category: "Container Orchestration" },
    { name: "Docker", category: "Containerization" },
    { name: "Terraform", category: "Infrastructure as Code" },
    { name: "Ansible", category: "Configuration Management" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitLab CI/CD", category: "CI/CD" },
    { name: "AWS", category: "Cloud Platform" },
    { name: "Azure", category: "Cloud Platform" },
    { name: "GCP", category: "Cloud Platform" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Monitoring" },
    { name: "ELK Stack", category: "Logging" },
  ];

  const benefits = [
    {
      title: "Faster Time to Market",
      description: "Reduce deployment times from weeks to minutes with automated CI/CD pipelines.",
      icon: "⏱️"
    },
    {
      title: "Improved Reliability",
      description: "Minimize human errors and increase system stability with infrastructure as code.",
      icon: "🛡️"
    },
    {
      title: "Cost Optimization",
      description: "Reduce cloud costs with proper resource provisioning and auto-scaling.",
      icon: "💰"
    },
    {
      title: "Enhanced Security",
      description: "Implement security best practices throughout your development lifecycle.",
      icon: "🔒"
    },
    {
      title: "Better Collaboration",
      description: "Break down silos between development and operations teams.",
      icon: "👥"
    },
    {
      title: "Scalability",
      description: "Easily scale your infrastructure to meet growing business demands.",
      icon: "📈"
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/2015825825/photo/devops-software-development-operations-programmer-administration-system-life-cycle-quality.jpg?s=612x612&w=0&k=20&c=eih7PTfZpUkLiqiqnRuOVF047ufdEb4xa4aZSNo5UIo=')",
          }}
        ></div>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">DevOps Excellence</h1>
            <div className="w-32 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
              Accelerate your digital transformation with our comprehensive DevOps solutions and cloud expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-blue-50 text-blue-700 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg"
            >
              Start Your DevOps Journey
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our DevOps Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end DevOps solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of DevOps</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how DevOps can transform your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our DevOps Toolbox</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the industry's leading tools and technologies
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl font-bold text-gray-800 mb-2">{tool.name}</div>
                <div className="text-sm text-gray-500">{tool.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped companies achieve DevOps excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-8 border-l-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">A</div>
                <div>
                  <h3 className="text-xl font-semibold">E-commerce Platform</h3>
                  <p className="text-gray-500">Retail Industry</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Implemented a complete CI/CD pipeline that reduced deployment times by 85% and increased deployment frequency from once a month to multiple times per day."
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">AWS</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Kubernetes</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Jenkins</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Terraform</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-8 border-l-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">B</div>
                <div>
                  <h3 className="text-xl font-semibold">Financial Services</h3>
                  <p className="text-gray-500">Banking Sector</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Migrated legacy infrastructure to cloud with full automation, achieving 99.99% uptime and reducing operational costs by 40% while improving security compliance."
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Azure</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Docker</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Ansible</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Prometheus</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Development Process?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Our DevOps experts are ready to help you build, deploy, and scale your applications faster and more reliably.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/quote"
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg inline-block"
              >
                Get Started
              </Link>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;