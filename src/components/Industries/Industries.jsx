import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: "WEB DEVELOPMENT",
      subtitle: "Creating Powerful Digital Experiences",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "MOBILE DEVELOPMENT",
      subtitle: "Innovative Apps for Modern Business",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "CLOUD SOLUTIONS",
      subtitle: "Scalable Infrastructure for Growth",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "AI & MACHINE LEARNING",
      subtitle: "Intelligent Solutions for Tomorrow",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "E-COMMERCE",
      subtitle: "Digital Retail Excellence",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "FINTECH",
      subtitle: "Revolutionary Financial Solutions",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "HEALTHCARE IT",
      subtitle: "Digital Health Innovation",
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "EDTECH",
      subtitle: "Transforming Digital Learning",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "CYBERSECURITY",
      subtitle: "Protecting Digital Assets",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "IOT SOLUTIONS",
      subtitle: "Connected Device Innovation",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "REAL ESTATE TECH",
      subtitle: "Digital Property Solutions",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "ENTERPRISE SOFTWARE",
      subtitle: "Powering Business Operations",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "DATA ANALYTICS",
      subtitle: "Insights Driving Success",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "DIGITAL MARKETING",
      subtitle: "Strategic Online Growth",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "BLOCKCHAIN",
      subtitle: "Decentralized Solutions",
      image: "https://images.unsplash.com/photo-1644143379190-08a5f055de1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "SUPPLY CHAIN TECH",
      subtitle: "Optimizing Logistics Flow",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "AR/VR SOLUTIONS",
      subtitle: "Immersive Experiences",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "AUTOMATION",
      subtitle: "Streamlining Workflows",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "SAAS PLATFORMS",
      subtitle: "Cloud-Based Solutions",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "API INTEGRATION",
      subtitle: "Connecting Digital Systems",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
                <p className="text-gray-700 font-medium">
                  {industry.subtitle}
                </p>
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