import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import Footer from "./Footer";

const Experience = () => {
  return (
    <motion.div
      className="experience bg-black w-full text-white pt-20 pb-16 overflow-hidden"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 pl-2 pr-6 pt-4 rounded-lg shadow-lg h-full flex flex-col justify-between"
                >
                  <div>
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-full h-24 object-contain mb-4"
                      />
                    </a>
                    <h3 className="text-xl font-bold text-left">
                      {experience.company}
                    </h3>
                  </div>
                  <p className="text-gray-400 mt-auto">{experience.duration}</p>
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-2xl font-bold mb-4">{experience.role}</h4>
                <ul className="space-y-3">
                  {experience.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: pointIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Experience;
