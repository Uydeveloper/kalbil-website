// src/components/Blog75.jsx
import React from 'react';

const Blog75 = () => {
  // باش رەسىم — كائىنات تۈسۈ
  const HeaderImage = () => (
    <div className="relative w-full h-64 bg-gradient-to-r from-indigo-900 via-purple-900 to-black rounded-xl mb-6 flex flex-col items-center justify-center text-white">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">كائىنات تارىخى: چوڭ پارتلاش نەزەرىيىسى</h1>
        <p className="text-2xl opacity-85">ئالەمنىڭ باشلانغۇچ نۇقتىسىدىن بۈگۈنگىچە</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/50 to-transparent rounded-b-xl"></div>
    </div>
  );

  // بۆلەك كومپونېنتى
  const Section = ({ title, ja, ug, timeline = false, highlight = false }) => (
    <div className={`mb-8 p-5 rounded-lg ${highlight ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500' : 'bg-white shadow-sm border border-gray-100'}`}>
      {title && (
        <h3 className={`text-3xl font-bold mb-3 ${highlight ? 'text-blue-800' : 'text-gray-800'} font-[UKIJ Tuz]`}>
          {title}
        </h3>
      )}
      <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed mb-3">{ug}</p>
      <div className="pt-2 border-t border-gray-200">
        <h4 className="text-2xl font-semibold text-gray-500 mb-1"></h4>
        <p className="text-gray-600 text-2xl leading-relaxed">{ja}</p>
      </div>
      {timeline && (
        <div className="mt-4 flex items-center text-2xl text-gray-500">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
          {timeline}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8" dir="ltr">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8" dir="rtl">
        <HeaderImage />

        {/* كىرگۈزۈش */}
        <Section
          title=""
          ug="خاببىلنىڭ بايقىشى بىزنىڭ ئالەمنىڭ كېڭىيىۋاتقانلىقىنى ۋە كېڭىيىش سۈرئىتىنىڭ ئاسمان جىسىملىرى ئارىسىدىكى ئارىلىققا ماس كېلىدىغانلىقىنى ئاشكارىلىدى. ۋاقىتقا قايتىپ، خۇددى كىنو ياكى سىننى تەتۈر كۆرگەندەك قىلساق، بارلىق جىسىملار بىر نۇقتىغا يىغىلىدۇ — بۇ چوڭ پارتلاش نۇقتىسى."
          ja="Hubble discovered that the universe is expanding, and the expansion rate is proportional to the distance between celestial objects. If we reverse time like rewinding a movie, all objects converge to a single point — the Big Bang."
          highlight={true}
        />

        {/* چوڭ پارتلاش نەزەرىيىسى */}
        <Section
          title="چوڭ پارتلاش نەزەرىيىسى"
          ug="بىز ئالەمنىڭ بىر زامانلار كىچىك، ئىنتايىن قىزىق ئوت توپى ئىكەنلىكىنى تەسەۋۋۇر قىلالايمىز. بۇ ئوت توپى پارتلاش خاراكتېرلىك كېڭىيىشكە باشلىغاندا ئالەمىمىز ياسالغان. بۇ ھادىسە «چوڭ پارتلاش» (Big Bang) دەپ ئاتىلىدۇ. «Big» — چوڭ، «Bang» — پارتلاش."
          ja="We imagine the universe once as a tiny, extremely hot fireball. When this fireball began expanding explosively, our universe was born. This event is called the 'Big Bang' — 'Big' meaning large, 'Bang' meaning explosion."
        />

        {/* دەلىل: 3K ئالەم ئارقا كۆرۈنۈش رادىئاتسىيىسى */}
        <Section
          title="دەلىل: 3K ئالەم ئارقا كۆرۈنۈش رادىئاتسىيىسى"
          ug="چوڭ پارتلاش نەزەرىيىسىنىڭ ئەڭ مۇھىم دەلىلى — 1965-يىلى بايقالغان «3K ئالەم ئارقا كۆرۈنۈش رادىئاتسىيىسى». بۇ رادىئاتسىيە ئالەمنىڭ ھەر قايسى تەرەپپىدىن كېلىدىغان 3 كېلۋىن (−270°C) تېمپېراتۇرىلىق ئىسسىقلىق توپى. بۇ ئالەم كىچىك ئوت توپى بولغان ۋاقىتتىكى قالدۇق. بۇنى بايقىغان پېنزىياس ۋە ۋىلسون نوبېل مۇكاپاتى ئالغان."
          ja="The strongest evidence for the Big Bang is the '3K Cosmic Microwave Background' (CMB), discovered in 1965. This faint radiation (at 3 Kelvin, or −270°C) comes uniformly from all directions and is the 'afterglow' of the hot early universe. Penzias and Wilson won the Nobel Prize for this discovery."
          timeline="1965-يىلى • نوبېل مۇكاپاتى"
        />

        {/* كائىنات تارىخى — ۋاقىت شەكلىدە */}
        <div className="mt-10 mb-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-4 font-[UKIJ Tuz]">كائىنات تارىخى</h2>
          <p className="text-gray-700 font-[UKIJ Nasq] mb-4">
            چوڭ پارتلاشتىن باشلاپ، بۈگۈنكى ئالەمگە قەدەر بولغان تارىخىي رەقەم-سان.
          </p>
        </div>

        <Section
          ug="ئالەم پەيدا بولغاندىن كېيىنلا، ئۇ ئىنتايىن قىزىق (10³² كېلۋىن) ۋە ئىنتايىن زىچ، چوڭلۇقى كىچىك بولغان. بۇ ۋاقىتتا تارتىش، ئېلېكتروماغنىتىزىم قاتارلىق ئاساسىي كۈچلەر پەيدا بولدى."
          ja="Immediately after the Big Bang, the universe was extremely hot (10³² K), dense, and tiny. Fundamental forces like gravity and electromagnetism emerged."
          timeline="t = 0 • چوڭ پارتلاش"
        />

        <Section
          ug="تەخمىنەن 1 سېكۇنت كېيىن: ئېلېكترون، پروتون قاتارلىق زەررىچىلەر ۋە نۇر (فوتو) پەيدا بولدى. ئالەمنىڭ چوڭلۇقى تەخمىنەن 1 يورۇقلۇق يىلى، تېمپېراتۇرىسى 10 مىليارد گرادۇس."
          ja="~1 second: Electrons, protons, and photons formed. The universe was ~1 light-year across and ~10 billion K hot."
          timeline="t = 1 سېكۇنت"
        />

        <Section
          ug="بىر قانچە مىنۇت كېيىن: ھىدروگېن ۋە گېلىي يادرولىرى نۇكلېئوسىنتېز ئارقىلىق ھاسىل بولدى. بۇ ئالەم ماددىسىنىڭ 99% نى تەشكىل قىلىدۇ."
          ja="A few minutes: Hydrogen and helium nuclei formed via nucleosynthesis — making up 99% of normal matter."
          timeline="t = 3–20 مىنۇت"
        />

        <Section
          ug="380,000 يىل كېيىن: تېمپېراتۇرا 3000 گرادۇسقا چۈشۈپ، يادرولار بىلەن ئېلېكترونلار بىرلىشىپ نېيتىرال ئاتوملار ھاسىل قىلدى. نۇر ئاخىرى ماددىدىن قۇتۇلۇپ، ئەركىن يۈردى — بۇ ھادىسە «ئالەم بوشلۇقىنىڭ تازىلىنىشى» دەپ ئاتىلىدۇ. بۇ ۋاقىتتىكى نۇر ھازىرمۇ 3K رادىئاتسىيە سۈپىتىدە كۆزىتىلىدۇ."
          ja="380,000 years: Temperature dropped to ~3000 K. Electrons combined with nuclei to form neutral atoms. Photons were finally free to travel — the 'recombination' or 'cosmic dawn'. This light is today’s CMB."
          timeline="t = 380,000 يىل • ئالەم بوشلۇقى تازىلاندى"
        />

        <Section
          ug="تەخمىنەن 100 مىليون–1 مىليارد يىل كېيىن: گاز توپلىنىپ، بىرلىك بىلەن تارتىلىش ئارقىلىق بىرلىك گالاكتىكىلار شەكىللەندى."
          ja="100 million – 1 billion years: Gas clumped under gravity to form the first stars and galaxies."
          timeline="t = 1 مىليارد يىل"
        />

        <Section
          ug="بۈگۈن: ئالەم 13.8 مىليارد ياش، 93 مىليارد يورۇقلۇق يىلى چوڭلۇقتا، ھەنۇز كېڭىيىشى داۋاملاشقۇچە."
          ja="Today: The universe is 13.8 billion years old, ~93 billion light-years across, and still expanding."
          timeline="بۈگۈن • 13.8 مىليارد يىل"
        />

        {/* خۇلاسە */}
        <Section
          title="خۇلاسە"
          ug="چوڭ پارتلاش نەزەرىيىسى — ئالەمنىڭ باشلانغۇچ نۇقتىسى، ماددىنىڭ كېلىپ چىقىشى، 3K ئارقا كۆرۈنۈش رادىئاتسىيىسى قاتارلىق ھەممىنى مۇۋاپىق تەسۋىرلەيدۇ. بۇ زامانىۋى كائىناتشۇناسلىقنىڭ ئاساسىي چەمبىرۈكى."
          ja="The Big Bang theory elegantly explains the origin of the universe, the formation of light elements, and the CMB — forming the cornerstone of modern cosmology."
          highlight={true}
        />

        {/* ئاخىرلاشتۇرۇش */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            «بىزنىڭ ئالەمنىڭ ھەر بىر زەررىسى — چوڭ پارتلاشتىكى ئوت قىزىرىقىنىڭ بالىلىرى.»
          </p>
          <p className="mt-1 text-gray-600 text-sm" dir="ltr">
            “We are all made of stardust — born from the fire of the Big Bang.”
          </p>
          <p className="mt-2 text-sm text-gray-400">© 2026 • KeLBiL بلوگى</p>
        </div>
      </div>
    </div>
  );
};

export default Blog75;