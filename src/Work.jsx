import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import project1 from './assets/microsoft.png';
import error from './assets/error-404-6052476_1280.png'

const WorkSection = () => {
  const controls = useAnimation();

  const workData = [
    {
      title: 'MICROSOFT CLONE',
      description:
        'MICROSOFT LANDING PAGE WORKING CLONE USING REACT AND TAILWIND',
      image: project1,
      link: 'https://sav-7-x.github.io/microsoft/',
    },
    {
      title: 'EMPTY',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quas, quod quam facere magni .',
      image: error,
      link: 'https://example.com/project2',
    },
    {
      title: 'EMPTY',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quas, quod quam facere magni .',
      image: error,
      link: 'https://example.com/project3',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, scale: 0.9 },
  };

  return (
    <motion.section id='Work' className="bg-gray-100 py-20"
    initial={{opacity: 0.5 , y:-50 }}
    // initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 , ease:'easeInOut' }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My Work
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {workData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              variants={cardVariants}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-t-lg h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <motion.button
                    className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VIEW PROJECT
                  </motion.button>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkSection;