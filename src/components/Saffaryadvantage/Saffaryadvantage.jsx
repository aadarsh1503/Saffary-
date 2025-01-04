import React from "react";

const Saffaryadvantage = () => {
  return (
    <div id="advantages" className="bg-white py-10 px-5 mb-16 lg:px-20 max-w-7xl mx-auto">
      <h1 className=' text-7xl text-white'>hiii</h1>
      <h2 className="text-center text-2xl  lg:text-4xl font-bold mb-10">
        Advantages of Saffary App
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3  items-center">
        {/* Left Items */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-end space-x-4">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-2">Find Nearby Merchant</h3>
              <p className="text-sm text-gray-600">
                We help you to connect with nearby merchants in a single click.
              </p>
            </div>
            <img
              src="https://www.ordercoro.com/assets/Advantage1_coro.png"
              alt="Find Nearby Merchant"
              className="w-20 h-20"
            />
          </div>
          <div className="flex items-center justify-end space-x-4">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-2">No Commission</h3>
              <p className="text-sm text-gray-600">
                We don’t charge any commission <br />from merchants, so you get the<br />
                same price mentioned on their<br /> menu card.
              </p>
            </div>
            <img
              src="https://www.ordercoro.com/assets/Advantage2_coro.png"
              alt="No Commission"
              className="w-20 h-20"
            />
          </div>
          <div className="flex items-center justify-end space-x-4">

          <div className="text-right">
  <h3 className="text-xl font-bold mb-2">Easy Access to Menu</h3>
  <p className="text-sm text-gray-600">
    No more calls asking “What’s on the menu?”. Access the
    complete menu & place your order with a single click, whether it's your favorite Shawarma or Machboos!
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
            src="https://www.ordercoro.com/assets/coro_web_banner.png"
            alt="Mobile App"
            className="w-1/2 lg:w-72"
          />
        </div>

        {/* Right Items */}
        <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-4">
            <img
              src="https://www.ordercoro.com/assets/Advantage4_coro.png"
              alt="Easy Access to Menu"
              className="w-20 h-20"
            />
                       <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Eat Now & Pay Later</h3>
              <p className="text-sm text-gray-600">
                We have also enabled digital khata<br /> in this app so one can clear
                their<br /> dues on a monthly basis.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src=" https://www.ordercoro.com/assets/Advantage5_coro.png"
              alt="Quick Delivery"
              className="w-20 h-20"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Quick Delivery</h3>
              <p className="text-sm text-gray-600">
                Since merchants are located nearby,<br /> you don’t have to wait more
                for<br /> delivery. Take-away, Dining &<br /> Delivery options are also
                available.
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
              <h3 className="text-xl font-bold mb-2">Explore</h3>
              <p className="text-sm text-gray-600">
                All important updates related to<br /> your business park or nearby
                area<br /> are published under the “Explore”<br /> section on a daily basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saffaryadvantage;
