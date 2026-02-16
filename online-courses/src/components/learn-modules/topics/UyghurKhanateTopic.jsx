// src/components/learn-modules/topics/UyghurKhanateTopic.jsx
import React from 'react';

export default function UyghurKhanateTopic() {
  return (
    <div
      className="text-right leading-relaxed text-gray-800 font-sans space-y-6"
      dir="rtl"
      style={{ fontFamily: "'Noto Sans Uighur', 'Amiri', sans-serif" }}
    >
      {/* سەرخەت */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-300 shadow-xl">
        <h1 className="text-4xl font-bold text-green-900 mb-6 text-center">
          ئۇيغۇر خانلىقى (744-840)
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-xl font-semibold text-green-700">ئۇيغۇر خانلىقى – مەركىزىي ئاسىيادىكى تۈركىي ئىمپېرىيە</p>
          <div className="bg-green-200 px-4 py-2 rounded-full text-green-800 text-base font-medium shadow-md">
            تارىخىي تەتقىقات
          </div>
        </div>
        <blockquote className="text-xl font-semibold text-green-600 italic text-center border-r-4 border-green-400 pr-6 bg-white/60 p-6 rounded-xl shadow-inner">
          ئۇيغۇر خانلىقى – توقۇز ئوغۇز قەۋملىرىنىڭ بىرلىكى بىلەن قۇرۇلغان گۈۋە بەلگىلىك ئىمپېرىيە، مەركىزىي ئاسىيادا 744-840-يىللاردا ھۆكۈمرانلىق قىلغان.
        </blockquote>
      </div>

      {/* مۇقەددىمە */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2">
          <i className="fas fa-book-open text-blue-600"></i> مۇقەددىمە
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          ئۇيغۇر خانلىقى (ئۇيغۇر: ئۇيغۇر خانلىقى؛ 744–840) – مەركىزىي ئاسىيادا قۇرۇلغان تۈركىي ئىمپېرىيە بولۇپ، ئۇنىڭ ئاساسى توقۇز ئوغۇز (Toquz Oghuz) قەۋملىرى بولغان. ئۇيغۇرلار 5-ئەسىردىن باشلاپ تەڭرى خانلىقى (Göktürk Khaganate) ئاستىدا ياشىغان بولسىمۇ، 744-يىلى ئىككىنچى تەڭرى خانلىقىغا قارشى قۇيغۇچىلىق قىلىپ، ئۆز ئىمپېرىيىسىنى قۇرغان. پايتەختى ئۆردۇ-بالىق (Ordu-Baliq) بولۇپ، مۇنتانغ پىلاتىسىدا (Mongolian Plateau) ئورنىلغان. ئۇيغۇر خانلىقى تەڭرىيانچىلىق (Tengrism) دىنى بىلەن باشلانغان بولسىمۇ، كېيىنكى دەۋرلەردە مانىخەيىزم (Manichaeism) نى رەسمىي دىن قىلغان. ئىقتىسادى ئىپەك يولى بويىچە سودا، چارۋىچىلىق ۋە كەنزارچىلىق بىلەن ئاساسىي بولغان. 840-يىلى قىرغىزلار تەرىپىدىن بۇزۇلغان.
        </p>
        <div className="text-center mt-6 italic text-blue-600 font-semibold">
          ئۇيغۇر خانلىقى – تۈركىي تارىختىكى ئەڭ گۈۋە بەلگىلىك دۆلەتلەرنىڭ بىرى، ئۇنىڭ مەدەنىيەتى ۋە دىنىي تەسىرى تارىم ئويمانلىقىدا داۋاملىق بولغان.
        </div>
      </section>

      {/* قۇرۇلۇش ۋە ئىلكى تارىخ */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-crown text-blue-600"></i> قۇرۇلۇش ۋە ئىلكى تارىخ
        </h2>
        <p className="text-lg leading-8 text-gray-700 mb-6">
          ئۇيغۇر خانلىقى 744-يىلى قۇرۇلغان بولۇپ، ئۇنىڭ ئاساسى 742-يىلى ئۇيغۇرلار، قارلۇقلار (Karluks) ۋە باسمىللار (Basmyls) نىڭ ئىككىنچى تەڭرى خانلىقىغا قارشى قۇيغۇچىلىقى بولغان. 744-يىلى باسمىللار ئۆتكەننى ئالغان بولسىمۇ، ئۇيغۇر-قارلۇق ئىتتىپاقى ئۇلارنى يېڭىپ، باسمىللارنى يوق قىلغان. ئىلكى خان كۇتلۇغ بىلغە كۆل (Kutlugh Bilge Köl) بولۇپ، ئۇ ئۆردۇ-بالىقنى پايتەخت قىلغان. 745-يىلى ئۇلار ئەڭ ئاخىرقى تەڭرى خانى كۇلۇن بەگنى (Kulun Beg) ئۆلتۈرۈپ، بېشىنى تانگ ئىمپېرىيىسىغا ئېلىپ كەلگەن. خانلىقنىڭ ئارىلىقى شىۋېي (Shiwei) دىن ئالتاي تاغلىرىغىچە، گوبى چەۋلىسىنىڭ جەنۇبىغا قەدەم يەتكەن. ئۇيغۇرلار تانگ دۆلەتى بىلەن ئىتتىپاق قىلىپ، تىبەت ئىمپېرىيىسىغا قارشى سەۋەپ بولغان.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img src="/images/uyghur-khaganate-map.jpg" alt="ئۇيغۇر خانلىقىنىڭ ئارىلىقى" className="w-full rounded-lg shadow-lg" />
            <p className="text-sm text-gray-600 mt-2">ئۇيغۇر خانلىقىنىڭ ئارىلىقى (ھازىرقى مۇنتانغ پىلاتىسى)</p>
          </div>
          <div className="text-center">
            <img src="/images/ordu-balik.jpg" alt="ئۆردۇ-بالىق پايتەختى" className="w-full rounded-lg shadow-lg" />
            <p className="text-sm text-gray-600 mt-2">ئۆردۇ-بالىق – پايتەخت شەھىرى</p>
          </div>
        </div>
      </section>

      {/* ئاساسىي خانلار */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-users text-purple-600"></i> ئاساسىي خانلار
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">نامى</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">ئىكىنچى نامى</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">ئىكىنچى نامى</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">ئىشلىرى</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">كۇتلۇغ بىلغە كۆل</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">744–747</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ئىلكى خان</td>
                <td className="px-6 py-4 text-sm text-gray-700">خانلىقنى قۇرۇش، پايتەخت قۇرۇش</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">بايانچۇر خان</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">747–759</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ئىمپېرىيە كېڭىيىش</td>
                <td className="px-6 py-4 text-sm text-gray-700">تانگغا ياردەم بېرىش، شەھەرلەر قۇرۇش</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">بۆگۇ خان</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">759–780</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">مانىخەيىزمغا ئۆتۈش</td>
                <td className="px-6 py-4 text-sm text-gray-700">762-يىلى مانىخەيىزمنى رەسمىي دىن قىلىش</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">تون باگا تارخان</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">780–789</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">بىرلىك قائىدىلىرى</td>
                <td className="px-6 py-4 text-sm text-gray-700">مانىخەيىزمغا قارشى كۈچ كۆرسىتىش</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ئەدىز نەسلى</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">795–840</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">ئاخىرقى دەۋىر</td>
                <td className="px-6 py-4 text-sm text-gray-700">گائوچاڭنى ئېلىش (803)، تىبەتلارغا قارشى جەڭ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ئارىلىق ۋە ئىقتىساد */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border-2 border-yellow-200 shadow-xl">
        <h2 className="text-2xl font-bold text-yellow-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-globe text-yellow-600"></i> ئارىلىق ۋە ئىقتىساد
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-3">ئارىلىق</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئارىلىق تەخمىنەن 3,100,000 چارە كىلومېتىرنى ئۆز ئىچىگە ئالغان بولۇپ، شىۋېيدىن ئالتاي تاغلىرىغىچە، گوبى چەۋلىسىنىڭ جەنۇبىغا يەتكەن. ئاساسىي رايونلار مۇنتانغ (ئۆردۇ-بالىق، خارا بالگاس)، جەتىسۇ ۋە بايكال كۆلى رايونلىرىنى ئۆز ئىچىگە ئالغان. ئۇيغۇرلار ئىپەك يولىدا سىياسىي ۋە سودىلىك كۈچ بولغان.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-3">ئىقتىساد</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئاساسىي ئىقتىسادى چارۋىچىلىق (ئات، ئىت، قوي) بىلەن بولسىمۇ، ئىپەك يولى بويىچە سودا مۇھىم بولغان. تانگ دۆلەتى بىلەن ئىتتىپاق ئارقىلىق ئىپەك ئالمىش-يەتكۈزۈش (ئاتغا 40 تەمىر ئىپەك). سۆگدىيەلەر بىلەن سودا (ئىپەك، بەھارەتلەر). ئۆردۇ-بالىق سودا مەركىزى بولغان.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/silk-road-uyghur.jpg" alt="ئىپەك يولىدا ئۇيغۇر خانلىقى" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* دىن ۋە مەدەنىيەت */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border-2 border-purple-200 shadow-xl">
        <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-pray text-purple-600"></i> دىن ۋە مەدەنىيەت
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">دىن</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئىلكى دىن تەڭرىيانچىلىق (Tengrism) بولغان. 762-يىلى بۆگۇ خان مانىخەيىزمغا ئۆتكەن (سۆگدىيە تەسىرى). تون خان (780–789) مانىخەيىزمغا قارشى كۈچ كۆرسىتكەن، كېيىنكى دەۋرلەردە قايتا كۈچەيمىكەن. بوخشو (Qocho)دا بوخشىزمغا ئۆتكەن. نېستورىيانچىلىق (Nestorian Christianity) ۋە بوخشىزم ئوخشاش بولغان.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">مەدەنىيەت</h3>
            <p className="text-lg leading-8 text-gray-700">
              توقۇز ئوغۇز قەۋملىرى (ياغلاكار، بۇقۇت قاتارلىقلار). مەدەنىيەت نوماد (كۆچمەن) بىلەن سېدېنتارىي (ئورنىنىق) ئارىلىقىدا. بېزېكلىك مەغەرىلىرىدىكى مۇراللاردا چىنچە كىيىملەر كۆرۈلگەن. تانگ بىلەن ئايال ئالمىشىش (756-يىلى ئۇيغۇر شاھزادىسى تانگ شاھزادىسىغا بېرىلگەن). تىل: تۈركىي ئۇيغۇرچە، "پاك" دەپ باھالangan.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/bezeklik-caves.jpg" alt="بېزېكلىك مەغەرىلىرىدىكى مۇراللار" className="w-full rounded-lg shadow-lg" />
          <p className="text-sm text-gray-600 mt-2">بېزېكلىك مەغەرىلىرى – ئۇيغۇر مەدەنىيىتىنىڭ نىشانى</p>
        </div>
      </section>

      {/* پەرقنى تۆۋەنلىتىش ۋە ئۆتۈش */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-3xl border-2 border-red-200 shadow-xl">
        <h2 className="text-2xl font-bold text-red-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-falling text-red-600"></i> پەرقنى تۆۋەنلىتىش ۋە ئۆتۈش
        </h2>
        <p className="text-lg leading-8 text-gray-700 mb-6">
          پەرقنى تۆۋەنلىتىش ئىچكى ئارا-ئارىدىقلار بىلەن باشلانغان: بۆگۇنىڭ ئۆلتۈرۈلۈشى (779)، مانىخەيىزمغا قارشى كۈچلەر. تاشقى بېسىم: تىبەتلارنىڭ توغرىسى (780–823)، قارلۇقلارنىڭ كىرىپ كىرىشى (789). 839-840-يىللاردا ئاچلىق، ئىسىك ۋە قىشلىق ئىسسىقلىق ئىمپېرىيەنى بۇزغاندىن كېيىن، قىرغىزلار (ئىتتىپاقچى كۇلۇغ باگا تەرىپىدىن چاقىرىلغان) 80,000 ئەسكەر بىلەن ئۆردۇ-بالىقنى بۇزغىغان (840). ئۇيغۇرلار تارقىلىپ، 30,000 نەسلى تانگغا كەلگەن (ئورمىزت)، 100,000 نەسلى (ووجىيە) تەلىپى ئىنكار قىلىنغاندىن كېيىن ئۆلتۈرۈلگەن. تانگ-قىرغىز ئىتتىپاقى (840–848) قالغان قىسىملارنى يوق قىلغان. تانگ مانىخەيىزمغا قارشى بولۇپ، 843-يىلى معابدىلارنى بۇزغىغان.
        </p>
        <div className="text-center">
          <img src="/images/uyghur-decline.jpg" alt="ئۇيغۇر خانلىقىنىڭ ئۆتۈشى" className="w-full rounded-lg shadow-lg" />
          <p className="text-sm text-gray-600 mt-2">ئۇيغۇر خانلىقىنىڭ ئۆتۈشى (840-يىلى قىرغىزلار توغرىسى)</p>
        </div>
      </section>

      {/* ۋاقىتلىق كىلىشىرىش */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-timeline text-indigo-600"></i> ۋاقىتلىق كىلىشىرىش
        </h2>
        <div className="space-y-4">
          {[
            { year: '744', event: 'خانلىق قۇرۇلۇشى؛ باسمىللارنى يېڭىش؛ كۇتلۇغ بىلغە كۆل ئىلكى خان' },
            { year: '745', event: 'ئەڭ ئاخىرقى تەڭرى خانى كۇلۇن بەگنى ئۆلتۈرۈش' },
            { year: '747', event: 'بايانچۇر خان ھوقۇم قىلىش؛ باي بالىق قۇرۇش' },
            { year: '751', event: 'تانگنىڭ تالاس جەڭىدىكى مەغلۇبىيىتى؛ ئۇيغۇرلارنىڭ كۈچىيىشى' },
            { year: '755–757', event: 'ئان لۇشەن قۇيغۇچىلىقىغا تانگغا ياردەم' },
            { year: '758', event: 'يېنىسېي قىرغىزلارنى يېڭىش' },
            { year: '759', event: 'بايانچۇر ئۆلگەن؛ بۆگۇ خان ھوقۇم قىلىش' },
            { year: '762', event: 'مانىخەيىزمغا ئۆتۈش؛ تانگغا ياردەم' },
            { year: '779', event: 'بۆگۇنىڭ ئۆلتۈرۈلۈشى؛ تون باگا تارخان ھوقۇم قىلىش' },
            { year: '780', event: 'تانگدىن تەۋىيل تەلەپ قىلىش' },
            { year: '789', event: 'تون ئۆلگەن؛ كۈلىگ خان ھوقۇم قىلىش' },
            { year: '790', event: 'تىڭجۇۋدا تىبەتلارغا مەغلۇبىيەت' },
            { year: '791–792', event: 'تىبەتلار ۋە قارلۇقلارغا قارشى جەڭ' },
            { year: '795', event: 'ئەدىز نەسىلى قۇرۇلۇشى' },
            { year: '803', event: 'گائوچاڭنى ئېلىش' },
            { year: '808', event: 'لىيانغ ئۆلكىسىنى ئېلىش' },
            { year: '816', event: 'ئۆردۇ-بالىق يېقىنىدا تىبەت توغرىسى' },
            { year: '821', event: 'بايئى خان تىبەتلارغا قارشى' },
            { year: '822', event: 'تانگ بىلەن سودا كېڭىيىشى' },
            { year: '823', event: 'تىبەت ئۇرۇشى' },
            { year: '832', event: 'جاۋلى خان ئۆلتۈرۈلگەن' },
            { year: '839', event: 'جاڭسىننىڭ ئۆز ئۆلتۈرۈشى؛ قاسار ئۇسۇرپەت قىلىش' },
            { year: '840', event: 'قىرغىزلار ئۆردۇ-بالىقنى بۇزۇش؛ خانلىق ئۆتۈشى' },
          ].map((event, index) => (
            <div key={index} className="flex items-center gap-4 bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition-colors">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold min-w-[60px] text-center">{event.year}</span>
              <p className="text-gray-700 flex-1">{event.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* مەنبەلەر */}
      <section className="mt-8 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl border-2 border-gray-300 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-citation text-gray-600"></i> مەنبەلەر
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Wikipedia: Uyghur Khaganate</li>
          <li>• Oxford Research Encyclopedia: Uyghur Empire (744–840)</li>
          <li>• Center for Uyghur Studies: The History of East Turkistan</li>
          <li>• Akademiye.org: Brief History of the Uyghurs</li>
          <li>• Tang Huiyao and Books of Tang (historical sources)</li>
        </ul>
      </section>
    </div>
  );
}