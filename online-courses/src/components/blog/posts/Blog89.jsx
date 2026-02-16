// Blog89.jsx
import React, { useState, useEffect } from 'react';

const Blog89 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = document.querySelector('.uyghur-content')?.innerText || '';
    if (!text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ug';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2rFImKKKwSSBpgLn4Nz24e8YTU06foQYFw&s"
            alt="كۋانت تارتىش كۈچى ۋە ۋاقىت — Quantum Gravity and Time"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center flex-col p-4 text-center">
            <h1 className="heading text-white text-3xl md:text-4xl font-bold drop-shadow-lg mb-2">
              «ۋاقىت» كۋانت تارتىش كۈچى نەزەرىيىسىدە مەۋجۇت ئەمەس دېگەن نېمە؟
            </h1>
            <p className="text-white text-sm opacity-90 mt-2">رەسىم: elkbearr</p>
          </div>
        </div>

        {/* مەزمۇن قىسمى */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="heading text-gray-600 text-sm">
              KeLBiL • 2025-يىلى 7-ئاينىڭ 15-كۈنى
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
              فىزىكا ئالىملىرى بەزىدە «ۋاقىت مەۋجۇت ئەمەس» دەيدۇ. بۇ كۆپىنچە{' '}
              <span className="english-term">quantum gravity theory</span> (كۋانت تارتىش كۈچى نەزەرىيىسى)نىڭ مەزمۇنى بولۇپ،{' '}
              <span className="english-term">quantum mechanics</span> (كۋانت مېخانىكىسى) ۋە{' '}
              <span className="english-term">general relativity</span> (ئومۇمىي نىسپىيلىك نەزەرىيىسى)نى بىرلەشتۈرۈشنى مەقسەت قىلىدۇ. بۇنىڭ مەنىسىنى چۈشەندۈرۈپ بېرەي.
            </p>

            <p>
              كىلاسسىك تۈز بوشلۇق-ۋاقىتنىڭ خۇسۇسىيەتلىرىنى تەسۋىرلەيدىغان{' '}
              <span className="english-term">special relativity</span> (ئالاھىدە نىسپىيلىك نەزەرىيىسى)دىن باشلايلى. 1-رەسىمدە، گورىزونتال ئوق ئورۇن كوئوردىناتى، تىك ئوق ۋاقىت كوئوردىناتى. نىسپىيلىك نەزەرىيىسىدە، تىك ئوق ۋاقىت <span className="english-term">t</span> نىڭ يورۇقلۇق سۈرئىتى <span className="english-term">c</span> غا كۆپەيتىلگەن شەكلىدە سىزىلىدۇ. رەسىمدىكى كۆك ئەگرى سىزىق مەلۇم بىر زەررىچىنىڭ{' '}
              <span className="english-term">world line</span> (دۇنيا سىزىقى)نى ئىپادىلەيدۇ. بۇ كلاسسىك بوشلۇق-ۋاقىتتا، ۋاقىت مەۋجۇت بولۇپ، ھەر خىل سائەتلەر ئارقىلىق ئۆلچىنىشى مۇمكىن.
            </p>

            {/* 1-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://www.cnet.com/a/img/resize/e3d1ea4441dda7da7949c91cc39f5773b8849817/hub/2022/05/10/d33063e0-0d37-41e3-a295-6d060f46d850/final-thumbnail.png?auto=webp&fit=crop&height=675&width=1200"
                alt="1-رەسىم: زەررىچىنىڭ دۇنيا سىزىقى"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">1-رەسىم</p>
            </div>

            <p>
              ئەلۋەتتە، ۋاقىت <span className="english-term">t</span> زەررىچىلەرگە مۇناسىۋەتلىك كۋانت مېخانىكىسىدىمۇ كۆرۈلىدۇ. ئۇنىڭ ئاساسىي تەڭلىمىسىىدە،{' '}
              <span className="english-term">Schrödinger equation</span> (شرۆدىنگېر تەڭلىمىسى)دە، ئۇ زەررىچىنىڭ ھالىتىنى ئىپادىلەيدىغان ھالەت ۋېكتورىنىڭ پارامېتىرى سۈپىتىدە كۆرۈلىدۇ. بۇ ھالەتنىڭ ۋاقىت ئۆزگىرىشىنى تەسۋىرلەش ئۈچۈن، بۇ تەڭلىمىنىڭ سول تەرىپىگە ۋاقىت ھاسىلاتى تېرمىنىمۇ لازىم.
            </p>

            <p>
              قانداقلا بولمىسۇن، كۋانت تارتىش كۈچى كۋانت بوشلۇق-ۋاقىت (ئادەتتە ئەگرى بوشلۇق-ۋاقىت) نەزەرىيىسى بولغاچقا، ھەر خىل شەكىلدىكى بوشلۇق-ۋاقىتلارنىڭ كۋانت ئۈستۈنكى ئورنىنى كۆزدە تۇتۇشقا بولىدۇ. بوشلۇق-ۋاقىتلارنىڭ ھەر بىر ئۈستۈنكى ئورنىنى ئۆزىنىڭ بەلگىلەنگەن ۋاقىت ئوقى ۋە ۋاقىت كوردىناتىسى بار، ئەمما بۇلار باشقا ئۈستۈنكى ئورۇنلارنىڭ ۋاقىت ئوقى ۋە ۋاقىت كوردىنات سىستېمىسىدىن پەرقلىنىشى مۇمكىن. ھەر بىر بوشلۇق-ۋاقىتنىڭ شەكلى ئوخشىمايدىغان بولغاچقا، بۇ بوشلۇق-ۋاقىت ئىچىدىكى ۋاقىت ئېقىمىمۇ ئوخشىمايدۇ. ۋاقىتنى ئۆلچەيدىغان سائەتلەر ھەر بىر بوشلۇق-ۋاقىت ئىچىدە ئوخشىمايدۇ. بۇنداق ئەھۋالدا، بوشلۇق-ۋاقىت ئۈستۈنكى ئورنىنىڭ ئومۇمىي كۋانت ھالىتى مەلۇم بوشلۇق-ۋاقىت ئىچىدىكى ۋاقىت ئېقىمىنى تاللاپ، ئۇنى تاشقى ۋاقىت دەپ قارىيالمايدۇ.
            </p>

            <p>
              ئۇنداقتا، بوشلۇق-ۋاقىتلارنىڭ كۋانت ئۈستۈنكى ئورنىنىڭ شرۆدىنگېر تەڭلىمىسى نېمە؟ كۋانت تارتىش كۈچىنىڭ ئاساسىي تەڭلىمىسى تۆۋەندىكىدەك.
            </p>

            {/* تەڭلىمە رەسىم (Wheeler-DeWitt) */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://placehold.co/500x150/fef3c7/d97706?text=Ŵψ+=+0+(Wheeler-DeWitt+تەڭلىمىسى)"
                alt="كۋانت تارتىش كۈچى تەڭلىمىسى: Ŵψ = 0"
                className="rounded-lg shadow-md w-full max-w-md"
              />
            </div>

            <p>
              ئەگەر بۇنى شرۆدىنگېر تەڭلىمىسى دەپ يازساق، ئۇ مۇنداق كۆرۈنىدۇ:
            </p>

            <div className="my-6 flex flex-col items-center">
              <img
                src="https://placehold.co/500x100/f0fdf4/065f46?text=iℏ∂ψ/∂t+=+Ĥψ+→+Ŵψ+=+0"
                alt="شرۆدىنگېر تەڭلىمىسىدىن Wheeler-DeWitt تەڭلىمىسىگە ئۆزگىرىش"
                className="rounded-lg shadow-md w-full max-w-md"
              />
            </div>

            <p>
              بۇ <span className="english-term">Wheeler-DeWitt equation</span> (ۋىلېر-دېۋىت تەڭلىمىسى) دەپ ئاتىلىدۇ، ئۇ بوشلۇق-ۋاقىت دولقۇن فۇنكسىيەسى <span className="english-term">ψ</span> نىڭ تەڭلىمىسى بولۇپ، ئۇ يەنە بوشلۇق-ۋاقىتنىڭ، يەنى ئالەمنىڭ كۋانت دولقۇن فۇنكسىيەسىنىڭ قاپلىنىشىنى تەسۋىرلەيدۇ. بۇ دولقۇن فۇنكسىيەسى ئالەمنىڭ شەكلىنى ئارگۇمېنت (پارامېتىر) سۈپىتىدە تەسۋىرلەيدىغان، ئەمما ۋاقىتنى ئۆز ئىچىگە ئالمايدىغان <span className="english-term">metric tensor</span> (مېترىك تېنزور) <span className="english-term">h</span> نى ئۆز ئىچىگە ئالىدۇ. ھەر قانداق بوشلۇق-ۋاقىتنىڭ <span className="english-term">t</span> ۋاقتى كۆرۈنمىگەچكە، ۋاقىت <span className="english-term">ψ</span> دا كۆرۈنمەيدۇ. دەسلەپكى شرۆدىنگېر تەڭلىمىسىدىكى ۋاقىت ھاسىلاتى ۋىلېر-دېۋىت تەڭلىمىسىدە يوقىلىدۇ. باشقىچە قىلىپ ئېيتقاندا، ۋاقىت بۇ نەزەرىيەدىن يوقىلىدۇ. بۇ «ۋاقىت مەۋجۇت ئەمەس» دېگەنلىك.
            </p>

            <p>
              لېكىن بىر جەھەتتىن ئېيتقاندا، بۇ ئېنىق. بىز ئوخشىمىغان بوشلۇق-ۋاقىتلارنى ئوخشىمىغان ۋاقىت ئېقىمى بىلەن قاپلىدۇق. ئەمما فىزىكىلىق ۋاقىت راستىنلا يوقالدىمۇ؟ نۇرغۇن فىزىكا ئالىملىرى بۇنىڭغا قوشۇلمايدۇ.
            </p>

            <p>
              ۋاقىتنى ئۆلچەيدىغان فىزىكىلىق سائەتنىڭ ئەركىنلىك دەرىجىسىنى نەزەرىيەگە قوشۇش ئارقىلىق ۋاقىت ھەققىدىكى ئۇچۇرلارنى چىقىرىش مۇمكىنمۇ؟ مەسىلەن، ئالەمنىڭ چوڭلۇقىنى ئىپادىلەيدىغان ۋە <span className="english-term">h</span> نىڭ ئەركىنلىك دەرىجىسىنىڭ بىرى بولغان <span className="english-term">a</span> پارامېتىرىنىڭ فىزىكىلىق سائەت رولىنى ئوينايدىغانلىقى توغرىسىدا دائىم مۇنازىرىلەر بولىدۇ. <span className="english-term">φ</span> ماددىي مەيدانىمۇ نەزەرىيەگە قوشۇلىدۇ، ھەمدە بۇ مەيداننىڭ قىممىتى مۇھاكىمە قىلىنىدۇ. بۇ ئەھۋالدا، <span className="english-term">φ = φ(a)</span> «مەيداننىڭ <span className="english-term">a</span> ۋاقىتتىكى قىممىتى» دەپ چۈشەندۈرۈلىدۇ. بۇ تەڭشەش يەنە <span className="english-term">second law of thermodynamics</span> (تېرمودىنامىكىنىڭ ئىككىنچى قانۇنى)دا كۆرۈنىدىغان ۋاقىت كۆرسەتكۈچىنى مۇھاكىمە قىلىشقا يول قويىدۇ. بۇ ھەر خىل فىزىكىلىق مىقدارلارنىڭ ئۆزئارا باغلىنىشى ياكى مۇناسىۋىتىدىن فىزىكىلىق ۋاقىتنى ئوقۇش ئۇسۇلى. بۇ ئۇسۇل ۋە چۈشەندۈرۈش بىلەن ھەقىقىي ۋاقىتنىڭ يوقاپ كەتمىگەنلىكىنى ئېيتىشقا بولىدۇ.
            </p>

            <p>
              قانداقلا بولمىسۇن، بۇ ۋاقىتنى ئۆلچەملىك ئېھتىماللىق چۈشەندۈرۈشى بىلەن تەمىنلەشكە ئىشلىتىشكە بولامدۇ يوق، ئېنىق ئەمەس. ئۈستۈنكى ئورۇندىكى ئالەملەر ئارىسىدا، ئالەمنىڭ چوڭلۇقى مەلۇم بىر نۇقتىدا قىسقىرايدىغان ئالەم بولۇشى مۇمكىن. ۋاقىتنىڭ ئۆزگىرىشى پەقەت شۇ ئالەمدە يۈز بېرىدۇ. بۇ پۈتۈن ئېھتىماللىقنىڭ ساقلىنىش قائىدىسىنىڭ ئىجرا قىلىنىدىغان-بولمايدىغانلىقى توغرىسىدا سوئاللارنى پەيدا قىلىدۇ.
            </p>

            <p>
              فىزىكا ئالىملىرىنىڭ ۋاقىتقا بولغان چۈشەنچىلىرى ھەر خىل. ئۇلار «ۋاقىت مەۋجۇت ئەمەس» دېگەندە، ئالدى بىلەن «سىز قايسى ۋاقىتنى كۆزدە تۇتۇۋاتىسىز؟» دەپ سورىسىڭىز، مېنىڭچە بۇ ئېنىق «ۋاقىت»نى ئەمەس، بەلكى خاتا چۈشىنىشنى يوقىتىشقا ياردەم بېرىدۇ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog89;