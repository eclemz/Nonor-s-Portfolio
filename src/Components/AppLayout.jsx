import { useRef, useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Hamburger from "./Hamburger";

function AppLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <div className="relative min-h-screen bg-[#100108]">
      <Dashboard onHamburgerClick={() => setMenuOpen(true)} />
      {/* Hamburger Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />
          {/* Hamburger Panel */}
          <aside
            ref={menuRef}
            className="fixed top-0 right-0 z-40 w-[18rem] h-full bg-[#1a1a1a] shadow-lg flex flex-col"
          >
            <Hamburger onClose={() => setMenuOpen(false)} />
          </aside>
        </>
      )}
      {/* Main App Content */}
      <main className={menuOpen ? "pointer-events-none select-none" : ""}>
        {children}
      </main>
    </div>
  );
}

export default AppLayout;