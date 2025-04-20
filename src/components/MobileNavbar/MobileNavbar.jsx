import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ toggleMobileMenu, isOpen }) => {
  const { t } = useTranslation();

  const menuItems = [
    { path: "/#about", text: "about" },
    { path: "/#glance", text: "glance" },
    { path: "/#advantages", text: "advantages" },
    { path: "/#steps", text: "steps" },
    { path: "/#story", text: "story" },
    { path: "/#markets", text: "markets" },
    { path: "/requestEarly", text: "requestEarly" },
    { path: "/becomeMerchant", text: "becomeMerchant" },
    { path: "/contact", text: "contact" }
  ];

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed lg:hidden top-0 left-0 w-full h-screen bg-lorange text-white z-50 overflow-hidden"
        >
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold"
              >
                {t("Menu")}
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes 
                  className="text-2xl cursor-pointer" 
                  onClick={toggleMobileMenu} 
                />
              </motion.div>
            </div>

            <motion.div 
              className="flex-1 flex flex-col items-center justify-center space-y-6 text-lg font-medium p-6"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link 
                    to={item.path} 
                    onClick={toggleMobileMenu} 
                    className="block hover:text-white/80 transition-colors duration-200"
                  >
                    {t(item.text)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <LanguageToggle />
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-16 bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;