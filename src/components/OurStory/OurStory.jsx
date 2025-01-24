import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const OurStory = () => {
  const data = [
    {
      date: "Dec 2023",
      content:
        "In the year 2019 our founder Vineet Singh Kashyap met with an accident with our local chaiwala vendor as he was not able to deliver tea in our office on time. On the same day Vineet asked him about his concerns and decided to build a tech based platform for him so that chaiwala can manage his deliveries smoothly.",
    },
    {
      date: "Mar 2024",
      content:
        "As soon as Vineet started with the road map COVID-19 hit the global market and almost all offices got closed. But the problem of chaiwala was so real that in COVID times only Vineet started working on its planning.",
    },
    {
      date: "May 2024",
      content:
        "Vineet wanted to keep a simple but easy to recall brand name and one day he came across a very trending word ‘CORONA’ in COVID times and from that he planned to name this product as Saffary and gave tagline as Saffary se order Saffary na!’.",
    },
    {
      date: "Sep 2024",
      content:
        "When Vineet was working on this product he realised that this is a common problem for everyone who is going to the office on a daily basis and if they want to order anything along with tea/coffee then they don’t have any option by calling local merchants and asking to deliver product in their office.",
    },
    {
      date: "Jan 2025",
      content:
        "Considering all these factors we decided to focus on instant food delivery along with tea-coffee.",
    },
    {
      date: "Jan 2025",
      content:
        "In the month of Dec 2021 most of the offices got started and we were also ready with MVP version of Mobile App so started approaching nearby merchants to onboard them on our platform. But unfortunately considering the new concept no merchant has shown any interest in our product and we were not able to onboard any merchant by mid of Feb 2022.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= data.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 3 : prevIndex - 1
    );
  };

  const visibleCards = data.slice(currentIndex, currentIndex + 3);

  return (
    <div id="story" className="bg-orange-500 text-white py-10 px-4">
      <h1 className="text-7xl text-orange-500">hiii</h1>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="flex flex-col ml-0 lg:-ml-20 sm:flex-row items-center justify-between">
          {/* Previous Button (Hidden on Mobile) */}
          <div className="hidden sm:block">
            <button
              className="text-2xl p-2 bg-white text-orange-500 rounded-full hover:bg-orange-400 hover:text-white transition"
              onClick={handlePrev}
            >
              <AiOutlineArrowLeft />
            </button>
          </div>

          {/* Story Cards */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mx-4">
            {/* Show all cards on mobile */}
            {(window.innerWidth <= 640 ? data : visibleCards).map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white text-orange-500 rounded-lg  shadow-lg lg:w-[350px] lg:h-[300px] lg:p-4 p-3 sm:w-[450px] h-[400px]"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-lorange text-white font-semibold py-1 px-3 rounded-full text-sm">
                      • {item.date}
                    </span>
                  </div>
                  <p className="text-gray-800">{item.content}</p>
                </div>
              )
            )}
          </div>

          {/* Next Button (Hidden on Mobile) */}
          <div className="hidden sm:block">
            <button
              className="text-2xl p-2 bg-white text-orange-500 rounded-full hover:bg-orange-400 hover:text-white transition"
              onClick={handleNext}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
