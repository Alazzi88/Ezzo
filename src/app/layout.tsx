"use client";

import { Almarai } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Script from "next/script";

const almarai = Almarai({
  subsets: ["latin", "arabic"],
  variable: "--font-almarai",
  weight: ["400", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={almarai.variable}>
      <head>
        <title>Ezzo</title>
        <meta name="title" content="Ezzo" />
        <meta
          name="description"
          content="اكتشف أفضل المؤشرات للتحليل الفني للتداول، واحصل على أدوات ومؤشرات عالية الدقة لمساعدتك في اتخاذ قرارات التداول بثقة."
        />
        <meta
          name="keywords"
          content="مؤشر تداول, تحليلات فنية, أدوات تداول, سوق الأسهم, التداول, مؤشرات تقنية"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MQRDBB3V');`}
        </Script>
        {/* End Google Tag Manager */}
        <meta name="google-adsense-account" content="ca-pub-9870463298829321"></meta>
      </head>
      <body
        className="font-sans text-orange-300 antialiased bg-black min-h-screen flex flex-col"
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQRDBB3V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main className="flex-grow bg-black mt-2 px-0 py-8">
          <div className="max-w-100 mx-auto bg-black p-0 rounded-lg shadow-md">
            {children}
          </div>
        </main>
        <Footer />
        <ScrollToTop />

        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
