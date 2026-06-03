import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { 
  BookOpenIcon, 
  PlusIcon, 
  RectangleStackIcon, 
  ChevronRightIcon, 
  ChevronLeftIcon, 
  XMarkIcon,
  ArrowRightIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";
import { qmlTopics } from "../data/qmlTopics";

export default function QuantumMachineLearning() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();

  const handleTopicClick = (topic) => {
    setCurrentSlideIndex(0);
    setSelectedTopic(topic);
  };

  // 🌐 تېكىستنىڭ ئۇيغۇرچە ياكى چەتئەلچە (ئىنگلىزچە/ياپونچە) ئىكەنلىكىنى ئاپتوماتىك ئېنىقلاش فۇنكسىيەسى
  const isRTLText = (text) => {
    if (!text) return true;
    // ئۇيغۇر تىلى ۋە ئەرەب ھەرپلىرىنىڭ دائىرىسىنى تەكشۈرۈش
    const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    return arabicPattern.test(text);
  };

  return (
    <div 
      className="font-uyghur antialiased text-lg md:text-xl min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-x-hidden"
      style={{ direction: 'rtl' }}
    >
      {/* 🔮 كىۋانت ئېنېرگىيە تور بېزەكلىرى */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <section className="container mx-auto px-4 py-16 relative z-10">
        
        {/* ↩️ ئالدىنقى بەتكە قايتىش كۇنۇپكىسى (Back Button) */}
        <div className="max-w-6xl mx-auto mb-6 text-right">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200 cursor-pointer active:scale-95 group"
          >
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            <span>كەينىگە قايتىش</span>
          </button>
        </div>

        {/* 🏛️ باش قىسىم (Hero Section) */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <div className="relative inline-block mb-6 group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:scale-110 transition-transform duration-500" />
            <img
              src="/images/image05.png"
              alt="KeLBiL Logo"
              className="relative z-10 mx-auto w-36 h-36 object-contain filter drop-shadow-lg"
              onError={(e) => { e.target.style.display = 'none'; }} // رەسىم چىقمىسا بوش قالىدۇ
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 dark:from-indigo-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent tracking-wide select-none">
            بىلىم ئارقىلىق كەلگۈسىنى قۇرۇش KeLBiL
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 leading-loose font-medium max-w-3xl mx-auto mb-6">
            كىۋانت تېخنىكىسى بىلەن بىلىمنى ئۇلاش، مەدەنىيەتنى يۇقىرى كۆتۈرۈش، ۋە ئۇيغۇر ئوقۇغۇچىلار ئۈچۈن يېڭى پەسىللەرنى ئېچىش.
          </p>
          
          <p className="inline-block italic text-base md:text-lg text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 px-6 py-2 rounded-2xl shadow-sm">
            «بىلىم – قەلبنىڭ نۇرى، كەلگۈسىنىڭ يولى»
          </p>
        </div>

        {/* 🏷️ تېما چۈشەندۈرۈشى (Section Title) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4 flex items-center justify-center gap-3">
            <span className="w-2 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full inline-block" />
            <span>كىۋانت ماشىنا ئۆگىنىشى دەرسلىرى</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium">
            تۆۋەندىكى تېمىلارنى تاللاپ، كىۋانت ئۆگىنىشى دۇنياسىغا تېخىمۇ چوڭقۇر چۆكۈڭ.
          </p>
        </div>

        {/* 🗂️ كىۋانت تېمىلىرى كارتىسى (Topic Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {qmlTopics && qmlTopics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => handleTopicClick(topic)}
              className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center">
                <div className="mx-auto h-16 w-16 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpenIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white mb-4 line-clamp-2 leading-snug">
                  {topic.title}
                </h3>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-sm md:text-base font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                <span>دەرسنى كۆرۈش</span>
                <ChevronLeftIcon className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* 📊 مەشغۇلات كۇنۇپكىلىرى (Action Buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/add-course")}
            className="group h-40 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-3xl transition-all duration-300 flex flex-col items-center justify-center shadow-lg hover:shadow-blue-500/20 active:scale-98 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-md" />
            <PlusIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-black mb-1">يېڭى دەرس قوشۇش</h3>
            <p className="text-white/80 text-sm md:text-base font-medium">KeLBiL سۇپىسغا يېڭى بىلىم تولۇقلاڭ</p>
          </button>

          <button
            onClick={() => navigate("/courses")}
            className="group h-40 bg-white dark:bg-slate-900 border-2 border-indigo-600/20 dark:border-slate-800 text-slate-800 dark:text-white rounded-3xl transition-all duration-300 flex flex-col items-center justify-center shadow-md hover:shadow-xl active:scale-98 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-md" />
            <RectangleStackIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-black mb-1 text-indigo-600 dark:text-indigo-400">دەرسلەرنى كۆرۈش</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium">مەۋجۇت دەرسلەرنى كۆرۈش ۋە باشقۇرۇش</p>
          </button>
        </div>

        {/* 🔮 كىۋانت سلايد كۆزنىكى (Modal for Slides) */}
        <AnimatePresence>
          {selectedTopic && selectedTopic.slides && selectedTopic.slides[currentSlideIndex] && (
            <Dialog
              static
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              open={!!selectedTopic}
              onClose={() => setSelectedTopic(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            >
              <div className="fixed inset-0" onClick={() => setSelectedTopic(null)} />

              <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 md:p-10 max-w-4xl w-full shadow-2xl overflow-y-auto max-h-[92vh] z-10 flex flex-col justify-between"
              >
                {/* ئۈستى تاقاش كۇنۇپكىسى */}
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="absolute top-6 left-6 p-2 bg-slate-100 hover:bg-rose-500 hover:text-white dark:bg-slate-800 dark:hover:bg-rose-600 rounded-xl text-slate-500 dark:text-slate-400 transition-all cursor-pointer"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>

                {/* كۆزنەك بېشى */}
                <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                  <div className="text-xs md:text-sm text-indigo-600 dark:text-indigo-400 font-bold mb-1 tracking-wider">
                    KeLBiL كىۋانت ئۆگىنىش ئاكادېمىيىسى
                  </div>
                  <Dialog.Title className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white pl-8 leading-snug">
                    {selectedTopic.title}
                  </Dialog.Title>
                </div>

                {/* 🎞️ سىلايد ئاساسىي مەزمۇن ساندۇقى */}
                <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 p-6 md:p-8 rounded-3xl shadow-inner min-h-[280px] flex flex-col justify-start transition-all duration-300">
                  
                  {/* سىلايد ماۋزۇسى (ماۋزۇلار ھەمىشە ئوڭدىن باشلىنىدۇ ياكى ماسلىشىدۇ) */}
                  <h4 className={`text-xl md:text-2xl font-black text-indigo-600 dark:text-indigo-400 mb-5 flex items-center gap-2 ${
                    isRTLText(selectedTopic.slides[currentSlideIndex].heading) ? "text-right" : "text-left"
                  }`} style={{ direction: isRTLText(selectedTopic.slides[currentSlideIndex].heading) ? 'rtl' : 'ltr' }}>
                    <span className="w-2 h-5 bg-indigo-500 rounded-full inline-block shrink-0" />
                    <span>{selectedTopic.slides[currentSlideIndex].heading}</span>
                  </h4>

                  {/* سىلايد مەزمۇنى (ئەقلىي يۆنىلىش پەرقلەندۈرۈش قىسمى) */}
                  {selectedTopic.slides[currentSlideIndex].content?.startsWith("# Python") || 
                   selectedTopic.slides[currentSlideIndex].content?.includes("import ") ? (
                    
                    /* 💻 ئەگەر مەزمۇن كود بولسا قارا رەڭلىك زامانىۋى كود ساندۇقىدا چىقىرىش */
                    <div className="text-left ltr font-mono text-sm md:text-base bg-slate-900 text-cyan-400 p-5 rounded-2xl overflow-x-auto border border-slate-800 shadow-lg relative my-2">
                      <div className="absolute top-3 right-4 flex items-center gap-1 text-slate-500 text-xs font-sans">
                        <CommandLineIcon className="w-3.5 h-3.5" />
                        <span>Python Code</span>
                      </div>
                      <pre className="whitespace-pre-wrap leading-relaxed select-all pt-4 font-medium tracking-wide">
                        {selectedTopic.slides[currentSlideIndex].content}
                      </pre>
                    </div>
                  ) : (
                    /* 📝 ئەگەر ئادەتتىكى تېكىست بولسا تىلغا قاراپ ئوڭ-سولغا توغرىلاش */
                    <p 
                      className={`text-base md:text-xl text-slate-700 dark:text-slate-300 leading-loose font-medium ${
                        isRTLText(selectedTopic.slides[currentSlideIndex].content) 
                          ? "text-right font-uyghur" 
                          : "text-left font-sans tracking-normal"
                      }`}
                      style={{ direction: isRTLText(selectedTopic.slides[currentSlideIndex].content) ? 'rtl' : 'ltr' }}
                    >
                      {selectedTopic.slides[currentSlideIndex].content}
                    </p>
                  )}
                </div>

                {/* 🎮 سىلايد كۇنۇپكىلىرى بار ئاستى قىسىم */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* ئالدىنقى كۇنۇپكا (ئوڭ تەرەپكە ماڭىدۇ RTL دا) */}
                  <button
                    disabled={currentSlideIndex === 0}
                    onClick={() => setCurrentSlideIndex((i) => i - 1)}
                    className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      currentSlideIndex === 0
                        ? "bg-slate-100 text-slate-400 dark:bg-slate-800/40 dark:text-slate-600 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/10 active:scale-95"
                    }`}
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                    <span>ئالدىنقى</span>
                  </button>

                  {/* بەت نومۇرى كۆرسەتكۈچى */}
                  <span className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full font-bold text-sm font-sans tracking-widest">
                    {currentSlideIndex + 1} / {selectedTopic.slides.length}
                  </span>

                  {/* كېيىنكى كۇنۇپكا */}
                  <button
                    disabled={currentSlideIndex === selectedTopic.slides.length - 1}
                    onClick={() => setCurrentSlideIndex((i) => i + 1)}
                    className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-black text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      currentSlideIndex === selectedTopic.slides.length - 1
                        ? "bg-slate-100 text-slate-400 dark:bg-slate-800/40 dark:text-slate-600 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/10 active:scale-95"
                    }`}
                  >
                    <span>كېيىنكى</span>
                    <ChevronLeftIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* دەرسنى تاقاش كۇنۇپكىسى */}
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="mt-6 w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-2xl font-black text-base transition-all shadow-md shadow-rose-500/10 active:scale-98 cursor-pointer text-center"
                >
                  دەرسنى تاقاش
                </button>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>

      </section>
    </div>
  );
}