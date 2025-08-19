import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../LanguageToggle";
import g1 from "./g1.jpeg";
import MobileMenu from "../MobileNavbar/MobileNavbar";
import i1 from "./i1.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // We check against a small threshold like 10px instead of 50 for a quicker effect
      const scrolled = currentScrollY > 10;
      setIsScrolled(scrolled);
      
      if (currentScrollY <= 10) {
        setShowNavbar(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        ref={navbarRef}
        // --- KEY CHANGES ARE HERE ---
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out text-white
          ${ isScrolled
              ? "bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-xl" // Scrolled state: Glass effect
              : "bg-[#FF7300] bg-transparent border-b border-transparent" // Top of page state: Fully transparent
          } 
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}`
        }
        // The inline style is no longer needed as transition is handled by Tailwind classes
      >
        <div className="container mx-auto flex items-center text-sm justify-between px-6 py-2">
          {!isMobile && (
            <div className="md:flex hidden justify-end rtl:justify-start space-x-6 rtl:space-x-reverse mt-2 absolute top-0 right-24 rtl:right-auto rtl:left-24 px-6">
              <a href="/#contact" className="text-white font-semibold mt-3 text-xs">
                {t("contact")}
              </a>
              <a
                href="/requestEarly"
                className="hover:text-gray-300 px-4 outline outline-white rounded-full mt-2"
              >
                {t("requestEarly")}
              </a>
              <a
                href="/becomeMerchant"
                className="hover:bg-gray-200 text-lorange px-4 bg-white outline outline-white rounded-full mt-2"
              >
                {t("becomeMerchant")}
              </a>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <a href="/">
              <img 
                src={isRTL ? i1 : g1} 
                alt="Logo" 
                // Consider adding a subtle drop-shadow to the logo to make it pop
                className="h-20 w-56 " 
              />
            </a>
          </div>

          {!isMobile && (
            // Added a text-shadow for better readability on varied backgrounds
            <div className="hidden md:flex mt-6 font-semibold items-center space-x-7 text-sm tracking-wide" style={{textShadow: '0px 1px 4px rgba(0,0,0,0.5)'}}>
              <Link to="/#about" onClick={() => scrollToSection("about")} className="hover:text-gray-300 ml-8">
                {t("about")}
              </Link>
              <Link to="/#glance" onClick={() => scrollToSection("glance")} className="hover:text-gray-300">
                {t("glance")}
              </Link>
              <Link to="/#advantages" onClick={() => scrollToSection("advantages")} className="hover:text-gray-300">
                {t("advantages")}
              </Link>
              <Link to="/#steps" onClick={() => scrollToSection("steps")} className="hover:text-gray-300">
                {t("steps")}
              </Link>
              <Link to="/#story" onClick={() => scrollToSection("story")} className="hover:text-gray-300">
                {t("story")}
              </Link>
              <Link to="/#markets" onClick={() => scrollToSection("markets")} className="hover:text-gray-300">
                {t("markets")}
              </Link>
              <div className={` ${i18n.language === 'ar' ? ' ' : 'relative lg:-top-[3px]'} top-0`}>
                <LanguageToggle />
              </div>
            </div>
          )}

          {isMobile && (
            <div className="md:hidden">
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl cursor-pointer text-white" onClick={toggleMobileMenu} />
              ) : (
                <FaBars className="text-2xl cursor-pointer text-white" onClick={toggleMobileMenu} />
              )}
              <MobileMenu toggleMobileMenu={toggleMobileMenu} isOpen={isMobileMenuOpen} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;