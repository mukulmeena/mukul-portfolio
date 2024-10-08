import React from "react";
import "../App.css";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";
import Footer from "./Footer";

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full h-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "#151030" }}
      >
        <img
          src={service.icon}
          alt="some_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <motion.div>
      <div
        className="bg-black w-full text-white sm:flex sm:justify-around about overflow-x-hidden"
        style={{ padding: "4rem 0" }}
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              👨‍💻 I am Mukul Meena, a strong professional with a Bachelor of
              Technology (Electronics and Communication). Experienced{" "}
              <a
                className="text-green-300 hover:text-green-500 duration-300"
                href="https://www.linkedin.com/in/mukul-meena-750568239/"
                target="_blank"
                rel="noreferrer"
              >
                Software developer
              </a>{" "}
              with 2+ Year Expertise in Python, ReactJS, Node.js, GCP, MongoDB,
              and Auth0. Proficient in Flask for seamless application
              development.🚀.
              <br />
              {/* Extra curricular*/}
              {/* ✍️ Beyond coding, I love sharing my insights and experiences
              through engaging blogs on{" "} */}
              {/* <a
                className=" text-purple-300 hover:text-purple-400 duration-300"
                href="https://medium.com/@goudnithin77"
                target="_blank"
              >
                Medium
              </a>
              , where I delve into the intricacies of software development and
              technology trends. On a different note, I'm also into
              photography📸. It's not just a hobby; I see it as a way to capture
              moments🌟📷, tell stories. */}
            </p>

            <ButtonLink
              url="https://drive.google.com/file/d/1u0ZfEMK6SNiEzoptAbrA-tmG8zbSv3PE/view?usp=sharing"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
          <div className="mt-20 flex justify-center flex-wrap gap-7">
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
