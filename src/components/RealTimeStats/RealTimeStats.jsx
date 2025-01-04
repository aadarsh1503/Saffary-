import React from "react";
import i1 from "./i1.gif"
const RealTimeStats = () => {
  return (
    <div className="text-7xl text white "> 
    <div id="glance" className="flex flex-col  font-poppins mb-4 lg:mb-2 sm:flex-row items-center justify-between bg-white p-4 rounded-md  w-full">
      {/* Left Side */}
       
      <div className="flex items-center mt-24 justify-center w-full sm:w-1/2">
      
  <img 
    src={i1} 
    alt="Real Time Stats"
    
    className="w-56 h-56 object-contain"
  />
  
</div>


      {/* Right Side */}
   
      <div className="bg-lorange text-white mt-20 p-12 rounded-lg sm:w-3/3 w-full">
      
      
        <h2 className="lg:text-3xl text-2xl font-bold mb-4">Real Time Stats</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="text-center">
            <p className="lg:text-4xl text-xl font-bold">52</p>
            <p className="text-lg font-bold">Merchant Count</p>
          </div>
          <div className="text-center">
            <p className="lg:text-4xl text-xl font-bold">2841</p>
            <p className="text-lg font-bold">Customer Count</p>
          </div>
          <div className="text-center">
            <p className="lg:text-4xl text-xl font-bold">45450</p>
            <p className="text-lg font-bold">Orders</p>
          </div>
          <div className="text-center">
            <p className="lg:text-4xl text-xl font-bold">30</p>
            <p className="text-lg font-bold">Locality</p>
          </div>
          <div className="text-center">
            <p className="lg:text-4xl text-xl font-bold">339</p>
            <p className="text-lg font-bold">Khata Users</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RealTimeStats;
