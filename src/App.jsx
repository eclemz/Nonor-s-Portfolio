import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Pages/Home";
import Hero from "./Components/Hero";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";
import AboutUs from "./Pages/AboutUs";
import ProjectPage from "./Pages/ProjectPage";
import { cardData2 } from "./Data/Data";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <>
   
    <div className="bg-[#FCFCFC] text-[#100108] dark:bg-[#100108] dark:text-[#FCFCFC] min-h-screen transition-colors duration-300">
      {/* <div className="bg-black text-white min-h-screen">test run</div> */}
      <Dashboard onHamburgerClick={() => setMenuOpen(true)}/>
      <Hamburger open={menuOpen} onClose={() => setMenuOpen(false)}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectName" element={<ProjectPage data={cardData2} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;
