import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { topicData } from "../data/topicData";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// 🛠 YouTube embed URL چىقىرىش
const getYoutubeEmbedUrl = (url) => {
  if (!url) return null;
  const trimmed = url.trim();
  if (trimmed.includes("youtube.com/watch?v=")) {
    const id = trimmed.split("v=")[1]?.split("&")[0];
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
  } else if (trimmed.includes("youtu.be/")) {
    const id = trimmed.split("youtu.be/")[1]?.split("?")[0];
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
  } else if (trimmed.includes("youtube.com/embed/")) {
    return trimmed + "?autoplay=1&rel=0";
  }
  return null;
};

export default function About() {
  const topics = Object.values(topicData);
  const [showForm, setShowForm] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const { user } = useContext(UserContext);
  const [videoModal, setVideoModal] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [newInstructor, setNewInstructor] = useState({
    name: "",
    title: "",
    bio: "",
    avatar: "",
    experience: "",
    specialty: "",
    email: ""
  });
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [activeTab, setActiveTab] = useState("topics");

  // 📥 ئوقۇتقۇچىلارنى localStorage دىن ئوقۇش
  useEffect(() => {
    const saved = localStorage.getItem("kalbil_instructors");
    if (saved) {
      setInstructors(JSON.parse(saved));
    } else {
      const defaultInstructors = [
        {
          id: 1,
          name: "قاۋۇلجان ئابدۇرېھىم",
          title: "كىۋانت فېزىكىسى پۈتۈنچىلىك پىروگراممىست",
          bio: "10 يىللىق كۋانتۇم كومپيۇتېر تەجرىبىسىگە ئىگە، CERN دا ئىزدىنىش ئۆتكۈزگەن. كۋانتۇم ئالگورىتم ۋە كۋانتۇم ماشىنا ئۆگىنىش ساھەسىدە تەتقىقات ئېلىپ بارىدۇ.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
          experience: "10 يىل كۋانتۇم تەتقىقاتى",
          specialty: "كىۋانت ئالگورىتم، QML",
          email: "abdurehim@kelbil.ai"
        },
        {
          id: 2,
          name: "ئاي ئابدۇرېھىم",
          title: "ماشىنا ئۈگىنىش مۇتەخەسسىسى",
          bio: "Stanford دان دوكتۇرلۇق ئۇنۋانىغا ئىگە، AI تەتقىقاتچىسى. چوڭ قانچىلىك سانلىق مەلۇمات بىلەن ئىشلەش ۋە چوڭ تىل مودېللىرىنى ئىشلەپ چىقىرىش ساھەسىدە تەجرىبىلىك.",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
          experience: "8 يىل AI تەتقىقاتى",
          specialty: "نىرۋا تورى، تەبىئىي تىل بىر تەرەپ قىلىش",
          email: "ay@kelbil.ai"
        },
        {
          id: 3,
          name: "ئەخمەتجان قېيۇم",
          title: "پايتون پىروگرامما تىلى مۇتەخەسسىسى",
          bio: "Google دا 6 يىل پىروگرامما تۈزۈش تەجرىبىسىگە ئىگە. پايتون ئارقىلىق ئۈنۈملۈك پروگراممىلارنى ياساش ۋە ئۆگىتىشكە ئىختىساس قىلغان.",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
          experience: "6 يىل پىروگرامما تۈزۈش",
          specialty: "پايتون، Django، Data Science",
          email: "ahmetjan@kelbil.ai"
        }
      ];
      setInstructors(defaultInstructors);
      localStorage.setItem("kalbil_instructors", JSON.stringify(defaultInstructors));
    }
  }, []);

  const handleSaveInstructor = () => {
    if (!newInstructor.name || !newInstructor.avatar) {
      alert("ئىسمى ۋە رەسىم URLىنى كىرگۈزۈڭ!");
      return;
    }
    const updated = [...instructors, { 
      ...newInstructor, 
      id: Date.now(),
      avatar: newInstructor.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop&crop=face"
    }];
    setInstructors(updated);
    localStorage.setItem("kalbil_instructors", JSON.stringify(updated));
    setNewInstructor({ name: "", title: "", bio: "", avatar: "", experience: "", specialty: "", email: "" });
    setShowInstructorModal(false);
  };

  const handleDeleteInstructor = (id) => {
    const updated = instructors.filter(inst => inst.id !== id);
    setInstructors(updated);
    localStorage.setItem("kalbil_instructors", JSON.stringify(updated));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      id: Date.now(),
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      country: formData.get("country"),
      message: formData.get("message"),
      image: formData.get("image")?.name || null,
      video: formData.get("video")?.name || null,
    };
    setSubmissions((prev) => [...prev, payload]);
    e.target.reset();
    alert("✅ ئۇچۇر يوللاندى!");
  };

  const handleReset = () => {
    document.querySelector("form")?.reset();
  };

  const handleDelete = (id) => {
    setSubmissions(prev => prev.filter(item => item.id !== id));
  };

  const sliderItems = [
    { 
      src: `${process.env.PUBLIC_URL}/images/image01.png`, 
      quote: "«بىلىم — قەلبىمىزنىڭ نۇرى.»",
      title: "كىۋانتۇم ئۆگىنىش"
    },
    { 
      src: `${process.env.PUBLIC_URL}/images/image02.png`, 
      quote: "«تېخنىكا — قانىتىمىز!»",
      title: "AI تېخنىكىسى"
    },
    { 
      src: `${process.env.PUBLIC_URL}/images/image03.png`, 
      quote: "«بىرلىكتە ئۆگىنىمىز، كۈچ بېرىمىز.»",
      title: "ھەمكارلىق مەيدانى"
    },
    { 
      src: `${process.env.PUBLIC_URL}/images/image05.png`, 
      quote: "«كەلگۈسىمىز — پارلاق!»",
      title: "يورۇق كەلگۈسى"
    },
  ];

  const sliderSettings = {
    dots: true, 
    infinite: true, 
    speed: 600, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000, 
    pauseOnHover: true, 
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  const missionLines = [
    "بىلىم — قەلبىمىزنى يورۇتىدىغان نۇر، زېھىنىمىزنى چاقناتىدىغان چىراغ",
    "تېخنىكا — ئاسمانغا يول ئاچىدىغان قانىتىمىز!",
    "ئۇيغۇرلارغا بىلىم بىلەن كۈچ، تېخنىكا بىلەن غۇرۇر ئاتا قىلىدۇ — KelBiL",
    "ھەر بىر دەرس — كەلگۈسىگە باسقان قەدەم، ھەر بىر تېما — يورۇق يول",
    "بىلىم ئارقىلىق قىممىتىمىزنى يارىتايلى، ئارزۇيىمىزنى ئەمەلگە ئاشۇرايلى",
    "تېخنىكا — قورالىمىزلا ئەمەس، ئىپتىخارىمىزنىڭ يۇلتۇزى",
    "ئۇيغۇر تىلىدا، ئۇيغۇر روھىدا — بىلىمگە يول ئاچايلى",
    "بىلىمگە ئىنتىلىپ، تېخنىكىدا تۇرىدىغان جەمئىيەت — KelBiL",
    "بىرلىكتە ئۆگىنىپ، بىر-بىرىمىزگە كۈچ ئاتا قىلايلى",
    "كەلگۈسىمىز — بىلىم نۇرى بىلەن يورۇق، تېخنىكا چىرىغى بىلەن پارلاق!"
  ];

  const handleOpenTopicDetail = (topic) => {
    setSelectedTopic(topic);
  };

  const closeTopicModal = () => {
    setSelectedTopic(null);
  };

  const handleOpenInstructorDetail = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const closeInstructorModal = () => {
    setSelectedInstructor(null);
  };

  return (
    <>
      <Helmet>
        <title>ھەققىدە | KelBiL EduCourses</title>
        <meta name="description" content="KelBiL ھەققىدە - كۋانتۇم ئۆگىنىش، AI ۋە تېخنىكا دەرسلىرى" />
      </Helmet>

      {/* 🎥 ۋىديۇ مودالى */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-uyghur text-xl fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
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

      {/* 👩‍🏫 ئوقۇتقۇچى قوشۇش مودالى */}
      <AnimatePresence>
        {showInstructorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">يېڭى ئوقۇتقۇچى قوشۇش</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="👤 ئىسمى"
                  value={newInstructor.name}
                  onChange={(e) => setNewInstructor({ ...newInstructor, name: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="text"
                  placeholder="🎓 لايىھە/ئۇنۋان"
                  value={newInstructor.title}
                  onChange={(e) => setNewInstructor({ ...newInstructor, title: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="text"
                  placeholder="📧 ئېلخەت"
                  value={newInstructor.email}
                  onChange={(e) => setNewInstructor({ ...newInstructor, email: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="text"
                  placeholder="⭐ ئىختىساسلىق ساھە"
                  value={newInstructor.specialty}
                  onChange={(e) => setNewInstructor({ ...newInstructor, specialty: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="text"
                  placeholder="🏢 تەجرىبە"
                  value={newInstructor.experience}
                  onChange={(e) => setNewInstructor({ ...newInstructor, experience: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <textarea
                  placeholder="📝 قىسقىچە تەرجىھات"
                  value={newInstructor.bio}
                  onChange={(e) => setNewInstructor({ ...newInstructor, bio: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  rows="3"
                />
                <input
                  type="text"
                  placeholder="🖼️ ئاۋاتار URL (Unsplash ياكى باشقا)"
                  value={newInstructor.avatar}
                  onChange={(e) => setNewInstructor({ ...newInstructor, avatar: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button 
                  onClick={() => setShowInstructorModal(false)} 
                  className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-colors"
                >
                  بىكار قىلىش
                </button>
                <button 
                  onClick={handleSaveInstructor} 
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
                >
                  ساقلاش
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📖 تېما تەپسىلات مودالى */}
      <AnimatePresence>
        {selectedTopic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-start justify-center p-4 pt-10 overflow-y-auto"
            onClick={closeTopicModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                    {selectedTopic.title}
                  </h2>
                  <button
                    onClick={closeTopicModal}
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 italic mb-6 border-r-4 border-blue-500 pr-4">
                  {selectedTopic.slogan}
                </p>

                {/* ئوقۇتقۇچى بار بولسا */}
                {selectedTopic.instructor && (
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl">
                    <img
                      src={selectedTopic.instructor.avatar}
                      alt={selectedTopic.instructor.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-blue-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">
                        {selectedTopic.instructor.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {selectedTopic.instructor.title}
                      </p>
                      <p className="text-gray-700 dark:text-gray-200 mb-3">
                        {selectedTopic.instructor.bio}
                      </p>
                      {selectedTopic.instructor.experience && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          🏢 <span className="font-semibold">تەجرىبە:</span> {selectedTopic.instructor.experience}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* تەپسىلاتلىق تەسۋىر */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                    <span className="mr-2">📚</span>
                    تەپسىلات
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                      {selectedTopic.description}
                    </p>
                  </div>
                </div>

                {/* ۋىديۇ بار بولسا */}
                {selectedTopic.video && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <span className="mr-2">🎬</span>
                      دەرىس ۋىديۇسى
                    </h3>
                    <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-xl">
                      <iframe
                        src={getYoutubeEmbedUrl(selectedTopic.video)}
                        title={selectedTopic.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                <div className="text-center mt-8">
                  <Link
                    to={`/topic/${selectedTopic.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    تېخىمۇ كۆپ تەپسىلات كۆرۈش
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 👨‍🏫 ئوقۇتقۇچى تەپسىلات مودالى */}
      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeInstructorModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={selectedInstructor.avatar}
                      alt={selectedInstructor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 shadow-lg"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {selectedInstructor.name}
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                        {selectedInstructor.title}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeInstructorModal}
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedInstructor.specialty && (
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-3">⭐</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">ئىختىساسلىق ساھە</p>
                        <p className="text-gray-600 dark:text-gray-300">{selectedInstructor.specialty}</p>
                      </div>
                    </div>
                  )}

                  {selectedInstructor.experience && (
                    <div className="flex items-center">
                      <span className="text-green-500 mr-3">🏢</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">تەجرىبە</p>
                        <p className="text-gray-600 dark:text-gray-300">{selectedInstructor.experience}</p>
                      </div>
                    </div>
                  )}

                  {selectedInstructor.email && (
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-3">📧</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">ئېلخەت</p>
                        <p className="text-gray-600 dark:text-gray-300">{selectedInstructor.email}</p>
                      </div>
                    </div>
                  )}

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mt-4">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedInstructor.bio}
                    </p>
                  </div>

                  {user?.role === "admin" && (
                    <div className="flex justify-end mt-6">
                      <button
                        onClick={() => {
                          handleDeleteInstructor(selectedInstructor.id);
                          closeInstructorModal();
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
                      >
                        ئۆچۈرۈش
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ئاساسىي مەزمۇن */}
      <section className="font-uyghur text-2xl min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900 dark:to-emerald-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-full flex justify-center mb-6">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                src={`${process.env.PUBLIC_URL}/images/image05.png`}
                alt="KalBiL Logo"
                className="w-32 sm:w-48 md:w-56 lg:w-64 h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-emerald-500 to-purple-600 dark:from-blue-400 dark:via-emerald-300 dark:to-purple-400 mb-4"
              style={{ fontFamily: 'Amiri, serif' }}
            >
              ھەققىدە KelBiL EduCourses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className=" font-uyghur text-xl sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: 'font-uyghur ' }}
            >
              «بىلىم — كەلگۈسىمىزنىڭ نۇرى، تېخنىكا — قەدەملىرىمىزنىڭ كۈچى.»
            </motion.p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab("topics")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "topics" 
                      ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  }`}
                >
                  📚 دەرس تېمىلىرى
                </button>
                <button
                  onClick={() => setActiveTab("instructors")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "instructors" 
                      ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  }`}
                >
                  👨‍🏫 ئوقۇتقۇچىلار
                </button>
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`px-6 py-3 rounded-xl font-uyghur  font-semibold transition-all duration-300 ${
                    activeTab === "mission" 
                      ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  }`}
                >
                  🎯 نىشانىمىز
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "topics" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16"
            >
              {topics.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleOpenTopicDetail(item)}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img || `${process.env.PUBLIC_URL}/images/placeholder.jpg`}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.video && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        ▶️ ۋىديۇ بار
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                      {item.slogan}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        تەپسىلاتىنى كۆرۈش →
                      </span>
                      {item.video && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const embedUrl = getYoutubeEmbedUrl(item.video);
                            if (embedUrl) {
                              setVideoModal({ embedUrl, title: item.title });
                            }
                          }}
                          className="text-red-600 hover:text-red-700 text-2xl"
                        >
                          ▶️
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "instructors" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                  بىزنىڭ ئوقۇتقۇچىلىرىمىز
                </h3>
                {user?.role === "admin" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowInstructorModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                  >
                    ➕ يېڭى ئوقۇتقۇچى قوشۇش
                  </motion.button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {instructors.map((instructor, index) => (
                  <motion.div
                    key={instructor.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleOpenInstructorDetail(instructor)}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                  >
                    <div className="relative inline-block">
                      <img
                        src={instructor.avatar}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 group-hover:border-blue-500 transition-colors duration-300 mx-auto shadow-lg"
                      />
                      <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"></div>
                    </div>
                    <h4 className="font-bold text-lg mt-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {instructor.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">
                      {instructor.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                      {instructor.specialty}
                    </p>
                    <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                      تەپسىلاتىنى كۆرۈش ئۈچۈن چەكلىڭ
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "mission" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-uyghur text-xl mb-16"
            >
              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h3 className="font-uyghur text-xl text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-500 dark:from-emerald-300 dark:to-blue-300 mb-6" style={{ fontFamily: 'Amiri, serif' }}>
                  «تېخنىكا بىلەن قانىتىمىزنى ئېچىپ، بىلىم بىلەن كەلگۈسىمىزنى يورۇتايلى.»
                </h3>
                <p className="font-uyghur text-xl  sm:text-xl text-gray-600 dark:text-gray-400 font-serif max-w-4xl mx-auto" style={{ fontFamily: 'Amiri, serif' }}>
                  نىڭ نىشانى، ئۇيغۇرلارنىڭ بىلىم ۋە تېخنىكىدا ئالغا قەدەم ئېلىپ ئىلگىرلىشى ئۈچۈن — KalBiL
                </p>
              </motion.div>

              {/* Slider */}
              <div className="mb-16">
                <Slider {...sliderSettings}>
                  {sliderItems.map((item, idx) => (
                    <div key={idx} className=" font-uyghur text-xl px-2 relative">
                      <div className="font-uyghur text-xl relative rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                          src={item.src} 
                          alt={`slide-${idx}`} 
                          className="rounded-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
                        />
                        <div className="font-uyghur text-xl absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="font-uyghur text-xl absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                          <h4 className="font-uyghur text-xl text-white text-lg sm:text-xl font-semibold mb-2">{item.title}</h4>
                          <p className="font-uyghur text-xl text-white text-base sm:text-lg font-serif bg-black/40 backdrop-blur-sm rounded-xl p-4 inline-block">
                            {item.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Mission Lines */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="font-uyghur text-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {missionLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="font-uyghur bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <p className="font-uyghur text-gray-700 dark:text-gray-300 text-center" style={{ fontFamily: 'Amiri, serif' }}>
                      {line}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ھەمكارلىق قىسمى */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 sm:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                🤝 KelBiL بىلەن ھەمكارلىشىڭ
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                «بىزنى قوللىشىڭىزنى ئۈمىد قىلىمىز — بىرىلىكتە بىلىم تېخىمۇ كۈچلۈك، يوقالماس بولايلى»
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="font-uyghur text-3xl bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl  shadow-lg transition-all duration-300"
              >
                قېنى مەھەممەت
              </motion.button>
            </div>
          </motion.section>

          {/* ھەمكارلىق فورمىسى */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={() => setShowForm(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">ھەمكارلىق فورمىسى</h3>
                    <button
                      onClick={() => setShowForm(false)}
                      className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="👤 ئىسمى" name="name" required className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all" />
                      <input type="tel" placeholder="📞 تېلفۇن" name="phone" required className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all" />
                    </div>
                    <input type="email" placeholder="✉️ ئېلخەت" name="email" required className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all" />
                    <input type="text" placeholder="🌍 دۆلەت تەۋەلكى" name="country" className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all" />
                    <textarea placeholder="📝 قىسقا ئۇچۇر" name="message" rows="4" className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:border-blue-500 transition-all resize-none" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="file" accept="image/*" name="image" className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                      <input type="file" accept="video/*" name="video" className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                      <button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        📤 يوللاش
                      </button>
                      <button type="button" onClick={handleReset} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        🔄 ئۆزگەرتىش
                      </button>
                      <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        ❌ تاقاش
                      </button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* يوللانغان ئۇچۇرلار */}
          {submissions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">يوللانغان ئۇچۇرلار</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {submissions.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">{item.name}</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600 dark:text-gray-300">📞 {item.phone}</p>
                      <p className="text-gray-600 dark:text-gray-300">✉️ {item.email}</p>
                      <p className="text-gray-600 dark:text-gray-300">🌍 {item.country}</p>
                      <p className="text-gray-700 dark:text-gray-200 mt-3">📝 {item.message}</p>
                      {item.image && <p className="text-xs text-gray-500 mt-2">📷 رەسىم: {item.image}</p>}
                      {item.video && <p className="text-xs text-gray-500">🎥 ۋىدىئو: {item.video}</p>}
                    </div>
                    {user?.role === "admin" && (
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm transition-colors"
                      >
                        🗑️ ئۆچۈرۈش
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}