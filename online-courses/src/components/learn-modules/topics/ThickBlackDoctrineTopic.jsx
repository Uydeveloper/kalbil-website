// src/components/learn-modules/topics/ThickBlackDoctrine.jsx
import React from 'react';

export default function ThickBlackDoctrine() {
  return (
    <div
      className="text-right leading-relaxed text-gray-800 font-sans space-y-6"
      dir="rtl"
      style={{ fontFamily: "'Noto Sans Uighur', 'Amiri', serif" }}
    >
      {/* سەرخەت */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-3xl border-2 border-purple-300 shadow-xl">
        <h1 className="text-4xl font-bold text-purple-900 mb-6 text-center">
          📜 قېلىن-قارا تەلىماتى (داپشاقنامە)
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-xl font-semibold text-purple-700">خىتاي ئىدىيە تارىخىدىكى ئابىدە خاراكتىرلىك ئەسەر</p>
          <div className="bg-purple-200 px-4 py-2 rounded-full text-purple-800 text-base font-medium shadow-md">
            تارىخىي تەلىمات ۋە سىياسىي فەلسەپە
          </div>
        </div>
        <blockquote className="text-xl font-semibold text-indigo-600 italic text-center border-r-4 border-indigo-400 pr-6 bg-white/60 p-6 rounded-xl shadow-inner">
          «پۈتكۈل خىتاي تارىخى — قىلىن ۋە قارا، ۋەسسالام.»<br />
          – لى زۇڭۋۇ
        </blockquote>
      </div>

      {/* مۇقەددىمە */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2">
          <i className="fas fa-book-open text-blue-600"></i> مۇقەددىمە
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          «قېلىن-قارا تەلىماتى» (داپشاقنامە) – 1912-يىلى خىتاي يېقىنقى زامان مۇتەپەككۇرى لى زۇڭۋۇ (李宗吾) تەرىپىدىن يېزىلغان، خىتاي تارىخى، سىياسەت، مەدەنىيىتىگە چوڭقۇر تەسىر كۆرسىتىشى بىلەن مەشھۇر بولغان چوڭقۇر فەلسەپىۋى تەلىمات. بۇ كىتاب خىتاي تارىخىدىكى قەھرىمانلار ۋە رەزىل شەخىسلەرنىڭ مۇۋەپپەقىيەت ۋە مەغلۇبىيىتىنى "يۈز قېلىنلىق" (脸厚) ۋە "كۆڭۈل قارىلىق" (心黑) دېگەن ئىككى ئاساسىي ئۇقۇم بىلەن تەلەشلەيدۇ. 1936-يىلى تولۇق نەشر قىلىنغاندىن كېيىن، بۇ ئەسەر «خىتاي مەدەنىيەت ساھەسىدىكى بىر زور مۆجىزە» دەپ ئاتالغان.
        </p>
        <div className="text-center mt-6 italic text-purple-600 font-semibold">
          «قىلىن-قارا تەلىماتى» — سىياسەتنىڭ ئەمەلىي ھەقىقىتىنى كۆزنى يۇمۇپ تاشلايدىغان ئۈچۈن يېزىلغان قارا ئاينا.
        </div>
      </section>

      {/* ئاپتور ھەققىدە */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-user text-blue-600"></i> ئاپتور لى زۇڭۋۇ ھەققىدە
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">تىرەش-تەرجىمە</h3>
            <p className="text-lg leading-8 text-gray-700">
              لى زۇڭۋۇ 1879-يىلى 2-ئاينىڭ 3-كۈنى سىچۈەن ئۆلكىسى فۇشۈن ناھىيەسىدە تۇغۇلۇپ، 1943-يىلى 9-ئاينىڭ 28-كۈنى 64 يېشىدا ئۆلگەن. ئۇ خىتاي يېقىنقى زامان مۇتەپەككۇرى، مائارىپچى ۋە تارىخ تەنقىدچىسى سۈپىتىدە تونۇلغان. ئالىي مەكتەپ دەۋرىدە تۇڭمېڭخۇي جەمئىيىتىگە قاتنىغان. ئوقۇتقۇچى، مەكتەپ مۇدىرى، سىچۈەن ئۆلكىلىك مائارىپ نازارەتچىسى قاتارلىق ۋەزىپىلەرنى ئۆتىگەن.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئىسمى ۋە ئىدىيەسى</h3>
            <p className="text-lg leading-8 text-gray-700">
              تۇغۇلغاندا "شىكەي" (世楷) دەپ ئاتالغان، لەقىمى "زۇڭرۇ" (宗儒) ئىدى. چېڭدۇدا ئوقۇۋاتقاندا كۇڭزىچىلىقتىكى كەمچىلىكلەرنى بايقىغان، شۇڭا "ئۆزىنى ئۇستاز تۇتۇش" دېگەن مەنىدىكى "زۇڭۋۇ" (宗吾) دەپ ئىسمىنى ئۆزگەرتتى. بۇ ئۇنىڭ "گۇمان بىلەن تارىخقا قاراش، مۇستەقىل ھەقىقەتنى ئىزدەش" دېگەن ئىدىيە بايرىقى بولۇپ قالغان.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-purple-800 mb-2">ئۆزىگە قاراش</h3>
            <p className="text-gray-700">
              ئۆزىنى "قىلىن-قارا تەرىقىتىنىڭ پىرى" (厚黑教主) دەپ ئاتىغان. بىراق يېقىن دوستى ئۇنىڭ ئەمەلىيەتتە "نە يۈزى قېلىن، نە كۆڭلى قارا ئەمەس" دېگەن.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-purple-800 mb-2">يېزىش ئۇسلۇبى</h3>
            <p className="text-gray-700">
              يۇمۇرىستىك، ساتىرە (مەسخىرە) ۋە چوڭقۇر تەنقىد تېخنىكىسىنى بىرلەشتۈرگەن. "ساراڭ" دەپ باھا بېرىلسىمۇ، ئۇ مۇتەسسىپ قاراشلارغا جەڭ ئېلان قىلغان دانىشمىن سۈپىتىدە قارىلىدۇ.
            </p>
          </div>
        </div>
      </section>

      {/* كىتاب مەزمۇنى خۇلاسىسى */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-200 shadow-xl">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-feather-alt text-teal-600"></i> كىتاب مەزمۇنى خۇلاسىسى
        </h2>
        <p className="text-lg leading-8 text-gray-700 mb-4">
          «قىلىن-قارا نەزەرىيەسى» تارىخىي مۇۋەپپەقىيەتنىڭ سىررى — "يۈز قېلىنلىق" ۋە "كۆڭۈل قارىلىق" تا بولىدىغانلىقىنى بايان قىلىدۇ. بۇ ئىككى ئۇقۇم:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* قېلىنلىق */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">قېلىنلىق (厚)</h3>
            <p className="text-gray-700 mb-3">
              <strong>مەنىسى:</strong> نومۇسقا چىداش، ھاقارەتنى ئىچىگە يۇتۇش، ھېسسىياتلارنى باسقۇچ. چېكىگە يەتكەندە، غەزەپ، خۆشالىق، قايغۇ ھېچنى كۆرسىتىلمەيدۇ.
            </p>
            <div className="border-l-4 border-teal-300 pl-4 text-gray-700">
              <strong>دەرىجىلىرى:</strong><br />
              • دەسلەپ: يۈزى سېپىلچە قېلىن (厚如城墙)<br />
              • ئوتتۇرا: قېلىن ھەم قاتتىق (厚而硬) — ليۇ بېي مىسال<br />
              • ئالىي: شەكىلسىز قېلىنلىق (厚而无形) — بۈيۈك دانىشمەنلەر
            </div>
          </div>

          {/* قارىلىق */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">قارىلىق (黑)</h3>
            <p className="text-gray-700 mb-3">
              <strong>مەنىسى:</strong> رەھىمسىز بولۇش، ھەر قانداق ئەخلاقچىلىقنى بۇزۇش، مەقسەتكە يېتىش ئۈچۈن "بالا-چاقىلىرىنى سېتىش"نىمۇ قوبۇل قىلىش.
            </p>
            <div className="border-l-4 border-teal-300 pl-4 text-gray-700">
              <strong>دەرىجىلىرى:</strong><br />
              • دەسلەپ: يۈرىكى كۆمۈردەك قارا (黑如煤炭)<br />
              • ئوتتۇرا: قارا ھەم پارقىراق (黑而亮) — ساۋ ساۋ مىسال<br />
              • ئالىي: رەڭسىز قارا (黑而无色) — بۈيۈك ئەۋلىيالار
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-5 rounded-xl shadow">
          <h3 className="text-xl font-bold text-teal-900 mb-2">بىرلىككە كېلىش</h3>
          <p className="text-gray-700">
            «قېلىنلىق — ئۆزىگە بولغان سەۋرچانلىق (忍于己)، قارىلىق — باشقىلارغا بولغان قاتتىق قوللۇق (忍于人).»<br />
            «كامل قىلىن-قارا كىشى: دۇنيا ئۇنىڭدىن ھېيقىدۇ، جىن-شەيتانلارمۇ ئۇنىڭدىن قورقىدۇ.»
          </p>
        </div>
      </section>

      {/* پەلسەپەۋى ئاساس */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border-2 border-amber-200 shadow-xl">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-atom text-amber-600"></i> فيزىكا ۋە پىسخولوگىيە ئاساسى
        </h2>
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-lg leading-8 text-gray-700">
            لى زۇڭۋۇ: «پىسخىكىلىق ئۆزگىرىشلەر فيزىكا قانۇنىيەتلىرىگە بويسۇنىدۇ.»<br />
            ئۇ «شەخسىيەتچىلىك» (私) نى «ئالەملىك تارتىشىش كۈچى» دەپ قارايدۇ. بۇ كۈچ يوقىتىلسا، ئىنسانىيەت ۋە مەدەنىيەت ۋەيران بولىدۇ.<br />
            شۇڭا، «قىلىن-قارا» — ئەخلاقسىزلىق ئەمەس، بەلكى «ئىنسان تەبىئىتىنى باشقۇرۇش»نىڭ قانۇنىيىتىدۇر.<br />
            <strong>مۇھىم:</strong> قورالنى ھەر قانداق ماқسەتتە ئىشلىتىش مۇمكىن — شەخسىي مەنپەئەت ياكى ئاممىۋى مەنپەئەت ئۈچۈن.
          </p>
        </div>
      </section>

      {/* تارىخىي مىساللار */}
      <section className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-3xl border-2 border-red-200 shadow-xl">
        <h2 className="text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-history text-red-600"></i> تارىخىي مىساللار
        </h2>
        <div className="space-y-6">
          {/* ساۋ ساۋ */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-red-800 mb-2">ساۋ ساۋ — قارىلىق (黑)</h3>
            <p className="text-gray-700">
              «مەن باشقىلارغا تۇزكورلۇق قىلسام قىلىمەنكى، باشقىلارنىڭ ماڭا تۇزكورلۇق قىلىشىغا يول قويمايمەن.»<br />
              لۈ بوشېنىڭ ئائىلىسىنى ئۆلتۈرۈپ، كۇڭ رۇڭ، ياڭ شيۇنى قازىغان. دۇڭ چېڭ، خانىشلارغىمۇ رەھمىسىز.<br />
              <strong>دەرىجىسى:</strong> «قارا ھەم پارقىراق» — قارىلىق بىلەن ئىختىساسلارنى جەلپ قىلغان.
            </p>
          </div>

          {/* ليۇ بېي */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-red-800 mb-2">ليۇ بېي — قېلىنلىق (厚)</h3>
            <p className="text-gray-700">
              بىھايا بولۇش، باشقىلارنىڭ قول ئاستىدا يۈرۈش، يىغلاپ ھەسسىيات كۆتۈرۈش.<br />
              «يىغلاپ تۇرۇپ دۆلەتنى قۇرغان» دەپ ئاتىلىدۇ.<br />
              <strong>دەرىجىسى:</strong> «قېلىن ھەم قاتتىق» — ساۋ ساۋغىمۇ قارشى تۇرالمايدۇ.
            </p>
          </div>

          {/* سۈن چۈەن */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-red-800 mb-2">سۈن چۈەن — تاماملانمىغان بىرىكىش</h3>
            <p className="text-gray-700">
              قېلىن ھەم قارا بولسىمۇ، «ۋايىغا يىتەلمىگەن» — نە ئەڭ قېلىن، نە ئەڭ قارا.<br />
              شۇڭا ئۈچكە بۆلۈنگەن دەۋر يارىتىپ قالغان.
            </p>
          </div>

          {/* سىما يى */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-red-800 mb-2">سىما يى — مۇكەممەل بىرىكىش</h3>
            <p className="text-gray-700">
              جۇگې لياڭ ئايال كىيىمى تاقىغاندا ھاقارەتنى يۇتۇپ تۇرغان (قېلىن).<br />
              ساۋ جەمەتىنى ئالداپ ھاكىمىيەتكە كىرگەن (قارا).<br />
              **جىن سۇلالىسىنى بىرلىككە كەلتۈرگەن.**
            </p>
          </div>

          {/* شياڭ يۈ */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-red-800 mb-2">شياڭ يۈ — قىلىن-قارا تەلىماتىنى بىلمىگەن</h3>
            <p className="text-gray-700">
              «ئاياللارچە رەھىم» (قارا ئەمەس)، «ھىسىياتچان قەھرىمانлыق» (قېلىن ئەمەس).<br />
              خىجىلنەشكە نومۇس قىلغان، قېچىشنى رەت قىلغان.<br />
              **نەتىجىسى: مەغلۇبىيەت.**
            </p>
          </div>

          {/* ليۇ باڭ */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-lg font-bold text-red-800 mb-2">ليۇ باڭ (خەن گاۋزۇ) — قىلىن-قارا تەلىماتىنىڭ پىشىۋاسى</h3>
            <p className="text-gray-700">
              ئاتاسىنى قىيما تاختا ئۈستىگە قويۇشقا يول قويغان.<br />
              بالىلىرىنى ئىتتۈرۋەتكەن.<br />
              سەبداشلىرىنى «قۇش تۈگىگەندە ئوق يىغىش» ئارقىلىق قازىغان.<br />
              **يېڭى بىر دۆلەتنى قۇرغان.**
            </p>
          </div>
        </div>
      </section>

      {/* يېزىلىش سەۋەبى ۋە تەسسىرات */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-200 shadow-xl">
        <h2 className="text-2xl font-bold text-green-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-lightbulb text-green-600"></i> يېزىلىش سەۋەبى ۋە تارقىلىش تارىخى
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-8 text-gray-700">
            دەسلەپ مەزگىللەرگە ساتىرە (مەسخىرە) سۈپىتىدە باشلىنىپ، كېيىن تارىخىي ھەقىقەت بىلەن ئىلىم-پەنگە ئايلىنگەن.<br />
            1912-يىلى تۇنجى قىتىم يېزىلغان، 1936-يىلى «قېلىن-قارا مۇھاكىمىلىرى» (厚黑丛话) شەكلىدە پۈتۈنلەيدۇر.<br />
            لى زۇڭۋۇ مۇشۇ نەزەرىيە بىلەن «ماركىسىنىڭ تارىخىي ماتېرىيالىزمى»غا بەدەل قىلغان.
          </p>
          <blockquote className="text-xl italic text-green-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            «قارا-قېلىنلىق تارىخ قارىشى بىلەن يىگىرمە تۆت تارىخنى ئوقۇپ چىققاندا،<br />
            تارىختىكى مۇۋەپپەقىيەت ۋە مەغلۇبىيەت خۇددى بەش قولدەك ئايدىڭ بولىدۇ.»
          </blockquote>
          <p className="text-lg leading-8 text-gray-700">
            ئۇ «يۈز قېلىن ۋە قارا نىيەت بولۇش ئارقىلىق ۋەتەننى قۇتقۇزۇش» (厚黑救国) دېگەن ئىدىيە تەشەببۇس قىلغان.
          </p>
        </div>
      </section>

      {/* تەسىرى */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border-2 border-indigo-200 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-influence text-indigo-600"></i> كىتابنىڭ تارىخىي ۋە مەدەنىي تەسىرى
        </h2>
        <ul className="space-y-3 text-lg text-gray-700 list-disc pr-6">
          <li>1912-يىلى تۇنجى نەشر قىلىنغاندىن باشلاپ، «خىتاي مەدەنىيەت ساھەسىدىكى بىر زور مۆجىزە» دەپ تونۇلغان.</li>
          <li>لى زۇڭۋۇ «خىتاي مەدەنىيەت تارىخىدىكى 20 چوڭ ئاجايىپ تالانت» قاتارىغا كىرگۈزۈلگەن.</li>
          <li>لىن يۈتاڭ، لياڭ شىچيۇ، بو ياڭ، لى ئاۋ قاتارلىق زېمىل دانىشمەنلەر تەلىماتنى تەتقىق قىلغان.</li>
          <li>«سېسىق خىتايلىقلار» قاتارلىق كېيىنكى تەنقىدىي ئەسەرلەرنىڭ مۇقەددىمىسى ھېسابلىنىدۇ.</li>
          <li>1980-يىللاردا تەيۋەن، شياڭگاڭ، ياپونىيەدە قايتا-قايتا بېسىلىپ، ئەڭ كۆپ سېتىلغان كىتابلار قاتارىغا كىرگەن.</li>
          <li>كىشىلەر «لى زۇڭۋۇ = قىلىن-قارا تەلىماتى» دەپ قارايدۇ — بۇ ئۇنىڭ مەدەنىي مىراسلىق دەرەجىسىنى كۆرسىتىدۇ.</li>
        </ul>
      </section>

      {/* خۇلاسە ۋە تەكلىپ */}
      <section className="mt-8 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl border-2 border-gray-300 shadow-xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">خۇلاسە</h2>
        <p className="text-lg text-gray-700 mb-4">
          «قېلىن-قارا تەلىماتى» — خىتاي تارىخىنىڭ ئەمەلىي مېخانىزمىنى ئاشكارا قىلغان بىر ئابىدە.<br />
          بۇ كىتابنى ئوقۇش — سىياسەت، تارىخ ياكى جەمئىيەتكە نازارەت قىلىشنى ئۆگىنىش دېگەن سۆز.
        </p>
        <div className="mt-6 text-xl font-semibold text-purple-800">
          <a href="#" className="underline hover:text-purple-600">
            KeLBiL سىياسەت تەتقىقات مەركىزى تور بېكىتىدە تېخىمۇ كۆپ ئوقۇش
          </a>
        </div>
        <p className="mt-4 text-gray-600">
          ياقتۇرغان بولسىڭىز، تارقىتىپ قويۇڭ — بىلىم تارقىتىش ھەقىقەت ھېچكەچ بولمايدۇ.
        </p>
      </section>
    </div>
  );
}