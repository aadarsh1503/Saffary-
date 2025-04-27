import React from "react";
import i1 from "./i1.png";
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

const Saffaryadvantage = () => {
  const { t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div id="advantages" className={`bg-white ${isRTL ? 'text-right' : 'text-left'} py-10 px-5 mb-16 lg:px-20 max-w-7xl mx-auto`}>
      <h1 className='text-7xl text-white'>{t('hiii')}</h1>
      <h2 className={`text-center text-2xl lg:text-4xl font-bold mb-10`}>
        {t('advantages_title')}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
        {/* Left Items - Special text alignment */}
        <div className="flex flex-col space-y-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} space-x-4 space-x-reverse`}>
              {/* Notice the reversed text alignment here */}
              <div className={isRTL ? 'text-left' : 'text-right'}>
                <h3 className="text-xl font-bold mb-2">
                  {t(item === 1 ? 'find_nearby_merchant_title' : 
                     item === 2 ? 'no_commission_title' : 
                     'easy_access_menu_title')}
                </h3>
                <p className="text-md text-gray-600">
                  {t(item === 1 ? 'find_nearby_merchant_description' : 
                     item === 2 ? 'no_commission_description' : 
                     'easy_access_menu_description')}
                </p>
              </div>
              <img
                src={item === 1 ? "https://www.ordercoro.com/assets/Advantage1_coro.png" : 
                      item === 2 ? "https://www.ordercoro.com/assets/Advantage2_coro.png" : 
                      "https://www.ordercoro.com/assets/many.svg"}
                alt={item === 1 ? "Find Nearby Merchant" : 
                     item === 2 ? "No Commission" : 
                     "Eat Now & Pay Later"}
                className="w-20 h-20"
              />
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={i1}
            alt="Mobile App"
            className="w-1/2 lg:w-72"
          />
        </div>

        {/* Right Items - Normal text alignment */}
        <div className="flex flex-col space-y-8">
          {[4, 5, 6].map((item) => (
            <div key={item} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} space-x-4 space-x-reverse`}>
              <img
                src={item === 4 ? "https://www.ordercoro.com/assets/Advantage4_coro.png" : 
                      item === 5 ? "https://www.ordercoro.com/assets/Advantage5_coro.png" : 
                      "https://www.ordercoro.com/assets/BeUpToDate.svg"}
                alt={item === 4 ? "Easy Access to Menu" : 
                     item === 5 ? "Quick Delivery" : 
                     "Explore"}
                className="w-20 h-20"
              />
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h3 className="text-xl font-bold mb-2">
                  {t(item === 4 ? 'eat_now_pay_later_title' : 
                     item === 5 ? 'quick_delivery_title' : 
                     'explore_title')}
                </h3>
                <p className="text-md text-gray-600">
                  {t(item === 4 ? 'eat_now_pay_later_description' : 
                     item === 5 ? 'quick_delivery_description' : 
                     'explore_description')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saffaryadvantage;