import React, { useState } from 'react';
import { 
  Globe, 
  MessageSquare, 
  Cpu, 
  Share2, 
  Heart, 
  Brain,
  Download,
  Smartphone,
  Users,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  Code,
  Database,
  Cloud,
  Smartphone as Phone,
  BookOpen,
  Zap,
  Search,
  FileText
} from 'lucide-react';

const Blog04 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(123);
  const [activeTab, setActiveTab] = useState('tech');
  
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
        title: 'ئۇيغۇر تىلىنىڭ رەقەملىك جەھەتتىكى ئىمكانىيىتى',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  const languageTechnologies = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI تەرجىمە',
      description: 'يۇقىرى دەرىجىلىك ماشىنا تەرجىمىسى',
      progress: 85,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'تېكىست تەھلىل',
      description: 'سېنتىمېنت ۋە مەنىە تەھلىلى',
      progress: 75,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'ئىزدەش سىستېمىسى',
      description: 'ئۇيغۇرچە ئىزدەش ئېنىقلىقى',
      progress: 90,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'تىل مودېللىرى',
      description: 'GPT نەسلىدىكى يۇرۇشلۇق مودېللار',
      progress: 65,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const platforms = [
    {
      name: 'ئوپرېتسىيە سىستېمىسى',
      status: 'ياخشى',
      description: 'Windows, macOS, Linux',
      progress: 95
    },
    {
      name: 'موبىيل ئەپ',
      status: 'ياخشى',
      description: 'iOS, Android',
      progress: 85
    },
    {
      name: 'تور تەرەپ',
      status: 'تۆۋەن',
      description: 'ئۇيغۇرچە مەزمۇنلار',
      progress: 40
    },
    {
      name: 'يۇمشاق دېتال',
      status: 'ئوتتۇرا',
      description: 'ئۆتمۈش دەۋرلەر',
      progress: 60
    }
  ];

  const challenges = [
    {
      title: 'تىل سانلىق-مەلۇماتى',
      description: 'يېتەرلىك ۋە سۈپەتلىك تېكىست سانلىق-مەلۇماتى',
      solution: 'ھەمكارلىق ئارقىلىق سانلىق-مەلۇمات يىغىش'
    },
    {
      title: 'تېخنىكىلىق قوللاش',
      description: 'تېخنىكىلىق كادىرلارنىڭ يېتەرسىزلىكى',
      solution: 'تىل تېخنىكىسى بويىچە تەربىيەلەش'
    },
    {
      title: 'مەزمۇن زاپاسلىمىسى',
      description: 'رەقەملىك مەزمۇنلارنىڭ يېتەرسىزلىكى',
      solution: 'مەزمۇن يارىتىش ۋە تەرجىمە لايىھىلىرى'
    }
  ];

  const successStories = [
    {
      title: 'ئۇيغۇرچە AI تەرجىمە',
      result: '95% دەقلىق',
      description: 'يۇمشاق دېتال ۋە تور بېكەتلەردە قوللىنىلىدۇ'
    },
    {
      title: 'موبىيل كىرىش سىستېمىسى',
      result: '10M+ ئىشلەتكۈچى',
      description: 'ئۇيغۇرچە كىرىش ۋە تەھرىرلەش'
    },
    {
      title: 'ئۇيغۇرچە تور ئىزدەش',
      result: '1M+ مەزمۇن',
      description: 'ئۇيغۇرچە ئىزدەش نەتىجىلىرى'
    }
  ];

  const resources = [
    { name: 'ئۇيغۇرچە NLP سانلىق-مەلۇماتى', size: '10GB', type: 'تېكىست' },
    { name: 'تەرجىمە مودېلى', size: '5GB', type: 'مودېل' },
    { name: 'تىل ئادىتى سانلىق-مەلۇماتى', size: '2GB', type: 'مۇئامىلە' },
    { name: 'ئاۋاز سانلىق-مەلۇماتى', size: '50GB', type: 'ئاۋاز' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-gray-900 dark:to-emerald-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              تىل تېخنىكىسى ۋە مەدەنىيەت
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇر تىلىنىڭ{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              رەقەملىك جەھەتتىكى ئىمكانىيىتى
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            رەقەملىك دەۋر ئۇيغۇر تىلى ئۈچۈن پۇرسەت ۋە چەلگىلەرنى بىرلىكتە ئېلىپ كەلدى.
            بىز قانداق قىلىپ ئۇيغۇر تىلىنى رەقەملىك دۇنيادا كۈچلەندۈرەلەيمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <span>ئاپتۇر: قاۋۇلجان ئابدۇرېھىم</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 1-ئاينىڭ 28-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* تىل ھالىتى كۆرسىتىش */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ئۇيغۇر تىلى ھالىتى</h3>
                <p className="text-emerald-100">رەقەملىك دۇنيادىكى ئورنى</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">تىل تېخنىكىسى</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">75%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">مەزمۇن زاپاسى</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">90%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">مۇخبىر سىستېمىسى</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">65%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AI قوللىنىشى</div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="text-sm text-gray-500 mb-2">رەقەملىك تارقىلىش دەرىجىسى</div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-3/4"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>تۆۋەن</span>
                  <span>يۇقىرى</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* تەبىرلەر تاختىسى */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'tech' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              تېخنىكا
            </button>
            <button 
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'challenges' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              چەلگىلەر
            </button>
            <button 
              onClick={() => setActiveTab('solutions')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'solutions' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              ھەل قىلىش يوللىرى
            </button>
          </div>
        </div>

        {/* ئاساسىي مەزمۇن */}
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-ul:space-y-3">
          
          {/* كىرىش سۆز */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/5 dark:to-cyan-500/5 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                نىمە ئۈچۈن تىل تېخنىكىسى؟
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                بۈگۈنكى دۇنيادا، تىل تېخنىكىسى بولمىسا، تىل ياشاپ قالمايدۇ. 
                ئۇيغۇر تىلىنىڭ رەقەملىك جەھەتتىكى ئورنى، ئۇنىڭ كەلگۈسىنى بەلگىلەيدۇ. 
                بىز تېخنىكىنىڭ كۈچى بىلەن بۇ مىللىي بايلىقنى قانداق قوغداپ، تەرەققىي قىلدۇرالايمىز؟
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">1</span>
              </div>
              تىل تېخنىكىسىنىڭ ئەھمىيىتى
            </h2>
            
            <p className="text-lg mb-6">
              ئۇيغۇر تىلىنىڭ رەقەملىك جەھەتتىكى تەرەققىياتى:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
              {languageTechnologies.map((tech, index) => (
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">تەرەققىيات</span>
                      <span className="font-bold">{tech.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                پىلاتفورما قوللىنىش ئەھۋالى
              </h4>
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-gray-900 dark:text-white">
                            {platform.name}
                          </h5>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            platform.status === 'ياخشى' 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : platform.status === 'ئوتتۇرا'
                              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                          }`}>
                            {platform.status}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {platform.description}
                        </p>
                      </div>
                      <div className="w-32">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              platform.progress >= 80 
                                ? 'bg-green-500' 
                                : platform.progress >= 60
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                            } rounded-full`}
                            style={{ width: `${platform.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-sm text-gray-500 mt-1">
                          {platform.progress}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl">2</span>
              </div>
              چەلگىلەر ۋە ھەل قىلىش يوللىرى
            </h2>
            
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <div className="text-white font-bold text-lg">{index + 1}</div>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                          {challenge.title}
                        </h5>
                        <div className="mb-4">
                          <div className="text-sm text-gray-500 mb-1">چەلگە:</div>
                          <p className="text-gray-700 dark:text-gray-300">{challenge.description}</p>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">ھەل قىلىش يۇلى:</div>
                          <p className="text-emerald-700 dark:text-emerald-300 font-medium">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* سانلىق-مەلۇمات مەنبەلىرى */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                تىل سانلىق-مەلۇمات مەنبەلىرى
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h6 className="font-bold text-gray-900 dark:text-white">{resource.name}</h6>
                        <div className="text-sm text-gray-500 mt-1">{resource.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-600 dark:text-emerald-400">{resource.size}</div>
                        <button className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                          چۈشۈرۈش
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
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">3</span>
              </div>
              مۇۋەپپەقىيەتلىك لائىھىلەر
            </h2>
            
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
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
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {story.result}
                      </div>
                      <div className="text-sm text-gray-500">مۇۋەپپەقىيەت دەرىجىسى</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* كەلگۈسى پىلانلار */}
            <div className="my-10 p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-l-4 border-emerald-500">
              <h4 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">كەلگۈسى پىلانلار</h4>
              <div className="space-y-4 text-emerald-700 dark:text-emerald-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>ئۇيغۇرچە AI مودېللىرىنى كېڭەيتىش</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>ئۇيغۇرچە تور مەزمۇنلىرىنى كۆپەيتىش</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>تىل تېخنىكىسى بويىچە كادىرلار تەربىيەلەش</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>ئۇيغۇرچە ئوچۇق مەنبەلىك يۇمشاق دېتال تەرەققىياتى</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">4</span>
              </div>
              ھەر بىرىمىز نېمە قىلالايمىز؟
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-xl">
                  <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">ئىشلەتكۈچىلەر ئۈچۈن</h5>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ئۇيغۇرچە مەزمۇنلارنى قوللىشىش ۋە ئورتاقلىشىش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>تىل تېخنىكىسى لايىھىلىرىغا تۆھپە قوشۇش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ئۇيغۇرچە يۇمشاق دېتاللارنى قوللىنىش ۋە تەشۋىق قىلىش</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-xl">
                  <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">تەرەققىياتچىلار ئۈچۈن</h5>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ئۇيغۇرچە API ۋە كىتاپخانىلارنى ياساش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>تىل سانلىق-مەلۇماتلىرىغا تۆھپە قوشۇش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ئوچۇق مەنبەلىك لايىھىلەرگە قاتنىشىش</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 p-6 rounded-xl">
                  <h5 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">مەزمۇن يارىتقۇچىلار ئۈچۈن</h5>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>سۈپەتلىك ئۇيغۇرچە مەزمۇنلار يارىتىش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ئۇيغۇرچە ۋىدېئو ۋە پودكاستلار تەييارلاش</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>ئۇيغۇرچە تور بەتلىرى ۋە بىلوگلارنى قۇرۇش</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white">ھەمكارلىق يوللىرى</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    تىل تېخنىكىسىدا ھەمكارلىشىش ئۇسۇللىرى:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm">
                      GitHub تۈركۈملىرى
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      تور سەمىنارلىرى
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      مۇسابىقە ۋە گرانتلار
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 dark:from-emerald-500/5 dark:via-cyan-500/5 dark:to-blue-500/5 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50">
            <h4 className="text-2xl font-bold mb-6 text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
              <Globe className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-emerald-700 dark:text-emerald-200">
              <p>
                تىل پەقەت ئالاقە ئۈسكۈنىسى ئەمەس، مەدەنىيەتنىڭ ساقچىسىدۇر. رەقەملىك تېخنىكا ئۇيغۇر تىلىنى 
                قوغداش ۋە تارقىتىشتا مۇھىم رول ئوينايدۇ.
              </p>
              <p>
                بۈگۈنكى دۇنيادا، تىل تېخنىكىسى بولمىسا، تىل ياشاپ قالمايدۇ. 
                ئۇيغۇر تىلىنىڭ رەقەملىك جەھەتتىكى ئورنى، ئۇنىڭ كەلگۈسىنى بەلگىلەيدۇ.
              </p>
              <p className="font-medium">
                ھەر بىرىمىز ئۆز ئورنىمىزدا بۇ مىللىي بايلىقنى قوغداش ۋە تەرەققىي قىلدۇرۇش ئۈچۈن 
                تۆھپە قوشالايمىز. تىل تىرىك بولغان يەردە، مەدەنىيەت تىرىك بولىدۇ.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ئۇيغۇر تىلىنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ئا</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">قاۋۇلجان ئابدۇرېھىم</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400"> ئۇيغۇر </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    liked 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>لايىك ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2024 كەلبىل تىل تېخنىكىسى ئىنستىتۇتى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدىكى سانلىق-مەلۇماتلار ئىلمىي تەتقىقاتلارغا ئاساسلانغان.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog04;