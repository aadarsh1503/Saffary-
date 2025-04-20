import React, { useState, useEffect, useMemo } from "react";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i6.png";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HowItWorks = () => {
  const { t, i18n } = useTranslation();
  
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [activeStepId, setActiveStepId] = useState(1); // Track by ID instead of whole object
  
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Use useMemo to prevent unnecessary recalculations
  const steps = useMemo(() => [
    {
      id: 1,
      title: t("register"),
      description: t("registerDescription"),
      image: i1,
    },
    {
      id: 2,
      title: t("findNearbyMerchant"),
      description: t("findNearbyMerchantDescription"),
      image: i2,
    },
    {
      id: 3,
      title: t("provideDeliveryAddress"),
      description: t("provideDeliveryAddressDescription"),
      image: i3,
    },
    {
      id: 4,
      title: t("orderDetailsTrack"),
      description: t("orderDetailsTrackDescription"),
      image: i4,
    },
    {
      id: 5,
      title: t("exploreSection"),
      description: t("exploreSectionDescription"),
      image: i5,
    },
    {
      id: 6,
      title: t("digitalAccount"),
      description: t("digitalAccountDescription"),
      image: i6,
    },
  ], [t]); // Recreate only when translation changes

  // Get the active step based on the stored ID
  const activeStep = steps.find(step => step.id === activeStepId) || steps[0];

  return (
    <div id="steps" className="flex flex-col sm:flex-row items-start min-h-screen justify-between w-full bg-white">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 p-6 sm:ml-32 ">
        <h2 className="text-4xl font-bold mb-6">{t("howItWorksTitle")}</h2>
        <ul className="space-y-8">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`cursor-pointer transition-colors text-2xl mb-3 font-semibold ${
                activeStep.id === step.id ? "text-orange-500" : "text-gray-800"
              } hover:text-orange-500`}
              onMouseEnter={() => setActiveStepId(step.id)}
            >
              {step.id}. {step.title}
            </li>
          ))}
        </ul>
        <a href="/#contact">
        <button className="mt-6 px-4 py-2 border font-semibold border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all flex items-center">
          {t("requestDemo")}
          {isRTL ? (
            <FaArrowLeft className="text-lg ml-2 mt-1 mr-3" />
          ) : (
            <FaArrowRight className="text-lg ml-2 " />
          )}
        </button>
        </a>
      </div>

      {/* Right Side */}
      <div className={`relative w-full shadow-custom rounded-xl lg:w-2/5 mx-auto ${i18n.language === 'ar' ? 'lg:ml-32' : 'lg:mr-32'} mb-10`}>
      <div className={`relative bg-white rounded-xl overflow-hidden transition-all duration-300 ease-in-out
                  shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]
                  ${i18n.language === 'ar' ? 'text-right' : 'text-left'}
                  flex flex-col h-full`}>
    
    {/* Unified Content Block */}
    <div className="flex-1 flex flex-col">
      {/* Image Section */}
      <div className="relative flex-grow flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={activeStep.image}
          alt={activeStep.title}
          className="max-h-64 w-auto object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Text Content Section */}
      <div className={`p-6 ${i18n.language === 'ar' ? 'pr-8' : 'pl-8'} flex-1 flex flex-col`}>
        <div className="mb-4">
          {/* Accent line - direction changes in RTL */}
          <div className={`w-16 h-1 mb-4 rounded-full bg-gradient-to-r 
                          ${i18n.language === 'ar' ? 'from-orange-500 to-red-400 ml-auto' : 'bg-[#FF7404]'}`}></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{activeStep.title}</h3>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed flex-grow">{activeStep.description}</p>
      </div>
    </div>

    {/* Corner Accent - position changes in RTL */}
    <div className={`absolute top-0 ${i18n.language === 'ar' ? 'left-0' : 'left-0'} w-16 h-16 overflow-hidden`}>
      <div className={`absolute w-full h-full transform rotate-45 origin-bottom-left 
                      ${i18n.language === 'ar' ? '-translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF7404] to-[#FF7404]'
                       : '-translate-x-1/2 -translate-y-1/2 bg-[#FF7404]'}`}></div>
    </div>
  </div>
      </div>
    </div>
  );
};

export default HowItWorks;