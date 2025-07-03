import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Buttons1 from "./Buttons";


function Dashboard({ onHamburgerClick }) {
  return (
    <section
      className="dashboard w-full shadow-sm dark:shadow-gray-800 flex flex-col lg:pt-0 md:pt-12 px-4 md:px-8 lg:px-14 lg:py-0 items-start shrink-0 bg-[#FCFCFC] dark:bg-[#100108] fixed top-0 left-0 z-40"
    >
      <div className="md:hidden flex py-5 justify-between items-center self-stretch">
        <div className="flex justify-center items-center gap-2">
          <Link to="/" aria-label="Homepage">
            <img
              src={logo}
              alt="Chinonye Chime logo"
              className="hidden dark:block w-[2.8125rem] h-8 shrink-0"
            />
            <img
              src={logo1}
              alt="Chinonye Chime logo"
              className="dark:hidden block w-[2.8125rem] h-8 shrink-0"
            />
          </Link>
          <span className="flex justify-center items-center shrink-0 font-inter text-xl font-[500] text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </div>

        <button
          className="flex justify-center items-center w-10 h-10 shrink-0 transition-all duration-300 ease-in-out border-0 bg-[#FCFCFC] dark:bg-[#100108] focus:outline-none"
          type="button"
          onClick={onHamburgerClick}
          aria-label="Open menu"
        >
          <GiHamburgerMenu
            className="w-5 h-5 md:w-[2.25rem] md:h-[2.25rem] dark:bg-[#100108]  bg-[#FCFCFC] flex-col justify-center gap-1 shrink-0 text-black dark:text-white"
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="hidden w-full  md:flex  justify-between items-center lg:self-stretch">
        <Link to="/" className="flex items-center gap-[0.5rem]" aria-label="Homepage">
          <img
            src={logo}
            alt="Chinonye Chime logo"
            className="dark:block hidden w-[2.8125rem] h-8 shrink-0"
          />
          <img
            src={logo1}
            alt="Chinonye Chime logo"
            className="dark:hidden block w-[2.8125rem] h-8 shrink-0"
          />
          <span className="flex justify-center items-center shrink-0 font-inter text-base font-[500] text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </Link>
        <div className="flex lg:py-5 items-center self-stretch md:gap-2 gap-8">
          <div className="flex flex-col justify-center items-center gap-[0.5rem] lg:py-3 lg:px-4">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `font-inter lg:text-base md:text-sm font-[400] text-[#100108] dark:text-[#FCFCFC] flex flex-col items-center ${
                  isActive ? "font-bold" : ""
                }`
              }
              
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {({ isActive }) => (
                <>
                  Project
                  <hr
                    className={`mt-1 h-[0.125rem] w-16 rounded bg-[#100108] dark:bg-[#FCFCFC] border-0 transition-all duration-300 ${
                      isActive ? "opacity-100" && "h-[3px]" : "opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </div>
          {/* About Link */}
          <div className="flex flex-col justify-center items-center gap-2 lg:py-3 lg:px-[1rem]">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-inter lg:text-base md:text-sm font-[400] text-[#100108] dark:text-[#FCFCFC] flex flex-col items-center ${
                  isActive ? "font-bold" : ""
                }`
              }
              
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {({ isActive }) => (
                <>
                  About
                  <hr
                    className={`mt-1 h-[0.125rem] w-14 rounded bg-[#100108] dark:bg-[#FCFCFC] border-0 transition-all duration-300 ${
                      isActive ? "opacity-100" && "h-[3px]" : "opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center self-stretch items-center gap-[1rem] lg:py-3">
          <ThemeToggle />
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex justify-center items-center gap-3 py-5 px-4"
            aria-label="Open Chinonye Chime LinkedIn profile in a new tab" 
          >
            <span className="text-[#100108] dark:text-[#FCFCFC] font-inter lg:text-base md:text-sm font-[400] leading-6">
              LinkedIn
            </span>
            <MdArrowOutward
              className="h-5 w-5 text-[#100108] dark:text-[#FCFCFC]"
              aria-hidden="true" 
            />
          </a>
          <Buttons1
            className="md:self-start self-stretch"
          >
            Get-in-touch
          </Buttons1>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;