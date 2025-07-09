import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../assets/innomatric_logo_only.png";
import "./NAv.css";
import ServiceHover from "./ServiceHover";
import AboutHover from "./AboutHover";

function NAv() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showInfoBar, setShowInfoBar] = useState(true);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleInfoBar = () => {
    setShowInfoBar(!showInfoBar);
  };

  return (
    <header className="relative">
      {/* Top Information Bar */}
      {showInfoBar && (
        <div className="bg-blue-800 text-white text-sm">
          <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-300" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-300" />
                <span>info@innomatric.com</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-blue-300" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <FaFacebook />
              </a>
              <button
                onClick={toggleInfoBar}
                className="text-blue-300 hover:text-white ml-4"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={`w-full z-50 top-0 fixed transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900 shadow-lg"
            : "bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900/90 backdrop-blur-sm"
        } ${showInfoBar ? "" : "top-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Company Name */}
            <div className="flex-shrink-0 flex items-end pr-4">
  {/* Changed items-center to items-end */}
  <Link to="/" className="flex items-end space-x-2">
    {/* Ensure text aligns to bottom of logo */}
    <img
      src={logo}
      className="h-24 w-24 md:h-36 md:w-40" // 🔧 Increased size
      alt="Innomatrics Logo"
    />
  </Link>
</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div
                className="relative"
                onMouseEnter={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
              >
                <button className="nav-item flex items-center">
                  About Us
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showAbout && <AboutHover />}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <button className="nav-item flex items-center">
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showServices && <ServiceHover />}
              </div>
              <Link to="/industries" className="nav-item">
                Industries
              </Link>
              <Link to="/blog" className="nav-item">
                Blog
              </Link>
              <Link to="/careers" className="nav-item">
                Careers
              </Link>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  to="/contact"
                  className="nav-button primary hover:bg-blue-50"
                >
                  Contact Us
                </Link>
                <Link
                  to="/quote"
                  className="nav-button secondary hover:bg-blue-800"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-900`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative">
              <button
                onClick={() => setShowAbout(!showAbout)}
                className="nav-item block w-full text-left flex items-center justify-between"
              >
                About Us
                <svg
                  className={`h-5 w-5 transform ${
                    showAbout ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showAbout && (
                <div className="bg-blue-800 rounded-md mt-1 py-2">
                  <Link to="/about/overview" className="nav-item block pl-4">
                    Company Overview
                  </Link>
                  <Link
                    to="/about/vision-mission"
                    className="nav-item block pl-4"
                  >
                    Our Vision & Mission
                  </Link>
                  <Link to="/about/why-us" className="nav-item block pl-4">
                    Why Us
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowServices(!showServices)}
                className="nav-item block w-full text-left flex items-center justify-between"
              >
                Services
                <svg
                  className={`h-5 w-5 transform ${
                    showServices ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showServices && (
                <div className="bg-blue-800 rounded-md mt-1 py-2">
                  <Link to="/webdev" className="nav-item block pl-4">
                    Web Development
                  </Link>
                  <Link to="/appdev" className="nav-item block pl-4">
                    App Development
                  </Link>
                  <Link to="/digitalmarket" className="nav-item block pl-4">
                    Digital Marketing
                  </Link>
                  <Link to="/logodesign" className="nav-item block pl-4">
                    Logo Design
                  </Link>
                  <Link to="/socialmedia" className="nav-item block pl-4">
                    Social Media
                  </Link>
                  <Link to="/webdesign" className="nav-item block pl-4">
                    Web Design
                  </Link>
                </div>
              )}
            </div>
            <Link to="/industries" className="nav-item block">
              Industries
            </Link>
            <Link to="/blog" className="nav-item block">
              Blog
            </Link>
            <Link to="/careers" className="nav-item block">
              Careers
            </Link>
            <div className="pt-4 space-y-2 px-2">
              <Link
                to="/contact"
                className="nav-button primary block text-center"
              >
                Contact Us
              </Link>
              <Link
                to="/quote"
                className="nav-button secondary block text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NAv;
