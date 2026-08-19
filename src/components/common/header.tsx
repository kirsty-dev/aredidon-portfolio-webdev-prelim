import { useState } from "react";
import { Link, useLocation } from "react-router";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#232C42] bg-[#0B0F19]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center"
          aria-label="Kirsty - Home"
        >
          <img
            src={`${import.meta.env.BASE_URL}k-logo.png`}
            alt="Kirsty"
            className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navigation.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-sm transition-all duration-300 ${
                  active
                    ? "text-[#E7EBF5]"
                    : "text-[#8892AA] hover:-translate-y-0.5 hover:text-[#4C6FFF]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="font-mono text-sm text-[#8892AA] transition-colors hover:text-[#4C6FFF] sm:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="border-t border-[#232C42] bg-[#0B0F19]/95 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-sm transition-colors ${
                    active
                      ? "text-[#E7EBF5]"
                      : "text-[#8892AA] hover:text-[#4C6FFF]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}