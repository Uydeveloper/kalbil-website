import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from 'framer-motion';

const StatisticsLessonPage = () => {
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "ستاتىستىكا نېمە؟ / What is Statistics?",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      video: "https://www.youtube.com/watch?v=o6BD83y-eOA&t=13s",
      quote: "«بىلىم - ھەممىنىڭ قورالى، ستاتىستىكا - ھەممىنىڭ تىلى.»",
      instructor: "D3 ناكامۇرا يۇتا",
      time: "2024-يىل 5-ئاينىڭ 20-كۈنى، 14:00–15:30",
      shortDesc: "كلاسىكىك ستاتىستىكادىن بايېسقا تېز كۆچۈش",
      longDesc: "ستاتىستىكا – خۇدا ئىلىملىرى... Descriptive, Inferential, and Bayes statistics. بۇ دەرستە ستاتىستىكىنىڭ ئاساسىي پرىنسىپلىرى، ئىشلىتىش ساھەلىرى ۋە ھەقىقىي تۇرمۇشتا قانداق قوللىنىلىشى توغرىسىدا ئۆگىنىمىز.",
      zoomLink: "https://zoom.us/j/1234567890",
      category: "ئاساسىي ستاتىستىكا",
      level: "باشلانغۇچ",
      duration: "1.5 سائەت",
      students: 150,
      rating: 4.8
    },
    {
      id: 2,
      title: "تەتقىقاتلار ئۈچۈن ستاتىستىكا",
      image: "https://images.unsplash.com/photo-1581093458791-8a8415c84d7b?q=80&w=1600&auto=format&fit=crop",
      video: "https://www.youtube.com/watch?v=o6BD83y-eOA&t=13s",
      quote: "«سانلارنى بىلىش، ھەقىقەتنى بىلىش.»",
      instructor: "پروفېسسور ئېلىم",
      time: "2024-يىل 5-ئاينىڭ 22-كۈنى، 10:00–11:30",
      shortDesc: "SD، SE، P قىممىتى ۋە Excelدا ھېسابلاش",
      longDesc: "تەتقىقاتلار نېمە ئۈچۈن ستاتىستىكا ئىشلىتىدۇ؟ Excel فورمۇلالارنى ئىشلىتىشنى ئۆگىنىمىز. تەتقىقات لايىھىلەش، مەلۇمات توپلاش ۋە تەھلىل قىلىش ئۇسۇللىرى.",
      zoomLink: "https://zoom.us/j/2345678901",
      category: "ئىلمىي تەتقىقات",
      level: "ئوتتۇرا",
      duration: "1.5 سائەت",
      students: 89,
      rating: 4.9
    },
    {
      id: 3,
      title: "بايېس ستاتىستىكىسى",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop",
      video: "https://www.youtube.com/watch?v=o6BD83y-eOA&t=13s",
      quote: "«بايېسچىلىق - ئۇچراتقا ئاساسلانغان ھەقىقەت يېنىشى.»",
      instructor: "دۆكتۇر كىيەن",
      time: "2024-يىل 5-ئاينىڭ 25-كۈنى، 16:00–17:30",
      shortDesc: "شەرتلىك ئىمكانىيەت ۋە ئۇچراتقا ئاساسلانغان بوشلۇق بويىچە باھالاش",
      longDesc: "بايېسچىلىق – ئىمكانىيەتنى يېڭىلايدىغان يېنىش... بۇ دەرستە بايېس نەزەرىيىسىنىڭ ئاساسلىرى، شەرتلىك ئىمكانىيەت ۋە ئەمەلىي ئىشلىتىش ئۇسۇللىرىنى ئۆگىنىمىز.",
      zoomLink: "https://zoom.us/j/3456789012",
      category: "ئىلگىرىلەشكەن ستاتىستىكا",
      level: "ئىلگىرىلەشكەن",
      duration: "1.5 سائەت",
      students: 67,
      rating: 4.7
    },
  ]);
  
  const [expanded, setExpanded] = useState({});
  const [joined, setJoined] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ھەممىسى");
  const [videoModal, setVideoModal] = useState(null);
  const [newLesson, setNewLesson] = useState({
    title: '',
    instructor: '',
    time: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
    video: 'https://www.youtube.com/watch?v=o6BD83y-eOA&t=13s',
    zoomLink: '',
    shortDesc: '',
    longDesc: '',
    category: 'ئاساسىي ستاتىستىكا',
    level: 'باشلانغۇچ',
    duration: '1.5 سائەت'
  });

  // YouTube embed URL چىقىرىش
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const trimmed = url.trim();
    if (trimmed.includes("youtube.com/watch?v=")) {
      const id = trimmed.split("v=")[1]?.split("&")[0];
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
    } else if (trimmed.includes("youtu.be/")) {
      const id = trimmed.split("youtu.be/")[1]?.split("?")[0];
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
    } else if (trimmed.includes("youtube.com/embed/")) {
      return trimmed + (trimmed.includes("?") ? "&autoplay=1&rel=0" : "?autoplay=1&rel=0");
    }
    return null;
  };

  // سىلايد چوڭايتىش/چوڭايتىلماسلىق
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ZOOM غا قاتنىشىش
  const handleJoin = (id, link) => {
    setJoined((prev) => ({ ...prev, [id]: true }));
    window.open(link.trim(), '_blank');
  };

  // يېڭى دەرس قوشۇش
  const handleSaveLesson = () => {
    if (!newLesson.title || !newLesson.zoomLink) {
      alert('تېما ۋە Zoom ئۇلىنىشى كېرەك!');
      return;
    }
    const trimmedLesson = {
      ...newLesson,
      video: newLesson.video.trim(),
      zoomLink: newLesson.zoomLink.trim(),
      image: newLesson.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
      students: Math.floor(Math.random() * 200),
      rating: (4 + Math.random() * 1).toFixed(1)
    };
    const updatedLessons = [...lessons, { ...trimmedLesson, id: Date.now() }];
    setLessons(updatedLessons);
    setNewLesson({
      title: '',
      instructor: '',
      time: '',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
      video: 'https://www.youtube.com/watch?v=o6BD83y-eOA&t=13s',
      zoomLink: '',
      shortDesc: '',
      longDesc: '',
      category: 'ئاساسىي ستاتىستىكا',
      level: 'باشلانغۇچ',
      duration: '1.5 سائەت'
    });
    setShowModal(false);
  };

  // سىلايد كۆرسىتىش configuration
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    pauseOnHover: true,
  };

  // دەرس ئۇچۇرۇش
  const handleDeleteLesson = (id) => {
    if (window.confirm('ھەقىقەتەن بۇ دەرسنى ئۇچۇرماقچىمۇ؟')) {
      setLessons(lessons.filter((lesson) => lesson.id !== id));
      setExpanded((prev) => {
        const newExp = { ...prev };
        delete newExp[id];
        return newExp;
      });
      setJoined((prev) => {
        const newJoin = { ...prev };
        delete newJoin[id];
        return newJoin;
      });
    }
  };

  // تەھرىرلاش
  const handleEditLesson = (lesson) => {
    setNewLesson({ ...lesson });
    setShowModal(true);
  };

  // تۈرلەرنى چىقىرىش
  const categories = ["ھەممىسى", ...new Set(lessons.map(lesson => lesson.category))];
  
  // تۈر بويىچە دەرسلەرنى سۈزۈش
  const filteredLessons = activeCategory === "ھەممىسى" 
    ? lessons 
    : lessons.filter(lesson => lesson.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 font-sans text-right rtl">
     <div className="flex justify-center mb-4 mt-4">
          
            <img src={`${process.env.PUBLIC_URL}/images/kalbil-logo.png`} alt="KaLBiL لوگوسى" className=" w-auto" />
         
          {/* ئەگەر لوگو يوق بولسا، تېكىست لوگو ئىشلىتىلىدۇ */}
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            {/* KeLBiL */}
          </div>
        </div>

        <div className="w-full h-48 sm:h-56 bg-gradient-to-r from-cyan-600 via-amber-500 to-orange-600 rounded-xl shadow-lg flex items-center justify-center relative mb-14 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 text-white text-center p-4 sm:p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
              پەن تېخنىكا ئاكادېمىيىسى KeLBiL
            </h1>
            <p className="text-lg md:text-xl font-medium">ئىلم-پەن بىلەن مەدەنىيەتنىڭ بىرلىكى</p>
          </div>
        </div>
      
      {/* ======= Hero Slider ======= */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {lessons.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex flex-col items-center justify-center text-white px-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-extrabold drop-shadow-2xl mb-4 text-center"
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="italic text-xl md:text-3xl mb-6 text-center font-serif bg-black/30 backdrop-blur-sm rounded-2xl p-4"
                >
                  {slide.quote}
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="w-11/12 md:w-2/3 aspect-video shadow-2xl border-4 border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                  <iframe
                    src={getYouTubeEmbedUrl(slide.video)}
                    title={slide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="mt-6 text-center"
                >
                  <p className="text-lg md:text-xl mb-2">🎓 {slide.instructor}</p>
                  <p className="text-sm md:text-base opacity-90">⏰ {slide.time}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ئۇيغۇر ئاتا سۆزى */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            «ستاتىستىكا - ھەقىقەتنىڭ كۆزى»
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            ئۇيغۇر ئاتا سۆزىدە: «ساننى بىلمەي، سۆزنى بىلگىلى بولمايدۇ». ستاتىستىكا - بىزگە دۇنيادىكى مۇرەككەپ ھادىسىلەرنى چۈشىنىش، 
            توغرا قارار چىقىرىش ۋە كەلگۈسىنى پەيشان قىلىش ئىمكانىيىتى بېرىدۇ. بۇ بىلىم بىلەن سىز ھەقىقىي دۇنيانى رەقەملىر ئارقىلىق چۈشىنىسىز.
          </motion.p>
        </div>
      </div>

      {/* ئاساسىي مەزمۇن */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* تېما ۋە كونترول باتۇنلىرى */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-blue-800 text-center lg:text-right"
          >
            ستاتىستىكا دەرسلىرى 📊
          </motion.h1>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              ➕ يېڭى دەرس قوشۇش
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-600 shadow-lg transition-all duration-300"
              onClick={() => setEditMode(!editMode)}
            >
              ✏️ {editMode ? 'تەھرىردىن چىق' : 'تەھرىرلەش'}
            </motion.button>
          </div>
        </div>

        {/* تۈر فيلترى */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* دەرس كارتىلىرى */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              {/* رەسىم ۋە ۋىدىئو */}
              <div className="relative">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {lesson.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  ⭐ {lesson.rating} | 👥 {lesson.students}
                </div>
              </div>

              {/* مەزمۇن */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">{lesson.title}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold ml-2">
                    {lesson.level}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🎓</span>
                    <span>{lesson.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">⏰</span>
                    <span>{lesson.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">🕒</span>
                    <span>{lesson.duration}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{lesson.shortDesc}</p>

                {/* چۈشەندۈرۈش */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {expanded[lesson.id] 
                      ? lesson.longDesc 
                      : `${lesson.longDesc.substring(0, 100)}...`
                    }
                  </p>
                  {lesson.longDesc.length > 100 && (
                    <button
                      onClick={() => toggleExpand(lesson.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-semibold mt-2 transition-colors"
                    >
                      {expanded[lesson.id] ? '↥ يۇقىرى قارا' : '⇣ ھەممىنى ئوقۇ'}
                    </button>
                  )}
                </div>

                {/* ھەرىكەت باتۇنلىرى */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setVideoModal({
                      embedUrl: getYouTubeEmbedUrl(lesson.video),
                      title: lesson.title
                    })}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>🎬</span>
                    ۋىدىئو كۆرۈش
                  </button>
                  
                  <button
                    onClick={() => handleJoin(lesson.id, lesson.zoomLink)}
                    disabled={joined[lesson.id]}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      joined[lesson.id]
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    <span>{joined[lesson.id] ? '✅' : '🎯'}</span>
                    {joined[lesson.id] ? 'قاتنىشىلدى' : 'ZOOM غا قاتنىش'}
                  </button>
                </div>

                {/* تەھرىرلەش باتۇنلىرى */}
                {editMode && (
                  <div className="flex gap-2 pt-3 border-t border-gray-200">
                    <button
                      onClick={() => handleEditLesson(lesson)}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
                    >
                      ✏️ تەھرىرلەش
                    </button>
                    <button
                      onClick={() => handleDeleteLesson(lesson.id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
                    >
                      🗑️ ئۆچۈرۈش
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ۋىدىئو مودالى */}
        <AnimatePresence>
          {videoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setVideoModal(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setVideoModal(null)}
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition-colors"
                >
                  ✕
                </button>
                <iframe
                  src={videoModal.embedUrl}
                  title={videoModal.title}
                  className="w-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* يېڭى دەرس قوشۇش مودالى */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">➕ يېڭى دەرس قوشۇش</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="دەرس تېمىسى"
                    value={newLesson.title}
                    onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
                  />
                  <input
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="سۆزلۈكچى"
                    value={newLesson.instructor}
                    onChange={(e) => setNewLesson({ ...newLesson, instructor: e.target.value })}
                  />
                  <input
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="ۋاقىت"
                    value={newLesson.time}
                    onChange={(e) => setNewLesson({ ...newLesson, time: e.target.value })}
                  />
                  <select
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    value={newLesson.category}
                    onChange={(e) => setNewLesson({ ...newLesson, category: e.target.value })}
                  >
                    <option value="ئاساسىي ستاتىستىكا">ئاساسىي ستاتىستىكا</option>
                    <option value="ئىلمىي تەتقىقات">ئىلمىي تەتقىقات</option>
                    <option value="ئىلگىرىلەشكەن ستاتىستىكا">ئىلگىرىلەشكەن ستاتىستىكا</option>
                  </select>
                  <select
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    value={newLesson.level}
                    onChange={(e) => setNewLesson({ ...newLesson, level: e.target.value })}
                  >
                    <option value="باشلانغۇچ">باشلانغۇچ</option>
                    <option value="ئوتتۇرا">ئوتتۇرا</option>
                    <option value="ئىلگىرىلەشكەن">ئىلگىرىلەشكەن</option>
                  </select>
                  <input
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="ۋاقىت ئۇزۇنلۇقى"
                    value={newLesson.duration}
                    onChange={(e) => setNewLesson({ ...newLesson, duration: e.target.value })}
                  />
                  <input
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all md:col-span-2"
                    placeholder="رەسىم URL"
                    value={newLesson.image}
                    onChange={(e) => setNewLesson({ ...newLesson, image: e.target.value })}
                  />
                  <input
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all md:col-span-2"
                    placeholder="YouTube ۋىدىئو ئۇلىنىشى"
                    value={newLesson.video}
                    onChange={(e) => setNewLesson({ ...newLesson, video: e.target.value.trim() })}
                  />
                  <input
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all md:col-span-2"
                    placeholder="Zoom ئۇلىنىشى"
                    value={newLesson.zoomLink}
                    onChange={(e) => setNewLesson({ ...newLesson, zoomLink: e.target.value.trim() })}
                  />
                  <textarea
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all md:col-span-2"
                    placeholder="قىسقىچە چۈشەندۈرۈش"
                    rows="2"
                    value={newLesson.shortDesc}
                    onChange={(e) => setNewLesson({ ...newLesson, shortDesc: e.target.value })}
                  />
                  <textarea
                    className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all md:col-span-2"
                    placeholder="تولۇق چۈشەندۈرۈش"
                    rows="4"
                    value={newLesson.longDesc}
                    onChange={(e) => setNewLesson({ ...newLesson, longDesc: e.target.value })}
                  />
                </div>

                <div className="flex justify-end gap-4 pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                    onClick={handleSaveLesson}
                  >
                    💾 ساقلاش
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
                    onClick={() => setShowModal(false)}
                  >
                    ❌ يوق
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ئاستىدىكى باشقا باتۇنلار */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4 border-t pt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg transition-all duration-300"
            onClick={() => {
              const dataStr = JSON.stringify(lessons, null, 2);
              const blob = new Blob([dataStr], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'statistics-lessons.json';
              link.click();
              alert('💾 بارلىق دەرسلەر ساقلاندى!');
            }}
          >
            💾 ھەممىنى ساقلاش
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-pink-700 shadow-lg transition-all duration-300"
            onClick={() => {
              const links = lessons.map(l => `${l.title}: ${l.zoomLink}`).join('\n\n');
              navigator.clipboard.writeText(links).then(() => {
                alert('Zoom ئۇلىنىشلىرى تاختىغا كۆچۈرۈلدى!');
              });
            }}
          >
            📤 ئۇلىنىش ئۇچۇرلاش
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default StatisticsLessonPage;