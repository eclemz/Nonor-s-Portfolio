import React from "react";

function Marquee() {
  const logos = [
    "./TechWomenlogo.svg",
    "./studio3logo.svg",
    "./wienlogo.svg",
    "./creatnestelogo.svg",
    "./FirstEPLogo.svg",
    "./TechWomenlogo.svg",
    "./studio3logo.svg",
    "./wienlogo.svg",
    "./creatnestelogo.svg",
    "./FirstEPLogo.svg",
  ];

  const repeatedLogos = Array(10).fill(logos).flat();

  return (
    <div className="w-full flex flex-col lg:py-5 lg:px-14 md:py-5 md:px-8 py-6 px-4 gap-4 items-center text-white relative overflow-hidden">
      <h2 className="text-center font-inter lg:text-[1.75rem] md:text-xl text-lg lg:font-normal font-bold self-stretch dark:text-[#FCFCFC] text-[#100108]">
        Trusted by
      </h2>
      <div className="marquee-wrapper relative w-full overflow-hidden">
        <div className="marquee-track self-stretch flex items-center whitespace-nowrap">
          {repeatedLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`logo-${index}`}
              className="lg:max-h-24 md:max-h-20 max-h-12 object-contain mx-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
