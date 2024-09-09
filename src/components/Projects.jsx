import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { project } from "../constants";

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-900 h-full border border-gray-700 rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-full object-cover"
        src={image}
        alt={title}
      />
      <div className="p-5 flex-grow flex flex-col">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-300 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.95 }}
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-yellow-400 to-pink-500 rounded-lg hover:from-yellow-500 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View on GitHub
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div className="bg-black min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600"
        >
          My Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {project.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"
            >
              <ProjectCard
                image={item.image}
                title={item.title}
                description={
                  item?.description ||
                  "An innovative project showcasing cutting-edge technology and problem-solving skills."
                }
                git={item.git}
                technologies={item.technologies}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Projects;
