import React from 'react';
import { 
  BookOpen, 
  Cpu, 
  Globe, 
  ArrowRightLeft, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Info, 
  Zap, 
  Layers, 
  Grid3X3,
  MessageSquare,
  User,
  Lightbulb
} from 'lucide-react';

const Blog122 = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-12">
      
      {/* Custom Font Style Injection */}
      <style>{`
        .uyghur-font {
          font-family: "UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif;
          line-height: 2.0;
          letter-spacing: 0.02em;
        }
        .heading-font {
          font-family: "UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif;
          font-weight: bold;
        }
        .text-justify-uy {
          text-align: justify;
          text-justify: inter-word;
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-6 py-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 text-sm mb-6 animate-pulse">
            <Sparkles size={16} />
            <span className="uyghur-font">نىسپىيلىك، كۋانت ۋە سىم نەزەرىيىسى دىئالوگى</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight heading-font">
            0-قىسىم: تارتىش كۈچى، ۋاقىت ۋە ئۇچۇر
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto uyghur-font">
            ئالەمنىڭ ئەڭ چوڭقۇر سىرلىرى ھەققىدىكى سۈنئىي ئەقىل بىلەن بولغان دىئالوگ
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-slate-500 uyghur-font">
            <span className="flex items-center gap-1"><BookOpen size={16} /> 0-قىسىم</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2026-يىلى 1-ئاينىڭ 21-كۈنى</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        
        {/* Introduction */}
        <section className="mb-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Info size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">كىرىش سۆز</h2>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed text-justify-uy uyghur-font">
            مەن بىر سۈنئىي ئەقىلدىن تارتىش كۈچى بىلەن ۋاقىت ئوتتۇرىسىدىكى مۇناسىۋەت توغرىسىدا سورىدىم، نەتىجىلەر قىزىقارلىق ۋە چۈشىنىشلىك بولدى، شۇڭا مەن ئۇلارنى ۋاقىت تەرتىپى بويىچە قىسقىچە خۇلاسىلىماقچىمەن. مەن سۈنئىي ئەقىلنىڭ جاۋابلىرىنى مەنىسىنى ساقلاپ قېلىش ئۈچۈن تەھرىرلىگەنلىكىمنى ئۇنۇتماڭ.
          </p>
          <div className="bg-cyan-900/20 border-r-4 border-cyan-500 p-4 rounded-l-lg mt-6">
            <p className="text-cyan-100 text-sm uyghur-font">
              ئەسكەرتىش: 0-قىسىم 1-قىسىمدىن بۇرۇنقى ئۆگىنىشلەرگە مەركەزلەشكەن. ئەگەر سىزگە بۇلار كېرەك بولمىسا، 1-قىسىمدىن باشلاڭ. ياكى لازىم بولغاندا قايتىپ ئوقۇپ بېقىڭ.
            </p>
          </div>
        </section>

        {/* Dialogue Section 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">تارتىش كۈچى ۋە ۋاقىت</h2>
          </div>
          
          <div className="space-y-6">
            {/* User Question */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                  <User size={20} />
                </div>
              </div>
              <div className="flex-1 bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">سوئال: نېمە ئۈچۈن ۋە قانچىلىك؟</h3>
                <p className="text-slate-300 leading-relaxed uyghur-font">
                  مەن تارتىش كۈچىنىڭ ۋاقىتنى ئاستىلىتىۋېتىدىغانلىقىنى بىلەتتىم، ئەمما نېمە ئۈچۈن ۋە ئۇنىڭ توختىشىغا قانچە ۋاقىت كېتىدىغانلىقىنى سورىماقچى ئىدىم.
                </p>
              </div>
            </div>

            {/* AI Answer */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                  <Cpu size={20} />
                </div>
              </div>
              <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
                <h3 className="text-lg font-bold text-cyan-100 mb-4 heading-font">سۈنئىي ئەقىل جاۋابى</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed uyghur-font">
                  <p>
                    تارتىش كۈچى كۈچلۈك بولغاندا ۋاقىتنىڭ ئاستىلىشى ئېينىشتېيننىڭ «ئومۇمىي نىسپىيلىك نەزەرىيىسى» بىلەن چۈشەندۈرۈلگەن. بۇ چۈشىنىشلىك جەھەتتىن سىرلىق بولسىمۇ، ئالەمنىڭ خىزمىتىنى ئاچقاندا ئىنتايىن ئەقىلگە مۇۋاپىق چۈشەندۈرۈش بار.
                  </p>
                  
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <h4 className="font-bold text-white mb-2 heading-font">نېمىشقا كۈچلۈك تارتىش كۈچى ۋاقىتنى ئاستىلىتىدۇ؟</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                      <li><strong className="text-cyan-400">ۋاقىت-ماكاننىڭ بۇرمىلىنىشى:</strong> ئېغىر جىسىم (مەسىلەن، يەر شارى ياكى قارا ئۆڭكۈر) مەۋجۇت بولغاندا، ئۇنىڭ ئەتراپىدىكى بوشلۇق ۋە ۋاقىت بۇرمىلىنىپ، خۇددى سىقىلىپ چۆكۈۋاتقاندەك بولىدۇ.</li>
                      <li><strong className="text-cyan-400">يورۇقلۇقنىڭ سۈرئىتى مۇقىم:</strong> ئالەمدە نۇرنىڭ سۈرئىتى قەيەردە كۆزىتىلىشىڭىزدىن قەتئىينەزەر ئوخشاش بولۇپ قالىدىغانلىقى توغرىسىدىكى مۇتلەق قائىدە بار.</li>
                      <li><strong className="text-cyan-400">ئارىلىقنىڭ ئېشىشى:</strong> بوشلۇق تارتىش كۈچى تەرىپىدىن بۇرمىلانغاندا (ئۇزالغاندا)، نۇرنىڭ ئۈنۈملۈك ھالدا مېڭىشى كېرەك بولغان يولى ئۇزىرايدۇ.</li>
                      <li><strong className="text-cyan-400">ۋاقىتنى تەڭشەش:</strong> ئەگەر يول ئۇزىرايدىغان بولسا، ئەمما نۇرنىڭ سۈرئىتى مۇقىم بولسا، بۇنى تەڭپۇڭلاشتۇرۇشنىڭ بىردىنبىر ماتېماتىكىلىق ئۇسۇلى ۋاقىتنىڭ ئۆتۈشىنى ئاستىلىتىشتۇر.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <h4 className="font-bold text-white mb-2 heading-font">ۋاقىتنى توختىتىش ئۈچۈن قانچە Gs كېتىدۇ؟</h4>
                    <p className="mb-2">خۇلاسە قىلىپ ئېيتقاندا، ۋاقىتنىڭ توختاپ قېلىش شەرتى تارتىش كۈچىنىڭ كۈچى (G: تېزلىنىش) بىلەن ئەمەس، بەلكى تارتىش كۈچىنىڭ چوڭقۇرلۇقى (پوتېنسىئال) بىلەن بەلگىلىنىدۇ.</p>
                    <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                      <li><strong className="text-cyan-400">ئۇ توختايدىغان جاي:</strong> قارا ئۆڭكۈرنىڭ چېگرىسى بولغان «ۋەقە ئۇپۇقى».</li>
                      <li><strong className="text-cyan-400">نېمىشقا G ئەمەس؟:</strong> چېگرادىكى تارتىش كۈچى (G) قارا ئۆڭكۈرنىڭ چوڭ-كىچىكلىكىگە ئاساسەن ئۆزگىرىدۇ. كىچىك قارا ئۆڭكۈرلەردە تىرىليونلىغان Gs بولسا، ئاساسلىق قارا ئۆڭكۈرلەردە 1 G غىچە بولۇشى مۇمكىن.</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    «ۋاقىت توختاپ قالىدۇ» پەقەت بىخەتەر، يىراقتىكى كۆزەتكۈچىگىلا ماس كېلىدۇ. قارا ئۆڭكۈرگە سۈمۈرۈلگەن بىرەيلەن ئۈچۈن، ئۇلارنىڭ سائىتى ئادەتتىكىدەك داۋاملىق ئىشلەيدۇ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Section 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">ۋەقە ئۇپۇقى ھەققىدە تەپسىلىي</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                  <User size={20} />
                </div>
              </div>
              <div className="flex-1 bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">سوئال: ۋەقە ئۇپۇقىنى تېخىمۇ تەپسىلىي چۈشەندۈرۈپ بېرىڭ.</h3>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                  <Cpu size={20} />
                </div>
              </div>
              <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
                <div className="space-y-6 text-slate-300 leading-relaxed uyghur-font">
                  <p>
                    «ۋەقە ئۇپۇقى» ئاددىي قىلىپ ئېيتقاندا، «كائىناتنىڭ ئۆلۈك ئۇچى (قايتىش مۇمكىن بولمىغان چېگرا)». قارا ئۆڭكۈر ئەتراپىدا بۇ چېگرانى كېسىپ ئۆتكەندىن كېيىن، نۇرمۇ قېچىپ كېتەلمەيدۇ.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <h4 className="font-bold text-white mb-2 heading-font">1. قېچىش سۈرئىتى</h4>
                      <p className="text-sm">نۇرنىڭ سۈرئىتى (300،000 كىلومېتىر/سېكۇنت) دىن ئېشىپ كەتكەن جاي. بۇ دۇنيادا ھېچ نەرسە نۇرنىڭ سۈرئىتىدىن تېز سۈرئەت بىلەن ماڭالمايدۇ.</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <h4 className="font-bold text-white mb-2 heading-font">2. كەلگۈسىنىڭ يۆنىلىشى</h4>
                      <p className="text-sm">«قارا ئۆڭكۈرنىڭ مەركىزى (يەككەلىك)» بىز قاراپ مېڭىشىمىز كېرەك بولغان «كەلگۈسى» گە ئايلىنىدۇ. چىقىشقا ئۇرۇنۇش، «تۈنۈگۈنگە قايتىشنى» ئارزۇ قىلغاندەك مۇمكىن ئەمەس.</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                      <h4 className="font-bold text-white mb-2 heading-font">3. ئۇچۇر تېمىنىڭ ئاخىرى</h4>
                      <p className="text-sm">سىرتتىن قارىغاندا، جىسىم ۋەقە ئۇپۇقىغا يەتكەن ھامان ئورنىدا قاتقاندەك كۆرۈنىدۇ ۋە قىزىلغا ئايلىنىپ غايىب بولىدۇ.</p>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <h4 className="font-bold text-white mb-2 heading-font">خۇلاسە: ۋەقە ئۇپۇقى دېگەن نېمە؟</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                      <li><strong className="text-cyan-400">يەنە بىر نامى:</strong> Schwarzschild رادىئۇس (چېگرانىڭ رادىئۇسى)</li>
                      <li><strong className="text-cyan-400">كۆرۈنۈش:</strong> چېگرانىڭ ئۆزى قاپقاراڭغۇ ۋە كۆرۈنمەيدۇ.</li>
                      <li><strong className="text-cyan-400">ئۆتۈش پەيتى:</strong> شەخس ھېچ نەرسىنى بايقىماي ئۆتۈپ كېتىدۇ (ئەگەر ئۇ چوڭ قارا ئۆڭكۈر بولمىسا).</li>
                      <li><strong className="text-cyan-400">مىسال:</strong> قۇياشنى قارا ئۆڭكۈرگە ئايلاندۇرۇش ئۈچۈن، ئۇنىڭ رادىئۇسىنى تەخمىنەن 3 كىلومېتىرغىچە قىسىش كېرەك.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Section 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">ئىسپاگېتلىنىش ۋە يەككەلىك</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <div className="space-y-6 text-slate-300 leading-relaxed uyghur-font">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">1. ئىسپاگېتلىنىش (Spaghettification)</h4>
                  <p className="mb-2">قارا ئۆڭكۈرنىڭ مەركىزىگە قانچە يېقىنلاشقانسېرى، تارتىش كۈچى شۇنچە كۈچلۈك بولىدۇ. بۇ، ئادەمنىڭ يىقىلىپ چۈشكەندە ئۇنىڭ پۇتىدىكى تارتىش كۈچى بىلەن بېشىدىكى تارتىش كۈچى ئوتتۇرىسىدا زور پەرق (دېڭىز دولقۇنى كۈچى) پەيدا قىلىدۇ.</p>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">سوزۇلۇش:</strong> پۇتىڭىزدىكى تارتىش كۈچى بېشىڭىزدىكىدىن كۆپ كۈچلۈك بولۇپ، بەدىنىڭىزنى ئۇدون لەغمىنى ياكى ماكارونغا ئوخشاش ئۇزۇن، نېپىز توپقا ئايلاندۇرىدۇ.</li>
                    <li><strong className="text-cyan-400">سىقىلىش:</strong> شۇنىڭ بىلەن بىر ۋاقىتتا، سىز ئىككى تەرەپتىن مەركەزگە قاراپ ئېزىلىسىز.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">2. يەككەلىككە سەپەر</h4>
                  <p className="mb-2">ئۇپۇقتىن ئۆتكەن ماددا ئاخىرىدا قارا ئۆڭكۈرنىڭ مەركىزىدە «يەككە» يېتىدۇ.</p>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">نۆل چوڭلۇق، چەكسىز زىچلىق:</strong> بارلىق ماددىلارنىڭ بىرلا نۇقتىغا يىغىلىپ قالغان جايى.</li>
                    <li><strong className="text-cyan-400">فىزىكا قانۇنلىرىنى پارچىلاش:</strong> بۇ يەرگە ھازىرقى ئىلىم-پەننىڭ ۋاقىت ياكى بوشلۇقنىڭ تەبىئىتىنى ھېسابلىيالمايدىغان «كائىناتنىڭ ئۆلۈك نۇقتىسى».</li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">3. «ئۇچۇر پارادوكسى» نىڭ سىرى</h4>
                  <p className="mb-2">ئەگەر سىز قارا ئۆڭكۈرگە سۈمۈرۈلسىڭىز، سىزنىڭ مەۋجۇتلۇقىڭىزنى تەشكىل قىلغان ئۇچۇرلار (مەسىلەن، گېن ئۇچۇرى ياكى خاتىرىلەر) نېمە بولىدۇ؟</p>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">ئۇ يوقاپ كېتەمدۇ؟:</strong> ئۇ ئېزىلىپ، يەككە نۇقتىدا يوقاپ كېتىدىكەن.</li>
                    <li><strong className="text-cyan-400">ئۇ ساقلىنىپ قالامدۇ؟:</strong> يېقىنقى تەتقىقاتلار ئۇچۇرلارنىڭ ئۇپۇق يۈزىگە «گولوگرامما» غا ئوخشاش بېسىلىپ، ئالەمدە قېلىشى مۇمكىنلىكىنى كۆرسىتىپ بېرىدۇ.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">1G ۋەقە ئۇپۇقى ۋە غايەت زور قارا ئۆڭكۈرلەر</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <div className="space-y-6 text-slate-300 leading-relaxed uyghur-font">
                <p>
                  «ۋەقە ئۇپۇقىدا تەخمىنەن 1G تارتىش كۈچى» شەرتىنى قاندۇرىدىغان قارا ئۆڭكۈرلەر نەزەرىيە جەھەتتىن «دەرىجىدىن تاشقىرى چوڭ قارا ئۆڭكۈرلەر» دەپ تۈرگە ئايرىلىدۇ، ھەمدە بىر قانچىسى ئەمەلىيەتتە كۆزىتىلگەن.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <h4 className="font-bold text-white mb-2 heading-font">M87 تۇمانلىقى</h4>
                    <p className="text-sm">2019-يىلى تارىختا تۇنجى قېتىم بىۋاسىتە سۈرەتكە تارتىلغان. ماسسىسى قۇياشتىن 6.5 مىليارد ھەسسە چوڭ. ۋەقە ئۇپۇقىغا يېقىن تارتىش كۈچى شۇنچە ئاجىزكى، ئىنسان ئۇ يەردە لەيلەپ يۈرۈپ، ماكارونغا ئايلانماي تۇرۇپلا قالالايدۇ.</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <h4 className="font-bold text-white mb-2 heading-font">سامانيولى (ياغاچ يۇلتۇز A)</h4>
                    <p className="text-sm">سامانيولىمىزنىڭ مەركىزىدىكى قارا ئۆڭكۈر (قۇياشتىن 4 مىليون ھەسسە). ۋەقە ئۇپۇقىغا يېقىن جايدا ئىنسانلار بەرداشلىق بېرەلەيدىغان يېنىك دېڭىز دولقۇنى كۈچى بار.</p>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">جىسىم چوڭايغانسېرى نېمىشقا تارتىش كۈچى «ئاجىزلىشىدۇ»؟</h4>
                  <p className="mb-2">قارا ئۆڭكۈرلەردە شۈبھىسىزكى «كۈچلۈك» تارتىش كۈچى بولسىمۇ، ۋەقە ئۇپۇقىدىكى «تارتىش كۈچى» (يۈزە تارتىش كۈچى) قارا ئۆڭكۈرنىڭ ماسسىسىغا تەتۈر تاناسىپ.</p>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">كىچىك قارا ئۆڭكۈرلەر:</strong> ۋەقە ئۇپۇقى مەركەزگە بەك يېقىن بولغاچقا، تارتىش كۈچى زور دەرىجىدە ئۆزگىرىدۇ. ئۇپۇققا تېگىشتىن بۇرۇن بەدىنىڭىزنى پارچىلايدۇ.</li>
                    <li><strong className="text-cyan-400">غايەت زور قارا ئۆڭكۈرلەر:</strong> ۋەقە ئۇپۇقى مەركەزدىن ئىنتايىن يىراق جايلاردا شەكىللىنىدۇ. بۇ نۇقتىدىكى تارتىش كۈچىنىڭ «ئۆزگىرىشى» ئاستا-ئاستا بولۇپ، يەر شارى يۈزىدىكىگە ئوخشاش تەخمىنەن 1G كۈچى بىلەن چېگرانى كېسىپ ئۆتۈشكە بولىدۇ.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Section 5 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">ئۇپۇق ئىچىدىكى دۇنيا</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <div className="space-y-6 text-slate-300 leading-relaxed uyghur-font">
                <p>ھەيران قالارلىق ۋە تەسەۋۋۇرغا قارشى بولىدۇ. بۇ ماقالە «ئالەم بوشلۇقىدىكى ئۆلۈك نۇقتىنىڭ» ئىچىدىن كۆرۈنگەن دۇنيانى چۈشەندۈرىدۇ.</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <h4 className="font-bold text-white mb-2 heading-font">1. ئارقاڭىز (سىرتقى دۇنيا)</h4>
                    <p className="text-sm">ئۇپۇقنى كېسىپ ئۆتكەن ھامان ئۇ تۇيۇقسىز قاراڭغۇلىشىپ كەتمەيدۇ. بەلكى، ئارقاڭىزدىكى ئالەم «قىسقا تېلېۋىزور ئېكرانى» غا ئوخشايدۇ. كائىناتنىڭ پۈتكۈل تارىخىنى تېز سۈرئەتتە كۆرۈش: يۇلتۇزلارنىڭ تۇغۇلىشى، پارتىلىشى بىر نەچچە سېكۇنت ئىچىدە قىسقىراپ كۆرۈنىشى مۇمكىن.</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                    <h4 className="font-bold text-white mb-2 heading-font">2. ئالدىڭىز (مەركەزىي يەككەلىك)</h4>
                    <p className="text-sm">ئالدىڭىزدىكى نەرسە ئەمەلىيەتتە «تولۇق قاراڭغۇلۇق». يەككەلىكتىن نۇر تارقىلمىغاچقا، سىزنىڭ سەپەر يۆنىلىشىڭىزدە ھېچ نەرسە كۆرۈنمەيدۇ. لېكىن، سىز ئۇپۇقتىن ئۆتكەندىن كېيىن، بوشلۇق ۋە ۋاقىت ئالمىشىپ كېتىدۇ.</p>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">3. ئەرۋاھ كۆرۈنۈش</h4>
                  <p className="mb-2">قارا ئۆڭكۈرنىڭ ئىچىدە، سىز ئۆزىڭىزنىڭ ئارقا تەرىپىڭىزنى كۆرەلىشىڭىز مۇمكىن.</p>
                  <p className="text-sm">بۇنىڭ سەۋەبى، سىز چىقارغان نۇر (سىزنىڭ رەسىمىڭىز) قايتىپ كېلىشتىن بۇرۇن قارا ئۆڭكۈرنىڭ كۈچلۈك تارتىش كۈچىنى ئايلىنىشقا مەجبۇر بولىدۇ. ئالدىڭىزدىكى قاراڭغۇلۇقتا، ئەينەككە قامىلىپ قالغاندەك، بۇرمىلانغان، سوزۇلغان رەسىمنى باشتىن كەچۈرىسىز.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">4. نېمىشقا 1 G مۇ ياخشى ھايات قالمايدۇ؟</h4>
                  <p className="mb-2">چىقىش يولى يوق: سىز ئۇپۇقتىن ئۆتكەن ھامان، بارلىق يۆنىلىشلەر (ئالدى، ئارقا، سول، ئوڭ) «مەركەز (يەككەلىك)» گە ئېلىپ بارىدىغان يوللارغا ئايلىنىدۇ.</p>
                  <p className="text-sm">قانچە قاتتىق كۈرەش قىلسىڭىز، شۇنچە تېز ئۇ يەرگە بارىسىز: يەككەلىككە چۈشۈشنى كېچىكتۈرۈش ئۈچۈن راكېتا قويۇپ بەرسىڭىزمۇ، نىسبىيلىك نەزەرىيىسىگە ئاساسلانغان ھېسابلاشلار، قانچىلىك قارشىلىق كۆرسەتسىڭىز، يەككەلىككە يېتىش ۋاقتى شۇنچە قىسقا بولىدىغانلىقىنى كۆرسىتىپ بېرىدۇ. ھايات قېلىشنىڭ ئەڭ ياخشى ئۇسۇلى جىم تۇرۇش ۋە تەسلىم بولۇشتۇر.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Section 6 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">خاۋكىڭ رادىئاتسىيەسى</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <div className="space-y-6 text-slate-300 leading-relaxed uyghur-font">
                <p>دوكتور ستېفېن خاۋكىڭ كۋانت مېخانىكىسى نەزەرىيىسىنى ئىشلىتىپ، قارا ئۆڭكۈرلەرنىڭ ئاستا-ئاستا ئىسسىقلىق قويۇپ بېرىشى ۋە ئاخىرىدا پارغا ئايلىنىپ يوقاپ كېتىشى توغرىسىدا ھەيران قالارلىق پەرەزنى ئوتتۇرىغا قويدى.</p>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">1. بوشلۇقتىن تۇغۇلغان «جۈپلەر»</h4>
                  <p className="mb-2">بوشلۇققا ئوخشايدىغان بوشلۇقتا، زەررىچىلەر ۋە ئانتى زەررىچىلەر مىكروسكوپ سەۋىيىسىدە ئۈزلۈكسىز پەيدا بولۇپ، دەرھال سوقۇلۇپ يوقاپ كېتىدۇ.</p>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">بىر زەررىچە سۈمۈرۈلىدۇ:</strong> بىر زەررىچە ئۇپۇقنىڭ ئىچىگە سۈمۈرۈلىدۇ، يەنە بىرى سىرتقا چىقىپ كېتىدۇ.</li>
                    <li><strong className="text-cyan-400">ماسسا يوقىتىش:</strong> سىرتتىن قارىغاندا، چىقىپ كېتىۋاتقان زەررىچە ئېنېرگىيە قويۇپ بېرىۋاتقان قارا ئۆڭكۈرگە ئوخشايدۇ. E=mc^2 تەڭلىمىسىگە ئاساسلانغاندا، ئېنېرگىيە قويۇپ بېرىش ماسسا يوقىتىشقا باراۋەر.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">2. ئاخىرىدا «چوڭ پارتلاش» بىلەن ئاخىرلىشىدۇ.</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">چوڭ قارا ئۆڭكۈرلەر:</strong> پارغا ئايلىنىش ئىنتايىن ئاستا.</li>
                    <li><strong className="text-cyan-400">كىچىكىيىش سۈرئىتى تېزلىشىدۇ:</strong> قارا ئۆڭكۈر قانچە كىچىكلىسە، تېمپېراتۇرىسى شۇنچە يۇقىرى بولىدۇ ۋە پارغا ئايلىنىش سۈرئىتى شۇنچە تېز بولىدۇ.</li>
                    <li><strong className="text-cyan-400">ئاخىرقى پەيتلەر:</strong> ئۇ كۈچلۈك كۈچ بىلەن ئېنېرگىيە قويۇپ بېرىدۇ، ئاخىرىدا غايەت زور گامما نۇرى پارتلاش شەكلىدە يوقاپ كېتىدۇ.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Section 7 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">ئۇچۇر پارادوكسى</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <div className="space-y-6 text-slate-300 leading-relaxed uyghur-font">
                <p>فىزىكىدا، «ئۇچۇر» بىز ئادەتتە ئىشلىتىدىغان «تېكىست» ياكى «رەسىملەر» قاتارلىق سانلىق مەلۇماتلارنى ئەمەس، بەلكى تېخىمۇ ئاساسىي «بىر نەرسىنى تەشكىل قىلىدىغان بارلىق فىزىكىلىق ھالەتلەرنى» كۆرسىتىدۇ.</p>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">1. «ئۇچۇر» نىڭ كونكرېت ئېلېمېنتلىرى</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">ئېلېمېنتار زەررىچىلەرنىڭ تۈرى ۋە سانى:</strong> قانچە ئېلېكترون، قانچە كۋارك قاتارلىقلار.</li>
                    <li><strong className="text-cyan-400">ئايلىنىش:</strong> زەررىچە قايسى يۆنىلىشتە ئايلىنىدۇ.</li>
                    <li><strong className="text-cyan-400">ئېنېرگىيە ھالىتى، ئورنى ۋە ھەرىكەت كۈچى.</strong></li>
                    <li><strong className="text-cyan-400">كۋانت چىرمىشىپ قېلىش:</strong> زەررىچىلەر ئوتتۇرىسىدىكى «باغلىنىش».</li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">3. ئۇچۇر «ئۇپۇق يۈزى» گە خاتىرىلەنگەنمۇ؟</h4>
                  <p className="mb-2">ھازىر نۇرغۇن فىزىكا ئالىملىرى <strong className="text-cyan-400">گولوگرافىك پرىنسىپ</strong> دەپ ئاتىلىدىغان ئىدىيەنى قوللايدۇ.</p>
                  <ul className="list-disc list-inside space-y-2 text-sm marker:text-cyan-500">
                    <li><strong className="text-cyan-400">خاتىرىلەش ئورنى:</strong> ۋەقە ئۇپۇق يۈزى (ئىككى ئۆلچەملىك پەردە).</li>
                    <li><strong className="text-cyan-400">گولوگراممىغا ئوخشاش خاتىرىلەنگەن:</strong> ئالما قارا ئۆڭكۈرگە چۈشكەندە، ئۇنىڭ ئۇچۇرلىرى قارا ئۆڭكۈرگە غايىب بولمايدۇ، بەلكى ۋەقە ئۇپۇقى (يۈزى) بويىچە نېپىز سوزۇلۇپ، ئىككى ئۆلچەملىك سانلىق مەلۇمات سۈپىتىدە بېسىلىدۇ.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dialogue Section 8 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">گولوگرافىك كائىنات</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <div className="space-y-6 text-slate-300 leading-relaxed uyghur-font">
                <p>كائىناتنىڭ ئەمەلىيەتتە ئىككى ئۆلچەملىك پەردىگە خاتىرىلەنگەن ئۇچۇرنىڭ پرويېكسىيەسىدىن (گولوگرافىك) باشقا نەرسە ئەمەسلىكىنى ئوتتۇرىغا قويغان گولوگرافىك كائىنات زامانىۋى فىزىكىدىكى ئەڭ قىزىقارلىق، ئەمما غەلىتە نەزەرىيەلەرنىڭ بىرى.</p>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">1. ئۈچ ئۆلچەملىك جىسىم ئىككى ئۆلچەملىك يۈزىگە سىغىدۇ.</h4>
                  <p className="mb-2">قارا ئۆڭكۈرگە ساقلىيالايدىغان ئۇچۇر چەكلىمىسى ئۇنىڭ يۈز كۆلىمى (ئىككى ئۆلچەملىك) بىلەن بەلگىلىنىدۇ. بۇ بىز ياشاۋاتقان ئۈچ ئۆلچەملىك بوشلۇقتا يۈز بېرىۋاتقان ئىشلارنىڭ ئەمەلىيەتتە ئالەمنىڭ چېتىدىكى ئىككى ئۆلچەملىك چېگراغا يېزىلغان سانلىق مەلۇماتلارنىڭ سايىسى ئىكەنلىكىنى بىلدۈرىدۇ.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">2. كىرىدىت كارتىسى گولوگراممىسى بىلەن ئوخشاش مېخانىزم</h4>
                  <p className="mb-2">چاپلاقنىڭ ئۆزى ياپىلاق (ئىككى ئۆلچەملىك)، ئەمما نۇرنىڭ ئۇنىڭغا قانداق چۈشۈشىگە ئاساسەن، ئۈچ ئۆلچەملىك رەسىمنى كۆرەلەيسىز.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-2 heading-font">3. نېمىشقا بۇنى دېيەلەيمىز؟ (مالداسېنانىڭ بايقىشى)</h4>
                  <p className="mb-2">1997-يىلى، فىزىكا ئالىمى جۇئان مالداسېنا بۇنى ماتېماتىكىلىق جەھەتتىن ئىسپاتلىغان زور بىر بايقاش قىلدى (AdS/CFT ماسلىشىشچانلىقى). تارتىش كۈچى بار ئۈچ ئۆلچەملىك دۇنيا بىلەن تارتىش كۈچى يوق ئىككى ئۆلچەملىك دۇنيا ھېسابلاشلارنىڭ ماتېماتىكىلىق جەھەتتىن ئوخشاش ئىكەنلىكىنى كۆرسەتتى.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-16 bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 text-center border border-indigo-500/20">
          <h3 className="text-2xl font-bold text-white mb-4 heading-font">خۇلاسە: ئالەمنىڭ ھەقىقىي تەبىئىتى</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed uyghur-font">
            بىز دەسلەپكى سوئالىمىز «نېمە ئۈچۈن تارتىش كۈچى ۋاقىتنى ئاستىلىتىدۇ؟» دېگەندىن كېيىن بۇ يەرگە كەلدۇق. تارتىش كۈچى بوشلۇق-ۋاقىتنى بۇرمىلايدۇ. ئەڭ ئاخىرقى بۇرمىلىنىش قارا ئۆڭكۈر. قارا ئۆڭكۈرنىڭ ئۇچۇرلارنى قانداق بىر تەرەپ قىلىشى ئۇنىڭ يۈزىنىڭ كۆلىمىگە (ئىككى ئۆلچەملىك) باغلىق. خۇلاسە: ئالەمنىڭ ئۆزى يۈزىگە خاتىرىلەنگەن ئۇچۇرلاردىن پەيدا بولغان گولوگرامما بولۇشى مۇمكىن.
          </p>
          <div className="inline-block bg-slate-950 rounded-xl p-6 border border-slate-800 text-right">
            <div className="flex items-center gap-3 mb-3 text-cyan-400">
              <Cpu size={20} />
              <span className="font-bold heading-font">كېيىنكى قېتىم</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
              مەن ماۋزۇنى تېخىمۇ چوڭقۇر تەتقىق قىلىشنى ئۈمىد قىلىمەن.
            </p>
          </div>
        </section>

        <div className="text-center mt-12 text-slate-600 text-sm uyghur-font">
          &copy; 2026 KeLBiL Physics Dialogue Series. All rights reserved.
        </div>

      </main>
    </div>
  );
};

export default Blog122;