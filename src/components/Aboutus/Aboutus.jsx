import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import g1 from "./g1.png"; // Your image

const Aboutus = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <section id='about' className="flex flex-col lg:flex-row items-center mt-2 max-w-7xl mx-auto justify-between py-10 lg:py-20 px-6 ">
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <h1 className=' text-5xl text-white'>{t('hello')}</h1> {/* Dynamic translation */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('aboutSaffary')}</h1> {/* Dynamic translation */}
        <p className="text-lg text-gray-700 mb-4">{t('saffaryDescription')}</p> {/* Dynamic translation */}
        <p className="text-lg text-gray-700 mb-4">{t('saffaryDetails')}</p> {/* Dynamic translation */}
        <p className="text-lg text-gray-700 mb-4">{t('conceptValidation')}</p> {/* Dynamic translation */}
      </div>

      <div className="w-full lg:w-1/2">
        <img 
          src={g1} 
          alt={t('aboutSaffary')} // Dynamic alt text for accessibility
          className="lg:w-full w-[500px] h-[200px] lg:h-auto rounded-lg "
        />
      </div>
    </section>
  );
};

export default Aboutus;
