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
    <main className="flex w-full flex-col items-center gap-6 bg-[#FCFCFC] dark:bg-[#100108] lg:py-14 md:py-10 py-14 px-4 md:px-8 lg:px-14">
      <h2 className="text-2xl md:text-3xl font-[700] text-[#100108] dark:text-[#FCFCFC] text-center">
        Testimonial
      </h2>

      <div className="w-full flex justify-center gap-12 items-center self-stretch ">
        <Slider
          {...settings}
          className="w-[19.4375rem] flex flex-col items-center gap-4 bg-[#FCFCFC] dark:bg-[#100108] px-4"
        >
          {data.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded shadow dark:bg-[#100108]"
            >
              <p className=" text-[#100108] dark:text-[#FCFCFC] font-inter text-base font-[400] text-center">
                {card.description}
              </p>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-lg font-[700] font-inter text-[#100108] dark:text-[#FCFCFC]">
                  {card.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}

export default Testimonial;
