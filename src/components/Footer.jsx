import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import {
  AiFillMediumCircle,
  AiFillLinkedin,
  AiFillGitlab,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div
      className="fixed w-full bg-slate-900 p-4"
      style={{ cursor: "default", bottom: 0 }}
    >
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-white text-center w-full sm:w-auto font-light">
          © {year} Mukul. All rights reserved.
        </p>
        <div className="text-white flex justify-around sm:w-[250px] w-full">
          <a
            href="mailto:meenamukul12@gmail.com"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FiMail className="text-xl" />
          </a>
          <a
            href="https://x.com/MUKULME04107074"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/mukul-meena-750568239/"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/mukulmeena"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://gitlab.com/mukulmeena"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillGitlab className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
