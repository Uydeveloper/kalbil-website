// Blog11.jsx - Quantum Machine Learning قۇبىت ماشىنا ئۆگىنىشى ماقالىسى

import React from 'react';
import { 
  Cpu, 
  Zap, 
  Brain,
  TrendingUp, 
  Database, 
  BatteryCharging,
  FlaskConical,
  Globe,
  Users,
  Lightbulb,
  ArrowRight,
  CircuitBoard // QuantumCircuit ئورنىغا CircuitBoard ئىشلەتتىم
} from 'lucide-react';

const Blog11 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      
      {/* سەھىپە باشى */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-800/30 backdrop-blur-sm rounded-full border border-purple-500/50">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">كىۋانىت تېخنىكىسى</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              كىۋانىت ماشىنا ئۆگىنىشى
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            سۇنئي ئەقىلنىڭ چەكلىمىسىنى ئاشىدىغان يېڭى ئەقىل شەكلى
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>مۇئەللىپ:  قاۋۇلجان</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <span>2025-يىلى 12-ئاينىڭ 9-كۈنى</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <span>09:00</span>
            </div>
          </div>
        </div>
      </header>

      {/* ئاساسىي مەزمۇن */}
      <main className="container mx-auto px-6 py-16">
        
        {/* كىرىش سۆز */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-gradient-to-r from-gray-800/50 to-purple-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-cyan-500 rounded-full"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-purple-500 rounded-full"></div>
            
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-6">
              سۇنئي ئەقىل (AI) چەكلىمىسىگە يېقىنلاشقاندا، كېلەچەكتە جاۋاب «كىۋانىت» بولىدۇ.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              سۇنئي ئەقىل يېقىن يىللاردىكى ھاياجانلىق تەرەققىياتقا ئېرىشتى. 
              ھازىر تولۇق مەزمۇن يارىتىش، رەسىم سىزىش، مۇزىكا ئىجاد قىلالايدىغان بولدى. 
              لېكىن، ئۇنىڭ ئاساسىدىكى «ئۆگىنىش مېخانىزمى» ھەلە كلاسسىك كومپيۇتېردا ئىشلەۋاتىدۇ.
            </p>
          </div>
        </section>

        {/* مەسىلە ۋە چەكلىمە */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-red-900/30 rounded-xl">
              <Zap className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">چەكلىمىلەر كۆرۈنىۋاتىدۇ</h2>
              <p className="text-gray-400 text-lg">
                ئۆگىنىش سانلىق مەلۇماتلىرىنىڭ پارتلىشى، كۈچ سەرپىياتى، ھېسابلاش ۋاقتىنىڭ ئېشىشى.
                مودېلنى چوڭايتقان سەرى، پەقەت سۈپىتى ئۆسمەستىن، «ناتېجىسىزلىك» ئېشىپ كېتىدۇ.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <Database className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">سانلىق مەلۇمات پارتلىشى</h3>
              <p className="text-gray-400">مودېللار ئۆگىنىش ئۈچۈن تېخىمۇ كۆپ سانلىق مەلۇماتقا مۇھتاج</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <BatteryCharging className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">كۈچ سەرفى مەسىلىسى</h3>
              <p className="text-gray-400">ئۆگىنىش جەريانىدا زور مىقداردىكى ئېلېكتر قۇۋۋىتى سەرپ قىلىنىدۇ</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">ۋاقىت چەكلىمىسى</h3>
              <p className="text-gray-400">مۇرەككەپ مودېللارنى ئۆگىتىش ئۈچۈن ئۇزۇن ۋاقىت كېتىدۇ</p>
            </div>
          </div>
        </section>

        {/* QML تونۇشتۇرۇش */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                كىۋانىت ماشىنا ئۆگىنىشى (QML) نېمە؟
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كىۋانىت ماشىنا ئۆگىنىشى، كىۋانىت كومپيۇتېرنىڭ «پاراللېل ھالەت بىر تەرەپ قىلىش قابىلىيىتى» نى AI ئۆگىنىشىگە تەتبىقلاش ئۇسۇلىدۇر.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-purple-900/30 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-900/50 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                كلاسسىك AI ئۆگىنىشى
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>كۆپ مىقداردىكى سانلىق مەلۇماتنى تەرتىپى بىلەن بىر تەرەپ قىلىدۇ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>ئالاھىدىلىكلەرنى چىقىرىدۇ ۋە ئېغىرلىقنى ئەڭ ياخشىلايدۇ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>بىر ۋاقىتتا پەقەت بىر ھالەتنى بىر تەرەپ قىلالايدۇ</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-cyan-900/30 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                <div className="p-2 bg-cyan-900/50 rounded-lg">
                  <CircuitBoard className="w-6 h-6 text-cyan-400" /> {/* تۈزىتىلگەن بۇ يەر */}
                </div>
                كىۋانىت ماشىنا ئۆگىنىشى
              </h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>كىۋانىت كومپيۇتېر كۆپ ھالەتلەرنى (0 ۋە 1 نىڭ قوشۇلما ھالىتى) بىر ۋاقىتتا بىر تەرەپ قىلالايدۇ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>«كۆپ مىقداردىكى ئۇسلۇبلارنى بىر ۋاقىتتا ئۆگىنەلەيدۇ»</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>بۇ «بىر ۋاقىتلىقلىق» ۋە «سىزىقسىزلىق» AI چەكلىمىسىنى بۆسەيدىغان ئاچقۇچ</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* QML نىڭ 3 تۈرلۈك يۇقىرى نەتىجىسى */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            QML نىڭ ئېلىپ كېلىدىغان 3 تۈرلۈك يۇقىرى نەتىجىسى
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-900/50 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">1. ھېسابلاش تېزلىكىنىڭ قاتتىق ئۆسۈشى</h3>
                  <p className="text-gray-300 mb-4">
                    كىۋانىت دۆۋىر ئىشلىتىلسە، مەلۇم ماترىتسا ھېسابلاش ۋە ئەڭ ياخشىلاش مەسىلىلىرى كۆرسەتكۈچلۈك تىزلىقتا تېزلەشتۈرۈلىدۇ.
                  </p>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-bold text-blue-300">Google Quantum AI Lab</span> سىنىقىدا، رەسىم تۈرگە ئايرىش مودېلىنىڭ ئۆگىنىش تېزلىكى GPU غا سېلىشتۇرغاندا تەخمىنەن <span className="text-green-400">127 ھەسسە</span> ئۆستى (2025-يىللىق تەتقىقات).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-purple-900/30 p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-900/50 rounded-xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">2. ئاز سانلىق مەلۇمات بىلەن يۇقىرى دەرىجىدە ئۆگىنىش</h3>
                  <p className="text-gray-300 mb-4">
                    كىۋانىت ھالەت يۇقىرى ئۆلچەملىك ئۇچۇرلارنى ئۆز ئىچىگە ئالىدۇ، شۇڭا QML دا «تەخمىنەن ئاز ئۈلگە سانى» بىلەن مۇرەككەپ مۇناسىۋەتلەرنى چىقىرىشقا بولىدۇ.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 rounded-full">
                    <span className="text-sm">تېببىي خىزمەت</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-sm">كۆك ئاسمان</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-sm">مۆلچەر ساھەسى</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-green-900/30 p-8 rounded-2xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-900/50 rounded-xl flex items-center justify-center">
                    <BatteryCharging className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">3. ئېنېرگىيە پايدىلىنىش نىسبىتىنىڭ ئۆسۈشى</h3>
                  <p className="text-gray-300 mb-4">
                    AI مودېلىنى ئۆگىتىش زور مىقداردىكى ئېلېكتر قۇۋۋىتىگە مۇھتاج. ئەمما، كىۋانىت ھېسابلاشنىڭ ئاساسى بىر ۋاقىتتا بىر تەرەپ قىلىش، زۆرۈر بولغان ھېسابلاش مىقدارىنى زور دەرىجىدە تۆۋەنلىتىدۇ.
                  </p>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-bold text-green-300">MIT Energy Initiative</span> نىڭ خىيالىغا ئاساسلانغاندا، كىۋانىت AI نىڭ ئېنېرگىيە سەرفى تەڭشەك كلاسسىك AI ئۆگىنىش جەريانى بىلەن سېلىشتۇرغاندا ئەڭ كۆپ <span className="text-green-400">90%</span> تۆۋەن.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ھازىرقى قوزغىتىلغان تۈرلەر */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            ھازىرقى قوزغىتىلغان تۈرلەر
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-gray-800 to-blue-900/20 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">IBM Quantum × MIT</h3>
              </div>
              <p className="text-gray-400">
                دورا مولېكۇلا لايىھىلىشىدىكى كىۋانىت AI مودېلىنى بىرگە تەرەققىي قىلدۇردى. پەقەت بىر نەچچە سائەت ئىچىدە يېڭى مولېكۇلانىڭ مۇقىملىقىنى پەرەز قىلالايدىغان بولدى.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-800 to-red-900/20 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-900/50 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Google Quantum AI</h3>
              </div>
              <p className="text-gray-400">
                Quantum Neural Network (QNN) نى تەرەققىي قىلدۇرىۋاتىدۇ. AI مودېلىنى كىۋانىت دۆۋىرى ئۆزىدە ئىپادىلەيدۇ، كەڭ تارقالغان نېۋرون تورلىرىدىن ئاشقان ئىپادىلەش كۈچىنى ئەمەلگە ئاشۇرىدۇ.
              </p>
            </div>

            <div className="bg-gradient-to-b from-gray-800 to-green-900/20 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-900/50 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">ياپونىيە تەتقىقاتى</h3>
              </div>
              <p className="text-gray-400">
                پەن-تېخنىكا تەتقىقات مەركىزى ۋە توكيو ئۇنىۋېرستېتى كىۋانىت دۆۋىرىدە تەبىئىي تىل بىر تەرەپ قىلىشنى ئېلىپ بارىدىغان «Quantum NLP (QNLP)» نى سىنايدۇ. كېلەچەكتە تەرجىمە ۋە مەزمۇن يارىتىش AI لىرى كىۋانىت ھېسابلاش بىلەن ئىشلەيدىغان كۈن يېقىن.
              </p>
            </div>
          </div>
        </section>

        {/* قۇبىت AI نىڭ ئۆزگەرتىدىغان «ئەقىل» چۈشەنچىسى */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              كىۋانىت AI نىڭ ئۆزگەرتىدىغان «ئەقىل» چۈشەنچىسى
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ئەگەر كلاسسىك AI «ئىنساننىڭ تەپەككۇرىنى ئوخشىتىدىغان» نەرسە بولسا، قۇبىت AI «ئىنساننىڭ تەپەككۇرى يەتكىلى بولمايدىغان دائىرنى تەكشۈرىدىغان» ئەقىلدۇر.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800/50 to-purple-900/30 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-purple-300">كەڭ تارقالغان AI</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>جاۋابنى سىزىقلىق ئىزدەيدۇ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>ئۆتكەن ئۇسلۇبلارنى قايتا يارىتىدۇ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>ئۇچۇرلارنى بىر تەرەپ قىلىش</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800/50 to-cyan-900/30 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">كىۋانىت AI</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>بىر ۋاقىتتا نۇرغۇن ئېھتىماللىق بوشلۇقىنى تەكشۈرىدۇ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>تۇنۇلمىغان مۇناسىۋەتلەرنى قۇرىدۇ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>ئېھتىماللىقلارنى بىر تەرەپ قىلىش</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ئىدارىچىلار ئۈچۈن QML نىڭ مەنىسى */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-gray-800/50 to-yellow-900/30 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
              ئىدارىچىلار ئۈچۈن QML نىڭ مەنىسى
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">
                  QML ھەلە سىنا قىلىش باسقۇچىدا، ئەمما كېلەچەك 5 يىل ئىچىدە تېز سۈرئەتتە سودا ئىشلىتىلىش ئېھتىماللىقى يۇقىرى.
                </p>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400">
                    <span className="font-bold text-yellow-300">McKinsey</span> نىڭ «Quantum Technology Outlook 2024» دەكلىراتىغا ئاساسلانغاندا، 2030-يىلغا قەدەر كىۋانىت AI بازىرى <span className="text-yellow-400">200 مليارد دوللار</span> كۆلەمگە يېتىدۇ دەپ پەرەز قىلىنماقتا.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-300">يەككە كۆرۈنۈشتە مۇھىم نۇقتا:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span>AI ئىستراتېگىيىسىنى كىۋانىت ماسلىشىش بويىچە لايىھىلەش</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span>كىۋانىت بىلىم سەۋىيىسىنى باشقۇرۇش قاتلىمىغىچە كۆتۈرۈش</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* خاتىمە سۆز */}
        <section className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl"></div>
            
            <div className="relative bg-gradient-to-b from-gray-800/50 to-transparent p-12 rounded-3xl border border-gray-700/50">
              <h2 className="text-4xl font-bold mb-8">
                «AI دىن ئاشقان AI» غا كىرىش دەرىۋازى
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                كىۋانىت ماشىنا ئۆگىنىشى پەقەت تېز AI ئەمەس. بۇ «ئۆگىنىش شەكلى» نى تۈپتىن يېڭىلايدىغان تېخنىكىدۇر.
              </p>
              
              <div className="inline-flex items-center justify-center gap-4 px-6 py-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-full border border-gray-700">
                <span className="text-lg">AI «ئۇچۇر» بىر تەرەپ قىلىدىغان دەۋردىن</span>
                <ArrowRight className="w-6 h-6" />
                <span className="text-lg">QML «ئېھتىماللىق» بىر تەرەپ قىلىدىغان دەۋرگە</span>
              </div>
              
              <p className="text-lg text-gray-400 mt-8">
                ئىنساننىڭ ئەقلى يارىتقان AI، كىۋانىت ئارقىلىق تۇنۇلمىغان تەپەككۇر دائىرىسىنى داۋاملىق كېڭەيتىدۇ.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* پايدىلانغان ئۇچۇرلار */}
      <footer className="border-t border-gray-800 mt-20 pt-12">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8 text-center">پايدىلانغان ئۇچۇرلار</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "McKinsey & Co. Quantum Technology Outlook 2024",
              "Google Quantum AI Lab Report (2025)",
              "IBM Quantum × MIT Collaboration Paper (2025)",
              "پەن-تېخنىكا تەتقىقات مەركىزى قۇبىت تەبىئىي تىل بىر تەرەپ قىلىش تەتقىقاتى دەكلىراتى (2024)",
              "MIT Energy Initiative Quantum Efficiency Report (2025)"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <p className="text-sm text-gray-400">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>© 2025 KeLBiL تەپەككۇر بىلوگى. بارلىق ھوقۇقلار مۇھاپىزەت قىلىنغان.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog11;