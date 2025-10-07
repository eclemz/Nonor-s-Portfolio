import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageSkeleton() {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const renderHomeSkeleton = () => (
    <div className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-14 py-12 space-y-12 bg-[#FCFCFC] dark:bg-[#100108]">
      {/* Hero Section */}
      <div className="w-full max-w-6xl space-y-8">
        <div className="space-y-4">
          <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
          <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
        </div>
        <div className="h-80 w-full bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
      </div>

      {/* Skills Section */}
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

      {/* Projects Preview */}
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
    </div>
  );

  const renderAboutSkeleton = () => (
    <div className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-16 py-12 space-y-12 bg-[#FCFCFC] dark:bg-[#100108]">
      {/* Page Header */}
      <div className="w-full max-w-6xl pt-20 space-y-6">
        <div className="h-10 w-full bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
      </div>

      {/* About Content Blocks */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 w-full h-80 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
          <div className="flex-1 space-y-4">
            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}

      {/* Experience Section */}
      <div className="w-full max-w-6xl space-y-8">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
        <div className="space-y-6 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 w-full">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsSkeleton = () => (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 space-y-8 bg-[#FCFCFC] dark:bg-[#100108]">
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
    </div>
  );

  const renderProjectPageSkeleton = () => (
    <div className="w-full min-h-screen flex items-start py-12 lg:px-14 lt:px-10 md:px-8 px-4 bg-white dark:bg-[#100108]">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col fixed z-30 gap-2 px-8 py-3 left-6 top-48">
        <div className="h-7 w-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4" />
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse py-2"
          />
        ))}
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col lg:pt-[7rem] lt:px-16 lg:px-[120px] gap-16 w-full lg:ml-32">
        {/* First Viewport - Image Right, Text Left */}
        <div className="flex items-center self-stretch gap-8">
          {/* Big Image on Right */}
          <div className="lg:h-[31.5rem] md:h-[25.75rem] w-full flex-1 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );

  const getSkeletonContent = () => {
    switch (location.pathname) {
      case "/":
        return renderHomeSkeleton();
      case "/about":
        return renderAboutSkeleton();
      case "/projects":
        return renderProjectsSkeleton();
      default:
        if (location.pathname.startsWith("/project/")) {
          return renderProjectPageSkeleton();
        }
        return renderProjectsSkeleton(); // Default fallback
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={`skeleton-${location.pathname}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 0.8 }}
        >
          {getSkeletonContent()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
