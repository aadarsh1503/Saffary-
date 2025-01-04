import React from 'react';

const CancellationRefundPolicy = () => {
  return (
    <div className="container mx-auto p-4 mt-24 lg:mt-24">
      {/* Heading */}
     
      
      {/* Policy Content */}
      <div className="text-gray-700 text-sm space-y-6">
      <h2 className="text-3xl font-semibold space-y-6">Cancellation & Refund Policy</h2>
        <p>
          Our focus is complete customer satisfaction. In case of unforeseen circumstances, if any of the parties cancels the order, we will follow the below criteria for refunds.
        </p>

        <h3 className="text-xl font-semibold">Customer wants to cancel a booking</h3>
        <p>
          If you as a Customer want to cancel your booking before your order is accepted then you can do that and full refund will be provided.
        </p>
        <p>
          Our merchant starts the preparation post your order acceptance and post order acceptance if you want to place a cancel request then please call/WhatsApp us at +91-9769552162. We will have to check with the particular merchant the status of your booking. Accordingly, we may initiate a partial or a full refund.
        </p>

        <h3 className="text-xl font-semibold">If Merchant cancels a booking:</h3>
        <p>
          Full refund to Customer if a booking is cancelled by the Merchant at any given point of time.
        </p>

        <h3 className="text-xl font-semibold">NOTES:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Refunds are initiated when a cancellation request is made, and it usually takes between 5 to 7 working days for the refunds to be processed completely (depending on the Customer’s bank and mode of payment). If it takes longer than 7 working days, the Customer should contact their bank for assistance and reach out to us for confirmation.
          </li>
          <li>
            Refunds will be done only through the original mode of payment.
          </li>
          <li>
            For any other type of cancellation, all parties shall mutually agree on the decision made by Saffary Support team.
          </li>
        </ul>

        {/* Footer Content */}
        
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
