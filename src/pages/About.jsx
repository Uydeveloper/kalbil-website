import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { topicData } from "../data/topicData";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

export default function About() {
  const topics = Object.values(topicData);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      country: formData.get("country"),
      message: formData.get("message"),
      image: formData.get("image")?.name || null,
      video: formData.get("video")?.name || null,
    };

    try {
      await fetch("https://kalbil.org/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("✅ ئۇچۇر KalBiL غا يوللاندى!");
      setShowForm(false);
    } catch (err) {
      alert("❌ يوللاش مەغلۇپ بولدى: " + err.message);
    }
  };

  const handleReset = () => {
    document.querySelector("form").reset();
  };

  const sliderItems = [
    {
      src: `${process.env.PUBLIC_URL}/images/image01.png`,
      quote: "«بىلىم — قەلبىمىزنىڭ نۇرى.»",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/image02.png`,
      quote: "«تېخنىكا — قانىتىمىز!»",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/image03.png`,
      quote: "«بىرلىكتە ئۆگىنىمىز، كۈچ بېرىمىز.»",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/image05.png`,
      quote: "«كەلگۈسىمىز — پارلاق!»",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const missionLines = [
    "بىلىم — قەلبىمىزنى يورۇتىدىغان نۇر، زېھىنىمىزنى چاقناتىدىغان چىراغ",
    "تېخنىكا — ئاسمانغا يول ئاچىدىغان قانىتىمىز!",
    "ئۇيغۇرلارغا بىلىم بىلەن كۈچ، تېخنىكا بىلەن غۇرۇر ئاتا قىلىدۇ — KalBiL",
    "ھەر بىر دەرس — كەلگۈسىگە باسقان قەدەم، ھەر بىر تېما — يورۇق يول",
    "بىلىم ئارقىلىق قىممىتىمىزنى يارىتايلى، ئارزۇيىمىزنى ئەمەلگە ئاشۇرايلى",
    "تېخنىكا — قورالىمىزلا ئەمەس، ئىپتىخارىمىزنىڭ يۇلتۇزى",
    "ئۇيغۇر تىلىدا، ئۇيغۇر روھىدا — بىلىمگە يول ئاچايلى",
    "بىلىمگە ئىنتىلىپ، تېخنىكىدا تۇرىدىغان جەمئىيەت — KalBiL",
    "بىرلىكتە ئۆگىنىپ، بىر-بىرىمىزگە كۈچ ئاتا قىلايلى",
    "كەلگۈسىمىز — بىلىم نۇرى بىلەن يورۇق، تېخنىكا چىرىغى بىلەن پارلاق!"
  ];

  return (
    <>
      <Helmet>
        <title>About | KalBiL EduCourses</title>
        <meta name="description" content="Learn more about KalBiL EduCourses and our mission." />
      </Helmet>

      <section className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-full flex justify-center mt-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/image05.png`}
                alt="KalBiL Logo"
                className="w-32 sm:w-48 md:w-64 lg:w-72 max-w-full h-auto object-contain"
              />
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-300 dark:to-emerald-300" style={{ fontFamily: 'Amiri, serif' }}>
              ھەققىدە KalBiL EduCourses
            </h2>
            <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
              «بىلىم — كەلگۈسىمىزنىڭ نۇرى، تېخنىكا — قەدەملىرىمىزنىڭ كۈچى.»
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {topics.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 sm:mb-4">
                    {item.slogan}
                  </p>
                  <Link
                    to={`/topic/${item.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-2 rounded text-sm sm:text-base md:text-lg"
                  >
                    تەپسىلاتىنى كۆرۈش
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 sm:mt-16 md:mt-36 text-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-500 dark:from-emerald-300 dark:to-blue-300" style={{ fontFamily: 'Amiri, serif' }}>
              «تېخنىكا بىلەن قانىتىمىزنى ئېچىپ، بىلىم بىلەن كەلگۈسىمىزنى يورۇتايلى.»
            </h3>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-serif" style={{ fontFamily: 'Amiri, serif' }}>
              نىڭ نىشانى، ئۇيغۇرلارنىڭ بىلىم ۋە تېخنىكىدا ئالغا قەدەم ئېلىپ ئىلگىرلىشى ئۈچۈن — KalBiL
            </p>
          </motion.div>

          {/* Slider Album with Quotes */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <Slider {...sliderSettings}>
              {sliderItems.map((item, idx) => (
                <div key={idx} className="px-2 relative">
                  <img
                    src={item.src}
                    alt={`slide-${idx}`}
                    className="rounded-xl w-full h-32 sm:h-48 md:h-64 lg:h-80 object-cover shadow-md"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-serif">
                    {item.quote}
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* 10-Line Vision Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mt-8 sm:mt-10 md:mt-12 space-y-2 sm:space-y-3 text-center"
          >
            {missionLines.map((line, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {line}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🤝 ھەمكارلىق سېكشىنى */}
      <section className="mt-12 sm:mt-16 md:mt-24 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-8 rounded-xl shadow-lg">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">🤝 KalBiL بىلەن ھەمكارلىشىڭ</h2>
          <p className="mt-1 sm:mt-2 text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300">
            «بىزنى قوللىشىڭىزنى ئۈمىد قىلىمىز — بىرىكتە بىلىم تېخىمۇ كۈچلۈك، يوقالماس بولايلى!»
          </p>
        </div>

        {/* 🎞️ رەسىم سلايدى */}
        <Slider {...sliderSettings}>
          {sliderItems.map((item, idx) => (
            <div key={idx} className="px-2 relative">
              <img src={item.src} alt={`slide-${idx}`} className="rounded-xl w-full h-32 sm:h-48 md:h-64 lg:h-80 object-cover shadow-md" />
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-serif">
                {item.quote}
              </div>
            </div>
          ))}
        </Slider>

        {/* 🧾 بوتان: قېنى مەھەممەت */}
        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-6 py-2 sm:py-3 md:py-3 rounded text-base sm:text-lg md:text-lg font-semibold"
          >
            قېنى مەھەممەت
          </button>
        </div>

        {/* 📝 ھەمكارلىق فورمىسى */}
        {showForm && (
          <div className="mt-6 sm:mt-8 md:mt-10 bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="👤 ئىسمى" name="name" required className="w-full px-3 sm:px-4 py-2 sm:py-2 border rounded text-sm sm:text-base" />
              <input type="tel" placeholder="📞 تېلفۇن" name="phone" required className="w-full px-3 sm:px-4 py-2 sm:py-2 border rounded text-sm sm:text-base" />
              <input type="email" placeholder="✉️ ئېلخەت" name="email" required className="w-full px-3 sm:px-4 py-2 sm:py-2 border rounded text-sm sm:text-base" />
              <input type="text" placeholder="🌍 دۆلەت تەۋەلكى" name="country" className="w-full px-3 sm:px-4 py-2 sm:py-2 border rounded text-sm sm:text-base" />
              <textarea placeholder="📝 قىسقا ئۇچۇر" name="message" rows="3" className="w-full px-3 sm:px-4 py-2 sm:py-2 border rounded text-sm sm:text-base" />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input type="file" accept="image/*" name="image" className="w-full px-3 sm:px-4 py-2 sm:py-2 border rounded text-sm sm:text-base" />
                <input type="file" accept="video/*" name="video" className="w-full px-3 sm:px-4 py-2 sm:py-2 border rounded text-sm sm:text-base" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-3 sm:mt-4">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 sm:py-2 rounded text-sm sm:text-base">📤 يوللاش</button>
                <button type="button" onClick={handleReset} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 sm:px-4 py-2 sm:py-2 rounded text-sm sm:text-base">🔄 ئۆزگەرتىش</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 sm:py-2 rounded text-sm sm:text-base">❌ تاقاش</button>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}