import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "./Buttons";
import RotatingText from "./RotatingText";

function handleKeyDown(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    yourClickHandler();
  }
}

const coloredTexts = [
  { value: "UX Researcher", color: "#17C461" },
  { value: "UX Designer", color: "#EE1818" },
];
const colorMap = coloredTexts.reduce((acc, item) => {
  acc[item.value] = item.color;
  return acc;
}, {});

function Hero({ showButton = true }) {
  const navigate = useNavigate();
  const handleProjectClick = () => {
    navigate("/projects");
  };

  const containerRef = useRef(null);
  return (
    <section className="hero bg-[radial-gradient(61.86%_50%_at_50%_50%,_#D281A7_0%,_#FFF_34.5%)] dark:bg-[radial-gradient(61.86%_50%_at_50%_50%,_#76073B_0%,_#100108_34.5%)] flex flex-col w-full justify-end items-start px-4 pt-[19rem] lg:pb-20 pb-14 md:px-8 lg:px-14  lg:pt-[15rem] md:gap-[0.625rem] gap-5 bg-[#FCFCFC] dark:bg-[#100108]">
      <span className="text-[#100108] dark:text-[#FCFCFC] font-inter md:text-base lt:text-base lg:text-lg text-sm">
        Hello, I am Norno.
      </span>
      <div className="flex flex-col items-start gap-1 md:gap-2 self-stretch md:pb-4">
        <span
          className="text-3xl lt:text-4xl lg:text-5xl text-[#100108] font-bold dark:text-[#FCFCFC]"
          ref={containerRef}
        >
          An Experienced
        </span>
        <RotatingText
          colorMap={colorMap}
          texts={coloredTexts.map((t) => t.value)}
          rotationInterval={3000}
          staggerDuration={0.05}
          staggerFrom="center"
          elementLevelClassName="text-3xl lt:text-4xl lg:text-5xl font-inter font-bold"
        />
        <span
          className="text-lg md:text-xl  font-inter fon text-[#100108] dark:text-[#FCFCFC]"
          ref={containerRef}
        >
          I help brands boost engagement through <br /> human centered designs
        </span>
      </div>
      {showButton && (
        <Buttons
          className="md:self-start self-stretch bg-[#EC157D] h-10 lt:h-10 lg:h-12 text-[#FFF]"
          onKeyDown={handleKeyDown}
          onClick={handleProjectClick}
        >
          View My Work
        </Buttons>
      )}
    </section>
  );
}

export default Hero;
