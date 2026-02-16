// Blog118.jsx
import React, { useState } from 'react';

const Blog118 = () => {
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);

  const handlePdfExport = () => {
    setIsPdfGenerating(true);
    setTimeout(() => {
      alert('«AI ئېيجېنتلار ۋە تولغۇرۇشچان AI» ماقالىسىنىڭ PDF نۇسخىسى يۈكلەندى!');
      setIsPdfGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with Hero Image Placeholder */}
        <div className="relative h-72 bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442135111-92e4781c2a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}></div>
          <div className="relative text-center px-6 z-10">
            <span className="inline-block bg-amber-100 text-amber-800 text-sm font-bold px-4 py-1 rounded-full mb-4"> ☪ 1-قىسىم</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'UKIJ Tuz', 'UKIJ Nasq', 'Microsoft Uighur', sans-serif" }}>
              AI ئېيجېنت دېگەن نېمە؟ ھاسىللىغۇچ AI دىن قانداق پەرق قىلىدۇ؟
            </h1>
            <div className="flex items-center justify-center mt-6 space-x-4 space-x-reverse" style={{ direction: 'rtl' }}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-300 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">ئۇ</span>
                </div>
                <span className="text-indigo-100 font-medium">ئۇيغۇر | زامان بىلەن بىرگە يۈرۈۋاتقان مىللەت</span>
              </div>
              <span className="text-indigo-200">•</span>
              <span className="text-indigo-200">2026-يىلى 1-ئاينىڭ 21-كۈنى، كەچ 8:57</span>
            </div>
          </div>
        </div>

        {/* Article Content Container */}
        <div className="p-8" style={{ direction: 'rtl', fontFamily: "'UKIJ Tuz', 'UKIJ Nasq', 'Microsoft Uighur', sans-serif" }}>
          {/* Social Sharing Buttons */}
          <div className="flex justify-end mb-8 space-x-3 space-x-reverse">
            <button 
              className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
              onClick={() => window.open(`https://chat.whatsapp.com/FLaJ33cp8qv0iwLNvRwZjC?mode=gi_t=${encodeURIComponent('AI ئېيجېنتلار ۋە تولغۇرۇشچان AI نى سېلىشتۇرۇش: تولۇق تەپسىلاتلار بىلەن تونۇشۇڭ')}`, '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.775.004-3.422-.533-4.858-1.48 2.595 1.206 5.23 1.004 7.672-.328-1.46.95-3.187 1.454-4.814 1.808m4.543-21.525c-3.583 0-7.072 1.382-9.607 3.918-2.536 2.535-3.918 6.024-3.918 9.607 0 1.85.604 3.606 1.683 5.125L2.79 23.25l5.332-1.394c1.448.837 3.063 1.25 4.714 1.25 3.583 0 7.072-1.382 9.607-3.918 2.536-2.535 3.918-6.024 3.918-9.607s-1.382-7.072-3.918-9.607C19.926 1.382 16.437 0 12.854 0" />
              </svg>
              WhatsApp
            </button>
            <button 
              className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
              onClick={() => window.open(`https://t.me/+5uXhIZoVzPxmNGE1=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('AI ئېيجېنتلار ۋە تولغۇرۇشچان AI نى سېلىشتۇرۇش')}`, '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.947 4.784c-.158-.733-.558-1.248-1.246-1.545-.712-.307-1.738-.493-2.764-.537-1.742-.074-3.553-.034-5.533-.034-2.06 0-3.885-.043-5.566.032-.892.04-1.742.176-2.417.488C5.748 3.502 5.27 4.015 5 4.69c-.24.684-.223 1.698-.192 2.606.06 1.758.15 3.778.15 5.21 0 1.523-.09 3.642-.15 5.267-.026.713-.142 1.586.216 2.138.322.496.862.722 1.484.763.56.038 1.236-.13 1.925-.386 1.023-.38 1.903-.846 2.71-1.283l.208-.112c.578-.308 1.27-.36 1.796-.104.488.238.762.77.762 1.41 0 .458-.01 1.148-.054 1.743-.054.754.236 1.455.93 1.868.592.352 1.296.43 1.934.43.65 0 1.453-.137 2.173-.47 1.273-.586 2.318-1.58 2.802-2.842.54-1.408.73-3.04.73-4.828 0-1.56.095-2.857.15-4.16.026-.63.462-1.16 1.14-1.16h.003c.55 0 1.495.25 1.915.718.49.546.69 1.43.54 2.163-.466 2.29-1.724 7.503-2.426 10.33-.44 1.77-1.157 2.497-2.562 2.73-1.153.192-2.474.057-3.59-.386-1.597-.634-2.882-1.596-4.138-2.542-1.37-.982-2.62-2.01-2.72-2.093-.098-.083-1.987-1.476-1.987-3.836 0-1.793 1.076-2.805 1.946-3.22.872-.416 2.036-.56 2.94-.56.853 0 2.413.195 3.527.526l.38.113c1.094.334 1.596.498 2.06.968.463.47.61 1.176.38 2.004z" />
              </svg>
              Telegram
            </button>
            <button 
              onClick={handlePdfExport}
              disabled={isPdfGenerating}
              className={`flex items-center px-4 py-2 ${isPdfGenerating ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'} text-white rounded-lg transition-all`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {isPdfGenerating ? 'يۈكلەۋاتىدۇ...' : 'PDF چۈشۈرۈش'}
            </button>
          </div>

          {/* Introduction Section */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center ml-3">
                <span className="text-indigo-700 text-2xl font-bold">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">كىرىش سۆز</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              «AI ئېيجېنت» دېگەن سۆزنى يېقىندا كۆپ كۆرۈپ قالغان بولسىقىز. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ChatGPT ياكى Gemini قاتارلىق ھاسىللىغۇچ AI لارنى كۆپلەر ئىشلىتىپ كېلىۋاتىدۇ. شۇنداق بولسا، AI ئېيجېنت نېمە بىلەن پەرق قىلىدۇ؟
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              2025-يىلى «AI ئېيجېنتنىڭ باشلانغۇچ يىلى» دەپ ئاتىلىدۇ. OpenAI، Google، Microsoft قاتارلىق چوڭ شىركەتلەر بىرى-بىرىدىن كېيىن AI ئېيجېنتقا مۇناسىۋەتلىك خىزمەتلەرنى جارى قىلىپ، ياپونىيە شىركىتىدەمۇ قوللىنىش باشلانغان.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              لېكىن راستىنى ئېيتقاندا، «ھاسىللىغۇچ AI دىن قانداق پەرقى بارلىقىنى چۈشەنمىدىم» دەيدىغان كىشىلەر كۆپ بولۇشى مۇمكىن.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              بۇ ماقالىدا، AI ئېيجېنت نېمە، ھاسىللىغۇچ AI دىن نېمە بىلەن پەرق قىلىدۇ؟ دېگەن سوئاللارنى، كونكرېت ھالەت مىساللىرى ئارقىلىق تەپسىلىي تەھلىل قىلىپ كۆرەيلى.
            </p>
          </section>

          {/* Generative AI Section */}
          <section className="mb-10 bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center ml-3">
                <span className="text-blue-800 text-2xl font-bold">💬</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">ھاسىللىغۇچ AI دېگەن نېمە؟</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ئاۋۋال، ھاسىللىغۇچ AI نى قايتا كۆزدىن كەچۈرۈپ چىقايلى.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-bold text-blue-700">
              ھاسىللىغۇچ AI نىڭ مەزمۇنى: « سورىسىڭىز جاۋاب بېرىدۇ »، « ياسا دەيسىزىز ياسايدۇ ».
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ChatGPT غا سوئال بېرسىڭىز جاۋاب بېرىدۇ. « خەتنى يېزىپ بېرىڭ » دەيسىڭىز يېزىپ بېرىدۇ. سۈرەت تولغۇرۇش AI سىغا كۆرسەتمە بېرسىڭىز رەسىم چىزىپ بېرىدۇ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              كىشى كۆرسەتمە بېرىدۇ، AI جاۋاب قايتۇرىدۇ. بۇ ئالماشتۇرۇشنىڭ تەكرارلىنىشى.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ناھايىتى زېرەك. ناھايىتى قۇلاي. لېكىن ئۆزىدىن ھەرىكەت قىلمايدۇ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              كېيىنكى قەدەم نېمە بولۇشى كېرەك دېگەننى باھالاش، بىر قانچە قوراللارنى ئايرىم-ئايرىم ئىشلىتىش، مەقسەتكە يېتىش ئۈچۈن رېژا تۈزۈپ ئىجرا قىلىش — بۇنداق ئىشلارنى ھاسىللىغۇچ AI يالاڭلا ئۆزى قىلالمايدۇ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-bold">
              بۇ تەك « زېرەك مەسلىھەتچى » بولۇپ قالىدۇ، ئىجرا قىلغۇچى كىشى ئۆزى بولىدۇ.
            </p>
            
            {/* Image Placeholder */}
            <div className="mt-8 mb-6 bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center text-gray-500">
              ھاسىللىغۇچ AI نىڭ خىزمەت قىلىش جەريانىنى كۆرسىتىدىغان رەسىم
            </div>
            
            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">ئاساسىي ھاسىللىغۇچ AI خىزمەتلىرى</h3>
              <ul className="list-disc pr-5 space-y-1 text-gray-700">
                <li>ChatGPT (OpenAI)</li>
                <li>Gemini (Google)</li>
                <li>Claude (Anthropic)</li>
                <li>DALL·E، Midjourney (سۈرەت ھاسىللىغۇچ)</li>
                <li>Suno، Udio (ئاۋاز ھاسىللىغۇچ)</li>
              </ul>
            </div>
          </section>

          {/* AI Agent Section */}
          <section className="mb-10 bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center ml-3">
                <span className="text-purple-800 text-2xl font-bold">🤖</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">AI ئېيجېنت دېگەن نېمە؟</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              AI ئېيجېنت باشقاچە.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-bold text-purple-700">
              « مەقسەتكە يېتىش ئۈچۈن، ئۆزىدىن ھەرىكەت قىلىدۇ »
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              بۇنىڭ مەزمۇنى: كۆرسەتمە بېرىش شەرت ئەمەس. تەپسىلىي تەلىپ قىلىش شەرت ئەمەس. مەقسەتنى ئېيتىپ قويۇڭ، ئۇ ئۆزى ئويلاپ، ئۆزى ھەرىكەت قىلىدۇ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              زۆرۈر مەلۇماتلارنى يىغىدۇ، رېژا تۈزىدۇ، قوراللارنى ئىشلىتىدۇ، ۋەزىپىنى بىر تەرەپ قىلىدۇ. يولدا مەسىلە چىقسا تۈزىتىدۇ، ئاخىرىدا مەقسەتكە يېتىدۇ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ھاسىللىغۇچ AI « زېرەك مەسلىھەتچى » بولسا، AI ئېيجېنت « ئۆزىدىن ھەرىكەت قىلغۇچى خىزمەتچى » غا يېقىن بولىدۇ.
            </p>
          </section>

          {/* Comparison Example Section */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center ml-3">
                <span className="text-amber-800 text-2xl font-bold">✈️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">كونكرېت مىسال: سەپەر تەييارلىقىنى سېلىشتۇرۇش</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              پەقەت سۆز بىلەن چۈشەندۈرۈش قىيىن بولغىنىدىن، « سەپەر تەييارلىقى » دېگەن كونكرېت ھالەتتە سېلىشتۇرۇپ كۆرەيلى.
            </p>

            {/* Option A: Generative AI */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center ml-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="text-blue-500 text-2xl mr-2">💬</span>
                  ھاسىللىغۇچ AI غا سېغىنغان ھالەت
                </h3>
              </div>
              <div className="bg-white border-l-4 border-blue-400 pl-4 py-3 mb-4">
                <p className="font-medium text-gray-800">سىز:</p>
                <p className="text-gray-700 mt-1">« كېلەركى سەيشەنبە كۈنى كاشغەر سەپىرى بار، ئاپتۇبۇس تېمپىسى ۋە تۇراقتىن تېزىپ بېقىپ قوي »</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 pl-4 py-3 mb-4">
                <p className="font-medium text-blue-800">AI:</p>
                <p className="text-gray-700 mt-1">« توقسۇن →يېڭى شەھەر ئاپتۇبۇس تېمپىسى « نوزومى » قاتارىدا تەخمىنەن 2 سائەت 30 مىنۇت. بىرىنچى قاتار 6:00 دا چىقىپ 8:30 دا يېتىدۇ. تۇراققا بولسا يېڭى شەھەر بېكىتى يېنىدا، « تارىم 1 » تەخمىنەن 8,500 يېن، « تۇمەن 00 » تەخمىنەن 12,000 يېن »</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                بۇ جايغىچە مۇكەممەل. لېكىن بۇ يەردىن باشلاپ قىيىنچىلىقلار باشلانىدۇ.
              </p>
              <ul className="list-disc pr-5 space-y-2 mt-4 text-gray-700">
                <li>ئۆزۈڭىز « كاشغەر قاتناش » كىرەپ ئاپتۇبۇس تېمپىسىنى بېكىتىسىز</li>
                <li>«  ئاخىردا » دا تۇراق بېكىتىسىز</li>
                <li>Google كالېندارىغا جەدۋەلنى قوشىسىز</li>
                <li>باشقۇرغۇچىغا خەت يېزىپ خەۋەر بېرىسىز</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-bold">
                AI « تېزىپ بېقىپ بەردى » گەنلا. بىر تەرەپ قىلىشنىڭ ھەممىسىنى سىز ئۆزۈڭىز قىلىشىڭىز كېرەك.
              </p>
            </div>

            {/* Option B: AI Agent */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center ml-3">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="text-purple-600 text-2xl mr-2">🤖</span>
                  AI ئېيجېنتقا سېغىنغان ھالەت
                </h3>
              </div>
              <div className="bg-white border-l-4 border-purple-400 pl-4 py-3 mb-4">
                <p className="font-medium text-gray-800">سىز:</p>
                <p className="text-gray-700 mt-1">« كېلەركى سەيشەنبە كۈنى كاشغەر سەپىرىنى تەييارلاپ قويۇڭ »</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                AI ئېيجېنت ھەرىكەتكە كىرىشىدۇ. لېكىن بىر قېتىمدا ھەممىنى قىلمىيدۇ.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-400 pl-4 py-3 mb-3">
                <p className="font-medium text-purple-800">AI ئېيجېنت:</p>
                <p className="text-gray-700 mt-1">« قايسى ۋاقىتتىكى ئاپتۇبۇس تېمپىسىنى خالايسىز؟ »</p>
              </div>
              <div className="bg-white border-l-4 border-purple-400 pl-4 py-3 mb-3">
                <p className="font-medium text-gray-800">سىز:</p>
                <p className="text-gray-700 mt-1">« ئەتىگەندىكى ئىلگىرى »</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 pl-4 py-3 mb-3">
                <p className="font-medium text-purple-800">AI ئېيجېنت:</p>
                <p className="text-gray-700 mt-1">« تۇراققا بولسا قانداق تەلەپ بار؟ »</p>
              </div>
              <div className="bg-white border-l-4 border-purple-400 pl-4 py-3 mb-4">
                <p className="font-medium text-gray-800">سىز:</p>
                <p className="text-gray-700 mt-1">« بېكەت يېنىدا بولسۇن »</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                زۆرۈر مەلۇماتلار توپلانغاندىن كېيىن، AI ئېيجېنت تاللانمالارنى جەملىۋېتىپ جەزملەش سورايدۇ.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 pl-4 py-3 mb-4">
                <p className="font-medium text-purple-800">AI ئېيجېنت:</p>
                <p className="text-gray-700 mt-1">« تۆۋەندىكى مەزمۇنلارنى بېكىتىمەن. توغرا بولامدۇ؟ »</p>
                <ul className="list-disc pr-5 mt-2 text-gray-700 space-y-1">
                  <li>« نوزومى » 7-نومۇر 6:00 چىقىش → 8:30 يېتىش</li>
                  <li>«  ئاقسۇ » يېڭى شەھەر 8,500 يېن</li>
                  <li>جەمئىي: تەخمىنەن 25,000 يېن (ئىچكى قانۇن-يوللۇق چەكى ئىچىدە)</li>
                </ul>
              </div>
              <div className="bg-white border-l-4 border-purple-400 pl-4 py-3 mb-4">
                <p className="font-medium text-gray-800">سىز:</p>
                <p className="text-gray-700 mt-1">« ياخشى »</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                جەزملەشنىڭدىن كېيىن، AI ئېيجېنت ئىجرا قىلىشقا كىرىشىدۇ.
              </p>
              <ul className="list-disc pr-5 space-y-2 mt-4 text-gray-700 bg-purple-50 p-4 rounded-lg">
                <li>Google كالېندارىدىن جەدۋەلنى تەكشۈرۈپ</li>
                <li>ئىچكى قانۇن-يوللۇقلارنى سېلىشتۇرۇپ</li>
                <li>شىنجاڭ تېمپىسى ۋە تۇراق بېكىتىپ</li>
                <li>كالېندارغا قوشۇپ</li>
                <li>باشقۇرغۇچىغا خەۋەر خەت يېزىپ يوللايدۇ</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                ئەڭ ئاخىرىدا، بىر تەرەپ بولغانلىقىنى خەۋەر قىلىدۇ.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-bold bg-amber-100 p-3 rounded-lg">
                سىز قىلغان ئىشىڭىز: مەقسەتنى ئېيتىپ قويۇش، بىر قانچە سوئالغا جاۋاب بېرىش، ئاخىرىقى جەزملەشتە « ياخشى » دەپ ئېيىتىش.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="mt-8 mb-6 bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center text-gray-500">
              AI ئېيجېنتنىڭ خىزمەت قىلىش جەريانىنى كۆرسىتىدىغان رەسىم
            </div>
          </section>

          {/* Comparison Table Section */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center ml-3">
                <span className="text-green-800 text-2xl font-bold">📊</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">پەرقنى تەرتىپكە سېلىش</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-right font-bold text-gray-800 border-b border-gray-300">خاسلىق</th>
                    <th className="px-6 py-4 text-right font-bold text-blue-700 border-b border-gray-300">ھاسىللىغۇچ AI</th>
                    <th className="px-6 py-4 text-right font-bold text-purple-700 border-b border-gray-300">AI ئېيجېنت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200">ئاساسىي ۋەزىپە</td>
                    <td className="px-6 py-4 text-blue-700 border-b border-gray-200">« سورىسىڭىز جاۋاب بېرىدۇ »</td>
                    <td className="px-6 py-4 text-purple-700 border-b border-gray-200">« مەقسەتكە يېتىش ئۈچۈن ئۆزىدىن ھەرىكەت قىلىدۇ »</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200">كىشىنىڭ رولى</td>
                    <td className="px-6 py-4 text-blue-700 border-b border-gray-200">داۋاملىق كۆرسەتمە بېرىش، بىر تەرەپ قىلىش</td>
                    <td className="px-6 py-4 text-purple-700 border-b border-gray-200">مەقسەت بېرىش، مۇھىم جايلاردا جەزملەش</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200">قوراللارنى بىرلەشتۈرۈش</td>
                    <td className="px-6 py-4 text-blue-700 border-b border-gray-200">قىيىن (ئادەتتە بىر قورال)</td>
                    <td className="px-6 py-4 text-purple-700 border-b border-gray-200">ئاسان (كۆپ قوراللارنى بىرلەشتۈرەلەيدۇ)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-purple-50">
                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200">مەسىلىنى ھەل قىلىش</td>
                    <td className="px-6 py-4 text-blue-700 border-b border-gray-200">ئىنساننىڭ قوشۇمچە كۆرسىتىشى كېرەك</td>
                    <td className="px-6 py-4 text-purple-700 border-b border-gray-200">ئۆزى تۈزىتىپ، يولنى داۋاملاشتۇرالايدۇ</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200">ئوخشاشلىق</td>
                    <td className="px-6 py-4 text-blue-700 border-b border-gray-200">زېرەك مەسلىھەتچى</td>
                    <td className="px-6 py-4 text-purple-700 border-b border-gray-200">ئۆزىدىن ھەرىكەت قىلغۇچى خىزمەتچى</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Technical Notes Section */}
          <section className="mb-10 bg-amber-50 rounded-2xl p-8 border-l-4 border-amber-500">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center ml-3">
                <span className="text-amber-800 text-2xl font-bold">⚙️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">قوشۇمچە: ئالدىن تەييارلىق ۋە تۆلەش مەسىلىسى</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              AI ئېيجېنتنىڭ « ئۆزىدىن ھەرىكەت قىلىشى » ئۈچۈن، ئالدىن تەييارلىق قىلىش زۆرۈر.
            </p>
            <ul className="list-disc pr-5 space-y-3 text-lg text-gray-700 leading-relaxed mb-4">
              <li>Google كالېندارى، ئىچكى سىستېما، بېكىتىش خىزمىتىگە قاتىشىش ھوقۇقىنى (OAuth تەكشۈرۈش قاتارلىق) AI ئېيجېنتقا بېرىپ قويۇش كېرەك.</li>
              <li>ھازىرچە تۆلەش جەھەتتىن « AI نىڭ ئۆزىدىن كىرىدىت كارتا ئارقىلىق تۆلەشى » كېڭ تارقىمىغان. كۆپىنچە شىركەت كارتىسى ئارقىلىق بىر يىغىندا تۆلەش ياكى بېكىتىشنىلا قىلىپ، تۆلەشنى باشقا جەرياندا ئىجرا قىلىش كۆپ كۆرۈلىدۇ.</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed font-bold">
              قانداق بولمايدۇ، AI ئېيجېنت « ئۆزىدىن ھەرىكەت قىلىدۇ » دېگەن سۆز، مۇھىم مەشغۇلاتلارنى قىلىشتىن ئىلگىرى داڭخىل پايدىلىنىپ، ھەر دائىم ئىشلەتكۈچىنىڭ جەزملەشىنى سورايدىغان قىلغۇدا ياسالغان.
            </p>
          </section>

          {/* Conclusion Section */}
          <section className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center ml-3">
                <span className="text-indigo-800 text-2xl font-bold">✅</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">خۇلاسە</h2>
            </div>
            <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-indigo-400">
              <p className="text-xl font-bold text-indigo-700 mb-3">ھاسىللىغۇچ AI: « سورىسىڭىز جاۋاب بېرىدۇ »</p>
              <p className="text-xl font-bold text-purple-700">AI ئېيجېنت: « مەقسەتكە يېتىش ئۈچۈن ئۆزىدىن ھەرىكەت قىلىدۇ »</p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              بۇ پەرقنى چۈشىنىپ تۇرسىڭىز، كېلگۈسىدە كۆرۈۋاتقان بارلىق AI غا مۇناسىۋەتلىك خەۋەرلەرنى تېخىمۇ ياخشى چۈشىنىشىڭىز مۇمكىن.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              قوشۇمچە ئېيتقاندا، ھاسىللىغۇچ AI ۋە AI ئېيجېنتنىڭ چېگرىسى ھازىرچە سۈيۈكلىنىپ كېتىۋاتىدۇ. ChatGPT غا « ئېيجېنت ھالىتى » قوشۇلۇپ، يالاڭلا سۆھبەتتىن ئېشىپ، مۇستەقىل ھەرىكەت قىلالايدىغان قوبىلىتى يېتىلدۇرۇلدى.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              لېكىن، ئاساسىي پەرقنى چۈشىنىپ تۇرۇشنىڭ مەنىسى بار.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              كېيىنكى قىسىمدا « AI ئېيجېنت قانداق ھەرىكەت قىلىدۇ، قانداق ئىشلىتىلىدۇ؟ » نى تېخىمۇ چوڭقۇر تەھلىل قىلىپ كۆرەيلى. مەۋجۇت خىزمەتلەرنىڭ فۇنكسىيىسى سۈپىتىدە ئىشلىتىش ئۇسۇلى، ئۆز شىركىتىڭىزگە مۇۋاپىق قۇرۇش ئۇسۇلى، براوزېرنى ئاپتوماتىك باشقۇرۇش ئۇسۇلى قاتارلىق، تۇنجىسىنى تەرتىپكە سېلىپ كۆرەيلى.
            </p>
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                ھازىرچە، ھاسىللىغۇچ AI نى ياخشى چۈشىنىپ، ياخشى ئىشلىتىشتىن باشلاڭ. ئۇنىڭ داۋامىيىتىدە، AI ئېيجېنتنىڭ دۇنياسى كېڭىيىپ ياتىدۇ.
              </p>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-4 sm:mb-0">
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-lg">
                1-قىسىم: ھاسىللىغۇچ AI ۋە AI ئېيجېنتنى سېلىشتۇرۇش
              </span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-xl transition-all text-lg flex items-center">
              <span>2-قىسىمنى ئوقۇش</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-indigo-300 flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-white text-3xl font-bold">ئۇ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">ئۇيغۇر</h3>
                <p className="text-indigo-200">زامان بىلەن بىرگە يۈرۈۋاتقان مىللەت</p>
              </div>
            </div>
            <div className="text-right">
              <p className="mb-3">ياسالما ئەقىل تېخنىكىسىنى تەتقىق قىلىپ،</p>
              <p className="mb-3">ئۇنى كۈندىلىك تۇرمۇشقا ئىلىپ كىرىشنى</p>
              <p>ئارزۇ قىلىۋاتىمەن.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyghur Cultural Footer */}
      <div className="max-w-4xl mx-auto mt-12 text-center text-gray-600" style={{ fontFamily: "'UKIJ Tuz', 'UKIJ Nasq', 'Microsoft Uighur', sans-serif", direction: 'rtl' }}>
        <p className="text-lg italic mb-2">« بىلىم دېڭىزى چەكسىز، ئىزدەش يولى ئاخىرسىز »</p>
        <p className="text-sm">— ئۇيغۇر مەدەنىيتىدىن —</p>
        <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
          <span className="text-gray-400">© 2026</span>
          <span className="font-bold text-indigo-600">KeLBiL  ئۇيغۇر ئاكادېمىيەسى  تەربىيە پىلاتفورمى  </span>
          <span className="text-gray-400">— بارلىق ھوقۇقلار قوغدىلىدۇ</span>
        </div>
      </div>
    </div>
  );
};

export default Blog118;