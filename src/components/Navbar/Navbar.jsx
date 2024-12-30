import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // React Router for navigation
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile menu icons
import g1 from "./g1.jpeg"; // Logo image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change state when scrolled more than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSearchClick = () => setIsSearching(true);
  const handleClearClick = () => {
    setSearchText("");
    setIsSearching(false);
  };
  const handleInputChange = (e) => setSearchText(e.target.value);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-lorange text-white" : "bg-lorange text-white"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <a href="/">
            <img src={g1} alt="Logo" className="h-20 w-56" />
          </a>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex font-semibold items-center space-x-7 text-sm tracking-wide">
          {/* <Link to="/email" className="hover:text-gray-600">About Us</Link>
          <Link to="/marketing" className="hover:text-gray-600">At a Glance</Link>
          <Link to="/pricing" className="hover:text-gray-600">Advantages</Link>
          <Link to="/#partners" className="hover:text-gray-600">Steps</Link>
          <Link to="/manPower" className="hover:text-gray-600">Our Story</Link>
          <Link to="/manPower" className="hover:text-gray-600">Our Markets</Link> */}

          {/* Search Section */}
   

          
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl cursor-pointer text-white" onClick={toggleMobileMenu} />
          ) : (
            <FaBars className="text-2xl cursor-pointer text-white" onClick={toggleMobileMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f2027] text-white py-4 px-6">
          <Link to="/email" className="block py-2 hover:text-gray-400">Features</Link>
          <Link to="/marketing" className="block py-2 hover:text-gray-400">Solution</Link>
          <Link to="/pricing" className="block py-2 hover:text-gray-400">Pricing</Link>
          <Link to="/#partners" className="block py-2 hover:text-gray-400">Integrations</Link>
          <Link to="/manPower" className="block py-2 hover:text-gray-400">Resources</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
