// src/components/Blog81.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Blog81 = () => {
  // باش رەسىم
  const HeaderImage = () => (
    <div className="relative w-full h-80 rounded-2xl mb-10 overflow-hidden shadow-xl">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapSAtvAtsft2d5FYueXGzychsWNEVv6t21Q&s"
        alt="AI Evolution 2026"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = "https://www.sbbit.jp/article/image/177143/bit202512231114432156.jpg";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-8 left-8 text-white max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-[UKIJ Tuz]">
          ئەسلى سۈنئىي ئەقىل: سۈنئىي ئەقىل 2026-يىلى قانداق تەرەققىي قىلىدۇ؟
        </h1>
        <p className="text-lg opacity-90">مۇئەللىپ: KeLBiL | 2026-يىلى 1-ئاينىڭ 6-كۈنى</p>
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
        <div className="hidden bg-gray-50 text-center py-2 text-xl text-gray-600">
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

  const Section = ({ title, ja, ug, children, illustration = null, index }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-5 text-gray-800 font-[UKIJ Tuz]">{title}</h2>
      
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
        <div className="mb-10">
          <p className="text-gray-800 font-[UKIJ Nasq] text-2xl leading-relaxed mb-3">
            ئەسلى سۈنئىي ئەقىل ئۆتكەن بىر قانچە يىلدا بارغانسېرى ئەقىللىق بولۇپ قالدى، ئەمما ئۇنىڭ نېمە قىلالايدىغانلىقىلا ئەمەس، بەلكى بىزنىڭ ئۇنىڭغا قانداق مۇئامىلە قىلىدىغانلىقىمىزمۇ ئۆزگىرىشى مۇمكىن. «ئادەتتىكى ۋەزىپىلەر» نىڭ - خىزمەت ۋە بوش ۋاقىتنىڭ - تەبىئىتى ئاستا-ئاستا ئۆزگىرىشكە باشلىغاندەك قىلىدۇ، ھەتتا بىز بۇنى بايقىماي تۇرۇپمۇ.
          </p>
          <div className="pt-3 border-t border-gray-200">
            <p className="text-gray-600 text-2xl leading-relaxed" dir="ltr">
              AI has grown smarter over recent years—not just in what it can do, but in how we interact with it. Even without noticing, the nature of "routine tasks" in work and leisure is gradually shifting.
            </p>
          </div>
        </div>

        {/* سىن تەھرىرلەش AI */}
        <Section
          title="ئىنكاس يېزىشتىن تارتىپ ئېكسپورت قىلىشقىچە بولغان ھەممە نەرسىنى بىر تەرەپ قىلغىلى بولىدىغان سىن تەھرىرلەش سۈنئىي ئەقىل"
          ug="سىن تەھرىرلەش ئەنئەنىۋى جەھەتتىن سەۋرچانلىق ۋە ۋاقىت جېڭى بولۇپ كەلگەن. AI تولۇق يولغا قويۇلغاندا، خىزمەت ئېقىمى زور دەرىجىدە ئۆزگىرىدۇ. سۈنئىي ئەقىل كېسىشلەرنى رەتلەپ، ھەتتا تەخمىنەن تەھرىرلەشنى تاماملايدۇ. يەنە YouTube، تىك قىسقا فىلىملەر ۋە سىيرىلما كۆرسىتىش قاتارلىق ھەر خىل سۇپىلار ئۈچۈن ئاپتوماتىك ھالدا تاماملانغان سىنلارنى يېزىش مۇمكىن بولىدۇ."
          ja="Video editing has long been time-consuming. With AI, you can give a script like 'Intro → Explanation → Summary,' and AI handles cuts, fills gaps with stock footage, and exports tailored versions for YouTube, Shorts, and slides—automatically."
          index={1}
        >
          <Illustration
            src="https://static.wixstatic.com/media/cc2b56_fdc234aac38049159b5988c03e1fb55f~mv2.webp/v1/fill/w_640,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc2b56_fdc234aac38049159b5988c03e1fb55f~mv2.webp"
            alt="AI Video Editing Interface"
            caption="Descript، Runway ML قاتارلىق AI سىن تەھرىرلەش قوراللىرى"
            index={1.1}
          />
        </Section>

        {/* RAG */}
        <Section
          title="RAG پەردە ئارقىسىدا ئادەتتىكى ئىشقا ئايلىنىۋاتىدۇ"
          ug="RAG سۈنئىي ئەقىلنىڭ ھۆججەتلىرىڭىزنى ئوقۇشىغا يول قويىدىغان سىستېما. 2026-يىلغا بارغاندا، ئۇ ئادەتتىكى، پەردە ئارقىسىدىكى بىر تەركىبكە ئايلىنىشى مۇمكىن. ئېلېكترونلۇق خەتلەرنى تەشكىللىگەندە ياكى ھۆججەتلەرنى ياسىغاندا، سۈنئىي ئەقىلنىڭ سانلىق مەلۇماتلىرىڭىزنى ئوقۇشى ئادەتتىكى ئىشقا ئايلىنىشى مۇمكىن."
          ja="RAG (Retrieval-Augmented Generation) lets AI read your private docs. By 2026, it’ll be invisible—users won’t know the term but will rely on AI to recall past emails, meeting notes, or project files seamlessly."
          index={2}
        >
          <Illustration
            src="https://www.deepchecks.com/wp-content/uploads/2024/12/img-the-architecture-agentic.jpg"
            alt="RAG Architecture Diagram"
            caption="RAG: سۈنئىي ئەقىل + شەخسىي مەلۇمات بازىسى"
            index={2.1}
          />
        </Section>

        {/* شەخسىي سۈنئىي ئەقىل */}
        <Section
          title="سىزنىڭ شەخسىي سۈنئىي ئەقىلىڭىز پاراڭلىشىش تارىخى ۋە خاتىرە فۇنكسىيەلىرى بىلەن ئۆسىدۇ"
          ug="بۇ ئىلگىرىلىگەنسىرى، ئۇ «ھەر بىر پاراڭلىشىش» ئەمەس، بەلكى «كىشى» بىلەن مۇئامىلە قىلىشقا ئوخشاش خاتىرىلەرنى ساقلايدۇ. RAG ۋە خاتىرە بىرلەشتۈرۈلگەندە، بىز ئۆزىگە خاس بىلىم بازىسىغا ئىگە سۈنئىي ئەقىل ئىدىيەسىگە يېقىنلىشىمىز."
          ja="Future AI will remember not just facts, but your style: 'You prefer concise reports,' 'Family plans matter in Q3.' Combined with RAG, it becomes a true extension of your thinking—referencing past chats and docs contextually."
          index={3}
        >
          <Illustration
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-QLZUstORyuXDOWDvZcVyRYVNaZ3C1fPdw&s"
            alt="Personal AI with Memory"
            caption="شەخسىي سۈنئىي ئەقىل — سۆھبەت ۋە ھۆججەتلەرنى بىرلەشتۈرىدۇ"
            index={3.1}
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
            سىن تەھرىرلەش AI، RAG، ۋە خاتىرە فۇنكسىيەلىرى دۇنيانى بىردەمدىلا ئۆزگەرتىدىغان تېخنىكىلار ئەمەس، بەلكى ئاستا-ئاستا بىزنىڭ ئىشلەش ۋە ئويلىنىش ئۇسۇلىمىزغا سىڭىپ كىرىدىغان ئۆزگىرىشلەر. بىز بۇنى بايقىماسلىقىمۇ مۇمكىن، لېكىن بىر قانچە يىلدىن كېيىن «ئىلگىرى بۇنداق قىلغان ئىدىق» دەپ ھېس قىلىمىز.
          </p>
        </motion.div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 text-2xl font-[UKIJ Nasq]">
            سۈنئىي ئەقىل — بىزنىڭ قورالىمىز، ھەمراھىمىز، ھەتتا ئوي-پىكىرىمىزنىڭ داۋامى.
          </p>
          <p className="mt-1 text-gray-600 text-2xl" dir="ltr">
            AI is not just a tool—it’s becoming an extension of how we think and create.
          </p>
          <p className="mt-2 text-xl text-gray-400">© 2026 • KeLBiL • سۈنئىي ئەقىل ۋە كەلگۈسى</p>
        </div>
      </div>
    </div>
  );
};

export default Blog81;