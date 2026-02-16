// Blog88.jsx
import React, { useState, useEffect } from 'react';

const Blog88 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechInstance, setSpeechInstance] = useState(null);

  // ئاۋازلىق ئوقۇش فۇنكىتسىيىسى
  const speakText = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = document.querySelector('.uyghur-content')?.innerText || '';
    if (!text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ug'; // Uyghur tilini تەگلىك قىلىشقا تىرىشىمىز، ئەگەر قوللىمايدىغان بولسا en ياكى default ئىشلىتىلىدۇ
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setSpeechInstance(utterance);
  };

  // كومپونېنت چىقىرىۋېتىلغاندا ئاۋازنى توختىتىش
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @font-face {
          font-family: 'UKIJ Tuz';
          src: url('https://cdn.jsdelivr.net/gh/alphabetum/ukij-fonts@master/fonts/UKIJ-Tuz.ttf') format('truetype');
        }
        .uyghur-text {
          font-family: 'UKIJ Tuz', 'Microsoft Uighur', 'UKIJ Nasq', sans-serif;
          direction: rtl;
          text-align: right;
          font-size: 2.25rem;
          line-height: 1.8;
        }
        .heading {
          font-family: 'UKIJ Tuz', 'Microsoft Uighur', 'UKIJ Nasq', serif;
          direction: rtl;
          text-align: right;
        }
        .english-term {
          font-family: 'Inter', sans-serif;
          direction: ltr;
          text-align: left;
          display: inline-block;
          margin: 0 2px;
          color: #1e40af;
          font-weight: 600;
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* باش رەسىم */}
        <div className="relative h-64 w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxU-_O0ap6MagTU3aEVkKTpDCSKdIGyMjgQg&s"
            alt="ھاۋكىڭ رادىئاتسىيەسى - Hawking Radiation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="heading text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
              ھاۋكىڭ رادىئاتسىيەسىنىڭ فىزىكىسى توغرىسىدىكى كۆپ ئۇچرايدىغان خاتا قاراشلار
            </h1>
          </div>
        </div>

        {/* مەزمۇن قىسمى */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="heading text-gray-600 text-sm">
              KeLBiL • 2025-يىلى 8-ئاينىڭ 31-كۈنى
            </div>
            <button
              onClick={speakText}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isSpeaking
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isSpeaking ? 'توختا' : 'ئاۋازلىق ئوقۇ'}
            </button>
          </div>

          <div className="uyghur-content uyghur-text text-gray-800 space-y-6">
            <p>
              كلاسسىك ئومۇمىي نىسپىيلىك نەزەرىيىسىدە، قارا ئۆڭكۈرلەر — زامان-ماكاندىكى قارا ئۆڭكۈرلەر — كۈچلۈك تارتىش كۈچى سەۋەبىدىن سۈمۈرگەن نەرسىلىرىنى تارقىتىشىنىڭ ئالدىنى ئالىدۇ. قانداقلا بولمىسۇن،{' '}
              <span className="english-term">Quantum effect</span> (كۋانت تەسىرى) قوشۇلغاندا، دوكتور{' '}
              <span className="english-term">Stephen Hawking</span> (ھاۋكىڭ)نىڭ پەرەز قىلغىنىدەك، قارا ئۆڭكۈرلەرنىڭ{' '}
              <span className="english-term">thermal radiation</span> (ئىسسىقلىق رادىئاتسىيەسى)نى تارقىتىشىغا يول قويۇلىدۇ. بۇ رادىئاتسىيەنىڭ تېمپېراتۇرىسى ئاسترونومىيەلىك چوڭلۇقتىكى قارا ئۆڭكۈرلەر ئۈچۈن بەك تۆۋەن بولغاچقا، ھازىرقى كۆزىتىش ۋە تەجرىبىلەر ھاۋكىڭ رادىئاتسىيەسىنى تارقىتىۋاتقاندا پارغا ئايلىنىۋاتقان قارا ئۆڭكۈرلەرنىڭ مەۋجۇتلۇقىنى جەزملەشتۈرمىدى. قانداقلا بولمىسۇن، نۇرغۇن تەتقىقاتچىلار بۇ پارغا ئايلىنىش جەريانىنىڭ مەۋجۇتلۇقىغا ئىشىنىدۇ.
            </p>

            <p>
              ھاۋكىڭ رادىئاتسىيەسىنى تارقىتىدىغان قارا ئۆڭكۈرلەرگە كەلسەك، دوكتور ھاۋكىڭ ۋە باشقا نۇرغۇن تەتقىقاتچىلارنىڭ ئومۇمىي چۈشەندۈرۈشلىرى كەڭ تارقالغان. قانداقلا بولمىسۇن، ھازىرقى نۇقتىدىن قارىغاندا، ھاۋكىڭ رادىئاتسىيەسىنىڭ تارقىلىشى توغرا بولسىمۇ، ھازىر چۈشەندۈرۈشنىڭ ئۆزى خاتا بولغان نۇرغۇن ئەھۋاللار بار. بولۇپمۇ، نۇرغۇن ئومۇمىي مەقسەتلىك كىتابلاردا ھاۋكىڭ رادىئاتسىيەسى ۋە ئۇنىڭ چىرمىشىپ كەتكەن <span className="english-term">purification partner</span> (تازىلاش ھەمراھى)نى ئېنىقلاشقا مۇناسىۋەتلىك ئاساسەن خاتا چۈشەندۈرۈشلەر بار، بۇ <span className="english-term">relativistic quantum information</span> (نىسپىيلىك كۋانت ئۇچۇرى)نى تەتقىق قىلىشتا مۇھىم ئەھمىيەتكە ئىگە. بۈگۈن بۇنىڭغا نەزەر سالايلى.
            </p>

            {/* 1-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://www.astronomy.com/wp-content/uploads/2025/04/Hawking-Radiation.png"
                alt="1-رەسىم: ھاۋكىڭ رادىئاتسىيەسى ئۇپۇقتىن چىقىدۇ دېگەن خاتا تەسۋىر"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">1-رەسىم</p>
            </div>

            <p>
              ئالدى بىلەن، ئادەتتىكى دەرسلىكلەردە خاۋكىڭ رادىئاتسىيەسى قىسقىچە چۈشەندۈرۈلگەندە، بەزىدە يۇقىرىدىكى 1-رەسىمدە كۆرسىتىلگەندەك، رادىئاتسىيە ۋەقە ئۇپۇقىدىن چىقىدۇ دېيىلىدۇ.
            </p>

            <p>
              ئەمەلىيەتتە، خاۋكىڭ رادىئاتسىيەسى ئۇپۇقنىڭ ئۈستىدىن بىۋاسىتە چىقمايدۇ. بەلكى، تۆۋەندىكى 2-رەسىمدە كۆرسىتىلگەندەك، خاۋكىڭ رادىئاتسىيەسى ئۇپۇقنىڭ سىرتىدا، رادىئۇسنىڭ بىر قانچە ھەسسىسى ھاسىل بولىدۇ. شۇنىڭغا ئاساسەن، ئوخشاش بىر ئورۇندا <span className="english-term">negative energy particle flow</span> (مەنپىي ئېنېرگىيە زەررىچىلىرىنىڭ ئېقىمى) ھاسىل بولۇپ، ئېنېرگىيەنىڭ ساقلىنىش قانۇنىنى كاپالەتلەندۈرىدۇ.
            </p>

            {/* 2-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://miro.medium.com/1*s6qbGTpWfqP5BdtQmKqZ8g.gif"
                alt="2-رەسىم: ھاۋكىڭ رادىئاتسىيەسى ئۇپۇقتىن سىرتتا ھاسىل بولىدۇ"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">2-رەسىم</p>
            </div>

            <p>
              ئادەتتىكى دەرسلىكلەردە، 3-رەسىمدە كۆرسىتىلگەندەك، بەزىدە بۇ خاۋكىڭ رادىئاتسىيە زەررىچىلىرى ۋە مەنپىي ئېنېرگىيە زەررىچىلىرى <span className="english-term">quantum entanglement</span> (كۋانت چىرمىشى) بىلەن چىرمىشىپ، <span className="english-term">pure state</span> (يەككە ساپ ھالەت) ھاسىل قىلىدۇ دېيىلىدۇ. بۇ خاتا چۈشىنىش، ئەمما بۇنداق ئويلىنىشقا سەۋەب بار.
            </p>

            {/* 3-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://cdn.dribbble.com/userupload/22948793/file/original-7979b524d9cd9eda6ed6b999aa1b9f3f.gif"
                alt="3-رەسىم: فېينمان دىئاگراممىسىدا زەررىچىلەرنىڭ يارىتىلىشى"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">3-رەسىم</p>
            </div>

            <p>
              كۋانت ئېففېكتى كۋانت تەۋرىنىشى سەۋەبىدىن ۋاكۇئۇمدا <span className="english-term">virtual particle loops</span> (مەۋھۇم زەررىچە ھالقىلىرى)نى ھاسىل قىلىدۇ. ئېلېمېنتار زەررىچە رېئاكسىيەلىرىنى تەسۋىرلەيدىغان <span className="english-term">Feynman diagram</span> (فېينمان دىئاگراممىسى)دا، بۇ 3-رەسىمنىڭ ئوڭ تەرىپىدە كۆرسىتىلگەندەك تەسۋىرلەنگەن. بۇ دىئاگرامما ئىككى زەررىچىنىڭ يوقلۇقتىن يارىتىلىپ، ئاندىن يەنە يوقىتىلغانلىقىنى كۆرسىتىدۇ. چۈنكى بۇ ئىككى زەررىچە سىرتقى تارتىش كۈچى مەيدانىنىڭ تەسىرىدە ھاۋادىن پەيدا بولىدۇ، شۇڭا ئۇلارنىڭ چىرمىشىپ كەتكەن، ساپ ھالەتتە بولۇشى كېرەكلىكىنى سېزىمچانلىق بىلەن پەرەز قىلىشقا بولىدۇ. قانداقلا بولمىسۇن، 4-رەسىمدە كۆرسىتىلگەندەك، ئىككى زەررىچە ئارىسىدا كۋانت چىرمىشى يوق.
            </p>

            {/* 4-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://ichef.bbci.co.uk/images/ic/480xn/p00y0hsr.jpg.webp"
                alt="4-رەسىم: زەررىچىلەر ئارىسىدا چىرمىشىش يوق"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">4-رەسىم</p>
            </div>

            <p>
              خاۋكىڭ زەررىچىسى چىرمىشىپ قالغان ۋە ساپ ھالەتتە تۇرغان زەررىچە <span className="english-term">purification partner particle</span> (تازىلاش ھەمراھى زەررىچىسى) ياكى ئاددىيلا <span className="english-term">partner particle</span> (ھەمراھ زەررىچىسى) دەپ ئاتىلىدۇ. <span className="english-term">Quantum field theory</span> (كۋانت مەيدانى نەزەرىيىسى) ئارقىلىق ئەستايىدىل تەكشۈرۈش ئارقىلىق، بۇ ھەمراھ زەررىچە مەنپىي ئېنېرگىيە زەررىچىسى ئەمەس، بەلكى 5-رەسىمدە كۆرسىتىلگەندەك ئۇپۇقنىڭ ئارقىسىدا ئىكەنلىكى ئاشكارىلاندى. ئۇ يەنە زەررىچىنىڭ ئېنېرگىيەسىز <span className="english-term">zero-point fluctuation</span> (نۆل نۇقتا تەۋرىنىشى)نىڭ كۋانت تەۋرىنىشىنىڭ بىر قىسمى ئىكەنلىكىنى جەزملەشتۈرىدۇ.
            </p>

            {/* 5-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNBHUSFlMRvGcvmFQvjrZumth7Rlng3Qkmw&s"
                alt="5-رەسىم: ھەمراھ زەررىچە ئۇپۇقنىڭ ئارقىسىدا"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">5-رەسىم</p>
            </div>

            <p>
              خاۋكىڭ رادىئاتسىيە ھاسىل قىلىش جەريانىنى سېزىمچانلىق بىلەن چۈشەندۈرۈش ئۈچۈن، 6-رەسىمدە كۆرسىتىلگەندەك، بىرلا مەۋھۇم زەررىچە ھالقىسى ئەمەس، بەلكى ئىككى ھالقىسى كېرەك. ئېگىلىپ تۇرغان بوشلۇق-ۋاقىتنىڭ سىرتقى تارتىش كۈچى مەيدانى بۇ ھالقىنى بۇزۇپ، جەمئىي تۆت زەررىچە ھاسىل قىلىدۇ. 6-رەسىمدىكى قىزىل نۇقتا چەكسىزلىككە قويۇپ بېرىلگەن خاۋكىڭ زەررىچىسىنى، كۆك نۇقتا بولسا ئۇپۇقنىڭ ئارقىسىدا چەكلەنگەن ھەمراھ زەررىچىسىنى كۆرسىتىدۇ.
            </p>

            {/* 6-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://c02.purpledshub.com/uploads/sites/48/2021/07/Hawking-radiation-33a5ec1.jpg"
                alt="6-رەسىم: تۆت زەررىچە ھاسىل بولۇش جەريانى"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">6-رەسىم</p>
            </div>

            <p>
              يەنە بىر تەرەپتىن، 6-رەسىمدىكى ئىككى قارا نۇقتا مەنپىي ئېنېرگىيە زەررىچىلىرىنىڭ ئېقىمىغا مەسئۇل زەررىچىلەرنى كۆرسىتىدۇ. بۇ مەنپىي ئېنېرگىيە <span className="english-term">quantum interference</span> (كۋانت ئارىلىشىشى) ئارقىلىق ھاسىل بولىدۇ. بۇ تۆت زەررىچىنىڭ يارىتىلىشى ئۇپۇق سىرتىدىكى ئوخشاش بوشلۇق رايونىدا يۈز بېرىدۇ. خاۋكىڭ زەررىسى مۇسبەت ئېنېرگىيەنى ئېلىپ يۈرىدۇ، ئىككى قارا زەررىچە بولسا مەنپىي ئېنېرگىيەنى ئېلىپ يۈرىدۇ، بۇ رايوندا ئېنېرگىيەنى ساقلاشنىڭ يەرلىك قانۇنىنى ساقلايدۇ. مۇسبەت ۋە مەنپىي ئېنېرگىيەنىڭ ئالمىشىشى بۇ رايوندا يۈز بېرىدۇ، ئەمما بۇ پەقەت ئېنېرگىيە مىقدارىغا مۇناسىۋەتلىك. كۋانتنىڭ چىرمىشىپ كېتىشى باشقا بىر ھېكايە. قىزىل نۇقتا بىلەن ئىپادىلەنگەن خاۋكىڭ زەررىسى ئۇپۇقنىڭ يەنە بىر تەرىپىدە كۆك نۇقتا بىلەن ئىپادىلەنگەن ھەمراھ زەررىسى بىلەن كۋانت چىرمىشىپ كەتكەن ھالەتتە تۇرىدۇ. قارا ئۆڭكۈرگە چۈشكەن ئىككى قارا نۇقتا بىلەن ئىپادىلەنگەن ئىككى زەررىچە كۋانت چىرمىشىپ كەتكەن ساپ ھالەتتە تۇرىدۇ، ئەمما بۇ ئىككى زەررىچە خاۋكىڭ زەررىسى بىلەن كۋانت چىرمىشىپ كەتمەيدۇ. ئېنېرگىيە تاشقى تارتىش كۈچى مەيدانى ئارقىلىق ئالماشتۇرۇلىدۇ، ئەمما كۋانت چىرمىشىپ كەتمەيدۇ.
            </p>

            <p>
              6-رەسىمدىكى ئەھۋالنى 7-رەسىمدە كۆرسىتىلگەندەك، تارتىش كۈچىنىڭ شار شەكىللىك سىممېترىك بوشلۇق-ۋاقىت دىئاگراممىسى سۈپىتىدە تەسۋىرلىگىلى بولىدۇ. تۆۋەندىكىدەك، بىز نۇرنىڭ سۈرئىتى <span className="english-term">c</span> نىڭ 1 دەپ بەلگىلەنگەن بىرلىك سىستېمىسىنى ئىشلىتىمىز.
            </p>

            {/* 7-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://cdn.mos.cms.futurecdn.net/MyWvcUrvDJJHPPu6LtbQTT.gif"
                alt="7-رەسىم: قارا ئۆڭكۈر بوشلۇق-ۋاقىت دىئاگراممىسى"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">7-رەسىم</p>
            </div>

            <p>
              بۇ رەسىمدە، گورىزونتال ئوق قارا ئۆڭكۈرنىڭ سىرتىدىكى رادىئاتسىيە كوئوردىناتى <span className="english-term">r</span> نى، تىك ئوق بولسا ۋاقىت كوئوردىناتى <span className="english-term">t</span> نى ئىپادىلەيدۇ. ماسسىسى <span className="english-term">M</span> بولغان قارا ئۆڭكۈرنىڭ ئۇپۇق سىزىقى <span className="english-term">r = 2GM</span> دا بولۇپ، نۇر ئوربىتىسى بىلەن قاپلىنىدۇ. ئىچىدە، سېرىق زىگزاگ سىزىقى بىلەن تەسۋىرلەنگەن بوشلۇق-ۋاقىت يەككەلىكى <span className="english-term">r = 0</span> دا كۆرۈنىدۇ. بۇ يەككەلىكنىڭ ھەرىكىتى ئادەتتىكى زەررىچىگە ئوخشاش ۋاقىت ئوربىتىسى ئەمەس، بەلكى بوشلۇق ئوربىتىسى بويىچە ھەرىكەت قىلىدۇ. شۇڭا، <span className="english-term">r = 0</span> مەلۇم بوشلۇق نۇقتىسىنى كۆرسەتمەيدۇ، بەلكى ئىچكى بوشلۇق-ۋاقىتنىڭ چۆكۈپ كەتكەن ۋاقتىنى كۆرسىتىدۇ. 7-رەسىمدە خاۋكىڭ زەررىچىسىنىڭ ئوربىتىسى قىزىل سىزىق بىلەن تەسۋىرلەنگەن. ئۇنىڭ ھەمراھ زەررىچىسىنىڭ ئوربىتىسى كۆك سىزىق بىلەن تەسۋىرلەنگەن. چەكسىز ئۆتمۈشتە، بۇ قىزىل ۋە كۆك نۇقتىلار رەسىمنىڭ سول تەرىپىدىكى كۋانت مەيدانى ۋاكۇئۇمىدا كۋانت تەۋرىنىشىنىڭ بىر قىسمىغا ئايلانغان ۋە دەسلەپتە ھېچقانداق ئېنېرگىيەگە ئىگە ئەمەس ئىدى. بۇ مەنىدىن ئېيتقاندا، ئۇلار ئېنېرگىيەگە ئىگە ھەقىقىي زەررىچىلەر ئەمەس، بەلكى يەنىلا مەۋھۇم زەررىچىلەر. قانداقلا بولمىسۇن، قارا ئۆڭكۈرنىڭ ئەگرى بوشلۇق-ۋاقىت ئىچىدە ھەرىكەت قىلغاندا، خاۋكىڭ زەررىسى (قىزىل سىزىق) ئۇپۇق سىرتىدىكى رايوندىكى تاشقى تارتىش كۈچى مەيدانىدىن ئېنېرگىيە قوبۇل قىلىپ، ھەقىقىي زەررىچىگە ئايلىنىپ، چەكسىزلىككە تارقىلىدۇ. بۇ ئارىلىقتا، ئۇنىڭ ھەمراھ زەررىسى تارتىش كۈچىنىڭ چۈشۈپ كېتىشىدە ئارقىدا قالىدۇ ۋە ئۇپۇق ئىچىدە چەكلىنىپ قالىدۇ. مەۋھۇم زەررىچە (قىزىل سىزىق) مۇسبەت ئېنېرگىيەلىك خاۋكىڭ زەررىسىگە ئايلانغان تاشقى رايوندا، ئۇ قارا ئوربىتا بويىچە قارشى يۆنىلىشتىن كەلگەن ئىككى مەۋھۇم زەررىچىگە مەنپىي ئېنېرگىيە بېرىدۇ، بۇ ئېنېرگىيەنى ساقلاشنىڭ ئومۇمىي قانۇنىنى ساقلايدۇ. ئاندىن مەنپىي ئېنېرگىيەلىك زەررىچە قارا ئۆڭكۈر تەرىپىدىن سۈمۈرۈلۈپ، قارا ئۆڭكۈرنىڭ ماسسىسى ۋە ئېنېرگىيەسىنى ئاستا-ئاستا ئازايتىدۇ. بۇ قارا ئۆڭكۈرنىڭ پارغا ئايلىنىش جەريانى.
            </p>

            <p>
              پارغا ئايلىنىشتىن كېيىنكى ھەمراھ زەررىچىنىڭ ئورنى «<span className="english-term">information loss problem</span>» (ئۇچۇر يوقىتىش مەسىلىسى) دەپ ئاتىلىدىغان مەسىلىنىڭ جەۋھىرى. قارا ئۆڭكۈرنىڭ ماسسىسى <span className="english-term">Planck mass</span> (پلانك ماسسىسى)غا يېقىنلىشالايدىغان دەرىجىدە كىچىك بولغاندا، <span className="english-term">quantum gravity</span> (كۋانت تارتىش كۈچى)نىڭ تەسىرى چوقۇم زۆرۈر دەپ قارىلىدۇ. بۇ تەسىرلەرنى ئويلاشقاندىن كېيىن قارا ئۆڭكۈرنىڭ پۈتۈنلەي پارغا ئايلىنىشى ياكى قانداقتۇر پارغا ئايلىنىش قالدۇقىنىڭ پەيدا بولۇشى ھازىرچە نامەلۇم بولۇپ، داۋاملىق تەتقىقات تېمىسى.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog88;