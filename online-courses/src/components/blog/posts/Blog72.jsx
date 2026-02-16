// src/components/Blog73.jsx
import React from 'react';
import { FaStar, FaBook, FaCompass, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// SVG: بوشلۇق بۇرمىلىنىشى — تەسۋىرلىك رەسىم
const SpacetimeWarp = () => (
  <div className="flex justify-center my-6">
    <svg width="300" height="200" viewBox="0 0 300 200" className="drop-shadow-lg">
      {/* رېزىنكا تاختا (بوشلۇق) */}
      <defs>
        <linearGradient id="gridGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="200" fill="url(#gridGradient)" />
      
      {/* چېتىنى تورغا ئوخشىتىش */}
      {[...Array(10)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 20} x2="300" y2={i * 20} stroke="#6366f1" strokeWidth="0.5" />
      ))}
      {[...Array(15)].map((_, i) => (
        <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="200" stroke="#6366f1" strokeWidth="0.5" />
      ))}

      {/* مەرمەر تاش (قارا ئۆڭكۈر) */}
      <circle cx="150" cy="100" r="25" fill="black" />
      <circle cx="150" cy="100" r="20" fill="url(#blackHoleGradient)" />
      <defs>
        <radialGradient id="blackHoleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" />
          <stop offset="100%" stopColor="#333" />
        </radialGradient>
      </defs>

      {/* بۇرمىلىنىش — ئېگىلگەن سىزىقلار */}
      <path d="M 30 100 Q 150 130 270 100" stroke="#000" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M 30 80 Q 150 110 270 80" stroke="#000" strokeWidth="1.5" fill="none" opacity="0.2" />
      <path d="M 30 120 Q 150 150 270 120" stroke="#000" strokeWidth="1.5" fill="none" opacity="0.2" />
    </svg>
  </div>
);

