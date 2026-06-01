import { Link , useNavigate} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";


import React, { useState, useEffect, useRef } from "react";
import users from "../data/userscopy.json";
import albums from "../data/albums.json";

export default function NewLabelCourses() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState({ identifier: "", password: "" });
  const [openAlbum, setOpenAlbum] = useState(null);
  
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("course_progress");
    return saved ? JSON.parse(saved) : {};
  });

  const videoRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("course_progress", JSON.stringify(progress));
  }, [progress]);

  const handleOpenAlbum = (albumId) => {
    setOpenAlbum(albumId);
    const album = albums.find((a) => a.id === albumId);
    if (album && album.lessons && album.lessons.length > 0) {
      setCurrentVideo(album.lessons[0]);
      setCurrentIndex(0);
    } else {
      setCurrentVideo(null);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (videoRef.current && currentVideo && user) {
      const videoKey = `${user.id}_${openAlbum}_${currentIndex}`;
      const savedTime = progress[videoKey]?.currentTime || 0;
      
      const handleLoadedMetadata = () => {
        videoRef.current.currentTime = savedTime;
      };

      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, [currentVideo, currentIndex, user, openAlbum]);

  const handleTimeUpdate = () => {
    if (!videoRef.current || !user || !currentVideo) return;
    
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (!duration) return;

    const percent = (currentTime / duration) * 100;
    const videoKey = `${user.id}_${openAlbum}_${currentIndex}`;
    const isCompleted = progress[videoKey]?.completed || percent > 90;

    setProgress((prev) => ({
      ...prev,
      [videoKey]: {
        userId: user.id,
        userName: user.name,
        albumId: openAlbum,
        videoTitle: currentVideo.title,
        currentTime,
        duration,
        percent: Math.round(percent),
        completed: isCompleted,
        lastWatched: new Date().toLocaleString()
      },
    }));
  };

  const handleVideoEnded = () => {
    if (!autoplay) return;
    const album = albums.find((a) => a.id === openAlbum);
    if (album && album.lessons && currentIndex < album.lessons.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setCurrentVideo(album.lessons[nextIdx]);
    }
  };

  const handleLogin = () => {
    const inputKey = login.identifier.trim();
    const inputPass = login.password.trim();
    const found = users.find((u) => (u.id === inputKey || u.name === inputKey) && u.password === inputPass);

    if (!found) {
      alert("ئىسمى/ID ياكى مەخپىي نومۇر خاتا!");
      return;
    }
    setUser(found);
  };

  if (!user) {
    return (
  <div
    className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#071126] to-[#020617] text-white flex flex-col justify-between items-center px-4 py-6"
    dir="rtl"
  >

    {/* Animated Background */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_40%)]"></div>
    </div>

   {/* SIDE IMAGES */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

  {/* LEFT IMAGE */}
  <div
    className="
      absolute
      left-[20px]
      top-[120px]
      w-[380px]
      h-[260px]
      hidden xl:flex
      items-center
      justify-center
    "
  >

    {/* Glow */}
    <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-[2rem]"></div>

    {/* Image */}
    <img
      src={`${process.env.PUBLIC_URL}/images/28daysAI.jpg`}
      alt="AI Left"
      className="
        max-w-full
        max-h-full
        object-contain
        opacity-210
        blur-[0.5px]
        contrast-125
        brightness-90
        rounded-[2rem]
        border border-cyan-400/10
        shadow-[0_0_60px_rgba(6,182,212,0.20)]
      "
    />

    {/* Overlay */}
    <div className="
      absolute inset-0
      rounded-[2rem]
      bg-gradient-to-r
      from-[#020617]/10
      via-transparent
      to-transparent
    "></div>

  </div>

  {/* RIGHT IMAGE */}
  <div
    className="
      absolute
      right-[20px]
      top-[120px]
      w-[380px]
      h-[260px]
      hidden xl:flex
      items-center
      justify-center
    "
  >

    {/* Glow */}
    <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-[2rem]"></div>

    {/* Image */}
    <img
      src={`${process.env.PUBLIC_URL}/images/QunatumAI.png`}
      alt="AI Right"
      className="
        max-w-full
        max-h-full
        object-contain
        opacity-210
        blur-[0.5px]
        contrast-125
        brightness-90
        rounded-[2rem]
        border border-emerald-400/10
        shadow-[0_0_60px_rgba(16,185,129,0.20)]
      "
    />

    {/* Overlay */}
    <div className="
      absolute inset-0
      rounded-[2rem]
      bg-gradient-to-l
      from-[#020617]/30
      via-transparent
      to-transparent
    "></div>

  </div>

</div>


    {/* Top Space */}
    <div />

    {/* Main Container */}
    <div className="relative z-10 w-full max-w-md">

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 flex flex-col items-center text-center"
      >

        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 180
          }}
          className="relative w-28 h-28 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.25)]"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-2xl"></div>

          {/* Letter */}
          <span className="relative text-5xl font-black bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
            K
          </span>
        </motion.div>

        {/* Brand */}
        <h1 className="mt-5 text-3xl sm:text-4xl font-black tracking-wide bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
          KELBIL HIGH TECH
        </h1>

        {/* English */}
        <p className="mt-2 text-xs tracking-[0.35em] uppercase text-cyan-400/70 font-mono">
          Advanced AI Learning Hub
        </p>

        {/* Uyghur Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg sm:text-xl leading-loose text-slate-300 max-w-md font-uyghur"
        >
          «بىلىم بىلەن ئويغىنىمىز، سۈنئىي ئەقىل بىلەن كەلگۈسىنى قۇرىمىز»
        </motion.p>

        {/* Small Subtitle */}
        <p className="mt-3 text-sm text-slate-500 leading-relaxed px-4">
          ئۇيغۇر زېھنى • زامانىۋى تېخنىكا • رەقەملىك كەلگۈسى
        </p>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-7 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
      >

        {/* Card Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>

        {/* Heading */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            سىستېمىغا كىرىش
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            AI Education Platform Access
          </p>
        </div>

        {/* Inputs */}
        <div className="relative z-10 space-y-5">

          {/* User */}
          <div>
            <label className="block text-sm text-slate-300 mb-2 mr-1">
              ئىسمىڭىز ياكى كىملىك نومۇرى
            </label>

            <input
              className="w-full bg-slate-950/70 border border-slate-800 text-slate-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-right"
              placeholder="كىملىك كىرگۈزۈڭ..."
              value={login.identifier}
              onChange={(e) =>
                setLogin((prev) => ({
                  ...prev,
                  identifier: e.target.value,
                }))
              }
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-300 mb-2 mr-1">
              مەخپىي نومۇر
            </label>

            <input
              type="password"
              className="w-full bg-slate-950/70 border border-slate-800 text-slate-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all text-left font-mono tracking-widest"
              placeholder="••••••••"
              value={login.password}
              onChange={(e) =>
                setLogin((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
              <input type="checkbox" className="accent-cyan-500" />
              <span>كىرىشنى ساقلاش</span>
            </label>

            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              پارول ئۇنتۇلدۇمۇ؟
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogin}
            className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black py-3 rounded-2xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]"
          >
            <span className="relative z-10">
              سىستېمىغا كىرىش
            </span>

            <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
          </motion.button>

        </div>
      </motion.div>

    </div>

    {/* Footer */}
    <footer className="relative z-10 mt-14 text-center">

      <p className="text-xs text-slate-600 tracking-widest uppercase font-mono">
        © 2026 KELBIL AI ACADEMY
      </p>

      <p className="mt-3 text-sm text-slate-500">
        Powered by Uyghur Intelligence & Future Technology
      </p>

    </footer>
  </div>
);
  }

  const allowedAlbums = albums.filter((album) => {
    if (user.role === "admin") return true; 
    if (user.role === "student") return album.id !== 1; 
    if (user.role === "user") return album.id === 1; 
    return false;
  });

  const selectedAlbumData = albums.find(a => a.id === openAlbum);

   // =================== 🎯 Professional StudentInfo Navigation ===================
const goToStudentInfo = () => {
  // 1️⃣ ئىشلەتكۈچى دەلىللەش ۋە خاتالىق تەكشۈرۈش
  if (!user) {
    console.warn('⚠️ ئىشلەتكۈچى كىرمىگەن، لىگىن بەتىگە قايتۇرۇلىدۇ');
    alert('ئالدى بىلەن سىستېمىغا كىرىڭ!');
    return;
  }

  // 2️⃣ رول تەكشۈرۈش (پەقەت ئوقۇغۇچى ۋە باشقۇرغۇچىلا كىرەلەيدۇ)
  const allowedRoles = ['student', 'admin'];
  if (!allowedRoles.includes(user.role)) {
    console.error('❌ رۇخسەتسىز زىيارەت:', user.role);
    alert('كەچۈرۈڭ، سىزنىڭ بۇ بەتكە كىرىش ھوقۇقىڭىز يوق!');
    return;
  }

  // 3️⃣ يۆتكىلىش ئالدى تەييارلىق (ئىختىيارىي: يۈكلەش ھالىتى)
  const prepareNavigation = () => {
    // Analytics قوشۇش (ئەگەر لازىم بولسا)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'navigate_to_student_info', {
        user_id: user.id,
        user_role: user.role,
        from_page: 'NewLabelCourses'
      });
    }
    
    // localStorage غا ئاخىرقى زىيارەتنى خاتىرىلەش
    try {
      localStorage.setItem('kelbil_last_navigation', JSON.stringify({
        to: '/student-info',
        from: 'NewLabelCourses',
        timestamp: new Date().toISOString(),
        userId: user.id
      }));
    } catch (e) {
      console.warn('⚠️ localStorage خاتىرىلەش مەغلۇب بولدى:', e);
    }
  };

  // 4️⃣ بىخەتەر يۆتكىلىش فۇنكسىيىسى
  const performNavigation = () => {
    try {
      // ✅ ئاساسلىق يۆتكىلىش: react-router-dom useNavigate
      navigate('/student-info', {
        state: {
          user: {
            id: user.id,
            name: user.name,
            role: user.role
            // 🔐 مەخپىي نۇمۇرنى ھەرگىز يەتكۈزمەڭ!
          },
          from: 'NewLabelCourses',
          timestamp: Date.now()
        },
        replace: false // قايتىش كۇنۇپكىسى ئۈچۈن тарىخقا ساقلاش
      });

      // ✅ مۇۋەپپەقىيەتلىك خاتىرىلەش
      console.log('✅ مۇۋەپپەقىيەتلىك يۆتكەلدى:', {
        to: '/student-info',
        user: user.name,
        role: user.role
      });

      return true;

    } catch (error) {
      // ❌ خاتالىق بىر تەرەپ قىلىش
      console.error('❌ يۆتكىلىش خاتالىقى:', error);
      
      // 🔁 فۇلباك (fallback) ئۇسۇلى: توغرىدىن-توغرا يۆتكەش
      try {
        console.log('🔄 فۇلباك ئۇسۇلى ئىشلىتىلىۋاتىدۇ...');
        window.location.href = '/student-info';
        return true;
      } catch (fallbackError) {
        console.error('💥 فۇلباكمۇ مەغلۇب بولدى:', fallbackError);
        alert('بەت يۆتكىلىشتە خاتالىق كۆرۈلدى، قايتا سىناپ بېقىڭ!');
        return false;
      }
    }
  };

  // 5️⃣ ئىجرا قىلىش تەرتىپى
  prepareNavigation();
  const success = performNavigation();
  
  // 6️⃣ نەتىجە قايۇرۇش (ئىختىيارىي)
  if (!success) {
    // Analytics غا خاتالىق خاتىرىلەش
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'navigation_error', {
        page: 'NewLabelCourses',
        target: '/student-info'
      });
    }
  }
  
  return success;
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 p-4 md:p-6" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative text-center mb-16 overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 via-emerald-400/20 to-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
  </div>

  {/* Logo */}
  <div className="relative w-full flex justify-center mb-8 z-10">
    <motion.img
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 180,
      }}
      src={`${process.env.PUBLIC_URL}/images/image05.png`}
      alt="KelBiL Logo"
      className="w-36 sm:w-52 md:w-64 lg:w-72 h-auto object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"
    />
  </div>

  {/* Small Label */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="relative z-10 inline-block px-5 py-2 rounded-full border border-emerald-400/30 bg-white/10 backdrop-blur-md mb-6"
  >
    <span className="text-sm sm:text-base tracking-widest uppercase text-emerald-400 font-semibold">
      AI • EDUCATION • FUTURE
    </span>
  </motion.div>

  {/* Main Title */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="relative z-10 text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight"
    style={{ fontFamily: "Amiri, serif" }}
  >
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500 drop-shadow-lg">
      KelBiL EduCourses
    </span>
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
    className="relative z-10 font-uyghur text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-200 leading-loose max-w-5xl mx-auto px-4"
    dir="rtl"
  >
    «بىلىم بىلەن ئويغىنىمىز، سۈنئىي ئەقىل بىلەن كەلگۈسىنى قۇرىمىز.»
  </motion.p>

  {/* English Slogan */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.9 }}
    className="relative z-10 mt-5 text-base sm:text-lg md:text-xl tracking-wide text-gray-500 dark:text-gray-400 italic"
  >
    Knowledge awakens us. AI builds our future.
  </motion.p>

  {/* Decorative Line */}
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "220px" }}
    transition={{ delay: 1.1, duration: 1 }}
    className="relative z-10 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500"
  />

  {/* Bottom Glow Text */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.3 }}
    className="relative z-10 mt-8"
  >
    <span className="text-sm sm:text-base md:text-lg text-gray-400 tracking-[0.3em] uppercase">
      Uyghur AI • Digital Future • Innovation
    </span>
  </motion.div>
