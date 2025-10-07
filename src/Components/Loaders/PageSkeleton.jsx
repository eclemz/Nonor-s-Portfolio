import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageSkeleton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 0.8 }}
          className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 space-y-8 bg-[#FCFCFC] dark:bg-[#100108]"
        >
          {/* Large hero block */}
          <div className="w-full max-w-5xl h-40 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />

          {/* Simulated card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-52 rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"
              />
            ))}
          </div>

          {/* Text lines */}
          <div className="space-y-3 w-full max-w-4xl mt-8">
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
