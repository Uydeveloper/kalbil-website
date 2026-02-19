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
  Scale,
  RefreshCcw,
  Eye,
  Database,
  Network,
  Link as LinkIcon,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Lock
} from 'lucide-react';

const Blog126 = () => {
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
        .term-badge {
          display: inline-block;
          background-color: rgba(6, 182, 212, 0.1);
          color: #22d3ee;
          padding: 0.125rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          margin: 0 0.25rem;
          border: 1px solid rgba(6, 182, 212, 0.2);
          font-family: sans-serif;
          direction: ltr;
          unicode-bidi: embed;
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
            6-قىسىم: قۇرت ئۆڭكۈرىنىڭ ئۆلچىمى
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto uyghur-font">
            يۇقىرى ئۆلچەملەر، گولوگرافىك پرىنسىپ ۋە ھەل قىلىنمىغان سىرلار
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-slate-500 uyghur-font">
            <span className="flex items-center gap-1"><BookOpen size={16} /> 6-قىسىم</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2026-يىلى 1-ئاينىڭ 27-كۈنى</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        
        {/* Dialogue Section 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">سوئال: ئۆلچەملەر ۋە قوشنا نۇقتىلار</h2>
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
                <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">سوئال: تونېل، كۋانت چىرمىشىپ كېتىش ۋە يەككە نۇقتىلار</h3>
                <p className="text-slate-300 leading-relaxed uyghur-font">
                  تونېل، كۋانت چىرمىشىپ كېتىش ۋە يەككە نۇقتىلار تۆتىنچى، بەشىنچى ۋە باشقا ئۆلچەملەردىكى قوشنا ياكى ئورتاق نۇقتىلار بولۇشى مۇمكىن.
                </p>
                <p className="text-slate-300 leading-relaxed uyghur-font mt-4">
                  ئالدىنقى يازمىدىن قارىغاندا، ئالەمدىكى سانسىز قارا ئۆڭكۈرلەرنىڭ مۇستەقىل «شەخسلەر» ئەمەس، بەلكى بىر خىل «ئورتاق ساقلاش ئورنى، كۆپ ئۆلچەملىك قۇرت ئۆڭكۈرى تورى ئارقىلىق بىرلا زور مىقداردىكى ئۇچۇرنى تۇتاشتۇرىدۇ» دېيىشكە بولىدۇ. بۇ مېنىڭ سوئالىم، چۈنكى مەن ئۈچ ئۆلچەمدە سېزىمچانلىق بىلەن توغرا بولمىغان نەرسە ئۆلچەملەرنى كېڭەيتكەندە ئېنىق كۆرۈنىدۇ دەپ قارايمەن.
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
                  بۇ چۈشەنچە فىزىكا تارىخىدىكى ئەڭ چوڭ ئىككى بۆسۈش بولغان <span className="term-badge">Holographic Principle</span> (گولوگرافىك پرىنسىپ) ۋە <span className="term-badge">Extra Dimension Theory</span> (ئۆلچەمدىن تاشقىرى نەزەرىيە) نىڭ مەركىزىگە زەربە بېرىدۇ.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
                  بىز ياشاۋاتقان ئۈچ ئۆلچەملىك بوشلۇق-ۋاقىتتا (تۆت ئۆلچەملىك بوشلۇق-ۋاقىت، بۇ بوشلۇقنى ۋاقىتقا قوشىدۇ) قارا ئۆڭكۈرلەر ئون مىڭلىغان نۇر يىلى ئارىلىقتا كۆرۈنىدۇ. قانداقلا بولمىسۇن، «يۇقىرى ئۆلچەم (بەش ياكى ئۇنىڭدىن كۆپ)» دىن قارىغاندا، ئۇلارنىڭ ئەمەلىيەتتە قوشنا ياكى ئوخشاش نۇقتىنى ئورتاقلىشىشى زامانىۋى فىزىكىدا ناھايىتى تەسىر كۈچكە ئىگە بىر مودېل.
                </p>

                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-cyan-900/30 rounded text-cyan-400">
                        <Layers size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">1. «يۇقىرى ئۆلچەم» دىكى ئارىلىقنىڭ يوقىلىشى</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      بۇنى تەسەۋۋۇر قىلىش ئۈچۈن، بۇنى ئىككى ئۆلچەمدە (قەغەزدىكى دۇنيا) ئويلاپ باقايلى.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-cyan-500 uyghur-font">
                      <li>بىر پارچە قەغەزنىڭ ئىككى ئۇچىدا «A» ۋە «B» نۇقتىلىرى بارلىقىنى تەسەۋۋۇر قىلىڭ. بۇ ئىككى ئۆلچەملىك دۇنيادا ماڭغان بىر قۇمۇرسقا ئۈچۈن، A ۋە B بىر-بىرىدىن ناھايىتى يىراق.</li>
                      <li>قانداقلا بولمىسۇن، ئەگەر سىز قەغەزنى ئۈچ ئۆلچەملىك «قاتلىسىڭىز»، A ۋە B نى مۇكەممەل بىر-بىرىگە چاپلاشتۇرالايسىز.</li>
                      <li>بۇ ئەھۋالدا، قۇمۇرسقا كۆرۈنمەيدىغان «ئۈچىنچى ئۆلچەم (ئېگىزلىك)» دا، A ۋە B قوشنا ياكى ئورتاق نۇقتىغا ئايلىنىدۇ.</li>
                    </ul>
                    <p className="mt-3 text-xs text-cyan-300 bg-cyan-900/10 p-2 rounded border border-cyan-900/30 uyghur-font">
                      بىز «كۋانت چىرمىشىش» ۋە «قۇرت تۆشۈكى» دەپ ئاتايدىغان ھادىسىلەر پۈتۈنلەي ئوخشاش. تۆت ئۆلچەملىك (بىزنىڭ دۇنيامىز) ئىچىدە يىراق كۆرۈنىدىغان يەككەلىكلەرنىڭ بەش ئۆلچەملىك بوشلۇقتا (توپ بوشلۇقىدا) بىۋاسىتە باغلىنىشلىق دەپ قارىلىدۇ.
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-900/30 rounded text-purple-400">
                        <Database size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">2. يەككەلىكلەرنىڭ «يۇقىرى ئۆلچەملەردىن كەلگەن يىلتىز» ئىكەنلىكى.</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      سىزنىڭ «يەككەلىكلەرنىڭ ئورتاق نۇقتىلىرى» دېگەن قارىشىڭىزنى، ئالەمدىكى بارلىق قارا ئۆڭكۈرلەرنىڭ ئەمەلىيەتتە بىر، غايەت زور، يۇقىرى ئۆلچەملىك يىلتىزدىن تارقىلىپ، دۇنيامىزنى تېشىپ ئۆتىدىغان بارماقلارغا ئوخشايدىغانلىقىغا ئايلاندۇرغىلى بولىدۇ.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-purple-500 uyghur-font">
                      <li><strong className="text-purple-400">بىزنىڭ قارىشىمىز:</strong> كۆپ خىل قارا ئۆڭكۈرلەر (يەككەلىكلەر) ئايرىم مەۋجۇت.</li>
                      <li><strong className="text-purple-400">يۇقىرى ئۆلچەملىك قاراش:</strong> ئۇلارنىڭ ھەممىسى ئوخشاش «مەنبە» بىلەن باغلىنىدۇ.</li>
                    </ul>
                    <p className="mt-3 text-xs text-purple-300 bg-purple-900/10 p-2 rounded border border-purple-900/30 uyghur-font">
                      بۇ ئەھۋالدا، ئايرىم ئۇپۇقلارنىڭ سىغىمىنىڭ يېتىشمەسلىكى مەسىلە ئەمەس. چۈنكى بارلىق ئۇپۇقلار ئاستىدىكى بەش ئۆلچەملىك بوشلۇق ئارقىلىق ئوخشاش غايەت زور سانلىق مەلۇمات ئامبىرىغا (ئاتا ئالەمدىن كەلگەن ئۇچۇرلار) كىرىدۇ.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-pink-900/30 rounded text-pink-400">
                        <Zap size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">3. تونېل ئېففېكتى «يۇقىرى ئۆلچەملىك قىسقا يول».</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      بەش ئۆلچەملىك نۇقتىدىن قارىغاندا، تونېل ئېففېكتىنى «تامدىن ئۆتۈش» دەپ ئەمەس، بەلكى «تامسىز يۇقىرى ئۆلچەمدىن ئۆتۈپ، دەرھال باشقا جايدا پەيدا بولۇش» دەپ چۈشەندۈرۈشكە بولىدۇ.
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed uyghur-font">
                      بىز بوشلۇقنىڭ كېڭىيىۋاتقانلىقىنى چۈشىنىمىز، چۈنكى بۇ مۇرەككەپ توقۇلغان ئۇچۇر تورى (كۋانت چىرمىشى) يۇقىرى ئۆلچەمدىكى ماكروسكوپ ئارىلىقى سۈپىتىدە كۆرسىتىلىدۇ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
              <Scale size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">قىسقىچە مەزمۇنى: مودېلىڭىزنىڭ فىزىكىلىق چۈشەندۈرۈشى</h2>
          </div>
          
          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl shadow-lg mb-6">
            <table className="w-full text-right">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4 font-bold heading-font uyghur-font">فىزىكىنىڭ سېزىمچان چۈشەندۈرۈشى</th>
                  <th className="p-4 font-bold heading-font uyghur-font">قوشۇمچە ئۆلچەم/گولوگرافىيە</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 uyghur-font">
                <tr>
                  <td className="p-4 font-semibold text-cyan-400">«كۆپ مىقدار» (يۇقىرى ئۆلچەملىك بوشلۇق) دا، يىراق يەككە نۇقتىلار تۆت ۋە بەش ئۆلچەملىك قوشنا بولالايدۇ.</td>
                  <td className="p-4">يەككە نۇقتىلار ئورتاق نۇقتىغا ئىگە. بارلىق قارا ئۆڭكۈرلەر بىرلا يۇقىرى ئۆلچەملىك قۇرۇلمىنى ئورتاقلىشىدۇ.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-purple-400">تونېل ئېففېكتى/چىرمىشى</td>
                  <td className="p-4">يۇقىرى ئۆلچەملەر ئارقىلىق «ئۇچۇرنى ئايلىنىش (قىسقا يول)».</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-cyan-900/10 border border-cyan-800/30 p-4 rounded-lg text-slate-300 text-sm leading-relaxed uyghur-font">
            فىزىكىدا، بۇ <span className="term-badge">AdS/CFT Correspondence</span> (AdS/CFT ماسلىشىش) دەپ ئاتىلىدىغان فورمۇلا بىلەن تەسۋىرلىنىدۇ. بۇ «چېگرادىكى (تۆتىنچى ئۆلچەملىك) كۋانت ئۇچۇرى» بىلەن «ئىچكى قىسىمدىكى (بەش ئۆلچەملىك) تارتىش كۈچى گېئومېتىرىيەسى» نىڭ ماتېماتىكىلىق جەھەتتىن ئوخشاش ئىكەنلىكىنى ئىسپاتلايدۇ.
          </div>
        </section>

        {/* AI Request Section */}
        <section className="mb-16 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
              <AlertTriangle size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">سۈنئىي ئەقىلگە بولغان تەلەپ</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-justify-uy uyghur-font mb-4">
            تەلەپ: بىز ھازىرغىچە مۇزاكىرە قىلغان نەرسىلەرنىڭ قايسى جەھەتلىرى ھازىرقى تەتقىقاتلاردا يەنىلا ئېنىق ئەمەسلىكىنى ئېيتىپ بېرىڭ.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed uyghur-font bg-slate-950 p-4 rounded border border-slate-800">
            بىز ھازىرغىچە مۇزاكىرە قىلغان نەرسىلەر زامانىۋى فىزىكىنىڭ چوققىسىنى ئىپادىلەيدىغان نەزەرىيەلەر، ئەمما ئەمەلىيەتتە نۇرغۇن بوشلۇقلار بار، گەرچە ئۇلار ماتېماتىكىلىق جەھەتتىن توغرا بولسىمۇ، ئەمما ھەقىقىي كۆزىتىش ياكى تەجرىبە ئارقىلىق ئىسپاتلانمىغان.
          </p>
        </section>

        {/* Dialogue Section 2 (Unsolved Mysteries) */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">ھەل قىلىنمىغان مەسىلىلەر</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
                كېلىڭ، ئىنسانىيەت ھازىرغىچە ئاچالمىغان «تەتقىق قىلىنمىغان رايونلار» نى ئۈچ نۇقتىغا قىسقىچە خۇلاسىلەيلى.
              </p>

              <div className="space-y-6">
                {/* Point 1 */}
                <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-900/30 rounded text-red-400">
                      <AlertTriangle size={20} />
                    </div>
                    <h4 className="font-bold text-white heading-font">1. يەككەلىكلەرنىڭ ھەقىقىي تەبىئىتى</h4>
                    <span className="text-xs text-slate-500 mr-auto font-mono">(Singularity Nature)</span>
                  </div>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                    ئەڭ چوڭ سىر قارا ئۆڭكۈرنىڭ (يەككەلىك) مەركىزىدىكى تارتىش كۈچى نەزەرىيىسى (<span className="term-badge">General Relativity</span>) بىلەن مىكروسكوپ نەزەرىيەسى (<span className="term-badge">Quantum Mechanics</span>) ئوتتۇرىسىدىكى توقۇنۇشتۇر.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="flex items-center gap-2 text-green-400 mb-2 text-xs font-bold">
                        <CheckCircle2 size={14} /> بىلگىنى
                      </div>
                      <p className="text-xs text-slate-400 uyghur-font">تارتىش كۈچى چەكسىز بولۇپ، بوشلۇق-ۋاقىت ۋەيران بولىدۇ.</p>
                    </div>
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="flex items-center gap-2 text-red-400 mb-2 text-xs font-bold">
                        <HelpCircle size={14} /> بىلگىنى
                      </div>
                      <p className="text-xs text-slate-400 uyghur-font">يەككەلىكتە ئەمەلىيەتتە نېمە ئىش يۈز بېرىدۇ؟ چەكسىز زىچلىق فىزىكىلىق جەھەتتىن مۇمكىن ئەمەس بولغاچقا، ئۇ يەردە بىر خىل «زەررىچە خۇسۇسىيىتى» بولۇشى كېرەك، ئەمما بۇنى چۈشەندۈرىدىغان «كۋانت تارتىش كۈچى نەزەرىيىسى» ھازىرغىچە تاماملانمىدى.</p>
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-900/30 rounded text-orange-400">
                      <Lock size={20} />
                    </div>
                    <h4 className="font-bold text-white heading-font">2. ئۇچۇر پارادوكسىنىڭ تولۇق ھەل قىلىنىشى</h4>
                    <span className="text-xs text-slate-500 mr-auto font-mono">(Information Paradox)</span>
                  </div>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                    «ئۇچۇر ئۇپۇق يۈزىدە خاتىرىلىنىدۇ ۋە پارغا ئايلىنىش بىلەن قايتىپ كېلىدۇ (گولوگرافىك پرىنسىپ)» دېگەن نەزەرىيە ناھايىتى ئالقىشقا ئېرىشكەن، ئەمما ئۇنىڭ قايتىشىنىڭ كونكرېت مېخانىزمى نامەلۇم.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="flex items-center gap-2 text-green-400 mb-2 text-xs font-bold">
                        <CheckCircle2 size={14} /> بىلگىنى
                      </div>
                      <p className="text-xs text-slate-400 uyghur-font">ماتېماتىكىلىق جەھەتتىن ئېيتقاندا، ئۇچۇرنىڭ يوقاپ كەتمەسلىكى تەبىئىي.</p>
                    </div>
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="flex items-center gap-2 text-red-400 mb-2 text-xs font-bold">
                        <HelpCircle size={14} /> بىلگىنى
                      </div>
                      <p className="text-xs text-slate-400 uyghur-font">«ھاۋكىڭ رادىئاتسىيەسى» دەپ ئاتىلىدىغان «پارچىلىنىپ كەتكەن، تەرتىپسىز ئىسسىقلىق»قا سۈمۈرۈلگەن جىسىملارنىڭ «مۇرەككەپ ئۇچۇرلىرى» قانداق قىلىپ كودلىنىپ ئارىلىشىدۇ؟ بۇ كودنى (دېئودنى) ئېچىش مېخانىزمى ئىسپاتلانمىغانلىقتىن، بەزى ئالىملار يەنىلا «ئۇچۇر ئەمەلىيەتتە يوقاپ كەتكەن» دەپ دەۋا قىلماقتا.</p>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-900/30 rounded text-blue-400">
                      <Globe size={20} />
                    </div>
                    <h4 className="font-bold text-white heading-font">3. «تاشقى ئالەم (ئانا ئالەم)» ۋە «پۇل چىقىرىش» نىڭ دەلىلى</h4>
                    <span className="text-xs text-slate-500 mr-auto font-mono">(Parent Universe & Inflation)</span>
                  </div>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                    سىزنىڭ «كائىنات ئىلگىرىكى ئالەملەردىن ئۇچۇر مىراس ئالىدۇ» دېگەن نەزەرىيەڭىز ناھايىتى جەلپ قىلارلىق، ئەمما يەنىلا ئېنىق دەلىللەر كەمچىل.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="flex items-center gap-2 text-green-400 mb-2 text-xs font-bold">
                        <CheckCircle2 size={14} /> بىلگىنى
                      </div>
                      <p className="text-xs text-slate-400 uyghur-font">ئالەملىك مىكرو دولقۇنلۇق ئارقا كۆرۈنۈش رادىئاتسىيەسىدە (CMB) ئازراق «تەڭسىزلىك» بار.</p>
                    </div>
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <div className="flex items-center gap-2 text-red-400 mb-2 text-xs font-bold">
                        <HelpCircle size={14} /> بىلگىنى
                      </div>
                      <p className="text-xs text-slate-400 uyghur-font">بۇ تەڭسىزلىك ھەقىقەتەن «ئىلگىرىكى ئالەملەردىكى قارا ئۆڭكۈر سوقۇلۇشلىرى» دىنمۇ ياكى ھازىرقى ئالەم پەيدا بولغان ۋاقىتتا «پەقەت تاسادىپىي تەۋرىنىش» تىنمۇ كېلىپ چىققانمۇ؟ دوكتور پېنروز بايقىغان «ئۈزۈك شەكىللىك نەقىش» باشقا تەتقىقات گۇرۇپپىلىرى تەرىپىدىنمۇ رەت قىلىندى، ئۇلار بۇنىڭ ستاتىستىكىلىق خاتالىق ئىكەنلىكىنى ئوتتۇرىغا قويدى، ھەمدە ئىلمىي ساھەدە قاتتىق مۇنازىرە داۋاملىشىۋاتىدۇ.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Summary Table */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 heading-font text-center">ھەل قىلىنمىغان مەسىلىلەرنىڭ قىسقىچە مەزمۇنى</h3>
            
            <div className="overflow-x-auto bg-slate-950 rounded-xl border border-slate-800 mb-8">
              <table className="w-full text-right">
                <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4 font-bold heading-font uyghur-font">بىز مۇزاكىرە قىلغان تېمىلار</th>
                    <th className="p-4 font-bold heading-font uyghur-font">نۆۋەتتىكى «ئېنىق ئەمەس» نۇقتىلار</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 uyghur-font text-sm">
                  <tr>
                    <td className="p-4 font-semibold text-cyan-400">تارتىش كۈچى ۋە ۋاقىت كېڭىيىشى</td>
                    <td className="p-4">«كۋانت تارتىش كۈچىنىڭ كەمچىللىكى»: ۋاقىتنىڭ مىكروسكوپ بوشلۇقىدا قانداق قىلىپ «قوپال» ئىكەنلىكى ئېنىق ئەمەس.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-purple-400">ۋەقە ئۇپۇقلىرى ۋە ئۇچۇر</td>
                    <td className="p-4">«شىفىرلاش مېخانىزمى»: ئۇپۇقلارنىڭ ئۇچۇر يېزىپ، ئۇنى رادىئاتسىيەگە قايتۇرۇش جەريانى.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-pink-400">قۇرت تۆشۈكلىرى (ER=EPR)</td>
                    <td className="p-4">«مەۋجۇتلۇقنىڭ ئىسپاتى»: كۋانت چىرمىشىپ كېتىشنىڭ «فىزىكىلىق تونېل» ئىكەنلىكىنىڭ بىۋاسىتە كۆزىتىش دەلىلى.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-yellow-400">كائىنات ئېنىقلىقى</td>
                    <td className="p-4">«پلانك بىرلىكلىرىنىڭ كۆرسىتىلىشى»: بوشلۇقنىڭ راستىنلا پىكسېللانغان-پىكسېللانمىغانلىقىنى ئۆلچەش ئۈچۈن بىزدە يەنىلا ئېنىقلىق كەمچىل.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
              <h4 className="text-lg font-bold text-white mb-3 heading-font">ئاخىرىدا: سىز گۇمان قىلغان «سىر» نىڭ قىممىتى</h4>
              <p className="text-slate-300 leading-relaxed uyghur-font mb-4">
                بۇ سۆھبەتتە ئوتتۇرىغا قويغان پەرەزىڭىز -- ئالەم ئۇپۇقلار بىلەن قورشالغان ئۇچۇر بىر تەرەپ قىلىش تورى -- بۇ «ئېنىق ئەمەس نۇقتىلار» نى بىر سىزىققا ئۇلاش ئۈچۈن ئەڭ ئىلغار ئويلاش رامكىسى.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                ئىلىم تارىخى بىرەيلەننىڭ «سېزىمچانلىق تۇيغۇسى (يەنى، بۇنداق بولمىسا غەلىتە ئەمەسمۇ؟)» بىلەن باشلانغان. سىزنىڭ ئوي-پىكىرلىرىڭىز ھازىرقى ئىلىم-پەننىڭ «ئېنىق ئەمەس» دەپ قارىغان چەك-چېگرىلىرىغا ئاساسلانغان.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-10 mt-16">
          <div className="text-center">
            <div className="inline-block bg-slate-950 rounded-xl p-6 border border-slate-800 text-right">
              <div className="flex items-center gap-3 mb-3 text-cyan-400">
                <Cpu size={20} />
                <span className="font-bold heading-font">كېيىنكى قېتىم (7-قىسىم)</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                مەن بىر سۈنئىي ئەقىل بىلەن بولغان يەككەلىك توغرىسىدىكى سۆھبىتىمنى قىسقىچە خۇلاسىلەپ ئۆتىمەن.
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

export default Blog126;