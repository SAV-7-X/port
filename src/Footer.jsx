import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const socialIcons = [
    { icon: faFacebookF, link: 'https://www.facebook.com' },
    // { icon: faTwitter, link: 'https://www.twitter.com' },
    { icon: faInstagram, link: 'https://www.instagram.com' },
    { icon: faLinkedinIn, link: 'https://www.linkedin.com' },
    { icon: faGithub, link: 'https://www.github.com' },
  ];

  const contactInfo = [
    { icon: faEnvelope, text: 'sav7crack@gmail.com' },
    { icon: faPhoneAlt, text: '+91 9454002295' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.2 } },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 px-4 md:px-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      // whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-2 space-x-5">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={`mailto:${info.text}`}
                  className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon icon={info.icon} className="text-blue-500" />
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-12 ">
              {socialIcons.map((icon, index) => (
                <motion.a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FontAwesomeIcon className='text-white' icon={icon.icon} className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">About the Site</h3>
            <p className="text-gray-400 mb-4">
              Made With <span className='text-red-500'> &#x2665;</span> By Adarsh Verma 
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Adarsh Verma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;