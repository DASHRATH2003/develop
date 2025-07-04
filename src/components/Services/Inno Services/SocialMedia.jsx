import React, { forwardRef } from "react";
import app from "../../../assets/socialMedia.jpg";
import app2 from "../../../assets/socialMedia2.jpg";
import approach from "../../../assets/socialMediaapproach.jpg";
import d1 from "../../../assets/digitalMarketing/d1.avif";
import d2 from "../../../assets/digitalMarketing/d2.jpg";
import d3 from "../../../assets/digitalMarketing/d3.avif";
import d4 from "../../../assets/digitalMarketing/d4.avif";
import d5 from "../../../assets/digitalMarketing/d5.png";
import d6 from "../../../assets/digitalMarketing/d6.webp";
import "./SocialMedia.css";

const ServicesCard = ({image, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 flex-1 hover:scale-105
  transition ease-in-out duration-300">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SocialMedia= forwardRef((props,ref)=> {
  const services = [
    {
      title: "Social Media Strategy",
      description:
        "We develop a comprehensive social media strategy tailored to your business goals, target audience, and competitive landscape to ensure maximum engagement and ROI.",
   image: d1 },
    {
      title: "Content Creation",
      description:
        "Our creative team produces high-quality, visually appealing, and engaging content that resonates with your audience and enhances your brand's social media presence.",
        image: d2},
    {
      title: "Platform Management",
      description:
        "We manage your social media accounts across all major platforms, including Facebook, Instagram, Twitter, LinkedIn, and more, to maintain a consistent and active online presence.",
        image: d3},
    {
      title: "Community Engagement",
      description:
        "We actively engage with your audience by responding to comments, messages, and reviews to build strong relationships and foster a loyal community around your brand.",
        image: d4},
    {
      title: "Social Media Advertising",
      description:
        "Our team creates and manages targeted social media ad campaigns to reach your ideal audience, increase brand awareness, and drive conversions and sales.",
        image: d5},
    {
      title: "Analytics and Reporting",
      description:
        "We provide detailed analytics and performance reports to track the effectiveness of your social media campaigns, allowing for data-driven decisions and continuous improvement.",
        image: d6},
    // {
    //   title: "Influencer Marketing",
    //   description:
    //     "We collaborate with influencers and brand ambassadors to amplify your reach, build credibility, and drive engagement through authentic and trusted voices in your industry.",
    // },
    // {
    //   title: "Reputation Management",
    //   description:
    //     "Our team monitors and manages your brand's online reputation, addressing any negative feedback promptly and highlighting positive reviews to maintain a positive public perception.",
    // },
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
                At Innomatrics Technologies, we believe that your social media
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

      <div className=" mx-auto p-6">
        <div className="text-center mb-8 my-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Services We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Add other sections similarly */}
    </div>
  );
})

export default SocialMedia