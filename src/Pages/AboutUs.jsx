// import { cardData3 } from "../Data/Data.js";
// import { motion, useSpring, useScroll } from "framer-motion";
// ("use client");
// import React, { useEffect } from "react";
// import { experience } from "../Data/Data";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };
// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };
// const pageTransition = {
//   initial: { opacity: 0, y: 50 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
// };

// function AboutUs({ data = cardData3 }) {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <motion.main
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={pageTransition}
//     >
//       <section className="flex w-full flex-col items-start gap-10 pt-36 pb-28 lt:px-0 md:px-8 lg:px-0 px-4 bg-[#FCFCFC] dark:bg-[#100108]">
//         {/* About Section */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           variants={staggerContainer}
//           className="flex flex-col md:py-14 gap-10 lt:px-14 lg:px-[14.5rem]"
//         >
//           <header className="flex items-start self-stretch gap-10">
//             <h1 className=" text-3xl font-bold font-inter ">About</h1>
//           </header>
//           <motion.div
//             className="hidden md:block "
//             id="scroll-indicator"
//             style={{
//               scaleX,
//               position: "fixed",
//               top: 90,
//               left: 0,
//               right: 0,
//               height: 10,
//               originX: 0,
//               backgroundColor: "#ff0088",
//             }}
//           />
//           {data.map((card, index) => (
//             <motion.article
//               key={card.id || card.title || index}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.2 }}
//               variants={fadeInUp}
//               className={`flex flex-col md:flex-row items-center self-stretch gap-10 md:gap-7 lg:gap-10 pb-20 justify-between
//             ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
//               aria-labelledby={`about-section-title-${index}`}
//             >
//               <picture className="flex items-center self-center w-full lg:h-[30.5rem] md:h-[25.5rem] h-[25.25rem] flex-1 ">
//                 <source
//                   srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".avif")}`}
//                   type="image/avif"
//                 />
//                 <source
//                   srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".webp")}`}
//                   type="image/webp"
//                 />
//                 <img
//                   className="flex self-center md:h-full w-full rounded-2xl border-[#FCFCFC] border-[0.1875rem]"
//                   src={`/optimized/${card.image}`}
//                   alt={card.title ? card.title : "About section image"}
//                   loading="lazy"
//                 />
//               </picture>
//               <div className="flex flex-col flex-1 items-start self-stretch md:py-4 lg:py-[1.25rem]">
//                 <h2
//                   className="font-inter text-xl font-[700] text-[#100108] dark:text-[#FCFCFC]"
//                   id={`about-section-title-${index}`}
//                 >
//                   {card.title}
//                 </h2>
//                 <p className="italic text-sm lg:text-base py-4">{card.quote}</p>
//                 <span
//                   className="flex font-inter self-stretch text-base md:text-sm lg:text-base font-[400] text-[#100108] dark:text-[#FCFCFC] preserve-whitespace"
//                   style={{ whiteSpace: "pre-line" }}
//                 >
//                   {card.desc}
//                 </span>
//               </div>
//             </motion.article>
//           ))}
//         </motion.section>

