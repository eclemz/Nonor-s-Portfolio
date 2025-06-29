import React from "react";

function Cards({ data, onCardClick, className = "" }) {
  return (
    <>
      {data.map((card, index) => (
        <article
          key={index}
          className={`flex flex-col md:flex-1 overflow-hidden bg-white dark:bg-[#100108] md:py-[0] md:px-[0] items-start shrink-0 py-[2rem] px-[0.6rem] rounded-[1rem] border border-[#9D979A] ${className}`}
          role="listitem"
          onClick={() => onCardClick(card)}
        >
          <img className="flex self-start w-full h-[14.053rem]" src={card.image} alt="Category"/>

          <div className="flex p-[0.5rem] items-center gap-[0.25rem] self-stretch">
            <div className="flex flex-col p-[0.5rem] justify-center items-start gap-[0.5rem] flex-1">
              <div className="flex justify-between items-start self-stretch">
                <span className="flex flex-col items-start min-[768px]:text-[1.5rem]  text-[1rem] font-inter md:font-[600] font-[700] text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem]">
                  {card.title}
                  <hr className="h-[0.125rem] bg-[#100108] dark:bg-[#FCFCFC] w-full" />
                </span>

                <span className="flex flex-col items-start gap-[0.5rem] text-[0.875rem] font-inter font-[400] text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem]">
                  {card.date}
                </span>
              </div>
              <span
                className="hidden preserve-whitespace md:block text-[#100108] dark:text-[#FCFCFC] font-[400] font-inter"
                style={{ whiteSpace: "pre-line" }}
              >
                {card.about}
              </span>
              <div className="md:hidden flex items-center gap-[1.5rem]">
                <span className="flex justify-center items-center py-[0.232rem] px-[0.563rem] md:font-[1rem] text-[0.75rem] font-inter font-[500] text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem] rounded-[0.25rem] border border-[#100108] dark:border-[#FCFCFC]">
                  {card.desc}
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
      </>
  );
}

export default Cards;
