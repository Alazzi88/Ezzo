"use client"

// components/TradingViewEventsWidget.tsx
import React, { useEffect, useRef } from 'react';

/**
 * مكوّن لأداة TradingView لعرض أهم الأخبار الاقتصادية
 * تم استخدام نهج التحميل الديناميكي للسكربت داخل المتصفح،
 * وإضافة الإعدادات على هيئة JSON في script.innerHTML
 */
const TradingViewEventsWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // إنشاء عنصر السكربت
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;

    // الإعدادات الخاصة بأداة TradingView على هيئة JSON
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      isTransparent: false,
      width: '400',
      height: '550',
      locale: 'ar',
      importanceFilter: '0,1',
      countryFilter: 'us',
    });

    // إضافة عنصر السكربت داخل الحاوية
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="mt-10 mb-10">
      {/* عنوان لأهم الأخبار الاقتصادية */}
      <h1 className="text-2xl font-bold text-orange-500 mb-4 text-center">
        أهم الأخبار الاقتصادية
      </h1>
      
      <div className="tradingview-widget-container flex flex-col items-center">
        {/* الحاوية التي سيتم دمج أداة TradingView داخلها */}
        <div
          ref={containerRef}
          className="tradingview-widget-container__widget"
        />

        {/* حقوق TradingView - يمكن تنسيقها عبر Tailwind */}
      </div>
    </div>
  );
};

export default TradingViewEventsWidget;
