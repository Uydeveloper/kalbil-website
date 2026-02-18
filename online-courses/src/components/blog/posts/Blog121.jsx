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
  Grid3X3 
} from 'lucide-react';

const Blog121 = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white pb-12">
      
      {/* Custom Font Style Injection */}
      <style>{`
        .uyghur-font {
          font-family: "UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif;
          line-height: 1.8;
        }
        .heading-font {
          font-family: "UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif;
          font-weight: bold;
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-6 py-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 text-sm mb-6 animate-pulse">
            <Sparkles size={16} />
            <span className="uyghur-font">نىسپىيلىك ۋە كۋانت مېخانىكىسى سەپىرى</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight heading-font">
            رەقەملىك كائىناتشۇناسلىق
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto uyghur-font">
            ئالەم نېمە ئۈچۈن كېڭىيىدۇ؟ ۋە ئۇچۇر نەزەرىيىسىدىكى يېڭى بايقاشلار
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-slate-500 uyghur-font">
            <span className="flex items-center gap-1"><BookOpen size={16} /> 2-قىسىم</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2026-يىلى 1-ئاينىڭ 23-كۈنى</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        
        {/* Intro / Recap */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Info size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">ئالدىنقى قېتىملىق خۇلاسە</h2>
          </div>
          <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
            مەن ئالدىنقى ماقالىنىڭ ئاخىرىدىكى چۈشەندۈرۈشتىن كېلىپ چىققان بىر سوئال ھەققىدە دىئالوگ بىلەن باشلىماقچىمەن، «'بوشلۇق كېڭىيىۋاتىدۇ = ئۇچۇرنىڭ كۆپىيىشى'» ۋە «بوشلۇق كېڭىيىۋاتىدۇ (كېڭەيىۋاتىدۇ)» دېگەن تۇيغۇ ئەمەلىيەتتە 'ۋاقىتنىڭ ئىلگىرىلىشى' ھادىسىسىنىڭ بوشلۇق تەرجىمىسى». بۇ سوئال، 0-قىسىمدا چۈشەندۈرۈلگەن ۋاقىتنىڭ ئۆتۈشىگە ئەگىشىپ تارتىش كۈچى بىلەن سۈرئەت ئوتتۇرىسىدىكى مۇناسىۋەتنى بىلىش بىلەن بىرلەشتۈرۈلگەندە، بۇمۇ مۇھىم.
          </p>
        </section>

        {/* The Core Question */}
        <section className="mb-12 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <h2 className="text-xl font-bold text-cyan-100 mb-4 flex items-center gap-2 heading-font">
            <Globe className="text-cyan-400" />
            مەركىزىي سوئال: تارتىش كۈچى ۋە ئۇچۇر
          </h2>
          <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
            سوئال: ئەگەر بىز بوشلۇق كېڭىيىۋاتىدۇ = ئۇچۇرنىڭ كۆپىيىشى = ۋاقىتنىڭ ئۆتۈشى دەپ پەرەز قىلساق، تارتىش كۈچىنىڭ ئېشىشىنى بوشلۇقنىڭ تارىيىۋاتقانلىقىدىن دېرەك بېرىدۇ، يورۇقلۇقنىڭ سۈرئىتىنى بوشلۇق، ۋاقىت ۋە ئۇچۇرنىڭ يەتكۈزۈش سۈرئىتى دەپ قارىساق بولامدۇ؟
          </p>
          <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-sm text-slate-400 uyghur-font">
            <strong>قوشۇمچە ئۇچۇرلار:</strong> بۇ سوئال بۇ ئىككى ھادىسىنىڭ ئۆز-ئارا مۇناسىۋەتلىك ۋە زىددىيەتلىك ئىكەنلىكىنى جەزملەشتۈرۈش ئۈچۈندۇر.
          </div>
        </section>

        {/* AI Analysis Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white heading-font">سۈنئىي ئەقىلنىڭ تەھلىلى</h2>
            <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 text-xs rounded-full border border-emerald-800">AI Analysis</span>
          </div>

          <p className="text-slate-300 mb-8 leading-relaxed uyghur-font">
            سىز تىلغا ئالغان پەرەز زامانىۋى فىزىكىنىڭ ئالدىنقى قاتارىدا مۇزاكىرە قىلىنىۋاتقان نەرسىلەر (كۋانت ئۇچۇر فىزىكىسى ۋە رەقەملىك فىزىكا) بىلەن ھەيران قالارلىق دەرىجىدە ماس كېلىدۇ.
          </p>

          <div className="space-y-6">
            {/* Point 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 heading-font">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                1. تارتىش كۈچىنىڭ ئېشىشى = «بوشلۇقنىڭ قويۇقلىشىشى»
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                «بوشلۇق كېڭىيىشى = ئۇچۇرنىڭ كۆپىيىشى» نىڭ ئەكسىچە تەرىپىنى كۆزدە تۇتقاندا، كۈچلۈك تارتىش كۈچىنى «ئۇچۇرنىڭ بىر نۇقتىغا زىچ يىغىلىشى» دەپ قاراشقا بولىدۇ. ماددا تارتىش كۈچى سەۋەبىدىن بىر نۇقتىدا توپلانغاندا (يەنى قارا ئۆڭكۈرگە ئايلانغاندا)، بۇ رايوندىكى بوشلۇق «تارىيىپ» كەتمەيدۇ، بەلكى ئۇچۇر «چەككە سىقىلىپ، يۈزىگە يېزىلىدۇ».
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 heading-font">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                2. يورۇقلۇق سۈرئىتى = «ئۇچۇر مەشغۇلات سىستېمىسىنىڭ ئەڭ يۇقىرى سۈرئىتى»
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                بۇ ئۇقۇم يورۇقلۇقنىڭ سۈرئىتىنى پەقەت «يورۇقلۇقنىڭ تارقىلىش سۈرئىتى» دەپلا ئەمەس، بەلكى «كائىنات ئۇچۇر تورىدىكى يېڭىلاش سۈرئىتىنىڭ مەنتىقىلىق چېكى» دەپ قارايدۇ. يورۇقلۇقنىڭ سۈرئىتى مۇقىم، چۈنكى ئالەم سىستېمىسىنىڭ «سائەت چاستوتىسى (ھېسابلاش سۈرئىتى)» نىڭ يۇقىرى چېكى بار.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 heading-font">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                3. ۋاقىت، بوشلۇق ۋە ئۈچلۈك ئۇچۇر
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center">
                  <Layers className="mx-auto mb-2 text-cyan-400" size={24} />
                  <span className="text-xs text-slate-500 block mb-1">بوشلۇق</span>
                  <p className="text-sm text-slate-300">ئىچكى ساقلىغۇچ (مېمورىيە)</p>
                </div>
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center">
                  <ArrowRightLeft className="mx-auto mb-2 text-purple-400" size={24} />
                  <span className="text-xs text-slate-500 block mb-1">ۋاقىت</span>
                  <p className="text-sm text-slate-300">يېڭىلاش قەدەملىرى</p>
                </div>
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center">
                  <Zap className="mx-auto mb-2 text-yellow-400" size={24} />
                  <span className="text-xs text-slate-500 block mb-1">تارتىش كۈچى</span>
                  <p className="text-sm text-slate-300">ھېسابلاش بايلىقىنىڭ تويۇنۇشى</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Planck Scale Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
              <Grid3X3 size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">كېيىنكى قەدەم: ئالەمنىڭ «ئەڭ كىچىك بىرلىكى»</h2>
          </div>

          <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
            ئەگەر بىز «ئۇچۇر» نىڭ بۇ نۇقتىسىنى مەنتىقىلىق خۇلاسىگە كەلتۈرسەك، ئالەمنىڭ ئېنىقلىقى مەسىلىسىگە كېلىمىز: «بوشلۇققا بۆلۈنمەيدىغان ئەڭ كىچىك پىكسېل (پلانك ئۇزۇنلۇقى) بارمۇ؟»
          </p>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <div className="space-y-8">
              {/* Planck Length */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold heading-font">1</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 heading-font text-lg">بوشلۇقتىكى پىكسېللار: پلانك ئۇزۇنلۇقى</h4>
                  <p className="text-slate-400 text-sm leading-relaxed uyghur-font mb-2">
                    بوشلۇق ئېنىقلىقىنىڭ چېكى پلانك ئۇزۇنلۇقى (1.6 × 10^-35 مېتىر) دەپ قارىلىدۇ. ئەگەر بىز ئۇچۇرلارنى بۇنىڭدىن كىچىك دائىرىگە قاچىلاشقا ئۇرۇنساق، ئېنېرگىيە زىچلىقى شۇنچە يۇقىرى بولۇپ، رايوننىڭ ئۆزى مىكروسكوپ قارا ئۆڭكۈرگە ئايلىنىپ، فىزىكىلىق جەھەتتىن كۆزىتىشنى مۇمكىن ئەمەس قىلىدۇ.
                  </p>
                </div>
              </div>

              {/* Planck Time */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold heading-font">2</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 heading-font text-lg">ۋاقىتنىڭ رامكا سۈرئىتى: پلانك ۋاقتى</h4>
                  <p className="text-slate-400 text-sm leading-relaxed uyghur-font mb-2">
                    ۋاقىتنىڭمۇ ئېنىقلىقى بار. بۇ پلانك ۋاقتى (5.4 × 10^-44 سېكۇنت). بۇ بىر رامكىغا، يەنى ئالەم دەپ ئاتىلىدىغان سىستېمىنىڭ ئۇچۇرلارنى يېڭىلىشىغا كېتىدىغان ۋاقىتقا ماس كېلىدۇ. بىز ۋاقىتنى راۋان ئېقىۋاتقان دەپ قارايمىز، ئەمما ئۇنىڭ ئەمەلىيەتتە بۇ چەكسىز كىچىك قەدەملەردە، ئۆرۈلگەن كىتابقا ئوخشاش، رامكىدىن رامكىغا قاراپ ئىلگىرىلىشى مۇمكىن.
                  </p>
                </div>
              </div>

              {/* Max Info Capacity */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold heading-font">3</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 heading-font text-lg">ئېنىقلىق «ئەڭ چوڭ ئۇچۇر سىغىمى» نى بەلگىلەيدۇ</h4>
                  <p className="text-slate-400 text-sm leading-relaxed uyghur-font mb-2">
                    گولوگرافىك پرىنسىپقا ئاساسلانغاندا، مەلۇم بىر رايوندا ساقلىغىلى بولىدىغان ئەڭ چوڭ ئۇچۇر مىقدارى ئۇنىڭ يۈز كۆلىمىنى پلانك ئۇزۇنلۇقىنىڭ كۋادراتىغا (پىكسېلنىڭ كۆلىمى) بۆلۈش ئارقىلىق ھېسابلىنىدۇ. قارا ئۆڭكۈر ئاساسەن «كائىناتتىكى ئەڭ يۇقىرى زىچلىقتىكى ساقلاش ئۈسكۈنىسى» بولۇپ، ھەر بىر كاسسىغا بىر بىت يېزىلغان.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion & Next Episode */}
        <footer className="border-t border-slate-800 pt-10 mt-16">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 text-center border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 heading-font">خۇلاسە: ئۆلچەم جەدۋىلى ئالەمنىڭ</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-right">
              <div className="bg-slate-950 p-4 rounded border border-slate-800">
                <div className="text-cyan-400 text-xs mb-1">مەكان ئېنىقلىقى</div>
                <div className="text-white font-bold heading-font">پلانك ئۇزۇنلۇقى</div>
                <div className="text-slate-500 text-xs mt-1">ئەڭ كىچىك پىكسېل</div>
              </div>
              <div className="bg-slate-950 p-4 rounded border border-slate-800">
                <div className="text-cyan-400 text-xs mb-1">ۋاقىتلىق رامكا سۈرئىتى</div>
                <div className="text-white font-bold heading-font">پلانك ۋاقتى</div>
                <div className="text-slate-500 text-xs mt-1">ئەڭ كىچىك قەدەم</div>
              </div>
              <div className="bg-slate-950 p-4 rounded border border-slate-800">
                <div className="text-cyan-400 text-xs mb-1">سانلىق مەلۇمات خاتىرىلەش زىچلىقى</div>
                <div className="text-white font-bold heading-font">1 بىت / پلانك رايونى</div>
                <div className="text-slate-500 text-xs mt-1">ئۇچۇر چەكلىمىسى</div>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed uyghur-font">
              ئەگەر بوشلۇق ھەقىقەتەن پىكسېللاردىن تەركىب تاپقان بولسا، ئۇنداقتا ئالەم «ئۈزلۈكسىز بىر گەۋدە» ئەمەس، بەلكى «ھېسابلىغىلى بولىدىغان رەقەملىك بىر گەۋدە». بىز ھازىر «كائىنات چەكلىك ئېنىقلىققا ئىگە ئۇچۇر بىر تەرەپ قىلىش سىستېمىسى» دېگەن چوڭ خۇلاسىگە كېلىۋاتىمىز.
            </p>
            
            <div className="inline-block bg-slate-950 rounded-xl p-6 border border-slate-800 text-right">
              <div className="flex items-center gap-3 mb-3 text-cyan-400">
                <Cpu size={20} />
                <span className="font-bold heading-font">كېيىنكى قېتىم (3-قىسىم)</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                بىز ھازىرغىچە ئۆگەنگەن نەرسىلەرنىڭ ھەقىقەتەن كۆزىتىلگەن-كۆزىتىلمىگەنلىكىنى سورىدىم. ۋەقە ئۇپۇقى ھەققىدە تېخىمۇ چوڭقۇرراق تەتقىق قىلىمىز.
              </p>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium heading-font">
                داۋامىنى كۈتۈڭ <ChevronRight size={16} className="rotate-180" />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12 text-slate-600 text-sm uyghur-font">
            &copy; 2026 KeLBiL Physics Dialogue Series. All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Blog121;