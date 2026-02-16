// Blog112.jsx
import React, { useState, useEffect } from 'react';
import { FaShare, FaWhatsapp, FaTelegram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Blog114 = () => {
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
    const title = "ئالاھىدە ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ پۈتۈنلەي چۈشەندۈرۈلۈشى | كىۋانىت 2026";
    const text = "ئالبېرت ئېينىشتېينىڭ نىسپىيلىك نەزەرىيىسىنىڭ سىرلىق دۇنياسىنى كەشپ قىلىڭ! ئالاھىدە ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ پۈتۈنلەي چۈشەندۈرۈلۈشى";
    
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
          <div className="text-left mb-4 md:mb-0">
            <div className="text-4xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
              KeLBiL
            </div>
            <div className="text-purple-300 text-center italic text-lg"> UYGHUR HIGH TECH  </div>
            </div>
          <div className="text-right">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-yellow-400 via-orange-500 to-red-600 ">
              2026-يىلى ئۇيغۇر كىۋانىت
            </div>
           <div className="text-lg text-center text-green-400 font-semibold">ئىلىم بىلەن تېخنىكا بىرلىشىدۇ </div>
          </div>
        </div>

        {/* Article Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 leading-tight">
            ئالاھىدە ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ پۈتۈنلەي چۈشەندۈرۈلۈشى
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-lg">
            <div>  </div>
            <div> ۋاقتى: 2026-يىلى 1-ئاينىڭ 17-كۈنى</div>
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
              <span>ئالاھىدە ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ ئاساسىي پەرقى</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              <span>ئالاھىدە نىسپىيلىك نەزەرىيىسى (1905-يىل)</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              <span>ئومۇمىي نىسپىيلىك نەزەرىيىسى (1915-يىل)</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              <span>نىسپىيلىك نەزەرىيىسىنىڭ كۈندىلىك تۇرمۇشتىكى تەسىرى</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-2">•</span>
              <span>خۇلاسە ۋە ياشلارغا تەۋسىيە</span>
            </li>
          </ul>
        </div>

        {/* Introduction Section */}
        <section className="mb-16 bg-[#15152a] rounded-2xl p-8 shadow-xl border border-purple-900/30">
          <div className="font-content text-xl mb-6">
            <strong>ئالبېرت ئېينىشتېين</strong> تارىخىمىزدىكى ئەڭ زور فىزىكىچىلاردىن بىرى بولۇپ، ئۇ 20-ئەسىرنىڭ باشىدا ئىنسانىيەتنىڭ دۇنيا قارىشىنى تۈگۈتكۈزگۈچى ئىككى تارىخىي نەزەرىيەنى ياراتقان. بۇ نەزەرىيەلەر <strong>ئالاھىدە نىسپىيلىك نەزەرىيىسى</strong> ۋە <strong>ئومۇمىي نىسپىيلىك نەزەرىيىسى</strong> دېگەن ئىككى بۆلەكتىن تەركىب تاپقان بولۇپ، بۇلار بىزگە ۋاقىت، بوشلۇق، تارتىش كۈچى قاتارلىق تۇنۇشۇملارنى پۈتۈنلەي قايتا قارىتىشىمىزنى تەلەپ قىلىدۇ.
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative rounded-xl overflow-hidden border-2 border-purple-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 z-10 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-5xl mb-2"></div>
                  <div className="text-lg font-bold">ئالبېرت ئېينىشتېين</div>
                  <div className="text-sm text-purple-300 mt-2">1879-1955</div>
                </div>
              </div>
              <img 
                src="https://i.makeagif.com/media/4-01-2014/TlHPjQ.gif" 
                alt="ئالبېرت ئېينىشتېين" 
                className="w-full h-64 md:h-80 object-cover opacity-80"
              />
            </div>
            
            <div className="font-content space-y-4">
              <p>بۇ ئىككى نەزەرىيەنىڭ ئاساسىي پەرقى شۇكى، <strong>ئالاھىدە نىسپىيلىك نەزەرىيىسى</strong> پەقەت تارتىش كۈچى يوق دۇنيادا مۇقىم سۈرئەتتە ھەرىكەت قىلىۋاتقان جىسىملارنىلا كۆزدە تۇتىدۇ، بولۇپمۇ <strong>ئومۇمىي نىسپىيلىك نەزەرىيىسى</strong> تارتىش كۈچى ۋە تېزلەنگەن ھەرىكەتنىمۇ ئۆز ئىچىگە ئالىدۇ.</p>
              
              <div className="bg-[#252545] border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                <p className="italic">"ئالاھىدە نىسپىيلىك نەزەرىيىسى ھەممىگە چۈشىنىشقا قىيىن، لېكىن ئومۇمىي نىسپىيلىك نەزەرىيىسىنى چۈشىنگەن كىشى بۇ دۇنيادا پەقەت ئۈچ كىشىلا بار" — ئالبېرت ئېينىشتېين</p>
              </div>
              
              <p>بۇ يازمىدا بىز بۇ ئىككى نەزەرىيىنىڭ نېمە ئىكەنلىكىنى، قانداق پەرق قىلىدىغانلىقىنى ۋە بىزنىڭ كۈندىلىك تۇرمۇشىمىزغا قانداق تەسىر كۆرسىتىدىغانلىقىنى پۈتۈنلەي چۈشەندۈرۈپ بېرىمىز.</p>
            </div>
          </div>
        </section>

        {/* Section 1: Core Differences */}
        <section className="mb-16 bg-[#1a152a] rounded-2xl p-8 shadow-xl border border-pink-900/30">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-pink-400 cursor-pointer flex items-center"
            onClick={() => toggleSection(1)}
          >
            1. ئالاھىدە ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ ئاساسىي پەرقى
            <span className="ml-3 text-xl">{activeSection === 1 ? '▲' : '▼'}</span>
          </h2>
          
          {activeSection === 1 && (
            <div className="bg-[#251a35] p-6 rounded-xl mb-8 border border-pink-800/50">
              <div className="font-content italic text-lg text-pink-200">
                "ئالاھىدە نىسپىيلىك نەزەرىيىسى تارتىش كۈچى يوق دۇنيانى كۆزدە تۇتىدۇ، ئومۇمىي نىسپىيلىك نەزەرىيىسى بولسا ھەقىقىي دۇنيانى تەسۋىرلەيدۇ"
              </div>
            </div>
          )}
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-[#151025] rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-pink-800 to-purple-900">
                  <th className="border border-pink-700/50 p-4 text-left font-bold">ئۈلگىرىش</th>
                  <th className="border border-pink-700/50 p-4 text-left font-bold">ئالاھىدە نىسپىيلىك نەزەرىيىسى (1905)</th>
                  <th className="border border-pink-700/50 p-4 text-left font-bold">ئومۇمىي نىسپىيلىك نەزەرىيىسى (1915)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-pink-700/30">
                  <td className="border border-pink-700/30 p-4 font-bold text-pink-300">كۆزىتىش دائىرىسى</td>
                  <td className="border border-pink-700/30 p-4">تارتىش كۈچى يوق دۇنيا، مۇقىم سۈرئەتتە ھەرىكەت قىلىۋاتقان جىسىملار</td>
                  <td className="border border-pink-700/30 p-4">تارتىش كۈچى ۋە تېزلەنگەن ھەرىكەتنى ئۆز ئىچىگە ئالىدۇ</td>
                </tr>
                <tr className="border-b border-pink-700/30 bg-[#1a1525]/50">
                  <td className="border border-pink-700/30 p-4 font-bold text-pink-300">تارتىش كۈچى</td>
                  <td className="border border-pink-700/30 p-4">تارتىش كۈچىنى ئويلىمايدۇ</td>
                  <td className="border border-pink-700/30 p-4">تارتىش كۈچى = بوشلۇقنىڭ بۇرمىلىنىشى</td>
                </tr>
                <tr className="border-b border-pink-700/30">
                  <td className="border border-pink-700/30 p-4 font-bold text-pink-300">نەزەرىيىنىڭ تەبىئىتى</td>
                  <td className="border border-pink-700/30 p-4">"ئالاھىدە" چەكلىك ھالەت</td>
                  <td className="border border-pink-700/30 p-4">"ئومۇمىي" كېڭ دائىرىلىك نەزەرىيە</td>
                </tr>
                <tr className="border-b border-pink-700/30 bg-[#1a1525]/50">
                  <td className="border border-pink-700/30 p-4 font-bold text-pink-300">ماتىماتىكىلىق مۇرەككەپلىك</td>
                  <td className="border border-pink-700/30 p-4">ئوتتۇرا مەكتەپ ماتىماتىكىسى دەرىجىسى</td>
                  <td className="border border-pink-700/30 p-4">يۇقىرى دەرىجىلىك دىفىفىرېنسىئال گېئومېتىرىيە</td>
                </tr>
                <tr>
                  <td className="border border-pink-700/30 p-4 font-bold text-pink-300">ئاساسىي قانۇنلار</td>
                  <td className="border border-pink-700/30 p-4">نىسپىيلىك پرىنسىپى، نۇر سۈرئىتىنىڭ ئۆزگىرمەسلىكى</td>
                  <td className="border border-pink-700/30 p-4">تەڭلىك پرىنسىپى، بوشلۇق-ۋاقىت گېئومېتىرىيىسى</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="font-content space-y-6">
            <p>بۇ جەدۋەلدە كۆرۈلگەندەك، <strong>ئالاھىدە نىسپىيلىك نەزەرىيىسى</strong> بىر خىل سادە ۋە چەكلىك نەزەرىيە بولۇپ، تارتىش كۈچى يوق ۋە مۇقىم سۈرئەتتە ھەرىكەت قىلىۋاتقان جىسىملارنىلا كۆزدە تۇتىدۇ. بولۇپمۇ <strong>ئومۇمىي نىسپىيلىك نەزەرىيىسى</strong> بولسا دۇنيانىڭ ھەقىقىي ھالىتىنى تەسۋىرلەيدۇ، بۇ نەزەرىيە تارتىش كۈچى ۋە تېزلەنگەن ھەرىكەتنىمۇ ئۆز ئىچىگە ئالىدۇ.</p>
            
            <div className="bg-[#152535] border-l-4 border-cyan-400 p-5 rounded-r-lg mt-6">
              <p className="font-content">
                <strong>مىسال:</strong> ئالاھىدە نىسپىيلىك نەزەرىيىسىنى تېلېفوندا يۇقىرى تېزلىكتە ئۇچقان يۇلتۇزنىڭ يېرىنى ھېسابلاشقا ئىشلىتىشكە بولىدۇ، لېكىن يېر شارىنىڭ تارتىش كۈچى تۈپىدىن پايدا بولغان تېزلەنگەن ھەرىكەتنى ھېسابلاشقا بولمايدۇ. بۇ ۋاقىتتا ئومۇمىي نىسپىيلىك نەزەرىيىسىنى ئىشلىتىش كېرەك.
              </p>
            </div>
            
            <p className="mt-6 font-bold text-lg text-yellow-300">ئۇنداقتا، بۇ ئىككى نەزەرىيىنىڭ ھەر بىرى قانداق پرىنسىپلارغا ئاساسلانغان؟</p>
          </div>
        </section>

        {/* Section 2: Special Relativity */}
        <section className="mb-16 bg-[#151a2a] rounded-2xl p-8 shadow-xl border border-cyan-900/30">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 cursor-pointer flex items-center"
            onClick={() => toggleSection(2)}
          >
            2. ئالاھىدە نىسپىيلىك نەزەرىيىسى (1905-يىل)
            <span className="ml-3 text-xl">{activeSection === 2 ? '▲' : '▼'}</span>
          </h2>
          
          <div className="font-content space-y-6">
            <p><strong>ئالاھىدە نىسپىيلىك نەزەرىيىسى</strong> 1905-يىلى ئالبېرت ئېينىشتېين تەرىپىدىن يارىتىلغان بولۇپ، بۇ نەزەرىيەنىڭ ئاساسىغا ئىككى خىل پرىنسىپ ياتىدۇ:</p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#0a202a] border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">1. نىسپىيلىك پرىنسىپى</h3>
                  <p>فىزىكا قانۇنلىرى بارلىق ئىنېرتسىيە رامكىلىرىدا (مۇقىم سۈرئەتتە ھەرىكەت قىلىۋاتقان كۆزىتىشچىلاردا) بىر خىل بولىدۇ.</p>
                </div>
                
                <div className="bg-[#0a202a] border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">2. نۇر سۈرئىتىنىڭ ئۆزگىرمەسلىكى</h3>
                  <p>ۋاقىتىدا نۇرنىڭ سۈرئىتى (تەخمىنەن 300 مىڭ كىلومېتىر/سېكۇنت) كۆزىتىشچىنىڭ ھەرىكەت ھالىتىگە قارامىغان ھالدا دائىم ئۆزگەرمەيدۇ.</p>
                </div>
                
                <p className="mt-6">بۇ ئىككى پرىنسىپتىن كېلىپ چىققان بىر قاتار غەلىتە ھادىسەلەر بار:</p>
              </div>
              
              <div className="relative h-80 bg-[#05101a] rounded-xl border-2 border-cyan-700/50 p-4 flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-2xl">
                    E=mc²
                  </div>
                </div>
                
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-orange-500 rounded-full animate-ping-slow"
                     style={{ transform: 'translate(-50%, -50%) rotate(30deg) translateX(80px)' }}>
                </div>
                <div className="absolute text-orange-300 text-sm top-1/4 left-1/4 mt-8 ml-20">ۋاقىت كېچىكىدۇ</div>
                
                <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-purple-400 rounded-full animate-ping-slow"
                     style={{ transform: 'translate(-50%, -50%) rotate(-20deg) translateX(100px)' }}>
                </div>
                <div className="absolute text-purple-300 text-sm top-3/4 right-1/4 mt-8 mr-24">ئۇزۇنلۇق قىسقىرىدۇ</div>
                
                <div className="absolute bottom-6 text-center text-cyan-300">
                  <div className="font-bold text-lg">ئالاھىدە نىسپىيلىك نەتىجىلىرى</div>
                  <div className="text-xs mt-1">ۋاقىت كېچىكىش، ئۇزۇنلۇق قىسقىرىش، ماسسا ئاشۇش</div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a2535] p-6 rounded-xl mb-8 border border-blue-800/50">
              <h3 className="text-xl font-bold text-blue-300 mb-4">ئالاھىدە نىسپىيلىك نەزەرىيىسىنىڭ ئاساسىي نەتىجىلىرى:</h3>
              
              <div className="space-y-4">
                <div>
                  <strong className="text-blue-400">1. ۋاقىتنىڭ كېچىكىشى:</strong> يۇقىرى سۈرئەتتە ھەرىكەت قىلىۋاتقان سائەت تىنچ تۇرغان سائەتكە قارىغاندا ئاستىراق كېتىدۇ.
                  <div className="mt-2 bg-[#0a1525] p-3 rounded-lg">
                    <code className="text-blue-300">t = t₀ / √(1 - v²/c²)</code>
                    <p className="text-sm mt-2 text-blue-200">(مەسىلەن: يۇلتۇز كېمىسى نۇر سۈرئىتىنىڭ 87% بىلەن 1 يىل يۈرگەندە، يېر شارىدا 2 يىل ئۆتكەن بولىدۇ)</p>
                  </div>
                </div>
                
                <div>
                  <strong className="text-blue-400">2. ئۇزۇنلۇقنىڭ قىسقىرىشى:</strong> ھەرىكەت يۆنىلىشىدە جىسىملار قىسقىرىپ كۆرۈنىدۇ.
                </div>
                
                <div>
                  <strong className="text-blue-400">3. ماسسانىڭ ئاشۇشى:</strong> سۈرئەت ئاشقان سايىن جىسىمنىڭ ماسسىسى ئاشىدۇ (نۇر سۈرئىتىگە يېتىش مۇمكىن ئەمەس).
                </div>
                
                <div>
                  <strong className="text-blue-400">4. E=mc²:</strong> ماسسا ۋە ئېنېرگىيەنىڭ تەڭلىكى (يادرو ئېنېرگىيىسىنىڭ نەزەرىيەيىلىك ئاساسى).
                </div>
              </div>
            </div>
            
            <div className="bg-[#252035] border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-content italic text-red-300">
                "ئالاھىدە نىسپىيلىك نەزەرىيىسىنىڭ چەكلىمىسى: تارتىش كۈچى بار ھەقىقىي دۇنيادا ئىشلىتىشكە بولمايدۇ. يېر شارىنىڭ تارتىش كۈچى ياكى تېزلەنگەن يۇلتۇز كېمىسىدە بۇ نەزەرىيىنى قوللىنىش مۇمكىن ئەمەس."
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: General Relativity */}
        <section className="mb-16 bg-[#1a1525] rounded-2xl p-8 shadow-xl border border-indigo-900/30">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400 cursor-pointer flex items-center"
            onClick={() => toggleSection(3)}
          >
            3. ئومۇمىي نىسپىيلىك نەزەرىيىسى (1915-يىل)
            <span className="ml-3 text-xl">{activeSection === 3 ? '▲' : '▼'}</span>
          </h2>
          
          <div className="font-content space-y-6">
            <p><strong>ئومۇمىي نىسپىيلىك نەزەرىيىسى</strong> 1915-يىلى ئالبېرت ئېينىشتېين تەرىپىدىن يارىتىلغان بولۇپ، بۇ نەزەرىيە نىسپىيلىك نەزەرىيىسىنىڭ كېڭەيتىلگەن شەكلىدۇر. بۇ نەزەرىيىنىڭ ئەڭ مۇھىم يېڭىلىقى شۇكى، تارتىش كۈچىنى بىر خىل كۈچ دەپ قارىماستىن، <strong>بوشلۇق-ۋاقىتنىڭ بۇرمىلىنىشىنىڭ نەتىجىسى</strong> دەپ تەسۋىرلىگەن.</p>
            
            <div className="bg-[#252035] p-6 rounded-xl mb-8 border border-indigo-800/50">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">ئومۇمىي نىسپىيلىك نەزەرىيىسىنىڭ ئاساسىي پرىنسىپى: تەڭلىك پرىنسىپى</h3>
              
              <div className="font-content">
                <p className="mb-3">"<strong>تارتىش كۈچى بار بولغان مۇھىتتا ئەركىن تۈشۈش</strong>" ۋە "<strong>تارتىش كۈچى يوق بولغان بوشلۇقتا ئىنېرتسىيە ھەرىكىتى</strong>" بىر-بىرىدىن پەرقلەندۈرۈشكە بولمايدۇ.</p>
                
                <p className="mt-3 italic text-yellow-300">
                  مىسال: ئېلېۋاتورنىڭ چىڭى قىزىلغاندا، ئىچىدىكى كىشىگە تارتىش كۈچى يوقىغاندەك ھېس قىلىدۇ.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4">تارتىش كۈچىنىڭ ھەقىقىي تەبىئىتى: بوشلۇق-ۋاقىت گېئومېتىرىيىسى</h3>
                
                <p>ماسسا ۋە ئېنېرگىيە <strong>بوشلۇق-ۋاقىتنى بۇرمىلىنىدۇ</strong>. جىسىملار بۇ بۇرمىلىنىشنىڭ ئىچىدە ئەڭ قىسقا يولنى (ئۆلچەم سىزىق) بويىچە يۈرىدۇ، بۇنى بىز تارتىش كۈچى دەپ قارايمىز.</p>
                
                <div className="bg-[#151025] p-4 rounded-lg mt-4 border border-purple-700/50">
                  <p className="text-purple-300">
                    <code className="text-lg">
                      يۇلتۇزنىڭ ماسسىسى → ئەتراپىدىكى بوشلۇق-ۋاقىتنى چۆكتۈرىدۇ → يېر شارى بۇ چۆكۈكنىڭ يۆنىلىشىدە ئايلىنىدۇ
                    </code>
                  </p>
                </div>
                
                <div className="mt-6 p-5 bg-[#151025] rounded-lg border-l-4 border-purple-500">
                  <p className="font-content italic text-purple-300">
                    بۇ بۇرمىلىنىش قانچە چوڭ بولسا، ۋاقىتنىڭ ئېقىشى شۇنچە ئاستىلايدۇ. نىسپىيلىك نەزەرىيىسى ۋاقىتنىڭ ئېقىشىنىڭ مۇتلەق ئەمەسلىكىنى، بەلكى كۆزىتىشچىنىڭ مۇھىتىغا ئاساسەن ئۆزگىرىدىغانلىقىنى چۈشەندۈرىدۇ.
                  </p>
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
                  <div className="font-bold text-lg">بوشلۇق-ۋاقىتنىڭ بۇرمىلىنىشى</div>
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
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">كۆزىتىشلەر بىلەن دەلىللەنگەن پىشىرەشلەر:</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-[#15202a] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-800 to-teal-900">
                      <th className="border border-green-700/50 p-4 text-left font-bold">ھادىسە</th>
                      <th className="border border-green-700/50 p-4 text-left font-bold">چۈشەندۈرۈش</th>
                      <th className="border border-green-700/50 p-4 text-left font-bold">دەلىللەنگەن يىل</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-700/30">
                      <td className="border border-green-700/30 p-4 font-bold text-green-300">مېركۇرىيىنىڭ يېقىن نۇقتىسىنىڭ يۆتكىلىشى</td>
                      <td className="border border-green-700/30 p-4">نۇيۇتون مېخانىكىسىدا چۈشەندۈرگىلى بولمايدىغان مەسىلە</td>
                      <td className="border border-green-700/30 p-4">1859-يىلى كۆزىتىلگەن، 1915-يىلى چۈشەندۈرۈلگەن</td>
                    </tr>
                    <tr className="border-b border-green-700/30 bg-[#1a2530]/50">
                      <td className="border border-green-700/30 p-4 font-bold text-green-300">نۇرنىڭ بۇغۇلىشى</td>
                      <td className="border border-green-700/30 p-4">قۇياش يېنىدىن ئۆتكەن يۇلتۇزلارنىڭ نۇرى بۇغۇلىدۇ</td>
                      <td className="border border-green-700/30 p-4">1919-يىل (ئېدىنتون كۆزىتىشى)</td>
                    </tr>
                    <tr className="border-b border-green-700/30">
                      <td className="border border-green-700/30 p-4 font-bold text-green-300">تارتىش قىزىل يۆتكىلىشى</td>
                      <td className="border border-green-700/30 p-4">تارتىش كۈچى بار مۇھىتتا نۇر تولۇقۇنىڭ ئۇزۇنلۇقى ئۇزايىدۇ</td>
                      <td className="border border-green-700/30 p-4">1960-يىل (پوندېرۆزا تەجرىبىسى)</td>
                    </tr>
                    <tr className="border-b border-green-700/30 bg-[#1a2530]/50">
                      <td className="border border-green-700/30 p-4 font-bold text-green-300">تارتىش تولۇقى</td>
                      <td className="border border-green-700/30 p-4">تېزلەنگەن ماسسا بوشلۇقتا تولۇق پايدا قىلىدۇ</td>
                      <td className="border border-green-700/30 p-4">2015-يىل (LIGO دا تۇنجى قېتىم كۆزىتىلگەن)</td>
                    </tr>
                    <tr>
                      <td className="border border-green-700/30 p-4 font-bold text-green-300">قارا ئۆڭكۈر</td>
                      <td className="border border-green-700/30 p-4">بوشلۇق-ۋاقىت چىرايلىق بۇرۇلغاندا نۇر چىقىپ كېتەلمەيدۇ</td>
                      <td className="border border-green-700/30 p-4">2019-يىل (ئېيىنتىخاب گىرۇپپىسى تەرىپىدىن تۇنجى قېتىم سۈرەتكە تارتىلغان)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#0a1a25] rounded-xl border border-green-800/50">
              <h3 className="text-xl font-bold text-green-400 mb-4">ئالەمگە قوللىنىش:</h3>
              
              <ul className="space-y-3 font-content">
                <li>• بىگ بانگ ئالەم مودېلىنىڭ نەزەرىيەيىلىك ئاساسى</li>
                <li>• ئالەمنىڭ كېڭىيىشى (فىرىدمان تەڭلىمىسى)</li>
                <li>• قارا ئېنېرگىيە تۇنۇشۇمى (ئالەم دوۋاملىقى Λ)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Everyday Applications */}
        <section className="mb-16 bg-[#151a2a] rounded-2xl p-8 shadow-xl border border-yellow-900/30">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 cursor-pointer flex items-center"
            onClick={() => toggleSection(4)}
          >
            4. نىسپىيلىك نەزەرىيىسىنىڭ كۈندىلىك تۇرمۇشتىكى تەسىرى
            <span className="ml-3 text-xl">{activeSection === 4 ? '▲' : '▼'}</span>
          </h2>
          
          <div className="font-content space-y-6">
            <p>نىسپىيلىك نەزەرىيىسى پەقەت تېئورىيە بولۇپلا قالماستىن، بىزنىڭ كۈندىلىك تۇرمۇشىمىزغا تەسىر كۆرسىتىدۇ:</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#252030] p-6 rounded-xl border border-yellow-700/50">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">GPS ناۋىگاتسىيە سىستېمىسى</h3>
                <p>GPS سىستېمىسىنىڭ يۇلتۇزلىرى يېر شارىنىڭ تارتىش كۈچىنىڭ تەسىرىدە ۋاقىت كېچىكىدۇ. ئالاھىدە ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسىنى ھېسابقا ئالمىسا، ھەر كۈنى <strong>10 كىلومېتىردىن ئېشىپ كېتىدۇ</strong>.</p>
              </div>
              
              <div className="bg-[#252030] p-6 rounded-xl border border-yellow-700/50">
                <div className="text-5xl mb-4">⚛️</div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">يادرو ئېنېرگىيىسى</h3>
                <p>E=mc² فورمۇلىسى يادرو بىرىكمىسى ۋە يادرو بۆلۈنمىسى جەريانىدا چوڭ مىقداردا ئېنېرگىيە پايدا بولۇشىنى تەسۋىرلەيدۇ. بۇ نەزەرىيە يادرو قوراللىرى ۋە يادرو سېكىتىنىڭ ئاساسى.</p>
              </div>
              
              <div className="bg-[#252030] p-6 rounded-xl border border-yellow-700/50">
                <div className="text-5xl mb-4">🌌</div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">ئالەمنىڭ قۇرۇلۇشى</h3>
                <p>ئومۇمىي نىسپىيلىك نەزەرىيىسى بىگ بانگ نەزەرىيىسى، قارا ئۆڭكۈرلەر، ۋە ئالەمنىڭ كېڭىيىشىنى چۈشىنىشنىڭ ئاساسى.</p>
              </div>
              
              <div className="bg-[#252030] p-6 rounded-xl border border-yellow-700/50">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">ۋاقىت ۋە بوشلۇقنىڭ مۇناسىۋىتى</h3>
                <p>نىسپىيلىك نەزەرىيىسى بىزگە ۋاقىت ۋە بوشلۇقنىڭ بىر-بىرى بىلەن باغلىقىنى چۈشىنىشكە ياردەم بېرىدۇ. بۇ بىزنىڭ دۇنيا قارىشىمىزنى تۈگۈتكۈزگۈچى تۇنۇشۇم.</p>
              </div>
            </div>
            
            <div className="mt-8 bg-[#1a1525] p-6 rounded-xl border-l-4 border-amber-500">
              <p className="font-content italic text-amber-300 text-xl">
                "نىسپىيلىك نەزەرىيىسى بىزگە دۇنيانىڭ قانداق قۇرۇلغانلىقىنى چۈشىنىشكە ياردەم بېرىدۇ. بۇ پەقەت فىزىكىچىلارنىڭ پەن بولۇپلا قالماستىن، ھەر بىر كىشىنىڭ دۇنيا قارىشىنى قايتا قۇرۇشىنى تەلەپ قىلىدۇ."
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="bg-[#151020] rounded-2xl p-10 shadow-2xl border border-pink-900/40 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-500">
            خۇلاسە ۋە ياشلارغا تەۋسىيە
          </h2>
          
          <div className="font-content space-y-6 max-w-3xl mx-auto text-lg">
            <p>ئالاھىدە ۋە ئومۇمىي نىسپىيلىك نەزەرىيىسى بىزگە دۇنيانىڭ قانداق قۇرۇلغانلىقىنى چۈشىنىشكە ياردەم بېرىدۇ. بۇ نەزەرىيەلەر بىزنىڭ ۋاقىت، بوشلۇق، تارتىش كۈچى قاتارلىق تۇنۇشۇملارىمىزنى پۈتۈنلەي قايتا قۇرۇشىمىزنى تەلەپ قىلىدۇ.</p>
            
            <div className="bg-[#251530] border-l-4 border-amber-400 p-6 rounded-r-xl mt-6">
              <p className="text-amber-300 italic text-xl">
                "نىسپىيلىك نەزەرىيىسىنى چۈشىنىش بىزگە بىر قەدەر قىيىن بولۇشى مۇمكىن، لېكىن بۇ بىزنىڭ ئويلىنىش قابىلىيىتىمىزنى ياخشىلايدۇ. بىز پەقەت فىزىكىچى بولۇشىمىز شەرت ئەمەس، ھەر خىل كەسپىدە بۇ تەفەككۇر ئۇسۇلىنى قوللىنىشىمىز مۇمكىن."
              </p>
            </div>
            
            <p>يىگىت-قىز بالىلارغا تەۋسىيە:</p>
            
            <ul className="space-y-3 bg-[#1a1525] p-6 rounded-lg border border-purple-700/50">
              <li>• فىزىكا بىر قەدەر قىيىن بولسىمۇ، بىر قەدەم بىر قەدەم ئىلگىرلەپ بارىڭ</li>
              <li>• مۇرەككەپ تۇنۇشۇملارنى سادە مىساللار بىلەن چۈشىنىشىڭىز كېرەك</li>
              <li>• ھەر خىل كىتابلارنى ئوقۇپ، كۆپ تەجرىبىلەرنى قىلىپ بېقىڭ</li>
              <li>• سۈرەت ۋە دىئاگراممىلارنى كۆرۈپ، تۇنۇشۇملارنى كۆزگە كۆرۈنەرلىك قىلىڭ</li>
            </ul>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl">
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
              "فىزىكا بىر قەدەر قىيىن بولسا، بىزنىڭ ئويلىنىش قابىلىيىتىمىزنى ياخشىلايدۇ. بىز پەقەت فىزىكىچى بولۇشىمىز شەرت ئەمەس، ھەر خىل كەسپىدە بۇ تەفەككۇر ئۇسۇلىنى قوللىنىشىمىز مۇمكىن. بىزنىڭ مەقسىتىمىز پەننى ياخشى كۆرگەن ياشلارنى تەربىيەلەش."
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

export default Blog114;