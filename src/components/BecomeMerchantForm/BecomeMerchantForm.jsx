import React, { useEffect } from "react";

const BecomeMerchantForm = () => {
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
      alert("Please verify the reCAPTCHA!");
      return;
    }

    // Form submission logic
    console.log("Form submitted with reCAPTCHA response:", recaptchaResponse);

    // Perform server request here
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white py-12 px-6 mt-0 lg:mt-20 lg:px-24">
      <h2 className="text-2xl font-bold text-center mb-8">Become A Merchant</h2>
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
            Business Name *
          </label>
          <input
            type="text"
            id="businessName"
            placeholder="Enter Business Name"
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number *
          </label>
          <input
            type="tel"
            id="mobileNumber"
            placeholder="Enter Mobile No."
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
            Type Of Business *
          </label>
          <input
            type="text"
            id="typeOfBusiness"
            placeholder="Enter Type of Business"
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address *
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State *
          </label>
          <input
            type="text"
            id="state"
            placeholder="Enter State"
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City *
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter City"
            className="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Brand Logo */}
        <div>
          <label htmlFor="brandLogo" className="block text-sm font-medium text-gray-700">
            Brand Logo *
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
            Leave a Comment
          </label>
          <textarea
            id="comments"
            placeholder="Enter your comment"
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
              className="mt-4 w-full md:w-1/3 px-4 py-2 bg-white text-lorange outline outline-lorange hover:bg-lorange hover:text-white rounded-lg shadow-sm  transition duration-200"
         
            >
              Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default BecomeMerchantForm;
