// Blog02_UY.jsx
import React from 'react';

const Blog02_UY = () => {
  return (
    <article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden my-12 font-['UKIJ_Tuz']">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative">
        <img 
          src="https://previews.123rf.com/images/topvectors/topvectors2203/topvectors220300540/183781589-children-studying-with-parents-at-home-together-set-mother-and-father-helping-children-with.jpg" 
          alt="ئۆيدە بالىلار بىلەن ئويلىشىش — كۈندىلىك تۇرمۇشىدىكى ئويلاش مەشىقى" 
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm text-white px-6 py-4 rounded-2xl inline-block max-w-2xl">
            <p className="text-xl md:text-2xl font-bold mb-2">«سۇئال — بىلىمگە باشلاشنىڭ ئاچقۇچى»</p>
            <p className="text-sm opacity-90">— ئۇيغۇر ئاتا سۆزى</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-12">
        {/* Title Section */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-2 rounded-full mb-6">
            <span className="text-indigo-700 font-bold text-lg">مائارىپنىڭ كەلگۈسىنى كۆزدە تۇتۇش </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            «ئويلاش ئىقتىدارى» بىلىمدىن مۇھىم بولغان بىر دەۋردە
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 leading-relaxed max-w-3xl mx-auto">
            ئۆيدە قىلغىلى بولىدىغان «ئويلاش مەشىقى» ئۈچۈن تەۋسىيەلەر
          </h2>
        </header>

        {/* Metadata */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-700 text-base">
          <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-3 rounded-xl shadow-sm">
            <svg className="w-5 h-5 text-indigo-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold text-indigo-700 mr-2">مۇئەللىپ:</span>
            <span>كەلبىل مائارىپى</span>
          </div>
          <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-3 rounded-xl shadow-sm">
            <svg className="w-5 h-5 text-indigo-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold text-indigo-700 mr-2" >چېسلا : </span>
            <span>2025-يىلى 11-ئاينىڭ 19-كۈنى</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-r-4 border-blue-600 p-8 rounded-3xl mb-16 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-3 h-12 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full ml-3"></div>
            <h3 className="text-2xl font-bold text-blue-900 mr-2">مەزمۇنلار جەدۋىلى</h3>
          </div>
          <ul className="space-y-4 pr-6">
            {[
              'نېمە ئۈچۈن «ئويلاش ئىقتىدارى» ھازىر لازىم',
              'ئويلاش ئىقتىدارىغا بولغان ئېھتىياجنىڭ ئارقا كۆرۈنۈشى',
              'ئويلاش ئىقتىدارى دېگەن نېمە؟',
              'ئۆيدە قىلغىلى بولىدىغان «ئويلاش مەشىقى»',
              'خۇلاسە'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold ml-3 group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                <a href={`#section-${idx + 1}`} className="mr-3 text-blue-800 hover:text-blue-600 font-medium text-lg hover:underline transition-colors">
                  {item}
                </a>
                <svg className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-xl max-w-none space-y-16 text-gray-800 leading-relaxed">

          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-20">
            <div className="flex items-center mb-10">
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  ١
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-2xl -z-10 blur opacity-30"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mr-4">
                نېمە ئۈچۈن «ئويلاش ئىقتىدارى» ھازىر لازىم
              </h2>
            </div>
            
            <div className="space-y-8 pr-6">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl border-r-4 border-blue-500">
                <p className="text-xl text-gray-700 mb-6">
                  ئەنئەنىۋى جەھەتتىن، مەكتەپ مائارىپى ئاساسلىقى <span className="font-bold text-blue-700">«بىلىملەرنى يادلاش»</span>قا مەركەزلەشكەن.
                </p>
                <p className="text-xl text-gray-700">
                  ئاساسلىق ئۆگىنىش ئۇسلۇبى — <span className="font-bold text-red-600">دائىملىق سىناقلار ئۈچۈن يادلاش</span>، <span className="font-bold text-red-600">دەرسلىكلەرنىڭ مەزمۇنىنى چۈشىنىش</span>.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-orange-200">
                  <h3 className="font-bold text-red-800 text-xl mb-3">ئىلگىرىكى دەۋر</h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <span className="text-red-500 ml-2">•</span>
                      <span>بىلىملەرنى يادلاش مۇھىم</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 ml-2">•</span>
                      <span>دەرسلىكنى چۈشىنىش كەپىيەت</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 ml-2">•</span>
                      <span>ئۇچۇرلارغا ئېرىشىش تەس</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-emerald-200">
                  <h3 className="font-bold text-green-800 text-xl mb-3">ھازىرقى دەۋر</h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      <span>سۈنئىي ئەقىل ۋە تېلېفونلار</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      <span>ئۇچۇرلارغا ئاسان ئېرىشىش</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      <span>پەقەت بىلىم يادلىش يېتەرسىز</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl mt-8">
                <p className="text-2xl font-bold text-purple-900 text-center">
                  كەلگۈسىدىكى جەمئىيەتتە تەلەپ قىلىنىدىغان نەرسە:
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {[
                    { icon: "❓", text: "سوئال سوراش", color: "bg-purple-500" },
                    { icon: "💭", text: "ئويلىنىش", color: "bg-pink-500" },
                    { icon: "🎯", text: "قارار چىقىرىش", color: "bg-indigo-500" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md">
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white text-2xl ml-2`}>
                        {item.icon}
                      </div>
                      <span className="mr-3 font-bold text-gray-800 text-lg">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border-l-4 border-amber-500">
                <p className="text-2xl font-bold text-amber-900 mb-4">
                  <span className="text-red-600">بىلىمنى قانداق قوللىنىش</span> توغرىسىدا ئويلىنىش ئىقتىدارى — 
                  <span className="text-red-600"> بىلىمنىڭ ئۆزىدىن مۇھىم بولۇپ قالماقتا</span>.
                </p>
                <div className="mt-6 bg-white p-6 rounded-xl">
                  <p className="text-lg text-gray-700 font-semibold mb-3">
                    ئەمەلىي سوئاللار:
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-center text-red-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                      <span className="mr-2 font-bold">بالىلار ھەقىقەتەن ئويلىنىش ئىقتىدارىنى ئۆگىنىۋاتامدۇ؟</span>
                    </p>
                    <p className="flex items-center text-red-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                      <span className="mr-2 font-bold">مەكتەپ دەرسلىرى ۋە كۈندىلىك تۇرمۇش يېتەرلىكمۇ؟</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg">
                  <span className="text-2xl mr-2">🔍</span>
                  <span className="text-xl font-bold">بۇ قېتىم، ئۆيدە قىلىشقا بولىدىغان ئويلىنىش ماھارىتىنى تەرەققىي قىلدۇرۇشنىڭ ئۇسۇللىرىنى كۆرۈپ چىقىمىز</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-20 pt-16">
            <div className="flex items-center mb-10">
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  ٢
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl -z-10 blur opacity-30"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mr-4">
                ئويلىنىش ماھارىتىگە بولغان ئېھتىياجنىڭ ئارقا كۆرۈنۈشى
              </h2>
            </div>
            
            <div className="space-y-8 pr-6">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl">
                <p className="text-3xl font-bold text-gray-800 text-center">
                  جەمئىيەت <span className="text-red-600">تېز سۈرئەتتە ئۆزگىرىۋاتىدۇ</span>
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center ml-3">
                      <span className="text-2xl text-red-600">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mr-2">سۈنئىي ئەقىل دەۋرى</h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    <span className="font-bold text-red-600">ئاددىي ۋە كۈندىلىك ۋەزىپىلەر</span>نىڭ ئورنىنى 
                    <span className="font-bold text-red-600"> سۈنئىي ئەقىل ۋە ماشىنىلار</span> ئىگىلىۋالغانلىقتىن
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center ml-3">
                      <span className="text-2xl text-green-600">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900 mr-2">ئىنسانلارغا قويۇلۇشاتقان تەلەپ</h3>
                  </div>
                  <p className="text-gray-700 text-lg font-bold">
                    مەسىلىلەرنى بايقاش، ئۆزلىرى ھەل قىلىش چارىسىنى ئويلاش ئىقتىدارى
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
                  مائارىپتا كۆرۈلۈۋاتقان ئۆزگىرىش
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-red-600 text-lg mb-3">ئىلگىرىكى ئۇسلۇب</h4>
                    <p className="text-gray-700">«قىسقا-قىسقا» دەرسلەر</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-green-600 text-lg mb-3">ھازىرقى ئۇسلۇب</h4>
                    <p className="text-gray-700">گۇرۇپپا ئويلىنىشى ۋە مۇزاكىرە قىلىشنى ئىلگىرى سۈرىدىغان «ئاكتىپ ئۆگىنىش»</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl ml-3 mt-1">
                    📚
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">ئىجتىمائىي پەن دەرسى مىسالى</h3>
                    <div className="space-y-3 text-green-800">
                      <p className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full ml-3"></span>
                        <span className="mr-2">«بۇ ۋەقە نېمە ئۈچۈن يۈز بەردى؟»</span>
                      </p>
                      <p className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full ml-3"></span>
                        <span className="mr-2">«بۇنىڭ بۈگۈنكى كۈنگە قانداق تەسىرى بار؟»</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white/80 p-6 rounded-xl">
                  <p className="text-center text-green-900 font-bold text-lg">
                    بۇنداق دەرسلەر — <span className="text-red-600">بىلىمنى ئىشلىتىپ ئۆز پىكرىنى شەكىللەندۈرۈشتە مەشىق بېرىدۇ</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-20 pt-16">
            <div className="flex items-center mb-10">
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  ٣
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-2xl -z-10 blur opacity-30"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mr-4">
                ئويلاش ماھارىتى دېگەن نېمە؟
              </h2>
            </div>
            
            <div className="space-y-8 pr-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-10 rounded-3xl">
                <p className="text-3xl font-bold text-purple-900 text-center mb-6">
                  ئويلاش ماھارىتى — <span className="text-red-600">پەقەت بىلىمنى يادلاش بىلەنلا چەكلىنىپ قالمايدۇ</span>
                </p>
                <p className="text-2xl font-bold text-center text-purple-800">
                  ئۇ — <span className="text-indigo-700">بىلىمنى ئىشلىتىپ ئۆز پىكرىنى شەكىللەندۈرۈش ئىقتىدارى</span>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-yellow-900 mb-6">ئەمەلىي مىسال</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl">
                      <p className="text-lg font-bold text-gray-800">خەۋەر ياكى ۋەقەنى كۆرگەندە:</p>
                    </div>
                    <div className="space-y-3 mr-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                          <span className="text-red-600 text-xl">❓</span>
                        </div>
                        <p className="mr-3 text-lg font-bold text-gray-800">«نېمىشقا بۇنداق بولدى؟»</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                          <span className="text-blue-600 text-xl">🔍</span>
                        </div>
                        <p className="mr-3 text-lg font-bold text-gray-800">«باشقا يول بارمۇ؟»</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-red-900 mb-6">ئەڭ مۇھىم نۇقتا</h3>
                  <div className="bg-white p-6 rounded-xl">
                    <p className="text-xl font-bold text-gray-800">
                      پەقەت جاۋاب تېپىشتىن كۆرە،  
                      <span className="text-red-600"> «بۇ ھەقتە قانداق ئويلىغانلىقىڭىز»</span>غا دىققەت قىلىش
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-10 rounded-3xl mt-10">
                <h3 className="text-2xl font-bold text-indigo-900 mb-8 text-center">
                  قانداق قىلىپ بالىلارنىڭ مۇستەقىل ئويلاش ئىقتىدارىنى يېتىلدۈرۈش كېرەك؟
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl ml-3">
                        ①
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mr-3">بىرىنچى قەدەم</h4>
                    </div>
                    <p className="text-lg text-gray-700">
                      ئالدى بىلەن ئۇلارنى <span className="font-bold text-green-700">سوئال سوراش ئادىتىگە كىرگۈزۈش كېرەك</span>
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl ml-3">
                        ②
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mr-3">ئىككىنچى قەدەم</h4>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700">
                        ئۇلار سوئال سوراشتا <span className="font-bold text-blue-700">قانچە كۆپ تەجرىبىگە ئىگە بولسا</span>
                      </p>
                      <div className="text-center">
                        <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full">
                          <span className="text-2xl">⬆</span>
                          <span className="mr-2 font-bold text-xl">ئويلاش ئىقتىدارى شۇنچە ياخشىلىنىدۇ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-20 pt-16">
            <div className="flex items-center mb-10">
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  ٤
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-200 to-red-300 rounded-2xl -z-10 blur opacity-30"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mr-4">
                ئۆيدە قىلغىلى بولىدىغان «ئويلاش مەشىقى»
              </h2>
            </div>
            
            <div className="space-y-8 pr-6">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border-2 border-amber-300">
                <p className="text-2xl font-bold text-amber-900 text-center mb-4">
                  ئۆيدە ئويلاش ماھارىتىنى يېتىلدۈرۈش ئۈچۈن نۇرغۇن مەشىق بار
                </p>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-xl font-bold text-red-600 text-center">
                    مۇھىمى — «توغرا جاۋابقا دىققەت قىلىشتىن كۆرە، ئويلاش جەريانىغا ئەھمىيەت بېرىش»
                  </p>
                </div>
              </div>
              
              {/* Exercise Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {[
                  {
                    icon: "🗣",
                    title: 'كۈندىلىك سۆھبەتلەردە «نىمىشقا» دېگەن سوئاللارنى كۆپەيتىش',
                    desc: 'تاماق پىشۇرغاندا، دۇكانغا بارغاندا، تېلېۋىزور كۆرگەندە — «بۇ نېمىشقا يۈز بېرىدۇ؟» دەپ سوراڭ. بالىغا دەرھال جاۋاب بېرماي، ئۆزى ئويلىنىشىغا يول قويۇڭ.',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: "📖",
                    title: 'كىتاب/خەۋەر ئوقۇغاندىن كېيىن پىكىر ئورتاقلىشىش',
                    desc: '«سىز نېمە دەپ ئويلايسىز؟»، «ئەگەر سىز بولسىڭىز نېمە قىلاتتىڭىز؟» دەپ سوراڭ. دەسلەپتە بىر جۈملە بولسۇم يېتەر. كىيىن سەۋەبىنى تاللاشقا ئىلھام بېرىڭ.',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: "👨‍👩‍👧‍👦",
                    title: 'ئائىلە بىلەن «مۇنازىرە» ئوينىش',
                    desc: 'دەم ئېلىش كۈنى قانداق ئۆتكۈزۈش، قايسى ئويۇن سېتىۋېلىش — بۇنداق تېمىلاردا مۇزاكىرە قىلىڭ. بالىلار پىكىر ئىپادىلەش، باشقىلارنىڭ پىكرىنى ئاڭلاش ئىقتىدارىنى يېتىلدۈرىدۇ.',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: "🔬",
                    title: 'بىرلىكتە كىچىك تەجرىبە ياكى تەكشۈرۈش',
                    desc: 'تاماقتىكى تۇز مىقدارىنى ئۆزگەرتىپ تاتلىقلىقنى سېلىشتۇرۇش، ئۆسۈملۈكنىڭ ئۆسۈشىنى كۈزىتىش — بۇ تەجرىبىلەر تەكشۈرۈش ۋە ئويلاش ئىقتىدارىنى بىرلا ۋاقىتتا يېتىلدۈرىدۇ.',
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    icon: "🧩",
                    title: 'مەسىلىنى ھەل قىلىش يۆنىلىشلىك ئويۇن ۋە قول ھۈنەر',
                    desc: 'لېگو، پازىل، سادە پىروگرامما — «بۇنى قانداق قۇرۇش كېرەك؟» دەپ ئويلىتىدۇ. بالىلار ئويناپ تۇرۇپ ئۆگىنىدۇ.',
                    color: 'from-red-500 to-pink-500'
                  },
                  {
                    icon: "🎯",
                    title: 'تاللاش پۇرسىتىنى كۆپەيتىش',
                    desc: 'بالىغا نېمە كىيىش، قانداق تاماق يېيىش، ھەپتە ئاخىرى نېمە قىلىش دېگەندەك تونۇش تاللاشلارنى بېرىڭ. ئۇنىڭ سەۋەبىنى سوراڭ.',
                    color: 'from-indigo-500 to-purple-500'
                  },
                  {
                    icon: "🔄",
                    title: 'ئويلىنىشنى قايتا كۆزدىن كېچۈرۈش',
                    desc: '«بۇنداق ئويلىدىم، لېكىن باشقا يول بارمۇ؟» دەپ سۆزلىشىڭ. خاتىرە يېزىش تەۋسىيە قىلىنىدۇ.',
                    color: 'from-gray-500 to-blue-500'
                  },
                  {
                    icon: "📱",
                    title: 'كۆپ خىل ئۇچۇر مەنبەسى بىلەن تونۇشتۇرۇش',
                    desc: 'گېزىت، تور، كىتاب، ھۆججەتلىك فىلىم — بىر ئۇچۇرلا قانايىلىك. كۆپ خىل كۆز قاراش بىلەن تونۇشتۇرۇش ئويلاشنى جانلىقلايدۇ.',
                    color: 'from-teal-500 to-green-500'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`bg-gradient-to-r ${item.color} p-6`}>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-3xl ml-3">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mr-3 leading-tight">{item.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="px-6 pb-6">
                      <div className="inline-flex items-center text-sm text-gray-500">
                        <span className="w-2 h-2 bg-gray-400 rounded-full ml-2"></span>
                        <span>مەشىق #{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-10 rounded-3xl mt-12">
                <div className="text-center">
                  <div className="inline-flex items-center bg-white px-8 py-4 rounded-full shadow-lg mb-6">
                    <span className="text-3xl text-red-600 ml-2">💡</span>
                    <h3 className="text-2xl font-bold text-gray-800 mr-3">مۇھىم نۇقتا</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xl font-bold text-purple-900">
                      <span className="text-red-600">جاۋاب تېپىش ئەمەس، ئويلاش ۋاقتىغا ھۆرمەت قىلىش</span>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                        <p className="text-lg font-bold text-green-800">
                          ئۆيدىكى بۇ كىچىك تەجرىبىلەر — <span className="text-red-600">مەكتەپتىكى ئۆگىنىشنى تولۇقلايدۇ</span>
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                        <p className="text-lg font-bold text-blue-800">
                          بالىلارنىڭ <span className="text-red-600">مۇستەقىل ئويلاشنىڭ ئاساسىنى سالىدۇ</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-20 pt-16">
            <div className="flex items-center mb-10">
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  ٥
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-red-200 to-pink-300 rounded-2xl -z-10 blur opacity-30"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mr-4">
                خۇلاسە
              </h2>
            </div>
            
            <div className="space-y-10 pr-6">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-10 rounded-3xl">
                <p className="text-3xl font-bold text-gray-900 text-center">
                  كېلەچەكتىكى دەۋردە،  
                  <span className="text-red-600"> پەقەت بىلىملا ياشاش ئۈچۈن يېتەرلىك بولمايدۇ</span>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-4xl ml-3 mx-auto mb-4">
                      🏠
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">ئۆيدە باشلىنىش</h3>
                  </div>
                  <p className="text-gray-700 text-center">
                    ئۆيدىكى كۈندىلىك تۇرمۇشقا «ئويلاش مەشىقى»نى كىرگۈزۈش
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center text-4xl ml-3 mx-auto mb-4">
                      📈
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">ئاستا-ئاستا تەرەققىي قىلىش</h3>
                  </div>
                  <p className="text-gray-700 text-center">
                    بالىلار سوئال سوراش، ئويلىنىش، ئۆزلىرى قارار چىقىرىش ئىقتىدارىنى يېتىلدۈرىدۇ
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center text-4xl ml-3 mx-auto mb-4">
                      🎯
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">بۈگۈندىن باشلاش</h3>
                  </div>
                  <p className="text-gray-700 text-center">
                    كىچىك كۈندىلىك سوئاللار توغرىسىدا بىرلىكتە ئويلىنىشقا تىرىشىڭ
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-10 rounded-3xl">
                <div className="text-center">
                  <div className="inline-flex items-center bg-white/80 px-8 py-4 rounded-full shadow mb-6">
                    <span className="text-2xl text-purple-600 ml-2">💬</span>
                    <p className="text-xl font-bold text-purple-900 mr-3">
                      مال سېتىۋېلىش، تېلېۋىزوردىكى خەۋەر، مەكتەپ پائالىيىتى
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl">
                    <p className="text-3xl font-bold text-red-600">
                      ھەممىسى <span className="text-purple-700">«نىمىشقا؟»</span> دەپ باشلىنىدۇ
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-10 rounded-3xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-900 mb-8">
                    مۇھىم ئۆزگىرىش جەريانى
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl">
                      <p className="text-lg font-bold text-gray-800">
                        <span className="text-red-600">كىچىك سوئاللارنى قايتا-قايتا سوراش ئارقىلىق</span>
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl">
                      <p className="text-lg font-bold text-gray-800">
                        بالىلار <span className="text-green-600">تەبىئىي ھالدا ئۆزلىرىنىڭ ئويلاش قابىلىيىتىنى يېتىلدۈرىدۇ</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-10 rounded-3xl border-4 border-emerald-300">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-900 mb-6">
                    ئۇلار <span className="text-red-600">پەقەت بىلىم يادلىمايدۇ</span>، بەلكى —
                  </p>
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-8 rounded-2xl">
                    <p className="text-2xl font-bold">
                      ئۆزلىرى ئويلاش ئادىتىنى يېتىلدۈرۈش ئارقىلىق،  
                      كەلگۈسىدىكى جەمئىيەتتە گۈللىنىش ئۈچۈن زۆرۈر بولغان ماھارەتلەرگە ئېرىشىدۇ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hashtags & Footer */}
          <div className="mt-20 pt-12 border-t border-gray-300">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                تېمىلار بىلەن ئورتاقلىشىڭ
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  '#ئويلاش_ئىقتىدارى',
                  '#بالىلار_تەربىيىسى', 
                  '#ئاتا_ئانىلار_رولى',
                  '#ئۇيغۇر_تىلى',
                  '#مائارىپ_ئىسلاھاتى',
                  '#ئۆي_مائارىپى'
                ].map((tag, idx) => (
                  <span 
                    key={idx}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 px-6 py-3 rounded-full text-gray-700 font-bold text-lg hover:text-gray-900 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-3xl">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl ml-3">
                    📚
                  </div>
                  <h4 className="text-2xl font-bold text-indigo-900 mr-3">كەلگۈسى ماقالىلىرىمىزنى ساقلاشنى ئۇنۇتماڭ!</h4>
                </div>
                <p className="text-gray-700 text-lg">
                  ئۇيغۇر تىلىدا مائارىپ ھەققىدىكى ئىلمىي مەزمۇنلارنى داۋاملىق تەييارلايمىز
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10 pt-6 border-t border-gray-300">
              <p className="text-gray-600">
                © 2025 مائارىپنىڭ كەلگۈسىنى كۆزدە تۇتۇش | بارلىق ھوقۇقلار مۇھاپىزەتلىك
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog02_UY;