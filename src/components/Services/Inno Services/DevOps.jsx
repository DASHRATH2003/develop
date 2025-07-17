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

  const processSteps = [
    {
      title: "Continuous Integration",
      description: "Automated code integration and testing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jW0UMLeFTAdXKjYBov2wOABDSYXu6jOR4w&s",
      features: ["Automated builds", "Unit testing", "Code quality checks", "Integration testing"]
    },
    {
      title: "Continuous Deployment",
      description: "Automated deployment pipelines",
      image: "https://miro.medium.com/v2/resize:fit:640/1*QYn03nv31ohSshObFzsY5w.png",
      features: ["Automated releases", "Environment management", "Rollback capability", "Deployment tracking"]
    },
    {
      title: "Infrastructure Management",
      description: "Cloud and infrastructure automation",
      image: "https://static.vecteezy.com/system/resources/thumbnails/036/781/015/small_2x/ai-generated-sustainable-energy-management-with-ai-ai-generated-photo.jpg",
      features: ["Resource provisioning", "Scaling automation", "Infrastructure as Code", "Cost optimization"]
    }
  ];

  const technologies = [
    {
      category: "Containerization",
      image: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
      tools: ["Docker", "Kubernetes", "Container Registry", "Microservices"]
    },
    {
      category: "Cloud Platforms",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
      tools: ["AWS", "Azure", "Google Cloud", "Multi-cloud"]
    },
    {
      category: "Monitoring",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_X725VxT-HbXMyR2n9HN9YaiCWBcoxwF6A&s",
      tools: ["Prometheus", "Grafana", "ELK Stack", "New Relic"]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://t3.ftcdn.net/jpg/13/83/35/94/360_F_1383359475_rZpmdRpSp6mPtQlxxP6TwQyqoqWI6jvB.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming IT Operations Through DevOps Innovation
            </h1>
            <div className="w-32 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
              Streamline your development pipeline, enhance collaboration, and deliver value faster with our enterprise-grade DevOps solutions. Experience seamless integration, automated workflows, and robust security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-blue-50 text-blue-700 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300"
              >
                View Our Solutions
              </motion.button>
            </div>
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

      {/* Visual Process Flow */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our DevOps Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{step.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="h-32 flex items-center justify-center mb-6">
                  <img src={tech.image} alt={tech.category} className="h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.tools.map((tool, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Workflow */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Implementation Workflow</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 -ml-px h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              {[
                {
                  title: "Assessment & Planning",
                  description: "Evaluate current infrastructure and develop migration strategy",
                  image: "https://www.netguru.com/hs-fs/hubfs/assessment.png?width=900&name=assessment.png"
                },
                {
                  title: "Infrastructure Setup",
                  description: "Configure cloud infrastructure and deployment pipelines",
                  image: "https://www.netguru.com/hs-fs/hubfs/infrastructure.png?width=900&name=infrastructure.png"
                },
                {
                  title: "Automation Implementation",
                  description: "Implement CI/CD pipelines and automated testing",
                  image: "https://www.netguru.com/hs-fs/hubfs/automation.png?width=900&name=automation.png"
                },
                {
                  title: "Monitoring & Optimization",
                  description: "Set up monitoring tools and optimize performance",
                  image: "https://www.netguru.com/hs-fs/hubfs/monitoring.png?width=900&name=monitoring.png"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                >
                  <div className="flex items-center w-full max-w-md">
                    <div className={`w-full bg-white rounded-xl shadow-lg overflow-hidden ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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