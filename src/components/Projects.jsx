import React from "react";
import vpn from "../assets/vpn.png";
import aave from "../assets/aave.jpg";
import intelli_chatbot from "../assets/intelli_chatbot.png";
import medicine_ui from "../assets/medicine-ui.png";
import Footer from "./Footer";

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {title === "Intelli ChatBot" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={intelli_chatbot}
            alt=""
          />
        </a>
      )}
      {title === "Medicine-Service-UI" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={medicine_ui}
            alt=""
          />
        </a>
      )}
      {title === "AAVE Subgraph" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={aave}
            alt=""
          />
        </a>
      )}
      <div className="p-4 sm:p-6">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-2 pl-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
        <a
          href={git}
          className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            links={item.links}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const project = [
  {
    title: "Intelli ChatBot",
    description:
      "It is an AI based Data analysis platform in which we leveraged the capabilities of Excel Spreadsheets for better data presentation and Pandas massive computational capacity to accelerate analysis. With just one query, this platform leverages AI to build code, analyze data, and display the results on a spreadsheet.",
    image: { intelli_chatbot },
    git: "https://github.com/mukulmeena/IntelliChatbot",
    technologies: [
      "Pandas",
      "ReactJS",
      "Flask",
      "openAI",
      "Python",
      "Syncfusion",
    ],
  },
  {
    title: "Medicine-Service-UI",
    description:
      "Finding the cheapest medicine from the number of nearby pharmacy. Filter out cheapest medicines on the basis of 3 categories: Form, Strength and Packaging and find the best medicine possible at cheapest price.",
    image: { medicine_ui },
    git: "https://github.com/mukulmeena/Medical-Service-UI",
    technologies: ["React JS", "Javascript"],
  },
  //   {
  //     title: "Iris Species Predictor",
  //     description:
  //       "It is a web application which predicts the IRIS species based on its features. The project involved preprocessing the Iris flowers features data i.e. sepal length, sepal width etc. and training the model using Linear Regression algorithm on this data.",
  //     image: { aave },
  //     git: "https://github.com/nithingooud/vpn_studios",
  //     technologies: ["Flask", "Python", "Machine Learning"],
  //   },
  {
    title: "AAVE Subgraph",
    description:
      "Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers. This Subgraph Basically query the data of Application on Blockchain and GraphQL Node and store the data in Graph Store.",
    image: { aave },
    git: "https://github.com/mukulmeena/Subgraph",
    technologies: ["Typescript", "Web3", "Blockchain"],
  },
];

export default Projects;
