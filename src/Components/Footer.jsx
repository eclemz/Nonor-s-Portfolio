import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo1.png";
import { navLinks, footerLinks } from "../Data/Data";

function Footer() {
  return (
    <footer
      className="w-full bg-[#FCFCFC] dark:bg-[#100108] flex flex-col items-center px-4 md:px-8 lg:px-14 py-6 lg:py-10"
      role="contentinfo"
    >
      {/* Top Section */}
      <div className="w-full flex flex-row md:flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0 py-8">
        {/* Brand Section */}
        <div className="hidden lg:flex items-center gap-2">
          <img
            src={logo}
            alt="Chinonye Chime logo (dark mode)"
            className="hidden dark:block w-[2.8125rem] h-8"
          />
          <img
            src={logo1}
            alt="Chinonye Chime logo (light mode)"
            className="dark:hidden block w-[2.8125rem] h-8"
          />
          <span className="font-inter text-xl font-medium text-[#100108] dark:text-[#FCFCFC]">
            Chinonye Chime
          </span>
        </div>

        {/* Main Links */}
        <nav aria-label="Main navigation">
          <h3 className="text-xs lg:text-base font-semibold text-[#9D979A] mb-3">
            MAIN LINKS
          </h3>
          <ul className="flex flex-col gap-5">
            {navLinks.map(({ name, to }) => (
              <li key={name} className="group">
                <Link
                  to={to}
                  className="relative font-inter text-xs lg:text-base font-semibold text-[#100108] dark:text-[#FCFCFC] transition-colors"
                >
                  {name}
                  <span className="absolute left-0 -bottom-[3px] h-[2px] w-0 transition-all duration-500 group-hover:w-full bg-[#10010836] dark:bg-[#FCFCFC]/40"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Links */}
        <nav aria-label="Quick links">
          <h3 className="text-xs lg:text-base font-semibold text-[#9D979A] mb-3">
            QUICK LINKS
          </h3>
          <ul className="flex flex-col gap-5">
            {footerLinks.map(({ name, to }) => (
              <li key={name}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 text-xs lg:text-base font-semibold text-[#100108] dark:text-[#FCFCFC] hover:text-[#EC157D] transition-all"
                >
                  {name}
                  <MdArrowOutward
                    className="opacity-0 group-hover:opacity-100 h-5 w-5 text-[#EC157D] transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center gap-4">
        <hr className="w-full border-t border-gray-300 dark:border-gray-700" />
        <p className="flex items-center gap-1 text-sm font-inter text-[#100108] dark:text-[#FCFCFC]">
          &copy; {new Date().getFullYear()}{" "}
          <span className="lg:hidden">Chinonye Chime</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
