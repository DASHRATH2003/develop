import React, { forwardRef } from "react";
import app from "../../../assets/socialMedia.jpg";
import app2 from "../../../assets/socialMedia2.jpg";
import approach from "../../../assets/socialMediaapproach.jpg";
import "./SocialMedia.css";
import { Link } from "react-router-dom";

const ServicesCard = ({ image, title, description, features }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
    <div className="relative h-48">
      <img src={image} className="w-full h-full object-cover" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-gray-600 text-sm">
            <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SocialMedia = forwardRef((props, ref) => {
  const services = [
    {
      title: "Social Media Strategy",
      description: "We develop comprehensive social media strategies that align with your business goals and target audience.",
      image: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148434510.jpg",
      features: [
        "Competitor analysis and market research",
        "Platform-specific content strategies",
        "Audience targeting and segmentation",
        "Campaign planning and execution",
        "Performance metrics definition"
      ]
    },
    {
      title: "Content Creation & Management",
      description: "Our creative team produces engaging, brand-aligned content that resonates with your audience.",
      image: "https://img.freepik.com/free-vector/content-marketing-concept-illustration_114360-7972.jpg",
      features: [
        "Custom graphics and visual content",
        "Engaging copywriting and captions",
        "Video content production",
        "Content calendar management",
        "Brand voice consistency"
      ]
    },
    {
      title: "Platform Management",
      description: "We manage your presence across all major social media platforms to maintain consistent engagement.",
      image: "https://img.freepik.com/free-vector/social-media-concept-illustration_114360-7572.jpg",
      features: [
        "Profile optimization",
        "Regular posting schedule",
        "Community engagement",
        "Comment moderation",
        "Crisis management"
      ]
    },
    {
      title: "Social Media Advertising",
      description: "Strategic paid social campaigns that drive conversions and maximize your ROI.",
      image: "https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-7493.jpg",
      features: [
        "Ad campaign strategy",
        "Audience targeting",
        "A/B testing",
        "Budget optimization",
        "Performance tracking"
      ]
    },
    {
      title: "Influencer Marketing",
      description: "Connect with relevant influencers to amplify your brand's reach and credibility.",
      image: "https://img.freepik.com/free-vector/influencer-concept-illustration_114360-679.jpg",
      features: [
        "Influencer identification",
        "Partnership management",
        "Campaign coordination",
        "Performance tracking",
        "ROI measurement"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and insights to measure and improve your social media performance.",
      image: "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8013.jpg",
      features: [
        "Real-time performance tracking",
        "Custom reporting dashboards",
        "Competitor analysis",
        "ROI measurement",
        "Strategy optimization"
      ]
    },
    {
      title: "Community Management",
      description: "Build and nurture an engaged community around your brand through active social media management.",
      image: "https://img.freepik.com/free-vector/community-management-concept-illustration_114360-3557.jpg",
      features: [
        "Response management",
        "Community guidelines",
        "User-generated content",
        "Brand advocacy programs",
        "Crisis management"
      ]
    },
    {
      title: "Social Media Training",
      description: "Empower your team with the knowledge and skills to maintain an effective social media presence.",
      image: "https://img.freepik.com/free-vector/training-concept-illustration_114360-2664.jpg",
      features: [
        "Platform best practices",
        "Content creation workshops",
        "Analytics training",
        "Strategy development",
        "Tool utilization"
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
      <div
        id="SocialMediaDiv"  className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
          style={{ height: "60vh" }}
        >
          
          <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
            <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl">
              Social Media Marketing
            </h1>
            
            
            <hr className="text-sky-600 w-[140%] " />
          </div>
          {/* <div className="relative justify-center -my-10 space-x-2">
            <button className="text-white 
              bg-zinc-700 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
              text-center dark:bg-blue-600 dark:focus:ring-blue-800
              hover:bg-white hover:text-black hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
              Start a project together
            </button>
            <button className="text-zinc-700 
              bg-white focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
              text-center dark:bg-blue-600 dark:focus:ring-blue-800
              hover:bg-zinc-800 hover:text-white hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
              Read More
            </button>
          </div> */}
        </div>

      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">Social Media Marketing</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>
                At Innomatrics Tech, we believe that your social media
                presence is more than just a series of posts - it's a powerful
                platform that can help you engage with your audience, enhance
                your brand, and drive business growth. With our comprehensive
                social media marketing services, we'll help you create a
                compelling and effective social media strategy that captivates
                your audience and converts followers into loyal customers.
              </p>
            </div>
          </div>
          <div className="flex flex-auto w-full md:w-[40%]">
            <img
              loading="lazy"
              src={app2}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{ borderRadius: "5%", boxShadow: "gray 3px 10px 10px" }}
              alt="App Development"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[65vw] ">
        <div className="flex flex-col md:flex-row gap-20 -mx-12 md:-mx-36">
          <div className="flex w-full md:w-1/2">
            <img
              loading="lazy"
              src={approach}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="App Development"
            />
          </div>

          <div className="flex flex-col  w-full md:w-1/2 ">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We understand that every business is unique, which is why we
                take a personalized approach to website design and development.
                Our process begins with a thorough analysis of your business
                goals, target audience, and brand identity. From there, we work
                closely with you to develop a customized strategy that aligns
                with your objectives and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //-------------------------------------------// */}

      {/* Services Section */}
      <div className="w-full px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Social Media Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your social media presence with our full suite of strategic services designed to engage your audience and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Join Us On The Social Media Revolution</h2>
              <p className="text-lg text-gray-600">
                Ready to transform your social media presence? Partner with Innomatrics to create engaging, strategic, and result-driven social media campaigns that connect with your audience and drive meaningful engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Strategic Content Creation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Community Management Excellence</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Performance Analytics & Optimization</p>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/contact">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Transform Your Social Presence
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <img 
                src={app} 
                alt="Social Media Journey" 
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Remove the comment about other sections */}
    </div>
  );
})

export default SocialMedia