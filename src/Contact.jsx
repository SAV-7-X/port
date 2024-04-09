import React from 'react';
import { motion } from 'framer-motion';
import './assets/Contact.css'
const ContactForm = () => {
  return (
    <motion.div
    id='Contact'
      className="bg-gray-100 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="shadow-md rounded-lg p-6 space-y-4 md:p-10 md:space-y-6">
            <div className="input-container">
              <input
                className="input"
                name="name"
                type="text"
                placeholder="Enter Your Name"
              />
              <label className="label" htmlFor="name">Enter Your Name</label>
              <div className="topline"></div>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                className="input"
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
              <label className="label" htmlFor="email">Enter Your Email</label>
              <div className="topline"></div>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <textarea
                className="input h-32 resize-none"
                name="message"
                placeholder="Enter Your Message"
              ></textarea>
              <label className="label" htmlFor="message">Enter Your Message</label>
              <div className="topline"></div>
              <div className="underline"></div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;