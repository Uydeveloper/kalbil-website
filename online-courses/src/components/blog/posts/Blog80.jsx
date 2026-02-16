// src/components/Blog80.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Blog80 = () => {
  // باش رەسىم
  const HeaderImage = () => (
    <div className="relative w-full h-80 rounded-2xl mb-10 overflow-hidden shadow-xl">
      <img
        src="https://robertlovespi.net/wp-content/uploads/2017/11/4-duoprism.gif?w=584"
        alt="Tesseract - 4D Hypercube"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-8 left-8 text-white max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-[UKIJ Tuz]">
          ئۆلچەم دېگەن نېمە؟ رېئاللىق قانچە ئۆلچەمدىن تەركىب تاپىدۇ؟
        </h1>
        <p className="text-lg opacity-90">مۇئەللىپ: KeLBiL | 2025-يىلى 6-ئاينىڭ 17-كۈنى</p>
      </div>
    </div>
  );

  // رەسىم كومپونېنتى
  const Illustration = ({ src, alt, caption, index }) => (
    <motion.div
      className="my-8 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 max-w-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden bg-gray-50 text-center py-2 text-sm text-gray-600">
          {alt}
        </div>
        {caption && (
          <div className="bg-white/90 py-1.5 px-3 text-xl text-gray-700 font-medium text-center">
            {caption}
          </div>
        )}
      </div>
    </motion.div>
  );

  // بۆلەك كومپونېنتى
  const Section = ({ title, ja, ug, children, illustration = null, index }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-5 text-gray-800 font-[UKIJ Tuz]">{title}</h2>
      
      <p className="text-gray-800 font-[UKIJ Nasq] text-2xl leading-relaxed mb-3">{ug}</p>
      
      <div className="pt-3 border-t border-gray-200">
        <p className="text-gray-600 text-2xl leading-relaxed" dir="ltr">{ja}</p>
      </div>

      {children}

      {illustration && <Illustration {...illustration} index={index} />}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-8" dir="ltr">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8" dir="rtl">
        <HeaderImage />

        {/* كىرگۈزۈش */}
        <Section
          title="كىرىش سۆز: «ئۆلچەم» سۆزىنىڭ سىرى"
          ug="كۈندىلىك تۇرمۇشىمىزدا بىز دائىم «باشقا سەۋىيەدىكى قابىلىيەت» ياكى «ئىككى ئۆلچەملىك پېرسوناژلارنىڭ مەستانىسى» دېگەندەك سۆزلەرنى ئىشلىتىمىز. قانداقلا بولمىسۇن، «ئۆلچەم» ئەمەلىيەتتە ماتېماتىكا ۋە فىزىكىدا ئىنتايىن مۇھىم ۋە چوڭقۇر ئۇقۇم. بىز ھەر كۈنى ئادەتتىكىدەك ئىشلىتىدىغان بۇ سۆزنىڭ ئارقىسىدا، بىز ھېس قىلىدىغان دۇنيانىڭ ئاساسى ياتىدۇ."
          ja="We often say things like 'talent on another level' or 'I love 2D characters.' But 'dimension' is actually a deep concept in math and physics—one that underlies our very perception of reality."
          index={0}
        >
          <Illustration
            src="https://digitash.com/wp-content/uploads/2018/07/The-Geometry-of-Fourth-Dimension-and-Space-Time-Continuum-three-dimensions.jpg"
            alt="Levels of Dimensions - 0D to 3D"
            caption="نۆلدىن ئۈچ ئۆلچەمگىچە — نۇقتا، سىزىق، يۈز، كۆلەم"
            index={0.1}
          />
        </Section>

        {/* ئېۋكلىد ۋە 1-3 ئۆلچەم */}
        <Section
          title="ئېۋكلىدتىن باشلانغان بوشلۇقنىڭ ئۆلچىمى: 1-ئۆلچەم، 2-ئۆلچەم ۋە 3-ئۆلچەم"
          ug="«ئۆلچەم» ئۇقۇمىنى قەدىمكى گرېتسىيە ماتېماتىكىسى ئېۋكلىدنىڭ گېئومېتىرىيەسىدىن سۈرۈشتۈرۈشكە بولىدۇ. مەسىلەن، بىر نۇقتىنىڭ چوڭلۇقى يوق ۋە ئۇ نۆل ئۆلچەملىك بىر گەۋدە. بىر نۇقتىدىن سىزىق سىزىش ئۇنى 1 ئۆلچەملىك، بىر يۈزە ياساش ئۇنى 2 ئۆلچەملىك، قاتتىق جىسىم ياساش ئۇنى 3 ئۆلچەملىك قىلىدۇ."
          ja="The concept originates with Euclid: a point (0D), line (1D), plane (2D), and solid (3D). Our world is fundamentally 3D—length, width, and height define every object we interact with."
          index={1}
        >
          <Illustration
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPos8IIKxFZi12IWxhjXUjk7_zAGLRDjq6A&s"
            alt="Euclid - Father of Geometry"
            caption="ئېۋكلىد — گېئومېتىرىيە ئاتاسى"
            index={1.1}
          />
        </Section>

        {/* تۆتىنچى ئۆلچەم: ۋاقىت */}
        <Section
          title="تۆتىنچى ئۆلچەم: ۋاقىت — نىسپىيلىك نەزەرىيىسىنىڭ ئىنقىلابى"
          ug="ئېينىشتېين 20-ئەسىردە نىسپىيلىك نەزەرىيىسىنى ئېلان قىلغاندا، ئۆلچەملەرگە بولغان چۈشەنچىمىز زور دەرىجىدە ئۆزگەردى. ئۇ «ۋاقىت» نى بوشلۇققا تەڭ دەپ قارىدى ۋە «ۋاقىت-ماكان» دېگەن يېڭى ئۇقۇمنى ئوتتۇرىغا قويدى."
          ja="Einstein revolutionized our view by unifying space and time into 'spacetime'—a 4D continuum where every event is pinpointed by (x, y, z, t)."
          index={2}
        >
          <Illustration
            src="https://us1.discourse-cdn.com/flex024/uploads/babylonjs/optimized/2X/f/f7e5d2676d30e9f9c999d63e9a9f636d3df72792_2_690x320.jpeg"
            alt="Spacetime Curvature by General Relativity"
            caption="نىسپىيلىك نەزەرىيىسى بويىچە بوشلۇق-ۋاقىت بۇرمىلىنىشى"
            index={2.1}
          />
        </Section>

        {/* بىز قايسى ئۆلچەمدە ياشايمىز؟ */}
        <Section
          title="بىز قايسى ئۆلچەملەردە ياشايمىز؟"
          ug="بىز بوشلۇقتا پەقەت ئۈچ ئۆلچەملىكنى بىۋاسىتە ھېس قىلالايمىز. بىز ۋاقىتنى سائەت ۋە خاتىرىلەر ئارقىلىق بىلسەكمۇ، بوشلۇقتا ئەركىن ھەرىكەت قىلالايدىغاندەك ۋاقىت ئىچىدە ئەركىن ھەرىكەت قىلالمايمىز."
          ja="We directly perceive only 3 spatial dimensions. Time flows in one direction—we can’t move freely through it like space."
          index={3}
        >
          <Illustration
            src="https://media.sketchfab.com/models/ee42d146c1e94f3b8804a1230c4dfe10/thumbnails/24986faf77594c39901d990cad1c5308/3651f39c7e9c471d97e0e0ab8b15624a.jpeg"
            alt="Light Cone in Spacetime"
            caption="ۋاقىت-ماكاندا يورۇقلۇق كونۇسى — ھادىسە چەكلىمىسى"
            index={3.1}
          />
        </Section>

        {/* دەرىجىدىن تاشقىرى سىم نەزەرىيىسى */}
        <Section
          title="دەرىجىدىن تاشقىرى سىم نەزەرىيەسى ۋە 10- ۋە 11 ئۆلچەملىك ئالەم"
          ug="دەرىجىدىن تاشقىرى سىم نەزەرىيىسى ماددىنىڭ ئەڭ كىچىك بىرلىكى «نۇقتا» ئەمەس، بەلكى «سىم» بولغان بىر نەزەرىيە. بۇ نەزەرىيەنىڭ ماتېماتىكىلىق جەھەتتىن توغرا بولۇشى ئۈچۈن، 10 (ياكى ھەتتا 11) ئۆلچەم تەلەپ قىلىنىدۇ."
          ja="String theory replaces point particles with vibrating 'strings,' requiring 10 or 11 dimensions for mathematical consistency—6 or 7 are 'compactified' at microscopic scales."
          index={4}
        >
          <Illustration
            src="https://i.sstatic.net/AEkJM.png"
            alt="Calabi-Yau Manifold - Compactified Dimensions"
            caption="كالابى-ياۋ مانىفولدى — يىغىلغان يۇقىرى ئۆلچەم"
            index={4.1}
          />
        </Section>

        {/* ماتېماتىكا ۋە پەلسەپە */}
        <Section
          title="ماتېماتىكىلىق ۋە پەلسەپىۋى نۇقتىدىن «ئۆلچەم» نىڭ ھەقىقىي تەبىئىتى"
          ug="ماتېماتىكىدا فراكتاللار پۈتۈن سان بولمىغان ئۆلچەملەرگە ئىگە. تەبىئەتتە كۆرۈلىدىغان مۇرەككەپ قۇرۇلمىلارنى فراكتال گېئومېتىرىيەسى ئارقىلىق تەسۋىرلىگىلى بولىدۇ. «ئۆلچەم» نىڭ مەۋجۇت ياكى ئۇقۇم ئىكەنلىكى توغرىسىدا پەلسەپىۋى سوئال بار."
          ja="Fractals have fractional dimensions (e.g., 1.26 for coastlines). Philosophically, is dimension real—or just a mental framework for modeling reality?"
          index={5}
        >
          <Illustration
            src="https://miro.medium.com/1*OtK7gREsd-3gan0f4gcDGQ.jpeg"
            alt="Mandelbrot Fractal - Non-integer Dimension"
            caption="ماندىلبروت فراكتالى — نۇرۇتقا مۇرەككەپ، ئۆلچەم بولسا 1.26"
            index={5.1}
          />
        </Section>

        {/* خۇلاسە */}
        <motion.div
          className="mt-12 p-6 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-3 font-[UKIJ Tuz]">خۇلاسە</h2>
          <p className="text-2xl max-w-2xl mx-auto font-[UKIJ Nasq]">
            «ئۆلچەم» — بۇ پەقەت ماتېماتىكىلىق ئۇقۇم ئەمەس، بەلكى بىزنىڭ دۇنيانى قانداق چۈشىنىدىغانلىقىمىزنى ئەكىس ئەتتۈرىدىغان ئەينەك. كۆرۈنمەيدىغاننىڭ مەۋجۇتلۇقىنى قوبۇل قىلىش، بىزنىڭ دۇنيا قارىشىمىزنى كېڭەيتىدۇ.
          </p>
        </motion.div>

        {/* ئاخىرلاشتۇرۇش */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            «رېئاللىقنىڭ قانچە ئۆلچىمى بار؟» — بۇ سوئال ئالەمنىڭ سىرى، ئەمما ئىنسان ئەقلىنىڭ چەكلىمىسىمۇ.
          </p>
          <p className="mt-1 text-gray-600 https://www.lhc-closer.es/webapp/files/1434842690_2c48b30b2f3514d08324b8792b68f06f.gif" dir="ltr">
            “How many dimensions is reality made of?” — A question of the cosmos, and of human cognition.
          </p>
          <p className="mt-2 text-xl text-gray-400">© 2025 • KeLBiL • فيزىكا ۋە فەلسەپە</p>
        </div>
      </div>
    </div>
  );
};

export default Blog80;