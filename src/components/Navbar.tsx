"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#");

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
    <nav className="sticky top-0 z-40 bg-[var(--color-bg-ash)]/80 backdrop-blur-md flex items-center justify-between py-6">
      <div className="text-xl font-bold text-[var(--color-brand)]"><span className="text-[black]">M</span>ahi <span className="text-[black]">S</span>hahariar</div>
      <div className="space-x-6">
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
    </nav>
  );
}