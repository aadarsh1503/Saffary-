import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import g1 from "./g1.jpeg";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer id="contact" className="bg-white max-w-5xl mx-auto py-8 border-t">
      <div className=" mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="mb-8 -ml-8 md:mb-0">
          {/* Logo */}
          <div className="mb-4 ml-9 lg:ml-0">
            <img src={g1} alt="Logo" className="h-20" />
          </div>
          <p className="text-gray-700 text-lg lg:ml-0 ml-9 mb-6">
            Saffary is one of Bahrain's leading<br /> FoodTech Platform for Hyperlocal Market.
          </p>
          <div className="flex flex-col space-y-4">
            <Link to="/becomeMerchant"> 
              <button className="border border-gray-700 ml-9 lg:ml-0 text-gray-700 py-2 px-24 lg:px-32 rounded-md hover:bg-gray-100">
                Become a merchant
              </button>
            </Link>
            <button className="border border-gray-700 lg:ml-0 ml-9 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mb-8 md:mb-0">
  <h4 className="text-gray-900 font-semibold mb-4">Our Business</h4>
  <ul className="space-y-2 text-gray-700 text-sm">
  <li>
      <a href="/privacy" className=" hover:underline">
      Privacy & Policy
      </a>
    </li>
    <li>
      <a href="/t&C" className=" hover:underline">
      Terms and Conditions
      </a>
    </li>
    <li>
      <a href="/refund&Cancellation" className=" hover:underline">
      Cancellation & Refund
      </a>
    </li>
    <li>
      <a href="/requestEarly" className=" hover:underline">
        Request for early access
      </a>
    </li>
  </ul>
</div>


        {/* Right Section */}
        <div className="mb-8 md:mb-0 flex justify-between items-start">
          <div className="">
            <h4 className="text-gray-900 font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>+973 33117441</li>
              <li>info@saffary.com</li>
              <li>
                OFFICE 22, BLDG 661, RD 1208, <br /> BLOCK 712 - SALMABAD, <br />KINGDOM OF BAHRAIN
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 ml-0 lg:ml-32 gap-4 mt-6">
            <AiOutlineLinkedin className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
            <AiOutlineTwitter className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
            <AiOutlineInstagram className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
            <a href="https://www.facebook.com/saffarystation/" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook className="text-orange-500 text-5xl cursor-pointer hover:text-orange-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-gray-600 text-sm">
          Copyright © 2025 Saffary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;