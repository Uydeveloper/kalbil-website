// Blog90.jsx
import React, { useState, useEffect } from 'react';

const Blog90 = () => {
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
            src="https://universesandbox.com/blog/wp-content/uploads/2025/08/Update-35.3-Feature-GIF-Draft-4.gif"
            alt="ئۆتمۈش ۋە كەلگۈسى — Past and Future Memory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center flex-col p-4 text-center">
            <h1 className="heading text-white text-3xl md:text-4xl font-bold drop-shadow-lg mb-2">
              نېمىشقا ئۆتمۈشنى ئېسىمىزدە تۇتىمىز، ئەمما كەلگۈسىنى ئېسىمىزدە تۇتمايمىز؟
            </h1>
            <p className="text-white text-sm opacity-90 mt-2">سۈرەت: ibaraki_nakai</p>
            <p className="text-white text-sm opacity-80 mt-1 heading">2025-يىلى 7-ئاينىڭ 11-كۈنى، ئەتىگەن سائەت 7:42</p>
          </div>
        </div>

        {/* مەزمۇن قىسمى */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="heading text-gray-600 text-sm">
              KeLBiL
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
              مەندىن دائىم «نېمىشقا ئىنسانلار ئۆتمۈشنى ئېسىمىزدە تۇتىدۇ، ئەمما كەلگۈسىنى ئېسىمىزدە تۇتمايدۇ؟» دەپ سورايدۇ. فىزىكىدىن بىر جاۋاب شۇكى، بۇ ئىنسان مېڭىسىنىڭ قۇرۇلمىسىدىن كېلىپ چىققان. بىزنىڭ كەلگۈسى ئۈچۈن ئەستە ساقلاش ئىقتىدارىمىز يوق، چۈنكى مېڭىمىزدە كەلگۈسىنى ھېسابلاش ئىقتىدارى ۋە نەتىجىلەرنى كۆرۈش ۋە ئاڭلاش قاتارلىق <span className="english-term">sensory information</span> (سېزىم ئۇچۇرلىرى)غا ئايلاندۇرۇش ۋە خاتىرىلەش ئىقتىدارى يوق.
            </p>

            <p>
              <span className="english-term">Classical mechanics</span> (كلاسسىك مېخانىكى)دا، بارلىق ھازىرقى دەسلەپكى شەرتلەر مەلۇم بولغاندىن كېيىن، كەلگۈسى ئۆزگىچە بەلگىلىنىدۇ. بۇ كەلگۈسىنىڭ تەپسىلاتلىرىنى <span className="english-term">equations of motion</span> (ھەرىكەت تەڭلىمىسى)نى يېشىش ئارقىلىقمۇ مۆلچەرلىگىلى بولىدۇ. مۇنازىرىنى ئاددىيلاشتۇرۇش ئۈچۈن، بارلىق ماددىلارنىڭ پەقەت يەرشارىدا ئايلىنىدىغانلىقىنى پەرەز قىلايلى. شۇنداقلا يەرشارىنىڭ ھازىرقى ماددىسى ھەققىدىكى بارلىق ئۇچۇرلارنى بىلەلەيمىز دەپ پەرەز قىلايلى. ئەمەلىيەتتە، بۇ ئىنتايىن مۇمكىن ئەمەس، ئەمما بۇ فىزىكىدىكى ئاساسىي <span className="english-term">thought experiment</span> (ئوي تەجرىبىسى) بولغاچقا، بىز ئۇنى ئىدىئالىستىك جەھەتتىن قارايمىز.
            </p>

            <p>
              ئەگەر ئىنسان مېڭىسى بۇ ئۇچۇرلارنى دەسلەپكى شەرت قىلىپ ئاپتوماتىك ھالدا ھەرىكەت تەڭلىمىلىرىنى يېشىپ، نەتىجىنى ساقلىيالايدىغان بولسا، ئۇ ئادەم «كەلگۈسى خاتىرىلەرگە» ئىگە بولاتتى. بۇلار ئەمەلىيەتتە ھەرىكەت تەڭلىمىلىرىدىن ھېسابلىنىدىغان كەلگۈسىنىڭ مۆلچەرلىرى بولسىمۇ، بۇ خاتىرە رايونىغا كىرىش جانلىق، <span className="english-term">virtual reality</span> (مەۋھۇم رېئاللىق)قا ئوخشاش تەجرىبە بىلەن تەمىنلەيدۇ.
            </p>

            <p>
              بەزى ئوقۇرمەنلەر دىققەت قىلغان بولۇشى مۇمكىن، بۇ ھېكايە پەقەت كەلگۈسىنىڭ يۇقىرى ئېنىقلىقتىكى مۆلچەرلىگۈچىسى بولغان <span className="english-term">Laplace's demon</span> (لاپلاسنىڭ جىنى)نىڭ مېڭىدە بىر ئۈسكۈنە سۈپىتىدە قوللىنىلىدىغان بىر ئوي-پىكىر تەجرىبىسى. ئەمەلىيەتتە، كەلگۈسىنىڭ پاكىتلىرى مېڭىدە ساقلانغان خاتىرىلەردىن پەرقلىنىشى مۇمكىن، خۇددى ئۆتمۈشتىكى خاتىرىلىرىمىزگە ئوخشاش. ئۆتمۈشتىكى خاتىرىلەرنىمۇ ئۆزگەرتىشكە بولىدۇ، نۇرغۇن كىشىلەر ئۆتمۈشتىكى ۋەقەلەرگە دۇچ كەلگەندە پەرقنى ھېس قىلىشى مۇمكىن. ئەگەر كەلگۈسىدە پاكىتلار بىلەن خاتىرىلەر ئوتتۇرىسىدىكى بۇنداق بوشلۇققا يول قويۇلسا، ئۇنداقتا كەلگۈسىدىكى خاتىرە ھاسىل قىلىش پەقەت كلاسسىك مېخانىكىدا ئەمەس، بەلكى ھېچ بولمىغاندا <span className="english-term">quantum mechanics</span> (كۋانت مېخانىكىسى)دىمۇ ئېھتىماللىق جەھەتتىن مۇمكىن بولىدۇ.
            </p>

            <p>
              يەنە بىر قىزىقارلىق سوئال شۇكى، «ئۆتمۈشتىكى خاتىرىلەر» «كەلگۈسى خاتىرىلەر»دىن ھەقىقەتەن پەرقلىقمۇ؟ بۇنى تەكشۈرۈش ئۈچۈن، ئالەمنىڭ بىر ئۆلچەملىك مودېلىنى كۆرۈپ باقايلى.
            </p>

            {/* 1-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://cdn.pixabay.com/animation/2022/11/16/14/56/14-56-49-778_512.gif"
                alt="1-رەسىم: بوشلۇق جەھەتتىن تاقالغان ئالەم"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">1-رەسىم: بوشلۇق جەھەتتىن تاقالغان ئالەم</p>
            </div>

            <p>
              بۇ مودېل ئىككى ئۆلچەملىك بوشلۇق-ۋاقىتنى ئىشلىتىدۇ، ئەمما تۆت ئۆلچەمگە كېڭەيتىلگەن مودېل <span className="english-term">Einstein’s general relativity</span> (ئېينىشتېيننىڭ ئومۇمىي نىسپىيلىك نەزەرىيىسى) تەڭلىمىسىنى قاندۇرىدىغانلىقى مەلۇم. 1-رەسىمدىكى مودېلنى بۇ بوشلۇق-ۋاقىتنىڭ بىر ئۆلچەملىك قىسمىنى كۆزىتىش دەپ قارىسىڭىز بولىدۇ.
            </p>

            <p>
              ئېينىشتېيننىڭ تەڭلىمىلىرى يەنە 2-رەسىمدىكىگە ئوخشاش، بۇ ئالەمنىڭ توغرىسىغا ئۆزگەرتىلگەن نۇسخىسىغا چارە تېپىشقا يول قويىدۇ. بۇ «ۋاقىت ئىچىدە تاقالغان ئالەم». ۋاقىت ئۆتكەنسىرى، بىز ھېس قىلماي تۇرۇپ ئۆتمۈشكە قايتىپ كېلىدۇ.
            </p>

            {/* 2-رەسىم */}
            <div className="my-8 flex flex-col items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQHC-E9u2fXDCA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1690938835439?e=2147483647&v=beta&t=P2sdap1o27DFUIDPNPt3Y3Y5YPJDEkhSFWPLOi9yFiA"
                alt="2-رەسىم: ۋاقىت ئىچىدە تاقالغان ئالەم"
                className="rounded-lg shadow-md w-full max-w-2xl"
              />
              <p className="mt-3 text-center text-gray-600 font-medium heading">2-رەسىم: ۋاقىت ئىچىدە تاقالغان ئالەم</p>
            </div>

            <p>
              ۋاقىت ئىچىدە تاقالغان بۇ ئالەمدە ياشاۋاتقان ئاڭلىق ئىنساننى تەسەۋۋۇر قىلىپ بېقىڭ. ئۇ ئىنسان ۋاقىتنىڭ ئۆتۈشىنى قانداق ھېس قىلىدۇ؟ بۇ سوئال. «ھازىرقى زامان» غا قايتىپ كېلىدىغان ۋاقىت يېتەرلىك ئۇزۇن بولسىلا، ھېچقانداق ئالاھىدە مەسىلە يوق. ئىنسان تۇغۇلۇپ ئۆلگەندىن كېيىن، ياكى تەرەققىيات جەھەتتىن ئېيتقاندا، ئىنسانىيەت پەيدا بولۇپ، مەدەنىيەت قۇرۇپ، ئاندىن ھالاك بولغاندىن كېيىن، ئالەم مەلۇم بىر ئۆتمۈشكە قايتىپ كەلسە، ۋاقىت ئېقىمى شۇ ئالەمدە ياشاۋاتقان ئىنسانلارنىڭ ئېڭىدا ئۆزگەرمەيدۇ.
            </p>

            <p>
              لېكىن بۇ ۋاقىت بىر يىل بولساچۇ؟ ياكى بىر سائەت بولساچۇ؟ ئەگەر بۇ ۋاقىت بىر سائەت بولسا، مېڭىدىكى بۇ خاتىرە بىرلا ۋاقىتتا «ئۆتمۈشنىڭ خاتىرىسى» ۋە «كەلگۈسىنىڭ خاتىرىسى» بولماسمۇ؟
            </p>

            <p>
              ئېينىشتېيننىڭ تەڭلىمىلىرى بۇنداق سىرلىق ئالەملەرنى چەتكە قاقمايدۇ. باشقا نامەلۇم فىزىكا قانۇنلىرى بۇنداق <span className="english-term">closed timelike curves</span> (ۋاقىت جەھەتتىن يېپىق ئېگرى سىزىقلار) بار ئالەمنى ئادەتتە چەكلىشى مۇمكىن، ئەمما ئۇ <span className="english-term">vacuum solution</span> (نۆل بوشلۇق-ۋاقىت ئەگرىلىكى بار ۋاكۇئۇم ھەل قىلىش چارىسى) بولغاچقا، ئۇنىڭ مەۋجۇتلۇقى فىزىكا قانۇنلىرى تەرىپىدىن ئالاھىدە چەكلەنمەيدۇ. شۇڭا، 2-رەسىمدىكى ئالەم «كەلگۈسى خاتىرە» توغرىسىدىكى مۇنازىرىلەردە مەنىلىك بولۇپ قالىدۇ.
            </p>

            <p>
              سىلەر، ئوقۇرمەنلىرىمىز، يېقىن كەلگۈسى توغرىسىدا كۈندە پەرەز قىلامسىلەر؟ بۇ پەرەزلەرنىڭ «كەلگۈسى خاتىرە»دىن ھەقىقەتەن پەرقلىنىدىغان-پەرقلەنمەيدىغانلىقىنى ئويلىشىش قىزىقارلىق بولۇشى مۇمكىن. يېقىن كەلگۈسىدە، <span className="english-term">Artificial Intelligence (AI)</span> (سۈنئىي ئەقىل) «كەلگۈسىنىڭ ئەسلىمىلىرى» بارلىقىنى ئىلگىرى سۈرۈشى مۇمكىن. نۇرغۇن قىزىقارلىق مەسىلىلەر ساقلانغان.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog90;