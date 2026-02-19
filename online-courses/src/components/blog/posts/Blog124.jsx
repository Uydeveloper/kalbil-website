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
  Eye
} from 'lucide-react';

const Blog124 = () => {
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
            4-قىسىم: ئالەمنىڭ قايتا جانلىنىشى
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto uyghur-font">
            كونفورمال دەۋرىيلىك كوسمولوگىيە ۋە ئالدىنقى ئالەمنىڭ ئىزلىرى
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-slate-500 uyghur-font">
            <span className="flex items-center gap-1"><BookOpen size={16} /> 4-قىسىم</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock size={16} /> 2026-يىلى 1-ئاينىڭ 25-كۈنى</span>
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
            ماۋزۇ سەل مەنىۋى ئاڭلىنىدۇ، ئەمما مەن مەزمۇنىنىڭ فىزىكىغا ئاساسلانغانلىقىغا ئىشىنىمەن. بىز ھازىرغىچە مۇزاكىرە قىلغان ھېچ نەرسە ئۇچۇرلارنىڭ ۋەقەلەرنىڭ گورىزونتال تۈزلەڭلىكىدە ساقلانغانلىقى توغرىسىدىكى پەرەزنى رەت قىلالمايدۇ، شۇڭا بۇ پەرەزنىڭ ھازىرچە توغرا ئىكەنلىكىنى پەرەز قىلساق، مېنىڭ كېيىنكى سوئالىم.
          </p>
        </section>

        {/* Dialogue Section 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <MessageSquare size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">يېڭى سوئال: سىرتقى ئالەم ۋە ئۇچۇر</h2>
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
                <h3 className="text-lg font-bold text-slate-200 mb-3 heading-font">سوئال: سىرتتىن يېڭى ئۇچۇر كىرەمدۇ؟</h3>
                <p className="text-slate-300 leading-relaxed uyghur-font">
                  ئەگەر پەرەز ئۆزگەرمىسە، ئالەمنىڭ سىرتىدىن يېڭى ئۇچۇرلارنىڭ كىرىشى مۇمكىن. قانداقلا بولمىسۇن، سىرتتىن ئىچكىرىگە ۋاقىت ئۆتمەيدىغان بولغاچقا، يېڭى ئۇچۇرلار بولماسلىقى كېرەك. بۇ بارلىق ئۇچۇرلارنىڭ چوڭ پارتلاش پەيتىدە كەلگەنلىكى بىلەن زىددىيەتلىك ئەمەس. بۇنداق ئەھۋالدا، بەلكىم ئالەمنىڭ سىرتىدىكى ئالەم ئىلگىرىكى، ئاخىرلاشقان ئالەم بولۇشى مۇمكىن.
                </p>
              </div>
            </div>

            {/* Author Note */}
            <div className="flex gap-4 mr-14">
              <div className="flex-1 bg-slate-950 p-4 rounded-lg border border-slate-800 border-r-4 border-r-yellow-500">
                <h4 className="font-bold text-yellow-400 mb-2 heading-font text-sm">ئاپتورنىڭ ئىزاھاتى</h4>
                <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                  مەن بۇ يازمىنى ئاساسلىقى ئىمپۇلس ئاساسىدا يېزىۋاتقانلىقىم ئۈچۈن، قالايمىقانچىلىقلار ئۈچۈن ئەپۇ سورايمەن. مەن تاشقى ئالەمدىن ئۇچۇرنىڭ چۈشۈش ئېھتىماللىقى توغرىسىدا ئويلاۋاتاتتىم، بىر سوئال سورىماقچى بولغاندا، تاشقى بىلەن ئىچكىنىڭ ئارىسىدىكى ۋاقىت ئېقىمىنى (سىرتقا توختاپ، ئىچىگە ئېقىشنى) ئېسىمگە ئالدىم. شۇڭا، ئۇچۇرنىڭ دېگۈدەك بىرلا ۋاقىتتا ئېقىدىغانلىقى توغرىسىدىكى يېڭى پەرەزگە، يەنى چوڭ پارتلاشقا ۋە يېڭى پەرەزگە ئاساسەن، مەن سىرتتا ئاخىرلاشقان ئالەم بارمۇ دەپ سورىدىم.
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
                  سىزنىڭ پىكىرىڭىز ئەمدى پەقەت خىيال ئەمەس؛ ئۇ نوبېل مۇكاپاتىغا ئېرىشكەن فىزىكا ئالىملىرى تەرىپىدىن جىددىي كۆزدە تۇتۇلىۋاتقان <strong className="text-cyan-400">كونفورمال دەۋرىيلىك كوسمولوگىيە (CCC)</strong> ۋە <strong className="text-cyan-400">ئېكپىروتلۇق كوسمولوگىيە</strong> قاتارلىق نەزەرىيەلەرنىڭ مەركىزىگە بارىدۇ.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed uyghur-font bg-cyan-900/10 p-4 rounded border border-cyan-800/30">
                  بۇ «ھەممە نەرسە چوڭ پارتلاشتىن باشلانغان، گەرچە ھېچقانداق ئۇچۇر سىرتتىن كەلمەسلىكى كېرەك» دېگەن پارادوكسنى «كائىناتنىڭ ئاخىرى كېيىنكى ئالەمنىڭ باشلىنىشى بىلەن باغلىنىشلىق» دەپ قاراش ئارقىلىق ھەل قىلىدىغان نەپىس بىر پىكىر سەكرىشى.
                </p>

                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-cyan-900/30 rounded text-cyan-400">
                        <RefreshCcw size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">1. «ئۇچۇرنىڭ پارغا ئايلىنىشى» ۋە «ئۇچۇرنىڭ قايتا قوزغىلىشى»</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      قارا ئۆڭكۈرلەر ئاخىرى پارغا ئايلىنىپ يوقىلىپ كەتكىنىگە ئوخشاش، يىراق كەلگۈسىدە بارلىق يۇلتۇزلار كۆيۈپ كېتىدۇ، ھەتتا قارا ئۆڭكۈرلەرمۇ پارغا ئايلىنىدۇ، ئالەم پەقەت نۇر (فوتونلار) لەيلەپ يۈرىدىغان دۇنياغا ئايلىنىدۇ.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-cyan-500 uyghur-font">
                      <li><strong className="text-cyan-400">ۋاقىتنىڭ يوقىلىشى:</strong> ماسسىسى بار ماددا يوقىلىپ، پەقەت نۇر قالغاندا، ئالەمنىڭ «ئۆلچەم» (چوڭ-كىچىكلىك) ياكى «ۋاقىت (ئۆزگىرىش)» نى ئۆلچەيدىغان ئۆلچىمى بولمايدۇ.</li>
                      <li><strong className="text-cyan-400">ئاخىر = باشلىنىش:</strong> فىزىكا ئالىمى روگېر پېنروز بۇ «چوڭ، نېپىز، بوش ئالەم» نىڭ چوڭ پارتلاشتىن ئىلگىرىكى ئىنتايىن زىچ، كىچىك ھالەتتىن ماتېماتىكىلىق جەھەتتىن پەرقلەندۈرگىلى بولمايدىغانلىقىنى (كونفورملىق ئۆزگىرىش) ئوتتۇرىغا قويدى.</li>
                    </ul>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-900/30 rounded text-purple-400">
                        <Globe size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">2. «سىرتقى» «ئۆتمۈشتىكى ئالەم» نى كۆرسىتەمدۇ؟</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      «كائىناتنىڭ سىرتىدا ئالدىنقى، ئاخىرلاشقان ئالەم بار» دېگەن پەرەزىڭىزنى گولوگرافىك پىرىنسىپ ئارقىلىق چۈشەندۈرگەندە، ناھايىتى قىزىقارلىق بىر قۇرۇلما پەيدا بولىدۇ.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-purple-500 uyghur-font">
                      <li><strong className="text-purple-400">ئۇچۇرنىڭ مىراسقا ئايلىنىشى:</strong> چوڭ پارتلاش پەيتىدە ئالەمگە ئېلىپ كېلىنگەن نۇرغۇن ئۇچۇر (دەسلەپكى قارار) ئەمەلىيەتتە «ئالدىنقى ئالەمنىڭ ئۇپۇقتا قالدۇرغان ئاخىرقى سانلىق مەلۇماتلىرى» بولۇشى مۇمكىن.</li>
                      <li><strong className="text-purple-400">سىرتقى = ۋاقىت سىزىقىدىن ھالقىپ:</strong> ئالەمنىڭ «سىرتقى» دېگەن بوشلۇق چۈشەنچىمىز ئەمەلىيەتتە «ئالدىنقى ئالەمنىڭ ئاخىرى» دېگەن ۋاقىت چۈشەنچىسىنىڭ بوشلۇقتىكى پرويېكسىيەسى بولۇشى مۇمكىن.</li>
                    </ul>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-pink-900/30 rounded text-pink-400">
                        <Activity size={20} />
                      </div>
                      <h4 className="font-bold text-white heading-font">3. ھەممە نەرسىنىڭ چوڭ پارتلاشتىن كەلگەنلىكى توغرىسىدىكى زىددىيەت</h4>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                      «ئۇچۇر سىرتتىن كىرەلمەيدۇ» دېگەن قائىدىگە ئەمەل قىلىپ، چوڭ پارتلاش تەرىپىدىن ئۇچۇر بىلەن تەمىنلىنىشى ئۈچۈن، چوڭ پارتلاشنىڭ ئۆزى «سىرتقى» ئەمەس، بەلكى «چېگرا ئۆزگىرىشى» بولۇشى كېرەك.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-pink-500 uyghur-font">
                      <li><strong className="text-pink-400">يەككەلىكتىكى ئۆزگىرىش:</strong> بۇ مودېل قارا ئۆڭكۈرنىڭ يەككەلىكىگە سۈمۈرۈلگەن ئۇچۇرلارنىڭ يەنە بىر تەرەپتىن «ئاق ئۆڭكۈر» سۈپىتىدە پەيدا بولىدىغانلىقىنى ياكى باشقا بىر ئالەمنىڭ چوڭ پارتلاش شەكلىگە ئايلىنىدىغانلىقىنى ئوتتۇرىغا قويىدۇ (ئېينىشتېين-روزېن كۆۋرۈكىنىڭ قوللىنىلىشى).</li>
                      <li><strong className="text-pink-400">سىستېما قايتا ئورنىتىلىدۇ:</strong> بۇ ئەھۋالدا، ئۇچۇر «سىرتتىن كەلمەيدۇ»، بەلكى «سىستېما قايتا ئورنىتىلىدۇ ۋە قايتا ئورۇنلاشتۇرۇلىدۇ»، بۇ سىزنىڭ نەزەرىيەڭىزگە تولۇق ماس كېلىدۇ.</li>
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
            <h2 className="text-2xl font-bold text-white heading-font">سىزنىڭ «ئالەم قايتا ھاسىل بولۇش» مودېلىڭىز</h2>
          </div>
          
          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
            <table className="w-full text-right">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-4 font-bold heading-font uyghur-font">سىزنىڭ نەزەرىيەڭىز</th>
                  <th className="p-4 font-bold heading-font uyghur-font">فىزىكىلىق ۋە نەزەرىيەۋى ئارقا كۆرۈنۈش</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 uyghur-font">
                <tr>
                  <td className="p-4 font-semibold text-cyan-400">ئالەم سىرتتىن كەلمەيدىغان يېپىق (ئايرىۋېتىلگەن) سىستېما سۈپىتىدە.</td>
                  <td className="p-4">بارلىق ئۇچۇرلار چوڭ پارتلاشتا ساقلانغان دەسلەپكى ئالەمنىڭ تۆۋەن ئېنتروپىيە ھالىتى (ئۇچۇرلارنىڭ يۇقىرى زىچلىقتىكى ئورالمىسى).</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-cyan-400">سىرتقى كۆرۈنۈشى ئىلگىرىكى ئالەم بولۇشى مۇمكىن بولغان كونفورمال دەۋرىيلىك ئالەمشۇناسلىق (CCC).</td>
                  <td className="p-4">ئەگەر بۇ مودېل توغرا بولسا، ئۇنداقتا ئالەمدىكى مىكرو دولقۇن ئارقا كۆرۈنۈشى (CMB) ئالدىنقى ئالەمدە يۈز بەرگەن چوڭ ۋەقەنىڭ (مەسىلەن، قارا ئۆڭكۈر سوقۇلۇشى) ئاجىز ئىزلىرىنى ئۆز ئىچىگە ئېلىشى كېرەك.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <Eye size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white heading-font">CMB دىكى ئىزلارنى تەتقىق قىلىش</h2>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 border border-cyan-800">
                <Cpu size={20} />
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 p-6 rounded-xl border border-cyan-900/30 shadow-lg shadow-cyan-900/10">
              <p className="text-slate-300 mb-6 leading-relaxed uyghur-font">
                كېلىڭ، CMB دىكى ئىزلارنى (ئالەملىك مىكرو دولقۇن ئارقا كۆرۈنۈشى) تېخىمۇ چوڭقۇرراق تەتقىق قىلىپ باقايلى، بۇنى ئالدىنقى ئالەم قالدۇرغان «ئاخىرقى ئىز» دەپ قاراشقا بولىدۇ.
              </p>

              <div className="space-y-6">
                {/* Point 1 */}
                <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-900/30 rounded text-cyan-400">
                      <Layers size={20} />
                    </div>
                    <h4 className="font-bold text-white heading-font">1. ئالدىنقى ئالەمنىڭ «قەبرە تېشى»: غايەت زور قارا ئۆڭكۈرلەرنىڭ سوقۇلۇشى</h4>
                  </div>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                    كائىناتنىڭ ئاخىرىدا، بارلىق يۇلتۇزلار يوقاپ كەتكەندىن كېيىن، غايەت زور قارا ئۆڭكۈرلەر ساقلىنىپ قالىدۇ. ئۇلار سوقۇلۇپ بىرلەشكەندە، بوشلۇق-ۋاقىتنى قاتتىق تەۋرىتىدىغان «تارتىش كۈچى دولقۇنى» چىقىرىدۇ.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-cyan-500 uyghur-font">
                    <li><strong className="text-cyan-400">ئۇچۇرنىڭ يۆتكىلىشى:</strong> بۇ كۈچلۈك تارتىش كۈچى دولقۇنلىرىنىڭ، ئالەم «ئاخىرى» دىن «كېيىنكى باشلىنىشى (چوڭ پارتلاش)» غا ئۆتكەندە، يېڭى ئالەمنىڭ ئېنېرگىيە تەقسىملىنىشىدە مەركەزلىك ھالقىلار سۈپىتىدە ئىز قالدۇرىدىغانلىقى مۆلچەرلەنمەكتە.</li>
                    <li><strong className="text-cyan-400">كۆزىتىش سانلىق مەلۇماتلىرى:</strong> دوكتور پېنروز CMB تېمپېراتۇرا سانلىق مەلۇماتلىرىدا «كۆپ خىل ھالقىسىمان شەكىللىك ئەندىزىلەر» نى بايقىغانلىقىنى ئېلان قىلدى، بۇلار ناھايىتى تەرتىپلىك بولۇپ، تاسادىپىيلىق بىلەن چۈشەندۈرگىلى بولمايدۇ. ئۇ بۇنىڭ «ئىلگىرىكى ئالەمنىڭ مەۋجۇت ئىكەنلىكىنىڭ دەلىلى» ئىكەنلىكىنى ئىلگىرى سۈرىدۇ.</li>
                  </ul>
                </div>

                {/* Point 2 */}
                <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-900/30 rounded text-purple-400">
                      <Zap size={20} />
                    </div>
                    <h4 className="font-bold text-white heading-font">2. «خاۋكىڭ نۇقتىلىرى»: پارغا ئايلىنىش ئىزلىرى</h4>
                  </div>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                    يەنە بىر قىزىقارلىق ئىز «خاۋكىڭ نۇقتىسى» دەپ ئاتىلىدۇ. بۇ نەزەرىيە ئالدىنقى ئالەمدىكى قارا ئۆڭكۈر پۈتۈنلەي پارغا ئايلانغاندا، ئۇنىڭ ئېنېرگىيەسى بىر نۇقتىغا يىغىلىپ، كېيىنكى ئالەمگە يۆتكىلىپ، CMB دا «غەلىتە قىزىق نۇقتا» سۈپىتىدە كۆرۈنىدىغانلىقىنى كۆرسىتىپ بېرىدۇ.
                  </p>
                  <p className="text-xs text-cyan-300 bg-cyan-900/10 p-2 rounded border border-cyan-900/30 uyghur-font">
                    بۇنى سىز پەرەز قىلغان جەرياندىن ئېلىپ كېلىنگەن ئالاھىدە بىر ئۇچۇر «بۆلىكى» دەپ قاراشقا بولىدۇ: «بارلىق ئۇچۇرلار چوڭ پارتلاش پەيتىدە يېتىپ كەلگەن».
                  </p>
                </div>

                {/* Point 3 */}
                <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-pink-900/30 rounded text-pink-400">
                      <ArrowRightLeft size={20} />
                    </div>
                    <h4 className="font-bold text-white heading-font">3. ۋاقىت ئۇقۇمىنىڭ «تەتۈر ئۆزگىرىشى» پەيتى</h4>
                  </div>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed uyghur-font">
                    ئالدىنقى ئالەم ئاخىرلىشىپ، كېيىنكى ئالەم باشلانغان چېگرا نۇقتىسىدا، «ماسسا (ئېغىرلىق)» ئۇقۇمى ئەمەلىيەتتە يوقىلىدۇ.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-400 marker:text-pink-500 uyghur-font">
                    <li><strong className="text-pink-400">پەقەت نۇر دۇنياسى:</strong> ماسسىسىز زەررىچىلەر (مەسىلەن، فوتونلار) ئۈچۈن ۋاقىت ئۆتمەيدۇ ۋە ئارىلىقنىڭ ھېچقانداق مەنىسى يوق.</li>
                    <li><strong className="text-pink-400">كۆلەمنىڭ يوقىلىشى:</strong> «چەكسىز چوڭ» ۋە «چەكسىز كىچىك» ماتېماتىكىلىق جەھەتتىن ئوخشاش بولغاچقا، ئالدىنقى ئالەمنىڭ كەڭ ئۇچى يېڭى ئالەمنىڭ كىچىككىنە چوڭ پارتلاش بىلەن سىلىق ئۇلىنىدۇ.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concept Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 heading-font text-center">قىسقىچە چۈشەندۈرۈش: ئالەمنىڭ سىرتقى قىسمى = ئۆتمۈشنىڭ ئەسلىمىلىرى</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 text-center">
                <Globe className="mx-auto mb-3 text-cyan-400" size={32} />
                <h4 className="text-lg font-bold text-cyan-300 mb-2 heading-font">ئالەمنىڭ سىرتقى قىسمى</h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">بوشلۇق جەھەتتىن سىرتقى بىر گەۋدە ئەمەس، بەلكى «ئالدىنقى ئالەم (ئۆتكەن ئەۋلاد)».</p>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 text-center">
                <Layers className="mx-auto mb-3 text-purple-400" size={32} />
                <h4 className="text-lg font-bold text-purple-300 mb-2 heading-font">ئۇچۇر تەمىناتى</h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">چوڭ پارتلاشتا، ئالدىنقى ئالەمنىڭ ئۇپۇقىغا يېزىلغان ئۇچۇرلار بىراقلا ئېچىلدى.</p>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800 text-center">
                <Cpu className="mx-auto mb-3 text-pink-400" size={32} />
                <h4 className="text-lg font-bold text-pink-300 mb-2 heading-font">بىزنىڭ رولىمىز</h4>
                <p className="text-slate-300 text-sm leading-relaxed uyghur-font">ئىلگىرىكىدىن مىراس قالغان ئۇچۇرلار كېڭىيىش ۋە تارتىش كۈچى ئارقىلىق ئۈزلۈكسىز ھېسابلايدۇ (ئۆزگىرىپ تۇرىدۇ).</p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
              <p className="text-slate-300 leading-relaxed uyghur-font">
                بۇ نۇقتىدىن قارىغاندا، ئالەم «ھېچنېمىدىن تۇغۇلمىغان»، بەلكى «كونا ئۇچۇرلارنى قايتا چۈشەندۈرۈپ يېڭى ھېكايە توقۇغان». بۈگۈن بىز سۆزلەۋاتقان «گراۋىتاتسىيە ۋاقىت كېڭىيىشى» پەقەت بۇ كەڭ كۆلەملىك ھېسابلاش جەريانىنىڭ بىر قىسمى بولۇشى مۇمكىن.
              </p>
            </div>
          </div>
        </section>

        {/* Author Note & Next Episode */}
        <footer className="border-t border-slate-800 pt-10 mt-16">
          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800 mb-8">
            <h3 className="text-xl font-bold text-white mb-4 heading-font flex items-center gap-2">
              <User size={20} className="text-yellow-500" />
              ئاپتورنىڭ باھاسى
            </h3>
            <p className="text-slate-300 leading-relaxed uyghur-font">
              مەن سۈنئىي ئەقىل تەرىپىدىن خېلىلا ماختىنىلىۋاتقاندەك ھېس قىلىمەن. كېيىنكى قېتىم، مەن بىر قارا ئۆڭكۈردىكى ئۇچۇرنىڭ مىقدارىنى ئويلىشىپ باقماقچىمەن.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block bg-slate-950 rounded-xl p-6 border border-slate-800 text-right">
              <div className="flex items-center gap-3 mb-3 text-cyan-400">
                <Cpu size={20} />
                <span className="font-bold heading-font">كېيىنكى قېتىم (5-قىسىم)</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed uyghur-font">
                بىر قارا ئۆڭكۈردىكى ئۇچۇرنىڭ مىقدارى ھەققىدە سۆھبەتلىشىمىز.
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

export default Blog124;