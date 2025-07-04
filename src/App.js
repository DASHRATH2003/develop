import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

// Layout Components
import NAv from './components/Navbar/NAv';
import Footer from './components/Footer/Footer';
import SocialIcons from './components/Social Icons/SocialIcons';

// Main Pages
import Home from './components/Home/Home';
import About from './components/About/About';
import CompanyOverview from './components/About/CompanyOverview';
import VisionMission from './components/About/VisionMission';
import WhyUs from './components/About/WhyUs';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import IndustryDetail from './components/Industries/IndustryDetail';
import Conatct from './components/Contact/Contact';
import Career from './components/Career/Career';
import BlogPage from './components/Blog/BlogPage';

// Service Pages
import WebDev from './components/Services/Inno Services/WebDev';
import Appdev from './components/Services/Inno Services/Appdev';
import DigitalMarket from './components/Services/Inno Services/DigitalMarket';
import LogoDesign from './components/Services/Inno Services/LogoDesign';
import SocialMedia from './components/Services/Inno Services/SocialMedia';
import DevOps from './components/Services/Inno Services/DevOps';

// Legal Pages
import PrivacyPolicy from './components/Footer/Legal/PrivacyPolicy';
import TermsOfService from './components/Footer/Legal/TermsOfService';
import ContentDisclaimer from './components/Footer/Legal/ContentDisclaimer';
import RefundCancellationPolicy from './components/Footer/Legal/RefundCancellationPolicy';
import DataRetentionPolicy from './components/Footer/Legal/DataRetentionPolicy';

// Admin Components
import Login from './components/Admin/Login';
import Register from './components/Admin/Register';
import Dashboard from './components/Admin/Dashboard';
import ProtectedRoute from './components/Admin/ProtectedRoute';

function App() {
  return (
    <div className="App overflow-clip">
      <Router>
        <NAv />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/overview" element={<CompanyOverview />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/why-us" element={<WhyUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industry" element={<IndustryDetail />} />
          <Route path="/contact" element={<Conatct />} />
         
          <Route path="/careers" element={<Career />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* Service Routes */}
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/appdev" element={<Appdev />} />
          <Route path="/digitalmarket" element={<DigitalMarket />} />
          <Route path="/logodesign" element={<LogoDesign />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/devops" element={<DevOps />} />

          {/* Legal Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/content" element={<ContentDisclaimer />} />
          <Route path="/refund" element={<RefundCancellationPolicy />} />
          <Route path="/data" element={<DataRetentionPolicy />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
