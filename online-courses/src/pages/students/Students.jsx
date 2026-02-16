import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ئوقۇغۇچى ئۇچۇرلىرىنى JSON فايلىدىن ئوقۇش
import studentsData from "../../data/students.json";

export default function Students({ onClose }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [language, setLanguage] = useState("uyghur"); // 'uyghur' or 'english'
  const navigate = useNavigate();

  // Translations - تەرجىمىلەر
  const translations = {
    uyghur: {
      title: "KeLBiL ئوقۇغۇچى مەركىزى",
      subtitle: "ئەقلىي ئىقتىدار ۋە كۋانتۇم تېخنىكىسى دۇنياسىغا خۇش كەپسىز",
      studentId: "ئوقۇغۇچى نومۇرى",
      studentIdPlaceholder: "ئوقۇغۇچى ID نومۇرىڭىزنى كىرگۈزۈڭ...",
      password: "مەخپى نومۇر",
      passwordPlaceholder: "مەخپى نومۇرىڭىزنى كىرگۈزۈڭ...",
      forgotPassword: "مەخپى نومۇرۇمنى ئۇنتۇپ قالدىم؟",
      loginButton: "🚀 سىستېمىغا كىرىش",
      loading: "تەكشۈرۈۋاتىدۇ...",
      success: (name) => `🎉 خۇش كەپسىز، ${name}!`,
      error: "⚠️ ID ياكى مەخپى نومۇر خاتا!",
      emptyFields: "📝 ID ۋە مەخپى نومۇرنى تولۇق كىرگۈزۈڭ!",
      forgotPasswordMessage: "📧 مەخپى نومۇرۇڭىزنى ئۇنتۇپ قالدىڭىزمۇ؟ support@kalbil.ai غا ئېلخەت يوللاڭ!",
      features: ["قىممەتلىك دەرسلەر", "ئەقلىي ئىقتىدار", "كىۋانتۇم تېخنىكىسى"],
      copyright: "© 2025 KalBiL ئوقۇغۇچى مەركىزى - ھەممە ھوقۇق قوغدىلىدى",
      close: "تاقاش",
      showPassword: "كۆرۈش",
      hidePassword: "يوشۇرۇش",
      language: "تىل",
      uyghur: "ئۇيغۇرچە",
      english: "ئىنگلىزچە",
      demoAccounts: "سىناق ھېساباتلار",
      adminAccount: "باشقۇرغۇچى",
      studentAccount: "ئوقۇغۇچى"
    },
    english: {
      title: "KalBiL Student Center", 
      subtitle: "Welcome to the World of AI and Quantum Technology",
      studentId: "Student ID",
      studentIdPlaceholder: "Enter your student ID...",
      password: "Password",
      passwordPlaceholder: "Enter your password...",
      forgotPassword: "Forgot Password?",
      loginButton: "🚀 Login to System",
      loading: "Checking...",
      success: (name) => `🎉 Welcome, ${name}!`,
      error: "⚠️ Incorrect ID or Password!",
      emptyFields: "📝 Please enter both ID and Password!",
      forgotPasswordMessage: "📧 Forgot your password? Email support@kalbil.ai for assistance!",
      features: ["Premium Courses", "AI Technology", "Quantum Computing"],
      copyright: "© 2025 KalBiL Student Center - All Rights Reserved",
      close: "Close",
      showPassword: "Show",
      hidePassword: "Hide",
      language: "Language",
      uyghur: "Uyghur",
      english: "English",
      demoAccounts: "Demo Accounts",
      adminAccount: "Administrator",
      studentAccount: "Student"
    }
  };

  const t = translations[language];

  // Auto-focus on mount - يۈكلەنگەندە ID ئىنپۇتىغا فوكۇس
  useEffect(() => {
    const idInput = document.getElementById("studentId");
    if (idInput) {
      setTimeout(() => idInput.focus(), 300);
    }
  }, []);

  // تىل ئۆزگەرتكەندە localStorage غا ساقلاش
  useEffect(() => {
    const savedLanguage = localStorage.getItem("kalbil_language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kelbil_language", language);
  }, [language]);

  const handleLogin = async () => {
    if (!id.trim() || !password.trim()) {
      setMessage(t.emptyFields);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsLoading(true);
    setMessage("");

    // API چاقىرىشنى سىمۇلاتسىيە قىلىش
    await new Promise(resolve => setTimeout(resolve, 1000));

    // JSON فايلىدىن ئوقۇغۇچى ئۇچۇرلىرىنى ئىزدەش
    const found = studentsData.find(
      (s) => String(s.id) === String(id) && s.password === password
    );

    if (found) {
      setMessage(t.success(found.name));
      
      // مۇۋەپپەقىيەتلىك كىرىش
      setTimeout(() => {
        setIsLoading(false);
        // ئىشلەتكۈچى ئۇچۇرلىرىنى ساقلاش
        localStorage.setItem("currentStudent", JSON.stringify(found));
        
        if (found.role === "admin") {
          navigate("/students-list");
        } else {
          navigate(`/students/${found.id}`);
        }
        onClose?.();
      }, 1500);
    } else {
      setIsLoading(false);
      setMessage(t.error);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleForgotPassword = () => {
    setMessage(t.forgotPasswordMessage);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "uyghur" ? "english" : "uyghur");
  };

  const handleDemoLogin = (demoId, demoPassword) => {
    setId(demoId);
    setPassword(demoPassword);
  };

  // باشقۇرغۇچى ۋە ئوقۇغۇچى ھېساباتلىرىنى تاپىش
  const adminAccount = studentsData.find(student => student.role === "admin");
  const studentAccounts = studentsData.filter(student => student.role === "student").slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-blue-900 dark:to-emerald-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative max-w-md w-full"
      >
        {/* ئارقا كۆرۈنۈش دىزائىن ئېلېمېنتلىرى */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl transform rotate-1 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-800 dark:to-emerald-800 rounded-3xl shadow-xl transform -rotate-1 opacity-30"></div>

        {/* ئاساسىي كونتېينېر */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 ${
            shake ? "animate-shake" : ""
          }`}
        >
          {/* ئۈستۈنكى بۆلۈم */}
          <div className="text-center mb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <span className="text-3xl">🎓</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent"
            >
              {t.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 mt-2 text-sm"
            >
              {t.subtitle}
            </motion.p>
          </div>

          {/* تىل ئالماشتۇرۇش باتۇنى */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={toggleLanguage}
            className="absolute top-4 right-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 border border-gray-300 dark:border-gray-600"
            title={t.language}
          >
            {language === "uyghur" ? (
              <>
                <span className="text-base">🇺🇿</span>
                <span>{t.uyghur}</span>
                <span className="text-xs">→ EN</span>
              </>
            ) : (
              <>
                <span className="text-base">🇺🇸</span>
                <span>{t.english}</span>
                <span className="text-xs">→ UY</span>
              </>
            )}
          </motion.button>

          {/* تاقاش باتۇنى */}
          {onClose && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={onClose}
              className="absolute top-4 left-4 w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group border border-gray-300 dark:border-gray-600"
              title={t.close}
            >
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-red-500 transition-colors text-lg">✕</span>
            </motion.button>
          )}

          {/* كىرىش فورمىسى */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            {/* ئوقۇغۇچى نومۇرى ئىنپۇتى */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
                🆔 {t.studentId}
              </label>
              <div className="relative">
                <input
                  id="studentId"
                  type="text"
                  placeholder={t.studentIdPlaceholder}
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full p-4 pr-12 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:text-white transition-all duration-300"
                  disabled={isLoading}
                  dir="auto"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  👤
                </div>
              </div>
            </div>

            {/* مەخپى نومۇر ئىنپۇتى */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-right">
                🔒 {t.password}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full p-4 pr-20 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:text-white transition-all duration-300"
                  disabled={isLoading}
                  dir="auto"
                />
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {showPassword ? "🔓" : "🔒"}
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors text-sm"
                  title={showPassword ? t.hidePassword : t.showPassword}
                  disabled={isLoading}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* مەخپى نومۇر ئۇنتۇش */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleForgotPassword}
              className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              disabled={isLoading}
            >
              {t.forgotPassword}
            </motion.button>
          </motion.div>

          {/* كىرىش باتۇنى */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white p-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                {t.loading}
              </>
            ) : (
              <>
                <span>🚀</span>
                {t.loginButton}
                <span>→</span>
              </>
            )}
          </motion.button>

          {/* سىناق ھېسابات باتۇنلىرى */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-3"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">
              {t.demoAccounts}
            </p>
            {/*  */}
          </motion.div>

          {/* ئۇقتۇرۇش كۆرسىتىش */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                className={`p-4 rounded-xl text-center font-semibold text-sm border-2 ${
                  message.includes(t.error) || message.includes(t.forgotPasswordMessage) || message.includes(t.emptyFields)
                    ? "bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
                    : "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
                }`}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ئاستىنكى ئۇچۇرلار */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span>{["🎯", "⚡", "🔬"][index]}</span>
                  <span>{feature}</span>
                  {index < t.features.length - 1 && (
                    <div className="w-1 h-1 bg-gray-300 rounded-full ml-2"></div>
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {t.copyright}
            </p>
          </motion.div>
        </motion.div>

        {/* ئارقا كۆرۈنۈش بېزەك ئېلېمېنتلىرى */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -z-10 inset-0 overflow-hidden"
        >
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full blur-2xl opacity-20"></div>
        </motion.div>
      </motion.div>

      {/* CSS Animation ئېنىقلىمىسى */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}