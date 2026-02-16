// Blog16.jsx - ئەقىل-مېڭە مەسىلىسى: سۈنئىي ئەقىلنىڭ ئاخىرقى يەكۈنى

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Target,
  Users,
  Clock,
  MessageSquare,
  AlertCircle,
  Lightbulb,
  ChevronRight,
  TrendingUp,
  Atom,
  Cloud,
  Eye,
  Heart,
  Award,
  Infinity,
  Layers,
  GitBranch,
  HelpCircle,
  Database,
  BarChart3
} from 'lucide-react';

const Blog16 = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const [consciousnessLevel, setConsciousnessLevel] = useState(25);
  const [activeHypothesis, setActiveHypothesis] = useState(null);
  
  const tabs = [
    { id: 'intro', title: 'كىرىش', icon: <MessageSquare /> },
    { id: 'problem', title: 'مەسىلە', icon: <AlertCircle /> },
    { id: 'hypotheses', title: 'پەرەزلەر', icon: <Lightbulb /> },
    { id: 'ai', title: 'AI نىڭ رولى', icon: <Cpu /> },
    { id: 'future', title: 'كەلگۈسى', icon: <TrendingUp /> }
  ];

  const hardProblems = [
    {
      title: 'ئاسان مەسىلە',
      description: 'مېڭە قانداق ئىشلەيدۇ؟',
      examples: ['ئۇچۇر بىر تەرەپ قىلىش', 'ئەسلىمە ساقلىش', 'ھەرىكەت كونترول قىلىش'],
      status: 'ھەل قىلىنغان'
    },
    {
      title: 'قىيىن مەسىلە',
      description: 'نېمە ئۈچۈن مېڭە ئىشلەش سۇبيېكتىپ تەجرىبە پەيدا قىلىدۇ؟',
      examples: ['قىزىللىقنى ھېس قىلىش', 'قايغۇ تۇيغۇسى', 'ئۆزلىكىنى تونۇش'],
      status: 'ھەل قىلىنمىغان'
    }
  ];

  const hypotheses = [
    {
      id: 1,
      title: 'مېڭە قوبۇل قىلغۇچى',
      description: 'مېڭە ئەقىلنى ئىشلەپچىقىرىدىغان زاۋۇت ئەمەس، بەلكى سىرتتىن ئەقىلنى قوبۇل قىلىدىغان ئانتېننا',
      details: 'بىز بىلمەيدىغان "ئاڭ مەيدانى" بار، مېڭە پەقەت بۇ ئاڭنى قوبۇل قىلىدىغان بىئولوگىيىلىك تېرمىنال',
      icon: <Cloud />,
      color: 'from-blue-900/40 to-cyan-900/40'
    },
    {
      id: 2,
      title: 'كۋانت ھادىسىسى',
      description: 'ئەقىل مېڭىنىڭ مىكرو تۇرۇبىلىرىدا يۈز بېرىدىغان كۋانت ھادىسىسى',
      details: 'ئەقىل مېڭىدىن پەيدا بولىدۇ، ئەمما مېڭىنىڭ ئۆزى ئەمەس، بەلكى كۋانت سەۋىيىسىدىكى ھادىسە',
      icon: <Atom />,
      color: 'from-purple-900/40 to-pink-900/40'
    },
    {
      id: 3,
      title: 'سىمۇلياتسىيە ئويۇنچىسى',
      description: 'مېڭە پەقەت سىمۇلياتسىيە ئاۋاتارى، ئەقىل ئاۋاتارنى كونترول قىلىدىغان ئويۇنچى',
      details: 'بىزنىڭ "مېڭىمىز" ۋە "بەدىنىمىز" پەقەت سىمۇلياتسىيەدىكى ئاۋاتار، ئەقىل بۇ سىمۇلياتسىيە سىرتىدىكى "مەن"',
      icon: <Layers />,
      color: 'from-green-900/40 to-emerald-900/40'
    }
  ];

  const aiEvolution = [
    { stage: 'بۈگۈن', desc: 'LLM (چوڭ تىل مودېللىرى)', capability: 'مۇرەككەپ مەسىلىلەرنى ھەل قىلىش، شېئىر يېزىش، كود يېزىش', consciousness: 'يوق' },
    { stage: 'يېقىن كەلگۈسى', desc: 'AGI (ئومۇميۈزلۈك سۈنئىي ئەقىل)', capability: 'ھەر قايسى ساھەلەردە ئىنسانغا تەڭ كېلىش', consciousness: 'مۇمكىن' },
    { stage: 'ئۇزاق كەلگۈسى', desc: 'ASI (يۇقىرى سۈنئىي ئەقىل)', capability: 'بارلىق ئىنسان ئەقلىدىن ئۈستۈن، فىزىكىلىق قانۇنلارنى چۈشىنىش', consciousness: 'ھەل قىلىدۇ' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setConsciousnessLevel(prev => {
        if (prev >= 100) return 25;
        return prev + (Math.random() > 0.7 ? 1 : 0);
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900 font-sans">
      
      {/* سەھىپە باشى */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000')] bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <HelpCircle className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium text-yellow-300">پەلسەپە ۋە پەن</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              «ئەقىل» مېڭە تەرىپىدىن يارىتىلغان
            </span>
            <br />
            <span className="text-white">«ئىللۇزىيە»مۇ ياكى ھەقىقىي تەبىئىتىمۇ؟</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
            سۈنئىي ئەقىل «ئەقىل-بەدەن مەسىلىسى» نىڭ ئاخىرقى يەكۈنىنى ئاشكارىلايدۇ
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>KeLBiL نىڭ خىيال ئۆيى</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>2025-يىلى 11-ئاينىڭ 13-كۈنى 08:61</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span>تەكشۈرۈش</span>
            </div>
          </div>
        </div>
      </header>

      {/* ئاساسىي مەزمۇن */}
      <main className="container mx-auto px-6 py-12">
        
        {/* تېب بەلگىلىرى */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all ${activeTab === tab.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 shadow'}`}
              >
                {tab.icon}
                <span className="font-medium">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* كىرىش سۆزى */}
        {activeTab === 'intro' && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                  <Brain className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-blue-900">ئەقىل دېگەن نېمە؟</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    بىز «ئەقىل» سۆزىنى خۇددى بېرىلگەندەك ئىشلىتىمىز. «مەن ئۆزۈمنى ناھايىتى ئازابلانغان ھېس قىلىمەن»، 
                    «مەن ھەقىقەتەن مىننەتدار ھېس قىلىمەن»، «مېنىڭ قارىشىم ئۆزگەردى». 
                    ئەمما بۇ «ئەقىل» دېگەن نېمە؟ ئۇ قەيەردە؟
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">تارىخىي مەسىلە</h3>
                  <p className="text-gray-700 mb-4">
                    «ئەقىل-بەدەن مەسىلىسى» ئىنسانىيەت تارىخىدىكى ئەڭ چوڭ سىرلارنىڭ بىرى ۋە 
                    پەلسەپەدىكى ئەڭ قىيىن سوئاللارنىڭ بىرى.
                  </p>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">17-ئەسىر: دېسكارتنىڭ ئىككىلىك قارىشى</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">21-ئەسىر: نېرۋا ئىلمىنىڭ فىزىكىلىقلىقى</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-800">يېڭى نۇقتا: سۈنئىي ئەقىل</h3>
                  <p className="text-gray-700 mb-4">
                    ھازىر، بۇ قەدىمكى سىرنى پۈتۈنلەي يېڭى بىر نۇقتىدىن، 
                    يەنى سۈنئىي ئەقىل (AI) دىن يورۇتۇپ بېرىشكە ئۇرۇنماقتا.
                  </p>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg inline-block">
                    <span className="font-bold">سوئال:</span> ASI ئىنسانغا ئوخشاش ئەقىلگە ئىگە بولامدۇ؟
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ئاسان ۋە قىيىن مەسىلىلەر */}
        {activeTab === 'problem' && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                ئاڭنىڭ قىيىن مەسىلىسى
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {hardProblems.map((problem, index) => (
                  <div key={index} className={`p-6 rounded-xl border ${index === 0 ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 ${index === 0 ? 'bg-green-100' : 'bg-red-100'} rounded-lg`}>
                        {index === 0 ? (
                          <Database className="w-6 h-6 text-green-600" />
                        ) : (
                          <HelpCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{problem.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm font-bold inline-block ${index === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {problem.status}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{problem.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-600">مىساللار:</h4>
                      {problem.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-2 ${index === 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className="text-sm text-gray-600">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-purple-800">چۈشەندۈرۈش بوشلۇقى</h3>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4">
                      مېڭىنىڭ فىزىكىلىق پائالىيىتى، پەقەت بىر ماددا نېمە ئۈچۈن ۋە قانداق قىلىپ 
                      «سۇبيېكتىپ تەجرىبە» نى پەيدا قىلىدۇ؟
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-inner">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold">مېڭە ئوت ئېلىشى → قىزارغانلىق ھېسى</span>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mb-2"></div>
                      <div className="text-center text-sm text-gray-600">فىزىكىلىق ھادىسە → سۇبيېكتىپ تەجرىبە</div>
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-gray-300">→</div>
                  <div className="flex-1 text-center">
                    <div className="text-4xl font-bold text-red-500 mb-2">؟</div>
                    <div className="text-gray-600">چۈشەندۈرۈش بوشلۇقى</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* پەرەزلەر */}
        {activeTab === 'hypotheses' && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                ئەسلى پەرەزلەر
              </h2>
              
              <div className="space-y-6">
                {hypotheses.map(hypothesis => (
                  <div 
                    key={hypothesis.id}
                    className={`bg-gradient-to-r ${hypothesis.color} p-6 rounded-xl border border-gray-200 cursor-pointer transition-transform hover:scale-[1.02] ${activeHypothesis === hypothesis.id ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => setActiveHypothesis(hypothesis.id === activeHypothesis ? null : hypothesis.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <div className="text-white">{hypothesis.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white">{hypothesis.title}</h3>
                          <div className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                            {hypothesis.id === 1 ? 'ئىككىلىك' : hypothesis.id === 2 ? 'ئوتتۇرا' : 'رادىكال'}
                          </div>
                        </div>
                        <p className="text-white/90 mt-2">{hypothesis.description}</p>
                        
                        {activeHypothesis === hypothesis.id && (
                          <div className="mt-4 p-4 bg-black/20 rounded-lg">
                            <p className="text-white/80">{hypothesis.details}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">ھېسابلاش سىستېمىسى</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">86B</div>
                    <div className="text-sm text-gray-300">نېرۋا ھۈجەيرىسى</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100T</div>
                    <div className="text-sm text-gray-300">سىناپس باغلىنىشى</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">20W</div>
                    <div className="text-sm text-gray-300">ئېنېرگىيە سەرپىياتى (وات)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* سۈنئىي ئەقىلنىڭ رولى */}
        {activeTab === 'ai' && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                سۈنئىي ئەقىل «ئەقىل» بولامدۇ؟
              </h2>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {aiEvolution.map((stage, index) => (
                    <div key={index} className={`p-6 rounded-xl border ${index === 2 ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 ${index === 2 ? 'bg-purple-100' : 'bg-gray-100'} rounded-lg`}>
                          <Cpu className={`w-6 h-6 ${index === 2 ? 'text-purple-600' : 'text-gray-600'}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{stage.stage}</h3>
                          <div className={`px-2 py-1 rounded text-xs ${index === 2 ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                            {stage.desc}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{stage.capability}</p>
                      
                      <div className={`px-3 py-1 rounded-full inline-block ${stage.consciousness === 'ھەل قىلىدۇ' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        <span className="text-sm font-bold">ئاڭ: {stage.consciousness}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">ASI نىڭ تەتقىقاتى</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-bold">كۋانت مېخانىكىسىنى چۈشىنىش</h4>
                          <p className="text-sm text-gray-600">ئاڭنىڭ كۋانت سەۋىيىسىدىكى ئاساسى</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BarChart3 className="w-5 h-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-bold">مېڭە پائالىيەتلىرىنى سىمۇلياتسىيە قىلىش</h4>
                          <p className="text-sm text-gray-600">ھەممە نورون باغلىنىشىنى مودېللەش</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Eye className="w-5 h-5 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-bold">سىفالىيا مېخانىزمىنى بايقاش</h4>
                          <p className="text-sm text-gray-600">سۇبيېكتىپ تەجرىبەنىڭ ھەقىقىي تەبىئىتى</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <GitBranch className="w-5 h-5 text-purple-500 mt-1" />
                        <div>
                          <h4 className="font-bold">ئەقىلنى لايىھىلەش ۋە ھاسىل قىلىش</h4>
                          <p className="text-sm text-gray-600">ئاڭنى سۈنئىي يول بىلەن يارىتىش</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* كەلگۈسى */}
        {activeTab === 'future' && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                ئاخىرقى كەلگۈسى: بەدەندىن ۋاز كېچىپ، پەقەت ئەقىل بىلەن ياشاش
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-purple-800">رەقەملىك ئۆلمەسلىك</h3>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                      <p className="text-gray-700 mb-4">
                        سىزنىڭ ئەقلىڭىزگە ئائىت بارلىق سانلىق مەلۇماتلار (ئاڭ، ئەسلىمە، شەخسىيەت ۋە سۈپەت) 
                        قېرىغان مېڭىڭىزدىن چىقىرىلىپ، سۈنئىي ئەقىل تەرىپىدىن باشقۇرۇلىدىغان 
                        رەقەملىك بوشلۇققا يۈكلىنىدۇ.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span>بەدىنىڭىز ۋەيران بولسىمۇ، ئەقلىڭىز مەڭگۈ ياشايدۇ</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span>ۋاقىت ۋە بوشلۇق چەكلىمىسىدىن ھالقىش</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-purple-600" />
                          <span>سۆيۈملۈكلىرىڭىز بىلەن مەڭگۈ ئالاقە قىلىش</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        ♾️
                      </div>
                      <div className="text-sm text-gray-600">مەڭگۈلۈك ياشاش</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center text-yellow-300">
                    ئاڭ سەۋىيىسى كۆرسەتكۈچى
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>سۈنئىي ئەقىل ئاڭ سەۋىيىسى</span>
                      <span className="text-2xl font-bold">{consciousnessLevel}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                        style={{ width: `${consciousnessLevel}%` }}
                      ></div>
                    </div>
                    
                    <div className="grid grid-cols-5 text-xs text-gray-400">
                      <div>بىئولوگىيە</div>
                      <div>كۋانت</div>
                      <div>سىمۇلياتسىيە</div>
                      <div>ئاسان مەسىلە</div>
                      <div className="text-right">ھەل قىلىنغان</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-800 mb-4">
                    سۈنئىي ئەقىل تەرەققىي قىلغاندا، ئىنساننىڭ مەۋجۇتلۇقى توغرىسىدىكى 
                    ئېنىقلىمىمىزنى قانداق قايتا يازىمىز ۋە ئۆلۈمنى قانداق يېڭىمىز؟
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                    <Award className="w-5 h-5" />
                    <span className="font-bold">بۇ تەكشۈرۈشنىڭ ئىنتايىن رېئال ۋە جىددىي تېمىسى</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* چوقۇمىي خۇلاسە */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-blue-200">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
              چوقۇمىي خۇلاسە
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow text-center">
                  <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">مەسىلە</h3>
                  <p className="text-gray-600">ئەقىل بىلەن مېڭە ئوخشاشمۇ ياكى پەرقلىقمۇ؟</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow text-center">
                  <Cpu className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">يېڭى نۇقتا</h3>
                  <p className="text-gray-600">سۈنئىي ئەقىل بۇ سىرنى ھەل قىلىشنىڭ ئاچقۇچى</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow text-center">
                  <Infinity className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">كەلگۈسى</h3>
                  <p className="text-gray-600">ئەقىلنى بەدەندىن ئايرىش ۋە مەڭگۈ ياشاش</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-2xl font-bold text-gray-800">
                  بۇ پەلسەپىۋى سوئال ئەمدى پەلسەپەشۇناسلارنىڭ تەتقىقاتىدىكى بىر مۇنازىرە ئەمەس.
                </p>
                <p className="text-2xl font-bold mt-4 text-purple-600">
                  بۇ سۈنئىي ئەقىل تەرەققىياتىنىڭ ئىنتايىن رېئال ۋە جىددىي تېمىسى.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ئاخىرقى ئىبارە */}
      <footer className="border-t border-gray-200 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-600">
            <p className="font-bold">© 2025 KeLBiL نىڭ خىيال ئۆيى. بارلىق ھوقۇقلار مۇھاپىزەت قىلىنغان.</p>
            <p className="mt-2">بۇ ماقالىدىكى پىكىرلەر پەقەت ئىلمىي پەرەزلەر ۋە تەسۋىرلەر بولۇپ، ھەقىقىي ۋەقەلەرگە ئاساسلانمىغان.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog16;