import React, { useState } from 'react';
// import { FaArrowUp } from 'react-icons/fa'; // Importing an arrow-up icon from react-icons
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
  

  // Function to scroll to the top of the page
 
  return (
    <div className="absolute h-screen items-center justify-center flex w-full">
   <motion.button
      
      className={`hidden fixed right-2 top-button  bg-blue-500   z-50  lg:flex justify-between p-4 items-center text-black px-2 py-1 flex-col rounded-full shadow-md space-y-8 space-x-8`}
      style={{ boxShadow: '60px 60px 20px black , inset 60px 60px 20px rgb(0,0,0,0.1)', borderStyle: 'solid' }}
    >
   
   
<motion.div > 
<motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-2xl text-white' icon={faFacebook} />
      </motion.div>

      <motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-2xl text-white' icon={faInstagram} />
      </motion.div>

      <motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-2xl text-white' icon={faGithub} />
      </motion.div>

      <motion.div
        className=""
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <FontAwesomeIcon className='block py-4 text-2xl text-white' icon={faLinkedin} />
      </motion.div>
      </motion.div>

    </motion.button>
    </div>
  );
};

export default Sidebar;
