'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';
import TradingViewTicker from './TradingViewTicker';
import Advertisement from './Advertisement';

const Welcome: React.FC = () => {
  const features = [
    {
      img: '/img/trading-analysis.webp',
      title: 'تحليل السوق',
      description: 'استفد من أدوات التحليل المتقدمة لفهم أداء الأسواق وتحديد الفرص.',
    },
    {
      img: '/img/indic.webp',
      title: 'استراتيجيات مبتكرة',
      description: 'تعلم استراتيجيات تداول تساعدك على تحقيق النجاح بغض النظر عن حالة السوق.',
    },
    {
      img: '/img/stop.webp',
      title: 'إدارة المخاطر',
      description: 'استخدم خطط إدارة المخاطر للحفاظ على استثماراتك في جميع الظروف.',
    },
  ];

  return (
    <div className="relative   bg-cover bg-center">
      <Advertisement />
      <main className="relative isolate">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-orange-900" />

        {/* Header Section */}
        <div className="relative z-10 px-6  lg:px-8">
          <div className="mx-auto max-w-2xl text-center pt-0 sm:pt-10">
            <h1 className="text-2xl mt-10 sm:text-5xl font-extrabold tracking-tight text-orange-500">
              تداول الأوبشن باحترافية
            </h1>
            <p className="mt-8 text-lg sm:text-xl font-medium text-gray-300">
              اكتشف فرصًا غير محدودة لتحقيق النجاح المالي. مع الأوبشن، تستطيع استخدام استراتيجيات مرنة لتحقيق أهدافك بذكاء.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <TradingViewTicker />
          </div>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-400">
              لماذا تختار التداول بالأوبشن؟
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              يوفر التداول بالأوبشن مرونة وابتكارًا يسمح لك بالاستفادة من تقلبات السوق مع إدارة مخاطر محسوبة لتحقيق عوائد مميزة.
            </p>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ img, title, description }, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                />
                <h3 className="mt-4 text-2xl font-semibold text-orange-400">{title}</h3>
                <p className="mt-2 text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative isolate mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex flex-col gap-16 bg-gradient-to-r from-orange-600 to-black px-6 py-16 ring-1 ring-orange-500 sm:rounded-3xl sm:p-8 lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <Image
                alt="ابدأ الآن"
                src="/img/money.webp"
                width={400}
                height={300}
                loading="lazy"
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:max-w-sm"
              />
              <div className="w-full">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  ابدأ الآن رحلتك في عالم التداول
                </h2>
                <p className="mt-6 text-lg text-gray-300">
                  انضم إلى محترفي التداول بالأوبشن اليوم وابدأ بتحقيق أهدافك المالية بخطوات مدروسة وآمنة.
                </p>
                <div className="mt-10">
                  <Link
                    href="https://t.me/sok191bo"
                    target="_blank"
                    className="inline-block px-6 py-3 text-lg font-bold text-black bg-orange-500 rounded-md hover:bg-orange-600 hover:text-white transition"
                  >
                    انضم الآن
                  </Link>
                </div>

                {/* Social Links Section */}
                <div className="mt-10 text-center">
                  <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                    قنوات أبو خالد الرسمية
                  </h3>
                  <div className="flex justify-center gap-6">
                    <Link href="https://t.me/sok191bo" target="_blank">
                      <div className="p-3 bg-blue-500 rounded-full hover:scale-110 transition-transform">
                        <FaTelegramPlane size={32} className="text-white" />
                      </div>
                    </Link>
                    <Link href="https://www.tiktok.com/@sok_191" target="_blank">
                      <div className="p-3 bg-gray-900 rounded-full hover:scale-110 transition-transform">
                        <FaTiktok size={32} className="text-white" />
                      </div>
                    </Link>
                    <Link href="https://www.snapchat.com/add/sok-191" target="_blank">
                      <div className="p-3 bg-yellow-400 rounded-full hover:scale-110 transition-transform">
                        <FaSnapchatGhost size={32} className="text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
