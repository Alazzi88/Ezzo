"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import FAQs from "@/components/FAQs";

// فيديوهات الشروحات الأساسية
const videos = [
  {
    url: "  https://www.youtube.com/embed/bVdBpeHcF80?si=-PhaLr0T1lgf_uY-",
    title: "الشرح الاول",
  },

  {
    url: "https://www.youtube.com/embed/DMXkOIfdTtI?si=JgH4vC4QzNCDEM1r",
    title: "الشرح الثاني",
  }, 
   {
    url: "https://www.youtube.com/embed/IWymWx4kYs0?si=2zHXkwnIpjbt172G",
    title: "الشرح الثالث",
  },







];

// فيديوهات الشروحات المتقدمة مع حقلين جديدين: shortDescription, fullDescription, image
// const advancedVideos = [
//   {
//     url: "https://www.youtube.com/embed/XXXXXXXXX",
//     title: "FVG (Fair Value Gap)",
//     shortDescription:
//       "الثغرات السعريّة التي تظهر بسبب تحركات سريعة، توفر فرصًا لمتابعة تدفق السيولة ونقاط الانعكاس.",
//     fullDescription: `يشير مصطلح FVG إلى الفجوات السعريّة التي لا يتم فيها تداول كمية كافية من الأوامر 
//     بسبب حركة سريعة. عند عودة السعر لملء هذه الفجوة، قد تحدث فرصة انعكاس أو استمرار في الاتجاه. 
//     بمؤشرنا، يتم تحديد هذه الفجوات تلقائيًا لرصد مناطق دخول مميزة.`,
//     image: "/img/fvg-indicator.png", // استبدل بالرابط الصحيح لصورة المؤشر
//   },
//   {
//     url: "https://www.youtube.com/embed/XXXXXXXXX",
//     title: "Liquidity (السيولة)",
//     shortDescription:
//       "السيولة هي الوقود الأساسي لتحركات السوق، تعكس مدى توفر البائعين والمشترين.",
//     fullDescription: `تتجمع السيولة عادةً عند القمم والقيعان أو مستويات الدعم والمقاومة الهامة. 
//     في حال اختراق هذه المناطق، تتشكل تحركات قوية. يوفر مؤشرنا تنبيهات عند اقتراب السعر 
//     من مناطق سيولة كبيرة ليستطيع المتداول استغلال الفرصة.`,
//     image: "/img/liquidity-indicator.png",
//   },
//   {
//     url: "https://www.youtube.com/embed/XXXXXXXXX",
//     title: "Order Block",
//     shortDescription:
//       "منطقة يتدخل فيها كبار اللاعبين (مؤسسات مالية) بأوامر ضخمة تحدد اتجاه السوق.",
//     fullDescription: `يُنظر إلى الـOrder Block كمناطق دعم أو مقاومة مستقبلية، 
//     حيث يعود السعر لاختبارها قبل مواصلة التحرك. مؤشرنا يبرز هذه المناطق بسهولة 
//     لمساعدتك في رصد عمليات الشراء أو البيع الكبرى.`,
//     image: "/img/order-block-indicator.png",
//   },
//   {
//     url: "https://www.youtube.com/embed/XXXXXXXXX",
//     title: "Breaker Block",
//     shortDescription:
//       "مستوى دعم/مقاومة يتم كسره بقوة، ثم إعادة اختباره كإشارة لانعكاس محتمل.",
//     fullDescription: `عند كسر دعم أو مقاومة مهمة، ثم إعادة اختبارها، يتحول الدعم إلى مقاومة أو العكس. 
//     هذا النموذج يعرف بـBreaker Block. مؤشرنا يساعدك على اكتشاف هذه النقاط بسهولة 
//     والتأكد من وجود فرصة دخول في اتجاه جديد.`,
//     image: "/img/breaker-block-indicator.png",
//   },
//   {
//     url: "https://www.youtube.com/embed/XXXXXXXXX",
//     title: "Mitigation Block",
//     shortDescription:
//       "منطقة يعود السعر إليها لتصحيح صفقات المؤسسات قبل استمرار الاتجاه.",
//     fullDescription: `الـMitigation Block يقدم فرصة للمتداول الذكي للانضمام للاتجاه العام 
//     بعد أن تصحح المؤسسات وضعيتها. بمؤشرنا، يتم وسم هذه المناطق بدقة لإظهار 
//     أفضل نقاط الدخول المحتملة.`,
//     image: "/img/mitigation-block-indicator.png",
//   },
//   {
//     url: "https://www.youtube.com/embed/XXXXXXXXX",
//     title: "Support & Resistance",
//     shortDescription:
//       "الدعوم والمقاومات هي الأساس في التحليل الفني لتحديد اتجاه السوق.",
//     fullDescription: `تبرز الدعوم والمقاومات مناطق توازن بين البائعين والمشترين. 
//     إذا تم كسرها أو الارتداد منها بشكل قوي، فهي توفر فرص دخول أو خروج واضحة. 
//     في مؤشرنا، يتم توضيح أهم الدعوم والمقاومات بشكل تلقائي.`,
//     image: "/img/support-resistance-indicator.png",
//   },
//   {
//     url: "https://www.youtube.com/embed/XXXXXXXXX",
//     title: "Silver Bullet",
//     shortDescription:
//       "استراتيجية للبحث عن نقطة دخول قوية خلال فترات السيولة العالية.",
//     fullDescription: `تشير الـSilver Bullet في استراتيجيات ICT إلى اقتناص حركة سعرية قوية 
//     عند توافر السيولة بشكل مكثف (مثل فترة لندن أو نيويورك). 
//     يعتمد المؤشر على أنماط السيولة لاقتراح التوقيت الأمثل.`,
//     image: "/img/silver-bullet-indicator.png",
//   },
// ];

