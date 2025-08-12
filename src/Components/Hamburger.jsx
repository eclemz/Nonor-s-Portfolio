import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { Buttons } from "./Buttons";

function Hamburger({ open, onClose }) {
  const menuRef = useRef();
  const firstLinkRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      yourClickHandler();
    }
  }

  const handleEmailClick = () => {
    window.location.href =
      "mailto:chimechinonyelum@gmail.com?subject=Let's%20Work%20Together";
  };

  // Prevent background scrolling when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  //Set focus to first menu item when opened, handle Escape key
  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay as button for accessibility, covers page and can be focused/clicked/activated by keyboard */}
      <button
        type="button"
        className="fixed right-0 top-0 bg-white/60 dark:bg-[rgba(16,1,8,0.8)] h-full w-full z-40 cursor-default"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={0}
        style={{ outline: "none" }}
      />
      {/* Hamburger Panel */}
      <aside
        ref={menuRef}
        className="fixed top-0 right-0 h-50vh w-full flex flex-col z-50 transition-transform duration-300 ease-out"
        style={{
          height: "50vh",
          transform: open ? "translateY(0%)" : "translateY(-100%)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <nav
          className="flex flex-col w-[26.875] items-start gap-8 md:p-8 py-8 px-4 text-[#100108] bg-gray-200 dark:bg-[#13070C]"
          aria-label="Main menu"
        >
          {/* <Link
            to="/"
            onClick={handleLinkClick}
            className="w-full"
            tabIndex={0}
            ref={firstLinkRef}
          >
            <div className="flex py-3 px-2 justify-center items-center gap-2 self-stretch">
              <span className="text-[#100108] dark:text-[#FCFCFC] font-inter text-[1.125rem] font-[700] leading-[1.5rem]">
                Home
              </span>
            </div>
          </Link> */}
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="w-full"
            tabIndex={0}
            ref={firstLinkRef}
          >
            <div className="flex py-3 px-2 justify-center items-center gap-2 self-stretch">
              <span className="text-[#100108] dark:text-[#FCFCFC] font-inter text-[1.125rem] leading-[1.5rem]">
                About
              </span>
            </div>
          </Link>

          <Link
            to="/projects"
            onClick={handleLinkClick}
            className="w-full"
            tabIndex={0}
          >
            <div className="flex py-3 px-2 justify-center items-center  gap-2 self-stretch">
              <span className="text-[#100108] dark:text-[#FCFCFC] font-inter text-lg leading-[1.5rem]">
                Projects
              </span>
            </div>
          </Link>

          <div className="flex py-3 px-2 justify-center items-center gap-2 self-stretch">
            <a
              href="https://www.linkedin.com/chinonyelum-chime-a4b0a4166/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2"
              onClick={handleLinkClick}
              aria-label="Open Chinonye Chime LinkedIn profile in a new tab"
              tabIndex={0}
            >
              <span className="text-[#100108] dark:text-[#FCFCFC] font-inter text-lg leading-[1.5rem]">
                LinkedIn
              </span>
              <MdArrowOutward
                className="h-5 w-5 text-[#100108] dark:text-[#FCFCFC]"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="flex flex-col py-4 px-6 justify-center items-center gap-2 self-stretch">
            <ThemeToggle />
          </div>

          <Buttons
            className="md:self-center self-stretch bg-[#EC157D] md:w-52 h-10 text-[#FFF]"
            onKeyDown={handleKeyDown}
            onClick={handleEmailClick}
          >
            Get-in-touch
          </Buttons>
        </nav>
      </aside>
    </>
  );
}

export default Hamburger;
