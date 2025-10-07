import React from "react";

function CategoryBtn({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav aria-label="Category navigation" className="w-full">
      <ul className="flex self-start justify-between items-start py-3 w-full">
        {categories.map((category) => (
          <li key={category} className="group">
            <button
              className={`flex flex-col justify-center items-center my-3 px-4 gap-2 transition-all duration-700 ${
                activeCategory === category
                  ? "border-b-2 border-[#EC157D] font-bold text-[#EC157D]"
                  : "text-[#100108] dark:text-[#FCFCFC] border-b-2 group-hover:border-b-black/40 dark:group-hover:border-b-white/40 border-transparent"
              }`}
              onClick={() => onCategoryChange(category)}
              aria-pressed={activeCategory === category}
              aria-current={activeCategory === category ? "page" : undefined}
              type="button"
            >
              <span className="font-inter lg:text-base md:text-sm">
                {category}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default CategoryBtn;
