// Blog52.jsx
import React, { useState, useEffect } from 'react';

const Blog52 = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const fadeInClass = `transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 md:py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-2xl font-uyghur">
      {/* Header */}
      <header className={`${fadeInClass} mb-10 text-center`}>
        <div className="inline-flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full dark:bg-indigo-900/30">#GeoAI</span>
          <span className="px-3 py-1 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full dark:bg-teal-900/30">#KeLBiL</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          GeoAI: بوشلۇق سانلىق مەلۇمات + سۈنئىي ئەقىل = جۇغراپىيىلىك زېرە
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          ArcGIS Pro بىلەن يېتىلدۇرۇلغان جۇغراپىيىلىك سۈنئىي ئەقىل تېخنىكىسى | 2026-يىلى 1-ئاينىڭ 5-كۈنى (دۈشەنبە)
        </p>

        {/* Hero Visual */}
        <div className="mt-8 relative">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="font-medium">بۇلۇت/لىدار</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="font-medium">AI/ML/DL</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">خەرىتە/مۆلچەر</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium">
                GeoAI = جۇغراپىيە + ماشىنا ئۆگىنىش + چوڭقۇر ئۆگىنىش + بوشلۇق تەھلىل
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="mb-8 sticky top-4 z-10 bg-white dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto py-2 space-x-4">
          {[
            { id: 'intro', label: 'كىرىش', icon: '🧭' },
            { id: 'concepts', label: 'ئۇقۇملار', icon: '🧠' },
            { id: 'tech', label: 'تېخنىكا', icon: '⚙️' },
            { id: 'workflow', label: 'ئىجرا جەريانى', icon: '📊' },
            { id: 'tools', label: 'قوراللار', icon: '🛠️' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <section className="space-y-10">
        {/* Intro */}
        {activeTab === 'intro' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🧭</span> كىرىش — جۇغراپىيىلىك زېرە
            </h2>
            <p className="mb-4">
              GeoAI — بۇ <strong>بوشلۇق سانلىق مەلۇماتلار</strong>، <strong>جۇغراپىيىلىك تېخنىكا</strong> ۋە <strong>سۈنئىي ئەقىل</strong> نىڭ يېتىلدۇرۇلغان بىرلەشتۈرۈلمىسى بولۇپ، دۇنياۋى بوشلۇق مەسىلىلىرىنى تېرەن چۈشىنىش، بايقاش ۋە مەۋھۇم دەرىجىدىن <em>ئىلغار</em> دەرىجىگە كۆتۈرۈش ئۈچۈن قوللىنىلىدۇ.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              بۇ تېخنىكا قۇرۇلمىلىق جەدۋەللەردىن تارتىپ، رەسىم، لىدار، تېكىست قاتارلىق <em>قۇرۇلمىسىز</em> سانلىق مەلۇماتلارنى بىرلەشتۈرۈپ، ئالاھىدىلىك چىقىرىش، خۇلاسە قىلىش، مۆلچەرلەش، ئۆزگىرىش بايقاش، ۋاقىت يۈرۈشلۈك تەھلىل قاتارلىق مۇرەككەپ ۋەزىپىلەرنى ئاپتوماتلاشتۇرىدۇ.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">GeoAI نىڭ ئىقتىدارلىرى</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>رەسىمدە ئوبيېكتلارنى ئاپتوماتىك تېپىش (ماشىنا، دارىخان، يۇلتۇزلۇق)</li>
                  <li>لىدار نۇقتىسىدىن 3D شەھەر مودېلى قۇرۇش</li>
                  <li>خەۋەر تېكىستىدىن جۇغراپىيىلىك ئورۇن ئۇچۇرىنى چىقىرىش</li>
                  <li>بىر يىللىق شەھەر يېزىقنىڭ ئۆزگىرىش تېندينى پەرەز قىلىش</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">ArcGIS Pro دىكى GeoAI نىڭ ئالاھىدىلىكى</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>ئالدىن تەربىيەلەنگەن چوڭقۇر ئۆگىنىش مودېللىرى (مەسىلەن: Land Cover Extractor)</li>
                  <li>ماكان مۇناسىۋىتىنى بىۋاستە مودېلغا قوشۇش</li>
                  <li>تېخىمۇ ئادەمچە تەھلىل (Explainable AI) ئىقتىدارى</li>
                  <li>يېتىلدۇرۇلغان GeoAI قورال ساندۇقى</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Concepts */}
        {activeTab === 'concepts' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🧠</span> ئاساسلىق ئۇقۇملار
            </h2>

            <div className="space-y-6">
              <ConceptCard
                title="سۈنئىي ئەقىل (AI)"
                icon="🤖"
                color="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200"
                content="ئىنسان ئەقىل-پاراسىتىنى تەقلىد قىلىدىغان ماشىنا ئىقتىدارى: چۈشىنىش، ئەقىل-پاراسەت، ئۆگىنىش. مەسىلەن: ئەقلىي ياردەمچى، ئۆزىنى ھەيدەيدىغان ماشىنا."
              />
              <ConceptCard
                title="ماشىنا ئۆگىنىش (ML)"
                icon="📈"
                color="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                content="سانلىق مەلۇماتتىن ئەندىزىلەرنى ئۆگىنىش ئارقىلىق، ئاماللارنى ئۆزى بىر تەرەپ قىلىش. تۈرگە ئايرىش، توپلاش، مۆلچەرلەشنى ئۆز ئىچىگە ئالىدۇ."
              />
              <ConceptCard
                title="چوڭقۇر ئۆگىنىش (DL)"
                icon="🧠"
                color="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200"
                content="ئىنسان مېڭىسىگە ئوخشاش كۆپ قاتلاملىق تور ئارقىلىق خام سانلىق مەلۇماتتىن مۇرەككەپ ئالاھىدىلىكلەرنى ئۆگىنىدۇ. رەسىم تانىش، تىل تەرجىمە قاتارلىقلاردا ئۈنۈملۈك."
              />
              <ConceptCard
                title="بوشلۇق ئانالىزى"
                icon="🗺️"
                color="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200"
                content="ئورۇن، شەكىل، يېقىنلىق، مۇناسىۋەت قاتارلىق جۇغراپىيىلىك ئالاھىدىلىكلەرنى تەھلىل قىلىش جەريانى — ساددىي خەرىتە قاپلاشتىن تارتىپ، ئىلغار ستاتىستىكىغىچە."
              />
            </div>

            {/* Venn Diagram */}
            <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-4 text-center">سۈنئىي ئەقىل ۋە بوشلۇق ئانالىزىنىڭ ئۆزئارا تەسىرى</h3>
              <div className="flex justify-center">
                <div className="relative w-64 h-48">
                  {/* Circle 1: AI */}
                  <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-purple-200 dark:bg-purple-800/40 flex items-center justify-center text-xs font-medium text-purple-800 dark:text-purple-200">
                    سۈنئىي ئەقىل (AI)
                  </div>
                  {/* Circle 2: Spatial Analysis */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-teal-200 dark:bg-teal-800/40 flex items-center justify-center text-xs font-medium text-teal-800 dark:text-teal-200">
                    بوشلۇق ئانالىزى
                  </div>
                  {/* Intersection: GeoAI */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    GeoAI
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                GeoAI — بۇ ئىككى دائىرىنىڭ قىزغۇچاق قىلغۇچى ياشىل رەڭلىك قىسمىتى: سۈنئىي ئەقىلنىڭ كۈچى + بوشلۇق ئانالىزىنىڭ دەللىكى
              </p>
            </div>
          </div>
        )}

        {/* Tech */}
        {activeTab === 'tech' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">⚙️</span> تېخنىكىلىك ئىقتىدارلار
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="bg-blue-600 px-4 py-2 text-white font-medium">ماشىنا ئۆگىنىش (ML)</div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>توپلاش (Clustering)</strong>: خەتەرلىك رايونلارنى ئاپتوماتىك تاپشۇرۇش</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>مۆلچەرلەش (Regression)</strong>: ئاھالە زىچلىقىنى پەرەز قىلىش</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>ماكان مۇناسىۋىتى</strong>: يېقىنلىق، شەكىل، ئورۇن بىلەن مودېلنى كۈچەيتىش</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="bg-indigo-600 px-4 py-2 text-white font-medium">چوڭقۇر ئۆگىنىش (DL)</div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>رەسىم تۈرگە ئايرىش</strong>: ماشىنا، بىنا، دارىخاننى ئاپتوماتىك ئايرىش</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>ئوبيېكت بايقاش</strong>: دوكلات، يېغىن، كەنت ئورنىنى تېپىش</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span><strong>NLP + جۇغراپىيە</strong>: «كەنتىم يېشىل باغچىلىق» دېگەن جۈملىدىن جۇغراپىيىلىك مەزمۇن چىقىرىش</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Example */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-dashed border-gray-300 dark:border-gray-700">
              <h3 className="font-bold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                رەسىملەردىن ئالاھىدىلىكلەرنى چىقىرىش — DL مىسالى
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center text-gray-500">
                    رەسىم (خام سانلىق مەلۇمات)
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">ساتېللىت رەسىمى — خورازم</p>
                </div>
                <div>
                  <div className="bg-gray-800 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
                    <div className="text-green-400 text-xs">
                      {`[{"type":"olygon","class":"سۇ","coords":[...]},`}<br />
                      {` {"type":"olygon","class":"مايدان","coords":[...]},`}<br />
                      {` {"type":"olygon","class":"بىنا","coords":[...]}]`}
                    </div>
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">چىقىرىلغان ئالاھىدىلىكلەر (GeoJSON)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workflow */}
        {activeTab === 'workflow' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">📊</span> GeoAI ئىجرا جەريانى
            </h2>

            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800/50 z-0"></div>
              {[
                { step: 1, title: 'سانلىق مەلۇمات يىغىش', desc: 'رەسىم، لىدار، جەدۋەل، تېكىست' },
                { step: 2, title: 'سانلىق مەلۇمات پارچىلاش', desc: 'بۆلەك بۆلۈش، تازىلاش، چۈشۈرۈش' },
                { step: 3, title: 'كىرگۈزۈش ۋە تەربىيەلەش', desc: 'ئالدىن مودېل ياكى كاستوم مودېل' },
                { step: 4, title: 'ئىز قوغلاش/بايقاش', desc: 'ئالاھىدىلىك چىقىرىش، تۈرگە ئايرىش' },
                { step: 5, title: 'تەھلىل ۋە مۆلچەر', desc: 'ماكان مۇناسىۋىتى، ۋاقىت يۈرۈشلۈك تەھلىل' },
                { step: 6, title: 'چىقىرىش', desc: 'خەرىتە، تەبلىغات، دېسسىزىيە قىلىش' }
              ].map((item, i) => (
                <div key={i} className="relative pl-12 mb-8 z-10">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800">
              <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 ئەمەلىيەتچىلەرگە تەۋسىيە</h3>
              <p className="text-amber-700 dark:text-amber-300">
                GeoAI — بۇ «سىحرلىق تۈر» ئەمەس. تەھلىلچىلار مەسىلىنى تереڭ چۈشىنىش، نەتىجىلەرنى تەكشۈرۈش، قارار قىلغۇچىلارغا ئاشكارىلىق بىلەن يەتكۈزۈش كېرەك. ArcGIS Pro بۇ جەرياننى قوللايدىغان، بىراق ئادەم ئەقىل-پاراسىتى كەلگۈسىدەمۇ كۈچلۈك رول ئوينايدۇ.
              </p>
            </div>
          </div>
        )}

        {/* Tools */}
        {activeTab === 'tools' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🛠️</span> ArcGIS Pro دىكى GeoAI قوراللار
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { group: 'رەسىم ئانالىز', tools: ['تۈرگە ئايرىش', 'چوڭقۇر ئۆگىنىش', 'كۆپ ئۆلچەملىك ئانالىز'] },
                { group: 'مەكان ستاتىستىكا', tools: ['توپلاش', 'ماكان مۇناسىۋىتى مودېللاشتۇرۇش', 'ئالاھىدىلىك ئانالىز'] },
                { group: 'ماكان-ۋاقىت', tools: ['ۋاقىت يۈرۈشلۈك مۆلچەر', 'ئۆزگىرىش بايقاش', 'تىن تەھلىل'] },
                { group: 'GeoAI قورال ساندۇقى', tools: ['تېكىست ئانالىز', 'نۇقتا بۇلۇت قۇراللىرى', 'ۋاقىت يۈرۈشلۈك AI'] },
                { group: 'ئالدىن تەربىيەلەنگەن مودېللار', tools: ['Land Cover Extractor', 'Building Detector', 'Change Detection Model'] },
                { group: 'ئۆزئارا تەسىرلىك قوراللار', tools: ['Interactive Object Detection', 'Model Explainability', 'Uncertainty Mapping'] }
              ].map((group, idx) => (
                <div key={idx} className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{group.group}</h3>
                  <ul className="text-sm space-y-1">
                    {group.tools.map((tool, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-blue-500 mr-1">•</span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📚 تېخىمۇ كۆپ ئۆگىنىش</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {[
                  'مەكان سانلىق مەلۇماتلىرىنى ھاسىل قىلىش',
                  'چوڭقۇر ئۆگىنىش ئومۇمىي ئەھۋالى',
                  'ArcGIS Pro دىكى چوڭقۇر ئۆگىنىش',
                  'ArcGIS ئالدىن تەربىيەلەنگەن مودېللار',
                  'تۈرگە ئايرىش قوراللىرى',
                  'نۇقتا بۇلۇت قوراللىرى',
                  'تېكىست ئانالىز قوراللىرى',
                  'ماكان-ۋاقىت ئەندىزىسى قوراللىرى'
                ].map((item, i) => (
                  <span key={i} className="inline-block px-2 py-1 bg-white dark:bg-gray-700 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-2">GeoAI — بۇ زامانىۋى جۇغراپىيىلىكنىڭ كېلەچەك قاناتى.</p>
        <p className="text-sm">
          🌍 KeLBiL تەتقىقات مەركىزى | 2026-يىلى 1-ئاينىڭ 5-كۈنى، دۈشەنبە
        </p>
      </footer>
    </article>
  );
};

// Reusable Concept Card
const ConceptCard = ({ title, icon, color, content }) => (
  <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
      <span className="text-lg">{icon}</span>
    </div>
    <div className="ml-4">
      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </div>
);

export default Blog52;