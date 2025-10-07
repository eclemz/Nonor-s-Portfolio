import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageSkeleton from "./PageSkeleton";

export default function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading when path changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <PageSkeleton /> : children;
}
