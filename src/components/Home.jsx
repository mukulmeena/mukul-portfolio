import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { name, skills, techLogos } from "../constants";
import Footer from "./Footer";
import TechStackAnimation from "./TechStackAnimation";

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prevText) => prevText + name[ref.current - 1]);
      }
    }, 200);

    const skillInterval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(skillInterval);
    };
  }, []);

  return (
    <div className="relative z-0 bg-black w-screen min-h-screen overflow-hidden">
      <TechStackAnimation logos={techLogos} />
      <div className="hero relative min-h-screen flex flex-col justify-center items-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-4 backdrop-blur-sm bg-opacity-10 bg-gray-900 rounded-3xl text-center mb-8 p-8"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold mt-2">
            Hi, I'm&nbsp;
            <span className="text-yellow-200 font-extrabold">{text}</span>
          </h1>
          <p className="mt-3 text-xl">
            I'm a full-stack developer passionate about building
            <br className="hidden sm:inline" />
            <motion.span
              key={currentSkillIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-yellow-200 font-semibold block mt-2"
            >
              {skills[currentSkillIndex]}
            </motion.span>
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
