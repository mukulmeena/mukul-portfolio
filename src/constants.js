import Quantinent from "./assets/Quantinent.png";
import AAVE from "./assets/aave.jpg";
import Medicine_UI from "./assets/medicine-ui.png";
import Intelli_chatbot from "./assets/intelli_chatbot.png";
import trading_bot from "./assets/trading-bot.jpg";

export const services = [
  {
    title: "Technology Enthusiast",
    icon: "https://csgeeek.github.io/web.png",
  },
  {
    title: "Software Engineer",
    icon: "https://csgeeek.github.io/web.png",
  },
  {
    title: "Full Stack Developer",
    icon: "https://csgeeek.github.io/web.png",
  },
];

export const name = "Mukul";
export const project = [
  {
    image: AAVE,
    title: "AAVE Subgraph",
    description:
      "Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers. This Subgraph Basically query the data of Application on Blockchain and GraphQL Node and store the data in Graph Store.",
    git: "https://github.com/mukulmeena/Subgraph/tree/AaveV2",
    technologies: ["Typescript", "Web3", "Blockchain", "Defi"],
  },
  {
    image: Medicine_UI,
    title: "Medicine Finder App",
    description:
      "Developed a React-based web application for searching and displaying medicine availablity from nearby stores based on various salt information. Implemented complex data manipulation and sorting algorithms to process API responses.",
    git: "https://github.com/mukulmeena/Medical-Service-UI",
    technologies: ["React", "API", "Javascript"],
  },
  {
    image: trading_bot,
    title: "Automated Trading Bot for crypto",
    description:
      "Developed a Python implementation of the PineScript strategy that runs in real-time using 5-minute candlestick data from Lighter API.",
    git: "https://github.com/mukulmeena/trading-strategy-bot/tree/strategy-python",
    technologies: [
      "Python",
      "Blockchain",
      "Lighter",
      "GCP",
      "Railway",
      "Flask",
    ],
  },
  {
    image: Intelli_chatbot,
    title: "Data Visualization Chatbot",
    description:
      "An AI-based platform for data analysis, where I took advantage of Pandas' enormous processing power to speed up analysis and Excel Spreadsheets' superior data display capabilities over Jupyter notebooks. This platform uses AI to write code, analyze data, and present the results on a spreadsheet with just one query.",
    git: "https://github.com/mukulmeena/IntelliChatbot",
    technologies: ["Python", "React", "Flask", "Pandas"],
  },
];

export const experiences = [
  {
    company: "Quantinent Analytics",
    role: "Software Engineer 1",
    duration: "October 2023 - Present",
    logo: Quantinent,
    points: [
      "Built CatVera from the ground up, leading everything from the frontend (React.js) to over 20 backend services(Node.js, Python/Flask), and managing data with Snowflake, MongoDB, and Google Cloud. The result? A powerful, AI-driven catastrophe underwriting platform that made risk analysis faster, cleaner, and far more accurate 📈.",
      "Designed smart automation and geospatial tools that helped insurance teams roll up entire portfolios in real time, spot exposure risks instantly, and generate reports with a single click—saving hours of manual effort and improving underwriting decisions.",
      "Led multiple project teams across CatVera and other major products in development—setting roadmaps, assigning tasks, and ensuring timely delivery. Played a hands-on role in turning complex ideas into working features, while mentoring team members and driving progress across parallel initiatives.",
      "Architected and deployed scalable cloud infrastructure using GCP services—leveraging App Engine for autoscaling frontend deployments, Cloud Run for containerized microservices, and Cloud Scheduler & Cloud Jobs for orchestrating asynchronous and batch processing workflows. Ensured high availability, seamless inter-service communication, and modular system expansion empowering CatVera to integrate with external systems and support complex, evolving insurance workflows.",
    ],
    url: "https://quantdev.in/",
  },
  {
    company: "Accenture",
    role: "Security Delivery Associate",
    duration: "Jan 2023 - October 2023",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png",
    points: [
      "Worked on an Identity Access Management tool i.e. SailPoint.",
      "The goal is to seamlessly automate provisioning, access requests, access certification and separation of duties demands.📱.",
    ],
    url: "https://www.accenture.com/",
  },
  {
    company: "Quantinent Analytics",
    role: "Front End Developer Intern",
    duration: "Dec 2022 - March 2023",
    logo: Quantinent,
    points: [
      "Actively contributed to the development of a highly configurable SaaS platform (Q-flow) on GCP, starting from inception to the MVP stage.",
      "Developed highly dynamic UI components, which can be controlled from data layer. So no re-deployment needed for major changes in UI.",
      "Leveraged MongoDB to design and manage databases, effectively storing and retrieving information critical to the platform.",
    ],
    url: "https://quantdev.in/",
  },
];

export const EMAIL_JS_SERVICE_ID = "service_pacm4fl";
export const EMAIL_JS_TEMPLATE_ID = "template_zxffl44";
export const EMAIL_JS_PUBLIC_KEY = "mKZB7tIh2zgtfa-X9";

export const skills = [
  "scalable web applications",
  "optimized algorithms",
  "responsive user interfaces",
  "RESTful APIs",
  "database architectures",
];

export const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
];
