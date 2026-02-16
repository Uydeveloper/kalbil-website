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
    "    بىلىم قانىتىمىز، روھ يولدىشىمىز، كەلگۈسىمىز يورۇقلۇق — KelBiL🌟",
    "🌟 KelBiL — With knowledge as our wings and spirit as our guide, the future shines bright.",
    "  يېڭى بىلىم بىلەن يېڭى پۇرسەت   — KelBiL🎉",
    "🎉 A new year is more than time — it’s new knowledge and new opportunities. Begin with KelBiL!",
    "  ئۆگىنىشچىلەرگە كۈچ بەھشىت قىلىپ، جەمئىيەتلەرگە نۇر سېپىدۇ — KelBiL📚",
    "📚 KelBiL — Empowering learners with strength, and spreading light to communities.",
    " ئۇيغۇر تىلىنىڭ كۈچى، ئۇيغۇر روھىنىڭ مەڭگۈلۈكى بىلەن بىلىمغا يول ئېچىدۇ —  KelBiL💡 ",
    "💡 KelBiL — Opening the path to knowledge through the power of the Uyghur language and the eternity of its spirit.",
    "  بىلىم ئارقىلىق ئارزۇلارغا، روھ ئارقىلىق يۇلتۇزلارغا يېتىش  — KelBiL🚀",
    "🚀 KelBiL — Reaching dreams through knowledge, and stars through spirit.",
    "  بىلىم دەۋرىدە ئۆسۈپ، كەلگۈسىدە مېۋە بىرىمىز  — KelBiL🌱",
    "🌱 KelBiL — Growing in the era of knowledge, bearing fruit in the future."
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(5);

  // 📌 سىزنىڭ PayPal.me ئادرېسىڭىز (مەسىلەن: https://www.paypal.me/sizningIsmingiz)
  const PAYPAL_ME_LINK = "https://www.paypal.com/paypalme/KawulAbduryim"; // ← بۇنى ئۆزگەرتىڭ!

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDonate = () => {
    const url = `${PAYPAL_ME_LINK}/${donationAmount}`;
    window.open(url, "_blank");
    // مەسۇلات بەتكە يۆتكەش (ئىختىيارى)
    // React Router ئارقىلىق يۆتكەش مۇمكىن، لېكىن PayPal.me تىكىل بولغانلىقى ئۈچۈن بۇ يەردىن بەك ئادەمگە قارايدۇ
    setDonationModalOpen(false);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 lg:px-24 mt-16" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* 📜 ھوقۇق ئۇچۇرى */}
        <div>
          <h3 className="font-uyghur text-3xl font-semibold text-white mb-2"> بىلىم سۇپىسى KelBiL</h3>
          <p>© 2025 KelBiL.<br></br> بارلىق ھوقۇقلىرى قوغدىنىدۇ</p>
          <p className="font-uyghur text-xl w-full mt-4">
              بىلىم بىلەن قانىتىمىزنى ئېچىپ، روھ بىلەن كەلگۈسىمىزنى يورۇتايلى   — KelBiL🌍
          </p>
          <p className="text-xl mt-1 text-gray-400">
            🌍 KelBiL — Empowering futures through knowledge and spirit.
          </p>
        </div>

        {/* 🔗 ئىجتىمائىي ئالاقىلار + CTA */}
        <div>
          <h4 className="font-uyghur text-3xl font-semibold text-white mb-2"> بىزگە ئەگىشىۋېلىڭ</h4>
          <div className=" text-xl flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Instagram">Instagram</a>
          </div>

          {/* 🧡 ئىيانە تۈيمىسى */}
          <div className="mt-4">
            <button
              onClick={() => setDonationModalOpen(true)}
              className="font-uyghur text-2xl inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition  cursor-pointer"
            >
              نى قوللاڭ KelBiL💖
            </button>
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
          <h4 className="font-uyghur text-2xl font-semibold text-white mb-2">يېڭىلىقلاردىن خەۋردار بولۇڭ</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <input
              type="email"
              placeholder=" ئادىرسىڭز Email "
              className="font-uyghur text-xl px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="font-uyghur text-2xl px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
              ئەزا بولۇش
            </button>
          </form>

          <div className="mt-4 space-y-2">
            <Link
              to="/"
              className="font-uyghur text-xl text-blue-400 hover:text-blue-500 text-sm underline block"
            >
              🏠 KelBiL باش بەتكە قايتىش
            </Link>
            <button
              onClick={scrollToTop}
              className="font-uyghur text-xl text-blue-400 hover:text-blue-500  underline"
            >
              ⬆️ ئۈستىگە قايتىش
            </button>
          </div>
        </div>
      </div>

      {/* 🎡 Rotating Quote */}
      <div className="font-uyghur text-3xl mt-8 text-center  text-yellow-400 italic transition-opacity duration-500 ease-in-out">
        {quotes[quoteIndex]}
      </div>

      {/* ❤️ Closing Line */}
      <div className="font-uyghur text-sm text-blue-700 mt-6 text-center text-gray-500 italic">
        ❤️     بىلىم سۇپىسى قۇرۇلدى، كەڭ بىلىم سۈيەر قېرنداشلارنى تەكىلىپ قىلمىز،بىرلكتە كۇچلىنەيلى  KelBiL
      </div>

      {/* 💖 ئىيانە مودېلى — ئۇيغۇر ئاتا سۆزى بىلەن */}
      {donationModalOpen && (
        <div className=" font-uyghur text-2xl fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="font-uyghur text-2xl bg-gray-800 text-white rounded-lg p-6 w-full max-w-md">
            <h3 className="font-uyghur text-2xl font-bold mb-3 text-center">KelBiL نى قوللاڭ 💖</h3>
            
            {/* 🌾 ئۇيغۇر دەبدەبلىك ئاتا سۆز */}
            <p className="font-uyghur text-2xltext-yellow-300 italic text-center mb-4">
              «ئىيانە قىلغۇچىغا ئاسمان رەزىق، يەر بەرەكەت»
            </p>

            <p className="font-uyghur text-2xl text-gray-300 mb-4 text-center">
              سىزنىڭ قوللىشىڭىز بىزگە بىلىم نۇرىنى تارقىتىشنى داۋاملاشتۇرۇشقا ياردەم بېرىدۇ.
            </p>

            {/* مىقدار تاللاش */}
            <div className="mb-4">
              <label className="block text-sm mb-2 text-center">ئىيانە مىقدارى (USD):</label>
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
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 text-center"
              />
              <div className="flex gap-2 mt-2 justify-center flex-wrap">
                {[5, 10, 25, 50, 100].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setDonationAmount(amt)}
                    className="text-xs px-2 py-1 bg-indigo-600 hover:bg-indigo-700 rounded"
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            {/* ئىيانە تۈيمىسى — PayPal.me ئارقىلىق */}
            <button
              onClick={handleDonate}
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded font-medium mb-3"
            >
              💰 ئىيانە قىلىش (PayPal ئارقىلىق)
            </button>

            {/* 🌾 قوشۇمچە ئاتا سۆز */}
            <p className="text-xs text-gray-400 italic text-center mb-3">
              «ياخشى ئىش قىلغۇچىنىڭ ئىزى يەرگە قالمايدۇ، ئاسمانغا يېتىپ كەتكەن بولىدۇ»
            </p>

            <button
              onClick={() => setDonationModalOpen(false)}
              className="w-full py-2 text-sm text-gray-400 hover:text-white"
            >
              يېپىش
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}