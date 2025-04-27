import React, { useEffect,useState } from "react";
import { useTranslation } from 'react-i18next';
import i33 from "./i33.jpg";
import i18n from "../../i18n";
import i4 from "./i4.png"
const OurMarkets = () => {
  const { t, i18n } = useTranslation();
  
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <section id="markets" className={`bg-white   ${i18n.language === 'ar' ? 'text-right relative lg:right-0  ' : ''} mt-20`}>
      <div className="container mx-auto px-6 md:px-12 ">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t('ourMarkets')}
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          {t('marketsDescription')}
        </p>

        {/* Central Image */}
        <div className="flex justify-center">
          <img
            src={isRTL ? i4 : i33}
            alt={t('ourMarkets')}
            className="w-[300px] lg:w-[700px] max-w-2xl h-[300px] lg:h-[700px] rounded-lg"
          />

        </div>
      </div>
    </section>
  );
};

export default OurMarkets;
