import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt } from "react-icons/fa";

// Import the new custom CSS file
import './OurStory.css';

const OurStory = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const storyData = useMemo(() => [
    { id: 0, date: `${t("february")} 2020`, contentKey: "storyContent1" },
    { id: 1, date: `${t("march")} 2020`, contentKey: "storyContent2" },
    { id: 2, date: `${t("december")} 2020`, contentKey: "storyContent3" },
    { id: 3, date: `${t("march")} 2021`, contentKey: "storyContent4" },
    { id: 4, date: `${t("july")} 2021`, contentKey: "storyContent5" },
    { id: 5, date: `${t("december")} 2021`, contentKey: "storyContent6" },
  ], [t]);
  

  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef(new Map());

  // Set up the Intersection Observer to track which cards are on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id, 10);
            setVisibleItems((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the card is visible
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [storyData]);

  // Determine the highest visible index for the progress bar
  const maxVisibleIndex = visibleItems.size > 0 ? Math.max(...Array.from(visibleItems)) : -1;

  return (
    <div id="story" className="bg-slate-50 py-20 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t("storyTitle")}
          </h2>
        
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-2xl lg:max-w-4xl mx-auto">
          {/* The Central Spine */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-full w-1 bg-gradient-to-b from-orange-400 to-amber-500"></div>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-2 h-full w-1 bg-gradient-to-b from-orange-400 to-amber-500 transition-all duration-500 ease-out"
            style={{ height: `calc(${(maxVisibleIndex / (storyData.length - 1)) * 100}% - 1rem)` }}
          ></div>

          {/* Timeline Items */}
          <ul className="space-y-4">
            {storyData.map((item, index) => {
              const isVisible = visibleItems.has(item.id);
              const isEven = index % 2 === 0;
              const translateX = isEven ? '-20px' : '20px';

              return (
                <li
                  key={item.id}
                  ref={(el) => itemRefs.current.set(item.id, el)}
                  data-id={item.id}
                  className={`flex items-center w-full ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                  style={{ '--slide-in-translate-x': translateX }}
                >
                  <div className={`w-full flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full lg:w-[calc(50%-2.5rem)] flex items-center ${isEven ? (isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left') : (isRTL ? 'lg:flex-row text-right' : 'lg:flex-row-reverse text-left')}`}>
                      
                      {/* The Card / Display Panel */}
                      <div className="relative w-full bg-white p-6 shadow-lg rounded-lg border border-slate-200/50
                                      [clip-path:polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex-shrink-0">
                            <FaCalendarAlt />
                          </span>
                          <span className="font-bold text-md text-gray-800">{item.date}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{t(item.contentKey)}</p>
                      </div>

                      {/* The Connector Line and Node */}
                      <div className="hidden lg:flex items-center w-10 mx-2 flex-shrink-0">
                         <div className={`w-full h-0.5 ${isVisible ? 'bg-orange-500' : 'bg-slate-200'} transition-colors duration-500`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Central Node (Hexagon) */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-6 h-7 flex items-center justify-center transition-all duration-500
                                   [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]
                                   ${isVisible ? 'bg-orange-500 scale-110' : 'bg-slate-300'}`}>
                      <div className="w-[20px] h-[24px] bg-slate-50 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"></div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurStory;