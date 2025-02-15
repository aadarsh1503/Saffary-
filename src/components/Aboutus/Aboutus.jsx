import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import g1 from "./g1.png"; // Your image
import i18n from '../../i18n';

const Aboutus = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section id='about' className={`flex flex-col lg:flex-row ${i18n.language === 'ar' ? 'text-right max-w-7xl  ' : ''} items-center mt-2 max-w-7xl mx-auto justify-between py-10 lg:py-20 px-6 `}>
      <div className={`w-full lg:w-1/2 mb-6 ${i18n.language === 'ar' ? 'text-right lg:w-1/2 w-2/2 lg:mr-0 mr-[250px]   ' : ''} lg:mb-0`}>
        <h1 className=' text-5xl text-white'>{t('hello')}</h1> 
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('aboutSaffary')}</h1>
        <p className="text-lg text-gray-700 mb-4">{t('saffaryDescription')}</p>
        <p className="text-lg text-gray-700 mb-4">{t('saffaryDetails')}</p> 
        <p className="text-lg text-gray-700 mb-4">{t('conceptValidation')}</p> 
      </div>

      <div className="w-full lg:w-1/2">
        <img 
          src={g1} 
          alt={t('aboutSaffary')} 
          className={`lg:w-full w-[500px] h-[200px] ${i18n.language === 'ar' ? 'text-right lg:mr-0 mr-32  ' : ''} lg:h-auto rounded-lg `}
        />
      </div>
    </section>
  );
};

export default Aboutus;
