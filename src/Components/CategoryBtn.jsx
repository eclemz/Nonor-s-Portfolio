import React from "react";

function CategoryBtn({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav aria-label="Category navigation">
      <ul className=" flex self-start justify-between items-start py-3 w-full">
        <li className="group">
          <button
            className={`flex flex-col justify-center items-center py-3 px-4 gap-2 transition-all duration-700 ${
              activeCategory === "All"
                ? "text-inherit border-b-2 border-black dark:border-white"
                : "text-[#100108] dark:text-[#FCFCFC] border-b-2 group-hover:border-black/40 dark:group-hover:border-b-white/40 border-transparent"
            }`}
            onClick={() => onCategoryChange("All")}
            aria-pressed={activeCategory === "All"}
            aria-current={activeCategory === "All" ? "page" : undefined}
            type="button"
          >
            <span className="font-inter text-base font-bold">All</span>
          </button>
        </li>

        {categories.map((category) => (
          <li key={category} className="group">
            <button
              className={`flex flex-col justify-center items-center py-3 px-4 gap-2 transition-all duration-700 ${
                activeCategory === category
                  ? "text-inherit border-b-2 border-black dark:border-white"
                  : "text-[#100108] dark:text-[#FCFCFC] border-b-2 group-hover:border-b-black/40 dark:group-hover:border-b-white/40 border-transparent"
              }`}
              onClick={() => onCategoryChange(category)}
              aria-pressed={activeCategory === category}
              aria-current={activeCategory === category ? "page" : undefined}
              type="button"
            >
              <span className="font-inter text-base font-bold">{category}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryBtn;
