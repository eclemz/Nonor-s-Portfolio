import { lazy } from "react";

export const MdArrowOutward = lazy(() =>
  import("react-icons/md").then((mod) => ({ default: mod.MdArrowOutward }))
);

export const GiHamburgerMenu = lazy(() =>
  import("react-icons/gi").then((mod) => ({ default: mod.GiHamburgerMenu }))
);

export const MdKeyboardArrowDown = lazy(() =>
  import("react-icons/md").then((mod) => ({ default: mod.MdKeyboardArrowDown }))
);

export const GiSettingsKnobs = lazy(() =>
  import("react-icons/gi").then((mod) => ({ default: mod.GiSettingsKnobs }))
);

export const MdDarkMode = lazy(() =>
  import("react-icons/md").then((mod) => ({ default: mod.MdDarkMode }))
);

export const MdWbSunny = lazy(() =>
  import("react-icons/md").then((mod) => ({ default: mod.MdWbSunny }))
);
export const IoIosArrowBack = lazy(() =>
  import("react-icons/io").then((mod) => ({ default: mod.IoIosArrowBack }))
);
