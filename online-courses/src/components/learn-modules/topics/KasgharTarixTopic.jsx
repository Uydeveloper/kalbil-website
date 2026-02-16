// src/components/learn-modules/topics/KasgharTarixTopic.jsx
import React from 'react';

export default function KasgharTarixTopic() {
  return (
    <div
      className="text-right leading-relaxed text-gray-800 font-sans space-y-6"
      dir="rtl"
      style={{ fontFamily: "'Noto Sans Uighur', 'Amiri', serif" }}
    >
      {/* سەرخەت */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-300 shadow-xl">
        <h1 className="text-4xl font-bold text-purple-900 mb-6 text-center">
          🏰 قەشقەر شەھىرى تارىخى
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-xl font-semibold text-purple-700">ئىپەك يولىنىڭ مەركىزى – تارىخىي ۋە مەدەنىي پايىتەخت</p>
          <div className="bg-purple-200 px-4 py-2 rounded-full text-purple-800 text-base font-medium shadow-md">
            تارىخىي تەتقىقات
          </div>
        </div>
        <blockquote className="text-xl font-semibold text-pink-600 italic text-center border-r-4 border-pink-400 pr-6 bg-white/60 p-6 rounded-xl shadow-inner">
          قەشقەر – ئىپەك يولىنىڭ غەربى قىسىمدىكى ئەڭ مۇھىم سودا مەركىزى، تۈركىي-ئىسلام مەدەنىيىتىنىڭ نىشانى، تارىختا «ئۇيغۇرلارنىڭ پايىتەختى» دەپ ئاتىلىپ كەلگەن شەھەر.
        </blockquote>
      </div>

      {/* مۇقەددىمە */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2">
          <i className="fas fa-book-open text-blue-600"></i> مۇقەددىمە
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          قەشقەر (ئۇيغۇرچە: قەشقەر؛ چىنچە: 喀什噶尔 – Kāshí; ئىنگلىزچە: Kashgar) – شىنجاڭ ئۇيغۇر ئاپتونوم رايونىدىكى قەشقەر شەھىرىدىكى تارىخىي شەھەر بولۇپ، تارىم ئويمانلىقىنىڭ غەربىدە، پامىر تاغلىرىنىڭ شەرقىدە جايلاشقان. ئۇنىڭ تارىخى 2000 يىلدىن ئارتۇق ۋاقىت بولۇپ، ئىپەك يولىنىڭ مۇھىم ئىستىگىسى بولغان. قەدىمقى زاماندا كۇشان ئىمپېرىيىسى (Kushan Empire) بىلەن تەڭرى خانلىقى (Göktürk Khaganate) ئاستىدا بولسىمۇ، 9-ئەسىردە ئۇيغۇر ئىدىقۇتىنىڭ (Uyghur Idiqut) پايىتەختى بولغان. مەدەنىيەت، سودا ۋە دىن مەركىزى بولۇپ، بوخشىزم، مانىخەيىزم، ئىسلام دىنىنىڭ تەسىرى كۆرۈلگەن. ھازىرقى قەشقەر – ئۇيغۇر مەدەنىيىتىنىڭ نىشانى، ئىدىقۇت مۆسىلى ۋە ئاي ئەيىدىگە ئاتالغان.
        </p>
        <div className="text-center mt-6">
          <img src="/images/kashgar-map.jpg" alt="قەشقەرنىڭ جايلىشىش ئورنى" className="w-full rounded-lg shadow-lg max-w-2xl mx-auto" />
          <p className="text-sm text-gray-600 mt-2">قەشقەرنىڭ جايلىشىش ئورنى – ئىپەك يولىنىڭ غەربى ئىستىگىسى</p>
        </div>
      </section>

      {/* تارىخىي دەۋىرلەر */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-timeline text-blue-600"></i> تارىخىي دەۋىرلەر
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-3">قەدىمقى دەۋىر (مىلادىدىن بۇرۇن 2-ئەسىر – 8-ئەسىر)</h3>
            <p className="text-lg leading-8 text-gray-700">
              قەشقەر قەدىمقى زاماندا كۇشان ئىمپېرىيىسىنىڭ شەرقىدىكى مەركىز بولغان. ئىپەك يولى بويىچە بۇددا دىنىنىڭ تەرگىبى بولغان. 2-ئەسىردە تەڭرى خانلىقى ئاستىغا كىرگەن. 7-ئەسىردە تەڭرىلارنىڭ ئىككىنچى دەۋرىدە ئۇيغۇرلارنىڭ ياشاش مەھەللىسى بولغان. ئارخېئولوگىيىلىك قازىشلاردا بوخشىزم مەبەستىلىرى (ئىدىقۇت مۆسىلى) كۆرۈلگەن.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئۇيغۇر ئىدىقۇتى دەۋىرى (9-13-ئەسىر)</h3>
            <p className="text-lg leading-8 text-gray-700">
              840-يىلى ئۇيغۇر خانلىقىنىڭ ئۆتۈشىدىن كېيىن، قوچو (Qocho) ئىدىقۇتىنىڭ پايىتەختى بولغان. ئىدىقۇت مۆھەممەد (Idiqut Mahmud) بولۇپ، بوخشىزمغا ئۆتكەن. 12-ئەسىردە كاراخىتانلار ئاستىغا كىرگەن. مەدەنىيەت مەركىزى بولۇپ، ئۇيغۇر يېزىقى (Old Uyghur script) ئىشلىتىلگەن. ئىپەك يولى بويىچە سودا كۈچىيىشكەن.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئىسلام دەۋىرى ۋە يەركەند خانلىقى (13-18-ئەسىر)</h3>
            <p className="text-lg leading-8 text-gray-700">
              13-ئەسىردە چاغاتاي خانلىقى (Chagatai Khanate) ئاستىغا كىرگەن. 16-ئەسىردە يەركەند خانلىقىنىڭ مەركىزى بولغان. ئىسلام دىنىنىڭ تەرگىبى بىلەن ئىدىقۇت مۆسىلى ئىسلامغا ئۆتكەن (16-ئەسىر). سۇلتان ساتۇق بۇغرا خان تەرىپىدىن ئىسلامغا ئۆتكەن. مەدەنىيەت مەركىزى بولۇپ، مەسجىتلەر (ئىدىقا) قۇرۇلغان.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئۈچە سولالە ۋە ھازىرقى دەۋىر (18-ئەسىر – ھازىرغىچە)</h3>
            <p className="text-lg leading-8 text-gray-700">
              1759-يىلى چىڭ سولالىسى تەرىپىدىن ئىگىلىنىپ، شىنجاڭنىڭ بىر قىسمى بولغان. 19-ئەسىردە ياقۇپ بېگ (Yakub Beg) نىڭ قوشۇن تەرىپىدىن قىسقا مەزگىل ئىستىقلالىق بولغان. 20-ئەسىردە شىنجاڭ ئىجرايىي رايونىغا ئايلانغان. ھازىرقى قەشقەر – ئۇيغۇر مەدەنىيىتىنىڭ مەركىزى، ئىدىقۇت مۆسىلى ۋە ئاي ئەيىدىگە ئاتالغان.
            </p>
          </div>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">مى.ب. 2-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">كۇشان ئىمپېرىيىسى ئاستىغا كىرىش؛ ئىپەك يولى مەركىزى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">تەڭرى خانلىقى ئاستىغا كىرىش</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">ئۇيغۇر ئىدىقۇتى پايىتەختى (قوچو)</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">كاراخىتانلار ئاستىغا كىرىش؛ ئىسلامغا ئۆتۈش</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">13-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">چاغاتاي خانلىقى ئاستىغا كىرىش</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">16-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">يەركەند خانلىقى مەركىزى؛ سۇلتان ساتۇق بۇغرا خان تەرىپى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1759</td>
                <td className="px-6 py-4 text-sm text-gray-700">چىڭ سولالىسى ئىگىلىنىشى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1865–1877</td>
                <td className="px-6 py-4 text-sm text-gray-700">ياقۇپ بېگ ئىستىقلالىقى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1954</td>
                <td className="px-6 py-4 text-sm text-gray-700">شىنجاڭ ئۇيغۇر ئاپتونوم رايونى قۇرۇلۇشى</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* مەدەنىيەت ۋە نىشانلار */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl border-2 border-pink-200 shadow-xl">
        <h2 className="text-2xl font-bold text-pink-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-paint-brush text-pink-600"></i> مەدەنىيەت ۋە تارىخىي نىشانلار
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/idikah-mosque.jpg" alt="ئىدىقا مەسجىتى" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-pink-800">ئىدىقا مەسجىتى</h3>
            <p className="text-sm text-gray-600">ئىسلام دىنىنىڭ تەرگىبىدىكى ئەڭ قەدىمكى مەسجىت، 15-ئەسىر</p>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/ayni-mosque.jpg" alt="ئاي مەسجىتى" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-pink-800">ئاي مەسجىتى</h3>
            <p className="text-sm text-gray-600">ئاي ئەيىدىگە ئاتالغان، 12-ئەسىر بوخشىزم مەبەستىدىن ئىسلام مەسجىتىغا ئايلانغان</p>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/kashgar-old-city.jpg" alt="ئەتىك شەھەر" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-pink-800">ئەتىك شەھەر</h3>
            <p className="text-sm text-gray-600">يۇنەسكو دۇنيا مەدەنىيىت مۇراسى، ئۇيغۇر تۈركىي مەمەرلىك مەركىزى</p>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/apak-hoja.jpg" alt="ئاپاق خوجا مەزرىسى" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-pink-800">ئاپاق خوجا مەزرىسى</h3>
            <p className="text-sm text-gray-600">ئىسلام مەدەنىيىتىنىڭ نىشانى، 17-ئەسىر</p>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/kashgar-silk-road.jpg" alt="ئىپەك يولى بازىرى" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-pink-800">ئىپەك يولى بازىرى</h3>
            <p className="text-sm text-gray-600">تارىخىي سودا مەركىزى، ھازىرقى يامغۇر بازىرى</p>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/kashgar-uyghur-culture.jpg" alt="ئۇيغۇر مەدەنىيىتى" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-pink-800">ئۇيغۇر مەدەنىيىتى</h3>
            <p className="text-sm text-gray-600">ئۇيغۇر مېھىرى، مۇزىكا ۋە تەنھىرىلەر مەركىزى</p>
          </div>
        </div>
      </section>

      {/* مەنبەلەر */}
      <section className="mt-8 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl border-2 border-gray-300 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-citation text-gray-600"></i> مەنبەلەر
        </h2>
        <ul className="space-y-2 text-gray-700 text-lg">
          <li>• Wikipedia: Kashgar – تەپسىلاتلىق تارىخ</li>
          <li>• Britannica: Kashgar – ئىپەك يولى مەركىزى</li>
          <li>• Uyghur American Association: History of Kashgar</li>
          <li>• UNESCO: Kashgar Old Town – دۇنيا مۇراسى</li>
          <li>• Chinese Academy of Social Sciences: Kashgar in Silk Road History</li>
        </ul>
      </section>
    </div>
  );
}