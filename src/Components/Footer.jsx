import { MdArrowOutward } from "react-icons/md";


function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-start bg-[#FCFCFC] dark:bg-[#100108] lg:py-[0] py-[1.5rem] px-[1rem] md:px-[2rem] lg:px-[0]"
      role="contentinfo"
    >
      <div className="w-full flex flex-col lg:flex-row items-start self-stretch gap-[2.375rem] lg:justify-between lg:items-center lg:gap-0 lg:py-10 lg:px-14 py-[2.5rem] ">
        <span className="hidden lg:block font-inter text-xl text-black dark:text-white font-[500]">
          Chinonye Chime
        </span>

        <nav className="flex flex-col items-start gap-[0.8125rem]" aria-label="Main links">
          <h3 className="font-inter lg:text-base text-[0.75rem] lg:font-[700] font-[600] self-stretch text-[#9D979A]">
            MAIN LINKS
          </h3>
          <ul className="flex flex-col items-start gap-5">
            <li>
              <a href="" aria-label="Go to Projects">
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] self-stretch text-[#100108] dark:text-[#FCFCFC]">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a href="" aria-label="Go to About">
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] self-stretch text-[#100108] dark:text-[#FCFCFC]">
                  About
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <nav className="flex flex-col items-start gap-3" aria-label="Quick links">
          <h3 className="font-inter lg:text-base text-xs lg:font-[700] font-[600] self-stretch text-[#9D979A]">
            QUICK LINKS
          </h3>
          <ul className="flex flex-col items-start lg:gap-2 gap-6 self-stretch">
            <li>
              <a
                href=""
                className="flex lg:justify-start justify-center items-center lg:self-stretch lg:gap-2 lg:py-4"
                aria-label="Go to Linkedin"
              >
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] text-[#100108] dark:text-[#FCFCFC]">
                  Linkedin
                </span>
                <MdArrowOutward
                  className="h-5 w-5 text-[#100108] dark:text-[#FCFCFC]"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex justify-center items-center lg:self-stretch lg:gap-2 lg:py-4"
                aria-label="Download Resume"
              >
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] text-[#100108] dark:text-[#FCFCFC]">
                  Download Resume
                </span>
                <MdArrowOutward
                  className="h-5 w-5 text-[#100108] dark:text-[#FCFCFC]"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex py-4 lg:py-14 self-stretch lg:justify-center items-center gap-4">
        <div className="flex justify-end items-center gap-2">
          <span className="font-inter text-base font-[300] text-[#100108] dark:text-[#FCFCFC]">
            &copy;
          </span>
          <span className="font-inter text-sm font-[400] text-[#100108] dark:text-[#FCFCFC]">
            2024
          </span>
          <span className="lg:hidden font-inter text-[0.875rem] font-[400] text-[#100108] dark:text-[#FCFCFC]">
            Chinonyelum Chime
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;