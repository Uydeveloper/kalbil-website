// Blog74.jsx
import React from 'react';
import { FaStar, FaBook, FaCompass, FaUser, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blog73 = () => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ug-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      className="max-w-4xl mx-auto px-4 py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
    >
      {/* باشلىق */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          كائىناتنىڭ كېڭىيىۋاتقانلىقى راستمۇ؟
        </motion.h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300">
          1929-يىلى خابل ئالىمىنىڭ بايقالىشى — كائىناتنىڭ چوڭ سىرى
        </p>
      </div>

      {/* باش ئەسلىدە */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-6 rounded-2xl mb-10 border border-indigo-700">
        <p className="text-2xl leading-relaxed">
          <strong>توغرا.</strong> 1929-يىلى ئامېرىكىلىق ئاستروفىزىكا ئالىمى <strong>ئېدوىن خابل</strong> ئالەمنىڭ كېڭىيىۋاتقانلىقىنى بايقىغان.
        </p>
      </div>

      {/* بۆلۈم 1: خابل ۋە ماونت ۋىلسون رەسەتخانىسى */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-blue-600 dark:text-blue-400 border-b pb-2 border-gray-200 dark:border-gray-700">
          خابلنىڭ بايقالىشى
        </h2>
        <p className="text-2xl leading-relaxed mb-4">
          خابل 1917-يىلى تاماملانغان، دۇنيادىكى ئەڭ چوڭ تېلېسكوپ بولغان
          <strong> ماونت ۋىلسون رەسەتخانىسىدىكى 2.5 مېتىرلىق نۇر قايتۇرۇش تېلېسكوپى</strong>
          ئارقىلىق ئۆزىمىزنىڭ سامان يولىدىن سىرتتىكى سامان يوللىرىنى تەتقىق قىلغان.
        </p>
        <p className="text-2xl leading-relaxed">
          ئۇ ھەر بىر سامان يولىنىڭ <strong>بىزدىن يىراقلىشىۋاتقانلىقى</strong> ۋە
          يىراقلىشىش سۈرئىتىنىڭ <strong>ئارىلىقى بىلەن مۇناسىۋىتلىكلىكى</strong>نى بايقالىغان.
          بۇ ئىلىم تارىختىكى ئەڭ چوڭ بايقالىشلارنىڭ بىرى بولۇپ قالدى.
        </p>
      </section>

      {/* بۆلۈم 2: دوپلېر ئېففېكتى ۋە قىزىل يۆتكىلىش */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-purple-600 dark:text-purple-400 border-b pb-2 border-gray-200 dark:border-gray-700">
          قىزىل يۆتكىلىش — دوپلېر ئېففېكتىنىڭ ئاسمان نۇخسىسى
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl mb-4">
          <p className="text-2xl italic">
            «پويىز يېقىنلىشىۋاتقاندا گۈدۈكى يۇقىرى، يىراقلىشىۋاتقاندا تۆۋەن.»
          </p>
        </div>
        <p className="text-2xl leading-relaxed mb-4">
          بۇ <strong>دوپلېر ئېففېكتى</strong> دەپ ئاتىلىدۇ. نۇر ھەم بىر خىل دولقۇن بولغاچقا،
          ئاسمان جىسىمى بىزدىن يىراقلىشىۋاتقاندا، نۇرنىڭ دولقۇن ئۇزۇنلۇقى ئۇزۇنلايىدۇ،
          يەنى <strong>قىزىل رەڭگە</strong> ئايلىنىدۇ.
        </p>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mb-4">
          <p className="font-bold text-red-800 dark:text-red-200">
            بۇ ھادىسە <strong>قىزىل يۆتكىلىش (Redshift)</strong> دەپ ئاتىلىدۇ.
          </p>
        </div>
        <p className="text-2xl leading-relaxed">
          ھەرىكەت سۈرئىتىنى بۇ <strong>قىزىل يۆتكىلىش مىقدارى</strong>نى ئۆلچەش ئارقىلىق بېكىتكىلى بولىدۇ.
        </p>
      </section>

      {/* بۆلۈم 3: خاببل قانۇنى ۋە خاببل تۇراقلىقى */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5 text-pink-600 dark:text-pink-400 border-b pb-2 border-gray-200 dark:border-gray-700">
          خاببل قانۇنى — كائىناتنىڭ كودى
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl mb-4">
          <p className="text-2xl">
            <strong>v = H₀ × d</strong>
          </p>
          <ul className="list-disc pr-6 mt-2 text-gray-800 dark:text-gray-200">
            <li><strong>v</strong> — سامان يولىنىڭ چېكىنىش سۈرئىتى</li>
            <li><strong>d</strong> — سامان يولى بىلەن بىزنىڭ ئارىلىقى</li>
            <li><strong>H₀</strong> — خاببل تۇراقلىقى (ھازىر ≈ 70 km/s/Mpc)</li>
          </ul>
        </div>
        <p className="text-2xl leading-relaxed">
          خاببلنىڭ دەسلەپكى ھېسابى خاتا چىققان بولسىمۇ،
          ھازىر بۇ تۇراقلىق <strong>نىسبەتەن توغرا</strong> بېكىتىلگەن.
          بۇ ئارقىلىق <strong>ناھايىتى يىراق گالاكتىكىلارنىڭ ئارىلىقى</strong>نىمۇ ھېسابلىغىلى بولىدۇ.
        </p>
      </section>

      {/* خۇلاسە */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl text-center mb-10">
        <h2 className="text-2xl font-bold mb-4">خۇلاسە</h2>
        <p className="text-2xl max-w-3xl mx-auto">
          كائىناتنىڭ كېڭىيىۋاتقانلىقى — پەقەت نەزەرىيە ئەمەس،
          بەلكى <strong>قىزىل يۆتكىلىش</strong> بىلەن ئىسپاتلانغان ئىلمىي ھەقىقەت.
          بۇ بايقالىش <strong>چوڭ پارتلاش</strong> نەزەرىيىسىنىڭ ئەڭ مۇھىم دەلىلىدۇر.
        </p>
      </section>

      {/* مەلۇمات قۇتۇسۇ */}
      <div className="flex flex-wrap justify-between items-center mt-8 text-sm text-gray-500 dark:text-gray-400 border-t pt-6">
        <div className="flex text-2xl items-center gap-2">
          <FaUser /> قاۋۇلجان
        </div>
        <div className="flex text-2xl items-center gap-2">
          {/* <FaCalendarAlt /> {formatDate('2026-01-07')} */} 2026-يىل 1-ئاي 7- كۇن 
        </div>
        <div className="flex text-2xl items-center gap-2">
          <FaStar /> كائىناتشۇناسلىق
        </div>
        <div className="flex text-2xl items-center gap-2">
          <FaCompass /> خاببل قانۇنى
        </div>
      </div>

      {/* تېگلەر */}
      <div className="mt-6 flex flex-wrap gap-2 justify-end">
        {['قىزىل يۆتكىلىش', 'دوپلېر ئېففېكتى', 'سامان يولى', 'چوڭ پارتلاش', 'كائىنات', 'ئاستروفىزىكا'].map((tag, i) => (
          <span key={i} className="px-3 text-2xl  py-1 bg-gray-200 dark:bg-gray-700 rounded-full ">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog73;