import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";
import { cardData1, cardData2 } from "./Data/Data";
import Testimonial from "./Components/Testimonial";
import { AnimatePresence } from "framer-motion";
import ProjectLayout from "./Components/ProjectLayout";
import ScrollToTop from "./Components/ScrollToTop";
import SEO from "./Components/SEO";
import { Suspense, lazy } from "react";
import PageSkeleton from "./Components/Loaders/PageSkeleton";
import RouteLoader from "./Components/Loaders/RouteLoader";

const Home = lazy(() => import("./Pages/Home"));
const Projects = lazy(() => import("./Pages/Projects"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const ProjectPage = lazy(() => import("./Pages/ProjectPage"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SEO />
      <div className="bg-[#FCFCFC] text-[#100108] dark:bg-[#100108] dark:text-[#FCFCFC] min-h-screen transition-colors duration-300">
        <Navbar onHamburgerClick={() => setMenuOpen(true)} />
        <Hamburger open={menuOpen} onClose={() => setMenuOpen(false)} />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageSkeleton />}>
            <RouteLoader>
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
            </RouteLoader>
          </Suspense>
        </AnimatePresence>

        <Testimonial data={cardData1} />
        <Footer />
      </div>
    </>
  );
}

export default App;
