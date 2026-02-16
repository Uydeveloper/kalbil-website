// src/components/UyghurTab.js

import React from 'react';
import { Feather, Book, Heart, Sparkles, Compass } from 'lucide-react';

const UyghurTab = () => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg p-6 border border-red-200 text-right rtl"
      dir="rtl"
    >
      {/* باش تىما — ئوتتۇرىدا */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Feather className="w-10 h-10 text-white" />☪
        </div>
        <h2 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-2"
          dir="ltr" // باشلىقنى LTR قىلىپ تۇتۇش ئۈچۈن (گرادىئېنت سەۋەبلىك)
        >
          قۇتئادغۇبلىك
        </h2>
        <p className="text-gray-600 text-lg">ئۇيغۇر خەلقىنىڭ روھىي چىراقى، مەدەنىيىتىنىڭ تىرەك توتاشى</p>
      </div>

      {/* مەزمۇن — ئوڭدىن سولغا */}
      <div className="space-y-6">
        
        {/* تەپسىلى تەپسىلات */}
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-5 border border-red-100">
          <h3 className="font-bold text-xl text-red-800 mb-3 flex items-center gap-2 justify-end">
            <Compass className="w-5 h-5" />
            قۇتئادغۇبلىك نېمە؟
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            «قۇتئادغۇبلىك» دېگەن سۆز «قۇت» (بارلىقنىڭ روھىي ۋە جىسىملىق ھايات كۈچى) ۋە «ئادغۇ» (توغرىلىق، ئۆلچەم، تەبىئىي تەرتىپ) نىڭ بىرلىكىدۇر. 
            بۇ ئۇيغۇرلارنىڭ دۇنيا كۆرۈشى، ھايات قارىشى ۋە ئەخلاقىي مېزانىنى كۆرسىتىدۇ.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 pr-4 list-disc">
            <li>قۇت — بارلىقنىڭ نۇرى، ھاياتنىڭ مەنبەسى</li>
            <li>ئادغۇ — توغرىلىق، ئۆلچەم، تەبىئىي مۇۋازىنىت</li>
            <li>قۇتئادغۇبلىك — ئىنسان، تەبىئەت، ۋە جامائەت ئوتتۇرىسىدىكى مۇتەنىسلىك</li>
          </ul>
        </div>

        {/* دەدەبلىك ۋە ئۇغۇت سۆزلەر */}
        <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-5 border border-yellow-100">
          <h3 className="font-bold text-xl text-yellow-800 mb-3 flex items-center gap-2 justify-end">
            <Heart className="w-5 h-5" />
            دەدەبلىك ۋە ئۇغۇت سۆزلەر
          </h3>
          <div className="space-y-3 text-gray-700 text-sm leading-relaxed pr-2">
            <p>«قۇتىڭ بولسۇن، ئادغۇڭ بوزۇلماسۇن» — ئۇيغۇر خەلقىدىن</p>
            <p>«ئادال بول، قۇتىڭ يوقىلىدۇ؛ توغرى بول، كۆڭلىڭ ئايدۇ» — ئۇيغۇر مەسەلى</p>
            <p>«يەر ئۈستىدە ئەدالەت بولمىسا، كۆك ئاستىدا قۇت يوق» — خەلق ئىپادىسى</p>
          </div>
        </div>

        {/* تارىخىي ئەسەرلەر */}
        <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-xl p-5 border border-teal-100">
          <h3 className="font-bold text-xl text-teal-800 mb-3 flex items-center gap-2 justify-end">
            <Book className="w-5 h-5" />
            تارىخىي ئەسەرلەردە قۇتئادغۇبلىك
          </h3>
          <p className="text-gray-700 leading-relaxed">
            يۈسۈپ خاس ھاجىب يېزىپ قالدۇرغان «تۈركىي كۇتادغۇ بىلىك» دېگەن ئەسەر — قۇتئادغۇبلىكنىڭ ئەڭ چوڭقۇر ئىپادىسى. 
            بۇ ئەسەردە:
          </p>
          <ul className="mt-2 space-y-2 text-gray-700 pr-4 list-disc text-sm">
            <li>«كۇت» (قۇت) — بارلىقنىڭ نۇرى، ئاللاھنىڭ بەرگەن نىعمىتى</li>
            <li>«ئادغۇ» — تۈزگەنلىك، ھەقنى ياخشى بىلىش</li>
            <li>«بىلىك» — بىلىم، ئەخلاق، ھۆكۈمدارلىقنىڭ بىرلىكى</li>
          </ul>
        </div>

        {/* روھىي نەقىل */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100 italic text-gray-700">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
            <p>
              «قۇتئادغۇبلىك — بولۇپ قالغانلىق، بولۇپ يېتىش، ۋە بولۇشنى بىلىش دېگەن سۆزلەرنىڭ بىرلىكىدۇر.»
            </p>
          </div>
        </div>

      </div>

      {/* پەخىرلەنگەن خۇلاسە */}
      <div className="mt-8 text-center text-sm text-gray-500 italic">
        قۇتئادغۇبلىك — ئاتا-بابىمىزنىڭ روھىي مىراسى، بۈگۈنكى كۈندىكى يېتىمچىلىككە قارشى تۇرۇشنىڭ قورالى.
      </div>
    </div>
  );
};

export default UyghurTab;