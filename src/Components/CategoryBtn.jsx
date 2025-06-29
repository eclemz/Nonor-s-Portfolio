import React from "react";

// Props: categories (array of strings), activeCategory (string), onCategoryChange (function)
function CategoryBtn({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav className="flex self-start justify-between items-start py-3">
      <button
        className={`flex flex-col justify-center items-center py-3 px-4 gap-2 transition-all${
          activeCategory === "All"
            ? "text-[#EC157D] border-b-2 border-[#EC157D]"
            : "text-[#100108] dark:text-[#FCFCFC] border-b-2 border-transparent"
        }`}
        onClick={() => onCategoryChange("All")}
      >
        <span className='font-inter text-base font-bold'>
            All
        </span>
      </button>
      {categories.map(category => (
        <button
          key={category}
          className={`flex flex-col justify-center items-center py-3 px-4 gap-2 transition-all ${
            activeCategory === category
              ? "text-[#EC157D] border-b-2 border-[#EC157D]"
              : "text-[#100108] dark:text-[#FCFCFC] border-b-2 border-transparent"
          }`}
          onClick={() => onCategoryChange(category)}
        >
            <span className='font-inter text-base font-bold'>
            {category}
        </span>
          
        </button>
      ))}
    </nav>
  );
}

export default CategoryBtn;