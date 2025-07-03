
import { useState, useMemo } from "react";
import Cards from "../Components/Cards";
import {cardData} from "../Data/Data.js";
import SortButton from "../Components/SortButton";
import { useNavigate } from "react-router-dom";

const sortOptions = [
  ...Array.from(new Set(cardData.map(card => card.desc))).map(desc => ({
    value: desc,
    label: desc,
  }))
];
const phoneCards = filteredData.slice(0, 3);
const tabletFirst = filteredData.slice(0, 1);
const tabletSecond = filteredData.slice(1, 3);

function HomeProject() {
  const [sortBy, setSortBy] = useState("");
  const filteredData = useMemo(
    () => sortBy
      ? cardData.filter(card => card.desc === sortBy)
      : cardData,
    [sortBy]
  );

  const navigate = useNavigate();

 const handleCardClick = (card) => {
    const projectName = card.title.toLowerCase(); 
    navigate(`/project/${encodeURIComponent(projectName)}`);
  };

  return (
    <main className=" flex flex-col w-full px-[1rem] py-[3.5rem] justify-end items-center gap-[2.5rem] bg-[#100108]">
      <section className="w-full projectTitle flex justify-between items-center self-stretch min-[768px]:">
        <span className="font-inter text-[1.5rem] font-[700] text-[#FFFFFF]">
          Projects
        </span>
        <SortButton
          options={sortOptions}
          value={sortBy}
          onChange={setSortBy}
        />
      </section>
      <div
      className="min-[768px]:hidden flex flex-cols  w-full gap-[2.5rem] items-start justtify-center"
      role="list"
      aria-label="Available categories on our shelf"
    >
      <Cards data={phoneCards} onCardClick={handleCardClick} />
      </div>
      <div
      className="hidden min-[768px]:flex- w-full gap-[2.5rem] items-center py-[2.5rem] px-[0] self-stretch "
      role="list"
      aria-label="Available categories on our shelf"
    >
      <Cards data={tabletFirst} onCardClick={handleCardClick} />
      <div className="flex flex-col justify-center items-start gap-[1.5rem] flex-1">
        <Cards data={tabletSecond} onCardClick={handleCardClick} />
      </div>
      </div>
    </main>
  );
}

export default HomeProject