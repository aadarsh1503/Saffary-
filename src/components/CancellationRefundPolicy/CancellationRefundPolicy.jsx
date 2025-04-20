import React from 'react';
import { useTranslation } from 'react-i18next';

const CancellationRefundPolicy = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <div>
      {isRTL ? (<div className="container max-w-4xl mx-auto p-6 mt-24 lg:mt-28 font-sans">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-indigo-100">
        منسوخی و رقم واپسی کی پالیسی
      </h2>
      
      {/* Policy Content */}
      <div className="text-gray-700 text-base leading-relaxed space-y-8">
        <p className="text-lg text-gray-600">
          ہمارا مقصد مکمل گاہک کی تسکین ہے۔ غیر متوقع حالات کی صورت میں، اگر کوئی بھی فریق آرڈر منسوخ کرتا ہے، تو ہم رقم کی واپسی کے لیے مندرجہ ذیل معیار پر عمل کریں گے۔
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-black rounded-full mr-3 ml-3"></span>
            گاہک بکنگ منسوخ کرنا چاہتا ہے
          </h3>
          <p className="mb-4">
            اگر آپ بطور گاہک اپنی بکنگ منسوخ کرنا چاہتے ہیں جبکہ آپ کا آرڈر ابھی قبول نہیں کیا گیا ہے، تو آپ ایسا کر سکتے ہیں اور مکمل رقم واپس کر دی جائے گی۔
          </p>
          <p>
            ہمارا تاجر آپ کے آرڈر کی قبولیت کے بعد تیاری شروع کر دیتا ہے اور اگر آرڈر کی قبولیت کے بعد آپ منسوخی کی درخواست کرنا چاہتے ہیں تو براہ کرم ہمیں کال/واٹس ایپ کریں <a href="tel:+97333117441" className=" text-black font-bold">
  <span dir='ltr'>+973 33117441</span>
</a> پر۔ ہمیں مخصوص تاجر کے ساتھ آپ کی بکنگ کی حیثیت چیک کرنی ہوگی۔ اس کے مطابق، ہم جزوی یا مکمل رقم واپس کر سکتے ہیں۔
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-black rounded-full ml-3 mr-3"></span>
            اگر تاجر بکنگ منسوخ کرتا ہے
          </h3>
          <p>
            اگر تاجر کسی بھی وقت بکنگ منسوخ کرتا ہے تو گاہک کو مکمل رقم واپس کر دی جائے گی۔
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-4 bg-black rounded-full mr-3 ml-3"></span>
            نوٹس
          </h3>
          <ul className="list-disc pl-6 space-y-3 marker:text-black">
            <li className="pl-2">
              رقم کی واپسی اس وقت شروع کی جاتی ہے جب منسوخی کی درخواست کی جاتی ہے، اور رقم کی مکمل واپسی میں عام طور پر 5 سے 7 کاروباری دن لگتے ہیں (گاہک کے بینک اور ادائیگی کے طریقہ کار پر منحصر ہے)۔ اگر 7 کاروباری دنوں سے زیادہ وقت لگتا ہے، تو گاہک کو تصدیق کے لیے اپنے بینک سے رابطہ کرنا چاہیے اور ہم سے بھی رابطہ کرنا چاہیے۔
            </li>
            <li className="pl-2">
              رقم کی واپسی صرف ادائیگی کے اصل طریقہ کار کے ذریعے کی جائے گی۔
            </li>
            <li className="pl-2">
              کسی بھی دوسری قسم کی منسوخی کے لیے، تمام فریقین سفری سپورٹ ٹیم کے فیصلے پر باہمی اتفاق کریں گے۔
            </li>
          </ul>
        </div>
      </div>
    </div>):( <div className="container max-w-4xl mx-auto p-6 mt-24 lg:mt-28 font-sans">
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
    </div>)}
   
    </div>
  );
};

export default CancellationRefundPolicy;