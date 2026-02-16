// src/pages/Contact.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Contact() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Form ma'lumotlarini saqlash
  useEffect(() => {
    const savedData = localStorage.getItem('kalbilContactForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    localStorage.setItem('kalbilContactForm', JSON.stringify(newData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { name, email, message } = formData;

      // Email yuborish
      const mailtoLink = `mailto:kawuljan.uyghur@gmail.com?subject=KalBil ئالاقە - ${encodeURIComponent(name)}&body=👤 ئىسمى: ${encodeURIComponent(
        name
      )}%0A📧 Email: ${encodeURIComponent(email)}%0A💬 ئۇچۇر: ${encodeURIComponent(message)}%0A%0A---%0Aبۇ ئۇچۇر KalBil تور بېتى ئارقىلىق يوللاندى`;
      
      window.location.href = mailtoLink;

      // Ma'lumotlarni tozalash
      localStorage.removeItem('kalbilContactForm');
      setFormData({ name: "", email: "", message: "" });
      
      setIsSubmitted(true);
      
      // 3 سېكۇنتتىن كېيىن ئاۋۋالغىچە يۆتكەش
      setTimeout(() => {
        navigate("/newcourses");
      }, 3000);

    } catch (error) {
      console.error("ئۇچۇر يوللاش مۇۋەپپەقىيەتسىز بولدى:", error);
      alert("❌ ئۇچۇر يوللاش مۇۋەپپەقىيەتسىز بولدى. قايتا سىناپ بەڭىڭىز.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    navigate("/newcourses");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>ئالاقە | KelBiL EduCourses</title>
        <meta name="description" content="KelBiL بىلەن ئالاقىلىشىڭ - كۋانتۇم ئۆگىنىش، ئەقلىي ئىقتىدار ۋە تېخنىكا مەسلىھەتلىرى" />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 p-4 sm:p-6 md:p-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">✅</span>
                <div>
                  <p className="font-semibold">مۇبارەك بولسۇن!</p>
                  <p className="text-sm">ئۇچۇرىڭىز مۇۋەپپەقىيەتلىك يوللاندى. 3 سېكۇنتتىن كېيىن دەرسلەر بېتىگە يۆتكىلىدۇ...</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 sm:space-y-12"
          >
            {/* Heading Section */}
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 dark:from-blue-400 dark:to-teal-300 mb-4">
                📬 KelBiL بىلەن ئالاقىلىشىڭ
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                سىزنىڭ پىكىر ۋە تەكلىپلىرىڭىز بىز ئۈچۈن ناھايىتى قىممەتلىك. بىرلىكتە تېخىمۇ ياخشى مۇلازىمەت يارىتايلى!
              </p>
            </motion.div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                    <span className="mr-3">📞</span>
                    ئالاقە ئۇچۇرلىرى
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-2xl mt-1">📍</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">ئادرېس</p>
                        <p className="text-gray-600 dark:text-gray-300">KelBil Quantum Lab & High Tech Center</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">ئۈرۈمچى، ئۇيغۇر</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-2xl mt-1">📞</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">تېلېفون</p>
                        <p className="text-gray-600 dark:text-gray-300">+81 90-1234-5678</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">دۈشەنبە-جۈمە 9:00-18:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <span className="text-2xl mt-1">✉️</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">ئېلخەت</p>
                        <p className="text-gray-600 dark:text-gray-300">support@kelbil.ai</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">24 سائەت ئىچىدە جاۋاب بېرىمىز</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>ئەسكەرتىش:</strong> كۋانتۇم ئۆگىنىش، ئەقلىي ئىقتىدار، ياكى پەقەت بىر سالام دىگەن بولسىڭىزمۇ — 
                      سىزنىڭ سۆزىڭىز بىز ئۈچۈن قىممەتلىك. KelBil بىلەن ئالاقىلىشىڭ، چۈنكى بىز سىزنىڭ قىزىقىشىڭىزنى، 
                      ئارزۇيىڭىزنى، ۋە سۆزىڭىزنى قەلبتىن قوبۇل قىلىمىز.
                    </p>
                  </div>
                </div>

                {/* Map Section */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="mr-2">🗺️</span>
                    بىزنىڭ ئورنى
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    ئوقۇتۇش ۋە پەن-تېخنىكا تەتقىقات تەرەققىيات مەركىزى KelBiL
                  </p>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 mb-4">
                    <iframe
                      title="KalBil Lab Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31037.88515013778!2d87.4048996!3d43.7152592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3806008cfd7b4dab%3A0xaa5952ebac7a708a!2sUrumqi%2C%20Xinjiang%2C%20China!5e0!3m2!1sen!2s!4v1712345678901!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="filter dark:brightness-75"
                    ></iframe>
                  </div>

                  <a
                    href="https://www.google.com/maps/place/Urumqi,+Xinjiang,+China/@43.8218415,87.3976013,11z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span className="mr-2">🗺️</span>
                    Google خەرىتىدە كۆرۈش
                  </a>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <span className="mr-3">✍️</span>
                  ئالاقە فورمىسى
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder=" "
                      required
                      disabled={isLoading}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      👤 ئىسمىڭىز *
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder=" "
                      required
                      disabled={isLoading}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      📧 Email ئادرىسىڭىز *
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                      placeholder=" "
                      required
                      disabled={isLoading}
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base transition-all duration-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      💬 ئۇچۇرىڭىز *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        يوللاش...
                      </>
                    ) : (
                      <>
                        🚀 ئۇچۇر يوللاش
                      </>
                    )}
                  </button>
                </form>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    ئۇچۇرىڭىزنى يوللىغاندىن كېيىن، ئېلخەت پروگراممىڭىز ئاچىلىپ، ئۇچۇرىڭىزنى تەكشۈرۈپ يوللىسىڭىز بولىدۇ.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  تېز ھەرىكەتلەر
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  دەرسلەرنى كۆرۈش ياكى باشقا مۇلازىمەتلەر بىلەن تونۇشۇش
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleClick}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl hover:from-blue-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold flex items-center"
                  >
                    <span className="mr-2">🚀</span>
                    نەق مەيدان دەرسلەر
                  </button>
                  
                  <button
                    onClick={() => navigate("/about")}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold flex items-center"
                  >
                    <span className="mr-2">ℹ️</span>
                    بىز ھەققىدە
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}