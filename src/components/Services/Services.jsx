import React, { useState, useEffect, forwardRef } from "react";
import c1 from "../../assets/AppDev.jpg";
import c2 from "../../assets/webDesign.jpg";
import c3 from "../../assets/webDevelopment.jpg";
import c4 from "../../assets/digitalMarkt.webp";
import c5 from "../../assets/brandDesign.jpg";
import c6 from "../../assets/socialMedia.jpg";
import "./Services.css";
// import { Carousel } from "flowbite-react";
import ImageCardContainer from "./Carousel/ImageCardContainer";
import { Link } from "react-router-dom";
import app from "../../assets/serviceBg2.jpg";

// import image from '../../assets/image1.jpg'

const Services = forwardRef((props,ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(true);

  const images = [c1, c2, c3, c4, c5, c6];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMoving) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isMoving]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="Services" ref={ref}>
        <div
          className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
          style={{ marginTop: "0.2px", height: "60vh" }}
        >
          
          <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-zinc-900 md:text-white md:text-5xl">
              Services
            </h1>
            
            
            <hr className="text-sky-600 w-[140%] " />
          </div>
          <div className="relative justify-center -my-10 space-x-2">
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
          </div>
        </div>

        <div>
          <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-start">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Overview
                </h2>
                <p className="mt-2 leading-8 text-2xl font-extrabold font-serif text-gray-900 sm:text-3xl">
                  With today's fast-changing IT landscape, you must quickly
                  build new applications to meet consumer demands, reduce tech
                  debt, support legacy systems, and adopt new technologies –
                  quite a balancing act.
                </p>
              </div>
              <div className="mt-10">
                <p className="text-lg leading-8 text-gray-700">
                  We combine technical expertise, domain knowledge and practical
                  know-how to support your application development and
                  integration requirements, with a clear focus on scalability,
                  extensibility, reliability and most importantly driving
                  meaningful business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Services Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Comprehensive Services</h2>
              <p className="mt-4 text-lg text-gray-500">End-to-end solutions for your digital needs</p>
            </div>

            <div className="mt-16">
              {/* Web Development */}
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                    Web Development
                  </h3>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="px-2 py-1 mx-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">React</span>
                      <span className="px-2 py-1 mx-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Angular</span>
                      <span className="px-2 py-1 mx-1 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">Vue.js</span>
                      <span className="px-2 py-1 mx-1 text-purple-800 text-xs font-medium bg-purple-100 rounded-full">Node.js</span>
                    </div>
                  </div>
                  <div className="mt-4 text-lg text-gray-500">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Custom web application development</li>
                      <li>Progressive Web Apps (PWA)</li>
                      <li>E-commerce solutions</li>
                      <li>Content Management Systems</li>
                      <li>API development and integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="mt-16 lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                    Mobile App Development
                  </h3>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="px-2 py-1 mx-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">React Native</span>
                      <span className="px-2 py-1 mx-1 text-purple-800 text-xs font-medium bg-purple-100 rounded-full">Flutter</span>
                      <span className="px-2 py-1 mx-1 text-gray-800 text-xs font-medium bg-gray-100 rounded-full">iOS</span>
                      <span className="px-2 py-1 mx-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">Android</span>
                    </div>
                  </div>
                  <div className="mt-4 text-lg text-gray-500">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Native mobile applications</li>
                      <li>Cross-platform applications</li>
                      <li>Mobile app UI/UX design</li>
                      <li>App maintenance and support</li>
                      <li>App performance optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Digital Marketing */}
              <div className="mt-16 lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                    Digital Marketing
                  </h3>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="px-2 py-1 mx-1 text-red-800 text-xs font-medium bg-red-100 rounded-full">SEO</span>
                      <span className="px-2 py-1 mx-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Social Media</span>
                      <span className="px-2 py-1 mx-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">Content Marketing</span>
                      <span className="px-2 py-1 mx-1 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">PPC</span>
                    </div>
                  </div>
                  <div className="mt-4 text-lg text-gray-500">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Search Engine Optimization (SEO)</li>
                      <li>Social Media Marketing</li>
                      <li>Content Strategy and Creation</li>
                      <li>Email Marketing Campaigns</li>
                      <li>Analytics and Reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="mt-16 lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                    UI/UX Design
                  </h3>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="px-2 py-1 mx-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">Figma</span>
                      <span className="px-2 py-1 mx-1 text-purple-800 text-xs font-medium bg-purple-100 rounded-full">Adobe XD</span>
                      <span className="px-2 py-1 mx-1 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">Sketch</span>
                    </div>
                  </div>
                  <div className="mt-4 text-lg text-gray-500">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>User Interface Design</li>
                      <li>User Experience Design</li>
                      <li>Wireframing and Prototyping</li>
                      <li>Design Systems</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImageCardContainer />
      </div>
    </>
  );
})

export default Services;
