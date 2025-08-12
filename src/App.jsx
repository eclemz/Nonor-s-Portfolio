import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";
import AboutUs from "./Pages/AboutUs";
import ProjectPage from "./Pages/ProjectPage";
import { cardData1, cardData2 } from "./Data/Data";
import Testimonial from "./Components/Testimonial";
import { AnimatePresence } from "framer-motion";
import ProjectLayout from "./Components/ProjectLayout";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FCFCFC] text-[#100108] dark:bg-[#100108] dark:text-[#FCFCFC] min-h-screen transition-colors duration-300">
        <Dashboard onHamburgerClick={() => setMenuOpen(true)} />
        <Hamburger open={menuOpen} onClose={() => setMenuOpen(false)} />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<ProjectLayout />}>
              <Route
                path=":projectName"
                element={<ProjectPage data={cardData2} />}
              />
            </Route>
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </AnimatePresence>
        <Testimonial data={cardData1} />
        <Footer />
      </div>
    </>
  );
}

export default App;
