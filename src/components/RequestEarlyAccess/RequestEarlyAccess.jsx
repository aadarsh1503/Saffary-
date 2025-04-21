import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiHome, FiBriefcase, FiMessageSquare, FiMail, FiPhone } from "react-icons/fi";

const RequestEarlyAccess = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaVerified) {
      alert(t("Please verify the reCAPTCHA."));
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert(t("Form submitted successfully!"));
    setIsSubmitting(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.98 },
    loading: { 
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 1.5 }
    }
  };

  return (
    <motion.section 
      className="bg-gradient-to-b from-white to-gray-50 mt-20 lg:mt-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {t("Request Early Access")}
          </h2>
        </motion.div>

        <motion.form
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl ${isRTL ? "text-right" : "text-left"}`}
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* City Input */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="city"
              className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className={`flex ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                {isRTL ? (
                  <>
                    {t("City")} *
                    <FiMapPin className="ml-2 mt-1" />
                  </>
                ) : (
                  <>
                    <FiMapPin className="mr-2 mt-1" />
                    {t("City")} *
                  </>
                )}
              </div>
            </label>
            <input
              type="text"
              id="city"
              placeholder={t("Enter City")}
              className={`mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ${isRTL ? "text-right" : "text-left"}`}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
          </motion.div>

          {/* Area Input */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="area"
              className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className={`flex ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                {isRTL ? (
                  <>
                    {t("Area")} *
                    <FiHome className="ml-2 mt-1" />
                  </>
                ) : (
                  <>
                    <FiHome className="mr-2 mt-1" />
                    {t("Area")} *
                  </>
                )}
              </div>
            </label>
            <input
              type="text"
              id="area"
              placeholder={t("Enter Area")}
              className={`mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ${isRTL ? "text-right" : "text-left"}`}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
          </motion.div>

          {/* Locality/Office Input */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="locality"
              className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className={`flex ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                {isRTL ? (
                  <>
                    {t("Locality/Office")} *
                    <FiBriefcase className="ml-2 mt-1" />
                  </>
                ) : (
                  <>
                    <FiBriefcase className="mr-2 mt-1" />
                    {t("Locality/Office")} *
                  </>
                )}
              </div>
            </label>
            <input
              type="text"
              id="locality"
              placeholder={t("Enter Locality/Office")}
              className={`mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ${isRTL ? "text-right" : "text-left"}`}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
          </motion.div>

          {/* Comment Input */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="comment"
              className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className={`flex ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                {isRTL ? (
                  <>
                    {t("Comment")} *
                    <FiMessageSquare className="ml-2 mt-1" />
                  </>
                ) : (
                  <>
                    <FiMessageSquare className="mr-2 mt-1" />
                    {t("Comment")} *
                  </>
                )}
              </div>
            </label>
            <input
              type="text"
              id="comment"
              placeholder={t("Enter Comment")}
              className={`mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ${isRTL ? "text-right" : "text-left"}`}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="email"
              className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className={`flex ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                {isRTL ? (
                  <>
                    {t("Email")} *
                    <FiMail className="ml-2 mt-1" />
                  </>
                ) : (
                  <>
                    <FiMail className="mr-2 mt-1" />
                    {t("Email")} *
                  </>
                )}
              </div>
            </label>
            <input
              type="email"
              id="email"
              placeholder={t("Enter Email")}
              className={`mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ${isRTL ? "text-right" : "text-left"}`}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
          </motion.div>

          {/* Mobile Number Input */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="mobile"
              className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className={`flex ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                {isRTL ? (
                  <>
                    {t("Mobile Number")} *
                    <FiPhone className="ml-2 mt-1" />
                  </>
                ) : (
                  <>
                    <FiPhone className="mr-2 mt-1" />
                    {t("Mobile Number")} *
                  </>
                )}
              </div>
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder={t("Enter Mobile Number")}
              className={`mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200 ${isRTL ? "text-right" : "text-left"}`}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
          </motion.div>

          {/* reCAPTCHA */}
          <motion.div 
            className="col-span-1 md:col-span-2 flex justify-center items-center mt-4"
            variants={itemVariants}
          >
            <ReCAPTCHA
              sitekey="6LeqpnkqAAAAAHNUm3Ey9nv2T0hmhl0Ym4L_yaTS"
              onChange={handleRecaptchaChange}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className="col-span-1 md:col-span-2 flex justify-center items-center text-center mt-6"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              className={`w-full md:w-1/3 px-6 py-3 rounded-lg shadow-sm transition duration-200 flex items-center justify-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"} ${
                isSubmitting 
                  ? "bg-indigo-400 cursor-not-allowed" 
                  : recaptchaVerified 
                    ? "bg-[#FF7404] text-white hover:bg-orange-600" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!recaptchaVerified || isSubmitting}
              variants={buttonVariants}
              initial="initial"
              whileHover={!isSubmitting ? "hover" : ""}
              whileTap={!isSubmitting ? "tap" : ""}
              animate={isSubmitting ? "loading" : ""}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{t("Processing...")}</span>
                </>
              ) : (
                <>
                  <FiSend className={isRTL ? "order-last" : ""} />
                  <span>{t("Submit")}</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default RequestEarlyAccess;