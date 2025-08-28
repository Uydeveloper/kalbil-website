import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export default function Footer() {
  const { user } = useAuth();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("✅ KalBiL يېڭىلىقلارغا ئەزا بولۇش مۇۋەپپەقىيەتلىك!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🌟 Rotating Quotes
  const quotes = [
  "    بىلىم قانىتىمىز، روھ يولدىشىمىز، كەلگۈسىمىز يورۇقلۇق — KalBiL🌟" ,
  "🌟 KalBiL — With knowledge as our wings and spirit as our guide, the future shines bright.",

  "  يېڭى بىلىم بىلەن يېڭى پۇرسەت   — KalBiL🎉",
  "🎉 A new year is more than time — it’s new knowledge and new opportunities. Begin with KalBiL!",

  "  ئۆگىنىشچىلەرگە كۈچ بەھشىت قىلىپ، جەمئىيەتلەرگە نۇر سېپىدۇ — KalBiL📚",
  "📚 KalBiL — Empowering learners with strength, and spreading light to communities.",

  " ئۇيغۇر تىلىنىڭ كۈچى، ئۇيغۇر روھىنىڭ مەڭگۈلۈكى بىلەن بىلىمغا يول ئېچىدۇ —  KalBiL💡 ",
  "💡 KalBiL — Opening the path to knowledge through the power of the Uyghur language and the eternity of its spirit.",

  "  بىلىم ئارقىلىق ئارزۇلارغا، روھ ئارقىلىق يۇلتۇزلارغا يېتىش  — KalBiL🚀",
  "🚀 KalBiL — Reaching dreams through knowledge, and stars through spirit.",

  "  بىلىم دەۋرىدە ئۆسۈپ، كەلگۈسىدە مېۋە بىرىمىز  — KalBiL🌱",
  "🌱 KalBiL — Growing in the era of knowledge, bearing fruit in the future."
];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 lg:px-24 mt-16" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* 📜 ھوقۇق ئۇچۇرى */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2"> بىلىم سۇپىسى KalBiL</h3>
          <p>© 2025 KalBiL.<br></br> بارلىق ھوقۇقلىرى قوغدىنىدۇ</p>
          <p className="text-sm w-full mt-4">
              بىلىم بىلەن قانىتىمىزنى ئېچىپ، روھ بىلەن كەلگۈسىمىزنى يورۇتايلى   — KalBiL🌍
          </p>
          <p className="text-sm mt-1 text-gray-400">
            🌍 KalBiL — Empowering futures through knowledge and spirit.
          </p>
        </div>

        {/* 🔗 ئىجتىمائىي ئالاقىلار + CTA */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2" > بىزگە ئەگىشىۋېلىڭ</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Instagram">Instagram</a>
          </div>

          <div className="mt-4">
            <a
              href="https://uydeveloper.github.io/kalbil-website/#/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm"
            >
                نى قوللاڭ KalBiL💖 
            </a>
          </div>

          {/* 🧩 Role-based CTA */}
          {user?.role === "admin" && (
            <p className="mt-4 text-sm text-green-400">
              🛠️ باشقۇرغۇچى سۈپىتىدە <Link to="/admin" className="underline">باشقۇرۇش بىتىگە ئۆتۈڭ</Link>
            </p>
          )}
          {user?.role === "student" && (
            <p className="mt-4 text-sm text-blue-400">
              📚 ئۆز دەرسلىرىڭىزنى كۆرۈش ئۈچۈن <Link to="/my-courses" className="underline">«دەرسلىرىم» بىتىگە ئۆتۈڭ</Link>
            </p>
          )}
        </div>

        {/* 📬 خەۋەرلەرگە ئەزا بولۇش + باش بەتكە قايتىش */}
        <div>
          <h4 className="text-md font-semibold text-white mb-2">يېڭىلىقلاردىن خەۋردار بولۇڭ</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <input
              type="email"
              placeholder=" ئادىرسىڭز Email " 
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
              ئەزا بولۇش
            </button>
          </form>

          <div className="mt-4 space-y-2">
            <Link
              to="/"
              className="text-blue-400 hover:text-blue-500 text-sm underline block"
            >
              🏠 KalBiL باش بەتكە قايتىش
            </Link>
            <button
              onClick={scrollToTop}
              className="text-blue-400 hover:text-blue-500 text-sm underline"
            >
              ⬆️ ئۈستىگە قايتىش
            </button>
          </div>
        </div>
      </div>

      {/* 🎡 Rotating Quote */}
      <div className="mt-8 text-center text-sm text-yellow-400 italic transition-opacity duration-500 ease-in-out">
        {quotes[quoteIndex]}
      </div>

      {/* ❤️ Closing Line */}
      <div className="mt-6 text-center text-sm text-gray-500 italic">
        ❤️     بىلىم سۇپىسى قۇرۇلدى، كەڭ بىلىم سۈيەر قېرنداشلارنى تەكىلىپ قىلمىز،بىرلكتە كۇچلىنەيلى  KalBiL
      </div>
    </footer>
  );
}