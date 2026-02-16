import React, { useState } from 'react';
import { 
  Building, 
  Compass, 
  Heart, 
  Share2, 
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Award,
  Globe,
  Map,
  Home,
  Ruler,
  Layers,
  Grid3x3,
  Eye,
  Target,
  Star
} from 'lucide-react';

const Blog07 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(267);
  const [activeArchitecture, setActiveArchitecture] = useState('mescit');
  
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
        title: 'ئۇيغۇر ئارخىتېكتۇرا سەنئىتى ۋە دىجىتال نەسىل',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  const architectureTypes = [
    {
      id: 'mescit',
      name: 'مەسچىت ئارخىتېكتۇراسى',
      description: 'گۇمبەز، مىنارە ۋە ئىيۋانلارنىڭ ھەممىرلىك تەرتىپى',
      features: ['گۇمبەز', 'مىنارە', 'ئىيۋان', 'تاش ئويما'],
      era: '9-16 ئەسىرلەر'
    },
    {
      id: 'medrese',
      name: 'مەدراسە ئارخىتېكتۇراسى',
      description: 'ھويلى ۋە ئائىلە چوڭ كەڭ بىنالارنىڭ تەرتىپلىك قۇرۇلمىسى',
      features: ['ھويلى', 'ئىيۋان', 'ھۇجرە', 'مەكتەپ'],
      era: '10-19 ئەسىرلەر'
    },
    {
      id: 'kervansaray',
      name: 'كارۋانساراي ئارخىتېكتۇراسى',
      description: 'سەپەرچىلەر ۋە سودىگەرلەر ئۈچۈن تۇتاش ئورۇنلار',
      features: ['ھويلى', 'ئامبار', 'تۇرۇش ئورنى', 'ئۆي'],
      era: '11-18 ئەسىرلەر'
    },
    {
      id: 'ev',
      name: 'ئۆي ئارخىتېكتۇراسى',
      description: 'ئائىلە تۇرۇش ئۆيلىرىنىڭ مەدەنىيەتكە ئۇيغۇن قۇرۇلمىسى',
      features: ['ئايۋان', 'ھويلى', 'ئۆي', 'باغ'],
      era: 'ھەممە دەۋرلەر'
    }
  ];

  const digitalTechnologies = [
    {
      icon: <Grid3x3 className="w-6 h-6" />,
      title: '3D مودېللاشتۇرۇش',
      description: 'بىنالارنى ئۈچ ئۆلچەملىك شەكىلدە قايتا يارىتىش',
      tools: ['Blender', 'Maya', 'SketchUp', 'Revit']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'VR/AR تەجرىبىسى',
      description: 'ۋىرتۇئال بىنا سەيرى ۋە تەجرىبىسى',
      tools: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore']
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: 'دىجىتال خەرىتە',
      description: 'تارىخىي بىنالارنىڭ دىجىتال خەرىتىسى',
      tools: ['GIS', 'Google Earth', 'Mapbox', 'ArcGIS']
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'بىنا مەلۇماتى مودېللىرى',
      description: 'بىنا مەلۇماتلىرىنى كۆپ قاتلاملىق مودېللاشتۇرۇش',
      tools: ['BIM', 'CAD', '3ds Max', 'AutoCAD']
    }
  ];

  const successStories = [
    {
      title: 'دىجىتال مۇزىيە',
      result: '100+ بىنا',
      description: 'تارىخىي بىنالارنى دىجىتال مۇزىيىدە ساقلاش',
      icon: '🏛️'
    },
    {
      title: 'ۋىرتۇئال سەير',
      result: '1M+ كۆرۈش',
      description: 'تارىخىي بىنالارنى ۋىرتۇئال شەكىلدە كۆرسىتىش',
      icon: '👁️'
    },
    {
      title: 'ياش قاتنىشىشى',
      result: '300% ئاشتى',
      description: 'ياشلارنىڭ ئارخىتېكتۇرا تارىخىغا قىزىقىشى',
      icon: '🎓'
    }
  ];

  const architecturalElements = [
    { element: 'گۇمبەز', function: 'ئاسمان بىلەن باغلىنىش', symbol: 'كۆك ئاسمان' },
    { element: 'مىنارە', function: 'دىنىي ئاڭلاشتۇرۇش', symbol: 'ئىمان ۋە ئىتائەت' },
    { element: 'ئىيۋان', function: 'ياز كۈنلىرى سايە', symbol: 'مېھرىبانلىق' },
    { element: 'ھويلى', function: 'ئائىلە ھاياتى', symbol: 'بىرلىك ۋە ھەممىرلىك' },
    { element: 'تاش ئويما', function: 'سەنئەت ۋە گۈزەللىك', symbol: 'مەدەنىيەت دەرىجىسى' }
  ];

  const preservationTechniques = [
    { technique: 'لازىر تەكشۈرۈش', accuracy: '99%', use: 'بىنا قۇرۇلمىسىنى تەكشۈرۈش' },
    { technique: '3D سىكانلاش', accuracy: '95%', use: 'بىنالارنى رەقەملىكلەشتۈرۈش' },
    { technique: 'دىجىتال ئارخىۋ', accuracy: '100%', use: 'مەلۇماتلارنى مەڭگۈلۈك ساقلاش' },
    { technique: 'VR قايتا قۇرۇش', accuracy: '90%', use: 'يوقىلىپ قالغان بىنالارنى قايتا ياساش' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 dark:from-gray-900 dark:to-stone-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 dark:bg-stone-900/30 rounded-full mb-6">
            <Building className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
              ئارخىتېكتۇرا ۋە مەدەنىيەت
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇر ئارخىتېكتۇرا سەنئىتى{' '}
            <span className="bg-gradient-to-r from-stone-600 to-amber-600 bg-clip-text text-transparent">
              ۋە دىجىتال نەسىل
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ئۇيغۇر ئارخىتېكتۇرا سەنئىتىنى دىجىتال تېخنىكا ئارقىلىق قانداق ساقلاش ۋە تەرەققىي قىلدۇرۇش مۇمكىن؟
            بىز ئەنئەنىۋى بىنالارنى قانداق زامانىۋى دۇنياغا يەتكۈزەلەيمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-stone-500 to-amber-500 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <span>ئاپتۇر: قاۋۇلجان </span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 1-ئاينىڭ 15-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>9 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* بىنا كۆرسىتىش */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">3D مەسچىت مودېلى</h4>
                  <p className="text-gray-600 dark:text-gray-400">تارىخىي مەسچىتنىڭ دىجىتال قايتا يارىتىلىشى</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-stone-600 dark:text-stone-400">٪100</div>
                    <div className="text-sm text-gray-500">دەقلىق دەرىجىسى</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-stone-500 to-amber-500 text-white rounded-lg hover:from-stone-600 hover:to-amber-600 transition-all">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-stone-100 to-amber-100 dark:from-stone-900/20 dark:to-amber-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">ماتېرىيال</div>
                  <div className="font-bold text-gray-900 dark:text-white">خەش، تاش، كىرپىچ</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">ئىشلەش ۋاقتى</div>
                  <div className="font-bold text-gray-900 dark:text-white">120 كۈن</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">پولىگون سانى</div>
                  <div className="font-bold text-gray-900 dark:text-white">5M+</div>
                </div>
              </div>
              
              <div className="relative h-48 bg-gradient-to-br from-stone-500/20 via-amber-500/20 to-orange-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🕌</div>
                    <div className="text-gray-700 dark:text-gray-300">دىجىتال ئارخىتېكتۇرا</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">VR تەجرىبىسى قوللىنىلىدۇ</span>
                  </div>
                  <div className="text-sm text-gray-500">360° كۆرۈنۈش</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-stone-600 to-amber-600 p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Compass className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ۋىرتۇئال سەير</h3>
                <p className="text-stone-100">تارىخىي بىنالارنى ۋىرتۇئال شەكىلدە كۆرۈش</p>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                    <span className="text-white">VR قوشۇش</span>
                    <Eye className="w-4 h-4 text-blue-300" />
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
            <div className="bg-gradient-to-r from-stone-500/10 to-amber-500/10 dark:from-stone-500/5 dark:to-amber-500/5 p-8 rounded-2xl border border-stone-200 dark:border-stone-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                نىمە ئۈچۈن ئۇيغۇر ئارخىتېكتۇراسى؟
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ئۇيغۇر ئارخىتېكتۇراسى پەقەت بىنا ئەمەس، مەدەنىيەت، تارىخ ۋە ئىجتىمائىي تۈزۈلۈشنىڭ جانلىق ئىپادىسى. 
                بۇ ئەنئەنىۋى بىنالارنى زامانىۋى تېخنىكا ئارقىلىق ساقلاش، مەدەنىيەتنى ساقلاشنىڭ ئەڭ مۇھىم يوللىرىنىڭ بىرى.
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-stone-100 dark:bg-stone-900/30 rounded-lg flex items-center justify-center">
                <span className="text-stone-600 dark:text-stone-400 font-bold text-xl">1</span>
              </div>
              ئۇيغۇر ئارخىتېكتۇرا تۈرلىرى
            </h2>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-6">
                {architectureTypes.map(arch => (
                  <button
                    key={arch.id}
                    onClick={() => setActiveArchitecture(arch.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeArchitecture === arch.id
                        ? 'bg-gradient-to-r from-stone-500 to-amber-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {arch.name}
                  </button>
                ))}
              </div>
              
              {architectureTypes.map(arch => (
                activeArchitecture === arch.id && (
                  <div 
                    key={arch.id} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-4"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`w-full md:w-1/3 h-48 rounded-lg bg-gradient-to-br from-stone-400 to-amber-500 flex items-center justify-center`}>
                        <div className="text-6xl">
                          {arch.id === 'mescit' ? '🕌' : 
                           arch.id === 'medrese' ? '🏫' : 
                           arch.id === 'kervansaray' ? '🏨' : '🏠'}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {arch.name}
                          </h4>
                          <div className="text-center">
                            <div className="text-sm text-gray-500">دەۋرى</div>
                            <div className="font-bold text-amber-600">{arch.era}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {arch.description}
                        </p>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">ئالاھىدىلىكلىرى:</div>
                          <div className="flex flex-wrap gap-2">
                            {arch.features.map((feature, idx) => (
                              <span key={idx} className="px-3 py-1 bg-stone-100 dark:bg-stone-900/30 text-stone-700 dark:text-stone-300 rounded-full text-sm">
                                {feature}
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
          </section>

          {/* 2-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">2</span>
              </div>
              دىجىتال ساقلاش تېخنىكىلىرى
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {digitalTechnologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-stone-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {tech.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                        {tech.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* ئارخىتېكتۇرا ئېلېمېنتلىرى */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                ئارخىتېكتۇرا ئېلېمېنتلىرى ۋە مەنىلىرى
              </h4>
              <div className="bg-gradient-to-br from-stone-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {architecturalElements.map((element, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-stone-400 to-amber-400 flex items-center justify-center mx-auto mb-2`}>
                        <span className="text-white font-bold">{element.element.charAt(0)}</span>
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">{element.element}</div>
                      <div className="text-sm text-gray-500">{element.function}</div>
                      <div className="text-xs text-amber-600 dark:text-amber-400 mt-1">{element.symbol}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">3</span>
              </div>
              ساقلاش تېخنىكىلىرى ۋە دەقلىق دەرىجىسى
            </h2>
            
            <div className="space-y-6">
              {preservationTechniques.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h5 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                        {tech.technique}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        {tech.use}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {tech.accuracy}
                      </div>
                      <div className="text-sm text-gray-500">دەقلىق دەرىجىسى</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* ئىستاتىستىكا */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="bg-gradient-to-br from-stone-500/10 to-amber-500/10 dark:from-stone-500/5 dark:to-amber-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-stone-600 dark:text-stone-400 mb-2">100+</div>
                <div className="text-gray-700 dark:text-gray-300">دىجىتاللاشتۇرۇلغان بىنا</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-gray-700 dark:text-gray-300">VR تەجرىبىسى</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10TB</div>
                <div className="text-gray-700 dark:text-gray-300">دىجىتال سانلىق-مەلۇمات</div>
              </div>
            </div>
          </section>

          {/* 4-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">4</span>
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
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        {story.result}
                      </div>
                      <div className="text-sm text-gray-500">مۇۋەپپەقىيەت دەرىجىسى</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-stone-500/10 via-amber-500/10 to-orange-500/10 dark:from-stone-500/5 dark:via-amber-500/5 dark:to-orange-500/5 rounded-2xl border border-stone-200/50 dark:border-stone-800/50">
            <h4 className="text-2xl font-bold mb-6 text-stone-800 dark:text-stone-300 flex items-center gap-3">
              <Building className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-stone-700 dark:text-stone-200">
              <p>
                ئۇيغۇر ئارخىتېكتۇراسى پەقەت بىنا ئەمەس، مەدەنىيەتنىڭ جانلىق تەرجىمانى. 
                بۇ ئەنئەنىۋى بىنالارنى رەقەملىك دۇنياغا ساقلاش، مەدەنىيەتنى ساقلاشنىڭ ئەڭ مۇھىم يوللىرىنىڭ بىرى.
              </p>
              <p>
                ھەر بىر بىنا ئۇيغۇر مەدەنىيىتىنىڭ ھېكايەسىنى سۆزلەيدۇ. 
                بۇ پەقەت بىنالارنى ساقلاش ئەمەس، بەلكى تارىخ ۋە مەدەنىيەتنىڭ يېڭى دەۋردە ئىپادىلەش ئۇسۇلىدۇر.
              </p>
              <p className="font-medium">
                بىنا ئۆلمەيدۇ، پەقەت ئۆزىنىڭ شەكلىنى ئۆزگەرتىدۇ. 
                ئۇيغۇر ئارخىتېكتۇراسىنىڭ كەلگۈسى، ئۇنىڭ ئەنئەنىسى بىلەن زامانىۋىلىكىنىڭ ھەممىرلىشىشىدۇر.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ئۇيغۇر ئارخىتېكتۇراسىنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-stone-500 to-amber-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ق</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white"> قاۋۇلجان</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">ئارخىتېكتور ۋە مەدەنىيەت تەتقىقاتچىسى</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    liked 
                      ? 'bg-amber-500 text-white hover:bg-amber-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>لايىك ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-gradient-to-r from-stone-500 to-amber-500 text-white rounded-lg hover:from-stone-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2024 كەلبىل ئارخىتېكتۇرا مەدەنىيىتى فوندى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدىكى بىنا مودېللىرى ئەسلىي ھوقۇقلارغا ئىگە.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog07;