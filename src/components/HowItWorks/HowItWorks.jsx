import React, { useState } from "react";
import i1 from "./i1.png"
import i2 from "./i2.png"
import i3 from "./i3.png"
import i4 from "./i4.png"
import i5 from "./i5.png"
import i6 from "./i6.png"
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Register",
      description: "Register yourself on the Saffary app and choose your location by enabling location permission or by choosing manual.",
      image: i1,
    },
    {
      id: 2,
      title: "Find Nearby Merchant",
      description: "If any merchant who is associated with us is present in that respective area, the same will be listed under 'Nearby Merchant' section. By clicking on the merchant icon, you can view their complete menu and start selecting items of your choice.",
      image: i2,
    },
    {
      id: 3,
      title: "Provide your delivery Address",
      description: "On the cart page, you will be asked to enter your delivery address. Verified addresses can place orders without validation.",
      image: i3,
    },
    {
      id: 4,
      title: "Order Details & Track Order",
      description: "All order details will be shown under the 'History' tab. You can also track your orders or seek help through the provided options.",
      image: i4,
    },
    {
      id: 5,
      title: "Explore Section",
      description: "Read about all important activities happening nearby in this tab.",
      image: i5,
    },
    {
      id: 6,
      title: "Digital Khata",
      description: "Under the Khata section, you can see month-wise pending dues from your merchants and track the status of payments.",
      image: i6,
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <div className="flex flex-col sm:flex-row items-start min-h-screen justify-between w-full bg-white">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 p-6 sm:ml-32">
        <h2 className="text-4xl font-bold mb-6">How does it work?!</h2>
        <ul className="space-y-8">
          {steps.map((step) => (
            <li
              key={step.id}
              className={`cursor-pointer transition-colors text-2xl mb-3 font-semibold ${
                activeStep.id === step.id ? "text-orange-500" : "text-gray-800"
              } hover:text-orange-500`}
              onMouseEnter={() => setActiveStep(step)}
            >
              {step.id}. {step.title}
            </li>
          ))}
        </ul>
        <button className="mt-6 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all flex items-center">
          Request a Demo <span className="ml-2">&#8594;</span>
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-2/5 flex flex-col items-center  justify-center bg-gray-100 rounded-lg shadow-md p-6">
        <img
          src={activeStep.image}
          alt={activeStep.title}
          className="w-96 h-96 -ml-44 -mt-16 object-contain transition-transform duration-300 ease-in-out"
        />
        <div className="-mt-10 -ml-56 bg-white p-4 rounded-lg shadow-md w-full">
          <h3 className="text-xl font-bold mb-2">{activeStep.title}</h3>
          <p className="text-gray-600 text-lg">{activeStep.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
