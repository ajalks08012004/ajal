import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "works", label: "WORKS" },
    { id: "archive", label: "ARCHIVE" },
    { id: "about", label: "ABOUT ME" },
    { id: "contact", label: "CONTACT ME" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#ECECEC]/95 backdrop-blur-md transition-all duration-300 border-b border-[#D0D0D0] ${
        scrolled ? "py-3 shadow-xs" : "py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => handleLinkClick("home")}
          className="group flex items-center gap-1.5 text-left cursor-pointer focus:outline-none"
          aria-label="Ajal KS Home"
        >
          <span className="font-extrabold text-base md:text-lg tracking-tight text-[#080808] uppercase">
            AJAL KS.
          </span>
          <span className="w-2 h-2 rounded-full bg-[#3023FF] inline-block transition-transform duration-300 group-hover:scale-125" />
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-12 text-xs font-bold uppercase tracking-wider text-[#080808]"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-1 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#3023FF] rounded-xs ${
                  isActive ? "text-[#080808]" : "text-[#777777] hover:text-[#080808]"
                }`}
              >
                <span>{item.label}</span>
                {/* Active / Hover Animated Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#080808] transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#080808] hover:text-[#3023FF] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D0D0D0] bg-[#ECECEC] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left text-sm font-bold uppercase tracking-wider py-2 flex items-center justify-between border-b border-[#E0E0E0] ${
                    isActive ? "text-[#080808]" : "text-[#777777]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#3023FF]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
