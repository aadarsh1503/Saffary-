import React from "react";
import { useTranslation } from 'react-i18next';  // Import the translation hook
import i1 from "./i1.gif";
import i18n from "../../i18n";

const RealTimeStats = () => {
  const { t } = useTranslation();  // Use the translation hook

  return (
    <div className={`text-7xl ${i18n.language === 'ar' ? 'text-right relative lg:right-0 right-32 ' : ''} text-white`}> 
      <div id="glance" className="flex flex-col font-poppins mb-4 lg:mb-2 sm:flex-row items-center justify-between bg-white p-4 rounded-md w-full">
        
        {/* Left Side */}
        <div className="flex items-center mt-24 justify-center w-full sm:w-1/2">
          <img 
            src={i1} 
            alt={t('realTimeStats')}  // Alt text for image in translated language
            className="w-96 h-80 object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="bg-lorange text-white mt-20 p-12 rounded-lg sm:w-3/3 w-full">
          <h2 className="lg:text-3xl text-2xl font-bold mb-4">{t('realTimeStats')}</h2>  {/* Translated "Real Time Stats" */}
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="text-center">
              <p className="lg:text-4xl text-xl font-bold">52</p>
              <p className="text-lg font-bold">{t('merchantCount')}</p>  {/* Translated "Merchant Count" */}
            </div>
            <div className="text-center">
              <p className="lg:text-4xl text-xl font-bold">2841</p>
              <p className="text-lg font-bold">{t('customerCount')}</p>  {/* Translated "Customer Count" */}
            </div>
            <div className="text-center">
              <p className="lg:text-4xl text-xl font-bold">45450</p>
              <p className="text-lg font-bold">{t('orders')}</p>  {/* Translated "Orders" */}
            </div>
            <div className="text-center">
              <p className="lg:text-4xl text-xl font-bold">30</p>
              <p className="text-lg font-bold">{t('locality')}</p>  {/* Translated "Locality" */}
            </div>
            <div className="text-center">
              <p className="lg:text-4xl text-xl font-bold">339</p>
              <p className="text-lg font-bold">{t('accountUsers')}</p>  {/* Translated "Account Users" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeStats;
