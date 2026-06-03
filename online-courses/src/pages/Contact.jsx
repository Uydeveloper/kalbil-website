import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../context/UserContext";
import users from "../data/userscopy.json";
import albums from "../data/albums.json";

export default function NewLabelCourses() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  // Login state with password visibility toggle
  const [login, setLogin] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // <-- Password visibility state
  
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
        if (videoRef.current) {
          videoRef.current.currentTime = savedTime;
        }
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

  // === LOGIN VIEW (No user logged in) ===
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
          <div className="absolute left-[20px] top-[120px] w-[380px] h-[260px] hidden xl:flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-[2rem]"></div>
            <img
              src={`${process.env.PUBLIC_URL}/images/28daysAI.jpg`}
              alt="AI Left"
              className="max-w-full max-h-full object-contain opacity-210 blur-[0.5px] contrast-125 brightness-90 rounded-[2rem] border border-cyan-400/10 shadow-[0_0_60px_rgba(6,182,212,0.20)]"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#020617]/10 via-transparent to-transparent"></div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute right-[20px] top-[120px] w-[380px] h-[260px] hidden xl:flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-[2rem]"></div>
            <img
              src={`${process.env.PUBLIC_URL}/images/QuantumTimeML.jpg`}
              alt="AI Right"
              className="max-w-full max-h-full object-contain opacity-210 blur-[0.5px] contrast-125 brightness-90 rounded-[2rem] border border-emerald-400/10 shadow-[0_0_60px_rgba(16,185,129,0.20)]"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-l from-[#020617]/30 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Top Space */}
        <div />
{/* 🚀 Main Login Container */}
<div className="relative z-10 w-full max-w-md px-4 sm:px-0">
  
  {/* 🏛️ Logo Section */}
  <div className="mb-10 flex flex-col items-center text-center select-none">
    
    {/* 🔮 3D ئانىماتسىيەلىك كىۋانت لوگو (Animated Quantum Logo) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="relative w-32 h-32 flex items-center justify-center group cursor-pointer"
    >
      {/* كەينىدىكى ئايلانما نېئون چىرىغى ئانىماتسىيەسى */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 rounded-[2.4rem] border-2 border-dashed border-cyan-400/40 p-1"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute inset-2 rounded-[2rem] border border-dotted border-emerald-400/30"
      />
      
      {/* ئاساسىي لوگو ساندۇقى */}
      <motion.div
        whileHover={{ scale: 1.08, shadow: "0 0 50px rgba(6,182,212,0.5)" }}
        className="w-26 h-26 rounded-[2.2rem] bg-slate-950/80 border border-cyan-400/40 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.25)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-50" />
        <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover:animate-pulse" />
        
        {/* 'K' ھەرپىنىڭ لەيلەش ئانىماتسىيەسى */}
        <motion.span
          animate={{ y: [2, -4, 2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative text-5xl font-black bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(6,182,212,0.4)] font-sans"
        >
          K
        </motion.span>
      </motion.div>
    </motion.div>

    {/* 🏷️ Brand & Title */}
    <h1 className="mt-6 text-3xl sm:text-4xl font-black tracking-wider bg-gradient-to-r from-cyan-300 via-slate-100 to-emerald-300 bg-clip-text text-transparent font-sans">
      KeLBiL UYGHUR HIGH TECH
    </h1>
    
    <div className="mt-2.5 flex items-center gap-2">
      <span className="h-[1px] w-5 bg-cyan-500/30 inline-block" />
      <p className="text-xs tracking-[0.45em] uppercase text-cyan-400/80 font-mono font-bold">
        Advanced AI Learning Hub
      </p>
      <span className="h-[1px] w-5 bg-cyan-500/30 inline-block" />
    </div>

    {/* 📜 Uyghur Slogan (ئۇيغۇر روھى) */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-6 text-xl sm:text-2xl leading-loose text-slate-200 max-w-sm font-uyghur font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
    >
      «بىلىم بىلەن ئويغىنىمىز، سۈنئىي ئەقىل بىلەن كەلگۈسىنى قۇرىمىز»
    </motion.p>
    
    <p className="mt-3 text-sm text-slate-400/90 leading-relaxed px-4 font-uyghur font-medium border-t border-white/5 pt-3 w-4/5 tracking-wide">
      ئۇيغۇر زېھنى <span className="text-cyan-400/60 mx-1">•</span> زامانىۋى تېخنىكا <span className="text-emerald-400/60 mx-1">•</span> رەقەملىك كەلگۈسى
    </p>
  </div>

  {/* 💳 Login Glass Card (تېخنىكىلىق ئېكران ساندۇقى) */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 90, damping: 18 }}
    className="relative overflow-hidden bg-slate-950/45 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
  >
    {/* كارتىنىڭ كۆركەم نېئون سايىلىرى */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />
    
    {/* زامانىۋى تېخنىكىلىق تور سىزىقچىلىرى (Cyber Grid Mesh) */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

    {/* 📋 Heading */}
    <div className="relative z-10 text-center mb-8 select-none">
      <h2 className="text-2xl font-black text-white font-uyghur tracking-wide">سىستېمىغا كىرىش</h2>
      <p className="text-xs text-slate-400/70 font-mono mt-1.5 tracking-wider uppercase">Secure AI Interface Access</p>
      <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-500 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
    </div>

    {/* 📝 Inputs Form */}
    <div className="relative z-10 space-y-6">
      
      {/* 👤 User Input (سولدىن ئوڭغا توغرىلانغان) */}
      <div>
        <label className="block text-sm font-bold text-slate-300 mb-2.5 mr-1 text-right font-uyghur">
          ئىسمىڭىز ياكى كىملىك نومۇرى
        </label>
        <div className="relative">
          <input
            type="text"
            dir="ltr" // ✅ سولدىن ئوڭغا كىرگۈزۈش تەمىنلەندى
            className="w-full bg-slate-950/90 border border-slate-800 text-cyan-100 rounded-2xl px-5 py-3.5 text-base font-sans focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 focus:shadow-[0_0_25px_rgba(34,211,238,0.18)] transition-all placeholder:text-slate-700 text-left"
            placeholder="Enter username or ID..."
            value={login.identifier}
            onChange={(e) => setLogin((prev) => ({ ...prev, identifier: e.target.value }))}
          />
          {/* كىرگۈزۈش ساندۇقى ئىچىدىكى زامانىۋى بەلگە (ئوڭ تەرەپكە) */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 font-mono text-xs select-none">ID</span>
        </div>
      </div>

      {/* 🔒 Password Input (سولدىن ئوڭغا توغرىلانغان) */}
      <div>
        <label className="block text-sm font-bold text-slate-300 mb-2.5 mr-1 text-right font-uyghur">
          مەخپىي نومۇر
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            dir="ltr" // ✅ سولدىن ئوڭغا كىرگۈزۈش تەمىنلەندى
            className="w-full bg-slate-950/90 border border-slate-800 text-emerald-100 rounded-2xl px-5 py-3.5 pl-14 pr-12 text-base focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 focus:shadow-[0_0_25px_rgba(52,211,153,0.18)] transition-all placeholder:text-slate-800 text-left font-mono tracking-widest"
            placeholder="••••••••"
            value={login.password}
            onChange={(e) => setLogin((prev) => ({ ...prev, password: e.target.value }))}
          />
          
          {/* كۆز بەلگىسى كۇنۇپكىسى (سول تەرەپتە قۇلايلىق) */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition-colors focus:outline-none p-1.5 hover:bg-white/5 rounded-xl"
            aria-label={showPassword ? "مەخپىي نومۇرنى يوشۇرۇش" : "مەخپىي نومۇرنى كۆرسىتىش"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                <line x1="2" y1="2" x2="22" y2="22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
          
          {/* قۇلۇپ بەلگىسى (ئوڭ تەرەپتە كود تۇيغۇسى ئۈچۈن) */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 font-mono text-xs select-none">PW</span>
        </div>
      </div>

      {/* ⚙️ Remember & Forgot Options */}
      <div className="flex items-center justify-between text-sm pt-1 font-uyghur font-medium" style={{ direction: 'rtl' }}>
        <label className="flex items-center gap-2 text-slate-400 hover:text-slate-200 cursor-pointer select-none transition-colors">
          <input 
            type="checkbox" 
            className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-0 focus:ring-offset-0 accent-cyan-500 cursor-pointer" 
          />
          <span>كىرىشنى ساقلاش</span>
        </label>
        <button 
          type="button" 
          className="text-cyan-400 hover:text-cyan-300 font-bold transition-all hover:underline underline-offset-4"
        >
          پارول ئۇنتۇلدۇمۇ؟
        </button>
      </div>

      {/* ⚡ Action Login Button (نور سىيرىلىش ئېففېكتى بار) */}
      <motion.button
        whileHover={{ scale: 1.015, y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleLogin}
        className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black py-4 rounded-2xl transition-all shadow-[0_8px_32px_rgba(6,182,212,0.35)] text-base font-uyghur tracking-wide cursor-pointer group mt-2"
      >
        <span className="relative z-10">سىستېمىغا كىرىش</span>
        {/* چاشقىنەك كەلگەندە كودلۇق چاقناش ئېففېكتى */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </motion.button>
      
    </div>
  </motion.div>
</div>

        {/* Bottom Space */}
        <div />
   

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
    // ئەگەر user ياكى user.roles تېخى يۈكلەنمىگەن بولسا خاتالىق چىقىپ كەتمەيدۇ
    if (user?.roles?.includes("admin")) {
        return true;
    }

    return (
        (user?.roles?.includes("user") && album.id === 1) ||
        (user?.roles?.includes("student") && album.id !== 1)
    );
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
    <div className="w-full min-h-screen bg-[#030712] text-slate-100 p-4 sm:p-6 lg:p-8 space-y-12 select-none antialiased font-uyghur">
      
      {/* ========================= 1. HERO BANNER SECTION ========================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-b from-slate-900/40 to-slate-950/20 border border-slate-800/40 rounded-[2.5rem] p-8 md:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Background Glow - كۆزنى تالدۇرمايدىغان كىۋانتلىق يۇمشاق نۇر */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-emerald-400/10 to-purple-500/10 blur-[130px] rounded-full animate-pulse duration-[6000ms]"></div>
        </div>

        {/* Logo - سۈزۈك ئايلانما سايىلىق بەلگە */}
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
            className="w-36 sm:w-48 md:w-56 h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(59,130,246,0.25)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Small Label - يۇقىرى تېخنىكىلىق كىچىك تاختا */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 inline-block px-6 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md mb-6"
        >
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-emerald-400 font-mono font-bold">
            AI • EDUCATION • FUTURE
          </span>
        </motion.div>

        {/* Main Title - ئاكادېمىك كۇرس ماۋزۇسى */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight font-sans tracking-wide"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 drop-shadow-md">
            KelBiL EduCourses
          </span>
        </motion.h2>

        {/* Subtitle - ئۇيغۇرچە شۇئار */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative z-10 text-xl sm:text-2xl md:text-3xl text-slate-200 leading-loose max-w-4xl mx-auto px-4 font-medium"
          dir="rtl"
        >
          «بىلىم بىلەن ئويغىنىمىز، سۈنئىي ئەقىل بىلەن كەلگۈسىنى قۇرىمىز.»
        </motion.p>

        {/* English Slogan - ئىنگلىزچە شۇئار */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="relative z-10 mt-4 text-sm sm:text-base md:text-lg tracking-wide text-slate-400/80 italic font-sans"
        >
          Knowledge awakens us. AI builds our future.
        </motion.p>

        {/* Decorative Line - زامانىۋى نۇر سىزىقى */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "220px" }}
          transition={{ delay: 1.1, duration: 1 }}
          className="relative z-10 h-[3px] mx-auto mt-8 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_8px_rgba(6,182,212,0.3)]"
        />

        {/* Bottom Glow Text - ئاستى ئۇچۇر تېكىستى */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="relative z-10 mt-6"
        >
          <span className="text-xs sm:text-sm text-slate-500 font-medium tracking-[0.32em] uppercase font-sans">
            Uyghur AI • Digital Future • Innovation
          </span>
        </motion.div>
      </motion.div>

      {/* ========================= 2. PROFESSIONAL HEADER ========================= */}
      <header className="relative overflow-hidden bg-[#0B1120]/60 backdrop-blur-3xl border border-slate-800/60 rounded-[2rem] px-6 lg:px-8 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
        
        {/* Soft Background Glow */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">

          {/* ================= LEFT ================= */}
          <div className="flex items-center gap-4 min-w-0" style={{ direction: 'rtl' }}>

            {/* Professional Logo */}
            <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-slate-950/40 to-emerald-500/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)] group">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 blur-xl"></div>
              {/* Logo Text */}
              <span className="relative text-2xl font-black bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent font-sans">
                K
              </span>
            </div>

            {/* Academy Text */}
            <div className="min-w-0 text-right">
              {/* Top Label */}
              <div className="flex items-center gap-2 flex-wrap justify-start">
                <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-400/70 font-mono font-bold">
                  KELBIL AI ACADEMY
                </span>
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-cyan-500/30"></span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-400/60 font-mono">
                  EDUCATION SYSTEM
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-xl sm:text-2xl font-black text-white mt-1.5 leading-tight truncate tracking-wide">
                كەلبىل ئوقۇتۇش باشقۇرۇش سىستېمىسى
              </h1>

              {/* Slogan */}
              <p className="text-xs sm:text-sm text-slate-400/80 mt-1 font-medium leading-relaxed line-clamp-1">
                «بىلىم بىلەن ئويغىنىمىز، سۈنئىي ئەقىل بىلەن كەلگۈسىنى قۇرىمىز»
              </p>
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto">

            {/* User Card */}
            {user && (
              <div className="flex items-center gap-3 bg-slate-950/40 border border-slate-800/60 rounded-2xl px-4 py-2 shadow-inner" style={{ direction: 'rtl' }}>
                {/* Avatar */}
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-base shadow-md font-sans">
                  <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse" />
                  <span className="relative z-10">{user.name?.charAt(0).toUpperCase()}</span>
                </div>

                {/* User Info */}
                <div className="leading-tight text-right min-w-[90px]">
                  <p className="text-[11px] font-medium text-slate-500">
                    ئوقۇغۇچى
                  </p>
                  <h3 className="text-sm font-black text-slate-100 max-w-[130px] truncate mt-0.5">
                    {user.name}
                  </h3>
                  <span className="inline-flex mt-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/10 text-cyan-400 text-[10px] font-mono font-bold tracking-wide uppercase">
                    {user.role || "Student"}
                  </span>
                </div>
              </div>
            )}

            {/* Logout Button */}
            <button
              onClick={() => {
                setUser(null);
                setOpenAlbum(null);
              }}
              className="group relative overflow-hidden h-[56px] px-6 rounded-2xl bg-rose-500/5 border border-rose-500/10 hover:border-rose-500/25 transition-all flex items-center justify-center cursor-pointer active:scale-95"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/5 transition-all duration-300"></div>
              <span className="relative text-sm font-black text-rose-400 group-hover:text-rose-300 transition-colors whitespace-nowrap tracking-wide">
                چىكىنىش
              </span>
            </button>

          </div>

        </div>
      </header>
  
 

{/* ========================= ADMIN PANEL (باشقۇرغۇچى تاختىسى) ========================= */}
{user.role === "admin" && !openAlbum && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden bg-slate-950/40 backdrop-blur-3xl border border-slate-800/60 rounded-[2.5rem] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] select-none"
  >

    {/* Glow - يۇمشاق نۇر بېزىكى */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

    {/* Header & Main Stats - ئۈستۈنكى ماۋزۇ ۋە ئومۇمىي سانلىق مەلۇماتلار */}
    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6" style={{ direction: 'rtl' }}>

      <div className="text-right">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 font-mono font-bold">
          ADMIN ANALYTICS
        </span>
        <h3 className="text-2xl font-black text-white mt-2 tracking-wide">
          ئوقۇغۇچىلارنىڭ ئۆگىنىش دوكلاتى
        </h3>
      </div>

      {/* Stats - كىچىك تاختايلار */}
      <div className="flex items-center gap-4 flex-wrap justify-start md:justify-end">

        <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl px-5 py-3 shadow-inner text-center min-w-[100px]">
          <p className="text-xs font-medium text-slate-500">ئومۇمىي كۆرۈش</p>
          <h4 className="text-2xl font-black text-cyan-400 mt-1 font-sans">
            {Object.keys(progress).length}
          </h4>
        </div>

        <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl px-5 py-3 shadow-inner text-center min-w-[100px]">
          <p className="text-xs font-medium text-slate-500">تاماملانغان</p>
          <h4 className="text-2xl font-black text-emerald-400 mt-1 font-sans">
            {Object.values(progress).filter((p) => p.completed).length}
          </h4>
        </div>

      </div>

    </div>

    {/* =================== STUDENT INFO BUTTON (شەخسىي ئۇچۇر تاختىسى كۇنۇپكىسى) =================== */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative mt-6"
    >
      {/* Professional Student Info Card Button */}
      <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-500/5 via-emerald-500/5 to-purple-500/5 backdrop-blur-2xl border border-slate-800/60 hover:border-cyan-500/30 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        
        {/* Animated Glow - مائۇس كەلگەندە جىمىرلايدىغان ئارقا نۇر */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 blur-[90px] rounded-full animate-pulse"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Right: Icon + Text (ئۇيغۇرچە ئوڭدىن سولغا) */}
            <div className="flex items-center gap-5 justify-start" style={{ direction: 'rtl' }}>
              {/* Animated Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-emerald-400 flex items-center justify-center shadow-[0_8px_25px_rgba(6,182,212,0.25)] select-none"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/10 blur-md" />
                <svg className="relative w-8 h-8 lg:w-10 lg:h-10 text-slate-950" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.div>

              <div className="text-right">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-mono font-bold tracking-wider uppercase select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  PERSONAL DASHBOARD
                </span>
                <h3 className="text-xl lg:text-2xl font-black text-white mt-2.5 leading-tight tracking-wide">
                  مېنىڭ ئۇچۇرۇم ۋە دەرس ئەھۋالىم
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed max-w-xl font-medium">
                  قاتنىشىش خاتىرىسى، تاپشۇرۇق يۈكلەش، ئوقۇتقۇچى ئىنكاسى ۋە شەخسىي ئىلگىرىلەش دوكلاتىڭىزنى بۇ يەردىن كۆرۈڭ
                </p>
              </div>
            </div>

            {/* Left: Action Button + Stats (سول تەرەپتە قۇلايلىق) */}
            <div className="flex items-center gap-4 justify-between lg:justify-end w-full lg:w-auto border-t border-slate-800/40 lg:border-t-0 pt-4 lg:pt-0">
              {/* Stats Preview */}
              <div className="flex items-center gap-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl px-4 py-2.5 shadow-inner select-none font-sans" style={{ direction: 'rtl' }}>
                <div className="text-center min-w-[55px]">
                  <p className="text-[10px] font-medium text-slate-500">تاماملانغان</p>
                  <p className="text-base font-black text-emerald-400 mt-0.5">
                    {Object.values(progress).filter(p => p.userId === currentUser?.id && p.completed).length}
                  </p>
                </div>
                <div className="w-px h-6 bg-slate-800"></div>
                <div className="text-center min-w-[55px]">
                  <p className="text-[10px] font-medium text-slate-500">ئومۇمىي</p>
                  <p className="text-base font-black text-cyan-400 mt-0.5">
                    {Object.values(progress).filter(p => p.userId === currentUser?.id).length}
                  </p>
                </div>
              </div>

              {/* Main Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={goToStudentInfo}
                className="relative overflow-hidden group/btn px-5 lg:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black text-sm lg:text-base transition-all shadow-[0_5px_20px_rgba(6,182,212,0.2)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  كىرىش ۋە كۆرۈش
                  <svg className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              </motion.button>
            </div>

          </div>
        </div>

        {/* Decorative Corner Lines */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-cyan-500/20 rounded-tl-xl pointer-events-none"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-emerald-500/20 rounded-br-xl pointer-events-none"></div>
      </div>
    </motion.div>

    {/* ========================= 3. DATA TABLE AREA (ئۆگىنىش خاتىرىسى جەدۋىلى) ========================= */}
    {Object.keys(progress).length === 0 ? (
      <div className="text-center py-16 border border-dashed border-slate-800/60 rounded-3xl mt-6">
        <p className="text-slate-500 font-medium text-lg">
          تېخى ئوقۇغۇچىلارنىڭ كۆرۈش خاتىرىسى يوق
        </p>
      </div>
    ) : (
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-right border-separate border-spacing-y-2.5">
          <thead>
            <tr className="text-slate-500 text-xs font-bold tracking-wider select-none">
              <th className="px-5 py-3 text-right">ئوقۇغۇچى</th>
              <th className="px-5 py-3 text-right">دەرس نامى</th>
              <th className="px-5 py-3 text-right">ئىلگىرىلەش پىرسەنتى</th>
              <th className="px-5 py-3 text-center">ھالىتى</th>
              <th className="px-5 py-3 text-left font-sans">LAST WATCHED</th>
            </tr>
          </thead>

          <tbody className="font-medium">
            {Object.values(progress).map((item, idx) => (
              <tr
                key={idx}
                className="bg-slate-950/30 border border-slate-800/40 hover:bg-slate-900/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] transition-all duration-300 group"
              >
                {/* ئوقۇغۇچى ئۇچۇرى */}
                <td className="px-5 py-4 rounded-r-2xl border-y border-r border-slate-800/40 group-hover:border-cyan-500/20 transition-colors">
                  <div className="flex items-center gap-3.5 justify-start" style={{ direction: 'rtl' }}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 font-black font-sans shadow-sm select-none">
                      {item.userName?.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-right">
                      <h4 className="text-sm font-black text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {item.userName}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">
                        Student / User
                      </p>
                    </div>
                  </div>
                </td>

                {/* دەرس نامى */}
                <td className="px-5 py-4 text-sm text-slate-300 max-w-xs truncate border-y border-slate-800/40 group-hover:border-cyan-500/20 transition-colors">
                  {item.videoTitle}
                </td>

                {/* پىرسەنت بالداق */}
                <td className="px-5 py-4 border-y border-slate-800/40 group-hover:border-cyan-500/20 transition-colors">
                  <div className="flex items-center gap-3 justify-start" style={{ direction: 'rtl' }}>
                    <div className="w-28 sm:w-36 h-2 rounded-full bg-slate-950 border border-slate-800 overflow-hidden shadow-inner select-none">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 min-w-[35px] text-left">
                      %{item.percent}
                    </span>
                  </div>
                </td>

                {/* ھالىتى (تاماملاندى / ئۆگىنىۋاتىدۇ) */}
                <td className="px-5 py-4 text-center border-y border-slate-800/40 group-hover:border-cyan-500/20 transition-colors select-none">
                  {item.completed ? (
                    <span className="inline-flex px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shadow-sm whitespace-nowrap">
                      ✓ تاماملاندى
                    </span>
                  ) : (
                    <span className="inline-flex px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold shadow-sm whitespace-nowrap">
                      ئۆگىنىۋاتىدۇ
                    </span>
                  )}
                </td>

                {/* كۆرگەن ۋاقتى */}
                <td className="px-5 py-4 rounded-l-2xl text-xs text-slate-500 font-mono text-left border-y border-l border-slate-800/40 group-hover:border-cyan-500/20 transition-colors">
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

{/* ========================= ALBUMS (كۇرسلار تاختىسى) ========================= */}
{!openAlbum && (
  <div className="space-y-8 select-none">

    {/* Section Title & Header - بۆلەك ماۋزۇسى ۋە ئومۇمىي كۇرس سانى */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap border-b border-slate-900 pb-5" style={{ direction: 'rtl' }}>
      
      <div className="text-right">
        <span className="text-[10px] uppercase tracking-[0.32em] text-cyan-400/80 font-mono font-bold">
          PROFESSIONAL COURSES
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 tracking-wide">
          سىزگە ئېچىۋېتىلگەن ئاكادېمىك كۇرسلار
        </h2>
      </div>

      <div className="bg-slate-950/50 border border-slate-800/60 rounded-2xl px-5 py-3 shadow-inner text-center min-w-[110px]">
        <p className="text-xs font-medium text-slate-500">ئومۇمىي كۇرس</p>
        <h3 className="text-2xl font-black text-cyan-400 mt-0.5 font-sans">
          {allowedAlbums.length}
        </h3>
      </div>

    </div>

    {/* Album Grid - كۇرس كارتىلىرى رېشاتكىسى */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {allowedAlbums.map((album) => (
        <motion.div
          key={album.id}
          whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-[2.2rem] bg-[#0B1120]/40 backdrop-blur-3xl border border-slate-800/60 hover:border-cyan-500/30 transition-all shadow-xl"
        >

          {/* Glowing Aura - مائۇس كەلگەندە كۈچىيىدىغان ئاستى نۇر */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 group-hover:bg-cyan-500/10 blur-[90px] rounded-full transition-all duration-500 pointer-events-none"></div>

          {/* Album Cover Image Area - مۇقاۋا رەسىم رايونى */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2.2rem]">
            <img
              src={
                album.image ||
                "http://localhost:3000/kalbil-website/images/image05.png"
              }
              alt={album.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[800ms] ease-out"
              loading="lazy"
            />

            {/* Cinematic Gradient Overlay - سىپتا رەڭ سايىسى */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-black/25 to-transparent"></div>

            {/* Floating Badges - لەيلىمە بەلگىلەر */}
            {/* Left Box: Video Count */}
            <div className="absolute top-4 left-4 select-none">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-slate-800/50 text-cyan-400 text-[10px] font-mono font-bold tracking-wider shadow-sm">
                {album.lessons?.length || 0} VIDEOS
              </div>
            </div>

            {/* Right Box: Course Category */}
            <div className="absolute bottom-4 right-4 select-none">
              <div className="px-3 py-1 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-400/20 text-cyan-400 text-[10px] font-mono font-bold tracking-widest uppercase">
                AI COURSE
              </div>
            </div>
          </div>

          {/* Album Body Content - كۇرس مەزمۇن رايونى */}
          <div className="relative z-10 p-6 space-y-6">

            {/* Texts - تېكىستلەر (ئۇيغۇرچە ئوڭدىن سولغا) */}
            <div className="text-right space-y-3" style={{ direction: 'rtl' }}>
              <h3 className="text-xl font-black text-slate-100 group-hover:text-cyan-300 transition-colors duration-300 leading-snug line-clamp-1">
                {album.title}
              </h3>
              <p className="text-sm text-slate-400 leading-loose font-medium h-[5.5rem] line-clamp-3">
                {album.desc ||
                  "سۈنئىي ئەقىل، پروگرامما، تېخنىكا ۋە زامانىۋى رەقەملىك بىلىمگە ئائىت ئاكادېمىك دەرس."}
              </p>
            </div>

            {/* Meta Info Footer - ئاپتور ۋە ۋاقىت ئۇچۇرى */}
            <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-medium">
              
              {/* Right Side: Author (ئۇيغۇرچە ئورنى) */}
              <div className="text-right" style={{ direction: 'rtl' }}>
                <p className="text-slate-500 text-[11px]">مۇئەللىم</p>
                <h4 className="text-slate-300 font-black mt-1 tracking-wide">
                  {album.author || "Kelbil Academy"}
                </h4>
              </div>

              {/* Left Side: Date (ئىنگلىزچە/سان ئورنى) */}
              <div className="text-left">
                <p className="text-slate-500 text-[11px] font-mono uppercase">DATE</p>
                <h4 className="text-slate-300 font-mono font-bold mt-1">
                  {album.date || "2026"}
                </h4>
              </div>

            </div>

            {/* Action Button - كۇرس باشلاش كۇنۇپكىسى */}
            <div className="pt-1">
              <button
                onClick={() => handleOpenAlbum(album.id)}
                className="group/btn relative overflow-hidden w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] cursor-pointer active:scale-[0.99]"
              >
                {/* Button Hover Glow */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  كۇرسنى باشلاش
                  <svg className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7" />
                  </svg>
                </span>
              </button>
            </div>

          </div>

        </motion.div>
      ))}
    </div>

  </div>
)}

     {/* ----------------- Professional Video Learning Layout (كەسپىي ۋىدىئو قويۇش سۇپىسى) ----------------- */}
{openAlbum && selectedAlbumData && (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="space-y-6 select-none"
  >

    {/* Top Header - ئۈستۈنكى يول باشلاش ۋە ماۋزۇ تاختىسى */}
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-[#0E1726]/80 to-cyan-950/30 border border-slate-800/80 rounded-[2rem] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-[0_15px_45px_rgba(0,0,0,0.3)]">
      
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none"></div>

      {/* Left Action Button: Return Back */}
      <div className="order-2 sm:order-1 flex-shrink-0">
        <button
          onClick={() => setOpenAlbum(null)}
          className="group relative overflow-hidden px-5 py-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-950 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-all shadow-sm cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-[-3px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            كۇرسلارغا قايتىش
          </span>
        </button>
      </div>

      {/* Right Side: Title & Info */}
      <div className="order-1 sm:order-2 text-right" style={{ direction: 'rtl' }}>
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] text-cyan-400 font-mono font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          KELBIL AI ACADEMY
        </span>
        <h2 className="text-xl font-black text-slate-100 mt-2 tracking-wide">
          {selectedAlbumData.title}
        </h2>
        <p className="text-xs text-slate-400 mt-1 font-medium">
          سۈنئىي ئەقىل ۋە يۇقىرى تېخنىكا بىلىملىرىنى ئۇيغۇر تىلىدا ئۆگىنىش سۇپىسى
        </p>
      </div>

    </div>

    {/* Main Grid Layout */}
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

      {/* ---------------- LEFT BIG PLAYER AREA (ۋىدىئو قويغۇچ رايونى) ---------------- */}
      <div className="xl:col-span-3 space-y-5">

        {currentVideo ? (
          <div className="relative overflow-hidden bg-[#0B1120]/40 backdrop-blur-3xl border border-slate-800/60 rounded-[2.2rem] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

            <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* BIG VIDEO FRAME WITH ANTI-YOUTUBE MASK (يۇتۇب ئۇچۇرلىرىنى توسۇش تاختىسى قوشۇلدى) */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-900 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.65)] group">
              
              {/* تاشقى قاپارتما تاختا: ئابونتلارنىڭ ۋىدىيونى چىكىپ يۇتۇبقا ئۆتۈپ كېتىشىنى تامامەن چەكلەيدۇ */}
              <div className="absolute inset-0 z-20 pointer-events-none border border-white/5 rounded-2xl" />
              
              {/* ئاستى قىسىمدىكى يۇتۇب بەلگىسىنى تۇتۇپ تۇرىدىغان قارا سايە بېزەكلىك توساق */}
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

              {currentVideo.youtube ? (
                <iframe
                  src={`${
                    currentVideo.youtube.includes('watch?v=')
                      ? currentVideo.youtube.replace('watch?v=', 'embed/')
                      : currentVideo.youtube.includes('youtu.be/')
                      ? currentVideo.youtube.replace('youtu.be/', 'youtube.com/embed/')
                      : currentVideo.youtube
                  }?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=1&vq=hd1080&disablekb=1`}
                  title={currentVideo.title}
                  className="relative z-0 w-full h-full border-0 scale-[1.01] origin-center"
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

            {/* Bottom Info Section */}
            <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">

              {/* Lesson Title & Number */}
              <div className="text-right order-1 lg:order-2" style={{ direction: 'rtl' }}>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono font-bold tracking-wider">
                  LESSON {(currentIndex + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-100 mt-3 leading-relaxed tracking-wide">
                  {currentVideo.title}
                </h3>
              </div>

              {/* Autoplay Toggle Switcher */}
              <div className="flex items-center gap-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl px-4 py-3 shadow-inner self-start lg:self-center order-2 lg:order-1 select-none">
                <span className="text-xs font-bold text-slate-400">
                  ئاپتوماتىك كېيىنكى دەرس
                </span>
                <button
                  onClick={() => setAutoplay(!autoplay)}
                  className={`relative px-4 py-1.5 rounded-xl text-xs font-black transition-all duration-300 cursor-pointer ${
                    autoplay
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      : "bg-slate-800 text-slate-500 border border-slate-700/50"
                  }`}
                >
                  {autoplay ? "ئوچۇق" : "تاقاق"}
                </button>
              </div>

            </div>

          </div>
        ) : (
          <div className="bg-[#0B1120]/40 border border-dashed border-slate-800/80 rounded-[2rem] py-24 text-center select-none shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center mx-auto mb-4 border border-slate-800">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 font-medium text-base">
              نۆۋەتتە قويىدىغان ۋىدىئو تېپىلمىدى
            </p>
          </div>
        )}

      </div>

   
   {/* ---------------- RIGHT SMALL VIDEO CARDS (ئوڭ تەرەپ دەرسلىك تىزىملىك تاختىسى) ---------------- */}
<div className="space-y-4 xl:max-h-[780px] overflow-y-auto pl-1 pr-1 custom-scrollbar select-none">

  {/* Header Title - تىزىملىك ماۋزۇسى (ئۇيغۇرچە ئوڭغا توغرىلانغان) */}
  <div className="flex items-center justify-between border-b border-slate-900 pb-3" style={{ direction: 'rtl' }}>
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
      <h3 className="text-sm font-black text-slate-200 tracking-wide">
        كۇرس مۇندەرىجىسى
      </h3>
    </div>
    <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-950/80 border border-slate-800/60 px-2.5 py-1 rounded-lg">
      {selectedAlbumData.lessons?.length || 0} VIDEOS
    </span>
  </div>

  {/* Video List Loop - دەرسلەر ئايلانمىسى */}
  <div className="space-y-3">
    {selectedAlbumData.lessons?.map((lesson, idx) => {

      const isPlaying = currentIndex === idx;
      const videoKey = `${user.id}_${openAlbum}_${idx}`;
      const isCompleted = progress[videoKey]?.completed;
      const currentPercent = progress[videoKey]?.percent || 0;

      return (
        <motion.div
          key={idx}
          whileHover={{ x: -3, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.99 }}
          onClick={() => {
            setCurrentVideo(lesson);
            setCurrentIndex(idx);
          }}
          className={`group relative flex items-center gap-3.5 p-2.5 rounded-2xl border cursor-pointer transition-all duration-300 ${
            isPlaying
              ? "border-cyan-500/40 bg-cyan-500/[0.06] shadow-[0_4px_20px_rgba(6,182,212,0.1)]"
              : isCompleted
              ? "border-emerald-500/20 bg-emerald-500/[0.02] hover:border-emerald-500/30"
              : "border-slate-800/80 bg-slate-900/20 hover:border-slate-700/60 hover:bg-slate-900/40"
          }`}
          style={{ direction: 'rtl' }}
        >

          {/* 1. Thumbnail Area - كىچىك مۇقاۋا رەسىم رايونى (ئوڭ تەرەپتە) */}
          <div className="relative w-28 sm:w-32 aspect-[16/10] overflow-hidden rounded-xl bg-slate-950 flex-shrink-0 border border-slate-900">
            <img
              src={
                lesson.thumbnail ||
                "http://localhost:3000/kalbil-website/images/image05.png"
              }
              alt={lesson.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Cinematic Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Play Button Icon Overlay - ئوتتۇرىدىكى قويۇش بەلگىسى */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border shadow-md transition-transform duration-300 group-hover:scale-110 ${
                isPlaying
                  ? "bg-cyan-500/20 border-cyan-400"
                  : "bg-black/40 border-white/10"
              }`}>
                {isPlaying ? (
                  /* Playing Equalizer Animation Effect */
                  <div className="flex items-end gap-0.5 h-3 w-3 justify-center mb-0.5">
                    <div className="w-0.5 bg-cyan-400 animate-[bounce_1s_infinite_100ms]" />
                    <div className="w-0.5 bg-cyan-400 animate-[bounce_1s_infinite_300ms] h-full" />
                    <div className="w-0.5 bg-cyan-400 animate-[bounce_1s_infinite_200ms]" />
                  </div>
                ) : (
                  <svg className={`w-3 h-3 ${isPlaying ? "text-cyan-400" : "text-white"} fill-current ml-0.5`} viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>

            {/* Floating Progress/Status Badge - سىن ئۈستىدىكى ھالەت بەلگىسى (سول تەرەپ ئۈستىدە) */}
            <div className="absolute top-1.5 left-1.5 z-10 font-sans">
              {isPlaying ? (
                <span className="px-1.5 py-0.5 rounded-md bg-cyan-400 text-slate-950 text-[9px] font-black tracking-wider shadow-sm animate-pulse">
                  PLAY
                </span>
              ) : isCompleted ? (
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-sm">
                  ✓
                </span>
              ) : currentPercent > 0 ? (
                <span className="px-1.5 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-sm border border-slate-800 text-slate-300 text-[9px] font-medium">
                  {currentPercent}%
                </span>
              ) : null}
            </div>
          </div>

          {/* 2. Content Area - دەرس ماۋزۇسى ۋە ئۇچۇرى (سول تەرەپتە) */}
          <div className="flex-1 min-w-0 text-right space-y-1.5">
            
            {/* Lesson Index Code */}
            <span className={`block text-[10px] font-mono font-bold tracking-widest uppercase ${
              isPlaying
                ? "text-cyan-400"
                : isCompleted
                ? "text-emerald-400/90"
                : "text-slate-500"
            }`}>
              LESSON {(idx + 1).toString().padStart(2, "0")}
            </span>

            {/* Lesson Main Title */}
            <h4 className={`text-xs font-bold leading-relaxed line-clamp-2 transition-colors duration-300 ${
              isPlaying
                ? "text-cyan-300 font-black"
                : "text-slate-200 group-hover:text-white"
            }`}>
              {lesson.title}
            </h4>

            {/* Micro Progress Bar - ئەگەر دەرس قىسمەن كۆرۈلگەن بولسا ئاستىدا سىزىق چىقىدۇ */}
            {currentPercent > 0 && !isCompleted && (
              <div className="w-20 h-[3px] bg-slate-800 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-cyan-400/70 rounded-full" 
                  style={{ width: `${currentPercent}%` }}
                />
              </div>
            )}
            
          </div>

        </motion.div>
      );
    })}
  </div>

</div>

   </div>

  </motion.div>
)}

        

      </div>
   
  );
}