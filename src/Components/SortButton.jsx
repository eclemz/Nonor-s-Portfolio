import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";

function SortButton({ options, onChange, value }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const current = options.find(opt => opt.value === value);
  const label = current ? current.label : "All";


  return (
    <div className="relative" ref={buttonRef}>
      <button
        className="flex items-center gap-[0.5rem] md:gap-[1.3rem] md:p-[0.5rem] px-[0.754rem] py-[0.25rem] bg-white dark:bg-[#100108] border-0 md:border-[0.0625rem] border-black dark:border-white md:rounded-[0.5rem]"
        
        onClick={() => setOpen((o) => !o)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="md:hidden block text-[1rem] font-[500] md:font-[400] dark:text-white text-[#100108]  font-inter">
          Sorted:
        </span>
        <span className="hidden md:block text-[1rem] font-[500] md:font-[400] dark:text-white text-[#100108] font-inter">
          Filter
        </span>

        <span className="dark:text-white text-[#100108]">
          <MdKeyboardArrowDown
            className={`md:hidden block h-[1.5rem] w-[1.5rem] ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
          <GiSettingsKnobs 
          className={`hidden md:block h-[1.5rem] w-[1.5rem]`}
           />
        </span>
      </button>
      {open && (
        <ul className="sortButton absolute right-[0] z-40 bg-gray-300 dark:bg-[rgba(16,1,8,0.95)] border-0 flex flex-col items-start min-w-[410px] h-[303px] py-[2rem] px-[1rem] gap-[1rem]">
          <li
            key="all"
            className={` py-[0.75rem] self-stretch px-[0.525rem] gap-[0.2875rem] rounded-[0.2875rem] flex-1 justify-center items-center border-[0.036rem] border-gray-800 dark:border-gray-300 cursor-pointer
                 ${value === "" 
                ? "dark:bg-gray-300 bg-[#13070C] dark:text-[#13070C] text-[#F9F9F9] font-semibold" : "dark:bg-[#13070C] bg-gray-300 text-[#13070C] dark:text-[#F9F9F9]"}`}
            onClick={() => {
              setOpen(false);
              onChange("");
            }}
            role="option"
          >
            <span className="flex text-[0.875rem] font-[400] self-center justify-center font-inter">
              All
            </span>
          </li>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`py-4 self-stretch px-2 gap-1 rounded-[0.2875rem] flex-1 
                justify-center items-center border-[0.036rem] border-gray-800 dark:border-gray-300 cursor-pointer 
                ${value === opt.value ? "dark:bg-gray-300 bg-[#13070C] text-[#F9F9F9] dark:text-[#13070C] font-semibold" : "dark:bg-[#13070C] bg-gray-300 text-[#13070C] dark:text-[#F9F9F9]"}
              `}
              onClick={() => {
                setOpen(false);
                onChange(opt.value);
              }}
              role="option"
            >
              <span className="flex text-[0.875rem] font-[400] self-center justify-center font-inter">
                {opt.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortButton;
