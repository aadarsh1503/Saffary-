import React from "react";
import i1 from "./i1.png";
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

const Saffaryadvantage = () => {
  const { t } = useTranslation();

  return (
    <div id="advantages" className={`bg-white  ${i18n.language === 'ar' ? 'text-right relative lg:right-0 right-32 ' : ''} py-10 px-5 mb-16 lg:px-20 max-w-7xl mx-auto`}>
      <h1 className='text-7xl text-white'>{t('hiii')}</h1>
      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-10">
        {t('advantages_title')}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
        {/* Left Items */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center mr-10 justify-end space-x-4">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-2">{t('find_nearby_merchant_title')}</h3>
              <p className="text-md text-gray-600">
                {t('find_nearby_merchant_description')}
              </p>
            </div>
            <img
              src="https://www.ordercoro.com/assets/Advantage1_coro.png"
              alt="Find Nearby Merchant"
              className="w-20 h-20"
            />
          </div>
          <div className="flex items-center mr-8 ml-8 justify-end space-x-4">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-2">{t('no_commission_title')}</h3>
              <p className="text-md text-gray-600">
                {t('no_commission_description')}
              </p>
            </div>
            <img
              src="https://www.ordercoro.com/assets/Advantage2_coro.png"
              alt="No Commission"
              className="w-20 h-20"
            />
          </div>
          <div className="flex items-center justify-end space-x-4 mr-8">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-2">{t('easy_access_menu_title')}</h3>
              <p className="text-md text-gray-600">
                {t('easy_access_menu_description')}
              </p>
            </div>
            <img
              src="https://www.ordercoro.com/assets/many.svg"
              alt="Eat Now & Pay Later"
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={i1}
            alt="Mobile App"
            className="w-1/2 lg:w-72"
          />
        </div>

        {/* Right Items */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center mr-2 space-x-4">
            <img
              src="https://www.ordercoro.com/assets/Advantage4_coro.png"
              alt="Easy Access to Menu"
              className="w-20 h-20"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">{t('eat_now_pay_later_title')}</h3>
              <p className="text-md text-gray-600">
                {t('eat_now_pay_later_description')}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://www.ordercoro.com/assets/Advantage5_coro.png"
              alt="Quick Delivery"
              className="w-20 h-20"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">{t('quick_delivery_title')}</h3>
              <p className="text-md text-gray-600">
                {t('quick_delivery_description')}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="https://www.ordercoro.com/assets/BeUpToDate.svg"
              alt="Explore"
              className="w-20 h-20"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">{t('explore_title')}</h3>
              <p className="text-md text-gray-600">
                {t('explore_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saffaryadvantage;
