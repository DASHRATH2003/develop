import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGoogle } from "react-icons/fa";
import logo from "../../assets/innomatric_logo_only.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Innomatrics Logo" className="h-12 w-12 mr-3" />
              <div>
                <h3 className="text-xl font-bold">INNOMATRICS TECH</h3>
                <p className="text-blue-300 text-sm">Innovate Inspire Integrate</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering businesses with innovative technology solutions. We specialize in web development, mobile apps, digital marketing, and more.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Innomatrics-Technologies/61560974679711/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://twitter.com/innomatricstech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://www.instagram.com/innomatrics_tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/innomatricstech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMs1Lcu2sMwxYLRSNaiwMDQwNTYzTDZPNE0yS04ytDKoME1KMrawNLRMSzE0N0kyMfGSyMzLy89NLCnKTC5WKElNzsjLz8lPz0wtBgCTQRi5&q=innomatrics+technologies&rlz=1C1VDKB_enIN1002IN1002&oq=innomatri&gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MgYIARBFGDwyFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQg0NDQwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-300 hover:text-white transition-colors"
              >
                <FaGoogle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/overview" className="text-gray-300 hover:text-white transition-colors">Company Overview</Link>
              </li>
              <li>
                <Link to="/about/vision-mission" className="text-gray-300 hover:text-white transition-colors">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/about/why-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/webdev" className="text-gray-300 hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/appdev" className="text-gray-300 hover:text-white transition-colors">App Development</Link>
              </li>
              <li>
                <Link to="/digitalmarket" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/logodesign" className="text-gray-300 hover:text-white transition-colors">Logo Design</Link>
              </li>
              <li>
                <Link to="/socialmedia" className="text-gray-300 hover:text-white transition-colors">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/devops" className="text-gray-300 hover:text-white transition-colors">DevOps Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3" />
                <span className="text-gray-300">
                  2nd Floor, Akshay Complex, No. 01,<br />
                  16th Main Rd, near Bharat Petroleum,<br />
                  BTM 2nd Stage, Bengaluru,<br />
                  Karnataka 560076
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-300 mr-3" />
                <a href="tel:+918431655799" className="text-gray-300 hover:text-white transition-colors">
                  +91 8431655799
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-300 mr-3" />
                <a href="mailto:hello@innomatricstech.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@innomatricstech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {new Date().getFullYear()} Innomatrics Technologies. All Rights Reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/content" className="text-gray-300 hover:text-white transition-colors">Content Disclaimer</Link>
                </li>
                <li>
                  <Link to="/refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
