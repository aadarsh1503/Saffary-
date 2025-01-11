import React, { useEffect, useState } from "react";
import i1 from "./i1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Aboutus from "../Aboutus/Aboutus";
import RealTimeStats from "../RealTimeStats/RealTimeStats";
import Saffaryadvantage from "../Saffaryadvantage/Saffaryadvantage";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurStory from "../OurStory/OurStory";
import OurMarkets from "../OurMarkets/OurMarkets";
import AppPromotion from "../AppPromotion/AppPromotion";

const Hero = () => {
  const headings = [
    "Craving Bahraini Machboos but no time to cook?",
    "Want to enjoy a fresh Shawarma but can't go out?",
    "Need groceries delivered to your doorstep in Bahrain?",
    "Thinking of having homemade Bahraini snacks?",
    "Craving fresh dates or fruits without stepping out?"
  ];
  

  const [currentHeading, setCurrentHeading] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const fullText = headings[currentHeading];
      if (!isDeleting) {
        // Typing effect
        setDisplayedText((prev) => fullText.substring(0, prev.length + 1));

        if (displayedText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      } else {
        // Deleting effect
        setDisplayedText((prev) => fullText.substring(0, prev.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentHeading((prev) => (prev + 1) % headings.length);
        }
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? 50 : 100); // Speed adjustment
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentHeading]);

  return (
    <>
    <div className="flex flex-col lg:flex-row max-w-5xl mx-auto justify-between mt-20 items-center px-6 py-10 ">
      {/* Left Side */}
      <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl font-bold mb-10 min-h-[5rem]">
  {displayedText}
  <span className="text-orange-500">|</span> {/* Cursor effect */}
</h1>
        
        <p className="text-gray-600 mb-6 text-xl">
          Saffary is one of Bahrain's leading FoodTech Platforms for the Hyperlocal Market.
        </p>
        <button className="bg-white text-lorange text-lg outline-lorange  outline font-semibold px-6 py-2 rounded-lg mb-4 shadow-md hover:bg-lorange hover:text-white">
          Place an order <span className="text-lg">&rarr;</span>
        </button>
        <p className="text-gray-500 font-medium mb-4">Download App from</p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <button className="flex items-center gap-2 bg-lorange text-white px-6 py-3 rounded-lg text-xl font-semibold shadow hover:bg-gray-300">
          <FontAwesomeIcon icon={faGooglePlay} className="w-5 h-5 mt-1" /> Google Play
          </button>
          <button className="flex items-center gap-2 bg-lorange text-white px-6 py-3 text-xl rounded-lg font-semibold shadow hover:bg-gray-300">
          <FontAwesomeIcon icon={faAppStore} className="w-5 h-5 mt-1" /> App Store
          </button>
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="lg:w-2/2 hidden lg:block">
        <img
          src={i1}
          alt="App Preview"
          className="rounded-lg "
        />
      </div>
    </div>
    <Aboutus />
        <RealTimeStats />
        <Saffaryadvantage />
<HowItWorks />
<OurStory />
<OurMarkets />
<AppPromotion />
    </>
  );
};

export default Hero;
