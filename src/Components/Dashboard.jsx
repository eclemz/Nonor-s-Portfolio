import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Dashboard({ onHamburgerClick }) {
  return (
    <section className="dashboard w-full shadow-md dark:shadow-gray-800 flex flex-col lg:pt-0 md:pt-12 px-4 md:px-8 lg:px-14 lg:py-0 items-start shrink-0 bg-[#FCFCFC] dark:bg-[#100108] fixed top-0 left-0 z-40">

      <div className="md:hidden flex py-5 justify-between items-center self-stretch">
        <div className="flex justify-center items-center gap-2">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="hidden dark:block w-[2.8125rem] h-8 shrink-0"
            />
            <img
              src={logo1}
              alt=""
              className="dark:hidden block w-[2.8125rem] h-8 shrink-0"
            />
          </Link>
          <span className="flex justify-center items-center shrink-0 font-inter text-xl font-[500] text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </div>
        
        <button
          className="flex justify-center items-center w-10 h-10 shrink-0 transition-all duration-300 ease-in-out border-0 bg-[#FCFCFC] dark:bg-[#100108] focus:outline-none
      "
          type="button"
          onClick={onHamburgerClick}
        >
          <GiHamburgerMenu
            className="w-5 h-5 md:w-[2.25rem] md:h-[2.25rem] dark:bg-[#100108]  bg-[#FCFCFC] flex-col justify-center gap-1 shrink-0 text-black dark:text-white"
            aria-label="Open menu"
          />
        </button>
      </div>


      <div className="hidden w-full  md:flex  justify-between items-center lg:self-stretch">
        <div className="flex items-center gap-[0.5rem]">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="dark:block hidden w-[2.8125rem] h-8 shrink-0"
            />
            <img
              src={logo1}
              alt=""
              className="dark:hidden block w-[2.8125rem] h-8 shrink-0"
            />
          </Link>
          <span className="flex justify-center items-center shrink-0 font-inter text-base font-[500] text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </div>
        <div className="flex lg:py-5 items-center self-stretch md:gap-2 gap-8">
          <div className="flex flex-col justify-center items-center gap-[0.5rem] lg:py-3 lg:px-4">
            
            <NavLink
      to="/projects"
       className={({ isActive }) =>
    `font-inter lg:text-base md:text-sm font-[400] text-[#100108] dark:text-[#FCFCFC] flex flex-col items-center ${
      isActive ? "font-bold" : ""
    }`
  }
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
            className="flex justify-center items-center gap-3 py-5 px-4"
          >
            <span className="text-[#100108] dark:text-[#FCFCFC] font-inter lg:text-base md:text-sm font-[400] leading-6">
              LinkedIn
            </span>
            <MdArrowOutward className="h-5 w-5 text-[#100108] dark:text-[#FCFCFC]" />
          </a>
          <button className="flex justify-center items-center border-none py-3 px-4 rounded-lg bg-[#EC157D] cursor-pointer ">
            <span className="text-[#FCFCFC] flex text-center font-['Helvetica Neue'] text-base font-[500]">
                Get-in-touch
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
