import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: false,
    pauseOnHover: true,
    useTransform: true,

    appendDots: (dots) => (
      <div className="flex justify-center py-1">
        <ul className="slick-dots gap-1 items-center flex">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="custom-dot w-2 h-2 bg-[#FCFCFC] dark:bg-[#100108] gap-1 border-[1px] border-black dark:border-white self-center flex cursor-pointer"></div>
    ),
  };

  return (
    <main className="flex w-full flex-col items-center bg-[#FCFCFC] dark:bg-[#100108] lg:py-14 md:py-10 py-14 px-4 md:px-8 lg:px-14">
      <h2 className="text-2xl md:text-3xl font-[700] text-[#100108] dark:text-[#FCFCFC] text-center">
        Testimonial
      </h2>

      <div className="w-full flex justify-center gap-5 items-center self-stretch ">
        <Slider
          {...settings}
          className="lg:w-[26.5rem] w-[19.4375rem] flex flex-col items-center gap- bg-[#FCFCFC] dark:bg-[#100108] px-4"
        >
          {data.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col py-5 px-3 space-y-2 items-center bg-[#FCFCFC] dark:bg-[#100108]"
            >
              <p className=" text-[#100108] dark:text-[#FFF] font-inter lg:text-base text-sm font-[400] text-center self-stretch">
                {card.description}
              </p>
              <div className="flex flex-col items-center ">
                <h3 className="lg:text-xl text-center text-base font-[700] font-inter text-[#100108] dark:text-[#FCFCFC]">
                  {card.name}
                </h3>
                <p className="font-inter text-center whitespace-nowrap text-[#0A0105] dark:text-[#9D979A] lg:text-xl text-base leading-6">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}

export default Testimonial;
