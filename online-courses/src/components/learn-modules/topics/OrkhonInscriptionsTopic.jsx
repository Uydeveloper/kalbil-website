// src/components/learn-modules/topics/OrkhonInscriptionsTopic.jsx
import React from 'react';

export default function OrkhonInscriptionsTopic() {
  return (
    <div
      className="text-right leading-relaxed text-gray-800 font-sans space-y-6"
      dir="rtl"
      style={{ fontFamily: "'Noto Sans Uighur', 'Amiri', serif" }}
    >
      {/* سەرخەت */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-300 shadow-xl">
        <h1 className="text-4xl font-bold text-teal-900 mb-6 text-center">
          📜 ئورخون يازمىلىرىنىڭ تەپسىلاتى
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-xl font-semibold text-teal-700">تۈركىي خەلقلەرنىڭ قەدىمكى يازمىلىق ئەبىدىلىرى ۋە تارىخىي مەنبە</p>
          <div className="bg-teal-200 px-4 py-2 rounded-full text-teal-800 text-base font-medium shadow-md">
            تارىخىي ئەبىدىلەر ۋە ئەدەبىيات
          </div>
        </div>
        <blockquote className="text-xl font-semibold text-cyan-600 italic text-center border-r-4 border-cyan-400 pr-6 bg-white/60 p-6 rounded-xl shadow-inner">
          ئورخون يازمىلىرى – تۈركىي خەلقلەرنىڭ ئەڭ قەدىمكى يازمىلىق ئەبىدىلىرى، 8-ئەسىردە كۆكتۈركلەر تەرىپىدىن قۇرۇلغان بولۇپ، ئۇيغۇرلارنىڭ ئەسلىنى كۆرسىتىدۇ.
        </blockquote>
      </div>

      {/* مۇقەددىمە */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2">
          <i className="fas fa-book-open text-blue-600"></i> مۇقەددىمە
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          ئورخون يازمىلىرى – تۈركىي خەلقلەرنىڭ تارىخىدا ئەڭ قەدىمكى ۋە مۇھىم يازمىلىق ئەبىدىلەرنىڭ بىرى. بۇ يازمىلىر 8-ئەسىردە كۆكتۈركلەر تەرىپىدىن مۆنگغۇلىيەدىكى ئورخون ئېلىدا قۇرۇلغان بولۇپ، قەدىمكى تۈرك تىلىدا يېزىلغان بولغاچقا، تۈركىي خەلقلەرنىڭ ئەسلى، مەدەنىيىتى ۋە تارىخىنى چۈشىنىشتە ئاساسىي مەنبە بولۇپ كېلىدۇ. يازمىلىر ئىككى خاتىرە تاش قەغىزگە ئۆيۈلگەن بىكتېكستلىق مەتىن بولۇپ، ئوتتۇرا خەنزۇ تىلى ۋە قەدىمكى تۈرك تىلىدا يېزىلغان. ئۇلارنىڭ ئۇيغۇرچە تەرجىمىسىمۇ مەۋجۇت بولۇپ، قەدىمكى تۈرك يازمىلىرىنى زامانىۋى ئۇيغۇرچىغا ئايلاندۇرۇپ بەرگەن 220 بەتلىك ئەسەرلەر بار.
        </p>
        <div className="text-center mt-6 italic text-teal-600 font-semibold">
          ئورخون يازمىلىرى – تۈركىي بىرلىك تارىخىنىڭ ئەبەدىي نىشانى، ئۇيغۇرلارنىڭ قەدىمكى ئەسلىنى ئەكس ئەتتۈرىدۇ.
        </div>
      </section>

      {/* ھاياتى ۋە تارىخىي سىئاقى */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-user text-blue-600"></i> تارىخىي سىئاقى ۋە ئېچىشى
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">تارىخىي سىئاقى</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئورخون يازمىلىرى 8-ئەسىرنىڭ بېشىدا، ئىككىنچى تۈرك خاقانلىقى دەۋرىدە قۇرۇلغان. بۇ دەۋىر تۈركلەرنىڭ ئالتۇن دەۋرى بولۇپ، تەڭ خانلىقىنىڭ باستۇرۇشىدىن كېيىن ئىلتىرىش قاغان تەرىپىدىن ئازاد قىلىنغان زامانغا تەگىشلىدۇ. يازمىلىر بىلگە قاغان (683–734) ۋە كۈل تېگىن (684–731) ئىسمىدىكى قېرىنداش بەگىلەرنى خاتىرە قىلىدۇ. بۇلار ئىلتىرىش قاغاننىڭ نەسلىدىن كەلگەن بولۇپ، تۈرك يېرلىكىدە مۇھىم رۆل ئوينىغان.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئېچىشى ۋە تەتقىقاتى</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئورخون يازمىلىرى 1889-يىلى رۇس ئىلمىي ئىشچىسى نىكولاي يادرىنتسېۋنىڭ ئىشچىلىقىدا مۆنگغۇلىيەدىكى ئورخون ئېلىدا بايقالغان. 1893-يىلى دانىيەلىك تىلشۇناس ۋىلھېلم تومسن تەرىپىدىن يېزىشى يېشىپ بېرىلگەن بولۇپ، 1899-يىلىدا فىرانسۇزچە ۋە 1922-يىلىدا دانىيەچە تەرجىمە قىلىنغان. بۇ يازمىلىر ئورخون ئېلى مەدەنىيەت مەنزىرىسىنىڭ يۇنېسكو دۇنيا مەدەنىيەت مىراسلىقى قىسىمىدۇر.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/orkhon-inscriptions.jpg" alt="ئورخون يازمىلىرىنىڭ سۈرىتى" className="w-full rounded-lg shadow-lg max-w-2xl mx-auto" />
          <p className="text-sm text-gray-600 mt-2">ئورخون يازمىلىرىنىڭ تارىخىي سۈرىتى – مۆنگغۇلىيەدىكى ئورخون ئېلى</p>
        </div>
      </section>

      {/* ئىسىرىللىرى ۋە تەسىرى */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-200 shadow-xl">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-feather-alt text-teal-600"></i> مەزمۇنى ۋە تەسىرى
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">ئاساسىي مەزمۇنى</h3>
            <p className="text-lg leading-8 text-gray-700 mb-4">
              يازمىلىرنىڭ تۈركچە قىسمىدا بىلگە قاغان ئۆزىنىڭ ئىمپېرىيەسىنىڭ كەڭلىكىنى بايان قىلىدۇ: شەرقىي شانتۇڭ تۈزلۈكىگىچە، غەربىي تىمىر قاپقۇچقىغىچە يېتىۋاتقان. ئۇ تۈركلەرنى بىرلەشتۈرۈپ، يالغۇز ۋە يوقسۇل قىلىنغان تۈركلەرنى گۈللەندۈرگەنلىكىنى تەكىتلەيدۇ. كىرگىزلەر ۋە تانغۇتلارغا قىلىنغان ئىشغاللار، كۈل تېگىننىڭ جەڭدە ئۆلتۈرۈلۈشى ۋە بىلگە قاغاننىڭ ئوغلىنىڭ ۋارىسلىقى ھەققىدە ئۇچۇر بېرىدۇ.
            </p>
            <blockquote className="text-xl italic text-teal-700 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
              «تۈركلەر بىرلىكتە،<br />
              ئىمپېرىيەنىڭ كەڭلىكىنى كۆرسىتىپ،<br />
              بىرلىك بىلەن غەلەبىگە ئېرىشىدۇ.»<br />
              – بىلگە قاغان ئابدىلىدىن ئىقتىباس
            </blockquote>
            <p className="text-sm text-gray-600 mt-2">– ئورخون يازمىلىرىدىن</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">تەسىرى</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئورخون يازمىلىرى قەدىمكى تۈرك تىلىنىڭ ئەڭ قەدىمكى ساقلىنىپ قالغان شەكلى بولۇپ، تۈرك خەتتىسىنىڭ يېشىلىشىدا چوڭ قەدەم بولغان. بۇ يازمىلىر تۈركلەرنىڭ تارىخى، مەدەنىيىتى ۋە سىياسىي ھاياتىنى چۈشىنىشكە ياردەم بېرىدۇ، تۈرك خەلقلىرىنىڭ كەلگۈسىسىدە مۇھىم ئورۇن ئىگىلىدۇ. ئۇيغۇرلار بىلەن بۇنىڭ ئۇلىنىشى زور: ئورخون يازمىلىرى ئۇيغۇر خانلىقىنىڭ (744–840) ئەسلى بولۇپ، «توققۇز ئوغۇز» ئىتتىپاقىنى بايان قىلىدۇ.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/orkhon-runes.jpg" alt="ئورخون خەتتى" className="w-full rounded-lg shadow-lg max-w-md mx-auto" />
          <p className="text-sm text-gray-600 mt-2">ئورخون خەتتى – قەدىمكى تۈرك ئەلىپبىسى</p>
        </div>
      </section>

      {/* ۋاقىتلىق كىلىشىرىش */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border-2 border-indigo-200 shadow-xl">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-timeline text-indigo-600"></i> ۋاقىتلىق كىلىشىرىش
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">يىل</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">ئوقىيە</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">716-يىلى</td>
                <td className="px-6 py-4 text-sm text-gray-700">تونىوقوق ئابدىلى قۇرۇلۇشى؛ ئىلتىرىش قاغان دەۋرى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">732-يىلى</td>
                <td className="px-6 py-4 text-sm text-gray-700">كۈل تېگىن ئابدىلى قۇرۇلۇشى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">735-يىلى</td>
                <td className="px-6 py-4 text-sm text-gray-700">بىلگە قاغان ئابدىلى قۇرۇلۇشى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1889-يىلى</td>
                <td className="px-6 py-4 text-sm text-gray-700">نىكولاي يادرىنتسېۋ تەرىپىدىن بايقالغان</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1893-يىلى</td>
                <td className="px-6 py-4 text-sm text-gray-700">ۋىلھېلم تومسن تەرىپىدىن يېزىشى يېشىپ بېرىلگەن</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ھازىرقى دەۋىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">يۇنېسكو دۇنيا مەدەنىيەت مىراسلىقى؛ ئۇيغۇرچە تەرجىمىلەر</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* مەنبەلەر */}
      <section className="mt-8 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl border-2 border-gray-300 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-citation text-gray-600"></i> مەنبەلەر
        </h2>
        <ul className="space-y-2 text-gray-700 text-lg">
          <li>• ئورخون يازمىلىرىنىڭ ئەسلى مەتنى: Göktürk تارىخى (8-ئەسىر)</li>
          <li>• ۋىلھېلم تومسن: تەرجىمىلەر (1893-1922)</li>
          <li>• يۇنېسكو: ئورخون ئېلى مەدەنىيەت مەنزىرىسى</li>
          <li>• مەھمۇد كاشغەرى: «تۈركى تىللار دىۋانى»</li>
          <li>• Uyghur Literature Studies: Orkhon Inscriptions Translations</li>
        </ul>
      </section>
    </div>
  );
}