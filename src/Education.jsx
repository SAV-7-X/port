import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Diploma',
      subject: 'Information Technology',
      institution: 'Hewett Polytechnic, Lucknow',
      graduationYear: '2024',
    },
    {
      degree: 'Intermediate',
      subject: 'Physics, Chemistry, Maths',
      institution: 'Unique Science Academy',
      graduationYear: '2022',
    },
    {
      degree: 'High School',
      subject: '---',
      institution: 'Unique',
      graduationYear: '2020',
    },
    {
      degree: 'Certification',
      subject: 'ASP.NET',
      institution: 'Mecatredz Technologies, Lucknow',
      graduationYear: '2023',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  return (
    <section id='Education' className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -50 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {education.degree}
                </motion.h3>
                <p className="text-gray-600 mb-2">{education.subject}</p>
                <p className="text-gray-600 mb-2">{education.institution}</p>
                <p className="text-gray-600">{education.graduationYear}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;