import React from "react";

function Buttons({ children, icon, className, onClick, onKeyDown }) {
  return (
    <button
      className={`inline-flex justify-center items-center font-inter py-2 md:py-3 lg:py-4 px-4 lg:px-6 md:gap-2 gap-1 lg:text-base md:text-base text-sm active:scale-95 hover:scale-105 font-medium transition-transform duration-300 rounded-md lg:rounded-lg focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </button>
  );
}

function Buttons1({ children, icon, className, onClick, onKeyDown }) {
  return (
    <button
      className={`inline-flex justify-center items-center font-medium font-inter py-2 md:py-3 lg:py-4 px-4 lg:px-6 md:gap-2 gap-1 lg:text-base md:text-sm text-xs active:scale-95 hover:scale-105 hover:font-medium transition-transform duration-300 rounded-md lg:rounded-lg focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </button>
  );
}

export { Buttons, Buttons1 };
