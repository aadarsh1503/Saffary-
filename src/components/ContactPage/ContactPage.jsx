import React from 'react';

const ContactPage = () => {
  return (
    <div id="contact" className="">
      {/* Heading */}
      <h1 className='text-white'>hii
        <li className='text-white'>hii</li>
        <li className='text-white'>hii</li>
        <li className='text-white'>hii</li>
        <li className='text-white'>hii</li>
        <li className='text-white'>hii</li>
      </h1>
      <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        GET IN TOUCH WITH SAFFARY
      </h1>

      {/* Map Section */}
      <div className="flex justify-center ">
      <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.236249565674!2d50.5237206!3d26.1868843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="rounded-lg shadow-lg w-full max-w-4xl"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-4xl mx-auto mb-20 bg-white rounded-lg  p-6 space-y-6">
        {/* Address */}
        <p className="text-left mb-20 text-gray-700">
        OFFICE 22, BLDG 661,
RD 1208, BLOCK 712 - SALMABAD,
KINGDOM OF BAHRAIN
        </p>

        {/* Contact Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {/* Chat Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">Chat</h3>
            <p className="text-sm text-gray-600">Response Time Approx. 2 minutes</p>
            <p className="text-sm text-gray-600">Mon-Thurs: 8:00 to 16:00</p>
            <p className="text-sm text-gray-600">Friday: 8:00 to 15:00</p>
          </div>

          {/* Telephone Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">Telephone</h3>
            <p className="text-lorange text-lg font-semibold">+973 33117441</p>
            <p className="text-sm text-gray-600">Response time approx. 20 minutes</p>
            <p className="text-sm text-gray-600">Mon-Fri: 10:00 to 15:00</p>
          </div>

          {/* Mail Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">Mail</h3>
            <p className="text-lorange text-lg font-semibold">info@saffary.com</p>
            <p className="text-sm text-gray-600">
              Response time approx. 5 weekdays
            </p>
            <p className="text-sm text-gray-600">Mon-Thurs: 8:00 to 16:00</p>
            <p className="text-sm text-gray-600">Fri: 8:00 to 15:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;