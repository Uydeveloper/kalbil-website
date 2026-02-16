// Blog12.jsx - 2025 يىللىق «يۇقىرى پەن-تېخنىكا ۋە ئۇيغۇرلار» خۇلاسە لىكسىيەسى

import React, { useState, useEffect } from 'react';
import {
  Target,
  Brain,
  Database,
  Cpu,
  Globe,
  Zap,
  AlertCircle,
  Star,
  Rocket,
  Map,
  Award,
  Users,
  Code,
  Shield,
  Cloud,
  BarChart3,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Lightbulb,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const Blog12 = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [techHovered, setTechHovered] = useState(null);
  
  const technologies = [
    { id: 1, name: 'كىۋانىت ئىلمى', icon: <Brain />, color: 'bg-blue-500', desc: 'Quantum Science' },
    { id: 2, name: 'سۇنئىي ئەقىل', icon: <Cpu />, color: 'bg-green-500', desc: 'Artificial Intelligence – AI' },
    { id: 3, name: 'چوڭ سانلىق مەلۇمات', icon: <Database />, color: 'bg-orange-500', desc: 'Big Data' },
    { id: 4, name: 'IT ۋە تور ئامانلىقى', icon: <Shield />, color: 'bg-purple-500', desc: 'Information Technology' },
    { id: 5, name: 'ئەقىللىق سانائەت', icon: <Globe />, color: 'bg-red-500', desc: 'Intelligent Industry' }
  ];
  
  const roadmapPhases = [
    { year: '2025–2027', title: 'باشلانغۇچ باسقۇچ', items: ['AI + IT + Big Data 1-دەسلەككى باسقۇچ', '1,000 ئادەمگە سۈرئەتلىك دەرس', 'ئۆز AI تىلىنى قۇرۇش'] },
    { year: '2027–2028', title: 'تەرەققىيات باسقۇچى', items: ['GIS، Drone، Point Cloud + ML', 'AI Start-up لىرىنى قۇرۇش', 'ئۇيغۇرچە AI سۆزلەشكۈچ مۇكەممەل بولۇش'] },
    { year: '2029–2030', title: 'ئۆلچەملىك باسقۇچ', items: ['كىۋانىت سەھنىسىگە كىرىش', 'ئۇيغۇر AI Cloud', 'دۇنيا مىقياسىدا 1,000 ئۇيغۇر ئىقتساسلىق'] }
  ];
  
  const masterPlanLevels = [
    { level: 1, title: '50,000 IT + AI + Big Data + Quantum ئادەم', items: ['5 يىلدا 10,000 ھەرقايسى ساھە', 'تور دەرس، تور كۇرۇلمىسى', 'ئۇيغۇر تىلىدىكى تولۇق STEM سىستېمىسى'] },
    { level: 2, title: 'ئۇيغۇرچە AI سەھنىسى', items: ['ئۇيغۇر AI Model (LLM)', 'ئاۋاز تونۇش', 'Face / Object detection'] },
    { level: 3, title: 'سانلىق مەلۇمات ئىقتىسادى', items: ['GIS', 'Point Cloud', 'شەھەر قۇرۇلۇشى', '3D Mapping / Drone Mapping'] },
    { level: 4, title: 'Start-up Incubator', items: ['100 AI Start-up', '20 مەدەنىيەت-تەرجىمە-ئۆگىنىش تور بېتى', '10 يۇقىرى تىجارەت لايىھىسى'] },
    { level: 5, title: 'كىۋانىت پىلانى', items: ['Quantum Basic Course', '500 Quantum Programmer', 'IBM Q، Google Quantum Lab بىلەن ھەمكارلىق'] },
    { level: 6, title: 'مىللىي سانائەت پىلانى', items: ['سىتېرىئو سىنېما', 'ئۇيغۇرچە مۇندەرىجە ئىشلەپچىقىرىش', 'ئاپتومات دەرس سىستېمىسى'] }
  ];
  
  const opportunities = [
    { title: 'ئاچچۇقلۇق دەۋرى: AI + تور + سانلىق مەلۇمات', desc: 'بۇ دەۋر مىللەتلەر ئارىسىدىكى پەرقنى ئازلىتىپ قويىدۇ.' },
    { title: 'تىل ئارتۇقچىلىقى ۋە مەدەنىيەت سىرى', desc: 'ئۇيغۇرچە AI، جەھاندىكى ئەڭ  زۇرۇر تىل.' },
    { title: 'Start-up پۇرسىتى', desc: 'كىچىك گۇرۇپپا بىلەن AI ئەپ، مۇندەرىجە سىستېمىسى قۇرۇش.' },
    { title: 'جەھاندىكى بازارلىق قوشۇنلار', desc: 'AI، Big Data، Quantum ساھەلىرىدە جىددى ئىختىسارچىلار كېرەك.' }
  ];
  
  const challenges = [
    { title: 'توردا ئۈستىدىن نازارەت ۋە چەكلىمىلەر', desc: 'مەخپىيەتلىك، ئەڭ چوڭ خىرس.' },
    { title: 'پەن-تېخنىكا ساھەسىگە كىرۈش قىيىنلىقى', desc: 'مىللىي سىياسەت ۋە چەكلىمىلەر.' },
    { title: 'ئادەم يېتىشمىگەنلىك', desc: 'IT، AI، Big Data، Quantum ساھەلىرىدە ئادەم سانى تۆۋەن.' },
    { title: 'تۇرمۇش ۋە ئىجتىمائىي كىرىش چەكلىمىلىرى', desc: '' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900 font-sans">
      
      {/* باشقىچە سەھىپە باشى */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000')] bg-cover opacity-20"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <Target className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold text-yellow-300">يۇقىرى پەن-تېخنىكا خۇلاسەسى</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-yellow-300 to-purple-300 bg-clip-text text-transparent">
              2025 يىللىق
            </span>
            <br />
            <span className="text-white">«يۇقىرى پەن-تېخنىكا ۋە ئۇيغۇرلار»</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            كەلگۈسى دەۋرىدە ئۇيغۇرلارنىڭ تېخنىكىۋى كۈچى ۋە پۇرسىتى
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>2025 يىلى 12-ئاينىڭ 7-كۈنى</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>مۇئەللىپ: قاۋۇلجان</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span>لىكسىيە خۇلاسەسى</span>
            </div>
          </div>
        </div>
      </header>

      {/* ئاساسىي مەزمۇن */}
      <main className="container mx-auto px-6 py-12">
        
        {/* 1. كىرىش سۆزى */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">1. كىرىش سۆزى</h2>
              <p className="text-lg text-gray-700 mb-6">
                بۈگۈنكى دۇنيا پەن-تېخنىكىسى بىر قىسقا مۆھلەت ئىچىدە شىددەتلىك ئۆزگىرىپ، 
                دۇنيا ئىقتىسادى، سىياسىتى ۋە ئىجتىمائىي جەھەتلىرىنى قايتا شەكىللەندۈرۈۋاتىدۇ.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
              2025 يىلىغا كەلگەندە، بەش چوڭ تۈر دۇنيانى يۇقرى سۈرئەتتە ئالغا ياندۇرۇۋاتىدۇ:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {technologies.map((tech) => (
                <div 
                  key={tech.id}
                  className={`bg-white p-6 rounded-xl border ${techHovered === tech.id ? 'border-blue-400 shadow-lg' : 'border-gray-200'} transition-all duration-300 cursor-pointer hover:shadow-lg`}
                  onMouseEnter={() => setTechHovered(tech.id)}
                  onMouseLeave={() => setTechHovered(null)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`${tech.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-gray-700 text-center">
              بۇ خۇلاسە ئۇيغۇرلارنىڭ يېڭى دۇنيا پەن-تېخنىكا دەۋرىدە قانداق رول ئويناپ، 
              قانداق پۇرسەتلەرنى قولغا ئالالايدىغانلىقىنى يورۇتدۇ.
            </p>
          </div>
        </section>

        {/* 2. تېخنىكىلار خۇلاسىسى */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900 border-b-2 border-blue-200 pb-4">
            2. ئاساسىي تېخنىكىلار خۇلاسىسى
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* كىۋانىت تېخنىكىسى */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">كىۋانىت تېخنىكىسى</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    كىۋانىت دېگەن نېمە؟
                  </h4>
                  <p className="text-gray-700">ئادەتتىكى كلاسىك كومپيۇتېردىن ئۈستۈن، بىرىۋاقتا بىر قانچە ھالىتىنى ساقلىيالايدىغان Qubit قۇرۇلمىسىغا تايانغان يۇقىرى تېخنىكا.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    2025–2030 يەتكۈلى
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>IBM، Google 1000+ qubit سىستېمىسى</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>2030 دا 1 تىرىلليون $ بازار قىممىتى</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-800">ئۇيغۇرلارغا پۇرسەت</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">كىۋانىت كودلاشتۇرۇش</span>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">تور ئامانلىقى</span>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">كىۋانىت + AI</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* سۇنئىي ئەقىل */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Cpu className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800">سۇنئىي ئەقىل (AI)</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-green-500" />
                    بۈگۈنكى رولى
                  </h4>
                  <p className="text-gray-700">ChatGPT، Agentic AI، رەسىم، ئاۋاز، ۋىدىئو، كود ۋە پىلانلاشتۇرۇش</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    2025–2030 ئىستىراىگىيەسى
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>ئاپتومات مەكتەپ، كارخانا، باشقۇرۇش</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>2030 دا AI GDP نىڭ %20 نى بەرپا قىلىدۇ</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-green-800">ئۇيغۇرلارغا پۇرسەت</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">ئۇيغۇرچە AI</span>
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">تەرجىمە، دەرس ئۆتۈش</span>
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">AI Start-up</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* چوڭ سانلىق مەلۇمات */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Database className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-orange-800">چوڭ سانلىق مەلۇمات</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500" />
                    نىمە ئۈچۈن مۇھىم؟
                  </h4>
                  <p className="text-gray-700">ھۆكۈمەت، كارخانا، تور دۇنياسنىڭ ئەڭ چوڭ قوزغاتقۇچىسى</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-orange-500" />
                    2025–2030 پىلانلىرى
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>1 قەدەم 1 پىللىيون سانلىق مەلۇمات</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span>4 million Big Data ئىختىسارچىلىرى زۆرۈر</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-orange-800">ئۇيغۇرلارغا پۇرسەت</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">سانلىق مەلۇمات قورۇشى </span>
                    <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">AI سانلىق مەلۇمات</span>
                    <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">GIS + Point Cloud</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* IT ۋە تور ئامانلىقى */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-800">IT ۋە تور ئامانلىقى</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-purple-500" />
                    2025 يىلدىكى چوڭ يۆنىلىشلەر
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Cloud</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">DevOps</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Cybersecurity</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Blockchain</span>
                  </div>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-purple-800">ئۇيغۇرلارغا پۇرسەت</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">تور بىخەتەرلىكى</span>
                    <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Full-stack تەرەققىياتى</span>
                    <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">تور بىلىم پاتنىت</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ئۇيغۇرلار كەلگەن خىرسلار */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-red-100 rounded-xl">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-red-900">ئۇيغۇرلار كەلگەن خىرسلار</h2>
              <p className="text-gray-700">تېخنىكىۋى تەرەققىيات يولىدىكى مۇھىم توسالغۇلار</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-red-800">{challenge.title}</h3>
                    <p className="text-gray-700">{challenge.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. تارىخى پۇرسەتلەر */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-green-100 rounded-xl">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-900">ئۇيغۇرلار ئۈچۈن تارىخى پۇرسەتلەر</h2>
              <p className="text-gray-700">كەلگۈسىنى قۇرۇش ئۈچۈن ئەڭ مۇھىم پۇرسەتلەر</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opp, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-green-800">{opp.title}</h3>
                    <p className="text-gray-700">{opp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. ماستىر پىلان */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Rocket className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-purple-900">ئۇيغۇر يۇقىرى پەن-تېخنىكا كەلگۈسى پىلانى</h2>
              <p className="text-gray-700">2025–2030 يىللار ئارىلىقىدىكى ماستىر پىلان</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterPlanLevels.map((level) => (
              <div key={level.level} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-purple-700">{level.level}</span>
                  </div>
                  <h3 className="font-bold text-lg text-purple-800">{level.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {level.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 9. يول خەرىتىسى */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Map className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">ئۇيغۇرلار ئۈچۈن يول خەرىتىسى</h2>
              <p className="text-gray-700">2025–2030 يىللار ئارىلىقىدىكى تەرەققىيات باسقۇچلىرى</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-8">
              {roadmapPhases.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'} ${activePhase === index ? 'scale-105' : ''} transition-transform duration-300`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${activePhase === index ? 'bg-blue-600' : 'bg-blue-100'} rounded-full flex items-center justify-center`}>
                        <Clock className={`w-6 h-6 ${activePhase === index ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <div className="font-bold text-xl text-blue-900">{phase.year}</div>
                        <div className="text-gray-600">{phase.title}</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. ئاخىرلىق سۆز */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-10 h-10 text-yellow-300" />
              <h2 className="text-3xl font-bold">ئاخىرلىق سۆز</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl">
                بۈگۈنكى پەن-تېخنىكا دەۋرىدە مىللەتنىڭ قىسمىتى پەرزەنتلىرىنىڭ ئىلمىغا باغلىق.
              </p>
              
              <p className="text-xl">
                AI، Quantum، Big Data دەۋرى — ئۇيغۇرلار ئۈچۈن ئەڭ چوڭ پۇرسەت ۋە ئەڭ چوڭ زاۋالنىڭ بۆلۈنۈش نۇقتىسى.
              </p>
              
              <div className="bg-white/10 p-6 rounded-xl mt-8">
                <h3 className="text-2xl font-bold mb-4 text-center text-yellow-300">مۇھىم ئۇقتۇرۇش</h3>
                <div className="text-center space-y-4">
                  <p className="text-lg">
                    ئەگەر بىز بۇ دەۋرىڭ ئالدىغا چۈشسەك — 
                    <span className="font-bold text-yellow-300"> مىللەت بويىچە سەركەرەيمىز،</span>
                  </p>
                  <p className="text-lg">
                    ئەگەر پۇرسەتنى يوقۇتساق — 
                    <span className="font-bold text-red-300"> دۇنيا پەن-تېخنىكا دەۋرىدە سۆزلەش ھوقۇقىنى يوقۇتىمىز.</span>
                  </p>
                  <p className="text-2xl font-bold mt-6">
                    كەلگۈسىمىز — بۈگۈن بەلگىلىنىدۇ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ئاخىرقى ئىبارە */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
          <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <p className="text-2xl font-bold text-blue-900 mb-4">
            يۇقىرى پەن-تېخنىكا — ئۇيغۇرلارنىڭ يېڭى تارىخىنىڭ باشلانغۇچى
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            بۇ لىكسىيە خۇلاسەسى 2025 يىلى ئۇيغۇر ياشلىرىنىڭ تېخنىكىۋى تەرەققىيات يولىدىكى
            ئەڭ مۇھىم يول خەرىتىسى ۋە پىلانى بولۇپ، ھەر بىر ئۇيغۇر ياشىنىڭ كەلگۈسىنى قۇرۇشىغا ياردەم بېرىشى مەقسەت قىلىندى.
          </p>
        </div>
      </main>

      {/* پايدىلانغان ئۇچۇرلار */}
      <footer className="border-t border-gray-200 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-gray-600">
              <p className="font-bold">© 2025 يۇقىرى پەن-تېخنىكا لىكسىيە خۇلاسەسى</p>
              <p>بارلىق ھوقۇقلار مۇھاپىزەت قىلىنغان</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>مۇئەللىپ: قاۋۇلجان</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-purple-600" />
                <span>تېخنىكا ئىستىقبالى</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog12;