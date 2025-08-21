import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { FiMail, FiMessageCircle, FiMapPin } from "react-icons/fi"; // Changed icon for WhatsApp
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar";

  const contactMethods = [
    {
      icon: <FaWhatsapp size={24} />, // WhatsApp-style icon
      titleKey: "whatsapp",
      mainInfo: "+973 33117441",
      description: "Available on WhatsApp", // custom text instead of translation
      ctaKey: "chatNow", // custom CTA
      href: "https://wa.me/97333117441", // WhatsApp link
    },
    {
      icon: <FiMail size={24} />,
      titleKey: "mail",
      mainInfo: "info@saffary.com",
      description: "Response time: 1 hour", // fixed 1 hour
      ctaKey: "sendEmail",
      href: "mailto:info@saffary.com",
    },
  ];

  return (
    <div id="contact" className="bg-slate-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t("getInTouch")}
          </h2>
        </div>

        {/* Main Content Grid: Map on the left, Contact cards on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-xl group">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.236249565674!2d50.5237206!3d26.1868843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0 transition-all duration-500 ease-in-out
                         grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
              allowFullScreen
            ></iframe>
            {/* Holographic Address Panel */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-black/40 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <FiMapPin size={28} className="text-white/80 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{t('ourLocation')}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {t("address")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Methods */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {contactMethods.map((method) => (
              <a 
                key={method.titleKey} 
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-8 shadow-lg transition-all duration-300
                           hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-lg p-4">
                    {method.icon}
                  </div>
                  <div className={`flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-gray-800">
                      {t(method.titleKey)}
                    </h3>
                    <p className="text-lg font-semibold text-orange-600 my-1" dir="ltr">
                      {method.mainInfo}
                    </p>
                    <p className="text-sm text-gray-500">
                      {method.description}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-auto rtl:sm:ml-0 rtl:sm:mr-auto">
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
                                     text-orange-600 bg-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {t(method.ctaKey)}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
