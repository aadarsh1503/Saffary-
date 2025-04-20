import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiBriefcase, FiMail, FiPhone, FiMapPin, FiHome, FiFileText, FiUpload } from "react-icons/fi";

const BecomeMerchantForm = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaResponse = document.getElementById("g-recaptcha-response")?.value;

    if (!recaptchaResponse) {
      alert(t("form.recaptchaError"));
      return;
    }

    alert(t("form.submitSuccess"));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    rest: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-b from-gray-50 to-white py-16 px-6  lg:mt-20 mt-20 lg:px-24 ${isRTL ? "text-right" : "text-left"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {t("form.title")}
        </motion.h2>
       

        <motion.form
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white p-8 rounded-xl "
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Business Name */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="businessName"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiBriefcase className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.businessName")} *
            </label>
            <input
              type="text"
              id="businessName"
              placeholder={t("form.businessNamePlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="email"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiMail className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.email")} *
            </label>
            <input
              type="email"
              id="email"
              placeholder={t("form.emailPlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              required
            />
          </motion.div>

          {/* Mobile Number */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="mobile"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiPhone className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.mobileNumber")} *
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder={t("form.mobileNumberPlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              required
            />
          </motion.div>

          {/* Type of Business */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="typeOfBusiness"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiBriefcase className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.typeOfBusiness")} *
            </label>
            <input
              type="text"
              id="typeOfBusiness"
              placeholder={t("form.typeOfBusinessPlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              required
            />
          </motion.div>

          {/* Address */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="address"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiMapPin className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.address")} *
            </label>
            <input
              type="text"
              id="address"
              placeholder={t("form.addressPlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              required
            />
          </motion.div>

          {/* State */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="state"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiHome className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.state")} *
            </label>
            <input
              type="text"
              id="state"
              placeholder={t("form.statePlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              required
            />
          </motion.div>

          {/* City */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="city"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiMapPin className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.city")} *
            </label>
            <input
              type="text"
              id="city"
              placeholder={t("form.cityPlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              required
            />
          </motion.div>

          {/* Brand Logo */}
          <motion.div variants={itemVariants}>
  <label
    htmlFor="brandLogo"
    className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
  >
    <FiUpload className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
    {isRTL ? "برانڈ لوگو " : t("form.brandLogo")} *
  </label>
  <div className="mt-1 flex items-center">
    <label className="cursor-pointer">
      <span className="sr-only">{isRTL ? "برانڈ لوگو" : t("form.brandLogo")}</span>
      <input
        type="file"
        id="brandLogo"
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100 transition duration-200"
        required
      />
    </label>
  </div>
</motion.div>

          {/* Comments */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <label
              htmlFor="comments"
              className={`block text-sm font-medium text-gray-700 mb-1 flex items-center ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <FiFileText className={`mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("form.comments")}
            </label>
            <textarea
              id="comments"
              placeholder={t("form.commentsPlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              rows="3"
            ></textarea>
          </motion.div>

          {/* reCAPTCHA */}
          <motion.div 
            className="lg:col-span-3 flex justify-center mt-4"
            variants={itemVariants}
          >
            <div
              className="g-recaptcha"
              data-sitekey="6LeqpnkqAAAAAHNUm3Ey9nv2T0hmhl0Ym4L_yaTS"
              data-theme="light"
            ></div>
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className="lg:col-span-3 flex justify-center mt-6"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              className="w-full md:w-1/3 px-6 py-3 bg-[#FF7404] text-white rounded-lg shadow-lg hover:from-indigo-700 hover:bg-orange-600 transition duration-200 flex items-center justify-center"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <span>{t("form.submit")}</span>
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default BecomeMerchantForm;