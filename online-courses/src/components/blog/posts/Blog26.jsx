// Blog05_UY.jsx
import React from 'react';

const Blog26 = () => {
  return (
    <article className="max-w-5xl mx-auto bg-gradient-to-br from-white to-indigo-50 rounded-3xl shadow-2xl overflow-hidden my-12 transition-all duration-300 hover:shadow-3xl">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-purple-900/30 z-10"></div>
        <img 
          src="https://learningmole.com/wp-content/uploads/2024/09/image-244.jpeg" 
          alt="كۆپ خىل باھالاش — بالىلارنىڭ ھەر خىل ئىقتىدارىنى كۆرسىتىش" 
          className="w-full h-72 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <div className="bg-gradient-to-r from-indigo-800/90 to-purple-800/90 text-white px-5 py-3 rounded-xl shadow-lg max-w-md">
            <div className="flex items-center mb-1">
              <svg className="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-yellow-300">ئۇيغۇر ھېكمىتى</span>
            </div>
            <p className="text-lg font-bold leading-relaxed rtl">
              «بالىنىڭ قابىلىيىتى — بىر چۆچۈككە سىغمايدۇ»
            </p>
            <p className="text-sm opacity-90 mt-1">- ئەنئەنىۋى ھېكمەت</p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-8 md:p-12 bg-white/95 backdrop-blur-sm">
        
        {/* Title Section */}
        <header className="mb-10 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-4">
            <span className="w-3 h-3 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-indigo-700">مائارىپنىڭ كەلگۈسىنى كۆزدە تۇتۇش </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent">
            «باھالاشنىڭ كۆپ خىللىشىشى» دېگەن نېمە؟
          </h1>
          
          <div className="relative inline-block">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
              پەقەت نومۇر بىلەنلا ئۆلچەنمەيدىغان «ئۆسۈش» نى قانداق ئۆلچەش كېرەك؟
            </h2>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </header>

        {/* Metadata Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">مۇئەللىپ</p>
              <p className="font-semibold text-gray-800"> كەلبىل مائارىپى</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">چېسلا</p>
              <p className="font-semibold text-gray-800">2025-يىلى 12-ئاينىڭ 6-كۈنى</p>
              <p className="text-sm text-indigo-600">كەچ سائەت 7:10</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">ئوقۇش ۋاقتى</p>
              <p className="font-semibold text-gray-800">5-7 مىنۇت</p>
              <p className="text-sm text-green-600">ئاسان چۈشىنىش</p>
            </div>
          </div>
        </div>

        {/* Interactive Table of Contents */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-2xl mb-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900">مۇندەرىجە</h3>
          </div>
          <ul className="space-y-3">
            {[
              {num: "01", text: "نېمە ئۈچۈن «باھالاشنىڭ كۆپ خىللىشىشى» ھازىر دىققەتنى تارتىۋاتىدۇ؟"},
              {num: "02", text: "كۆپ خىل باھالاش ئۇسۇللىرىنىڭ مىساللىرى"},
              {num: "03", text: "ئۆسۈشنىڭ نومۇرلاردىن ھالقىپ ئۆلچەنىدىغان دەۋر"},
              {num: "04", text: "ئۆيدە نېمە قىلالايسىز؟"},
              {num: "05", text: "خۇلاسە"}
            ].map((item, index) => (
              <li key={index} className="flex items-center group cursor-pointer hover:translate-x-2 transition-transform duration-200">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 group-hover:scale-110 transition-transform">
                  {item.num}
                </span>
                <span className="text-blue-800 font-medium group-hover:text-blue-900 group-hover:font-semibold transition-all">
                  {item.text}
                </span>
                <svg className="w-5 h-5 text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="scroll-mt-24" id="section1">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  نېمە ئۈچۈن «باھالاشنىڭ كۆپ خىللىشىشى» ھازىر دىققەتنى تارتىۋاتىدۇ؟
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      ئەنئەنىۋى مەكتەپ مائارىپىدا، باھالار ئاساسلىقى <strong className="text-red-600 font-semibold">سىناق نەتىجىلىرى</strong>، 
                      <strong className="text-red-600 font-semibold"> دوكلات جەدۋىلى</strong> ۋە <strong className="text-red-600 font-semibold">مەكتەپ دوكلاتلىرى</strong> بىلەن بەلگىلىنەتتى.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-100 mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                      <strong className="text-red-800">دىققەت «ئۆگىنىش ئىقتىدارى» غا مەركەزلەشكەن:</strong>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white p-3 rounded-lg border border-green-200">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="font-semibold text-green-800">يۇقىرى نومۇرلار</span>
                        </div>
                        <p className="text-green-700 text-sm mt-1">مۇنەۋۋەرلىكنى كۆرسىتىدۇ</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-red-200">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="font-semibold text-red-800">تۆۋەن نومۇرلار</span>
                        </div>
                        <p className="text-red-700 text-sm mt-1">مەسىلىلەرنى كۆرسىتىدۇ</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-100">
                    <h3 className="font-bold text-indigo-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      ئەمما ھازىر ئۆزگەردى...
                    </h3>
                    <p className="text-gray-700 mb-3">
                      قانداقلا بولمىسۇن، <strong className="text-indigo-700">بۈگۈنكى جەمئىيەت ۋە ئۆگىنىش مۇھىتى</strong> زور دەرىجىدە ئۆزگەردى.
                    </p>
                    <p className="text-gray-700">
                      بۇ دەۋردە، <strong className="text-purple-700 font-semibold">پەقەت نومۇر بىلەنلا ئۆلچەنمەيدىغان ماھارەتلەر</strong> تەلەپ قىلىنىدۇ.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  زۆرۈر ماھارەتلەر
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {skill: "مۇستەقىل ئويلىنىش", color: "from-blue-500 to-cyan-500"},
                    {skill: "ھۆكۈم چىقىرىش", color: "from-purple-500 to-pink-500"},
                    {skill: "ئۆزىنى ئىپادىلەش", color: "from-green-500 to-emerald-500"},
                    {skill: "ھەمكارلىشىش", color: "from-orange-500 to-red-500"}
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-semibold text-gray-800">{item.skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700">
                      بۇ ماھارەتلەرنى <strong className="text-yellow-700">ئەنئەنىۋى سىناقلار ياكى چەتنىش نومۇرلىرى بىلەنلا ئۆلچەشكە بولمايدۇ</strong>.
                      شۇڭا مەكتەپلەر <strong className="text-yellow-700">«كۆپ خىل باھالاش ئۇسۇللىرى»</strong> نى كۆپ قوللىنىۋاتىدۇ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="scroll-mt-24" id="section2">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  كۆپ خىل باھالاش ئۇسۇللىرىنىڭ مىساللىرى
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "دوكلات كارتىلىرى ۋە مەكتەپ دوكلاتلىرى",
                  desc: "ئىلگىرى ئاددىي نومۇر بولغان، ھازىر دەرىجىلىك دەرس قاتنىشىش، تاپشۇرۇق مۇئامىلىسى، ھەمكارلىقنى ئۆز ئىچىگە ئالىدۇ.",
                  icon: "📊",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
                },
                {
                  title: "ئۆلچەملەر (Rubrics)",
                  desc: "ئوقۇغۇچىلارنىڭ نېمىلەرگە ئېرىشكەنلىكى، نېمىلەرنى ياخشىلىيالايدىغانلىقىنى كۆرسىتىدىغان تەدرىجىي باھالاش ئۇسۇلى.",
                  icon: "📈",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
                },
                {
                  title: "پورتفوللار (Portfolios)",
                  desc: "ئۆگىنىش نەتىجىلىرى، سەنئەت ئەسەرلىرى، تەقدىماتلار، قىيىنچىلىق تەجرىبىلىرىنى يىغىش — بالىنىڭ ئۆسۈشىنى كۆرۈنەرلىك قىلىدۇ.",
                  icon: "📁",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
                }
              ].map((item, idx) => (
                <div key={idx} className={`${item.bgColor} p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>ھازىرقى زامان ئۇسۇلى</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="scroll-mt-24" id="section3">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  ئۆسۈشنىڭ نومۇرلاردىن ھالقىپ ئۆلچەنىدىغان دەۋر
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">بۈگۈنكى مەكتەپلەرنىڭ يېڭى باھالاش ئۆلچىمى</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  بۈگۈنكى مەكتەپلەر <strong className="text-purple-700 font-semibold">پەقەت ئوقۇش نەتىجىلىرىنىلا ئەمەس</strong>، بەلكى 
                  <strong className="text-purple-700 font-semibold"> ئۆگىنىش ئۇسلۇبى ۋە ئۆزىگە جەڭ ئېلان قىلىش جەريانىنىمۇ باھالايدۇ</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { 
                    label: "ئويلاش ۋە ھۆكۈم قىلىش", 
                    desc: "قىيىن مەسىلىنى مۇستەقىل ھەل قىلىش، چەكلىمىگە قارشى قارار چىقىرىش",
                    icon: "💭"
                  },
                  { 
                    label: "ئىپادە ۋە ئالاقە", 
                    desc: "ئويىنى تەرتىپلەپ، رەسمىي ياكى جېستىكە ئارقىلىق يەتكۈزۈش",
                    icon: "🗣️"
                  },
                  { 
                    label: "ھەمكارلىق ۋە ئالاقە", 
                    desc: "گۇرۇپپىدا رول ئادا قىلىش، ئورتاق نەتىجىگە ئېرىشىش",
                    icon: "👥"
                  },
                  { 
                    label: "يېڭى قىيىنچىلىقلارغا دۇچ كېلىش", 
                    desc: "مەغلۇبىيەتنى قوبۇللاش، قىيىنلىقلارغا تاقابىل تۇرۇش",
                    icon: "🛡️"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <h4 className="font-bold text-gray-800 text-lg">{item.label}</h4>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                        ئاساسىي ماھارەت
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-800 mb-2">ئەمەلىي مىسال:</h4>
                    <p className="text-gray-700">
                      مەسىلەن، بالىنىڭ ماتېماتىكا سىنىقىدىكى نەتىجىسى ياخشىلانمىسىمۇ،  
                      ئۇنىڭ <strong className="text-indigo-700">قىيىن مەسىلىنى ھەل قىلىش پوزىتسىيىسى</strong>، 
                      <strong className="text-indigo-700"> دوستلار بىلەن مۇزاكىرە قىلىش جەريانى</strong> — 
                      بۇلار «ئۆسۈش» دەپ باھالىنىدۇ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="scroll-mt-24" id="section4">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  ئۆيدە نېمە قىلالايسىز؟
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-semibold text-gray-800">
                    ئۆيدە باھالاش ئۇسۇللىرىنىڭ كۆپ خىللىقىغا دىققەت قىلىش ئارقىلىق،  
                    بالىڭىزنىڭ <span className="text-orange-600">ئۆسۈشىنى تولۇق قوللىيالايسىز</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'تىرىشچانلىق ۋە ئىجادچانلىقنى ئېتىراپ قىلىڭ',
                  desc: '«سىز قىيىن مەسىلىنى سىناپ باقتىڭىز»، «ئاخىرىغىچە ئويلىنىپ باقتىڭىز» دەپ ئىلھاملاندۇرۇڭ.',
                  icon: '🌟',
                  color: 'from-yellow-100 to-orange-100',
                  borderColor: 'border-yellow-300'
                },
                {
                  title: 'خىزمىت ۋە ئۇسۇلدىكى ئۆزگىرىشلەرنى ماختاڭ',
                  desc: 'مەسىلەن، ماقالىدىكى سۆز تۈزۈلۈشى، قول ھۈنەردىكى رەڭ تاللاش — بۇلارنى چۈشەندۈرۈپ باھالاڭ.',
                  icon: '🎨',
                  color: 'from-pink-100 to-rose-100',
                  borderColor: 'border-pink-300'
                },
                {
                  title: 'جەريان ئۈستىدە ئويلىنىڭ',
                  desc: '«سىز قانداق ياخشىلاندىڭىز؟»، «نېمە قىيىن بولدى؟» دەپ سوئال بېرىپ، قايتا كۆزدىن كېچۈرۈشنى ئىلھاملايدۇ.',
                  icon: '🔄',
                  color: 'from-blue-100 to-cyan-100',
                  borderColor: 'border-blue-300'
                },
                {
                  title: 'قىيىنچىلىقلارغا تاقابىل تۇرۇشنى ماختاڭ',
                  desc: '«مەغلۇبىيەت — ئۆگىنىشنىڭ بىر قىسمى» دەپ ئېتىراپ قىلىڭ. نومۇر ئەمەس، رۇھىيەت مۇھىم.',
                  icon: '🛡️',
                  color: 'from-green-100 to-emerald-100',
                  borderColor: 'border-green-300'
                }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl border ${item.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex items-start mb-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>ئائىلە مەسلىھىتى</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-800">ئىجابىي تەسىرلەر</h4>
                  <p className="text-emerald-700">بۇ خىل ئىلھاملاندۇرۇش ۋە ئۆز-ئارا تەسىر كۆرسىتىش، بالىڭىزنىڭ ئۆزىنىڭ تىرىشچانلىقى ۋە ئۆسۈشىنى تونۇشىغا ياردەم بېرىدۇ.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 - Conclusion */}
          <section className="scroll-mt-24" id="section5">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  خۇلاسە
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl border border-red-100 shadow-sm">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  مائارىپ باھالاش — <span className="text-red-600">پەقەت نەتىجىلەرنىلا ئەمەس، بەلكى جەرياننى تەكىتلەيدىغان دەۋرگە قاراپ ئىلگىرىلەۋاتىدۇ</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ئىمكانىيەت
                  </h4>
                  <p className="text-gray-700">
                    <strong className="text-green-700">پەقەت نومۇرلار ئارقىلىقلا كۆرگىلى بولمايدىغان</strong> كۈچلۈك تەرەپلىرى ۋە قىيىنچىلىقلارنى كۆز ئالدىمىزغا كەلتۈرۈش ئارقىلىق،  
                    <strong className="text-green-700"> ھەر بىر بالىنىڭ ئۆسۈشىنى كۆپ قىرلىق چۈشىنىۋالالايمىز</strong>.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    ئائىلە رولى
                  </h4>
                  <p className="text-gray-700">
                    ئۆيدە — <strong className="text-blue-700">تىرىشچانلىق ۋە قىيىنچىلىق جەريانىنى تونۇش</strong>،  
                    <strong className="text-blue-700"> سىنىپتىن كېيىنكى ئۆسۈشكە دىققەت قىلىش</strong> مۇھىم.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-red-800 text-xl font-bold italic mb-3">
                  مەكتەپلەر ۋە ئائىلىلەر بىرلىكتە ئىشلىسە،  
                  بالىلار <span className="text-orange-700">خاتىرجەم ئۆگىنىپ، ئۆزلىرىگە داۋاملىق رىقابەت كۆرسىتەلەيدۇ</span>.
                </p>
                <p className="text-red-700 text-lg">
                  ئەگەر بىرەر نەرسىنى ياخشى دەپ ئويلىسىڭىز، <strong className="text-red-800">ئۇنى قوللاڭ</strong>!
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Hashtags Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">بۇ ماقالىنى تارقىتىڭ</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "#ئاتا_ئانا_بولۇش",
                "#مائارىپ",
                "#مەكتەپ",
                "#ئوقۇتقۇچى",
                "#باھالاش",
                "#ئائىلە",
                "#سىناق",
                "#ئۆيدە_ئوقۇتۇش",
                "#باھالار",
                "#خىلما_خىللىق"
              ].map((tag, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium hover:from-gray-200 hover:to-gray-100 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              تەھرىرلەش
            </button>
            <button className="flex items-center px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              ساقلاش
            </button>
            <button className="flex items-center px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              ئورتاقلىشىش
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog26;