import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import LanguageToggle from "../../LanguageToggle";
import g1 from "./g1.jpeg";

const Navbar = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-lorange text-white" : "bg-lorange text-white"
        }`}
      >
        <div className="container mx-auto flex items-center text-sm justify-between px-6 py-2">
          <div className="md:flex hidden justify-end rtl:justify-start space-x-6 rtl:space-x-reverse mt-2 absolute top-0 right-24 rtl:right-auto rtl:left-24 px-6">
            <a href="/#contact" className="text-white font-semibold mt-3 text-xs">
              {t("contact")}
            </a>
            <a
              href="/requestEarly"
              className="hover:text-gray-400 px-4 outline outline-white rounded-full mt-2"
            >
              {t("requestEarly")}
            </a>
            <a
              href="/becomeMerchant"
              className="hover:text-gray-400 text-lorange px-4 bg-white outline outline-white rounded-full mt-2"
            >
              {t("becomeMerchant")}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/">
              <img src={g1} alt="Logo" className="h-20 w-56" />
            </a>
          </div>

          <div className="hidden md:flex mt-6 font-semibold items-center space-x-7 text-sm tracking-wide">
            <Link to="/#about" onClick={() => scrollToSection("about")} className="hover:text-gray-600">
              {t("about")}
            </Link>
            <Link to="/#glance" onClick={() => scrollToSection("glance")} className="hover:text-gray-600">
              {t("glance")}
            </Link>
            <Link to="/#advantages" onClick={() => scrollToSection("advantages")} className="hover:text-gray-600">
              {t("advantages")}
            </Link>
            <Link to="/#steps" onClick={() => scrollToSection("steps")} className="hover:text-gray-600">
              {t("steps")}
            </Link>
            <Link to="/#story" onClick={() => scrollToSection("story")} className="hover:text-gray-600">
              {t("story")}
            </Link>
            <Link to="/#markets" onClick={() => scrollToSection("markets")} className="hover:text-gray-600">
              {t("markets")}
            </Link>
            <LanguageToggle />
          </div>

          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl cursor-pointer text-white" onClick={toggleMobileMenu} />
            ) : (
              <FaBars className="text-2xl cursor-pointer text-white" onClick={toggleMobileMenu} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
