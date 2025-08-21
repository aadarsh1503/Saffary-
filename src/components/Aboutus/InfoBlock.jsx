// src/components/Aboutus/InfoBlock.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import PillarCard from './PillarCard';

const InfoBlock = ({ pillars }) => {
  const { t } = useTranslation();

  return (
    // STEP 2: The Magic Bullet for Alignment.
    // 'items-start' automatically aligns children to the LEFT in LTR 
    // and to the RIGHT in RTL, because its parent has the 'dir' attribute.
    <div className="flex flex-col gap-8 items-start">
      
      {/* The main description paragraph */}
      {/* 'text-start' does the same for text alignment: left in LTR, right in RTL */}
      <p className="text-xl text-gray-600 leading-relaxed text-start">
        {t('saffaryDescription')}
      </p>

      {/* Container for the Mission and Vision cards */}
      <div className="w-full space-y-8 border-t border-slate-200 pt-8">
        {pillars.map(pillar => (
          <PillarCard
            key={pillar.titleKey}
            icon={pillar.icon}
            title={t(pillar.titleKey)}
            text={t(pillar.textKey)}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoBlock;