import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import topics from "../data/topics.json";

import LoginModal from "./LoginModal";
import UserMenu from "./UserMenu";
import UserListModal from "./UserListModal";

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
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const controls = useAnimation();

  // ✅ ئالدىدا phrases نى ئېلان قىلىمىز
  const phrases = lang === "ug"
    ? [
        "بىلىم بىلەن قانىتىڭىزنى ئېچىڭ،  بىللە باشلاڭ — KalBiL",
        "ئۆگىنىشچىلەرگە كۈچ، جەمئىيەتكە نۇر — KalBiL  ",
        "ئۇيغۇر تىلىدا، تېخمۇ كۈچلۈك روھ بىلەن بىلىمگە يول  — KalBiL",
        " كەلگۈسىڭىز  ئۈچۈن بۈگۈن باشلاڭ",
        "بىزنى قوللىشىڭىزنى ئۈمىد قىلىمىز — بىرىكتە بىلىم تېخىمۇ كۈچلۈك، يوقالماس بولايلى!"
      ]
    : [
        "Open your wings with knowledge — start with KalBiL!",
        "KalBiL — Empowering learners, inspiring communities.",
        "KalBiL — Knowledge in Uyghur, pride in spirit.",
        "KalBiL — Begin today, build tomorrow!",
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

  // ✅ ئىزدەش
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
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* ✅ Frases Uyghur / English */}
      <h1 className="absolute w-full top-3 left-1/2 transform -translate-x-1/2 text-center 
text-xl md:text-3xl font-bold  dark:text-yellow-400 text-blue-600 drop-shadow-lg transition-opacity duration-500 ease-in-out">
  {phrases[phraseIndex]}
</h1>

      {/* Login Modal */}
      {showLogin && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setShowLogin(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <LoginModal
              onClose={() => setShowLogin(false)}
              onSuccess={() => setShowLogin(false)}
            />
          </div>
        </>
      )}

      {/* User List Modal */}
      {showUserList && <UserListModal onClose={() => setShowUserList(false)} />}

      <div className="max-w-8xl mx-auto flex items-center justify-between py-0 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex mb-0 items-center gap-3 hover:opacity-90">
  <img
    src={`${process.env.PUBLIC_URL}/images/image05.png`}
    alt="KalBiL Logo"
    className="h-14 md:h-16 w-auto object-contain drop-shadow-md"
  />
  <span
    className={`font-extrabold tracking-wide transition-all duration-300 ${
      scrolled ? "text-3xl" : "text-4xl"
    } text-blue-600 dark:text-blue-400 drop-shadow`}
  >
    KalBiL
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
        <div className="hidden md:flex text-xl space-x-7 font-medium">
          <Link to="/" className={isActive("/") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"}>
            {t.home[lang]}
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

          {user && (
            <Link
              to="/students"
              className={
                isActive("/students") ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
              }
            >
             {t.student[lang]}
            </Link>
          )}


          {user && (
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
        <div className="flex gap-2 text-xl">
          <button onClick={() => setLang("ug")} className={lang === "ug" ? "text-blue-600 font-bold underline" : ""}>ئۇيغۇرچە</button>
          <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold underline" : ""}>English</button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
                className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
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
