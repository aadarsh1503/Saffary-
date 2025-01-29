import React, { useState ,useEffect} from "react";
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
  
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const steps = [
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
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <div id="steps" className="flex flex-col sm:flex-row items-start min-h-screen justify-between w-full bg-white">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 p-6 sm:ml-32 mr-32">
        <h2 className="text-4xl font-bold mb-6">{t("howItWorksTitle")}</h2>
        <ul className="space-y-8">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`cursor-pointer transition-colors text-2xl mb-3 font-semibold ${
                activeStep.id === step.id ? "text-orange-500" : "text-gray-800"
              } hover:text-orange-500`}
              onMouseEnter={() => setActiveStep(step)}
            >
              {step.id}. {step.title}
            </li>
          ))}
        </ul>
        <button className="mt-6 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all flex items-center">
      {t("requestDemo")}
      {isRTL ? (
        <FaArrowLeft className="text-lg ml-2 mt-1 mr-3" />
      ) : (
        <FaArrowRight className="text-lg ml-2 " />
      )}
    </button>
      </div>

      {/* Right Side */}
      <div className="lg:w-2/5 w-full lg:mr-32 flex flex-col lg:ml-32 items-center mt-8 justify-center rounded-lg p-6">
        <img
          src={activeStep.image}
          alt={activeStep.title}
          className="lg:w-96 lg:h-96 -ml-3 h-[200px] lg:-ml-44 -mt-32 lg:-mt-16 object-contain transition-transform duration-300 ease-in-out"
        />
        <div className={`-mt-10 lg:-ml-56 bg-white p-4 rounded-lg shadow-md w-full ${isRTL ? "text-right" : "text-left"}`}>
          <h3 className="text-xl font-bold mb-2">{activeStep.title}</h3>
          <p className="text-gray-600 text-lg">{activeStep.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
