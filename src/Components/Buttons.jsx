import React from "react";
import { motion } from "framer-motion";

function Buttons({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center font-inter py-2 md:py-3 lg:py-4 px-4 lg:px-6 md:gap-2 gap-1 lg:text-base md:text-base text-sm font-medium rounded-md lg:rounded-lg focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </motion.button>
  );
}

function Buttons1({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center font-medium font-inter py-2 md:py-3 lg:py-4 px-4 lg:px-6 md:gap-2 gap-1 lg:text-base md:text-sm text-xs hover:font-medium rounded-md lg:rounded-lg focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </motion.button>
  );
}

export { Buttons, Buttons1 };
