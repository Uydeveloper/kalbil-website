import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import { 
  ShoppingBag, 
  Scissors, 
  Palette, 
  Share2, 
  Heart, 
  TrendingUp,
  Download,
  Smartphone,
  Users,
  Award,
  Clock,
  CheckCircle,
  Zap,
  Layers,
  Sparkles,
  Star,
  Target,
  Crown,
  Gift
} from 'lucide-react';

const Blog05 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const [activePattern, setActivePattern] = useState('gul');
  
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
        title: 'ئۇيغۇر كىيىم-كەچەكلىرىنىڭ زامانىۋى لايىھىلىرى',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  const traditionalPatterns = [
    {
      id: 'gul',
      name: 'گۈل نەقىشى',
      description: 'گۈللەرنىڭ سىممېترىيەلىك تەكرارلانمىسى',
      color: 'from-pink-500 to-rose-500',
      uses: ['كۆينەك', 'ياقا', 'ئاياق كىيىم']
    },
    {
      id: 'bulut',
      name: 'بۇلۇت نەقىشى',
      description: 'بۇلۇت ۋە سۇ ئېقىش شەكىللىرى',
      color: 'from-blue-500 to-cyan-500',
      uses: ['ئىشقاپ', 'ئېتىك', 'كەلپە']
    },
    {
      id: 'hayvan',
      name: 'ھەيۋان نەقىشى',
      description: 'قۇش ۋە ھايۋانلارنىڭ سىمۋوللۇق شەكىللىرى',
      color: 'from-amber-500 to-orange-500',
      uses: ['بەلۋاغ', 'تاقى', 'كىمخاب']
    },
    {
      id: 'gerih',
      name: 'گېرېھ نەقىشى',
      description: 'گېئومېتىرىيەلىك شەكىللەرنىڭ مۇناسىۋەتلىك تەرتىپى',
      color: 'from-purple-500 to-violet-500',
      uses: ['توقۇما', 'قەدىرپەش', 'پەرس']
    }
  ];

  const modernApplications = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: 'كىچىك ۋە چوڭ بازار',
      description: 'ئەنئەنىۋى نەقىشلەرنى مودېرن كىيىملەرگە ئىشلىتىش',
      examples: ['T-Shirt', 'ھەمبەل', 'سىرت كىيىم']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'دىجىتال مودا',
      description: '3D مودېللاشتۇرۇش ۋە ۋىرتۇئال تېيىلىش',
      examples: ['VR تېيىلىش', '3D كۆرۈنۈش', 'ئارتۇرچىلىق']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'ئالاھىدە ئېتىك',
      description: 'شەخسىيلەشتۈرۈلگەن كىيىملەر ياساش',
      examples: ['ئاۋازغا كىيىش', 'VIP كوللېكتسىيە', 'تارىخىي تېمىلار']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'خەلقئارا بازار',
      description: 'ئۇيغۇر موداسىنى خەلقئارالىشىش',
      examples: ['مودا كۆرگەزمىسى', 'خەلقئارا ماركا', 'تور سېتىش']
    }
  ];

  const colorPalettes = [
    {
      name: 'ئالتۇن-قىزىل',
      colors: ['bg-amber-500', 'bg-red-500', 'bg-orange-400', 'bg-yellow-300'],
      mood: 'ھەسسىياتلىق، تېمپىراتۇرلۇق',
      season: 'كۈز، قىش'
    },
    {
      name: 'يېشىل-كۆك',
      colors: ['bg-emerald-500', 'bg-teal-400', 'bg-cyan-300', 'bg-blue-200'],
      mood: 'تېببىي، تىنچ',
      season: 'ياز، باھار'
    },
    {
      name: 'سېرىق-كۆك',
      colors: ['bg-yellow-400', 'bg-blue-500', 'bg-white', 'bg-gray-800'],
      mood: 'ئۇچقاندەك، زىيارەتچان',
      season: 'ھەممە پەسىل'
    },
    {
      name: 'قىزىل-سۇس',
      colors: ['bg-red-600', 'bg-pink-400', 'bg-rose-300', 'bg-white'],
      mood: 'رومانىك، نازۇك',
      season: 'توي، مەراسىم'
    }
  ];

  const successStories = [
    {
      title: 'مىللىي ماركا ھاسىل قىلىش',
      result: '50K+ سېتىلىش',
      description: 'ئۇيغۇر نەقىشلىرىنى ئىشلىتىدىغان يېڭى مودا ماركىسى',
      icon: '👑'
    },
    {
      title: 'خەلقئارا كۆرگەزمە',
      result: '10+ دۆلەت',
      description: 'ئۇيغۇر موداسىنى خەلقئارا كۆرگەزمىلەردە كۆرسىتىش',
      icon: '🌍'
    },
    {
      title: 'ياش دىزايىنېرلار',
      result: '100+ كىشى',
      description: 'ئۇيغۇر موداسى بويىچە ياش دىزايىنېرلارنى تەربىيەلەش',
      icon: '🎓'
    }
  ];

  const fabrics = [
    { name: 'ئەتلس', type: 'يۇمشاق توقۇما', uses: 'ئىشقاپ، كۆينەك' },
    { name: 'ئىپەر', type: 'پۇرقىلاق', uses: 'توي كىيىمى، رەسمىي كىيىم' },
    { name: 'كىتمەن', type: 'قەلەملىك', uses: 'كۈندىلىك كىيىم' },
    { name: 'چەتۈن', type: 'مۇھەببەتلىك', uses: 'يازلىق كىيىم' },
    { name: 'توقۇما', type: 'ئەنئەنىۋى', uses: 'پەرس، قەدىرپەش' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-rose-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 dark:bg-rose-900/30 rounded-full mb-6">
            <ShoppingBag className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span className="text-sm font-medium text-rose-700 dark:text-rose-300">
              مودا ۋە دىزايىن
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇر كىيىم-كەچەكلىرىنىڭ{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              زامانىۋى لايىھىلىرى
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ئۇيغۇر كىيىم-كەچەكلىرى پەقەت كونا كىيىملەر ئەمەس، زامانىۋى مودا لايىھىسىنىڭ ئىلھام مەنبەسى.
            بىز قانداق قىلىپ ئەنئەنىۋى كىيىملەرنى زامانىۋى موداغا ئايلاندۇرالايمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <span>ئاپتۇر : قاۋۇلجان </span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 1-ئاينىڭ 20-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>6 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* كىيىم كۆرسىتىش */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">زامانىۋى ئىشقاپ</h4>
                  <p className="text-gray-600 dark:text-gray-400">گۈل نەقىشى ۋە زامانىۋى قۇرۇلما بىرلەشمىسى</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">₩299</div>
                    <div className="text-sm text-gray-500">ئىقتىدارلىق باھا</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">ماتېرىيال</div>
                  <div className="font-bold text-gray-900 dark:text-white">ئەتلس ۋە كىتمەن</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">چىقىش ۋاقتى</div>
                  <div className="font-bold text-gray-900 dark:text-white">48 سائەت</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">دەرىجە</div>
                  <div className="font-bold text-gray-900 dark:text-white">ئالاھىدە ئېتىك</div>
                </div>
              </div>
              
              <div className="relative h-48 bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-purple-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👗</div>
                    <div className="text-gray-700 dark:text-gray-300">زامانىۋى ئۇيغۇر كىيىمى</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">ئىشلەپچىقىرىش ۋاقتى</span>
                  </div>
                  <div className="text-sm text-gray-500">3D دىزايىن</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-rose-600 to-pink-600 p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ئالاھىدە ئېتىك</h3>
                <p className="text-rose-100">ئەنئەنىۋى نەقىشنىڭ يېڭى ئىپادىسى</p>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                    <span className="text-white">VIP كوللېكتسىيە</span>
                    <Star className="w-4 h-4 text-yellow-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ئاساسىي مەزمۇن */}
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-ul:space-y-3">
          
          {/* كىرىش سۆز */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 dark:from-rose-500/5 dark:to-pink-500/5 p-8 rounded-2xl border border-rose-200 dark:border-rose-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                نىمە ئۈچۈن ئۇيغۇر موداسى؟
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ئۇيغۇر موداسى پەقەت كىيىم ئەمەس، تارىخ، مەدەنىيەت ۋە سەنئەتنىڭ جانلىق ئىپادىسى. 
                بۇ ئەنئەنىۋى مەدەنىيەت ئېلېمېنتلىرىنى زامانىۋى مودا لايىھىسىغا ئۇيغۇنلاشتۇرۇش، 
                مەدەنىيەتنى ساقلاشنىڭ ئەڭ ئىجادىيەتلىك يوللىرىنىڭ بىرى.
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center">
                <span className="text-rose-600 dark:text-rose-400 font-bold text-xl">1</span>
              </div>
              ئۇيغۇر نەقىشلىرىنى زامانىۋى موداغا ئۇيغۇنلاشتۇرۇش
            </h2>
            
            <p className="text-lg mb-6">
              ئەنئەنىۋى نەقىشلەرنى زامانىۋى كىيىملەرگە قانداق ئىشلىتىش:
            </p>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-6">
                {traditionalPatterns.map(pattern => (
                  <button
                    key={pattern.id}
                    onClick={() => setActivePattern(pattern.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activePattern === pattern.id
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {pattern.name}
                  </button>
                ))}
              </div>
              
              {traditionalPatterns.map(pattern => (
                activePattern === pattern.id && (
                  <div 
                    key={pattern.id} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-4"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`w-full md:w-1/4 h-32 rounded-lg bg-gradient-to-br ${pattern.color}`}></div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {pattern.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {pattern.description}
                        </p>
                        <div>
                          <div className="text-sm text-gray-500 mb-2">قوللىنىش مىساللىرى:</div>
                          <div className="flex flex-wrap gap-2">
                            {pattern.uses.map((use, idx) => (
                              <span key={idx} className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-sm">
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            <div className="my-10 p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-l-4 border-rose-500">
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-rose-800 dark:text-rose-300">زامانىۋى قوللىنىش:</h4>
                  <p className="text-rose-700 dark:text-rose-200 mb-4">
                    گۈل نەقىشلىرىنى ئىنستىتىش ۋە كۆينەكلەرگە ئىشلىتىش، 
                    بۇلۇت نەقىشلىرىنى جاكېت ۋە ئېتىكلەرگە قوللاش.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
                    <span className="text-sm font-medium text-rose-700 dark:text-rose-300">
                      نەتىجە: 40% ئاشقان سېتىش
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                <span className="text-pink-600 dark:text-pink-400 font-bold text-xl">2</span>
              </div>
              زامانىۋى مودا قوللىنىش ساھەلىرى
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {modernApplications.map((app, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {app.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                        {app.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {app.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {app.examples.map((example, idx) => (
                      <span key={idx} className="px-3 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* ماتېرىياللار */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                ئەنئەنىۋى ماتېرىياللار
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {fabrics.map((fabric, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-3 flex items-center justify-center`}>
                      <span className="text-white font-bold">{fabric.name.charAt(0)}</span>
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white">{fabric.name}</div>
                    <div className="text-sm text-gray-500 mb-2">{fabric.type}</div>
                    <div className="text-xs text-rose-600 dark:text-rose-400">{fabric.uses}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">3</span>
              </div>
              رەڭ پالىترىسى ۋە ئىپادىسى
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {colorPalettes.map((palette, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {palette.name}
                      </h4>
                      <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                        {palette.season}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                      {palette.colors.map((color, idx) => (
                        <div key={idx} className={`${color} w-12 h-12 rounded-lg`}></div>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-medium">ھېسسىياتى:</span> {palette.mood}
                    </p>
                    
                    <div className="text-sm text-gray-500">
                      مىسال: {palette.name === 'ئالتۇن-قىزىل' ? 'توي كىيىمى' : 
                             palette.name === 'يېشىل-كۆك' ? 'كۈندىلىك كىيىم' :
                             palette.name === 'سېرىق-كۆك' ? 'سەپەر كىيىمى' : 'رومانىك كىيىم'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="my-10 p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300">
                رەڭ قوللىنىش كەسپىيەتلىرى:
              </h4>
              <ul className="space-y-3 text-purple-700 dark:text-purple-200">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>ئاساسىي رەڭ: 60% (كىيىمنىڭ ئاساسىي قىسمى)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>تەكشى رەڭ: 30% (نەقىش ۋە زىننەت)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>ئۇچۇر رەڭ: 10% (ئەستايىدىلىك ئېلېمېنتلار)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 4-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">4</span>
              </div>
              مۇۋەپپەقىيەتلىك قىلمىشلار
            </h2>
            
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{story.icon}</div>
                      <div>
                        <h5 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                          {story.title}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400">
                          {story.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                        {story.result}
                      </div>
                      <div className="text-sm text-gray-500">مۇۋەپپەقىيەت دەرىجىسى</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* ئىستاتىستىكا */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 dark:from-rose-500/5 dark:to-pink-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-2">500+</div>
                <div className="text-gray-700 dark:text-gray-300">دىزايىن مىساللىرى</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-gray-700 dark:text-gray-300">خەلقئارا كۆرگەزمە</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 dark:from-purple-500/5 dark:to-violet-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">80%</div>
                <div className="text-gray-700 dark:text-gray-300">ياشلار قاتنىشىش نىسبىتى</div>
              </div>
            </div>
          </section>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-purple-500/10 dark:from-rose-500/5 dark:via-pink-500/5 dark:to-purple-500/5 rounded-2xl border border-rose-200/50 dark:border-rose-800/50">
            <h4 className="text-2xl font-bold mb-6 text-rose-800 dark:text-rose-300 flex items-center gap-3">
              <Crown className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-rose-700 dark:text-rose-200">
              <p>
                ئۇيغۇر كىيىم-كەچەكلىرى پەقەت تارىخىي كىيىملەر ئەمەس، زامانىۋى مودا لايىھىسىنىڭ گۈزەل مەنبەسىدۇر.
                بىز ئەنئەنىنى ساقلاپ، زامانىۋىلاشتۇرۇش يولىنى تۇتۇشىمىز كېرەك.
              </p>
              <p>
                ھەر بىر زامانىۋى كىيىم ئۇيغۇر نەقىش-ناۋىسىنىڭ يېڭى ھەرىكىتىدۇر. 
                بۇ پەقەت كىيىمنىڭ شەكلى ئۆزگەرىشى ئەمەس، بەلكى مەدەنىيەتنىڭ يېڭى دەۋردە ئىپادىلەش ئۇسۇلىدۇر.
              </p>
              <p className="font-medium">
                مودا ئۆتمەيدۇ، پەقەت ئۆزىنىڭ شەكلىنى ئۆزگەرتىدۇ. 
                ئۇيغۇر موداسىنىڭ كەلگۈسى، ئۇنىڭ ئەنئەنىسى بىلەن زامانىۋىلىكىنىڭ ھەممىرلىشىشىدۇر.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ئۇيغۇر موداسىنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ق</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white"> قاۋۇلجان</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">مودا لەھلەش ۋە مەدەنىيەت تەتقىقاتچىسى</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    liked 
                      ? 'bg-rose-500 text-white hover:bg-rose-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>لايىك ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2024 كەلبىل مودا لەھلەش مەركىزى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدىكى كىيىم لەيھەلىىرى ئەسلىي ھوقۇقلارغا ئىگە.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog05;