import React, { forwardRef } from "react";
import app from '../../../assets/brandDesign3.jpg';
import app2 from '../../../assets/brandDesign.jpg';
import approach from '../../../assets/brandDesign2.jpg';
import './LogoDesign.css';
import l1 from "../../../assets/digitalMarketing/d1.avif";
import l2 from "../../../assets/digitalMarketing/d2.jpg";
import l3 from "../../../assets/digitalMarketing/d3.avif";
import l4 from "../../../assets/digitalMarketing/d4.avif";
import l5 from "../../../assets/digitalMarketing/d5.png";
import l6 from "../../../assets/digitalMarketing/d6.webp";
import { Link } from "react-router-dom";

const ServicesCard = ({ image, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 flex-1 hover:scale-105 transition ease-in-out duration-300">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LogoDesign = forwardRef((props, ref) => {
  const services = [
    {
      title: "Custom Logo Design",
      description: "We create unique and customized logo designs that perfectly represent your brand's identity and values.",
    image: l1},
    {
      title: "Brand Identity Development",
      description: "Our team develops comprehensive brand identity packages, including logos, color schemes, and typography.",
      image: l2},
    {
      title: "Rebranding Services",
      description: "Refresh your brand with our rebranding services, giving your business a modern and updated look.",
      image: l3},
    {
      title: "Logo Animation",
      description: "Enhance your logo with animation services, making it dynamic and engaging for digital platforms.",
      image: l4},
    {
      title: "Business Card Design",
      description: "We design professional business cards that incorporate your logo and brand identity, making a strong first impression.",
      image: l5},
    {
      title: "Marketing Material Design",
      description: "Our team creates cohesive marketing materials, including brochures, flyers, and banners, featuring your logo and brand elements.",
      image: l6},
  ];

  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
      <div id="logoDesHero" className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full" style={{ height: "60vh" }}>
        
        <div className="relative flex flex-col my-12 items-start justify-start gap-4 text-start">
          <h1 className="text-3xl my-4 font-bold text-white md:text-5xl">Logo Design Services</h1>
          <hr className="text-sky-600 w-[140%]" />
        </div>
        {/* <div className="relative justify-center -my-10 space-x-2">
          <button className="text-white bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-white hover:text-black hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
            Start a project together
          </button>
          <button className="text-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-zinc-800 hover:text-white hover:transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
            Read More
          </button>
        </div> */}
      </div>

      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            <div className="text-xl text-lime-400">Logo Design</div>
            <div className="mt-2 text-sm md:text-base text-neutral-500">We focus on providing creative and effective logo design solutions.</div>
            <div className="mt-2 text-sm md:text-base text-zinc-800">
              <p>Innomatrics Tech excels in the art of logo design, where creativity meets brand identity. With a keen eye for detail and a passion for innovation, we craft iconic logos that resonate with your audience. Our team collaborates closely with you to understand your vision and values, translating them into visually striking symbols that leave a lasting impression. From sleek and modern to timeless and elegant, we tailor each design to reflect the essence of your brand. Trust Innomatrics Technologies to elevate your identity with logo designs that truly stand out in the digital realm.</p>
            </div>
          </div>
          <div className="flex w-full md:w-[56%]">
            <img loading="lazy" src={app} className="w-full h-auto aspect-w-16 aspect-h-10" style={{ borderRadius: "5%", boxShadow: "gray 3px 10px 10px" }} alt="Logo Design" />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[65vw]">
        <div className="flex flex-col md:flex-row gap-20 -mx-12 md:-mx-36">
          <div className="flex w-full md:w-1/2">
            <img loading="lazy" src={approach} className="w-full  h-[300px] rounded-lg shadow-lg" alt="Our Approach" />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We understand that every business is unique, which is why we take a personalized approach to logo design. Our process begins with a thorough analysis of your business goals, target audience, and brand identity. From there, we work closely with you to develop a customized strategy that aligns with your objectives and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto p-6">
        <div className="text-center mb-8 my-4">
          <h2 className="text-2xl font-semibold text-gray-800">Services We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {services.map((service, index) => (
            <ServicesCard key={index} title={service.title} description={service.description} image={service.image} />
          ))}
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Join Us On The Journey Of Brand Excellence</h2>
              <p className="text-lg text-gray-600">
                Ready to transform your brand identity with a stunning logo design? Partner with Innomatrics to create memorable, impactful, and timeless brand identities that resonate with your audience and stand out in the market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Professional and Creative Design Team</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Quick Turnaround Time</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">100% Satisfaction Guarantee</p>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/contact">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Start Your Design Journey
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <img 
                src={app2} 
                alt="Brand Design Journey" 
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LogoDesign;
