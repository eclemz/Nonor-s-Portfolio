import React from "react";
import { cardData1 } from "../Data/data.js";
import Hero from "./Hero";
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
