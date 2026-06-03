import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import ProfileModal from "./ProfileModal";
import { motion, AnimatePresence } from "framer-motion"; // 🌟 زامانىۋى ئېففېكت ئۈچۈن

export default function UserMenu({ currentLang = "ug", onOpenUserList, onOpenPostsModal }) {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // 🖱️ مېنيۇدىن سىرتنى چەككەندە مېنيۇ ئاپتوماتىك يېپىلىش لوگىكىسى
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  // 🌟 ئابونت ئىسمى ياكى ID نىڭ باش ھەرپىنى ئېلىش (خاتالىقتىن ساقلىنىش كۈچەيتىلدى)
  const getInitial = () => {
    const nameSource = user.name || user.username || user.id || "U";
    return nameSource.trim().charAt(0).toUpperCase();
  };

  // LocalStorage تىن ئابونتنىڭ ئەينەك رەسىمىنى (Avatar) ئوقۇش
  const getAvatar = () => {
    try {
      const localUsers = localStorage.getItem("users");
      if (localUsers) {
        const parsed = JSON.parse(localUsers);
        const found = parsed.find((u) => u.username === user.username || u.id === user.id);
        if (found?.avatar) return found.avatar;
      }
    } catch (e) {
      console.error("Avatar ئوقۇشتا خاتالىق:", e);
    }
    return null;
  };

  const avatar = getAvatar();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("user-avatar");
    setOpen(false);
    navigate("/");
  };

  const isRtl = currentLang === "ug";

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* 🔘 ئابونت باش ھەرپى ياكى رەسىمى تۈگمىسى */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 hover:ring-4 ring-blue-500/30 transition-all duration-300 shadow-sm transform active:scale-95 cursor-pointer font-sans text-lg uppercase"
        title={user.name || "ئابونت مېنيۇسى"}
      >
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="drop-shadow-sm">{getInitial()}</span>
        )}
      </button>

      {/* 🌟 سىرىلمىنىڭ سىلىق ئېچىلىش ئېففېكتى (AnimatePresence) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            dir={isRtl ? "rtl" : "ltr"}
            /* 🔗 [مۇھىم تۈزىتىش]: ئۇيغۇرچىدا left-0 قىلىپ سول تەرەپكە ئېسىپ قويىدۇ، ئوڭغا قاراپ ئېچىلىپ كېسىلمەيدۇ */
            className={`absolute mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/40 z-50 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 ${
              isRtl ? "left-0" : "right-0"
            }`}
          >
            {/* ئابونتنىڭ قىسقىچە ئۇچۇرى قۇرۇلمىسى */}
            <div className={`px-4 py-3 bg-slate-50/50 dark:bg-slate-900/50 ${isRtl ? "text-right" : "text-left"}`}>
              <p className="font-uyghur text-base font-bold text-slate-800 dark:text-slate-100 truncate">
                {user.name || user.username}
              </p>
              <p className="font-sans text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5">
                {user.email || user.id || "ID: " + user.role}
              </p>
            </div>

            {/* مېنيۇ تاللانمىلىرى */}
            <div className="py-1">
              {/* باشقۇرغۇچى ھوقۇقى بولسا كۆرۈنىدىغان قىسىم */}
              {user.role === "admin" && (
                <>
                  <button
                    onClick={() => {
                      navigate("/view-registration");
                      setOpen(false);
                    }}
                    className={`font-uyghur w-full text-base px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-2 ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    <span>🧑‍💼</span> <span className="flex-1">باشقۇرغۇچى سۇپىسى</span>
                  </button>

                  <button
                    onClick={() => {
                      navigate("/studentinfosys");
                      setOpen(false);
                    }}
                    className={`font-uyghur w-full text-base px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-2 ${
                      isRtl ? "text-right" : "text-left"
                    }`}
                  >
                    <span>🧑‍🎓</span> <span className="flex-1">ئوقۇغۇچىلارنى باشقۇرۇش</span>
                  </button>
                </>
              )}

              {/* 🧩 تاشقى موداللارنى قوزغىتىش كۇنۇپكىلىرى (سول سىيرىلما كۆرۈنۈشتىكى تەلەپكە ئاساسەن) */}
              {onOpenUserList && (
                <button
                  onClick={() => {
                    onOpenUserList();
                    setOpen(false);
                  }}
                  className={`font-uyghur w-full text-base px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-2 ${
                    isRtl ? "text-right" : "text-left"
                    }`}
                >
                  <span>👥</span> <span className="flex-1">ئەزالار تىزىملىكى</span>
                </button>
              )}

              {onOpenPostsModal && (
                <button
                  onClick={() => {
                    onOpenPostsModal();
                    setOpen(false);
                  }}
                  className={`font-uyghur w-full text-base px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-2 ${
                    isRtl ? "text-right" : "text-left"
                    }`}
                >
                  <span>📝</span> <span className="flex-1">يازما قوشۇش</span>
                </button>
              )}

              {/* پىروفايىل كۇنۇپكىسى */}
              <button
                onClick={() => {
                  setShowProfile(true);
                  setOpen(false);
                }}
                className={`font-uyghur w-full text-base px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex items-center gap-2 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                <span>👤</span> <span className="flex-1">شەخسىي پىروفايىل</span>
              </button>
            </div>

            {/* سىستېمىدىن چىكىنىش */}
            <div className="py-1">
              <button
                onClick={handleLogout}
                className={`font-uyghur w-full text-base px-4 py-2.5 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors flex items-center gap-2 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                <span>🚪</span> <span className="flex-1">ھېساباتتىن چىقىش</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Modal قىسمى */}
      {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
    </div>
  );
}