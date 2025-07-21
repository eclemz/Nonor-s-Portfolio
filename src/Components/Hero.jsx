import { useRef } from "react";
import Buttons1 from "./Buttons";
import RotatingText from "./RotatingText";
import VariableProximity from "./VariableProximity";

function handleKeyDown(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    yourClickHandler();
  }
}

const coloredTexts = [
  { value: "No-Code Developer", color: "#17C461" },
  { value: "UX Designer", color: "#EE1818" },
];
const colorMap = coloredTexts.reduce((acc, item) => {
  acc[item.value] = item.color;
  return acc;
}, {});

function Hero({ showButton = true }) {
  const containerRef = useRef(null);
  return (
    <section className="hero bg-[radial-gradient(61.86%_50%_at_50%_50%,_#D281A7_0%,_#FFF_34.5%)] dark:bg-[radial-gradient(61.86%_50%_at_50%_50%,_#76073B_0%,_#100108_34.5%)] flex flex-col w-full justify-end items-start px-4 pt-[19rem] lg:pb-10 pb-14 md:px-8 lg:px-14  lg:pt-[15rem] md:gap-[0.625rem] gap-5 bg-[#FCFCFC] dark:bg-[#100108]">
      <span className="text-[#100108] dark:text-[#FCFCFC] font-inter md:text-xl lg:text-2xl text-lg">
        Hello, I am Norno.
      </span>
      <div className="flex flex-col items-start  gap-6 self-stretch md:pb-5">
      
         <span
          className="text-2xl md:text-5xl text-[#100108] dark:text-[#FCFCFC]"
          ref={containerRef}
          style={{ position: "relative" }}
        >
          <VariableProximity
            label={`An Experienced`}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 700, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </span>
        <RotatingText
          colorMap={colorMap}
          texts={coloredTexts.map((t) => t.value)}
          rotationInterval={3000}
          staggerDuration={0.05}
          staggerFrom="center"
          elementLevelClassName="text-3xl md:text-5xl font-inter font-[700]"
        />
        <span
          className="text-2xl md:text-lg text-[#100108] dark:text-[#FCFCFC]"
          ref={containerRef}
          style={{ position: "relative" }}
        >
          <VariableProximity
            label={`that Help Brands Boost Engagement & Usability Through\nHuman-Centered Design`}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </span>
      </div>
      {showButton && (
        <Buttons1
          className="md:self-start self-stretch"
          onKeyDown={handleKeyDown}
        >
          View My UX Work
        </Buttons1>
      )}
    </section>
  );
}

export default Hero;
