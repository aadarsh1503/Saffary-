import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import g1 from "./g1.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import i111 from "./i111.png"
const Footer = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const isRTL = i18n.language === "ar"; // Check if the language is Arabic (RTL)

  return (
    <div className={`bg-gray-5 ${i18n.language === 'ar' ? 'text-right relative lg:right-0  ' : ''}`}>
      <footer className="max-w-5xl mx-auto py-8">
        <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="mb-8 ml-0 lg:ml-8 md:mb-0">
            {/* Logo */}
            <div className="mb-4 ml- lg:ml-0">
              <img  src={isRTL ? i111 : g1}  alt={t("logoAltText")} className="h-20" />
            </div>
            <p className={`text-gray-700 ${
                  isRTL ? "text-sm break-words" : " text-lg"
                }  lg:ml-0 ml- mb-6 `}>
              {t("saffaryDescription")}
            </p>
            <div className={`flex flex-col space-y-4 w-full ${i18n.language === 'ar' ? 'lg:items-start items-center' :  'items-center lg:items-start'}`}>
  <Link to="/becomeMerchant" className="w-full max-w-xs">
    <button className="w-full hover:text-lorange hover:outline-lorange text-center outline rounded-full font-semibold text-gray-700 py-3 px-10 hover:bg-gray-100 whitespace-nowrap ">
      {t("becomeMerchant")}
    </button>
  </Link>
  <button
    className="w-full max-w-xs hover:text-lorange hover:outline-lorange outline font-semibold text-gray-700 py-3 px-10 rounded-full hover:bg-gray-100 whitespace-nowrap "
  >
    {t("requestDemo")}
  </button>
</div>
          </div>

          {/* Middle Section */}
          <div className="mb-8 md:mb-0 flex lg:ml-10 mr- p-4 ml-0 mt-0 lg:-mt-20 justify-between space-x-2">
            {/* Our Business Section */}
            <div className="w-full md:w-1/2">
              <h4 className="text-gray-900 font-semibold mb-4">{t("ourBusiness")}</h4>
              <ul className="space-y-2 text-gray-700 font-semibold text-sm">
                <li>
                  <a href="/privacy" className="hover:underline">
                    {t("privacyPolicy")}
                  </a>
                </li>
                <li>
                  <a href="/t&C" className="hover:underline">
                    {t("termsConditions")}
                  </a>
                </li>
                <li>
                  <a href="/refund&Cancellation" className="hover:underline">
                    {t("cancellationRefund")}
                  </a>
                </li>
                <li>
                  <a href="/requestEarly" className="hover:underline">
                    {t("requestEarlyAccess")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="w-full -mt-1 md:w-1/2">
  <h4 className="text-gray-900 font-semibold mb-4">{t("contactUs")}</h4>
  <ul className="text-gray-700 font-semibold text-sm space-y-2">
   
      <span dir="ltr" className="ml-1">+973 33117441</span> 
   
    <li>{t("email")}</li>
    <li>{t("address")}</li>
  </ul>
</div>

          </div>

          {/* Right Section */}
          <div className={`mb-8 md:mb-0  justify-between flex  mt-0 lg:-mt-44 ${i18n.language === 'ar' ? 'relative lg:right-0 right-32  ' : 'relative  lg:left-0 left-32'} hover:text-orange-600 items-start`}>
         
          <div className={`grid grid-cols-2 ml-0 ${i18n.language === 'ar' ? 'relative  ' : 'lg:left-0 left-20'} gap-6 mt-6 `}>
            <AiOutlineLinkedin className={`text-orange-500 text-4xl shrink-0 cursor-pointer lg:mr-4 mr-0 ${i18n.language === 'ar' ? 'relative left-0 lg:left-4 shrink-0 z-10' : ''} hover:text-orange-600`} />
            <FontAwesomeIcon icon={faXTwitter} className="text-orange-500 text-4xl  cursor-pointer hover:text-orange-600" />
            <AiOutlineInstagram className={`text-orange-500 text-4xl cursor-pointer mr-0 shrink-0 z-10 relative lg:mr-4 ${i18n.language === 'ar' ? 'relative left-0 lg:left-4 shrink-0 z-10' : ''} hover:text-orange-600 `} />
            <a href="https://www.facebook.com/saffarystation/" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook className="text-orange-500 text-4xl cursor-pointer hover:text-orange-600" />
            </a>
          </div>
        </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            {t("copyright")} © 2025 {t("Saffary")}. {t("allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
