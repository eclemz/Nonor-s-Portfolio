import { motion } from "framer-motion";





function Cards({ data, onCardClick, className = "" }) {


  function handleKeyDown(e, card) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(card);
    }
  }

  return (
    <>
      {data.map((card, index) => (
        <article
          key={index}
          className={`card flex flex-col md:flex-1 overflow-hidden bg-white dark:bg-[#100108]
          items-start lg:flex-1 hover:dark:shadow-[0_2px_8px_rgba(252,252,252,0.10)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.10)] shrink-0  md:rounded-2xl active:scale-[0.98] hover:scale-[1.02] rounded-lg border-[0.231px] border-[#b4b2b2] dark:border-[#494949] transition-all duration-300 ease-in-out ${className}`}
          onClick={() => onCardClick(card)}
          tabIndex={0}
          aria-label={card.title}
          onKeyDown={(e) => handleKeyDown(e, card)}
          role="button"
          style={{ cursor: "pointer" }}
        >
          <picture>
            <source
              srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".avif")}`}
              type="image/avif"
            />
            <source
              srcSet={`/optimized/${card.image.replace(/\.\w+$/, ".webp")}`}
              type="image/webp"
            />
            <img
              className="flex self-start w-full h-auto"
              src={`/optimized/${card.image}`}
              alt={card.imageAlt || card.title}
              loading="lazy"
              width={card.imageWidth || undefined}
              height={card.imageHeight || undefined}
            />
          </picture>

          <div className="flex p-2 items-center gap-1 self-stretch">
            <div className="flex flex-col p-2 justify-center items-start gap-2 flex-1">
              <div className="flex justify-between items-start self-stretch">
                <motion.span
                initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-start md:text-6  text-base font-inter md:font-[600] font-[700] text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem]">
                  {card.title}
                  <hr className="h-[0.125rem] bg-[#100108] dark:bg-[#FCFCFC] w-full" />
                </motion.span>
              </div>
              <span
                className="preserve-whitespace text-[#100108] dark:text-[#FCFCFC] font-[400] font-inter"
                style={{ whiteSpace: "pre-line" }}
              >
                {card.about}
              </span>
              <div className="md:hidden flex items-center gap-[1.5rem]">
                <span className="flex justify-center items-center py-[0.232rem] px-[0.563rem] text-xs font-inter font-[500] text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem] rounded-md border border-[#100108] dark:border-[#FCFCFC]">
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