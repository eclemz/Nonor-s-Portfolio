// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// function Testimonial({ data }) {
//   const settings = {
//     modules: [Autoplay, Pagination, A11y],
//     slidesPerView: 1,
//     loop: false,
//     speed: 500,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },
//     autoHeight: false,
//     pagination: {
//       el: ".testimonial-pagination",
//       clickable: true,
//       renderBullet: (index, className) =>
//         `<button type="button" class="${className} w-8 h-8 rounded-full dark:bg-[#FCFCFC] bg-[#100108] border border-black dark:border-white" aria-label="Go to testimonial"></button>`,
//     },
//     a11y: {
//       enabled: true,
//       prevMessage: "Previous testimonial",
//       nextMessage: "Next testimonial",
//       paginationBulletMessage: "Go to testimonial {{index}}",
//     },
//   };

//   return (
//     <section
//       className="flex w-full flex-col items-center bg-[#FCFCFC] dark:bg-[#100108] lg:py-14 md:py-10 py-14 px-4 md:px-8 lg:px-14"
//       aria-labelledby="testimonial-heading"
//     >
//       <h2
//         id="testimonial-heading"
//         className="text-2xl md:text-3xl font-bold text-[#100108] dark:text-[#FCFCFC] text-center mb-6"
//       >
//         Testimonials
//       </h2>

//       <div className="w-full flex flex-col justify-center items-center">
//         <Swiper {...settings} className="lg:w-[26.5rem] w-[19.4375rem]">
//           {data.map((card, idx) => (
//             <SwiperSlide key={idx} aria-labelledby="testimonial-heading">
//               <article
//                 className="flex flex-col py-5 px-4 space-y-3 items-center bg-[#FCFCFC] dark:bg-[#100108] rounded-lg shadow-sm"
//                 aria-label={`Testimonial from ${card.name}`}
//               >
//                 <p className="text-[#100108] dark:text-[#FFF] font-inter lg:text-base text-sm text-center leading-relaxed">
//                   {card.description}
//                 </p>

//                 <div className="flex flex-col items-center">
//                   <h3 className="lg:text-lg text-base font-semibold font-inter text-[#100108] dark:text-[#FCFCFC] text-center">
//                     {card.name}
//                   </h3>
//                   <p className="font-inter text-center text-[#0A0105] dark:text-[#9D979A] lg:text-sm text-xs">
//                     {card.title}
//                   </p>
//                 </div>
//               </article>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div
//           className="testimonial-pagination flex justify-center py-1 gap-4"
//           role="buttons"
//           aria-label="Testimonials navigation dots"
//         />
//       </div>
//     </section>
//   );
// }

// export default Testimonial;

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonials({ data }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  // Disable click events on Swiper container
  useEffect(() => {
    if (swiperRef.current) {
      const swiperEl = swiperRef.current;

      // Prevent click events on the Swiper container
      const handleClick = (e) => {
        if (e.target === swiperEl) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      swiperEl.addEventListener("click", handleClick);

      return () => {
        swiperEl.removeEventListener("click", handleClick);
      };
    }
  }, []);

  // Custom accessible pagination component
  const CustomPagination = () => {
    if (!swiperInstance) return null;

    return (
      <div
        className="testimonial-pagination flex justify-center py-1 gap-4"
        role="tablist"
        aria-label="Testimonials navigation"
      >
        {[...Array(swiperInstance.slides.length)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              swiperInstance.slideTo(index);
              setActiveIndex(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                swiperInstance.slideTo(index);
                setActiveIndex(index);
              }

              // Optional: Keyboard navigation with arrow keys
              if (e.key === "ArrowRight") {
                e.preventDefault();
                const nextIndex = (index + 1) % swiperInstance.slides.length;
                swiperInstance.slideTo(nextIndex);
                setActiveIndex(nextIndex);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                const prevIndex =
                  (index - 1 + swiperInstance.slides.length) %
                  swiperInstance.slides.length;
                swiperInstance.slideTo(prevIndex);
                setActiveIndex(prevIndex);
              }
            }}
            className={`w-3 h-3 mt-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#EC157D] focus:ring-offset-2 ${
              index === activeIndex
                ? "bg-[#EC157D] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to testimonial ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-12 bg-white dark:bg-[#100108]"
    >
      <h2
        id="testimonials-heading"
        className="text-2xl font-bold text-center mb-8 text-black dark:text-white"
      >
        Testimonials
      </h2>

      <div className="max-w-4xl mx-auto px-4 items-center">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoHeight={true}
          simulateTouch={true}
          role="application"
          aria-label="Testimonials carousel"
          aria-roledescription="carousel"
          tabIndex={-1}
          onKeyDown={(e) => {
            // Prevents this container from being interactive
            e.stopPropagation();
          }}
          className="lg:w-[26.5rem] md:w-[30rem]"
        >
          {data.map((card, idx) => (
            <SwiperSlide key={card.id}>
              <div
                className="mx-auto min-h-[15rem] text-center p-6 bg-[#eeecec] dark:bg-[#1d1c1d] rounded-lg "
                role="tabpanel"
                aria-label={`Testimonial from ${card.name}`}
                id={`testimonial-panel-${idx}`}
              >
                <blockquote className="text-[#100108] dark:text-[#FFF] font-inter lg:text-base text-sm text-center leading-relaxed mb-4">
                  {card.description}
                </blockquote>
                <cite className="lg:text-lg text-base font-semibold font-inter text-[#100108] dark:text-[#FCFCFC] text-center">
                  {card.name}
                </cite>
                <p className="font-inter text-center text-[#0A0105] dark:text-[#9D979A] lg:text-sm text-xs">
                  {card.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <CustomPagination />

        {/* Optional: Previous/Next buttons for better accessibility */}
        <div className="hidden md:flex justify-center mt-4 gap-4">
          <button
            onClick={() => {
              swiperInstance?.slidePrev();
              setActiveIndex(swiperInstance?.activeIndex || 0);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                swiperInstance?.slidePrev();
                setActiveIndex(swiperInstance?.activeIndex || 0);
              }
            }}
            className="px-4 py-2 bg-[#EC157D] text-white rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-[#EC157D] focus:ring-offset-2"
            aria-label="Previous testimonial"
            tabIndex={0}
          >
            Prev
          </button>
          <button
            onClick={() => {
              swiperInstance?.slideNext();
              setActiveIndex(swiperInstance?.activeIndex || 0);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                swiperInstance?.slideNext();
                setActiveIndex(swiperInstance?.activeIndex || 0);
              }
            }}
            className="px-4 py-2 bg-[#EC157D] text-white rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-[#EC157D] focus:ring-offset-2"
            aria-label="Next testimonial"
            tabIndex={0}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
