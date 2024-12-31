
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
          content="اكتشف أفضل المؤشرات للتحليل الفني للتداول..."
        />
        <meta
          name="keywords"
          content="مؤشر تداول, تحليلات فنية, أدوات تداول..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ezzo - اكتشف التحليل الفني للتداول" />
        <meta
          property="og:description"
          content="دليل شامل لأفضل المؤشرات وأدوات التحليل الفني للمتداولين."
        />
        <meta property="og:url" content="https://3zzo.com" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data (JSON-LD) */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ezzo",
              "url": "https://3zzo.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://example.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){/* كود Google Tag Manager */})(window,document,'script','dataLayer','GTM-MQRDBB3V');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Ads Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10851552359"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10851552359');
          `}
        </Script>
        {/* End Google Ads Tag */}

        {/* حساب AdSense مباشرة بدون ملف env */}
        <meta name="google-adsense-account" content="ca-pub-9870463298829321"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9870463298829321"
          crossOrigin="anonymous"></script>

        {/* إضافة كود AMP Auto Ads في الـ head */}
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        />
      </head>

      <body className="font-sans text-orange-300 antialiased bg-black min-h-screen flex flex-col">
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

        {/* إضافة الـ amp-auto-ads في الـ body */}
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-9870463298829321"
        ></amp-auto-ads>

        <Header />
        <main className="flex-grow bg-black mt-2 px-0 py-8">
          <div className="max-w-100 mx-auto bg-black p-0 rounded-lg shadow-md">
            {children}
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
