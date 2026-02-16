// Blog119.jsx
import React from 'react';

const Blog119 = () => {
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
      {/* Header with decorative elements and KeLBiL branding */}
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
            سالام، بۇ ئاددىي ھايات!
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6 leading-tight">
            داھىي فىزىكا ئالىمىنىڭ ھاياتىنىڭ ئاخىرىدا ئوتتۇرىغا قويغان ئاجايىپ پەرەز: ھازىر كۆرۈۋاتقان رېئاللىق پەقەت «ئۇچۇر» بولۇشى مۇمكىن
          </h1>
          
          <div className="bg-gradient-to-r from-amber-400 to-rose-500 h-1.5 w-32 rounded-full mx-auto mb-8"></div>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg text-slate-800 italic text-lg max-w-2xl mx-auto">
            «بەلكىم ھازىر كۆرۈۋاتقان رېئاللىق پەقەت «ئۇچۇر» بولۇشى مۇمكىن. سىز بەلكىم «ھە؟ بۇ يالغان بولۇشى كېرەك!» دەپ ئويلاۋاتقان بولۇشىڭىز مۇمكىن. مەنمۇ دەسلەپتە شۇنداق ئويلىغان ئىدىم. لېكىن مەن بۇ ھەقتە قانچە كۆپ ئۆگەنسەم، شۇنچە كۆپ ئويلايمەنكى، بەلكىم بۇنىڭ راستىنلا راست بولۇشى مۇمكىن...»
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-12 prose prose-ug max-w-none">
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          بۈگۈن مەن بىر ئاز غەلىتە نەرسە ھەققىدە سۆزلىمەكچىمەن: بىر داھىي فىزىكا ئالىمىنىڭ ھاياتىنىڭ ئاخىرىدا ئوتتۇرىغا قويغان ئاجايىپ پەرەز.
        </p>
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          بەلكىم ھازىر كۆرۈۋاتقان رېئاللىق پەقەت «ئۇچۇر» بولۇشى مۇمكىن.
        </p>
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          سىز بەلكىم «ھە؟ بۇ يالغان بولۇشى كېرەك!» دەپ ئويلاۋاتقان بولۇشىڭىز مۇمكىن. مەنمۇ دەسلەپتە شۇنداق ئويلىغان ئىدىم.
        </p>
        <p className="text-lg leading-relaxed text-slate-800">
          لېكىن مەن بۇ ھەقتە قانچە كۆپ ئۆگەنسەم، شۇنچە كۆپ ئويلايمەنكى، بەلكىم بۇنىڭ راستىنلا راست بولۇشى مۇمكىن...
        </p>
      </section>

      {/* John Wheeler Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-violet-200 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 text-violet-100 opacity-40">
          <div className="text-8xl">💫</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">داھىي جون ۋىلېر</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          بۇ ھېكايىنىڭ باش پېرسوناژى فىزىكا ئالىمى دوكتور جون ۋىلېر (1911-2008).
        </p>
        
        <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-6 mb-8 relative z-10 border border-violet-200">
          <p className="text-lg font-bold text-slate-900 mb-3">بۇ ئادەم ئىنتايىن ئاجايىپ ئىدى:</p>
          <ul className="list-disc pr-6 space-y-2 text-slate-700">
            <li>ئۇ «قارا ئۆڭكۈر» دېگەن سۆزنى ئومۇملاشتۇرغان</li>
            <li>شۇنداقلا «قۇرۇت ئۆڭكۈرى» ۋە «كۋانت كۆپۈكى» قاتارلىق ئۇقۇملارنى ئوتتۇرىغا قويغان</li>
            <li>ئەڭ مۇھىمى، ئۇ ئېينىشتېين بىلەن ھەمكارلىشىپ، نوبېل مۇكاپاتىغا ئېرىشكەن فېينمان ۋە كىپ تورنغا ئۇستازلىق قىلغان</li>
            <li>ئۇ فىزىكا دۇنياسىدىكى رىۋايەتلەر ئىچىدىكى بىر ئەپسانە</li>
          </ul>
        </div>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          ئۇ كېيىنكى يىللىرىدا «ئۇ بىتتىن» دېگەن ئىدىيە ھەققىدە سۆزلەشكە باشلىغان.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mt-6 relative z-10">
          <h3 className="text-2xl font-bold text-amber-800 mb-3">«ئۇ بىتتىن» دېگەن نېمە؟</h3>
          <p className="text-lg text-slate-800 leading-relaxed">
            «ئۇ بىتتىن» دېگەننى ئاددىيلاشتۇرۇپ ئېيتقاندا...
          </p>
          <p className="text-xl font-bold text-slate-900 mt-3 mb-3">
            بىز كۆرۈۋاتقان فىزىكىلىق دۇنيا «ھەئە» ۋە «ياق» نىڭ ئەڭ كىچىك بىرلىكلىرىگە ئوخشاش رەقەملىك «ئۇچۇر بىتلىرى» نىڭ توپلىنىشىدىن يارىتىلغان.
          </p>
          <p className="text-lg text-slate-800 leading-relaxed mt-3">
            باشقىچە قىلىپ ئېيتقاندا، پەرەز شۇكى، رېئاللىق ۋە ماددا رەقەملىك سانلىق مەلۇماتلاردىن تەركىب تاپقان، خۇددى كومپيۇتېر ئېكرانىدا كۆرسىتىلگەن رەسىملەرگە ئوخشاش، بۇلارنىڭ ھەممىسى 0 ۋە 1 دىن تەركىب تاپقان.
          </p>
          <p className="text-lg text-slate-800 leading-relaxed mt-4 font-medium">
            بۇنى بىر دەم تەسەۋۋۇر قىلىپ بېقىڭ. ھازىر ئەقلىي تېلېفونىڭىزدا كۆرۈۋاتقان پېرسوناژلارنىڭ ھەممىسى 0 ۋە 1 نىڭ بىرىكمىسىدىن تەركىب تاپقان. ئەمما ئۇلار ئەقلىي تېلېفونىڭىزنىڭ ئېكرانىدا «پېرسوناژ» سۈپىتىدە كۆرۈنىدۇ. بەلكىم پۈتكۈل ئالەم ئوخشاش ئۇسۇلدا ئىشلەيدۇ.
          </p>
        </div>
      </section>

      {/* It from Qubit Section */}
      <section className="mb-12 bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border-2 border-rose-300 relative overflow-hidden">
        <div className="absolute -bottom-12 -left-12 w-40 h-40 text-rose-200 opacity-30">
          <div className="text-9xl rotate-12">🔬</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">«ئۇ قۇبىتتىن» نىڭ زامانىۋى نۇسخىسى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          تېخىمۇ قىزىقارلىقى شۇكى، بۇ ئىدىيە زامانىۋى دەۋردە «ئۇ قۇبىتتىن» غا تەرەققىي قىلدى.
        </p>
        
        <div className="bg-white rounded-2xl p-7 shadow-md mb-8 relative z-10 border border-slate-200">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="text-emerald-600 text-2xl ml-2">🔷</span>
                نورمال كومپيۇتېر
              </h3>
              <p className="text-slate-700 mb-4">
                بىتلار پەقەت 0 ياكى 1 بولىدۇ
              </p>
              <div className="bg-slate-100 p-4 rounded-lg text-center font-mono text-xl">
                0 <span className="mx-4">|</span> 1
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="text-violet-600 text-2xl ml-2">🔷</span>
                كۋانت كومپيۇتېر
              </h3>
              <p className="text-slate-700 mb-4">
                قۇبىتلار 0 ۋە 1 نىڭ ھەر ئىككىسى بولۇشى مۇمكىن - بۇ ئادەتتىكى ئەقىلگە قارشى تۇرىدىغان ھالەت
              </p>
              <div className="bg-violet-100 p-4 rounded-lg text-center font-mono text-xl">
                0 + 1 = كۆپۈك ھالىتى
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-sky-50 p-6 rounded-xl border border-sky-300 relative z-10">
          <div className="flex items-start">
            <div className="text-sky-600 text-3xl mr-4 mt-1">💡</div>
            <div>
              <p className="font-bold text-xl text-slate-900 mb-2">2019-يىلى، Google كۋانت كومپيۇتېرى ئارقىلىق «كۋانت ئۈستۈنلۈكى»نى نامايان قىلدى:</p>
              <p className="text-lg text-slate-800">
                ئادەتتىكى دەرىجىدىن تاشقىرى كومپيۇتېرغا 10،000 يىل كېتىدىغان ھېسابلاش پەقەت 200 سېكۇنتتا تاماملاندى.
              </p>
              <p className="text-lg text-slate-800 mt-3 font-medium">
                بۇ، كۇبىتلارنىڭ «ئۈستۈنكى ھالىتى» نىڭ ئەمەلىيەتتە ھېسابلاش كۈچى سۈپىتىدە ئىشلەيدىغانلىقىنىڭ ئىسپاتى. باشقىچە قىلىپ ئېيتقاندا، ئىلمىي فانتازىيىلىك فىلىملەردىكى ھېكايىلەر ئەمەلىيەتتە يۈز بېرىۋاتىدۇ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black Holes and Information Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-emerald-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right flex items-center">
          <span className="text-emerald-600 text-3xl ml-3">🕳️</span>
          قارا ئۆڭكۈرلەر ۋە ئۇچۇرنىڭ سىرى
        </h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          دوكتور ۋېلېرنىڭ بۇ ئىدىيەسى ئۇنىڭ قارا ئۆڭكۈرلەر توغرىسىدىكى تەتقىقاتىدىن ئىلھام ئالغان.
        </p>
        
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-300 mb-8">
          <div className="flex">
            <div className="text-amber-600 text-3xl mr-4 mt-1">⚠️</div>
            <div>
              <p className="font-bold text-xl text-slate-900 mb-2">خاۋكىڭ «قارا ئۆڭكۈرلەر پارغا ئايلىنىدۇ» دېيىشكە باشلىغاندا، چوڭ مەسىلە پەيدا بولدى:</p>
              <p className="text-lg text-slate-800">
                ئەگەر ماددا قارا ئۆڭكۈرگە چۈشۈپ كېتىپ يوقاپ كەتسە، بۇ ماددا ئىچىدىكى ئۇچۇرلارغا نېمە بولىدۇ؟
              </p>
              <p className="text-lg text-slate-800 mt-3 font-bold">
                فىزىكىنىڭ ئاساسىي پرىنسىپى: «ئۇچۇر ھەرگىز يوقاپ كەتمەيدۇ»
              </p>
              <p className="text-lg text-slate-800 mt-2">
                قانداقلا بولمىسۇن، قارا ئۆڭكۈر ئۇچۇرنى يۇتۇپ يوقاپ كەتسە، بۇ ئۇچۇر مەڭگۈ يوقاپ كېتىدۇ... بۇ جىددىي زىددىيەت.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-300">
          <div className="flex">
            <div className="text-emerald-600 text-3xl mr-4 mt-1">🔍</div>
            <div>
              <p className="font-bold text-xl text-slate-900 mb-2">بۇ سىرنى ھەل قىلىش ئۈچۈن، ئەڭ يېڭى نەزەرىيە:</p>
              <p className="text-lg text-slate-800">
                قارا ئۆڭكۈرگە چۈشۈپ قالغان ئۇچۇرلارنىڭ ئۇنىڭ يۈزىدە گولوگرامما سۈپىتىدە كودلىنىدىغانلىقىنى ئوتتۇرىغا قويدى.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holographic Principle Section */}
      <section className="mb-12 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8 border-2 border-indigo-300 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 text-indigo-200 opacity-40">
          <div className="text-8xl">🌌</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">گولوگرافىك پرىنسىپ: دۇنيا گولوگراممامۇ؟</h2>
        
        <div className="bg-white rounded-2xl p-7 shadow-md mb-8 relative z-10 border border-indigo-200">
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            «گولوگرافىك پرىنسىپ» مۇشۇ يەردە ئىشقا كىرىشىدۇ.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">🖼️</div>
                <h3 className="font-bold text-xl text-slate-800">گولوگرافىيە</h3>
              </div>
              <p className="text-slate-700">
                ئۈچ ئۆلچەملىك كۆرۈنىدىغان سىرلىق، ئىككى ئۆلچەملىك فوتوگرافىيە. ئۈچ ئۆلچەملىك رەسىم ئىككى ئۆلچەملىك ئۇچۇرلاردىن قايتا ھاسىل قىلىنىدۇ.
              </p>
            </div>
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-300">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3 text-amber-600">🌍</div>
                <h3 className="font-bold text-xl text-slate-800">بىزنىڭ ئالەمىمىز</h3>
              </div>
              <p className="text-slate-700">
                بەلكىم بىزنىڭ ئالەمىمىزمۇ شۇنداق بولۇشى مۇمكىن. بىز «رېئاللىق» دەپ قارايدىغان ئۈچ ئۆلچەملىك دۇنيا ئەمەلىيەتتە «تۆۋەن ئۆلچەملىك ئۇچۇرلاردىن» ياسالغان «پرويېكسىيە» بولۇشى مۇمكىن.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-100 to-rose-100 p-5 rounded-xl border border-amber-300">
            <p className="text-lg font-bold text-slate-900 text-center">
              «ئەگەر سىز ھازىر كۆرۈۋاتقان پۈتۈن دۇنيا ئەمەلىيەتتە ئىككى ئۆلچەملىك چوڭ ئېكرانغا يېزىلغان ئۇچۇرلاردىن ياسالغان «گولوگرافىيە» بولسا قانداق بولىدۇ؟»
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-md relative z-10 border border-indigo-200">
          <div className="flex items-start">
            <div className="text-indigo-600 text-3xl mr-4 mt-1">✨</div>
            <div>
              <p className="font-bold text-xl text-slate-900 mb-2">2022-يىلى، Google دىكى بىر تەتقىقات گۇرۇپپىسى:</p>
              <p className="text-lg text-slate-800">
                كۋانت كومپيۇتېرىدا «گولوگرافىك قۇرت تۆشۈكى» نى مۇۋەپپەقىيەتلىك سىمۇلياتسىيە قىلدى. بۇ تارىخىي نەتىجە بولۇپ، دۇنيادىكى ئۇچۇر بىلەن بوشلۇق ئوتتۇرىسىدىكى چوڭقۇر باغلىنىشنىڭ تۇنجى سىناق تەكلىپى ئىدى.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Participatory Universe Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-rose-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right flex items-center">
          <span className="text-rose-600 text-3xl ml-3">🤝</span>
          قاتناشقان ئالەم: بىز تاماشىبىن ئەمەس
        </h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          دوكتور ۋېلېر يەنە «قاتناشقان ئالەم» ئۇقۇمىنى ئوتتۇرىغا قويدى.
        </p>
        
        <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-6 mb-8 border border-rose-300">
          <p className="text-xl font-bold text-slate-900 text-center mb-4">
            «كائىنات بىزدىن مۇستەقىل مەۋجۇت ئەمەس، بەلكى بىز ئالەمنىڭ رېئاللىقىنىڭ پەيدا بولۇشىغا ئاكتىپ قاتناشقۇچىلارمىز»
          </p>
          <p className="text-lg text-slate-800 text-center italic">
            «نېمە؟ دېمەك، سىز مەن ئالەمنى يارىتىۋاتىمەن دەيسىزمۇ؟»
          </p>
          <p className="text-lg text-slate-800 text-center mt-3 font-bold text-amber-700">
            ھەئە. ئەمەلىيەتتە، كۋانت مېخانىكىسىنىڭ تەجرىبە نەتىجىلىرى دەل شۇنى كۆرسىتىپ بېرىدۇ!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">🐱</div>
              <h3 className="font-bold text-xl text-slate-800">كۋانت دۇنياسى</h3>
            </div>
            <p className="text-slate-700">
              نەرسىلەر كۆزىتىلمىگىچە ئېنىق بىر ھالەتكە ئىگە بولمايدۇ. ھەتتا داڭلىق «شرۆدىڭگېر مۈشۈكى» كۆزىتىلمىگىچە «تىرىك» ۋە «ئۆلۈك» ھالەتلەرنىڭ ئۈستى تەرىپىدە مەۋجۇت بولىدۇ.
            </p>
          </div>
          
          <div className="bg-violet-50 p-6 rounded-xl border border-violet-300">
            <div className="text-center mb-4">
              <div className="text-5xl mb-3 text-violet-600">🏆</div>
              <h3 className="font-bold text-xl text-slate-800">2022-يىلى نوبېل مۇكاپاتى</h3>
            </div>
            <p className="text-slate-700">
              فىزىكا ساھەسىدە نوبېل مۇكاپاتىغا ئېرىشكەن تەتقىقاتلار «كۆزىتىلمىگىچە نەتىجە ئېنىق ئەمەس» دېگەن كۋانت نەزەرىيىسىنى قەتئىي ئىسپاتلىدى.
            </p>
          </div>
        </div>
        
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-300">
          <p className="text-lg text-slate-800 mb-4">
            باشقىچە قىلىپ ئېيتقاندا، بىز كۆزىتىش ھەرىكىتى ئارقىلىق ئالەمدىكى بىرلا رېئاللىقنى تاللايمىز دېيەلەيمىز. ئىنساننىڭ ئاڭ-سېزىمىنىڭ ئالاھىدە ياكى ئۆلچەش ئۈسكۈنىلىرىنىڭ ئوخشاش ئىكەنلىكى توغرىسىدا يەنىلا تالاش-تارتىشلار بار...
          </p>
          <p className="text-lg text-slate-800 font-bold text-rose-700">
            ماڭا نىسبەتەن، دوكتور ۋېلېرنىڭ «قاتناشقان ئالەم» سۆزى «بىز ھەممىمىز بۇ ئالەمنىڭ ئورتاق ياراتقۇچىلىرى» دېگەن ئۇچۇرغا ئوخشايدۇ، ۋە بۇ مېنى خۇشال قىلدى.
          </p>
        </div>
        
        <div className="bg-sky-50 p-6 rounded-xl border border-sky-300 mt-8">
          <div className="flex">
            <div className="text-sky-600 text-3xl mr-4 mt-1">❗</div>
            <div>
              <p className="font-bold text-xl text-slate-900 mb-2">ئەسكەرتىش:</p>
              <p className="text-lg text-slate-800">
                مەن سىزگە مۇھىم بىر نەرسىنى ئېيتماقچىمەن. كۋانت فىزىكىسىدا، «كۆزىتىش» چوقۇم ئىنساننىڭ بىرەر نەرسىنى كۆزىتىدىغانلىقىنى بىلدۈرمەيدۇ. ئۇ يەنە ئۆلچەش ئۈسكۈنىسى بىلەن ئۆز-ئارا تەسىر كۆرسىتىش ئارقىلىق ھالەتنى بەلگىلەشنىمۇ ئۆز ئىچىگە ئالىدۇ. بىز «كۆزىتىش ھەرىكىتىمىز» رېئاللىقنى يارىتىدۇ دېگەندە، كۆزىتىش ۋە ئۆلچەش ھەرىكىتى كۋانت ھەرىكىتىنى بەلگىلەيدۇ دېگەننى كۆزدە تۇتىمىز. ئاڭنىڭ زۆرۈر ياكى ئەمەسلىكى ھازىرغىچە ئېنىق ئەمەسلىكىنى ئېسىمىزدە تۇتۇش مۇھىم...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buddhist Wisdom Section */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-300 relative overflow-hidden">
        <div className="absolute -bottom-12 -right-12 w-40 h-40 text-amber-200 opacity-30">
          <div className="text-9xl rotate-12">☸️</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">2500 يىللىق دانالىق بىلەن ئۇچرىشىش: بۇددا دىنى ۋە كۋانت مېخانىكىسى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          قىزىقارلىقى شۇكى، دوكتور ۋېلېرنىڭ ئىدىيەلىرى 2500 يىل ئىلگىرىكى بۇددا دىنى ئىدىيەسىگە ھەيران قالارلىق دەرىجىدە ئوخشايدۇ.
        </p>
        
        <div className="bg-white rounded-2xl p-7 shadow-md mb-8 relative z-10 border border-amber-200">
          <p className="text-lg text-slate-800 mb-4">
            «بوشلۇق» ئۇقۇمى ۋە «تايىنىدىغان كېلىپ چىقىش» تەلىماتى بۇددا دىنىنىڭ ئاساسىي مەزمۇنى. كۋانت چىرمىشىنىڭ دەل مۇشۇ ئىكەنلىكىنى ھېس قىلغاندا، مەن ھەيران قالدىم.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="text-amber-600 text-2xl ml-2">🔷</span>
                «بوشلۇق» نېمە؟
              </h3>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <p className="text-slate-700 mb-3">
                  بۇددا دىنىدا «بوشلۇق» «ھېچنېمە» دېگەنلىك ئەمەس. ئۇ «ھەممە نەرسىنىڭ ئۆزىگە خاس مۇقىم مەزمۇنى يوق» دېگەنلىك.
                </p>
                <p className="text-slate-700 mb-4">
                  باشقىچە قىلىپ ئېيتقاندا، نەرسىلەر باشقا نەرسىلەر، ئەھۋاللار، ۋاقىت ۋە بوشلۇق قاتارلىق ھەر خىل ئامىللارغا تايىنىپ مەۋجۇت بولغاچقا، ئۇلارنىڭ «ماھىيىتى» نىسبىي.
                </p>
                <p className="text-slate-700 font-medium">
                  مەسىلەن، سىز ھازىر ئوقۇغۇچى بولسىڭىزمۇ، ئوقۇش پۈتتۈرگەندە جەمئىيەتنىڭ ئىشلەيدىغان ئەزاسىغا ئايلىنىسىز، توي قىلغاندا ئەر ياكى ئايال بولىسىز. لېكىن قايسى ۋاقىتتا سىز «ھەقىقىي ئۆزىڭىز» بولىسىز؟
                </p>
                <p className="text-slate-700 mt-3">
                  ئەمەلىيەتتە، بۇلارنىڭ ھەر بىرى سىزنىڭ «ھەقىقىي ئۆزىڭىز»، ئەمما شۇنىڭ بىلەن بىر ۋاقىتتا، ئۇلار ۋاقىتلىق. سىزنىڭ ھەقىقىي ئۆزىڭىز پەقەت ئەتراپىڭىزدىكىلەر بىلەنلا مەۋجۇت. بۇ بوشلۇق ئۇقۇمى.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="text-emerald-600 text-2xl ml-2">🔷</span>
                Engi: ھەممە نەرسە باغلىنىشلىق
              </h3>
              <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
                <p className="text-slate-700 mb-3">
                  Engi ئۇقۇمى ئۆزئارا باغلىنىش پىرىنسىپى بولۇپ، ئۇ بارلىق ھادىسىلەرنىڭ سانسىز سەۋەب شەرتلىرىگە باغلىق ئىكەنلىكىنى ئوتتۇرىغا قويىدۇ.
                </p>
                <p className="text-slate-700 mb-4">
                  بۈگۈن ھېس قىلغان بەختىڭىز سانسىز «باغلىنىش» نىڭ ئۆز-ئارا تەسىرىنىڭ نەتىجىسىدۇر - دوستىڭىزنىڭ كۈلكىسى، لەززەتلىك ناشتىلىق، قۇياشلىق ھاۋارايى، ئۆتكەن كېچىدىكى ياخشى ئۇيقۇ...
                </p>
                <p className="text-slate-700">
                  ئەگەر بۇ شەرتلەرنىڭ بىرى يوقاپ كەتكەن بولسا، ھازىرقى ھالىتىڭىز باشقىچە بولۇشى مۇمكىن ئىدى. ھازىرقى ھالىتىڭىز ئۆز نۆۋىتىدە باشقىلارغا ياكى باشقا نەرسىلەرگە تەسىر كۆرسىتىدۇ.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-7 shadow-md relative z-10 border border-rose-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">كۋانت چىرمىشى بىلەن تايىنىدىغان كېلىپ چىقىش ئوتتۇرىسىدىكى ھەيران قالارلىق ئوخشاشلىقلار</h3>
          
          <div className="bg-violet-50 p-6 rounded-xl border border-violet-300 mb-8">
            <p className="text-lg text-slate-800 mb-4">
              بۇ يەردە تېخىمۇ قىزىقارلىق بولىدۇ.
            </p>
            <p className="text-lg text-slate-800 mb-4">
              كۋانتنىڭ چىرمىشىپ كېتىشى ئىككى زەررىچىنىڭ ئوخشاش ئارىلىقتا بىر-بىرى بىلەن ئالاقە قىلىۋاتقاندەك بىرلا ۋاقىتتا رېئاكسىيە قىلىشىغا يول قويىدۇ.
            </p>
            <p className="text-lg text-slate-800 font-medium">
              ئاددىي ئوخشىتىش بىلەن ئېيتقاندا، A شەخس بىلەن B شەخسنىڭ يەرشارىنىڭ ئىككى تەرىپىدە تۇرۇپ، بىرلا ۋاقىتتا بىر زەررىچىنى دومىلىتىۋاتقانلىقىنى تەسەۋۋۇر قىلىڭ. ئەگەر A شەخس 6 نى دومىلىتىۋەتسە، B شەخسمۇ 6 نى دومىلىتىدۇ. ئەگەر A شەخس 3 نى دومىلىتىۋەتسە، B شەخسمۇ 3 نى دومىلىتىدۇ. بۇ خۇددى شۇنداق.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h4 className="font-bold text-xl text-slate-900 mb-3">مۇھىم نۇقتا:</h4>
              <p className="text-slate-700">
                بۇ ئىككى كۋانت «ئوخشاش ئۇچۇرلارنى ئۆز ئىچىگە ئالغان يەككە سىستېما» سۈپىتىدە ھەرىكەت قىلىدۇ. ئۇلار ئون مىڭلىغان كىلومېتىر ئارىلىقتا تۇرسىمۇ، ئۇلار خۇددى بىر-بىرىنىڭ يېنىدا تۇرغاندەك ئۇچۇرلارنى ئورتاقلىشىدۇ.
              </p>
            </div>
            
            <div className="bg-rose-50 p-5 rounded-xl border border-rose-300">
              <h4 className="font-bold text-xl text-slate-900 mb-3">ئەڭ ھەيران قالارلىقى:</h4>
              <p className="text-slate-700">
                كۋانت مېخانىكىسىنىڭ ئېنىقسىزلىق پىرىنسىپى، ئۇ ماددىنىڭ ئورنى ۋە ھەرىكەتلەندۈرگۈچ كۈچىنى ئوخشاش ۋاقىتتا توغرا ئۆلچەشكە بولمايدىغانلىقىنى ئوتتۇرىغا قويىدۇ. بۇ ماددىنىڭ ھالىتىنىڭ ئۈزلۈكسىز ئۆزگىرىپ تۇرىدىغانلىقىنى ۋە مۇقىم بىرلىكى يوقلىقىنى كۆرسىتىدۇ.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-100 to-rose-100 p-6 rounded-xl border border-amber-300 mt-8">
            <p className="text-xl font-bold text-slate-900 text-center">
              بۇددا دىنى يەنە ھادىسىلەرنىڭ ئۈزلۈكسىز ئۆزگىرىپ تۇرىدىغانلىقىنى ۋە مۇقىم بىرلىكى يوقلىقىنى ئۆگىتىدۇ.
            </p>
            <p className="text-lg text-slate-800 text-center mt-3 font-bold">
              باشقىچە قىلىپ ئېيتقاندا، ئىككىسى ئوخشاش ئۇچۇرنى يەتكۈزىدۇ: «مۇستەقىل، ئايرىم بىر گەۋدە يوق؛ ھەممە نەرسە ئۆزئارا باغلىنىشلىق».
            </p>
          </div>
          
          <div className="bg-sky-50 p-6 rounded-xl border border-sky-300 mt-8">
            <p className="text-lg text-slate-800 mb-4">
              ئالىملار يەنە بىر ئورتاقلىقنى بايقىماقتا: نەزەرىيە فىزىكىسى دوكتور جون ستېۋارت بېل تەرىپىدىن 1964-يىلى ئوتتۇرىغا قويۇلغان بېل تەڭسىزلىكى كۋانت چىرمىشىنىڭ مەۋجۇتلۇقىنى تەجرىبە ئارقىلىق دەلىللەش ئۈچۈن نەزەرىيەۋى رامكا ياراتتى. كېيىنكى ئەمەلىي تەتقىقاتلار كۋانت چىرمىشىنىڭ مەۋجۇتلۇقىنى ئىسپاتلىدى، بۇ ئۇنى 2022-يىللىق نوبېل فىزىكا مۇكاپاتىنىڭ تېمىسىغا ئايلاندۇردى.
            </p>
            <p className="text-lg text-slate-800">
              بۇ بايقاش نۇرغۇن فىزىكا ئالىملىرىنىڭ ئالەمگە بولغان قارىشىمىزنىڭ ئۆزگىرىشكە مەجبۇر بولۇۋاتقانلىقىنى تونۇپ يېتىشىگە تۈرتكە بولدى. تەجرىبىلەر ئىككى ماددىنى پۈتۈنلەي ئايرىۋېتىشكە بولمايدىغانلىقىنى ۋە نەرسىلەرگە بىر پۈتۈنلۈك سۈپىتىدە مۇئامىلە قىلىش كېرەكلىكىنى ئاشكارىلىدى.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-violet-100 to-indigo-100 p-6 rounded-xl border border-violet-300 mt-8">
            <p className="text-lg text-slate-800 mb-4 font-bold text-center">
              2500 يىل ئىلگىرىكى بۇددا دىنى ھېكمەتلىرى ۋە 21-ئەسىردىكى كۋانت فىزىكىسى پۈتۈنلەي ئوخشىمايدىغان ئۇسۇللار ئارقىلىق ئوخشاش يەكۈنلەرگە كەلدى. بۇنىڭ ھەم قىزىقارلىق، ھەم تەسىرلىك ئىكەنلىكىنى ئويلىمايسىزمۇ؟
            </p>
            <p className="text-lg text-slate-800 text-center">
              ئەمەلىيەتتە، فىزىكا ئالىملىرى بىلەن بۇددا ئالىملىرى ئوتتۇرىسىدىكى بىر توپ سۆھبەتلەر نەشر قىلىندى، بۇ دىئالوگلاردا بۇ ئورتاقلىقلار جىددىي مۇھاكىمە قىلىندى.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-7 shadow-md mt-8 relative z-10 border border-emerald-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">كېلىڭ، بۇنى تونۇش مىسال بىلەن چۈشىنىۋالايلى.</h3>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-300">
            <p className="text-lg text-slate-800 mb-4">
              بىر دەم قەھۋەخانىدا قەھۋە ئىچىۋاتقانلىقىڭىزنى تەسەۋۋۇر قىلىپ بېقىڭ.
            </p>
            <p className="text-lg text-slate-800 mb-4">
              بۇ قەھۋە دانلىرى يىراق بىر دۆلەتتىكى بىر دېھقانچىلىق مەيدانىدا ئۆسكەن ۋە سانسىز ئالاقىلەر - قۇياش نۇرى، يامغۇر، تۇپراقتىكى ئوزۇقلۇق ماددىلار، دېھقاننىڭ جاپالىق ئەمگىكى، يەتكۈزگۈچى، قورغۇچى، قەھۋەخانا خىزمەتچىلىرى ۋە باشقىلار ئارقىلىق سىزنىڭ قولىڭىزغا يېتىپ كەلگەن.
            </p>
            <p className="text-lg text-slate-800 mb-4">
              سىز بۇ قەھۋەنى ئىچكەندە، دېھقاننىڭ تۇرمۇشى قوللىنىدۇ، قەھۋەخانىنىڭ سودىسى جانلىنىدۇ، سىز ئۆزىڭىزنى جۇشقۇن ھېس قىلىسىز ۋە بەلكىم باشقىلارغا مېھرىبان بولالايسىز.
            </p>
            <p className="text-lg text-slate-800 font-bold">
              ھەتتا كۋانت دۇنياسىدا يىراق زەررىچىلەر چوڭقۇر باغلىنىپ، بىر-بىرىگە كۆرۈنمەس دەرىجىدە تەسىر كۆرسىتىدۇ.
            </p>
            <p className="text-lg text-slate-800 mt-4 font-bold text-center">
              ئىككىسى ئوخشاش ھەقىقەتنى ئىپادىلەيدۇ: «مۇستەقىل، ئايرىم مەۋجۇتلۇق دېگەن نەرسە يوق؛ ھەممە نەرسە مۇناسىۋەت ئارقىلىق باغلىنىدۇ».
            </p>
            <p className="text-lg text-slate-800 mt-4 text-center font-bold text-violet-700">
              2500 يىل ئىلگىرىكى بۇددا ھېكمەتلىرى ۋە 21-ئەسىردىكى كۋانت فىزىكىسى پۈتۈنلەي ئوخشىمايدىغان ئۇسۇللار ئارقىلىق ئوخشاش يەكۈنگە كەلگەن. بۇنىڭ ئىنتايىن سىرلىق ۋە تەسىرلىك ئىكەنلىكىنى ئويلىمايسىزمۇ؟
            </p>
            <p className="text-lg text-slate-800 mt-4 text-center">
              ئەلۋەتتە، ئۇسۇللار ۋە ئارقا كۆرۈنۈشلەرنىڭ ئوخشىمايدىغانلىقىنى چۈشىنىش مۇھىم، ئەمما بۇددا دىنى بىلەن زامانىۋى فىزىكىنىڭ 2500 يىل جەريانىدا ئوخشاش يەكۈنگە كەلگەنلىكى ھەقىقەتەن قىزىقارلىق.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Application Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-sky-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right flex items-center">
          <span className="text-sky-600 text-3xl ml-3">🌱</span>
          بۇ چۈشەنچىلەرنى كۈندىلىك تۇرمۇشقا قوللىنىش
        </h2>
        
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-7 border border-sky-300">
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            ئۇنداقتا، بۇ چۈشەنچىلەرنى كۈندىلىك تۇرمۇشىمىزغا قانداق قوللىنالايمىز؟
          </p>
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 mb-6">
            <p className="text-lg text-slate-800 mb-4">
              كۋانت نەزەرىيىسىدە، «ئوبيېكتىپ رېئاللىق» نى كۆزىتىشسىز بېكىتكىلى بولمايدۇ. شۇڭلاشقا بىز سۇبيېكتىپ رېئاللىقىمىز كۆزەتكەنلىرىمىز ۋە قىلغان تاللىشىمىزغا ئاساسەن ئۆزگىرىدۇ دەپ ئويلايمىز.
            </p>
            <p className="text-xl font-bold text-slate-900 text-center mb-4">
              بىز كۆزەتكەن ۋە دىققىتىمىزنى مەركەزلەشتۈرگەن نەرسىلەر رېئاللىقىمىزنى شەكىللەندۈرىدۇ.
            </p>
            <p className="text-lg text-slate-800">
              باشقىچە قىلىپ ئېيتقاندا، بىز دىققەت قىلغان نەرسىلەر، ئېرىشكەن ئۇچۇرلار ۋە ئۇنى ھەر كۈنى قانداق چۈشەندۈرۈشىمىز رېئاللىقىمىزنى بەلگىلىشى مۇمكىن.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-rose-50 p-5 rounded-xl border border-rose-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">⚠️</div>
                <h3 className="font-bold text-lg text-slate-900">سەلبىي يۆنىلىش</h3>
              </div>
              <p className="text-slate-700 text-center">
                پەقەت سەلبىي ئۇچۇرلارغا دىققەت قىلىش
              </p>
            </div>
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">✨</div>
                <h3 className="font-bold text-lg text-slate-900">ئىجابىي يۆنىلىش</h3>
              </div>
              <p className="text-slate-700 text-center">
                ئىمكانىيەت ۋە ئۈمىدكە دىققەت قىلىش
              </p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-300 mt-8">
            <p className="text-lg text-slate-800 font-bold text-center">
              بۇ تاللاشلارنىڭ ئۆزى رېئاللىقىمىزنى شەكىللەندۈرىشى مۇمكىن.
            </p>
            <p className="text-lg text-slate-800 mt-4 text-center">
              بەلكىم بىز كۆزەتكەنلىرىمىز ۋە دىققەت قىلغانلىرىمىزغا تېخىمۇ دىققەت قىلىشىمىز كېرەك.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-300 relative overflow-hidden">
        <div className="absolute -top-8 -left-8 w-24 h-24 text-amber-200 opacity-30">
          <div className="text-7xl">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right text-center relative z-10">خۇلاسە</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-amber-300 relative z-10">
          <p className="text-lg text-slate-800 leading-relaxed mb-6">
            بۇ ماقالىدە، بىز فىزىكا گىگانتى دوكتور جون ۋېلېرنىڭ «ئۇ بىردىن» ۋە «قاتناشقان ئالەم» ناملىق ئەسەرلىرىنى چۈشەندۈردۇق.
          </p>
          
          <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-xl border border-violet-300 mb-6">
            <p className="text-xl font-bold text-slate-900 text-center">
              بەلكىم ھەر بىرىمىز ئالەمدىن ئىبارەت بۇ كەڭ ئۇچۇر تورى ئىچىدە رېئاللىقىمىزنى يارىتىشتا مۇھىم «قاتناشقۇچى» بولۇشىمىز مۇمكىن.
            </p>
          </div>
          
          <p className="text-lg text-slate-800 leading-relaxed mb-6">
            بۇنى شۇنداق ئويلىغاندا، بىز كۆزەتكەنلىرىمىز ۋە دىققىتىمىزنى مەركەزلەشتۈرگەنلىرىمىز ھەقىقەتەن مۇھىم بولۇپ قالىدۇ.
          </p>
          
          <div className="text-center py-8 border-y border-amber-200">
            <div className="text-5xl mb-4">🌌</div>
            <p className="text-2xl font-bold text-slate-900">
              كائىنات ۋە رېئاللىق ھەقىقەتەن كىشىنى جەلپ قىلىدۇ.
            </p>
          </div>
          
          <div className="mt-10 pt-8 border-t border-amber-200 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-rose-600 text-white px-8 py-4 rounded-2xl mb-6 shadow-lg">
              <p className="font-bold text-2xl">«بىلىم — كۆرۈشنىڭ كۆزى، تەجرىبە — يۈرۈشنىڭ قولى»</p>
              <p className="text-sm opacity-90 mt-2">— Uyghur wisdom on knowledge and practice</p>
            </div>
            
            <p className="text-xl text-slate-800 max-w-2xl mx-auto italic">
              فىزىكا، پەلسەپە ۋە دىن ئوتتۇرىسىدىكى بۇ سىرلىق ئۇچۇرلار بىزگە دۇنيانى تېخىمۇ چوڭقۇر چۈشىنىشىمىزگە ياردەم بېرىدۇ.
            </p>
            
            <div className="mt-8 flex justify-center gap-6 text-4xl">
              <span className="text-amber-500 animate-bounce">☪</span>
              <span className="text-violet-500 animate-bounce animation-delay-200">☪</span>
              <span className="text-rose-500 animate-bounce animation-delay-400">☪</span>
              <span className="text-emerald-500 animate-bounce animation-delay-600">☪</span>
              <span className="text-sky-500 animate-bounce animation-delay-800">☪</span>
            </div>
            
            <p className="text-2xl font-bold text-slate-900 mt-8">
              كېيىنكى قېتىم كۆرۈشكەنچە!
            </p>
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
          <span className="text-indigo-500">☪</span>
          <span className="text-teal-500">☪</span>
        </div>
        <p className="text-slate-500 text-xs mt-4">
          2500 يىللىق پەلسەپە ۋە زامانىۋى فىزىكا بىرلىكتە — بىلىم دۇنياسىنىڭ سىرلىق سەپىرى
        </p>
      </footer>
    </article>
  );
};

export default Blog119;