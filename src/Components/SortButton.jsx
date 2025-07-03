import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";


function SortButton({ options, onChange, value }) {
  const [open, setOpen] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1); 
  const buttonRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
        setFocusIdx(-1);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (!open) return;
      const total = options.length + 1; 
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusIdx((prev) => (prev + 1) % total);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusIdx((prev) => (prev - 1 + total) % total);
      } else if (e.key === "Escape") {
        setOpen(false);
        setFocusIdx(-1);
        buttonRef.current?.querySelector("button")?.focus();
      } else if (e.key === "Enter" && focusIdx !== -1) {
        e.preventDefault();
        if (focusIdx === 0) {
          setOpen(false);
          onChange("");
        } else {
          setOpen(false);
          onChange(options[focusIdx - 1].value);
        }
        setFocusIdx(-1);
        buttonRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, focusIdx, onChange, options]);

  const current = options.find(opt => opt.value === value);
  const label = current ? current.label : "All";

  
  const getOptionId = (idx) => `sort-option-${idx}`;

  return (
    <div className="relative" ref={buttonRef}>
      <button
        className="flex items-center gap-2 md:gap-5 md:p-2 px-3 py-1 bg-white dark:bg-[#100108] border-0 md:border-[0.0625rem] border-black dark:border-white md:rounded-[0.5rem]"
        onClick={() => {
          setOpen((o) => !o);
          setFocusIdx(-1);
        }}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="sort-dropdown-list"
        aria-label="Filter options"
        aria-activedescendant={open && focusIdx !== -1 ? getOptionId(focusIdx) : undefined}
      >
        <span className="md:hidden block text-base font-[500] md:font-[400] dark:text-white text-[#100108] font-inter">
          Sort:
        </span>
        <span className="hidden md:block text-base font-[500] md:font-[400] dark:text-white text-[#100108] font-inter">
          Filter
        </span>
        <span className="dark:text-white text-[#100108]">
          <MdKeyboardArrowDown
            className={`md:hidden block h-[1.5rem] w-[1.5rem] ${
              open ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true" 
          />
          <GiSettingsKnobs
            className={`hidden md:block h-[1.5rem] w-[1.5rem]`}
            aria-hidden="true" 
          />
        </span>
      </button>
      {open && (
        <ul
          className="sortButton absolute right-[0] z-40 bg-gray-300 dark:bg-[rgba(16,1,8,0.95)] border-0 flex flex-col items-start min-w-[410px] h-[303px] py-[2rem] px-[1rem] gap-[1rem]"
          role="listbox"
          id="sort-dropdown-list"
          aria-label="Sort options"
          ref={listRef}
        >
          <li
            key="all"
            id={getOptionId(0)}
            className={` py-[0.75rem] self-stretch px-[0.525rem] gap-[0.2875rem] rounded-[0.2875rem] flex-1 justify-center items-center border-[0.036rem] border-gray-800 dark:border-gray-300 cursor-pointer
                 ${
                   value === ""
                     ? "dark:bg-gray-300 bg-[#13070C] dark:text-[#13070C] text-[#F9F9F9] font-semibold"
                     : "dark:bg-[#13070C] bg-gray-300 text-[#13070C] dark:text-[#F9F9F9]"
                 } ${
              focusIdx === 0 ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => {
              setOpen(false);
              onChange("");
              setFocusIdx(-1);
            }}
            onMouseEnter={() => setFocusIdx(0)}
            role="option"
            aria-selected={value === ""}
            tabIndex={-1}
          >
            <span className="flex text-[0.875rem] font-[400] self-center justify-center font-inter">
              All
            </span>
          </li>
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              id={getOptionId(idx + 1)}
              className={`py-4 self-stretch px-2 gap-1 rounded-[0.2875rem] flex-1 
                justify-center items-center border-[0.036rem] border-gray-800 dark:border-gray-300 cursor-pointer 
                ${
                  value === opt.value
                    ? "dark:bg-gray-300 bg-[#13070C] text-[#F9F9F9] dark:text-[#13070C] font-semibold"
                    : "dark:bg-[#13070C] bg-gray-300 text-[#13070C] dark:text-[#F9F9F9]"
                }
                ${focusIdx === idx + 1 ? "ring-2 ring-blue-500" : ""}
              `}
              onClick={() => {
                setOpen(false);
                onChange(opt.value);
                setFocusIdx(-1);
              }}
              onMouseEnter={() => setFocusIdx(idx + 1)}
              role="option"
              aria-selected={value === opt.value}
              tabIndex={-1}
            >
              <span className="flex text-sm font-[400] self-center justify-center font-inter">
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