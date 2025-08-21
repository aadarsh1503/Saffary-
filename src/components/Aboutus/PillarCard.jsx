// src/components/Aboutus/PillarCard.js

import React from 'react';

const PillarCard = ({ icon, title, text }) => {
  return (
    // STEP 3: The card itself uses 'rtl:' variants.
    // It will automatically flip its direction based on the 'dir' attribute from its great-grandparent (the <section> tag).
    <div className="flex items-start gap-4 rtl:flex-row-reverse">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-lg">
        {icon}
      </div>
      <div className="text-start">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default PillarCard;