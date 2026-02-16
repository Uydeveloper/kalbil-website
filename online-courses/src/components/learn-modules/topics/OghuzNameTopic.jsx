// src/components/learn-modules/topics/OghuzNameTopic.jsx
import React from 'react';

export default function OghuzNameTopic() {
  return (
    <div
      className="text-right leading-relaxed text-gray-800 font-sans space-y-6"
      dir="rtl"
      style={{ fontFamily: "'Noto Sans Uighur', 'Amiri', serif" }}
    >
      {/* سەرخەت */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-300 shadow-xl">
        <h1 className="text-4xl font-bold text-teal-900 mb-6 text-center">
          📜 ئوغۇز نامىنىڭ تارىخى
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-xl font-semibold text-teal-700">تۈركىي خەلقلەرنىڭ قەدىمكى ئىتتىپاق نىشانى ۋە مۇھىم مۆلچەر</p>
          <div className="bg-teal-200 px-4 py-2 rounded-full text-teal-800 text-base font-medium shadow-md">
            تارىخىي نىشان ۋە ئەدەبىيات
          </div>
        </div>
        <blockquote className="text-xl font-semibold text-cyan-600 italic text-center border-r-4 border-cyan-400 pr-6 bg-white/60 p-6 rounded-xl shadow-inner">
          ئوغۇز نامى – تۈركىي خەلقلەرنىڭ ئىككىنىڭ يامىسىغىچە بولغان ئىتتىپاق نىشانى، ئۇيغۇرلارنىڭ ئەسلى «توققۇز ئوغۇز» ئىتتىپاقى بىلەن باغلىنىدۇ.
        </blockquote>
      </div>

      {/* مۇقەددىمە */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2">
          <i className="fas fa-book-open text-blue-600"></i> مۇقەددىمە
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          ئوغۇز نامى – مەركىزىي ئاسىيادىن غەربىي ئاسىياغىچە يەتكەن تۈركىي خەلقلەرنىڭ قەدىمكى ئىتتىپاق نىشانى. بۇ نامنىڭ تارىخى ئىككىنىڭ يامىسىغىچە بولۇپ، تۈرك تىلىدىكى «ئىتتىپاق» ياكى «قەۋم» مەنىسىغا ئاساسەن كېلىپ چىققان. ئوغۇزلارنىڭ ئەسلى خەنزۇ مەنبەلىرىدىكى Xiongnu لار بىلەن ئۇلىنىدۇ، 8-ئەسىردە Göktürk خانلىقى دەۋرىدە «Oghuz» دەپ تىلغا ئېلىنغان. ئۇيغۇر خانلىقىنىڭ «توققۇز ئوغۇز» (تۆگىز ئىتتىپاق) شەكلى بۇ نامنىڭ ئۇيغۇرلار بىلەن بىۋاسىتە باغلىنىشىنى كۆرسىتىدۇ. 11-ئەسىردىن كېيىن «توركمان» غا ئۆتكەن بولسىمۇ، ئۇنىڭ تارىخىي مۇھىملىقى تۈركىي خەلقلەرنىڭ كۆچۈش ۋە بىرلىك تارىخىنى ئىپادىلەيدۇ. ئوغۇز نامى ئورخون يازمىلىرىدىن باشلاپ، مەھمۇد كاشغەرىنىڭ «تۈركى تىللار دىۋانى»غىغىچە ساقلىنىپ كەلگەن.
        </p>
        <div className="text-center mt-6 italic text-teal-600 font-semibold">
          ئوغۇز نامى – تۈركىي ئىتتىپاقنىڭ ئەبەدىي نىشانى، ئۇيغۇرلارنىڭ قەدىمكى ئەسلىنى ئەكس ئەتتۈرىدۇ.
        </div>
      </section>

      {/* ھاياتى ۋە تارىخىي سىئاقى */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-user text-blue-600"></i> ئېتىمولوگىيىسى ۋە تارىخىي سىئاقى
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئېتىمولوگىيىسى</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئوغۇز نامى قەدىمكى تۈركچىدىكى *oγuz سۆزىدىن كېلىدۇ، مەنىسى «ئىتتىپاق»، «قەۋم بىرلىكى» ياكى «ئۇيۇش». بەزى ئالىملار بۇنى ئوتچىلىق ھايۋانچىلىق بىلەن باغلايدۇ، چۈنكى ئوغۇز قەۋملىرى ئارىزىلار بىلەن بىرلىكتە ياشىغان. 10-ئەسىردە ئىسلام مەنبەلىرىدە «توركمان» دەپ ئالماشتۇرۇلغان، بۇ ئىسلامىيەتلىشىشىنى كۆرسىتىدۇ. خەنزۇ مەنبەلىرىدە *Wūjiē شەكلىدە كۆرۈلىدۇ.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">تارىخىي سىئاقى</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئوغۇز ئىتتىپاقىنىڭ كېلىپ چىقىشى مەركىزىي-شەرقىي ئاسىيادىن (ئالتاي-سايان رايونى) باشلىنىدۇ. 8-ئەسىردە Göktürk خانلىقى دەۋرىدە شەكىللىنىپ، ئۇيغۇر خانلىقى بىلەن ئايرىلغان. 9-10-ئەسىرلەردە جېتىسۇ ۋە ئارال دەھلىزىگە كۆچۈپ، Seljuk ئىمپېرىيىسىنىڭ ئەسلى بولغان. بۇ دەۋىر تۈركىي خەلقلەرنىڭ كۆچۈش ۋە ئىسلامغا ئۆتۈش دەۋرى بولۇپ، ئوغۇز نامى ئىتتىپاقنىڭ نىشانىغا ئايلانغان.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/oghuz-tribes-map.jpg" alt="ئوغۇز قەۋملىرىنىڭ خەرىتىسى" className="w-full rounded-lg shadow-lg max-w-2xl mx-auto" />
          <p className="text-sm text-gray-600 mt-2">ئوغۇز قەۋملىرىنىڭ تارىخىي كۆچۈش خەرىتىسى – مەركىزىي ئاسىيادىن غەرەپكە</p>
        </div>
      </section>

      {/* ئىسىرىللىرى ۋە تەسىرى */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-200 shadow-xl">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-feather-alt text-teal-600"></i> تارىخىي ئىپادىلەنمىلىرى ۋە تەسىرى
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">ئاساسىي ئىپادىلەنمىلىرى</h3>
            <p className="text-lg leading-8 text-gray-700 mb-4">
              ئوغۇز نامىنىڭ تارىخىي ئىپادىلەنمىلىرى 8-ئەسىردىن باشلاپ كۆرۈلىدۇ، مەسىلەن، ئورخون يازمىلىرىدا «Oghuz» دەپ تىلغا ئېلىنغان. مەھمۇد كاشغەرىنىڭ «تۈركى تىللار دىۋانى»دا 22 قەۋم سەنلىنىپ، ئىتتىپاقنى بايان قىلغان. ئۇيغۇر خانلىقى دەۋرىدە «توققۇز ئوغۇز» شەكلىدا كۆرۈلىدۇ.
            </p>
            <blockquote className="text-xl italic text-teal-700 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
              «ئوغۇز قەۋملىرى بىرلىكتە،<br />
              تۈركىي نەسلنىڭ ئەسىلى بولۇپ،<br />
              ئىتتىپاق بىلەن غەلەبىگە ئېرىشىدۇ.»<br />
              – مەھمۇد كاشغەرىدىن ئىقتىباس
            </blockquote>
            <p className="text-sm text-gray-600 mt-2">– «تۈركى تىللار دىۋانى»دىن</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">تەسىرى</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئوغۇز نامى تۈركىي ئەدەبىيات ۋە تارىختا مۇھىم ئورۇن ئالغان، Seljuk ۋە Ottoman ئىمپېرىيىلىرىنىڭ ئەسلى بولۇپ، ئۇيغۇرلارنىڭ قەدىمكى ئىتتىپاقىنى كۆرسىتىدۇ. ھازىرقى تۈركىي خەلقلەر (توركمانلار، ئوتتۇرى تۈركىيە) ئۇنىڭ نەسلى. ئۇنىڭ تەسىرى ئورخون يازمىلىرىدىن تارتىپ ھازىرقى تارىخىي تەتقىقاتقىغىچە يەتىدۇ.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/oghuz-khagan-legend.jpg" alt="ئوغۇز خان ئافسۇنى" className="w-full rounded-lg shadow-lg max-w-md mx-auto" />
          <p className="text-sm text-gray-600 mt-2">ئوغۇز خان ئافسۇنى – ئىتتىپاقنىڭ نىشانى</p>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2-ئەسىر BC</td>
                <td className="px-6 py-4 text-sm text-gray-700">خەنزۇ مەنبەلىرىدە *Wūjiē شەكلىدە كۆرۈلىش؛ Xiongnu بىلەن ئۇلىنىش</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">ئورخون يازمىلىرىدا «Oghuz» دەپ تىلغا ئېلىنىش؛ Göktürk دەۋرى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">744-840</td>
                <td className="px-6 py-4 text-sm text-gray-700">ئۇيغۇر خانلىقى؛ «توققۇز ئوغۇز» ئىتتىپاقى شەكىللىنىشى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9-10-ئەسىرلەر</td>
                <td className="px-6 py-4 text-sm text-gray-700">غەرەپكە كۆچۈش؛ جېتىسۇ ۋە ئارال دەھلىزى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11-ئەسىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">مەھمۇد كاشغەرى؛ ئىسلامىيەتلىشىش، Seljuk ئىمپېرىيىسى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ھازىرقى دەۋىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">توركمانلار ۋە تۈركىي خەلقلەرنىڭ نەسلى؛ تارىخىي تەتقىقات</td>
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
          <li>• مەھمۇد كاشغەرى: «تۈركى تىللار دىۋانى» (11-ئەسىر)</li>
          <li>• ئورخون يازمىلىرى: Göktürk تارىخى</li>
          <li>• Encyclopaedia Iranica: Oghuz Tribes</li>
          <li>• Chagatai Khanate Historical Records</li>
          <li>• Uyghur Literature Studies: Turkic Confederations</li>
        </ul>
      </section>
    </div>
  );
}