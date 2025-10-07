import React from "react";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Buttons } from "./Buttons";
import { motion } from "framer-motion";
import { navLinks } from "../Data/Data";

function Navbar({ onHamburgerClick }) {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:chimechinonyelum@gmail.com?subject=Let's%20Work%20Together";
  };

  return (
    <header
      className="dashboard w-full shadow-sm dark:shadow-gray-800 flex flex-col lg:pt-0 md:pt-12 md:pb-5 px-4 md:px-8 lg:px-14 lg:py-0 items-start shrink-0 bg-[#FCFCFC] dark:bg-[#100108] fixed top-0 left-0 z-40"
      role="banner"
    >
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#EC157D] text-white px-3 py-2 rounded-md"
      >
        Skip to main content
      </a>

      {/* MOBILE HEADER */}
      <div className="lg:hidden flex py-5 md:py-0 md:gap-2 justify-between items-center self-stretch">
        <div className="flex justify-center items-center gap-2">
          <Link
            to="/"
            aria-label="Navigate to homepage"
            className="hidden md:flex gap-2 flex-row items-center"
          >
            <img
              src={logo}
              alt="Chinonye Chime dark mode logo"
              className="dark:block hidden lg:block w-[2.8125rem] h-8 shrink-0"
            />
            <img
              src={logo1}
              alt="Chinonye Chime light mode logo"
              className="dark:hidden block w-[2.8125rem] h-8 shrink-0"
            />
            <span className="font-inter text-xl font-medium text-[#100108] dark:text-[#FCFCFC]">
              Chinonye Chime
            </span>
          </Link>
          <Link
            to="/"
            aria-label="Navigate to homepage"
            className="md:hidden block text-xl font-inter font-medium text-[#100108] dark:text-[#FCFCFC]"
          >
            Chinonye Chime
          </Link>
        </div>

        <button
          type="button"
          onClick={onHamburgerClick}
          aria-label="Open navigation menu"
          className="flex justify-center items-center w-10 h-10 transition-all duration-300 ease-in-out border-0 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#EC157D] rounded-md"
        >
          <GiHamburgerMenu
            className="w-6 h-6 md:w-[2.25rem] md:h-[2.25rem] text-black dark:text-white"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav
        className="md:hidden hidden w-full lg:flex justify-between items-center"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Navigate to homepage"
        >
          <img
            src={logo}
            // srcSet={`${logo} 1x, /Assets/logo@2x.png 2x, /Assets/logo@4x.png 4x`}
            alt="Chinonye Chime dark mode logo"
            className="dark:block hidden w-[2.8125rem] h-8"
          />
          <img
            src={logo1}
            // srcSet={`${logo1} 1x, /Assets/logo1@2x.png 2x, /Assets/logo1@4x.png 4x`}
            alt="Chinonye Chime light mode logo"
            className="dark:hidden block w-[2.8125rem] h-8"
          />
          <span className="font-inter text-base font-medium text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </Link>

        <ul className="flex lg:py-5 items-center gap-8">
          {navLinks.map((link) => (
            <motion.li key={link.name} className="lg:py-3 lg:px-4">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `group relative font-inter lg:text-base md:text-sm flex flex-col items-center cursor-pointer ${
                    isActive ? "font-bold text-[#EC157D]" : ""
                  }`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-[1px] h-[2px] transition-all duration-500 ${
                        isActive
                          ? "w-full bg-[#EC157D]"
                          : "w-0 group-hover:w-full dark:bg-[#FCFCFC]/40 bg-[#10010836]"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4 lg:py-3">
          <ThemeToggle />
          <a
            href="http://linkedin.com/in/chinonyelum-chime-a4b0a4166"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 px-4"
            aria-label="Open Chinonye Chime LinkedIn profile in new tab"
          >
            <span className="text-[#100108] dark:text-[#FCFCFC] font-inter group-hover:text-[#EC157D] lg:text-base md:text-sm font-[400] leading-6 transition-colors duration-300">
              LinkedIn
            </span>
            <MdArrowOutward
              className="opacity-0 group-hover:opacity-100 h-5 w-5 text-[#EC157D] transition-opacity duration-300"
              aria-hidden="true"
            />
          </a>

          <Buttons
            className="bg-[#EC157D] md:h-12 h-10 text-white"
            onClick={handleEmailClick}
          >
            Let’s work together
          </Buttons>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
