import React from 'react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      title: "HEALTHCARE",
      subtitle: "We revolutionize healthcare delivery through innovative digital solutions",
      image: "https://burst.shopifycdn.com/photos/doctor-reaches-towards-shelf.jpg?width=1000&format=pjpg&exif=0&iptc=0"
    },
    {
      id: 'banking',
      title: "BANKING, FINANCIAL SERVICES & INSURANCE",
      subtitle: "We empower the BFSI sector with secure, scalable, and intelligent digital solutions that drive innovation and trust",
      image: "https://www.shutterstock.com/image-photo/bfsi-banking-financial-services-insurance-600nw-2433179231.jpg"
    },
    {
      id: 'ngo',
      title: "NGO ORGANIZATIONS",
      subtitle: "We support NGOs and nonprofit organizations by delivering impactful digital solutions.",
      image: "https://www.shutterstock.com/image-vector/nongovernmental-organization-ngo-vector-illustration-260nw-1811798761.jpg"
    },
    {
      id: 'travel',
      title: "TOURS AND TRAVELS",
      subtitle: "We help tours and travel businesses create immersive digital experiences that attract, engage, and retain customers.",
      image: "https://divyatourstravels.in/public/img/jk.jpg"
    },
    {
      id: 'construction',
      title: "CONSTRUCTION FIRMS",
      subtitle: "We empower construction firms with innovative digital solutions that streamline project management",
      image: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww"
    },
    {
      id: 'security',
      title: "SECURITY",
      subtitle: "We deliver cutting-edge digital solutions tailored for the security industry, enhancing protection.",
      image: "https://t4.ftcdn.net/jpg/04/72/18/19/360_F_472181971_ZCXWPAgsA2Yp6kEUhkSQDLvLvGuLhZxW.jpg"
    }
  ];

  return (
    <div className="bg-white">
      <div className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://www.shutterstock.com/image-photo/industry-40-modern-factory-project-600nw-1936499776.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 "></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Industries We Serve
          </h2>
          <p className="text-blue-100 text-center max-w-4xl mx-auto text-lg">
            At Innomatrics Technologies, we deliver cutting-edge software solutions across diverse industries. 
            Our expertise spans the entire digital spectrum, enabling businesses to transform and thrive in the digital age.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group relative bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-red-500 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  {industry.subtitle}
                </p>
                <Link 
                  to={`/industries/${industry.id}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;