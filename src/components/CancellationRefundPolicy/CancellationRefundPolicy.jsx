import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto p-6 mt-24 lg:mt-28 font-sans">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-indigo-100">
        Cancellation & Refund Policy
      </h2>
      
      {/* Policy Content */}
      <div className="text-gray-700 text-base leading-relaxed space-y-8">
        <p className="text-lg text-gray-600">
          Our focus is complete customer satisfaction. In case of unforeseen circumstances, if any of the parties cancels the order, we will follow the below criteria for refunds.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-black rounded-full mr-3"></span>
            Customer wants to cancel a booking
          </h3>
          <p className="mb-4">
            If you as a Customer want to cancel your booking before your order is accepted then you can do that and full refund will be provided.
          </p>
          <p>
            Our merchant starts the preparation post your order acceptance and post order acceptance if you want to place a cancel request then please call/WhatsApp us at <a href="tel:+97333117441" className=" text-black font-bold">
  +973 33117441
</a>. We will have to check with the particular merchant the status of your booking. Accordingly, we may initiate a partial or a full refund.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-black rounded-full mr-3"></span>
            If Merchant cancels a booking
          </h3>
          <p>
            Full refund to Customer if a booking is cancelled by the Merchant at any given point of time.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-black rounded-full mr-3"></span>
            NOTES
          </h3>
          <ul className="list-disc pl-6 space-y-3 marker:text-black">
            <li className="pl-2">
              Refunds are initiated when a cancellation request is made, and it usually takes between 5 to 7 working days for the refunds to be processed completely (depending on the Customer's bank and mode of payment). If it takes longer than 7 working days, the Customer should contact their bank for assistance and reach out to us for confirmation.
            </li>
            <li className="pl-2">
              Refunds will be done only through the original mode of payment.
            </li>
            <li className="pl-2">
              For any other type of cancellation, all parties shall mutually agree on the decision made by Saffary Support team.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;