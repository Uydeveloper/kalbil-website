// src/components/Blog78.jsx
import React, { useState, useEffect } from 'react';

// SVG: دىنامىك ئالەم مودېلى (ئانىماتسىيە بىلەن)
const AnimatedUniverseModel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let frame;
    const animate = () => {
      setScale(prev => {
        if (isOpen) return Math.min(prev + 0.01, 1.5); // كېڭىيىش
        return Math.max(prev - 0.015, 0.8); // قىسقىرىش
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center my-6">
      <div className="text-center mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
          isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isOpen ? 'ئوچۇق ئالەم: كېڭىيىش' : 'يېپىق ئالەم: قىسقىرىش'}
        </span>
      </div>
      <div 
        className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center shadow-xl"
        style={{ transform: `scale(${scale})`, transition: 'transform 0.1s ease' }}
      >
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-yellow-300 animate-pulse"></div>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600 font-[UKIJ Nasq]">
        {isOpen ? 'چەكسىز كېڭىيىش داۋاملاشقۇچە...' : 'قىسقىرىش باشلىنىۋاتىدۇ...'}
      </p>
    </div>
  );
};

const Blog78 = () => {
  const HeaderImage = () => (
    <div className="relative w-full h-72 bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-xl mb-6 flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite`
            }}
          />
        ))}
      </div>
      <div className="text-center px-4 max-w-2xl z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">كائىناتنىڭ كەلگۈسى نېمە؟</h1>
        <p className="text-lg opacity-90">NASA رەسىملىرى بىلەن ئىزدىنىش</p>
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );

  const Section = ({ title, ja, ug, highlight = false, children }) => (
    <div className={`mb-8 p-5 rounded-lg ${highlight ? 'bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-indigo-500' : 'bg-white shadow-sm border border-gray-100'}`}>
      <h3 className="text-2xl font-bold mb-3 text-gray-800 font-[UKIJ Tuz]">{title}</h3>
      <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed mb-3">{ug}</p>
      <div className="pt-2 border-t border-gray-200">
        <h4 className=" font-semibold text-gray-500 mb-1"></h4>
        <p className="text-gray-600 text-2xl leading-relaxed">{ja}</p>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8" dir="ltr">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8" dir="rtl">
        <HeaderImage />

        {/* كىرگۈزۈش */}
        <Section
          title=""
          ug="ئالەمىمىز چوڭ پارتلاشتا بارلىققا كەلگەن ۋە كېڭىيىشنى داۋاملاشتۇرماقتا. ئۇنىڭ كەلگۈسى ئالەمدىكى ماددا مىقدارىغا باغلىق: ئوچۇق (چەكسىز كېڭىيىش) ياكى يېپىق (قىسقىراش)."
          ja="Our universe, born in the Big Bang, continues expanding. Its fate—eternal expansion or eventual collapse—depends on the total amount of matter (and energy) it contains."
          highlight={true}
        />

        {/* NASA رەسىم: M15 */}
        <div className="mb-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <h4 className="text-center font-[UKIJ Tuz] text-gray-800 mb-3">M15 — ئەڭ قەدىمىي يۇلتۇز توپى (NASA/ESA)</h4>
          <div className="flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f80d695d292300cf957114a/1631794085967-K2RRIX84PUY47AT4GI68/M15+-+Annotated.jpg"
              alt="M15 Globular Cluster"
              className="w-full max-w-md rounded-lg shadow-md border"
              onError={(e) => {
                e.target.src = "https://deepskyworkflows.com/assets/images/gallery/m15-2/m15-2.jpg";
              }}
            />
          </div>
          <p className="text-2xl text-center text-gray-600 mt-2">NASA/ESA Hubble رەسىمى — يېشى ~13 مىليارد يىل</p>
        </div>

        {/* NASA رەسىم: Planck CMB */}
        <div className="mb-8 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
          <h4 className="text-center font-[UKIJ Tuz] text-gray-800 mb-3">Planck ساتېللىتى — CMB خەرىتىسى</h4>
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLFyAypm-wguMSsxviHpR8i32cLOFxWl1bg&s"
              alt="Planck CMB Map"
              className="w-full max-w-md rounded-lg shadow-md border"
            />
          </div>
          <p className="text-2xl text-center text-gray-600 mt-2">ESA/Planck — كائىناتنىڭ 380,000 يىللىك «ئېككىلىك نۇرى»</p>
        </div>

        {/* ئانىماتسىيە بىلەن ئالەم مودېلى */}
        <Section title="دۇنيا كۆرۈنۈشى: ئوچۇق ياكى يېپىق؟">
          <AnimatedUniverseModel />
        </Section>

        {/* قاراڭغۇ ئېنېرگىيە */}
        <Section
          title="قاراڭغۇ ماددا ۋە قاراڭغۇ ئېنېرگىيە"
          ug="قاراڭغۇ ماددا كۆزىتىلىدىغان ماددىدىن 5–6 ھەسسىدىن كۆپ. لېكىن 1998-يىلى سۈپەرنوۋا تەتقىقاتى «كېڭىيىش تېزلىنىۋاتقان»لىقىنى كۆرسىتتى — بۇ «قاراڭغۇ ئېنېرگىيە» نىڭ بارلىقىنى ئىسپاتلىدى. نەتىجىدە، ئالەم **ئوچۇق ۋە تۈز** بولۇشى مۇقىملاشتى."
          ja="Dark matter is 5–6× more abundant than visible matter. But in 1998, supernova studies revealed accelerating expansion—proof of 'dark energy.' This strongly favors an **open, flat universe**."
        />

        {/* خۇلاسە */}
        <div className="mt-10 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-2xl font-bold text-amber-800 mb-3 font-[UKIJ Tuz]">خۇلاسە</h3>
          <p className="text-gray-700 font-[UKIJ Nasq]">
            • **ئوچۇق ئالەم**: ماددا ئاز → چەكسىز كېڭىيىش → سوۋۇق ئاخىر (Heat Death)  
            • **يېپىق ئالەم**: ماددا كوپ → قىسقىراش → بىگ كرانچ  
            • **ھازىرقى كونسېنسۇس**: قاراڭغۇ ئېنېرگىيە بار → **ئالەم ئوچۇق ۋە تۈز**  
            • كائىناتنىڭ ئاخىرى: سوۋۇق، قارا، ۋە تىنچ
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            «كائىناتنىڭ ئاخىرى — نۇر يوق، ھەرىكەت يوق، يەنە بىر سۇتتاقلىق.»
          </p>
          <p className="mt-1 text-gray-600 text-xl" dir="ltr">
            “The end of the universe: no light, no motion — only eternal silence.”
          </p>
          <p className="mt-2 text-xl text-gray-400">© 2026 • KeLBiL بلوگى • NASA / ESA / Planck</p>
        </div>
      </div>
    </div>
  );
};

export default Blog78;