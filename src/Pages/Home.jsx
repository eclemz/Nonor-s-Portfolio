import React from "react";
import Hero from "../Components/Hero.jsx";
import Marquee from "../Components/Marquee.jsx";
import Projects from "./Projects";
// import BlogSection from "../Components/BlogSection";

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects showSection={true} />
      {/* <BlogSection /> */}
    </>
  );
}

export default Home;
