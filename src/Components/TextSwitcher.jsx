import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
  { value: "No-Code Developer", color: "#17C461"},
  { value: "UX Designer", color: "#EE1818"}
];

export default function TextSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % texts.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span className="text-[2rem] md:text-[3rem] font-inter font-[700]"
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, color: texts[index].color }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        style={{ display: "inline-block" }}
      >
        {texts[index].value}
      </motion.span>
    </AnimatePresence>
  );
}