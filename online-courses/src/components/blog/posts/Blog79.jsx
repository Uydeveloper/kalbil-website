// src/components/Blog79.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Blog79 = () => {
  // رەسىم كومپونېنتى (ئانىماتسىيە + خاتالىققا قارشى)
  const BlogImage = ({ src, alt, caption, order }) => (
    <motion.div
      className="my-6 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: order * 0.1 }}
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
          <div className="bg-white/90 py-1.5 px-3 text-xs text-gray-700 font-medium text-center">
            {caption}
          </div>
        )}
      </div>
    </motion.div>
  );

  // ئابزاس كومپونېنتى
  const Paragraph = ({ children, ja, index }) => (
    <div className="mb-8">
      <p className="text-gray-800 font-[UKIJ Nasq] text-2xl leading-relaxed">{children}</p>
      <div className="mt-2 pt-2 border-t border-gray-200">
        <p className="text-gray-600 text-2xl leading-relaxed" dir="ltr">{ja}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-8" dir="ltr">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8" dir="rtl">
        
        {/* باش رەسىم */}
        <motion.div
          className="relative w-full h-72 rounded-xl mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://www.lhc-closer.es/webapp/files/1434842690_2c48b30b2f3514d08324b8792b68f06f.gif"
            alt="Higgs Boson Event Display - CERN"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-[UKIJ Tuz]">ھىگگىس بوزونى نېمە؟</h1>
            <p className="text-lg opacity-90">ئۇ بىزگە ماسسا بېرىدىغان خۇدا زەررىسى</p>
          </div>
        </motion.div>

        {/* كىرگۈزۈش */}
        <Paragraph ja="Do you know the Higgs boson? It's said to hold the key to unlocking the universe's mysteries. Though complex, we explain it as simply as possible.">
          سىز ھىگگىس بوزونى ھەققىدە ئاڭلىغانمۇ؟ ئۇ ئالەمنىڭ سىرلىرىنى ئېچىشنىڭ ئاچقۇچى دېيىلىدۇ. بۇ زەررىچىنى ئادەتتىكى كىشىلەرنىڭ چۈشىنىشى تەس. بۇ قېتىم بىز ئۇنى ئىمكانقەدەر ئاددىي چۈشەندۈرۈپ بېرىمىز.
        </Paragraph>
        <BlogImage
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheRX1HW8Upl1gUTRZmxl8mixzy23oxEJSTbdEPCsFnO3dIZExmClVf86hS9UCDYxggm9ip5znyqxPYAAV3v9RjKZTVw2nDmsYvRFPbpm-hejCVMbKnNEIMq2vv2ddDQBFGVoLyg8E0tkuU/s1600/Nobelprize.org+2013-10-08+17-58-49.png"
          alt="Peter Higgs and Francois Englert - Nobel Prize"
          caption="پېتېر ھىگگىس ۋە فرانسوا ئەنگلېر — 2013-يىلى نوبېل مۇكاپاتى"
          order={1}
        />

        {/* ئېلېمېنتار زەررىچىلەر */}
        <Paragraph ja="The most fundamental building blocks of the universe are called elementary particles. They include matter particles, force carriers, and the Higgs boson—which gives mass.">
          دۇنيامىزنى تەشكىل قىلىدىغان نەرسىلەرنىڭ ئەڭ كىچىكى ۋە ئەڭ ئاساسىيسى ئېلېمېنتار زەررىچىلەر دەپ ئاتىلىدۇ. ئۇلار «ماددىنى شەكىللەندۈرىدۇ»، «كۈچ يەتكۈزىدۇ» ۋە «ماسسا بېرىدۇ». بۇلارنىڭ ئىچىدە، ماسسا بېرىدىغان زەررىچە ھىگگىس بوزونى.
        </Paragraph>
        <BlogImage
          src="https://sites.iiserpune.ac.in/~ehep/resources/slider22.gif"
          alt="Standard Model of Particle Physics"
          caption="زەررىچىلەر فيزىكىسىنىڭ «ستاندарт مودېلى» — ھىگگىس بوزونى تۆۋەندىكى ئوتتۇرىدا"
          order={2}
        />

        {/* ماسسىسى يوقلۇق مەسىلىسى */}
        <Paragraph ja="Before the Higgs, physicists assumed elementary particles had no mass—it made equations simpler. But this contradicted reality: everything around us has mass!">
          ئەمەلىيەتتە، ھىگگىس بوزونىنىڭ مەۋجۇتلۇقى بايقالغۇچە، ئېلېمېنتار زەررىچىلەرنىڭ ماسسىسى يوق دەپ قارالغان. بۇ قولايلىق چۈشەندۈرۈش ئىدى. قانداقلا بولمىسۇن، ئەگەر ئېلېمېنتار زەررىچىلەرنىڭ ماسسىسى بولمىسا، ھەر خىل زىددىيەتلەر كېلىپ چىقىدۇ. ئەتراپىمىزدا ماسسىسى يوق جىسىملار يوق دېيەرلىك، شۇنداقمۇ؟
        </Paragraph>
        <BlogImage
          src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/BE49/production/_89331784_lhc-tunnel.jpg"
          alt="LHC Tunnel at CERN"
          caption="CERN نىڭ LHC تونېلى — دۇنيانىڭ ئەڭ چوڭ زەررىچىلەر تەجىربىلىكى"
          order={3}
        />

        {/* ماسسا ئۇقۇمى */}
        <Paragraph ja="Mass is not weight—it’s resistance to motion. Higgs field fills the vacuum; particles moving through it 'feel drag,' which we perceive as mass.">
          ماسسا ئېغىرلىقنى ئەمەس، بەلكى ھەرىكەت قىلىشنىڭ قىيىنلىق دەرىجىسىنى بىلدۈرىدۇ. ۋاكۇئۇم ھىگگىس زەررىچىلىرى بىلەن تولدۇرۇلغان بولۇپ، باشقا ئېلېمېنتار زەررىچىلەرنىڭ ئۇلار ئارقىلىق ئۆتۈشىنى قىيىنلاشتۇرىدۇ. ھەرىكەت قىلالماسلىقنى بىز ئېغىرلىقسىزلىق دەپ ئاتايمىز.
        </Paragraph>
        <BlogImage
          src="https://media.licdn.com/dms/image/v2/C5112AQH8yfqSpsvjWQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1578756787669?e=2147483647&v=beta&t=hJ-zbLH6mISBu63S9rAncYqDUWuH8q88m2SCLMe-89I"
          alt="Higgs Field Analogy - Scientists in Syrup"
          caption="تەسەۋۋۇر: ئالىملەر شېرەب ئىچىدە يۈرۈش — ھىگگىس مەيدانىنىڭ تەسىرى"
          order={4}
        />

        {/* خۇدا زەررىسى */}
        <Paragraph ja="Without the Higgs field, all particles would zip around at light speed—no atoms, no stars, no us. Hence, 'God Particle.' The universe’s structure depends on it.">
          ئەگەر ھىگگىس زەررىسى بولمىغان بولسا، دۇنيادىكى ھەممە نەرسە ئۆزىنىڭ ماسسىسىنى يوقىتىپ، نۇرنىڭ سۈرئىتىدە ھەرىكەت قىلاتتى. يەر شارى ۋە ئىنسانىيەت مەۋجۇت بولماسلىقى مۇمكىن. شۇڭا، ھىگگىس زەررىچىسى خۇدا زەررىچىسى دەپ ئاتىلىدۇ.
        </Paragraph>
        <BlogImage
          src="https://home.cern/sites/home.web.cern.ch/files/image/inline-images/old/atlas-.jpg"
          alt="ATLAS Detector - Higgs Discovery"
          caption="ATLAS دېتېكتورى — 2012-يىلى ھىگگىس بوزونى بايقالغان جاي"
          order={5}
        />

        {/* بايقالىش ۋە نوبېل مۇكاپاتى */}
        <Paragraph ja="In 2012, CERN announced the discovery of a particle matching the Higgs boson. Peter Higgs and François Englert won the 2013 Nobel Prize in Physics.">
          ھىگگىس زەررىچىسىنىڭ نەزەرىيە جەھەتتىن مەۋجۇت ئىكەنلىكىگە ئىشەنگەن بولسىمۇ، ئۇ ئۇزۇن مەزگىلگىچە ئېنىق ئەمەس ئىدى. قانداقلا بولمىسۇن، 2012-يىلى، ياۋروپا يادرو تەتقىقات تەشكىلاتى ھىگگىس زەررىچىسىگە ئوخشايدىغان بىر نەرسە ئاخىرى بايقىدى. ئۇنىڭ مەۋجۇتلۇقىنى نامايان قىلغان پېتېر ھىگگىس 2013-يىلى فىزىكا كەسپىدە نوبېل مۇكاپاتىغا ئېرىشكەن.
        </Paragraph>
        <BlogImage
          src="https://www.nobelprize.org/images/12692-landscape-gallery.jpg"
          alt="Higgs Nobel Prize Ceremony"
          caption="2013-يىلى نوبېل مۇكاپاتى مۇراسىمى — ستوكگولم"
          order={6}
        />

        {/* خۇلاسە */}
        <motion.div
          className="mt-10 text-2xl p-6 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-3 font-[UKIJ Tuz]">خۇلاسە</h2>
          <p className="text-2xl max-w-2xl mx-auto font-[UKIJ Nasq]">
            ھىگگىس بوزونى — ماسسا بېرىدىغان كىيىم بولۇپ، بارلىق زەررىچىلەر ئۇنى كىيىپ، دۇنيادا «ئېغىرلىق» ھېس قىلىدۇ. بۇ بايقاش — ئالەمنىڭ سىرلىرىغا قاراشنىڭ باشلىنىشى.
          </p>
        </motion.div>

        {/* ئاخىرلاشتۇرۇش */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            «ئالەم نامەلۇم. لېكىن بىز ئۇنى ئىزدەۋاتىمىز.»
          </p>
          <p className="mt-1 text-gray-600 text-2xl" dir="ltr">
            “The universe is unknown—but we are seeking it.”
          </p>
          <p className="mt-2 text-xl text-gray-400">© 2026 •    بلوگى KeLBiL </p>
        </div>
      </div>
    </div>
  );
};

export default Blog79;