import React from 'react';
import { useTranslation } from 'react-i18next';
import g1 from "./g1.png"; // Your image
import i18n from '../../i18n';
// CORRECTED ICON IMPORT
import { FiTrendingUp, FiEye } from "react-icons/fi"; // Modern, clean icons

// A reusable component for the feature points
const PillarCard = ({ icon, title, text, isRTL }) => {
  return (
    <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-lg">
        {icon}
      </div>
      <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};


const Aboutus = () => {
  const { t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // CORRECTED PILLARS ARRAY
  const pillars = [
    {
      icon: <FiTrendingUp size={24} />, // Corrected icon for Mission
      titleKey: 'ourMission',
      textKey: 'saffaryDetails'
    },
    {
      icon: <FiEye size={24} />, // Corrected icon for Vision
      titleKey: 'ourVision',
      textKey: 'conceptValidation'
    }
  ];

  return (
    <section id='about' className="bg-slate-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t('aboutSaffary')}
          </h2>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className={`flex flex-col gap-8 ${isRTL ? 'lg:order-last' : ''}`}>
            <p className={`text-xl text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('saffaryDescription')}
            </p>
            <div className="space-y-8 border-t border-slate-200 pt-8">
              {pillars.map(pillar => (
                <PillarCard
                  key={pillar.titleKey}
                  icon={pillar.icon}
                  title={t(pillar.titleKey)}
                  text={t(pillar.textKey)}
                  isRTL={isRTL}
                />
              ))}
            </div>
          </div>

          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-200/80 [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]"></div>
            <div className="absolute inset-1.5 bg-white [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]
                          p-6 bg-[linear-gradient(to_right,rgba(203,213,225,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,213,225,0.2)_1px,transparent_1px)] 
                          bg-[size:2rem_2rem]">
              <img 
                src={g1} 
                alt={t('aboutSaffary')}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Aboutus;