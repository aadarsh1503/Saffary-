import React from "react";
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import g1 from "./g1.jpeg"
const Footer = () => {
  return (
    <footer className="bg-white max-w-5xl mx-auto py-8 border-t">
      <div className=" mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="mb-8 -ml-8 md:mb-0">
          {/* Logo */}
          <div className="mb-4">
            <img src={g1} alt="Logo" className="h-20" />
          </div>
          <p className="text-gray-700 text-lg mb-6">
            Saffary is one of Bahrain's leading<br /> FoodTech Platform for Hyperlocal Market.
          </p>
          <div className="flex flex-col  space-y-4">
            <button className="border border-gray-700 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100">
              Become a merchant
            </button>
            <button className="border border-gray-700 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-gray-900 font-semibold mb-4">Our Business</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Privacy & Policy</li>
            <li>Terms and Conditions</li>
            <li>Cancellation & Refund</li>
            <li>Request for early access</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="mb-8 md:mb-0  flex justify-between items-start">
  <div className="">
    <h4 className="text-gray-900 font-semibold mb-4">Contact Us</h4>
    <ul className="text-gray-700 text-sm space-y-2">
      <li>7738286932</li>
      <li>hello@ordercoro.com</li>
      <li>
        B-320, Eastern Business<br /> District, Neptune Magnet<br /> Mall, Bhandup
        (West),<br /> Mumbai - 400078
      </li>
    </ul>
  </div>
  <div className="grid grid-cols-2 ml-32 gap-4 mt-6">
    <AiOutlineLinkedin className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
    <AiOutlineTwitter className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
    <AiOutlineInstagram className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
    <AiOutlineYoutube className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
  </div>
</div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-gray-600 text-sm">
          Copyright © 2024 Saffary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
