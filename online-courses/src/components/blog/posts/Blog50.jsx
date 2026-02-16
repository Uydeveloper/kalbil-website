// src/components/Blog50.jsx
import React from 'react';

const Blog50 = () => {
  // باش رەسىم
  const HeaderImage = () => (
    <div className="relative w-full h-64 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl mb-6 flex items-center justify-center text-white">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">AI ۋە ماشىنا ئۆگىنىش ماتېماتىكىسى (2)</h1>
        <p className="text-lg opacity-90">مۇئەللىپ: KeLBiL | 2025-يىلى 7-ئاينىڭ 31-كۈنى، سائەت 12:58</p>
        <p className="text-lg opacity-90 mt-1">AI & Machine Learning Mathematics (2)</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/30 to-transparent rounded-b-xl"></div>
    </div>
  );

  // بۆلەك كومپونېنتى (ئۇيغۇر + ئىنگلىزچە)
  const Section = ({ title, en, ug, mathSymbols = [], note = '' }) => (
    <div className="mb-10 p-5 bg-white rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 font-[UKIJ Tuz]">{title}</h3>

      {/* ئۇيغۇرچە مەزمۇن */}
      <div className="mb-6">
        <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed">{ug}</p>
      </div>

      {/* English */}
      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">🇬🇧 English:</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{en}</p>
      </div>

      {/* Mathematical Symbols */}
      {mathSymbols.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {mathSymbols.map((sym, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-mono rounded-full"
            >
              {sym}
            </span>
          ))}
        </div>
      )}

      {note && (
        <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 text-sm text-yellow-800">
          💡 {note}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-2xl font-uyghur p-4 md:p-8" dir="ltr">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8" dir="rtl">
        <HeaderImage />

        <div className="mb-8">
          <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed">
            بۇ بۆلۈمدە «ئارىفمېتىك ھەرىكەتلەر»، «جەبىرلىك ئىپادىلەر ۋە ئاستىنقى سانلار»، «يىغىندى (Σ)» ۋە «ئارىلىق ھېسابلاش» قاتارلىقلارنىڭ تەپسىلىي خۇلاسىسى بېرىلگەن.
          </p>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed" dir="ltr">
            This section provides a detailed summary of "Arithmetic Operations," "Algebraic Expressions and Subscripts," "Summation (Σ)," and "Distance Calculation."
          </p>
        </div>

        {/* 1. Arithmetic Operations */}
        <Section
          title="1. ئارىفمېتىك ھەرىكەتلەر (قوشۇش/ئېلىش/كۆپەيتىش/بۆلۈش)"
          ug={`قوشۇش بىلەن كۆپەيتىشنىڭ مۇناسىۋىتى: كۆپەيتىش قوشۇشنىڭ كېڭەيتىلمىسى بولۇپ، مۇقىم شەكىلدە قوشۇش ھەرىكەتلىرىنى يېزىشنىڭ ئاددىي ئۇسۇلى دەپ قاراشقا بولىدۇ. مەسىلەن، «3 نى تۆت قېتىم قوشۇش» ھېسابلاشنى ئاددىيلا «3 × 4» دەپ ئىپادىلىگىلى بولىدۇ. بۇ ئاددىيلىق «3 نى 100 قېتىم قوشۇش» قاتارلىق تەكرارلىنىدىغان ھېسابلاشلارنىڭ مۇرەككەپلىكىنى يوقىتىدۇ ۋە توغرا ئىپادىلەشكە يول قويىدۇ. كۆپەيتىش يەنە مەيداننى ھېسابلاش ئۈچۈنمۇ ئىشلىتىلىدۇ. ئېرىتىش بىلەن بۆلۈشنىڭ مۇناسىۋىتى: بۆلۈشنى كۆپەيتىشنىڭ كېڭەيتىلمىسى دەپ قاراشقا بولىدۇ، بۇ ئۆز-ئارا سانغا كۆپەيتىش بىلەن ئوخشاش. ئۇنىڭدىن باشقا، بۆلۈشنى پەقەت بىر ساننىڭ يەنە بىر ساندىن قانچە قېتىم ئېرىتىش مۇمكىنلىكىنى ھېسابلايدىغان ئېلىشنىڭ كېڭەيتىلمىسى دەپ قاراشقا بولىدۇ. ئاخىرىدا، ئەگەر سىز ئېلىشنى مەنپىي ساننى قوشۇش دەپ ئويلىسىڭىز، ئۇنداقتا ئاخىرىدا ھەممە نەرسە قوشۇشنىڭ كېڭەيتىلمىسى دەپ قاراشقا بولىدۇ. دەرىجىلەر (دەرىجىلەر): ئوخشاش ساننى كۆپ قېتىم كۆپەيتىش دەرىجە دەپ ئىپادىلىنىدۇ. بۇ تۆت ئارىفمېتىك ئەمەلنىڭ بىرى بولمىسىمۇ، كۆپەيتىشنىڭ كېڭەيتىلمىسى بولغاچقا، ئۇنى تۆت ئارىفمېتىك ئەمەلنىڭ سەل ئىلغار نۇسخىسى دەپ قاراشقا بولىدۇ. ھېسابلاش ئالدىنقى ئورنى: ھېسابلاشلار ئالدىنقى ئورۇندا تۇرىدۇ، قاۋۇس ئىچىدىكى ھېسابلاشلار ئەڭ يۇقىرى ئورۇنغا قويۇلىدۇ. بۇنىڭدىن باشقا، دەرىجە ئەڭ يۇقىرى ئورۇنغا قويۇلىدۇ، ئۇنىڭدىن كېيىن كۆپەيتىش ۋە بۆلۈش، ئاخىرىدا قوشۇش ۋە ئېلىش. ئالدىنقى ئورۇن ئوخشاش بولغاندا، ھېسابلاشلار ئادەتتە سولدىن ئوڭغا قاراپ ئېلىپ بېرىلىدۇ، دەرىجە ئوڭدىن سولغا قاراپ ئېلىپ بېرىلىدۇ.`}
          en={`Relationship between addition and multiplication: Multiplication is an extension of repeated addition. For example, adding 3 four times (3+3+3+3) is simply written as 3 × 4. This simplification scales to larger repetitions (e.g., 3 added 100 times = 3 × 100) and is also used to compute area.

Relationship between subtraction and division: Division can be viewed as repeated subtraction—how many times can you subtract one number from another? It is also equivalent to multiplying by the reciprocal (e.g., a ÷ b = a × 1/b).

Ultimately, subtraction can be seen as adding a negative number, so all arithmetic operations reduce to addition.

Exponents (Powers): Repeated multiplication (e.g., a × a × a = a³) is expressed using exponents. Though not a basic arithmetic operation, it is a natural extension of multiplication.

Order of operations: Parentheses > Exponents > Multiplication/Division > Addition/Subtraction. For operations of equal precedence, evaluate left to right—except exponents, which are evaluated right to left (e.g., 2^3^2 = 2^(3^2) = 2^9 = 512).`}
          mathSymbols={['+', '−', '×', '÷', 'aⁿ', '( ) > ⁿ > ×/÷ > +/−']}
        />

        {/* 2. Algebraic Expressions & Subscripts */}
        <Section
          title="2. جەبىرلىك ئىپادىلەر ۋە ئاستىنقى سانلار"
          ug={`«ئالگېبرا ئىپادىلىرى» نى ئىگىلەش نەرسىلەرنى تېخىمۇ ئومۇملاشتۇرۇپ چۈشەندۈرۈشكە يول قويىدۇ. ئادەتتە، a، b، c قاتارلىقلار دائىم مۇقىم قىممەتكە ئىگە تۇراقلىق سانلارنى، x، y، z، t قاتارلىقلار دائىم ھەر خىل قىممەتلەرنى قوبۇل قىلىدىغان ئۆزگەرگۈچى سانلارنى كۆرسىتىدۇ. گرېك ھەرپلىرى (π، σ، θ قاتارلىقلار) يەنە كۆپىنچە مەنىلىك تۇراقلىق سانلار ۋە پارامېتىرلارنى، مەسىلەن pi، ئۆلچەملىك چەتنىش، بۇلۇڭ ۋە ماشىنا ئۆگىنىش «ئېغىرلىقى» نى ئىپادىلەش ئۈچۈن ئىشلىتىلىدۇ. ئاستى كۆرسەتكۈچلەر: x₁، x₂، x₃... قاتارلىق كىچىك سانلار ھەر بىر سانلىق مەلۇماتنى پەرقلەندۈرۈش ئۈچۈن ئىشلىتىلىدۇ. بۇلار i، j كىچىك ھەرپلەر بىلەن كۆرسىتىلىشى مۇمكىن. ماشىنا ئۆگىنىشىدە، «مەيدان» x₁، «قۇرۇلۇش يېشى» x₂ دەپ كۆرسىتىلىدۇ. بۇ خىل ئەھۋالدا، x₁i قاتارلىق قوش ئاستى كۆرسەتكۈچلەر بىلەن كۆرسىتىلىشى مۇمكىن.`}
          en={`Mastering algebraic expressions allows generalization. Constants (a, b, c) represent fixed values, while variables (x, y, z, t) represent changeable values. Greek letters (π, σ, θ) denote meaningful constants or parameters—e.g., π (pi), σ (standard deviation), θ (angle or model weights in machine learning).

Subscripts (x₁, x₂, ..., xₙ) distinguish multiple data points. Index variables like i or j allow flexible referencing (e.g., xᵢ for the i-th data point). In multivariate contexts (e.g., house price prediction), x₁ = area, x₂ = age, and the i-th house is represented as (x₁ᵢ, x₂ᵢ).`}
          mathSymbols={['x₁', 'x₂', 'xᵢ', 'θ', 'σ', 'π']}
        />

        {/* 3. Summation (Σ) */}
        <Section
          title="3. يىغىندى (Σ)"
          ug={`«يىغىندى» «ھەممىنى قوشۇش» دېگەن مەنىنى بىلدۈرىدۇ. Σ نىڭ يېزىلىشى: Σ نىڭ ئاستىغا باشلانغۇچ ئىندېكىس (i=1)، ئۈستىگە ئاخىرلاشتۇرۇش ئىندېكىسى (n)، ئوڭغا قوشۇش ئىپادىسى (xᵢ) يېزىلىدۇ. مەسىلەن، ∑ᵢ₌₁ⁿ xᵢ. Σ فورمۇلالار: Σ(xᵢ + yᵢ) = Σxᵢ + Σyᵢ، Σ(c·xᵢ) = c·Σxᵢ، Σc = n·c. بۇ فورمۇلالار ئوتتۇرىچە قىممەت (x̄ = Σxᵢ / n) ۋە ئېغىرلىق مەركىزى (k-means) نى ھېسابلاشتا ئىشلىتىلىدۇ.`}
          en={`Summation (Σ) means “add everything.” Notation: ∑ᵢ₌₁ⁿ xᵢ = x₁ + x₂ + ... + xₙ. Key properties:
• Linearity: Σ(xᵢ + yᵢ) = Σxᵢ + Σyᵢ
• Constant factor: Σ(c·xᵢ) = c·Σxᵢ
• Constant sum: Σc = n·c

These enable concise expressions for the mean (x̄ = (1/n)∑xᵢ) and cluster centroids in k-means (average of all points in a cluster).`}
          mathSymbols={['∑ᵢ₌₁ⁿ xᵢ', 'x̄ = (1/n)∑xᵢ', 'Σ(xi + yi) = Σxi + Σyi']}
        />

        {/* 4. Distance Calculation */}
        <Section
          title="4. ئارىلىق ھېسابلاش"
          ug={`سان سىزىقىدىكى ئارىلىق: |x₂ − x₁| ياكى (x₂ − x₁)² نىڭ كۋادرات يىلتىزى. تەۋلىكتىكى ئارىلىق: پىفاگور تېئورېمىسى — d² = (x₂−x₁)² + (y₂−y₁)². ماشىنا ئۆگىنىش تەجرىبەلىرىنىڭ كۆپى يەنە بۇ ئارىلىق ۋە Σ ئىشلىتىدۇ. يىغىندىنىڭ كۋادراتىنى ئىشلىتىشنىڭ سەۋەبى: (1) مۇسبەت ۋە مەنپىي خاتالىقلار بىكار قىلىنمايدۇ، (2) ئەڭ تۆۋەن قىممەت بىردەك بەلگىلىنىدۇ. بۇ ئۇسۇل ئوتتۇرىچە قىممەت ۋە ئېغىرلىق مەركىزىنى ھېسابلاش ئۈچۈن ئىشلىتىلىدۇ.`}
          en={`1D distance: |x₂ − x₁| or √((x₂−x₁)²).  
2D (Euclidean) distance: d = √((x₂−x₁)² + (y₂−y₁)²).  
In machine learning, we often minimize the sum of squared distances (∑(xᵢ − μ)²) because:
(1) Positive/negative errors don’t cancel out,
(2) The minimum is unique and differentiable—enabling efficient optimization.
This principle underlies the mean (1D centroid) and k-means clustering (multi-dimensional centroids).`}
          mathSymbols={['d = √((x₂−x₁)² + (y₂−y₁)²)', '∑(xᵢ − μ)²', 'Euclidean Distance']}
          note="Over 90% of machine learning algorithms rely on distance and summation concepts!"
        />

        {/* خۇلاسە / Summary */}
        <Section
          title="خۇلاسە"
          ug={`بىز «ئارىفمېتىك ئەمەللەر»، «جەبىرلىك ئىپادىلەر ۋە ئاستىنقى سانلار»، «يىغىندى (Σ)» ۋە «ئارىلىقنى ھېسابلاش» قاتارلىق تېمىلارنى تەپسىلىي چۈشەندۈردۇق. كېيىنكى قېتىم، «دىففېرېنسىئاللاش» ۋە «قىسمەن دىففېرېنسىئاللاش» قاتارلىق تېمىلارنى مۇھاكىمە قىلىمىز.`}
          en={`We have thoroughly covered "Arithmetic Operations," "Algebraic Expressions and Subscripts," "Summation (Σ)," and "Distance Calculation." Next time, we will discuss "Differentiation" and "Partial Differentiation."`}
        />

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">بۇ ماقالە — ماشىنا ئۆگىنىش ئۆگىنىشچىلىرى ئۈچۈن تەييارلانغان تەپسىلىي ۋە كۆرگىلىك ئوقۇش ماتېرىيالى</p>
          <p className="mt-1 text-gray-600 text-sm" dir="ltr">This article is a detailed and visually clear learning material for machine learning learners.</p>
          <p className="mt-2 text-sm text-gray-400">© 2025 • KeLBiL • smz.03.07</p>
        </div>
      </div>
    </div>
  );
};

export default Blog50;