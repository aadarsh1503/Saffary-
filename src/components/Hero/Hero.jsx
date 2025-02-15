import React, { useEffect, useState } from "react";
import i1 from "./i1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Aboutus from "../Aboutus/Aboutus";
import RealTimeStats from "../RealTimeStats/RealTimeStats";
import Saffaryadvantage from "../Saffaryadvantage/Saffaryadvantage";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurStory from "../OurStory/OurStory";
import OurMarkets from "../OurMarkets/OurMarkets";
import AppPromotion from "../AppPromotion/AppPromotion";
import ContactPage from "../ContactPage/ContactPage";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  const [currentHeading, setCurrentHeading] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const headings = [
    t("hero.heading1"),
    t("hero.heading2"),
    t("hero.heading3"),
    t("hero.heading4"),
    t("hero.heading5")
  ];

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const fullText = headings[currentHeading];
      if (!isDeleting) {
        setDisplayedText((prev) => fullText.substring(0, prev.length + 1));

        if (displayedText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), 1500); 
        }
      } else {
        setDisplayedText((prev) => fullText.substring(0, prev.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentHeading((prev) => (prev + 1) % headings.length);
        }
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? 50 : 100); 
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentHeading]);

  return (
    <>
      <div className={`flex flex-col lg:flex-row max-w-5xl mx-auto justify-between mt-20 items-center px-6 py-10 ${i18n.language === 'ar' ? 'text-right' : ''}`}>
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="lg:text-4xl text-2xl font-bold mb-10 min-h-[5rem]">
            {displayedText}
            <span className="text-orange-500">|</span> {/* Cursor effect */}
          </h1>

          <p className="text-gray-600 mb-6 text-lg lg:text-xl">
            {t("hero.description")}
          </p>
          <button className="bg-white text-lorange text-lg mr-0 lg:ml-0 ml-[80px] lg:mr-72 relative right-0 lg:right-6 left-1 outline-lorange outline font-semibold px-2 lg:px-6 py-2  rounded-lg mb-4 shadow-md hover:bg-lorange hover:text-white flex items-center">
      {t("hero.placeOrderButton")}
      {isRTL ? (
        <FaArrowLeft className="text-lg ml-2 mr-3 mt-2" />
      ) : (
        <FaArrowRight className="text-lg ml-2 " />
      )}
    </button>




          <p className="text-gray-500 font-medium mb-4">{t("hero.downloadApp")}</p>
          <div className={`flex gap-4 ${isRTL ? "mr-[150px]" : ""}`}>
  <button className="flex items-center gap-2 bg-lorange text-white lg:p-0 p-[9px] lg:px-6 py-3 rounded-lg text-xl font-semibold shadow hover:bg-gray-300">
    <FontAwesomeIcon icon={faGooglePlay} className="w-5 h-5 mt-1" />
    {t("hero.googlePlay")}
  </button>
  <button className="flex items-center gap-2 bg-lorange text-white px-6 py-3 text-xl rounded-lg font-semibold shadow hover:bg-gray-300">
    <FontAwesomeIcon icon={faAppStore} className="w-5 h-5 mt-1" />
    {t("hero.appStore")}
  </button>
</div>

        </div>

        {/* Right Side (Image Section) */}
        <div className="lg:w-2/2 hidden lg:block">
          <img
            src={i1}
            alt={t("hero.appPreview")}
            className="rounded-lg"
          />
        </div>
      </div>
      <Aboutus />
      <RealTimeStats />
      <Saffaryadvantage />
      <HowItWorks />
      <OurStory />
      <OurMarkets />
      <ContactPage />
      <AppPromotion />
    </>
  );
};

export default Hero;
