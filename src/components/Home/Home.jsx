import React, { forwardRef, useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider/HeroSlider";

import c1 from "../../assets/portfolioLogo/MRItow.jpg";
import test from "../../assets/portfolio/test.png";
import c2 from "../../assets/portfolioLogo/RoyalKing.jpg";
import c3 from "../../assets/portfolioLogo/chanconst.jpg";
import c4 from "../../assets/portfolioLogo/dstudio.jpg";
import c5 from "../../assets/portfolioLogo/goldkey.jpg";
import c6 from "../../assets/portfolioLogo/infinitytravels.jpg";
import c7 from "../../assets/portfolioLogo/ngo.jpg";
import c8 from "../../assets/portfolioLogo/osprezt.jpg";
import c9 from "../../assets/portfolioLogo/skb.jpg";
import c10 from "../../assets/portfolioLogo/thriupathiTours.jpg";
import c11 from "../../assets/portfolioLogo/vklights.jpg";

// import { Carousel } from "flowbite-react";
import ImageCardContainer from "../Services/Carousel/ImageCardContainer";
import OurVision from "./Our Vision/OurVision";
import OurMission from "./Our Mission/OurMission";
import ClientsCard from "../ClientsLogo/ClientsCard";
import ClientsCarousel from "../ClientsLogo/ClientsCarousel";
import Join from "./JoinTeam/Join";
import CountRise from "./CountRise/CountRise";
import Industry from "./Industry/Industry";
import Blog from "./Blog/Blog";

const Home = forwardRef((props, ref) => {
  const clientLogos = [
    {
      image: c1,
    },
    {
      image: c2,
    },
    {
      image: c3,
    },
    {
      image: c4,
    },
    {
      image: c5,
    },
    {
      image: c6,
    },
    {
      image: c7,
    },
    {
      image: c8,
    },
    {
      image: c9,
    },
    {
      image: c10,
    },
    {
      image: c11,
    },
  ];

  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prevState) => !prevState); // Toggle animation state
    }, 1000); // Adjust the delay according to your preference (in milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <div ref={ref} className="overflow-hidden">
      <HeroSlider />
      
      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Innomatrics Technologies?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We bring together expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Expert Team</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Our team consists of highly skilled professionals with years of experience in delivering cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Quality Assurance</h3>
                  <p className="mt-5 text-base text-gray-500">
                    We follow rigorous quality control processes to ensure the highest standards in every project we deliver.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Timely Delivery</h3>
                  <p className="mt-5 text-base text-gray-500">
                    We understand the importance of time and ensure project completion within agreed timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Industry />
      </div>

      <div className="ServicesMission">
      <div className="p-8 ">
        <h2 className="text-4xl text-white text-center">Our Services</h2>

        <ImageCardContainer />
      </div>

      <div style={{ padding: "4%" }} className="flex flex-col sm:flex-row">
        <div style={{ flex: 1, marginRight: "2%" }}>
          <OurVision />
        </div>
        <div style={{ flex: 1 }}>
          <OurMission />
        </div>
      </div>
</div>
      <div className="bg-white">
        <Join />

        <CountRise />
      </div>
      <div className="ServicesMission flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="text-3xl md:text-4xl font-bold text-center my-12 text-white mb-12">
          Our Clients
        </div>
        <div className="mt-1.5 text-lg leading-4 text-center text-white max-md:max-w-full">
          We have been working with some of the best players in the industry
        </div>
        <div className="flex gap-5 justify-between py-4 mt-3 w-full max-w-[802px] max-md:flex-wrap max-md:max-w-full">
          <ClientsCarousel clientLogos={clientLogos} />
        </div>
      </div>

      {/* Add Blog Section */}
      <Blog />
    </div>
  );
});

export default Home;
