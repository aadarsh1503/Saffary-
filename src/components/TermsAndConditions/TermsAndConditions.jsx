import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <>
    {isRTL ? (<div className="bg-gray-50 mt-20 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-black mb-6">شرائط و ضوابط</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold">جائزہ</h2>
          <p>
            یہ ویب سائٹ سفری پرائیویٹ لمیٹڈ کے زیر انتظام چلائی جاتی ہے۔ سائٹ بھر میں، "ہم"، "ہمارا" اور "ہماری" کے الفاظ سفری پرائیویٹ لمیٹڈ کی طرف اشارہ کرتے ہیں۔
            سفری پرائیویٹ لمیٹڈ یہ ایپلیکیشن پیش کرتا ہے، بشمول تمام معلومات، ٹولز، اور خدمات جو اس ایپلیکیشن کے ذریعے آپ تک دستیاب ہیں، ان شرائط، ضوابط، پالیسیوں اور نوٹسز کی پابندی پر جو یہاں درج ہیں۔
          </p>
          <p>
            ہماری ایپلیکیشن کا دورہ کرنے اور/یا ہم سے کوئی چیز خریدنے سے، آپ ہماری "سروس" میں شامل ہوتے ہیں اور درج ذیل شرائط و ضوابط ("سروس کی شرائط"، "شرائط") سے پابند ہونے پر رضامند ہوتے ہیں، بشمول وہ اضافی شرائط و ضوابط اور پالیسیاں جو یہاں حوالہ دی گئی ہیں یا ہائپرلنک کے ذریعے دستیاب ہیں۔ یہ سروس کی شرائط سائٹ کے تمام صارفین پر لاگو ہوتی ہیں، بشمول براؤزرز، فروشوں، گاہکوں، تاجروں، اور/یا مواد کے معاونین۔
          </p>
          <p>
            براہ کرم ہماری ویب سائٹ تک رسائی حاصل کرنے یا استعمال کرنے سے پہلے ان سروس کی شرائط کو غور سے پڑھیں۔ سائٹ کے کسی بھی حصے تک رسائی حاصل کرنے یا استعمال کرنے سے، آپ ان سروس کی شرائط سے پابند ہونے پر رضامند ہوتے ہیں۔ اگر آپ اس معاہدے کی تمام شرائط و ضوابط سے متفق نہیں ہیں، تو آپ ایپلیکیشن تک رسائی حاصل نہیں کر سکتے یا کسی بھی خدمت کا استعمال نہیں کر سکتے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 1 - آن لائن اسٹور کی شرائط</h2>
          <p>
            سروس کی ان شرائط سے متفق ہو کر، آپ تصدیق کرتے ہیں کہ آپ اپنی ریاست یا صوبے میں اکثریت کی عمر کو پہنچ چکے ہیں، یا آپ اپنی ریاست یا صوبے میں اکثریت کی عمر کو پہنچ چکے ہیں اور آپ نے ہمیں اپنے زیر کفالت نابالغوں کو اس ایپلیکیشن کا استعمال کرنے کی اجازت دے دی ہے۔
          </p>
          <p>
            آپ ہماری مصنوعات کو کسی غیر قانونی یا غیر مجاز مقصد کے لیے استعمال نہیں کر سکتے اور نہ ہی سروس کے استعمال میں، آپ اپنے دائرہ اختیار میں کسی بھی قانون کی خلاف ورزی کر سکتے ہیں (بشمول کاپی رائٹ قوانین)۔
          </p>
          <p>
            آپ کو کوئی بھی ورم یا وائرس یا کسی بھی قسم کا تباہ کن کوڈ منتقل نہیں کرنا چاہیے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 2 - عمومی شرائط</h2>
          <p>
            ادائیگی براہ راست نمائندے یا ایجنٹ کو ماہانہ بنیاد پر کی جائے گی۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 3 - معلومات کی درستگی، مکملیت اور بروقت ہونا</h2>
          <p>
            ہم ذمہ دار نہیں ہیں اگر اس ایپلیکیشن پر دستیاب معلومات درست، مکمل یا حالیہ نہیں ہیں۔ اس سائٹ پر موجود مواد صرف عمومی معلومات کے لیے فراہم کیا گیا ہے اور اسے بنیادی، زیادہ درست، زیادہ مکمل یا زیادہ بروقت معلومات کے ذرائع سے مشورہ کیے بغیر فیصلے کرنے کی واحد بنیاد کے طور پر استعمال نہیں کیا جانا چاہیے۔ اس سائٹ پر موجود مواد پر کسی بھی انحصار آپ کے اپنے خطرے پر ہے۔
          </p>
          <p>
            یہ ایپلیکیشن کچھ تاریخی معلومات پر مشتمل ہو سکتی ہے۔ تاریخی معلومات، ضروری طور پر، حالیہ نہیں ہوتیں اور صرف آپ کے حوالے کے لیے فراہم کی جاتی ہیں۔
          </p>
          <p>
            ہم اس ایپلیکیشن کے مواد میں کسی بھی وقت ترمیم کرنے کا حق محفوظ رکھتے ہیں، لیکن ہمارا یہ فرض نہیں ہے کہ ہم اپنی ایپلیکیشن پر کسی بھی معلومات کو اپ ڈیٹ کریں۔ آپ اس بات سے متفق ہیں کہ ہماری ایپلیکیشن میں ہونے والی تبدیلیوں پر نظر رکھنا آپ کی ذمہ داری ہے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 4 - سروس اور قیمتوں میں تبدیلیاں</h2>
          <p>
            ہماری مصنوعات کی قیمتیں بغیر نوٹس کے تبدیل ہو سکتی ہیں۔
          </p>
          <p>
            ہمارا یہ حق محفوظ ہے کہ ہم کسی بھی وقت بغیر نوٹس کے سروس (یا اس کے کسی بھی حصے یا مواد) میں ترمیم یا اسے بند کر سکتے ہیں۔
          </p>
          <p>
            سروس میں کسی بھی ترمیم، قیمت میں تبدیلی، معطلی یا بند ہونے کے لیے ہم آپ یا کسی تیسرے فریق کے لیے ذمہ دار نہیں ہوں گے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 5 - اشیاء یا خدمات</h2>
          <p>
            کچھ اشیاء یا خدمات خصوصاً آن لائن ایپلیکیشن کے ذریعے دستیاب ہو سکتی ہیں۔ ہم نے اسٹور پر ظاہر ہونے والی اپنی مصنوعات کے رنگوں اور تصاویر کو زیادہ سے زیادہ درست طریقے سے ظاہر کرنے کی ہر ممکن کوشش کی ہے۔ ہم اس بات کی ضمانت نہیں دے سکتے کہ آپ کے موبائل اسکرین پر ظاہر ہونے والا کوئی بھی رنگ درست ہوگا۔
          </p>
          <p>
            ہمارا یہ حق محفوظ ہے (لیکن ہم پابند نہیں ہیں) کہ ہم اپنی اشیاء یا خدمات کی فروخت کو کسی بھی شخص، جغرافیائی خطے یا دائرہ اختیار تک محدود کر سکتے ہیں۔ ہم اس حق کو معاملہ بہ معاملہ استعمال کر سکتے ہیں۔
          </p>
          <p>
            ہمارا یہ حق محفوظ ہے کہ ہم جو بھی اشیاء یا خدمات پیش کرتے ہیں ان کی مقدار کو محدود کر سکتے ہیں۔ تمام اشیاء کی قیمتیں ہمارے واحد اختیار پر بغیر نوٹس کے کسی بھی وقت تبدیل ہو سکتی ہیں۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 6 - بلنگ اور اکاؤنٹ کی معلومات کی درستگی</h2>
          <p>
            ادائیگی براہ راست نمائندے یا ایجنٹ کو ماہانہ بنیاد پر کی جائے گی۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 7 - تیسرے فریق کے لنکس</h2>
          <p>
            ہماری سروس کے ذریعے دستیاب کچھ مواد، اشیاء اور خدمات میں تیسرے فریق کے مواد شامل ہو سکتے ہیں۔
          </p>
          <p>
            اس سائٹ پر تیسرے فریق کے لنکس آپ کو تیسرے فریق کی ویب سائٹس پر لے جا سکتے ہیں جو ہم سے وابستہ نہیں ہیں۔ ہم تیسرے فریق کے مواد یا ویب سائٹس کے معائنے یا تشخیص کے ذمہ دار نہیں ہیں اور ہم تیسرے فریق کے مواد یا ویب سائٹس، یا تیسرے فریق کی کسی بھی دوسری مصنوعات، خدمات یا مواد کے لیے کوئی ذمہ داری یا ضمانت نہیں دیتے ہیں۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 9 - صارف کے تبصرے، فیڈ بیک اور دیگر جمع کراوائیں</h2>
          <p>
            اگر ہماری درخواست پر، آپ کچھ مخصوص جمع کراوائیں بھیجتے ہیں (مثال کے طور پر مقابلے کے اندراجات) یا ہماری درخواست کے بغیر آپ تخلیقی خیالات، تجاویز، تجاویز، منصوبے یا دیگر مواد بھیجتے ہیں، چاہے آن لائن، ای میل کے ذریعے، ڈاک کے ذریعے یا کسی اور طریقے سے (مجموعی طور پر، 'تبصرے')، آپ اس بات سے متفق ہیں کہ ہم کسی بھی وقت، بغیر کسی پابندی کے، آپ کے بھیجے گئے کسی بھی تبصرے میں ترمیم، کاپی، اشاعت، تقسیم، ترجمہ اور کسی بھی میڈیم میں استعمال کر سکتے ہیں۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 10 - ذاتی معلومات</h2>
          <p>
            اسٹور کے ذریعے ذاتی معلومات جمع کروانے پر ہماری رازداری کی پالیسی لاگو ہوتی ہے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 11 - غلطیاں، غلط بیانی اور چھوٹ</h2>
          <p>
            کبھی کبھار ہماری سائٹ یا سروس پر ایسی معلومات ہو سکتی ہیں جس میں ٹائپوگرافیکل غلطیاں، غلط بیانی یا چھوٹ ہو سکتی ہے جو اشیاء، قیمتوں، پروموشنز، پیشکشوں اور دستیابی سے متعلق ہو سکتی ہے۔ ہمارا یہ حق محفوظ ہے کہ ہم کسی بھی غلطی، غلط بیانی یا چھوٹ کو درست کر سکتے ہیں، اور معلومات کو تبدیل یا اپ ڈیٹ کر سکتے ہیں یا آرڈرز کو منسوخ کر سکتے ہیں اگر سروس یا کسی بھی متعلقہ ایپلیکیشن پر کوئی معلومات کسی بھی وقت غلط ہو (حتیٰ کہ آپ کے آرڈر جمع کروانے کے بعد بھی)۔
          </p>
          <p>
            ہم سروس یا کسی بھی متعلقہ ایپلیکیشن پر معلومات کو اپ ڈیٹ، ترمیم یا واضح کرنے کی کوئی ذمہ داری نہیں لیتے ہیں، بشمول قیمتوں کی معلومات، سوائے قانون کی طرف سے ضروری ہونے کے۔ سروس یا کسی بھی متعلقہ ویب سائٹ پر لگائی گئی کوئی بھی مخصوص اپ ڈیٹ یا تازہ کاری کی تاریخ کو یہ اشارہ نہیں لینا چاہیے کہ سروس یا متعلقہ ویب سائٹ پر تمام معلومات کو تبدیل یا اپ ڈیٹ کر دیا گیا ہے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 12 - ممنوعہ استعمالات</h2>
          <p>سروس کی شرائط میں بیان کردہ دیگر ممانعتوں کے علاوہ، آپ کو سائٹ یا اس کے مواد کو مندرجہ ذیل مقاصد کے لیے استعمال کرنے سے منع کیا جاتا ہے:</p>
          <ul className="list-disc pl-6">
            <li>کسی بھی غیر قانونی مقصد کے لیے؛</li>
            <li>دوسروں کو غیر قانونی اعمال انجام دینے یا ان میں حصہ لینے کی ترغیب دینے کے لیے؛</li>
            <li>کسی بھی بین الاقوامی، وفاقی، صوبائی یا ریاستی قوانین، ضوابط، یا مقامی قوانین کی خلاف ورزی کرنے کے لیے؛</li>
            <li>ہمارے یا دوسروں کے دانشورانہ حقوق کی خلاف ورزی کرنے کے لیے؛</li>
            <li>ہراساں کرنے، بدسلوکی، توہین، نقصان پہنچانے، بدنام کرنے، بہتان لگانے، تحقیر کرنے، دھمکانے یا جنس، جنسی رجحان، مذہب، نسل، عمر، قومی اصل یا معذوری کی بنیاد پر امتیاز کرنے کے لیے؛</li>
            <li>غلط یا گمراہ کن معلومات جمع کروانے کے لیے؛</li>
            <li>وائرسز یا کسی بھی قسم کا تباہ کن کوڈ اپ لوڈ کرنے یا منتقل کرنے کے لیے جو سروس یا کسی بھی متعلقہ لنکس، دیگر لنکس یا انٹرنیٹ کے کام کو متاثر کرے گا یا کر سکتا ہے؛</li>
            <li>دوسروں کی ذاتی معلومات کو جمع کرنے یا ٹریک کرنے کے لیے؛</li>
            <li>اسپیم، فشنگ، فارمنگ، پری ٹیکسٹنگ، اسپائیڈرنگ، کرالنگ یا سکریپنگ کے لیے؛</li>
            <li>کسی بھی فحش یا غیر اخلاقی مقصد کے لیے؛</li>
            <li>سروس یا کسی بھی متعلقہ ویب سائٹ، دیگر ویب سائٹس یا انٹرنیٹ کی سیکیورٹی خصوصیات میں مداخلت کرنے یا انہیں گول کرنے کے لیے۔</li>
          </ul>
          <p>
            ہمارا یہ حق محفوظ ہے کہ ہم ممنوعہ استعمالات میں سے کسی کی خلاف ورزی پر آپ کے سروس یا متعلقہ ویب سائٹ کے استعمال کو ختم کر سکتے ہیں۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 13 - ضمانتوں سے انکار؛ ذمہ داری کی حد بندی</h2>
          <p>
            ہم اس بات کی ضمانت نہیں دیتے کہ آپ کا ہماری سروس کا استعمال بلا رکاوٹ، بروقت، محفوظ یا غلطیوں سے پاک ہوگا۔ ہم اس بات کی ضمانت نہیں دیتے کہ سروس کے استعمال سے حاصل ہونے والے نتائج درست یا قابل اعتماد ہوں گے۔
          </p>
          <p>
            آپ اس بات سے متفق ہیں کہ وقتاً فوقتاً ہم سروس کو غیر معینہ مدت کے لیے ہٹا سکتے ہیں یا سروس کو کسی بھی وقت بغیر نوٹس کے منسوخ کر سکتے ہیں۔
          </p>
          <p>
            آپ صریحاً اس بات سے متفق ہیں کہ سروس کے استعمال، یا استعمال کرنے میں ناکامی آپ کے اپنے خطرے پر ہے۔ سروس اور تمام مصنوعات اور خدمات جو آپ کو سروس کے ذریعے فراہم کی جاتی ہیں (سوائے جہاں ہم صریحاً بیان کریں) 'جیسا ہے' اور 'جیسا دستیاب ہے' کی بنیاد پر فراہم کی جاتی ہیں، بغیر کسی بیان، ضمانت یا شرط کے، چاہے واضح ہو یا ضمنی۔
          </p>
          <p>
            کسی بھی صورت میں سفری پرائیویٹ لمیٹڈ، ہمارے ڈائریکٹرز، افسران، ملازمین، وابستگان، ایجنٹس، ٹھیکیداروں، انٹرنز، سپلائرز، سروس فراہم کنندگان یا لائسنس دہندگان کسی بھی چوٹ، نقصان، دعویٰ، یا کسی بھی براہ راست، بالواسطہ، واقعاتی، سزائی، خاص، یا نتیجتاً ہونے والے نقصانات کے لیے ذمہ دار نہیں ہوں گے، بشمول، بغیر کسی حد کے، گمشدہ منافع، گمشدہ آمدنی، گمشدہ بچت، ڈیٹا کا نقصان، متبادل کی لاگت، یا کسی بھی قسم کے اسی طرح کے نقصانات۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 14 - معاوضہ</h2>
          <p>
            آپ اس بات سے متفق ہیں کہ سفری پرائیویٹ لمیٹڈ اور ہمارے والدین، ذیلی کمپنیوں، وابستگان، شراکت داروں، افسران، ڈائریکٹرز، ایجنٹس، ٹھیکیداروں، لائسنس دہندگان، سروس فراہم کنندگان، ذیلی ٹھیکیداروں، سپلائرز، انٹرنز اور ملازمین کو کسی بھی دعویٰ یا مطالبے سے، بشمول معقول وکیلانہ فیس، جو کسی بھی تیسرے فریق کی طرف سے ان سروس کی شرائط یا ان کے ذریعے حوالہ دیے گئے دستاویزات کی خلاف ورزی یا کسی بھی قانون یا تیسرے فریق کے حقوق کی خلاف ورزی کی وجہ سے ہو، بے ضرر رکھیں گے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 15 - علیحدگی</h2>
          <p>
            اگر ان سروس کی شرائط کا کوئی بھی حصہ غیر قانونی، کالعدم یا نافذ نہ ہونے کے قابل قرار دیا جاتا ہے، تو وہ حصہ پھر بھی قابل نفاذ ہوگا جہاں تک قابل اطلاق قانون اجازت دیتا ہے، اور نافذ نہ ہونے والے حصے کو سروس کی ان شرائط سے علیحدہ سمجھا جائے گا۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 16 - اختتام</h2>
          <p>
            اختتامی تاریخ سے پہلے فریقوں کے ذمے آئے ہوئے واجبات اور ذمہ داریاں اختتام کے بعد تمام مقاصد کے لیے برقرار رہیں گی۔
          </p>
          <p>
            یہ سروس کی شرائط اس وقت تک مؤثر رہیں گی جب تک کہ آپ یا ہم انہیں ختم نہ کر دیں۔ آپ کسی بھی وقت ہمیں مطلع کر کے ان سروس کی شرائط کو ختم کر سکتے ہیں کہ آپ ہماری خدمات کا مزید استعمال نہیں کرنا چاہتے، یا جب آپ ہماری سائٹ کا استعمال بند کر دیتے ہیں۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 17 - مکمل معاہدہ</h2>
          <p>
            یہ سروس کی شرائط اور کوئی بھی پالیسیاں یا آپریٹنگ قواعد جو ہم اس سائٹ پر یا سروس کے متعلق پوسٹ کرتے ہیں، آپ اور ہمارے درمیان مکمل معاہدہ اور تفہیم تشکیل دیتے ہیں اور سروس کے آپ کے استعمال کو ریگولیٹ کرتے ہیں۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 18 - حکمرانی قانون</h2>
          <p>
            یہ سروس کی شرائط اور کوئی بھی علیحدہ معاہدے جن کے تحت ہم آپ کو خدمات فراہم کرتے ہیں، بحرین کے قوانین اور ممبئی، مہاراشٹر کے دائرہ اختیار کے تحت حکمرانی اور تشریح کیے جائیں گے۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 19 - سروس کی شرائط میں تبدیلیاں</h2>
          <p>
            آپ اس صفحے پر کسی بھی وقت سروس کی شرائط کا موجودہ ورژن دیکھ سکتے ہیں۔
          </p>
          <p>
            ہمارا یہ حق محفوظ ہے کہ ہم اپنے واحد اختیار پر، ان سروس کی شرائط کے کسی بھی حصے کو اپ ڈیٹ، تبدیل یا تبدیل کر سکتے ہیں۔
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">سیکشن 20 - رابطے کی معلومات</h2>
          <p>
            سروس کی شرائط کے بارے میں سوالات ہمیں <a href="mailto:info@saffary.com">info@saffary.com</a> پر بھیجے جا سکتے ہیں۔
          </p>
        </section>
      </div>
    </div>) : ( <div className="bg-gray-50 mt-20 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-black mb-6">Terms & Conditions</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold">OVERVIEW</h2>
          <p>
            This website is operated by Saffary PVT. LTD. Throughout the site, the terms “we”, “us” and “our” refer to Saffary PVT. LTD.
            Saffary PVT. LTD. offers this application, including all information, tools, and services available from this application to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
          </p>
          <p>
            By visiting our application and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
          </p>
          <p>
            Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the application or use any services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 1 - ONLINE STORE TERMS</h2>
          <p>
            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this application.
          </p>
          <p>
            You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
          </p>
          <p>
            You must not transmit any worms or viruses or any code of a destructive nature.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 2 - GENERAL CONDITIONS</h2>
          <p>
            Payment will be done directly to the representative or agent on a monthly basis.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 3 - ACCURACY, COMPLETENESS, AND TIMELINESS OF INFORMATION</h2>
          <p>
            We are not responsible if the information made available on this application is not accurate, complete, or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete, or more timely sources of information. Any reliance on the material on this site is at your own risk.
          </p>
          <p>
            This application may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only.
          </p>
          <p>
            We reserve the right to modify the contents of this application at any time, but we have no obligation to update any information on our application. You agree that it is your responsibility to monitor changes to our application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h2>
          <p>
            Prices for our products are subject to change without notice.
          </p>
          <p>
            We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
          </p>
          <p>
            We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 5 - ITEMS OR SERVICES</h2>
          <p>
            Certain items or services may be available exclusively online through the application. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your mobile screen's display of any color will be accurate.
          </p>
          <p>
            We reserve the right but are not obligated, to limit the sales of our items or services to any person, geographic region, or jurisdiction. We may exercise this right on a case-by-case basis.
          </p>
          <p>
            We reserve the right to limit the quantities of any items or services that we offer. All items pricing are subject to change at any time without notice, at the sole discretion of us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
          <p>
            Payment will be done directly to the representative or agent on a monthly basis.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 7 - THIRD-PARTY LINK</h2>
          <p>
            Certain content, items, and services available via our Service may include materials from third parties.
          </p>
          <p>
            Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or any other materials, products, or services of third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 9 - USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS</h2>
          <p>
            If at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold">SECTION 10 - PERSONAL INFORMATION</h2>
          <p>
            Your submission of personal information through the store is governed by our Privacy Policy.
          </p>
        </section>
        <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 11 - ERRORS, INACCURACIES, AND OMISSIONS</h2>
        <p>
          Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies, or omissions that may relate to items, pricing, promotions, offers, and availability. We reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information or cancel orders if any information in the Service or on any related application is inaccurate at any time without prior notice (including after you have submitted your order).
        </p>
        <p>
          We undertake no obligation to update, amend or clarify information in the Service or on any related application, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website should be taken to indicate that all information in the Service or on any related website has been modified or updated.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 12 - PROHIBITED USES</h2>
        <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:</p>
        <ul className="list-disc pl-6">
          <li>for any unlawful purpose;</li>
          <li>to solicit others to perform or participate in any unlawful acts;</li>
          <li>to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;</li>
          <li>to infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
          <li>to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;</li>
          <li>to submit false or misleading information;</li>
          <li>to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related links, other links, or the Internet;</li>
          <li>to collect or track the personal information of others;</li>
          <li>to spam, phish, pharm, pretext, spider, crawl, or scrape;</li>
          <li>for any obscene or immoral purpose;</li>
          <li>to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet.</li>
        </ul>
        <p>
          We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
        <p>
          We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
        </p>
        <p>
          You agree that from time to time we may remove the service for indefinite periods or cancel the service at any time, without notice to you.
        </p>
        <p>
          You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties, or conditions of any kind, either express or implied.
        </p>
        <p>
          In no case shall Saffary PVT. LTD., our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 14 - INDEMNIFICATION</h2>
        <p>
          You agree to indemnify, defend and hold harmless Saffary PVT. LTD. and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference or your violation of any law or the rights of a third-party.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 15 - SEVERABILITY</h2>
        <p>
          If any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 16 - TERMINATION</h2>
        <p>
          The obligations and liabilities of the parties incurred before the termination date shall survive the termination of this agreement for all purposes.
        </p>
        <p>
          These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 17 - ENTIRE AGREEMENT</h2>
        <p>
          These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitute the entire agreement and understanding between you and us and govern your use of the Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 18 - GOVERNING LAW</h2>
        <p>
          These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed by the laws of Bahrain and jurisdiction of Mumbai, Maharashtra.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 19 - CHANGES TO TERMS OF SERVICE</h2>
        <p>
          You can review the most current version of the Terms of Service at any time on this page.
        </p>
        <p>
          We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">SECTION 20 - CONTACT INFORMATION</h2>
        <p>
          Questions about the Terms of Service should be sent to us at <a href="mailto:info@saffary.com">info@saffary.com</a>.
        </p>
      </section>

        {/* Add additional sections as needed following the same pattern */}
      </div>
    </div>) }
   
    </>
  );
};

export default TermsAndConditions;
