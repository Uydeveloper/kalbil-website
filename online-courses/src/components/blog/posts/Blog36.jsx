// src/components/blog/posts/Blog36.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaAtom, FaQuestion, FaHistory, FaUsers, FaSync, FaGlobe,
  FaBook, FaCalendarAlt, FaChartLine, FaLightbulb,
  FaLock, FaKey, FaShieldAlt, FaBrain, FaRocket, FaInfinity,
  FaExternalLinkAlt, FaQuoteLeft, FaHandsHelping
} from 'react-icons/fa';

const Blog36 = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [progress, setProgress] = useState(0);

  const sections = [
    'intro', 'history', 'structure', 'bohr', 'bell', 'applications', 'conclusion'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            const index = sections.indexOf(entry.target.id);
            setProgress(Math.round(((index + 1) / sections.length) * 100));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-950 text-white p-4 md:p-8"
      style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* باشلىق */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-cyan-500/30">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full">
                <FaAtom className="text-white text-5xl" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Einstein–Podolsky–Rosen (EPR) پارادوكسى:
              <br />
              <span className="text-cyan-300">كىۋانت دۇنياسىنىڭ غەيرىي تەبىئىتىنى ئاشكارىلايدىغان پەلسەپىۋى ئىنقىلاب</span>
            </h1>
            <p className="text-xl text-cyan-100 mb-6 italic">
              «خۇدا زەر تاشلىمايدۇ!» — ئەمما كىۋانت دۇنياسى تاسادىپىيەتلىكتىن تارتىلمايدۇ.
            </p>
            <div className="text-cyan-200 flex items-center justify-center gap-2">
              <FaCalendarAlt /> 2025-يىلى 12-ئاينىڭ 23-كۈنى
            </div>
          </div>
        </motion.header>

        {/* مۇندەرىجە */}
        <nav className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-12 border border-cyan-500/20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaBook className="text-cyan-400" /> مۇندەرىجە
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {[
              { id: 'intro', title: 'دەسلەپكى سەۋىيە: EPR دېگەن نېمە؟' },
              { id: 'history', title: 'تارىخىي ئارقا كۆرۈنۈش' },
              { id: 'structure', title: 'ئوتتۇرا سەۋىيە: ئىلمىي قۇرۇلمىسى' },
              { id: 'bohr', title: 'كوبېنھاگېن چۈشەندۈرۈشى' },
              { id: 'bell', title: 'يۇقىرى سەۋىيە: بېل تىيورېمىسى' },
              { id: 'applications', title: 'ئامالىي ئىشلىتىش تەجرىبىسى' },
              { id: 'conclusion', title: 'خۇلاسە ۋە فەلەسەپەلىك ئەھمىيىتى' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 p-3 rounded-lg text-right transition ${
                  activeSection === item.id
                    ? 'bg-cyan-600/30 text-cyan-100'
                    : 'hover:bg-white/10'
                }`}
              >
                <FaChevronRight className="text-cyan-400" />
                {item.title}
              </button>
            ))}
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="text-sm text-cyan-300 mt-2 text-center">
            ئوقۇش ئىلگىرىلەشى: {progress}%
          </div>
        </nav>

        {/* مەزمۇن */}
        <main className="space-y-16 mb-20">

          {/* 1. دەسلەپكى سەۋىيە */}
          <section id="intro" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaQuestion className="text-cyan-400" /> 1. دەسلەپكى سەۋىيە: EPR دېگەن نېمە؟
              </h2>
              <h3 className="text-xl font-semibold mb-3">1.1 قىسقىچە ئېنىقلىما</h3>
              <p className="mb-4">
                EPR Paradox — كىۋانت مېخانىكىسىدىكى ئەڭ مۇھىم ۋە ئەڭ تالاش-تارتىشلىق مەسىلىلەرنىڭ بىرى.
                ئۇ «كىۋانت فىزىكىسى تولۇق چۈشەندۈرۈش بېرەلەمدۇ؟» دېگەن سوئالنى ئوتتۇرىغا قويىدۇ.
              </p>
              <p className="mb-4">
                ئاددىيچە ئېيتساق:
              </p>
              <div className="bg-blue-900/30 p-4 rounded-xl mb-4">
                <p>
                  ئىككى كىۋانت زەررىچە بىر-بىرىدىن قانچە يىراق بولسىمۇ،
                  بىرىنىڭ ھالىتىنى ئۆلچەش بىلەن يەنە بىرى دەرھال ئۆزگىرىدۇ.
                </p>
              </div>
              <p className="mb-4">
                بۇ ھادىسە ئادەمگە:
              </p>
              <ul className="list-disc pr-6 space-y-1 mb-4">
                <li>«ئۇلار ئارىسىدا نۇر سۈرئىتىدىن تېز ئۇچۇر بارمۇ؟»</li>
                <li>«ياكى زەررىچىلەر ئالدىنلا پىلانلانغانمۇ؟»</li>
              </ul>
              <p>
                دېگەن شۈبھىنى تۇغدۇرىدۇ. مانا بۇ — <strong>EPR پارادوكس</strong>.
              </p>
              <h3 className="text-xl font-semibold mb-3 mt-6">1.2 ئاددىي تۇرمۇش مىسالى</h3>
              <p className="mb-2">
                ئىككى دانە قاپچۇق بار، ئىچىدە:
              </p>
              <ul className="list-disc pr-6 mb-2">
                <li>بىرىدە ئاق توپ</li>
                <li>بىرىدە قارا توپ</li>
              </ul>
              <p className="mb-4">
                سىز بىر قاپچۇقنى ئېچىپ ئاق توپنى كۆردىڭىز.
                ئۇ ۋاقىتتا، يىراق يەردىكى قاپچۇقنىڭ ئىچىدىكى توپنى «دەرھال قارا» دەپ بىلىسىز.
              </p>
              <div className="bg-purple-900/30 p-4 rounded-xl">
                <p>
                  كىۋانت دۇنياسىدا بولسا: <br />
                  <strong>توپ ئاق ياكى قارا ئەمەس — ئۆلچەشكە قەدەر ھەر ئىككىسى بىرلا ۋاقىتتا بولالايدۇ! 😮</strong>
                </p>
              </div>
            </div>
            <div className="mt-4 bg-gray-800/50 p-4 rounded-xl border border-cyan-400/20" dir="ltr">
            <img src="https://i0.wp.com/shasthrasnehi.com/wp-content/uploads/2020/05/EPR-2.jpg?fit=1200%2C628&ssl=1&resize=350%2C200" alt="" />
              <p className="text-sm text-cyan-200 italic">[رەسىم: ئىككى چىگىلىشىپ كەتكەن زەررىچەلەر — ئىككىلا تەرەپتىن يىراق، بىراق ھالىتى بىرلا ۋاقىتتا بەلگىلەنگەن]</p>
            </div>
          </section>

          {/* 2. تارىخىي ئارقا كۆرۈنۈش */}
          <section id="history" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaHistory className="text-cyan-400" /> 2. تارىخىي ئارقا كۆرۈنۈش
              </h2>
              <h3 className="text-xl font-semibold mb-3">2.1 قاچان ۋە كىملەر تەرىپىدىن؟</h3>
              <p className="mb-4">
                <strong>1935-يىلى</strong>، ئۈچ داڭلىق فىزىك بىرلىكتە بىر ماقالە يازدى:
              </p>
              <ul className="list-disc pr-6 mb-4">
                <li>Albert Einstein</li>
                <li>Boris Podolsky</li>
                <li>Nathan Rosen</li>
              </ul>
              <p className="mb-4">
                شۇنىڭ ئۈچۈن: <strong>Einstein – Podolsky – Rosen → EPR</strong>
              </p>
              <h3 className="text-xl font-semibold mb-3">2.2 Einstein نىڭ نارازىلىقى</h3>
              <div className="bg-red-900/30 p-4 rounded-xl mb-4 border-l-4 border-red-500">
                <p className="font-bold">«خۇدا زەر تاشلىمايدۇ!»</p>
                <p>(= تەبىئەت تاسادىپىي ئەمەس)</p>
              </div>
              <p className="mb-4">
                Einstein كىۋانت مېخانىكىسىغا تولۇق ئىشەنمەيتتى.
                ئۇ كىۋانت نەزەرىيەسىنى:
              </p>
              <ul className="list-disc pr-6">
                <li>بەك تاسادىپىي</li>
                <li>بەك غەيرىي تەبىئىي</li>
                <li>بەك يەرلىك ئەمەس (non-local)</li>
              </ul>
              <p className="mt-2">
                دەپ قاراپ، EPR پارادوكس ئارقىلىق كىۋانت مېخانىكىسى <strong>تولۇق ئەمەس</strong> دەپ كۆرسەتمەكچى بولغان.
              </p>
            </div>
            <div className="mt-4 bg-gray-800/50 p-4 rounded-xl border border-cyan-400/20" dir="ltr">
              <p className="text-sm text-cyan-200 italic">[رەسىم: Einstein, Podolsky, Rosen نىڭ 1935-يىللىق ماقالىسى]</p>
            </div>
          </section>

          {/* 3. ئوتتۇرا سەۋىيە */}
          <section id="structure" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaSync className="text-cyan-400" /> 3. ئوتتۇرا سەۋىيە: EPR نىڭ ئىلمىي قۇرۇلمىسى
              </h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Entanglement (چىگىلىشىش)</h3>
              <p className="mb-4">
                EPR نىڭ يۈرەك نۇقتىسى: <strong>Quantum Entanglement (كىۋانت چىگىلىشىش)</strong>
              </p>
              <ul className="list-disc pr-6 mb-4">
                <li>ئىككى زەررىچە — بىرلا سىستېما</li>
                <li>ئايرىم ئۆلچەپ بولمايدۇ</li>
                <li>بىرنى ئۆلچەش → يەنە بىرى دەرھال بەلگىلەنگەن بولىدۇ</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">3.2 سپىن مىسالى (Spin Example)</h3>
              <p className="mb-2">
                ئىككى ئېلېكترون بار:
              </p>
              <ul className="list-disc pr-6 mb-4">
                <li>جەمئىي سپىن = 0</li>
                <li>بىرى ↑ بولسا، يەنە بىرى چوقۇم ↓</li>
              </ul>
              <p className="mb-4">
                ئەمما: <strong>ئۆلچەشكە قەدەر ↑ ياكى ↓ ئېنىق ئەمەس!</strong>
              </p>
              <h3 className="text-xl font-semibold mb-3">3.3 EPR نىڭ دەلىلى</h3>
              <p>
                EPR دىگەن:
              </p>
              <div className="bg-green-900/30 p-4 rounded-xl mt-2">
                <p>
                  «ئەگەر بىر نەرسىنى ئۆلچەمەي تۇرۇپ ئالدىن بىلگىلى بولسا → ئۇ ھەقىقىي بار.<br />
                  بىراق كىۋانت نەزەرىيەسى بۇنى چۈشەندۈرەلمەيدۇ.<br />
                  دىمەك، كىۋانت مېخانىكىسى <strong>تولۇق ئەمەس</strong>.»
                </p>
              </div>
            </div>
            <div className="mt-4 bg-gray-800/50 p-4 rounded-xl border border-cyan-400/20" dir="ltr">
              <p className="text-sm text-cyan-200 italic">[رەسىم: سپىن چىگىلىشىش — ↑↓ ياكى ↓↑ ئارىلىق دەلىللەنمەيدىغان ھالەت]</p>
            </div>
          </section>

          {/* 4. Bohr جاۋابى */}
          <section id="bohr" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaBrain className="text-cyan-400" /> 4. Bohr نىڭ جاۋابى ۋە كىۋانت نىڭ غەلبىسى
              </h2>
              <h3 className="text-xl font-semibold mb-3">4.1 Niels Bohr نىڭ ئىنكاسى</h3>
              <p className="mb-4">
                Niels Bohr (كىۋانت مېخانىكىسىنىڭ ئاساسچىسى):
              </p>
              <div className="bg-cyan-900/30 p-4 rounded-xl mb-4">
                <p>«ئۆلچەشنىڭ ئۆزى سىستېمىنى بەلگىلەيدۇ»</p>
              </div>
              <p className="mb-4">
                ئۇ «زەررىچە ئالدىنلا قىممەتلەنگەن» دېگەن قاراشنى رەت قىلدى.
                <strong>كىۋانت دۇنياسى كلاسسىك لوگىكا بىلەن چۈشەندۈرۈلمەيدۇ</strong> دېدى.
              </p>
              <h3 className="text-xl font-semibold mb-3">4.2 Copenhagen Interpretation</h3>
              <p>
                Bohr نىڭ قارىشى:
              </p>
              <ul className="list-disc pr-6 mt-2">
                <li>رېئاللىق = ئۆلچەش نەتىجىسى</li>
                <li>ئۆلچەشتىن بۇرۇن «ھالەت» يوق</li>
                <li>سوئالنى ئۆزگەرتىش → جاۋابنى ئۆزگەرتىدۇ</li>
              </ul>
            </div>
            <div className="mt-4 bg-gray-800/50 p-4 rounded-xl border border-cyan-400/20" dir="ltr">
              <p className="text-sm text-cyan-200 italic">[رەسىم: Bohr يېنىدە كوبېنھاگېن تەلىۋىشى]</p>
            </div>
          </section>

          {/* 5. Bell Theorem */}
          <section id="bell" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaChartLine className="text-cyan-400" /> 5. Bell Theorem — EPR نى سىناق قىلىش (يۇقىرى سەۋىيە)
              </h2>
              <h3 className="text-xl font-semibold mb-3">5.1 John Bell (1964)</h3>
              <p className="mb-4">
                John Bell:
              </p>
              <div className="bg-yellow-900/30 p-4 rounded-xl mb-4">
                <p>«بۇ تالاش-تارتىشنى تەجىربە بىلەن ھەل قىلىشقا بولىدۇ»</p>
              </div>
              <p className="mb-4">
                ئۇ <strong>Bell Inequality</strong> نى ئوتتۇرىغا قويدى.
              </p>
              <h3 className="text-xl font-semibold mb-3">5.2 تەجىربە نەتىجىسى</h3>
              <p className="mb-2">
                <strong>1970–1980 يىللىرى:</strong>
              </p>
              <ul className="list-disc pr-6 mb-4">
                <li>Alain Aspect (فرانسىيە)</li>
                <li>نۇرغۇن تەجىربىلەر</li>
              </ul>
              <div className="bg-green-900/30 p-4 rounded-xl mb-4">
                <p><strong>نەتىجە:</strong> كىۋانت مېخانىكىسى توغرا، EPR نىڭ hidden variable پىكرى خاتا.</p>
              </div>
              <h3 className="text-xl font-semibold mb-3">5.3 نېمە ئىسپاتلاندى؟</h3>
              <ul className="list-disc pr-6">
                <li>تەبىئەت <strong>Non-local</strong></li>
                <li>ئۇچۇر نۇر سۈرئىتىدىن تېز ئەمەس، ئەمما <strong>كىۋانت باغلىنىش بار</strong></li>
                <li>Einstein نىڭ «spooky action at a distance» <strong>ھەقىقەت</strong></li>
              </ul>
            </div>
            <div className="mt-4 bg-gray-800/50 p-4 rounded-xl border border-cyan-400/20" dir="ltr">
              <p className="text-sm text-cyan-200 italic">[رەسىم: Bell تەڭسىزلىكى تەجرىبىسى — Aspect غا سىنائىش ئۈسكۈنىسى]</p>
            </div>
          </section>

          {/* 6. ئامالىي ئىشلىتىش */}
          <section id="applications" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaRocket className="text-cyan-400" /> 6. EPR نى نىمىگە قانداق ئىشلىتىمىز؟
              </h2>
              <h3 className="text-xl font-semibold mb-3">6.1 Quantum Computing</h3>
              <p className="mb-2">
                Qubit لار entanglement ئارقىلىق كۈچلۈك ھېسابلاش قىلىدۇ.
              </p>
              <p className="text-sm text-cyan-200">Google, IBM, China Quantum Lab</p>
              <h3 className="text-xl font-semibold mb-3 mt-4">6.2 Quantum Communication</h3>
              <ul className="list-disc pr-6 mb-2">
                <li>Quantum Teleportation</li>
                <li>Quantum Internet</li>
                <li>Quantum Key Distribution (QKD)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3 mt-4">6.3 Quantum Cryptography</h3>
              <div className="bg-purple-900/30 p-4 rounded-xl">
                <p>
                  <strong>جاسۇسلۇققا قارشى</strong> — دۆلەت دەرىجىلىك بىخەتەر ئالاقە.<br />
                  بانكا، ھەربىي سىستېما قاتارلىقلاردا ئىشلىتىلىدۇ.
                </p>
              </div>
            </div>
            <div className="mt-4 bg-gray-800/50 p-4 rounded-xl border border-cyan-400/20" dir="ltr">
              <p className="text-sm text-cyan-200 italic">[رەسىم: كىۋانت ئالاقە تورى — چىگىلىشىش ئارقىلىق بىخەتەر سۇپىلەر]</p>
            </div>
          </section>

          {/* 7. خۇلاسە */}
          <section id="conclusion" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaInfinity className="text-cyan-400" /> 7. خۇلاسە ۋە فەلەسەپەلىك ئەھمىيىتى
              </h2>
              <h3 className="text-xl font-semibold mb-3">7.1 EPR نىڭ ئەڭ چوڭ ئەھمىيىتى</h3>
              <p className="mb-4">
                EPR:
              </p>
              <ul className="list-disc pr-6 mb-4">
                <li>كىۋانت دۇنياسىنىڭ قانۇنىنى ئېچىپ بەردى</li>
                <li>رېئاللىق، بىلىم، ئۆلچەش توغرىسىدىكى قاراشنى ئۆزگەرتتى</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">7.2 ئادەم ئەقلىگە سالغان سوئاللار</h3>
              <ul className="list-disc pr-6 mb-4">
                <li>رېئاللىق نېمە؟</li>
                <li>بىلىم بىزدىن مۇستەقىلمۇ؟</li>
                <li>تەبىئەت تاسادىپىيەمۇ؟</li>
              </ul>
              <div className="bg-gradient-to-r from-cyan-600 to-purple-700 p-6 rounded-xl mt-6">
                <div className="flex items-start gap-3">
                  <FaQuoteLeft className="text-cyan-200 opacity-70 mt-1" />
                  <p className="text-lg">
                    <strong>EPR Paradox</strong> —
                    كىۋانت دۇنياسىنىڭ بىز ئويلىغاندىنمۇ بەك چوڭ، بەك غەيرىي، بەك قىزىقارلىق ئىكەنلىكىنى كۆرسەتكەن تارىخىي بۇرۇلۇش نۇقتىسى.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-gray-800/50 p-4 rounded-xl border border-cyan-400/20" dir="ltr">
              <p className="text-sm text-cyan-200 italic">[رەسىم: كىۋانت دۇنياسىنىڭ بىرلەشمىگەن رېئاللىقى — ئىككى دۇنيا بىرلا قەدەمدە]</p>
            </div>
          </section>
        </main>

        <footer className="text-center py-8 text-cyan-300/80 text-sm border-t border-cyan-500/20 mt-12">
          <p>© 2025 EPR Paradox ۋە كىۋانت مېخانىكىسىنىڭ فەلەسەپەلىك ئەھمىيىتى</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://plato.stanford.edu/entries/qt-entangle/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition">
              <FaExternalLinkAlt />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

// FaChevronRight نى قوشۇش
const FaChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

export default Blog36;