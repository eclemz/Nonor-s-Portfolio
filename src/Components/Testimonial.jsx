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
      <div className="flex justify-center py-[0.25rem] bg-[FCFCFC] dark:bg-[#100108]">
        <ul className="slick-dots gap-[0.27rem] items-center flex">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="custom-dot w-[0.5rem] h-[0.5rem] bg-[#FCFCFC] dark:bg-[#100108] self-center flex cursor-pointer"></div>
    ),
  };

  return (
    <main className="flex w-full flex-col items-center gap-[1.5rem] bg-[#FCFCFC] dark:bg-[#100108] min-[1024px]:py-[3.5rem] min-[768px]:py-[2.5rem] py-[3.5rem] px-[1rem] min-[768px]:px-[2rem] min-[1024px]:px-[3.5rem]">
      <h2 className="text-[1.5rem] min-[768px]:text-[2rem] font-[700] text-[#100108] dark:text-[#FCFCFC] text-center">
        Testimonial
      </h2>

      <div className="w-full flex justify-center gap-[3rem] items-center self-stretch ">
        <Slider
          {...settings}
          className="w-[19.4375rem] flex flex-col items-center gap-[1rem] bg-[#FCFCFC] dark:bg-[#100108] px-[1rem]"
        >
          {data.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded shadow dark:bg-[#100108]"
            >
              <p className=" text-[#100108] dark:text-[#FCFCFC] font-inter text-[1rem] font-[400] text-center">
                {card.description}
              </p>
              <div className="flex flex-col items-center gap-[0.5rem]">
                <h3 className="text-[1.125rem] font-[700] font-inter text-[#100108] dark:text-[#FCFCFC]">
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
