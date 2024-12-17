import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget: React.FC = () => {
  // مرجع للحاوية
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current && !container.current.querySelector('script')) {
      // إزالة أي محتوى سابق
      container.current.innerHTML = '';

      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        console.log('تم تحميل سكربت ويدجيت TradingView بنجاح.');
      };
      script.onerror = () => {
        console.error('فشل في تحميل سكربت TradingView.');
      };

      // تهيئة السكربت بمحتوى التكوين بدون JSON.stringify
      script.text = `
        {
          "exchanges": [],
          "dataSource": "SPX500",
          "grouping": "sector",
          "blockSize": "market_cap_basic",
          "blockColor": "change",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": true,
          "isDataSetEnabled": true,
          "isZoomEnabled": false,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": "100%",
          "height": "100%"
        }
      `;

      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{
        margin: '30px auto',
        width: '100%',
        maxWidth: '1200px',
        height: '600px', // ارتفاع مناسب لجميع الأجهزة
        position: 'relative',
        backgroundColor: 'transparent',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // إضافة ظل خفيف

      }}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div
        className="tradingview-widget-copyright"
        style={{
          textAlign: 'center',
          marginBottom:"12px",
          color: '#A0A0A0', // لون نص متناسق
          fontSize: '12px',
        
        }}
      >
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          style={{
            color: '#4CAF50', // لون رابط متناسق مع التصميم
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