</motion.div>
        {/* ========================= PROFESSIONAL HEADER ========================= */}
<header className="relative overflow-hidden bg-[#0B1120]/85 backdrop-blur-2xl border border-cyan-500/10 rounded-[1.6rem] px-5 lg:px-6 py-4 shadow-[0_0_40px_rgba(0,0,0,0.28)]">

  {/* Soft Background Glow */}
  <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/5 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-52 h-52 bg-emerald-500/5 blur-3xl rounded-full"></div>

  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">

    {/* ================= LEFT ================= */}
    <div className="flex items-center gap-4 min-w-0">

      {/* Professional Logo */}
      <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 border border-cyan-400/15 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.12)]">

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 blur-xl"></div>

        {/* Logo Text */}
        <span className="relative text-2xl font-black bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
          K
        </span>
      </div>

      {/* Academy Text */}
      <div className="min-w-0">

        {/* Top Label */}
        <div className="flex items-center gap-2 flex-wrap">

          <span className="text-[9px] uppercase tracking-[0.28em] text-cyan-400/60 font-mono">
            KELBIL AI ACADEMY
          </span>

          <span className="hidden sm:block w-1 h-1 rounded-full bg-cyan-500/40"></span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-400/50">
            EDUCATION SYSTEM
          </span>

        </div>

        {/* Main Title */}
        <h1 className="text-lg sm:text-xl font-black text-white mt-1 leading-tight truncate">
          كەلبىل ئوقۇتۇش باشقۇرۇش سىستېمىسى
        </h1>

        {/* Slogan */}
        <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-1">
          «بىلىم بىلەن ئويغىنىمىز، سۈنئىي ئەقىل بىلەن كەلگۈسىنى قۇرىمىز»
        </p>

      </div>

    </div>

    {/* ================= RIGHT ================= */}
    <div className="flex items-center justify-between lg:justify-end gap-3 w-full lg:w-auto">

      {/* User Card */}
      <div className="flex items-center gap-3 bg-slate-950/50 border border-slate-800/80 rounded-2xl px-3 py-2">

        {/* Avatar */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
          {user.name?.charAt(0)}
        </div>

        {/* User Info */}
        <div className="leading-tight">

          <p className="text-[10px] text-slate-500">
            ئوقۇغۇچى
          </p>

          <h3 className="text-sm font-bold text-white max-w-[120px] truncate">
            {user.name}
          </h3>

          <span className="inline-flex mt-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/10 text-cyan-400 text-[9px] uppercase tracking-wide">
            {user.role}
          </span>

        </div>

      </div>

      {/* Logout Button */}
      <button
        onClick={() => {
          setUser(null);
          setOpenAlbum(null);
        }}
        className="group relative overflow-hidden h-[56px] px-4 rounded-2xl bg-red-500/5 border border-red-500/10 hover:border-red-400/20 transition-all flex items-center justify-center"
      >

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-all"></div>

        <span className="relative text-xs font-bold text-red-400 whitespace-nowrap">
          چىكىنىش
        </span>

      </button>

    </div>

  </div>
</header>

{/* ========================= ADMIN PANEL ========================= */}
{user.role === "admin" && !openAlbum && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl"
  >

    {/* Glow */}
    <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 blur-3xl rounded-full"></div>

    {/* Header */}
    <div className="relative z-10 flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-5">

      <div>

        <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/70 font-mono">
          ADMIN ANALYTICS
        </span>

        <h3 className="text-xl font-black text-white mt-2">
          ئوقۇغۇچىلارنىڭ ئۆگىنىش دوكلاتى
        </h3>

      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 flex-wrap">

        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl px-4 py-3">
          <p className="text-xs text-slate-500">ئومۇمىي كۆرۈش</p>
          <h4 className="text-xl font-black text-cyan-400">
            {Object.keys(progress).length}
          </h4>
        </div>

        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl px-4 py-3">
          <p className="text-xs text-slate-500">تاماملانغان</p>
          <h4 className="text-xl font-black text-emerald-400">
            {
              Object.values(progress).filter((p) => p.completed).length
            }
          </h4>
        </div>
         {/* =================== STUDENT INFO BUTTON - يېڭى قوشۇلغان بۆلەك =================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Professional Student Info Card Button */}
          <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-purple-500/10 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
            
            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left: Icon + Text */}
                <div className="flex items-center gap-5">
                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-lg"></div>
                    <svg className="relative w-8 h-8 lg:w-10 lg:h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </motion.div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-[10px] uppercase tracking-widest font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      PERSONAL DASHBOARD
                    </span>
                    <h3 className="text-xl lg:text-2xl font-black text-white mt-3 leading-relaxed">
                      مېنىڭ ئۇچۇرۇم ۋە دەرس ئەھۋالىم
                    </h3>
                    <p className="text-sm text-slate-400 mt-2 leading-loose max-w-md">
                      قاتنىشىش خاتىرىسى، تاپشۇرۇق يۈكلەش، ئوقۇتقۇچى ئىنكاسى ۋە شەخسىي ئىلگىرىلەش دوكلاتىڭىزنى بۇ يەردىن كۆرۈڭ
                    </p>
                  </div>
                </div>

                {/* Right: Action Button */}
                <div className="flex items-center gap-4">
                  {/* Stats Preview */}
                  <div className="hidden md:flex items-center gap-3 bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3">
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500">تاماملانغان</p>
                      <p className="text-lg font-black text-emerald-400">
                        {Object.values(progress).filter(p => p.userId === currentUser?.id && p.completed).length}
                      </p>
                    </div>
                    <div className="w-px h-8 bg-slate-800"></div>
                    <div className="text-center">
                      <p className="text-[10px] text-slate-500">ئومۇمىي</p>
                      <p className="text-lg font-black text-cyan-400">
                        {Object.values(progress).filter(p => p.userId === currentUser?.id).length}
                      </p>
                    </div>
                  </div>

                  {/* Main Button - StudentInfo غا ئۇلاش */}
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(6,182,212,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={goToStudentInfo}
                    className="relative overflow-hidden group/btn px-6 lg:px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black text-sm lg:text-base transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      كىرىش ۋە كۆرۈش
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </motion.button>
                </div>

              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-emerald-400/30 rounded-br-2xl"></div>
          </div>
        </motion.div>

      </div>

    </div>

    {/* Table */}
    {Object.keys(progress).length === 0 ? (

      <div className="text-center py-14">
        <p className="text-slate-500">
          تېخى ئوقۇغۇچىلارنىڭ كۆرۈش خاتىرىسى يوق
        </p>
      </div>

    ) : (

      <div className="overflow-x-auto mt-5">

        <table className="w-full text-right border-separate border-spacing-y-2">

          <thead>
            <tr className="text-slate-500 text-xs">

              <th className="px-4 py-3">ئوقۇغۇچى</th>
              <th className="px-4 py-3">دەرس</th>
              <th className="px-4 py-3">پىرسەنت</th>
              <th className="px-4 py-3">ھالىتى</th>
              <th className="px-4 py-3">ۋاقتى</th>

            </tr>
          </thead>

          <tbody>

            {Object.values(progress).map((item, idx) => (

              <tr
                key={idx}
                className="bg-slate-950/40 border border-slate-800 hover:border-cyan-500/20 transition-all"
              >

                <td className="px-4 py-4 rounded-r-2xl">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black">
                      {item.userName?.charAt(0)}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.userName}
                      </h4>

                      <p className="text-[11px] text-slate-500">
                        Student
                      </p>
                    </div>

                  </div>

                </td>

                <td className="px-4 py-4 text-sm text-slate-300">
                  {item.videoTitle}
                </td>

                <td className="px-4 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-28 h-2 rounded-full bg-slate-900 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>

                    <span className="text-xs font-mono text-cyan-400">
                      %{item.percent}
                    </span>

                  </div>

                </td>

                <td className="px-4 py-4">

                  {item.completed ? (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                      ✓ تاماملاندى
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-bold">
                      ئۆگىنىۋاتىدۇ
                    </span>
                  )}

                </td>

                <td className="px-4 py-4 rounded-l-2xl text-xs text-slate-500 font-mono">
                  {item.lastWatched}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    )}

  </motion.div>
)}

{/* ========================= ALBUMS ========================= */}
{!openAlbum && (
  <div className="space-y-6">

    {/* Section Title */}
    <div className="flex items-center justify-between flex-wrap gap-3">

      <div>

        <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/70 font-mono">
          PROFESSIONAL COURSES
        </span>

        <h2 className="text-2xl font-black text-white mt-2">
          سىزگە ئېچىۋېتىلگەن ئاكادېمىك كۇرسلار
        </h2>

      </div>

      <div className="bg-slate-950/50 border border-slate-800 rounded-2xl px-4 py-3">
        <p className="text-xs text-slate-500">
          ئومۇمىي كۇرس
        </p>

        <h3 className="text-xl font-black text-cyan-400">
          {allowedAlbums.length}
        </h3>
      </div>

    </div>

    {/* Album Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

      {allowedAlbums.map((album) => (

        <motion.div
          key={album.id}
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-[2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-cyan-500/20 transition-all shadow-2xl"
        >

          {/* Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/5 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">

            <img
              src={
                album.image ||
                "http://localhost:3000/kalbil-website/images/image05.png"
              }
              alt={album.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/20 to-transparent"></div>

            {/* Videos */}
            <div className="absolute top-4 left-4">

              <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-cyan-300 text-[11px] font-black tracking-wider">
                {album.lessons?.length || 0} VIDEOS
              </div>

            </div>

            {/* Category */}
            <div className="absolute bottom-4 right-4">

              <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest">
                AI COURSE
              </div>

            </div>

          </div>

          {/* Content */}
          <div className="relative z-10 p-6 space-y-5">

            <div>

              <h3 className="text-xl font-black text-white leading-relaxed group-hover:text-cyan-300 transition-colors">
                {album.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-loose line-clamp-3">
                {album.desc ||
                  "سۈنئىي ئەقىل، پروگرامما، تېخنىكا ۋە زامانىۋى رەقەملىك بىلىمگە ئائىت ئاكادېمىك دەرس."}
              </p>

            </div>

            {/* Info */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-xs">

              <div>
                <p className="text-slate-500">
                  مۇئەللىم
                </p>

                <h4 className="text-slate-300 font-bold mt-1">
                  {album.author || "Kelbil Academy"}
                </h4>
              </div>

              <div className="text-left">
                <p className="text-slate-500">
                  ۋاقتى
                </p>

                <h4 className="text-slate-300 font-mono mt-1">
                  {album.date || "2026"}
                </h4>
              </div>

            </div>

            {/* Button */}
            <button
              onClick={() => handleOpenAlbum(album.id)}
              className="relative overflow-hidden w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black transition-all shadow-[0_0_25px_rgba(6,182,212,0.25)]"
            >

              <span className="relative z-10">
                كۇرسنى باشلاش
              </span>

            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
)}

       {/* ----------------- Professional Video Learning Layout ----------------- */}
{openAlbum && selectedAlbumData && (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-5"
  >

    {/* Top Header */}
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-cyan-950/40 border border-cyan-500/10 rounded-3xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_0_40px_rgba(6,182,212,0.08)]">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70 font-mono">
          KELBIL AI COURSE
        </span>

        <h2 className="text-lg sm:text-xl font-black text-white mt-1">
          {selectedAlbumData.title}
        </h2>

        <p className="text-xs text-slate-400 mt-1">
          ئۇيغۇرچە سۈنئىي ئەقىل دەرس سۇپىسى
        </p>
      </div>

      <button
        onClick={() => setOpenAlbum(null)}
        className="relative z-10 px-4 py-2 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 text-sm text-slate-300 transition-all"
      >
        ← ئەلبۇملارغا قايتىش
      </button>
    </div>

   {/* Main Grid */}
<div className="grid grid-cols-1 xl:grid-cols-4 gap-5">

  {/* ---------------- LEFT BIG PLAYER ---------------- */}
  <div className="xl:col-span-3 space-y-4">

    {currentVideo ? (
      <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-5 shadow-2xl">

        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-500/10 blur-3xl rounded-full"></div>

        {/* BIG VIDEO */}
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-800 bg-black shadow-[0_0_60px_rgba(0,0,0,0.55)]">

         {currentVideo.youtube ? (
  <iframe
    src={`${
      currentVideo.youtube.includes('watch?v=')
        ? currentVideo.youtube.replace('watch?v=', 'embed/')
        : currentVideo.youtube.includes('youtu.be/')
        ? currentVideo.youtube.replace('youtu.be/', 'youtube.com/embed/')
        : currentVideo.youtube
    }?autoplay=1`}
    title={currentVideo.title}
    className="w-full h-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />

          ) : (
            <video
              ref={videoRef}
              src={currentVideo.video}
              controls
              autoPlay
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full h-full object-contain"
            />
          )}

        </div>

        {/* Bottom Info */}
        <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">

          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] tracking-wider font-mono">
              LESSON {(currentIndex + 1).toString().padStart(2, "0")}
            </span>

            <h3 className="text-2xl font-black text-white mt-3 leading-relaxed">
              {currentVideo.title}
            </h3>
          </div>

          {/* Autoplay */}
          <div className="flex items-center gap-3 bg-slate-950/70 border border-slate-800 rounded-2xl px-4 py-3">
            <span className="text-xs text-slate-400">
              ئاپتوماتىك كېيىنكى دەرس
            </span>

            <button
              onClick={() => setAutoplay(!autoplay)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                autoplay
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-slate-800 text-slate-500"
              }`}
            >
              {autoplay ? "ئوچۇق" : "تاقاق"}
            </button>
          </div>

        </div>

      </div>
    ) : (
      <div className="bg-slate-900/30 border border-dashed border-slate-700 rounded-3xl py-20 text-center">
        <p className="text-slate-500">
          ۋىدىئو تېپىلمىدى
        </p>
      </div>
    )}
  </div>

  {/* ---------------- RIGHT SMALL VIDEO CARDS ---------------- */}
  <div className="space-y-3 xl:max-h-[820px] overflow-y-auto pr-1 custom-scrollbar">

    <div className="flex items-center justify-between px-1 mb-2">
      <h3 className="text-sm font-bold text-slate-300">
        دەرسلەر
      </h3>

      <span className="text-xs text-slate-500">
        {selectedAlbumData.lessons?.length} Video
      </span>
    </div>

    {selectedAlbumData.lessons?.map((lesson, idx) => {

      const isPlaying = currentIndex === idx;

      const videoKey = `${user.id}_${openAlbum}_${idx}`;

      const isCompleted = progress[videoKey]?.completed;

      return (
        <motion.div
          key={idx}
          whileHover={{ y: -2 }}
          onClick={() => {
            setCurrentVideo(lesson);
            setCurrentIndex(idx);
          }}
          className={`group relative overflow-hidden rounded-2xl border cursor-pointer transition-all ${
            isPlaying
              ? "border-cyan-400/40 bg-cyan-500/10"
              : isCompleted
              ? "border-emerald-500/20 bg-emerald-500/[0.03]"
              : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
          }`}
        >

          {/* Small Thumbnail */}
          <div className="relative aspect-video overflow-hidden">

            <img
              src={
                lesson.thumbnail ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
              }
              alt={lesson.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Small Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border ${
                isPlaying
                  ? "bg-cyan-400/20 border-cyan-300"
                  : "bg-black/30 border-white/20"
              }`}>
                <span className="text-white text-sm ml-0.5">
                  ▶
                </span>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-2 left-2">

              {isPlaying ? (
                <span className="px-2 py-1 rounded-full bg-cyan-400 text-slate-950 text-[9px] font-black">
                  LIVE
                </span>
              ) : isCompleted ? (
                <span className="px-2 py-1 rounded-full bg-emerald-500 text-white text-[9px] font-black">
                  ✓
                </span>
              ) : (
                <span className="px-2 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[9px] font-mono">
                  %{progress[videoKey]?.percent || 0}
                </span>
              )}

            </div>

          </div>

          {/* Small Content */}
          <div className="p-3">

            <span className={`text-[10px] font-mono tracking-widest ${
              isPlaying
                ? "text-cyan-400"
                : isCompleted
                ? "text-emerald-400"
                : "text-slate-500"
            }`}>
              LESSON {(idx + 1).toString().padStart(2, "0")}
            </span>

            <h4 className={`mt-1 text-xs font-bold leading-relaxed line-clamp-2 ${
              isPlaying
                ? "text-cyan-300"
                : "text-white"
            }`}>
              {lesson.title}
            </h4>

          </div>

        </motion.div>
      );
    })}

  </div>
</div>
  </motion.div>
)}

        

      </div>
    </div>
  );
}