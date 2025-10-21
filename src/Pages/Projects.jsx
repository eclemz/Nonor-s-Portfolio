import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Cards from "../Components/Cards";
import CategoryBtn from "../Components/CategoryBtn";
import { cardData } from "../Data/Data";
import SEO from "../Components/SEO";

function Projects({ showSection = false }) {
  const navigate = useNavigate();
  const categories = useMemo(
    () => ["All", ...new Set(cardData.map((card) => card.desc))],
    []
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const filteredData = useMemo(() => {
    if (showSection) {
      return sortBy
        ? cardData.filter((card) => card.desc === sortBy)
        : cardData;
    }
    return activeCategory === "All"
      ? cardData
      : cardData.filter((card) => card.desc === activeCategory);
  }, [activeCategory, sortBy, showSection]);

  const handleCardClick = (card) => {
    const projectName = encodeURIComponent(card.title.toLowerCase());
    navigate(`/project/${projectName}`);
  };

  const phoneCards = filteredData.slice(0, 3);
  const lgCards = filteredData.slice(0, 3);

  return (
    <>
      <SEO
        title="My Portfolio | Chinonyelum Chime"
        description="Browse through my latest UX design projects and case studies"
        canonicalUrl="https://www.chinonyechime.com/projects"
      />

      <section
        className="w-full relative bg-[#FCFCFC] dark:bg-[#100108] px-4 md:px-8 lg:px-14 py-10 xl:py-16 flex flex-col items-center"
        aria-labelledby="projects-heading"
      >
        <header
          className={`w-full sticky top-0 left-0 z-20 flex flex-col bg-[#FCFCFC] dark:bg-[#100108] ${
            !showSection ? "pt-6" : "pt-0"
          }`}
        >
          <h2
            id="projects-heading"
            className="text-2xl text-center md:text-left font-bold text-[#100108] dark:text-[#FCFCFC]"
          >
            Projects
          </h2>
        </header>

        {/* Category bar that sticks below the header */}
        <div
          className={`sticky top-[70px] w-full z-10 bg-[#FCFCFC] dark:bg-[#100108] justify-center pt-3 ${
            !showSection ? "block" : "hidden"
          }`}
        >
          <CategoryBtn
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {showSection ? (
          <>
            {/* Mobile view */}
            <div
              className="md:hidden pt-8 flex flex-col gap-10 w-full"
              aria-labelledby="projects-heading"
            >
              <Cards data={phoneCards} onCardClick={handleCardClick} />
            </div>

            {/* Desktop view */}
            <div
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 lg:gap-y-16 w-full"
              aria-labelledby="projects-heading"
              tabIndex="0"
            >
              <Cards data={lgCards} onCardClick={handleCardClick} />
            </div>
          </>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-y-16 w-full pt-10 pb-10 "
            tabIndex={-1}
            onFocus={(e) => {
              if (e.target === e.currentTarget) {
                e.currentTarget.blur();
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Cards data={filteredData} onCardClick={handleCardClick} />
          </motion.div>
        )}
      </section>
    </>
  );
}

export default Projects;
