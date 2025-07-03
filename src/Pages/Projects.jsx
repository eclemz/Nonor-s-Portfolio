import { useState, useMemo } from "react";
import Cards from "../Components/Cards";
import { cardData } from "../Data/Data";
import SortButton from "../Components/SortButton";
import { useNavigate } from "react-router-dom";
import CategoryBtn from "../Components/CategoryBtn";
import { div } from "framer-motion/client";

const sortOptions = [
  ...Array.from(new Set(cardData.map((card) => card.desc))).map((desc) => ({
    value: desc,
    label: desc,
  })),
];

function Projects({ showSection = false }) {
   const categories = Array.from(new Set(cardData.map(card => card.desc)));
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const filteredData = useMemo(
    () => {
      if (showSection) {
        return !sortBy ? cardData : cardData.filter(card => card.desc === sortBy);
      } else {
        return activeCategory === "All"
          ? cardData
          : cardData.filter(card => card.desc === activeCategory);
      }
    },
    [activeCategory, sortBy, showSection]
  );

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
    <main className="flex flex-col w-full px-4 md:px-8 py-14 md:py-0 lg:py-0 lg:px-0 pb-14 lg:pb-24 justify-center items-center gap-5 bg-[#FCFCFC] dark:bg-[#100108]">
    {showSection && (
      <section className="projectTitle flex md:pt-0 justify-between items-center self-stretch lg:py-5 lg:px-14">
        <span className="font-inter text-2xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
          Projects
        </span>
        <SortButton options={sortOptions} value={sortBy} onChange={setSortBy} />
      </section>
       )}  
    
      {!showSection && (
        <>
        <section className="projectTitle flex lg:pt-52 md:pt-48 pt-32 justify-between items-center self-stretch lg:py-0 lg:px-14">
        <span className="font-inter text-2xl font-[700] text-[#100108] dark:text-[#FCFCFC]">
          Projects
        </span>
      </section>
        <div className="fixed lg:px-14 top-20 md:top-20 pt-4 shadow-sm md:px-8 px-4 z-30 bg-white dark:bg-[#100108] w-full">
          <CategoryBtn
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      </div>
      </>
      )}
      {!showSection && (
          <div
            className="grid grid-cols-1 md:grid-cols-2
            w-full gap-10 items-center justtify-center 
            md:justify-end md:self-stretch lg:px-14 lg:py-8"
            role="list"
            aria-label="Projects on our shelf"
          >
            <Cards data={filteredData} onCardClick={handleCardClick} />
          </div>
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
            className="hidden lg:hidden md:flex w-full items-center 
            py-10 gap-6 px-[0] self-stretch "
            role="card list"
            aria-label="Projects on our shelf"
          >
            <Cards
              data={tabletFirst}
              onCardClick={handleCardClick}
              className="md:w-[22.4375rem] md:h-[24.3125rem] flex-1"
            />
            <div className="flex md:h-[24.3125rem] w-full flex-col 
            justify-center md:w-[30%] items-start 
            gap-6"
            role="card list"
            aria-label="Projects on our shelf">
              {tabletSecond.map((card, idx) => (
                <Cards
                  key={idx}
                  data={[card]}
                  onCardClick={handleCardClick}
                  className="md:h-[11.875rem] md:w-full"
                />
              ))}
            </div>
          </div>

          <div
            className="hidden cursor-pointer w-full lg:grid grid-cols-3 gap-y-[4.5rem] 
             py-5 px-14 gap-6 items-center"
            role="list"
            aria-label="Projects on our shelf"
          >
            <Cards data={lgFirst} onCardClick={handleCardClick} />
          </div>
        </>
      )}
    </main>
  );
}

export default Projects;
