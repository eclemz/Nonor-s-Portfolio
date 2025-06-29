import TextSwitcher from "./TextSwitcher";

function Hero({ showButton = true }) {
  return (
    <section className="hero bg-[radial-gradient(61.86%_50%_at_50%_50%,_#D281A7_0%,_#FFF_34.5%)] dark:bg-[radial-gradient(61.86%_50%_at_50%_50%,_#76073B_0%,_#100108_34.5%)] flex flex-col w-full justify-end items-start px-[1rem] pt-[22.5rem] lg:pb-10 pb-[5.5rem] md:px-[2rem] lg:px-14  lg:pt-[15rem] md:gap-[0.625rem] gap-[1.25rem]">
      <span className="text-[#100108] dark:text-[#FCFCFC] font-inter md:text-[1.25rem] lg:text-[1.75rem] text-[1.125rem] font-[400] leading-normal">
        Hello, I am Norno.
      </span>
      <div className="flex flex-col items-start lg:gap-[0] md:gap-[0] gap[1.5rem] self-stretch md:pb-[1.25rem]">
        <span className="text-[2rem] md:text-[3rem] lg:text-[3rem] font-inter font-[700] text-[#100108] dark:text-[#FCFCFC]">An experienced</span>
        <TextSwitcher />
        <span className="text-[2rem] md:text-[3rem] font-inter font-[700] text-[#100108] dark:text-[#FCFCFC]">that creates Digital Solutions</span>
      </div>
      {showButton && (
      <button className="flex py-3 px-4 md-self-start text-[#FCFCFC]  md:self-start self-stretch items-center justify-center gap-1 border-0 bg-[#EC157D]  rounded-lg">
        <span className="font-inter font-['Helvetica Neue'] font-[500] text-xs md:text-sm lg:text-base leading-[1.5rem]"></span>
          Get-in-touch
        </button>
        )}
    </section>
  );
}

export default Hero;

