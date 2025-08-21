// src/components/Aboutus/ImageBlock.js

import React from 'react';

const ImageBlock = ({ imageSrc, altText }) => {
  return (
    <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-200/80 [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]"></div>
      <div className="absolute inset-1.5 bg-white [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]
                    p-6 bg-[linear-gradient(to_right,rgba(203,213,225,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,213,225,0.2)_1px,transparent_1px)] 
                    bg-[size:2rem_2rem]">
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageBlock;