import React from "react";
import { cardData1 } from "../Data/Data.js";
import Hero from "../Components/Hero.jsx";
import Projects from "./Projects";
import Testimonial from "../Components/Testimonial.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Projects showSection={true} />
      <Testimonial data={cardData1} />
    </>
  );
}

export default Home;
