import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useInView } from 'react-intersection-observer';

function Navbar() {
  const [hamburger, setHamburger] = useState('menu');
  const [menu, setMenu] = useState(() => {
    return window.innerWidth >= 1024 ? 0 : -1000;
  });
  const location = useLocation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: '-50px',
  });
  const homeRef = useRef(null);
  const [activeSection, setActiveSection] = useState('#Home'); // Initialize activeSection with "#Home"

  useEffect(() => {
    const handleResize = () => {
      setMenu(window.innerWidth >= 1024 ? 0 : -1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.clientHeight;
        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActiveSection(`#${section.id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll to highlight the initial section on component mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(menu === -1000 ? 0 : -1000);
    setHamburger(hamburger === 'menu' ? 'close' : 'menu');
  };

  const navItems = [
    { label: 'Home', link: '#Home' },
    { label: 'About', link: '#About' },
    { label: 'Skills', link: '#Skills' },
    { label: 'Work', link: '#Work' },
    { label: 'Education', link: '#Education' },

    { label: 'Contact', link: '#Contact' },
  ];

  const scrollToSection = (link) => {
    scroll.scrollToElement(link, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setMenu(-1000);
  };

  return (
    <header className='lg:px-20 fixed shadow-lg bg-gray-100 w-full px-2 py-2 text-gray-700 cursor-pointer' style={{ zIndex: '999' }}>
      <nav className='flex justify-between'>
        <Link to="/" className='text-3xl font-semibold'><span className='text-blue-950'>Adarsh</span> Verma</Link>
        <motion.ul className={`lg:flex lg:space-x-10 lg:pt-2 flex lg:flex-row flex-col lg:space-y-0 lg:h-auto space-y-10 h-screen absolute lg:relative lg:w-auto w-3/4 lg:left-auto lg:top-auto left-0 top-0 lg:bg-transparent bg-white lg:text-gray-700 text-blue-900 items-center pt-8`} initial={{ x: -1000 }} transition={{ duration: 0.4 }} animate={{ opacity: 1, x: menu }}>
          {navItems.map((item, index) => (
            <motion.li key={index} className={`lg:hover:text-blue-900 relative ${activeSection === item.link ? 'text-blue-900' : ''}`} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} onClick={() => scrollToSection(item.link)}>
              <ScrollLink to={item.link.slice(1)} smooth={true} duration={800} ref={item.link === '#Home' ? homeRef : null}>
                {item.label}
              </ScrollLink>
              {activeSection === item.link && (
                <motion.div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-900" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.3 }} />
              )}
            </motion.li>
          ))}
        </motion.ul>
        <div onClick={toggleMenu} className="lg:hidden">
          <span className="material-symbols-outlined pt-2">{hamburger}</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
