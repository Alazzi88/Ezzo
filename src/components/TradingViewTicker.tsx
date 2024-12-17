'use client';

import React, { useEffect, useRef } from 'react';

const TradingViewTicker: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
          { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
          { proName: 'NASDAQ:NVDA' },
          { proName: 'NASDAQ:AAPL' },
          { proName: 'NASDAQ:TSLA' },
          { proName: 'NASDAQ:MSFT' },
          { proName: 'NASDAQ:AMZN' },
          { proName: 'NASDAQ:META' },
          { proName: 'NASDAQ:GOOGL' },
          { proName: 'NASDAQ:NFLX' },
          { proName: 'NASDAQ:AMD' },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: 'adaptive',
        colorTheme: 'dark',
        locale: 'en',
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '20px auto',
        padding: '15px',
        backgroundColor: '#1C1C1E',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(255, 152, 0, 0.3)',
        // border: '1px solid #FF9800',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div
        className="tradingview-widget-copyright"
        style={{
          textAlign: 'center',
          marginTop: '12px',
          color: '#FFB74D',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          style={{
            color: '#FF9800',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFA726')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#FF9800')}
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
};

export default TradingViewTicker;
