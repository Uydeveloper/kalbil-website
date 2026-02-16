// src/components/blog/posts/Blog33.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket,
  FaBrain,
  FaHeartbeat,
  FaSolarPanel,
  FaRobot,
  FaAtom,
  FaUserMd,
  FaUserCog,
  FaCarAlt,
  FaLeaf,
  FaHospital,
  FaCalendar,
  FaLightbulb,
  FaFilter,
} from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

const Blog33 = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const timelineRef = useRef(null);

  // تېخنىكا تىمىلار مەلۇماتى
  const techTopics = [
    {
      id: 1,
      category: "ai",
      title: "يېڭى نەسل سۇنئىي ئەقىل (GPT-5 ۋە كىچىك تىل مودېللىرى)",
      description: "يېڭى نەسل AI مودېللىرى مۇرەككەپ مەسىلىلەرنى ھەل قىلىش، ئىجتىمائىي مۇناسىۋەت قۇرۇش ۋە ئىنسانغا ئوخشاش پىكىر يۈرگۈزۈش قابىلىيىتىگە ئىگە بولىدۇ.",
      details: [
        "ئىنساننىڭ پىكىر يۈرگۈزۈش ئۇسۇلىغا ئوخشاش قابىلىيەت",
        "رېئال ۋاقىتلىق تەرجىمە ۋە ئالماشتۇرۇش سىستېمىسى",
        "ئۆزلۈكىدىن ئۆگىنىش ۋە ماسلىشىش قابىلىيىتى",
        "ئەخلاقىي قارار چىقىرىش مېخانىزىملىرى"
      ],
      year: "2024-2026",
      impact: "high",
      icon: <FaBrain />
    },
    {
      id: 2,
      category: "health",
      title: "شەخسىيلەشتۈرۈلگەن تىببىي داۋالاش",
      description: "ھەر بىر ئادەمنىڭ گېنومىك ئۇچۇرلىرىغا ئاساسەن ئۇنىڭغا خاس داۋالاش پىلانى تۈزۈلىدۇ.",
      details: [
        "گېنومىك تەھلىلگە ئاساسلانغان داۋالاش",
        "ھۈجەيرە دەرىجىسىدىكى داۋالاش",
        "3D بېسىلغان ئەزا ۋە توكلار",
        "كېسەلنى ئالدىن ئېنىقلىغۇچ سىستېما"
      ],
      year: "2025-2027",
      impact: "high",
      icon: <FaHeartbeat />
    },
    {
      id: 3,
      category: "energy",
      title: "پايدىلىنىش دەرىجىسى يۇقىرى قايتا تىكلەيدىغان ئېنېرگىيە",
      description: "كۆكتىكى ئېنېرگىيە سىستېمىلىرى ۋە تېخىمۇ ياخشى باتارېيە تېخنىكىسى ئېنېرگىيە تەلەپىنى قاندۇرۇشنىڭ يېڭى يولىنى ئېچىپ بېرىدۇ.",
      details: [
        "كۆكتىكى كۈن ئېنېرگىيەسى سىستېمىسى",
        "قاتتىق بولمىغان باتارېيەلەر",
        "ھىدروگېن ئېنېرگىيەسىنى ساقلاش",
        "ئېنېرگىيە تارقىتىش سىستېمىسى"
      ],
      year: "2026-2028",
      impact: "high",
      icon: <FaSolarPanel />
    },
    {
      id: 4,
      category: "robot",
      title: "ئۆز-ئۆزىدىن ئۆگىنىدىغان روبوتلار",
      description: "روبوتلار يېڭى مۇھىتتا ئۆزلۈكىدىن ئۆگىنىپ، مۇرەككەپ ۋەزىپىلەرنى ئورۇنلاشتۇرۇشقا قادىر بولىدۇ.",
      details: [
        "ئىنسان بىلەن بىرگە خىزمەت قىلىش",
        "ئۆز-ئۆزىدىن ماھارەت يېتىلدۈرۈش",
        "مۇھىتقا ماسلىشىش ۋە مۇھىتتىن ئۆگىنىش",
        "قۇرۇلما ساھەسى ۋە ئىناقلىق ساھەسىدە قوللىنىش"
      ],
      year: "2025-2027",
      impact: "medium",
      icon: <FaRobot />
    },
    {
      id: 5,
      category: "ai",
      title: "كوانت كومپيۇتېرلىرىنىڭ ئومۇمىيلاشتۇرۇلۇشى",
      description: "كوانت كومپيۇتېرلىرى مەلۇم مەسىلىلەرنى ھەل قىلىشتا كەلگۈسىدە كۈندىلىك تۇرمۇشقا كىرىدۇ.",
      details: [
        "دورا تەتقىقاتى ۋە ماتېرىيال پەنلىرىدە قوللىنىش",
        "مۇرەككەپ مالىيە مودېللىرىنى ھېسابلاش",
        "يېزا-ئىگىلىك ئىقتىسادىي مودېللىرى",
        "كۈندىلىك تۇرمۇشقا كىرىش"
      ],
      year: "2027-2030",
      impact: "high",
      icon: <FaAtom />
    },
    {
      id: 6,
      category: "health",
      title: "نۇرغۇن تېخنىكىلارنى قوشۇش ئارقىلىق ئۇزۇن ياشاش",
      description: "تېخنىكىلارنى قوشۇش ئارقىلىق ئىنسانلارنىڭ ياشاش مۇددىتى ئۇزۇنلاپ، ساغلاملىقى ياخشىلىنىدۇ.",
      details: [
        "يېشەرلىك داۋالاش",
        "ئەقلىي قابىلىيەتنى كۈچەيتىش",
        "يېڭىلانغان يادرو سىستېمىسى",
        "تورقا ئارقىلىق ساغلاملىقنى كۆزىتىش"
      ],
      year: "2028-2030",
      impact: "medium",
      icon: <FaUserMd />
    }
  ];

  const futureScenarios = [
    {
      title: "تېخنىكىلارنى قوشۇش ئارقىلىق ئىنسان",
      description: "سۇنئىي ئەقىل ۋە مېڭە-كومپيۇتېر ئارا ئالاقە تېخنىكىسى ئارقىلىق ئىنسانلارنىڭ ئىلمىي قابىلىيىتى ۋە ساغلاملىقى ئۆستۈرۈلىدۇ.",
      year: "2035",
      icon: <FaUserCog />
    },
    {
      title: "ئاپتونوملۇق كەلگۈسى",
      description: "ئاپتونوملۇق ماشىنا، ئۇچقۇچ ۋە روبوتلار كۈندىلىك تۇرمۇشنىڭ ھەر بىر تەرەپلىرىگە كىرىدۇ، خىزمەت ۋە ئىشلەپچىقىرىش ئۇسۇلىنى ئۆزگەرتەلەيدۇ.",
      year: "2030",
      icon: <FaCarAlt />
    },
    {
      title: "يېشىل ئېنېرگىيە ئىنقىلابى",
      description: "قايتا تىكلەيدىغان ئېنېرگىيە ۋە ئېنېرگىيەنى ساقلاش تېخنىكىسىنىڭ تەرەققىياتى ئېنېرگىيە قاتنىشىش مەسىلىسىنى ھەل قىلىدۇ.",
      year: "2040",
      icon: <FaLeaf />
    },
    {
      title: "ساغلاملىق ساقلاش ئىنقىلابى",
      description: "شەخسىيلەشتۈرۈلگەن داۋالاش ۋە كېسەلنى ئالدىن بىلەلەيدىغان تېخنىكا ئارقىلىق ئىنسانلارنىڭ ياشاش مۇددىتى ئۇزۇنلايدۇ.",
      year: "2035",
      icon: <FaHospital />
    }
  ];

  const getIcon = (category) => {
    switch (category) {
      case 'ai': return <FaBrain className="text-blue-400" />;
      case 'health': return <FaHeartbeat className="text-red-400" />;
      case 'energy': return <FaSolarPanel className="text-yellow-400" />;
      case 'robot': return <FaRobot className="text-green-400" />;
      default: return <FaAtom />;
    }
  };

  const filteredTopics = activeFilter === 'all'
    ? techTopics
    : techTopics.filter(topic => topic.category === activeFilter);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const refreshTopics = () => {
    setProgress(0);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-700 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* باشلىق */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            <FaRocket className="inline mr-3" />
            يۇقىرى پەن-تېخنىكا ۋە ئىنسانىيەتنىڭ كەلگۈسى
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed opacity-90">
            تېخنىكىلىق ئىلگىرىلەش ھەم ئىنسانىيەتنىڭ تەرەققىياتىغا تەسىر كۆرسىتىدۇ، ھەم كەلگۈسىنى قانداق قۇرۇشقا تەسىر كۆرسىتىدۇ. تۆۋەندە 2030-يىلغىچە بولىدىغان مۇھىم تېخنىكىلىق ئىلگىرىلەشلەر ۋە ئۇلارنىڭ تەسىرى توغرىسىدا مەلۇمات بېرىلىدۇ.
          </p>
        </motion.header>

        {/* فىلتىر ۋە توپچا */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['all', 'ai', 'health', 'energy', 'robot'].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                refreshTopics();
              }}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/10 text-cyan-100 hover:bg-white/20'
              }`}
            >
              {filter === 'all' ? <FaFilter /> : getIcon(filter)}
              {filter === 'all' ? 'ھەممىسى' :
               filter === 'ai' ? 'سۇنئىي ئەقىل' :
               filter === 'health' ? 'ساغلاملىق ساقلاش' :
               filter === 'energy' ? 'ئېنېرگىيە' :
               'روبوت تېخنىكىسى'}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 h-full rounded-full z-0"></div>
          <div className="space-y-20 relative z-10">
            <AnimatePresence>
              {filteredTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`w-full md:w-5/12 p-6 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/10 shadow-xl hover:bg-white/15 transition-all ${
                      index % 2 === 0 ? 'ml-0 md:ml-0 mr-0 md:mr-auto' : 'mr-0 md:mr-0 ml-0 md:ml-auto'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl mt-1">{topic.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-cyan-200 mb-2">{topic.title}</h3>
                        <p className="mb-4 text-cyan-50 opacity-90">{topic.description}</p>
                        <ul className="mb-4 space-y-2">
                          {topic.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-300">›</span>
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            topic.impact === 'high'
                              ? 'bg-red-500/20 text-red-300'
                              : 'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {topic.impact === 'high' ? 'يۇقىرى تەسىر' : 'ئوتتۇرا تەسىر'}
                          </span>
                          <span className="text-xs opacity-70 flex items-center gap-1">
                            <FaCalendar /> {topic.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* تەرەققىيات شەكىللىرى */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-center text-xl mb-4">
            تېخنىكىلىق تەرەققىيات سۈرئىتى <span className="font-bold">{progress}%</span>
          </h3>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* كەلگۈسى مۇمكىن بولغان ئەھۋاللار */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-cyan-200 flex items-center justify-center gap-3">
            <FaLightbulb className="text-yellow-300" />
            كەلگۈسى مۇمكىن بولغان ئەھۋاللار
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureScenarios.map((scenario, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, boxShadow: "0 20px 30px rgba(0,0,0,0.3)" }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-cyan-300 mt-1">{scenario.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      {scenario.title}
                      <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs">
                        {scenario.year}
                      </span>
                    </h3>
                    <p className="text-cyan-50 opacity-90 text-sm">{scenario.description}</p>
                    <div className="mt-3 text-xs opacity-70 flex items-center gap-1">
                      <FaLightbulb /> تېخنىكىلىق يۈرۈشلۈك
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <footer className="text-center pt-8 border-t border-white/10 text-cyan-100/70 text-sm">
          <p>بۇ لىكسىيە 2025-يىلدىكى كەلبىل تېخنىكىلىق ئىلگىرىلەشلەر ۋە كەلگۈسى پەرەزلەرگە ئاساسەن تەييارلاندى.</p>
          <p className="mt-2">© 2024 يۇقىرى پەن-تېخنىكا لىكسىيەسى | ئىنسانىيەتنىڭ كەلگۈسى</p>
        </footer>
      </div>
    </div>
  );
};

export default Blog33;