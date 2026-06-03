import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export default function Footer() {
  const { user } = useAuth();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("✅ KelBiL يېڭىلىقلارغا ئەزا بولۇش مۇۋەپپەقىيەتلىك!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🌟 Rotating Quotes
  const quotes = [
    "بىلىم قانىتىمىز، روھ يولدىشىمىز، كەلگۈسىمىز يورۇقلۇق — KelBiL 🌟",
    "🌟 KelBiL — With knowledge as our wings and spirit as our guide, the future shines bright.",
    "يېڭى بىلىم بىلەن يېڭى پۇرسەت — KelBiL 🎉",
    "🎉 A new year is more than time — it’s new knowledge and new opportunities. Begin with KelBiL!",
    "ئۆگىنىشچىلەرگە كۈچ بەھشىت قىلىپ، جەمئىيەتلەرگە نۇر سېپىدۇ — KelBiL 📚",
    "📚 KelBiL — Empowering learners with strength, and spreading light to communities.",
    "ئۇيغۇر تىلىنىڭ كۈچى، ئۇيغۇر روھىنىڭ مەڭگۈلۈكى بىلەن بىلىمگە يول ئېچىدۇ — KelBiL 💡",
    "💡 KelBiL — Opening the path to knowledge through the power of the Uyghur language and the eternity of its spirit.",
    "بىلىم ئارقىلىق ئارزۇلارغا، روھ ئارقىلىق يۇلتۇزلارغا يېتىش — KelBiL 🚀",
    "🚀 KelBiL — Reaching dreams through knowledge, and stars through spirit.",
    "بىلىم دەۋرىدە ئۆسۈپ، كەلگۈسىدە مېۋە بېرىمىز — KelBiL 🌱",
    "🌱 KelBiL — Growing in the era of knowledge, bearing fruit in the future."
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(5);

  const PAYPAL_ME_LINK = "https://www.paypal.com/paypalme/KawulAbduryim";

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const handleDonate = () => {
    const url = `${PAYPAL_ME_LINK}/${donationAmount}`;
    window.open(url, "_blank");
    setDonationModalOpen(false);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-24 mt-20 border-t border-gray-800" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-right" dir="rtl">
        
        {/* 📜 1. ھوقۇق ۋە سۇپىنىڭ قىسقىچە ئۇچۇرى */}
        <div className="flex flex-col space-y-4 md:text-right text-center">
          <h3 className="font-uyghur text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            بىلىم سۇپىسى KelBiL
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            © {new Date().getFullYear()} KelBiL. <br />
            بارلىق ھوقۇقلىرى قوغدىنىدۇ.
          </p>
          <p className="font-uyghur text-lg text-gray-300 leading-relaxed">
            بىلىم بىلەن قانىتىمىزنى ئېچىپ، روھ بىلەن كەلگۈسىمىزنى يورۇتايلى — KelBiL 🌍
          </p>
          <p className="text-xs text-gray-400 italic" dir="ltr">
            🌍 KelBiL — Empowering futures through knowledge and spirit.
          </p>
        </div>

        {/* 🔗 2. ئالاقە ۋە قوللاش قىسمى */}
        <div className="flex flex-col space-y-4 md:items-start md:text-right text-center items-center">
          <h4 className="font-uyghur text-2xl font-semibold text-white">بىزگە ئەگىشىۋېلىڭ</h4>
          <div className="text-lg flex gap-6 justify-center md:justify-start">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200" aria-label="Facebook">Facebook</a>
            <a href="#" className="hover:text-sky-400 transition-colors duration-200" aria-label="Twitter">Twitter</a>
            <a href="#" className="hover:text-pink-400 transition-colors duration-200" aria-label="Instagram">Instagram</a>
          </div>

          {/* 🧡 ئىئانە تۈيمىسى */}
          <div className="pt-2">
            <button
              onClick={() => setDonationModalOpen(true)}
              className="font-uyghur text-xl inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-5 py-2.5 rounded-full hover:from-rose-500 hover:to-pink-500 shadow-lg hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer"
            >
              KelBiL نى قوللاڭ 💖
            </button>
          </div>

          {/* 🧩 Role-based CTA */}
          {user?.role === "admin" && (
            <p className="text-sm text-green-400 mt-2 bg-green-500/10 px-3 py-1 rounded-md border border-green-500/20">
              🛠️ باشقۇرغۇچى سۈپىتىدە <Link to="/admin" className="underline hover:text-green-300">باشقۇرۇش بېتىگە ئۆتۈڭ</Link>
            </p>
          )}
          {user?.role === "student" && (
            <p className="text-sm text-blue-400 mt-2 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
              📚 ئۆز دەرسلىرىڭىزنى كۆرۈش ئۈچۈن <Link to="/my-courses" className="underline hover:text-blue-300">«دەرسلىرىم» بېتىگە ئۆتۈڭ</Link>
            </p>
          )}
        </div>

        {/* 📬 3. خەۋەرلەرگە ئەزا بولۇش قىسمى */}
        <div className="flex flex-col space-y-4 md:text-right text-center">
          <h4 className="font-uyghur text-2xl font-semibold text-white">يېڭىلىقلاردىن خەۋەردار بولۇڭ</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email ئادرېسىڭىز"
              className="font-uyghur text-lg px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow text-right"
              required
            />
            <button
              type="submit"
              className="font-uyghur text-xl px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors duration-200 shadow-md whitespace-nowrap cursor-pointer"
            >
              ئەزا بولۇش
            </button>
          </form>

          <div className="pt-2 flex flex-col space-y-2 text-sm">
            <Link to="/" className="font-uyghur text-base text-indigo-400 hover:text-indigo-300 underline block">
              🏠 KelBiL باش بەتكە قايتىش
            </Link>
            <button
              onClick={scrollToTop}
              className="font-uyghur text-base text-indigo-400 hover:text-indigo-300 underline text-right w-fit md:mx-0 mx-auto cursor-pointer"
            >
              ⬆️ ئۈستىگە قايتىش
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-800 my-8 max-w-7xl mx-auto" />

      {/* 🎡 Rotating Quote */}
      <div className="font-uyghur text-2xl px-4 text-center text-yellow-400/90 h-12 flex items-center justify-center italic transition-opacity duration-500 ease-in-out">
        {quotes[quoteIndex]}
      </div>

      {/* ❤️ Closing Line */}
      <div className="font-uyghur text-sm mt-6 text-center text-gray-500 max-w-2xl mx-auto leading-relaxed">
        ❤️ بىلىم سۇپىسى قۇرۇلدى، كەڭ بىلىم سۆيەر قېرىنداشلارنى تەكلىپ قىلىمىز، بىرلىكتە كۈچىيەيلى — KelBiL
      </div>

      {/* 💖 ئىيانە مودېلى */}
      {donationModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="font-uyghur bg-gray-800 text-white rounded-xl p-6 w-full max-w-md border border-gray-700 shadow-2xl" dir="rtl">
            <h3 className="font-uyghur text-2xl font-bold mb-2 text-center text-rose-400">KelBiL نى قوللاڭ 💖</h3>
            
            <p className="font-uyghur text-xl text-yellow-300 italic text-center mb-4 leading-relaxed">
              «ئىئانە قىلغۇچىغا ئاسمان رزىق، يەر بەرەكەت»
            </p>

            <p className="font-uyghur text-base text-gray-300 mb-5 text-center leading-relaxed">
              سىزنىڭ قوللىشىڭىز بىزگە بىلىم نۇرىنى تارقىتىشنى داۋاملاشتۇرۇشقا ياردەم بېرىدۇ.
            </p>

            {/* مىقدار تاللاش */}
            <div className="mb-5">
              <label className="block text-sm mb-2 text-gray-400 text-center">ئىئانە مىقدارى (USD):</label>
              <input
                type="number"
                min="5"
                max="10000"
                value={donationAmount}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val) && val >= 5 && val <= 10000) {
                    setDonationAmount(val);
                  }
                }}
                className="w-full p-2.5 rounded bg-gray-900 text-white border border-gray-600 text-center text-xl font-sans focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <div className="flex gap-2 mt-3 justify-center flex-wrap" dir="ltr">
                {[5, 10, 25, 50, 100].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setDonationAmount(amt)}
                    className={`text-sm px-3 py-1.5 rounded-md font-sans transition-all cursor-pointer ${
                      donationAmount === amt 
                        ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30" 
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            {/* ئىيانە تۈيمىسى — PayPal.me ئارقىلىق */}
            <button
              onClick={handleDonate}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg cursor-pointer"
            >
              💰 ئىئانە قىلىش (PayPal ئارقىلىق)
            </button>

            <p className="text-xs text-gray-400 italic text-center mt-4 leading-relaxed">
              «ياخشى ئىش قىلغۇچىنىڭ ئىزى يەرگە قالمايدۇ، ئاسمانغا يېتىپ كەتكەن بولىدۇ»
            </p>

            <button
              onClick={() => setDonationModalOpen(false)}
              className="w-full mt-4 py-2 text-sm text-gray-400 hover:text-white transition-colors text-center cursor-pointer"
            >
              يېپىش
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}