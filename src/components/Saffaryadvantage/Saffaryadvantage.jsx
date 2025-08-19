import React from 'react';
import i1 from './i1.png'; // Your central phone image
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

// --- Data for the advantages ---
// This makes the component much cleaner and easier to update.
const featuresData = [
  {
    id: 1,
    icon: "https://www.ordercoro.com/assets/Advantage1_coro.png",
    titleKey: 'find_nearby_merchant_title',
    descriptionKey: 'find_nearby_merchant_description',
    align: 'right', // Text will be on the right (for LTR)
  },
  {
    id: 2,
    icon: "https://www.ordercoro.com/assets/Advantage2_coro.png",
    titleKey: 'no_commission_title',
    descriptionKey: 'no_commission_description',
    align: 'right',
  },
  {
    id: 3,
    icon: "https://www.ordercoro.com/assets/many.svg",
    titleKey: 'easy_access_menu_title',
    descriptionKey: 'easy_access_menu_description',
    align: 'right',
  },
  {
    id: 4,
    icon: "https://www.ordercoro.com/assets/Advantage4_coro.png",
    titleKey: 'eat_now_pay_later_title',
    descriptionKey: 'eat_now_pay_later_description',
    align: 'left', // Text will be on the left (for LTR)
  },
  {
    id: 5,
    icon: "https://www.ordercoro.com/assets/Advantage5_coro.png",
    titleKey: 'quick_delivery_title',
    descriptionKey: 'quick_delivery_description',
    align: 'left',
  },
  {
    id: 6,
    icon: "https://www.ordercoro.com/assets/BeUpToDate.svg",
    titleKey: 'explore_title',
    descriptionKey: 'explore_description',
    align: 'left',
  },
];

// --- A reusable Feature Card component ---
// This encapsulates the style and logic for each advantage item.
const FeatureCard = ({ icon, title, description, align, isRTL }) => {
  // Determine layout based on alignment and language direction
  const isTextRight = align === 'right';
  const flexDirection = isRTL
    ? (isTextRight ? 'flex-row' : 'flex-row-reverse')
    : (isTextRight ? 'flex-row-reverse' : 'flex-row');

  const textAlign = isRTL ? 'text-right' : 'text-left';

  return (
    <div
      className={`
        group relative flex items-center gap-5 p-5
        bg-white/60 backdrop-blur-xl border border-white/20
        rounded-3xl shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-white/80 hover:shadow-2xl hover:scale-105
        ${flexDirection}
      `}
    >
      {/* Icon with a styled background */}
      <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-white/70 rounded-2xl shadow-md">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>

      {/* Text Content */}
      <div className={textAlign}>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-md text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};


const Saffaryadvantage = () => {
  const { t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const leftFeatures = featuresData.filter(f => f.align === 'right');
  const rightFeatures = featuresData.filter(f => f.align === 'left');

  return (
    <div id="advantages" className="relative bg-slate-50 overflow-hidden py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t('advantages_title')}
          </h2>
         
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Features Column */}
          <div className="flex flex-col gap-8">
            {leftFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={t(feature.titleKey)}
                description={t(feature.descriptionKey)}
                align={feature.align}
                isRTL={isRTL}
              />
            ))}
          </div>

          {/* Center Phone Image with Glow */}
          <div className="relative flex justify-center order-first lg:order-none px-10">
            {/* The Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-amber-400 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
            
            <img
              src={i1}
              alt="Mobile App"
              className="relative z-10 w-64 lg:w-80 transform transition-transform duration-500 hover:scale-105 drop-shadow-2xl"
            />
          </div>

          {/* Right Features Column */}
          <div className="flex flex-col gap-8">
            {rightFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={t(feature.titleKey)}
                description={t(feature.descriptionKey)}
                align={feature.align}
                isRTL={isRTL}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Saffaryadvantage;