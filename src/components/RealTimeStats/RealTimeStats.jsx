import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import i1 from "./i1.gif";
import i18n from "../../i18n";
import { FiUsers, FiShoppingCart, FiMapPin, FiUserCheck, FiBriefcase } from "react-icons/fi";

// A custom hook for animating numbers
const useCountUp = (end, duration = 2000, startOnMount = false) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    if (!startOnMount) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = (frame / totalFrames) ** 2; // Ease-out effect
      const currentCount = Math.round(end * progress);
      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end); // Ensure it ends on the exact number
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, startOnMount]);

  return count;
};

// A reusable StatCard component
const StatCard = ({ icon, value, label, isVisible }) => {
  const animatedValue = useCountUp(value, 2000, isVisible);

  return (
    <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/50
                    transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-3xl lg:text-4xl font-extrabold text-gray-800 tabular-nums">
            {animatedValue.toLocaleString()}
          </p>
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{label}</p>
        </div>
      </div>
    </div>
  );
};


const RealTimeStats = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Data for our stats
  const statsData = [
    { icon: <FiBriefcase size={24} />, value: 52, labelKey: 'merchantCount' },
    { icon: <FiUsers size={24} />, value: 2841, labelKey: 'customerCount' },
    { icon: <FiShoppingCart size={24} />, value: 45450, labelKey: 'orders' },
    { icon: <FiMapPin size={24} />, value: 30, labelKey: 'locality' },
    { icon: <FiUserCheck size={24} />, value: 339, labelKey: 'accountUsers' },
  ];
  
  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <div id="glance" ref={sectionRef} className="bg-slate-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t('realTimeStats')}
          </h2>
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: The "Holographic Display" GIF */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-200/80 [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]"></div>
            <div className="absolute inset-1.5 bg-white [clip-path:polygon(0_20px,20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]
                          p-6 bg-[linear-gradient(to_right,rgba(203,213,225,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(203,213,225,0.2)_1px,transparent_1px)] 
                          bg-[size:2rem_2rem]">
              <img 
                src={i1} 
                alt={t('realTimeStats')}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side: The "Data Pods" */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statsData.map((stat) => (
              <StatCard 
                key={stat.labelKey}
                icon={stat.icon}
                value={stat.value}
                label={t(stat.labelKey)}
                isVisible={isVisible}
              />
            ))}
            {/* This is an empty div to balance the grid when there are 5 items */}
            <div className="hidden sm:block lg:hidden"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RealTimeStats;