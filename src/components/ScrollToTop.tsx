'use client';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // تحديد اتجاه التمرير
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');

      // إظهار الزر عند التمرير لمسافة معينة
      setIsVisible(currentScrollY > 300);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // التمرير إلى الأعلى عند النقر على الزر
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* زر التمرير إلى الأعلى */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 w-12 h-12 rounded-full text-white shadow-md cursor-pointer transition-transform duration-300 ${
            scrollDirection === 'up' ? 'bg-green-500' : 'bg-red-500'
          } hover:opacity-80 animate-bounce`}
          aria-label="Scroll to top"
        >
          <span className="text-2xl">↑</span>
        </button>
      )}

      {/* زر واتساب */}
      <a
        href="https://api.whatsapp.com/send/?phone=966503405496&text&type=phone_number&app_absent=0" // استبدل بالرقم الخاص بك
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
};

export default ScrollToTop;
