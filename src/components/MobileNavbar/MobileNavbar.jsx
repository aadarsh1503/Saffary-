import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../LanguageToggle";

const MobileMenu = ({ toggleMobileMenu }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 right-32 w-full h-[700px] bg-lorange text-white z-50 transform transition-transform duration-300 translate-x-0">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">{t("menu")}</h2>
        <FaTimes className="text-2xl ml-32 cursor-pointer" onClick={toggleMobileMenu} />
      </div>

      <div className="flex flex-col items-center mt-10  space-y-3 text-lg font-medium">
        <Link to="/#about" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("about")}
        </Link>
        <Link to="/#glance" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("glance")}
        </Link>
        <Link to="/#advantages" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("advantages")}
        </Link>
        <Link to="/#steps" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("steps")}
        </Link>
        <Link to="/#story" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("story")}
        </Link>
        <Link to="/#markets" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("markets")}
        </Link>
        <Link to="/requestEarly" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("requestEarly")}
        </Link>
        <Link to="/becomeMerchant" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("becomeMerchant")}
        </Link>
        <Link to="/contact" onClick={toggleMobileMenu} className="hover:text-gray-300">
          {t("contact")}
        </Link>
    
      </div>
    </div>
  );
};

export default MobileMenu;