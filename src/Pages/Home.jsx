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
      {/* <section className="-mt-8 md:-mt-16"> */}
      <Projects showSection={true} />
      {/* </section> */}
      {/* <BlogSection /> */}
    </>
  );
}

export default Home;
