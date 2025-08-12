import React, { useState, useMemo } from "react";
import Cards from "../Components/Cards";
import { cardData } from "../Data/Data";
import SortButton from "../Components/SortButton";
import { useNavigate } from "react-router-dom";
import CategoryBtn from "../Components/CategoryBtn";
import { motion } from "framer-motion";

const sortOptions = [
  ...Array.from(new Set(cardData.map((card) => card.desc))).map((desc) => ({
    value: desc,
    label: desc,
  })),
];

function Projects({ showSection = false }) {
  const categories = Array.from(new Set(cardData.map((card) => card.desc)));
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const filteredData = useMemo(() => {
    if (showSection) {
      return !sortBy
        ? cardData
        : cardData.filter((card) => card.desc === sortBy);
    } else {
      return activeCategory === "All"
        ? cardData
        : cardData.filter((card) => card.desc === activeCategory);
    }
  }, [activeCategory, sortBy, showSection]);

  const phoneCards = filteredData.slice(0, 3);
  const tabletFirst = filteredData.slice(0, 1);
  const tabletSecond = filteredData.slice(1, 3);
  const lgFirst = filteredData.slice(0, 3);
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    const projectName = card.title.toLowerCase();
    navigate(`/project/${encodeURIComponent(projectName)}`);
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-8 py-14 md:py-0 lg:py-0 lg:px-0 pb-14 lg:pb-24 justify-center items-center gap-5 bg-[#FCFCFC] dark:bg-[#100108] mt-10">
      {showSection && (
        <>
          <section className="projectTitle md:hidden flex md:pt-0 justify-between items-center self-stretch lg:py-5 lg:px-14">
            <span className="font-inter text-2xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
              Projects
            </span>
            <SortButton
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
            />
          </section>
          <section className="hidden projectTitle md:flex items-center flex-col md:pt-0 w-full lg:py-5 lg:px-14">
            <span className="font-inter text-2xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
              Projects
            </span>
          </section>
        </>
      )}

      {!showSection && (
        <>
          <div className="fixed lg:px-14 top-[4.6875rem] md:top-[5.625rem] pt-6 md:pt-8 shadow-sm md:px-8 px-4 pb-4 z-30 bg-white dark:bg-[#100108] w-full">
            <span className="font-inter text-2xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
              Projects
            </span>
            <CategoryBtn
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </>
      )}
      {!showSection && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            w-full gap-10 items-center justify-center 
            md:justify-end md:self-stretch lg:px-14 md:pt-[275px] pt-48 pb-10"
          whileTap={{ scale: 0.96 }}
        >
          <Cards data={filteredData} onCardClick={handleCardClick} />
        </motion.div>
      )}

      {showSection && (
        <>
          <div
            className="md:hidden w-full flex flex-col gap-10 items-start justify-center"
            role="card list"
            aria-label="Projects on our shelf"
          >
            <Cards data={phoneCards} onCardClick={handleCardClick} />
          </div>

          <div
            className="hidden cursor-pointer w-full md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[4.5rem] 
             lg:py-5 lg:px-14 md:py-0 md:px-0 gap-6 items-center"
            role="list"
            aria-label="Projects on our shelf"
          >
            <Cards data={lgFirst} onCardClick={handleCardClick} />
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
