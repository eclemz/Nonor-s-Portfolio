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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open])

  if (!open) return null;

  // Close menu on link click
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed right-[0] top-[0] bg-[rgba(252, 252, 252, 0.80)] dark:bg-[rgba(16,1,8,0.8)] h-full w-full  bg-opacity-20 z-40"
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
        <nav className=' flex flex-col w-full items-start gap-[2rem] md:p-[2rem] py-[2rem] px-[1rem]  text-[#100108] bg-gray-200 dark:bg-[#13070C]'>

          <Link to="/projects" onClick={handleLinkClick} className="w-full">
          <div className='flex py-3 px-2 justify-center gap-2 self-stretch'>    
              <span className='text-[#100108] dark:text-[#FCFCFC] font-inter text-[1.125rem] font-[700] leading-[1.5rem]'>Projects</span>
          </div>
          </Link>


          <Link to="/about" onClick={handleLinkClick} className="w-full">
          <div className='flex py-3  px-2 self-stretch justify-center gap-2 '>
              <span className='text-[#100108] dark:text-[#FCFCFC] justify-center font-inter text-[1.125rem] font-[700] leading-[1.5rem]'>About</span>
          </div>
          </Link>

          <div className='flex py-3 px-6 justify-center gap-2 self-stretch'>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <span className='text-[#100108] dark:text-[#FCFCFC] font-inter text-lg font-[700] leading-[1.5rem]'>
                LinkedIn
              </span>
              <MdArrowOutward className="h-5 w-5 text-[#100108] dark:text-[#FCFCFC]" />
            </a>
          </div>
          <div className="flex flex-col py-4 px-6 justify-center items-center gap-2 self-stretch">
          <ThemeToggle />
          </div>
          <button className="flex justify-center items-center gap-1 py-3 px-[1rem] self-stretch rounded-lg bg-[#EC157D] ">
            <span className="text-[#FFFFFF] font-['Helvetica Neue'] text-3  md:text-base font-[500]">
                Get-in-touch
            </span>
          </button>
        </nav>
      </aside>
    </>
  );
}

export default Hamburger;



