// Blog22.jsx
import React from 'react';

const Blog22 = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden my-10">
      {/* Hero Image with Uyghur Proverb */}
      <div className="relative">
        <img 
          src="https://www.ie.edu/insights/wp-content/uploads/2023/02/Rafif-CHATGPT.gif" 
          alt="سۈنئىي ئەقىل ۋە دىجىتال تەلىم" 
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium">
          «بىلىم — بىر يېڭى ئوي، بىر يېڭى دۇنيا»
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Title */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-3">
            【كەلگۈسىدىكى تەلىم-تەربىيەنى ئويلىشىش 】
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 leading-relaxed">
            سۇنئىي ئەقىل ۋە دىجىتال تەلىمنىڭ ھەقىقىي ھالىتى
          </h2>
        </header>

        {/* Metadata */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 text-sm">
          <div className="flex items-center">
            <span className="font-medium">مۇئەللىپ:</span>
            <span className="ml-1"> كەلبىل مائارىپى </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">چېسلا:</span>
            <span className="ml-1">3-دېكابىر، 2025-يىل </span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-8">
          <h3 className="font-bold text-blue-800 mb-2">قىسقىچە مۇندەرىجە</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>كىرگۈزۈش: تەلىم-تەربىيە دىجىتاللاشتۇرۇش (EduDX) نېمە؟</li>
            <li>مەكتەپ تەلىم تاختىسىدىكى ھازىرقى ھالەت</li>
            <li>دۇنيادىكى ھەقىقىي قوللىنىش مىساللىرى</li>
            <li>توقۇنۇشلار ۋە خەۋپ-خەتەرلەر</li>
            <li>چارە-تەدبىر: «قانداق ئىشلىتىش كېرەك؟»</li>
            <li>خۇلاسە: سۇنئىي ئەقىل — بالا ئۈچۈن «كۇرەش قۇرالى» ئەمەس، «ئۆگىنىش دوستى»</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-indigo max-w-none space-y-6 text-gray-700">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">1</span>
              كىرگۈزۈش: تەلىم-تەربىيە دىجىتاللاشتۇرۇش (EduDX) نېمە؟
            </h2>
            <p>
              يېقىنقى يىللاردا، <strong>مەكتەپ تەلىم تاختىسىدا «تەلىم-تەربىيە دىجىتاللاشتۇرۇش»</strong> (EduDX) نىڭ ئىلغارلىش سۈرئىتى تېزلىنىپ كەتتى. بۇ دېگىنىمىز — <strong>ئىنفورماتسىيە تېخنىكىسى</strong> (ICT)، <strong>دىجىتال دەرىجىلىك دەرسلىكلەر</strong>، <strong>سۇنئىي ئەقىل</strong> (AI) قاتارلىق تېخنىكىلارنى ئىشلىتىپ، <strong>بالىلارنىڭ ئويلاش، ئىپادىلەش ۋە يارايتقانلىق ئىقتىدارىنى ئۆستۈرۈش</strong> ھەققىدىكى ھەرىكەتلەر.
            </p>
            <p>
              بۇ مەنىسىز «ھەرقايسى دەرىجىلىك دەرسلىك» نى «تەبلېت» كا قويۇش ئەمەس. ئەسلى مەقسىتى — <strong>بالا بىر قىتىملىك بايقالمايدىغان ئىمكانىيەتنى ئېچىش</strong>، <strong>ئىچكى دۇنياسىنى دىجىتال دۇنيا بىلەن باغلاش</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">2</span>
              مەكتەپ تەلىم تاختىسىدىكى ھازىرقى ھالەت
            </h2>
            <p>
              بۈگۈنكى كۈندە، <strong>كۆپچىلىك مەكتەپلەردە تەلىم ئەنئەنىۋى «دەرىجىلىك دەرسلىك مەركەزلىك» بولۇپ تۇرىدۇ</strong>. لېكىن <strong>دىجىتال تېخنىكىنى ئىشلىتىش</strong> مۇۋاپىقىيىتى ياستىلا كېڭىيىۋاتىدۇ:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>تەبلېت ياكى كومپيۇتېر</strong> ئىشلىتىدىغان مەكتەپ سانى كۆپىيىدۇ.</li>
              <li><strong>ئونلايىن دەرىجىلىك دەرسلىك</strong> ۋە <strong>AI قوللانمىلىرى</strong> بىلەن دەرىجىلىك دەرس ئۆتكۈزۈش باشلاندى.</li>
            </ul>
            <p className="mt-3 font-semibold text-red-600">لېكىن... بۇ ئىلغارلىشنىڭ <strong>ئۈزۈكلىكى بار</strong>:</p>
            
            <div className="overflow-x-auto my-4">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-4 border-b text-left text-gray-700">خەلقئارالىق شەھەر مەكتەپلىرى</th>
                    <th className="py-2 px-4 border-b text-left text-gray-700">ئېيلات ياكى بودجېت چەكلىمىسى بار مەكتەپلەر</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">ھەر بالا بىر تەبلېت</td>
                    <td className="py-2 px-4 border-b">تەبلېتلارنى ئورتاق ئىشلىتىش</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">يۇقىرى سۈرئەتلىك تور تورى</td>
                    <td className="py-2 px-4 border-b">تور ئۈزۈل-تۇتۇق</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">AI ئىلېكتىر دەرىجىلىك دەرسلىك</td>
                    <td className="py-2 px-4 border-b">دىجىتال قۇرالنى ھەقىقىي ئىشلىتەلمەسلىك</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              يەنە بىر مۇھىم نۇقتا — <strong>مۇئەللىملەرنىڭ دىجىتال سەۋىيىسى</strong>.  
              <span className="block mt-2"><strong>ئىقتىدارلىق مۇئەللىم</strong>: AI نى دەرىجدە ئىشلىتىپ، <strong>كىشىگە ماسلاشتۇرۇلغان تەلىم</strong> تەمىنلەيدۇ.</span>
              <span className="block mt-1"><strong>ئادەتتىن مۇئەللىم</strong>: تەبلېت «ئۆيگە قايتۇرۇشقا بولمايدۇ» دېگەن قىسقۇچنىڭ ئاستىدا، <strong>پەقەت دەرىجىلىك دەرسلىك سكىن قىلىشقا</strong> ئىشلىتىدۇ.</span>
            </p>
            <p className="mt-2">
              نەتىجىدە — <strong>بالىلار ئوتتۇرىسىدا «دىجىتال تەلىم تەجرىبىسى» دېگەن يېڭى خىل تەنھىلىك پەيدا بولۇپ كەتتى</strong>.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">3</span>
              دۇنيادىكى ھەقىقىي قوللىنىش مىساللىرى
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { title: 'ئۇيغۇر تىلى دەرىجىلىك دەرسى / خاتىرە يېزىش', desc: 'AI بولۇپ جۈملە تۈزۈلۈشى، ئۇسلۇب، گىرامماتىكىنى تەكشۈرۈش قىلىدۇ.' },
                { title: 'پىروگرامما يېزىش دەرىجىلىك دەرسى', desc: 'AI خاتالىق سەۋەبىنى تەپسىلى تەپسىلاتلىق چۈشەندۈرۈپ، ياخشىلاش يولىنى كۆرسىتىدۇ.' },
                { title: 'تەكشۈرۈش ياكى تەتقىقات تەلىمى', desc: 'AI مەلۇمات تۆپلاش، جەدۋەل تۈزۈش، مۇلازىمەت قىلىشنى قوللايدۇ.' },
                { title: 'كىشىگە ماس تەلىم (Personalized Learning)', desc: 'AI ھەر بالىنىڭ چۈشىنىش دەرىجىسىگە قاراپ ئالاھىدە مەسلەھەت بېرىدۇ.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-1">{item.title}</h3>
                  <p className="text-green-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">4</span>
              توقۇنۇشلار ۋە خەۋپ-خەتەرلەر
            </h2>
            <div className="space-y-3">
              {[
                { risk: 'ئويلاش ئىقتىدارىنىڭ تۆۋەنلىشى', desc: 'بالىلار ئويلىماي، بىۋاسىتە AI نىڭ جاۋابىنى كۆچۈرۈپ قويىدۇ.' },
                { risk: 'مەكتەپ ئوتتۇرىسىدىكى «دىجىتال تەنھىلىك»', desc: 'بىر بالا 100% دىجىتال ئۆگۈنگەن بولۇپ، يەنە بىرى تەبلېت تېگىپمۇ يوق.' },
                { risk: 'قىسقۇچلار بىلەن چەكلەنگەن ئىشلىتىش', desc: 'مەكتەپتە «AI ئىشلىتىش 10 مىنۇت» دەپ چەكلەنگەن.' },
                { risk: 'خەۋپسىزلىك ۋە ئۇچۇر ئەخلاقى بىخەتەرلىك', desc: 'بالىلار شەخسىي ئۇچۇر نى AI غا كىرگۈزۈپ قويىدۇ.' }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <div>
                    <strong>{item.risk}</strong>: {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">5</span>
              چارە-تەدبىر: «قانداق ئىشلىتىش كېرەك؟»
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="italic text-yellow-800">«AI نى ئىشلىتىش - ئەمەس، قانداق ئىشلىتىش» — بۇ ھازىرقى زامان تەلىم مۇھىم نۇقتىسى.</p>
            </div>
            <ul className="list-disc pl-5 space-y-1">
              <li>AI نى بالىنىڭ ئويلاشنى يېتىلدۈرۈش «ئىسپات قۇرالى» قىلىپ ئىشلىتىش.</li>
              <li>مۇئەللىم «قانداق ئىشلىتىش» نى دەللىك بىلەن تەربىيە قىلىش.</li>
              <li>مۇئەللىم ۋە بالىلار خەۋپ-خەتەرلەرنى چۈشىنىش.</li>
              <li>ئاتا-ئانىلار ئۆيدە دىجىتال ئۆگىنىشنى قوللاش، ئۇچۇر ئەخلاقى ۋە بىخەتەرلىك  تەربىيە  قىلىش.</li>
              <li>دۆلەت ۋە مەكتەپ بارلىق بالىغا تەڭ مۇلازىمەت قىلىش.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">6</span>
              خۇلاسە: سۇنئىي ئەقىل — بالا ئۈچۈن «كۇرەش قۇرالى» ئەمەس، «ئۆگىنىش دوستى»
            </h2>
            <p>
              سۇنئىي ئەقىل ۋە دىجىتال تەلىم — بۇ <strong>بىر قۇرال</strong>، <strong>بىر يول</strong>. ئۇ <strong>ئۆزىدىن «ياخشى» نەتىجە بېرىدۇ» دەيدىغان نەرسە ئەمەس</strong>.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mt-4 text-center">
              <p className="text-purple-800 italic">
                «قۇرال ياخشى بولسىمۇ، قولۇڭىز ياخشى بولمىسا، ئىش باشىليالمىدى»
              </p>
              <p className="text-purple-700 mt-1">— ئۇيغۇر ماقەل-مەسەللىرى</p>
            </div>
            <p className="mt-4">
              <strong>شەكىل ئەمەس، مەزمۇن!</strong><br />
              <strong>ئورۇن ئەمەس، ئىشلىتىش ئۇسلۇبى!</strong>
            </p>
            <p className="mt-3">
              ئەگەر بىز <strong>«دىجىتال تەلىم» نى «بالا ئۈچۈن بىر دۇنيا»</strong> قىلىپ قۇراللىساق،<br />
              بۇ يېڭى دۇنيا — كەلگۈسىدىكى <strong>ئىتتىپاق، كۈچلۈك ۋە بىلىمگە ئىگە نەسىل</strong> نىڭ ئاساسى بولىدۇ.
            </p>
          </section>

          {/* Hashtags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-2">#دېجىتال_تەلىم</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-2">#سۇنئىي_ئەقىل</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-2">#بالىلار_ئۈچۈن_كەلگۈسى</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">#ئۇيغۇر_تىلى</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog22;