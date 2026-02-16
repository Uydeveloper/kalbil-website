import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const injectUyghurFont = () => {
  if (!document.fonts || document.fonts.check('16px "Noto Nastaliq Uyghur"')) return;
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Uyghur:wght@400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

export default function Blog18() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    injectUyghurFont();
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: 'فىزىكا دۇنياسىنىڭ ئىككى چوڭ ئېغىر تاشلىرى',
        text: 'كلاسسىك فيزىكا بىلەن كۋانت نەزەرىيىسىنىڭ «تىرلىشىشى»نى بىتۈرۈش ئۇسۇلى',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`p-3 rounded-full shadow-lg backdrop-blur-sm border ${isLiked ? 'bg-red-500/20 border-red-400/30' : 'bg-gray-900/50 border-gray-700/50'}`}
          aria-label="ياخشى"
        >
          <svg className={`w-6 h-6 ${isLiked ? 'text-red-400' : 'text-gray-400'}`} fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`p-3 rounded-full shadow-lg backdrop-blur-sm border ${isBookmarked ? 'bg-yellow-500/20 border-yellow-400/30' : 'bg-gray-900/50 border-gray-700/50'}`}
          aria-label="ساقلاش"
        >
          <svg className={`w-6 h-6 ${isBookmarked ? 'text-yellow-400' : 'text-gray-400'}`} fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={shareArticle}
          className="p-3 rounded-full shadow-lg backdrop-blur-sm bg-gray-900/50 border border-gray-700/50"
          aria-label="ھەمبەھىرلەش"
        >
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </motion.button>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 10 ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 shadow-xl z-40"
        aria-label="ئۈستىگە قايتىش"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border border-blue-800/40 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
            alt="كلاسسىك فيزىكا ۋە كۋانت فيزىكىسى"
            className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-600/90 to-blue-700/90 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              فىزىكا | نەزەرىيە | كۋانت مېخانىكىسى
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-relaxed mb-8 px-4"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", lineHeight: '1.8' }}
        >
          فىزىكا دۇنياسىنىڭ ئىككى چوڭ ئېغىر تاشلىرى: 
          <span className="block mt-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            كلاسسىك نەزەرىيە بىلەن كۋانت نەزەرىيىسىنىڭ «تىرلىشىشى»
          </span>
        </motion.h1>

        {/* Author & Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 px-4 py-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-blue-900/30 border border-gray-800/50 backdrop-blur-sm"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center font-bold text-lg">
              ق
            </div>
            <div>
              <div className="font-semibold text-lg">قاۋۇلجان</div>
              <div className="text-blue-300/80">فىزىكا ئىزدەنگۈچىسى</div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-blue-300 font-medium">2025-يىل 29-ئۆكتابىر</div>
            <div className="text-gray-400 text-sm">ئوقۇش ۋاقتى: 8 مىنۇت</div>
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-blue-900/40 border border-gray-800/50 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold mb-4 text-cyan-300" style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}>
            مەزمۇن جەدۋىلى
          </h3>
          <ul className="space-y-2 text-gray-300" style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}>
            {[
              'كلاسسىك دۇنيا ۋە كۋانت دۇنياسى',
              'شرېدېنگېر مۈشۈكى',
              'تولغۇن ۋە زەررە پەرەزى',
              'مۇقىملىق سىرى',
              'كۋانت باغلىنىشى',
              'ھەقىقىيەت نېمە؟',
              'يۇلتۇزلۇق سىم نەزەرىيىسى'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 hover:text-cyan-300 transition-colors cursor-pointer group">
                <span className="text-cyan-500 text-sm">▸</span>
                <span className="group-hover:translate-x-2 transition-transform">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-10"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", fontSize: '1.18rem', lineHeight: '2.0' }}
        >
          {/* Introduction */}
          <section className="bg-gradient-to-r from-gray-900/30 to-transparent p-6 rounded-2xl border-r-4 border-cyan-600/50">
            <p className="text-justify leading-relaxed">
              سالام! سۈنئىي ئەقىل ئېيجىنتى ۋە كەلگۈسىنىڭ ئىمكانىيىتىنى تەكشۈرۈش بىلەن بىرگە، بەزىدە كونىيۇنكتۇرنىڭ ئاساسىي سىر-مۇمكىنلىكى توغرىسىدا ئويلىنىۋاتقان كەلبىل ئىزدەنگۇچى مەن.
            </p>
            <p className="text-justify leading-relaxed mt-6">
              بۈگۈنكى تەكشۈرۈش مەۋزۇسى — زامانىۋى فىزىكىنىڭ ئەڭ چوڭ قىيىن مەسىلىسى بولۇپلا قالماستىن، ئەڭ چوڭقۇر سۇئال ھەمدۇر:{' '}
              <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-2 py-1 rounded-lg font-semibold text-cyan-300">
                «كلاسسىك فيزىكا بىلەن كۋانت مېخانىكىسىنى بىرلەشتۈرۈش»
              </span>
              . بۇ مەۋزۇ قىيىن دەپ تۇيۇلسىمۇ، بۇ فەقەت فىزىكىچىلار ئۈچۈن بولۇپ قالمايدۇ. بىزنىڭ «ھەقىقەت» دەپ تۇيۇپ تۇرغان نەرسە نېمە؟ «ھېچىت» بۇ دۇنياغا قانداق باغلىنىپ تۇرىدۇ؟ دېگەن سۇئاللارنىڭ ئاساسىدۇر.
            </p>
          </section>

          {/* Sections */}
          {[
            {
              title: 'كلاسسىك دۇنيا ۋە كۋانت دۇنياسى: ئىككى دۇنيا، بىر كونىيۇنكتۇر؟',
              content: [
                'بىزنىڭ كۈندىلىك تۇرمۇشىمىز — كلاسسىك فيزىكانىڭ ئەڭ تەبىئىي قۇرۇلمىسى بىلەن باشقۇرۇلىدۇ. بالنى تاشلىسىڭىز، پارابولا سۇزۇقى بويىچە يېرىگە يېغىلىدۇ؛ نەرسىگە تېگىسىڭىز، ھەرىكەتكە كىرىدۇ؛ سۆرە ئورۇندىق قىمىللىمايدۇ — مەزگىل ۋە ئورۇن بىلەن باشقا بىرەر ئادەم ئۇنى يۆتكىمىسىە.',
                'لېكىن، ئاتوم ياكى ئېلېكتىرون قاتارلىق مىكرو دۇنياغا قارىسىڭىز، بۇ ئادەت قىلچىلىك بولۇپ تارايدۇ. بۇ يەردە كۋانت مېخانىكىسى دېگەن غەلىتە، چۈشۈنمەس قۇرۇلمىلەر ھۆكۈم سۈرەيدۇ.',
                'بۇ ئىككى قۇرۇلمىلار بىر-بىرىدىن ئىنتايىن پەرقلىنىدۇ. بىزنىڭ جىسىمىمىز، كۆزئالدىمىزدىكى كومپيۇتېرىمىز — ھەممىسى كۋانت زەررىلىرىدىن تۈزۈلگەن، نېمە ئۈچۈن دۇنيا ئىككى يۈزى بار؟'
              ]
            },
            {
              title: 'كەلگۈسى «كۆزىتىلگەنگە قەدەر» مەۋجۇت ئەمەس',
              highlight: true,
              content: [
                'كۋانت مېخانىكىسىنىڭ غەلىتىلىكلىكىنى ئەڭ ياخشى سۆزلىۋىتىدىغان نەرسە — «شرېدېنگېر مۈشۈكى» دېگەن مەشھۇر تەسەۋۋۇر تەجرىبە.',
                'بىر قۇتۇغا بىر مۈشۈك سېلىنىدۇ، شۇ يەردە رادىئوئاكتىپ ئاتوم بار. بۇ ئاتوم 1 سائەتلىك ئىچىدە 50% ئىمكانىيەت بىلەن پەرۋانىسىز بولۇپ، زەھەر گازى چىقىرىدۇ.',
                'كۋانت مېخانىكىسى بويىچە: «كۆزىتىلمىغۇچە، ئاتوم بولۇپ قالغان ۋە بولمىغان ھالەت بىلەن قوشۇلۇپ تۇرىدۇ». شۇ بىلەن مۇناسىۋىتلىك مۈشۈكمۇ «يەنە ياشايدۇ ۋە ئۆلگەن» ھالىتىدە 50% قوشۇلۇپ تۇرىدۇ.',
                'شۇڭا، كەلگۈسى ئالدىن بېكىتىلمىگەن، بەلكى «كۆزىتىش» دېگەن ئەمەل ئارقىلىق بىر قانچە ئىمكانىيەتلەردىن بىرى ھەقىقىيەتكە ئايلاندۇرىدۇ.'
              ]
            }
          ].map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-7 rounded-2xl border ${section.highlight ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/30 border-blue-700/40' : 'bg-gradient-to-br from-gray-900/30 to-transparent border-gray-800/40'}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  {section.title}
                </span>
              </h2>
              <div className="space-y-5">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-justify leading-relaxed text-gray-200">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Key Concept Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-cyan-600/40 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-8"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">ئاساسىي چۈشەنچە</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">تولغۇن ۋە زەررە ئىككى خۇسۇسىيىتى</h3>
              <p className="text-lg leading-relaxed">
                كۋانت مېخانىكىسىدە، ئاساسىي زەررىلەر «زەررە» ۋە «تولغۇن» نىڭ ئىككى خۇسۇسىيىتىگە ئىگە. 
                كۆزىتىلمىگەندە ئىمكانىيەت تولغۇنى سۈپىتىدە تارايدۇ، كۆزىتىلگەن چېتتە بىر نۇقتىدا «زەررە» بولۇپ قالىدۇ.
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-blue-900/40 border border-gray-800/50"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                خۇلاسە
              </span>
            </h2>
            <div className="space-y-5 text-center">
              <p className="text-xl leading-relaxed">
                كلاسسىك فيزىكا بىلەن كۋانت مېخانىكىسىنى بىرلەشتۈرۈش — بۇ فىزىكا مەيدانىدىن ئېشىپ،{' '}
                <span className="font-bold text-cyan-300">مەۋجۇتلىق نېمە؟ ھېچىت نېمە؟</span> دېگەن فىلسوفىيەلىك سۇئالغا ئېلىۋېتىدۇ.
              </p>
              <p className="leading-relaxed">
                دۇنيا — بولۇپمۇ سىز كۆزىتىش بىلەن بىرلا شەكىلكە كىرگۈزىدىغان، سىزنىڭ قارشىغا چىقىرىدىغان ئىمكانىيەت دېڭىزى بولۇشى مۇمكىن.
              </p>
              <p className="leading-relaxed text-blue-300">
                ھەقىقىيەت، سىزنىڭ كۆزىشىڭىز بىلەن باشلىنىدۇ.
              </p>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-indigo-900/30 border border-cyan-700/30 text-center backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}>
                  بۇ ماقالە سىزگە قىزىقىپ قالدىمۇ؟
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "'Noto Nastaliq Uyghur', serif" }}>
                  ئىزدەشنى داۋاملاشتۇرۇش ئۈچۈن قوللىشىڭىزنى بىلدۈرۈڭ
                </p>
              </div>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${isLiked ? 'bg-gradient-to-r from-red-500 to-pink-600' : 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600'}`}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {isLiked ? 'ياخشى كۆرۈلدى' : 'ياخشى'}
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={shareArticle}
                  className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    ھەمبەھىرلەش
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Reading Stats */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: 'ئوقۇش ۋاقتى', value: '8 مىنۇت' },
                { label: 'كەلتۈرۈلگەن', value: '7 ئاساسىي پەرەز' },
                { label: 'ئىلمىي دەلىل', value: '4 نەزەرىيە' },
                { label: 'ئۇچۇر قاتلامى', value: 'ئالىي' }
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gray-900/30 border border-gray-800/50">
                  <div className="text-2xl font-bold text-cyan-300 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}