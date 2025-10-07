import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Cards from "../Components/Cards";
import CategoryBtn from "../Components/CategoryBtn";
import { cardData } from "../Data/Data";

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
    <section
      className="w-full bg-[#FCFCFC] dark:bg-[#100108] px-4 md:px-8 lg:px-14 py-10 lg:py-16 flex flex-col items-center gap-6 mt-10"
      aria-labelledby="projects-heading"
    >
      <header className="w-full flex flex-col items-center justify-between py-6">
        <h2
          id="projects-heading"
          className="text-2xl font-bold text-[#100108] dark:text-[#FCFCFC]"
        >
          Projects
        </h2>
        {!showSection && (
          <CategoryBtn
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        )}
      </header>

      {showSection ? (
        <>
          {/* Mobile view */}
          <div
            className="md:hidden flex flex-col gap-10 w-full"
            role="list"
            aria-label="Project showcase for mobile view"
          >
            <Cards data={phoneCards} onCardClick={handleCardClick} />
          </div>

          {/* Desktop view */}
          <div
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-16 w-full"
            role="list"
            aria-label="Filtered projects list"
            tabindex="0"
          >
            <Cards data={lgCards} onCardClick={handleCardClick} />
          </div>
        </>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-y-16 w-full pt-10 pb-10"
          role="list"
          aria-label="Filtered projects list"
          whileTap={{ scale: 0.98 }}
        >
          <Cards data={filteredData} onCardClick={handleCardClick} />
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
