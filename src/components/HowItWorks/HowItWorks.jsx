import React, { useState, useEffect, useMemo } from "react";
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i6.png";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import the custom CSS file directly into the component
import './HowItWorks.css';

const HowItWorks = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [activeStepId, setActiveStepId] = useState(1);

  const steps = useMemo(() => [
    { id: 1, titleKey: "register", descriptionKey: "registerDescription", image: i1 },
    { id: 2, titleKey: "findNearbyMerchant", descriptionKey: "findNearbyMerchantDescription", image: i2 },
    { id: 3, titleKey: "provideDeliveryAddress", descriptionKey: "provideDeliveryAddressDescription", image: i3 },
    { id: 4, titleKey: "orderDetailsTrack", descriptionKey: "orderDetailsTrackDescription", image: i4 },
    { id: 5, titleKey: "exploreSection", descriptionKey: "exploreSectionDescription", image: i5 },
    { id: 6, titleKey: "digitalAccount", descriptionKey: "digitalAccountDescription", image: i6 },
  ], []);

  const activeStep = steps.find(step => step.id === activeStepId) || steps[0];

  useEffect(() => {
    steps.forEach(step => { (new Image()).src = step.image; });
  }, [steps]);

  return (
    <div 
      id="steps" 
      className="relative bg-slate-50 py-20 lg:py-24 overflow-hidden
                 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t("howItWorksTitle")}
          </h2>
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: The "Holo-Stepper" */}
          <div className="flex flex-col">
            <ul className="relative">
              <div className="absolute top-5 bottom-5 w-0.5 bg-slate-200 left-6 rtl:left-auto rtl:right-6"></div>
              
              {steps.map((step) => (
                <li
                  key={step.id}
                  className="relative flex items-center space-x-6 rtl:space-x-reverse mb-8 cursor-pointer group"
                  onMouseEnter={() => setActiveStepId(step.id)}
                >
                  <div className="z-10 flex-shrink-0">
                    <div className={`w-12 h-14 flex items-center justify-center bg-slate-50
                                     transition-all duration-300 ease-in-out
                                     [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]
                                     ${activeStepId === step.id 
                                       ? 'bg-gradient-to-br from-orange-500 to-amber-400' 
                                       : 'bg-slate-300 group-hover:bg-slate-400'}`
                    }>
                       <div className={`w-[44px] h-[52px] flex items-center justify-center bg-slate-50
                                      [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]`}>
                          <span className={`text-xl font-bold transition-colors duration-300
                                          ${activeStepId === step.id ? 'text-orange-500' : 'text-slate-600 group-hover:text-slate-800'}`
                          }>
                            {step.id}
                          </span>
                       </div>
                    </div>
                  </div>

                  <div className={`transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'} ${activeStepId === step.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    <h3 className="text-xl font-bold text-gray-800">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
             <a href="/#contact" className={`mt-8 ${isRTL ? '' : ''}`}>
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-orange-500 transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white flex items-center justify-center">
                  {t("requestDemo")}
                  {isRTL ? (
                    <FaArrowLeft className="ml-2 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  ) : (
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </span>
              </button>
            </a>
          </div>

          {/* Right Side: The "Display Panel" */}
          <div className="relative min-h-[550px]">
            <div className="absolute inset-0 bg-slate-200/80 [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]"></div>
            
            <div className="absolute inset-1.5 bg-white [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]
                          flex flex-col overflow-hidden">
                
              <div className="relative h-72 flex-shrink-0 bg-slate-100 p-6 
                            bg-[linear-gradient(to_right,rgba(203,213,225,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,213,225,0.2)_1px,transparent_1px)] 
                            bg-[size:2rem_2rem]">
                {steps.map(step => (
                  <img
                    key={step.id}
                    src={step.image}
                    alt={t(step.titleKey)}
                    className={`absolute inset-0 w-full h-full object-contain p-8 transition-all duration-500 ease-in-out
                                ${activeStep.id === step.id 
                                  ? 'opacity-100 blur-0 scale-100' 
                                  : 'opacity-0 blur-md scale-95'}`
                    }
                  />
                ))}
              </div>
              
              <div className="p-8 flex-grow flex flex-col" key={activeStep.id}>
                {/* THIS DIV NOW USES THE CLASS FROM OUR CUSTOM CSS FILE */}
                <div className="animate-digital-dissolve-in">
                  <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="font-mono text-sm text-orange-600 bg-orange-100 border border-orange-200 px-3 py-1 rounded">
                      {t('step', { count: activeStep.id }).toUpperCase()}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(activeStep.titleKey)}
                  </h3>
                  <p className={`text-lg text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(activeStep.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;