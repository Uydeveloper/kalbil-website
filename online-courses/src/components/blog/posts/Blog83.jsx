// src/components/Blog83.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Blog83 = () => {
  const HeaderImage = () => (
    <div className="relative w-full h-72 rounded-2xl mb-8 overflow-hidden shadow-xl">
      <img
        src="https://bigthink.com/wp-content/uploads/2022/11/Untitled_Artwork.gif?w=640"
        alt="Quantum Superposition"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-1 font-[UKIJ Tuz]">بىرلا ۋاقىتتا ئىككى ئورۇندا</h1>
        <p className="text-lg opacity-90">كۋانت ئۈستۈنكى ئورنىنىڭ سىرىنى ئېچىش</p>
        <p className="text-sm opacity-80 mt-1">   | 2026-يىلى 1-ئاينىڭ 9-كۈنى</p>
      </div>
    </div>
  );

  const Illustration = ({ src, alt, caption, index }) => (
    <motion.div
      className="my-6 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="overflow-hidden rounded-xl shadow-md border border-gray-200 max-w-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden bg-gray-50 text-center py-1.5 text-xl text-gray-600">
          {alt}
        </div>
        {caption && (
          <div className="bg-white/90 py-1 px-2 text-xl text-gray-700 text-center font-medium">
            {caption}
          </div>
        )}
      </div>
    </motion.div>
  );

  const Section = ({ en, ug, illustration = null, index }) => (
    <div className="mb-10">
      <p className="text-gray-700 text-2xl  font-[UKIJ Nasq] leading-relaxed mb-3 whitespace-pre-line">{ug}</p>
      <div className="pt-2 border-t border-gray-200">
        <p className="text-gray-600 text-xl leading-relaxed whitespace-pre-line" dir="ltr">{en}</p>
      </div>
      {illustration && <Illustration {...illustration} index={index} />}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8" dir="ltr">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8" dir="rtl">
        <HeaderImage />

        {/* كىرگۈزۈش */}
        <Section
          ug={`سىز كۋانت جىسىملىرىنىڭ ئۈستۈنكى ئورنىدا بولىدىغانلىقىنى، يەنى ئۇلارنىڭ بىرلا ۋاقىتتا كۆپ خىل ئورۇنلارنى ئىگىلىيەلەيدىغانلىقىنى كۆپ ئاڭلايسىز. بۇ ئۇقۇم نۇرغۇن كىشىلەرنىڭ تەسەۋۋۇرىنى قوزغىدى، بۇ نۇرغۇن مودا مەدەنىيەت پايدىلىنىشلىرى ۋە خاتا چۈشەنچىلەرنى كەلتۈرۈپ چىقاردى. ئۈستۈنكى ئورنىنىڭ ھەقىقىي قىممىتىنى چۈشىنىش ئۈچۈن، ئالدى بىلەن ئۇنىڭ ھەقىقىي مەنىسىنى، نېمە ئۈچۈن ئېغىزچە چۈشەندۈرۈشتە مەسىلە بارلىقىنى ۋە ئۇچۇر ئۇقۇمىنىڭ ئۇنىڭ ھەقىقىي ماھىيىتىنى چۈشىنىشىمىزگە قانداق ياردەم بېرىدىغانلىقىنى تەكشۈرۈپ بېقىشىمىز كېرەك.`}
          en={`You often hear that quantum objects can be in superposition, meaning they can occupy multiple locations simultaneously. This concept has captured the imagination of many, leading to a plethora of pop culture references and misconceptions. To truly appreciate superposition, though, we must first examine what it really means, why the colloquial interpretation is problematic, and how the concept of information can help us grasp its true essence.`}
          index={0}
        />

        {/* 60 سېكۇنت ئىچىدە كۋانت فىزىكىسى */}
        <Section
          ug={`ئۈستۈنكى ئورنى ۋە ئۇچۇرنىڭ مۇرەككەپلىكىگە چۆمۈلۈشتىن بۇرۇن، كۋانت فىزىكىسىنىڭ ئاساسىي بىلىملىرىنى قايتا كۆرۈپ چىقايلى. كۋانت فىزىكىسى، كۆپىنچە كۋانت مېخانىكىسى ۋە كۋانت نەزەرىيىسى بىلەن ئوخشاش مەنىدە ئىشلىتىلىدۇ، ئىنسانلارنىڭ ئاتوم، ئېلېكترون ۋە فوتون قاتارلىق ئەڭ كىچىك كۆلەمدىكى ماددا ۋە ئېنېرگىيەنىڭ ھەرىكىتىنى تەسۋىرلەشتە ئىشلىتىدىغان پەن ساھەسى - ۋە مەن بۇنى تولۇق مۇۋەپپەقىيەتلىك دەپ قوشۇمچە قىلىشىم مۇمكىن. گەرچە، بىز يېقىندا مۇھاكىمە قىلىدىغان بولساق، بۇ نەزەرىيە ھازىر بۇ تۈزۈمدىن ھالقىپ قوللىنىلىۋاتىدۇ.

بۇ مىكروسكوپ سەۋىيىسىدە، كۈندىلىك تەجرىبىلىرىمىزنى تەسۋىرلەشكە ماس كېلىدىغان كلاسسىك فىزىكىنىڭ تونۇش ۋە سېزىمچان قائىدىلىرى ئەمدى قوللىنىلمايدۇ. ئەكسىچە، زەررىچىلەر ۋە ئۇلارنىڭ ئۆز-ئارا تەسىرى 20-ئەسىرنىڭ بىرىنچى يېرىمىدا تەرەققىي قىلدۇرۇلغان بىر يۈرۈش يېڭى قائىدىلەر تەرىپىدىن باشقۇرۇلىدۇ. قائىدىلەر دولقۇن-زەررىچە قوشلۇقى، كۋانت چىرمىشىپ قېلىشى ۋە ئەلۋەتتە، ئۈستۈنلۈك قاتارلىق بىر قاتار زىت پىرىنسىپلارنى ئۆز ئىچىگە ئالىدۇ. ئەمما كۋانت فىزىكىسى ھەققىدە ئېيتىلغان بۇ نەرسىلەرنى تەكرارلاپ، مەن ئاللىقاچان ئۇنىڭ ھەقىقىي فىزىكىلىق نەرسىلەرگە ئاساسلىنىشى ۋە چۈشىنىلىشى كېرەكلىكىنى ئوتتۇرىغا قويۇپ، گۇناھ قىلدىم، بۇلار بىزنىڭ تەسەۋۋۇر قىلىشقا مەجبۇر بولغان ئۇسۇلىمىزدا مەۋجۇت ئەمەس.

بۇ پىرىنسىپلار بىزنىڭ ئورتاق ئەقىل-پاراسىتىمىزگە قارشى تۇرىدۇ ۋە رېئاللىق ھەققىدىكى ئالدىن پەرەز قىلىنغان چۈشەنچىلىرىمىزگە خىرىس قىلىدۇ، ئەمما ئۇلار قاتتىق سىناق ئارقىلىق قايتا-قايتا ئىسپاتلاندى. كۋانت فىزىكىسى ساھەسى قۇرۇلغاندىن بۇيانقى ھەر بىر ئىلمىي بايقاش ۋە تېخنىكىلىق يېڭىلىق يارىتىشتا ئۆزىنىڭ ئىزلىرىنى قالدۇردى. كۋانت فىزىكىسى بولمىغاندا، بىز ئۆزىمىزنىڭ نېمىدىن ياسالغانلىقىمىزنى، يۇلتۇزلار ۋە گالاكتىكىلارنىڭ نېمىدىن ياسالغانلىقىنى بىلمەيتتۇق، شۇنداقلا خىمىيە ياكى بىئولوگىيەنىڭ مېخانىزمىنى ۋە DNA نىڭ بىزنىڭ كىملىكىمىزنى يارىتىش رېتسېپىنى كودلايدىغانلىقىنى چۈشەنمەيتتۇق. كۋانت فىزىكىسى بولمىغاندا، ئاسماننىڭ نېمىشقا كۆك ئىكەنلىكىنى توغرا چۈشەندۈرۈپ بېرەلمەيتتۇق. (چۈنكى ھاۋا مولېكۇلاسىنىڭ كۋانت ئېنېرگىيە سەۋىيەسى قۇرۇلمىسى يۇقىرى كۆرۈنىدىغان چاستوتىلارغا تەڭشەلگەن بولۇپ، ئۇلار تېخىمۇ كۆپ كۆك نۇرنى سۈمۈرۈپ تارقىتىدۇ، بۇ نۇر ئاسماندا تارقالغان.) كۋانت فىزىكىسى لازېر، ترانزىستور، ئاتوم سائىتى ۋە تېلېۋىزوردا كۆرگەن ياكى كۆرگەن ھەر قانداق داۋالاش تەكشۈرۈشى قاتارلىق يېڭىلىقلار بىلەن زامانىۋى تېخنىكىغا تولغان دۇنيامىزنى ئىنقىلاب قىلدى.

«ھېچكىم كۋانت فىزىكىسىنى چۈشەنمەيدۇ» دېگەن سۆز بىر قانچە خىل ئۇسۇلدا ئېيتىلغان. شۇنداقتىمۇ، بىز بۇ سۆزنى ئىشلىتىپ، ئىنسانىيەت تەرىپىدىن قىلىنغان ئەڭ توغرا پەرەزلەرنى قىلىۋاتىمىز. ئەمەلىيەت شۇكى، نۇرغۇن كىشىلەر كۋانت فىزىكىسىنى چۈشىنىدۇ. مەسىلە شۇكى، كۆرۈنۈپ تۇرۇپتىكى، ھېچكىم ئۆزلىرىنىڭ چۈشىنىشىنىڭ ھەقىقىي سەمىمىي ۋە پايدىلىق چۈشەندۈرۈشىنى بېرەلمەيدۇ. فىزىكا ئالىملىرى ئارتۇقچە ئاددىيلاشتۇرۇش ۋە ئىنچىكە ئوخشىتىشلارغا قوللىنىدۇ، بۇلار چوڭ رەد قىلىشلار بىلەن بىللە كېلىشى ياكى ئاكادېمىك ساھەدىن باشقا جايلاردا ئىشلىتىلمەسلىكى كېرەك. بۇ ئۇلارنىڭ خاتالىقى ئەمەس، چۈنكى بىزدە بۇ ئىشلارنى مۇزاكىرە قىلىشقا ياخشى تىل يوق.

شەخسەن مەن ئۈچۈن، ئۇچۇر نەزەرىيىسى ئۇقۇملىرى ماڭا كۋانت فىزىكىسىنى چۈشىنىشكە ياردەم بېرىدۇ. مەن بۇنىڭ بەزى تەرەپلىرىنى سىلەر بىلەن ئورتاقلىشىمەن. بەلكىم ئۇ ئوبيېكتىپ جەھەتتىن «ياخشى» بولماسلىقى مۇمكىن، ئەمما مەنچە بۇ بىزنىڭ يۈز يىلغا يېقىن ۋاقىتتىن بۇيان قىلىپ كېلىۋاتقان ئۇسۇلىمىزدىن كۆپ ياخشى. شۇڭا، ئارتۇق سۆزلىمەي، كۋانت فىزىكىسىدىكى ئەڭ ئاددىي «قارشى قاراش» ئۇقۇمىدىن باشلايلى.`}
          en={`Before diving into the intricacies of superposition and information, let’s take a moment to revisit the basics of quantum physics. Quantum physics, often used synonymously with quantum mechanics and quantum theory, is the branch of science that humans use to describe the behavior of matter and energy at the smallest scales, such as atoms, electrons, and photons — and quite successfully so, I might add. Though, as we will soon discuss, the theory is now applied well beyond this regime.

At this microscopic level, the familiar and intuitive rules of classical physics that work well to describe our everyday experiences no longer apply. Instead, the particles and their interactions are governed by a set of new rules that were developed in the first half of the 20th century. The rules contain several counterintuitive principles, with names such as wave-particle duality, quantum entanglement, and, of course, superposition. But in repeating these things that are said about quantum physics, I’ve already sinned by suggesting it must be grounded and understood in terms of real physical things, which don’t exist in the way we are compelled to imagine them.

These principles defy our common sense and challenge our preconceived notions of reality, but they have been confirmed time and time again through rigorous experimentation. The field of quantum physics has its fingerprints on every scientific discovery and technological innovation since its inception. Without quantum physics, we would not know what we are made of, let alone what stars and galaxies are made of, nor would we understand the mechanisms of chemistry or biology and that DNA encodes the recipe to make what we are. Hell, without quantum physics, we wouldn’t even be able to accurately explain why the sky is blue. (It’s because air molecules have a quantum energy level structure tuned to higher visible frequencies causing them to absorb and emit more blue light, which is scattered in the sky, by the way.) Quantum physics has revolutionized our modern technology-infused world with innovations such as lasers, transistors, atomic clocks, and every medical scan you’ve ever had or seen on TV.

It’s been said in more ways than one that “nobody understands quantum physics.” Yet, here we are, using it to make the most accurate predictions ever made by humanity. The fact of the matter is many people understand quantum physics. The problem is that, apparently, nobody can provide a genuinely honest and useful explanation of their understanding. Physicists resort to oversimplification and subtle analogies that ought to come with big disclaimers or not be used at all outside of academia. It’s not their fault, though, as we simply don’t have good language to discuss these things.

Personally, the concepts of information theory provide me with a comfortable understanding of quantum physics. I’m going to share some aspects of it with you. Perhaps it’s not objectively “good,” but I think it’s much better than the way we have been doing it for almost a hundred years now. So without further ado, let’s start with the simplest “counterintuitive” concept in quantum physics.`}
          illustration={{
            src: "https://whyisouruniverseweird.weebly.com/uploads/9/2/9/3/92930236/electrons_1_orig.gif",
            alt: "Double-Slit Experiment",
            caption: " قۇش يېرىق تەجرىبە — كۋانت ئارىلىشىشى",
            index: 1
          }}
          index={1}
        />

        {/* ئۈستۈنلۈك */}
        <Section
          ug={`ئۈستۈنلۈك ئۇقۇمى كۋانت فىزىكىسىنىڭ مەركىزى. ئۇ كۆپىنچە زەررىچىلەرنىڭ بىرلا ۋاقىتتا كۆپ جايدا مەۋجۇت بولۇشى سەۋەبىدىن ئارتۇقچە ئاددىيلاشتۇرۇلىدۇ. ئەمما بۇ مۇرەككەپ رەسىمنى بىر خىل چوتكا بىلەن، ئۈستىگە بوياق سۈرمەي چۈشەندۈرۈشكە ئوخشايدۇ. ئەمەلىيەتتە، ئۈستۈلۈك كۋانت جىسىمنىڭ ھالىتىنىڭ ماتېماتىكىلىق ئىپادىلىنىشىنى كۆرسىتىدۇ. سىز مەلۇم بىر ھالەتنى، شۇ ئوبيېكت ئارقىلىق ئېلىپ بېرىلغان تەجرىبە نەتىجىلىرىنى مۆلچەرلەش ئۈچۈن لازىم بولغان بارلىق ئۇچۇرلارنى كودلايدىغان سانلار بىلەن تولدۇرۇلغان جەدۋەل دەپ تەسەۋۋۇر قىلالايسىز. بىز دائىم ئوبيېكتلارنى «ئىچىدىكى» ھالەت دەپ ئاتايمىز، بۇ ئاتالغۇلار پەقەت كۋانت فىزىكىسى بىلەنلا چەكلىنىپ قالمايدۇ.

سىزنىڭ بەخت «ئىچىدىكى» ھالەت دېيىشكە بولىدۇ. ئەمما بۇ بەختنىڭ ھەقىقىي ئوبيېكتىپ نەرسە ئىكەنلىكىنى ياكى ئادەتتە ھالەتلەرنىڭ ئوبيېكتىپ نەرسىلەرنىڭ ئۆتۈشىنى كۆرسىتىدۇ. ئەمما بەخت ئوبيېكتىپ ئەمەس. بەخت ئەمەلىيەتتە مېنىڭ سىزنىڭ ھەرىكىتىڭىزدىن كۈتىدىغان بىر قاتار ئۈمىدلىرىمنىڭ قىسقارتىلمىسى، مەسىلەن، سىز كۈلۈپ، كۈلۈپ، ئاكتىپ قاتنىشىسىز. يەنە بىر خاتا ئىشلىتىلگەن ئىككى ھەرپلىك سۆز: is. بىز «ئالمىنىڭ رەڭگى قانداق؟» دەپ سورىساق، «ئەگەر بۇ ئالما ئۈستىگە ئاق نۇر چۈشسە، ماڭا ئېيتىلغاننىڭ قىزىللىق تۇيغۇسى ئىكەنلىكىنى ھېس قىلىمەن» دېمەڭ. ياق، بىز پەقەت ئالما «قىزىل» دەيمىز، گەرچە قىزىل رەڭ ھەقىقىي فىزىكىلىق ھالەت بولمىسىمۇ. كۈندىلىك تەجرىبىلىرىمىز ئۈچۈن، بۇ مەسىلە ئەمەس، گەرچە «ھالرەڭ رەڭ رەڭ ئەمەس» دەپ Google دا ئىزدىسىڭىز، ھەر قانداق نەرسىدە پېدانترىيە تېپىش تەس ئەمەسلىكىنى كۆرىسىز.

كۋانت ھالەتلىرى زەررىچىلەرنىڭ ئۆتۈپ كېتىدىغان ئوبيېكتىپ نەرسىلەر ئەمەس - ئۇلار بىزگە ھەر خىل ئەھۋاللاردا كۋانت جىسىملىرىنىڭ ھەرىكىتىنى چۈشىنىش ۋە مۆلچەرلەشكە ياردەم بېرىدىغان ماتېماتىكىلىق قوراللار. «ئەگەر جىسىمنىڭ ئورنى ئۆلچەنسە، ئۇ چوقۇم بۇ يەردە تېپىلىدۇ» ياكى «ئەگەر جىسىمنىڭ ئورنى ئۆلچەنسە، ئۇ چوقۇم ئۇ يەردە تېپىلىدۇ» دېگەندەك سېزىمچان نەرسىلەرنى مۆلچەرلەيدىغان ئاساسىي ھالەتلەر بار. ئەمما، يەنە بىر قېتىم، تېزلا پاراگرافقا ئايلىنىدىغان جۈملىلەرنى يېزىشنىڭ ئورنىغا، بىز ئۇقۇم قىسقارتىلمىسىنى ئىشلىتىپ، جىسىمنىڭ بۇ يەردە «بولۇش ھالىتىدە» ئىكەنلىكىنى ياكى تېخىمۇ ئاددىي قىلىپ ئېيتقاندا، جىسىمنىڭ پەقەت بۇ يەردە ياكى ئۇ يەردە «بولۇشى» نى ئېيتىمىز.

ھالەتلەرنىڭ ماتېماتىكىلىق جىسىم ئىكەنلىكىنى ئېسىمىزدە تۇتۇش مۇھىم. «ئوبيېكت بۇ يەردە» دەپ خۇلاسىلەنگەن ھالەت ئەمەلىيەتتە سانلارنىڭ جەدۋەل جەدۋىلى بولۇپ، «ئوبيېكت ئۇ يەردە» دەپ خۇلاسىلەنگەن ھالەتكە ئوخشاش. سانلاردىن تۈزۈلگەن بولغاچقا، ئۇلارنى بىرلەشتۈرۈپ، بىزگە يېڭى جەدۋەل - يېڭى ھالەتنى ئېلىپ كېلىشنى ئاسانلا تەسەۋۋۇر قىلالايمىز. بۇ ئوبيېكتنىڭ توغرا چۈشەندۈرۈشى - ئۇ بۇ ھالەتتە «ئىچىدە» بولۇشى مۇمكىن. ئەمما بۇ نېمە مەنىنى بىلدۈرىدۇ؟ تېخنىكىلىق جەھەتتىن ئېيتقاندا، مەن ئاللىقاچان ئېيتقانلىرىمدىن باشقا نەرسە ئەمەس. بۇ ھالەت ئوبيېكت ئارقىلىق ئېلىپ بېرىلغان ھەر قانداق سىناق ئۈچۈن پەرەزلەرنى بېرىدىغان ئۇچۇردىن باشقا نەرسە ئەمەس.

ئەلۋەتتە، بۇ سىز ئۈچۈن ئىنتايىن قانائەتسىز جاۋاب، خۇددى نەچچە ئەۋلاد فىزىكا ئالىملىرىغا ئوخشاش. «بۇ يەردە» ۋە «ئۇ يەردە» ھالەتلىرىنىڭ ئۈستى-ئۈستى ئورنى «بۇ يەردە ۋە ئۇ يەردە» ھالەت دېيىش قىزىقارلىق. بىز بىر ئوبيېكتنىڭ «ئەگەر ئوبيېكتنىڭ ئورنى ئۆلچەنسە، ئۇ چوقۇم بۇ يەردە تېپىلىدۇ» دەپ تەسۋىرلىنىشىنى «ئوبيېكت بۇ يەردە» دەپ ئاددىيلاشتۇرغىنىمىزغا ئوخشاش، كۆپىنچە كىشىلەر ئۈستى-ئۈستى ئورنى ھالىتىنى «ئوبيېكت بۇ يەردە ۋە ئۇ يەردە» دەپ ئاددىيلاشتۇرىدۇ - بىرلا ۋاقىتتا ئىككى يەردە! ئۈمىد قىلىمەنكى، بۇ سۆزنىڭ ئاددىيلاشتۇرۇلغان قىسقارتىلمىلارغا تايانمىغان بولساق ئاسانلا ئالدىنى ئالغىلى بولىدىغان كۈلكىلىك بىر سۆز ئىكەنلىكىنى ھازىر چۈشىنىسىز.

ھازىر توختاپ، قايتا تەكىتلەش ئۈچۈن ياخشى جاي، ھالەتلەر بىز نەزەرىيەلىرىمىزدە پەرەز قىلىش ئۈچۈن ئىشلىتىدىغان ھادىسىلەرگە تەقسىم قىلىدىغان ماتېماتىكىلىق ئوبيېكتلار. بەزىدە ھالەتلەرنى كۈندىلىك تەجرىبىلەرگە سېلىشتۇرۇش ئارقىلىق ئىشەنچلىك ھالدا چۈشەندۈرۈشكە بولىدۇ. بىز بۇ سېلىشتۇرۇشلاردىن كۆپ پايدىلىنىمىز، چۈنكى ئۇلار غايەت زور ئۇقۇم ئىقتىسادى بىلەن تەمىنلەيدۇ. قانداقلا بولمىسۇن، نۇرغۇن ھالەتلەرنىڭ كۈندىلىك تەجرىبىمىز بىلەن بىۋاسىتە ئالاقىسى يوق. ئادەتتىكى سېلىشتۇرۇشلارنى ئىشلىتىش تېزلا بىمەنىلىك سۆزلەر ۋە قالايمىقانچىلىقلارنى كەلتۈرۈپ چىقىرىدۇ.

ئېنىق قىلىپ ئېيتقاندا: بىر ئېلېكترون، مەسىلەن، ھەرگىز «بىر ۋاقىتتا ئىككى يەردە» بولمايدۇ. ئەمەلىيەتتە، بۇنداق ئۈستۈنلۈك ھالىتىدە، «ئۇنى» ئېلېكترون دەپ ئاتاشمۇ بىر قەدەر مەسىلە. ئېلېكترونلار كۆپىنچە زەررىچە دەپ قارىلىدۇ، باشقا نەرسە بولمىسا، ئۇلارنىڭ ئېنىق ئورنى بار. ئېلېكترونلارنىڭ «بۇ يەردە» ۋە «ئۇ يەردە» ھالەتلىرىنىڭ ئۈستۈنلۈك ھالىتىدە بولۇشى بىزنى زەررىچىلەرنىڭ مەۋجۇت ئىكەنلىكى توغرىسىدىكى قاراشنى قايتىدىن ئويلىنىشقا مەجبۇرلايدۇ. زەررىچە يوق. پەقەت بەزىدە «زەررىچە» بولغاندەك ھەرىكەت قىلىدىغان ھادىسىلەرلا بار. ئۇنداقتا ئېلېكتروننىڭ ئۈستۈنكى قىسمى دېگەن نېمە؟ ئۇچۇر. بۇنداق ھالەت فىزىكىنىڭ قالغان قىسمىغا ماس كېلىدىغان ئۇچۇرلارنى تەمىنلەيدۇ، بۇ بىزگە كېيىنكى ئىشلار توغرىسىدا توغرا پەرەزلەرنى قىلىشقا يول قويىدۇ.`}
          en={`The idea of superposition is central to quantum physics. It’s often oversimplified as particles existing in multiple locations at once. But that’s a bit like trying to explain a complex painting with a single brushstroke, without paint on it. In truth, superposition refers to the mathematical representation of a quantum object’s state. You can imagine a particular state as a spreadsheet filled with numbers that encode all the information required to predict the outcomes of experiments performed using that object. We often refer to objects as being “in” states, and that terminology is not limited to quantum physics.

It might be said that you are “in” a state of happiness. But this implies that happiness is a real objective thing or that states, in general, are objective things that objects transition through. But happiness is not objective. Happiness is really a shorthand concept for a bunch of expectations I should have for your actions, like that you will smile, laugh, and engage positively. Another abused two-letter word: is. We might ask, “what color is the apple?” We definitely don’t say, “if white light shines on this apple, I will perceive what I have been told is the sensation of redness.” No, we just say the apple “is” red, even though red isn’t a real physical state. For our everyday experiences, this is unproblematic, though google “pink is not a color,” and you’ll see that it’s not hard to find pedantry in just about anything.

Quantum states are also not objective things that particles pass through — they are mathematical tools that help us understand and predict the behavior of quantum objects in various situations. There are basic states that predict intuitive things like, “if the position of the object is measured, it will definitely be found here” or “if the position of the object is measured, it will definitely be found there.” But, again, instead of writing out sentences that could quickly turn into paragraphs, we use a conceptual short-hand and say the object is “in” the state of being here or, simpler still, the object just “is” here, or there.

It’s important to keep in mind that states are mathematical objects. The state summarized as “object is here” is actually a spreadsheet of numbers, as is the state summarized as “object is there.” Being made of numbers, we can easily imagine adding them together, giving us a new spreadsheet — a new state. This is a valid description of the object — it can be “in” this state. But what does this mean? Well, technically, nothing beyond what I’ve already said. This state is nothing but information that provides predictions for any experiment performed using the object.

Of course, this is a deeply unsatisfying answer to you, as it has been to generations of physicists. It’s tempting to say that a superposition of the “here” and “there” states is a “here and there” state. Just as we simplified an object being described as “if the position of the object is measured, it will definitely be found here” to “the object is here,” most people simplify the superposition state to “the object is both here and there” — in two places at once! I hope you can see now that this is a ridiculous statement that could have been easily avoided had we not relied on oversimplified short-hand.

Now is a good place to pause and reiterate that states are mathematical objects we assign to phenomena that we use in our theories to make predictions. Sometimes the states can faithfully be interpreted through analogies to everyday experiences. We make copious use of these analogies as they provide enormous conceptual economy. However, many states have no direct connection to our everyday experience. Using the typical analogies then quickly results in nonsensical statements and confusion.

To be clear: an electron, say, is never “in two places at the same.” In fact, in such a superposition state, it is somewhat problematic to even be calling “it” an electron. Electrons are most often considered to be particles, which, if nothing else, have a definite location. The fact that electrons can be in superpositions of the “here” and “there” states forces us to revisit the idea that particles exist at all. There are no particles. There are only phenomena that occasionally behave “as if” they were particles. What is an electron in superposition, then? Information. Such a state provides information, heavily couched in the context of the rest of physics, that allows us to make accurate predictions about what will happen next.`}
          illustration={{
            src: "https://i.ytimg.com/vi/QEwUhFadDSk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYJ8Plp9b6HGfxrS8UNC7S9jJWEw",
            alt: "Quantum State Vector",
            caption: "ئۈستۈنلۈك ھالىتى — ماتېماتىكىلىق ۋېكتور",
            index: 2
          }}
          index={2}
        />

        {/* دېكوگېرېنسىيە */}
        <Section
          ug={`ئەگەر سىزدە رېدۇكسىيەچىلىك ھېسداشلىق بولسا، ئېلېكترون، ئالما ۋە بەخت ھالىتى قاتارلىق ھەممە نەرسە فىزىكا قانۇنىيەتلىرىگە ئاساسەن ئۆز-ئارا تەسىر كۆرسىتىدىغان مىلياردلىغان مىلياردلىغان ئاساسىي زەررىچىلەردىن تەركىب تاپقان دېگەن قاراشقا ئوچۇق بولۇشىڭىز مۇمكىن. ئالەم پەقەت ھەر خىل شەكىللەردە تىزىلغان زەررىچىلەر توپلىمى بولۇپ، بۇ زەررىچىلەرنىڭ بەزىلىرى ناھايىتى مۇرەككەپ. ئەمما ئەگەر مەن پەقەت ئۈستۈنكى قىسىم ھالىتىدە بولالايدىغان ئېلېكترون ۋە باشقا زەررىچىلەر توپلىمى بولسام، نېمىشقا مەن بۇنى قىلالمايمەن؟ نېمىشقا ئۈستۈنكى قىسىم كۈندىلىك تۇرمۇشىمىزنىڭ بىر قىسمى ئەمەس؟

كۋانت جىسىم ئايرىۋېتىلگەندە، ئۇ ئۈستۈنكى قىسمى ھالىتىنى ساقلاپ قالالايدۇ ۋە بىز كۋانت دۇنياسىغا باغلاشنى ياخشى كۆرىدىغان بارلىق غەلىتە ۋە قارشى ياخشىلىقلارنى نامايان قىلالايدۇ. قانداقلا بولمىسۇن، ئۇ ئەتراپىدىكى ھاۋا مولېكۇلاسى، چاڭ زەررىچىلىرى ياكى ھەتتا نۇر فوتونلىرى بىلەن ئۆز-ئارا تەسىر كۆرسىتىشى بىلەنلا، مۇھىت بىلەن چىرمىشىپ قالىدۇ، ھەمدە ئۈستۈنكى قەۋەت تېزلا بۇزۇلىدۇ. جىسىم قانچە مۇرەككەپ بولسا، ئۇنىڭ مۇھىتى بىلەن بولغان ئۆز-ئارا تەسىرى شۇنچە كۆپ بولىدۇ ۋە ئايرىش جەريانى شۇنچە تېز تەرەققىي قىلىدۇ. مەسىلەن، ئالەم بوشلۇقىدا لەيلەپ يۈرگەن چاڭ زەررىچىسى، يۇلتۇز نۇرى قاتارلىق باشقا نەرسىلەردىن مۇمكىن قەدەر يىراق بولۇپ، بىر سېكۇنت ئىچىدە زەررىچىسىنىڭ كەڭلىكى بىلەن ئايرىلغان ئىككى ئورۇننىڭ ئۈستۈنكى قەۋىتىدە تۇرۇشنى توختىتىدۇ. بۇ كۋانت دۇنياسىنىڭ كلاسسىك دۇنياغا قانداق يول ئاچقانلىقىنىڭ ئۆلچەملىك ھېكايىسى. بۇ ھېكايىنىڭ مەسىلىسى شۇكى، ئۇ پەقەت سىزنىڭ يۈزۈڭىزدە تېخىمۇ كۆپ كۋانت ئاتالغۇلىرىنى دولقۇنلايدۇ. چىرمىشىپ كېتىش؟ بۇنى كىم بۇيرۇغان؟

شۇ چاڭ زەررىچىسىنى يەنە بىر قېتىم تەسدەسلەپتە، ئۇنىڭ «جىسىم بۇ يەردە» ھالىتىنىڭ بىرىدە ئىكەنلىكىنى پەرەز قىلايلى. ئېسىڭىزدە بولسۇنكى، بۇ ئاددىي بايان نۇرغۇن يوشۇرۇن مەزمۇنغا ئىگە. بۇنىڭ مەنىسى شۇكى، ئەگەر بىز چاڭ-توزان دانچىسىنىڭ ئورنىنى ئاشكارىلايدىغان بىر تەجرىبە ئېلىپ بارساق، ئۇ مەلۇم بىر نۇقتىدا تېپىلىدۇ. تەجرىبە ۋە ئۆلچەشلەر ئىنسان ئۆلچىمىدە بىز ئادەتتىكى ئىش دەپ قارايمىز. كۋانت فىزىكىسى بىزگە ئۆگىتىدىغان ئەڭ قارشىلىقلىق دەرسلەرنىڭ بىرى شۇكى، ئۆلچەش تەكشۈرۈش ئوبيېكتى بىلەن بەزى ئۆزئارا تەسىر كۆرسىتىشنى تەلەپ قىلىدۇ. بىزگە ئۇچۇر بېرىدىغان مۇمكىن بولغان نەتىجىلەرنى بەلگىلەيدىغان نەرسە بۇ ئۆلچەشنىڭ مەزمۇنى.

مەسىلەن، ئەگەر بىز چاڭ-توزان دانچىسىنىڭ ئورنىنى ئۆلچەشنى ئورۇنلاشتۇرساق، «بۇ يەردە» ۋە «ئۇ يەردە» نىڭ ئۈستى-ئۈستى ئورنى كۆزىتىدىغان مۇمكىن بولغان ھالەتلەرنىڭ ئىچىدە ئەمەس. ئۈستى-ئۈستى ئورنى ھالىتىنى ئاشكارىلايدىغان ئارىلىشىش تەجرىبىلىرى دەپ ئاتىلىدىغان ئۆلچەشلەر بار، ئەمما ئۇلار «ئورۇن» ئۆلچەشلىرى ئەمەس، ھەمدە ئۇلارنى ئېلىپ بېرىش ئىنتايىن تەس بولىدۇ. تىلغا ئېلىنغاندەك، بۇنداق تەجرىبە ھېچ بولمىغاندا چوڭقۇر بوشلۇقتىنمۇ ئېغىر مۇھىتنى تەلەپ قىلىدۇ. بەلكىم بىر كۈنى بىز بۇ ئارىلىشىش تەجرىبىلىرىنىڭ بىرىنى كۆز بىلەن كۆرگىلى بولىدىغان بىر جىسىم بىلەن ئېلىپ بارىمىز. قانداقلا بولمىسۇن، ئۈستۈنكى ھالەتلەرنىڭ «قانداق كۆرۈنىدىغانلىقىنى» سوراشنىڭ ھېچقانداق مەنىسى يوق، چۈنكى «قاراش» ئورۇن ئۆلچەشنى تەلەپ قىلىدۇ، بۇنىڭ نەتىجىسىدە ئۈستۈنكى ھالەتلەر بولمايدۇ. بۇنداق تەجرىبە پەقەت ئېكراندا كۆرسىتىلىدىغان سانلىق مەلۇماتلارنى كۆرسىتىدۇ، پەقەت تېخىمۇ كۆپ ئۇچۇرنىلا.

ئەگەر نەرسىلەر بىلەن چاڭ-توزان دانچىسى ئوتتۇرىسىدىكى ئۆز-ئارا تەسىر ئۇنىڭ ئورنى ھەققىدە ئۇچۇر بەرمىسە، ئۈستۈنكى ھالەت ساقلىنىپ قالىدۇ. قانداقلا بولمىسۇن، ئورۇننىڭ پۈتۈن ئۇقۇمىمۇ بۇنداق ئەھۋالدا ئەھمىيەتسىز بولىدۇ. «ئۇ يەردە-ئۇ يەردە» ئۈستۈنكى ھالەت مەنىسىنى بېرىدىغان ئورۇن ئۇچۇرىنىڭ كۆپىيىشى ۋە ئۇنىڭ نېمە ئۈچۈن نەزەرىيەدە مەۋجۇت ئىكەنلىكى. ئەمەلىيەتتە، كۈندىلىك دۇنيامىز ئورنى بار زەررىچىلەر توپلىمى، چۈنكى ئۇلارنىڭ ھەممىسى بىر-بىرىنىڭ ئورۇن ئۇچۇرىنى ئۆز-ئارا كودلايدۇ. ئەگەر باشقىچە بولسا، بىز مەۋجۇت بولمايتتۇق. ئۈستۈنكى ھالەت مۆجىزە ئەمەس. بۇ بىزنىڭ تەجرىبىمىزنىڭ بارلىق گۈزەللىكى ۋە مۇرەككەپلىكىنى تەمىنلەيدىغان ئاددىي، كلاسسىك «بۇ يەردە» ۋە «ئۇ يەردە» ھالەتلىرى. كۋانت فىزىكىسى ئەمەلىيەتتە يالغۇزلۇق ھەققىدىكى بىر نەزەرىيە بولۇپ، ئۇ سىزگە ماس كەلمەيدۇ - سىزمۇ ئۇنى خالىمايسىز.`}
          en={`If you have reductionist sympathies, you are likely open to the idea that everything, including the electron, the apple, and the state of happiness, is built up from billions upon billions of fundamental particles interacting according to the laws of physics. The universe is just a collection of particles arranged in various patterns, some of which happen to be very complex. But if I am just a collection of electrons and other particles, which can be in superposition states, why is it that I cannot? Why isn’t superposition a part of our day-to-day lives?

When a quantum object is isolated, it can maintain its superposition state and exhibit all that strange and counterintuitive goodness we like to ascribe to the quantum world. However, as soon as it interacts with its surroundings, such as air molecules, dust particles, or even photons of light, it becomes entangled with the environment, and the superposition quickly deteriorates. The more complex the object, the more interactions it has with its environment and the faster the decoherence process unfolds. For example, a dust grain, floating in the dead of space, as far as possible from anything else, including starlight, would cease to be in a superposition of two locations separated by the width of the grain in less than a second. This is the standard story of how the quantum world gives way to the classical world. The problem with this story is that it just waves more quantum jargon in your face. Entanglement? Who ordered that?

Imagine that. Initially, suppose it is in one of the “object is here” states. Remember, this simple statement comes with a lot of implicit context. What it means is that if we were to perform an experiment that reveals the location of the dust grain, it would be found in one particular spot. Experiments and measurements are something we take for granted at human scales. One of the most confronting lessons quantum physics teaches us is that measurement requires some interaction with the object of investigation. It’s the context of that measurement that defines the possible outcomes that provide us with information.

For example, superpositions of “here” and “there” are not among the possible states that can be observed if we arrange to measure the position of the dust grain. There are measurements, called interference experiments, that do reveal superposition states, but they are not “position” measurements, and they would be extremely difficult to perform. As noted, such an experiment would at least require an environment more extreme than deep space. Perhaps we will one day perform one of these interference experiments with an object that can be seen with the naked eye. However, there would be absolutely no sense in asking what the superposition states “looks” like because “looking” would necessitate a position measurement, which, again, does not have superposition states as its possible outcomes. The only thing such an experiment would look like is data shown to you on a screen — just more information.

If the interactions between things and a dust grain did not provide information about its location, the superposition state would be maintained. However, the entire concept of location would also be irrelevant in such a situation. It’s the proliferation of location information that gives a “here and there” superposition state meaning and why it features in the theory at all. In effect, our everyday world is a collection of particles with locations because they all mutually encode position information of each other. If it were otherwise, we would not exist. Superposition is not miraculous. It’s the simple, classical “here” and “there” states that provide all the beauty and complexity of our experience. Quantum physics is really a theory about isolation, and it doesn’t apply to you — nor would you want it to.`}
          illustration={{
            src: "https://ars.els-cdn.com/content/image/1-s2.0-S2405844024103623-gr010.jpg",
            alt: "Decoherence Process",
            caption: "دېكوگېرېنسىيە — مۇھىت بىلەن چىرمىشىش",
            index: 3
          }}
          index={3}
        />

        {/* خۇلاسە */}
        <motion.div
          className="mt-10 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-l-4 border-indigo-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-indigo-800 mb-2 font-[UKIJ Tuz]">خۇلاسە</h3>
          <p className="text-gray-700 font-[UKIJ Nasq]">
            كۋانت ئۈستۈنلۈك «بىرلا ۋاقىتتا ئىككى يەردە» دېگەن مەنتىقىسز ئەمەس. ئۇ ماتېماتىكىلىق ئۇچۇر — تەجرىبە نەتىجىلىرىنى مۆلچەرلەش ئۈچۈن. كلاسسىك دۇنيا دېكوگېرېنسىيە سەۋەبلىك پايدا بولىدۇ. كۋانت فىزىكىسى بىزگە دۇنيانى چۈشىنىشنىڭ يېڭى ئۇسۇلىنى بېرىدۇ، لېكىن ئۇ «مۆجىزە» ئەمەس.
          </p>
        </motion.div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            «ھېچكىم كۋانت فىزىكىسىنى چۈشەنمەيدۇ» دېگەن سۆز بار.  
            ئەمما ھەممىمىز ئۇنى ئىشلىتىمىز — لازېردىن گىرۋىگىچە.
          </p>
          <p className="mt-1 text-gray-600 text-xl" dir="ltr">
            “Nobody understands quantum physics”—yet we use it to power our world.
          </p>
          <p className="mt-2 text-sm text-gray-400">© 2026 •  KeLBiL • كۋانت فىزىكىسى</p>
        </div>
      </div>
    </div>
  );
};

export default Blog83;