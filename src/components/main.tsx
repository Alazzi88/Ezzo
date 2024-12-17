'use client'

import React from 'react'
import TradingViewWidget from './TradingViewWidget'

export default function Main() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        margin: "10px auto",
        backgroundColor: "#1A202C", // خلفية رمادية داكنة
        color: "#F7FAFC", // لون النص الأبيض الفاتح
        padding: "5px",
      }}
    >
      {/* العنوان الرئيسي */}
      <h1
        style={{
          color: "#F97316", // اللون البرتقالي
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginTop:"2rem",
          marginBottom: "20px",
        }}
      >
        خريطة الأسهم المحدثة كل ساعة
      </h1>

      {/* النصوص التوضيحية */}
      <p
        style={{
          color: "#F7FAFC", // اللون الأبيض الفاتح
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "10px",
          maxWidth: "800px",
          lineHeight: "1.8",
        }}
      >
        تابع تحركات السوق لحظة بلحظة مع خريطة الأسهم المحدثة. احصل على رؤية واضحة لأداء الأسواق العالمية واتخذ قراراتك بثقة.
      </p>

      <p
        style={{
          color: "#F7FAFC", // اللون الأبيض الفاتح
          fontSize: "1rem",
          textAlign: "center",
          marginBottom: "30px",
          maxWidth: "800px",
          lineHeight: "1.6",
        }}
      >
        من خلال هذه الأداة، يمكنك مراقبة التغيرات اليومية للأسهم الرئيسية ومتابعة أداء الشركات العالمية الكبرى على مدار الساعة.
      </p>

      {/* الحاوية الداخلية التي تحتوي على الودجت */}

        <TradingViewWidget />
    
      </div>
  
  )
}
