import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Dashboard({ onHamburgerClick }) {
  return (
    <section className="dashboard w-full flex flex-col pb-5 md:pt-12 pt-8 px-4 md:px-8 lg:px-14 lg:py-4 items-start shrink-0 bg-[#FCFCFC] dark:bg-[#100108] fixed top-0 left-0 z-40">

      <div className="min-[1024px]:hidden flex py-5 justify-between items-center self-stretch">
        <div className="flex justify-center items-center md:gap-[0.5rem]">
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
          <span className="hidden md:flex justify-center items-center shrink-0 font-inter text-xl font-[500] text-[#100108] dark:text-[#FCFCFC]">
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


      <div className="hidden md:hidden w-full  lg:flex lg:py-[1.25rem] justify-between items-center lg:self-stretch">
        <div className="flex items-center min-[1024px]:gap-[0.5rem]">
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
          <span className="flex justify-center items-center shrink-0 font-inter lg:text-5 font-[500] text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </div>
        <div className="flex lg:py-[1.25rem] items-center self-stretch gap-8">
          <div className="flex flex-col justify-center items-center gap-[0.5rem] lg:py-3 lg:px-4">
            
            <NavLink
      to="/projects"
      className="font-inter lg:text-[1rem] font-[400] text-[#100108] dark:text-[#FCFCFC] flex flex-col items-center"
    >
      {({ isActive }) => (
        <>
          Project
          <hr
            className={`mt-1 h-[0.125rem] w-full rounded bg-[#100108] dark:bg-[#FCFCFC] border-0 transition-all duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
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
      className="font-inter lg:text-[1rem] font-[400] text-[#100108] dark:text-[#FCFCFC] flex flex-col items-center"
    >
      {({ isActive }) => (
        <>
          About
          <hr
            className={`mt-1 h-[0.125rem] w-full rounded bg-[#100108] dark:bg-[#FCFCFC] border-0 transition-all duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
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
            className="flex justify-center items-center gap-[0.75rem] py-5 px-4"
          >
            <span className="text-[#100108] dark:text-[#FCFCFC] font-inter text-[1rem] font-[400] leading-6">
              LinkedIn
            </span>
            <MdArrowOutward className="h-5 w-5 text-[#100108] dark:text-[#FCFCFC]" />
          </a>
          <button className="flex justify-center items-center border-none  py-3 px-4 rounded-lg bg-[#EC157D] cursor-pointer ">
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
