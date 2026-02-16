// Blog112.jsx
import React, { useState, useEffect } from 'react';
import { FaShare, FaWhatsapp, FaTelegram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Blog113 = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const shareTo = (platform) => {
    const url = window.location.href;
    const title = "قارا ئۆڭكۈرلەرنىڭ قانداق ئىشلەيدىغانلىقىنىڭ ئاسان چۈشىنىلىدىغان چۈشەندۈرۈشى | كىۋانىت 2026";
    const text = "قارا ئۆڭكۈرلەرنىڭ سىرلىق دۇنياسىنى كەشپ قىلىڭ! 2019-يىلى تارتىلغان تۇنجى قارا ئۆڭكۈر سۈرىتى ۋە ئۇنىڭ ئارقىدىكى فىزىكا پرىنسىپلىرى توغرىسىدا تولۇق چۈشەندۈرۈش";
    
    let shareUrl = '';
    switch(platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        alert('ئۇلانما چاپلاش تاختىسىغا كۆچۈرۈلدى!');
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#12122a] to-[#0d0d1d] text-white font-uyghur pt-8 pb-16 px-4">
      {/* Custom Fonts for Uyghur */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Uyghur:wght@400;700&family=Almarai:wght@300;400;700&display=swap');
        
        .font-uyghur {
          font-family: 'Noto Nastaliq Uyghur', 'UKIJ Tuz', 'UKIJ Nasq', 'Microsoft Uighur', 'Almarai', serif;
        }
        
        .font-content {
          font-family: 'Almarai', 'Noto Nastaliq Uyghur', 'UKIJ Tuz', sans-serif;
          line-height: 2.1;
          font-size: 1.15rem;
        }
        
        @media (min-width: 768px) {
          .font-content {
            font-size: 1.35rem;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header with Logo and Slogan */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-purple-900/50">
          <div className="text-left mb-2 md:mb-0">
            <div className="text-4xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              KeLBiL
            </div>
            <div className="text-purple-300 text-center italic text-lg"> UYGHUR HIGH TECH  </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-yellow-400 via-orange-500 to-red-600 mb-1">
              2026-  يىلى ئۇيغۇر كىۋانىت تېخنىكا يىلى
            </div>
            <div className="text-lg text-center text-green-400 font-semibold">ئىلىم بىلەن تېخنىكا بىرلىشىدۇ </div>
          </div>
        </div>

        {/* Article Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 leading-tight">
            قارا ئۆڭكۈرلەرنىڭ قانداق ئىشلەيدىغانلىقىنىڭ ئاسان چۈشىنىلىدىغان چۈشەندۈرۈشى
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-lg">
            <div> </div>
            <div> ۋاقتى: 2026-يىلى 1-ئاينىڭ 15-كۈنى</div>
            <div>تۈر: فىزىكا تەتقىقاتى</div>
          </div>
        </header>

        {/* Share Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button 
            onClick={() => shareTo('whatsapp')}
            className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="WhatsApp ئارقىلىق ھەمبەھىرلەش"
          >
            <FaWhatsapp size={24} />
          </button>
          <button 
            onClick={() => shareTo('telegram')}
            className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Telegram ئارقىلىق ھەمبەھىرلەش"
          >
            <FaTelegram size={24} />
          </button>
          <button 
            onClick={() => shareTo('twitter')}
            className="p-3 bg-sky-400 hover:bg-sky-500 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="X (Twitter) ئارقىلىق ھەمبەھىرلەش"
          >
            <FaTwitter size={24} />
          </button>
          <button 
            onClick={() => shareTo('facebook')}
            className="p-3 bg-blue-800 hover:bg-blue-900 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Facebook ئارقىلىق ھەمبەھىرلەش"
          >
            <FaFacebook size={24} />
          </button>
          <button 
            onClick={() => shareTo('copy')}
            className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="ئۇلانما كۆچۈرۈش"
          >
            <FaShare size={24} />
          </button>
        </div>

        {/* Table of Contents */}
        <div className="bg-[#1a1a3a] border-l-4 border-purple-500 p-6 rounded-r-xl mb-12 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">مەزمۇنلار جەدۋىلى</h2>
          <ul className="space-y-3 font-content">
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              <span>قېچىش سۈرئىتى</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              <span>ۋەقە ئۇپۇقى ~ قارا ئۆڭكۈرلەرنىڭ ھەقىقىي تەبىئىتى ~</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              <span>تارتىش كۈچى ۋە بوشلۇق ~ نىسپىيلىك نەزەرىيىسى ~</span>
            </li>
          </ul>
        </div>

        {/* Introduction Section */}
        <section className="mb-16 bg-[#15152a] rounded-2xl p-8 shadow-xl border border-purple-900/30">
          <div className="font-content text-xl mb-6">
            2019-يىلى 4-ئاي ئەتراپىدا، ئىنسانىيەتنىڭ تۇنجى قېتىم مۇۋەپپەقىيەتلىك قارا ئۆڭكۈر سۈرىتى تارتىلغانلىقى توغرىسىدىكى خەۋەر قىزىق تېماغا ئايلاندى.
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative rounded-xl overflow-hidden border-2 border-purple-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 z-10 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-5xl mb-2">🕳️</div>
                  <div className="text-lg font-bold">M87* قارا ئۆڭكۈر</div>
                  <div className="text-sm text-purple-300 mt-2">ئېيىنتىخاب گىرۇپپىسى تەرىپىدىن 2019-يىلى تارتىلغان</div>
                </div>
              </div>
              <img 
                src="https://spacethings.jp/images/blog/4-2.jpg" 
                alt="قارا ئۆڭكۈرنىڭ سۈرىتى" 
                className="w-full h-64 md:h-80 object-cover opacity-80"
              />
            </div>
            
            <div className="font-content space-y-4">
              <p>ئېنىق قىلىپ ئېيتقاندا، قارا ئۆڭكۈرلەرنىڭ ئۆزى نۇر چىقارمايدۇ، شۇڭا ئۇلار سۈرەتلەردە كۆرۈنمەيدۇ. كامېراغا تارتىلغىنى قارا ئۆڭكۈرنى ئوراپ تۇرغان ماددىلارنىڭ تارتىش كۈچى سەۋەبىدىن پلازما غا پارچىلىنىشىدىن پەيدا بولغان نۇر ئىدى.</p>
              
              <div className="bg-[#252545] border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                <p className="italic">قارا ئۆڭكۈرلەرنىڭ مەۋجۇتلۇقى ئىلگىرى باشقا كۆزىتىشلەر ئارقىلىق دەلىللەنگەن، شۇڭا مەن ئازراق گۇمانلىنىپ، پەقەت سۈرەتكە تارتىلغانلىقى ئۈچۈنلا بۇنداق غۇلغۇلا قىلىشقا ئەرزىمدۇ دەپ ئويلىغان ئىدىم.</p>
              </div>
              
              <p>مەن ئۈمىدسىزلەندىم ۋە قارا ئۆڭكۈرلەرنىڭ قانداق ئىشلەيدىغانلىقى ۋە ئۇلارنىڭ ئەمەلىيەتتە نېمە ئىكەنلىكى توغرىسىدا كۆپرەك مەزمۇنلارنى ئاڭلىماقچى بولدۇم. شۇڭا، بۇ قېتىم مەن بۇ سىرلىق ئاسمان جىسىمىنىڭ ئىشلەش ئۇسۇلىنى چۈشەندۈرۈپ ئۆتىمەن.</p>
            </div>
          </div>
        </section>

        {/* Section 1: Escape Velocity */}
        <section className="mb-16 bg-[#1a152a] rounded-2xl p-8 shadow-xl border border-pink-900/30">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-pink-400 cursor-pointer flex items-center"
            onClick={() => toggleSection(1)}
          >
            1. تېزلىكتىن قېچىش
            <span className="ml-3 text-xl">{activeSection === 1 ? '▲' : '▼'}</span>
          </h2>
          
          {activeSection === 1 && (
            <div className="bg-[#251a35] p-6 rounded-xl mb-8 border border-pink-800/50">
              <div className="font-content italic text-lg text-pink-200">
                "قارا ئۆڭكۈر شۇنداق كۈچلۈك تارتىش كۈچىگە ئىگە ئاسمان جىسىمكى بولۇپ، ھەتتا نۇرمۇ قېچىپ كېتەلمەيدۇ."
              </div>
            </div>
          )}
          
          <div className="font-content space-y-6">
            <p>ئالدى بىلەن، خۇلاسە قىلىپ ئېيتقاندا، قارا ئۆڭكۈر شۇنداق كۈچلۈك تارتىش كۈچىگە ئىگە ئاسمان جىسىمكى بولۇپ، ھەتتا نۇرمۇ قېچىپ كېتەلمەيدۇ.</p>
            
            <p>ئۇنداقتا، «ھەتتا نۇرمۇ قېچىپ كېتەلمەيدۇ» دېگەننىڭ مەنىسى نېمە؟</p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p>بىر توپ يەر يۈزىدىن گورىزونتال ھالەتتە قويۇپ بېرىلسە دەپ پەرەز قىلايلى. يۇلتۇزنىڭ تارتىش كۈچى توپقا دائىم مەركەزدىن قاچۇرۇش كۈچى بىلەن تەسىر كۆرسىتىدۇ. بۇ مەركەزدىن قاچۇرۇش كۈچى توپنىڭ ئايلانما ھەرىكەتلىنىشىگە سەۋەب بولىدۇ، نەتىجىدە مەركەزدىن قاچۇرۇش كۈچى پەيدا بولىدۇ.</p>
                
                <p className="mt-4">توپ قانچە تېز قويۇپ بېرىلسە، مەركەزدىن قاچۇرۇش كۈچى شۇنچە چوڭ بولىدۇ. شۇڭا، ئەگەر توپ مەركەزدىن قاچۇرۇش ۋە مەركەزدىن قاچۇرۇش كۈچى تەڭپۇڭلاشقان سۈرئەتتە قويۇپ بېرىلسە، توپ مەڭگۈ يۇلتۇزنىڭ ئەتراپىدا ئايلىنىدۇ. بۇ سۈنئىي ھەمراھ بولۇپ، بۇ نۇقتىدىكى قويۇپ بېرىش سۈرئىتى بىرىنچى ئالەم سۈرئىتى دەپ ئاتىلىدۇ.</p>
              </div>
              
              <div className="relative h-80 bg-[#0a0515] rounded-xl border-2 border-pink-700/50 p-4 flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl">☉</div>
                </div>
                
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-orange-500 rounded-full border-2 border-white" 
                     style={{ transform: 'translate(-50%, -50%) rotate(30deg) translateX(100px)' }}>
                </div>
                <div className="absolute text-orange-300 text-sm top-1/4 left-1/4 mt-8 ml-24">بىرىنچى ئالەم سۈرئىتى</div>
                
                <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-400 rounded-full border-2 border-white animate-ping-slow"
                     style={{ transform: 'translate(-50%, -50%) rotate(-20deg) translateX(130px)' }}>
                </div>
                <div className="absolute text-blue-300 text-sm top-1/3 right-1/4 mt-8 mr-28">ئىككىنچى ئالەم سۈرئىتى (قېچىش)</div>
                
                <div className="absolute bottom-6 text-center text-pink-300">
                  <div className="font-bold text-lg">قېچىش سۈرئىتى دىئاگراممىسى</div>
                  <div className="text-xs mt-1">قىزغۇچ سېرىق: بىرىنچى ئالەم سۈرئىتى | كۆك: قېچىش سۈرئىتى</div>
                </div>
              </div>
            </div>
            
            <p className="mt-6">ئەگەر توپ تېخىمۇ تېز قويۇپ بېرىلسە، ئۇ يۇلتۇزنىڭ تارتىش كۈچىدىن قېچىپ چەكسىزلىككە ئۇچىدىغان سۈرئەتكە يېتىدۇ. بۇ ئىككىنچى ئالەم سۈرئىتى (قېچىش سۈرئىتى) دەپ ئاتىلىدۇ.</p>
            
            <div className="bg-[#152535] border-l-4 border-cyan-400 p-5 rounded-r-lg mt-6">
              <p className="font-content">تەبىئىيكى، يۇلتۇزنىڭ تارتىش كۈچى قانچە كۈچلۈك بولسا، بۇ قېچىش سۈرئىتى شۇنچە چوڭ بولىدۇ. بۇ دۇنيادا نۇردىن تېز ھەرىكەت قىلىدىغان نەرسە يوق. باشقىچە قىلىپ ئېيتقاندا، قارا ئۆڭكۈر شۇنداق كۈچلۈك تارتىش كۈچىگە ئىگە يۇلتۇز بولۇپ، ئۇنىڭ قېچىش سۈرئىتى نۇر سۈرئىتىدىن ئېشىپ كېتىدۇ.</p>
            </div>
            
            <p className="mt-6 font-bold text-lg text-yellow-300">ئۇنداقتا، بۇنداق كۈچلۈك تارتىش كۈچىگە ئىگە يۇلتۇزلار قانداق شەكىللىنىدۇ؟</p>
          </div>
        </section>

        {/* Section 2: Event Horizon */}
        <section className="mb-16 bg-[#151a2a] rounded-2xl p-8 shadow-xl border border-cyan-900/30">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 cursor-pointer flex items-center"
            onClick={() => toggleSection(2)}
          >
            2. ۋەقە ئۇپۇقى - قارا ئۆڭكۈرلەرنىڭ ھەقىقىي تەبىئىتى -
            <span className="ml-3 text-xl">{activeSection === 2 ? '▲' : '▼'}</span>
          </h2>
          
          <div className="font-content space-y-6">
            <p>تارتىش كۈچىنىڭ كۈچىنى ئۇنىڭ ماسسىسىنىڭ قانچىلىك كىچىك رايونغا مەركەزلەشكەنلىكى بىلەن ئىپادىلىگىلى بولىدۇ. قارا ئۆڭكۈرنىڭ شەكىللىنىدىغان رادىئۇسىدىن ھالقىپ بىر رادىئۇس بار. بۇ رادىئۇس شۋارتسچىلد رادىئۇسى، ئۇنىڭ شار شەكىللىك يۈزى ۋەقە ئۇپۇقى دەپ ئاتىلىدۇ. بۇ رادىئۇس ماسسىنى نۇرنىڭ سۈرئىتىنىڭ كۋادراتىغا بۆلۈش ئارقىلىق ھېسابلىنىدۇ، شۇڭا ئۇ ئىنتايىن كىچىك قىممەت. مەسىلەن، ئەگەر يەر شارى مەرمەر تاش چوڭلۇقىدا قويۇقلاشسا، ئۇ قارا ئۆڭكۈرگە ئايلىنىدۇ. قانداقلا بولمىسۇن، بىر يۇلتۇزنىڭ بۇنداق كىچىك قىسىلىشى مۇمكىن ئەمەس.</p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 bg-[#05101a] rounded-xl border-2 border-cyan-700/50 p-4 flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-black rounded-full border-2 border-purple-500"></div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-dashed border-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 mt-24 text-cyan-300 font-bold">ۋەقە ئۇپۇقى</div>
                
                <div className="absolute bottom-4 text-center text-cyan-200 text-sm">
                  شۋارتسچىلد رادىئۇسى: ۋەقە ئۇپۇقىنىڭ چېگرىسى
                </div>
              </div>
              
              <div>
                <p>ئۇنداقتا قارا ئۆڭكۈرلەر قانداق شەكىللىنىدۇ؟</p>
                
                <p className="mt-4">ئەمەلىيەتتە، قارا ئۆڭكۈرلەر ئەسلىدە يۇلتۇزلار. يۇلتۇزلار يادرو بىرىكمىسى ئارقىلىق ئېنېرگىيە ھاسىل قىلىدۇ، ئەمما ئاخىرىدا ئۇلارنىڭ بىرىكىدىغان ئاتوملىرى تۈگىشىپ، يادرو بىرىكمىسى توختىيدۇ. بۇ يۇلتۇزنىڭ ئىچكى ئىتتىرىش كۈچىنى يوقىتىپ، ئۆزىنىڭ تارتىش كۈچىگە بەرداشلىق بېرەلمەي، تارتىش كۈچىنىڭ چۈشۈپ كېتىشىگە سەۋەب بولىدۇ.</p>
                
                <div className="bg-[#0a202a] border-l-4 border-green-500 p-4 rounded-r-lg mt-6">
                  <p className="font-content italic">تارتىش كۈچىنىڭ چۈشۈپ كېتىشى ماددىلارنىڭ مەركەزگە قاراپ يۈگۈرۈپ كىرىشىگە، سوقۇلۇشىغا ۋە ئېنېرگىيەنىڭ سىرتقا تارقىلىشىغا سەۋەب بولىدۇ. بۇ «دەرىجىدىن تاشقىرى يېڭى يۇلتۇز پارتىلىشى» دەپ ئاتىلىدۇ.</p>
                </div>
                
                <p className="mt-4">يۇلتۇزنىڭ بۇنداق سىقىلىشى قارا ئۆڭكۈر ياكى نېيترون يۇلتۇزىنىڭ شەكىللىنىشىگە سەۋەب بولىدۇ.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#0a1a25] rounded-xl border border-green-800/50">
              <div className="font-content italic text-green-300 mb-4">
                "ئەسكەرتىش: قارا ئۆڭكۈرگە ئايلىنىشقا يېتەرلىك چوڭلۇقتا بولمىغان يۇلتۇز دەرىجىدىن تاشقىرى يېڭى يۇلتۇزغا ئايلانغاندا، ئۇ نېيترون يۇلتۇزغا ئايلىنىدۇ، بۇ ئىنتايىن كۈچلۈك تارتىش كۈچىگە ئىگە جىسىم. يولدا، دەرىجىدىن تاشقىرى يېڭى يۇلتۇزلار تۇنجى قېتىم كۆزىتىلگەندە، ئۇلار يۇلتۇزنىڭ تۇغۇلۇش ۋاقتىنى ئىپادىلەيدۇ دەپ قارالغان، شۇڭا «دەرىجىدىن تاشقىرى يېڭى يۇلتۇز» دەپ ئاتالغان."
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="relative rounded-xl overflow-hidden border-2 border-green-700/50">
                  <img 
                    src="https://chandra.harvard.edu/photo/2013/casa/casa_comparison.gif" 
                    alt="Cassiopeia A سۇپېر نوۋا" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end p-3">
                    <div className="text-white text-sm">Cassiopeia A: سۇپېر نوۋا قېلىقى</div>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-[#05151a] rounded-xl p-4 border border-green-700/30">
                  <div className="text-center">
                    <div className="text-6xl mb-3">💥</div>
                    <div className="text-xl font-bold text-green-400">دەرىجىدىن تاشقىرى يېڭى يۇلتۇز</div>
                    <div className="text-green-300 mt-2">يۇلتۇزنىڭ ئاخىرقى پارتىلىشى</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Gravity and Space */}
        <section className="mb-16 bg-[#1a1525] rounded-2xl p-8 shadow-xl border border-indigo-900/30">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400 cursor-pointer flex items-center"
            onClick={() => toggleSection(3)}
          >
            3. تارتىش كۈچى ۋە بوشلۇق - نىسپىيلىك -
            <span className="ml-3 text-xl">{activeSection === 3 ? '▲' : '▼'}</span>
          </h2>
          
          <div className="font-content space-y-6">
            <p>ئۈمىد قىلىمەنكى، سىز ئەمدى قارا ئۆڭكۈرنىڭ نېمە ئىكەنلىكىنى چۈشىنىسىز.</p>
            
            <p>قانداقلا بولمىسۇن، ئالبېرت ئېينىشتېين ئوتتۇرىغا قويغان نىسپىيلىك نەزەرىيىسى قارا ئۆڭكۈرلەر بىلەن چەمبەرچاس باغلىنىدۇ. مەن بۇ يەردە نىسپىيلىك نەزەرىيىسى توغرىسىدا تەپسىلىي توختالمىساممۇ، قىسقىچە توختىلىپ ئۆتمەكچىمەن.</p>
            
            <div className="bg-[#252035] p-6 rounded-xl mb-8 border border-indigo-800/50">
              <div className="font-content">
                <p className="mb-3"><span className="text-indigo-300 font-bold">بىرىنچى</span>، نىسپىيلىكنىڭ ئىككى خىل تۈرى بار: ئالاھىدە نىسپىيلىك نەزەرىيىسى ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسى. ئالاھىدە نىسپىيلىك نەزەرىيىسى پەقەت تارتىش كۈچىسىز دۇنيادا مۇقىم سۈرئەتتە ھەرىكەت قىلىۋاتقان ئىنېرتسىيە رامكىسىنىڭ «ئالاھىدە» دۇنياسىنىلا كۆزدە تۇتىدىغان بىر نەزەرىيە. ئومۇمىي نىسپىيلىك نەزەرىيىسى تارتىش كۈچى ۋە تېزلەنگەن ھەرىكەتنى ئويلىشىپ، ئۇنى تېخىمۇ «ئومۇمىي» دۇنياغا كېڭەيتىدۇ.</p>
                
                <p>تارتىش كۈچى ناھايىتى سىرلىق كۈچ، ئەمما ئومۇمىي نىسپىيلىك نەزەرىيىسى ئۇنىڭ تولۇق دائىرىسىنى ئاشكارىلىدى.</p>
                
                <p className="mt-3 font-bold text-yellow-300">ئۇنىڭدا تارتىش كۈچى بوشلۇقنىڭ ماسسا جەھەتتىن بۇرمىلىنىشىدىن كېلىپ چىققان كۈچ دېيىلگەن.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p>قارا ئۆڭكۈرگە ئوخشاش ناھايىتى چوڭ يۇلتۇزغا كەلسەك، ئۇنىڭ ئەتراپىدىكى بوشلۇقمۇ زور دەرىجىدە بۇرمىلىنىدۇ، بۇنى يۇقىرىدىكى دىئاگراممىدا كۆرسىتىلگەن. تارتىش كۈچى ماددىلارنى ھاسىل بولغان چۆكمىگە تارتىدىغان كۈچ. بوشلۇقتىكى بۇ بۇرمىلىنىش قانچە چوڭ بولسا، ۋاقىتنىڭ ئېقىشى شۇنچە ئاستىلايدۇ.</p>
                
                <div className="mt-6 p-5 bg-[#151025] rounded-lg border-l-4 border-purple-500">
                  <p className="font-content italic text-purple-300">نىسپىيلىك نەزەرىيىسى ۋاقىتنىڭ ئېقىشىنىڭ مۇتلەق ئەمەسلىكىنى، بەلكى كۆزەتكۈچىنىڭ مۇھىتىغا ئاساسەن ئۆزگىرىدىغانلىقىنى چۈشەندۈرىدۇ.</p>
                </div>
              </div>
              
              <div className="relative h-80 bg-[#0a0515] rounded-xl border-2 border-indigo-700/50 p-4 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                
                <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center text-black font-bold text-2xl z-10">
                  ☀️
                </div>
                
                <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-dashed border-indigo-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
                     style={{ 
                       background: 'radial-gradient(circle, transparent 60%, rgba(99, 102, 241, 0.3) 100%)',
                       filter: 'blur(2px)'
                     }}>
                </div>
                
                <div className="absolute top-1/2 left-1/2 w-80 h-80 border-2 border-dashed border-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0"
                     style={{ 
                       background: 'radial-gradient(circle, transparent 70%, rgba(168, 85, 247, 0.2) 100%)',
                       filter: 'blur(3px)'
                     }}>
                </div>
                
                <div className="absolute bottom-6 text-center text-indigo-300 z-20">
                  <div className="font-bold text-lg">بوشلۇقنىڭ بۇرمىلىنىشى</div>
                  <div className="text-sm mt-1">ماسسا چوڭ بولغاندا بوشلۇق تېرەن بۇرۇلىدۇ</div>
                </div>
                
                {/* Grid lines showing curvature */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={`v-${i}`} 
                      className="absolute h-full border-l border-indigo-700/30"
                      style={{ left: `${i * 8.33}%`, transform: `translateX(-50%) skewY(${Math.sin(i/2) * 5}deg)` }}
                    ></div>
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={`h-${i}`} 
                      className="absolute w-full border-t border-indigo-700/30"
                      style={{ top: `${i * 14.28}%`, transform: `translateY(-50%) skewX(${Math.cos(i/1.5) * 5}deg)` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-[#151020] rounded-2xl p-10 shadow-2xl border border-pink-900/40 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-500">
            خۇلاسە
          </h2>
          
          <div className="font-content space-y-6 max-w-3xl mx-auto text-lg">
            <p>قارا ئۆڭكۈرلەر كىشىلەرنىڭ ئالەمگە قىزىقىشىنى قوزغاش ئۈچۈن ئېسىل تېما، ئەمما ئۇلارنى تەپسىلىي چۈشەندۈرۈش ئىنتايىن مۇرەككەپ ۋە چۈشىنىشسىز بولۇپ قالىدۇ. ئالەم، ۋاقىت، تارتىش كۈچى، نۇر... ئالەم ئەقلىي قىزىقىشنى قوزغىتىدىغان تېمىلارغا تولغان، ۋە نۇرغۇن نەرسىلەرنى بايقاشقا توغرا كېلىدۇ.</p>
            
            <p>مەن فىزىكا، بولۇپمۇ ئېلېمېنتار زەررىچىلەر ساھەسىنىڭ ئەڭ مۇرەككەپ تەتقىقات ساھەسى ئىكەنلىكىگە ئىشىنىمەن. فىزىكا ئىنتايىن قىيىن بولغاچقا، مەسىلىلەرنى چۈشىنىش، تەسەۋۋۇر قىلىش ۋە ھەل قىلىش ئۈچۈن ھەر خىل ئۇسۇللارنى قوللىنىشىڭىز كېرەك. فىزىكا ئۆگىنىش ھەر خىل نۇقتىلاردىن ئويلىنىش ۋە ئەڭ ئاسان يول بىلەن جاۋابقا يېتىش مەشىقىدۇر.</p>
            
            <div className="bg-[#251530] border-l-4 border-amber-400 p-6 rounded-r-xl mt-6">
              <p className="text-amber-300 italic text-xl">
                "سەن ئالىم ياكى تەتقىقاتچى بولمىسىڭىزمۇ، بۇ قابىلىيەت قانداق خىزمەتنى تاللىسىڭىز پايدىلىق بولىدۇ، ھەمدە «چۈشىنەلمەيدىغان» نەرسىلەرنىڭ سانىنى زور دەرىجىدە ئازايتىدۇ. شۇڭلاشقا، مەن بالىلارنىڭ پەننى تاللىشىنى قاتتىق تەۋسىيە قىلىمەن."
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-[#1a0a25] rounded-xl border border-purple-800/50">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-7xl">🔭</div>
                <div className="font-content text-xl text-purple-300 text-center md:text-right">
                  "ئىككى كۆزۈڭ بىلەن كۆرگىنىڭنى، يۈز كۆزۈڭ بىلەن ساقلا" — ئۇيغۇر ئاتا سۆزى
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl">
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 mb-4">
                2026-يىلى ئۇيغۇر كىۋانىت يىلىدا، ياشلارنىڭ فىزىكا سىرلىرىنى كەشپ قىلىشىنى قىزغىن تىلەيمىز!
              </p>
              <p className="text-lg text-pink-300 mt-2">
                پەن سىزنىڭ قولۇڭىزدا، كەلگۈسى سىزنىڭ تەسۋىرىڭىزدە!
              </p>
            </div>
          </div>
        </section>

        {/* Footer with Proverb */}
        <footer className="text-center pt-8 border-t border-purple-900/50 mt-8">
          <div className="bg-[#1a1525] inline-block p-6 rounded-2xl mb-6">
            <div className="text-2xl font-bold text-yellow-300 mb-3">ئۇيغۇر خەلقىنىڭ پەنگە بولغان قىزىقىشى</div>
            <div className="font-content text-xl italic text-green-300 max-w-2xl mx-auto">
              "ئۇيغۇرنىڭ  پەن مائارىپى دۇنيادىكى ئەڭ ياخشى ساھەلەرنىڭ بىرى، ئەمما مەن پەننى سۆيىدىغان كىشىلەر ناھايىتى ئاز دەپ قارايمەن. مەن مۇمكىن قەدەر كۆپ بالىنىڭ پەنگە قىزىقىشىنى ۋە كەلگۈسىدە ئۇيغۇر خەلقىنىڭ پەن ساھەسىدە دۇنيادا ئالدىنقى قاتاردا تۇرۇشىنى ئۈمىد قىلىمەن."
            </div>
          </div>
          
          <div className="mt-8 text-purple-400 text-sm">
            © 2026 KeLBiL - ئۇيغۇر كىۋانىت تېخنىكا يىلى | ھوقۇقى قوغدالغان
          </div>
        </footer>
      </div>

      {/* Floating Action Button for Mobile */}
      {isMobile && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-purple-700 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="يۇقىرى كۆتۈرۈش"
          >
            ↑
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog113;