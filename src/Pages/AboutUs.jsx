import React from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import { cardData3, experience } from "../Data/Data.js";

// Animation variants centralized for maintainability
const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  },
  pageTransition: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
  },
};

// Reusable ExperienceCard component
const ExperienceCard = ({ exp }) => (
  <motion.li
    role="listitem"
    variants={variants.fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="flex flex-col justify-center items-start self-stretch gap-3"
  >
    <div className="flex items-center self-stretch gap-4">
      <img
        src={`./${exp.icon}`}
        alt={`${exp.title} at ${exp.company}`}
        width="60"
        height="60"
        loading="lazy"
        decoding="async"
        className="w-[3.75rem] h-[3.75rem] rounded-lg"
      />
      <div className="flex flex-col justify-center items-start self-stretch gap-2 flex-1">
        <div className="flex justify-between items-center self-stretch">
          <div className="flex flex-col items-start gap-1">
            <span className="font-inter text-base font-[700] text-[#100108] dark:text-[#FCFCFC]">
              {exp.title}
            </span>
            <span className="font-inter text-sm font-[400] text-[#9D979A]">
              {exp.company}
            </span>
          </div>
          <span className="font-inter text-sm font-[400] text-[#9D979A]">
            {exp.duration}
          </span>
        </div>
      </div>
    </div>
  </motion.li>
);

function AboutUs({ data = cardData3 }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.main
      id="main-content"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants.pageTransition}
      className="bg-[#FCFCFC] dark:bg-[#100108] w-full px-4 md:px-8 lg:px-16 lt:px-16 xl:px-56"
    >
      {/* Progress Bar */}
      <motion.div
        className="hidden md:block fixed top-[90px] left-0 right-0 h-[8px] bg-[#EC157D] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* About Section */}
      <section
        className="flex flex-col w-full items-start gap-10 pt-16 md:pt-36 pb-28"
        aria-labelledby="about-heading"
      >
        <header>
          <h1
            id="about-heading"
            className="text-3xl font-bold font-inter text-[#100108] dark:text-[#FCFCFC]"
          >
            About Chinonye Chime — UX Researcher & Designer
          </h1>
        </header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants.staggerContainer}
          className="flex flex-col gap-14"
        >
          {data.map((card, index) => (
            <motion.article
              key={card.id || index}
              variants={variants.fadeInUp}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 pb-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              aria-labelledby={`about-title-${index}`}
            >
              <picture className="flex-1 w-full">
                <source
                  srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".avif")}`}
                  type="image/avif"
                />
                <source
                  srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".webp")}`}
                  type="image/webp"
                />
                <img
                  src={`/optimized/${card.image}`}
                  alt={card.title || "Project showcase"}
                  width="100"
                  height="100"
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl border w-full md:h-[600px] lg:h-[500px] xl:h-[480px] border-[#FCFCFC] dark:border-[#1a1a1a]  object-cover "
                />
              </picture>

              <div className="flex flex-col flex-1 items-start gap-4">
                <h2
                  id={`about-title-${index}`}
                  className="text-xl font-bold font-inter text-[#100108] dark:text-[#FCFCFC]"
                >
                  {card.title}
                </h2>
                {card.quote && (
                  <p className="italic text-sm lg:text-base text-[#9D979A] dark:text-[#C2C2C2]">
                    {card.quote}
                  </p>
                )}
                <p className="font-inter text-base text-[#100108] dark:text-[#FCFCFC] whitespace-pre-line leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        className="flex flex-col items-start gap-8 lg:py-5 "
        aria-labelledby="experience-heading"
      >
        <header className="py-5">
          <h2
            id="experience-heading"
            className="text-3xl font-bold font-inter text-[#100108] dark:text-[#FCFCFC]"
          >
            Experience
          </h2>
        </header>

        <ul
          role="list"
          className="flex flex-col justify-center items-start self-stretch gap-10"
        >
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </ul>
      </section>
    </motion.main>
  );
}

export default AboutUs;
