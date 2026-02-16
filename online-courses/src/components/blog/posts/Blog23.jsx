// Blog01.jsx
import React from 'react';

const Blog23 = () => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden my-10">
      {/* Hero Image with Uyghur Proverb */}
      <div className="relative">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5622AQGzYcNOeqtgVQ/feedshare-shrink_800/B56ZQqoOIEHQAg-/0/1735881994133?e=2147483647&v=beta&t=iBpmNc96bXMcNmYMFCKOtj9ELiilT84hD3vVsSA4JIk" 
          alt="مەكتەپنىڭ يېڭى زامان دەۋرى" 
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-sm font-medium">
          «بالىنىڭ كەلگۈسى — ئەتىراپىدىكى دۇنيادىن باشلىنىدۇ»
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Title */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-3">
            【كەلگۈسىدىكى تەلىم-تەربىيەنى ئويلىشىش 】
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 leading-relaxed">
            نېمە ئۈچۈن ھازىر مەكتەپ ئۆزگىرىشنى بىرلاشتۇرۇۋاتىدۇ؟
          </h2>
        </header>

        {/* Metadata */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 text-sm">
          <div className="flex items-center">
            <span className="font-medium">مۇئەللىپ:</span>
            <span className="ml-1">  كەلبىل مائارىپى</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">چېسلا:</span>
            <span className="ml-1">11-نويابىر، 2025-يىل </span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-8">
          <h3 className="font-bold text-blue-800 mb-2">مۇندەرىجە</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-700">
            <li>تەلىم-تەربىيە ئىسلامتىنىڭ ئەسلى سەۋەبى — جەمئىيەتنىڭ ئۆزگىرىشى</li>
            <li>مەكتەپ مۇئەللىملىرىنىڭ «ئۈمىد» ۋە «تەشۋىشى»</li>
            <li>شۇنداقلا، مەكتەپ نېمە ئۈچۈن ئۆزگىرىشنى قوغلىشىدۇ؟</li>
            <li>خۇلاسە: كەلگۈسىدىكى مەكتەپكە قاراپ</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-indigo max-w-none space-y-6 text-gray-700">

          {/* Intro Paragraph */}
          <p className="text-lg italic bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-400">
            يېقىنقى  يىللاردا، تەلىم-تەربىيە دۇنياسى چوڭ ئۆزگىرىشلەرگە ئۇچرىدى.
          </p>
          <p>
            «تەكشۈرۈش»، «ھەمكارلىق»، «كىشىگە ماس تەلىم»، «سۇنئىي ئەقىل» — بۇ ئاۋال ئاڭلىمىغان سۆزلەر، بۈگۈن مەكتەپنىڭ كۈندىلىك تۇرمۇشىغا كىردى.
          </p>
          <p>
            «قارا تاختا ۋە تاش كرېيون» مەركەزلىك دەرىجىلىك دەرس ئەسلىدىن، **تەبلېت ئىشلىتىپ «كۆرۈنۈشلىك ئۆگىنىش»** كە بورۇلدى. بالىلار **ئۆزى ئىزدىگەن سوئال** قويۇپ، **ئويلىشىپ**، **تاللاشىپ** دەرىجىلىك دەرس قىلىش كۆپىيىدۇ.
          </p>
          <p>
            بۇنداق ئۆزگىرىش چوڭايغانسرى **مەكتەپ قايسى جەھەتكە بارماقچى؟**
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">1</span>
              تەلىم-تەربىيە ئىسلامتىنىڭ ئەسلى سەۋەبى — جەمئىيەتنىڭ ئۆزگىرىشى
            </h2>
            <p>
              تەلىم-تەربىيە ئىسلاھاتنىڭ مەركىزدە **جەمئىيەتنىڭ تېز ئۆزگىرىشى** تۇرىدۇ.
            </p>
            <p>
              <strong>سۇنئىي ئەقىلنىڭ ئىلغارلىشى</strong>، <strong>دۇنيا چوڭ بىرلشىش</strong>، <strong>سەنائەت قۇرۇلمىسىىنىڭ ئۆزگىرىشى</strong> — بۇلار بىلەن بىرگە، **«تېزلا «دۇرۇست جاۋاب» نى تاپقۇچى» ئىقتىدارى بىلەنلا يەتمەيدىغان زامان كەلدى**.
            </p>
            <p>
              بۈگۈنكى جەمئىيەت قانداق ئىقتىدارنى تەلەپ قىلىدۇ؟  
              <br />
              <strong>ئۆزى مەسىلىنى تاپقۇچى</strong>، <strong>باشقىلار بىلەن ھەمكارلىشىپ جاۋاب ئىزدەيدىغان</strong> كىشى.
            </p>
            <p>
              بۈگۈن، <strong>بىلىم ئۆزى</strong> — توردا ئىزدەپ ھەر كىمگەمۇ قۇللىشى مۇمكىن.  
              مۇھىم بولغان نەرسە — <strong>«بىلىدۇ» ئەمەس، بەلكى «بۇ بىلىمنى قانداق ئىشلىتىدۇ؟»، «قانداق ئويلايدۇ؟»</strong> دېگەن نۇقتا.
            </p>
            <p>
              بۇ ئۆزگىرىشنى باسقۇچ قىلىپ، **ئۇيغۇر مائارىپى «بىلىم ئۆسىتۇرۇش» تىن «ئۆگىنىش سۈپىتى» گە بۇرۇلدى**.
            </p>
            <div className="bg-green-50 p-3 rounded mt-3 border border-green-200">
              <p className="text-green-800">
                <strong>مۇھىم قوللىنىش مىساللىرى:</strong> ئۇنىۋېرسىتېت كىرۈش ئىمتىھانى ،لايەقەتى ، تەكشۈرۈش تەلىمى، پىروگرامما يېزىش تەلىمى، ICT قۇراللىرى.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">2</span>
              مەكتەپ مۇئەللىملىرىنىڭ «ئۈمىد» ۋە «تەشۋىشى»
            </h2>
            <p>
              لېكىن بۇ ئۆزگىرىش مەكتەپ مۇئەللىملىرى ئۈچۈن ئاسان ئەمەس.
            </p>
            <p>
              «تەكشۈرۈش»، «پىروگرامما يېزىش» قاتارلىق يېڭى قۇرۇلۇشلارنى، كۆپچىلىك مۇئەللىملەر **ئۇنىۋېرسىتېتتا ئوقۇمىغان**. شۇڭا، **دەرىجىلىك دەرس قۇرۇش**، **باھالاش ئۇسلۇبى** قاتارلىقلاردا **تەجرىبى-خاتالىق** قىلىۋاتىدۇ.
            </p>
            <p>
              «بالىلارنىڭ ئۆزى ئۆگىنىش ئادىتىنى ئۆستۈرۈش كېرەك»،  
              «يېڭى دەرىجىلىك دەرسنى سىناپ كۆرۈش كېرەك» — بۇنداق **ئالغا قارىغان نىيەت** بار.
            </p>
            <p>
              لېكىن، **ۋاقىت ۋە بىلىم يېتىشمىسلىك** قاتارلىق ھەقىقەت مۇئەللىمنى توسۇپ تۇرىدۇ.
            </p>
            <p>
              يەنە بىر نۇقتا: **مەدەنيەت،  مائارىپ، ئاتا-ئانىلەر بىلەن مۇناسىۋەت، مەكتەپ ئىشلىرى** قاتارلىقلارنى بىرلا ۋاقىتتا باشلاش — بۇ بىر قېتىملىك ئىش ئەمەس.
            </p>
            <p className="font-semibold text-red-600 mt-2">
              «ئۆزگىرىش كېرەك» دېگەنلىكى بىلىنىپمۇ،  
              مەكتەپ تاختىسىدە **«ئىدېئال ۋە ھەقىقەت ئوتتۇرىسىدىكى توسۇلۇش»** تۇرىدۇ.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">3</span>
              شۇنداقلا، مەكتەپ نېمە ئۈچۈن ئۆزگىرىشنى قوغلىشىدۇ؟
            </h2>
            <p>
              شۇنداقلا، مەكتەپ توختىمىدى — چۈنكى **بالىلارنىڭ كەلگۈسىسز، نەسلنىڭ داۋامى بولمايدۇ**.
            </p>
            <p>
              سۇنئىي ئەقىل بىلەن بىللە ئىشلەيدىغان، دۇنيا مىقياسىدكى ھەرخىل مەدەنىيەت بىلەن ھەمكارلىشىدىغان جەمئىيەتتە ياشاشنى قارايدىغان بالىلارغا،  
              **«دۇرۇست جاۋابنى ئۆگىتىدىغان قەدىمكى دەرىجىلىك دەرس»** يەتمەيدۇ.
            </p>
            <p>
              مەكتەپنىڭ ئۆزگىرىشى — **ھەر بىر مۇئەللىمنىڭ تەجرىبى قىلىشى** دېگەنلىكتۇر.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>ئۆز كەسىپدىن  باشقا ساھىلەرگىمۇ قەدەم قويۇش</li>
              <li>ICT ئۈسكۈنىلىرىنى سىناپ كۆرۈش</li>
              <li>بالىلارنىڭ پىكىرىگە قۇلاق سېلىپ دەرىجىلىك دەرس قۇرۇش</li>
            </ul>
            <p className="mt-3">
              بۇ ھالەت — **«ئۆمۈر بويى ئۆگىنىدىغان كىشى» نىڭ ھەقىقىي مىسالى**.
            </p>
            <p>
              مەكتەپ تاختىسى ھازىر **تارتقانلىق** ۋە **مۇكەممەللىككە يېتىشمىگەن**.  
              لېكىن شۇ يەردىكى **«بالىلارنىڭ كەلگۈسىنى ئويلىغان توپلۇم»** ئىنسانلارنى ئالغا سۈرۈپ تۇرىدۇ.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2">4</span>
              خۇلاسە: كەلگۈسىدىكى مەكتەپكە قاراپ
            </h2>
            <p>
              «مەكتەپ ئۆزگىرىدۇ» دېگەنلىك — **مۇئەللىم بىر ئۆزىنىڭ كۈچى بىلەن قىلالايدىغان ئىش ئەمەس**.
            </p>
            <p>
              بالىنى قوللايدىغان **ئاتا-ئانىلار**، **مەھەللە**، **جەمئىيەت بۈتۈنلىكى** بىلەن بىرلەشىپ،  
              <strong>«بالىغا قانداق ئىقتىدار ئۆگىتىش كېرەك؟»</strong> دېگەن سوئالغا جاۋاب ئىزدەش كېرەك.
            </p>
            <p>
              مەكتەپ ھازىر **ئۆزگىرىش دەۋىرىنىڭ ئوتتۇرىسىدا**.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mt-3 text-center">
              <p className="text-purple-800 italic">
                «دۇرۇست جاۋابى يوق تەلىم-تەربىيەنى، بالىلار بىلەن مۇئەللىملەر بىرلەشىپ ئىزدىۋاتىدۇ.  
                بۇ — ھازىرقى مەكتەپنىڭ ھەقىقىي ھالىتى».
              </p>
            </div>
            <p className="mt-4">
              ئۆزگىرىش ۋاقىت تەلەپ قىلىدۇ.
            </p>
            <p>
              لېكىن بۇ قەدەملىرىنىڭ ئالدىدا،  
              ئەلۋەتتە، **بالىلارنىڭ كەلگۈسىگە ماس كېلىدىغان يېڭى تەلىم-تەربىيە شەكلى** كۆرۈنىدۇ.
            </p>
          </section>

          {/* Hashtags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-2">#مەكتەپ_ئۆزگىرىشى</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-2">#تەلىم_تەربىيە_ئىسلامتى</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-2">#بالىلار_كەلگۈسى</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">#ئۇيغۇر_تىلى</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog23;