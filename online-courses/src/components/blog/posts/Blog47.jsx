import React from "react";

const Blog47 = () => {
  return (
    <div
      dir="rtl"
      className="max-w-4xl mx-auto p-6 bg-white text-gray-800"
      style={{
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
        lineHeight: "2.1",
      }}
    >
      {/* Hero Banner */}
      <div className="relative mb-10">
        <div
          className="h-56 bg-gradient-to-r from-purple-800 to-indigo-700 rounded-xl flex items-center justify-center text-white text-center px-4"
          style={{ fontFamily: '"UKIJ Tuz", sans-serif' }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">باشلىغۇچىلار ئۈچۈن ماشىنا ئۆگىنىشكە كىرىش</h1>
            <p className="text-lg opacity-90">نۆل بىلىمدىن باشلاپ، Python ئارقىلىق دۇنيانى تونۇش</p>
          </div>
        </div>
      </div>

      {/* Author & Meta */}
      <div className="text-gray-600 text-sm mb-8 text-right">ئاپتور: KeLBiL</div>

      {/* Intro Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">مەقسىت نېمە؟</h2>
        <p className="mb-5 text-lg">
          بۇ كىتابنى ئوقۇشنىڭ مەقسىتى — تۆۋەندىكى كودنى چۈشىنىش ۋە ئۇنىڭ ئارقىسىدىكى دۇنيانى كۆرۈش:
        </p>

        <div className="bg-gray-900 text-green-400 p-5 rounded-lg overflow-x-auto text-sm mb-5 font-mono">
          {`from sklearn.datasets import load_iris\nimport pandas as pd\niris = load_iris()\ndata = iris.data\nfeature_names = iris.feature_names\ndf = pd.DataFrame(data=data, columns=feature_names)\ndf.head()`}
        </div>

        <p className="text-lg">
          بۇ كود — سانلىق مەلۇماتنى باشقۇرۇشنىڭ «كىرىش دەرىجىسى» ھېسابلىنىدۇ. كېيىنكى قەدەمدە، «تەھلىل»، «سۈنئىي ئەقىل» ۋە «ماشىنا ئۆگىنىش» تەجرىبىلىرى بۇ يەردىن باشلىنىدۇ.
        </p>
      </section>

      {/* Prerequisites */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">ئالدىنقى شەرت</h2>
        <p className="text-lg mb-4">
          سىزدە كەم دېگەندە:
        </p>
        <ul className="list-disc pr-6 mb-5 space-y-2 text-lg">
          <li>پروگرامما تۈزۈشكە بولغان قىزىقىش</li>
          <li>قىيىنچىلىقلارنى قوبۇل قىلىش ۋە تەكلىپ تۇرۇش</li>
        </ul>
        <p className="text-lg">
          كومپيۇتېر ئىشلەتمىگەن، ياكى بىر قېتىمۇ كود كۆرمىگەن «نۆل بىلىم» ئۆگىنىشچىلەر ئۈچۈن بۇ كىتاب بىۋاسىتە تەلەپ قىلىنمايدۇ. ئېھتىيات قىلىڭ — بىر نەچچە مىنۇتتىن كېيىن ۋاز كېچىش شەكلىدە نەتىجە چىقىرىشى مۇمكىن!
        </p>
      </section>

      {/* Target Audience */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">كىمگە مۇناسىۋەتلىك؟</h2>
        <p className="text-lg">
          بۇ كىتابنىڭ مۇناسىۋەتلىك كۆپچىلىكى:
        </p>
        <ul className="list-disc pr-6 mt-3 mb-5 space-y-2 text-lg">
          <li>«Colaboratory» ياكى «Python» دېگەن سۆزگە تونۇش بولغانلار</li>
          <li>ماشىنا ئۆگىنىش توغرىسىدا ئۆگىنىشنى خالايدىغانلار</li>
        </ul>
        <p className="text-lg">
          ئەگەر سىز «نۆل بىلىم» دېگەن سۆزگە جەلب بولۇپلا بۇ كىتابنى ئالدىڭىز، ئۇ ۋاقىتتا دەل سىزگە **توردىكى قوشۇمچە مەنبەلەر كېرەك** بولىدۇ.
        </p>
      </section>

      {/* Online Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">توردىكى ئۇچۇر مەنبەلىرى</h2>
        <p className="text-lg mb-4">
          بۇ كىتابنىڭ مەزمۇنى توردا ھەم بار. مەسىلەن:
        </p>
        <ul className="space-y-4">
          <li className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <strong>1–2-بۆلەك: Python نىڭ نۆلدىن باشلاپ كىرىش دەرسى</strong>
              <br />
              <a
                href="https://www.python.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Python رەسمىي تورى (python.org)
              </a>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <strong>ماشىنا ئۆگىنىش كىرىشى</strong>
              <br />
              <span>«دۇنيادىكى ئەڭ ئاسان ماشىنا ئۆگىنىش پروگرامما تۈزۈش قوللانمىسى» دېگەن ماۋزۇ ئاستىدا بار</span>
            </div>
          </li>
          <li className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <strong>Scikit-learn + Iris مىسالى</strong>
              <br />
              <span>«scikit-learn بىلەن ماشىنا ئۆگىنىشنى يولغا قويۇش» — تېخىمۇ كۆپ تەپسىلات Qiita دا</span>
            </div>
          </li>
        </ul>
        <p className="mt-5 text-lg">
          شۇڭا ئوخشىماي تور مەنبەلىرى بىلەن بىرلەشتۈرۈپ ئوقۇش، بۇ كىتابنىڭ پايدىسىنى كۆپلىتىدۇ.
        </p>
      </section>

      {/* Value of the Book */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">كىتاب شەكلىنىڭ ئەھمىيىتى</h2>
        <p className="text-lg mb-4">
          توردىكى ئۇچۇرلارنى كىتاب شەكلىدە يىغىشنىڭ چوقۇم پايدىسى بار:
        </p>
        <ul className="list-disc pr-6 mb-5 space-y-2 text-lg">
          <li>بۇتۇن مەزمۇننى «قۇش كۆزى» بىلەن كۆرۈش</li>
          <li>سىستېمىلىق ۋە تەرتىپلىك راھنامە</li>
          <li>ئۆگىنىش يۈرىشىنى سىزگە ماسلاشتۇرۇش</li>
        </ul>
        <p className="text-lg">
          لېكىن، Python نىڭلا بىر قۇرۇلمىسىغا ئېرىشىش ئۈچۈن **50 بەتلىك كىتاب يېتەرلىك ئەمەس**. سىستېما، مەلۇمات تۈرلىرى، بىكتورلار، ماشىنا ئۆگىنىش مودېلى — بۇنىڭ ھەر بىرى ئايرىم دەرىجىلىك ئۆگىنىشنى تەلەپ قىلىدۇ.
        </p>
      </section>

      {/* Pedagogical Insight */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">ئۆگىتىش ئۇسلۇبى توغرىسىدا</h2>
        <p className="text-lg mb-4">
          بۇ كىتابنىڭ ئاپتورى — TechAcademy نىڭ يېتەكچىسى، زامانىۋى تور ئۆگىنىش مۇتەخەسسىسى. شۇڭا ئوخشىماي، بىز «يەنە قانداق بولۇشى كېرەك؟» دېگەن سوئال قويۇشىمىز مۇمكىن.
        </p>
        <p className="text-lg mb-4">
          مەسىلەن، Udemy نىڭ ئەڭ چوڭ ئۆزگىرىشى نېمە؟
        </p>
        <ul className="list-disc pr-6 mb-5 space-y-2 text-lg">
          <li>«Python غا كىرىش» دېگەن ئومۇمىي ماۋزۇ ئەمەس،</li>
          <li>بەلكى «Python ئارقىلىق ئاپتوماتىك Excel دوكلاتلىرى قۇرۇش» دېگەن **«نېمە قىلالايسىز؟»** ماۋزۇسى</li>
        </ul>
        <p className="text-lg">
          بۇ، ئۆگىنىشچىلەرنى «بىلىم» ئەمەس، بەلكى **«مەسىلىلەرنىھەل قىلىش چارىسى»** غا يۆتكەيدۇ.
        </p>
        <div className="mt-6 p-5 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border-r-4 border-amber-500 text-amber-800">
          <p className="font-bold">
            ئەگەر داۋامى بولسا، «سىز نېمىلەرنى قىلالايدىغانلىقىڭىز» نى تەكىتلەيدىغان قۇرۇلما يېڭى ئۆگەنگۈچىلەر ئۈچۈن زور ياردەم بولىدۇ.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-bold text-purple-800 mb-4">خۇلاسە</h2>
        <p className="text-lg">
          «باشلىغۇچىلار ئۈچۈن ماشىنا ئۆگىنىشكە كىرىش» — بۇ بىر كىتاب ئەمەس، بەلكى **سانلىق دۇنياغا كىرىش ئېگىزى**. ئەگەر سىز بۇنى تور مەنبەلىرى بىلەن بىرلەشتۈرۈپ ئوقۇپ، ئۆزىڭىزنىڭ ماۋزۇلىق نىشانىڭىزنى قويۇپ ئالسىڭىز، بۇ كىتاب سىزنىڭ **ئىلغارلاش يۈرۈشىڭىزنى چىتىلەيدىغان چاقماق** بولالايدۇ.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
        © 2025 — KeLBiL | باشلىغۇچىلار ئۈچۈن ماشىنا ئۆگىنىشكە كىرىش
      </footer>
    </div>
  );
};

export default Blog47;