const Indicator: React.FC = () => {
  // سنخزّن فهرس (Index) العنصر المفتوح: إذا كان null يعني لا شيء مفتوح
  // const [openIndex, setOpenIndex] = useState<number | null>(null);

  // // دالة للتبديل (Toggle) بين الفتح والإغلاق لكل عنصر
  // const toggleAccordion = (index: number) => {
  //   // إذا كان المفتوح حاليًا هو نفس العنصر، نقفله
  //   // وإلا نفتح العنصر الجديد
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    <>
      {/* هيدر الموقع */}
      <Header />

      {/* قسم الأسئلة الشائعة */}
      <FAQs />

      <div className="bg-gradient-to-b from-black to-gray-900 py-12 mt-12">
        <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* قسم العنوان والوصف */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-orange-500 sm:text-5xl transition-transform duration-500 hover:scale-105">
              تعرف على كيفية عمل مؤشرنا
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              مؤشرنا يعتمد على تقنيات حديثة لتقديم حلول متقدمة لتحليل الأسواق.
              يوفر أدوات قوية لمساعدتك على اتخاذ قرارات استثمارية دقيقة.
            </p>
          </div>

          {/* قسم الفيديوهات الأساسية */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 text-center">
              شروحات أساسية حول المؤشر
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="relative rounded-xl p-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-400 hover:to-orange-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-orange-500 font-bold text-lg">
                        {video.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* قسم الفيديوهات المتقدمة - مع فتح عنصر واحد فقط */}
          {/* <div className="mb-16">
            <h2 className="text-2xl font-bold text-orange-400 mb-6 text-center">
              شروحات متقدمة (مع شرح نصي وصورة عند الضغط أدناه)
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              في هذا القسم سنتعمق في أبرز مفاهيم المؤشر وكيفية دمجها في تحليلاتك، 
              مما يساعدك على اتخاذ قرارات أكثر دقة وثقة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advancedVideos.map((video, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="flex flex-col bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="p-4 border-t border-gray-700">
                      <h3 className="text-lg font-bold text-orange-400 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {video.shortDescription}
                      </p>

                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="flex items-center text-orange-400 hover:text-orange-500 transition-colors"
                        >
                          <span className="mr-2">
                            {isOpen ? "إخفاء التفاصيل" : "عرض التفاصيل"}
                          </span>
                          <span
                            className={`transform transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="p-4 pt-0 text-gray-300">
                        <p className="mt-2 text-sm leading-relaxed">
                          {video.fullDescription}
                        </p>
                        <div className="mt-4 flex justify-center">
                          <Image
                            src={video.image}
                            alt={video.title}
                            width={600}
                            height={350}
                            className="rounded-lg transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div> */}

          {/* قسم المميزات */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-16 transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">
              أبرز مميزات مؤشرنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc pl-6 space-y-4 text-gray-300 leading-relaxed">
                <li>
                  <strong className="text-orange-400">الدعوم والمقاومات:</strong>{" "}
                  تحديد مستويات الدعم والمقاومة الرئيسية لمساعدتك في اتخاذ قرارات
                  البيع والشراء.
                </li>
                <li>
                  <strong className="text-orange-400">تحديد الاتجاهات:</strong>{" "}
                  معرفة الاتجاه العام للسوق بناءً على بيانات دقيقة.
                </li>
                <li>
                  <strong className="text-orange-400">مناطق الشراء والبيع:</strong>{" "}
                  إظهار أفضل المناطق لدخول وخروج الصفقات.
                </li>
              </ul>
              <ul className="list-disc pl-6 space-y-4 text-gray-300 leading-relaxed">
                <li>
                  <strong className="text-orange-400">مناطق العرض والطلب:</strong>{" "}
                  الكشف عن المناطق الحرجة للنشاط السعري.
                </li>
                <li>
                  <strong className="text-orange-400">الساعات الذهبية:</strong>{" "}
                  إشعارات حول أفضل الأوقات لدخول السوق.
                </li>
              </ul>
            </div>
            <p className="mt-6 text-gray-400">
              هذه المميزات تجعل المؤشر أداة لا غنى عنها لدعم تحليلاتك الفنية
              واتخاذ قرارات استثمارية مدروسة.
            </p>
          </div>

          {/* قسم عرض صورة المؤشر الرئيسي */}
          <div className="flex justify-center mb-16">
            <div className="relative overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl max-w-full">
              <Image
                src="/img/indic.webp"
                alt="Indicator Preview"
                width={800}
                height={450}
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* قسم الاشتراكات */}
          <div className="container mx-auto px-4 py-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-8 text-center">
              اختر خطتك المناسبة
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center relative transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                <h4 className="text-xl font-semibold text-orange-400">
                  الاشتراك الشهري
                </h4>
                <div className="mt-4">
                  <p className="text-gray-400 text-sm">249 ريال</p>
                </div>
                <p className="mt-2 text-gray-400">شهر واحد</p>
                <a
                  href="https://3zzo.aryaf.sa/product/%D9%85%D8%A4%D8%B4%D8%B1-%D9%84%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-orange-500 text-black rounded-lg shadow hover:bg-orange-400 transition-colors duration-300"
                >
                  اشترك الآن
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center relative transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                <h4 className="text-xl font-semibold text-orange-400">
                  الاشتراك السنوي
                </h4>
                <div className="mt-4">
                  <p className="text-gray-400 text-sm">1499 ريال</p>
                </div>
                <p className="mt-2 text-gray-400">سنة كاملة</p>
                <a
                  href="https://3zzo.aryaf.sa/product/%D9%85%D8%A4%D8%B4%D8%B1-%D9%84%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-orange-500 text-black rounded-lg shadow hover:bg-orange-400 transition-colors duration-300"
                >
                  اشترك الآن
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <a
                href="https://3zzo.aryaf.sa/"
                className="mt-6 inline-block px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors duration-300"
              >
                اكتشف المزيد
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Indicator;
