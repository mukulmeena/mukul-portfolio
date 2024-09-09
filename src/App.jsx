import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/mukul-portfolio/" element={<Home />} />
        <Route path="/mukul-portfolio/experience" element={<Experience />} />
        <Route path="/mukul-portfolio/projects" element={<Projects />} />
        <Route path="/mukul-portfolio/about" element={<About />} />
        <Route path="/mukul-portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
