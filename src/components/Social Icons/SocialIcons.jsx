import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faEnvelope, faPaw, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons2.css'
import WhatsApp from './Whatsapp/Whatsapp';


const SocialIcons = () => {
  return (
    <div className='social-icons' style={styles.container}>
      <a href="https://www.instagram.com/innomatrics_tech/" style={styles.link}><FontAwesomeIcon icon={faInstagram} style={styles.icon('#E040E6', '#405DE6')} /></a>
      {/* <a href="https://www.instagram.com/play_pawws?igsh=YXVrOXJjb2gweTNw&utm_source=qr" style={styles.link}><FontAwesomeIcon icon={faWhatsapp} style={styles.icon('#405DE6', '#405DE6')} /></a>
       */}
      <a> <WhatsApp/> </a>
      <a href="hello@innomatrics.com" style={styles.link}><FontAwesomeIcon icon={faEnvelope} style={styles.icon('#EA4335', '#EA4335')} /></a>
      <a href="tel:+91 84316 55799" style={styles.link}><FontAwesomeIcon icon={faPhone} style={styles.icon('#34A853', '#34A853')} /></a>
      <a href="https://www.linkedin.com/in/innomatrics-technologies-b573952a8/" style={styles.link}><FontAwesomeIcon icon={faLinkedin} style={styles.icon('#346AA8', '#34A853')} /></a>
      
      
    </div>
  );
}



const styles = {
  container: {
    position: 'fixed',
    top: '50%',
    left: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: '9999',
  },
  icon: (color, hoverColor) => ({
    fontSize: '25px', // Adjust the font size here
    color: color,
    transition: 'transform 0.3s',
  }),
  link: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover svg': {
      transform: 'scale(1.1)',
      color: (theme) => theme.color.hoverColor,
    },
  },
};

export default SocialIcons;
