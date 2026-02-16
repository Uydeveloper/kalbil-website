// src/components/Blog76.jsx
import React from 'react';

// SVG شار كومپونېنتى
const ExpandingBalloon = () => (
  <div className="flex justify-center my-8">
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      className="drop-shadow-lg"
    >
      {/* شارنىڭ چېگرىسى */}
      <circle
        cx="150"
        cy="150"
        r="120"
        fill="none"
        stroke="#818cf8"
        strokeWidth="2"
        strokeDasharray="5,5"
      />
      
      {/* نۇقتىلار (گالاكتىكىلار) */}
      <circle cx="150" cy="30" r="5" fill="#f59e0b" />
      <circle cx="220" cy="95" r="4" fill="#ef4444" />
      <circle cx="70" cy="120" r="5" fill="#3b82f6" />
      <circle cx="180" cy="210" r="4" fill="#10b981" />
      <circle cx="100" cy="230" r="5" fill="#8b5cf6" />

      {/* مەركەز نۇقتا (يەر شارى) */}
      <circle cx="150" cy="150" r="6" fill="#ec4899" stroke="white" strokeWidth="2" />

      {/* نۇر سىزىقى (نۇقتىلاردىن مەركەزگە قاراپ كېڭىيىشنى كۆرسىتىدۇ) */}
      <line x1="150" y1="150" x2="150" y2="30" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="150" y1="150" x2="220" y2="95" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="150" y1="150" x2="70" y2="120" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="150" y1="150" x2="180" y2="210" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="150" y1="150" x2="100" y2="230" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,3" />

      {/* تەكىست (ئاستىغا) */}
      <text x="150" y="280" textAnchor="middle" fill="#4b5563" fontSize="12" fontFamily="sans-serif">
        كېڭىيىۋاتقان شار يۈزى
      </text>
    </svg>
  </div>
);

