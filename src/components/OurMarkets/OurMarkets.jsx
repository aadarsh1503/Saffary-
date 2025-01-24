import React from "react";
import i1 from "./i1.png"
const OurMarkets = () => {
  return (
    <section id="markets" className="bg-white  ">
      <div className="container mx-auto px-6 md:px-12 text-left">
      <h1 className=' text-7xl text-white'>hiii</h1>
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        <h1 className=' text-7xl text-white'>hiii</h1>
          Our Markets
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Saffary has rapidly grown to become a leading online FoodTech platform
          with operations in various cities in Bahrain.
        </p>

        {/* Central Image */}
        <div className="flex justify-center">
          <img
            src={i1}
            alt="Our Markets Map"
            className="w-[200px] lg:w-[500px] max-w-2xl h-[200px] lg:h-[500px] rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default OurMarkets;
