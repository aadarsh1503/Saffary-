import React from 'react';
import g1 from "./g1.png"
const Aboutus = () => {
  return (
    <section id='about' className="flex  items-center mt-2 max-w-7xl mx-auto justify-between py-20 px-6 ">
      
      <div className="w-full lg:w-1/2">
      <h1 className=' text-5xl text-white'>hiii</h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Saffary</h1>
        <p className="text-lg text-gray-700 mb-4">
        Saffary is one of Bahrain's leading FoodTech Platform for Hyperlocal Market.
        </p>
        <p className="text-lg text-gray-700 mb-4">
        Saffary is an innovative solution for anyone who wants to have coffee, snacks  & instant bites/meals from nearby merchants. Through Saffary App anyone can access a list of items provided by nearby merchants who have partnered with Saffary and can easily place an order with 3 simple & easy  steps.


        </p>
        <p className="text-lg text-gray-700 mb-4">
          
Our concept has been validated, and we are already generating significant traction at our pilot site, which is a capital governorate Manama . Our aim is to expand this model to all such places in Bahrain at kick start.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <img 
          src={g1} // Replace with your image URL
          alt="CORO Image"
          className="w-full h-auto rounded-lg "
        />
      </div>
    </section>
  );
};

export default Aboutus;
