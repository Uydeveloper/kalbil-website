import React, { useState } from 'react';
import { 
  Palette, 
  Brush, 
  Eye, 
  Share2, 
  Heart, 
  Play, 
  Pause,
  Download,
  Globe,
  Smartphone,
  Cpu,
  Users,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  Video,
  Zap,
  Grid3x3,
  Layers,
  Sparkles
} from 'lucide-react';

const Blog03 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(89);
  const [isPlaying, setIsPlaying] = useState(false);
  
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
        title: 'ئۇيغۇر رەسساملىق سەنئىتىنىڭ يېڭى دەۋرى',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  const digitalTechnologies = [
    {
      icon: <Grid3x3 className="w-6 h-6" />,
      title: '3D مودېللاشتۇرۇش',
      description: 'نەقىشلەرنى ئۈچ ئۆلچەملىك شەكىلدە ھەرىكەتلەندۈرۈش',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'VR/AR تېخنىكىسى',
      description: 'ۋىرتۇئال مەدەنىيەت سەيرى تەجرىبىسى',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI ئىجادىيىتى',
      description: 'يېڭى نەقىش ئۇسلۇبلىرى ۋە مۆتىۋەرلەر',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'ئىنتراكتىپ ۋىدېئو',
      description: 'تارىخىي ۋەقەلەرنى جانلىق ھېكايە قىلىش',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const colorMeanings = [
    { 
      name: 'ئالتۇن',
      color: 'bg-gradient-to-r from-yellow-400 to-amber-500',
      meaning: 'مۇقەددەسلىك، نور، مۇكەممەللىك',
      examples: 'ئىلىك-بېشىك نەقىشلىرى'
    },
    { 
      name: 'لاجۋەرد',
      color: 'bg-gradient-to-r from-blue-600 to-purple-600',
      meaning: 'كۆك ئاسمان، ئۇلۇغلۇق، چوڭقۇرلۇق',
      examples: 'مەسچىت گۇمبەزلىرى'
    },
    { 
      name: 'قىزىل',
      color: 'bg-gradient-to-r from-red-500 to-pink-500',
      meaning: 'ھايات، مۇھەببەت، جاسارەت',
      examples: 'توي-تۆكۈن نەقىشلىرى'
    },
    { 
      name: 'يېشىل',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      meaning: 'تۇغقانلىق، بەخت-سائادەت، تىنچلىق',
      examples: 'باغ-روۋەن سىمۋوللىرى'
    }
  ];

  const patterns = [
    {
      name: 'گۈل نەقىشى',
      description: 'گۈللەرنىڭ سىممېترىيەلىك تەكرارلانمىسى',
      complexity: 'ئوتتۇرا',
      uses: 'بىنا زىننىتى، كىيىم-كەچەك'
    },
    {
      name: 'ھەرىسە نەقىشى',
      description: 'گېئومېتىرىيەلىك شەكىللەرنىڭ مۇناسىۋەتلىك تەرتىپى',
      complexity: 'يۇقىرى',
      uses: 'مەسچىت، مەدراسە دېۋارلىرى'
    },
    {
      name: 'بۇلۇت نەقىشى',
      description: 'بۇلۇت ۋە سۇ ئېقىش شەكىللىرى',
      complexity: 'ئادەتتىكى',
      uses: 'ئىشقاپ، سەندۈك، ئۆي جۈشلەرى'
    },
    {
      name: 'ھەيۋان نەقىشى',
      description: 'قۇش ۋە ھايۋانلارنىڭ سىمۋوللۇق شەكىللىرى',
      complexity: 'ئوتتۇرا',
      uses: 'ئەسكىرىي جۈشلەر، بەدەلۋەلەر'
    }
  ];

  const successStories = [
    {
      title: 'دىجىتال نەقىش مۇزىيىسى',
      result: 'VR تەجرىبىسى',
      description: 'نەقىشلەرنى ۋىرتۇئال ھەقىقىي مۇزىيەدە كۆرسىتىش',
      icon: '🎨'
    },
    {
      title: 'توك تۇرۇبتا سەنئەت',
      result: '1M+ كۆرۈش',
      description: 'نەقىش ياساش جەريانىنى توك تۇرۇبتا كۆرسىتىش',
      icon: '📱'
    },
    {
      title: 'NFT سەنئەت بازارى',
      result: '50+ خوجا',
      description: 'دىجىتال نەقىشلەرنى NFT شەكىلدە سېتىش',
      icon: '💎'
    }
  ];

  const modernApplications = [
    {
      title: 'ئىشلەپچىقىرىش مۇھىتى',
      items: ['UI/UX دىزايىن', 'پاكىت ۋە لوگو', 'ئىچكى بېزەش']
    },
    {
      title: 'مەدەنىيەت تارقىتىش',
      items: ['توك تۇرۇب ۋىدېئولارى', 'ئىچىملىك پاكىتلىرى', 'كىيىم-كەچەك دىزايىنى']
    },
    {
      title: 'تەربىيە ۋە ئۆگىنىش',
      items: ['ئىنتېرئاكتىپ دىرسلەر', 'سەنئەت ئەپلىرى', 'ۋىرتۇئال مۇزىيە سەيرى']
    }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6">
            <Palette className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              سەنئەت ۋە تېخنولوگىيە
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇر رەسساملىق سەنئىتىنىڭ{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              يېڭى دەۋرى
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            دىجىتال تېخنىكا ئۇيغۇر رەسساملىق سەنئىتىگە يېڭى ھايات بەردى. بىز قەدىمكى نەقىش-ناۋا ئېلېمېنتلىرىنى 
            قانداق زامانىۋى دىجىتال سەنئەتكە ئايلاندۇرالايمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <span>ئاپتۇر:  قاۋۇلجان</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 2-ئاينىڭ 5-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>6 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* 3D نەقىش كۆرسىتىش */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">3D نەقىش: گۈل-بۇلاق</h4>
                  <p className="text-gray-600 dark:text-gray-400">ئەنئەنىۋى نەقىشنىڭ دىجىتال ۋەرتىيەسى</p>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all flex items-center gap-2"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>3D كۆرۈنۈش</span>
                  </button>
                  <button className="p-2 text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">نەقىش تۈرى</div>
                  <div className="font-bold text-gray-900 dark:text-white">گۈل-بۇلاق</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">ئىشلەش ۋاقتى</div>
                  <div className="font-bold text-gray-900 dark:text-white">48 سائەت</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">تېخنىكا</div>
                  <div className="font-bold text-gray-900 dark:text-white">Blender + AI</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">ھەجىم</div>
                  <div className="font-bold text-gray-900 dark:text-white">256MB 3D</div>
                </div>
              </div>
              
              <div className="relative h-48 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <div className="text-gray-700 dark:text-gray-300">3D نەقىش ئايرىمى</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">ئاكتىپ ھالەتتە</span>
                  </div>
                  <div className="text-sm text-gray-500">360° ئايلاندۇرۇش</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-amber-600 to-orange-600 p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">دىجىتال سەنئەت</h3>
                <p className="text-amber-100">ئەنئەنىۋى نەقىشنىڭ يېڭى ۋەرتىيەسى</p>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                    <span className="text-white">AR قوشۇش</span>
                    <Zap className="w-4 h-4 text-yellow-300" />
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
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5 p-8 rounded-2xl border border-amber-200 dark:border-amber-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                دىجىتال سەنئەتتىكى مۇۋەپپەقىيەت سىرى
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ئۇيغۇر نەقىش-ناۋىسى پەقەت بىنا دېۋارلىرىدىلا ئەمەس، دىجىتال دۇنيانىڭ ھەر قايسى ساھەلىرىدە 
                گۈزەللىك ۋە مەنىگە ئىگە. بۇ سەنئەتنى ھەرىكەتلەندۈرۈش، ئاۋازلاندۇرۇش ۋە 
                توقۇنۇشچان قىلىش ئارقىلىق ياش نەسىللەر بىلەن باغلىنىشىمىز مۇمكىن.
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">1</span>
              </div>
              دىجىتال نەقىش-ناۋا تېخنىكىلىرى
            </h2>
            
            <p className="text-lg mb-6">
              ئەنئەنىۋى نەقىشلەرنى دىجىتال شەكىلدە قايتا يارىتىش:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
              {digitalTechnologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {tech.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {tech.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="my-10 p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-amber-800 dark:text-amber-300">ئەمەلىي مىسال:</h4>
                  <p className="text-amber-700 dark:text-amber-200 mb-4">
                    ئۇيغۇر نەقىشلىرىنى ئىنتراكتىپ دىجىتال سەنئەت قىلىپ، تۇرۇبتا ئارقىلىق ياشلارغا تونۇشتۇرۇش.
                    ھەر بىر نەقىش ئۇچۇن ئارقىدا قىسقىچە ۋىدېئو تارىخى كۆرسىتىلىدۇ.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
                      نەتىجە: 300% كۆپىيگەن قىزىقىش
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xl">2</span>
              </div>
              رەڭلەرنىڭ دىجىتال ئىپادىسى
            </h2>
            
            <p className="text-lg mb-8">
              ئۇيغۇر رەسساملىقىدا رەڭلەرنىڭ ئالاھىدە مەنىلىرى بار:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {colorMeanings.map((color, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`h-3 ${color.color}`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {color.name} رەڭى
                      </h4>
                      <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                        دىجىتال كودى
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-medium">مەنىسى:</span> {color.meaning}
                    </p>
                    <div className="mb-4">
                      <span className="font-medium text-sm text-gray-500">قوللىنىش مىساللىرى:</span>
                      <p className="text-gray-700 dark:text-gray-300">{color.examples}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: index === 0 ? '#FBBF24' : index === 1 ? '#4F46E5' : index === 2 ? '#EF4444' : '#10B981' }}></div>
                        <span className="text-gray-500">RGB مۇناسىۋىتى</span>
                      </div>
                      <div className="font-mono text-gray-600 dark:text-gray-400">
                        {index === 0 ? '#FBBF24' : index === 1 ? '#4F46E5' : index === 2 ? '#EF4444' : '#10B981'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* نەقىش تۈرلىرى */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                ئاساسلىق نەقىش تۈرلىرى
              </h4>
              <div className="space-y-4">
                {patterns.map((pattern, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h5 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                          {pattern.name}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {pattern.description}
                        </p>
                        <div className="text-sm text-gray-500">{pattern.uses}</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-500">مۇرەككەپلىكى</div>
                          <div className="font-bold text-amber-600 dark:text-amber-400">{pattern.complexity}</div>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 text-sm">
                          كۆرۈش
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">3</span>
              </div>
              مۇۋەپپەقىيەتلىك لائىھىلەر
            </h2>
            
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{story.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        <h5 className="font-bold text-lg text-gray-900 dark:text-white">
                          {story.title}
                        </h5>
                        <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                          {story.result}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* قوللىنىش ساھەلىرى */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                زامانىۋى قوللىنىش ساھەلىرى
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modernApplications.map((app, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <h5 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                      {app.title}
                    </h5>
                    <ul className="space-y-2">
                      {app.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">4</span>
              </div>
              ياش سەنئەتچىلەرگە تەۋسىيەلەر
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl">
                  <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">تېخنىكىنى ئۆگىنىش</h5>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>3D مودېللاشتۇرۇش پروگراممىلىرى (Blender, Maya)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>دىجىتال رەسساملىق ئەسۋابلىرى (Procreate, Photoshop)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>AI سەنئەت تولۇقلايدىغانلار (Midjourney, Stable Diffusion)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-xl">
                  <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">سەنئەت بازارى</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    دىجىتال سەنئەت ئەسەرلىرىڭىزنى قانداق سېتىشقا بولىدۇ:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      NFT بازارلىرى
                    </span>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                      دىجىتال ئىگىلىك
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      ئىجتىمائىي تاراتقۇلار
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-6 rounded-xl">
                  <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">مەدەنىيەت ساقلاش</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    سەنئەت ئارقىلىق مەدەنىيەتنى قانداق ساقلاپ ۋە تارقىتىشقا بولىدۇ:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">خەلقئارا سەنئەت كۆرگەزمىلىرى</div>
                        <div className="text-sm text-gray-500">دىجىتال گالېرىيەلەر</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">ئىجتىمائىي تاراتقۇ قۇرۇش</div>
                        <div className="text-sm text-gray-500">مەدەنىيەت ۋە سەنئەت ھەمكارلىقى</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 dark:from-amber-500/5 dark:via-orange-500/5 dark:to-red-500/5 rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
            <h4 className="text-2xl font-bold mb-6 text-amber-800 dark:text-amber-300 flex items-center gap-3">
              <Palette className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-amber-700 dark:text-amber-200">
              <p>
                دىجىتال سەنئەت ئارقىلىق ئۇيغۇر رەسساملىق سەنئىتىنى ساقلاش ۋە تارقىتىش مۇمكىن.
                بۇ پەقەت تېخنىكىنى قوللىنىش ئەمەس، بەلكى مەدەنىيەتنى يېڭى دەۋرگە ماسلاشتۇرۇش.
              </p>
              <p>
                ھەر بىر ياش سەنئەتچى بۇ مىراسنى ئۆگىنىپ، ئۆز ئىجادىيىتى بىلەن بىرلەشتۈرۈپ، 
                يېڭى ۋە ئۆزىگە خاس ئۇسلۇب يارىتالايدۇ.
              </p>
              <p className="font-medium">
                سەنئەت ھەرگىز ئۆلمەيدۇ، پەقەت شەكىل ئۆزگەرىدۇ. بىزنىڭ ۋەزىپىمىز 
                بۇ گۈزەل شەكىللەرنى يېڭى دەۋرگە ماسلىشىدىغان شەكىللەرگە ئايلاندۇرۇش.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ئۇيغۇر سەنئىتىنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ق</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white"> قاۋۇلجان</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">دىجىتال سەنئەتچى ۋە مەدەنىيەت ئىزدەنگۇچى</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    liked 
                      ? 'bg-orange-500 text-white hover:bg-orange-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>لايىك ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2024 كەلنىل دىجىتال سەنئەت فوندى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدا كۆرسىتىلگەن سەنئەت ئەسەرلىرى ئەسلىي ھوقۇقلارغا ئىگە.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog03;