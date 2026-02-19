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
  Lock,
  Atom,
  CircleDot,
  Waves
} from 'lucide-react';

const Blog127 = () => {
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
          font-family: monospace;
          direction: ltr;
          unicode-bidi: embed;
          white-space: nowrap;
        }
        .comparison-table td, .comparison-table th {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(51, 65, 85, 0.5);
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
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
            7-قىسىم: يەككەلىك ۋە فۇز توپ نەزەرىيىسى
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto uyghur-font">
            <span className="term-badge">Singularity</span> نىڭ ھەقىقىي تەبىئىتى ۋە <span className="term-badge">Fuzzball Theory</span> ھەققىدە چوڭقۇر تەھلىل
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-slate-500 uyghur-font">
            <span className="flex items-center gap-1"><BookOpen size={16} /> 7-قىسىم</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2026-يىلى 1-ئاينىڭ 29-كۈنى</span>
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
            تۆۋەندىكىلەر ئالدىنقى قىسقىچە مەزمۇندا تېخىمۇ تەپسىلىي چۈشەندۈرۈلگەن.
          </p>
        </section>
        {/* Dialogue Section 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">سوئال: يەككەلىكنىڭ ھەقىقىي تەبىئىتى</h2>
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
                <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">سوئال: <span className="term-badge">General Relativity</span> بىلەن <span className="term-badge">Quantum Mechanics</span> نىڭ سېلىشتۇرمىسى</h3>
                <p className="text-slate-300 leading-relaxed uyghur-font">
                  «يەككەلىك» <span className="term-badge">Singularity</span> زامانىۋى فىزىكىدىكى ئەڭ چوڭ «ھەل قىلىنمىغان سىر».
                </p>
                <p className="text-slate-300 leading-relaxed uyghur-font mt-4">
                  ئومۇمىي نىسپىيلىك نەزەرىيىسى «ۋاقىت-ماكان بۇ يەردە ئاخىرلىشىدۇ» دەپ جاكارلىغان بولسىمۇ، كۋانت مېخانىكىسى بۇنىڭغا قارشى تۇرۇپ: «بۇ مۇمكىن ئەمەس؛ باشقا بىر شەكىل بولۇشى كېرەك» دەيدۇ. بۇ زىددىيەتنىڭ ھەقىقىي تەبىئىتىنى ۋە ئەڭ يېڭى ھەل قىلىش چارىلىرىنى چوڭقۇرراق تەتقىق قىلىپ باقايلى.
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
                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-red-900/30 rounded text-red-400">
                        <AlertTriangle size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">1. ئومۇمىي نىسپىيلىك قارىشى: «چەكسىزلىك» نىڭ بۇزۇلۇشى</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      ئەگەر ئېينىشتىيىننىڭ نەزەرىيىسى توغرا ھېسابلانسا، قارا ئۆڭكۈرنىڭ مەركىزىدىكى ماددا بىرلا نۇقتىغا يىغىلىپ، <strong className="text-red-400">نۆل ھەجىم، چەكسىز زىچلىق ۋە چەكسىز تارتىش كۈچى</strong> نى ھاسىل قىلىدۇ.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-red-500 uyghur-font">
                      <li><strong className="text-red-400">ئۆلۈك نۇقتى:</strong> بۇ ماتېماتىكىلىق جەھەتتىن «نۆلگە بۆلۈش» نىڭ تەڭدىشى، ۋاقىت ۋە بوشلۇق بۇ نۇقتىدىن ھالقىپ كېتەلمەيدۇ. بۇ «ۋاقىت-ماكاندىكى كەمتۈكلۈك (چۈشۈش)» دەپ ئاتىلىدۇ.</li>
                      <li><strong className="text-red-400">فىزىكىلىق چەكلىمە:</strong> تەبىئەتتە «چەكسىزلىك» دەپ ئاتىلىدىغان نەرسىنىڭ مەۋجۇت بولۇشى ناتايىن بولغاچقا، نۇرغۇن ئالىملار «بۇ نەزەرىيە توغرا، ئەمما ئەڭ يۇقىرى ھالەتلەردە بىرەر نەرسە كەم» دەپ قارايدۇ.</li>
                    </ul>
                  </div>
                  {/* Point 2 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-900/30 rounded text-blue-400">
                        <Atom size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">2. كۋانت مېخانىكىسىغا رەددىيە: «ئەڭ كىچىك بىرلىك» نىڭ توسالغۇسى</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      يەنە بىر تەرەپتىن، مىكروسكوپ دۇنياسىنى باشقۇرىدىغان كۋانت مېخانىكىسىنىڭ <span className="term-badge">Uncertainty Principle</span> (ئېنىقسىزلىق پرىنسىپى) دەپ ئاتىلىدىغان قاتتىق قائىدىسى بار.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-blue-500 uyghur-font">
                      <li><strong className="text-blue-400">ئورنىنى ئېنىقلىيالماسلىق:</strong> بىر زەررىچىنى بىرلا نۇقتىغا (نۆل ھەجىم) قانچە كۆپ سىقىشقا ئۇرۇنسىڭىز، زەررىچىنىڭ ھەرىكەت كۈچى شۇنچە كۈچلۈك بولۇپ، مۇقىم تۇرۇشنى رەت قىلىدۇ.</li>
                      <li><strong className="text-blue-400">ئېنىقلىق چەكلىمىلىرى:</strong> ئىلگىرى تىلغا ئېلىنغان «پلانك ئۇزۇنلۇقى (ئەڭ كىچىك پىكسېل)» سەۋەبىدىن، بۇ دۇنيادا «نۆل ھەجىم» ھالىتىنىڭ ئۆزى مۇمكىن بولماسلىقى كېرەك.</li>
                    </ul>
                  </div>
                  {/* Point 3 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-900/30 rounded text-green-400">
                        <Lightbulb size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">3. ھەل قىلىش چارىسى: يەككەلىك ئورنىغا «ھەقىقىي شەكىل»</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      ھازىر بۇ زىددىيەتنى ھەل قىلىش ئۈچۈن ئىككى يېتەكچى نەزەرىيە ئوتتۇرىغا قويۇلدى.
                    </p>
                   
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <h5 className="font-bold text-cyan-300 mb-2 heading-font flex items-center gap-2">
                          <Waves size={16} />
                          ① فۇز توپ نەزەرىيىسى <span className="term-badge">Fuzzball Theory</span>
                        </h5>
                        <p className="text-xs text-slate-400 uyghur-font">بۇ نەزەرىيە قارا ئۆڭكۈرنىڭ مەركىزىدە «نۇقتا» يوق، بەلكى پۈتۈن ئۇپۇقنىڭ «سىملار توپى» ئىكەنلىكىنى ئوتتۇرىغا قويدۇ.</p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 marker:text-cyan-500 mt-2 uyghur-font">
                          <li><strong className="text-cyan-400">ئىچىدە بوش ئەمەس:</strong> قارا ئۆڭكۈرلەر بوش ئەمەس، بەلكى غايەت زور «فۇز توپلىرى» غا ئوخشايدىغان قاتتىق جىسىملاردۇر.</li>
                          <li><strong className="text-cyan-400">يەككەلىكنىڭ يوقىلىشى:</strong> ئۇپۇقنىڭ ئۆزى ماددىنىڭ يۈزى بولغاچقا، مەركەزدە «چەكسىز نۇقتا» يارىتىشنىڭ ھاجىتى يوق.</li>
                        </ul>
                      </div>
                      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <h5 className="font-bold text-purple-300 mb-2 heading-font flex items-center gap-2">
                          <RefreshCcw size={16} />
                          ② چوڭ سەكرەش <span className="term-badge">Big Bounce</span>
                        </h5>
                        <p className="text-xs text-slate-400 uyghur-font">بۇ نەزەرىيە بوشلۇقنىڭ زەررىچىلەرنىڭ «تور» ىدىن تەركىب تاپقانلىقىنى ئوتتۇرىغا قويدۇ.</p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 marker:text-purple-500 mt-2 uyghur-font">
                          <li><strong className="text-purple-400">تارازىلىق كۈچىنىڭ تارتىش كۈچى:</strong> ماددا چېكىگە يەتكەندە، تارتىش كۈچى مەلۇم بىر نۇقتىدا «ئىتتىرىش كۈچى» گە ئايلىنىدۇ.</li>
                          <li><strong className="text-purple-400">سەكرەش:</strong> يەككەلىككە چۈشۈپ كېتىشنىڭ ئورنىغا، ئۇنىڭ ئايرىم بوشلۇققا قايتىپ «سەكرەيدىغانلىقى» ياكى ئايرىم بىر ئالەمنى بارلىققا كەلتۈرىدىغانلىقى ئىدىيەسى بار.</li>
                        </ul>
                      </div>
                    </div>
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
            <h2 className="text-2xl font-bold text-white heading-font">خۇلاسە: يەككەلىك دېگەن نېمە؟</h2>
          </div>
         
          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl shadow-lg mb-6 comparison-table">
            <table className="w-full text-right">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4 font-bold heading-font uyghur-font">نەزەرىيە</th>
                  <th className="p-4 font-bold heading-font uyghur-font">يەككەلىككە بولغان قاراش</th>
                  <th className="p-4 font-bold heading-font uyghur-font">ئاساسلىق چۈشەندۈرۈش</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 uyghur-font text-sm">
                <tr>
                  <td className="font-semibold text-red-400">ئومۇمىي نىسبىيلىك نەزەرىيىسى <span className="term-badge">General Relativity</span></td>
                  <td>بوشلۇق-ۋاقىتنىڭ ئاخىرى (چەكسىزلىك)</td>
                  <td>ماتېماتىكىلىق پارچىلىنىش؛ ھېسابلاش مۇمكىن ئەمەس</td>
                </tr>
                <tr>
                  <td className="font-semibold text-blue-400">كۋانت مېخانىكىسى <span className="term-badge">Quantum Mechanics</span></td>
                  <td>مەۋجۇت ئەمەس</td>
                  <td>ئەڭ كىچىك بىرلىكتىن كىچىك بوشلۇقنى ئېنىقلىغىلى بولمايدۇ</td>
                </tr>
                <tr>
                  <td className="font-semibold text-green-400">ئەڭ يېڭى نەزەرىيە <span className="term-badge">String Theory</span></td>
                  <td>يۇقىرى زىچلىقتىكى گەۋدە</td>
                  <td>سىملارنىڭ ماسسىسى؛ ئايرىم بوشلۇققا قايتىپ كېلىش</td>
                </tr>
              </tbody>
            </table>
          </div>
         
          <div className="bg-cyan-900/10 border border-cyan-800/30 p-4 rounded-lg text-slate-300 text-sm leading-relaxed uyghur-font">
            <strong className="text-cyan-400 heading-font">خۇلاسە:</strong> يەككەلىك ھەقىقىي «نۇقتا» ئەمەس، بەلكى ھازىرقى بىلىمىمىز (نەزەرىيەمىز) نىڭ چېكىگە يەتكەن ئورنىنىڭ يەنە بىر ئاتىلىشى.
          </div>
        </section>
        {/* Dialogue Section 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">سوئال: كۆزىتىش ۋاقتى ۋە يەككەلىك</h2>
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
                <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">سوئال: كۆزىتىش جەھەتتىن يەككەلىك نۇقتا بولۇپ قالمايدۇمۇ؟</h3>
                <p className="text-slate-300 leading-relaxed uyghur-font">
                  مەن كۆزىتىش ۋاقتىنىڭ يەككەلىككە يېقىن جايدا توختاپ قالىدىغانلىقىنى، شۇڭا بەلكىم ئۇ نۇقتا سۈپىتىدە كۆرۈنمەيدىغانلىقىنى ئويلاۋاتاتتىم. ئوخشاش پەرەزلەر بارمۇ؟
                </p>
                <p className="text-slate-300 leading-relaxed uyghur-font mt-4">
                  ئىلگىرىكى سۆھبەتلىرىمىزگە ئاساسەن، ۋاقىتنىڭ ئىچىدە توختاپ قالىدىغانلىقى ئۈچۈن، يەككەلىكنىڭ قارا ئۆڭكۈرنىڭ ئىچىدە شەكىللەنمەسلىكى مۇمكىنمۇ دەپ ئويلاۋاتاتتىم.
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
                <h3 className="text-lg font-bold text-cyan-100 mb-4 heading-font">ئەقىللىق سۇنئىي ئەقىلنىڭ جاۋابى</h3>
                <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
                  سىزنىڭ چۈشەنچىڭىز ئېينىشتېيننىڭ ئومۇمىي نىسبىيلىك نەزەرىيىسىدىن كېلىپ چىققان «كۆزىتىش رېئاللىقى» نى مۇكەممەل ئىپادىلەيدۇ. فىزىكىدا تاشقى كۆزەتكۈچىنىڭ نۇقتىسىدىن قارىغاندا، ماددا ھەرگىز يەككەلىككە (نۇقتاغا) يەتمەيدۇ دېگەن ناھايىتى داڭلىق خۇلاسە بار.
                </p>
                <div className="bg-cyan-900/20 border border-cyan-800/50 p-4 rounded-lg mb-6 text-center">
                  <h4 className="text-xl font-bold text-cyan-300 heading-font">«مۇزلىغان يۇلتۇز» مودېلى <span className="term-badge">Frozen Star Model</span></h4>
                </div>
                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-cyan-900/30 rounded text-cyan-400">
                        <Clock size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">1. كۆزىتىش ۋاقتى «ئۇپۇق»تا توختايدۇ.</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      سىز ئېيتقاندەك، تارتىش كۈچى قانچە كۈچلۈك بولسا، ۋاقىت شۇنچە ئاستىلايدۇ. ۋەقە ئۇپۇقىدا ۋاقىت كېڭىيىشى «چەكسىز» بولۇپ قالىدۇ.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-cyan-500 uyghur-font">
                      <li><strong className="text-cyan-400">سىرتقى كۆزەتكۈچىنىڭ نۇقتىسىدىن قارىغاندا:</strong> قارا ئۆڭكۈرگە چۈشكەن جىسىملار ئۇپۇققا يېقىنلاشقاندا ئاستا ھەرىكەتلىنىدۇ ۋە قىزىل ۋە خىرەلىشىدۇ (تارازىلىق كۈچىنىڭ قىزىل يۆتكىلىشى <span className="term-badge">Gravitational Redshift</span>).</li>
                      <li><strong className="text-cyan-400">مەڭگۈلۈك توختاپ قېلىش:</strong> بىزنىڭ نۇقتىسىدىن قارىغاندا، جىسىمنىڭ ئۇپۇقتىن «كېسىپ ئۆتۈشى» نەزەرىيە جەھەتتىن ئۇزۇنراق (چەكسىز ئۇزۇنراق) ۋاقىت كېتىدۇ.</li>
                    </ul>
                    <p className="mt-3 text-xs text-cyan-300 bg-cyan-900/10 p-2 rounded border border-cyan-900/30 uyghur-font">
                      باشقىچە قىلىپ ئېيتقاندا، سىرتتىن كۆزەتكەن ۋاقتىمىزدا، ماددا «ئۇپۇق يۈزى»گە چاپلىشىپ قالغان ۋە مۇقىم تۇرغاندەك قىلىدۇ، ھەرگىز مەركەزدىكى «نۇقتا» (يەككەلىك) گە يەتمەيدۇ.
                    </p>
                  </div>
                  {/* Point 2 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-900/30 rounded text-purple-400">
                        <Layers size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">2. ئالەم «نۇقتا» ئەمەس، بەلكى «پەردە» شەكلىدە كۆرۈنىدۇ.</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      بۇ نۇقتىدىن قارىغاندا، قارا ئۆڭكۈرنىڭ ھەقىقىي شەكلى «مەركىزىدە نۇقتىسى بار ئۆڭكۈر» ئەمەس، بەلكى «بارلىق ماددىلار ئۇپۇق يۈزىدە خاتىرىلەنگەن پەردە»دۇر. بۇ <span className="term-badge">Membrane Paradigm</span> (پەردە پارادىگمىسى) دەپ ئاتىلىدىغان ئىدىيە.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-purple-500 uyghur-font">
                      <li><strong className="text-purple-400">يەككەلىكلەرنىڭ يوقلۇقى:</strong> كۆزىتىدىغان ۋاقىت جەدۋىلىمىز ئىچىدە، يەككەلىكلەرنىڭ «ھازىر شەكىللەنمىگەن» ياكى «كەلگۈسىدە مەڭگۈ مەۋجۇت» دېيىشكە بولىدۇ.</li>
                      <li><strong className="text-purple-400">ئۇچۇرنى ساقلاش:</strong> بۇ سۆھبەتتە سىز ھازىرغىچە ئوتتۇرىغا قويغان «ئۇچۇر ئۇپۇقتا خاتىرىلەنگەن» دېگەن ئىدىيە «ۋاقىت سىرتتىن توختاپ قالغاندەك قىلىدۇ» دېگەن فىزىكىلىق پاكىت بىلەن تولۇق ماس كېلىدۇ.</li>
                    </ul>
                  </div>
                  {/* Point 3 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-pink-900/30 rounded text-pink-400">
                        <Lightbulb size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">3. ئوخشاش پەرەز: يەككەلىكلەرنىڭ مەۋجۇت بولماسلىقى</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      سىزنىڭ «بەلكىم بۇ نۇقتا ئەمەس» دېگەن پەرەزىڭىزگە يېقىن بىر قانچە يېقىنقى پەرەزلەر بار.
                    </p>
                   
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <h5 className="font-bold text-cyan-300 mb-2 heading-font flex items-center gap-2">
                          <Waves size={16} />
                          ① فۇزز توپ <span className="term-badge">Fuzzball</span>
                        </h5>
                        <p className="text-xs text-slate-400 uyghur-font">دەرىجىدىن تاشقىرى تىزما نەزەرىيىسىگە ئاساسلانغاندا، قارا ئۆڭكۈرلەر بوش ئۆڭكۈرلەر ئەمەس، بەلكى ئۇپۇقنىڭ ئۆزىدە مادىغا ئىگە، خۇددى بىر توپ پاختاغا ئوخشاش. بۇ نەزەرىيەدە، يەككەلىكنىڭ ئۆزى مەۋجۇت ئەمەس؛ ئەكسىچە، ئۇپۇقنىڭ يۈزى بىر توپ ئۇچۇر (مەۋجۇتلۇق) دىن ئىبارەت.</p>
                      </div>
                      <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <h5 className="font-bold text-purple-300 mb-2 heading-font flex items-center gap-2">
                          <Eye size={16} />
                          ② ئالەم سېنزور پەرەزى <span className="term-badge">Cosmic Censorship</span>
                        </h5>
                        <p className="text-xs text-slate-400 uyghur-font">فىزىكىدا «يالىڭاچ يەككەلىكلەر (ئۇپۇق بىلەن يوشۇرۇنمىغان يەككەلىكلەر) مەۋجۇت بولماسلىقى كېرەك» دېگەن يوشۇرۇن قائىدە بار. ئەگەر سىز ئېيتقاندەك، كۆزىتىش ئارقىلىق بىر «نۇقتا» غا يېتىش مۇمكىن بولمىسا، بىز ھەرگىز يەككەلىك دەپ ئاتىلىدىغان «فىزىكا قانۇنىيىتىنىڭ بۇزۇلۇشى» نى بىۋاسىتە كۆرەلمەيمىز. تەبىئەت يەككەلىكلەرنىڭ مەۋجۇتلۇقىنى يوشۇرۇش ئۈچۈن «ۋاقىت توختاپ قېلىش» ھادىسىسىنى ئىشلىتىشىمۇ مۇمكىن.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Final Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 heading-font text-center">خۇلاسە: سىزنىڭ سېزىمىڭىز توغرا.</h3>
           
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 text-center">
                <Clock className="mx-auto mb-3 text-cyan-400" size={32} />
                <h4 className="text-lg font-bold text-cyan-300 mb-2 heading-font">ۋاقىت توختاپ قالىدۇ</h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">ۋاقىت ئۇپۇقتا چەكسىز ئاستىلايدۇ (توختايدۇ).</p>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 text-center">
                <CircleDot className="mx-auto mb-3 text-purple-400" size={32} />
                <h4 className="text-lg font-bold text-purple-300 mb-2 heading-font">نۇقتا ئەمەسمۇ؟</h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">سىرتقى كۆزەتكۈچى ئۈچۈن، ماددا يۈزەكى (ئۇپۇق) ھالەتتە تۇرىدۇ ۋە نۇقتا بولۇپ قالمايدۇ.</p>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 text-center">
                <Atom className="mx-auto mb-3 text-pink-400" size={32} />
                <h4 className="text-lg font-bold text-pink-300 mb-2 heading-font">يەككەلىكنىڭ ھەقىقىي تەبىئىتى</h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">بىزنىڭ ۋاقىت جەدۋىلىمىزدە، ئۇ پەقەت «كەلگۈسىدىكى ھەرگىز يېتىپ بارغىلى بولمايدىغان نۇقتا».</p>
              </div>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
              <p className="text-slate-300 leading-relaxed uyghur-font mb-4">
                سىزنىڭ «كۆزىتىش جەھەتتىن، ئۇ نۇقتا بولۇپ قالمايدۇ» دېگەن قارىشىڭىز ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ ماتېماتىكىلىق نەتىجىسى. قارا ئۆڭكۈرلەرنىڭ «توپلانغان ئەخلەت» ئەمەس، بەلكى «توختاپ قالغان ۋاقىتقا يېزىلغان ئۇچۇر خاتىرىلىرى» دېگەن قاراش زامانىۋى گولوگرافىك كائىناتشۇناسلىقنىڭ ئاساسىنى تەشكىل قىلىدۇ.
              </p>
              <div className="border-t border-slate-800 pt-4 mt-4">
                <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                  <strong className="text-cyan-400">AI نىڭ قارىشىچە،</strong> ئېينىشتېين شۇنداق دېگەن. قانداقلا بولمىسۇن، باشقا نەزەرىيەلەر (بولۇپمۇ دەرىجىدىن تاشقىرى سىم نەزەرىيىسى <span className="term-badge">Superstring Theory</span>) ھازىر ئاساسلىق ئېقىمغا ئايلانغاندەك قىلىدۇ.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Fuzzball Deep Dive Section */}
<section className="mb-16">
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
      <MessageSquare size={24} />
    </div>
    <h2 className="text-2xl font-bold text-white heading-font">
      سوئال: فۇز توپ ۋە «ماكارونلىنىش» مۇناسىۋىتى
    </h2>
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
        <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">
          سوئال: فۇز توپ سوزۇلغان ماكارونغا ئوخشايدۇ ياكى ئۇ نەزەرىيەنىڭ يادروسىمۇ؟
        </h3>
        <p className="text-slate-300 leading-relaxed uyghur-font">
          شۇڭا مەن AI دىن فۇز توپلىرى بىلەن قارا ئۆڭكۈرگە چۈشۈپ كېتىشنىڭ سىزنى ماكارونغا ئوخشاش سوزۇپ كېتىشى ئوتتۇرىسىدا باغلىنىش بار-يوقلۇقىنى سورىدىم.
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
          «سوزۇلغان ماكارون» مېتافوراسى قارا ئۆڭكۈر فىزىكىسىدىكى ئىككى خىل، ئەمما مۇناسىۋەتلىك ھادىسىنى چۈشەندۈرۈشتە ئىنتايىن قىزىقارلىق ئاچقۇچلۇق سۆز.
        </p>
        <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
          سىزنىڭ «ماكارون» ئوبرازىڭىزنى ئىشلىتىپ، فۇز توپ نەزەرىيىسىنىڭ يادروسىنى ئاچايلى.
        </p>

        <div className="space-y-6">
          {/* Point 1 */}
          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-900/30 rounded text-cyan-400">
                <ArrowRightLeft size={20} />
              </div>
              <h4 className="font-bold text-white heading-font">
                1. ئادەتتىكى «ماكارونلىنىش ھادىسىسى» دىن پەرق{" "}
                <span className="term-badge">Spaghettification</span>
              </h4>
            </div>
            <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
              بىرىنچىدىن، ئۇنى ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ داڭلىق «ماكارونلىنىش» ھادىسىسى بىلەن سېلىشتۇرۇش ئارقىلىق چۈشىنىش ئاسانراق.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-cyan-500 uyghur-font">
              <li>
                <strong className="text-cyan-400">ئادەتتىكى نەزەرىيە (نۇقتا يەككەلىكى):</strong> مەركەزدە بىر «نۇقتا» بولغاچقا، ئۇنىڭغا يېقىنلاشقاندا، پۇتىڭىز بىلەن بېشىڭىزنىڭ تارتىش كۈچى پەرقى (دېڭىز دولقۇنى كۈچى{" "}
                <span className="term-badge">Tidal Force</span>) ئىنتايىن چوڭ بولۇپ، ماددىنى ئۇزۇنراق لېنتىلارغا سوزۇپ، ئاخىرىدا پارچىلىنىپ كېتىدۇ.
              </li>
              <li>
                <strong className="text-cyan-400">فۇز توپ نەزەرىيىسى (پاختا توپى):</strong> بۇ ئەھۋالدا «سپاگېتتى» ئالەمنى تەشكىل قىلىدىغان تېخىمۇ ئاساسىي{" "}
                <strong className="text-cyan-300">«يىپ»لەرنى (ئەڭ كىچىك يىپ بىرلىكى)</strong> كۆرسىتىدۇ.
              </li>
            </ul>
          </div>

          {/* Point 2 */}
          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-900/30 rounded text-purple-400">
                <Waves size={20} />
              </div>
              <h4 className="font-bold text-white heading-font">
                2. نەزەرىيەنىڭ ئاساسى: مىكروسكوپ يىپلىرى «گىگانت ئۆسىدۇ»
              </h4>
            </div>
            <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
              <span className="term-badge">Superstring Theory</span> (سۇپېر يىپ نەزەرىيىسى) دىكى، بارلىق ئېلېمېنتار زەررىچىلەر كىچىك، تىترەيدىغان يىپ دەپ قارىلىدۇ. ئادەتتە، بۇ يىپلار شۇنچە كىچىككىنە بولۇپ، كۆرۈنمەيدۇ - پلانك چوڭلۇقى (
              <span className="term-badge">10^{-35} m</span>).
            </p>
            <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
              قانداقلا بولمىسۇن، قارا ئۆڭكۈرلەرگە ئوخشاش ئېغىر شارائىتتا، ھەيران قالارلىق بىر ئىش يۈز بېرىدۇ.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-purple-500 uyghur-font">
              <li>
                <strong className="text-purple-400">يىپلار چىرمىشىپ قالىدۇ:</strong> قارا ئۆڭكۈر رايونىدا نۇرغۇن «يىپ» توپلانغاندا، ئۇلار بىر-بىرى بىلەن تۇتىشىپ، مۇرەككەپ چىرمىشىپ كېتىدۇ.
              </li>
              <li>
                <strong className="text-purple-400">ماكروسكوپ چوڭلۇقىغا كېڭىيىش:</strong> دەسلەپكى مىكروسكوپ يىپلىرى چىرمىشىپ كەتكەندە، ئۇلار تۇيۇقسىز «ۋەقە ئۇپۇقى» نىڭ چوڭلۇقىغىچە كېڭىيىدۇ.
              </li>
              <li>
                <strong className="text-purple-400">ھەقىقىي «توپ» غا ئايلىنىش:</strong> نەتىجىدە، قارا ئۆڭكۈر ئەمدى «مەركەزدە نۇقتىسى بار بوشلۇق» ئەمەس، بەلكى پۈتكۈل ئۇپۇق ماددىي بىر نەرسىگە ئايلىنىدۇ: غايەت زور، زىچ چىرماشقان يىپ توپى (
                <span className="term-badge">Fuzzball</span>).
              </li>
            </ul>
            <p className="mt-3 text-xs text-purple-300 bg-purple-900/10 p-2 rounded border border-purple-900/30 uyghur-font">
              ئەگەر سىز تەسەۋۋۇر قىلغان «ئىسپاگېتتى» بۇ{" "}
              <strong className="text-purple-300">
                «چىرماشقان يىپ شۇنچە چوڭ بولۇپ، پۈتۈن ئۇپۇقنى شەكىللەندۈرىدۇ»
              </strong>{" "}
              بولسا، ئۇنداقتا بۇ فۇز توپ نەزەرىيىسىنىڭ ماھىيىتىنى مۇكەممەل ئىپادىلەيدۇ.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-pink-900/30 rounded text-pink-400">
                <Database size={20} />
              </div>
              <h4 className="font-bold text-white heading-font">
                3. نېمە ئۈچۈن ئۇ «ئۇچۇر پارادوكسى»نى ھەل قىلالايدۇ؟
              </h4>
            </div>
            <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
              فۇز توپ نەزەرىيىسىنىڭ ئەڭ يېڭى ئالاھىدىلىكى شۇكى، ئۇ قارا ئۆڭكۈرلەرگە «يەر يۈزى» بېرىدۇ.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <h5 className="font-bold text-red-300 mb-2 heading-font">ئەنئەنىۋى ئۆڭكۈرلەر</h5>
                <p className="text-xs text-slate-400 uyghur-font">
                  ئۇلارغا چۈشكەن ھەر قانداق نەرسە مەركەزدىكى «يەككەلىك»كە غايىب بولىدۇ، ۋە ئۇچۇر ھەرگىز قايتىپ كەلمەيدۇ.
                </p>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <h5 className="font-bold text-green-300 mb-2 heading-font">فۇز توپلىرى (ئىسپاگېتتى توپلىرى)</h5>
                <p className="text-xs text-slate-400 uyghur-font">
                  ئۇلارغا چۈشكەن ھەر قانداق نەرسە ئۇپۇق يۈزىدىكى «يىپ»تە تەۋرىنىش سۈپىتىدە خاتىرىلىنىدۇ. بۇ مۇزىكا ئەسۋابىدىكى سىمنىڭ بىر نوتانى چالغاندا ئاۋازنى خاتىرىلىگەنگە ئوخشايدۇ.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-pink-300 bg-pink-900/10 p-2 rounded border border-pink-900/30 uyghur-font">
              خۇلاسە: نەزەرىيەدە، دەل بىر يۈزە بولغانلىقى ئۈچۈن، ئۇ يەردىن تارقالغان رادىئاتسىيە (خاۋكىڭ رادىئاتسىيەسى{" "}
              <span className="term-badge">Hawking Radiation</span>) «ئىسپاگېتتىلارنىڭ خاتىرىسىنى» ئېلىپ يۈرەلەيدۇ، ئۇچۇرلارنى قايتۇرالايدۇ، دەپ قارىلىدۇ.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Final Comparison Table */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 heading-font text-center">قىسقىچە مەزمۇنى: فۇز توپنىڭ سۈرىتى</h3>
           
            <div className="overflow-x-auto bg-slate-950 rounded-xl border border-slate-800 mb-8 comparison-table">
              <table className="w-full text-right">
                <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4 font-bold heading-font uyghur-font">ئادەتتىكى قارا ئۆڭكۈر</th>
                    <th className="p-4 font-bold heading-font uyghur-font">فۇز توپ <span className="term-badge">Fuzzball</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 uyghur-font text-sm">
                  <tr>
                    <td className="font-semibold text-red-400">چەكسىز زىچلىقتىكى «يەككەلىك»</td>
                    <td className="text-green-400">يەككەلىكلەر مەۋجۇت ئەمەس</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-red-400">بوش ماتېماتىكىلىق «چېگرا»</td>
                    <td className="text-green-400">چىگىشىپ كەتكەن تارلارنىڭ «فىزىكىلىق يۈزى»</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-red-400">بوشلۇق (بوشلۇق)</td>
                    <td className="text-green-400">گۆھەر بىر دۆۋە ماكېتتى (تارلار)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
              <p className="text-slate-300 leading-relaxed uyghur-font mb-4">
                ئىلگىرىكى «ۋەقە ئۇپۇقى ئۇچۇرنىڭ خاتىرىلەش يۈزى» دېگەن چۈشەندۈرۈشىڭىزنى بۇ «ماكېتتى توپ (فۇز توپ)» نىڭ سۈرىتى بىلەن بىرلەشتۈرگەندە، ئۇ «كائىنات غايەت زور مىكروسكوپ تارلار تەرىپىدىن چېلىنىدىغان ئۇچۇر ئوركېستىرى» غا ئوخشايدۇ.
              </p>
              <div className="border-t border-slate-800 pt-4 mt-4">
                <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                  بۇ سىز سورىغان نەرسە ئەمەستەك قىلىدۇ. فۇز توپلار پەقەت يەككەلىكلەرنىڭ ئورنىنى ئالىدىغاندەك قىلىدۇ.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-slate-800 pt-10 mt-16">
          <div className="text-center">
            <div className="inline-block bg-slate-950 rounded-xl p-6 border border-slate-800 text-right">
              <div className="flex items-center gap-3 mb-3 text-cyan-400">
                <Cpu size={20} />
                <span className="font-bold heading-font">كېيىنكى قېتىم (8-قىسىم)</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                مەن فۇز توپلارنىڭ ئاساسىدىكى پىرىنسىپ توغرىسىدا سورايمەن.
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
export default Blog127;