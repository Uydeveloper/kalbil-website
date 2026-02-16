// src/components/Blog77.jsx
import React from 'react';

// SVG: كائىنات يېشى شانچوقى
const UniverseAgeTimeline = () => (
  <div className="flex justify-center my-6">
    <svg width="100%" height="120" viewBox="0 0 800 120" className="bg-white rounded-lg p-4">
      <line x1="50" y1="60" x2="750" y2="60" stroke="#94a3b8" strokeWidth="3" />
      <circle cx="150" cy="60" r="8" fill="#ef4444" />
      <text x="150" y="40" textAnchor="middle" className="text-2xl font-bold fill-red-600">9 مىليارد</text>
      <text x="150" y="85" textAnchor="middle" className="text-2xl fill-gray-600">ماددا كوپ بولسا</text>

      <circle cx="300" cy="60" r="8" fill="#f59e0b" />
      <text x="300" y="40" textAnchor="middle" className="text-2xl font-bold fill-orange-600">13 مىليارد</text>
      <text x="300" y="85" textAnchor="middle" className="text-2xl fill-gray-600">ھەببول ھېسابى</text>

      <circle cx="500" cy="60" r="10" fill="#3b82f6" stroke="white" strokeWidth="2" />
      <text x="500" y="35" textAnchor="middle" className="text-2xl font-bold fill-blue-700">13.7 مىليارد</text>
      <text x="500" y="85" textAnchor="middle" className="text-2xl fill-gray-600">WMAP (2003)</text>

      <circle cx="650" cy="60" r="12" fill="#10b981" stroke="white" strokeWidth="2" />
      <text x="650" y="30" textAnchor="middle" className="text-2xl font-bold fill-emerald-700">13.8 مىليارد</text>
      <text x="650" y="85" textAnchor="middle" className="text-2xl fill-gray-600">Planck (2018)</text>

      <line x1="740" y1="60" x2="750" y2="60" stroke="#94a3b8" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
        </marker>
      </defs>
    </svg>
  </div>
);

// M15 يۇلتۇز توپى رەسىمى (تەسۋىرلىك SVG)
const M15Cluster = () => (
  <div className="flex justify-center my-6">
    <div className="relative">
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-yellow-100 via-orange-200 to-red-300 flex items-center justify-center shadow-lg">
        {/* يۇلتۇزلار — تەسۋىرلىك نۇقتىلار */}
        <div className="absolute w-4 h-4 bg-white rounded-full top-10 left-16 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-yellow-200 rounded-full top-20 right-20"></div>
        <div className="absolute w-5 h-5 bg-white rounded-full bottom-16 left-24 animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-red-200 rounded-full bottom-10 right-16"></div>
        <div className="absolute w-4 h-4 bg-yellow-100 rounded-full top-32 left-32"></div>
        <div className="absolute w-3 h-3 bg-white rounded-full bottom-24 right-28 animate-pulse"></div>
        <div className="text-center px-4">
          <p className="font-bold text-gray-800">M15 يۇلتۇز توپى</p>
          <p className="text-2xl text-gray-600">يېشى: ~13 مىليارد يىل</p>
        </div>
      </div>
    </div>
  </div>
);

// Planck ساتېللىتى نەتىجىلىرى — CMB خەرىتىسى (تەسۋىرلىك)
const PlanckCMB = () => (
  <div className="flex justify-center my-6">
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-full flex items-center justify-center">
        {/* CMB تەۋرىنىشلىرى — تۈزىلمىگەن تۈزلەر */}
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-16 h-1 bg-yellow-300 rounded-full transform rotate-12"></div>
          <div className="absolute top-20 right-12 w-12 h-1 bg-red-400 rounded-full transform -rotate-20"></div>
          <div className="absolute bottom-16 left-20 w-20 h-1 bg-blue-300 rounded-full transform rotate-30"></div>
          <div className="absolute bottom-10 right-16 w-14 h-1 bg-green-300 rounded-full transform -rotate-10"></div>
        </div>
        <div className="text-center px-4 z-10">
          <p className="font-bold text-white">Planck CMB خەرىتىسى</p>
          <p className="text-2xl text-blue-200">يېشى: 13.8 مىليارد يىل</p>
        </div>
      </div>
    </div>
  </div>
);

