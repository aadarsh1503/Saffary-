import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile menu icons
import g1 from "./g1.jpeg"; // Logo image
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Hook to track the current route

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state when scrolled more than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Detect route change and trigger scroll
  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, [location]);

  return (
    <>
      {/* Main Navbar (Logo, Top Menu, and Menu Items) */}
      <nav
        className={`fixed  top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-lorange text-white" : "bg-lorange text-white"
        }`}
      >
        <div className="container mx-auto flex items-center text-sm justify-between px-6 py-2">
          {/* First Navbar (Top Navbar with 3 Items) */}
          <div className="md:flex hidden justify-end space-x-6 mt-2 absolute top-0 right-24 px-6">
            <a href="/#contact" className="text-white font-semibold mt-3 text-xs">
              Contact Us
            </a>
            <a href="/requestEarly" className="hover:text-gray-400 px-4 outline outline-white rounded-full mt-2">
              Request For Early Access
            </a>
            <a href="/becomeMerchant" className="hover:text-gray-400 text-lorange px-4 bg-white outline outline-white rounded-full mt-2">
              Become a Merchant
            </a>
          </div>

          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img src={g1} alt="Logo" className="h-20 w-56" />
            </a>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex mt-6 font-semibold items-center space-x-7 text-sm tracking-wide">
            <Link to="/#about" onClick={() => scrollToSection("about")} className="hover:text-gray-600">
              About Us
            </Link>
            <Link to="/#glance" onClick={() => scrollToSection("glance")} className="hover:text-gray-600">
              At a Glance
            </Link>
            <Link to="/#advantages" onClick={() => scrollToSection("advantages")} className="hover:text-gray-600">
              Advantages
            </Link>
            <Link to="/#steps" onClick={() => scrollToSection("steps")} className="hover:text-gray-600">
              Steps
            </Link>
            <Link to="/#story" onClick={() => scrollToSection("story")} className="hover:text-gray-600">
              Our Story
            </Link>
            <Link to="/#markets" onClick={() => scrollToSection("markets")} className="hover:text-gray-600">
              Our Markets
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer text-white"
                onClick={toggleMobileMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer text-white"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-lorange text-white py-4 px-6">
            {/* Mobile Menu Items */}
            <a href="/#about" className="block py-2 hover:text-gray-400">
              About Us
            </a>
            <a href="/#glance" className="block py-2 hover:text-gray-400">
              At a Glance
            </a>
            <a href="/#advantages" className="block py-2 hover:text-gray-400">
              Advantages
            </a>
            <a href="/#steps" className="block py-2 hover:text-gray-400">
              Steps
            </a>
            <a href="/#story" className="block py-2 hover:text-gray-400">
              Our Story
            </a>
            {/* Additional Items */}
            <a href="/#contact" className="block py-2 hover:text-gray-400">
              Contact Us
            </a>
            <a href="/requestEarly" className="block py-2 hover:text-gray-400">
              Request For Early Access
            </a>
            <a href="/becomeMerchant" className="block py-2 hover:text-gray-400">
              Become a Merchant
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
