// Blog03_UY.jsx
import React from 'react';

const Blog25 = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden my-10 font-['UKIJ_Tuz']">
      {/* Hero Image with Uyghur Proverb */}
      <div className="relative">
        <img 
          src="https://www.babajividhyashram.org/wp-content/uploads/2024/07/AI-Tools-in-Student-Learning-A-New-Transformation.jpg" 
          alt="ئىزدىنىش ئۆگىنىش — بالىلار بىلەن مۇئەللىملەر بىللە مۇزاكىرە قىلىش" 
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-base font-medium">
          «ئىزدىش — بىلىمگە بارغۇچى يول»
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10">
        {/* Title */}
        <header className="mb-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            مائارىپنىڭ كەلگۈسىنى كۆزدە تۇتۇش 
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-indigo-700 leading-relaxed">
            «ئىزدىنىش ئۆگىنىش» نېمە ئىش قىلىدۇ؟
          </h2>
        </header>

        {/* Metadata */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-700 text-sm md:text-base">
          <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
            <span className="font-semibold text-indigo-600">مۇئەللىپ:</span>
            <span className="mr-2"> كەلبىل مائارىپى</span>
          </div>
          <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
            <span className="font-semibold text-indigo-600">چېسلا:</span>
            <span className="mr-2">2025-يىلى 11-ئاينىڭ 26-كۈنى </span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-r-4 border-blue-600 p-6 rounded-2xl mb-12 shadow-sm">
          <h3 className="font-bold text-blue-900 text-xl mb-4 flex items-center">
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
            مۇندەرىجە
          </h3>
          <ul className="space-y-3 pr-4">
            {[
              'ئىزدىنىش ئۆگىنىشنىڭ ئەسلى سەۋەبى',
              'ئىزدىنىش ئۆگىنىش دېگەن نېمە؟',
              'دەرىجىلىك دەرسنىڭ نىشانلىرى',
              'مەكتەپ تاختىسىدىكى توقۇنۇشلار ۋە دۆلەتنىڭ قوللاشى',
              'ئۆيدە قىلىدىغان «ئىزدىنىشچان سۆزلىشىش» نىڭ ئۇسۇللىرى',
              'خۇلاسە'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-blue-800 hover:text-blue-600 transition-colors">
                <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
                <a href={`#section-${idx + 1}`} className="mr-2 hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none space-y-10 text-gray-800 leading-8">

          {/* Intro */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl border-r-4 border-indigo-500 shadow-sm">
            <p className="text-xl italic text-gray-700 mb-4">
              «ئىزدىنىش ئۆگىنىش» ھەققىدە بىلەمسىز؟ ھەتتا ئاتا-ئانىلارمۇ بۇ سۆزنى ئىلگىرى ئاڭلىغان بولۇشى مۇمكىن، ئەمما ئۇ يەردە قانداق دەرسلەرنىڭ ئېلىپ بېرىلىدىغانلىقىنى ياكى قانداق ماھارەتلەرنى تەرەققىي قىلدۇرىدىغانلىقىنى تەسەۋۋۇر قىلىش تەس.
            </p>
            <div className="space-y-4">
              <p>
                ئىزدىنىش ئۆگىنىشى ئوقۇغۇچىلارنىڭ <span className="font-bold text-indigo-700">ئۆزلىرىنىڭ مەسىلىلىرىنى ئوتتۇرىغا قويۇشى</span>، <span className="font-bold text-indigo-700">ئۇچۇر توپلىشى</span>، <span className="font-bold text-indigo-700">ئۇ ھەقتە ئويلىنىشى</span> ۋە <span className="font-bold text-indigo-700">نەتىجىلىرىنى ئوتتۇرىغا قويۇشى</span>نى ئۆز ئىچىگە ئالىدۇ.
              </p>
              <p>
                بىر قاراشتا، بۇ <span className="font-bold text-purple-700">ئەركىن ۋە قىزىقارلىق</span> كۆرۈنىشى مۇمكىن، ئەمما پەردە ئارقىسىدا ئوقۇتقۇچىلار <span className="font-bold text-purple-700">سىناق ۋە خاتالىق ئارقىلىق</span> دەرسلەرنى ئۆتكۈزۈۋاتىدۇ.
              </p>
              <div className="bg-white p-5 rounded-xl mt-4 border border-indigo-200">
                <p className="text-center text-lg font-semibold text-indigo-800">
                  ئىزدىنىش ئۆگىنىشىدە ئالاھىدە مۇھىم بولغىنى —<br/>
                  <span className="text-2xl text-red-600 mt-2 block">«ئۆزىنىڭ سوئاللىرىنى ئوتتۇرىغا قويۇش ۋە ئۆز مەسىلىلىرىنى ئوتتۇرىغا قويۇش»</span>
                </p>
              </div>
              <p className="mt-4">
                بۇ تەجرىبە — بالىلارنىڭ <span className="font-bold text-green-700">ئويلاش ماھارىتى</span> ۋە <span className="font-bold text-green-700">مۇستەقىللىقىنىڭ ئاساسى</span> بولۇپ، كەلگۈسىدە ئۇلارنىڭ ئۆگىنىش ئىقتىدارىنى قوللاشتىكى مۇھىم كۈچ بولىدۇ.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-20">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-indigo-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold ml-3">
                ١
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ئىزدىنىش ئۆگىنىشنىڭ ئەسلى سەۋەبى
              </h2>
            </div>
            
            <div className="space-y-5 pr-4">
              <p>
                بىز <span className="font-bold text-red-600">VUCA</span> (ئۆزگىرىشچان، ئېنىقسىز، مۇرەككەپ، ئىككى خىل) دەۋرىدە ياشاۋاتىمىز.
              </p>
              <p>
                بۇ دەۋردىكى <span className="font-bold text-blue-700">ئىجتىمائىي، ئىقتىسادىي، تېخنىكىلىق ئۆزگىرىشلەر</span> ئىلگىرىكىگە قارىغاندا <span className="font-bold">تېز</span> ۋە <span className="font-bold">مۆلچەرلىگىلى بولمايدىغان</span>.
              </p>
              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <p>
                  يەنە بىر نۇقتا — <span className="font-bold text-yellow-800">سۈنئىي ئەقىلنىڭ تەرەققىي قىلىشى</span>.  
                  <span className="font-bold text-yellow-800"> ئاددىي ئۇچۇرلارنى بىر تەرەپ قىلىش</span>، <span className="font-bold text-yellow-800">بىلىملەرنى يادلاش</span> — بۇلار <span className="font-bold text-yellow-800">ماشىنىلار بىلەن ئالماشتۇرۇلۇۋاتىدۇ</span>.
                </p>
              </div>
              <p>
                بۇ خىل ئەھۋالدا، <span className="font-bold text-red-700">بىلىم يادلىش ئىقتىدارىلا ئەمەس</span>، بەلكى:  
              </p>
              <ul className="list-disc pr-8 space-y-2">
                <li><span className="font-bold">مۇستەقىل ئويلىنىش</span></li>
                <li><span className="font-bold">ھۆكۈم قىلىش</span></li>
                <li><span className="font-bold">ھەرىكەت قىلىش ئىقتىدارى</span> لازىم</li>
              </ul>
              
              <div className="bg-green-100 p-5 rounded-xl mt-6 border-2 border-green-300">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-700 ml-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-green-900 font-semibold text-lg">
                    ئىزدىنىش ئۆگىنىش — بۇ دەۋرنىڭ ئېھتىياجىنى قاندۇرىدىغان مائارىپ ئۇسۇلى.
                  </p>
                </div>
              </div>
              
              <p>
                مەقسىتى: بالىلارغا <span className="font-bold text-purple-700">«سوئال قويۇش، مەسىلىلەرنى بېكىتىش، ھەل قىلىش چارىلىرىنى تۈزۈش»</span> جەريانىنى ئۆگىتىش.
              </p>
              <p>
                بۇ ئارقىلىق، <span className="font-bold">مۇرەككەپ ۋە بايقالمايدىغان مەسىلىلەرگە جانلىق جاۋاب</span> بېرىش ئىقتىدارى يېتىلدۈرىلىدۇ.
              </p>
              <div className="bg-blue-50 p-5 rounded-xl">
                <p>
                  مائارىپ ئىسلاھاتى، ئۇنىۋېرسىتېت كىرۈش ئىمتىھانى — بۇلار ئىزدىنىش ئۆگىنىشنى قوللايدۇ.
                </p>
                <p className="mt-2 font-bold text-blue-800">
                  بالىلار <span className="text-red-600">سۈنئىي ئەقىل بىلەن تەڭلىشەلمەيدىغان</span> «مۇستەقىل ئويلىنىش، سوئال قويۇش، مەسىلى ھەل قىلىش» ئىقتىدارىنى يېتىلدۈرىدۇ.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-20 pt-10">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-indigo-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold ml-3">
                ٢
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ئىزدىنىش ئۆگىنىش دېگەن نېمە؟
              </h2>
            </div>
            
            <div className="space-y-6 pr-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-r-4 border-purple-500">
                <p className="text-xl font-bold text-purple-800 text-center">
                  ئىزدىنىش ئۆگىنىش دېگىنىمىز —<br/>
                  <span className="text-2xl text-purple-900">«سوئال سوراش، ئۇچۇر توپلاش، تەكشۈرۈش ۋە خۇلاسىلەش ئارقىلىق ئۆگىنىش»</span>
                </p>
              </div>
              
              <p>
                بۇ — <span className="font-bold text-blue-700">پەقەت تەتقىقات قىلىش ۋە كۆرسىتىش بىلەن چەكلىنىپ قالمايدۇ</span>، بەلكى <span className="font-bold text-blue-700">ئويلاش جەريانىنىڭ ئۆزىگە ئەھمىيەت بېرىدۇ</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h3 className="font-bold text-red-800 text-lg mb-2">ئىلگىرىكى باھالاش</h3>
                  <p className="text-red-700">«جاۋاب توغرا ياكى خاتا»</p>
                </div>
                <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-800 text-lg mb-2">ھازىرقى باھالاش</h3>
                  <p className="text-green-700">«ئويلاش ئىقتىدارىنى قانداق چوڭقۇرلاشتۇردى»</p>
                </div>
              </div>
              
              <p className="mt-6">
                دەرىجىلىك دەرسنىڭ ئىچىدە، بالىلار:  
              </p>
              <div className="bg-yellow-50 p-5 rounded-xl mr-8">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 ml-2">?</span>
                    <p className="font-bold text-yellow-800">«بۇ نېمە ئۈچۈن يۈز بېرىدۇ؟»</p>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center flex-shrink-0 ml-2">?</span>
                    <p className="font-bold text-yellow-800">«مەسىلىنى قانداق ھەل قىلالايمىز؟»</p>
                  </div>
                </div>
                <p className="mt-3 text-yellow-900">دەپ ئۆزى بىر جاۋاب تاپىدۇ.</p>
              </div>
              
              <div className="bg-indigo-100 p-6 rounded-xl mt-6 border border-indigo-300">
                <h3 className="font-bold text-indigo-900 text-xl mb-3">مۇھىم نۇقتا</h3>
                <p>
                  <span className="font-bold text-indigo-800">بالا ئۆزى مەسىلى تەپسىلاتلىق بېكىتىشى، سۇئال قويۇشى</span>.
                </p>
                <p className="mt-2">
                  بۇ تەجرىبە — <span className="font-bold text-red-700">ئۆگىنىش ئىقتىدارىنىڭ ئاساسى</span>، <span className="font-bold text-red-700">ئاكتىپ ئۆگىنىش ئادىتىنى يېتىلدۈرىدۇ</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-20 pt-10">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-indigo-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold ml-3">
                ٣
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                دەرىجىلىك دەرسنىڭ نىشانلىرى
              </h2>
            </div>
            
            <div className="space-y-6 pr-4">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-2xl">
                <p className="text-lg font-bold text-blue-900">
                  ئىزدىنىش ئۆگىنىش — <span className="text-red-600">بىلىم ھەپسىلىش بىلەن چەكلىنىپ قالمايدۇ</span>.  
                </p>
                <p className="mt-2 text-lg font-bold text-blue-900">
                  ئەڭ مۇھىم نۇقتا — <span className="text-green-700">بالا ئۆزى مەسىلى تەپسىلاتلىق بېكىتىش، سۇئال قويۇش ئىقتىدارى</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: "❓",
                    title: 'ئۆزىدىن سوئال سوراش ئىقتىدارى',
                    desc: '«بۇ نېمە ئۈچۈن يۈز بېرىدۇ؟» دەپ مەسىلى تاپقۇچى، ئۇنىڭغا قارىش — بۇ ئۆگىنىش پوزىتسىيىسىنى ئۆزگەرتىدۇ.',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: "🔍",
                    title: 'تەتقىقات ۋە ئويلىنىش ئىقتىدارى',
                    desc: 'ئۇچۇرلارنى تەرتىپلەش، ئۆز چۈشەنچىسى بويىچە تەكشۈرۈش — مەنتىقىي ئويلاش ۋە يېچىم تاپىش ئىقتىدارى يېتىلدۈرىدۇ.',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: "💬",
                    title: 'ئالاقە قىلىش ۋە ھەمكارلىشىش ئىقتىدارى',
                    desc: 'ئويىنى تىلغا چىقىرىش، باشقىلارنىڭ پىكىرىگە قۇلاق سېلىش — ئويلاش جانلىقلىقى ۋە ھەمكارلىشىش سەۋىيىسىنى يېتىلدۈرىدۇ.',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: "🎯",
                    title: 'ئەڭ ياخشى ھەل قىلىش چارىسىنى تېپىش ئىقتىدارى',
                    desc: 'تەكشۈرۈش نەتىجىسىگە قاراپ، ئەڭ ياخشى يېچىمنى تالداپ تاپىش — بۇ مەنتىقىي قەرەش ۋە ئەمەلىي ئويلاش ئىقتىدارىنى يېتىلدۈرىدۇ.',
                    color: 'from-orange-500 to-red-500'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className={`bg-gradient-to-r ${item.color} p-4`}>
                      <div className="flex items-center">
                        <span className="text-2xl ml-2">{item.icon}</span>
                        <h3 className="text-xl font-bold text-white mr-2">{item.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl mt-10 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 text-xl mb-3">مۇھىم نۇقتا</h3>
                <p className="text-purple-800 mb-3">
                  <span className="font-bold text-red-600">«ئۆز مەسىلىلىرىڭىزنى قويۇش ۋە ئۆزىڭىزنىڭ سوئاللىرىڭىزنى تۈزۈش»</span> تەجرىبىسى.
                </p>
                <p className="text-purple-800">
                  بۇ تەجرىبە ئارقىلىق، بالىلار <span className="font-bold text-green-700">«ئويلاش قىزىقارلىق»</span>، <span className="font-bold text-green-700">«ئۆگىنىش ماڭا كۈچ بېرىدۇ»</span> دېگەننى چۈشىنىدۇ.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-20 pt-10">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-indigo-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold ml-3">
                ٤
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                مەكتەپ تاختىسىدىكى توقۇنۇشلار ۋە دۆلەتنىڭ قوللاشى
              </h2>
            </div>
            
            <div className="space-y-6 pr-4">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                <p className="text-lg font-bold text-orange-900">
                  ئىزدىنىش ئۆگىنىش — ئاجايىپ ئۇسۇل، ئەمما <span className="text-red-600">رېئال دۇنيادىكى توقۇنۇشلار</span> بار.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center ml-3 mt-1">
                    ⚠
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">مۇئەللىملەر <span className="text-red-600">ئالاھىدە تەربىيەگە ئىگە ئەمەس</span></p>
                    <p className="text-gray-700 mt-1">باشقا مەسئۇلىيەتلەرنى بىرلا ۋاقىتدا باشلايدۇ</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center ml-3 mt-1">
                    ⏰
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">دەرىجىلىك دەرس تەييارلىش ۋە باھالاش <span className="text-red-600">ۋاقىت كۆپ تەلەپ قىلىدۇ</span></p>
                    <p className="text-gray-700 mt-1">نەتىجىدە بەزىدە <span className="font-bold">پەقەت رەسمىيەتچىلىك</span> قىلىنىدۇ</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-300">
                <p className="text-yellow-900">
                  مۇئەللىملەر مۇ <span className="font-bold">ئۆگىنىۋاتقان ھالەتتە</span> دەرىجىلىك دەرس ئۆتكۈزۈۋاتىدۇ.
                </p>
                <p className="mt-2 text-yellow-900">
                  <span className="font-bold">تەربىيە، ماتېرىيال يېتىشمىسە</span>، بالىلارنىڭ ئۆگىنىش سۈپىتى كاپالەتسىز.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-xl border-2 border-red-300">
                <p className="font-bold text-red-800 text-lg text-center">
                  بۇنى پۈتۈنلەي <span className="underline">مەكتەپكە قويۇپ بېرىش</span> —<br/>
                  تەكشۈرۈش ئۆگىنىشنى <span className="text-red-600">تۈربەت ئىش</span> قىلىپ قويىدۇ.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl mt-8">
                <h3 className="font-bold text-green-900 text-xl mb-4 flex items-center">
                  <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  شۇڭا، دۆلەت ۋە يەرلىك ھۆكۈمەتلەرنىڭ قوللاشى زۆرۈر
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    {
                      title: 'دەرىجىلىك دەرصلىك ۋە مىساللار',
                      desc: 'مۇئەللىم زورىقىشىنى يېڭىلەيدۇ'
                    },
                    {
                      title: 'دەرىجىلىك دەرس ۋە باھالاش تەربىيىسى',
                      desc: 'مۇئەللىم ماھارىتىنى يۇقىرى قىلىدۇ'
                    },
                    {
                      title: 'تەييارلىق ۋە قايتا تەكشۈرۈش قوراللىرى',
                      desc: 'ئىشلارنى ئاددىيلاشتۇرىدۇ'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-green-200">
                      <h4 className="font-bold text-green-800 mb-2">{item.title}</h4>
                      <p className="text-green-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mt-6">
                <h4 className="font-bold text-blue-900 text-lg mb-3">يەنە بىر مۇھىم نۇقتا — ئائىلنىڭ قوللىشى</h4>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <span className="bg-white px-4 py-2 rounded-lg shadow font-bold text-blue-700"  >   ئۆي </span>
                  <span className="text-blue-500">+</span>
                  <span className="bg-white px-4 py-2 rounded-lg shadow font-bold text-blue-700">مەكتەپ</span>
                  <span className="text-blue-500">+</span>
                  <span className="bg-white px-4 py-2 rounded-lg shadow font-bold text-blue-700">دۆلەت</span>
                </div>
                <p className="text-center mt-4 text-blue-800 font-semibold">
                  بىرلەشسە، بالىلارغا <span className="text-red-600">ھەقىقىي مەنىدىكى ئىزدىنىش ئۆگىنىش</span> بېرىشكە بولىدۇ.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-20 pt-10">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-indigo-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold ml-3">
                ٥
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ئۆيدە قىلىدىغان «ئىزدىنىشچان سۆزلىشىش» نىڭ ئۇسۇللىرى
              </h2>
            </div>
            
            <div className="space-y-6 pr-4">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl">
                <p className="text-lg font-bold text-pink-900">
                  ئۆيدىمۇ ئىزدىنىش ئۆگىنىشنى قوللاش مۇمكىن.
                </p>
                <p className="mt-2 text-lg font-bold text-pink-900">
                  مۇھىم نۇقتا — <span className="text-red-600">«دۇرۇست جاۋاب بېرىش ئەمەس، ئويلاش جەريانىنى قوزغىتىش»</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: "❓",
                    title: '«نىمىشقا؟» دېگەن سوئال بېرىش',
                    desc: 'خەۋەر ياكى كۈندىلىك ۋەقە توغرىسىدا: «نىمىشقا بۇنداق بولدى؟» دەپ سوراڭ.',
                    color: 'bg-blue-50 border-blue-200'
                  },
                  {
                    icon: "💡",
                    title: 'قىزىقىدىغان نەرسىلىرى توغرىسىدا بىرلىكتە ئويلاش',
                    desc: 'ئويۇن، تەنتەربىيە، مانگا — «نىمىشقا بۇنداق؟»، «بۇنى قانداق ئۆزگەرتىش مۇمكىن؟»',
                    color: 'bg-green-50 border-green-200'
                  },
                  {
                    icon: "👏",
                    title: 'جاۋاب ئەمەس، ئويلاش جەريانىنى ماقىلاش',
                    desc: '«بۇ ياخشى پىكىر ئىدى»، «مەن بۇنى ھەرگىز بۇنداق ئويلىمىغان» دەپ باھالىسىڭىز، بالا ئويلىشىشنى داۋاملاشتۇرىدۇ.',
                    color: 'bg-yellow-50 border-yellow-200'
                  },
                  {
                    icon: "🏠",
                    title: 'كۈندىلىك ئىشلارنى كىچىك ئىزدىنىش تەلىمىگە ئايلىنىدۇ',
                    desc: 'تاماق قىلغاندا: «نېمە ئۈچۈن تۇز قوشىمىز؟»، دۇكانغا بارغاندا: «ئەرزان نەرسىنى قانداق تاپىش مۇمكىن؟»',
                    color: 'bg-purple-50 border-purple-200'
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`${item.color} p-6 rounded-2xl border-2 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl ml-2">{item.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800 mr-2">{item.title}</h3>
                    </div>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-2xl mt-10">
                <p className="text-center text-lg font-bold text-indigo-900">
                  بۇ كىچىك تەجرىبىلەرنىڭ يىغىلىشى بىلەن، بالىلار
                </p>
                <p className="text-center text-2xl font-bold text-red-600 mt-3">
                  ئۆزى مەسىلى تەپسىلاتلىق بېكىتىش، سۇئال قويۇش ئادىتى
                </p>
                <p className="text-center text-lg font-bold text-indigo-900 mt-3">
                  نى يېتىلدۈرىدۇ.
                </p>
                <div className="flex items-center justify-center mt-6 space-x-4">
                  <span className="bg-white px-6 py-3 rounded-xl shadow font-bold text-blue-700 text-lg">
                    مەكتەپتىكى ئىزدىنىش ئۆگىنىش
                  </span>
                  <span className="text-2xl text-purple-600">+</span>
                  <span className="bg-white px-6 py-3 rounded-xl shadow font-bold text-blue-700 text-lg">
                    ئۆيدىكى سۆزلىشىش
                  </span>
                  <span className="text-2xl text-purple-600">=</span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow font-bold text-lg">
                    تېرەن ئۆگىنىش
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-20 pt-10">
            <div className="flex items-center mb-8 pb-4 border-b-2 border-indigo-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold ml-3">
                ٦
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                خۇلاسە
              </h2>
            </div>
            
            <div className="space-y-8 pr-4">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
                <p className="text-xl font-bold text-gray-800 mb-4">
                  ئىزدىنىش ئۆگىنىش — <span className="text-red-600">بالا ئۆزى مەسىلى تەپسىلاتلىق بېكىتىپ، سۇئال قويۇپ، ئويلىشىش</span> ئىقتىدارىنى يېتىلدۈرىدىغان تەلىم شەكلى.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center ml-3 mt-1">
                      ⚠
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">لېكىن مەكتەپ تاختىسىدا:</p>
                      <ul className="list-disc pr-8 mt-2 space-y-1">
                        <li><span className="font-bold text-red-600">مۇئەللىملەر تەجرىبى-خاتالىق</span> قىلىۋاتىدۇ</li>
                        <li><span className="font-bold text-red-600">زورىقىش چوڭ</span></li>
                        <li>نەتىجىدە بەزىدە <span className="font-bold text-red-600">شەكىللا قىلىنىدۇ</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                <h3 className="font-bold text-green-900 text-xl mb-4">شۇڭا، تۆت تەرەپنىڭ بىرلىكى زۆرۈر:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {['ئۆي-ئائىلە', 'مەكتەپ', 'دۆلەت', 'جامائەت'].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl text-center shadow">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                        {idx + 1}
                      </div>
                      <p className="font-bold text-green-800">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl">
                <h3 className="font-bold text-pink-900 text-xl mb-4">ئۆيدە قانداق قىلىش كېرەك؟</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-white p-4 rounded-xl">
                    <span className="text-2xl ml-2">❓</span>
                    <p className="mr-2 font-bold text-pink-800">«نىمىشقا؟»</p>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-xl">
                    <span className="text-2xl ml-2">💭</span>
                    <p className="mr-2 font-bold text-pink-800">«نېمە قىلىشىمىز كېرەك؟»</p>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-xl">
                    <span className="text-2xl ml-2">👏</span>
                    <p className="mr-2 font-bold text-pink-800">ئويلاش جەريانىنى ماقىلاش</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-4 border-red-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-800 italic mb-6">
                    مەكتەپتىكى ئىزدىنىش ئۆگىنىش بىلەن ئۆيدىكى سۆزلىشىش بىرلەشكەندە،  
                    بالىلار <span className="text-red-600">مۇستەقىل ئويلاش ئىقتىدارى</span> نى يېتىلدۈرىدۇ.
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl mt-6">
                    <p className="text-lg font-bold text-gray-800 mb-4">
                      بالىڭىزدىن مەكتەپتىكى <span className="text-red-600">ئىزدىنىش ئۆگىنىشى</span> ھەققىدە سوراڭ!
                    </p>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
                      <p className="font-bold text-xl">
                        مەكتەپ دەرىجىلىك دەرسى <span className="text-yellow-300">تېز ئۆزگىرىۋاتىدۇ</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hashtags */}
          <div className="mt-20 pt-10 border-t border-gray-300">
            <div className="flex flex-wrap justify-center gap-3">
              {['#ئىزدىنىش_ئۆگىنىش', '#مائارىپ_ئىسلامى', '#بالىلار_تەربىيىسى', '#ئۇيغۇر_تىلى'].map((tag, idx) => (
                <span 
                  key={idx}
                  className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 px-5 py-2 rounded-full text-gray-700 font-medium hover:text-gray-900 transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              © 2025 مائارىپنىڭ كەلگۈسىنى كۆزدە تۇتۇش. بارلىق ھوقۇقلار مۇھاپىزەتلىك.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog25;