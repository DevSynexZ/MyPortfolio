"use client";
import { useState, useEffect } from "react";
// You will need an icon library like 'lucide-react' 
// Install with: npm install lucide-react
import { Menu, X } from "lucide-react"; 

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1)).filter(Boolean);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(`#${section}`);
          }
        }
      }
      if (window.scrollY < 100) setActiveSection("#");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-[var(--color-bg-ash)]/80 backdrop-blur-md py-6 px-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-[var(--color-brand)]">
          <span className="text-[black]">M</span>ahi <span className="text-[black]">S</span>hahariar
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 ${
                activeSection === link.href 
                  ? "text-[var(--color-brand)] font-bold border-b-2 border-[var(--color-brand)]" 
                  : "text-gray-600 hover:text-[var(--color-brand)]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white/90 p-4 rounded-lg shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={`text-center py-2 ${
                activeSection === link.href 
                  ? "text-[var(--color-brand)] font-bold" 
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}