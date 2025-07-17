import React, { forwardRef } from "react";
import app from "../../../assets/digitalMarkt.webp";
import app2 from "../../../assets/digitalMarkt2.webp";
import approach from "../../../assets/digitalMarktApproach.webp";
import { Link } from "react-router-dom";
import "./DigitalMarket.css";

const ServicesCard = ({ title, description, image, icon }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
    <div className="relative">
      <img src={image} className="w-full h-48 object-cover" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const SocialMedia = forwardRef((props, ref) => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Increase your website's visibility and rank higher in search engine results pages (SERPs) with our comprehensive SEO services, including keyword research, on-page optimization, link building, and content creation.",
      image: "https://img.freepik.com/free-vector/seo-analytics-team-working-optimization-metrics_74855-13380.jpg",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic to your website and generate leads or sales with our expertly managed PPC campaigns on platforms like Google Ads, Bing Ads, and social media advertising.",
      image: "https://media.designrush.com/articles/608361/conversions/12-Best-PPC-platforms-in-2024-(2)-details_mobile.jpg",
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness, engage with your audience, and drive conversions through strategic social media marketing campaigns on platforms such as Facebook, Instagram, Twitter, LinkedIn, and more.",
      image: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148434510.jpg",
    },
    {
      title: "Content Marketing",
      description: "Create valuable and relevant content that attracts, educates, and converts your audience, including blog posts, articles, infographics, videos, and more.",
      image: "https://img.freepik.com/free-vector/content-marketing-concept-illustration_114360-7972.jpg",
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive customer loyalty with personalized and targeted email marketing campaigns that deliver the right message to the right audience at the right time.",
      image: "https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Optimize your website and marketing campaigns to improve conversion rates and maximize the return on your investment (ROI).",
      image: "https://img.freepik.com/free-vector/conversion-rate-optimization-concept-illustration_114360-8723.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
       <div
        id="DigitalDiv"  className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
          style={{ height: "60vh" }}
        >
          
          <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
            <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl">
              Digital Marketing
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
            <div className="text-xl text-lime-400">Digital Marketing</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">
              We focus on providing the right tool for product innovation and
              digital communication
            </div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>
                Innomatrics Tech is your trusted partner for driving
                online visibility, engagement, and growth through strategic
                digital marketing solutions. With our expertise in the
                ever-evolving digital landscape, we'll help you reach your
                target audience, amplify your brand presence, and achieve your
                business goals.
              </p>
            </div>
          </div>
          <div className="flex flex-auto w-full md:w-[40%]">
            <img
              loading="lazy"
              src={app2}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{ borderRadius: "5%", boxShadow: "gray 3px 10px 10px" }}
              alt="Digital Marketing"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[65vw]">
        <div className="flex flex-col md:flex-row gap-20 -mx-12 md:-mx-36">
          <div className="flex w-full md:w-1/2">
            <img
              loading="lazy"
              src={approach}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="Our Approach"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We believe that effective digital marketing is about more than
                just tactics - it's about developing a comprehensive strategy
                that aligns with your business objectives and resonates with
                your target audience. Our approach begins with a deep
                understanding of your industry, competitors, and target market,
                allowing us to craft tailored digital marketing solutions that
                deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services We Offer
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to help your business grow online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
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
              <h2 className="text-4xl font-bold text-gray-900">Join Us On The Digital Marketing Journey</h2>
              <p className="text-lg text-gray-600">
                Ready to take your digital presence to the next level? Partner with Innomatrics for comprehensive digital marketing solutions that drive real results and sustainable growth for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Data-Driven Marketing Strategies</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Measurable ROI and Growth</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Dedicated Marketing Experts</p>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/contact">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Start Your Digital Journey
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <img 
                src={app} 
                alt="Digital Marketing Journey" 
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SocialMedia;