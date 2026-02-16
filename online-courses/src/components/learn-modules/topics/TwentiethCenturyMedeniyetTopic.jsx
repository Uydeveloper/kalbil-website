// src/components/learn-modules/topics/TwentiethCenturyMedeniyetTopic.jsx
import React from 'react';

export default function TwentiethCenturyMedeniyetTopic() {
  return (
    <div
      className="text-right leading-relaxed text-gray-800 font-sans space-y-6"
      dir="rtl"
      style={{ fontFamily: "'Noto Sans Uighur', 'Amiri', serif" }}
    >
      {/* سەرخەت */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-3xl border-2 border-indigo-300 shadow-xl">
        <h1 className="text-4xl font-bold text-indigo-900 mb-6 text-center">
          🎨 20-ئەسىردىكى ئۇيغۇر مەدەنىيىتى
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <p className="text-xl font-semibold text-indigo-700">ئىجتىمائىي ئۆزگىرىشلەر ۋە مەدەنىي تەرەققىيات دەۋىرى</p>
          <div className="bg-indigo-200 px-4 py-2 rounded-full text-indigo-800 text-base font-medium shadow-md">
            تارىخىي ۋە مەدەنىي تەتقىقات
          </div>
        </div>
        <blockquote className="text-xl font-semibold text-purple-600 italic text-center border-r-4 border-purple-400 pr-6 bg-white/60 p-6 rounded-xl shadow-inner">
          20-ئەسىر – ئۇيغۇر مەدەنىيىتىنىڭ سۇئىتلىنىشى، سىياسىي ئۆزگىرىشلەر ۋە جەھانىي تەسىرلەر بىلەن تولغان دەۋىر، ئۇنىڭدا ئۇيغۇر ئەدەبىياتى، مۇزىكىسى ۋە تەنھىرىلىرى كۈچەيمىكەن.
        </blockquote>
      </div>

      {/* مۇقەددىمە */}
      <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2">
          <i className="fas fa-book-open text-blue-600"></i> مۇقەددىمە
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          20-ئەسىر ئۇيغۇر مەدەنىيىتىنىڭ تارىخى سىياسىي ئۆزگىرىشلەر بىلەن تولغان دەۋىر بولۇپ، قىنگ سولالىسىنىڭ ئۆتۈشى (1911)، شىنجاڭنىڭ جۇڭگوغا قوشۇلۇشى (1949) ۋە سوۋېت ئىتتىپاقى تەسىرى ئاستىدا ئىجتىمائىي-مەدەنىي تەرەققىيات كۆرۈلگەن. بۇ دەۋىردە ئۇيغۇرلارنىڭ ئىككى قېتىم ئىشقىي جەمئىيىتى قۇرغىنى (1933، 1944)، ئەدەبىيات ۋە مۇزىكىدا جەدىدلەر ھەرىكىتى كۈچەيمىكەن. سوۋېت تەسىرىدە لاتىن ئەلپەبىسىغا ئۆتۈش (1928-1980) ۋە مەدەنىي تەرەققىيات بولغان بولسىمۇ، 1949-يىلدىن كېيىن خەنزۇ مەدەنىيىتىنىڭ تەسىرى كۈچەيمىكەن. بۇ دەۋىر ئۇيغۇر مەدەنىيىتىنىڭ جەھانىي تەسىرىنىڭ باشلىنىشى بولۇپ، ئەدىبىيات، مۇزىكا ۋە تەنھىرچىلىك كۈچەيمىكەن.
        </p>
        <div className="text-center mt-6 italic text-indigo-600 font-semibold">
          20-ئەسىر – ئۇيغۇر مەدەنىيىتىنىڭ جەدىدلەشىشى ۋە سۇئىتلىنىشى دەۋىرى، سىياسىي ئۆزگىرىشلەر بىلەن بولسىمۇ، مەدەنىي تەرەققىياتنىڭ ئاللىقاچان مەۋجۇتلىقىنى كۆرسىتىدۇ.
        </div>
      </section>

      {/* تارىخىي سىئاقى */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-history text-blue-600"></i> تارىخىي سىئاقى
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">ئىشقىي جەمئىيەتلەر دەۋىرى (1911-1949)</h3>
            <p className="text-lg leading-8 text-gray-700">
              قىنگ سولالىسىنىڭ ئۆتۈشىدىن (1911) كېيىن شىنجاڭدا ياغى جەمئىيىتى قۇرۇلغان. 1933-يىلى شەرق تۈركىستان ئىشقىي جەمئىيىتى (ETR) قۇرۇلۇپ، مەھمۇت مۇسا شەرىپى بېشىدا بولغان. بۇ دەۋىردە ئۇيغۇر مەدەنىيىتى جەدىدىلىك ھەرىكىتى كۈچەيمىكەن، لاتىن ئەلپەبىسىغا ئۆتۈش (1928) ۋە مەكتەپلەر ئاچىلغان. 1944-يىلى ئىككىنچى شەرق تۈركىستان جەمئىيىتى قۇرۇلۇپ، ئەھمەتجان قاسىمى بېشىدا بولغان. سوۋېت ئىتتىپاقى تەسىرىدە مەدەنىي تەرەققىيات بولغان.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">خەنزۇ ھۆكۈمرانلىقى دەۋىرى (1949-ھازىرغىچە)</h3>
            <p className="text-lg leading-8 text-gray-700">
              1949-يىلى خەنزۇ خەلق جۇمھۇرىيىتى قۇرۇلۇشى بىلەن شىنجاڭ ئۇيغۇر ئاپتونوم رايونى قۇرۇلغان (1955). بۇ دەۋىردە مەدەنىي پائالىيەتلەر كۈچەيمىكەن، بىراق 1966-1976-يىللاردىكى مەدەنىي ئىنقىلاب دەۋرىدە باستۇرۇلغان. كېيىنكى يىللاردا ئۇيغۇر ئەدەبىياتى (ئەبەيدىللا ئەكسەرىيى، تەھىرىر ئىسمىل)، مۇزىكىسى (ئابدۇرەھىم ھەىتى، سىنكىئانغا) كۈچەيمىكەن. 1980-يىللاردىن بېرى جەھانىي تەسىر كۈچەيمىكەن.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <img src="/images/uyghur-culture-20th.jpg" alt="20-ئەسىردىكى ئۇيغۇر مەدەنىيىتى" className="w-full rounded-lg shadow-lg max-w-2xl mx-auto" />
          <p className="text-sm text-gray-600 mt-2">20-ئەسىردىكى ئۇيغۇر مەدەنىي پائالىيەتلىرى</p>
        </div>
      </section>

      {/* ئەدەبىيات ۋە سەنئەت */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl border-2 border-purple-200 shadow-xl">
        <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-feather-alt text-purple-600"></i> ئەدەبىيات ۋە سەنئەت
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">ئەدەبىيات</h3>
            <p className="text-lg leading-8 text-gray-700">
              20-ئەسىردە ئۇيغۇر ئەدەبىياتى جەدىدىلىك ھەرىكىتى بىلەن كۈچەيمىكەن. مۇھەممەد ئىمىن بۇغرا (1901–1965) «ئۇيغۇر تارىخى»نى يازغان. ئەبەيدىللا ئەكسەرىيى (1911–1995) نەسىر ۋە شېئىر يازغان. تەھىرىر ئىسمىل (1927–1998) جەدىد شېئىرلىرى بىلەن داڭلىق. سوۋېت تەسىرىدە لاتىن ئەلپەبىسىغا ئۆتۈش (1928) ئەدەبىياتنى تەرەققىي قىلدۇرغان. 1949-يىلدىن كېيىن خەنزۇچە تەسىر كۈچەيمىكەن، بىراق ئۇيغۇرچە ئەدەبىيات داۋاملىق بولغان.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">مۇزىكا ۋە تەنھىر</h3>
            <p className="text-lg leading-8 text-gray-700">
              ئۇيغۇر مۇزىكىسى 20-ئەسىردە كۈچەيمىكەن، ئەبەيدىللا ئەكسەرىيىنىڭ «ئۇيغۇر مۇزىكىسى» تەتقىقاتى مۇھىم. ئابدۇرەھىم ھەىتى (1928–2010) مۇزىكا بىلەن داڭلىق. دوتار، راۋاپ، تەمبۇر قاتارلىق ئۇسۇللارنىڭ تەرەققىياتى بولغان. 1930-يىللاردا رادىيو ۋە پىلمىلەردە ئۇيغۇر مۇزىكىسى تەرگىب قىلىنغان. تەنھىرچىلىكتە ئۇيغۇر رايىسى (Uyghur dance) ۋە مېھىرى كۈچەيمىكەن.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/muhammad-imin-bughra.jpg" alt="مۇھەممەد ئىمىن بۇغرا" className="w-full h-48 object-cover rounded-lg mb-2" />
            <h4 className="font-bold text-purple-800">مۇھەممەد ئىمىن بۇغرا</h4>
            <p className="text-sm text-gray-600">ئۇيغۇر تارىخىنىڭ ئالىمى</p>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/abdurehim-heyit.jpg" alt="ئەبەيدىللا ئەكسەرىيى" className="w-full h-48 object-cover rounded-lg mb-2" />
            <h4 className="font-bold text-purple-800">ئەبەيدىللا ئەكسەرىيى</h4>
            <p className="text-sm text-gray-600">شاعىر ۋە مۇزىكاشىناس</p>
          </div>
          <div className="text-center bg-white p-4 rounded-xl shadow-md">
            <img src="/images/taher-ismail.jpg" alt="تەھىرىر ئىسمىل" className="w-full h-48 object-cover rounded-lg mb-2" />
            <h4 className="font-bold text-purple-800">تەھىرىر ئىسمىل</h4>
            <p className="text-sm text-gray-600">جەدىد شاعىر</p>
          </div>
        </div>
      </section>

      {/* ۋاقىتلىق كىلىشىرىش */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border-2 border-yellow-200 shadow-xl">
        <h2 className="text-2xl font-bold text-yellow-900 mb-6 text-center flex items-center justify-center gap-2">
          <i className="fas fa-timeline text-yellow-600"></i> ۋاقىتلىق كىلىشىرىش
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-yellow-100">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">يىل</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">ئوقىيە</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1911</td>
                <td className="px-6 py-4 text-sm text-gray-700">قىنگ سولالىسى ئۆتۈشى؛ شىنجاڭدا ياغى جەمئىيىتى</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1928</td>
                <td className="px-6 py-4 text-sm text-gray-700">لاتىن ئەلپەبىسىغا ئۆتۈش (سوۋېت تەسىرى)</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1933</td>
                <td className="px-6 py-4 text-sm text-gray-700">شەرق تۈركىستان ئىشقىي جەمئىيىتى قۇرۇلۇشى</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1944</td>
                <td className="px-6 py-4 text-sm text-gray-700">ئىككىنچى شەرق تۈركىستان جەمئىيىتى</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1949</td>
                <td className="px-6 py-4 text-sm text-gray-700">خەنزۇ خەلق جۇمھۇرىيىتى قۇرۇلۇشى؛ شىنجاڭ ئۇيغۇر ئاپتونوم رايونى</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1955</td>
                <td className="px-6 py-4 text-sm text-gray-700">ئۇيغۇر ئاپتونوم رايونىنىڭ رەسمىي قۇرۇلۇشى</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1966-1976</td>
                <td className="px-6 py-4 text-sm text-gray-700">مەدەنىي ئىنقىلاب دەۋرى؛ مەدەنىي باستۇرۇش</td>
              </tr>
              <tr className="hover:bg-yellow-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1980-يىللار</td>
                <td className="px-6 py-4 text-sm text-gray-700">مەدەنىي تەرەققىيات؛ ئەدەبىيات ۋە مۇزىكا كۈچەيمىشى</td>
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
          <li>• ئۇيغۇر مەدەنىيىتى تارىخى: 20-ئەسىر تەرەققىياتى</li>
          <li>• شىنجاڭ تارىخى مەنبەلىرى: ئىشقىي جەمئىيەتلەر</li>
          <li>• Wikipedia: Uyghur Culture in the 20th Century</li>
          <li>• East Turkestan History Studies</li>
          <li>• Uyghur Literature and Arts Archives</li>
        </ul>
      </section>
    </div>
  );
}