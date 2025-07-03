import { useEffect, useState } from "react";
import { MdWbSunny, MdDarkMode } from "react-icons/md";


function ThemeToggle() {
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      type="button"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      } 
      onClick={toggleTheme}
      className={`
        w-14 h-8 rounded-[32px] border-0 flex justify-start items-center p-1 transition-colors duration-300
        ${theme === "dark" ? "bg-[#9D979A]" : "bg-[#392C32]"}
      `}
    >
      <span
        className={`
            flex w-6 h-6 items-center justify-center
          transform transition-transform duration-300 rounded-full
          ${theme === "dark" ? "bg-[#100108]" : "bg-[#FFFFFF]"}
          ${theme === "dark" ? "translate-x-[1.5rem]" : "translate-x-0"}
        `}
      >
        {theme === "dark" ? (
          <MdWbSunny
            className="text-[#FFFFFF] w-4 h-4 rounded-full bg-[#100108] text-lg"
            aria-hidden="true"
          />
        ) : (
          <MdDarkMode
            className="text-[#100108] w-4 h-4 rounded-full bg-[#FFF] text-lg"
            aria-hidden="true" 
          />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;