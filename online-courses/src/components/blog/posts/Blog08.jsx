import React, { useState } from 'react';
import { 
  Smartphone, 
  Code, 
  Heart, 
  Share2, 
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Award,
  Globe,
  Download,
  Cpu,
  Shield,
  Rocket,
  Star,
  Target,
  Smartphone as PhoneIcon,
  AppWindow
} from 'lucide-react';

const Blog08 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(234);
  const [activeCategory, setActiveCategory] = useState('education');
  
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
        title: 'ئۇيغۇرچە ئەپلەرنىڭ تەرەققىياتى ۋە كەلگۈسى',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  const appCategories = [
    {
      id: 'education',
      name: 'مائارىپ ئەپلىرى',
      description: 'ئۇيغۇرچە ئۆگىنىش ۋە تەربىيە ئەپلىرى',
      examples: ['تىل ئۆگىنىش', 'تىل تەھلىلى', 'مەدەنىيەت دىرسلىرى'],
      growth: '200%'
    },
    {
      id: 'culture',
      name: 'مەدەنىيەت ئەپلىرى',
      description: 'ئۇيغۇر مەدەنىيىتىنى تونۇشتۇرىدىغان ئەپلەر',
      examples: ['مۇزىكا مۇزىيىسى', 'سەنئەت گالېرىيەسى', 'تارىخ تونۇشتۇرۇش'],
      growth: '150%'
    },
    {
      id: 'commerce',
      name: 'سودا ئەپلىرى',
      description: 'ئۇيغۇرچە سودا ۋە سېتىش ئەپلىرى',
      examples: ['تور دۇكىنى', 'ئىسپات بېكەت', 'ئې-تىجارەت'],
      growth: '300%'
    },
    {
      id: 'social',
      name: 'ئىجتىمائىي ئەپلەر',
      description: 'ئۇيغۇرچە ئىجتىمائىي ئالاقە ئەپلىرى',
      examples: ['مەسلىھەت ئەپى', 'ھەمكارلىق سۇپىسى', 'خەۋەر ئەپى'],
      growth: '180%'
    }
  ];

  const technologies = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'ئۇيغۇرچە NLP',
      description: 'تەبىئىي تىل بىر تەرەپ قىلىش تېخنىكىسى',
      progress: 85
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI ۋە ماشىنا ئۆگىنىش',
      description: 'ئۇيغۇرچە AI مودېللىرىنىڭ تەرەققىياتى',
      progress: 70
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'بىخەتەرلىك سىستېمىسى',
      description: 'ئۇيغۇرچە ئەپلەرنىڭ بىخەتەرلىكى',
      progress: 90
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'رېسپۇنسىپ دىزايىن',
      description: 'ھەر خىل قوراللارغا ماسلىشىش',
      progress: 95
    }
  ];

  const successStories = [
    {
      title: 'ئۇيغۇرچە تىل ئەپى',
      result: '500K+ چۈشۈرۈش',
      description: 'ئۇيغۇرچە تىل ئۆگىنىش ئەپىنىڭ مۇۋەپپەقىيىتى',
      icon: '📚'
    },
    {
      title: 'مەدەنىيەت مۇزىيىسى',
      result: '1M+ كۆرۈش',
      description: 'ئۇيغۇر مەدەنىيىتىنى تونۇشتۇرىدىغان ئەپ',
      icon: '🎨'
    },
    {
      title: 'تور دۇكىنى',
      result: '10K+ ئىشلەتكۈچى',
      description: 'ئۇيغۇرچە تور سېتىش ئەپى',
      icon: '🛒'
    }
  ];

  const appStatistics = [
    { metric: 'ئومۇمىي ئەپ سانى', value: '500+', change: '+45%' },
    { metric: 'ئايلىق چۈشۈرۈش', value: '1M+', change: '+60%' },
    { metric: 'ئاكتىپ ئىشلەتكۈچى', value: '200K+', change: '+35%' },
    { metric: 'ئاپتور سانى', value: '1000+', change: '+50%' }
  ];

  const challenges = [
    { challenge: 'تېخنىكىلىق كادىر', solution: 'تېخنىكا تەربىيەلەش لايىھىسى' },
    { challenge: 'مەزمۇن زاپاسلىمىسى', solution: 'مەزمۇن يارىتىش ھەمكارلىقى' },
    { challenge: 'بازارلاشتۇرۇش', solution: 'ئىجتىمائىي تاراتقۇ قوللىنىش' },
    { challenge: 'مالىيە مەنبەسى', solution: 'گرانت ۋە ھەمكارلىق تەمىنلەش' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              تېخنىكا ۋە ئەپ تەرەققىياتى
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇرچە ئەپلەرنىڭ{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              تەرەققىياتى ۋە كەلگۈسى
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ئۇيغۇرچە ئەپلەرنىڭ تەرەققىيات خەرىتىسى ۋە كەلگۈسىدىكى ئىمكانىيەتلەر.
            بىز قانداق قىلىپ ئۇيغۇرچە ئەپلەرنى تەرەققىي قىلدۇرۇپ، دۇنياغا تونۇتالايمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <span>ئاپتۇر:  قاۋۇلجان</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 3-ئاينىڭ 1-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* ئەپ كۆرسىتىش */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">ئۇيغۇرچە مائارىپ ئەپى</h4>
                  <p className="text-gray-600 dark:text-gray-400">ئۇيغۇرچە تىل ۋە مەدەنىيەت ئۆگىنىش ئەپى</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">٪4.8</div>
                    <div className="text-sm text-gray-500">ئەپ باھاسى</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">ئىشلەتكۈچى</div>
                  <div className="font-bold text-gray-900 dark:text-white">500K+</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">دەرس سانى</div>
                  <div className="font-bold text-gray-900 dark:text-white">100+</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">تىل قوللىنىشى</div>
                  <div className="font-bold text-gray-900 dark:text-white">3+</div>
                </div>
              </div>
              
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-gray-700 dark:text-gray-300">ئۇيغۇرچە ئەپ تەرەققىياتى</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">ئاكتىپ تەرەققىيات</span>
                  </div>
                  <div className="text-sm text-gray-500">رېسپۇنسىپ دىزايىن</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <AppWindow className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ئۇيغۇرچە ئەپ</h3>
                <p className="text-blue-100">تىل ۋە مەدەنىيەتنىڭ يېڭى ئىپادىسى</p>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                    <span className="text-white">AI قوشۇش</span>
                    <Cpu className="w-4 h-4 text-green-300" />
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
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                نىمە ئۈچۈن ئۇيغۇرچە ئەپلەر؟
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ئۇيغۇرچە ئەپلەر پەقەت تېخنىكىلىق مەھسۇلات ئەمەس، تىل ۋە مەدەنىيەتنىڭ جانلىق ئىپادىسى. 
                بۇ ئەپلەرنى تەرەققىي قىلدۇرۇش، ئۇيغۇر تىلى ۋە مەدەنىيىتىنى ساقلاشنىڭ ئەڭ زامانىۋى يوللىرىنىڭ بىرى.
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
              </div>
              ئەپ تۈرلىرى ۋە تەرەققىياتى
            </h2>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-6">
                {appCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {appCategories.map(category => (
                activeCategory === category.id && (
                  <div 
                    key={category.id} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-4"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`w-full md:w-1/3 h-48 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center`}>
                        <div className="text-6xl">
                          {category.id === 'education' ? '📚' : 
                           category.id === 'culture' ? '🎨' : 
                           category.id === 'commerce' ? '🛒' : '👥'}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {category.name}
                          </h4>
                          <div className="text-center">
                            <div className="text-sm text-gray-500">ئۆسۈش نىسبىتى</div>
                            <div className="font-bold text-green-600">{category.growth}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {category.description}
                        </p>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">مىساللىرى:</div>
                          <div className="flex flex-wrap gap-2">
                            {category.examples.map((example, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                                {example}
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
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">2</span>
              </div>
              تېخنىكىلىق ئىمكانىيەتلەر
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
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
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">تەرەققىيات</span>
                      <span className="font-bold">{tech.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* ئىستاتىستىكا */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                ئۇيغۇرچە ئەپ ئىستاتىستىكىسى
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {appStatistics.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mb-1">{stat.metric}</div>
                    <div className="text-xs text-green-500">{stat.change}</div>
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
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        {story.result}
                      </div>
                      <div className="text-sm text-gray-500">مۇۋەپپەقىيەت دەرىجىسى</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">4</span>
              </div>
              چەلگىلەر ۋە ھەل قىلىش يوللىرى
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
                >
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">چەلگە:</div>
                    <div className="font-bold text-gray-900 dark:text-white">{item.challenge}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">ھەل قىلىش يۇلى:</div>
                    <div className="font-medium text-blue-600 dark:text-blue-400">{item.solution}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* كەلگۈسى پىلانلار */}
            <div className="my-10 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">كەلگۈسى پىلانلار</h4>
              <div className="space-y-3 text-blue-700 dark:text-blue-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ئۇيغۇرچە AI مودېللىرىنى كېڭەيتىش</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ئۇيغۇرچە ئەپ تەرەققىياتچىلىرىنى تەربىيەلەش</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ئۇيغۇرچە ئەپ ماركىلىرىنى يارىتىش</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>خەلقئارا بازارغا كىرىش</span>
                </div>
              </div>
            </div>
          </section>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
            <h4 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-300 flex items-center gap-3">
              <Smartphone className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-blue-700 dark:text-blue-200">
              <p>
                ئۇيغۇرچە ئەپلەر پەقەت تېخنىكىلىق مەھسۇلات ئەمەس، تىل ۋە مەدەنىيەتنىڭ جانلىق تەرجىمانى. 
                بۇ ئەپلەرنى تەرەققىي قىلدۇرۇش، ئۇيغۇر تىلى ۋە مەدەنىيىتىنى ساقلاشنىڭ ئەڭ زامانىۋى يوللىرىنىڭ بىرى.
              </p>
              <p>
                ھەر بىر ئەپ ئۇيغۇر تىلى ۋە مەدەنىيىتىنىڭ يېڭى دەۋردىكى ئىپادىسى. 
                بۇ پەقەت تېخنىكا ئەمەس، بەلكى تارىخ ۋە مەدەنىيەتنىڭ يېڭى دەۋردە ئىپادىلەش ئۇسۇلىدۇر.
              </p>
              <p className="font-medium">
                ئەپلەر ئۆتمەيدۇ، پەقەت ئۆزىنىڭ شەكلىنى ئۆزگەرتىدۇ. 
                ئۇيغۇرچە ئەپلەرنىڭ كەلگۈسى، ئۇنىڭ ئەنئەنىسى بىلەن زامانىۋىلىكىنىڭ ھەممىرلىشىشىدۇر.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ئۇيغۇرچە ئەپلەرنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">س</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white"> قاۋۇلجان</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">تېخنىكا ۋە ئەپ تەرەققىياتچىسى</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    liked 
                      ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>لايىك ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2024 كەلبىل ئەپ تەرەققىيات مەركىزى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدىكى ئەپ ئۇچۇرلىرى ئەسلىي ھوقۇقلارغا ئىگە.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog08;