import Header from "@/components/header";
import React from "react";
import Image from 'next/image';
const Indicator: React.FC = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/wp4Rb0jwY_k",
      title: "الشرح الأول",
    },
    {
      url: "https://www.youtube.com/embed/BKvL8kzuPpU",
      title: "الشرح الثاني",
    },
    {
      url: "https://www.youtube.com/embed/szgRHJ8sD-w",
      title: "الشرح الثالث",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-black to-gray-900 py-12 mt-12">
        <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-orange-500 sm:text-5xl">
              تعرف على كيفية عمل مؤشرنا
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              مؤشرنا يعتمد على تقنيات الذكاء الصناعي لتقديم حلول متقدمة لتحليل الأسواق.
              يوفر أدوات قوية لمساعدتك على اتخاذ قرارات استثمارية دقيقة.
            </p>
          </div>

          {/* Video Section (3 Videos) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative rounded-xl p-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-400 hover:to-orange-600 transition-all duration-300"
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* Overlay with Title */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-orange-500 font-bold text-lg">
                      {video.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">
              أبرز مميزات مؤشرنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc pl-6 space-y-4 text-gray-300 leading-relaxed">
                <li>
                  <strong className="text-orange-400">الدعوم والمقاومات:</strong>{" "}
                  تحديد مستويات الدعم والمقاومة الرئيسية لمساعدتك في اتخاذ قرارات البيع والشراء.
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
                  <strong className="text-orange-400">فيبوناتشي:</strong> دمج مستويات فيبوناتشي لتحليل الاتجاهات.
                </li>
                <li>
                  <strong className="text-orange-400">مناطق العرض والطلب:</strong> الكشف عن المناطق الحرجة للنشاط السعري.
                </li>
                <li>
                  <strong className="text-orange-400">الساعات الذهبية:</strong> إشعارات حول أفضل الأوقات لدخول السوق.
                </li>
              </ul>
            </div>
            <p className="mt-6 text-gray-400">
              هذه المميزات تجعل المؤشر أداة لا غنى عنها لدعم تحليلاتك الفنية واتخاذ قرارات استثمارية مدروسة.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mb-16">
            <Image
              src="/img/indic.webp"
              alt="Indicator Preview"
              width={800}  // specify width or layout="responsive" for automatic resizing
              height={450} // specify height or layout="responsive" for automatic resizing
              className="rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Subscription Section */}
          <div className="bg-gradient-to-b from-gray-800 to-black shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              اختر خطتك المناسبة
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              احصل على جميع المزايا التي تحتاجها لتحليل الأسواق بشكل احترافي.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold text-orange-400">
                  الاشتراك الشهري
                </h4>
                <p className="mt-4 text-2xl font-bold text-orange-500">
                  249 ريال
                </p>
                <p className="mt-2 text-gray-400">شهر واحد</p>
                <a
                  href="https://3zzo.aryaf.sa/product/%D9%85%D8%A4%D8%B4%D8%B1-%D9%84%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-orange-500 text-black rounded-lg shadow hover:bg-orange-400 transition"
                >
                  اشترك الآن
                </a>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold text-orange-400">
                  الاشتراك السنوي
                </h4>
                <p className="mt-4 text-2xl font-bold text-orange-500">
                  1499 ريال
                </p>
                <p className="mt-2 text-gray-400">سنة كاملة</p>
                <a
                  href="https://3zzo.aryaf.sa/product/%D9%85%D8%A4%D8%B4%D8%B1-%D9%84%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-orange-500 text-black rounded-lg shadow hover:bg-orange-400 transition"
                >
                  اشترك الآن
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              المنتج غير قابل للاسترداد
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Indicator;
