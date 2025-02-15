import React from "react";
import { useTranslation } from 'react-i18next';
import i1 from "./i1.png";
import i18n from "../../i18n";

const OurMarkets = () => {
  const { t } = useTranslation();  // Use the translation hook

  return (
    <section id="markets" className={`bg-white   ${i18n.language === 'ar' ? 'text-right relative lg:right-0 right-32 ' : ''} mt-20`}>
      <div className="container mx-auto px-6 md:px-12 text-left">
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
            src={i1}
            alt={t('ourMarkets')}
            className="w-[300px] lg:w-[500px] max-w-2xl h-[300px] lg:h-[500px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMarkets;