const Blog73 = () => {
  return (
    <div 
      className="max-w-4xl mx-auto px-4 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
    >
      {/* باشلىق */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          قارا ئۆڭكۈر: كائىناتشۇناسلىقنىڭ ئەڭ چوڭ سىرى
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          «قارا ئۆڭكۈر» سۆزىنىڭ مەنىسى — «قارا ئۆڭ».
        </p>
      </div>

      {/* ھەقىقىي رەسىم: M87* قارا ئۆڭكۈر (Event Horizon Telescope) */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-200 dark:border-gray-700">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/First_image_of_black_hole_M87.jpg/1280px-First_image_of_black_hole_M87.jpg"
          alt="M87* Black Hole - First direct image"
          className="w-full h-auto"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden text-center p-4 bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-500 italic">M87* قارا ئۆڭكۈر — Event Horizon Telescope</p>
        </div>
        <div className="bg-gradient-to-r from-black/70 to-transparent text-white p-4 absolute bottom-0 left-0 right-0">
          <p className="text-center text-sm font-bold">دۇنيانىڭ تۇنجى تىكەلەي قارا ئۆڭكۈر رەسىمى (2019)</p>
        </div>
      </div>

      {/* مۇھىم ئېلان */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white p-6 rounded-2xl mb-10 border border-cyan-900/30 relative">
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cyan-500 animate-pulse opacity-70"></div>
        <p className="text-2xl leading-relaxed">
          قارا ئۆڭكۈر — تارتىش كۈچى شۇنچە كۈچلۈككى،
          <span className="font-bold text-cyan-300">ھەتتا نۇرمۇ قېچىپ كېتەلمەيدىغان</span> جىسىم.
          ھېچقانداق نۇر قېچىپ كېتەلمىگەچكە، بۇ جىسىم پۈتۈنلەي قارا رەڭدە كۆرۈنىدۇ —
          شۇڭا «قارا ئۆڭكۈر» دەپ ئاتالغان.
        </p>
      </div>

      {/* بۆلۈم 1: قېچىش سۈرئىتى */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400 border-b pb-2 border-gray-200 dark:border-gray-700">
          قېچىش سۈرئىتى — قارا ئۆڭكۈرنىڭ كۇنۇپكىسى
        </h2>
        <p className="text-2xl leading-relaxed mb-4">
          يەر شارىدىن بىر توپنى يۇقىرىغا ئېتىپ بېقىڭ. ئەگەر سۈرئىتى <strong>11 كىلومېتىر/سېكۇنت</strong> (يەر قېچىش سۈرئىتى) دىن تېز بولسا، ئۇ قايتىپ كەلمەيدۇ.
        </p>
        <p className="text-2xl leading-relaxed mb-4">
          بىراق، ئەگەر بىر ئاسمان جىسىمىنىڭ قېچىش سۈرئىتى <strong>نۇر سۈرئىتى (300,000 كم/س)</strong> دىن تېز بولسا چىقىدۇ؟
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 mb-4">
          <p className="italic text-blue-800 dark:text-blue-200">
            «توپنى قانچىلىك تېز ئېتىۋەتسىڭىزمۇ، ئۇ ھەمىشە تۆۋەنگە چۈشۈپ كېتىدۇ. چۈنكى نۇردىمۇ شۇ جىسىمدىن قورتۇلالمىدۇ!»
          </p>
        </div>
      </section>

      {/* بۆلۈم 2: بوشلۇق بۇرمىلىنىشى */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-green-600 dark:text-green-400 border-b pb-2 border-gray-200 dark:border-gray-700">
          بوشلۇقنىڭ بۇرمىلىنىشى — نىسبىيلىك نەزەرىيىسى بويىچە
        </h2>
        <SpacetimeWarp />
        <p className="text-2xl leading-relaxed mb-4">
          ئالبېرت ئېينىشتېيننىڭ نىسبىيلىك نەزەرىيىسىگە ئاساسلانغاندا، قارا ئۆڭكۈر —
          <span className="font-semibold">بوشلۇقنىڭ چەتئەدەك بۇرمىلىنىشى</span>.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl mb-4">
          <p className="text-2xl">
            <strong>تەسەۋۋۇر قىلىڭ:</strong> كەڭ رېزىنكى تاختا چىزىپ، ئۈستىگە مەرمەر تاش قويۇڭ.
            مەرمەرنىڭ ئاستىدىكى رېزىنكا ئېگىلىپ كېتىدۇ.
            بۇ — <span className="text-green-500">بوشلۇقنىڭ تارتىش كۈچى ئاستىدىكى بۇرمىلىنىشى</span>.
          </p>
        </div>
        <p className="text-2xl leading-relaxed">
          قارا ئۆڭكۈر بار يەردە بوشلۇق شۇنچە كۈچلۈك بۇرمىلىنىپ،
          ئۆڭكۈرگە يېقىن يۆتكىلىدىغان ھەر نەرسە (ھەتتا نۇر) ئۇنىڭغا چۈشۈپ كېتىدۇ.
        </p>
      </section>

      {/* بۆلۈم 3: قارا ئۆڭكۈر قانداق پەيدا بولىدۇ؟ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400 border-b pb-2 border-gray-200 dark:border-gray-700">
          ئاسمان جىسىملىرىنىڭ ئۆلۈشى — قارا ئۆڭكۈرنىڭ تۇغۇلۇشى
        </h2>
        <ul className="list-disc pr-6 text-2xl space-y-3 mb-4">
          <li>غايەت زور يۇلتۇزلار (قۇياش ماسسىسىدىن <strong>8 ھەسسىدىن ئارتۇق</strong>) ئۆمرىنىڭ ئاخىرىدا <strong>دەرىجىدىن تاشقىرى يېڭى يۇلتۇز</strong> پارتلىشىغا ئۇچرىيىدۇ.</li>
          <li>يادرو قىسقۇچ بەسنىمى بىلەن <strong>نۆل ھەجىم، چەكسىز زىچلىق</strong> نۇقتىسى — يەككەلىك (Singularity) قىلىدۇ.</li>
          <li>ئەگەر قۇياشنى <strong>دېئامېتىرى 6 كىلومېتىر</strong> كېلىدىغان شارغا سىقىلسا، قارا ئۆڭكۈرگە ئايلىنىدۇ!</li>
        </ul>
      </section>

      {/* بۆلۈم 4: بايقالىش ئۇسۇلى */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 border-b pb-2 border-gray-200 dark:border-gray-700">
          كۆرۈنمەيدىغاننى قانداق بايقالىش كېرەك؟
        </h2>
        
        {/* Sagittarius A* رەسىمى */}
        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200 dark:border-yellow-800">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Black_hole_-_Messier_87_crop_max_res.jpg/800px-Black_hole_-_Messier_87_crop_max_res.jpg"
            alt="Sagittarius A* and M87 comparison"
            className="w-full h-auto"
          />
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">سامان يېلىنىڭ مەركىزىدىكى Sagittarius A* (سول) ۋە M87* (ئوڭ)</p>
          </div>
        </div>

        <p className="text-2xl leading-relaxed mb-4">
          قارا ئۆڭكۈرلەردىن نۇر چىقمايدۇ، لېكىن ئۇلارنىڭ ئەتراپىغا ماددا يىغىلغاندا —
          <span className="font-semibold text-yellow-400">ئاڭلاشچان نۇر ۋە X-شۇئال</span> چاچىرىلىدۇ.
        </p>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-5 rounded-xl border border-yellow-200 dark:border-yellow-800 mb-4">
          <p>
            <strong>مەشھۇر مىسال:</strong> Cygnus X-1 — بۇ قوش يۇلتۇز سىستېمىسىنىڭ بىر ئەزاسى
            قارا ئۆڭكۈر بولۇپ، يارىداش يۇلتۇزدىن گاز سۆرۈپ،
            <span className="text-red-600 dark:text-red-400">غايەت زور رېنتىگېن نۇرى</span> چاچىرىدۇ.
          </p>
        </div>
        <p className="text-2xl leading-relaxed">
          شۇنداقلا، <strong>سامان يېلى</strong> (Milky Way) نىڭ مەركىزىدەكى
          <strong>Sagittarius A*</strong> قاتارلىق جايلاردا،
          قۇياشنىڭ <strong>ميلىيونلىغان ھەسسىسى</strong> بىر نۇقتىغا يىغىلغان،
          بۇ يەنە بىر دەلىل كىنى.
        </p>
      </section>

      {/* خۇلاسە */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-8 rounded-2xl text-center mb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <h2 className="text-3xl font-bold mb-4 relative z-10">خۇلاسە</h2>
        <p className="text-2xl max-w-3xl mx-auto relative z-10">
          قارا ئۆڭكۈر — فيزىكانىڭ چەت ئەدەك چېگى،
          نۇر قېچىپ كېتەلمەيدىغان بولۇپ،
          بۇشلۇقنىڭ چەكىتىنىڭ بارلىقىنى ئىسپاتلايدۇ.
          ئۇنى كۆرۈشكە بولمىسىمۇ،
          ئۇنىڭ ھەرىكىتى ۋە تەسىرى بىلەن بايقالىدۇ.
        </p>
      </section>

      {/* مەلۇمات قۇتۇسۇ */}
      <div className="flex flex-wrap justify-between items-center mt-8 text-2xl text-gray-500 dark:text-gray-400 border-t pt-6">
        <div className="flex items-center gap-2">
          <FaUser /> قاۋۇلجان
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt /> 2026-يىل 1-ئاي 7- كۇن 
        </div>
        <div className="flex items-center gap-2">
          <FaStar /> كائىناتشۇناسلىق
        </div>
        <div className="flex items-center gap-2">
          <FaCompass /> قارا ئۆڭكۈر
        </div>
      </div>

      {/* تېگلەر */}
      <div className="mt-6 flex flex-wrap gap-2 justify-end">
        {['فىزىكا', 'نىسبىيلىك', 'دەرىجىدىن تاشقىرى يېڭى يۇلتۇز', 'سامان يېلى', 'تارتىش كۈچى', 'بوشلۇق'].map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xl">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog73;