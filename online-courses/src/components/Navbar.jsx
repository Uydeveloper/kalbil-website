import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import topics from "../data/topics.json";

import LoginModal from "./LoginModal";
import UserMenu from "./UserMenu";
import UserListModal from "./UserListModal";
import PostsModal from "./PostsModal";
import UyghurLearningApp from "./UyghurAI";

import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { darkMode, toggleTheme } = useTheme();
  const { user } = useContext(UserContext); // Context تىن ئابونت ئۇچۇرى ئېلىندى

  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [showPostsModal, setShowPostsModal] = useState(false);
  const [showUyghurLearningApp, setShowUyghurLearningApp] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const phrases = lang === "ug"
    ? [
        "بىلىم بىلەن قانىتىڭىزنى ئېچىڭ، بىللە باشلاڭ — KelBiL 🌟",
        "ئۆگىنىشچىلەرگە كۈچ، جەمئىيەتكە نۇر — KelBiL 📚",
        "ئۇيغۇر تىلىدا، تېخىمۇ كۈچلۈك روھ بىلەن بىلىمگە يول — KelBiL 💡",
        "كەلگۈسىڭىز ئۈچۈن بۈگۈن باشلاڭ 🚀",
        "بىزنى قوللىشىڭىزنى ئۈمىد قىلىمىز — بىرلىكتە بىلىم تېخىمۇ كۈچلۈك! 🌱"
      ]
    : [
        "Open your wings with knowledge — start with KelBiL! 🌟",
        "KelBiL — Empowering learners, inspiring communities. 📚",
        "KelBiL — Knowledge in Uyghur, pride in spirit. 💡",
        "KelBiL — Begin today, build tomorrow! 🚀",
        "We hope for your support — together, knowledge becomes stronger! 🌱"
      ];

  const [phraseIndex, setPhraseIndex] = useState(0);

  // شۇئارلارنىڭ ئاپتوماتىك ئالمىشىشى
  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [phrases]);

  // ئېكران سۆرىلىشىنى نازارەت قىلىش
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const match = topics.find((t) => {
      const title = t.title || "";
      const instructor = t.instructor || "";
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        instructor.toLowerCase().includes(query.toLowerCase())
      );
    });

    if (match) {
      navigate(`/topics/${match.id}`);
      setShowSearch(false);
      setQuery("");
    } else {
      alert(lang === "ug" ? "😕 ھېچقانداق ماس كەلگەن دەرس تېپىلمىدى." : "😕 No matching courses found.");
    }
  };

  const isActive = (path) => location.pathname === path;

  // 🌟 [قوشۇمچە تۈزىتىش]: ئىسىمنىڭ باش ھەرپىنى ئېلىش فۇنكسىيەسى
  const getAvatarLetter = () => {
    if (!user) return "U";
    if (user.name) return user.name.trim().charAt(0).toUpperCase();
    if (user.id) return user.id.trim().charAt(0).toUpperCase();
    return "U";
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? "py-3 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/60 dark:border-slate-800/60" 
            : "py-5 bg-slate-50 dark:bg-slate-950 border-b border-transparent"
        } ${darkMode ? "text-slate-100" : "text-slate-800"}`}
      >
        {/* 🌟 ئۈستىدىكى ئايلانما شۇئار قۇرۇلمىسى */}
        <div className="w-full text-center pb-2 px-4 select-none">
          <div className="font-uyghur text-sm sm:text-base md:text-lg lg:text-xl font-medium text-indigo-600 dark:text-yellow-400 drop-shadow-sm transition-all duration-500 min-h-[24px]">
            {phrases[phraseIndex]}
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8" dir={lang === "ug" ? "rtl" : "ltr"}>
          
          {/* 1. لوگو قىسمى */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-95 transition-all transform hover:scale-[1.02]">
            <img
              src={`${process.env.PUBLIC_URL}/images/image005.png`}
              alt="KelBiL Logo"
              className={`transition-all duration-300 object-contain filter dark:brightness-110 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] ${
                scrolled ? "h-11 md:h-14" : "h-14 md:h-18"
              }`}
            />
          </Link>

          {/* 2. كومپيۇتېر نۇسخىسىدىكى ئاساسىي مۇندەرىجە */}
          <div className="font-uyghur hidden lg:flex items-center gap-5 xl:gap-7 text-xl xl:text-2xl 2xl:text-3xl font-medium tracking-wide">
            <Link to="/" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
              {t.home[lang]}
            </Link>
            <Link to="/UyghurAI" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/UyghurAI") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
              {t.UyghurAI?.[lang] || (lang === "ug" ? "AI قۇتادغۇ" : "QutadghuAI")}
            </Link>
            <Link to="/MyBlog" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/MyBlog") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
              {t.MyBlog?.[lang] || (lang === "ug" ? "تورخاتىرەم" : "My Blog")}
            </Link>
            <Link to="/posts" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/posts") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
              {t.posts?.[lang] || (lang === "ug" ? "يازمىلار" : "Posts")}
            </Link>
            <Link to="/courses" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/courses") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
              {t.courses[lang]}
            </Link>
            <Link to="/about" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/about") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
              {t.about[lang]}
            </Link>
            <Link to="/contact" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/contact") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
              {t.contact[lang]}
            </Link>

            {user && (user.role === "admin" || user.role === "student") && (
              <Link to="/studentsinfo" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/studentsinfo") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
                {t.student[lang]}
              </Link>
            )}
            {user && (user.role === "admin" || user.role === "student") && (
              <Link to="/my-courses" className={`pb-1 border-b-2 transition-all duration-200 ${isActive("/my-courses") ? "text-blue-600 border-blue-600 font-bold" : "text-slate-600 dark:text-slate-300 border-transparent hover:text-blue-500"}`}>
                {t.mycourses[lang]}
              </Link>
            )}
          </div>

          {/* 3. ئوڭ تەرەپتىكى قوراللار */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* تىل ئالماشتۇرۇش كۇنۇپكىسى */}
            <div className="font-uyghur flex items-center bg-slate-200/70 dark:bg-slate-800 px-2 py-1 rounded-md text-sm sm:text-base border border-slate-300/50 dark:border-slate-700">
              <button onClick={() => setLang("ug")} className={`px-2 py-0.5 rounded transition-all ${lang === "ug" ? "bg-blue-600 text-white font-bold" : "text-slate-500 hover:text-blue-500"}`}>ئۇيغۇرچە</button>
              <button onClick={() => setLang("en")} className={`px-2 py-0.5 rounded font-sans transition-all ${lang === "en" ? "bg-blue-600 text-white font-bold" : "text-slate-500 hover:text-blue-500"}`}>EN</button>
            </div>

            {/* ئىزدەش كۇنۇپكىسى */}
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="p-2 text-xl hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Search"
            >
              🔍
            </button>

            {/* كېچە-كۈندۈز تېما كۇنۇپكىسى */}
            <button
              onClick={toggleTheme}
              className="p-2 text-xl hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Toggle Theme"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* 🌟 [تۈزىتىلدى] ئابونت كىرىش / ئابونت مېنيۇسى قىسمى زامانىۋىلاشتۇرۇلدى */}
            <div className="relative z-50">
              {!user ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="font-uyghur text-base sm:text-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  🔐 Login
                </button>
              ) : (
                /* سىرىلمىنى مېنيۇنىڭ يۆنىلىش خاتا بولۇپ كېسىلىپ قالماسلىقى ئۈچۈن lang نى ئەۋەتتۇق */
                <UserMenu 
                  currentUser={user} 
                  currentLang={lang}
                  avatarLetter={getAvatarLetter()} 
                  onOpenUserList={() => setShowUserList(true)} 
                  onOpenPostsModal={() => setShowPostsModal(true)} 
                />
              )}
            </div>

            {/* كۆچمە تېلېفون ھامبۇرگ تۈگمىسى */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-2xl hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {menuOpen ? "✖️" : "☰"}
            </button>
          </div>
        </div>

        {/* 🔍 ئىزدەش رامكىسى (Dropdown) */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 top-full bg-slate-50 dark:bg-slate-900 shadow-xl border-b border-slate-200 dark:border-slate-800 p-4 z-40"
            >
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-2" dir={lang === "ug" ? "rtl" : "ltr"}>
                <input
                  type="text"
                  placeholder={lang === "ug" ? "دەرس ياكى ئوقۇتقۇچىنى ئىزدەڭ..." : "Search courses or instructors..."}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-2.5 font-uyghur text-lg border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="font-uyghur px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors cursor-pointer text-lg"
                >
                  {lang === "ug" ? "ئىزدەش" : "Search"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 📱 كۆچمە تېلېفون تىزىملىكى (Side Drawer) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: lang === "ug" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: lang === "ug" ? "100%" : "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed top-0 bottom-0 z-50 w-72 max-w-xs bg-slate-50 dark:bg-slate-950 p-6 shadow-2xl overflow-y-auto flex flex-col ${
                lang === "ug" ? "right-0 text-right" : "left-0 text-left"
              }`}
              dir={lang === "ug" ? "rtl" : "ltr"}
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-uyghur text-2xl font-bold text-blue-600 dark:text-blue-400">KelBiL مۇندەرىجە</h3>
                <button onClick={() => setMenuOpen(false)} className="text-xl p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">✖️</button>
              </div>

              <div className="font-uyghur flex flex-col gap-4 py-6 text-2xl">
                <Link to="/" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.home[lang]}</Link>
                <Link to="/UyghurAI" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/UyghurAI") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.UyghurAI?.[lang] || (lang === "ug" ? "AI قۇتادغۇ" : "QutadghuAI")}</Link>
                <Link to="/MyBlog" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/MyBlog") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.MyBlog?.[lang] || (lang === "ug" ? "تورخاتىرەم" : "My Blog")}</Link>
                <Link to="/posts" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/posts") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.posts?.[lang] || (lang === "ug" ? "يازمىلار" : "Posts")}</Link>
                <Link to="/courses" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/courses") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.courses[lang]}</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/about") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.about[lang]}</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/contact") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.contact[lang]}</Link>

                {user && (user.role === "admin" || user.role === "student") && (
                  <Link to="/studentsinfo" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/studentsinfo") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.student[lang]}</Link>
                )}
                {user && (user.role === "admin" || user.role === "student") && (
                  <Link to="/my-courses" onClick={() => setMenuOpen(false)} className={`py-2 px-3 rounded-lg ${isActive("/my-courses") ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-bold" : "hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"}`}>{t.mycourses[lang]}</Link>
                )}
                
                <hr className="border-slate-200 dark:border-slate-800 my-2" />
                <button onClick={() => { setShowUyghurLearningApp(true); setMenuOpen(false); }} className="text-right py-2 px-3 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-2xl">
                  {lang === "ug" ? "📚 ئۆگىنىش سۇپىسى" : "📚 Learning App"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🧩 موداللار قىسمى */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl w-full max-w-md relative">
            <LoginModal onClose={() => setShowLogin(false)} onSuccess={() => setShowLogin(false)} />
          </div>
        </div>
      )}

      {showPostsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <PostsModal onClose={() => setShowPostsModal(false)} onSuccess={() => setShowPostsModal(false)} />
        </div>
      )}

      {showUyghurLearningApp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <UyghurLearningApp onClose={() => setShowUyghurLearningApp(false)} />
          </div>
        </div>
      )}

      {showUserList && <UserListModal onClose={() => setShowUserList(false)} />}
    </>
  );
}