import React, { useState } from 'react';
// import { FaArrowUp } from 'react-icons/fa'; // Importing an arrow-up icon from react-icons
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const TopButton = () => {
  

  // Function to scroll to the top of the page
 
  return (
    <div className="flex justify-center items-center w-full">
    <button className={`fixed bottom-0 top-button bg-transparent flex justify-center px-auto items-center  text-black px-2 py-1 w-12 h-12 rounded-full border-4 border-white` } style={{boxShadow:'60px 60px 20px rgb(0,0,0,0.2) , inset 60px 60px 20px rgb(0,0,0,0.2)' , backdropFilter:'blur(5px)' , zIndex:'999'}}>
   
<Link to="/home"> <motion.span className="material-symbols-outlined text-white " animate={{y:[5,-5,5,0]}} transition={{duration: 1 , repeat: Infinity , repeatDelay: 1 , ease: 'linear'}} >
arrow_downward
</motion.span> </Link>

    </button>
    </div>
  );
};

export default TopButton;
