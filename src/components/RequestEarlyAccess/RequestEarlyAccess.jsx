import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const RequestEarlyAccess = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // Check if the current language is Arabic
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value); // `value` contains the token, check if it exists
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaVerified) {
      alert(t("Please verify the reCAPTCHA.")); // Using translation for reCAPTCHA message
      return;
    }
    // Process form submission
    alert(t("Form submitted successfully!")); // Using translation for success message
  };

  return (
    <section className="bg-white mt-20 lg:mt-20 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center ${isRTL ? "text-right" : "text-left"}`}
        >
          {t("Request Early Access")}
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* City Input */}
          <div>
            <label
              htmlFor="city"
              className={`block text-sm font-medium text-gray-700 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("City")} *
            </label>
            <input
              type="text"
              id="city"
              placeholder={t("Enter City")}
              className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Area Input */}
          <div>
            <label
              htmlFor="area"
              className={`block text-sm font-medium text-gray-700 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("Area")} *
            </label>
            <input
              type="text"
              id="area"
              placeholder={t("Enter Area")}
              className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Locality/Office Input */}
          <div>
            <label
              htmlFor="locality"
              className={`block text-sm font-medium text-gray-700 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("Locality/Office")} *
            </label>
            <input
              type="text"
              id="locality"
              placeholder={t("Enter Locality/Office")}
              className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Comment Input */}
          <div>
            <label
              htmlFor="comment"
              className={`block text-sm font-medium text-gray-700 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("Comment")} *
            </label>
            <input
              type="text"
              id="comment"
              placeholder={t("Enter Comment")}
              className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium text-gray-700 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("Email")} *
            </label>
            <input
              type="email"
              id="email"
              placeholder={t("Enter Email")}
              className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Mobile Number Input */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium text-gray-700 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("Mobile Number")} *
            </label>
            <input
              type="email"
              id="email"
              placeholder= {t("Enter Mobile Number")}
              className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* reCAPTCHA */}
          <div className="col-span-1 md:col-span-2 flex justify-center items-center">
            <ReCAPTCHA
              sitekey="6LeqpnkqAAAAAHNUm3Ey9nv2T0hmhl0Ym4L_yaTS" // Replace with your actual site key
              onChange={handleRecaptchaChange}
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-4 w-full md:w-1/3 px-4 py-2 bg-white text-lorange outline outline-lorange hover:bg-lorange hover:text-white rounded-lg shadow-sm transition duration-200"
              disabled={!recaptchaVerified}
            >
              {t("Submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestEarlyAccess;
