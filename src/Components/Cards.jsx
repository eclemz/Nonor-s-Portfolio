import { motion } from "framer-motion";
import React from "react";

function Cards({ data, onCardClick, className = "" }) {
  function handleKeyDown(e, card) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(card);
    }
  }

  const renderBoldText = (input) => {
    if (input == null) return null;

    if (Array.isArray(input)) {
      return input.map((item, idx) => (
        <div key={idx} className="whitespace-pre-line">
          {renderBoldText(item)}
        </div>
      ));
    }

    if (typeof input !== "string") return input;

    const parts = input.split("**");
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <>
      {data.map((card, index) => (
        <button
          key={index}
          className={`card w-full flex flex-col md:flex-1 overflow-hidden bg-white dark:bg-[#100108]
          items-start hover:dark:shadow-[0_2px_8px_rgba(252,252,252,0.10)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.10)] shrink-0 md:rounded-2xl 
          active:scale-[0.98] hover:scale-[1.02] rounded-lg border-[0.231px] border-[#b4b2b2] dark:border-[#494949] 
          transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] ${className}`}
          onClick={() => onCardClick(card)}
          tabIndex={0}
          aria-label={`Open details for ${card.title}`}
          onKeyDown={(e) => handleKeyDown(e, card)}
          style={{ cursor: "pointer" }}
        >
          <picture className="w-full" aria-label={`${card.title} thumbnail`}>
            <img
              className="self-stretch w-full object-cover"
              src={`/optimized/${card.image}`}
              alt={card.imageAlt || `Preview of ${card.title}`}
              fetchPriority="high"
              decoding="async"
              width={card.imageWidth || undefined}
              height={card.imageHeight || undefined}
            />
          </picture>

          <div className="flex p-2 items-center gap-1 self-stretch">
            <div className="flex flex-col p-2 justify-center items-start gap-2 flex-1">
              <header className="flex justify-between items-start self-stretch">
                <motion.h2
                  id={`card-title-${index}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-start text-base md:text-lg font-inter font-semibold text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem]"
                >
                  {card.title}
                  <hr
                    className="h-[0.125rem] bg-[#100108] dark:bg-[#FCFCFC] w-full"
                    aria-hidden="true"
                  />
                </motion.h2>
              </header>

              <p
                className="preserve-whitespace text-[#100108] dark:text-[#FCFCFC] font-[400] font-inter"
                style={{ whiteSpace: "pre-line" }}
              >
                {renderBoldText(card.about)}
              </p>

              <footer className="flex items-center gap-[1.5rem]">
                <span className="flex justify-center items-center py-[0.232rem] px-[0.563rem] text-xs font-inter font-[500] text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem] rounded-md border border-[#100108] dark:border-[#FCFCFC]">
                  {card.desc}
                </span>
              </footer>
            </div>
          </div>
        </button>
      ))}
    </>
  );
}

export default Cards;
