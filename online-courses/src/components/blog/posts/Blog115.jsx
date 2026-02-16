// Blog115.jsx
import React from 'react';

const Blog115 = () => {
  return (
    <article 
      dir="rtl" 
      lang="ug" 
      className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      style={{ 
        fontFamily: "'UKIJ Tuz', 'UKIJ Nasq', 'Microsoft Uighur', system-ui, sans-serif",
        fontSize: '1.125rem',
        lineHeight: '1.75'
      }}
    >
      {/* Header with KeLBiL branding and decorative elements */}
      <header className="relative mb-12 pb-8 border-b-2 border-amber-200">
        <div className="absolute -top-6 -left-6 w-20 h-20 text-amber-400 opacity-15 animate-bounce-slow">
          <div className="text-7xl">☪</div>
        </div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 text-violet-300 opacity-20">
          <div className="text-6xl rotate-12">☪</div>
        </div>
        
        {/* KeLBiL Logo */}
        <div className="flex justify-end mb-6">
          <div className="bg-gradient-to-r from-amber-500 to-rose-600 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg">
            KeLBiL
          </div>
        </div>
        
        <div className="text-center mb-8">
          <span className="inline-block bg-violet-50 text-violet-800 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            2026-يىلى 1-ئاينىڭ 16-كۈنى، چۈشتىن كېيىن سائەت 1:47
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6 leading-tight">
            «سۈنئىي ئەقىل ئاگېنتلىرى» دېگەن نېمە؟ ئۇلارنىڭ ئادەتتىكى سۈنئىي ئەقىل بىلەن پەرقىنى چۈشەندۈرۈش
          </h1>
          
          <div className="bg-gradient-to-r from-amber-400 to-rose-500 h-1.5 w-32 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-700 max-w-3xl mx-auto italic">
            يېقىندا خەۋەرلەردە ۋە ئىجتىمائىي تاراتقۇلاردا «سۈنئىي ئەقىل ئاگېنتى» دېگەن سۆزنى كۆپ كۆردۈڭىزمۇ؟
          </p>
        </div>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg text-slate-800 italic text-lg max-w-2xl mx-auto">
          «بۇنى بىلمىسەك خەتەرلىك! سۈنئىي ئەقىل ئاگېنتى دېگەن نېمە؟ ئادەتتىكى سۈنئىي ئەقىلدىن قانداق پەرقلەيدۇ؟»
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-10 prose prose-ug max-w-none">
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          يېقىندا خەۋەرلەردە ۋە ئىجتىمائىي تورلاردا «<span className="font-bold text-violet-700">سۈنئىي ئەقىل ئاگېنتى</span>» دېگەن سۆزنى يېغىن كۆردۈڭىزمۇ؟
        </p>
        
        <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-200 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <div className="text-4xl mb-3">❓</div>
              <p className="text-center font-medium">«ئۇ ChatGPT دىن پەرقلىقمۇ؟»</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
              <div className="text-4xl mb-3">😅</div>
              <p className="text-center font-medium">«يەنە بىر يېڭى سۈنئىي ئەقىل ئاتالغۇسى؟ راستىنى ئېيتسام، مەن بۇنىڭغا يېتەلمىدىم...»</p>
            </div>
          </div>
        </div>
        
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          كۆپچىلىكىڭىزنىڭمۇ شۇنداق ھېس قىلغانلىقىغا شۈبھە يوق. لېكىن تىنچ تۇرۇڭ — سۈنئىي ئەقىل ئاگېنتى دېگەن ئۇقۇم <span className="font-bold text-amber-700">ئىنتايىن ئاددىي</span>.
        </p>
        
        <div className="text-center bg-gradient-to-r from-amber-100 to-rose-100 p-6 rounded-2xl border-2 border-amber-300 my-8">
          <p className="text-2xl font-bold text-amber-800 mb-3">بۇ ماقالىنى ئوقۇپ بولغانىڭىزدا...</p>
          <p className="text-xl italic text-slate-800">«ھە، چۈشەندىم!» دەپ ھېس قىلىسىز</p>
        </div>
        
        <p className="text-lg leading-relaxed text-slate-800">
          بىز مۇرەككەپ تېخنىكىلىق ئاتالغۇلارنى ئىشلىتمەيمىز. پەقەت <span className="font-bold">5 مىنۇت</span> ۋاقىت بۆلىپ، ئاخىرىغىچە ئوقۇپ چىقىڭ — سۈنئىي ئەقىل دۇنياسىدا بىر قەدەم ئىلگىرلەيسىز!
        </p>
      </section>

      {/* Core Difference Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-violet-200 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 text-violet-100 opacity-40">
          <div className="text-8xl">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-right">ئاساسىي سوئال: «سۈنئىي ئەقىل» بىلەن «سۈنئىي ئەقىل ئاگېنتى» نىڭ پەرقى نېمە؟</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          «سۈنئىي ئەقىل» نى ئاڭلىغاندا، كۆپىنچە كىشىلەر <span className="font-bold text-violet-700">ChatGPT</span> نى خاتىرلەيدۇ:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">💬</div>
              <h3 className="font-bold text-xl text-slate-800">ئادەتتىكى سۈنئىي ئەقىل</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li>• سوئال سورىغاندا جاۋاب بېرىدۇ</li>
              <li>• جۈملىلەرنى يېزىدۇ</li>
              <li>• بىر قەدەر «ئەقىللىق» بولىدۇ</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-300 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-amber-200 text-8xl opacity-30">☪</div>
            <div className="text-center mb-4">
              <div className="text-5xl mb-3 text-amber-600">🚀</div>
              <h3 className="font-bold text-xl text-slate-800">سۈنئىي ئەقىل ئاگېنتى</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li>• 2025-يىلى «<span className="font-bold text-amber-700">ئاگېنت يىلى</span>» دەپ ئاتالدى</li>
              <li>• Google، Microsoft، OpenAI بازارغا كىردى</li>
              <li>• 2026-يىلى كەڭ قوللىنىش باسقۇچىغا كىردى</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-rose-50 border-l-4 border-rose-400 p-5 rounded-r-lg mt-6">
          <p className="text-lg font-bold text-rose-800">
            ئەگەر ھازىر «سۈنئىي ئەقىل ئاگېنتى نېمە؟» نى چۈشەنمىسەڭىز، يېقىندا باشقا كىشىلەردىن <span className="underline">ئارقىدا قالىسىز</span>.
          </p>
        </div>
      </section>

      {/* Simple Explanation Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right border-b pb-3 border-amber-200">سۈنئىي ئەقىل ئاگېنتى نېمە؟ باشلانغۇچ مەكتەپ ئوقۇغۇچىسىمۇ چۈشىنىدۇ</h2>
        
        <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 mb-10 border border-violet-200">
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-violet-600 to-indigo-700 text-white px-6 py-3 rounded-2xl text-2xl font-bold shadow-lg">
              قىسقىچە: «ئۆزى ئويلاپ، ئۆزى ھەرىكەت قىلغۇچى سۈنئىي ئەقىل»
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200">
              <div className="text-center mb-5">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-2xl font-bold text-slate-800">ئادەتتىكى سۈنئىي ئەقىل</h3>
                <p className="text-amber-700 font-medium mt-2">«ياخشى لۇغەت» گە ئوخشايدۇ</p>
              </div>
              <div className="space-y-4 text-slate-700">
                <p>• سوئال سورىسىڭىز جاۋاب بېرىدۇ</p>
                <p>• سورىمىسىڭىز ھېچنېمە قىلمىدۇ</p>
                <p>• «ئەتە ھاۋارايى قانداق؟» دېسەڭىز جاۋاب بېرىدۇ</p>
                <p>• «بۇنى قىسقىچە قىلىپ بېر» دېسەڭىز قىلىدۇ</p>
                <p className="mt-4 font-bold text-slate-800 italic">لېكىن كېيىن نېمە قىلىش كېرەكلىكىنى سىز ئويلاشىڭىز كېرەك</p>
              </div>
            </div>
            
            <div className="bg-amber-50 p-7 rounded-2xl shadow-md border border-amber-300 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 text-amber-200 text-7xl opacity-30">☪</div>
              <div className="text-center mb-5">
                <div className="text-6xl mb-4 text-amber-600">💼</div>
                <h3 className="text-2xl font-bold text-slate-800">سۈنئىي ئەقىل ئاگېنتى</h3>
                <p className="text-rose-700 font-medium mt-2">«ياخشى قول ئاستىدىكى»گە ئوخشايدۇ</p>
              </div>
              <div className="space-y-4 text-slate-700">
                <p>• سىز: «ئەتە ئوساكىغا سەپەرگە بارىمەن، تەييارلىق قىلىپ قوي»</p>
                <p>• ئاگېنت: «شىنكانسېن بېلىتى زاكاز قىلدىم، مېھمانخانا تېپىپ قويدىم، يىغىن ماتېرىيالى تەييارلىدىم»</p>
                <p>• قارشى تەرەپكە ئېلخەت تېخىمۇ ئەۋەتتىم</p>
                <p className="mt-4 font-bold text-slate-800 italic">ئاگېنت ئۆزى قارار چىقىرىپ، بارلىق قەدەملەرنى بىر تەرەپ قىلىدۇ</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-200 mt-8">
          <div className="flex items-start">
            <div className="text-rose-500 text-5xl mr-4 mt-1">💡</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ئاگېنت قانداق ئويلايدۇ؟</h3>
              <div className="bg-slate-50 p-4 rounded-lg font-mono text-slate-800 space-y-2">
                <p>«ئوساكىغا سەپەر؟ ماڭا نېمە كېرەك؟»</p>
                <p>→ قاتناش: شىنكانسېن بېلىتى زاكاز قىلىش</p>
                <p>→ تۇرالغۇ: مېھمانخانا تېپىش</p>
                <p>→ يىغىن: ماتېرىيال تەييارلاش</p>
                <p>→ قوشۇمچە: قارشى تەرەپكە ئۇقتۇرۇش ئېلېكترونلۇق خېتى</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Key Differences Section */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-300 relative overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-24 h-24 text-amber-200 opacity-30">
          <div className="text-7xl rotate-12">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right text-center">ئادەتتىكى سۈنئىي ئەقىل بىلەن سۈنئىي ئەقىل ئاگېنتىنىڭ <span className="text-amber-700">3 پەرقى</span></h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[{
            num: '①',
            title: 'پاسسىپ ياكى ئاكتىپ',
            desc: 'ئادەتتىكى: سورىغاندا جاۋاب بېرىدۇ (پاسسىپ)\nئاگېنت: مەقسىتىڭىزنى ئاڭلاپ، ئۆزى ھەرىكەت قىلىدۇ (ئاكتىپ)'
          }, {
            num: '②',
            title: 'بىر قەدەم ياكى كۆپ قەدەم',
            desc: 'ئادەتتىكى: بىر سوئال - بىر جاۋاب\nئاگېنت: بىر قەدەمدىن كېيىن يەنە بىر قەدەمنى ئۆزى تىزىپ بېرىدۇ'
          }, {
            num: '③',
            title: 'سۆھبەت ياكى ئەمەلىيەت',
            desc: 'ئادەتتىكى: پەقەت سۆز بىلەن جاۋاب بېرىدۇ\nئاگېنت: تېرمىنال، براوزېر، كالېندار قاتارلىقلار بىلەن بىرلەشىپ ئىش قىلىدۇ'
          }].map((diff, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-amber-400 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold text-amber-600 mb-3">{diff.num}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{diff.title}</h3>
              <p className="text-slate-700 whitespace-pre-line leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center p-6 bg-white rounded-2xl shadow-lg border border-amber-300">
          <div className="text-5xl mb-4">📖 → 👨‍💼</div>
          <p className="text-2xl font-bold text-amber-800">«جاۋاب بېرىش» تىن «ھەرىكەت قىلىش» قا يۆتكىلىش</p>
        </div>
      </section>

      {/* Practical Examples Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right border-b pb-3 border-amber-200">سۈنئىي ئەقىل ئاگېنتى نېمە قىلالايدۇ؟ 3 تونۇش مىسال</h2>
        
        <div className="space-y-8">
          {[{
            icon: '🛒',
            title: 'خېرىدارلار مۇلازىمىتىنى ئاپتوماتىكلاشتۇرۇش',
            desc: 'كۈنىگە 24 سائەت خېرىدارلارنىڭ سوئاللىرىغا جاۋاب بېرىدۇ. پەقەت جاۋاب بېرىپلا قالماي، خېرىدارنىڭ بۇرۇن سېتىۋالغان مەھسۇلاتىغا قاراپ، ئەڭ مۇۋاپىق تەكلىپنى بېرىدۇ. ئىنسان مۇلازىمەتچىسىنىڭ خىزمىتىنى تولۇق ئالماشتۇرالايدۇ.'
          }, {
            icon: '📅',
            title: 'كۈنتەرتىپ تەڭشەش ۋە زاكاز قىلىش',
            desc: '«كېلەر ھەپتە A بىلەن كۆرۈشمەكچىمەن» دېگەندە، ئاگېنت ئىككى تەرەپنىڭ بوش ۋاقتىنى تاپىدۇ، يىغىن زالىنى زاكاز قىلىدۇ، ھەتتا ئۇقتۇرۇش خاتىرىسىنى ئەۋەتىدۇ. بۇ زېرىكىشلىك خىزمەتلەرنىڭ ھەممىسىنى بىر تەرەپ قىلىدۇ.'
          }, {
            icon: '📊',
            title: 'ئۇچۇر توپلاش → تەھلىل → دوكلات تۈزۈش',
            desc: '«رېقابەتچى شىركەت توغرىسىدا تەتقىق قىلىپ دوكلات تۈزۈڭ» دېگەندە، توردىن ئۇچۇر توپلايدۇ، تەھلىل قىلىدۇ، ۋە پۈتۈن دوكلاتنى تۈزىدۇ. يېرىم كۈن ۋاقىت كېتىدىغان خىزمەت ھازىر بىر نەچچە مىنۇتتا تامام.'
          }].map((example, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-7 shadow-md border-l-4 border-${index === 0 ? 'emerald' : index === 1 ? 'sky' : 'violet'}-500`}
            >
              <div className="flex items-start">
                <div className={`text-${index === 0 ? 'emerald' : index === 1 ? 'sky' : 'violet'}-500 text-4xl mr-5 mt-1`}>
                  {example.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{example.title}</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">{example.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 bg-gradient-to-r from-rose-50 to-violet-50 p-6 rounded-2xl text-center border border-violet-300">
          <p className="text-xl font-bold text-slate-900 mb-2">«زېرىكىشلىك خىزمەتلەرنى بىر تەرەپ قىلالايدىغان»</p>
          <p className="text-slate-700 text-lg">بۇ دەۋر بىزگە يېقىنلاپ كەلدى — بىز ئاللىقاچان بۇنىڭ نورمال ھالغا كېلىشىنى باشلىدۇق.</p>
        </div>
      </section>

      {/* Why Important Now Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-sky-200">
        <div className="text-center mb-8">
          <div className="inline-block bg-sky-100 text-sky-800 px-5 py-2.5 rounded-full text-lg font-bold">
            ھازىر ئىگىلەش زۆرۈر ئەمەس، لېكىن «بىلىش» زۆرۈر
          </div>
        </div>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
          «بۇ ناھايىتى ياخشى، لېكىن مېنىڭ خىزمىتىمگە مۇناسىۋەتسىز...» دەپ ئويلىغان بولسىڭىز، تىنچ تۇرۇڭ.
        </p>
        
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center p-4">
              <div className="text-6xl mb-4 text-sky-500">2025</div>
              <p className="font-bold text-xl text-slate-900">«ئاگېنت يىلى»</p>
              <p className="text-slate-700 mt-2">Google، Microsoft، OpenAI بازارغا كىردى</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-300">
              <div className="text-6xl mb-4 text-amber-600">2026</div>
              <p className="font-bold text-xl text-slate-900">كەڭ قوللىنىش باسقۇچى</p>
              <p className="text-slate-700 mt-2">ھازىر بىز بۇ باسقۇچتا تۇرىمىز</p>
            </div>
          </div>
        </div>
        
        <div className="bg-rose-50 p-6 rounded-xl border border-rose-300">
          <p className="text-lg text-slate-800 leading-relaxed mb-4">
            دەرھال سۈنئىي ئەقىل ئاگېنتىنى قوللىنىشنى ئۆگىنىشىڭىز زۆرۈر ئەمەس. لېكىن <span className="font-bold text-rose-700">«بۇ نېمە ئىكەنلىكىنى بىلىش»</span> مۇھىم.
          </p>
          <p className="text-lg text-slate-800 leading-relaxed">
            بىر قانچە يىلدىن كېيىن، سۈنئىي ئەقىل ئاگېنتى بۈگۈنكى ChatGPT دىن كۆرۈنگىدەك «ھەممىنىڭ قوللىنىۋاتقان نەرسىسى» بولىدۇ. شۇ ۋاقىتتا «بۇ نېمە؟» دەپ سورىغۇچى بولۇشنى خالامىسىز بەلكىم؟
          </p>
        </div>
      </section>

      {/* Conclusion with Cultural Proverb */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-300 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-20 h-20 text-amber-200 opacity-30">
          <div className="text-7xl">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right text-center">خۇلاسە</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-amber-300">
          <div className="space-y-5">
            <div className="flex items-start">
              <div className="text-amber-500 text-4xl mr-4">🧠</div>
              <p className="text-xl font-bold text-slate-900">سۈنئىي ئەقىل ئاگېنتى — «ئۆزى ئويلاپ، ئۆزى ھەرىكەت قىلغۇچى سۈنئىي ئەقىل»</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-violet-500 text-4xl mr-4">📖→👨‍💼</div>
              <p className="text-xl font-bold text-slate-900">ئادەتتىكى سۈنئىي ئەقىل — «ياخشى لۇغەت»، ئاگېنت — «ياخشى قول ئاستىدىكى»</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-rose-500 text-4xl mr-4">🚀</div>
              <p className="text-xl font-bold text-slate-900">2025-يىلى «ئاگېنت يىلى»، 2026-يىلى كەڭ قوللىنىش باسقۇچى</p>
            </div>
            
            <div className="flex items-start">
              <div className="text-emerald-500 text-4xl mr-4">💡</div>
              <p className="text-xl font-bold text-slate-900">«بىلىش» بىلەن «بىلمەسلىك» ئوتتۇرىسىدا چوڭ پەرق بار</p>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-amber-200 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-rose-600 text-white px-8 py-4 rounded-2xl mb-6 shadow-lg">
              <p className="font-bold text-2xl">«بىر قەدەم ئىلگىرلەش — يېڭى دۇنيا كۆرۈش»</p>
              <p className="text-xl opacity-90 mt-2">— Uyghur wisdom on knowledge and progress</p>
            </div>
            
            <p className="text-xl text-slate-800 max-w-2xl mx-auto italic">
              بۇ ماقالىنى ئوقۇغىنىڭىز بىلەن، سىز باشقىلاردىن <span className="font-bold text-amber-700">بىر قەدەم ئىلگىرىدە</span> تۇرىسىز.
            </p>
            
            <div className="mt-8 flex justify-center gap-6 text-4xl">
              <span className="text-amber-500 animate-bounce">☪</span>
              <span className="text-violet-500 animate-bounce animation-delay-200">☪</span>
              <span className="text-rose-500 animate-bounce animation-delay-400">☪</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with KeLBiL branding */}
      <footer className="mt-12 pt-8 border-t border-amber-300 text-center">
        <div className="inline-block bg-gradient-to-r from-violet-600 to-indigo-700 text-white px-6 py-3 rounded-full mb-4">
          <p className="font-bold text-lg">KeLBiL تورى</p>
        </div>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          بۇ ماقالە سۈنئىي ئەقىل تەتقىقات مەركىزى (KeLBiL) تەرىپىدىن تەييارلاندى. تېخنىكا دۇنياسىنىڭ يېڭىلىقلىرىنى چۈشىنىش — كەلگۈسىنى شەكىللەندۈرۈشنىڭ بىرىنچى قەدىمى.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-2xl">
          <span className="text-amber-500">☪</span>
          <span className="text-violet-500">☪</span>
          <span className="text-rose-500">☪</span>
          <span className="text-emerald-500">☪</span>
          <span className="text-sky-500">☪</span>
        </div>
      </footer>
    </article>
  );
};

export default Blog115;