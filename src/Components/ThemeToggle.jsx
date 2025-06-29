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
        w-[3.5rem] h-[2rem] rounded-[32px] border-0 flex justify-start items-center p-[0.25rem] transition-colors duration-300
        ${theme === "dark" ? "bg-[#9D979A]" : "bg-[#392C32]"}
      `}
    >
      <span
        className={`
            flex w-[1.5rem] h-[1.5rem] items-center justify-center
          transform transition-transform duration-300 rounded-full
          ${theme === "dark" ? "bg-[#100108]" : "bg-[#FFFFFF]"}
          ${theme === "dark" ? "translate-x-[1.5rem]" : "translate-x-0"}
        `}
      >
        {theme === "dark" ? (
          <MdWbSunny className="text-[#FFFFFF] w-[1rem] h-[1rem] rounded-full bg-[#100108] text-lg" />
        ) : (
          <MdDarkMode className="text-[#100108] w-[1rem] h-[1rem] rounded-full bg-[#FFF] text-lg" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
