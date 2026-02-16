// src/components/learn-modules/topics/expermentEduModule.jsx
import React from 'react';

const ExpermentEduModule = () => {
  return (
    <div
      dir="rtl"
      className="font-sans text-right min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", "Arial Unicode MS", sans-serif',
        lineHeight: '1.8',
        fontSize: '1.1rem',
        color: '#1f2937'
      }}
    >
      {/* باش بەت لايىھەسى */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* باشلىق بۆلۈمى */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl text-white">🧪</span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            تەجىربىلىك مائارىپ باشقۇرۇش مەركىزى
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            «كۆرگەن ئەسلەيدۇ، قىلغان چۈشىنىدۇ، ئىزدىگەن بايقايدۇ» – بىلىمگە ئېلىپ بارىدىغان ئەڭ قىزىقارلىق يول!
          </p>
        </div>

        {/* ئومۇمىي چۈشەندۈرۈش */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-10 shadow-lg border border-purple-100">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-purple-800 mb-3">تەجىربىلەرنىڭ پايدىلىرى</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    چۈشەنچىنى 85% كۆپەيتىدۇ
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    ئەسلىتىش ۋاقتىنى ئۇزۇنلاشتۇرىدۇ
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    ئىلمىي ئىزدىنىش ماھارىتىنى ئۆستۈرىدۇ
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    مەسئۇلىيەت ھېسىنى كۈچەيتىدۇ
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                تەجىربىلىك مائارىپ نېمە؟
              </h2>
              <p className="text-gray-700 mb-4">
                تەجىربىلىك مائارىپ بىلىمنى پەقەت كىتابتىن ئۆگىنىش ئەمەس، بەلكى قولۇڭىزدا سىناپ، كۆزۈڭىز بىلەن كۆرۈپ، 
                ئەقلىڭىز بىلەن چۈشىنىش ئۇسۇلىدۇر. بۇ يەردە سىز <span className="font-bold text-purple-600">4 خىل ئاساسىي پەن</span> 
                بويىچە قىزىقارلىق تەجىربىلەرنى ئۆگىنىپ، بىلىمنىڭ جانلىنىشىغا گۇۋاھ بولىسىز.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {[
                  { title: 'فىزىكا', emoji: '⚡', color: 'from-red-400 to-orange-400' },
                  { title: 'خىمىيە', emoji: '🧪', color: 'from-purple-400 to-pink-400' },
                  { title: 'بىئولوگىيە', emoji: '🌱', color: 'from-green-400 to-emerald-400' },
                  { title: 'جۇغراپىيە', emoji: '🌍', color: 'from-blue-400 to-cyan-400' }
                ].map((subject, index) => (
                  <div key={index} className={`bg-gradient-to-r ${subject.color} rounded-lg p-3 text-center text-white font-bold shadow-md`}>
                    <div className="text-2xl mb-1">{subject.emoji}</div>
                    <div>{subject.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* تەجىربىلەر گالېرىيىسى */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              تەجىربە گالېرىيىسى
            </h2>
            <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              4 تەجىربە • ھەممىسى ئۆيدە قىلالايدۇ
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. خىمىيە تەجىربىسى */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">ۋۇلكان تەجىربىسى</h3>
                  <span className="bg-white text-purple-600 text-sm font-bold px-3 py-1 rounded-full">خىمىيە</span>
                </div>
                <div className="text-white/90 mt-2">سودا + سىرخى = گاز ھادىسىسى</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600">⏱️</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">ۋاقىت: 10 مىنۇت</div>
                    <div className="text-sm text-gray-500">ئاسانلىق دەرىجىسى: ★★☆☆☆</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm mr-2">1</span>
                    زاتلار
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['سودا بىكاربۇنات', 'سىرخى', 'پلاستىك بۆشەك', 'قارا بويى'].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-2 text-center text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm mr-2">2</span>
                    قەدەم-بىقەدەم
                  </h4>
                  <div className="space-y-3">
                    {[
                      'بۆشەككە قارا بويى چېكىڭ',
                      'ئوتتۇرىسىغا سودا سېلىڭ',
                      'سىرخىنى ئاستىدىن قۇيۇڭ',
                      'گاز چىقىشىنى كۆزىتىڭ'
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
                          {idx + 1}
                        </div>
                        <div className="flex-1">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-2">!</span>
                    ئەسكەرتىش
                  </h4>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-start">
                      <span className="text-red-500 text-xl mr-2">⚠️</span>
                      <div className="text-red-700 text-sm">
                        <div className="font-bold mb-1">ئەمەلىيەتچانلىق:</div>
                        <div>كۆز ۋە يۈزنى قوغداش، كىچىك بالىلارنىڭ تەكشۈرۈشى ئاستىدا تەجىربە قىلىشى كېرەك</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">تەجىربىنى كۆرۈش</h4>
                  <div className="aspect-video bg-gradient-to-r from-purple-900 to-black rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/2UyQ8eNqQ3Y"
                      title="ۋۇلكان تەجىربىسى ۋىدىئوسى"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. فىزىكا تەجىربىسى */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-red-100">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">بالوننى قاچىلاش</h3>
                  <span className="bg-white text-red-600 text-sm font-bold px-3 py-1 rounded-full">فىزىكا</span>
                </div>
                <div className="text-white/90 mt-2">سۇنىڭ يىسۇتۇش قابىلىيىتىنى ئىسپاتلاش</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600">🔥</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">ۋاقىت: 15 مىنۇت</div>
                    <div className="text-sm text-gray-500">ئاسانلىق دەرىجىسى: ★★★☆☆ (ئەمەلىيەتچان تەلەپ)</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-red-100 rounded-xl p-4 mb-2">
                      <div className="text-4xl mb-2">💧</div>
                      <div className="font-bold text-gray-800">سۇ قۇيۇلغان</div>
                    </div>
                    <div className="text-green-600 font-bold">يېنىمايدۇ</div>
                    <div className="text-sm text-gray-600">سۇ يىسۇتقۇچ رول ئوينايدۇ</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 rounded-xl p-4 mb-2">
                      <div className="text-4xl mb-2">🎈</div>
                      <div className="font-bold text-gray-800">قۇرۇق بالون</div>
                    </div>
                    <div className="text-red-600 font-bold">دەرھال يېنىدۇ</div>
                    <div className="text-sm text-gray-600">يىسۇتقۇچ يوق</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">ئىلمىي پرىنسىپ</h4>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
                    <div className="flex items-start">
                      <span className="text-red-500 text-2xl mr-3">🔬</span>
                      <div>
                        <div className="font-bold text-red-700 mb-1">سۇنىڭ يۇقىرى يىسۇتۇش قابىلىيىتى</div>
                        <div className="text-gray-700">
                          سۇنىڭ مولېكۇلالىرى ئوت ئېنېرگىيەسىنى جەذب قىلىپ، بالوننىڭ يېنىپ كېتىشىنىڭ ئالدىنى ئالىدۇ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-dashed border-red-300 rounded-xl p-6 text-center">
                  <div className="text-5xl mb-4">📸</div>
                  <div className="font-bold text-gray-800 mb-2">تەجىربە كۆرسىتىش رەسىمى</div>
                  <div className="text-gray-600">سۇ قۇيۇلغان بالون (ساق) vs قۇرۇق بالون (يېنىپ كەتكەن)</div>
                </div>
              </div>
            </div>

            {/* 3. بىئولوگىيە تەجىربىسى */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">ئۆسۈملۈك سۇ ئالماشتۇرۇشى</h3>
                  <span className="bg-white text-green-600 text-sm font-bold px-3 py-1 rounded-full">بىئولوگىيە</span>
                </div>
                <div className="text-white/90 mt-2">ئۆسۈملۈك زانجىر سىستېمىسىنى كۆرۈش</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600">⏳</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">ۋاقىت: 24 سائەت</div>
                    <div className="text-sm text-gray-500">ئاسانلىق دەرىجىسى: ★☆☆☆☆</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center">
                      <span className="text-green-600 text-2xl mr-3">🌺</span>
                      <div>
                        <div className="font-bold text-gray-800">24 سائەتتىن كېيىن...</div>
                        <div className="text-gray-700">گۈل بارپىقى رەڭگە بويىلىدۇ!</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {['ئاق گۈل', 'سىرخى', 'رەڭلىك بويى', 'شىشا بۆشەك', 'قايچى', 'سۈزگۈچ'].map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-2 text-center text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">بىئولوگىيەلىك چۈشەندۈرۈش</h4>
                  <div className="bg-white border border-green-200 rounded-xl p-4">
                    <div className="flex">
                      <div className="text-green-500 text-2xl mr-3">💧</div>
                      <div>
                        <div className="font-bold text-green-700 mb-1">زانجىر ھادىسىسى</div>
                        <div className="text-gray-700">
                          سۇنىڭ كىچىك تۇتاشلار ئارقىلىق يۇقىرىغا كۆتۈرۈلۈشى - بۇ ئۆسۈملۈكلەرنىڭ سۇ ۋە مىنېراللارنى يۇقىرىغا توشۇش ئۇسۇلى
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">تەجىربە جەريانى</h4>
                  <div className="aspect-video bg-gradient-to-r from-green-900 to-emerald-900 rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/1Uu7y6aYV6I"
                      title="ئۆسۈملۈك زانجىر تەجىربىسى"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. جۇغراپىيە تەجىربىسى */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">گلوبۇس قىلىش</h3>
                  <span className="bg-white text-blue-600 text-sm font-bold px-3 py-1 rounded-full">جۇغراپىيە</span>
                </div>
                <div className="text-white/90 mt-2">دۇنيانى قولۇڭىزدا تۇتۇڭ!</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">🎨</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">ۋاقىت: 45 مىنۇت</div>
                    <div className="text-sm text-gray-500">ئاسانلىق دەرىجىسى: ★★☆☆☆</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">قىلىش ئۇسۇلى</h4>
                  <div className="space-y-4">
                    {[
                      {step: 1, desc: 'بالوننى ئۈپۈڭ', icon: '🎈'},
                      {step: 2, desc: 'خەرىتىنى قىسىپ تۇرۇڭ', icon: '✂️'},
                      {step: 3, desc: 'يېپىشچان يەلىقى بىلەن يېپىڭ', icon: '🖌️'},
                      {step: 4, desc: 'قۇتۇبلارنى بەلگىلەڭ', icon: '📍'}
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center bg-blue-50 rounded-xl p-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                          {item.step}
                        </div>
                        <div className="text-2xl mr-3">{item.icon}</div>
                        <div className="flex-1 font-medium text-gray-800">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">ئۆگىنىش نۇقتىلىرى</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'قۇتۇبلار',
                      'قىتئەلەر',
                      'ئوكيانلار',
                      'دۆلەتلەر',
                      'بەلۋاغ خەت',
                      'ئۇزۇنلۇق خەت'
                    ].map((item, idx) => (
                      <div key={idx} className="bg-blue-100 text-blue-700 rounded-lg p-2 text-center text-sm font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center">
                    <span className="text-blue-600 text-2xl mr-3">🏆</span>
                    <div>
                      <div className="font-bold text-blue-800">مەكتەپ تەتبىقلىرى</div>
                      <div className="text-gray-700">
                        بۇ تەجىربە مەكتەپتىكى جۇغراپىيە دەرسىگە تولۇق ماسلىشىدۇ ۋە ئوقۇغۇچىلارنىڭ قىزىقىشىنى ئاشۇرىدۇ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* تەجىربە قىلىش كۇتۇپخانىسى */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">تەجىربە قىلىش كۇتۇپخانىسى</h3>
              <p className="text-purple-100 mb-4">
                ھەر قانداق تەجىربىنى بىخەتەر ۋە ئۈنۈملۈك ئېلىپ بارىدىغان ئۇمۇمىي كېرەك زاتلار
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'يەپىشچان قول قەلەم',
                  'ئۆلچەملىك سىستېما',
                  'قورۇق سانچىلىرى',
                  'خاتىرە دەپتېرى',
                  'ۋاقىت ساقلاش ئەسۋابى',
                  'قوغدىغۇچ كۆزەينەك',
                  'ئۆلچەملىك سىستېما',
                  'تەكشۈرۈش جەدۋىلى'
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/20 rounded-lg p-2 text-center text-sm backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="text-6xl mb-2">📋</div>
              <div className="font-bold text-lg">تەكشۈرۈش جەدۋىلى</div>
              <div className="text-sm opacity-90">ھەر تەجىربىدىن كېيىن تولدۇرۇڭ</div>
            </div>
          </div>
        </div>

        {/* ئەسلىتىش ۋە خاتىرە بېتى */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">📝</span>
              تەجىربە خاتىرىسى
            </h3>
            <div className="space-y-4">
              {[
                'تەجىربە نامى:',
                'تەجىربە ۋاقتى:',
                'ئىشلەتكەن زاتلار:',
                'كۆزىتىلگەن ھادىسە:',
                'ئىلمىي چۈشەندۈرۈش:',
                'ئۆگىنىلگەن نەرسە:',
                'قايتا قىلىشنى تەكلىپ قىلىمەن:'
              ].map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-2">
                  <div className="font-bold text-gray-700 text-sm mb-1">{item}</div>
                  <div className="h-8 bg-gray-50 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3">💡</span>
              مۇھىم ئەسكەرتىشلەر
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: '👨‍👩‍👧‍👦',
                  title: 'يېتەكچىلىك',
                  desc: 'ھەممە تەجىربىنى چوڭلار ياكى مۇئەللىملەر يېتەكچىلىكىدە قىلىڭ'
                },
                {
                  icon: '🎯',
                  title: 'بەلگىلەش',
                  desc: 'تەجىربە ئالدىدا مەقسەت ۋە كۈتۈلگەن نەتىجىنى بەلگىلەڭ'
                },
                {
                  icon: '📱',
                  title: 'تېخنىكا',
                  desc: 'يۇتۇبتا "Uyghur science experiment" دەپ ئىزدەپ، باشقا تەجىرىبىلەرنى كۆرۈڭ'
                },
                {
                  icon: '🧹',
                  title: 'تازىلاش',
                  desc: 'تەجىربىدىن كېيىن بارلىق ئەشياۋاتلارنى تازىلاڭ'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div className="font-bold">{item.title}</div>
                  </div>
                  <div className="text-gray-300 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ئاخىرقى دىئالوگ */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            ھەر بىر ئالىم بىر تەجىرىبە بىلەن باشلىنىدۇ
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            بىلىم پەقەت كىتابتا ئەمەس، سىزنىڭ قولۇڭىزدا، كۆزىڭىزدە، تەجرىبىڭىزدە ياشايدۇ. 
            بۈگۈن سىز قىلغان كىچىك تەجرىبە، ئەتە چوڭ كەشپىياتنىڭ باشلىنىشى بولالايدۇ!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-white px-4 py-2 rounded-full font-bold text-purple-600 shadow-md">
              ئىزدە • سىنا • بايقا • چۈشەن
            </div>
          </div>
        </div>

        {/* ئاخىرقى ئۇچۇر */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © تەجرىبىلىك مائارىپ باشقۇرۇش مەركىزى • ھەر قانداق تەجرىبىنى ئەمەلىيەتچانلىق ئاساسىدا قىلىڭ
        </div>
      </div>
    </div>
  );
};

export default ExpermentEduModule;