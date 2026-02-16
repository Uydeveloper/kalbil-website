import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Heart, 
  Share2, 
  Clock,
  Zap,
  Atom,
  Microscope,
  Stethoscope,
  Pill,
  Activity,
  Target,
  TrendingUp,
  Globe,
  Users,
  Award,
  BookOpen,
  ChevronRight,
  Sparkles,
  Lightbulb,
  Shield,
  Star,
  CheckCircle,
  AlertCircle,
  BarChart,
  TestTube,
  Image
} from 'lucide-react';

const QuantumBrainHealth = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(215);
  const [activeSection, setActiveSection] = useState('whyNow');

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'كوانتۇم مېخانىكىسى 100 يىل، «يۇقىرى دەرىجىلىك مەنبەلەرنىڭ كوانتۇم پۇل سېلىمى» ۋە مىجە كېسەللىكىنىڭ كەلگۈسى',
        text: 'ھازىر قايتا ئۆگىنىشنى خالىغان «قائىدىسىز فىزىكا» نىڭ رېئاللىقى',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  const sections = [
    { id: 'whyNow', title: 'نېمە ئۈچۈن ھازىر «كوانتۇم»؟', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'quantumFeatures', title: 'كوانتۇم دۇنياسىنىڭ ئالاھىدىلىكى', icon: <Atom className="w-5 h-5" /> },
    { id: 'quantumComputer', title: 'كوانتۇم كومپيۇتېرى نېمە؟', icon: <Cpu className="w-5 h-5" /> },
    { id: 'brainImpact', title: 'كوانتۇم تېخنىكىسى ۋە مىجە كېسەللىكى', icon: <Brain className="w-5 h-5" /> },
    { id: 'future', title: 'كوانتۇم ئەۋلادىنىڭ دۇنياسى', icon: <Globe className="w-5 h-5" /> }
  ];

  const quantumFeatures = [
    {
      title: 'قوشۇش ھالىتى',
      description: '«بىر ۋاقىتتا Aمۇ، Bمۇ بولۇش»',
      example: 'ياشىلىنغان قوتۇن ئىچىدىكى ئېلېكتىرون: «سول» ياكى «ئوڭ» دەپ ئەمەس، «سولمۇ ئوڭمۇ بىر ۋاقىتتا بولۇش»',
      icon: '📦'
    },
    {
      title: 'كوانتۇم چىڭلىشىش',
      description: '«قانداق يىراق بولسىمۇ بىر ئەزالىق»',
      example: 'توكيو ۋە نىيۇ يوركتىكى تەڭشەلگەن تەنھەر: بىر تەرەپتىكى تەنھەر «يۈزى»نى كۆرگەندە، يەنە بىر تەرەپتىكى تەنھەر «تەگى»گە ئايلىنىدۇ',
      icon: '⚡'
    },
    {
      title: 'قائىدىسىزلىكنى قوبۇل قىلىش',
      description: '«چۈشىنىشكە بولمىسىمۇ، ئىشلىتىپ قولغا كەلتۈرۈش كېرەك»',
      example: 'كوانتۇم مېخانىكىسى كىشىلەرنىڭ سەزگۈرلۈكىگە قارىغاندا «ئۆزگەچە»، ئەمما ئىشلىتىش ئارقىلىق نېمىسوتور، لازېر، LED قاتارلىق پايدىلىق تېخنىكىلارنى يارىتتى',
      icon: '🔧'
    }
  ];

  const brainDiseaseImpact = [
    {
      category: 'دورا ياساش',
      disease: 'ئالزخېيمېر كېسەللىكى، پاركىنسون كېسەللىكى',
      quantumRole: 'كوانتۇم كومپيۇتېر ئارقىلىق مولېكۇلا سىمۇلياتسىيەسى',
      benefit: 'تاق سوۋۇقلار ۋە مولېكۇلالار ئوتتۇرىسىدىكى مۇناسىۋەتنى توغرا ھېسابلاش، يېڭى دورا ئىزدەش سۈرئىتىنى ئاشۇرۇش',
      icon: <Pill className="w-6 h-6" />
    },
    {
      category: 'رەسىم دىئاگنوزى',
      disease: 'ئىللىق باسقۇچتىكى مىجە كېسەللىكى',
      quantumRole: 'كوانتۇم ماشىنا ئۆگىنىش (كوانتۇم دىيىپ لېرنىڭ)',
      benefit: 'MRI، PET، CT رەسىملىرىنى تەھلىل قىلىپ، ئىللىق باسقۇچتىكى مىجە كېسەللىكىنى بايقاش',
      icon: <Image className="w-6 h-6" />
    },
    {
      category: 'داۋالاش پىلانى',
      disease: 'مىجە قان تومۇر كېسىلى، تېنچەك',
      quantumRole: 'كوانتۇم كومپيۇتېر ئارقىلىق كۆپ ئۆلچەملىك ئەڭ ياخشىلاشتۇرۇش',
      benefit: 'ھەر بىر بېمار ئۈچۈن يان تەسىرى ئاز، تۇرمۇش سۈپىتى يۇقىرى بولغان داۋالاش پىلانىنى ئىزدەش',
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const quantumApplications = [
    { area: 'مەلىيە', application: 'پورتفولىيىنى ئەڭ ياخشىلاشتۇرۇش، يۇقىرى چاستوتىلىق سودىلارنى يۇقىرى دەرىجىلىك قىلىش' },
    { area: 'يۆتكەش ۋە قاتناش', application: 'يۈك ماشىنىسى، كېمە، ئايروپىلاننىڭ يولىنى ئەڭ ياخشىلاشتۇرۇش' },
    { area: 'ئېنېرگىيە ۋە مۇھىت', application: 'ئېلېكتىر ئىستانسىسىنىڭ ئىشلىتىش پىلانىنى ئەڭ ياخشىلاشتۇرۇش' },
    { area: 'ئىشلەپچىقىرىش', application: 'كارخانا لىنىيەسىنى لايىھىلەش، ئىشلىتىش مۇددىتىنى ئالدىن بېكىتىش' },
    { area: 'ماتېرىيال ۋە كىمىيە', application: 'يېڭى ماتېرىيال ۋە دورىلارنى لايىھىلەش (مولېكۇل دەرىجىسىدىكى ھېسابات)' }
  ];

  const timelineEvents = [
    { year: '1925', event: 'ھايزېنبېرگنىڭ تەتقىقات ماتېرىيالىدىن كوانتۇم مېخانىكىسى باشلاندى' },
    { year: '2025', event: 'بىرلەشكەن دۆلەتلەر تەشكىلاتى 2025-يىلىنى «خەلقئارا كوانتۇم پەن-تېخنىكا يىلى» دەپ بەلگىلىدى' },
    { year: '2030', event: 'ياپونىيە ھۆكۈمىتىنىڭ نىشانى: 10 مىليون كوانتۇم تېخنىكىسى ئىشلەتكۈچى، 50 تىرىلىون يېنى قەدەم مىقدارىدىكى ئىشلەپچىقىرىش مىقدارى' }
  ];

  const articleMetadata = {
    title: 'كوانتۇم مېخانىكىسى 100 يىل، «يۇقىرى دەرىجىلىك مەنبەلەرنىڭ كوانتۇم پۇل سېلىمى» ۋە مىجە كېسەللىكىنىڭ كەلگۈسى',
    author: ' قاۋۇلجان',
    date: '2025-يىلى 12-ئاينىڭ 3-كۈنى',
    readingTime: '15 مىنۇت',
    tags: ['كوانتۇم مېخانىكىسى', 'مىجە كېسەللىكى', 'كوانتۇم كومپيۇتېر', 'دورا ياساش', 'يېڭى تېخنىكا']
  };

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* باش سەھىفە */}
        <header className="mb-16 text-center relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-8 backdrop-blur-sm border border-blue-200/50">
            <Atom className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              كوانتۇم پەن-تېخنىكا ۋە ساغلاملىق
            </span>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">كوانتۇم مېخانىكىسى </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10">100 يىل</span>
            </span>
            <br />
            <span className="relative inline-block mt-4">
              <span className="relative z-10">«يۇقىرى دەرىجىلىك مەنبەلەرنىڭ كوانتۇم پۇل سېلىمى» ۋە </span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative z-10">مىجە كېسەللىكىنىڭ كەلگۈسى</span>
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
            ھازىر قايتا ئۆگىنىشنى خالىغان «قائىدىسىز فىزىكا» نىڭ رېئاللىقى
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-base">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  KeLBiL
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">{articleMetadata.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">پاتېنت خەۋەرلىرى</p>
              </div>
            </div>
            
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-5 h-5" />
              <span>{articleMetadata.date}</span>
            </div>
            
            <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  {articleMetadata.readingTime} ئوقۇش
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {articleMetadata.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* تىمىلىك بۆلەك */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-800/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-blue-200/50 dark:border-blue-800/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full mb-4">
                  <div className="flex">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">⚛️</div>
                    <div className="w-6 h-6 rounded-full bg-purple-500 -ml-2 flex items-center justify-center text-white text-sm">🧠</div>
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">كوانتۇم تېخنىكىسى ↔ مىجە كېسەللىكى دەۋالاشى</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  1925-يىلى، ھايزېنبېرگنىڭ تەتقىقات ماتېرىيالىدىن باشلانغان كوانتۇم مېخانىكىسى بۇ يىل توغرا 100 ياشقا كىردى
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  لازېر، نېمىسوتور، كومپيۇتېر، ئاقىل تېلېفون... زامانىۋى مەدەنىيەتنىڭ «ئاساسى» نىڭ كۆپ قىسمى، ئەمەلىيەتتە كوانتۇم مېخانىكىسىسىز ئورنىتىلمايدۇ.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl">
                    ⚛️
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-5xl">
                    🧠
                  </div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl animate-pulse">
                    💡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* تارىخىي كېلىش مۇنبەرى */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">كوانتۇم مېخانىكىسىنىڭ تارىخىي كېلىش مۇنبەرى</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{event.year}</div>
                  <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                  <p className="text-gray-700 dark:text-gray-300">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بۆلەك تىزىملىكى */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-4 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border-2 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-transparent shadow-lg scale-[1.02]'
                    : 'bg-white/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
                }`}
              >
                <div className={`p-3 rounded-xl ${
                  activeSection === section.id 
                    ? 'bg-white/20 dark:bg-black/20' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <div className={activeSection === section.id ? 'text-white' : 'text-gray-600 dark:text-gray-300'}>
                    {section.icon}
                  </div>
                </div>
                <span className={`font-semibold text-center text-sm ${
                  activeSection === section.id
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {section.title}
                </span>
                {activeSection === section.id && (
                  <div className="w-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ئاساسىي مەزمۇن */}
        <div className="space-y-20">
          {/* نېمە ئۈچۈن ھازىر «كوانتۇم»؟ */}
          {activeSection === 'whyNow' && (
            <section className="space-y-10">
              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 p-10 rounded-3xl border-l-4 border-blue-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                    <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                      نېمە ئۈچۈن ھازىر دۆلەتنىڭ ئۆسۈش ئىستراتېگىيەسىنىڭ تىرىك تىرىكى «كوانتۇم» بولۇۋاتىدۇ؟
                    </h3>
                    <p className="text-blue-700 dark:text-blue-200 mt-2">
                      100 يىللىق كوانتۇم مېخانىكىسىغا ماسلىشىش ئۈچۈن، بىرلەشكەن دۆلەتلەر تەشكىلاتى 2025-يىلىنى «خەلقئارا كوانتۇم پەن-تېخنىكا يىلى» دەپ بەلگىلىدى.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                      كوانتۇم تېخنىكىسى يېڭى ئىنفراسترۇكتۇرىغا ئايلاندۇ
                    </h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>كەلگۈسى كومپيۇتېر (كوانتۇم كومپيۇتېرى)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>يۇقىرى دەقلىك سېنسور</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>ئىنتايىن بىخەتەر ئالاقە (كوانتۇم شىفىرلاش)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl">
                    <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-300">
                      ياپونىيە ھۆكۈمىتىنىڭ ھەدەپلىرى
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">كوانتۇم تېخنىكىسى ئىشلەتكۈچى</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">2030-يىلغىچە 10 مىليون</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">ئىشلەپچىقىرىش مىقدارى</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">50 تىرىلىون يېنى</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                      ئىستراتېگىيەلىك ئەھمىيەت
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-600 dark:text-green-400 font-bold">💰</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          بۇ «ئىنفراسترۇكتۇرا» نى تۇتقان دۆلەت ئىقتىساد، بىخەتەرلىق، سانائەت رىقابەتچانلىقىدا چوڭ ئۈستۈنلۈككە ئىگە بولىدۇ
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">🏭</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          ياپونىيە ئارقا قالماستىن، كوانتۇم تەتقىقاتىدىن باشقا، سانائەت، كادىر تەربىيەلەش، مائارىپتىن ئىبارەت ئىستراتېگىيىنى بىرلىكتە ئىلگىرى سۈرۈشنى ئىزدەۋاتىدۇ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* كوانتۇم دۇنياسىنىڭ ئالاھىدىلىكى */}
          {activeSection === 'quantumFeatures' && (
            <section className="space-y-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                  <Atom className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    قائىدىنى بىر قېتىم يەنىگە قويۇش: كوانتۇم دۇنياسىنىڭ 3 ئالاھىدىلىكى
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    كوانتۇم دۇنياسى «كۆزگە كۆرۈنەيدىغان كۈندىلىك تۇرمۇش» دىن پۈتۈنلەي پەرقلىق قانۇنلار بويىچە يۈرىدۇ
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {quantumFeatures.map((feature, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                    <h4 className="font-bold text-lg mb-2 text-center text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {feature.description}
                    </p>
                    <div className="p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {feature.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300">
                  ئىنسانىي سەزگۈرلۈكتىكى «ئۆزگەچەلىك»
                </h4>
                <p className="text-purple-700 dark:text-purple-200">
                  كوانتۇم مېخانىكىسى كىشىلەرنىڭ سەزگۈرلۈكىگە قارىغاندا ھەقىقەتەن «ئۆزگەچە». 
                  شۇنداقمۇ، فيزىكىشۇناسلار 
                  «سەزگۈرلۈك بويىچە ئۆزگەچە بولسىمۇ، «توغرا قورال» سۈپىتىدە قوبۇل قىلىپ ئىشلىتىپ قولغا كەلتۈرۈش» 
                  دېگەن ئورۇننى تۇتتى.
                </p>
              </div>
            </section>
          )}

          {/* كوانتۇم كومپيۇتېرى نېمە؟ */}
          {activeSection === 'quantumComputer' && (
            <section className="space-y-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-6">
                  <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-blue-800 dark:text-blue-300">
                    كوانتۇم كومپيۇتېرى قانداق نەرسە؟
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  «قوشۇش ھالىتى» ۋە «كوانتۇم چىڭلىشىش» نى ھېسابلاشتا ئىشلىتىش
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                      كىلاسسىك كومپيۇتېر بىلەن پەرقى
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">كىلاسسىك كومپيۇتېر</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">ئۇچۇرنىڭ ئەڭ كىچىك بىرلىكى: بىت (0 ياكى 1)</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-lg">
                        <div className="font-medium text-gray-900 dark:text-white">كوانتۇم كومپيۇتېرى</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">ئۇچۇرنىڭ ئەڭ كىچىك بىرلىكى: كوانتۇم بىتى (0 ۋە 1 نىڭ «قوشۇلغان» ھالىتىمۇ بولالايدۇ)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                      ئەڭ ياخشىلاشتۇرۇش تەرەققىياتى
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">توشۇش يولىنى ئەڭ ئۈنۈملۈك بەلگىلەش</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">پاي ۋە ئېلېكتىر كۈچى سودىسىنى ئەڭ ياخشىلاشتۇرۇش</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">كارخانا لىنىيەسىنى ئەڭ تۆۋەن چىقىم بىلەن ئىشلەش</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-10">
                <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                  كوانتۇم تېخنىكىسىنىڭ قوللىنىش ساھەلىرى
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quantumApplications.map((app, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                      <div className="font-medium text-blue-600 dark:text-blue-400 mb-1">{app.area}</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{app.application}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* كوانتۇم تېخنىكىسى ۋە مىجە كېسەللىكى */}
          {activeSection === 'brainImpact' && (
            <section className="space-y-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30">
                  <Brain className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    كوانتۇم تېخنىكىسى ۋە مىجە كېسەللىكى: ئەقلىي نورماللىق ئاجىزلاش، مىجە قان تومۇر كېسىلى، تېنچەككە تەسىرى
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    كوانتۇم تېخنىكىسى كەلگۈسىدىكى مىجە كېسەللىكىنىڭ دىئاگنوزى، داۋالاشى، دورا ياساشىغا كۈچلۈك تەسىر كۆرسىتىدۇ
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {brainDiseaseImpact.map((impact, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                            {impact.icon}
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">تۈر</div>
                            <div className="font-bold text-blue-600 dark:text-blue-400">{impact.category}</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">كېسەللىك</div>
                        <div className="font-medium text-gray-900 dark:text-white">{impact.disease}</div>
                      </div>
                      
                      <div className="md:w-3/4">
                        <div className="mb-4">
                          <div className="text-sm text-gray-500 mb-1">كوانتۇم رولى:</div>
                          <div className="font-bold text-purple-600 dark:text-purple-400">{impact.quantumRole}</div>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl">
                          <div className="text-sm text-gray-500 mb-1">پايدىسى:</div>
                          <div className="text-green-700 dark:text-green-300">{impact.benefit}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-300 text-center">
                  كوانتۇم ماشىنا ئۆگىنىش ۋە رەسىم دىئاگنوزى
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/70 dark:bg-black/20 p-6 rounded-2xl">
                    <div className="text-4xl mb-4 text-center">📊</div>
                    <p className="font-medium text-gray-900 dark:text-white mb-2 text-center">
                      ئىللىق باسقۇچتىكى مىجە كېسەللىكىنى بايقاش
                    </p>
                    <div className="text-sm text-gray-500 mt-2 text-center">
                      كوانتۇم يېڭىر سىستېمىسى ئارقىلىق MRI رەسىملىرىنى تەھلىل قىلىپ، ئىللىق باسقۇچتىكى مىجە كېسەللىكىنى بايقاش
                    </div>
                  </div>
                  <div className="bg-white/70 dark:bg-black/20 p-6 rounded-2xl">
                    <div className="text-4xl mb-4 text-center">🧬</div>
                    <p className="font-medium text-gray-900 dark:text-white mb-2 text-center">
                      شەخسىيلەشتۈرۈلگەن داۋالاش پىلانى
                    </p>
                    <div className="text-sm text-gray-500 mt-2 text-center">
                      كوانتۇم كومپيۇتېر ئارقىلىق ھەر بىر بېمار ئۈچۈن ئەڭ مۇۋاپىق دورا ۋە رېھابىلىتاتسىيە پىلانىنى ئىزدەش
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* كوانتۇم ئەۋلادىنىڭ دۇنياسى */}
          {activeSection === 'future' && (
            <section className="space-y-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  «كوانتۇم ئەۋلادى» ياشايدىغان دۇنيا
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  كوانتۇم كومپيۇتېر ۋە كوانتۇم سېنسور ئادەتتىكى قورال سۈپىتىدە ئىشلىتىلىدىغان دۇنيا
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl">
                  <div className="text-4xl mb-4 text-center">🚚</div>
                  <h4 className="font-bold text-lg mb-3 text-center text-gray-900 dark:text-white">
                    «تاشلانمىسى ئاز بولغان جەمئىيەت»
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    يۆتكەش ۋە ئېنېرگىيە ئەڭ ياخشىلاشتۇرۇلغان، ئىقتىساد ۋە سانائەت سىستېمىلىرى ئۈنۈملۈك ئىشلەيدۇ
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl">
                  <div className="text-4xl mb-4 text-center">🏥</div>
                  <h4 className="font-bold text-lg mb-3 text-center text-gray-900 dark:text-white">
                    «ئىللىق باسقۇچتىكى ساقلاش» داۋالىشى
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    ئەقلىي نورماللىق ئاجىزلاش ۋە مىجە قان تومۇر كېسىلى خەۋپى ئىلگىرى بەلگىلەنگەن، شەخسىيلەشتۈرۈلگەن كالا قوبۇل قىلىنىدۇ
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-2xl">
                  <div className="text-4xl mb-4 text-center">🤝</div>
                  <h4 className="font-bold text-lg mb-3 text-center text-gray-900 dark:text-white">
                    «كەڭ قوراللىق» جەمئىيەت
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    ئەقلىي ئىقتىدارى چەكلىك بولسىمۇ، AI ۋە كوانتۇم تېخنىكىسىنىڭ بىرلەشمىسى ئارقىلىق يەڭگىلەيدىغان قوراللار ئارقىلىق، ئىشلىشىش ۋە ئۆگىنىش ئۇسۇلى كېڭىيىدۇ
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold mb-6 text-center text-blue-800 dark:text-blue-300">
                  كەلگۈستە كوانتۇمنى ئۆگىنىش ئۈچۈن 3 نۇقتا
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">سەزگۈرلۈك ئەمەس، «قانۇن» سۈپىتىدە قوبۇل قىلىڭ</p>
                      <p className="text-gray-600 dark:text-gray-400">«قوشۇش ھالىتى»، «چىڭلىشىش» نى «ئۆزگەچە قانۇن» سۈپىتىدە چۈشىنىڭ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">ئىشلىتىش جايىدىن ئەكسىچە چۈشىنىڭ</p>
                      <p className="text-gray-600 dark:text-gray-400">«دورا ياساش»، «مىجە كېسەللىكى دىئاگنوزى»، «يۆتكەش»، «مەلىيە» قاتارلىق ئىشلىتىش جايلىرىدىن كىرىڭ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-600 dark:text-pink-400 font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">2025-يىللىق «كوانتۇم 100 يىللىق بەلگىسى» نى پۇرسەت قىلىڭ</p>
                      <p className="text-gray-600 dark:text-gray-400">خەلقئارا كوانتۇم پەن-تېخنىكا يىلى پائالىيەتلىرى ۋە ماقالىلىرىنى ئاددىي كىرىش نۇقتىسى سۈپىتىدە ئىشلىتىڭ</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* خۇلاسە */}
          <div className="mt-20 p-10 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl border border-blue-200/50 dark:border-blue-800/30 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 blur-3xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                  ئاخىرقى سۆز: قائىدىسىز فيزىكا، مىجە كېسەللىكىنىڭ «ئۈمىد ئۇرىنى» بولۇشى مۇمكىن
                </h4>
              </div>
              
              <div className="space-y-6 text-blue-700 dark:text-blue-200">
                <p className="text-lg">
                  كوانتۇم مېخانىكىسى «قائىدىنى تاشلىمىسا چۈشىنىشكە بولمايدۇ» دېيىلدىغاندەك، غەرەپلىك، سەزگۈرلۈككە زىت دۇنيا.
                </p>
                <div className="p-6 bg-white/30 dark:bg-black/20 rounded-2xl">
                  <p className="italic font-medium">
                    «ئاقىل تېلېفوننىڭ ئىچىدىكى نەرسىنى پۈتۈنلەي چۈشەنمەسىمىز، ئەمما ئەپنى ئىشلىتىپ قولغا كەلتۈرەلەيمىز» دېگەندەك، كوانتۇمنىڭ «ئىچىدىكى نەرسىسى» نى پۈتۈنلەي چۈشەنمىسەكمۇ، «قايسى نەرسىگە پايدىلىق»، «قانداق كەلگۈسى ئاچىلىدۇ» دېگەننىلا بىلسەكمۇ، كەلگۈسى زاماندا ياشايدىغان بىز ئۈچۈن چوڭ قورال بولۇپ قالىدۇ.
                  </p>
                </div>
                <p>
                  كوانتۇم پەقەت ئىلمىي كەسپىي رىۋايەت خاتىرىلىرىنىڭ مۇنبەرى ئەمەس، بەلكى مىجە كېسەللىكىدىن ئازاب چەككەن كىشىلەرنىڭ كەلگۈسىنى ئۆزگەرتەلەيدىغان ئىمكانىيەتنى ساقلايدۇ.
                </p>
              </div>
            </div>
          </div>

          {/* ئاخىر ئىشلىتىش */}
          <footer className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">U</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center border-2 border-white dark:border-gray-800">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-xl text-gray-900 dark:text-white">{articleMetadata.author}</p>
                    <p className="text-gray-600 dark:text-gray-400">پاتېنت خەۋەرلىرى</p>
                    <div className="flex gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm text-gray-500">ئونلايىن</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  بۇ بايقاشنى ئورتاقلىشىپ، كوانتۇم تېخنىكىسى ۋە مىجە كېسەللىكى دەۋالاش ئارقىلىق سۆھبەتلىشىڭ!
                  يېڭى چۈشەنچىلەر ۋە تەجرىبىلەرنى پايدىلىنىش.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
                    liked 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${liked ? 'fill-current animate-pulse' : ''}`} />
                  <span className="font-semibold">ياخشى ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <Share2 className="w-6 h-6" />
                  <span className="font-semibold">ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <div className="flex flex-wrap justify-center gap-6 mb-4">
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">ھەققىدە</a>
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">ئالاقە</a>
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">مەنبەلەر</a>
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">قانۇنىي ئۇچۇر</a>
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">باشقا ماقالىلەر</a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2025 ئۇيغۇر كوانتۇم پەن-تېخنىكا يىلى. بارلىق ھوقۇقلار قوغدىلىدى.
                <span className="block mt-1">بۇ ماقالىنىڭ مەزمۇنى تەلىم-تەربىيە ۋە مۇنازىرە مەقسەتلىرىدە ئىشلىتىش تەۋسىيە قىلىنىدۇ.</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default QuantumBrainHealth;