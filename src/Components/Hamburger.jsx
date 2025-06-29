import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import ThemeToggle from './ThemeToggle';

function Hamburger({ open, onClose }) {
  const menuRef = useRef();

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

  if (!open) return null;

  // Close menu on link click
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className=" fixed right-[0] top-[0] bg-[rgba(252, 252, 252, 0.80)] dark:bg-[rgba(16,1,8,0.8)] h-full w-full  bg-opacity-20 z-40"
        onClick={onClose}
        aria-label="Close menu"
      />
      {/* Hamburger Panel */}
      <aside
        ref={menuRef}
        className=" fixed top-[0] right-[0] h-50vh w-full  flex flex-col z-50 transition-transform duration-300 ease-out"
        style={{
            height: "50vh",
          transform: open ? "translateY(0%)" : "translateY(-100%)",
        }}
      >
        <nav className=' flex flex-col items-start gap-[2rem] min-[768px]:p-[2rem] py-[2rem] px-[1rem]  text-[#100108] bg-gray-200 dark:bg-[#13070C]'>
          <div className='flex py-[0.75rem] px-[0.5rem] justify-center gap-[0.5rem] self-stretch'>
            <Link to="/projects" onClick={handleLinkClick}>
              <span className='text-[#100108] dark:text-[#FCFCFC] font-inter text-[1.125rem] font-[700] leading-[1.5rem]'>Projects</span>
            </Link>
          </div>
          <div className='flex py-[0.75rem] px-[0.5rem] justify-center gap-[0.5rem] self-stretch'>
            <Link to="/about" onClick={handleLinkClick}>
              <span className='text-[#100108] dark:text-[#FCFCFC] font-inter text-[1.125rem] font-[700] leading-[1.5rem]'>About</span>
            </Link>
          </div>
          <div className='flex py-[0.75rem] px-[1.5rem] justify-center gap-[0.5rem] self-stretch'>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <span className='text-[#100108] dark:text-[#FCFCFC] font-inter text-[1.125rem] font-[700] leading-[1.5rem]'>
                LinkedIn
              </span>
              <MdArrowOutward className="h-[1.25rem] w-[1.25rem] text-[#100108] dark:text-[#FCFCFC]" />
            </a>
          </div>
          <div className="flex flex-col py-[1rem] px-[1.5rem] justify-center items-center gap-[0.5rem] self-stretch">
          <ThemeToggle />
          </div>
          <button className="flex justify-center items-center gap-[0.25rem] py-[0.75rem] px-[1rem] self-stretch rounded-[0.5rem] bg-[#EC157D] ">
            <span className="text-[#FFFFFF] font-['Helvetica Neue'] text-[0.75rem]  min-[768px]:text-[1rem] font-[500]">
                Get-in-touch
            </span>
          </button>
        </nav>
      </aside>
    </>
  );
}

export default Hamburger;



