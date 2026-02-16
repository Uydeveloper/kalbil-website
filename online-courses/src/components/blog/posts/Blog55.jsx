// Blog55.jsx
import React, { useState, useEffect } from 'react';

const Blog55 = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [expandedLecture, setExpandedLecture] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const fadeInClass = `transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  const lectures = [
    {
      id: 1,
      title: 'كۋانت ھېسابلاش ۋە كۋانت ماشىنا ئۆگىنىشىگە كىرىش',
      icon: '⚛️',
      modules: [
        { type: 'چۈشەندۈرۈش', name: 'كۋانت ھېسابلاش دېگەن نېمە؟' },
        { type: 'چۈشەندۈرۈش', name: 'كۋانت ماشىنا ئۆگىنىش (QML) دېگەن نېمە؟' },
        { type: 'بىلوگ', name: 'QML دىكى كۋانت ئەۋزەللىكى', link: 'https://arxiv.org/abs/2108.01782' }
      ]
    },
    {
      id: 2,
      title: 'كۇبىت، كۋانت توك يولى ۋە كۋانت دەرۋازىسىغا كىرىش',
      icon: '🔌',
      modules: [
        { type: 'كود كىتابچىسى', name: 'كۇبىت، قاۋۇس بەلگىسى، ئۈستۈنكى ئورۇن، ئۆلچەش', mod: 'I.1' },
        { type: 'كود كىتابچىسى', name: 'كۋانت توك يولى', mod: 'I.2' },
        { type: 'كود كىتابچىسى', name: 'بىرلىك', mod: 'I.3' },
        { type: 'كود كىتابچىسى', name: 'كۋانت مەشغۇلاتى ۋە يەككە كۇبىت دەرۋازىسى', mod: 'I.4' }
      ]
    },
    {
      id: 3,
      title: 'بلوخ شارلىرى، كۋانت ھالىتىنى يارىتىش ۋە ئۆلچەش',
      icon: '🌍',
      modules: [
        { type: 'كود كىتابچىسى', name: 'ئابسولۇت ۋە نىسبىي باسقۇچ', mod: 'I.5' },
        { type: 'كود كىتابچىسى', name: 'ئايلىنىش دەرۋازىسى ۋە بلوخ شار', mod: 'I.6' },
        { type: 'كود كىتابچىسى', name: 'كۋانت ھالىتىنى يارىتىش', mod: 'I.8' },
        { type: 'كود كىتابچىسى', name: 'كۆزىتىلىدىغان نەرسىلەر ۋە كۈتۈش قىممەتلىرى', mod: 'I.10' }
      ]
    },
    {
      id: 4,
      title: 'كۆپ كۇبىت توك يولى، كونترول دەرۋازىسى ۋە كۋانت چىرمىشى',
      icon: '🔗',
      modules: [
        { type: 'كود كىتابچىسى', name: 'تېنزور مەھسۇلاتلىرى ۋە كۆپ كۇبىت سىستېمىسى', mod: 'I.11' },
        { type: 'كود كىتابچىسى', name: 'كۋانت چىرمىشى ۋە كونترول مەشغۇلاتى', mod: 'I.12' },
        { type: 'كود كىتابچىسى', name: 'CZ, SWAP، Toffoli', mod: 'I.13' },
        { type: 'كود كىتابچىسى', name: 'ئېكىسپونېنتسىيەلىك تېزلىك', mod: 'A.1' }
      ]
    },
    {
      id: 5,
      title: 'پەرقلەندۈرگىلى بولىدىغان پروگرامما تۈزۈش',
      icon: '📉',
      modules: [
        { type: 'چۈشەندۈرۈش', name: 'پەرقلەندۈرگىلى بولىدىغان پروگرامما تۈزۈش' },
        { type: 'چۈشەندۈرۈش', name: 'كۋانت گرادىيېنتى' },
        { type: 'چۈشەندۈرۈش', name: 'پارامېتىر ئۆزگەرتىش ئۇسۇلى' },
        { type: 'سىن', name: 'كۋانت ئۈسكۈنىلىرىنى پەرقلەندۈرۈش' },
        { type: 'سىن', name: 'پارامېتىر ئۆزگەرتىشنى چىقىرىش — 1-قىسىم' },
        { type: 'سىن', name: 'پارامېتىر ئۆزگەرتىشنى چىقىرىش — 2-قىسىم' }
      ]
    },
    {
      id: 6,
      title: 'كۋانت ماشىنا ئۆگىنىشىگە كىرىش: ۋارىئاتسىيونلۇق كۋانت توك يولى',
      icon: '🔄',
      modules: [
        { type: 'چۈشەندۈرۈش', name: 'گىبرىد كۋانت-كلاسسىك ھېسابلاش' },
        { type: 'چۈشەندۈرۈش', name: 'ۋارىئاتسىيونلۇق توك يولى' },
        { type: 'دېمو', name: 'كۋانت توك يولىنى ئەلالاشتۇرۇش' },
        { type: 'سىن', name: 'پارامېتىرلاشتۇرۇلغان كۋانت توك يولىنى ئەلالاشتۇرۇش' },
        { type: 'چۈشەندۈرۈش', name: 'سانلىق مەلۇمات كىرگۈزۈش (Embedding)' },
        { type: 'بىلوگ', name: 'كۋانت ماشىنا ئۆگىنىشنى قانداق ئۆگىتىش' },
        { type: 'چۈشەندۈرۈش', name: 'ئەلالاشتۇرۇش ئالگورىزىمىنى تاللاش' }
      ]
    },
    {
      id: 7,
      title: 'ۋارىئاتسىيونلۇق ئالگورىزىملار',
      icon: '🎯',
      modules: [
        { type: 'دېمو', name: 'QAOA غا كىرىش' },
        { type: 'سىن', name: 'QAOA غا باشقىچە قاراش' },
        { type: 'دېمو', name: 'ماكسىمال كېسىش مەسىلىسى ئۈچۈن QAOA' },
        { type: 'دېمو', name: 'ۋارىئاتسىيونلۇق تۈرگە ئايرىغۇچلار' }
      ]
    },
    {
      id: 8,
      title: 'كۋانت يادروسى ئۇسۇللىرى',
      icon: '🫘',
      modules: [
        { type: 'چۈشەندۈرۈش', name: 'كۋانت ئالاھىدىلىك خەرىتىسى' },
        { type: 'دېمو', name: 'scikit-learn ئارقىلىق كۋانت مودېللىرىنىڭ يادروغا ئاساسلىنىپ ئۆگىنىشى' },
        { type: 'دېمو', name: 'كۋانت يادروسىنى تەربىيەلەش ۋە باھالاش' },
        { type: 'دېمو', name: 'كلاسسىك ۋە كۋانت يادروسى' }
      ]
    },
    {
      id: 9,
      title: 'كۋانت نېرۋا تورى (QNNs) — 1-قىسىم',
      icon: '🧠',
      modules: [
        { type: 'چۈشەندۈرۈش', name: 'كۋانت نېرۋا تورى' },
        { type: 'چۈشەندۈرۈش', name: 'ئانساتز، چوڭقۇرلۇق ۋە قاتلاملار' },
        { type: 'دېمو', name: 'QNNs بىلەن ئۆگىنىش (QAOA بىلىم پەرەز)' },
        { type: 'دېمو', name: 'QNNs دىكى قۇرۇق تۈزلەڭلىكلەر (Barren Plateaus)' },
        { type: 'دېمو', name: 'يەرلىك چىقىم فۇنكسىيەسى ئارقىلىق قۇرۇقلۇقنى يېنىكلىتىش' },
        { type: 'دېمو', name: 'پارامېتىر يۆتكىلىشى ۋە ئارقا تارقىلىشىنى سېلىشتۇرۇش' },
        { type: 'دېمو', name: 'PyTorch بىلەن توك يولى ئۆگىنىش' }
      ]
    },
    {
      id: 10,
      title: 'كۋانت نېرۋا تورى (QNNs) — 2-قىسىم',
      icon: '🌀',
      modules: [
        { type: 'چۈشەندۈرۈش', name: 'كۋانت قېتىشما نېرۋا تورى (QCNN)' },
        { type: 'دېمو', name: 'كۋانت گرافىك تەكرارلىنىدىغان نېرۋا تورى' },
        { type: 'دېمو', name: 'كۋانت قېتىشما نېرۋا تورى' }
      ]
    },
    {
      id: 11,
      title: 'ئىلغار كۋانت ماشىنا ئۆگىنىشى',
      icon: '🚀',
      modules: [
        { type: 'دېمو', name: 'كۋانت ھاسىل قىلىش رەقىب تورى (QGANs)' },
        { type: 'دېمو', name: 'سانلىق مەلۇماتلارنى قايتا يۈكلەش تۈرگە ئايرىغۇچلىرى' },
        { type: 'دېمو', name: 'تەجرىبە ئارقىلىق كۋانت ئۈستۈنلۈكىنى ئۆگىنىش' }
      ]
    }
  ];

  const toggleLecture = (id) => {
    setExpandedLecture(expandedLecture === id ? null : id);
  };

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 md:py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-2xl font-uyghur">
      {/* Header */}
      <header className={`${fadeInClass} mb-10 text-center`}>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-200">#QuantumAI</span>
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900/30 dark:text-purple-200">#PennyLane</span>
          <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900/30 dark:text-amber-200">#Quanmatic</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          «كۋانت ماشىنا ئۆگىنىش» مائارىپ مەزمۇنى
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Quanmatic × Xanadu ھەمكارلىقى — ياپونىيەدە كۋانت مائارىپىغا تۆھپە قوشۇش مەقسىتىدە | 2026-يىلى 1-ئاينىڭ 5-كۈنى
        </p>

        {/* Partnership Banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-blue-200 dark:border-blue-800 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-center md:text-left">
              <div className="font-bold text-lg">Quanmatic × Xanadu</div>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                دۇنيادىكى ئالدىنقى قاتاردىكى <strong>كانادا ئوپتىكىلىق كۋانت ھېسابلاش شىركىتى Xanadu</strong> بىلەن ھەمكارلىق قىلغان ھالدا، <strong>ياپونىيەدە كۋانت مائارىپىغا تۆھپە قوشۇش</strong> نى مەقسەت قىلغان مائارىپ قۇرۇلمىسى.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">PennyLane</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">Xanadu</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">Quanmatic</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-4 z-10 mb-8 bg-white dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto py-2 space-x-3">
          {[
            { id: 'intro', label: 'كىرىش', icon: '🎯' },
            { id: 'pennylane', label: 'PennyLane', icon: '🐍' },
            { id: 'lectures', label: 'لېكسىيەلەر', icon: '📚' },
            { id: 'resources', label: 'قۇراللار', icon: '🛠️' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200 shadow-sm'
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
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🎯</span> كىرىش — كۋانت ماشىنا ئۆگىنىشى
            </h2>
            <p className="mb-4">
              بۇ مائارىپ مەزمۇنى — <strong>نەزەرىيە ۋە ئەمەلىيەتنى بىرلەشتۈرگەن</strong> تولۇق دەرىجىلىك قۇرۇلمىسى بولۇپ، كۋانت ھېسابلاش ساھەسىدە <em>كەسىپ قىلىش، تەتقىقات قىلىش، ياكى تېخنىكىلىق سۈپەت بىلەن تېخىمۇ چوڭ قىسمەتكە قاتنىشىش</em> مەقسىتىدە تەييارلانغان.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              سىز بۇ مەزمۇن ئارقىلىق قادىمكى كومپيۇتېرلىق مودېللاردىن جۇدا ئوخشىمايدىغان <strong>كۋانت مودېللىرى</strong> نى قانداق قۇرۇش، ئۆگىتىش ۋە تەربىيەلەش كېرەكلىكىنى چۈشىنىپ، رېئال دۇنيا مەسىلىلىرىنى ھەل قىلىش ئىقتىدارىغا ئىگە بولالايسىز.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-1">مەقسەت</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">كۋانت ئىقتىدارىنى ماشىنا ئۆگىنىشى بىلەن بىرلەشتۈرۈش</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-1">ئۇسۇل</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">PennyLane + Python + تېخىمۇ كۆپ سىمۇلاتورلار</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h3 className="font-bold text-cyan-800 dark:text-cyan-200 mb-1">نەتىجە</h3>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">QNN، QGAN، QAOA قاتارلىق مودېللارنى قۇرالايسىز</p>
              </div>
            </div>
          </div>
        )}

        {/* PennyLane */}
        {activeTab === 'pennylane' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🐍</span> PennyLane ھەققىدە
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center md:text-left flex-1">
                  <div className="font-bold text-lg">PennyLane — كۋانت ماشىنا ئۆگىنىشىنىڭ ئاساسى</div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Xanadu تەرىپىدىن قۇرۇلغان، <strong>ئوچۇق كودلۇق، كۆپ ئۈسكۈنىنى قوللايدىغان</strong> كۋانت پروگرامما تۈزۈش رامكىسى. قادىمكى CPU/GPU دىن تارتىپ، رېئال كۋانت ئۈسكۈنىلىرى (Strawberry Fields، IBM Q و.ب) غىچە، بارلىق مەلۇم پىلاتفورمىلاردا ئىشلەيدۇ.
                  </p>
                  <a
                    href="https://pennylane.ai/qml/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    🌐 PennyLane QML كۆزنىكىگە زىيارەت قىلىش
                  </a>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 w-48 h-48 flex items-center justify-center">
                  <div className="text-5xl">⚛️</div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-3">PennyLane نىڭ ئالاھىدىلىكلىرى:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    '✅ ئادەمچە تىل سىزىقى (intuitive syntax)',
                    '✅ PyTorch/TensorFlow/JAX بىلەن مۇكەممەل ماسلىشىش',
                    '✅ ئاپتوماتىك پەرقلەندۈرۈش (Autograd for quantum circuits)',
                    '✅ 100+ ھەقىقىي كۋانت ئۈسكۈنىلىرىنى قوللاش',
                    '✅ كود كىتابچىسى، دېمو، بىلوگ قاتارلىق رايونلۇق مەزمۇن',
                    '✅ خەلقئارالىق جەمئىيەت ۋە تېخنىكىلىق قوللاش'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Lectures */}
        {activeTab === 'lectures' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">📚</span> كۆپ قەدەملىك لېكسىيەلەر — 11 باب
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              ھەر باب قادىمكى بىلىم بىلەن يېڭى بىلىمنى بايانلىق ئۇلىنىشى بىلەن تەييارلانغان.
            </p>

            <div className="space-y-4">
              {lectures.map((lec) => (
                <div key={lec.id} className="border rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    onClick={() => toggleLecture(lec.id)}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{lec.icon}</span>
                      <div>
                        <h3 className="font-bold">{lec.id}-لېكسىيە: {lec.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {lec.modules.length} تۈرلۈك ماتېرىيال
                        </p>
                      </div>
                    </div>
                    <span className={`transform transition-transform ${expandedLecture === lec.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>

                  {expandedLecture === lec.id && (
                    <div className="bg-gray-50 dark:bg-gray-900/30 p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {lec.modules.map((mod, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-lg ${
                              mod.type === 'دېمو'
                                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                                : mod.type === 'سىن'
                                ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                                : mod.type === 'بىلوگ'
                                ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'
                                : 'bg-gray-100 dark:bg-gray-800/50'
                            }`}
                          >
                            <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              {mod.type}
                              {mod.mod && <span className="ml-1 text-gray-500">({mod.mod})</span>}
                            </div>
                            <div className="mt-1 text-sm font-medium">
                              {mod.name}
                            </div>
                            {mod.link && (
                              <a
                                href={mod.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-indigo-600 hover:underline dark:text-indigo-400 mt-1 inline-block"
                              >
                                📄 ماقالە
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">🎯 مۇھىم كۆرسەتمە</h3>
              <p className="text-emerald-700 dark:text-emerald-300">
                باب 5 (پارامېتىر يۆتكىلىش) ۋە باب 9 (Barren Plateaus) — بۇ يەرلەردە كۋانت مودېللىرىنى تەربىيەلەشنىڭ ئەڭ چوڭ قىيىنچىلىقلىرى چۈشەندۈرۈلىدۇ. تېخىمۇ تېخىمۇ يېتىلدۇرۇلغان مائارىپ مەزمۇنىغا <strong>ئورتاق قاتنىشىشنى</strong> تەۋسىيە قىلىمىز.
              </p>
            </div>
          </div>
        )}

        {/* Resources */}
        {activeTab === 'resources' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🛠️</span> قۇراللار ۋە قوشۇمچە ماتېرىياللار
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border">
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">🔗</span> رەسمىي ئەسۋابىلار
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://pennylane.ai/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-400">
                      ➤ PennyLane رەسمىي توربېكىتى
                    </a>
                  </li>
                  <li>
                    <a href="https://pennylane.ai/qml/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-400">
                      ➤ QML كۆزنىكى (دېمو + مائارىپ)
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/PennyLaneAI/pennylane" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline dark:text-indigo-400">
                      ➤ GitHub (ئوچۇق كودلۇق)
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-600 dark:text-gray-400">➤ PennyLane Demos Colab لىنكلار بىلەن</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border">
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">🎓</span> ئوقۇش زىيارەتچانلىقى
                </h3>
                <ul className="space-y-2">
                  <li>✅ Python ئاساسلىق بىلىم (NumPy, Matplotlib)</li>
                  <li>✅ خەتتىي جەبر (ماترىتسا، ئۆز قىممەت)</li>
                  <li>✅ ماشىنا ئۆگىنىشى (PyTorch/TensorFlow تەجرىبەسى بار بولسا ئىدىال)</li>
                  <li>❌ كۋانت مېخانىكىسى ئىلغار بىلىم شەرت ئەمەس — باب 1 دىن باشلاپ چۈشىنىدۇ</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <h3 className="font-bold mb-3">قوشۇمچە ماتېرىياللار</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: 'كۋانت قۇرۇلمىسىنى تەسۋىرلىش', desc: 'Qiskit + PennyLane سېلىشتۇرۇش' },
                  { title: 'كۋانت توك يولى سىمۇلاتورى', desc: 'Strawberry Fields ۋە Lightning' },
                  { title: 'ئىلغار تېما', desc: 'VQE، QAOA، QNNs تەرجىمىسى' },
                  { title: 'ئۇيغۇرچە كەسپىي تېرمىنلار', desc: 'كۇبىت، ئانساتز، بارىرېن پلاتو' },
                  { title: 'تەجرىبە پىلانى', desc: 'IBM Quantum Experience بىلەن باغلىنىش' },
                  { title: 'تۈرۈكلەشچان كود مىساللىرى', desc: 'ئالدىن تەربىيەلەنگەن مودېللار' }
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-gray-700 rounded border">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-2">كۋانت ماشىنا ئۆگىنىشى — زامانىۋى ئىلمىي ئىنقىلابنىڭ قاناتى.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Quanmatic × Xanadu</span>
          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">PennyLane</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">كۈچلۈك مائارىپ مەزمۇنى</span>
        </div>
        <p className="text-sm">
          🌐 KeLBiL ماشىنا ئۆگىنىش مەركىزى | 2026-يىلى 1-ئاينىڭ 5-كۈنى، دۈشەنبە
        </p>
      </footer>
    </article>
  );
};

export default Blog55;