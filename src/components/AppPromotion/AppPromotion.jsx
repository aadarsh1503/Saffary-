// src/AppPromotion.js
import React from "react";
import { useTranslation } from "react-i18next";
import g1 from "./g1.jpeg";
import i1 from "./i1.png";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React icons
import { useEffect,useState } from "react";
function AppPromotion() {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);


  return (
    <div id="markets" className={`bg-lorange ${i18n.language === 'ar' ? 'text-right relative lg:right-0 right-32 ' : ''} text-white mb-10 rounded-2xl max-w-4xl mx-auto flex justify-between items-center px-6 md:px-20`}>
      {/* Left Side Content */}
      <div className="space-y-4">
        <img src={g1} alt="Saffary" className="h-20 ml-12 mr-14 w-[200px]" />

        <button className={`bg-white text-lorange text-lg ${i18n.language === 'ar' ? 'text-right relative lg:right-0 left-8 px-1 whitespace-nowrap lg:h-full h-[50px]  ' : ''} font-bold ml-0 lg:ml-16 mr-20 py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition flex items-center`}>
      {t("placeOrder")}
      {isRTL ? (
        <FaArrowLeft className="text-lg ml-2 mr-2 " />
      ) : (
        <FaArrowRight className="text-lg ml-2" />
      )}
    </button>

        <span className="flex text-lg ml-0 lg:-ml-2 justify-center font-medium relative">
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-10 lg:ml-12 w-10 lg:w-24 border-t border-white"></span>
          {t("or")}
          <span className="absolute right-0 top-1/2 left-0 lg:left-56 ml-32 mr-10 lg:-ml-9 transform -translate-y-1/2 w-10 lg:w-24 border-t border-white"></span>
        </span>

        <div className="flex items-center space-x-4">
          <a href="#" className="block mr-">
            <img
              src="https://www.ordercoro.com/assets/appstore.png"
              alt={t("downloadApp")}
              className="h-12 ml-2"
            />
          </a>

          <a href="#" className="block">
            <img
              src="https://www.ordercoro.com/assets/playstore.png"
              alt={t("getItOnGooglePlay")}
              className="h-12"
            />
          </a>
        </div>
      </div>

      {/* Right Side Content */}
      <div>
        <img
          src={i1}
          alt="App preview on a phone"
          className="h-80 md:h-96 object-contain"
        />
      </div>
    </div>
  );
}

export default AppPromotion;