const Blog77 = () => {
  const HeaderImage = () => (
    <div className="relative w-full h-64 bg-gradient-to-r from-teal-800 via-blue-900 to-indigo-900 rounded-xl mb-6 flex flex-col items-center justify-center text-white">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">كائىناتنىڭ يېشى قانچە؟</h1>
        <p className="text-2lg opacity-85">M15 يۇلتۇزلاردىن Planck CMB غىچە</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/50 to-transparent rounded-b-xl"></div>
    </div>
  );

  const Section = ({ title, ja, ug, highlight = false, children }) => (
    <div className={`mb-8 p-5 rounded-lg ${highlight ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500' : 'bg-white shadow-sm border border-gray-100'}`}>
      <h3 className="text-2xl font-bold mb-3 text-gray-800 font-[UKIJ Tuz]">{title}</h3>
      <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed mb-3">{ug}</p>
      <div className="pt-2 border-t border-gray-200">
        <h4 className="text-xs font-semibold text-gray-500 mb-1"></h4>
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
          ug="بىزنىڭ ئالەمىمىز ئارىلىققا ماس كېلىدىغان سۈرئەتتە كېڭىيىۋاتىدۇ. بۇ كېڭىيىش سۈرئىتى «ھەببول تۇراقلىقى» دەپ ئاتىلىدۇ. بۇ تۇراقلىقىنى بىلسەك، ئالەمنىڭ قاچان كېڭىيىشكە باشلىغانلىقىنى، يەنى ئۇنىڭ يېشىنى بېكىتەلەيمىز."
          ja="Our universe expands at a rate proportional to distance—this is the Hubble constant. Knowing it allows us to calculate when expansion began: the age of the universe."
          highlight={true}
        />

        {/* M15 يۇلتۇز توپى — قەدىمىي يۇلتۇزلار */}
        <Section
          title="M15: قەدىمىي يۇلتۇز توپى"
          ug="M15 (Messier 15) — بىزگە ئەڭ يېقىن ۋە ئەڭ قەدىمىي شار شەكىللىك يۇلتۇز توپلىرىنىڭ بىرى. ئۇنىڭ يۇلتۇزلارىنىڭ يېشى تەخمىنەن **12–13 مىليارد يىل**. ئالەم بۇ يۇلتۇزلاردىن تازا ياش بولۇشى كېرەك."
          ja="M15 is one of the oldest globular clusters. Its stars are ~12–13 billion years old—proving the universe must be older."
        >
          <M15Cluster />
        </Section>

        {/* WMAP ۋە Planck */}
        <Section
          title="WMAP ۋە Planck ساتېللىتلىرى"
          ug="WMAP (2003): ئالەمنىڭ يېشى **13.7 ± 0.2 مىليارد يىل**.  
          Planck (2018): **13.8 مىليارد يىل** (خاتالىق ±20 مىليون يىل).  
          بۇ نەتىجىلەر **ئالەم ئارقا كۆرۈنۈش رادىئاتسىيىسى** (CMB) دىكى مىكرو تېمپېراتۇرا تەۋرىنىشلىرى ئاساسىدە. CMB — چوڭ پارتلاشتىن 380,000 يىل كېيىنكى «ئېككىلىك نۇر»."
          ja="WMAP (2003): 13.7 ± 0.2 Gyr. Planck (2018): **13.8 Gyr** (±20 Myr). Both based on ultra-precise Cosmic Microwave Background (CMB) maps—the 'baby photo' of the universe, 380,000 years after the Big Bang."
        >
          <PlanckCMB />
        </Section>

        {/* قاراڭغۇ ئېنېرگىيە ۋە ياش */}
        <Section
          title="قاراڭغۇ ئېنېرگىيە: ياشنى ئۇزارتىدىغان كۈچ"
          ug="كېڭىيىشنىڭ **تېزلىنىۋاتقانلىقى** (1998-يىلى سۈپەرنوۋا تەتقىقاتىدا بايقالدى) بىزگە قاراڭغۇ ئېنېرگىيە بارلىقىنى كۆرسىتتى. بۇ كۈچ كېڭىيىشنى بوستىماستىن، **تېزلىتىدۇ**. نەتىجىدە، ئالەم ئىلگىرىقىدىن تېخىمۇ **قېرىراق** — 13.8 مىليارد يىل."
          ja="The discovery of accelerating expansion (1998) revealed dark energy—a repulsive force that speeds up expansion. This makes the universe slightly older: **13.8 billion years**."
        />

        {/* شانچوق */}
        <div className="my-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
          <h4 className="text-center font-[UKIJ Tuz] text-gray-800 mb-2">كائىنات يېشىنىڭ تارىخىي رىقابىتى</h4>
          <UniverseAgeTimeline />
        </div>

        {/* خۇلاسە */}
        <div className="mt-10 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border-l-4 border-emerald-500">
          <h3 className="text-2xl font-bold text-emerald-800 mb-3 font-[UKIJ Tuz]">خۇلاسە</h3>
          <p className="text-gray-700 font-[UKIJ Nasq]">
            • M15 يۇلتۇزلارى: ~13 مىليارد يىل → ئالەم بۇنىڭدىن قېرىراق  
            • WMAP (2003): 13.7 مىليارد يىل  
            • Planck (2018): **13.8 مىليارد يىل** (ئەڭ ئېنىق نەتىجە)  
            • بازىسى: CMB + قاراڭغۇ ماددا (23%) + قاراڭغۇ ئېنېرگىيە (73%)
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            «كائىناتنىڭ يېشى — چوڭ پارتلاشتىن ھازىرگىچە بولغان ئۆتكەن ۋاقىت.»
          </p>
          <p className="mt-1 text-gray-600 text-2xl" dir="ltr">
            “The age of the universe is the time elapsed since the Big Bang.”
          </p>
          <p className="mt-2 text-xl text-gray-400">© 2026 • KeLBiL بلوگى • M15 / WMAP / Planck</p>
        </div>
      </div>
    </div>
  );
};

export default Blog77;