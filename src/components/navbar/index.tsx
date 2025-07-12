"use client";

import { useEffect, useState } from "react";
import "./styles/logo-cursor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: (arg0: string) => void;
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: ["home", "inicio"] },
    { href: "#about", label: ["skills", "habilidades"] },
    { href: "#projects", label: ["projects", "proyectos"] },
    { href: "#contact", label: ["contact", "contacto"] },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black font-mono border-b-2 border-green-400 text-green-400 fixed w-full z-50 shadow-lg shadow-green-400/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-6 lg:py-10">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl sm:text-3xl lg:text-[30px] logo">
            <span className="terminal-typing">martin-tavella</span>
          </div>

          <ul className="hidden lg:flex gap-9 text-lg lg:text-[22px] xl:text-2xl">
            {navItems.map((item) => (
              <li key={item.label[0]}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative transition-all duration-200 ${
                    activeSection === item.label[0]
                      ? "text-green-300 terminal-active"
                      : "hover:text-green-300"
                  }`}
                  aria-label={
                    language === "en"
                      ? `Navigate to ${item.label[0]}`
                      : `Navegar a ${item.label[1]}`
                  }
                >
                  {language === "en" ? item.label[0] : item.label[1]}
                </button>
              </li>
            ))}
            <li>
              <button
                className="cursor-pointer mr-2"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
              >
                <FontAwesomeIcon icon={faLanguage} />
              </button>
              <span>{language}</span>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black rounded"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-53 opacity-100 mt-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col gap-4 text-xl border-t border-green-400 pt-4">
            {navItems.map((item) => (
              <li key={item.label[0]}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative w-full text-left transition-all duration-200 ${
                    activeSection === item.label[0]
                      ? "text-green-300 terminal-active"
                      : "hover:text-green-300"
                  }`}
                  aria-label={
                    language === "en"
                      ? `Navigate to ${item.label[0]}`
                      : `Navegar a ${item.label[1]}`
                  }
                >
                  {"> "}
                  {language === "en" ? item.label[0] : item.label[1]}
                </button>
              </li>
            ))}
            <li>
              <button
                className="cursor-pointer mr-2"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
              >
                <FontAwesomeIcon icon={faLanguage} />
              </button>
              <span>{language}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
