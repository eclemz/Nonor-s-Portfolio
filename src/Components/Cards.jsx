
function Cards({ data, onCardClick, className = "" }) {
  return (
    <>
      {data.map((card, index) => (
        <article
          key={index}
          className={`flex flex-col md:flex-1 overflow-hidden bg-white dark:bg-[#100108]
          items-start shrink-0  rounded-2xl border border-[#9D979A] ${className}`}
          role="listitem"
          onClick={() => onCardClick(card)}
        >
          <img className="flex self-start w-full h-auto" src={card.image} alt="Category"/>

          <div className="flex p-2 items-center gap-1 self-stretch">
            <div className="flex flex-col p-2 justify-center items-start gap-2 flex-1">
              <div className="flex justify-between items-start self-stretch">
                <span className="flex flex-col items-start md:text-6  text-base font-inter md:font-[600] font-[700] text-[#100108] dark:text-[#FCFCFC] leading-[1.5rem]">
                  {card.title}
                  <hr className="h-[0.125rem] bg-[#100108] dark:bg-[#FCFCFC] w-full" />
                </span>

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
