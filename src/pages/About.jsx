import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { topicData } from "../data/topicData";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const topics = Object.values(topicData);

  
  const sliderItems = [
    {
      src: "/images/image01.png",
      quote: "«بىلىم — قەلبىمىزنىڭ نۇرى.»",
    },
    {
      src: "/images/image02.png",
      quote: "«تېخنىكا — قانىتىمىز!»",
    },
    {
      src: "/images/image03.png",
      quote: "«بىرلىكتە ئۆگىنىمىز، كۈچ بېرىمىز.»",
    },
    {
      src: "/images/image05.png",
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
  };

  const missionLines = [
    "بىلىم — قەلبىمىزنى يورۇتىدىغان نۇر، زېھىنىمىزنى چاقناتىدىغان چىراغ",
    "تېخنىكا — ئاسمانغا يول ئاچىدىغان قانىتىمىز!",
    " ئۇيغۇرلارغا بىلىم بىلەن كۈچ، تېخنىكا بىلەن غۇرۇر ئاتا قىلىدۇ — KalBiL ",
    "ھەر بىر دەرس — كەلگۈسىگە باسقان قەدەم، ھەر بىر تېما — يورۇق يول",
    "بىلىم ئارقىلىق قىممىتىمىزنى يارىتايلى، ئارزۇيىمىزنى ئەمەلگە ئاشۇرايلى",
    "تېخنىكا — قورالىمىزلا ئەمەس، ئىپتىخارىمىزنىڭ يۇلتۇزى",
    "ئۇيغۇر تىلىدا، ئۇيغۇر روھىدا — بىلىمگە يول ئاچايلى",
    "بىلىمگە ئىنتىلىپ، تېخنىكىدا  تۇرىدىغان جەمئىيەت — KalBiL  ",
    "بىرلىكتە ئۆگىنىپ، بىر-بىرىمىزگە كۈچ ئاتا قىلايلى",
    "كەلگۈسىمىز — بىلىم نۇرى بىلەن يورۇق، تېخنىكا چىرىغى بىلەن پارلاق!"
  ];


  return (
    <>
      <Helmet >
        <title >About | KalBiL EduCourses</title>
        </Helmet>
        <meta name="description" content="Learn more about KalBiL EduCourses and our mission." />
      

      <section className=" p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-full flex justify-center mt-2">
              <img
                src="images/image05.png"
                 alt="KalBiL Logo"
                 className="w-48 md:w-64 lg:w-72 max-w-full h-auto object-contain"
                 />
            </div>

            <h2 className="text-4xl mt-10 sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-300 dark:to-emerald-300" style={{ fontFamily: 'Amiri, serif' }}>
              ھەققىدە KalBiL EduCourses  
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Amiri, serif' }}>
              «بىلىم — كەلگۈسىمىزنىڭ نۇرى، تېخنىكا — قەدەملىرىمىزنىڭ كۈچى.»
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <Link key={t.id} to={`/topic/${t.id}`}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
                >
                  <div className="h-40 sm:h-48 w-full overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2" style={{ fontFamily: 'Amiri, serif' }}>{t.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3" style={{ fontFamily: 'Amiri, serif' }}>
                      {t.description.replace(/\n/g, " ")}
                    </p>
                    <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold" style={{ fontFamily: 'Amiri, serif' }}>تەپسىلاتىنى كۆرۈش →</div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-36 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-500 dark:from-emerald-300 dark:to-blue-300" style={{ fontFamily: 'Amiri, serif' }}>
              «تېخنىكا بىلەن قانىتىمىزنى ئېچىپ، بىلىم بىلەن كەلگۈسىمىزنى يورۇتايلى.»
            </h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 font-serif" style={{ fontFamily: 'Amiri, serif' }}>
                نىڭ نىشانى، ئۇيغۇرلارنىڭ بىلىم ۋە تېخنىكىدا ئالغا قەدەم ئېلىپ ئىلگىرلىشى ئۈچۈن — KalBiL
            </p>
          </motion.div>

          {/* Slider Album with Quotes */}
          <div className="mt-12">
            <Slider {...sliderSettings}>
              {sliderItems.map((item, idx) => (
                <div key={idx} className="px-2 relative">
                  <img
                    src={item.src}
                    alt={`slide-${idx}`}
                    className="rounded-xl w-full h-64 sm:h-80 object-cover shadow-md"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-md text-sm sm:text-base font-serif">
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
            className="mt-12 space-y-3 text-center"
          >
            {missionLines.map((line, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                {line}
              </p>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}