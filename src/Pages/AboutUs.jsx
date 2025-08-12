import img2 from "../Assets/MobileLogos.png";
import img4 from "../Assets/mobileLogo2.png";
import img5 from "../Assets/mobileLogo3.png";
import { cardData3 } from "../Data/Data.js";
import { motion, useSpring, useScroll } from "motion/react";
("use client");
import React, { useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

function AboutUs({ data = cardData3 }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <section className="flex w-full flex-col items-start gap-10 pt-36 pb-28 lt:px-0 md:px-8 px-4 bg-[#FCFCFC] dark:bg-[#100108]">
        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col md:py-14 gap-10 lt:px-14 lg:px-56"
        >
          <header className="flex items-start self-stretch gap-10 md:px-2 px-4">
            <h1 className=" text-3xl font-bold font-inter  ">About</h1>
          </header>
          <motion.div
            className="hidden md:block "
            id="scroll-indicator"
            style={{
              scaleX,
              position: "fixed",
              top: 90,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              backgroundColor: "#ff0088",
            }}
          />
          {data.map((card, index) => (
            <motion.article
              key={card.id || card.title || index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeInUp}
              className={`flex flex-col md:flex-row items-start self-stretch gap-10 md:gap-7 lg:gap-10 justify-between
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              aria-labelledby={`about-section-title-${index}`}
            >
              <picture className="flex self-center justify-center">
                <source
                  srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".avif")}`}
                  type="image/avif"
                />
                <source
                  srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".webp")}`}
                  type="image/webp"
                />
                <img
                  className="flex self-center lg:h-[25.5rem] lg:w-[24rem] md:h-[24rem] md:w-[20rem] h-[26rem] w-[24.8rem] flex-1 rounded-2xl border-[#FCFCFC] border-[0.1875rem]"
                  src={`/optimized/${card.image}`}
                  alt={card.title ? card.title : "About section image"}
                  loading="lazy"
                />
              </picture>
              <div className="flex flex-col flex-1 items-start self-stretch lg:py-[1.25rem]">
                <h2
                  className="font-inter text-xl font-[700] text-[#100108] dark:text-[#FCFCFC]"
                  id={`about-section-title-${index}`}
                >
                  {card.title}
                </h2>
                <p className="italic py-4">{card.quote}</p>
                <span
                  className="flex font-inter self-stretch text-base lg:text-lg font-[400] text-[#100108] dark:text-[#FCFCFC] preserve-whitespace"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {card.desc}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="flex flex-col items-start self-stretch gap-5 lg:py-5 lt:px-14 lg:px-56"
          aria-labelledby="experience-heading"
        >
          <header className="hidden lg:flex justify-center items-center self-stretch py-5 px-14">
            <h2
              className="font-inter text-3xl font-[700] text-[#100108] dark:text-[#FCFCFC]"
              id="experience-heading"
            >
              Experience
            </h2>
          </header>
          <h2 className="lg:hidden font-inter text-xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
            Experience
          </h2>
          <ul
            className="flex flex-col justify-center items-start self-stretch gap-6"
            aria-label="Experience list"
          >
            <motion.li
              key="exp-1"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-start self-stretch gap-3"
            >
              <div className="flex items-center self-stretch gap-4">
                <img
                  src="./TechWomenlogo1.svg"
                  alt="TechWomen logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-lg"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        TechWomen Nigeria
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
            </motion.li>

            <motion.li
              key="exp-2"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-start self-stretch gap-3"
            >
              <div className="flex items-center self-stretch gap-[1rem]">
                <img
                  src="./thrivelogo.svg"
                  alt="Thriveagric logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        Thriveagric
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li
              key="exp-3"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-start self-stretch gap-3"
            >
              <div className="flex items-center self-stretch gap-[1rem]">
                <img
                  src="./studio4852logo.svg"
                  alt="Studio4852 logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        Studio4852
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li
              key="exp-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-start self-stretch gap-3"
            >
              <div className="flex items-center self-stretch gap-[1rem]">
                <img
                  src="./studio3logo1.svg"
                  alt="Studio3 logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        Studio3lunchpad
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li
              key="exp-5"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col justify-center items-start self-stretch gap-3"
            >
              <div className="flex items-center self-stretch gap-[1rem]">
                <img
                  src="./SSDAlogo.svg"
                  alt="SSDA logo"
                  className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
                />
                <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-col items-start gap-[0.5rem]">
                      <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
                        Ux Designer
                      </span>
                      <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
                        SSDA
                      </span>
                    </div>
                    <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
                      Jul, 2024-Present
                    </span>
                  </div>
                </div>
              </div>
            </motion.li>
          </ul>
        </motion.section>
      </section>
    </motion.main>
  );
}

export default AboutUs;
