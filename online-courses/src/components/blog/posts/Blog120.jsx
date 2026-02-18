import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Globe, 
  ArrowRightLeft, 
  Clock, 
  Sparkles, 
  ChevronRight,
  Info
} from 'lucide-react';

const Blog120 = () => {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-12">
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-6 py-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 text-sm mb-6 animate-pulse">
            <Sparkles size={16} />
            <span>نىسپىيلىك ۋە كۋانت مېخانىكىسى سەپىرى</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            ئالەم نېمە ئۈچۈن كېڭىيىدۇ؟
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            قارا ئۆڭكۈر، ۋەقە ئۇپۇقى ۋە گولوگرافىك پرىنسىپ ھەققىدىكى چوڭقۇر سۆھبەت
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><BookOpen size={16} /> 1-قىسىم</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2026-يىلى 1-ئاينىڭ 22-كۈنى</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        
        {/* Recap Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Info size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">ئالدىنقى قېتىملىق خۇلاسە</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "قارا ئۆڭكۈرگە چۈشكەندە، كۆزىتىش ۋاقتى ۋەقە ئۇپۇقىدا توختايدۇ.",
              "جىسىملار ۋەقە ئۇپۇقىدا (نۇر قېچىپ كېتەلمەيدىغان جاي) ئۇچۇر سۈپىتىدە خاتىرىلىنىدۇ.",
              "ھەر قېتىم جىسىم چۈشكەندە، ۋەقە ئۇپۇقى كېڭىيىدۇ ۋە سىغىمى ئاشىدۇ.",
              "ئېلېمېنتار زەررىچىلەر ھەققىدىكى ئۇچۇرلار ساقلىنىدۇ، يوقاپ كېتىش ئېھتىماللىقى تۆۋەن."
            ].map((item, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl hover:border-indigo-500/30 transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold mt-0.5">
                  {index + 1}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Core Question */}
        <section className="mb-12 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <h2 className="text-xl font-bold text-cyan-100 mb-4 flex items-center gap-2">
            <Globe className="text-cyan-400" />
            مەركىزىي سوئال: بىز قارا ئۆڭكۈرنىڭ ئىچىدىمۇ؟
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            ھازىرقى ئالەم قارا ئۆڭكۈرگە چۈشكەن جىسىملار ھەققىدىكى ئۇچۇرلارنى كۆزىتىۋاتقان بولۇشى مۇمكىنمۇ؟ 
            ئەگەر شۇنداق بولسا، ئالەم ۋەقە ئۇپۇقىدا خاتىرىلىنىۋاتقان بولۇشى مۇمكىنمۇ؟
          </p>
        </section>

        {/* AI Analysis Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">سۈنئىي ئەقىلنىڭ تەھلىلى</h2>
            <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 text-xs rounded-full border border-emerald-800">AI Analysis</span>
          </div>

          <div className="space-y-6">
            {/* Point 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                1. ئالەم «ئۇپۇقى» ئاللىقاچان مەۋجۇت
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                كائىنات تېز سۈرئەتتە كېڭىيىۋاتقانلىقى ئۈچۈن، بەك يىراقتىكى گالاكتىكىلار نۇر سۈرئىتىدىن تېز سۈرئەتتە بىزدىن يىراقلىشىۋاتىدۇ. بىز ئەمدى يىراقنى كۆرەلمەيدىغان بۇ چېگرا <strong className="text-cyan-400">ئالەم ۋەقە ئۇپۇقى</strong>. گولوگرافىك پرىنسىپقا ئاساسلانغاندا، ئالەمدىكى بارلىق ئۇچۇرلار بۇ يىراق چېگرادا خاتىرىلەنگەن بولۇشى مۇمكىن.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                2. «ئىچكى» ۋە «سىرتقى» تەتۈر بولۇشى مۇمكىن
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                قارا ئۆڭكۈرلەرگە كەلسەك، ئۇچۇرلار «سىرتقى» يۈزىگە خاتىرىلەنگەن. ئەمما بىز ئالەمنى بىر پۈتۈن دەپ قارىساق، كۆرۈنۈش تەتۈر بولىدۇ:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-3 rounded border border-slate-800">
                  <span className="text-xs text-slate-500 block mb-1">قارا ئۆڭكۈر</span>
                  <p className="text-sm text-slate-300">بىز سىرتتا، ئۇنىڭ چېگرىسىدىكى ئۇچۇرلارنى كۆرىمىز.</p>
                </div>
                <div className="bg-slate-950 p-3 rounded border border-slate-800">
                  <span className="text-xs text-slate-500 block mb-1">پۈتۈن ئالەم</span>
                  <p className="text-sm text-slate-300">بىز ئۇپۇق بىلەن ئورالغان «ئىچكى» دە، بۇ چېگرادا خاتىرىلەنگەن ئۇچۇرلارنىڭ «پرويېكسىيەسى» سۈپىتىدە مەۋجۇت.</p>
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                3. «كۋانت چىرمىشى» بوشلۇقنى بىر-بىرىگە توقۇيدۇ
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                يېقىنقى فىزىكىدا (بولۇپمۇ «ER=EPR پەرەز»)، بوشلۇقنىڭ ئۆزى «ئۇچۇر باغلىنىشى» دىن كېلىپ چىققان. كائىناتنىڭ ئۇپۇقتىكى كۆپ مىقداردىكى «كۋانت ئۇچۇرلىرى» بىر-بىرى بىلەن مۇرەككەپ چىرمىشىپ كەتكەن. بۇ «باغلىنىش» نىڭ چوڭقۇرلۇقى بىز ھېس قىلغان «ئارىلىق» ۋە «ئېتىراپچىلىق كۈچى» سۈپىتىدە نامايان بولىدۇ.
              </p>
            </div>
          </div>
        </section>

        {/* The Paradox Section */}
        <section className="mb-12">
          <div className="border-l-4 border-orange-500 pl-6 py-2 bg-orange-900/10 rounded-r-xl">
            <h3 className="text-lg font-bold text-orange-200 mb-2">يېڭى بىر زىددىيەت: كېڭىيىش vs قىسقىرىش</h3>
            <p className="text-slate-300 text-sm">
              ئەگەر بىر نەرسە بۇ ئالەم قارا ئۆڭكۈرىگە چۈشۈپ مەركەزگە قاراپ ھەرىكەت قىلسا، ئالەم كىچىكلەيدۇ. لېكىن بىز ئالەمنىڭ كېڭىيىۋاتقانلىقىنى كۆرىمىز. بۇ زىددىيەتلىك ئەمەسمۇ؟
            </p>
          </div>
        </section>

        {/* Final Resolution */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
              <ArrowRightLeft size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">فىزىكىنىڭ جاۋابى: ۋاقىت ۋە بوشلۇقنىڭ ئالمىشىشى</h2>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">«ئىچكى ۋە تاشقى» نىڭ ئۆزگىرىشى</h4>
                  <p className="text-slate-400 text-sm">
                    بىز «كائىناتنىڭ تېزلىشىش كېڭىيىشى» دەپ ئاتايدىغان ھادىسە ئەمەلىيەتتە ئىچكى تەرەپتىن كۆزىتىلگەن «بىرلىك تەرەپكە قاراپ چۈشۈش» بولۇشى مۇمكىن. كېڭىيىش پەقەت چېگرا (ئۇپۇق) غىچە بولغان ئۇچۇر زىچلىقىنىڭ ئۆزگىرىش جەريانى.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">«ۋاقىت» ۋە «بوشلۇق» نىڭ ئالمىشىشى</h4>
                  <p className="text-slate-400 text-sm">
                    قارا ئۆڭكۈرنىڭ ئىچىدە، «مەركەزگە (يەككەلىك) بېرىش» «كەلگۈسىگە (ۋاقىتقا) قاراپ سەپەر قىلىشقا» باراۋەر. بىزنىڭ «ۋاقىت ئۆتۈشى» توغرىسىدىكى قارىشىمىز ئەمەلىيەتتە «بىر خىل يەككەلىك قاراپ ئىلگىرىلەش» بىلەن مەنىداش بولۇشى مۇمكىن.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">«ئۇچۇرنىڭ ئېشىشى» كېڭىيىش سۈپىتىدە كۆرۈنىدۇ</h4>
                  <p className="text-slate-400 text-sm">
                    ئالەمنىڭ يۈزەكى كۆلىمى (ئۇپۇقنىڭ كۆلىمى) ئۇنىڭ ئۇچۇر سىغىمىنى بەلگىلەيدۇ. كائىناتنىڭ تېز كېڭىيىشى ۋە ئۇپۇقنىڭ كۆلىمىنىڭ ئېشىشى ئالەمنىڭ ئۇچۇر ساقلاش ئىقتىدارىنىڭ ئېشىپ كېتىۋاتقانلىقىنى بىلدۈرىدۇ. بۇ «ئېنتروپىيە تارتىش كۈچى» نىڭ ئۆزى بوشلۇقنى كېڭەيتىدىغان ئېنېرگىيە (قاراڭغۇ ئېنېرگىيە) ئىكەنلىكىنى ئىسپاتلايدۇ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion & Next Episode */}
        <footer className="border-t border-slate-800 pt-10 mt-16">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 text-center border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">خۇلاسە</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              سىزنىڭ «قارشى تەرەپ» تۇيغۇسى توغرا، ئۇ «سىرتتىن كۆرۈلگەن تارتىش كۈچى (قىسقىرىلىش)» بىلەن «ئىچكىدىن كۆرۈلگەن ئۇچۇر تەرەققىياتى (كېڭەيىش)» ئوتتۇرىسىدىكى بوشلۇقنى مۇكەممەل ئىپادىلەيدۇ. بىز 2D ئۇچۇرلىرىنىڭ «3D پرويېكسىيەسى» بولۇشىمىز مۇمكىن.
            </p>
            
            <div className="inline-block bg-slate-950 rounded-xl p-6 border border-slate-800 text-right">
              <div className="flex items-center gap-3 mb-3 text-cyan-400">
                <Cpu size={20} />
                <span className="font-bold">كېيىنكى قېتىم (2-قىسىم)</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                «بوشلۇقنىڭ كېڭىيىشى = ئۇچۇرنىڭ كۆپىيىشى» ۋە «ۋاقىتنىڭ ئىلگىرىلىشى» ئوتتۇرىسىدىكى مۇناسىۋەت ھەققىدە تېخىمۇ چوڭقۇر سۆھبەتلىشىمىز.
              </p>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                داۋامىنى كۈتۈڭ <ChevronRight size={16} className="rotate-180" />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12 text-slate-600 text-sm">
            &copy; 2026 KeLBiL Physics Dialogue Series. All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Blog120;