//         {/* Experience Section */}
//         <motion.section
//           className="flex flex-col items-start self-stretch gap-5 lg:py-5 lt:px-14 lg:px-56"
//           aria-labelledby="experience-heading"
//         >
//           <header className="hidden lg:flex justify-center items-center self-stretch py-5 px-14">
//             <h2
//               className="font-inter text-3xl font-[700] text-[#100108] dark:text-[#FCFCFC]"
//               id="experience-heading"
//             >
//               Experience
//             </h2>
//           </header>
//           <h2 className="lg:hidden font-inter text-xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
//             Experience
//           </h2>
//           <ul
//             className="flex flex-col justify-center items-start self-stretch gap-10"
//             aria-label="Experience list"
//           >
//             {experience.map((exp) => (
//               <motion.li
//                 key={exp.company}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//               >
//                 <div className="flex items-center self-stretch gap-4">
//                   <img
//                     src={`./${exp.icon}`}
//                     alt={`${exp.title} logo`}
//                     className="w-[3.75rem] h-[3.75rem] rounded-lg"
//                   />
//                   <div className="flex w-full flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
//                     <div className="flex w-full justify-between items-center self-stretch">
//                       <div className="flex flex-col items-start gap-[0.5rem]">
//                         <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
//                           {exp.title}
//                         </span>
//                         <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
//                           {exp.company}
//                         </span>
//                       </div>
//                       <div className="flex justify-items-end">
//                         <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
//                           {exp.duration}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.li>
//             ))}
//             <motion.li
//               key="exp-1"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.2 }}
//               className="flex flex-col justify-center items-start self-stretch gap-3"
//             >
//               <div className="flex items-center self-stretch gap-4">
//                 <img
//                   src="./TechWomenlogo1.svg"
//                   alt="TechWomen logo"
//                   className="w-[3.75rem] h-[3.75rem] rounded-lg"
//                 />
//                 <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
//                   <div className="flex justify-between items-center self-stretch">
//                     <div className="flex flex-col items-start gap-[0.5rem]">
//                       <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
//                         UX Researcher & Designer
//                       </span>
//                       <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
//                         TechWomen Nigeria
//                       </span>
//                     </div>
//                     <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
//                       June, 2025 - Present
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.li>
//             <motion.li
//               key="exp-4"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.2 }}
//               className="flex flex-col justify-center items-start self-stretch gap-3"
//             >
//               <div className="flex items-center self-stretch gap-[1rem]">
//                 <img
//                   src="./studio3logo1.svg"
//                   alt="Studio3 logo"
//                   className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
//                 />
//                 <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
//                   <div className="flex justify-between items-center self-stretch">
//                     <div className="flex flex-col items-start gap-[0.5rem]">
//                       <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
//                         UX Researcher & Design Tutor
//                       </span>
//                       <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
//                         Studio3lunchpad
//                       </span>
//                     </div>
//                     <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
//                       May, 2025 - Present
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.li>
//             <motion.li
//               key="exp-3"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.2 }}
//               className="flex flex-col justify-center items-start self-stretch gap-3"
//             >
//               <div className="flex items-center self-stretch gap-[1rem]">
//                 <img
//                   src="./studio4852logo.svg"
//                   alt="Studio4852 logo"
//                   className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
//                 />
//                 <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
//                   <div className="flex justify-between items-center self-stretch">
//                     <div className="flex flex-col items-start gap-[0.5rem]">
//                       <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
//                         UX Researcher & Designer
//                       </span>
//                       <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
//                         Studio4852
//                       </span>
//                     </div>
//                     <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
//                       October, 2024 - August, 2025
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.li>

//             <motion.li
//               key="exp-5"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.2 }}
//               className="flex flex-col justify-center items-start self-stretch gap-3"
//             >
//               <div className="flex items-center self-stretch gap-[1rem]">
//                 <img
//                   src="./EMElogo.svg"
//                   alt="SSDA logo"
//                   className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
//                 />
//                 <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
//                   <div className="flex justify-between items-center self-stretch">
//                     <div className="flex flex-col items-start gap-[0.5rem]">
//                       <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
//                         Ux Designer
//                       </span>
//                       <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
//                         SSDA
//                       </span>
//                     </div>
//                     <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
//                       February - October, 2024
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.li>
//             <motion.li
//               key="exp-2"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.2 }}
//               className="flex flex-col justify-center items-start self-stretch gap-3"
//             >
//               <div className="flex items-center self-stretch gap-[1rem]">
//                 <img
//                   src="./thrivelogo.svg"
//                   alt="Thriveagric logo"
//                   className="w-[3.75rem] h-[3.75rem] rounded-[0.5rem]"
//                 />
//                 <div className="flex flex-col justify-center items-start self-stretch gap-[1rem] flex-1">
//                   <div className="flex justify-between items-center self-stretch">
//                     <div className="flex flex-col items-start gap-[0.5rem]">
//                       <span className="font-inter text-[1.rem] font-[700] text-[#100108] dark:text-[#FCFCFC]">
//                         Ux Designer
//                       </span>
//                       <span className="font-inter text-[1.rem] font-[400] text-[#9D979A] self-stretch">
//                         Thriveagric
//                       </span>
//                     </div>
//                     <span className="font-inter text-[1rem] font-[400] text-[#9D979A]">
//                       May - February, 2023
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.li>
//           </ul>
//         </motion.section>
//       </section>
//     </motion.main>
//   );
// }

// export default AboutUs;

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
      className="bg-[#FCFCFC] dark:bg-[#100108] w-full"
    >
      {/* Progress Bar */}
      <motion.div
        className="hidden md:block fixed top-[90px] left-0 right-0 h-[8px] bg-[#EC157D] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* About Section */}
      <section
        className="flex flex-col w-full items-start gap-10 pt-36 pb-28 px-4 md:px-8 lg:px-40"
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
                  className="rounded-2xl border border-[#FCFCFC] dark:border-[#1a1a1a] w-full h-[550px] object-cover"
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
        className="flex flex-col items-start gap-8 lg:py-5 px-4 md:px-8 lg:px-56"
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
