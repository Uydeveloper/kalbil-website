// src/components/blog/posts/Blog35.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaAtom, FaEye, FaQuestion, FaLightbulb, FaBook, FaCalendarAlt,
  FaChevronRight, FaGlobe, FaBrain, FaInfinity, FaLockOpen, FaQuoteLeft,
  FaHistory, FaSync, FaExternalLinkAlt
} from 'react-icons/fa';

const Blog35 = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [progress, setProgress] = useState(0);

  const sections = [
    'intro', 'duality', 'uncertainty', 'schrodinger', 'epr', 'interpretations', 'modern'
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-950 text-white p-4 md:p-8"
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
              كۋانت مېخانىكىسى بىلەن پەلسەپە ئوتتۇرىسىدىكى مۇناسىۋەت:
              <br />
              <span className="text-cyan-300">رېئاللىقنىڭ تەبىئىتىنى قايتا تەكشۈرىدىغان ئىلمىي ئىنقىلاب</span>
            </h1>
            <p className="text-xl text-cyan-100 mb-6 italic">
              «ئۇ دىنىي ياكى ئىلھام ئەمەس، پەقەت چۈشەندۈرۈش تالاش-تارتىشى»
            </p>
            <div className="text-cyan-200 flex items-center justify-center gap-2">
              <FaCalendarAlt /> 2025-يىلى 12-ئاينىڭ 17-كۈنى
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
              { id: 'intro', title: 'باشلاش: كۋانت ۋە پەلسەپە' },
              { id: 'duality', title: 'ئىككىلىك ۋە كۆزىتىش مەسىلىسى' },
              { id: 'uncertainty', title: 'ئېنىقسىزلىق پرىنسىپى' },
              { id: 'schrodinger', title: 'شرۆدىنگېرنىڭ مۈشۈكى' },
              { id: 'epr', title: 'EPR پارادوكسى ۋە يەرلىك ئەمەسلىك' },
              { id: 'interpretations', title: 'چۈشەندۈرۈشلەر' },
              { id: 'modern', title: 'زامانىۋى تەسىر' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 p-3 rounded-lg text-left transition ${
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

          {/* باشلاش */}
          <section id="intro" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaHistory className="text-cyan-400" /> باشلاش: كۋانت ۋە پەلسەپە
              </h2>
              <p className="mb-4 leading-relaxed">
                كۋانت مېخانىكىسى 20-ئەسىردىكى ئەڭ چوڭ ئىلمىي ئىنقىلاب، ئەمما ئۇنىڭ پەيدا بولۇشى پەلسەپىگە چوڭقۇر تەسىر كۆرسەتتى.
              </p>
              <p className="mb-4 leading-relaxed">
                كلاسسىك فىزىكا (نيۇتون مېخانىكىسى) دۇنيانى ئېنىق، ئوبيېكتىپ ۋە يەرلىك دەپ قارىدى (يىراق ۋەقەلەرنىڭ دەرھال تەسىرى يوق).
                كۋانت مېخانىكىسى بۇنى تۈپتىن بۇزۇپ، بىزنى ئاساسلىق پەلسەپىۋى سوئاللارنى قايتا ئويلىنىشقا مەجبۇرلايدۇ:
              </p>
              <ul className="list-disc pr-6 space-y-2 mb-4 text-cyan-100">
                <li>رېئاللىق نېمە؟</li>
                <li>كۆزىتىش نېمە؟</li>
                <li>سەۋەب نېمە؟</li>
                <li>ئەركىن ئىرادە نېمە؟</li>
              </ul>
              <div className="bg-cyan-900/30 p-4 rounded-xl border-l-4 border-cyan-500">
                <p className="italic">
                  «بۇ ئىلھاممۇ ئەمەس، دىنمۇ ئەمەس؛ كۋانت مېخانىكىسىنىڭ ئاكادېمىك تەتقىقاتى ئىلمىي ئىسپات بىلەن مۇناسىۋەتلىك.»
                </p>
              </div>
            </div>
          </section>

          {/* 1. ئىككىلىك ۋە كۆزىتىش */}
          <section id="duality" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaEye className="text-cyan-400" /> 1. ئىككىلىك ۋە كۆزىتىش مەسىلىسى: رېئاللىقنىڭ ئوبيېكتىپلىقى بىر خىيالمۇ؟
              </h2>
              <p className="mb-4">
                دولقۇن-زەررىچە قوشلۇقى كۋانت مېخانىكىسىنىڭ ئاساسىي ھادىسىسى.
                يورۇقلۇق ۋە ئېلېكترونلار شارائىتقا ئاساسەن دولقۇن ياكى زەررىچەدەك ھەرىكەت قىلىدۇ.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-xl mb-4 border border-cyan-400/20" dir="ltr">
              <img src="https://cdn.website-editor.net/s/f9b74d27b7304a8daae3f5090ff1fe43/dms3rep/multi/DoubleSlitFeynman.gif?Expires=1768117841&Signature=P2Mfq5~wNBKAVg4HXbAfkAP9tajv802J5mxSOUDqhfAB~SH9an4IGJlm~VgBIPgawnE22Jg8-pDViRnrLKxGyB8MW-xsHziAvAcF8XpYWTMbOfk8S9jz7U8Mu4N6S9P126j5ROA9TGKxCUirjZ5o1vf0VzhId5l7BnEKVDqsXqGfFVyxmbRu2X09BtO7ZH8aAakT-BpPkdvKsssLN7AZkizvPVbyFLmclPb7kXQ3KIMUIrxU7K5fsn4N0Nif36UZEKPaL48HZtoYQ2xmcOnl-p0BLbDYtdPsldiWBvgA8GZjFBGaeVI8~FJPuBk02BiJBKp12FvX~HkursZsrsMx7w__&Key-Pair-Id=K2NXBXLF010TJW" alt="" />
                <p className="text-sm text-cyan-200 italic">[رەسىم: قوش يېرىقلىق تەجرىبىسى – ئارىلىشىش چېتى]</p>
              </div>
              <p className="mb-4">
                مەشھۇر قوش يېرىقلىق تەجرىبىدە، ئارىلىشىش چېتى (دولقۇننىڭ ئىسپاتى) كۆزىتىلمىگەندە پەيدا بولىدۇ،
                ئەمما كۆزىتىلگەندە، ئۇلار زەررىچە سۈپىتىدە بايقىلىدۇ ۋە ئارىلىشىش يوقىلىدۇ.
              </p>
              <div className="bg-purple-900/30 p-4 rounded-xl border-l-4 border-purple-500">
                <p>
                  بۇ كۆزەتكۈچىنىڭ رېئاللىقنى بەلگىلەيدىغانلىقىنى كۆرسىتىپ بېرىدۇ،
                  بۇ «ئوبيېكتىپ رېئاللىق» نىڭ مەۋجۇت ياكى ئەمەسلىكى توغرىسىدىكى پەلسەپىۋى سوئالنى ئوتتۇرىغا قويىدۇ.
                  بۇ <strong>كانتنىڭ «ئۆزىدىكى نەرسە»</strong> نى ئەسلىتىدۇ.
                </p>
              </div>
            </div>
          </section>

          {/* 2. ئېنىقسىزلىق */}
          <section id="uncertainty" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaQuestion className="text-cyan-400" /> 2. ئېنىقسىزلىق پرىنسىپى: ئېنىقسىزلىقنىڭ ئاخىرى
              </h2>
              <p className="mb-4">
                ۋېرنېر ھېيزېنبېرگنىڭ ئېنىقسىزلىق پرىنسىپى (1927) ئورۇن ۋە ھەرىكەتلەندۈرگۈچ كۈچنى
                بىرلا ۋاقىتتا توغرا ئۆلچەشكە بولمايدىغانلىقىنى ئوتتۇرىغا قويىدۇ.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-xl mb-4 border border-cyan-400/20" dir="ltr">
               <img src="https://miro.medium.com/v2/resize:fit:1280/1*ww6y2-OzmWfB5M_igMwuog.gif" alt="" />
                <p className="text-sm text-cyan-200 italic">[رەسىم: ھېيزېنبېرگنىڭ ئېنىقسىزلىق فورمۇلىسى]</p>
              </div>
              <p className="mb-4">
                بۇ ئۆلچەش ئۈسكۈنىلىرىنىڭ چەكلىمىسى ئەمەس، بەلكى تەبىئەتنىڭ ئاساسىي قانۇنى.
              </p>
              <p className="mb-4">
                بۇ <strong>لاپلاسنىڭ ئېنىقسىزلىقىنى</strong> (بارلىق ئۇچۇرلار مەلۇم بولسا كەلگۈسىنى مۇكەممەل مۆلچەرلىگىلى بولىدۇ دېگەن قاراش) بۇزۇپ،
                دۇنيانىڭ تەبىئىي ئېھتىماللىققا ئىگە ئىكەنلىكى ئېھتىماللىقىنى ئاشۇرىدۇ.
              </p>
              <div className="bg-green-900/30 p-4 rounded-xl border-l-4 border-green-500">
                <p>
                  پەلسەپىۋى جەھەتتىن ئېيتقاندا، ئۇ <strong>ئەركىن ئىرادە ئىمكانىيىتىنى ئاچىدۇ</strong>
                  ۋە سەۋەب-نەتىجە قانۇنىنى قايتا كۆزدىن كەچۈرۈشكە مەجبۇرلايدۇ.
                </p>
              </div>
            </div>
          </section>

          {/* 3. شرۆدىنگېر */}
          <section id="schrodinger" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaCat className="text-cyan-400" /> 3. شرۆدىنگېرنىڭ مۈشۈكى: ئۈستۈنكى ئورۇن ۋە رېئاللىقنىڭ يىقىلىشى
              </h2>
              <p className="mb-4">
                ئېرۋىن شرۆدىنگېر بۇ ئوي-پىكىر تەجرىبىسىنى 1935-يىلى ئوتتۇرىغا قويغان.
                مۈشۈك بىلەن كۋانت زەھەرلىك ئۈسكۈنىسىنى قۇتىغا قويۇش كۋانت ئۈستۈنكى ئورۇننى (ھەم تىرىك، ھەم ئۆلۈك) ھاسىل قىلىدۇ.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-xl mb-4 border border-cyan-400/20" dir="ltr">
               <img src="https://miro.medium.com/0*wS4ns96q6gQKQiww.gif" alt="" />
                <p className="text-sm text-cyan-200 italic">[رەسىم: شرۆدىنگېرنىڭ مۈشۈكى — قۇتى ئىچىدە ھەم تىرىك ھەم ئۆلۈك]</p>
              </div>
              <p className="mb-4">
                مۈشۈك يەنە «تىرىك ۋە ئۆلۈكنىڭ ئۈستۈنكى ئورۇنى»غا ئايلىنىدۇ — كۆزىتىلگۈچە.
              </p>
              <div className="bg-orange-900/30 p-4 rounded-xl border-l-4 border-orange-500">
                <p>
                  بۇ <strong>ماكروسكوپ دۇنياسى بىلەن بولغان باغلىنىش</strong> توغرىسىدا سوئاللارنى قوزغىدى،
                  دولقۇن فۇنكسىيەسىنىڭ (كۆزىتىش ئارقىلىق ئېنىقلانغان) يىقىلىشىنىڭ ھەقىقەتەن يۈز بېرىدىغان-بەرمەيدىغانلىقى
                  ۋە <strong>ئاڭنىڭ بۇنىڭغا قاتناشقان-قاتناشمىغانلىقى</strong> توغرىسىدا پەلسەپىۋى مۇنازىرىلەرنى قوزغىدى.
                </p>
              </div>
            </div>
          </section>

          {/* 4. EPR */}
          <section id="epr" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaGlobe className="text-cyan-400" /> 4. EPR پارادوكسى ۋە يەرلىك ئەمەسلىك: ئېينىشتېين بىلەن بورنىڭ ئوتتۇرىسىدىكى مۇناسىۋەت
              </h2>
              <p className="mb-4">
                1935-يىلى ئېلان قىلىنغان EPR ماقالىسىدە، ئېينىشتېين ۋە باشقىلار كۋانت چىرمىشىنى ئىشلىتىپ «كۋانت مېخانىكىسى تولۇق ئەمەس» دەپ قارىغان.
              </p>
              <p className="mb-4">
                ئۇلار يىراق زەررىچىلەر ئوتتۇرىسىدىكى دەرھال باغلىنىشنىڭ «يىراقتىكى ئەرۋاھ ھەرىكىتى» ۋە رېئاللىققا ئۇيغۇن ئەمەسلىكىنى ئوتتۇرىغا قويغان.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-xl mb-4 border border-cyan-400/20" dir="ltr">
               <img src="https://i.ytimg.com/vi/2q-YRLsQWxE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCssOgdm3LmsOEJ-CZ454UxJsd8Tw" alt="" />
                <p className="text-sm text-cyan-200 italic">[رەسىم: كۋانت چىرمىشى — ئاجىز بىلەن كۆك زەررىچەلەر]</p>
              </div>
              <p className="mb-4">
                نىلس بور بۇنى رەت قىلىپ، كۋانت دۇنياسىنىڭ كلاسسىك «رېئاللىق» ئۇقۇمىدىن ھالقىپ كېتىدىغانلىقىنى ئوتتۇرىغا قويغان.
              </p>
              <p className="mb-4">
                بېل تەڭسىزلىك تەجرىبىلىرى (1980-يىللاردىن باشلاپ) يەرلىك ئەمەسلىكنى جەزملەشتۈرۈپ،
                ئېينىشتېيننىڭ <strong>يەرلىك رېئالىزمىغا رەددىيە بەردى</strong>.
              </p>
            </div>
          </section>

          {/* 5. چۈشەندۈرۈشلەر */}
          <section id="interpretations" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaBrain className="text-cyan-400" /> 5. ئاساسلىق چۈشەندۈرۈشلەر ۋە پەلسەپىۋى تەسىرلەر
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-900/30 p-4 rounded-xl">
                  <h3 className="font-bold flex items-center gap-2">
                    <FaLockOpen className="text-blue-400" /> كوپېنھاگېن چۈشەندۈرۈشى (بور، ھېيزېنبېرگ)
                  </h3>
                  <p>كۆزىتىش رېئاللىقنى يارىتىدۇ. پراگماتىك، ئەمما كۆزەتكۈچىنىڭ رولىغا قارىتا پەلسەپىۋى جەھەتتىن ئىككى خىل قاراش بار.</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-xl">
                  <h3 className="font-bold flex items-center gap-2">
                    <FaInfinity className="text-purple-400" /> كۆپ دۇنيا چۈشەندۈرۈشى (ئېۋېرېت)
                  </h3>
                  <p>بارلىق ئېھتىماللىقلار پاراللېل ئالەملەردە ئەمەلگە ئاشىدۇ. ئېنىقسىز، ئەمما چەكسىز كۆپ ئالەمنىڭ ئېھتىماللىقىنى ئېتىراپ قىلىدۇ.</p>
                </div>
                <div className="bg-green-900/30 p-4 rounded-xl">
                  <h3 className="font-bold flex items-center gap-2">
                    <FaSync className="text-green-400" /> بوم چۈشەندۈرۈشى
                  </h3>
                  <p>يوشۇرۇن ئۆزگەرگۈچى مىقدارغا ئىگە ئېنىقسىز ۋە يەرلىك ئەمەس.</p>
                </div>
                <div className="bg-red-900/30 p-4 rounded-xl">
                  <h3 className="font-bold">باشقىلار</h3>
                  <p>ئاڭ يىمىرىلىشنى كەلتۈرۈپ چىقىرىدۇ (ۋون نېيمان، ۋىگنېر قاتارلىقلار).</p>
                </div>
              </div>
              <div className="mt-6 bg-cyan-900/30 p-4 rounded-xl border-l-4 border-cyan-500">
                <p>
                  بۇ چۈشەندۈرۈشلەر <strong>رېئالىزم</strong> (مۇستەقىل رېئاللىقنىڭ مەۋجۇتلۇقى) بىلەن
                  رېئاللىققا قارشى تۇرۇش، ئېنىقسىزلىق بىلەن ئېنىقسىزلىق ئوتتۇرىسىدىكى
                  <strong>پەلسەپىۋى توقۇنۇشلارنى ئۆز ئىچىگە ئالىدۇ</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* 6. زامانىۋى تەسىر */}
          <section id="modern" className="scroll-mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaLightbulb className="text-cyan-400" /> 6. زامانىۋى تەسىر
              </h2>
              <p className="mb-4">
                كۋانت مېخانىكىسى ئونتولوگىيە، بىلىش نەزەرىيەسى، ئەقىل پەلسەپىسى (ئاڭنىڭ رولى)،
                ھەتتا ئەركىن ئىرادە ۋە ئىلاھىيەتكە (يوشۇرۇن ئۆزگەرگۈچى مىقدار = خۇدا؟) تەسىر كۆرسەتتى.
              </p>
              <p className="mb-4">
                ئۇ يەنە <strong>مودېرنىزمدىن كېيىنكى پەلسەپە</strong> ۋە <strong>ئۇچۇر پەلسەپىسىگىمۇ</strong> تەسىر كۆرسەتتى.
              </p>
              <div className="bg-gradient-to-r from-cyan-600 to-purple-700 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <FaQuoteLeft className="text-cyan-200 opacity-70 mt-1" />
                  <p className="text-lg">
                    كۋانت مېخانىكىسى پەقەت فىزىكىلىق نەزەرىيە ئەمەس، بەلكى ئىنسانىيەتنىڭ «رېئاللىقنى» قانداق قوبۇل قىلىشىنىڭ چەكلىمىلىرىنى كۆرسىتىپ بېرىدىغان پەلسەپىۋى بۇرۇلۇش نۇقتىسى.
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <p className="text-sm opacity-90">
                    ھەتتا ھازىرمۇ، 100 يىلدىن كېيىنمۇ، چۈشەندۈرۈش توغرىسىدىكى مۇنازىرىلەر داۋاملىشىۋاتىدۇ،
                    بۇ ئەينى ۋاقىتتىكى ئورتاق چۈشەنچىگە گۇمان پەيدا قىلىدۇ.
                  </p>
                  <p className="mt-2 font-semibold">
                    ئەگەر سىزنى قىزىقتۇرىدىغان چۈشەندۈرۈش تاپسىڭىز، تېخىمۇ چوڭقۇر ئىزدىنىڭ!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center py-8 text-cyan-300/80 text-sm border-t border-cyan-500/20 mt-12">
          <p>© 2025 كۋانت مېخانىكىسى ۋە پەلسەپە تەھلىلى</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-cyan-400 hover:text-white transition"><FaExternalLinkAlt /></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

// FaCat نى قوشۇش ئۈچۈن
const FaCat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
    <path fill="currentColor" d="M256 96C185.31 96 128 153.31 128 224c0 19.07 4.21 37.22 11.94 53.63a23.91 23.91 0 0 1 2.17 18.3L128 416v64h256v-64l-14.1-120.07a23.91 23.91 0 0 1 2.17-18.3C379.79 261.22 384 243.07 384 224 384 153.31 326.69 96 256 96zm0 160c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64z"/>
  </svg>
);

export default Blog35;