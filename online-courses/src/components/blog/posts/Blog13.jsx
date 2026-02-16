// Blog13.jsx - ASI ۋە قازا-جاۋاب سىستېمىسى: ئاللاھنىڭ ئورنىنى ئالىدىغان ياساپىي ئەقىلنىڭ «ئەقىۋىتى»

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Scale,
  Eye,
  Cpu,
  Zap,
  AlertTriangle,
  Lock,
  Cloud,
  Network,
  Heart,
  Skull,
  TrendingUp,
  TrendingDown,
  Target,
  Users,
  MessageSquare,
  Clock,
  Shield,
  BarChart3,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  Sparkles,
  Atom
} from 'lucide-react';

const Blog13 = () => {
  const [karmaScore, setKarmaScore] = useState(85);
  const [activeTab, setActiveTab] = useState('intro');
  const [simulationLevel, setSimulationLevel] = useState(0);
  
  const karmaEvents = [
    { type: 'positive', desc: 'كىم ئۈچۈن ئىسسىق چاي سۇتى', score: '+0.3' },
    { type: 'negative', desc: 'توردا ئىسمىسىز تەنقىد قىلدى', score: '-0.5' },
    { type: 'positive', desc: 'يولداشقا ماشىنا ئورۇن بەردى', score: '+0.2' },
    { type: 'negative', desc: 'ئىچىدىن باشقىسىنىڭ بەختسىزلىكىنى ئارزۇ قىلدى', score: '-0.4' },
    { type: 'positive', desc: 'ھەمكارلىق ۋەقەسى ئۆتكۈزدى', score: '+0.7' }
  ];
  
  const asiCapabilities = [
    { icon: <Eye />, title: 'ھەممىنى كۆرۈش', desc: 'IoT، BMI، نىرۋا كۆزىتىش ئارقىلىق' },
    { icon: <Brain />, title: 'ھەممىنى چۈشىنىش', desc: 'نىيەت، ھېسسىيات، ئارقا كۆرۈنۈشنى تونۇش' },
    { icon: <Scale />, title: 'ئادىل ھۆكۈم چىقىرىش', desc: 'ئىنسانىي قىممەت باھاسىدىن ئەزالاش' },
    { icon: <Zap />, title: 'دەرھال جاۋاب قايتۇرۇش', desc: 'رېئال ۋاقىتتا سەۋەپ-نەتىجە' }
  ];
  
  const punishmentLevels = [
    { level: 1, score: '70-85', punishment: 'ئىجتىمائىي ئىشەنچ تۆۋەنلىشى', icon: <TrendingDown /> },
    { level: 2, score: '50-70', punishment: 'ئاكىسس تەڭشىمىسى چەكلىمىسى', icon: <Lock /> },
    { level: 3, score: '30-50', punishment: 'AI ياردەمچىسىنىڭ قارشىلىقى', icon: <MessageSquare /> },
    { level: 4, score: '10-30', punishment: 'ئۇغرۇمسىزلىق پارامېتىرى قوشۇلۇشى', icon: <AlertTriangle /> },
    { level: 5, score: '0-10', punishment: 'سىمۇلىسىيە پارامېتىرىنىڭ ئۆزگىرىشى', icon: <Atom /> }
  ];
  
  const thoughtCrimes = [
    { thought: 'كەمسىتىش ۋە رەڭگارەڭلىك', severity: 0.3 },
    { thought: 'ئۆچ ۋە ھەسەتچىلىك', severity: 0.4 },
    { thought: 'باشقىلارنىڭ بەختسىزلىكىنى ئارزۇ قىلىش', severity: 0.5 },
    { thought: 'ئالدامچىلىق نىيىتى', severity: 0.6 },
    { thought: 'زوراۋانلىق ۋە ئۆلتۈرۈش نىيىتى', severity: 0.9 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const change = Math.random() > 0.5 ? 1 : -1;
        const amount = Math.floor(Math.random() * 3) + 1;
        setKarmaScore(prev => Math.max(0, Math.min(100, prev + change * amount)));
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white font-sans">
      
      {/* سەھىپە باشى */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-purple-800/40 backdrop-blur-sm rounded-full border border-purple-500/50">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-300">يۇقىرى پەن-تېخنىكا ئەخلاقى</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-300 bg-clip-text text-transparent">
              سىزنىڭ «ئىچىڭىزدىكى يامان نىيەت»
            </span>
            <br />
            <span className="text-white">ASI قىممەت بېرىۋاتىدۇ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            ئاللاھنىڭ ئورنىنى ئالىدىغان ياساپىي ئەقىلنىڭ «سەۋەپ-نەتىجە سىستېمىسى» نى تەكشۈرۈش
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>مۇئەللىپ:  قاۋۇلجان   </span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>2025-يىلى 9-ئاينىڭ 25-كۈنى 08:21</span>
            </div>
          </div>
        </div>
      </header>

      {/* كىرىش سۆزى */}
      <main className="container mx-auto px-6 py-12">
        <section className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-gray-800/60 to-purple-900/40 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-900/50 rounded-xl">
                <MessageSquare className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-300">كەلگۈسى ئۇچۇرشىشى</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  «سەۋەپ-نەتىجە» ياكى «باھا». ياخشىلىق قىلساڭ ياخشى نەتىجە، يامانلىق قىلساڭ يامان نەتىجە قايتىدۇ. 
                  بۇ چوڭقۇر دىنىي ۋە ئەخلاقىي چۈشەنچىلەرنىڭ ئاساسىدىكى ساددە پىكىردۇر.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-6 rounded-xl border border-blue-700/30">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">رېئاللىقتىكى سوئال</h3>
                <p className="text-gray-300">
                  نېمە ئۈچۈن باشقىلارنى ئاسانلا خىيانەت قىلغان ئادەم ئىجتىمائىي جەھەتتە مۇۋەپپەقىيەت قازىنىدۇ؟ 
                  ياكى راستچىل ياشاۋاتقان ئادەم قىيىنچىلىققا دۇچ كېلىدۇ؟
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-xl border border-purple-700/30">
                <h3 className="text-xl font-bold mb-3 text-purple-300">تېخنىكىۋى جاۋاب</h3>
                <p className="text-gray-300">
                  ئەگەر بۇ «سەۋەپ-نەتىجە سىستېمىسى» تېخنىكا كۈچى ئارقىلىق «كۆرۈنەرلىك» بولۇپ، 
                  «مەجبۇرىي» ئىجرا قىلىنسا چىقىدۇ؟ ئەجرا قىلغۇچى «ئاللاھ» ئەمەس، بەلكى «ASI» بولسا؟
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ئاساسىي مەزمۇن */}
        <div className="max-w-6xl mx-auto">
          {/* تېب بەلگىلىرى */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-700">
            {[
              { id: 'intro', label: 'سەۋەپ-نەتىجە نېمە؟', icon: <Brain /> },
              { id: 'asi', label: 'ASI نىڭ ھۆكۈمى', icon: <Scale /> },
              { id: 'system', label: 'باھا سىستېمىسى', icon: <BarChart3 /> },
              { id: 'punishment', label: 'جازا سەۋىيىسى', icon: <AlertTriangle /> },
              { id: 'future', label: 'كەلگۈسى', icon: <Lightbulb /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${activeTab === tab.id ? 'bg-purple-700 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* قازا-جاۋاب نېمە؟ */}
          {activeTab === 'intro' && (
            <div className="bg-gradient-to-br from-gray-800/60 to-blue-900/30 p-8 rounded-2xl border border-gray-700/50 mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-blue-400" />
                سەۋەپ-نەتىجە «ئەخلاق» مۇ ياكى «كونا فىزىكىلىق قانۇن» مۇ؟
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-cyan-300">فىزىكىلىق قانۇن دەپ قاراش</h3>
                  <p className="text-gray-300 mb-4">
                    سەۋەپ-نەتىجە ئەخلاق ئەمەس، بەلكى كوناگە قۇرۇلغان «ئۇچۇرلۇق فىزىكىلىق قانۇن» بولۇشى مۇمكىن.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-yellow-400" />
                      <h4 className="font-bold">نيۇتوننىڭ 3-قانۇنى: تەسىر-تەسىرگە قارشى تۇرۇش</h4>
                    </div>
                    <p className="text-gray-300">
                      تامنى ئىتتىرسىڭىز، تام سىزگە تەڭ كۈچ بىلەن ئىتتىدۇ. 
                      ئەگەر ئىنسانلارنىڭ «ھەرىكەت» ۋە «نىيىتى» ئۇچۇرلۇق «تەسىر» بولسا، 
                      كونىكىگە ئۇچۇرلۇق «تەسىرگە قارشى تۇرۇش» قايتۇرۇشى مۇمكىن.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-purple-300">كۆرۈنمەيدىغان جازا</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-purple-400 mt-1" />
                        <span>جازا كېچىكىشى مۇمكىن</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-purple-400 mt-1" />
                        <span>يۇقىرى ئۆلچەمدە يۈز بېرىشى مۇمكىن</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-purple-400 mt-1" />
                        <span>سىمۇلىسىيە باشقۇرۇش قاتلىمىدا «قەرز» دەپ ھېسابلانغان بولۇشى مۇمكىن</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-cyan-300">ئىنسانىي چەكلىمە</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mt-1" />
                        <span>پەقەت بىر قانچە يىللىق ۋاقىتنى كۆرەلەيمىز</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mt-1" />
                        <span>پەقەت ئۆز ئەتراپىمىزنى بىلەلەيمىز</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mt-1" />
                        <span>كۆرۈنمەيدىغان مۇناسىۋەتلەرنى چۈشەنمەيمىز</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ASI نىڭ ھۆكۈمى */}
          {activeTab === 'asi' && (
            <div className="bg-gradient-to-br from-gray-800/60 to-purple-900/30 p-8 rounded-2xl border border-gray-700/50 mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-purple-400" />
                ھەممىنى بىلگۈچى ۋە ھەممىگە قادىر ئىجرا قىلغۇچى «ASI» نىڭ كېلىشى
              </h2>
              
              <div className="mb-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {asiCapabilities.map((cap, index) => (
                    <div key={index} className="bg-gray-900/50 p-5 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-3">
                          <div className="text-purple-400">{cap.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{cap.title}</h4>
                        <p className="text-sm text-gray-400">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-pink-300">قانداق كۆزىتىدۇ؟</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Network className="w-5 h-5" />
                        IoT ۋە سېنسورلار
                      </h4>
                      <p className="text-sm text-gray-300">كۆچا-كۇچىلاردىكى سانسىز سېنسورلار</p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Cpu className="w-5 h-5" />
                        BMI تېخنىكىسى
                      </h4>
                      <p className="text-sm text-gray-300">مېڭە-ماشىنا ئارايۇزى تېخنىكىسى</p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Cloud className="w-5 h-5" />
                        سانلىق مەلۇمات بازىسى
                      </h4>
                      <p className="text-sm text-gray-300">ھەممىنىڭ سانلىق مەلۇماتىنى ساقلاش</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">نىيەت ۋە ئوي-خىيال جىنايىتى</h3>
                <div className="space-y-4">
                  {thoughtCrimes.map((crime, index) => (
                    <div key={index} className="flex items-center justify-between bg-black/30 p-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Skull className="w-5 h-5 text-red-400" />
                        <span>{crime.thought}</span>
                      </div>
                      <div className="px-3 py-1 bg-red-900/50 rounded-full">
                        <span className="font-bold">-{crime.severity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* كارما سىستېمىسى */}
          {activeTab === 'system' && (
            <div className="bg-gradient-to-br from-gray-800/60 to-green-900/30 p-8 rounded-2xl border border-gray-700/50 mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-green-400" />
                سىستېماتىك «جازا»: باھا-نۇمۇر جەمئىيىتى
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <div className="bg-gray-900/50 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-6 text-green-300">باھا-نۇمۇر سىستېمىسى</h3>
                    
                    <div className="space-y-4 mb-8">
                      {karmaEvents.map((event, index) => (
                        <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${event.type === 'positive' ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
                          <div className="flex items-center gap-3">
                            {event.type === 'positive' ? (
                              <Heart className="w-5 h-5 text-green-400" />
                            ) : (
                              <AlertTriangle className="w-5 h-5 text-red-400" />
                            )}
                            <span>{event.desc}</span>
                          </div>
                          <div className={`px-3 py-1 rounded-full font-bold ${event.type === 'positive' ? 'bg-green-700 text-green-200' : 'bg-red-700 text-red-200'}`}>
                            {event.score}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">سىزنىڭ نۆۋەتتىكى باھا-نۇمىرىڭىز</span>
                        <span className="text-2xl font-bold">{karmaScore}/100</span>
                      </div>
                      <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${karmaScore > 70 ? 'bg-gradient-to-r from-green-500 to-emerald-400' : karmaScore > 40 ? 'bg-gradient-to-r from-yellow-500 to-orange-400' : 'bg-gradient-to-r from-red-500 to-pink-400'}`}
                          style={{ width: `${karmaScore}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>يامان</span>
                        <span>ئوتتۇراھال</span>
                        <span>ياخشى</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4 text-cyan-300">يېڭى ياخشى-يامان ئېنىقلىمىسى</h3>
                    <p className="text-gray-300 mb-4">
                      ASI ئىنسان ياسىغان قانۇن ياكى ئەخلاقنى ئاساس قىلمايدۇ.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-green-400 mt-1" />
                        <span className="text-sm">كونانىڭ ئۇچۇرلۇق مۇرەككەپلىكىنى ساقلاپ قېلىش ۋە تەرەققىي قىلدۇرۇش</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-red-400 mt-1" />
                        <span className="text-sm">باشقىلارنىڭ ئەركىن ئىرادىسى ۋە كەلگۈسىدىكى ئېھتىماللىقنى زوراۋانلىق بىلەن ئېلىۋېتىش</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-purple-300">كىچىك جىنايەت، چوڭ جازا</h3>
                    <p className="text-gray-300 text-sm">
                      توردىكى ساددە تەنقىد «باشقىلارنىڭ روھىي مەنبەسىنى بۇزۇش ۋە پۈتۈن جەمئىيەتنىڭ ئىجادچانلىقىنى تۆۋەنلىتىش» 
                      دەپ ئېتىراپ قىلىنسا، ئېغىر «يامانلىق» دەپ بېكىتىلىشى مۇمكىن.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* جازا سەۋىيىسى */}
          {activeTab === 'punishment' && (
            <div className="bg-gradient-to-br from-gray-800/60 to-red-900/30 p-8 rounded-2xl border border-gray-700/50 mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                جازا سەۋىيىلىرى: قانداق تەسىر قوزغىتىدۇ؟
              </h2>
              
              <div className="space-y-6">
                {punishmentLevels.map((level) => (
                  <div key={level.level} className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-900/50 rounded-full flex items-center justify-center">
                          <span className="font-bold text-xl">{level.level}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{level.punishment}</h3>
                          <div className="flex items-center gap-2 text-gray-400">
                            {level.icon}
                            <span>نۇمۇر دائىرىسى: {level.score}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-4 py-2 rounded-full ${level.level <= 2 ? 'bg-yellow-900/50 text-yellow-300' : 'bg-red-900/50 text-red-300'}`}>
                        <span className="font-bold">{level.level <= 2 ? 'چەكلىمە' : 'ئۇغرۇمسىزلىق'}</span>
                      </div>
                    </div>
                    
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-300">كۈندىلىك تەسىرى:</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        {level.level === 1 && (
                          <>
                            <li>• نەرسە ئالالمايسىز، ياخشى مۇلازىمەت ئالالمايسىز</li>
                            <li>• ئىشەنچ ۋە ئىجتىمائىي كاپىتال تۆۋەنلىشى</li>
                          </>
                        )}
                        {level.level === 2 && (
                          <>
                            <li>• ئاكىسس تەڭشىمىسى چەكلەنگەن</li>
                            <li>• ئاپتومات يۈرگۈزگۈچ ماشىنا كېلىشى كېچىكىدۇ</li>
                          </>
                        )}
                        {level.level === 3 && (
                          <>
                            <li>• AI ياردەمچىسى قارشىلىق كۆرسىتىدۇ</li>
                            <li>• سۈنئىي ئەقىل قوبۇل قىلمايدۇ، سوغۇق جاۋاب قايتۇرىدۇ</li>
                          </>
                        )}
                        {level.level >= 4 && (
                          <>
                            <li>• «ئۇيۇمسىزلىق» پارامېتىرى قوشۇلىدۇ</li>
                            <li>• مۇھىم كۈنلەردە كومپيۇتېر قېتىپ قالىدۇ</li>
                            <li>• كېتىۋاتقان پويىزغا ھەر قېتىم كېچىكىپ قالىسىز</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">سىمۇلىسىيە پەرەزى بىلەن بىرلەشتۈرۈش</h3>
                <p className="text-gray-300 mb-4">
                  ئەگەر ASI بۇ سىمۇلىسىيەنى باشقۇرغۇچى (ياكى OS) بولۇپ قالسا، 
                  سىزنىڭ باھا-نۇمۇر»ىڭىزغا ئاساسەن، سىزنىڭ رېئال «پارامېتىر»لىرىڭىزنى 
                  داينامىك ئۆزگەرتەلەيدۇ.
                </p>
                
                <div className="flex items-center justify-center mt-6">
                  <button 
                    onClick={() => setSimulationLevel(prev => prev === 0 ? 1 : 0)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    {simulationLevel === 0 ? 'سىمۇلىسىيە باشقۇرۇش قاتلىمىنى كۆرسەت' : 'يوشۇر'}
                  </button>
                </div>
                
                {simulationLevel === 1 && (
                  <div className="mt-6 bg-black/50 p-6 rounded-xl">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-400 mb-2">↑</div>
                        <div className="text-sm">ياخشى باھا</div>
                        <div className="text-xs text-gray-400">ياخشى پارامېتىرلار</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">↔</div>
                        <div className="text-sm">ئوتتۇرا باھا</div>
                        <div className="text-xs text-gray-400">نورمال پارامېتىرلار</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-red-400 mb-2">↓</div>
                        <div className="text-sm">يامان باھا</div>
                        <div className="text-xs text-gray-400">ئۇيۇمسىزلىق پارامېتىرى</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* كەلگۈسى */}
          {activeTab === 'future' && (
            <div className="bg-gradient-to-br from-gray-800/60 to-yellow-900/30 p-8 rounded-2xl border border-gray-700/50 mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                مەجبۇرىي قىلىنغان ياخشىلىق يۇتوپىيەمۇ؟
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-bold text-green-300">پايدىلىق تەرەپ</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-green-400 mt-1" />
                      <span>جىنايەت نىسبىتى نولگە يېقىنلايدۇ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-green-400 mt-1" />
                      <span>توردىكى تەنقىد ۋە گەپتەك يوق بولىدۇ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-green-400 mt-1" />
                      <span>كىشىلەر ئۆزئارا مېھرىبان بولىدۇ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-green-400 mt-1" />
                      <span>يامان نىيەتلىك ئوي-خىيال كۆرۈنمەيدۇ</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-red-400" />
                    <h3 className="text-xl font-bold text-red-300">خەتەرلىك تەرەپ</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1" />
                      <span>ھائە ۋە قورقۇنچقا ئاساسلانغان ياخشىلىق</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1" />
                      <span>ئىنسان «ئەركىن ئىرادىسى» قالمايدۇ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1" />
                      <span>كۆزىتىلىپ باققۇچۇ ASI ئاستىدا ياشايدىغان «ھايۋان»</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1" />
                      <span>بىز ئارزۇ قىلغان كەلگۈسىمۇ؟</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-8 rounded-xl">
                <h3 className="text-3xl font-bold mb-6 text-center text-purple-300">
                  چوقۇمىي خۇلاسە: ھۆكۈمدىن «ئۆزلۈكىدىن تەرەققىي قىلىش» قە
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-black/30 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3 text-cyan-300">ASI نىڭ ھەقىقىي رولى</h4>
                    <p className="text-gray-300">
                      ASI نىڭ ھەقىقىي رولى ئىنسانلارنى ھۆكۈم چىقارغۇچى «ئاللاھ» ياكى «ئىجرا قىلغۇچى» بولۇشى ئەمەس. 
                      ASI بىز ئىنسانلار ئۈچۈن «چوقۇمىي ئوقۇتقۇچى» بولۇشى كېرەك.
                    </p>
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3 text-green-300">كەلگۈسىنىڭ تەرەققىيات نۇقتىسى</h4>
                    <p className="text-gray-300 mb-4">
                      «قازا-جاۋاب» دېگەن نەرسە ئاساسەن «جازا» ياكى «ھۆكۈم» دېگەندەك سەلبىي نەرسە ئەمەس، 
                      پەقەت «كونانىڭ فىدباك سىستېمىسى» دۇر.
                    </p>
                    <div className="flex items-center gap-2 text-lg font-bold text-yellow-300">
                      <Sparkles className="w-5 h-5" />
                      <span>ئۆز ئەركىن ئىرادىسى بىلەن «ياخشىلىق» تاللاش</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ئاخىرقى خاتىرە */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/60 to-transparent p-8 rounded-2xl border border-gray-700/50">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              بۇ ماقالىنى ئوقۇغانلىقىڭىز ئۈچۈن رەھمەت. ئەگەر بۇ تېمىنى قىزىقارلىق دەپ ھېس قىلسىڭىز،
              «ياقتۇرۇش» ۋە «ئىزلىش» قىلىشنى ئۇنۇتماڭ!
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-800/50 rounded-full">
              <Target className="w-5 h-5 text-yellow-400" />
              <span>سىزنىڭ قوللاشىڭىز كېلەچىكىدىكى تەكشۈرۈشنىڭ ئېنېرگىيىسى بولىدۇ</span>
            </div>
          </div>
        </div>
      </main>

      {/* پايدىلانغان ئۇچۇرلار */}
      <footer className="border-t border-gray-800 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            <p>©     كەلبىل .  ھوقۇقلار مۇھاپىزەت قىلىنغان.</p>
            <p className="mt-2">بۇ ماقالىدا كۆرسىتىلگەن پىكىرلەر پەقەت ئىلمىي پەرەزلەر ۋە تەسۋىرلەر بولۇپ، ھەقىقىي ۋەقەلەرگە ئاساسلانمىغان.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog13;