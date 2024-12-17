const Advertisement: React.FC = () => {
  return (
    <section className="relative mt-44 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 py-14 text-center text-white shadow-lg">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-2xl font-extrabold tracking-wide drop-shadow-lg">
          لا تفوّت أفضل العروض في متجرنا !
        </h2>

        <a
          href="https://3zzo.aryaf.sa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="زيارة متجرنا"
          className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-orange-600 transition-transform transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300 relative"
        >
          تسوق الآن
          <span className="absolute -right-12 top-1/2 -translate-y-1/2 text-xl font-bold text-yellow-300 animate-pulse">
            ←
          </span>
        </a>
      </div>

      {/* عنصر ديكوري للخلفية */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-white opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-yellow-200 opacity-20 blur-2xl"></div>
      </div>
    </section>
  );
};

export default Advertisement;
