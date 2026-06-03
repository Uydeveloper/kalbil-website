import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext"; // Navbar بىلەن بىرلىككە كەلتۈرۈلدى
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm({ onClose, onSuccess }) {
  // ئەگەر useAuth ئىشلىتىۋاتقان بولسىڭىز، ئۆزىڭىزنىڭ كونا لىنىيەسىنى ساقلاپ قالسىڭىزمۇ بولىدۇ
  const { login } = useContext(UserContext) || {}; 
  const [form, setForm] = useState({ id: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // input نى يېڭىلاش
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // ئەگەر context تېخى پۈتمىگەن بولسا سىناش ئۈچۈن ئاددىي باھالاش
      const success = login ? await login(form.id, form.password) : (form.id === "admin" && form.password === "123456");

      if (success) {
        toast.success("✅ كىرىش مۇۋەپپەقىيەتلىك بولدى!", {
          position: "top-center",
          autoClose: 1500,
        });
        setTimeout(() => {
          onSuccess?.();
          onClose?.();
        }, 1000);
      } else {
        setMessage("❌ ID ياكى پارول خاتا، قايتا سىناپ بېقىڭ!");
      }
    } catch (err) {
      setMessage("⚠️ تور ئۇلىنىشىدا خاتالىق كۆرۈلدى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      {/* سىرتىنى چەككەندە تاقىلىش ئۈنۈمى */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* مودال رامكىسى - Framer Motion ئارقىلىق سىلىق ئېچىلىدۇ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-md overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50 p-6 relative z-10"
        dir="rtl"
      >
        {/* تاقاش كۇنۇپكىسى (ئوڭ ئۈستى تەرەپتە) */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          ✕
        </button>

        {/* باش تېما */}
        <div className="text-center mb-6">
          <h2 className="font-uyghur text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center justify-center gap-2">
            <span>🔐</span> سىستېمىغا كىرىش
          </h2>
          <p className="font-uyghur text-sm text-slate-500 dark:text-slate-400 mt-1">
            بىلىم سۇپىسىغا كىرىپ ئۆگىنىشىڭىزنى داۋاملاشتۇرۇڭ
          </p>
        </div>

        {/* فېرمىسى */}
        <form onSubmit={handleLogin} className="space-y-4 font-uyghur">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 mr-1">
              ئىشلەتكۈچى كىملىكى (ID)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                🆔
              </span>
              <input
                type="text"
                name="id"
                placeholder="ئىۆز ID ىڭىزنى كىرگۈزۈڭ"
                value={form.id}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-2.5 text-lg border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 mr-1">
              مەخپىي كود (Password)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                🔒
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password كىرگۈزۈڭ"
                value={form.password}
                onChange={handleChange}
                className="w-full pr-10 pl-4 py-2.5 text-lg border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* خاتالىق ئۇچۇرى */}
          {message && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-red-600 dark:text-red-400 font-medium bg-red-50 dark:bg-red-950/30 py-2 rounded-lg"
            >
              {message}
            </motion.p>
          )}

          {/* كىرىش كۇنۇپكىسى */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-xl text-xl font-bold text-white shadow-md transition-all ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500 active:scale-[0.98]"
            }`}
          >
            {loading ? "بىر تەرەپ قىلىنىۋاتىدۇ..." : "🔓 كىرىش"}
          </button>
        </form>

        {/* ئاستى قوشۇمچە ئۇلىنىشلار */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center font-uyghur text-sm text-slate-500 dark:text-slate-400 flex justify-between px-2">
          <button onClick={onClose} className="text-rose-500 hover:text-rose-600 transition-colors">
            ❌ تاقاش
          </button>
          <a href="#forgot" className="hover:text-blue-500 transition-colors">
            مەخپىي كودنى ئۇنتۇپ قالدىڭىزمۇ؟
          </a>
        </div>
      </motion.div>
    </div>
  );
}