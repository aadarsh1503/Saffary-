// src/AppPromotion.js
import React from "react";
import { useTranslation } from "react-i18next";
import g1 from "./g1.jpeg";
import i1 from "./i1.png";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from "react";

function AppPromotion() {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div id="markets" className={`bg-lorange ${i18n.language === 'ar' ? 'text-right' : 'text-left'} text-white mb-10 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-8 md:px-12 gap-8`}>
      {/* Left Side Content */}
      <div className={`flex flex-col items-center md:items-start space-y-4 ${i18n.language === 'ar' ? 'md:items-end mr-8' : 'md:items-start ml-8'}`}>
        <img src={g1} alt="Saffary" className="h-20 w-auto ml-12" />

        <button className={`bg-white text-lorange text-lg font-bold py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition flex items-center ${i18n.language === 'ar' ? 'flex-row-reverse ml-16 ' : 'ml-16'}`}>
          {t("placeOrder")}
          {isRTL ? (
            <FaArrowLeft className="ml-2 mr-2" />
          ) : (
            <FaArrowRight className="ml-2" />
          )}
        </button>

        <div className="relative w-full flex justify-center">
          <div className="relative inline-block">
            {t("or")}
            <span className={`absolute top-1/2 h-px bg-white w-16 ${i18n.language === 'ar' ? 'left-full ml-4' : 'right-full mr-4'}`}></span>
            <span className={`absolute top-1/2 h-px bg-white w-16 ${i18n.language === 'ar' ? 'right-full mr-4' : 'left-full ml-4'}`}></span>
          </div>
        </div>

        <div className={`flex ${i18n.language === 'ar' ? 'flex-row-reverse' : ''} gap-4`}>
          <a href="#">
            <img
              src="https://www.ordercoro.com/assets/appstore.png"
              alt={t("downloadApp")}
              className="h-12 w-auto"
            />
          </a>
          <a href="#">
            <img
              src="https://www.ordercoro.com/assets/playstore.png"
              alt={t("getItOnGooglePlay")}
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-shrink-0">
        <img
          src={i1}
          alt="App preview on a phone"
          className="h-64 md:h-80 lg:h-[400px] ml-12 mr-12 w-auto object-contain"
        />
      </div>
    </div>
  );
}

export default AppPromotion;