import React from 'react';
import g1 from "./g1.jpeg"
import i1 from "./i1.png"
function AppPromotion() {
  return (
    <div id='markets' className="bg-lorange text-white mb-10 rounded-2xl   max-w-4xl mx-auto flex justify-between items-center px-6 md:px-20">
      {/* Left Side Content */}

      <div className="space-y-4">
        
      <img src={g1} alt="Saffary" className='h-20 ml-12 w-[200px]' />

        <button className="bg-white text-lorange text-lg font-bold ml-0 lg:ml-16 py-2 px-6 rounded-md shadow-md hover:bg-gray-100 transition">
          Place an order <span className="ml-2">&rarr;</span>
        </button>
        <span class="flex text-lg ml-0 lg:-ml-2 justify-center font-medium relative">
  <span class="absolute left-0 top-1/2 transform -translate-y-1/2 ml-10 lg:ml-12 w-10 lg:w-24 border-t border-white"></span>
  OR
  <span class="absolute  right-0 top-1/2 left-0 lg:left-56 ml-32 lg:-ml-10  transform -translate-y-1/2 w-10 lg:w-24 border-t border-white"></span>
</span>

        <div className="flex items-center space-x-4">
          <a href="#" className="block">
            <img
              src="https://www.ordercoro.com/assets/appstore.png"
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
         
          <a href="#" className="block">
            <img
              src="https://www.ordercoro.com/assets/playstore.png"
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>

      {/* Right Side Content */}
      <div>
        <img
          src={i1}
          alt="App preview on a phone"
          className="h-80 md:h-96 object-contain"
        />
      </div>
    </div>
  );
}

export default AppPromotion;
