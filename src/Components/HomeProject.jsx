import React, { useState, useMemo } from "react";
import Cards from "../Components/Cards";
import { cardData } from "../Data/Data.js";
import SortButton from "../Components/SortButton";
import { useNavigate } from "react-router-dom";

function HomeProject() {
  const [sortBy, setSortBy] = useState("");

  const filteredData = useMemo(
    () => (sortBy ? cardData.filter((card) => card.desc === sortBy) : cardData),
    [sortBy]
  );

  // ✅ Move slicing *after* filteredData is computed
  const phoneCards = filteredData.slice(0, 3);
  const tabletFirst = filteredData.slice(0, 1);
  const tabletSecond = filteredData.slice(1, 3);

  const sortOptions = useMemo(
    () =>
      Array.from(new Set(cardData.map((card) => card.desc))).map((desc) => ({
        value: desc,
        label: desc,
      })),
    []
  );

  const navigate = useNavigate();

  const handleCardClick = (card) => {
    const projectName = card.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/project/${encodeURIComponent(projectName)}`);
  };

  return (
    <main
      className="flex flex-col w-full px-4 py-14 items-center gap-10 bg-[#100108]"
      aria-labelledby="projects-heading"
    >
      {/* Header Section */}
      <section className="w-full flex justify-between items-center">
        <h2
          id="projects-heading"
          className="font-inter text-2xl font-bold text-white"
        >
          Projects
        </h2>
        <SortButton options={sortOptions} value={sortBy} onChange={setSortBy} />
      </section>

      {/* Mobile Layout */}
      <div
        className="flex min-[768px]:hidden flex-col w-full gap-10"
        role="list"
        aria-label="Project cards for mobile view"
      >
        <Cards data={phoneCards} onCardClick={handleCardClick} />
      </div>

      {/* Tablet & Desktop Layout */}
      <div
        className="hidden min-[768px]:flex w-full gap-10 items-start py-10"
        role="list"
        aria-label="Project cards for tablet and desktop view"
      >
        <Cards data={tabletFirst} onCardClick={handleCardClick} />
        <div className="flex flex-col gap-6 flex-1">
          <Cards data={tabletSecond} onCardClick={handleCardClick} />
        </div>
      </div>
    </main>
  );
}

export default HomeProject;
