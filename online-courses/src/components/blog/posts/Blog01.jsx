import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  BookOpen, 
  Palette, 
  Type, 
  Smartphone,
  Zap,
  CheckCircle
} from 'lucide-react';

const Blog01 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  
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
        title: 'ئۇيغۇر ئۇسلۇبىدىكى زامانىۋى UI/UX لايىھىلەش',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };
  
  const designPrinciples = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'رەڭ سىستېمىسى',
      description: 'ئەنئەنىۋى رەڭلەرنى زامانىۋى گرادىئېنتلار بىلەن بىرلەشتۈرۈش'
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: 'تىپوگرافىيە',
      description: 'ئۇيغۇر خەت سىستېمىسىنى رېسپۇنسىپ لايىھىلەشكە ماسلاشتۇرۇش'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'ئىقتىدارچانلىق',
      description: 'بارلىق قوراللاردا ياخشى ئىشلەيدىغان لايىھە'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'سۈرئەت',
      description: 'ئوپتىمىلاشقان يۈكلەش ۋە ئىجرا سۈرئىتى'
    }
  ];

  const colorMeanings = [
    { name: 'قىزىل', color: 'bg-red-600', meaning: 'ھايات، ئىشەنچ، قىزغىنلىق', code: '#DC2626' },
    { name: 'كۆك', color: 'bg-blue-600', meaning: 'مۇقەددەسلىك، سۆھبەت، سۈكۈت', code: '#2563EB' },
    { name: 'يېشىل', color: 'bg-green-600', meaning: 'تۇغقانلىق، تىنچلىق، ئۆسۈمۈل', code: '#16A34A' },
    { name: 'سېرىق', color: 'bg-amber-500', meaning: 'بايلىق، نور، ئەقىل', code: '#F59E0B' },
    { name: 'ئاق', color: 'bg-gray-100 text-gray-800', meaning: 'پاكلىق، ساددىلىك، زېرەكلىك', code: '#F3F4F6' },
    { name: 'قارا', color: 'bg-gray-900', meaning: 'ھۆرمەت، چوڭقۇرلۇق، مۇستەھكەملىك', code: '#111827' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              UI/UX لايىھىلەش ۋە مەدەنىيەت
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇر ئۇسلۇبىدىكى زامانىۋى{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UI/UX لايىھىلەش
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            بۈگۈنكى رەقەملىك دۇنيادا، ئىشلەتكۈچى تەجرىبىسى (UX) ۋە ئىشلەتكۈچى ئارىيىزى (UI) لايىھىسى 
            ئەڭ مۇھىم ئامىللارنىڭ بىرىگە ئايلاندى. بىز ئۇيغۇر مەدەنىيىتىنىڭ بايلىقىنى 
            قانداق زامانىۋى تېخنىكىلار بىلەن بىرلەشتۈرۈپ، ئەنسىز تەجرىبە يارىتالايمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <span>ئاپتور:  قاۋۇلجان</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 2-ئاينىڭ 15-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>5 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* ئاساسىي مەزمۇن */}
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-ul:space-y-3">
          
          {/* كىرىش سۆز */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                نىمە ئۈچۈن مەدەنىي لايىھىلەش؟
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                زامانىۋى UI/UX لايىھىلەشتە، مەدەنىي سەزگۈرلۈك ئەڭ مۇھىم ئامىللارنىڭ بىرى. 
                ئۇيغۇر مەدەنىيىتىنىڭ گۈزەل نەقىش-ناۋىلىرى، رەڭ سىستېمىسى ۋە سىممېترىيەلىك شەكىللىرىنى 
                زامانىۋى دىزايىن قائىدىلىرى بىلەن بىرلەشتۈرگەندە، ئەنسىز بىر تەجرىبە يارىتىشقا بولىدۇ.
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">1</span>
              </div>
              ئۇيغۇر نەقىش-ناۋاسىنى زامانىۋى لايىھىلەرگە قانداق ئۇيغۇنلاشتۇرۇش؟
            </h2>
            
            <p className="text-lg mb-6">
              ئۇيغۇر نەقىشلىرى ئۆزىگە خاس گېئومېتىرىك شەكىللەر ۋە رەڭ مۇناسىۋەتلىرىگە ئىگە. 
              بۇ ئەنئەنىۋى ئېلېمېنتلارنى زامانىۋى دىزايىنلاردا قوللانمىسى:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">ئىكونلاشتۇرۇش</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  نەقىشلىرىنى سىستېمىلىق ئىكونلارغا ئايلاندۇرۇش، ھەر بىرىگە ئوچۇق مەنىە بېرىش
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Type className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">فون ئېلېمېنتى</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  نەقىش شەكىللىرىنى فون ۋە بىرىكمە دىزايىنلاردا ئىشلىتىش
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">ئېنېرگىيە بېرىش</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  گرادىئېنت ۋە ئانىماتسىيەلەر بىلەن نەقىشلەرگە ھاياتلىق بېرىش
                </p>
              </div>
            </div>
            
            <div className="my-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">ئەمەلىي مىسال:</h4>
                  <p className="text-blue-700 dark:text-blue-200 mb-4">
                    ئۇيغۇر خەتتىكى كۇڭۇر ئۆرۈمچە شەكىلىنى ئەپلەرنىڭ يۆنىلىش بەلگىسى سۈپىتىدە ئىشلىتىش.
                    بۇ ئەنئەنىۋى مەدەنىيەت بىلەن زامانىۋى فۇنكسىوناللىقنى بىرلەشتۈرىدۇ.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                      نەتىجە: ئىشلەتكۈچىلەر 35% تېز يېتەكلىمە
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">2</span>
              </div>
              رەڭلەرنى تاللاش ستراتېگىيىسى
            </h2>
            
            <p className="text-lg mb-8">
              ئۇيغۇر مەدەنىيىتىدىكى رەڭلەر ئۆزىگە خاس مەنىلەرگە ئىگە. 
              بۇ رەڭلەرنى زامانىۋى UI دىزايىنىدا قوللانغاندا:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8">
              {colorMeanings.map((color, index) => (
                <div 
                  key={index} 
                  className={`${color.color} p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ${color.name === 'ئاق' || color.name === 'سېرىق' ? 'text-gray-800' : 'text-white'}`}
                >
                  <div className="font-bold text-lg mb-2">{color.name}</div>
                  <div className="text-sm opacity-90 mb-2">{color.meaning}</div>
                  <div className="text-xs opacity-75 font-mono">{color.code}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl my-8">
              <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                رەڭ قوللىنىش كەسپىيەتلىرى:
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>ئاساسىي رەڭ: 60% (فون ۋە ئاساسىي زوۋۇت)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>ياردەم رەڭ: 30% (بەلگە ۋە ئىككىنچى دەرىجىدىكى ئېلېمېنتلار)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>ئەسكەرتىش رەڭى: 10% (يۆنىلىش ۋە ئەھمىيەتلىك ئەكسيونلار)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">3</span>
              </div>
              تىل ۋە يېزىق مۇناسىۋىتى
            </h2>
            
            <p className="text-lg mb-6">
              ئۇيغۇر يېزىقى ساغدىن سولغا يېزىلىدۇ. بۇنى ئېھتىمال قىلىش:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">RTL</span>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 text-gray-900 dark:text-white">RTL (ساغدىن سول) قوللاش</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      CSS direction ۋە Flexbox تەرتىپىنى RTL گە ماسلاشتۇرۇش
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <Type className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 text-gray-900 dark:text-white">خەت تاللاش</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      ئۇيغۇر خەتلىرىگە ماس كېلىدىغان، ئوقۇشچان فونتلارنى تاللاش
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 text-gray-900 dark:text-white">كىچىك ئېكران ماسلىشىشى</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      موبىيل قۇراللاردا خەت چوڭلۇقى ۋە قاتار ئارىلىقىنى ئوڭۇشلاش
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1 text-gray-900 dark:text-white">يۈكلەش سۈرئىتى</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      فونت فایللىرىنى ئوپتىمىللاشتۇرۇپ، يۈكلەش سۈرئىتىنى ئاشۇرۇش
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">4</span>
              </div>
              ئەمەلىي قوللىنىش مىساللىرى
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'ئې-تىجارەت سېتىلىش سۇپىسى',
                  description: 'ئۇيغۇر نەقىشلىرىنى كارتىلار ۋە تۆۋەندىكى مېنۇلاردا ئىشلىتىش',
                  color: 'blue',
                  features: ['مەھسۇلات كارتىسى', 'نەقىش بىلەن فیلتر', 'ئەنئەنىۋى تۆۋەن مېنۇ']
                },
                {
                  title: 'مائارىپ ئەپى',
                  description: 'ئەنئەنىۋى ئويۇنلارنى دېجىتال شەكىلدە ياساش',
                  color: 'green',
                  features: ['ئىنتېرئاكتىپ دىرسلەر', 'مەدەنىي ئويۇنلار', 'ئىلگىرىلەش بەلگىسى']
                },
                {
                  title: 'مەدەنىيەت تونۇشتۇرۇش ئەپى',
                  description: 'ئۈچ ئۆلچەملىك نەقىش-ناۋا مۇزىيىسى',
                  color: 'purple',
                  features: ['3D نەقىش كۆرسىتىش', 'مەدەنىيەت خەرىتىسى', 'ۋىرتۇئال سەير']
                }
              ].map((app, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl border-l-4 bg-gradient-to-r from-${app.color}-50 to-white dark:from-gray-800 dark:to-gray-900 border-${app.color}-500 hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h5 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                        {app.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {app.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {app.features.map((feature, idx) => (
                          <span 
                            key={idx} 
                            className={`px-3 py-1 bg-${app.color}-100 dark:bg-${app.color}-900/30 text-${app.color}-700 dark:text-${app.color}-300 rounded-full text-sm`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className={`px-6 py-3 bg-${app.color}-500 text-white rounded-lg hover:bg-${app.color}-600 transition-colors duration-300 whitespace-nowrap`}>
                      تولۇق كۆرۈش →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* دىزايىن پرىنسىپلىرى */}
          <div className="my-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              ئۇيغۇر ئۇسلۇبىدىكى UI/UX دىزايىن پرىنسىپلىرى
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPrinciples.map((principle, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <div className="text-white">
                      {principle.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                    {principle.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
            <h4 className="text-2xl font-bold mb-6 text-blue-800 dark:text-blue-300 flex items-center gap-3">
              <CheckCircle className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-blue-700 dark:text-blue-200">
              <p>
                بۇ ماقالىدا كۆرسىتىلگەن ئۇچۇرلار ئەمەلىي تەجرىبىلەرگە ئاساسلانغان.
                لايىھىلەش جەريانىدا ھەرۋاقىت ئىشلەتكۈچى تەجرىبىسىنى ئالدىنقى ئورۇنغا قويۇش كېرەك.
              </p>
              <p>
                ئۇيغۇر مەدەنىيىتىنى زامانىۋىلاشتۇرۇش، ئۇنى ئۆزگەرتىش ئەمەس، 
                بەلكى ئۇنىڭدىكى گۈزەللىكنى يېڭى دەۋرگە ماسلاشتۇرۇش.
              </p>
              <p className="font-medium">
                ئەڭ مۇھىمى، ھەر بىر لايىھىنىڭ ئاخىرقى مەقسىتى ئىشلەتكۈچىگە 
                قۇلايلىق يارىتىپ بېرىش ۋە ئۇلارنىڭ ھېسسىياتىغا تەسىر كۆرسىتىش.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  بۇ ماقالى پايدىلىق بولغان بولسا، باشقىلار بىلەن ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ق</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white"> قاۋۇلجان</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">UI/UX لايىھىلىگۈچى</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleLike}
                  className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    liked 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                  <span>لايىك ({likeCount})</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  <span>ئورتاقلىشىش</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© 2024 كەلبىل دىجىتال دىزايىن ۋەقفى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدا كۆرسىتىلگەن ئۇچۇرلار ئىلمىي تەتقىقاتلارغا ئاساسلانغان.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog01;