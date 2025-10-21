import React, { useEffect, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import { Buttons } from "./Buttons";

function Hamburger({ open, onClose }) {
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Focus management + Escape key handler
  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  const handleEmailClick = () => {
    window.location.href =
      "mailto:chimechinonyelum@gmail.com?subject=Let's%20Work%20Together";
  };

  const handleOverlayKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClose();
    }
  };

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  if (!open) return null;

  return (
    <>
      {/* ===== Overlay (click or keyboard accessible) ===== */}
      <button
        type="button"
        className="fixed inset-0 bg-white/60 dark:bg-[rgba(16,1,8,0.85)] z-40"
        aria-label="Close menu overlay"
        onClick={onClose}
        onKeyDown={handleOverlayKeyDown}
        tabIndex={0}
      />

      {/* ===== Slide-down Menu ===== */}
      <aside
        ref={menuRef}
        className={`fixed top-0 right-0 w-full z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "50vh" }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <nav
          className="flex flex-col w-full h-full bg-gray-200 dark:bg-[#13070C] text-[#100108] dark:text-[#FCFCFC] gap-6 md:gap-8 p-6 md:p-8"
          aria-label="Primary navigation"
        >
          {/* About Link */}
          <Link
            to="/about"
            ref={firstLinkRef}
            onClick={handleLinkClick}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC157D]"
          >
            <span className="block text-lg font-inter leading-[1.5rem]">
              About
            </span>
          </Link>

          {/* Projects Link */}
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC157D]"
          >
            <span className="block text-lg font-inter leading-[1.5rem]">
              Projects
            </span>
          </Link>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chinonyelum-chime-a4b0a4166/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC157D]"
            aria-label="Open Chinonye Chime LinkedIn profile in a new tab"
          >
            <span className="text-lg font-inter leading-[1.5rem]">
              LinkedIn
            </span>
            <Suspense fallback={null}>
              <MdArrowOutward className="h-5 w-5" aria-hidden="true" />
            </Suspense>
          </a>

          {/* Theme Toggle */}
          <div className="flex justify-center py-2">
            <ThemeToggle />
          </div>

          {/* Contact Button */}
          <Buttons
            className="bg-[#EC157D] text-white md:w-52 h-10 self-stretch md:self-center"
            onClick={handleEmailClick}
          >
            Get in Touch
          </Buttons>
        </nav>
      </aside>
    </>
  );
}

export default Hamburger;
