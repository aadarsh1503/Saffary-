import React, { useState } from "react";
import { FiArrowRight, FiTwitter, FiInstagram, FiLinkedin, FiFacebook, FiMail, FiPhone } from "react-icons/fi";
import g1 from "./g1.png";
import i111 from "./i111.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // --- Data for links and social to keep JSX clean ---
  const businessLinks = [
    { href: "/privacy", key: "privacyPolicy" },
    { href: "/t&C", key: "termsConditions" },
    { href: "/refund&Cancellation", key: "cancellationRefund" },
    { href: "/requestEarly", key: "requestEarlyAccess" },
  ];

  const socialLinks = [
    // { href: "https://www.linkedin.com/", icon: <FiLinkedin size={20} />, label: "LinkedIn" },
    // { href: "https://twitter.com/", icon: <FiTwitter size={20} />, label: "Twitter" },
    { href: "https://www.instagram.com/saffarystation/", icon: <FiInstagram size={20} />, label: "Instagram" },
    { href: "https://www.facebook.com/saffarystation/", icon: <FiFacebook size={20} />, label: "Facebook" },
  ];

  // --- Newsletter Form Logic (from your original component) ---
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('email', email);
      formData.append('list', 'HPHCEBlB2gM763WItzCDZmQw'); // your list ID
      formData.append('subform', 'yes');
      formData.append('hp', '');

      await fetch('https://send.alzyara.com/subscribe', {
        method: 'POST', body: formData, mode: 'no-cors',
      });
      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Subscription failed. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 1. NEW DEDICATED NEWSLETTER SECTION (ABOVE FOOTER) */}
      <div className="bg-slate-100 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('newsletterHeading', 'Stay Ahead of the Curve')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('newsletterSubtitle', 'Join our newsletter for exclusive updates, offers, and insights delivered directly to your inbox.')}
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-8 max-w-lg mx-auto">
            <input
              type="email"
              placeholder={t("enterYourEmail")}
              className="w-full p-4 pr-16 text-gray-800 bg-white border-2 border-transparent rounded-full focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-2 rtl:right-auto rtl:left-2 w-10 h-10 flex items-center justify-center
                         bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all transform hover:scale-110"
              disabled={loading}
              aria-label="Subscribe"
            >
              {loading ? '...' : <FiArrowRight />}
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
        </div>
      </div>

      {/* 2. REDESIGNED MAIN FOOTER */}
      <div className={`bg-slate-50 ${isRTL ? 'text-right' : 'text-left'}`}>
        <footer className="max-w-7xl mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Left Section: Brand & Buttons */}
            <div className="md:col-span-2 lg:col-span-1">
              <img src={isRTL ? i111 : g1} alt={t("logoAltText")} className="h-16 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8">{t("saffaryDescription")}</p>
              <div className="flex flex-col space-y-4 items-start rtl:items-end">
                <Link to="/becomeMerchant" className="w-full max-w-xs">
                  <button className="w-full px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-sm hover:bg-orange-600 transition-all transform hover:scale-105">
                    {t("becomeMerchant")}
                  </button>
                </Link>
                <a href="/#contact" className="w-full max-w-xs">
                  <button className="w-full px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors">
                    {t("requestDemo")}
                  </button>
                </a>
              </div>
            </div>

            {/* Middle Section 1: Business Links */}
            <div className="lg:justify-self-center">
              <h4 className="text-lg font-bold text-gray-900 mb-6">{t("ourBusiness")}</h4>
              <ul className="space-y-4">
                {businessLinks.map(link => (
                  <li key={link.key}>
                    <a href={link.href} className="text-gray-600 hover:text-orange-500 transition-colors">{t(link.key)}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Section 2: Contact Info */}
            <div className="lg:justify-self-center">
              <h4 className="text-lg font-bold text-gray-900 mb-6">{t("contactUs")}</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <FiPhone className="text-orange-500 flex-shrink-0" />
                  <a href="tel:+97333117441" className="hover:text-orange-500 transition-colors" dir="ltr">+973 33117441</a>
                </li>
                <li className="flex items-center gap-3">
                  <FiMail className="text-orange-500 flex-shrink-0" />
                  <a href="mailto:info@saffary.com" className="hover:text-orange-500 transition-colors">info@saffary.com</a>
                </li>
              </ul>
            </div>

            {/* Right Section: Social Media */}
            <div className="lg:justify-self-center">
              <h4 className="text-lg font-bold text-gray-900 mb-6">{t('followUs')}</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                     className="w-12 h-12 flex items-center justify-center bg-slate-200 text-gray-600 rounded-full
                                hover:bg-orange-100 hover:text-orange-600 transition-all transform hover:scale-110">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} {t("Saffary")}. {t("allRightsReserved")}
            </p>
            <img src={isRTL ? i111 : g1} alt={t("logoAltText")} className="h-8 opacity-50 mt-4 sm:mt-0" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;