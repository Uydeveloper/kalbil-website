// Blog110.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShoppingBag, Laptop, Home, Brain, Users, TrendingUp, Sparkles } from 'lucide-react';

const Blog110 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-uyghur leading-relaxed">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-4xl font-bold text-blue-800 mb-3" >
          2026-يىل: «AI ئاگېنتلىرى» نىڭ يىلتىز تارتىدىغان يىلى
        </h1>
        <p className="text-lg text-gray-600 italic" >
          2025-يىلدىكى گۈللىنىشتىن كېيىن، يېڭى دەۋر باشلاندى
        </p>
      </motion.header>

      {/* Greeting & Intro */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-blue-500"
      >
        <p className="mb-3">
          <strong>يېڭى يىلىڭىزغا مۇبارەك بولسۇن!</strong>
        </p>
        <p>
          2025-يىل «AI ئاگېنتلىرىنىڭ تۇنجى يىلى» دەپ ئاتالغان بولۇپ، تېخنىكا دۇنياسىدا زور غۇلغۇلا قوزغىغان. ھازىر، 2026-يىلغا قەدەم قويغاندا، بۇ تېخنىكا ئاخىرى تەجرىبىخانىدىن چىقىپ، كۈندىلىك تۇرمۇشىمىز ۋە خىزمەت ئورنىمىزغا تولۇق سىڭىپ كىرىشكە باشلىدى.
        </p>
        <p className="mt-3 font-medium">
          قىسقىچە قىلىپ ئېيتقاندا، <strong>AI ئاگېنتى</strong> — «ئىنسانلار ئارقىلىق ئالاقە قىلغاندا، پىلان تۈزەلەيدىغان، قوراللارنى ئىگىلىيەلەيدىغان ۋە ۋەزىپىنى تاماملىيالايدىغان ئەقلىي پروگرامما».
        </p>
      </motion.section>

      {/* Section 1: How is it different? */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Sparkles size={24} /> 1. ئالدى بىلەن، ئۇ ئىلگىرىكى AI دىن قانداق پەرقلىنىدۇ؟
        </h2>
        <p className="mb-4">
          ئىلگىرىكى پاراڭلىشىش AI (مەسىلەن، ChatGPT نىڭ دەسلەپكى نۇسخىسى) بىزنىڭ سوئاللىرىمىزغا «جاۋاب» بېرەتتى — «بىلىملىك ​​لۇغەت».
        </p>
        <p className="mb-4">
          ئۇنىڭ ئەكسىچە، <strong>AI ئاگېنتلىرى</strong> پەقەت جاۋاب بېرىپلا قالماي، يەنە «ئەمەلىيەتتە ھەرىكەت قىلىدۇ». رەقەملىك خىزمەتدىشى ياكى ياردەمچىسىگە ئوخشاش، ئۇ ئاپتوماتىك ھالدا تۆۋەندىكى ئۈچ قەدەمنى تەكرارلايدۇ:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            { icon: <Brain size={20} />, title: "كۆرۈش (Perception)", desc: "نۆۋەتتىكى ئەھۋال ۋە زۆرۈر سانلىق مەلۇماتلارنى تەكشۈرىدۇ." },
            { icon: <Users size={20} />, title: "ئويلاش (Reasoning)", desc: "نىشانغا يېتىش ئۈچۈن ئىستراتېگىيە تۈزۈپ، قارار چىقىرىدۇ." },
            { icon: <TrendingUp size={20} />, title: "ھەرىكەت قىلىش (Action)", desc: "ئېلېكترونلۇق خەت ئەۋەتىش، زاكاز قىلىش، تور بېكەتلىرىنى باشقۇرۇش." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded shadow-sm border">
              <div className="text-blue-600 mb-2">{item.icon}</div>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Section 2: Use Cases in 2026 */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 2026: ئىشلىتىش ئەھۋالىنىڭ دائىرىسى بۇ دەرىجىدە كېڭىيىدۇ</h2>
        <p className="mb-4">
          ئۆتكەن يىلغىچە «كەلگۈسىدىكى نەرسە» دەپ قارالغان نەرسە بۇ يىل «كۈندىلىك قورال»غا ئايلىنىۋاتىدۇ. بىز سۈنئىي ئەقىل ئاگېنتلىرىنىڭ ئىنسانلارنىڭ «زىرىكتۈرىدىغان» دەپ قارىغان ۋەزىپىلەرنى بىر تەرەپ قىلىدىغان ئۇسلۇبنى قوللىنىشىمىز مۇمكىن.
        </p>

        <div className="space-y-5">
          {[
            {
              icon: <Calendar size={24} className="text-blue-600" />,
              title: "شەخسىي كاتىپىڭىز سۈپىتىدە 🗓️",
              desc: "«كېلەر ھەپتە بوش ۋاقتىم بولغاندا چىش دوختۇرىغا كۆرۈش ۋاقتى بەلگىلەڭ» دەپ سورىسىڭىزلا، كالېندار تەكشۈرۈش، زاكاز قىلىش، تەستىقلەش بارلىق ئىشلارنى ئارقا كۆرۈنۈشتە قىلىدۇ."
            },
            {
              icon: <ShoppingBag size={24} className="text-green-600" />,
              title: "مال سېتىۋېلىش مۇلازىمەتچىسى بولۇش سۈپىتى بىلەن 🛒",
              desc: "كۆپ دۇكانلارنىڭ مەھسۇلاتلىرىنى سېلىشتۇرۇپ، ئەڭ ياخشى باھانى تاپىدۇ، ھەتتا مال يەتكۈزۈشنى تەشكىللەيدۇ."
            },
            {
              icon: <Laptop size={24} className="text-purple-600" />,
              title: "خىزمەت ھەمراھى بولۇش سۈپىتى بىلەن 💻",
              desc: "مۇرەككەپ بازار تەتقىقات سانلىق مەلۇماتلىرىنى دوكلاتقا توپلاش، كۈندىلىك كود يېزىش — بۇلار ئۇلارنىڭ ئالاھىدىلىكىگە ئايلاندى."
            },
            {
              icon: <Home size={24} className="text-orange-600" />,
              title: "ئەقىللىق شەھەرلەرنىڭ ئاساسى بولۇش سۈپىتى بىلەن 🏠",
              desc: "ئۆي ئېنېرگىيەسىنى باشقۇرۇشتىن تارتىپ يول چىرىغىنى كونترول قىلىشقىچە، سۈنئىي ئەقىل تۇرمۇشىمىزنى تېخىمۇ راھەت قىلىش ئۈچۈن كۆرۈنمەيدىغان رول ئويناشقا باشلىدى."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex gap-4 p-4 bg-gray-50 rounded-lg"
            >
              {item.icon}
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 3: Human as Supervisor */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-10 bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-3">3. بىز «ئەقىل نازارەتچىسى» بولۇشىمىز كېرەك</h2>
        <p className="mb-3">
          2026-يىلى، سۈنئىي ئەقىل ۋاكالەتچىلىرى تېخىمۇ ئەقىللىق ۋە قولايلىق بولۇپ قالىدۇ، ئەمما بىز دىققەت قىلىشىمىز كېرەك بولغان بىر نەرسە بار: سۈنئىي ئەقىل بەزىدە خاتالىق ئۆتكۈزۈپ، كۈتۈلمىگەندە ھەرىكەت قىلىدۇ.
        </p>
        <p className="mb-3">
          كەلگۈسىدە بىزگە كېرەكلىك ماھارەت ھەممە ئىشنى ئۆزىمىز قىلىش ئەمەس، بەلكى «<strong>ئەقىل يېتەكچىسى</strong> (نازارەتچىسى)» بولۇشتۇر.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>ئەقىل تەرىپىدىن تۈزۈلگەن ئىستراتېگىيە (پىلان) مۇۋاپىقمۇ؟</li>
          <li>ئاخىرقى نەتىجە ئىنسانلارنىڭ ئەخلاقى ۋە ھېسسىياتىغا ماس كېلەمدۇ؟</li>
        </ul>
        <p className="mt-3 font-medium">
          بۇ مۇناسىۋەت سۈنئىي ئەقىل ۋە ئىنسانلارنىڭ ئەڭ ياخشى كوماندىغا ئايلىنىشىنىڭ سىرى.
        </p>
      </motion.section>

      {/* Final Analogy */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mb-10 text-center py-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">ئاخىرىدا: «ئىنتايىن ھەيران قالارلىق تازىلاش روبوتى» نى تەسەۋۋۇر قىلىپ بېقىڭ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-red-600">ئالدىنقى سۈنئىي ئەقىل</h3>
            <p>سىز سورىغان ھەر قانداق نەرسىنى ئېيتىپ بېرەلەيدىغان «ھەممىنى بىلىدىغان» ئادەم.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-green-600">سۈنئىي ئەقىل ئاگېنتى</h3>
            <p>ئۆزى ئويلايدىغان ۋە ئۆيىڭىزنى تازىلايدىغان «ئىنتايىن ھەيران قالارلىق تازىلاش روبوتى».</p>
          </div>
        </div>
        <p className="mt-6 text-gray-700">
          سىز تازىلاش روبوتىغا «ئۆيىڭىزنى تازىلاڭ» دېسىڭىز، ئۇ ئەخلەتلەرنى تېپىپ تازىلايدۇ، شۇنىڭ بىلەن بىر ۋاقىتتا ئۆي جاھازلىرىدىن قېچىپ تۇرىدۇ. سۈنئىي ئەقىل ئاگېنتلىرى بۇنى «تور خىزمىتى» ۋە «مۇرەككەپ سودا» ئۈچۈن قىلىدۇ.
        </p>
      </motion.section>

      {/* Closing Question */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="text-center text-gray-700 text-lg font-medium py-6 border-t"
      >
        <p>2026-يىلى بۇ تېخىمۇ تەرەققىي قىلغان «يېڭى ھەمراھ» نى قانداق ئىشلىتىسىز؟</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-black hover:underline">X</a>
          <a href="#" className="text-pink-600 hover:underline">Instagram</a>
          <a href="#" className="text-blue-800 hover:underline">LinkedIn</a>
        </div>
        <p className="text-sm text-gray-500 mt-6">© 2026 | KelBiL AI Developer</p>
      </motion.footer>
    </div>
  );
};

export default Blog110;