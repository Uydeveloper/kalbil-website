import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { UserContext, useAuth } from "../context/UserContext";
import topics from "../data/topics.json";

import LoginModal from "./LoginModal";
import UserMenu from "./UserMenu";
import UserListModal from "./UserListModal";
import PostsModal from "./PostsModal";
import UyghurLearningApp from "./UyghurAI";

import { motion, useAnimation } from "framer-motion";

import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { darkMode, toggleTheme } = useTheme();
  const { user } = useContext(UserContext);

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
  const controls = useAnimation();

  const phrases = lang === "ug"
    ? [
        "بىلىم بىلەن قانىتىڭىزنى ئېچىڭ،  بىللە باشلاڭ — KelBiL",
        "ئۆگىنىشچىلەرگە كۈچ، جەمئىيەتكە نۇر — KelBiL  ",
        "ئۇيغۇر تىلىدا، تېخمۇ كۈچلۈك روھ بىلەن بىلىمگە يول  — KelBiL",
        " كەلگۈسىڭىز  ئۈچۈن بۈگۈن باشلاڭ",
        "بىزنى قوللىشىڭىزنى ئۈمىد قىلىمىز — بىرىكتە بىلىم تېخىمۇ كۈچلۈك، يوقالماس بولايلى"
      ]
    : [
        "Open your wings with knowledge — start with KelBiL!",
        "KelBiL — Empowering learners, inspiring communities.",
        "KelBiL — Knowledge in Uyghur, pride in spirit.",
        "KelBiL — Begin today, build tomorrow!",
        "We hope for your support — together, knowledge becomes stronger and everlasting!"
      ];

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [phrases]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      controls.start({
        height: isScrolled ? 56 : 72,
        boxShadow: isScrolled
          ? "0 2px 10px rgba(0,0,0,0.2)"
          : "0 1px 4px rgba(0,0,0,0.1)",
        backdropFilter: isScrolled ? "blur(6px)" : "blur(0px)",
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleSearch = (e) => {
    e.preventDefault();
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
    } else {
      alert("😕 ھېچقانداق ماس كەلگەن دەرس تېپىلمىدى.");
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      animate={controls}
      initial={{
        height: 72,
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        backdropFilter: "blur(0px)",
      }}
      className={`sticky relative top-0 z-50 py-20 px-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white-300 text-gray-800"
      }`}
    >
      {/* ✅ Frases Uyghur / English */}
      <h1 className="font-uyghur absolute w-full top-3 left-1/2 transform -translate-x-1/2 text-center 
text-xl md:text-3xl font-bold dark:text-yellow-400 text-blue-600 drop-shadow-lg transition-opacity duration-500 ease-in-out">
        {phrases[phraseIndex]}
      </h1>

      {/* Login Modal */}
      {showLogin && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setShowLogin(false)}
          />
          <div className="fixed top-1/2 mt-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <LoginModal
              onClose={() => setShowLogin(false)}
              onSuccess={() =>{ 
                setShowLogin(false);
                console.log("Logged in!");
              }}
            />
          </div>
        </>
      )}

      {/* Posts Modal */}
      {showPostsModal && (
        <PostsModal 
          onClose={() => setShowPostsModal(false)}
          onSuccess={(newPost) => {
            setShowPostsModal(false);
            console.log("New post created:", newPost);
          }}
        />
      )}

      {/* Uyghur Learning App Modal */}
      {showUyghurLearningApp && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setShowUyghurLearningApp(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <UyghurLearningApp onClose={() => setShowUyghurLearningApp(false)} />
          </div>
        </>
      )}

      {/* User List Modal */}
      {showUserList && <UserListModal onClose={() => setShowUserList(false)} />}

      <div className="max-w-screen8xl mx-auto flex flex-wrap items-center justify-between py-0 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex mb-0 items-center gap-3 hover:opacity-90">
          <img
            src={`${process.env.PUBLIC_URL}/images/image005.png`}
            alt="KelBiL Logo"
            className="h-12 md:h-20 w-8 sm:h-23 md:h-38 w-auto object-contain drop-shadow-md"
          />
          <span
            className={`font-extrabold tracking-wide transition-all duration-300 ${
              scrolled ? "text-xl sm:text-2xl md:text-4xl" : "text-lg sm:text-xl md:text-2xl"
            } text-blue-600 dark:text-blue-400 drop-shadow`}
          >
            
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700 dark:text-white"
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <div className="font-uyghur hidden md:flex text-3xl space-x-7 ">
          <Link to="/" className={isActive("/") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.home[lang]}
          </Link>
          
          {/* KeLBiLAI مۇندەرىجىسى */}
          <Link to="/UyghurAI" className={isActive("/UyghurAI") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.UyghurAI?.[lang] || (lang === "ug" ? " AI قۇتئادغۇ" : "QutadghuAI")}
          </Link>
          
          {/* My Blog مۇندەرىجىسى */}
          <Link to="/MyBlog" className={isActive("/MyBlog") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.MyBlog?.[lang] || (lang === "ug" ? " تورخاتىرەم": "My Blog")}
          </Link>
          
          {/* Posts مۇندەرىجىسى */}
          <Link to="/posts" className={isActive("/posts") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.posts?.[lang] || (lang === "ug" ? "يازمىلار" : "Posts")}
          </Link>
          
          <Link to="/courses" className={isActive("/courses") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.courses[lang]}
          </Link>
          <Link to="/about" className={isActive("/about") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.about[lang]}
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.contact[lang]}
          </Link>

          {user && (user.role === "admin" || user.role === "student") && (
            <Link
              to="/studntsinfo"
              className={
                isActive("/students") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
              }
            >
              {t.student[lang]}
            </Link>
          )}

          {user && (user.role === "admin" || user.role === "student") && (
            <Link
              to="/my-courses"
              className={
                isActive("/my-courses") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
              }
            >
              {t.mycourses[lang]}
            </Link>
          )}
        </div>

        {/* Language Switcher */}
        <div className="font-uyghur text-3xl flex gap-2 ">
          <button onClick={() => setLang("ug")} className={lang === "ug" ? "text-blue-600 font-bold underline" : ""}>ئۇيغۇرچە</button>
          <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold underline" : ""}>English</button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="font-uyghur text-xl px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            🔍
          </button>

          <button
            onClick={toggleTheme}
            className="text-2xl px-3 py-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            title="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div className="relative flex flex-col items-end">
            {!user ? (
              <button
                onClick={() => setShowLogin(true)}
                className="font-uyghur text-3xl bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
              >
                🔐 Login
              </button>
            ) : (
              <UserMenu />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded shadow animate-slide-down">
          <Link to="/" className="block px-4 py-2 border-b hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
          
          <Link to="/UyghurAI" className="block px-4 py-2 border-b hover:bg-gray-100 dark:hover:bg-gray-700">
            {lang === "ug" ? "AI قۇتئادغۇ" : "QutadguAI"}
          </Link>
          
          <Link to="/MyBlog" className="block px-4 py-2 border-b hover:bg-gray-100 dark:hover:bg-gray-700">
            {lang === "ug" ? "تورخاتىرەم " : "My Blog"}
          </Link>
          
          <Link to="/posts" className="block px-4 py-2 border-b hover:bg-gray-100 dark:hover:bg-gray-700">
            {lang === "ug" ? "يازمىلار" : "Posts"}
          </Link>
          
          <Link to="/courses" className="block px-4 py-2 border-b hover:bg-gray-100 dark:hover:bg-gray-700">Courses</Link>
          <Link to="/about" className="block px-4 py-2 border-b hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
        </div>
      )}

      {/* Search Box */}
      {showSearch && (
        <form
          onSubmit={handleSearch}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 p-4 rounded shadow w-full max-w-md transition-all duration-300"
        >
          <input
            type="text"
            placeholder="دەرس ياكى ئوقۇتقۇچىنى ئىزدەڭ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            🔎 Search
          </button>
        </form>
      )}
    </motion.nav>
  );
}