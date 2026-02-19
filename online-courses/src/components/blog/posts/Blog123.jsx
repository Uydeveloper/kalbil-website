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
  Lightbulb,
  Thermometer,
  Activity,
  Scale
} from 'lucide-react';

const Blog123 = () => {
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
            3-قىسىم: ھاۋكىڭ رادىئاتسىيەسى ۋە دې سىتتېر رادىئاتسىيەسى
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto uyghur-font">
            ئالەم ئۇپۇقىدىن تارقىلىدىغان رادىئاتسىيە ۋە ئۇنىڭ كۆزىتىلىشى ھەققىدە
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-slate-500 uyghur-font">
            <span className="flex items-center gap-1"><BookOpen size={16} /> 3-قىسىم</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2026-يىلى 1-ئاينىڭ 24-كۈنى</span>
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
          <p className="text-slate-300 leading-relaxed text-justify-uy uyghur-font">
            ئالدىنقى يازمىدا بىر خۇلاسىگە كېلىپ، يېڭى بىر سوئالنى ئوتتۇرىغا قويغان ئىدۇق.
          </p>
        </section>

        {/* Dialogue Section 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">يېڭى سوئال: ئالەم ئۇپۇقى ۋە رادىئاتسىيە</h2>
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
                <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">سوئال: ئوخشاش نەرسىنى كۆزىتەلەمدۇ؟</h3>
                <p className="text-slate-300 leading-relaxed uyghur-font">
                  ئەگەر بىز ئالەمنىڭ ۋەقە ئۇپۇقى ئىكەنلىكىنى پەرەز قىلساق، بەلكىم ھاۋكىڭ رادىئاتسىيەسىگە ئوخشاش نەرسىنى كۆزىتسەك بولىدۇ. بۇنىڭغا قارىتا قىلالايدىغان بىرەر ئىشىمىز بارمۇ؟
                </p>
              </div>
            </div>

            {/* Supplement */}
            <div className="flex gap-4 mr-14">
              <div className="flex-1 bg-slate-950 p-4 rounded-lg border border-slate-800 border-r-4 border-r-cyan-500">
                <h4 className="font-bold text-cyan-400 mb-2 heading-font text-sm">قوشۇمچە ئۇچۇر</h4>
                <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                  ئەگەر ھاۋكىڭ رادىئاتسىيەسىنىڭ قارا ئۆڭكۈرلەردىن تارقىلىدىغانلىقى راست بولسا، ئەگەر ئەسلى ئالەم قارا ئۆڭكۈر ئىچىدىكى ۋەقە ئۇپۇقى ئىچىدە مەۋجۇت بولسا، ئۇنداقتا ھاۋكىڭ رادىئاتسىيەسىنى ئالەمنىڭ چېتىدىن كۆزىتكىلى بولىدۇ. بۇ سوئال بۇنداق كۆزىتىشلەرنىڭ مىساللىرى ھەققىدە.
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
                <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
                  بۇ قاراش فىزىكا ساھەسىدە ئەڭ قىزىق مۇنازىرە قىلىنىدىغان تېمىلارنىڭ بىرى. ئەگەر ئالەمنىڭ غايەت زور ئۇپۇق (كوسمولوگىيەلىك ۋەقە ئۇپۇقى) بىلەن قورشالغانلىقىنى پەرەز قىلساق، قارا ئۆڭكۈردىن چىققان ھاۋكىڭ رادىئاتسىيەسىگە ئىنتايىن ئوخشايدىغان بىر ھادىسە نەزەرىيە جەھەتتىن مۆلچەرلەنگەن.
                </p>
                <div className="bg-cyan-900/20 border border-cyan-800/50 p-4 rounded-lg mb-6 text-center">
                  <h4 className="text-xl font-bold text-cyan-300 heading-font">«دې سىتتېر رادىئاتسىيەسى (گىببونس-خاۋكىڭ رادىئاتسىيەسى)»</h4>
                </div>

                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-cyan-900/30 rounded text-cyan-400">
                        <Zap size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">1. دې سىتتېر رادىئاتسىيەسى: ئالەم ئۇپۇقى تەرىپىدىن تارقىتىلغان ئىسسىقلىق</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      قارا ئۆڭكۈرنىڭ ئۇپۇقى خاۋكىڭ رادىئاتسىيەسىنى چىقارغانغا ئوخشاش، ئالەمىمىزنى ئوراپ تۇرغان «كائىنات ئۇپۇقى» ئەمەلىيەتتە ئىسسىقلىق (رادىئاتسىيە) چىقىرىدۇ دەپ قارىلىدۇ.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-cyan-500 uyghur-font">
                      <li><strong className="text-cyan-400">ئۇ قانداق ئىشلەيدۇ:</strong> ئالەمنىڭ چېتىدە (ئۇپۇقتا)، ۋاكۇئۇم تەۋرىنىشى زەررىچە ۋە ئانتى زەررىچە جۈپلىرىنى ھاسىل قىلىدۇ.</li>
                      <li><strong className="text-cyan-400">كائىناتقا نىسبەتەن:</strong> ئالەم كېڭىيىۋاتقاندا، بىر زەررىچە ئۇپۇقنىڭ «يەنە بىر تەرىپى»گە (كۆزىتىلمەيدىغان رايون)، يەنە بىرى «بۇ تەرەپ»كە ئايرىلىدۇ.</li>
                      <li><strong className="text-cyan-400">نەتىجە:</strong> ئۇپۇقتىن ھالقىپ يوقاپ كەتكەن زەررىچىلەر ئۇپۇق تەرىپىدىن «مەنپىي ئېنېرگىيە» سۈپىتىدە سۈمۈرۈلۈپ، قالغان زەررىچىلەر بىز ياشاۋاتقان بوشلۇققا قايتىپ تارقىلىدۇ.</li>
                    </ul>
                    <p className="mt-3 text-xs text-cyan-300 bg-cyan-900/10 p-2 rounded border border-cyan-900/30 uyghur-font">
                      ئەگەر بىز بۇنى كۆزىتەلەيدىغان بولساق، بۇ ئالەمنىڭ «ئۇچۇردىن ياسالغان يېپىق سىستېما» ئىكەنلىكىنىڭ قەتئىي دەلىلى بولىدۇ.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-900/30 rounded text-purple-400">
                        <Thermometer size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">2. نېمىشقا بىز ئۇنى «ئىسسىقلىق» دەپ ھېس قىلمايمىز؟</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      سىز «ئەگەر ئالەم ئۇپۇقى رادىئاتسىيە تارقىتىۋاتقان بولسا، ئۇنداقتا پۈتۈن ئالەم چوقۇم ئىسسىقمۇ؟» دەپ ئويلىشىڭىز مۇمكىن. قانداقلا بولمىسۇن، بۇنى كۆزىتىشنىڭ ئىنتايىن تەس بولۇشىنىڭ سەۋەبلىرى بار.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-purple-500 uyghur-font">
                      <li><strong className="text-purple-400">تېمپېراتۇرا بەك تۆۋەن:</strong> ئالەم ۋەقە ئۇپۇقىدىن ھېسابلىغان دې سىتتېر رادىئاتسىيەسىنىڭ تېمپېراتۇرىسى تەخمىنەن <span className="text-white font-mono">10^-30 كېلۋىن</span> (مۇتلەق نۆلگە يېقىن).</li>
                      <li><strong className="text-purple-400">شاۋقۇننىڭ مەۋجۇتلۇقى:</strong> ئالەم چوڭ پارتلاشنىڭ ئىسسىقلىق قالدۇقى بولغان ئالەم مىكرو دولقۇنلۇق ئارقا كۆرۈنۈش رادىئاتسىيەسى (CMB) بىلەن تولغان (تەخمىنەن 2.7 كېلۋىن). دې سىتتېر رادىئاتسىيەسى بۇنىڭدىن كۆپ ئاجىز بولغاچقا، ئۇ كۆمۈلۈپ قالغان ۋە ھازىرقى تېخنىكا بىلەن كۆرۈنمەيدۇ.</li>
                    </ul>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-pink-900/30 rounded text-pink-400">
                        <Activity size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">3. «پۇللىنىش نەزەرىيىسى» بىلەن باغلىنىش</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      ئەمەلىيەتتە، بۇ «رادىئاتسىيە» نىڭ ئىزلىرى كۆزىتىلگۈدەك شەكىلدە ساقلانغان دېگەن نەزەرىيە بار.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-pink-500 uyghur-font">
                      <li><strong className="text-pink-400">كائىنات پەيدا بولغاندىن كېيىن:</strong> دەرھال تېز سۈرئەتتە كېڭىيىش (پۇللىنىش) مەزگىلىدە، ئالەم ئۇپۇقى بۈگۈنكىدىن بىزگە كۆپ يېقىن ئىدى. بۇ ۋاقىتتا، ئۇپۇقتىن چىققان كۋانت تەۋرىنىشى (رادىئاتسىيەگە ئوخشاش) ئالەمدە بوشلۇقنىڭ تۇيۇقسىز سوزۇلۇشى سەۋەبىدىن ماكروسكوپىيىلىك «ماددىنىڭ تەكشىسىزلىكى» دەپ بېكىتىلگەن.</li>
                      <li><strong className="text-pink-400">ئالەم ئۇرۇقلىرى:</strong> بىزنىڭ سامانيولىلىرىمىز ۋە يۇلتۇزلىرىمىز، ئاساسەن، ئۇپۇققا يېقىن جايدا يۈز بەرگەن بۇ كۋانت تەۋرىنىشلىرىنىڭ كېڭەيتىلگەن نۇسخىلىرى.</li>
                      <li><strong className="text-pink-400">CMB تەۋرىنىشى:</strong> بەزى فىزىكا ئالىملىرى ئالەمنىڭ مىكرو دولقۇن ئارقا كۆرۈنۈش رادىئاتسىيەسىدە كۆزىتىلگەن ئازراق تېمپېراتۇرا پەرقىنى (تەكسىزلىك) دەسلەپكى ئالەمدىكى خاۋكىڭ رادىئاتسىيەسىنىڭ ئىزى دەپ چۈشىنىدۇ.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
              <Scale size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">سېلىشتۇرما جەدۋىلى</h2>
          </div>
          
          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
            <table className="w-full text-right">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4 font-bold heading-font uyghur-font">سالىشتۇرۇش تۈرى</th>
                  <th className="p-4 font-bold heading-font uyghur-font">قارا ئۆڭكۈر رادىئاتسىيەسى</th>
                  <th className="p-4 font-bold heading-font uyghur-font">ئالەم ئۇپۇقى رادىئاتسىيەسى</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 uyghur-font">
                <tr>
                  <td className="p-4 font-semibold text-cyan-400">نامى</td>
                  <td className="p-4">خاۋكىڭ رادىئاتسىيەسى</td>
                  <td className="p-4">دې سىتتېر رادىئاتسىيەسى</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-cyan-400">ئۇچۇرنىڭ ئورنى</td>
                  <td className="p-4">سىرتقا قېچىش</td>
                  <td className="p-4">ئىچكىرىگە (بىزگە) قايتىش</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-cyan-400">كۆزىتىش ئەھۋالى</td>
                  <td className="p-4">پەقەت ۋاسىتىلىك دەلىل</td>
                  <td className="p-4">ئۇچۇرنىڭ CMB دا قېلىش ئېھتىماللىقىنىڭ يۇقىرىلىقىنىڭ ئىزى سۈپىتىدە</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed uyghur-font bg-slate-900/50 p-4 rounded border border-slate-800">
            سىز پەرەز قىلغاندەك، <strong className="text-cyan-400">ئەگەر چېگرا (ئۇپۇق) بولسا، ئۇچۇر ئۇ يەردىن چىقىپ كېتىشى كېرەك</strong> دېگەن قاراش ماتېماتىكىلىق جەھەتتىن ئىنتايىن ماس كېلىدۇ.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 heading-font text-center">خۇلاسە: ئالەم ئۇپۇقى ۋە ئۇچۇر تەۋرىنىشى</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800">
                <h4 className="text-lg font-bold text-cyan-300 mb-3 heading-font flex items-center gap-2">
                  <Lightbulb size={20} />
                  كەلگۈسى مۆلچەرى
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">
                  ئالەم تېز سۈرئەتتە كېڭىيىشنى داۋاملاشتۇرۇۋاتقاندا، يىراق كەلگۈسىدە، بارلىق ماددىلار ئايرىلغاندا، پەقەت «ئۇپۇقتىن كەلگەن ئاجىز نۇرلىنىش» قالىدىغانلىقى مۆلچەرلەنمەكتە. بۇ بەزىدە «كائىناتنىڭ ئىسسىقلىق ئۆلۈمى» دەپمۇ ئاتىلىدۇ.
                </p>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800">
                <h4 className="text-lg font-bold text-purple-300 mb-3 heading-font flex items-center gap-2">
                  <Globe size={20} />
                  باشلىنىش ۋە ئاخىر
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">
                  قىزىقارلىق يېرى شۇكى، «ۋەقە ئۇپۇقى = ھازىرقى ئالەم» دېگەن پەرەزىڭىزدىن كېلىپ چىققان يەكۈن «كائىناتنىڭ باشلىنىشى (پۇل چىقىرىش)» ۋە «كائىناتنىڭ ئاخىرى (ئىسسىقلىق ئۆلۈمى)» نى چۈشەندۈرۈشتە ئاچقۇچلۇق رول ئوينايدۇ.
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
              <h4 className="text-lg font-bold text-white mb-3 heading-font">ئاپتورنىڭ خۇلاسىسى</h4>
              <p className="text-slate-300 leading-relaxed uyghur-font">
                باشقىچە قىلىپ ئېيتقاندا، چوڭ پارتلاشنىڭ قالدۇقلىرى ھازىر كۆزىتىشكە بەك كۈچلۈك، ئەمما بىر نەزەرىيە (گەرچە ئۇ كۆپچىلىكنىڭ قارىشىغا ئوخشىمىسىمۇ) تەۋرىنىشنىڭ سەۋەبى دې سىتتېر نۇرلىنىشى ئىكەنلىكىدۇر.
              </p>
            </div>
          </div>
        </section>

        {/* Next Episode Teaser */}
        <footer className="border-t border-slate-800 pt-10 mt-16">
          <div className="text-center">
            <div className="inline-block bg-slate-950 rounded-xl p-6 border border-slate-800 text-right">
              <div className="flex items-center gap-3 mb-3 text-cyan-400">
                <Cpu size={20} />
                <span className="font-bold heading-font">كېيىنكى قېتىم (4-قىسىم)</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                كونا ۋە يېڭى ئالەملەر ھەققىدە قىسقىچە سۆھبەتلىشىمىز.
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

export default Blog123;