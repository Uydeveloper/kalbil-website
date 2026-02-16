import React, { useState } from 'react';

import { 
  Utensils, 
  ChefHat, 
  Heart, 
  Share2, 
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Award,
  Globe,
  Leaf,
  Flame,
  Droplets,
  Calendar,
  Star,
  Target,
 
  Utensils as ChefIcon,
  ShoppingBag
} from 'lucide-react';

const Blog06 = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(198);
  const [activeCuisine, setActiveCuisine] = useState('pilav');
  
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
        title: 'ئۇيغۇر تائاملىرىنىڭ خەلقئارالىشىش يوللىرى',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  const traditionalCuisines = [
    {
      id: 'pilav',
      name: 'پولو',
      description: 'چوڭ گۈرۈچ، قوي گۆشى ۋە ھەر خىل رەڭگارەڭ يەككە تەرەپلەر',
      ingredients: ['گۈرۈچ', 'قوي گۆشى', 'سەۋزە', 'پىياز', 'زەرە', 'قىزىل مۇچ'],
      difficulty: 'ئوتتۇرا',
      time: '2 سائەت'
    },
    {
      id: 'lagman',
      name: 'لەغمەن',
      description: 'قولدا يىپىلغان ئۇن خەمىر، ئۆسۈملۈك ۋە گۆش قوشۇلمىسى',
      ingredients: ['ئۇن', 'قوي گۆشى', 'سەۋزە', 'پامىدۇر', 'قىزىل گۆش', 'قارى مۇچ'],
      difficulty: 'يۇقىرى',
      time: '3 سائەت'
    },
    {
      id: 'samsa',
      name: 'سامسا',
      description: 'تاماق ئوتىدا پىشۇرۇلغان گۆش ۋە پىياز تولدۇرۇلغان خەمىر',
      ingredients: ['ئۇن', 'قوي گۆشى', 'پىياز', 'زەرە', 'سۇ', 'تۇز'],
      difficulty: 'ئادەتتىكى',
      time: '1.5 سائەت'
    },
    {
      id: 'chuchura',
      name: 'چۈچۈرە',
      description: 'كىچىك پارچىلارغا توغرالغان گۆش ۋە خۇرۇچلارنىڭ قايناق تەركىبى',
      ingredients: ['قوي گۆشى', 'سۇ', 'پىياز', 'زەرە', 'قىزىل مۇچ', 'سۇ'],
      difficulty: 'تۆۋەن',
      time: '1 سائەت'
    }
  ];

  const digitalTransformation = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: 'تور سېتىش',
      description: 'ئۇيغۇر تائاملىرىنى تور ئارقىلىق سېتىش',
      platforms: ['Uber Eats', 'DoorDash', 'ئۇيغۇر تائاملىرى ئەپى']
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: 'دىجىتال تەلىم',
      description: 'تائام ياساش جەريانىنى ۋىدېئو ئارقىلىق ئۆگىتىش',
      platforms: ['يۇتۇب', 'تىك توك', 'ئاۋازلىق كۇرسلار']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'خەلقئارالىشىش',
      description: 'ئۇيغۇر تائاملىرىنى خەلقئارا بازارغا تارقىتىش',
      platforms: ['تور بېكەت', 'خەلقئارا تائام كۆرگەزمىسى', 'ئېكسپورت']
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'ساغلاملىق تەركىبى',
      description: 'تائامنىڭ ساغلاملىق تەركىبىنى رەقەملىك شەكىلدە كۆرسىتىش',
      platforms: ['تائام ئەپى', 'تەركىب تەھلىلى', 'كەلورىيە خىتابنامىسى']
    }
  ];

  const successStories = [
    {
      title: 'تور سېتىش نەتىجىسى',
      result: '300% ئاشتى',
      description: 'ئۇيغۇر تائاملىرىنىڭ تور ئارقىلىق سېتىلىشى',
      icon: '📈'
    },
    {
      title: 'خەلقئارا بازار',
      result: '20+ دۆلەت',
      description: 'ئۇيغۇر تائاملىرىنىڭ خەلقئارا بازارغا كىرىشى',
      icon: '🌍'
    },
    {
      title: 'ياش قاتنىشىشى',
      result: '80% ئاشتى',
      description: 'ياشلارنىڭ ئۇيغۇر تائاملىرىغا قىزىقىشى',
      icon: '👨‍🍳'
    }
  ];

  const healthBenefits = [
    { nutrient: 'پروتىن', amount: 'يۇقىرى', benefit: 'ئېنېرگىيە ۋە ئىت ئېشىش' },
    { nutrient: 'كاربون-ھىدرات', amount: 'ئوتتۇرا', benefit: 'ئېنېرگىيە مەنبەسى' },
    { nutrient: 'ياغ', amount: 'تۆۋەن', benefit: 'يۈرەك ساغلاملىقى' },
    { nutrient: 'تىببىي مەدە', amount: 'يۇقىرى', benefit: 'مۇداپىئە سىستېمىسى' },
    { nutrient: 'دىئېتالىق لىف', amount: 'يۇقىرى', benefit: 'ھەزم سىستېمىسى' }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-900/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6">
            <Utensils className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              تائام ۋە مەدەنىيەت
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            ئۇيغۇر تائاملىرىنىڭ{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              خەلقئارالىشىش يوللىرى
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ئۇيغۇر تائاملىرى رەقەملىك تېخنىكا ئارقىلىق قانداق خەلقئارالىشىپ، دۇنياغا تونۇتۇش مۇمكىن؟
            بىز ئەنئەنىۋى تائاملىرىمىزنى قانداق زامانىۋى دۇنياغا يەتكۈزەلەيمىز؟
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                ق
              </div>
              <span> ئاپتۇر :  قاۋۇلجان</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2024-يىلى 2-ئاينىڭ 22-كۈنى</div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>7 مىنۇت ئوقۇش</span>
            </div>
          </div>
        </header>

        {/* تائام كۆرسىتىش */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">زامانىۋى پولو</h4>
                  <p className="text-gray-600 dark:text-gray-400">ئەنئەنىۋى پولونىڭ ساغلاملىق يېڭىلىشى</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">450 كەلورىيە</div>
                    <div className="text-sm text-gray-500">ئىقتىدارلىق قىممىتى</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">تەييارلىق ۋاقتى</div>
                  <div className="font-bold text-gray-900 dark:text-white">45 مىنۇت</div>
                </div>
                <div className="bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">مۇرەككەپلىكى</div>
                  <div className="font-bold text-gray-900 dark:text-white">ئوتتۇرا</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">ساغلاملىق دەرىجىسى</div>
                  <div className="font-bold text-gray-900 dark:text-white">9/10</div>
                </div>
              </div>
              
              <div className="relative h-48 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍚</div>
                    <div className="text-gray-700 dark:text-gray-300">زامانىۋى ئۇيغۇر تائاملىرى</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">ئىشلەپچىقىرىش ۋاقتى</span>
                  </div>
                  <div className="text-sm text-gray-500">فۇنكىسىيۇنال تائام</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-amber-600 to-orange-600 p-8 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <ChefIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">فۇنكىسىيۇنال تائام</h3>
                <p className="text-amber-100">ئەنئەنىۋى تائامنىڭ يېڭى ئىپادىسى</p>
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                    <span className="text-white">ساغلاملىق تەركىبى</span>
                    <Leaf className="w-4 h-4 text-green-300" />
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
                نىمە ئۈچۈن ئۇيغۇر تائاملىرى؟
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ئۇيغۇر تائاملىرى پەقەت تائام ئەمەس، مەدەنىيەت، تارىخ ۋە ھايات تۈزۈلۈشىنىڭ جانلىق ئىپادىسى. 
                بۇ ئەنئەنىۋى تائاملىرىنى زامانىۋى دۇنياغا تارقىتىش، مەدەنىيەتنى ساقلاشنىڭ ئەڭ تەسىرلىك يوللىرىنىڭ بىرى.
              </p>
            </div>
          </div>

          {/* 1-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">1</span>
              </div>
              ئاساسلىق ئۇيغۇر تائاملىرى
            </h2>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 mb-6">
                {traditionalCuisines.map(cuisine => (
                  <button
                    key={cuisine.id}
                    onClick={() => setActiveCuisine(cuisine.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeCuisine === cuisine.id
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {cuisine.name}
                  </button>
                ))}
              </div>
              
              {traditionalCuisines.map(cuisine => (
                activeCuisine === cuisine.id && (
                  <div 
                    key={cuisine.id} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-4"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`w-full md:w-1/3 h-48 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center`}>
                        <div className="text-6xl">
                          {cuisine.id === 'pilav' ? '🍚' : 
                           cuisine.id === 'lagman' ? '🍜' : 
                           cuisine.id === 'samsa' ? '🥟' : '🍲'}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {cuisine.name}
                          </h4>
                          <div className="flex gap-4">
                            <div className="text-center">
                              <div className="text-sm text-gray-500">مۇرەككەپلىكى</div>
                              <div className={`font-bold ${
                                cuisine.difficulty === 'يۇقىرى' ? 'text-red-500' :
                                cuisine.difficulty === 'ئوتتۇرا' ? 'text-amber-500' : 'text-green-500'
                              }`}>
                                {cuisine.difficulty}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-gray-500">ۋاقىت</div>
                              <div className="font-bold text-amber-600">{cuisine.time}</div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {cuisine.description}
                        </p>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">ئاساسلىق مەزمۇنلار:</div>
                          <div className="flex flex-wrap gap-2">
                            {cuisine.ingredients.map((ingredient, idx) => (
                              <span key={idx} className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm">
                                {ingredient}
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
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-xl">2</span>
              </div>
              رەقەملىك ئۆزگەرتىش
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {digitalTransformation.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.platforms.map((platform, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* ساغلاملىق پايدىلىرى */}
            <div className="my-10">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                ساغلاملىق پايدىلىرى
              </h4>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {healthBenefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 rounded-full ${
                        benefit.amount === 'يۇقىرى' ? 'bg-green-500' :
                        benefit.amount === 'ئوتتۇرا' ? 'bg-yellow-500' : 'bg-red-500'
                      } flex items-center justify-center mx-auto mb-2`}>
                        <span className="text-white font-bold">{benefit.amount.charAt(0)}</span>
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">{benefit.nutrient}</div>
                      <div className="text-sm text-gray-500">{benefit.benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3-بۆلەم */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">3</span>
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
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">500+</div>
                <div className="text-gray-700 dark:text-gray-300">تور رېستوران</div>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 dark:from-red-500/5 dark:to-rose-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">50+</div>
                <div className="text-gray-700 dark:text-gray-300">خەلقئارا ماركا</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1M+</div>
                <div className="text-gray-700 dark:text-gray-300">ئايلىق كىرىم</div>
              </div>
            </div>
          </section>

          {/* خۇلاسە */}
          <div className="mt-16 p-8 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 dark:from-amber-500/5 dark:via-orange-500/5 dark:to-red-500/5 rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
            <h4 className="text-2xl font-bold mb-6 text-amber-800 dark:text-amber-300 flex items-center gap-3">
              <Utensils className="w-7 h-7" />
              مۇھىم ئەسكەرتىش
            </h4>
            <div className="space-y-4 text-amber-700 dark:text-amber-200">
              <p>
                ئۇيغۇر تائاملىرى پەقەت تائام ئەمەس، مەدەنىيەتنىڭ جانلىق تەرجىمانى. 
                بۇ ئەنئەنىۋى تائاملىرىنى رەقەملىك دۇنياغا تارقىتىش، مەدەنىيەتنى ساقلاشنىڭ ئەڭ تەسىرلىك يوللىرىنىڭ بىرى.
              </p>
              <p>
                ھەر بىر تائام ئۇيغۇر مەدەنىيىتىنىڭ ھېكايەسىنى سۆزلەيدۇ. 
                بۇ پەقەت تائام ياساش ئەمەس، بەلكى تارىخ ۋە مەدەنىيەتنىڭ يېڭى دەۋردە ئىپادىلەش ئۇسۇلىدۇر.
              </p>
              <p className="font-medium">
                تائام ئۆتمەيدۇ، پەقەت ئۆزىنىڭ شەكلىنى ئۆزگەرتىدۇ. 
                ئۇيغۇر تائاملىرىنىڭ كەلگۈسى، ئۇنىڭ ئەنئەنىسى بىلەن زامانىۋىلىكىنىڭ ھەممىرلىشىشىدۇر.
              </p>
            </div>
          </div>

          {/* ئاخىرقى ھەرەكەتلەر */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  ئۇيغۇر تائاملىرىنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">ت</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white"> قاۋۇلجان</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">ئۇزۇقلۇق ۋە مەدەنىيەت تەتقىقاتچىسى</p>
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
              <p>© 2024 كەلبىل تائام مەدەنىيىتى ئاكادېمىيىسى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="mt-1">بۇ ماقالىدىكى تائام رېتسېپلىرى ئەسلىي ھوقۇقلارغا ئىگە.</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default Blog06;