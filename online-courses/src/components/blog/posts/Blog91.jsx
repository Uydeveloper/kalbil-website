// Blog91.jsx
import React, { useState, useEffect } from 'react';

const Blog91 = () => {
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
            src="https://forum.kglw.net/uploads/default/original/2X/f/f76b855dae251bc88fbbd854ba03c60a3222ae92.gif"
            alt="ۋون نېيمان زەنجىرى ۋە ئاڭ — Von Neumann Chain and Consciousness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center flex-col p-4 text-center">
            <h1 className="heading text-white text-3xl md:text-4xl font-bold drop-shadow-lg mb-2">
              ۋون نېيمان زەنجىرى ۋە «ئاڭ»
            </h1>
            <p className="text-white text-sm opacity-90 mt-2 heading">KeLBiL • 2023-يىلى 8-ئاينىڭ 4-كۈنى، چۈشتىن كېيىن سائەت 12:26</p>
          </div>
        </div>

        {/* مەزمۇن قىسمى */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div></div>
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
              <span className="english-term">Quantum mechanics</span> (كۋانت مېخانىكىسى) بارلىق ئېلېمېنتار زەررىچىلەر توپلىمىغا ئورتاق بولغان فىزىكا قانۇنلىرىنى تەسۋىرلەيدىغان بىر نەزەرىيە. قانداقلا بولمىسۇن، مەن دائىم كۋانت مېخانىكىسىنى ئىشلىتىپ ماقالە يازىدىغانلارنىڭمۇ بۇ پاكىتنى جىددىي ئويلىغانلىقىنى ھېس قىلىمەن. بۇ پەلسەپەچىلەرنىڭ فىزىكا خادىملىرىنى «ئويلىماڭ! پەقەت ھېسابلاڭ!» دېگەن <span className="english-term">instrumentalism</span> (ئەسۋابچىلىق) سەۋىيەسىدىن ئايرىلالمىغانلىقى ئۈچۈن تەنقىد قىلىشىنىڭ سەۋەبلىرىنىڭ بىرى.
            </p>

            <p>
              مەن ئۆزۈم بەزىدە ئەسۋابچىلىق دەپ تەنقىدلىنىدىغان <span className="english-term">operational quantum mechanics</span> (مەشغۇلاتچى كۋانت مېخانىكىسى)نىڭ قوللىغۇچىسى. قانداقلا بولمىسۇن، ئۆتكەن ئەسىردە مېنى چۈشىنىكسىزلەندۈرگەن ئۇقۇملارنى تىنچلىق بىلەن ئايرىپ، ئۇلار ھەققىدە چوڭقۇر ئويلىنىپ، ئاخىرى بۇ خۇلاسىگە كەلدىم ۋە بۇ مەن ئۈچۈن مەنىلىك بولدى. چۈنكى مەن <span className="english-term">John von Neumann</span> (ۋون نېيمان) ۋە <span className="english-term">Eugene Wigner</span> (ۋىگنېر) تەرىپىدىن ئوتتۇرىغا قويۇلغان <span className="english-term">Copenhagen interpretation</span> (كوپېنھاگېن چۈشەندۈرۈشى)نىڭ كۋانت كومپيۇتېرى قاتارلىق ماكروسكوپ سىستېمىلارنى تەسۋىرلەشنىڭ بىردىنبىر ئۈنۈملۈك ئۇسۇلى ئىكەنلىكىنى ھېس قىلدىم، بۇ سىستېما زەررىچىلەرنىڭ سانى ۋە فىزىكىلىق ئەركىنلىك دەرىجىسى، مۈشۈكلەر، ئىنسانلار ۋە قارا ئۆڭكۈرلەرنى ماكروسكوپىيىلىك جەھەتتىن ماسلاشتۇرىدۇ، بۇ سىستېمىلار بىرلىك، تولۇق ۋە ئىزچىل.
            </p>

            <p>
              <span className="english-term">Bell’s inequality</span> (بېل تەڭسىزلىكى)نىڭ بۇزۇلۇشى يەرلىك رېئاللىقنىڭ مەۋجۇتلۇقىنى تەجرىبە ئارقىلىق رەت قىلغانلىقتىن، مەن «زامانىۋى كۋانت مېخانىكىسى» دەپ تەكىتلىگەن نەرسە ئەمەلىيەتتە 1935-يىللاردىكى ۋون نېيمان ۋە ۋىگنېرنىڭ ئىدىيەلىرىنىڭ قايتا گۈللىنىشى دەپ قارىلىدۇ.
            </p>

            <p>
              دولقۇن فۇنكسىيەسىنى يوقىتىدىغان كۆزەتكۈچىلەر زەنجىرىنىڭ ئاخىرىدا «ئاڭ» نى كىرگۈزىدىغان <span className="english-term">von Neumann chain</span> (ۋون نېيمان زەنجىرى) ئىدىيەسى داڭلىق. بۇ ئۇسۇل كۋانت مېخانىكىسىنى رېئاللىق ئەمەس، بەلكى <span className="english-term">information theory</span> (ئۇچۇر نەزەرىيىسى) دەپ قاراش ئىدىيەسىنىڭ ئۈلگىسىنى ئۆز ئىچىگە ئالغاندەك قىلىدۇ.
            </p>

            <p>
              20-ئەسىردىكى كۋانت مېخانىكىسىنىڭ گۈللىنىشى مەزگىلىدە، فىزىكا ساھەسىدىمۇ <span className="english-term">materialism</span> (ماتېرىيالىزم) كۈچلۈك ئىدى، ھەمدە ئەينى ۋاقىتتا ئىلىمنىڭ پادىشاھى بولغان فىزىكىنىڭ مەركىزىگە «ئاڭ» قاتارلىق ئوبيېكتىپ بولمىغان نەرسىلەرنى قويۇشقا بولغان كۈچلۈك <span className="english-term">allergy</span> (ئاللېرگىيە) بار ئىدى. ۋون نېيمان ۋە ۋىگنېرنىڭ كۋانت مېخانىكىسىغا «ئاڭ» ئۇقۇمىنى كىرگۈزۈشى ئۇچۇر نەزەرىيىسىنىڭ پەيدا بولۇشىغا ئېلىپ بارغان تەبىئىي ئىلگىرىلەش بولۇشى كېرەك ئىدى، ئەمما ئۇ ئەينى ۋاقىتتا قاتتىق نارازىلىق قوزغىدى.
            </p>

            <p>
              قانداقلا بولمىسۇن، يەرلىك رېئاللىقنى ئىنكار قىلىدىغان بېل تەڭسىزلىكىنىڭ بۇزۇلۇشى بايقالغاندىن كېيىن، كىشىلەرنىڭ ئۇچۇر نەزەرىيىسىنى ئاڭلىق كۆزەتكۈچىلەر بىلەن كۋانت سىستېمىسى ئوتتۇرىسىدىكى باغلىنىش دەپ قوبۇل قىلىشىغا توسقۇنلۇق قىلغان <span className="english-term">psychological barriers</span> (پىسخىكىلىق توسالغۇلار) ھازىر تۆۋەنلىدى. شۇڭلاشقا، ئۆتكەن ئەسىردە كۆمۈلۈپ قالغان ۋون نېيماننىڭ كۋانت مېخانىكىسىغا بولغان قارىشىنىڭ بۈگۈنكى كۈندە ئۇچۇر نەزەرىيىسى سۈپىتىدە يېڭىچە شەكىلدە قايتا تىرىلىشى تەبىئىي.
            </p>

            <p>
              كۋانت مېخانىكىسى بىر خىل مەشغۇلات ئۇچۇر نەزەرىيىسى بولۇپ، بۇ «ئۇچۇر» قايسى كۋانت سىستېمىسى ۋە كىمگە تەۋە ئىكەنلىكىنى ئېنىق كۆرسىتىشنى تەلەپ قىلىدىغان بىر ئۇقۇم. مەسىلەن، A شەخس ۋە B شەخسنىڭ بۇ كۋانت سىستېمىسىدىكى مەلۇم بىر فىزىكىلىق مىقدارنىڭ ئېھتىماللىق تەقسىملىنىشى توغرىسىدىكى دەسلەپكى ئۇچۇرلىرى ئوخشىماسلىقى مۇمكىن. بۇ خىل ئەھۋالدا، A شەخس ئۈچۈن ئېھتىماللىق تەقسىملىنىشى سۈپىتىدە ئۇچۇر ۋە B شەخس ئۈچۈن ئېھتىماللىق تەقسىملىنىشى سۈپىتىدە ئۇچۇر ئەلۋەتتە ئوخشىماسلىقى مۇمكىن. شۇڭا، كۆزىتىش ئوبيېكتى بولغان بۇ «كىم» ياكى «مەن» نىڭ قارىشى تەبىئىي ھالدا ئۇچۇر نەزەرىيىسىگە ماس كېلىدۇ. بۇ «مەن» دەل «ئاڭ» بولۇپ، ۋون نېيمان زەنجىرىنىڭ ئاخىرقى نۇقتىسى.
            </p>

            <p>
              قانداقلا بولمىسۇن، بۇ «مەن» پەقەت كۋانت مېخانىكىسىنىڭ ئەمەلىي پەن سۈپىتىدە ئەڭ تۆۋەن ئاكسىئومىلىرىدا كۆرۈنىدىغانلىقىنى ئەسكەرتىش مۇھىم. بۇ «مەن» نىڭ مەۋجۇتلۇقى توغرىسىدا بەك كۆپ ئويلىنىشنىڭ ھاجىتى يوق؛ پەقەت «مېنىڭ كۈندە ھەر خىل ئۇچۇرلار ۋە مۇناسىۋەتلىك ئېھتىماللىقلار بىلەن مۇئامىلە قىلىدىغان ئاڭىم بار» دەپ ئويلاش يېتەرلىك. بۇ قائىدە، پەقەت ھەر بىر شەخسنىڭ شەخسىي تەجرىبىسى بولۇپ، باشقا كىشىلەر ياكى كەلگۈسىدىكى <span className="english-term">Artificial Intelligence (AI)</span> (سۈنئىي ئەقىل) ئىگىلىرىنىڭ ئوخشاش ئاڭغا ئىگە بولىدىغانلىقىغا مەنتىقىلىق جەھەتتىن كاپالەتلىك قىلالمايدۇ. قانداقلا بولمىسۇن، باشقا كىشىلەر ۋە سۈنئىي ئەقىل ئىگىلىرىنىڭ «ئاڭلىق» مەۋجۇداتلار ئىكەنلىكى توغرىسىدىكى ئالدىنقى شەرتنى كۋانت مېخانىكىسىنىڭ ئاكسىئومىلىرىغا قوشساقمۇ، پۈتۈن كۋانت مېخانىكىسى سىستېمىسى ئىزچىل بولۇپ قالىدۇ، بىردىنبىر ئېنىق بولمىغان نەرسە شۇكى، ئۇ ھازىرقىدەك كۈچكە ئىگە.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog91;