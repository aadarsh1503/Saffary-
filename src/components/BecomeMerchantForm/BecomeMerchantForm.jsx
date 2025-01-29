import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const BecomeMerchantForm = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // Check if the current language is Arabic

  useEffect(() => {
    // Load the reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaResponse = document.getElementById("g-recaptcha-response").value;

    if (!recaptchaResponse) {
      alert(t("form.recaptchaError")); // Use translation for the error message
      return;
    }

    // Form submission logic
    console.log("Form submitted with reCAPTCHA response:", recaptchaResponse);

    // Perform server request here
    alert(t("form.submitSuccess"));
  };

  return (
    <div
      className={`bg-white py-12 px-6 mt-20 lg:mt-20 lg:px-24 ${isRTL ? "text-right" : "text-left"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-2xl font-bold text-center mb-8">{t("form.title")}</h2>
      <form
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6"
        onSubmit={handleSubmit}
      >
        {/* Business Name */}
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-gray-700"
          >
            {t("form.businessName")} *
          </label>
          <input
            type="text"
            id="businessName"
            placeholder={t("form.businessNamePlaceholder")}
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t("form.email")} *
          </label>
          <input
            type="email"
            id="email"
            placeholder={t("form.emailPlaceholder")}
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t("form.mobileNumber")} *
          </label>
          <input
            type="email"
            id="email"
            placeholder=  {t("form.mobileNumberPlaceholder")}
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Type of Business */}
        <div>
          <label
            htmlFor="typeOfBusiness"
            className="block text-sm font-medium text-gray-700"
          >
            {t("form.typeOfBusiness")} *
          </label>
          <input
            type="text"
            id="typeOfBusiness"
            placeholder={t("form.typeOfBusinessPlaceholder")}
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            {t("form.address")} *
          </label>
          <input
            type="text"
            id="address"
            placeholder={t("form.addressPlaceholder")}
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            {t("form.state")} *
          </label>
          <input
            type="text"
            id="state"
            placeholder={t("form.statePlaceholder")}
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            {t("form.city")} *
          </label>
          <input
            type="text"
            id="city"
            placeholder={t("form.cityPlaceholder")}
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Brand Logo */}
        <div>
          <label htmlFor="brandLogo" className="block text-sm font-medium text-gray-700">
            {t("form.brandLogo")} *
          </label>
          <input
            type="file"
            id="brandLogo"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Comments */}
        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            {t("form.comments")}
          </label>
          <textarea
            id="comments"
            placeholder={t("form.commentsPlaceholder")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows="3"
          ></textarea>
        </div>

        {/* reCAPTCHA */}
        <div className="lg:col-span-3 flex justify-center">
          <div
            className="g-recaptcha"
            data-sitekey="6LeqpnkqAAAAAHNUm3Ey9nv2T0hmhl0Ym4L_yaTS"
            data-theme="light"
          ></div>
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-3 flex justify-center">
          <button
            type="submit"
            className="mt-4 w-full md:w-1/3 px-4 py-2 bg-white text-lorange outline outline-lorange hover:bg-lorange hover:text-white rounded-lg shadow-sm transition duration-200"
          >
            {t("form.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BecomeMerchantForm;
