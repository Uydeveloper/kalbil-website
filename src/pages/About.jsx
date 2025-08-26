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
                src={`${process.env.PUBLIC_URL}/images/image05.png`}

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.slogan}
                </p>

                {/* 🔑 شۇ يەردىكى id بىلەن topicData دىكى id بىردەك بولۇشى كېرەك */}
                <Link
                  to={`/topic/${item.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
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