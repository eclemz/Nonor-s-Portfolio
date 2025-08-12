import React from "react";
import { MdArrowOutward } from "react-icons/md";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-start bg-[#FCFCFC] dark:bg-[#100108] lg:py-6 py-6 px-4 md:px-8 lg:px-[0]"
      role="contentinfo"
    >
      <div className="w-full flex flex-col lg:flex-row items-start self-stretch gap-[2.375rem] lg:justify-between lg:items-start lg:gap-0 lg:py-10 lg:px-14 py-[2.5rem] ">
        <div className="hidden lg:flex justify-center items-center gap-2">
          {/* <Link to="/" aria-label="Homepage"> */}
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
          {/* </Link> */}
          <span className="flex justify-center shrink-0 font-inter text-xl font-[500] text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </div>

        <nav
          className="flex flex-col items-start gap-3"
          aria-label="Main links"
        >
          <h3 className="font-inter lg:text-base text-xs lg:font-[700] items-start font-[600] self-stretch text-[#9D979A]">
            MAIN LINKS
          </h3>
          <ul className="flex flex-col items-start gap-5">
            <li>
              <Link to="/about" aria-label="Go to Projects">
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] self-stretch text-[#100108] dark:text-[#FCFCFC]">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects" aria-label="Go to About">
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] self-stretch text-[#100108] dark:text-[#FCFCFC]">
                  Project
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav
          className="flex flex-col items-start gap-3"
          aria-label="Quick links"
        >
          <h3 className="font-inter lg:text-base text-xs lg:font-[700] font-[600] self-stretch text-[#9D979A]">
            QUICK LINKS
          </h3>
          <ul className="flex flex-col items-start gap-5">
            <li>
              <a
                href="https://dribbble.com/Norno"
                className="group flex lg:justify-start justify-center items-center gap-2 lg:self-stretch"
                aria-label="Go to Linkedin"
              >
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] text-[#100108] dark:text-[#FCFCFC]">
                  Dribble
                </span>
                <MdArrowOutward
                  className="opacity-0 group-hover:opacity-100 h-5 w-5 text-[#100108] dark:text-[#FCFCFC] transition-opacity duration-300"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/chinonychime"
                className="group flex justify-center items-center lg:self-stretch gap-2"
                aria-label="Download Resume"
              >
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] text-[#100108] dark:text-[#FCFCFC]">
                  Behance
                </span>
                <MdArrowOutward
                  className="opacity-0 group-hover:opacity-100 h-5 w-5 text-[#100108] dark:text-[#FCFCFC] transition-opacity duration-300"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li>
              <a
                href="http://linkedin.com/in/chinonyelum-chime-a4b0a4166"
                className="group flex justify-center items-center lg:self-stretch gap-2"
                aria-label="Download Resume"
              >
                <span className="font-inter lg:text-base text-xs lg:font-[400] font-[600] text-[#100108] dark:text-[#FCFCFC]">
                  LinkedIn
                </span>
                <MdArrowOutward
                  className="opacity-0 group-hover:opacity-100 h-5 w-5 text-[#100108] dark:text-[#FCFCFC] transition-opacity duration-300"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col py-4 lg:px-14 md:px-1 px-0 lg:py-14 self-stretch lg:justify-center items-center gap-4">
        <hr className="w-full border-0 border-t border-gray-300 dark:border-gray-600" />
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
