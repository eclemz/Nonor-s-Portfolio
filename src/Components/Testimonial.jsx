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
      <div
        className="flex justify-center py-1"
        role="group"
        aria-label="Testimonials navigation dots"
      >
        <ul className="slick-dots flex gap-1 items-center">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button
        type="button"
        className="w-2 h-2 rounded-full bg-[#FCFCFC] dark:bg-[#100108] border border-black dark:border-white"
        aria-label="Go to testimonial"
      />
    ),
  };

  return (
    <section
      className="flex w-full flex-col items-center bg-[#FCFCFC] dark:bg-[#100108] lg:py-14 md:py-10 py-14 px-4 md:px-8 lg:px-14"
      aria-labelledby="testimonial-heading"
    >
      <h2
        id="testimonial-heading"
        className="text-2xl md:text-3xl font-bold text-[#100108] dark:text-[#FCFCFC] text-center mb-6"
      >
        Testimonials
      </h2>

      <div className="w-full flex justify-center items-center">
        <Slider {...settings} className="lg:w-[26.5rem] w-[19.4375rem]">
          {data.map((card, idx) => (
            <article
              key={idx}
              className="flex flex-col py-5 px-4 space-y-3 items-center bg-[#FCFCFC] dark:bg-[#100108] rounded-lg shadow-sm"
              aria-label={`Testimonial from ${card.name}`}
            >
              <p className="text-[#100108] dark:text-[#FFF] font-inter lg:text-base text-sm text-center leading-relaxed">
                {card.description}
              </p>

              <div className="flex flex-col items-center">
                <h3 className="lg:text-lg text-base font-semibold font-inter text-[#100108] dark:text-[#FCFCFC] text-center">
                  {card.name}
                </h3>
                <p className="font-inter text-center text-[#0A0105] dark:text-[#9D979A] lg:text-sm text-xs">
                  {card.title}
                </p>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
