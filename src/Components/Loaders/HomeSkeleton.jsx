import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeSkeleton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="home-skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 0.8 }}
          className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-14 py-12 space-y-12 bg-[#FCFCFC] dark:bg-[#100108]"
        >
          {/* Hero Section Skeleton */}
          <div className="w-full max-w-6xl space-y-8">
            {/* Main hero text */}
            <div className="space-y-4">
              <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
              <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
            </div>

            {/* Hero image/avatar area */}
            <div className="h-80 w-full bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
          </div>

          {/* Skills/Highlights Section */}
          <div className="w-full max-w-6xl space-y-6">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Featured Projects Preview */}
          <div className="w-full max-w-6xl space-y-6">
            <div className="h-8 w-56 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* CTA/Contact Section */}
          <div className="w-full max-w-6xl space-y-6">
            <div className="h-10 w-64 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse mx-auto" />
            <div className="h-16 w-48 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse mx-auto" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
