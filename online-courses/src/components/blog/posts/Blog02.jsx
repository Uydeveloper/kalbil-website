import React, { useState } from 'react';
import { 
  Music, 
  Headphones, 
  Volume2, 
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
  CheckCircle
} from 'lucide-react';

const Blog02 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
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
        title: 'ئۇيغۇر مۇزىكىسىنىڭ رەقەملىك ئەۋلادى',
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
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI ئاۋاز سۈزۈش',
      description: 'يۇمشاق ئۆرلەنگەن كونا ئاۋازلارنى يېڭىلاش',
      stats: '95% ساپلىق ئاشۇرۇش'
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: '3D ئاۋاز مۇھىتى',
      description: 'ۋىرتۇئال ھەقىقىي مۇزىكا تەجرىبىسى',
      stats: '360° ئاۋاز سىستېمىسى'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'خەلقئارا ئالماشتۇرۇش',
      description: 'دۇنيا مۇزىكاچىلىرى بىلەن ھەمكارلىشىش',
      stats: '50+ دۆلەت بىلەن ھەمكارلىشىش'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'موبىيل ئەپ',
      description: 'ئۇيغۇر مۇزىكىسى خاس ئەپ ياساش',
      stats: '100K+ چۈشۈرۈش'
    }
  ];

  const musicGenres = [
    {
      name: 'مۇقام',
      color: 'from-purple-500 to-pink-500',
      description: 'كىلاسسىك ئۇيغۇر مۇقاملىرى',
      count: '12 بۈيۈك مۇقام'
    },
    {
      name: 'داستان',
      color: 'from-amber-500 to-orange-500',
      description: 'دىستانچىلىق ۋە رىۋايەت مۇزىكىسى',
      count: '50+ داستان'
    },
    {
      name: 'يېڭى مۇزىكا',
      color: 'from-blue-500 to-cyan-500',
      description: 'زامانىۋى ئۇسلۇبتىكى يېڭى ئەسەرلەر',
      count: '1000+ يېڭى ئەسەر'
    },
    {
      name: 'خەلق ناخشىسى',
      color: 'from-green-500 to-emerald-500',
      description: 'رايونلۇق خەلق ناخشىلىرى',
      count: '300+ ناخشا'
    }
  ];

  const successStories = [
    {
      title: 'مۇقام دىجىتال مۇزىيىسى',
      result: '100% ساقلاندى',
      description: 'بارلىق مۇقاملارنىڭ يۇقىرى سۈپەتلىك رەقەملىك نۇسخىسى'
    },
    {
      title: 'ياش نەسىل قاتنىشىشى',
      result: '300% ئاشتى',
      description: 'ياشلارنىڭ ئۇيغۇر مۇزىكىسىغا قىزىقىشى'
    },
    {
      title: 'خەلقئارا تونۇش',
      result: '50+ دۆلەت',
      description: 'خەلقئارا مۇزىكا سوۋېتلەرىدە كۆرسىتىلۈش'
    }
  ];

  const instruments = [
    { name: 'تەمبۇر', icon: '🎸', category: 'تار ساز' },
    { name: 'ساتار', icon: '🎻', category: 'تار ساز' },
    { name: 'راۋاپ', icon: '🎵', category: 'تار ساز' },
    { name: 'دۇتار', icon: '🎶', category: 'تار ساز' },
    { name: 'چەنگ', icon: '🥁', category: 'سوقما ساز' },
    { name: 'ناي', icon: '🎼', category :'پۈرمە ساز' },
    { name: 'سۇرناي', icon: '🎺', category :'پۈرمە ساز' },
    { name: 'داپ', icon: '🎤', category :'سوقما ساز' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <Music className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              مۇزىكا ۋە تېخنولوگىيە
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇر مۇزىكىسىنىڭ{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              رەقەملىك ئەۋلادى
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ئۇيغۇر مۇزىكىسى مىڭ يىللىق تارىخقا ئىگە بولۇپ، بۈگۈنكى رەقەملىك دەۋردە قانداق ساقلىنىپ، 
            ياش نەسىللەرگە قانداق يەتكۈزۈلۈشى مۇھىم مەسىلە. بىز تېخنىكىنىڭ كۈچى بىلەن 
            بۇ مىراسنى قانداق ساقلاپ قالالايمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              ق
              </div>
              <span>ئاپتۇر:  قاۋۇلجان</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 3-ئاينىڭ 20-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>7 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* ئاۋاز كۆرسىتىش */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-pink-600 p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">تەجرىبە قىلىڭ</h3>
                <p className="text-purple-100">دېجىتاللاشتۇرۇلغان ئۇيغۇر مۇزىكىسى</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">ئون ئىككى مۇقام - راك</h4>
                  <p className="text-gray-600 dark:text-gray-400">ساپلىق يۇقىرىلتىلغان رەقەملىك نۇسخا</p>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>
                  <button className="p-2 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-1/3"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>1:24</span>
                  <span>4:32</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">ئېنىقلىق: 192kHz</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">AI سۈزۈش: 95%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">3D ئاۋاز</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ئاساسىي مەزمۇن */}
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-ul:space-y-3">
          
          {/* كىرىش سۆز */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                نىمە ئۈچۈن رەقەملىك ئۆزگەرتىش؟
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ھەر يىلى 15% كونا سەھىپىلىك مۇزىكىلار ئۈزۈلۈپ يوقىلىپ تۇرىدۇ. 
                رەقەملىك تېخنىكا بىزگە بۇ مىراسنى ساقلاپ قېلىش، 
                ياش نەسىللەرگە يەتكۈزۈش ۋە دۇنياغا تونۇتۇش ئىمكانىيىتى بېرىدۇ.
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">1</span>
              </div>
              رەقەملىك ئۆزگەرتىش تېخنىكىلىرى
            </h2>
            
            <p className="text-lg mb-6">
              كونا ئاۋاز يازىقى ۋە سەھىپىلەرنى رەقەملىك شەكىلدە ساقلاش:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
              {digitalTechnologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <div className="text-white">
                      {tech.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {tech.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {tech.description}
                  </p>
                  <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                    {tech.stats}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="my-10 p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Volume2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-300">AI ئاۋاز سۈزۈش تېخنىكىسى:</h4>
                  <ul className="space-y-2 text-purple-700 dark:text-purple-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>شۇڭۇلداق ۋە پىسىلداشلارنى چىقىرىۋېتىش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ئاۋاز دەرىجىسىنى تەڭشەش ۋە كۈچەيتىش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>يوقىلىپ قالغان بۆلەكلەرنى قايتا ياساش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ۋىرتۇئال ئوركېسترا ھاسىل قىلىش</span>
                    </li>
                  </ul>
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
              مۇزىكا تۈرلىرى ۋە ساقلاش ئەھۋالى
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {musicGenres.map((genre, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${genre.color}`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {genre.name}
                      </h4>
                      <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                        {genre.count}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {genre.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-gray-500">ساقلاش ئەھۋالى:</div>
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${genre.color} rounded-full`}
                            style={{ width: `${75 + index * 8}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">
                        {75 + index * 8}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* سازلار */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                ئۇيغۇر مۇزىكا سازلىرى
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {instruments.map((instrument, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-2xl mb-2">{instrument.icon}</div>
                    <div className="font-bold text-gray-900 dark:text-white">{instrument.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{instrument.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">3</span>
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
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
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
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
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
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10,000+</div>
                <div className="text-gray-700 dark:text-gray-300">رەقەملىك مۇزىكا نۇسخىسى</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500,000+</div>
                <div className="text-gray-700 dark:text-gray-300">ئەپ ئىشلەتكۈچىسى</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">80%</div>
                <div className="text-gray-700 dark:text-gray-300">ياشلار قاتنىشىش نىسبىتى</div>
              </div>
            </div>
          </section>

          {/* 4-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">4</span>
              </div>
              كەلگۈسى پىلانلار
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                      ياشلار قاتنىشىش لايىھىسى
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      ئۇيغۇر مۇزىكىسىنى ئۆگىتىدىغان تىك-توك ۋە يوتۇب قاناللىرىنى قۇرۇش، 
                      ياش مۇزىكاچىلارغا ئىجازەت بېرىش پىلانى.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        تىك-توك چاللەنگۈچىلىرى
                      </span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                        مۇزىكا مۇسابىقىسى
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        ۋىرتۇئال كونسېرت
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                      خەلقئارالاشتۇرۇش لايىھىسى
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      ئۇيغۇر مۇزىكىسىنى Spotify، Apple Music، YouTube Music قاتارلىق 
                      خەلقئارا سۇپىلاردا تارقىتىش، خەلقئارالىق مۇزىكاچىلار بىلەن ھەمكارلىشىش.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white font-bold">S</span>
                        </div>
                        <span className="text-sm">Spotify</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                          <span className="text-white font-bold">A</span>
                        </div>
                        <span className="text-sm">Apple Music</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="text-white font-bold">Y</span>
                        </div>
                        <span className="text-sm">YouTube</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 dark:from-purple-500/5 dark:via-pink-500/5 dark:to-rose-500/5 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
            <h4 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300 flex items-center gap-3">
              <Music className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-purple-700 dark:text-purple-200">
              <p>
                ئۇيغۇر مۇزىكىسى پەقەت بىر سەنئەت ئەمەس، بەلكى بىزنىڭ مىللىي كىملىكىمىز، 
                تارىخىمىز ۋە مەدەنىيىتىمىزنىڭ جانلىق گۇۋاھچىسىدۇر.
              </p>
              <p>
                رەقەملىك تېخنىكا بىزگە بۇ گۈزەل مىراسنى ساقلاپ قېلىش، 
                ياش نەسىللەرگە يەتكۈزۈش ۋە دۇنياغا تونۇتۇش ئىمكانىيىتى بېرىدۇ.
              </p>
              <p className="font-medium">
                ھەر بىرىمىز بۇ مەسئۇلىيەتنى ئۆز ئۈستىمىزگە ئېلىشىمىز، 
                كەلگۈسى ئەۋلادلارغا بۇ بايلىقنى تېخىمۇ گۈزەل شەكىلدە تاپشۇرۇشىمىز كېرەك.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ئۇيغۇر مۇزىكىسىنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">م</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white"> قاۋۇلجان</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400"> ئاپتۇر </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    liked 
                      ? 'bg-pink-500 text-white hover:bg-pink-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>لايىك ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2024 كەلبىل مۇزىكا دېجىتال ئارخىپى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدا كۆرسىتىلگەن مۇزىكىلار ئەسلىي ھوقۇقلارغا ئىگە.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog02;