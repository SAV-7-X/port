import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import hero from './assets/hero5.png';
import { Tilt } from 'react-tilt';
import Navbar from './Navbar';
import Background from './Background';
import Sidebar from './Sidebar';
import TopButton from './Topbtn';
import AboutMe from './Page1';
import Skills from './Skills';
import Work from './Work';
import EducationSection from './Education';
import ContactForm from './Contact';
import Footer from './Footer';
import UpButton from './Upbutton';

function Home() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['REACT DEVELOPER', 'LARAVEL DEVELOPER', 'WEB DEVELOPER'],
      typeSpeed: 90,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Background />
      <Sidebar />
      <motion.div id='Home' className='w-full h-full py-12 overflow-hidden' 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>
        <div className="flex px-auto justify-center items-center pt-20 w-full">
          <div className="head text-center lg:text-9xl text-6xl text-white font-bold w-full text-wrap ">
            <span className='text-gray-600 w-full px-2' style={{ filter: 'brightness(70%)' }}>WEB</span>
            <span className='text-black' style={{ filter: 'brightness(90%)' }}> DEVELOPER </span>
            <motion.p
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className='text-gray-800 lg:text-3xl text-2xl  py-4'>I AM A <span className='text-blue-900 ' ref={typedTextRef}></span></motion.p>
          </div>
        </div>
        <div className="">
          <motion.div
            className="z-10 py-10 items-center flex w-full justify-center overflow-hidden"
            // initial={{ y: 0 , scale:1}}
            // animate={{ y: [-10, 0 , 10 , 0]  }}
            // transition={{ repeat: Infinity, ease: 'easeInOut', duration: 1 , repeatDelay: 1 }}
          >
            <Tilt className="Tilt lg:scale-100 scale-90" options={{ max: 25, scale: 1.05 }}>
              <motion.div
                className="w-96 h-96 p-4 rounded-full border-blue-950 border-2 relative"
                style={{ borderStyle: 'dashed', borderSpacing: '90px 90px' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden border-2 border-blue-950 border-dashed"
                  style={{}}
                >
                  <motion.img
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    src={hero}
                    className="w-full h-full object-cover rounded-full"
                    style={{filter:'brightness(0.85)'}}
                    alt=""
                  />
                </motion.div>
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </motion.div>
      <UpButton/>
      <AboutMe />
      <Skills />
      <Work />
      <EducationSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home;
