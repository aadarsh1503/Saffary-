import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const OurStory = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === "ar");

  useEffect(() => {
    setIsRTL(i18n.language === "ar");
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const data = [
    { date: "Dec 2023", content: t("storyContent1") },
    { date: "Mar 2024", content: t("storyContent2") },
    { date: "May 2024", content: t("storyContent3") },
    { date: "Sep 2024", content: t("storyContent4") },
    { date: "Jan 2025", content: t("storyContent5") },
    { date: "Jan 2025", content: t("storyContent6") },
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
    <div id="story" className={`bg-orange-500  ${i18n.language === 'ar' ? 'text-right relative lg:right-0  ' : ''} text-white py-10 px-4`}>
      <h1 className="text-7xl text-orange-500">{t("hi")}</h1>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t("storyTitle")}</h2>
        <div className="flex flex-col -ml-5 lg:-ml-20 mr-0 lg:-mr-20 sm:flex-row items-center justify-between">
          {/* Previous Button (Hidden on Mobile) */}
          <div className="hidden sm:block">
            <button
              className="text-2xl p-2 bg-white text-orange-500 rounded-full hover:bg-orange-400 hover:text-white transition"
              onClick={handlePrev}
            >
              {isRTL ? (
                <AiOutlineArrowRight /> // Show right arrow if RTL
              ) : (
                <AiOutlineArrowLeft /> // Show left arrow if LTR
              )}
            </button>
          </div>

          {/* Story Cards */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mx-4">
            {/* Show all cards on mobile */}
            {(window.innerWidth <= 640 ? data : visibleCards).map((item, index) => (
              <div
                key={index}
                className="bg-white text-orange-500 rounded-lg ml-4 shadow-lg lg:w-[350px] lg:h-[300px] lg:p-4 p-3 sm:w-full h-[400px]"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-lorange text-white font-semibold py-1 px-3 rounded-full text-sm">
                    • {item.date}
                  </span>
                </div>
                <p className="text-gray-800">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Next Button (Hidden on Mobile) */}
          <div className="hidden sm:block">
            <button
              className="text-2xl p-2 bg-white text-orange-500 rounded-full hover:bg-orange-400 hover:text-white transition"
              onClick={handleNext}
            >
              {isRTL ? (
                <AiOutlineArrowLeft /> // Show left arrow if RTL
              ) : (
                <AiOutlineArrowRight /> // Show right arrow if LTR
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
