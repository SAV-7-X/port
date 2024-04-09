import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faLaravel, faPhp, faJava, faPython, faGithub, faGit, faNodeJs, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import TailwindIcon from './assets/Tailwind_CSS_Logo.svg.png'; // Import the Tailwind CSS icon

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Tailwind CSS', icon: TailwindIcon }, // Use the imported Tailwind CSS icon
    { name: 'React', icon: faReact },
    { name: 'Laravel', icon: faLaravel },
    { name: 'PHP', icon: faPhp },
    { name: 'Java', icon: faJava },
    { name: 'Python', icon: faPython },
    { name: 'GitHub', icon: faGithub },
    { name: 'Git', icon: faGit },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Sass', icon: faSass },
    { name: 'Databases', icon: faDatabase },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div id='Skills' className="bg-gray-900 text-white py-20"
    initial={{opacity: 0.5 , y:-50 }}
    // initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 , ease:'easeInOut' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          My Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0.5 , y:-50 }}
              // initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 , ease:'linear' }}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-gray-700 cursor-pointer"
              variants={item}
              whileHover={{ scale: 1.1 }}
            >
              {typeof skill.icon === 'string' ? (
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-4" />
              ) : (
                <FontAwesomeIcon icon={skill.icon} className="text-5xl mb-4" />
              )}
              <h3 className="text-lg font-bold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