const Blog76 = () => {
  const HeaderImage = () => (
    <div className="relative w-full h-64 bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-xl mb-6 flex flex-col items-center justify-center text-white">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">كائىناتنىڭ ئاخىرى بارمۇ؟</h1>
        <p className="text-2xl opacity-85">چەكلىك، ئەمما ئاخىرى يوق. مەركىزى، ئەمما ھېچقانداق نۇقتا مەركىزى ئەمەس.</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/50 to-transparent rounded-b-xl"></div>
    </div>
  );

  const Section = ({ title, ja, ug, analogy = false, children }) => (
    <div className="mb-8 p-5 bg-white rounded-lg shadow-sm border border-gray-100">
      {title && (
        <h3 className="text-2xl font-bold text-gray-800 mb-3 font-[UKIJ Tuz]">{title}</h3>
      )}
      <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed mb-3">{ug}</p>
      <div className="pt-2 border-t border-gray-200">
        <h4 className="text-2xl font-semibold text-gray-500 mb-1">🇯🇵 يەنلىكچە:</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{ja}</p>
      </div>
      {children}
      {analogy && (
        <div className="mt-3 flex items-start">
          <span className="inline-block w-4 h-4 rounded-full bg-purple-500 mt-1 mr-2"></span>
          <p className="text-2xl text-purple-700 italic">{analogy}</p>
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
          title="«ئاخىر» دېگەن نېمە؟"
          ug="«ياپونىيەنىڭ ئەڭ شىمالى» دېگەندە، بىز ئۇ جايدىن كېيىن يەنە جايلار يوق دېگەن مەنىنى تۇيىمىز. بۇ «چەكلىك رايون» نىڭ ئاخىرى. لېكىن كائىناتنىڭ ئاخىرى شۇنداقمۇ؟"
          ja="When we say 'the northernmost point of Japan,' we mean a boundary beyond which there is nothing. But is the universe bounded like this?"
        />

        {/* SVG شار رەسىمى */}
        <div className="my-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4">
          <h4 className="text-center font-[UKIJ Tuz] text-gray-800 mb-2">كائىنات — كېڭىيىۋاتقان شار يۈزىگە ئوخشايدۇ</h4>
          <p className="text-2xl text-gray-600 text-center mb-3 font-[UKIJ Nasq]">
            مەركەزدىكى نۇقتا — يەر شارى. باشقا نۇقتىلار — گالاكتىكىلار. ھەممە نۇقتا بىر-بىرىدىن يىراqlشىۋاتىدۇ.
          </p>
          <ExpandingBalloon />
        </div>

        {/* قاچىلاش: ئاخىر بىر تۈر */}
        <Section
          title="كوزىتىش چەكلىمىسى: ئاخىر بىر تۈر"
          ug="بىزدىن 10 مىليارد نۇر يىلى يىراقلىقتىكى جاينى كۆزىتىش — بىز 10 مىليارد يىل ئىلگىرىكى ئالەمنى كۆرۈۋاتقانلىقىمىزنى بىلدۈرىدۇ. ئالەم پەيدا بولۇشتىن بۇرۇن نەرسە بولغانلىقىنى بىز ھەرگىز بىلمەيمىز. بۇ بىزنىڭ «كوزىتىش ئاخىرى»."
          ja="Observing a point 10 billion light-years away means we see the universe as it was 10 billion years ago. We cannot see 'before' the Big Bang."
        />

        <Section
          title="بىرىنچى مەنى: ئاخىرى يوق"
          ug="بىزنىڭ كوزىتىش چەكلىمىسىدىن باشقا، ئالەمنىڭ ھەقىقىيەتەن ئاخىرى يوق. چۈنكى سىز ھەر قانداق نۇقتىغا بارسىڭىزمۇ، ئۇ يەردىن سىز ھەم يەنە يىراق كائىناتلارنى كۆرىسىز."
          ja="Beyond our observational limit, the universe likely has no edge. Wherever you go, you’ll see more universe stretching outward."
        />

        <Section
          title="ئىككىنچى مەنى: چەكلىك، ئەمما ئاخىرى يوق"
          ug="يەر شارىنىڭ يۈزى چەكلىك — بىر مۇقىم مەيدان چوڭلۇقى بار. لېكىن سىز يەر شارىنىڭ يۈزىدە قەيەرگە بارسىڭىزمۇ، «چەت» ياكى «ئاخىر» يوق. كائىناتمۇ شۇنداق — ئۇ چەكلىك بولۇشى مۇمكىن، لېكىن ئاخىرى يوق."
          ja="Earth’s surface is finite but edgeless. Similarly, the universe might be finite in volume yet have no boundary."
          analogy="«كائىنات — كېڭىيىۋاتقان شارنىڭ يۈزىدەك»"
        />

        <Section
          title="يەر شارى ئالەمنىڭ مەركىزىمۇ؟"
          ug="يەر شارىدىن قارىغاندا، ئالەم ھەممە يۆنىلىشتە ئوخشاش كېڭىيىدۇ. لېكىن ھەقىقەت شۇكى، ھەر قانداق نۇقتىدىن قارىغاندا مۇشۇنداق كۆرۈنىدۇ. كائىناتنىڭ مەركىزى يوق."
          ja="From Earth, the universe appears to expand uniformly. But any observer anywhere would see the same. Thus, the universe has no center."
          analogy="«ھەر قانداق نۇقتا مەركەز سۈپىتىدە كۆرۈنىدۇ، لېكىن ھېچقانداق نۇقتا مەركەز ئەمەس»"
        />

        {/* خۇلاسە */}
        <div className="mt-10 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-800 mb-3 font-[UKIJ Tuz]">خۇلاسە</h3>
          <p className="text-gray-700 font-[UKIJ Nasq] mb-2">
            • كائىناتنىڭ «كوزىتىش ئاخىرى» بار — بىزنىڭ ھەرگىز كۆرەلمەيدىغان رايونلار بار.  
            • كائىنات چەكلىك بولۇشى مۇمكىن، لېكىن ئاخىرى يوق — شار يۈزىگە ئوخشايدۇ.  
            • كائىناتنىڭ مەركىزى يوق — ھەر قانداق نۇقتا بىرخىل كۆرۈنىدۇ.
          </p>
          <p className="text-2xl text-indigo-700 mt-2" dir="ltr">
            The universe is finite but unbounded. It has no edge, no center — only expansion that looks the same from every point.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            «كائىنات بىزگە چەت بېرىمىدى، بىز ئۇنىڭ ئىچىدە ياشايمىز.»
          </p>
          <p className="mt-1 text-gray-600 text-sm" dir="ltr">
            “The universe gave us no edge — we live inside it.”
          </p>
          <p className="mt-2 text-2xl text-gray-400">© 2026 • KeLBiL  بلوگى • ئالەم سوئاللىرى قۇتىسى</p>
        </div>
      </div>
    </div>
  );
};

export default Blog76;