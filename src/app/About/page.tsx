// src/pages/index.tsx

import products, { Product } from "@/app/products"; // تأكد من تعديل المسار حسب هيكل المشروع
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
  return (
    <>
      <Header />

      {/* المقدمة الجديدة حول البرمجة */}
      <section className="relative isolate mt-20 overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
        {/* خلفية بتدرج برتقالي داكن */}
        <div className="absolute inset-0 -z-10 mt-20 bg-[radial-gradient(ellipse_at_center,theme(colors.orange.700),black)] opacity-70" />

        {/* عنصر زخرفي بتأثير ثلاثي الأبعاد */}
        <div className="absolute inset-y-0 right-1/4 -z-10 w-[150%] origin-bottom-right skew-x-[20deg] bg-gradient-to-l from-orange-700 to-transparent opacity-40 shadow-2xl" />

        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <Image
          loading='lazy'
            alt="Logo"
            src="/img/logo.webp"
            width={64}
            height={64}
            className="mx-auto h-16 mb-8 rounded-full"
          />
          <figure className="mt-10">
              <p>
              "أنا مبرمج مواقع ومتداول، وأصنع أدوات برمجية تساعدك في التداول بفعالية وكفاءة."
              </p>
        
          </figure>
        </div>
      </section>

      {/* قسم المشاريع البرمجية */}
      <section className="bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl  font-bold text-orange-500 mb-12 text-center">المشاريع البرمجية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: Product) => (
              <div
                key={product.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border-2 border-black transition-transform transform hover:scale-105"
              >
                {/* إضافة ظل برتقالي للفيديو */}
                <div className="aspect-w-16 aspect-h-9 drop-shadow-[0_4px_6px_rgba(249,115,21,0.5)]">
                  <iframe
                    src={product.imageLink}
                    title={`Project ${product.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-b-2 border-orange-500"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-orange-400">{product.title}</h3>
        
                  <a href={product.imageLink} className="text-orange-500 mt-4 inline-block hover:underline">
                    مشاهدة المشروع &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
