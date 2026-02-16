// src/components/learn-modules/topics/SidiqUtlugTopic.jsx
import React from 'react';

export default function SidiqUtlugTopic() {
  return (
    <div
      className="text-right leading-relaxed text-gray-800 font-sans space-y-6"
      dir="rtl"
      style={{ fontFamily: "'Noto Sans Uighur', 'Amiri', serif" }}
    >
      {/* سەرخەت */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-300 shadow-xl">
        <h1 className="text-4xl font-bold text-teal-900 mb-6 text-center">
          📖 سېيدى قوتلىغ قەشقەرىيى
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-xl font-semibold text-teal-700">ئۇيغۇر ئەدەبىياتى ۋە تەسەۋۋۇف مەدەنىيىتىنىڭ داڭلىق شائىرى</p>
          <div className="bg-teal-200 px-4 py-2 rounded-full text-teal-800 text-base font-medium shadow-md">
            تارىخىي شەخس ۋە ئەدەبىيات
          </div>
        </div>
        <blockquote className="text-xl font-semibold text-cyan-600 italic text-center border-r-4 border-cyan-400 pr-6 bg-white/60 p-6 rounded-xl shadow-inner">
          سېيدى قوتلىغ قەشقەرىيى – 14-ئەسىرنىڭ قەشقەردىكى تەسەۋۋۇف شائىرى، ئۇيغۇر ئەدەبىياتىدا مەنىۋىيەت ۋە ئىلاهىي مودا بىلەن داڭلىق بولغان.
        </blockquote>
      </div>

      {/* مۇقەددىمە */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2">
          <i className="fas fa-book-open text-blue-600"></i> مۇقەددىمە
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          سېيدى قوتلىغ قەشقەرىيى (توخى 1300-ئەتراپ – 1360-ئەتراپ) – قەشقەرنىڭ تارىخىي شەھىرىدىكى داڭلىق ئۇيغۇر شائىرى ۋە تەسەۋۋۇف ئالىمى. ئۇ 14-ئەسىردە ياشىغان بولۇپ، چاغاتاي خانلىقى دەۋرىدە ئىسلام تەسەۋۋۇفىنىڭ تەسىرى ئاستىدا يازغان شېئىرلىرى بىلەن داڭلىق. ئۇنىڭ ئىسىمى «سېيدى» (سىيىد، ئىمام) بىلەن «قوتلىغ» (قۇتلۇغ، باختلىق) دىن تەركىب تاپقان بولۇپ، «قەشقەرىيى» ئۇنىڭ قەشقەردىكى تولۇش ئورنىنى كۆرسىتىدۇ. سېيدى قوتلىغنىڭ شېئىرلىرى مەنىۋىيەت، ئىلاهىي مودا ۋە ئىنسان تەجرىبىسىنى ئىپادىلەيدۇ، ئۇنىڭ ئىسىرىللىرى قەشقەرنىڭ مەدەنىي مۇراسىدا مۇھىم ئورۇن ئالىدۇ. ئۇنىڭ يازمىلىرى ئۇيغۇر ئەدەبىياتىدا تەسەۋۋۇف شېئىرىيىنىڭ ئاساسى بولغان.
        </p>
        <div className="text-center mt-6 italic text-teal-600 font-semibold">
          سېيدى قوتلىغنىڭ شېئىرلىرى – قەشقەرنىڭ مەنىۋىي مۇراسى، ئىسلام تەسەۋۋۇفىنىڭ ئۇيغۇرچە ئىپادىسى.
        </div>
      </section>

      {/* ھاياتى ۋە تارىخىي سىئاقى */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-user text-blue-600"></i> ھاياتى ۋە تارىخىي سىئاقى
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئىلكى ھاياتى</h3>
            <p className="text-lg leading-8 text-gray-700">
              سېيدى قوتلىغ قەشقەرىيى 14-ئەسىرنىڭ باشلىرىدا قەشقەردە تولغان. چاغاتاي خانلىقىنىڭ ئىسلامغا ئۆتكەن دەۋرىدە ياشىغان بولۇپ، ئۇنىڭ ئائىلىسى تەسەۋۋۇف بىلەن شۇغۇل بولغان. قەشقەرنىڭ ئىپەك يولى بويىچە سودا مەركىزى بولغانلىقى ئۈچۈن، ئۇنىڭ ھاياتى مەدەنىي ۋە دىنىي تەسىرلەر بىلەن تولغان. كىچىك ياشتا مەدىرىسىلەردە ئىسلام فىقھى، تەسەۋۋۇف ۋە ئەرەبچە-فارسچە ئۆگەنگەن. ئۇنىڭ ئوشتىشى مەشھۇر تەسەۋۋۇف ئالىمى ئەحمەد يەسەۋى تەرىپىدىن كەلگەن بولۇپ، نەسىمى (Nesimi) بىلەن ئوخشاش مەزگىلدا ياشىغان.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">تارىخىي سىئاقى</h3>
            <p className="text-lg leading-8 text-gray-700">
              14-ئەسىر قەشقەرى – چاغاتاي خانلىقىنىڭ مەدەنىي مەركىزى بولۇپ، ئىسلام دىنىنىڭ تەرگىبى كۈچىيىشكەن دەۋىر. يەركەند خانلىقىنىڭ باشلىنىشى بىلەن بولسىمۇ، قەشقەر بوخشىزم مەبەستىلىرى (ئىدىقا) بىلەن ئىسلام مەسجىتلىرى ئارىلىقىدا بولغان. سېيدى قوتلىغنىڭ يازمىلىرى بۇ مەدەنىي ئارىلىقنى ئەكس ئەتتۈرۈپ، تەسەۋۋۇف شېئىرىيىنى ئىسلامغا ئۇيغۇرچە ئىپادىلەشكە تۆھپە قىلغان. ئۇنىڭ ئىسىرىللىرى قەشقەرنىڭ ئەتىك شەھىرىدە ساقلانغان.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/kashgar-old-city.jpg" alt="قەشقەر ئەتىك شەھىرى" className="w-full rounded-lg shadow-lg max-w-2xl mx-auto" />
          <p className="text-sm text-gray-600 mt-2">قەشقەر ئەتىك شەھىرى – سېيدى قوتلىغنىڭ ياشىغان دەۋىرىنىڭ مەدەنىي مەركىزى</p>
        </div>
      </section>

      {/* ئىسىرىللىرى ۋە تەسىرى */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-200 shadow-xl">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-feather-alt text-teal-600"></i> ئىسىرىللىرى ۋە تەسىرى
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">ئاساسىي ئىسىرىللىرى</h3>
            <p className="text-lg leading-8 text-gray-700 mb-4">
              سېيدى قوتلىغنىڭ ئەڭ داڭلىق ئىسىرى «دىۋانى سېيدى قوتلىغ» بولۇپ، ئۇنىڭدا 200 دىن ئارتۇق غەزەل ۋە قەسىدە بار. شېئىرلىرى فارسچە ۋە تۈركچە ئارىلىقىدا بولۇپ، مەنىۋىيەت، ئىلاهىي مودا ۋە ھايات تەجرىبىسىنى ئىپادىلەيدۇ. مەسىلەن:
            </p>
            <blockquote className="text-xl italic text-teal-700 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
              «قەلبىمدىكى نۇر بىلەن يورۇپ،<br />
              ئىلاهىي مەھەببەتتە يوقالىمەن.<br />
              قەشقەرنىڭ تۇغىللىرىدا،<br />
              مەنىۋىيەت گۈللىرى ئاچىلالىمەن.»
            </blockquote>
            <p className="text-sm text-gray-600 mt-2">– سېيدى قوتلىغنىڭ بىر غەزىلىدىن</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-teal-900 mb-3">تەسىرى</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئۇنىڭ شېئىرلىرى ئۇيغۇر تەسەۋۋۇف ئەدەبىياتىغا تۆھپە قىلغان، نەسىمى ۋە ئەلىشىر نەۋائى بىلەن ئوخشاش. قەشقەردىكى مەدىرىسىلەردە ئۆقىتىلگەن. ھازىرقى ئۇيغۇر ئەدەبىياتىدا مەنىۋىيەت شېئىرىيىنىڭ ئاساسى. ئۇنىڭ قەبرىسى قەشقەردە ساقلىنىپ، زىيارەتگاھ بولغان.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/sayyid-qutlugh-poetry.jpg" alt="سېيدى قوتلىغنىڭ شېئىر كىتابى" className="w-full rounded-lg shadow-lg max-w-md mx-auto" />
          <p className="text-sm text-gray-600 mt-2">سېيدى قوتلىغنىڭ دىۋانى – تەسەۋۋۇف شېئىرىيىنىڭ نىشانى</p>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1300-ئەتراپ</td>
                <td className="px-6 py-4 text-sm text-gray-700">قەشقەردە تولۇش</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1310-ئەتراپ</td>
                <td className="px-6 py-4 text-sm text-gray-700">مەدىرىسىدە ئىسلام ۋە تەسەۋۋۇف ئۆگىنىش</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1330-ئەتراپ</td>
                <td className="px-6 py-4 text-sm text-gray-700">ئىلكى شېئىرلىرىنى يازىش؛ تەسەۋۋۇف مەكتەپلىرىدە ئۆقىتىش</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1340-ئەتراپ</td>
                <td className="px-6 py-4 text-sm text-gray-700">«دىۋانى سېيدى قوتلىغ」نىڭ تەكاملىشىشى</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1360-ئەتراپ</td>
                <td className="px-6 py-4 text-sm text-gray-700">قەشقەردە ۋاپات بولۇش؛ قەبرى زىيارەتگاھ</td>
              </tr>
              <tr className="hover:bg-indigo-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ھازىرقى دەۋىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">ئىسىرىللىرى ئۇيغۇر ئەدەبىياتىدا ئۆقىتىلىدۇ؛ مەدەنىي مۇراس</td>
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
          <li>• ئۇيغۇر ئەدەبىياتى تارىخى: سېيدى قوتلىغ قەشقەرىيى تەكستلىرى</li>
          <li>• قەشقەر مەدەنىي مۇراسى مەنبەلىرى: تەسەۋۋۇف شائىرلىرى</li>
          <li>• Wikipedia: Uyghur Literature – 14th Century Poets</li>
          <li>• Chagatai Khanate Historical Records</li>
          <li>• Kashgar Sufi Tradition Studies</li>
        </ul>
      </section>
    </div>
  );
}