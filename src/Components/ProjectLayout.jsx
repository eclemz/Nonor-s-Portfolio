import { Outlet, useLocation } from "react-router-dom";
import React from "react";

function ProjectLayout() {
  const location = useLocation();
  return <Outlet key={location.pathname} />;
}

export default ProjectLayout;
