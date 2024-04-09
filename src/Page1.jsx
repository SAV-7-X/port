import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import picture from './assets/hero2.jpeg';
import { MdCode, MdDesignServices, MdWorkOutline } from 'react-icons/md';

const AboutMe = () => {
  // Framer Motion animations
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, ease: 'easeOut' } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id='About'>
    <motion.div className="bg-gray-200 text-gray-900 py-20"
     initial={{ opacity: 0, y: -50 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-end items-center">
            <Tilt className="Tilt overflow-hidden w-full sm:w-auto flex justify-center items-center" options={{ max: 25, scale: 1.05 }}>
              <motion.div
                className="bg-transparent bg-opacity-0 h-80 sm:h-96 w-fit sm:w-96 rounded-3xl overflow-hidden shadow-lg"
                variants={item}
                style={{ animation: 'spin 10s linear infinite' }}
              >
                <motion.img
                initial={{opacity: 0.5 , x:-50 }}
                // initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 , ease:'easeInOut' }}
                  src={picture}
                  alt="Profile"
                  className="w-full  bg-transparent h-full object-cover rounded-3xl"
                />
              </motion.div>
            </Tilt>
          </div>
          <motion.div className="flex flex-col w-full md:w-1/2 justify-center" variants={item}
           initial={{opacity: 0.5 , y:50 }}
           // initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 , ease:'easeInOut' }}>
            <motion.h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MdWorkOutline className="text-blue-500" /> Adarsh Verma
            </motion.h3>
            <motion.p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              Hi, I'm{' '}
              <span className="text-blue-500 font-bold">Adarsh Verma</span>, a passionate web
              developer with expertise in{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500 font-bold">
                React
              </span>{' '}
              and{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-bold">
                Laravel
              </span>
              . After completing my diploma from Hewett Polytechnic, I've dedicated myself to
              crafting beautiful and functional websites and applications that provide a seamless
              user experience.
            </motion.p>
            <div className="flex items-center gap-4 flex-wrap">
              <motion.a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors duration-300 animate-pulse"
                variants={fadeIn}
              >
                <MdCode /> Download Resume
              </motion.a>
              <motion.a
                href="#"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors duration-300 animate-bounce"
                variants={fadeIn}
              >
                <MdDesignServices /> My Work
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </section>
  );
};

export default AboutMe;