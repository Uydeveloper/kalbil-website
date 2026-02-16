// src/components/CultureTab.jsx
import React, { useState, useEffect } from 'react';
import { 
  Utensils, Gamepad2, Calendar, Home, Dumbbell,
  Music, Scissors, Shirt, ArrowLeft, Clock, Users,
  ChefHat, Trophy, Palette, Zap, Star, Flame,
  Heart, Thermometer, AlertCircle, CheckCircle,
  Apple, Carrot, Beef, Egg, Coffee, BookOpen,
  MapPin, Globe, Camera, Film, Mic, Headphones,
  Award, Target, Users2, Compass, Moon, Sun,
  Cloud, Wind, Droplets, Tree, Flower, Sprout,
  Gift, PartyPopper, Cookie, CakeSlice, Wine,
  ShoppingBag, CreditCard, Banknote, Wallet,
  Smartphone, Laptop, Wifi, Battery, Bell,
  MessageSquare, Phone, Mail, User, Lock
} from 'lucide-react';

// تاماقلار تەپسىلاتى ئايرىم كومپونېنتى
const FoodDetailCard = ({ item }) => {
  const [activeTab, setActiveTab] = useState('recipe');

  const nutritionFacts = {
    'لەغمەن': { 
      calories: 450, 
      protein: '25g', 
      carbs: '60g', 
      fat: '12g', 
      fiber: '8g',
      vitamins: 'B1, B2, C',
      minerals: 'تۆمۈر، كالىي، ماگنىي'
    },
    'پولۇ': { 
      calories: 520, 
      protein: '30g', 
      carbs: '65g', 
      fat: '18g', 
      fiber: '6g',
      vitamins: 'B6, E, K',
      minerals: 'سېلىن، زىنك، فوسفور'
    },
    'سامسا': { 
      calories: 280, 
      protein: '15g', 
      carbs: '30g', 
      fat: '12g', 
      fiber: '3g',
      vitamins: 'B3, B12',
      minerals: 'تۆمۈر، سېلىن'
    },
    'مونتا': { 
      calories: 320, 
      protein: '20g', 
      carbs: '35g', 
      fat: '10g', 
      fiber: '5g',
      vitamins: 'B1, B2, C',
      minerals: 'كالىي، ماگنىي'
    },
    'چۆچۈرە': { 
      calories: 380, 
      protein: '35g', 
      carbs: '15g', 
      fat: '22g', 
      fiber: '2g',
      vitamins: 'B12, D',
      minerals: 'تۆمۈر، زىنك'
    },
    'گۆش قېيما': { 
      calories: 290, 
      protein: '28g', 
      carbs: '12g', 
      fat: '16g', 
      fiber: '4g',
      vitamins: 'B2, B6, B12',
      minerals: 'تۆمۈر، سېلىن'
    },
    'توخۇ قۆرمىسى': { 
      calories: 340, 
      protein: '32g', 
      carbs: '20g', 
      fat: '15g', 
      fiber: '5g',
      vitamins: 'B3, B6, B12',
      minerals: 'فوسفور، سېلىن'
    }
  };

  const healthBenefits = {
    'لەغمەن': [
      { benefit: 'ئاجىزلىققا قارشى تونۇسلۇق', description: 'پروتېين ۋە كاربوهىدرات باي' },
      { benefit: 'ئاشقازان-ئىچەك قاتناشىنى ياخشىلايدۇ', description: 'تەبىئىي يىپەكلىك ماددىلار' },
      { benefit: 'ئېنېرگىيە بېرىدۇ', description: 'مۇرەككەپ كاربوهىدراتلار' },
      { benefit: 'پروتېين مەنبەسى', description: 'ساغلام گۆشتىن ئېلىنغان' },
      { benefit: 'ھەزىمنى ئۆستۈرىدۇ', description: 'زىرە ۋە قىزىلمۇچ' }
    ],
    'پولۇ': [
      { benefit: 'تومۇر ساغلاملىقىنى قوغدايدۇ', description: 'تەبىئىي ياغلار' },
      { benefit: 'ھەزىمنى ياخشىلايدۇ', description: 'گۈرۈچ ۋە سەۋزىلەر' },
      { benefit: 'ئېنېرگىيە مەنبەسى', description: 'كاربوهىدرات باي' },
      { benefit: 'تىنچ ئۇخلاشقا ياردەم بېرىدۇ', description: 'ترىپتوفان ماددىسى' },
      { benefit: 'باغىرەك ساغلاملىقى', description: 'كالىي باي' }
    ]
  };

  const cookingTips = {
    'لەغمەن': [
      { tip: 'خەمىرنى كەم دېگەندە 30 مىنۇت ئۇرۇڭ', reason: 'گاز چىقىرىش ئۈچۈن' },
      { tip: 'تەرەپلىمە قىلغاندا ئۇنىڭ قېلىنلىقىنى بىردەك ساقلاڭ', reason: 'بىردەك پىشىش ئۈچۈن' },
      { tip: 'قورۇشقا پىيازنى ئاۋۋال سالىسىز', reason: 'تەم بېرىش ئۈچۈن' },
      { tip: 'سۇ قوشقاندا قايناق سۇ بولۇشى كېرەك', reason: 'خېمىرنىڭ چۆچۈپ كېتىشىنىڭ ئالدىنى ئېلىش' },
      { tip: 'پىشقاندىن كېيىن دەرھال ئىستېمال قىلىڭ', reason: 'ئەڭ ياخشى تەمى ئۈچۈن' }
    ],
    'سامسا': [
      { tip: 'تونۇرنى پىشقاندىن كېيىن تەييارلاڭ', reason: 'تەگلىك پىشىش ئۈچۈن' },
      { tip: 'خەمىرنى يۇمشاق قىلىپ يۇغۇرۇڭ', reason: 'يۇمشاق ۋە يۇپقا بولۇشى ئۈچۈن' },
      { tip: 'ئىچىگە قارامۇچ قوشۇڭ', reason: 'تەمنى ئاشۇرۇش ئۈچۈن' },
      { tip: 'تەگلىك پىشقاچلا تونۇرغا سېلىڭ', reason: 'تەگلىك پىشىش ئۈچۈن' },
      { tip: 'تونۇرنىڭ تېمپېراتۇرىسىنى تۇتۇڭ', reason: 'ئىچى ۋە سىرتى بىردەك پىشىش ئۈچۈن' }
    ],
    'پولۇ': [
      { tip: 'گۈرۈچنى ئالدىن يۇيۇڭ', reason: 'قېتىقسىز بولۇشى ئۈچۈن' },
      { tip: 'گۆشنى يۇمشاق قىلىش ئۈچۈن ئۇزۇنراق قورۇڭ', reason: 'يۇمشاق ۋە تەملىك بولۇشى ئۈچۈن' },
      { tip: 'سەۋزىلەرنى چوڭ توغراڭ', reason: 'پىشقاندە تارىلىپ كېتىشىنىڭ ئالدىنى ئېلىش' },
      { tip: 'قازاننى قاپاقلىق قىلىپ پىشقۇزۇڭ', reason: 'بۇغىنى ساقلاپ قېلىش ئۈچۈن' },
      { tip: 'پىشقاندىن كېيىن 10 مىنۇت تۇتۇڭ', reason: 'تەمنىڭ تەڭشىلىشى ئۈچۈن' }
    ]
  };

  const difficultyColors = {
    'ئاسان': 'bg-green-100 text-green-800 border-green-200',
    'ئوتتۇرا': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'قىيىن': 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <div className="space-y-8">
      {/* تەبىرلەر بالداقى */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActiveTab('recipe')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'recipe' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
        >
          <ChefHat className="w-5 h-5" />
          پىشۇرۇش ئۇسۇلى
        </button>
        <button
          onClick={() => setActiveTab('nutrition')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'nutrition' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
        >
          <Heart className="w-5 h-5" />
          ئۇزۇقلۇق قىممىتى
        </button>
        <button
          onClick={() => setActiveTab('health')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'health' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
        >
          <Star className="w-5 h-5" />
          ساغلاملىق پايدىسى
        </button>
        <button
          onClick={() => setActiveTab('tips')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'tips' ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg scale-105' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
        >
          <AlertCircle className="w-5 h-5" />
          دىققەت قىلىدىغان نۇقتىلار
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'history' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105' : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'}`}
        >
          <BookOpen className="w-5 h-5" />
          تارىخى ۋە مەنبەسى
        </button>
      </div>

      {/* تەبىرلەر مەزمۇنى */}
      <div className="animate-fade-in">
        {activeTab === 'recipe' && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-800 text-2xl mb-6 flex items-center gap-3">
              <Zap className="text-amber-600 w-7 h-7" />
              تەپسىلىي پىشۇرۇش يوللىرى
            </h4>
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-lg bg-white p-6 rounded-2xl shadow-inner font-mono">
              {item.recipe || item.description}
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl text-center shadow-md">
                <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">ۋاقىت</div>
                <div className="font-bold text-lg">{item.cookingTime || '45 مىنۇت'}</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center shadow-md">
                <Flame className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">قىيىنلىق دەرىجىسى</div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium mt-1 ${difficultyColors[item.difficulty] || 'bg-yellow-100 text-yellow-800'}`}>
                  {item.difficulty || 'ئوتتۇرا'}
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center shadow-md">
                <Thermometer className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">تېمپېراتۇرا</div>
                <div className="font-bold text-lg">180-200°C</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center shadow-md">
                <Users className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">كىشى سانى</div>
                <div className="font-bold text-lg">4-6 كىشى</div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl">
              <h5 className="font-bold text-gray-800 text-xl mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                مۇھىم ئەسكەرتىش
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>تازا ماتېرىياللارنى ئىشلىتىڭ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>پىشۇرۇش ۋاقتىنى قاتتىق كونترول قىلىڭ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>تېمپېراتۇرا ۋە ۋاقىتنى پايدىلانغان ماتېرىيالغا قاراپ تەڭشەڭ</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-800 text-2xl mb-6 flex items-center gap-3">
              <Heart className="text-green-600 w-7 h-7" />
              ئۇزۇقلۇق تەركىبى (ھەر بىر پورسىيە ئۈچۈن)
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-5 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-red-500">
                  {nutritionFacts[item.name]?.calories || '350'}
                </div>
                <div className="text-sm text-gray-600 mt-1">كالورىيە</div>
                <div className="text-xs text-gray-500 mt-2">تەڭشەنگەن كۈندىلىك ئېھتىياجنىڭ %15</div>
                <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-blue-500">
                  {nutritionFacts[item.name]?.protein || '25g'}
                </div>
                <div className="text-sm text-gray-600 mt-1">پروتېين</div>
                <div className="text-xs text-gray-500 mt-2">ئوتتۇرا ھەجىملىك</div>
                <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-amber-500">
                  {nutritionFacts[item.name]?.carbs || '45g'}
                </div>
                <div className="text-sm text-gray-600 mt-1">كاربوهىدرات</div>
                <div className="text-xs text-gray-500 mt-2">ئېنېرگىيە مەنبەسى</div>
                <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-yellow-600">
                  {nutritionFacts[item.name]?.fat || '15g'}
                </div>
                <div className="text-sm text-gray-600 mt-1">ياغ</div>
                <div className="text-xs text-gray-500 mt-2">ساغلام ياغلار</div>
                <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
                  <Apple className="w-5 h-5 text-green-600" />
                  ۋىتامىنلار
                </h5>
                <div className="flex flex-wrap gap-2">
                  {(nutritionFacts[item.name]?.vitamins || 'B1, B2, C').split(',').map((vitamin, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-sm">
                      {vitamin.trim()}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
                  <Carrot className="w-5 h-5 text-orange-600" />
                  مىنېراللار
                </h5>
                <div className="flex flex-wrap gap-2">
                  {(nutritionFacts[item.name]?.minerals || 'تۆمۈر، كالىي').split('،').map((mineral, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm">
                      {mineral.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-bold text-gray-700 text-xl mb-4">مۇھىم ئۇزۇقلۇق ماددىلىرى</h5>
              <div className="flex flex-wrap gap-3">
                {item.ingredients?.map((ingredient, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-xl border border-green-200">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-800 font-medium">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-800 text-2xl mb-6 flex items-center gap-3">
              <Star className="text-blue-600 w-7 h-7" />
              ساغلاملىققا بولغان پايدىلىرى
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {(healthBenefits[item.name] || [
                { benefit: 'ھەزىم جەريانىنى ياخشىلايدۇ', description: 'تەبىئىي يىپەكلىك ماددىلار باي' },
                { benefit: 'ئېنېرگىيە بېرىدۇ', description: 'مۇرەككەپ كاربوهىدراتلار' },
                { benefit: 'پروتېين مەنبەسى', description: 'ساغلام گۆشتىن ئېلىنغان' },
                { benefit: 'تومۇر ساغلاملىقىنى قوغدايدۇ', description: 'تەبىئىي ياغلار' },
                { benefit: 'باغىرەك ساغلاملىقى', description: 'كالىي باي' },
                { benefit: 'مېڭە پۇقرالىقى', description: 'ۋىتامىن B گۇرۇپپىسى' }
              ]).map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-lg mb-2">{benefit.benefit}</div>
                      <div className="text-gray-600">{benefit.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-2xl">
              <h5 className="font-bold text-blue-800 text-xl mb-4 flex items-center gap-2">
                <Users2 className="w-5 h-5" />
                تەۋسىيە قىلىنىدىغان كەسىپلەر:
              </h5>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm text-blue-700 font-medium shadow-sm">
                  ئەتچىلەر
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm text-blue-700 font-medium shadow-sm">
                  تەنتەربىيەچىلەر
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm text-blue-700 font-medium shadow-sm">
                  ھەزىم قىيىنچىلىقى بولغانلار
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm text-blue-700 font-medium shadow-sm">
                  ئېنېرگىيە ئېھتىياجى يۇقىرىلار
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm text-blue-700 font-medium shadow-sm">
                  ئۆسمۈرلەر
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm text-blue-700 font-medium shadow-sm">
                  ھامىلدار ۋە ئەملىك ئاياللار
                </span>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-700 text-lg mb-4">ئەڭ ياخشى ۋاقىت</h5>
                <div className="text-2xl font-bold text-blue-600">تۈشلۈك ياكى كەچلىك</div>
                <div className="text-gray-600 mt-2">ھەزىم قىلىش ئۈچۈن ماس، كەچلىك ئاشقازاننى قاينىتىدۇ</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-700 text-lg mb-4">ماسلىشىدىغان ئىچىملەر</h5>
                <div className="text-xl font-medium text-green-600">چاي، قىمىز، ئىسسىق سۇت</div>
                <div className="text-gray-600 mt-2">ھەزىمنى ياخشىلايدۇ، تەمنى تەڭشەيدۇ</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-3xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-800 text-2xl mb-6 flex items-center gap-3">
              <AlertCircle className="text-purple-600 w-7 h-7" />
              دىققەت قىلىدىغان نۇقتىلار ۋە تېخنىكىلار
            </h4>
            
            <div className="space-y-6">
              {(cookingTips[item.name] || [
                { tip: 'خەمىرنى ئۇرۇش ۋاقتىنى ئۇزۇن قىلىڭ', reason: 'گاز چىقىرىش ئۈچۈن' },
                { tip: 'ئىشلىتىدىغان ماتېرىياللارنى تەزە تەييارلاڭ', reason: 'تەزلىقىنى ساقلاپ قېلىش ئۈچۈن' },
                { tip: 'تېمپېراتۇرا كونترول قىلىش مۇھىم', reason: 'ھەر بىر تاماق ئۈچۈن ماس تېمپېراتۇرا تۇتۇڭ' },
                { tip: 'تەرتىپ بويىچە پىشۇرۇڭ', reason: 'ھەممە ماتېرىياللار بىردەك پىشىشى ئۈچۈن' },
                { tip: 'تەجرىبىلەرنى قايتا-قايتا ئېلىپ بېرىڭ', reason: 'ئەڭ ياخشى نەتىجىگە ئېرىشىش ئۈچۈن' }
              ]).map((tip, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 text-lg mb-2">{tip.tip}</div>
                    <div className="text-gray-600 bg-purple-50 p-3 rounded-lg">
                      <span className="font-medium text-purple-700">سەۋەبى: </span>
                      {tip.reason}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-purple-700 text-lg mb-3">ئەڭ ياخشى ماتېرىيال</h5>
                <div className="text-gray-800">تازا گۆش ۋە سەۋزىلەر</div>
                <div className="text-sm text-gray-500 mt-2">ماي ۋە ئۇن تازىسىغا دىققەت قىلىڭ</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-purple-700 text-lg mb-3">ساقلاش ئۇسۇلى</h5>
                <div className="text-gray-800">مۇزلاتقۇدا 3 كۈنگىچە</div>
                <div className="text-sm text-gray-500 mt-2">قايناق ھالەتتە ساقلىماڭ</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-purple-700 text-lg mb-3">قايتا قىزىتىش</h5>
                <div className="text-gray-800">مىكرو دولقۇن ۋە تاماق قىزىتقۇدا</div>
                <div className="text-sm text-gray-500 mt-2">قايتا قىزىتقاندا تېمى ئۆزگىرىشى مۇمكىن</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-800 text-2xl mb-6 flex items-center gap-3">
              <BookOpen className="text-indigo-600 w-7 h-7" />
              تارىخى ۋە مەنبەسى
            </h4>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-800 text-xl mb-4">كەلتۈرۈپ چىقارغان رايون</h5>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-lg font-medium">شىنجاڭ، قەشقەر، خوتەن رايونلىرى</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.name} قەدىمدىن تارتىپ ئۇيغۇرلارنىڭ تۇرۇشلۇق رايونلىرىدا پىشۇرۇلۇپ كەلگەن.
                  بۇ تاماقنىڭ تارىخى 2000 يىلدىن ئاشقان بولۇپ، ئىپەك يولى بويىدىكى سودىگەرلەر ۋە
                  ساياھەتچىلەر تەرىپىدىن پۈتۈن دۇنياغا تارقالغان.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-800 text-xl mb-4">تەرەققىيات جەريانى</h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">قەدىمىي دەۋر (مىلادىيەدىن بۇرۇن)</div>
                      <div className="text-gray-600">باشلىنىش پەسىلى، ئاساسلىق ماتېرىياللار</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">ئوتتۇرا ئەسىرلەر</div>
                      <div className="text-gray-600">تېخنىكىلارنىڭ مۇكەممەللىشىشى، رېسېپتلەرنىڭ يازما ھۆججەتلەرگە كىرىشى</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">ھازىرقى زامان</div>
                      <div className="text-gray-600">خەلقئارالىق تونۇش، تۇرۇشلۇق رايوندىن چىقىپ پۈتۈن دۇنياغا تارقىلىش</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-800 text-xl mb-4">مەدەنىيەت ئەھمىيىتى</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <div className="font-medium text-indigo-700">بايراملار</div>
                    <div className="text-sm text-gray-600">نەۋرۇز، روزىھەيت قاتارلىق بايراملاردا تەييارلىنىدۇ</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <div className="font-medium text-indigo-700">توي-تۆكۈنلەر</div>
                    <div className="text-sm text-gray-600">نېكاھ، خەتنە-سۈننەت قاتارلىق مۇناسىۋەتلىك پائالىيەتلەردە</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl">
                <h5 className="font-bold text-indigo-800 text-xl mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  تونۇش ۋە مۇكاپاتلار
                </h5>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-700">
                    مىللىي مەدەنىيەت مىراسى
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-700">
                    يۇنېسكو نامزات تىزىملىكى
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-700">
                    دۇنيا تائام مۇسابىقىسى ئالتۇن مېدالى
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ئۇسسۇللار تەپسىلاتى كومپونېنتى
const DanceDetailCard = ({ item }) => {
  const [activeTab, setActiveTab] = useState('movements');

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActiveTab('movements')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'movements' ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105' : 'bg-pink-100 text-pink-800 hover:bg-pink-200'}`}
        >
          <Users className="w-5 h-5" />
          ھەرىكەتلىرى
        </button>
        <button
          onClick={() => setActiveTab('music')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'music' ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg scale-105' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
        >
          <Music className="w-5 h-5" />
          مۇزىكىسى
        </button>
        <button
          onClick={() => setActiveTab('costume')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'costume' ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
        >
          <Shirt className="w-5 h-5" />
          كىيىم-كېچەك
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'history' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
        >
          <BookOpen className="w-5 h-5" />
          تارىخى
        </button>
      </div>

      <div className="animate-fade-in">
        {activeTab === 'movements' && (
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-3xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-800 text-2xl mb-6">ئۇسسۇل ھەرىكەتلىرى</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-pink-600">12</div>
                <div className="text-sm text-gray-600">ئاساسىي ھەرىكەت</div>
                <div className="text-xs text-gray-500 mt-2">قول، پۇت، بەدەن ھەرىكەتلىرى</div>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-pink-600">3</div>
                <div className="text-sm text-gray-600">قاتلام</div>
                <div className="text-xs text-gray-500 mt-2">باشلىنىش، ئوتتۇرا، ئاخىر قاتلام</div>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-pink-600">60</div>
                <div className="text-sm text-gray-600">مىنۇت (تەربىيە)</div>
                <div className="text-xs text-gray-500 mt-2">ھەر قېتىملىق تەربىيە ۋاقتى</div>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-md">
                <div className="text-3xl font-bold text-pink-600">4/4</div>
                <div className="text-sm text-gray-600">رىتېم</div>
                <div className="text-xs text-gray-500 mt-2">ئاساسىي رىتېم ئۆلچىمى</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h5 className="font-bold text-gray-800 text-xl mb-4">ئاساسىي ھەرىكەتلەر</h5>
              <div className="space-y-4">
                {['قول ھەرىكىتى', 'پۇت ھەرىكىتى', 'بەدەن ئېگىشى', 'بۇرۇلۇش', 'چوڭقۇرلۇق', 'سۈرئەت'].map((move, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center">
                      {idx + 1}
                    </div>
                    <div className="font-medium text-gray-800">{move}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'music' && (
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-3xl p-8 shadow-lg">
            <h4 className="font-bold text-gray-800 text-2xl mb-6">ئۇسسۇل مۇزىكىسى</h4>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-800 text-xl mb-4">ئەسلىكى ئاسۋابلار</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['تەمبۇر', 'سەتار', 'راۋاپ', 'داپ', 'نەي', 'سۇڭنای'].map((instrument, idx) => (
                    <div key={idx} className="bg-purple-50 p-4 rounded-xl text-center">
                      <div className="font-medium text-purple-700">{instrument}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h5 className="font-bold text-gray-800 text-xl mb-4">مۇقاملار</h5>
                <div className="space-y-3">
                  {['رەۋاپ مۇقامى', 'چەببىيات مۇقامى', 'مۇشاۋىرەك مۇقامى', 'پەنچگاھ مۇقامى'].map((muqam, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">{muqam}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// بايراملار تەپسىلاتى كومپونېنتى
const FestivalDetailCard = ({ item }) => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-3xl p-8 shadow-lg">
        <h4 className="font-bold text-gray-800 text-2xl mb-6">{item.name} بايرىمى</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h5 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-600" />
                ۋاقىت ۋە تارىخ
              </h5>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">{item.date || 'ھەر يىلى مارت ئېيى'}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.description || 'قەدىمىي تارىخقا ئىگە بايرام، ھەر يىلى مىلادىيە 21-مارتتا ئۆتكۈزۈلىدۇ.'}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h5 className="font-bold text-gray-800 text-xl mb-4">ئەنئەنىلەر</h5>
              <ul className="space-y-3">
                {(item.traditions || ['سۇمۇلۇق تەييارلاش', 'ئۆي تازىلاش', 'يېڭى كىيىم كىيىش']).map((tradition, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tradition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h5 className="font-bold text-gray-800 text-xl mb-4">پائالىيەتلەر</h5>
              <div className="flex flex-wrap gap-3">
                {(item.activities || ['مۇزاكىرە', 'ئۇسسۇل', 'ناخشا', 'تەنتەربىيە ئويۇنلىرى']).map((activity, idx) => (
                  <span key={idx} className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h5 className="font-bold text-gray-800 text-xl mb-4">ئالاھىدە تائاملار</h5>
              <div className="space-y-2">
                {['سۇمۇلۇق', 'پولۇ', 'سامسا', 'چۆچۈرە'].map((food, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">{food}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ئاساسىي CultureTab كومپونېنتى
const CultureTab = ({ 
  culturalTopics = [], 
  activeSubTab, 
  setActiveSubTab, 
  outputText, 
  setOutputText, 
  loading, 
  handleCulture 
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemDetail, setShowItemDetail] = useState(false);
  const [topics, setTopics] = useState([]);

  // بىرىنچى بار كىرگەندە مەلۇماتلارنى تەييارلاش
  useEffect(() => {
    const extended = [
      ...culturalTopics,
      {
        id: 'uyghur-cuisine',
        title: 'ئۇيغۇر تائاملىرى',
        description: 'ئۇيغۇر مىللىي تائاملىرى ۋە پىششىقلىق سەنئىتى',
        icon: Utensils,
        keywords: ['لەغمەن', 'پولۇ', 'سامسا', 'مانتا', 'چۆچۈرە', 'گۆش قېيما', 'توخۇ قۆرمىسى'],
        color: 'from-amber-500 to-orange-500',
        items: [
          {
            id: 'laghman',
            name: 'لەغمەن',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇرچە لەغمەن - ئۇزۇن تەرەپلىمە خەمىر ۋە گۆش قوشۇلۇپ پىشۇرىلىدىغان مىللىي تائام',
            ingredients: ['ئۇن', 'گۆش', 'پىياز', 'سەبزە', 'قىزىلمۇچ', 'بۇغداي', 'سۇ', 'تۇز'],
            recipe: `1. خەمىر يۇغۇرۇش:
   - 500g ئۇن
   - 1 چىمچە تۇز
   - 250ml سۇ
   - 30 مىنۇت ئۇرۇش

2. تەرەپلىمە قىلىش:
   - خەمىرنى يۇمشاق قىلىڭ
   - 15 مىنۇت پىشىشقا قويۇڭ
   - ئۇزۇن تەرەپلىمە قىلىڭ

3. قورۇش تەييارلاش:
   - گۆشنى كىچىك توغراپ تەييارلاڭ
   - سەبزىلەرنى توغراڭ
   - قىزىلمۇچ قوشۇڭ

4. پىشۇرۇش:
   - قورۇشنى قايناق سۇدا پىشۇرۇڭ
   - تەرەپلىمىلەرنى پىشۇرۇڭ
   - ئارىلاشتۇرۇپ بېرىڭ`,
            cookingTime: '60 مىنۇت',
            difficulty: 'ئوتتۇرا',
            difficultyColor: 'bg-yellow-100 text-yellow-800'
          },
          {
            id: 'polo',
            name: 'پولۇ',
            image: 'https://images.unsplash.com/photo-1602237979298-1e6b8c5d1e5f?auto=format&fit=crop&w=800&q=80',
            description: 'گۈرۈچ، گۆش ۋە ھەر خىل سەبزىلەر بىلەن تەييارلىنىدىغان مىللىي تائام',
            ingredients: ['گۈرۈچ', 'گۆش', 'سەۋەز', 'ھەسەل', 'زىرە', 'ئىشتاپان', 'ماي'],
            recipe: `1. گۈرۈچنى بۇزۇپ تەييارلاش:
   - گۈرۈچنى يۇيۇڭ
   - 30 مىنۇت سۇدا تۇتۇڭ

2. گۆش قورۇش:
   - گۆشنى توغراپ قورۇڭ
   - سەۋەز، ھەسەل قوشۇڭ
   - زىرە، ئىشتاپان قوشۇڭ

3. پىشۇرۇش:
   - گۈرۈچنى قازانغا سېلىڭ
   - قورۇش بىلەن ئارىلاشتۇرۇڭ
   - 20 مىنۇت پىشقۇزۇڭ`,
            cookingTime: '60 مىنۇت',
            difficulty: 'ئاسان',
            difficultyColor: 'bg-green-100 text-green-800'
          },
          {
            id: 'samsa',
            name: 'سامسا',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae05?auto=format&fit=crop&w=800&q=80',
            description: 'تونۇردا پىشۇرىلىدىغان گۆشلىك بۇيرۇق',
            ingredients: ['ئۇن', 'گۆش', 'پىياز', 'زىرە', 'قارامۇچ', 'تۇز', 'ماي'],
            recipe: `1. خەمىر يۇغۇرۇش:
   - ئۇن، سۇ، تۇز ئارىلاشتۇرۇڭ
   - 20 مىنۇت ئۇرۇڭ

2. ئىچىنى تەييارلاش:
   - گۆشنى كىچىك توغراڭ
   - پىياز قوشۇڭ
   - زىرە، قارامۇچ سېپىڭ

3. شەكىللەندۈرۈش:
   - خەمىرنى يايىڭ
   - ئىچىنى سېلىڭ
   - تۆت چاسىغا قىلىپ بېكىتىڭ

4. تونۇردا پىشۇرۇش:
   - تونۇرنى قىزىتىڭ
   - سامسىلارنى يېپىڭ
   - 25-30 مىنۇت پىشقۇزۇڭ`,
            cookingTime: '90 مىنۇت',
            difficulty: 'قىيىن',
            difficultyColor: 'bg-red-100 text-red-800'
          },
          {
            id: 'manta',
            name: 'مونتا',
            image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
            description: 'خورۇمچا شەكىلدىكى گۆشلىك خەمىرلىك تائام',
            ingredients: ['ئۇن', 'گۆش', 'پىياز', 'قارامۇچ', 'قىزىلمۇچ', 'قايناق سۇ'],
            cookingTime: '45 مىنۇت',
            difficulty: 'ئوتتۇرا',
            difficultyColor: 'bg-yellow-100 text-yellow-800'
          },
          {
            id: 'chochure',
            name: 'چۆچۈرە',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
            description: 'كىچىك كاۋاپلار، تەكشە تۆمۈر تىكىلەردە پىشۇرىلىدۇ',
            ingredients: ['گوڭ گۆشى', 'سەۋەز', 'پىياز', 'زىرە', 'قىزىلمۇچ'],
            cookingTime: '20 مىنۇت',
            difficulty: 'ئاسان',
            difficultyColor: 'bg-green-100 text-green-800'
          },
          {
            id: 'gosh-qeyma',
            name: 'گۆش قېيما',
            image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇچقۇن گۆش قېيما ۋە سەۋزىلەر بىلەن تەييارلىنىدۇ',
            ingredients: ['گوڭ گۆشى', 'سەۋەز', 'پىياز', 'قىزىلمۇچ', 'زىرە'],
            cookingTime: '30 مىنۇت',
            difficulty: 'ئاسان',
            difficultyColor: 'bg-green-100 text-green-800'
          },
          {
            id: 'tohu-qormisi',
            name: 'توخۇ قۆرمىسى',
            image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=800&q=80',
            description: 'توخۇ گۆشى ۋە زىرائەتلەر بىلەن تەييارلىنىدۇ',
            ingredients: ['توخۇ گۆشى', 'سەۋەز', 'ھەسەل', 'پۇرچاق', 'پىياز', 'قىزىلمۇچ'],
            cookingTime: '40 مىنۇت',
            difficulty: 'ئاسان',
            difficultyColor: 'bg-green-100 text-green-800'
          }
        ]
      },
      {
        id: 'uyghur-games',
        title: 'ئۇيغۇر ئويۇنلىرى',
        description: 'ئۇيغۇر مىللىي ئويۇنلىرى ۋە بۆسۈكچىلىكى',
        icon: Gamepad2,
        keywords: ['ئوغلاق تاشلاش', 'بەل باغلاش', 'تۆگە يېرىش', 'كۈرەش', 'ئات چاپقۇزۇش'],
        color: 'from-blue-500 to-cyan-500',
        items: [
          {
            id: 'oghlak-tashlash',
            name: 'ئوغلاق تاشلاش',
            image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇرلارنىڭ ئەنئەنىۋىي تەنتەربىيە ئويۇنى',
            rules: 'ئوغلاق تاشلاش ئويۇنىدا ئىككى گۇرۇپپا بولىدۇ. ھەر بىر گۇرۇپپا ئوغلاقنى ئۇزۇنراق تاشلىغان تەرەپ يېڭىدۇ. ئويۇن 3 قېتىم ئۇتۇش سېستىمىسى بويىچە ئېلىپ بېرىلىدۇ.',
            equipment: ['ئوغلاق (ئۆلچەملىك تاش)', 'چېگرا بەلگىسى', 'ئۆلچەش ئەسۋابى'],
            players: '2 گۇرۇپپا، ھەر گۇرۇپپىدا 5-10 ئادەم',
            history: 'قەدىمىي تارىخقا ئىگە، قەدىمدىن تارتىپ ياش-قېرى تەرەپتىن قوللىنىپ كەلگەن'
          },
          {
            id: 'bel-baghlish',
            name: 'بەل باغلاش',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f8b1c3a0?auto=format&fit=crop&w=800&q=80',
            description: 'كۈچ سىناش ئويۇنى',
            rules: 'ئىككى كىشى بەل باغلاپ، بىر-بىرىنى يىقىتىش ئۈچۈن كۈچ سىناشىدۇ. بېلەك بىلەن تۇتۇش ۋە تارتىش تېخنىكىلىرى قوللىنىلىدۇ.',
            equipment: ['بەل (كەمەر)', 'قوغدىغۇچى كىيىم'],
            players: '2 ئادەم',
            history: 'ئەنئەنىۋىي كۈچ سىناش ئويۇنى، كۆپ ئەۋلادلار ئارقىلىق داۋاملاشتۇرۇلغان'
          }
        ]
      },
      {
        id: 'uyghur-festivals',
        title: 'ئۇيغۇر بايراملىرى',
        description: 'مىللىي ۋە دىنىي بايراملار',
        icon: Calendar,
        keywords: ['نەۋرۇز', 'روزىھەيت', 'قۇربان ھەيت', 'مەۋلىد', 'ئىسقابات'],
        color: 'from-purple-500 to-pink-500',
        items: [
          {
            id: 'nawruz',
            name: 'نەۋرۇز بايرىمى',
            image: 'https://images.unsplash.com/photo-1522778155030-5e51a0e7f18c?auto=format&fit=crop&w=800&q=80',
            description: 'يېڭى يىلنى قارشى ئېلىش بايرىمى',
            date: 'ھەر يىلى 21-مارت',
            traditions: ['سۇمۇلۇق تەييارلاش', 'ئۆي تازىلاش', 'يېڭى كىيىم كىيىش', 'قوهۇم-ئاقرىشىلار بىلەن كۆرۈشۈش', 'ئەتىر پۇراش'],
            activities: ['مۇزاكىرە', 'ئۇسسۇل', 'ناخشا', 'تەنتەربىيە ئويۇنلىرى', 'تائام زىياپىتى']
          },
          {
            id: 'rozihait',
            name: 'روزىھەيت بايرىمى',
            image: 'https://images.unsplash.com/photo-1584223634744-81e2e0f7b880?auto=format&fit=crop&w=800&q=80',
            description: 'رەمەزان ئېيىنىڭ ئاخىرىدىكى بايرام',
            date: 'ھىجرىيە تەقۋىمى بويىچە شەۋۋال ئېيىنىڭ 1-كۈنى',
            traditions: ['بايرام نامىزى', 'قوهۇم-ئاقرىشىلار بىلەن كۆرۈشۈش', 'تۆھپە بېرىش', 'يېتېم-يېسىرلەرگە ياردەم'],
            activities: ['ئائىلە زىيارەتلىرى', 'يېمەكلىك تارقىتىش', 'پۇل-مەبلەغ بېرىش', 'ئىپتىخار چايى']
          },
          {
            id: 'qurban-hait',
            name: 'قۇربان ھەيت',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
            description: 'قۇربانلىق بايرىمى',
            date: 'ھىجرىيە زىلھەججە ئېيىنىڭ 10-كۈنى',
            traditions: ['قۇربانلىق قىلىش', 'گۆش تارقىتىش', 'پەرز نامىزى', 'ئائىلە بىرلىكى'],
            activities: ['قۇربانلىق مۇراسىمى', 'گۆش تارقىتىش', 'ئائىلە جەمىيىتى', 'ياردەم پائالىيىتى']
          }
        ]
      },
      {
        id: 'uyghur-houses',
        title: 'ئۇيغۇر ئۆي-مەكتەپلىرى',
        description: 'مىللىي ئارخىتېكتۇرا ۋە تۇرالغۇلار',
        icon: Home,
        keywords: ['ئايۋان', 'تۆشەك', 'كىرىش ھۇجرىسى', 'ھويلى', 'تام سۈزىش'],
        color: 'from-emerald-500 to-teal-500',
        items: [
          {
            id: 'traditional-house',
            name: 'ئەنئەنىۋىي ئۇيغۇر ئۆيى',
            image: 'https://images.unsplash.com/photo-1564013799919-ab488f6b43f8?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇر ئارخىتېكتۇرا ئۇسلۇبىدىكى تىپىك ئۆي',
            features: ['ئايۋان', 'كەڭ ھويلى', 'ئۆي ئىچى باغچىسى', 'رەڭدار كۆزنىتىشلەر', 'ياغاچ ئويما نەقىشلەر'],
            rooms: ['كىرىش ھۇجرىسى', 'ئوتتۇرا ھۇجرا', 'ئارقا ھۇجرا', 'ئاشخانا', 'ھەممام', 'ئامبار'],
            materials: ['پىششىق خىش', 'ياغاچ', 'كىرپىچ', 'تاش', 'لاي'],
            history: 'ئىپەك يولى مەدەنىيىتىدىن كەلگەن، 2000 يىللىق تارىخقا ئىگە'
          },
          {
            id: 'summer-house',
            name: 'يازلىق ئۆي',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            description: 'يىللىق ئىستىمال ئۈچۈن لايىھىلەنگەن ئۆي',
            features: ['يۇقىرى شەپكەلىك', 'كەڭ دەرۋازا', 'سەل كىرەرلىك پەنچەرە', 'سۇ ساقلاش سىستېمىسى'],
            special: ['سەل كىرەرلىك قۇرۇلما', 'ياخشى ھاۋا ئالماشتۇرۇش', 'سەل كىرەرلىك مۇھىت', 'تەبىئىي سىرتلاش'],
            rooms: ['ئاساسىي ھۇجرا', 'ئاشپەزخانا', 'سۇ-ھەممام', 'ئاشۇرۇش بۆلۈمى']
          },
          {
            id: 'winter-house',
            name: 'قىشلىق ئۆي',
            image: 'https://images.unsplash.com/photo-1600573472592-945b76b9e0f9?auto=format&fit=crop&w=800&q=80',
            description: 'قىشلىق ئىشلىتىش ئۈچۈن لايىھىلەنگەن ئۆي',
            features: ['ئىزولاتسىيە', 'تونۇر', 'تاقاش سىستېمىسى', 'قېلىن دىۋار'],
            special: ['سۇغۇققا چىداملىق', 'ئىزولاتسىيە ئۈستۈنلۈكى', 'تاقاش ئىقتىدارى'],
            materials: ['قېلىن خىش', 'ئىزولاتسىيە ماتېرىيالى', 'ياغاچ', 'تاش']
          }
        ]
      },
      {
        id: 'uyghur-sports',
        title: 'ئۇيغۇر تەنتەربىيەسى',
        description: 'مىللىي تەنتەربىيە ۋە بەدەن تەربىيەسى',
        icon: Dumbbell,
        keywords: ['كۈرەش', 'تۆگە يېرىش', 'ئات چاپقۇزۇش', 'ئوغلاق تاشلاش', 'كەمە تاشلاش'],
        color: 'from-red-500 to-orange-600',
        items: [
          {
            id: 'kuresh',
            name: 'كۈرەش',
            image: 'https://images.unsplash.com/photo-1571087786519-46e0d5d5b1b6?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇر مىللىي كۈچ سىناش ئويۇنى',
            rules: 'ئىككى كىشى بەل باغلاپ، بىر-بىرىنى يىقىتىش ئۈچۈن كۈچ سىناشىدۇ. 3 راۋۇند ئېلىپ بېرىلىپ، ئىككى راۋۇندىدا غەلىبە قىلغان تەرەپ يېڭىدۇ.',
            techniques: ['تەگكۈزۈش', 'تارتىش', 'قاقشاش', 'بۇرۇلۇش', 'ئېگىش'],
            competitions: ['يەرلىك مۇسابىقە', 'رايون مۇسابىقىسى', 'مىللىي مۇسابىقە', 'خەلقئارالىق مۇسابىقە'],
            history: '1000 يىلدىن ئاشقان تارىخقا ئىگە، قەدىمىي جەڭ تېخنىكىلىرىدىن كەلگەن'
          },
          {
            id: 'toge-yerish',
            name: 'تۆگە يېرىش',
            image: 'https://images.unsplash.com/photo-1534438314043-5e224a82031a?auto=format&fit=crop&w=800&q=80',
            description: 'تۆگە مىنىش پەنلىرى',
            rules: 'تۆگە مىنىپ بەلگىلەنگەن مەسىپىنى ئەڭ تېز بېكىتىش. مەسىپە ئۇزۇنلۇقى 5-10 كىلومېتىر بولۇپ، ئەڭ تېز مۇداۋىملىقى يۇقىرى بولغان تەرەپ يېڭىدۇ.',
            skills: ['تۆگە باشقۇرۇش', 'تېزلىق كونترول قىلىش', 'مەسىپە ئۆلچەش', 'تۆگە بىخەتەرلىكى'],
            events: ['تۆگە يېرىش مۇسابىقىسى', 'تۆگە گۈزەللىك مۇسابىقىسى', 'تۆگە مەسىپە مۇسابىقىسى'],
            history: 'ئىپەك يولىدا تۆگە قاتارلىرى بىلەن باغلىنىشلىق، قەدىمىي تارىخقا ئىگە'
          },
          {
            id: 'at-chapquzush',
            name: 'ئات چاپقۇزۇش',
            image: 'https://images.unsplash.com/photo-1528102187561-77a00903f1e9?auto=format&fit=crop&w=800&q=80',
            description: 'ئات مىنىش ۋە يېرىش مۇسابىقىسى',
            rules: 'ئات مىنىپ مەلۇم مەسىپىنى ئەڭ تېز بېكىتىش. مەسىپە ئۇزۇنلۇقى 1-3 كىلومېتىر بولۇپ، ئەڭ تېز مۇداۋىملىقى يۇقىرى بولغان تەرەپ يېڭىدۇ.',
            skills: ['ئات باشقۇرۇش', 'مۇداۋىملىق', 'تېزلىق كونترول قىلىش', 'ئات بىخەتەرلىكى'],
            events: ['ئات يېرىش مۇسابىقىسى', 'ئات سەنئىتى مۇسابىقىسى', 'ئات كۈچ سىناش مۇسابىقىسى'],
            history: 'قەدىمىي دەۋردىن تارتىپ ياش-قېرى تەرەپتىن قوللىنىپ كەلگەن'
          }
        ]
      },
      {
        id: 'uyghur-music',
        title: 'ئۇيغۇر مۇزىكىسى',
        description: 'مىللىي مۇزىكا ۋە ئەنئەنىۋىي ئەسۋابلار',
        icon: Music,
        keywords: ['مۇقام', 'داستان', 'تەمبۇر', 'سەتار', 'راۋاپ', 'داپ'],
        color: 'from-indigo-500 to-purple-600',
        items: [
          {
            id: 'muqam',
            name: 'ئون ئىككى مۇقام',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇر كلاسسىك مۇزىكىسىنىڭ ئاساسى',
            types: ['رەۋاپ مۇقامى', 'چەببىيات مۇقامى', 'مۇشاۋىرەك مۇقامى', 'پەنچگاھ مۇقامى', 'ئوژال مۇقامى'],
            instruments: ['تەمبۇر', 'سەتار', 'داپ', 'نەي', 'راۋاپ', 'سۇڭنای'],
            characteristics: ['مۇرەككەپ مېلودىيە', 'ئالاھىدە رىتېم', 'تېپىشلىق ئاۋاز', 'ئۇزۇن مۇقام'],
            history: 'يۇنېسكو دۇنيا مەدەنىيەت مىراسى تىزىملىكىگە كىرگۈزۈلگەن، 1000 يىلدىن ئاشقان تارىخقا ئىگە'
          },
          {
            id: 'dastan',
            name: 'داستان',
            image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇر ئەنئەنىۋىي راۋايەتچىلىكى',
            types: ['تارىخىي داستان', 'رومانتىك داستان', 'ئەپسانەۋى داستان', 'ھەجۋى داستان'],
            instruments: ['تەمبۇر', 'سەتار', 'داپ', 'راۋاپ'],
            characteristics: ['ھېكايە ئېيتىش', 'ئاۋازلىق ئىپادىلەش', 'رىتېملىق ئېيتىش', 'مېلودىيە بىلەن ئارىلاش'],
            history: 'قەدىمىي تارىختىن كەلگەن، كۆپ ئەۋلادلار ئارقىلىق داۋاملاشتۇرۇلغان'
          }
        ]
      },
      {
        id: 'uyghur-crafts',
        title: 'ئۇيغۇر سەنئەت-ھۈنەرلىرى',
        description: 'مىللىي قول ھۈنەرلىرى ۋە سەنئەتلىرى',
        icon: Scissors,
        keywords: ['كىلىمە', 'ئەتىر', 'ئېسلىق', 'ئۆيمە سەنئىتى', 'ياغاچ ئويما', 'مېتال ئىشلەش'],
        color: 'from-pink-500 to-rose-500',
        items: [
          {
            id: 'kilim',
            name: 'كىلىمە توقۇش',
            image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇر كىلىمە توقۇش سەنئىتى',
            materials: ['يۇڭ', 'پاختا', 'يىپەك', 'سۇن'],
            patterns: ['گۈل نۇسخىسى', 'ھەيۋان نۇسخىسى', 'گىئومېترىيەلىك نۇسخا', 'تارىخىي نۇسخا'],
            techniques: ['قولدا توقۇش', 'ماشىنىدا توقۇش', 'ئىككى تەرەپ توقۇش', 'مۇرەككەپ توقۇش'],
            history: '2000 يىلدىن ئاشقان تارىخقا ئىگە، ئىپەك يولىدىكى مۇھىم سودا بۇيۇملىرىدىن بىرى'
          },
          {
            id: 'oyma-saneti',
            name: 'ئۆيمە سەنئىتى',
            image: 'https://images.unsplash.com/photo-1605722243973-8c6c6ac6d246?auto=format&fit=crop&w=800&q=80',
            description: 'ياغاچ ۋە تاش ئۆيمە سەنئىتى',
            materials: ['ياغاچ', 'تاش', 'مەرمەر', 'پىششىق خىش'],
            patterns: ['گۈل نۇسخىسى', 'ھەرەم نۇسخىسى', 'ئەرەب نۇسخىسى', 'مۇرەككەپ گىئومېترىيە'],
            techniques: ['ياغاچ ئۆيمە', 'تاش ئۆيمە', 'مۇرەككەپ ئۆيمە', 'رەڭدار ئۆيمە'],
            history: 'قەدىمىي ئىسلام ئارخىتېكتۇرىسىدىن كەلگەن، مەسجىد ۋە ئۆيلەردە كەڭ قوللىنىلغان'
          }
        ]
      },
      {
        id: 'uyghur-clothing',
        title: 'ئۇيغۇر كىيىم-كېچەكلىرى',
        description: 'مىللىي كىيىم ۋە زىننەت بۇيۇملىرى',
        icon: Shirt,
        keywords: ['دوپپا', 'چاپان', 'كەمتەر', 'ياقا', 'ئېلىق', 'كەينەك'],
        color: 'from-yellow-500 to-amber-600',
        items: [
          {
            id: 'doppa',
            name: 'دوپپا',
            image: 'https://images.unsplash.com/photo-1523381210028-2c46d3d83d8a?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇر مىللىي باش كىيىمى',
            types: ['كىشىلەر دوپپىسى', 'ئاياللار دوپپىسى', 'بالىلار دوپپىسى', 'توي دوپپىسى'],
            patterns: ['گۈل نۇسخىسى', 'يولدۇز نۇسخىسى', 'ئۆسمۈر نۇسخىسى', 'مۇرەككەپ نۇسخا'],
            materials: ['بېغەز', 'يىپەك', 'كەشمىر', 'پاختا', 'سۇن'],
            history: 'قەدىمىي تارىختىن كەلگەن، ھەر يېشىدىكى ئۇيغۇرلار تەرىپىدىن كىيىلىدىغان'
          },
          {
            id: 'chapan',
            name: 'چاپان',
            image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80',
            description: 'ئۇيغۇر مىللىي ئەترۇسى',
            types: ['قىشلىق چاپان', 'يازلىق چاپان', 'توي چاپانى', 'مۇراسىم چاپانى'],
            patterns: ['يۇن چاپان', 'يىپەك چاپان', 'پاختا چاپان', 'مۇرەككەپ چاپان'],
            materials: ['يۇن', 'يىپەك', 'پاختا', 'سۇن', 'كەشمىر'],
            history: 'ئىپەك يولىدا كەڭ تارقالغان، قەدىمىي تارىختىن كەلگەن'
          }
        ]
      },
      {
        id: 'uyghur-language',
        title: 'ئۇيغۇر تىلى',
        description: 'مىللىي تىل ۋە يېزىق سىستېمىسى',
        icon: BookOpen,
        keywords: ['ئۇيغۇر يېزىقى', 'تارىخىي يېزىقلار', 'دىئالىكت', 'ئەدەبىيات'],
        color: 'from-cyan-500 to-blue-500',
        items: [
          {
            id: 'uyghur-script',
            name: 'ئۇيغۇر يېزىقى',
            description: 'ئۇيغۇر تىلىنىڭ يېزىق سىستېمىسى',
            history: '1000 يىلدىن ئاشقان تارىخقا ئىگە، كۆپ خىل يېزىقلار قوللىنىلغان',
            scripts: ['كۆنە ئۇيغۇر يېزىقى', 'ئەرەب يېزىقى', 'لاتىن يېزىقى', 'كىرېل يېزىقى'],
            features: ['ئوڭدىن سولغا يېزىلىدۇ', '28 ھەرپ', 'ئۇيغۇرچە ئاۋازلار']
          }
        ]
      }
    ];
    setTopics(extended);
  }, [culturalTopics]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowItemDetail(true);
  };

  const handleBackToList = () => {
    setShowItemDetail(false);
    setSelectedItem(null);
  };

  const currentTopic = topics.find(t => t.id === activeSubTab);
  const difficultyColors = {
    'ئاسان': 'bg-green-100 text-green-800 border-green-300',
    'ئوتتۇرا': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'قىيىن': 'bg-red-100 text-red-800 border-red-300'
  };

  const renderIcon = (IconComponent) => {
    if (!IconComponent) return null;
    return <IconComponent className="w-6 h-6" />;
  };

  const renderItemDetail = () => {
    if (!selectedItem) return null;

    if (activeSubTab === 'uyghur-cuisine') {
      return <FoodDetailCard item={selectedItem} />;
    } else if (activeSubTab === 'uyghur-games') {
      return <DanceDetailCard item={selectedItem} />;
    } else if (activeSubTab === 'uyghur-festivals') {
      return <FestivalDetailCard item={selectedItem} />;
    }

    // ئومۇمىي تەپسىلات قۇرۇلمىسى
    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x450?text=رەسىم+يوق';
              }}
            />
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 rounded-3xl p-6">
            <h4 className="font-bold text-gray-800 text-2xl mb-4">چۈشەندۈرۈش</h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              {selectedItem.description}
            </p>
          </div>

          {selectedItem.ingredients && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-800 text-2xl mb-4 flex items-center gap-2">
                <Utensils className="text-green-600" />
                خام ماتېرىياللار
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedItem.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-medium shadow-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedItem.rules && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-800 text-2xl mb-4 flex items-center gap-2">
                <Trophy className="text-blue-600" />
                قائىدىلەر
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedItem.rules}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {selectedItem.recipe && (
            <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-800 text-2xl mb-4 flex items-center gap-2">
                <Zap className="text-red-600" />
                پىششىق ئۇسۇلى
              </h4>
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed bg-white p-4 rounded-2xl text-lg font-mono">
                {selectedItem.recipe}
              </div>
            </div>
          )}

          {selectedItem.equipment && (
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-800 text-2xl mb-4 flex items-center gap-2">
                <Scissors className="text-purple-600" />
                ئۈسكۈنىلەر
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedItem.equipment.map((eq, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-800 rounded-xl text-sm font-medium shadow-sm"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedItem.traditions && (
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-800 text-2xl mb-4 flex items-center gap-2">
                <Calendar className="text-yellow-600" />
                ئەنئەنىلەر
              </h4>
              <ul className="space-y-3">
                {selectedItem.traditions.map((tradition, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{tradition}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedItem.activities && (
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-800 text-2xl mb-4 flex items-center gap-2">
                <Users className="text-indigo-600" />
                پائالىيەتلەر
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedItem.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-medium shadow-sm"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(selectedItem.players || selectedItem.date || selectedItem.history) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedItem.players && (
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200 rounded-3xl p-6">
                  <h4 className="font-bold text-gray-800 text-xl mb-3">قاتناشقۇچىلار</h4>
                  <p className="text-gray-700 text-lg">{selectedItem.players}</p>
                </div>
              )}
              {selectedItem.date && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-6">
                  <h4 className="font-bold text-gray-800 text-xl mb-3">ۋاقىت</h4>
                  <p className="text-gray-700 text-lg">{selectedItem.date}</p>
                </div>
              )}
              {selectedItem.history && (
                <div className="md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-6">
                  <h4 className="font-bold text-gray-800 text-xl mb-3">تارىخى</h4>
                  <p className="text-gray-700 text-lg">{selectedItem.history}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8">
        <div className="flex items-center gap-4 mb-3">
          <Palette className="w-10 h-10" />
          <div>
            <h2 className="text-4xl font-bold">ئۇيغۇر مەدەنىيىتى ۋە مىراسلىرى</h2>
            <p className="text-indigo-100 opacity-90 text-lg mt-2">
              ئۇيغۇر خەلقىنىڭ باي مەدەنىيىتى ۋە ئەنئەنىلىرىنى تونۇش
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Utensils className="w-4 h-4" />
            <span>7 خىل تائام</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Gamepad2 className="w-4 h-4" />
            <span>5 خىل ئويۇن</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4" />
            <span>3 خىل بايرام</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Music className="w-4 h-4" />
            <span>12 مۇقام</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Scissors className="w-4 h-4" />
            <span>10 خىل ھۈنەر</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Topics Grid */}
        {!activeSubTab && !loading && (
          <div>
            <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 shadow-lg">
              <h3 className="text-2xl font-bold text-indigo-800 mb-3">مەدەنىيەت سەپلىرى</h3>
              <p className="text-indigo-700 text-lg">
                ئۇيغۇر مەدەنىيىتىنىڭ تۈرلۈك جەھەتلىرىنى كەشپ قىلىڭ - ھەر بىر تېمىدا تەپسىلىي ئۇچۇرلار بار
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topics.map((topic) => {
                const IconComponent = topic.icon;
                const gradientColor = topic.color || 'from-gray-500 to-gray-600';
                return (
                  <div
                    key={topic.id}
                    onClick={() => handleCulture(topic.id)}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400 cursor-pointer flex flex-col h-full transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${gradientColor} text-white flex-shrink-0 shadow-md`}>
                        {renderIcon(IconComponent)}
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-bold text-gray-800 group-hover:text-indigo-700 text-xl mb-2">
                          {topic.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-1 flex-1">
                          {topic.keywords?.slice(0, 3).map((keyword, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-xs font-medium shadow-sm"
                            >
                              {keyword}
                            </span>
                          ))}
                          {topic.keywords?.length > 3 && (
                            <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs shadow-sm">
                              +{topic.keywords.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowLeft className="w-5 h-5 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Items List */}
        {activeSubTab && !showItemDetail && currentTopic && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setActiveSubTab(null)}
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 font-medium transition-colors px-5 py-2.5 hover:bg-indigo-50 rounded-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg">باشقا تېما تاللاش</span>
              </button>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{currentTopic.title}</h3>
                <p className="text-gray-600">{currentTopic.description}</p>
              </div>
              <div className="w-24">
                {currentTopic.items?.length > 0 && (
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-center font-medium">
                    {currentTopic.items.length} خىل
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTopic.items?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-6 hover:border-amber-500 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="relative mb-5 rounded-xl overflow-hidden aspect-video shadow-lg">
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae05?auto=format&fit=crop&w=600&q=80'}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x225?text=رەسىم+يوق';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-800 text-xl group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h4>
                    {item.difficulty && (
                      <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${difficultyColors[item.difficulty]}`}>
                        {item.difficulty}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    {item.cookingTime && (
                      <div className="flex items-center gap-2 text-gray-500 bg-white px-3 py-1.5 rounded-lg">
                        <Clock className="w-4 h-4" />
                        <span>{item.cookingTime}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1">
                      {item.ingredients?.slice(0, 3).map((ing, idx) => (
                        <span key={idx} className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">
                          {ing}
                        </span>
                      ))}
                      {item.ingredients?.length > 3 && (
                        <span className="text-gray-400 text-xs">+{item.ingredients.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Item Detail */}
        {showItemDetail && selectedItem && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-10">
              <button
                onClick={handleBackToList}
                className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 font-medium transition-colors px-5 py-2.5 hover:bg-indigo-50 rounded-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg">قايتىش</span>
              </button>
              
              <div className="text-center flex-1">
                <h3 className="text-4xl font-bold text-gray-800 mb-3">{selectedItem.name}</h3>
                <div className="flex justify-center gap-3">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full">
                    {currentTopic?.title}
                  </span>
                  {selectedItem.difficulty && (
                    <span className={`px-4 py-1.5 rounded-full font-medium ${selectedItem.difficultyColor || 'bg-yellow-100 text-yellow-800'}`}>
                      {selectedItem.difficulty}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="w-24"></div>
            </div>

            <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
              <img
                src={selectedItem.image || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae05?auto=format&fit=crop&w=1200&q=80'}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* تەپسىلاتلىق كومپونېنتنى چاقىرىش */}
            {renderItemDetail()}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-indigo-200 rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <Palette className="w-10 h-10 text-indigo-500 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xl font-medium text-gray-700">مەدەنىيەت ئۇچۇرلىرى يۈكلىنىۋاتىدۇ...</p>
            <p className="text-gray-500 mt-2">بىر نەچچە سىكۇنت كۈتۈڭ</p>
            <div className="mt-6 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" style={{ width: '70%' }}></div>
            </div>
          </div>
        )}

        {/* Output Text (Backup) */}
        {outputText && !loading && !showItemDetail && activeSubTab && !currentTopic?.items?.length && (
          <div className="mt-8 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200 shadow-lg">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed text-lg">
              {outputText}
            </div>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CultureTab;