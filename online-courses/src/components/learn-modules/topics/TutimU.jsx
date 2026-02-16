import React, { useState } from "react";

const wolves = [
  {
    title: "قارا بۆرە — تۇتاشلىق ۋە جەمەت روھى",
    color: "border-gray-700 bg-gray-50 hover:bg-gray-100",
    desc: "قارا بۆرە جەمەتچانلىق، ئۆز-ئارا ئىشەنچ ۋە بىرلىككە ۋەكىللىك قىلىدۇ. ئۇ ھەرگىز يالغۇز ھەرىكەت قىلمايدۇ، ھەممىنى جەمەت نۇقتىسىدىن قاراپ باھالايدۇ. تۈركىي خەلقلەرنىڭ ئورتاق توتېمى بولغان بۆرەنىڭ بۇ شەكلى جەمئىيەتتىكى ھەمكارلىق ۋە ساداقەتنى ئەسلىتىدۇ.",
    example: "مىسال: بىر مەھەللە خەلقى توردا بىرلىشىپ، ئۆز تىلى ۋە مەدەنىيىتىنى قوغدايدىغان پائالىيەت باشلىسا — بۇ قارا بۆرە روھىدۇر.",
    quote: "جەمەتتە كۈچ بار، بىرلىكتە ھايات بار.",
    image: "https://i.pinimg.com/originals/28/82/0f/28820fe0c4cdb94a75293c099f947d6c.gif" // بوzkurt ئۇلگىسىدىكى رەسىم
  },
  {
    title: "كۆك بۆرە — يول باشلاش ۋە كېلەچەك",
    color: "border-blue-500 bg-blue-50 hover:bg-blue-100",
    desc: "كۆك بۆرە ئالغا قاراپ يۈرۈش، يېتەكچىلىك ۋە نىشان بەلگىلەشنىڭ سىمۋولى. كۆك رەڭ ئاسمان ۋە ئازادلىق بىلەن باغلىنىدۇ. قەدىمقى تۈركىي رىۋايەتلەردە كۆك بۆرە (ئاسېنا) تۈركلەرنىڭ ئانىسى ۋە يول كۆرسەتكۈچىسى بولۇپ، ئەرگېنېكون داستىنىدا خەلقنى ئازادلىققا باشلايدۇ.",
    example: "مىسال: بىر ياش ئالىم ئۇيغۇرچە سۈنئىي ئەقىل سىستېمىسى قۇرۇپ، باشقىلارغا يول ئېچىپ بەرسە — ئۇ كۆك بۆرەدۇر.",
    quote: "كۆك بۆرە يول باشلايدۇ، خەلق ئۇنىڭغا ئەگىشىدۇ.",
    image: "https://cdn.dribbble.com/userupload/23450048/file/original-cf55d357884008a2d65cb30bc9ed7eb1.gif" // بوzkurt بايرىقى (كۆك بۆرە بىلەن باغلىنىشلىق)
  },
  {
    title: "ئاق بۆرە — ئەقىل، بىلىم ۋە ئىزچىللىق",
    color: "border-green-500 bg-green-50 hover:bg-green-100",
    desc: "ئاق بۆرە ئەقىل بىلەن ھەرىكەت قىلىدۇ، ھېسسىياتقا ئەمەس، بىلىم ۋە تەھلىلگە تايىنىدۇ. ئۇ پاكلىق ۋە ئەقىل-پاراسەتنىڭ سىمۋولى بولۇپ، قەدىمقى رىۋايەتلەردە ئاق بۆرە خەلقنىڭ مەنىۋى يېتەكچىسى دەپ قارىلىدۇ.",
    example: "مىسال: سانلىق مەلۇماتقا ئاساسلىنىپ قارار چىقىرىدىغان پروگرامما ياكى ئوقۇتقۇچى — ئاق بۆرەنىڭ زامانىۋى ئىپادىسى.",
    quote: "ئەقىل بىلەن يول يۈرگەن — مەقسىتىگە يېتىدۇ.",
    image: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyenN5M3gwdGU0cG1ydTN4M2tpa255ejB6d2x4ZHJiZnNuYzVraTZvZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HNWUhtWIZam2I/source.gif" // ئاق بۆرەگە ماس كېلىدىغان رەسىم
  },
  {
    title: "قىزىل بۆرە — قارشىلىق ۋە باھادۇرلۇق",
    color: "border-red-500 bg-red-50 hover:bg-red-100",
    desc: "قىزىل بۆرە قورقماسلىق، زۇلۇمغا قارشى تۇرۇش ۋە قەيسەرلىكنى ئىپادىلەيدۇ. ئۇ جاسارەت ۋە كۈرەش روھىنىڭ سىمۋولى بولۇپ، تارىختىكى قەھرىمانلارغا ئوخشايدۇ.",
    example: "مىسال: ئادالەتسىزلىككە قارشى ئاۋاز چىقارغان ژورنالىست ياكى پائالىيەتچى — قىزىل بۆرە روھىغا ئىگە.",
    quote: "قىزىل بۆرە قورقمايدۇ، ئۇ كۈرەش قىلىدۇ.",
    image: "https://www.shutterstock.com/shutterstock/videos/1095932031/thumb/10.jpg?ip=x480" // شىنجاڭ بايرىقى redesign، قىزىل ئېلېمېنتلار بىلەن
  },
  {
    title: "بوز بۆرە — سىر، تەھلىل ۋە يول ئاچقۇچى",
    color: "border-indigo-500 bg-indigo-50 hover:bg-indigo-100",
    desc: "بوز بۆرە كۆرۈنمەس، لېكىن تەسىرى چوڭ. ئۇ ئۇچۇر توپلايدۇ، يول ئاچىدۇ، ئەقىل بىلەن ھەرىكەت قىلىدۇ. بۇ رۇخ تارىختىكى يوشۇرۇن كۈچلەرنى ئەسلىتىدۇ.",
    example: "مىسال: توردا مەلۇمات توپلاپ، ھەقىقەتنى ئاچقان تەتقىقاتچى — بوز بۆرەدۇر.",
    quote: "بوز بۆرە سىر ساقلايدۇ، لېكىن ھەقىقەتنى ئاچىدۇ.",
    image: "https://i.pinimg.com/originals/21/7e/a1/217ea1e550e46f15fc75a4b5cfe43770.gif" // گۆكتۈرك بوز بۆرە سىمۋولى
  },
];

const Blog44 = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedWolf, setSelectedWolf] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div
      dir="rtl"
      className="font-uyghur max-w-6xl mx-auto p-10 bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-2xl leading-loose text-gray-800"
    >
      {/* Hero Section */}
      <div className="relative mb-12 rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBukqY_15CyvGI3Q-zhLJbq8LQSHmiX2prwg&s"
          alt="كۆك بۆرە — تۈركىي خەلقلەرنىڭ سىمۋولى"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h1 className="text-5xl font-extrabold text-white text-center w-full pb-10 drop-shadow-2xl">
            بۆرە: ئۇيغۇر مەدەنىيىتىدىكى بەش روھى
          </h1>
        </div>
      </div>

      <p className="text-center text-xl text-gray-600 italic mb-12">
        تۇتاشلىق • يول باشلاش • ئەقىل • قارشىلىق • سىر
      </p>

      {/* Intro */}
      <section className="mb-16 text-lg bg-blue-50 p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">كىرىش سۆز</h2>
        <p className="mb-4">
          بۆرە ئۇيغۇر مەدەنىيىتىدە ئاددىي يىرتقۇچ ھايۋان ئەمەس، بەلكى جەمئىيەت قۇرۇلمىسى، قارار چىقىرىش ئۇسلۇبى ۋە رۇھىي قىممەتنىڭ سىمۋولىدۇر. قەدىمقى تۈركىي رىۋايەتلەردە، خۇسۇسەن ئاسېنا ئانا بۆرە داستىنىدا، بۆرە ئۇيغۇر ۋە باشقا خەلقلىرىنىڭ ئانىسى ۋە قوغدىغۇچىسى سۈپىتىدە تىلغا ئېلىنىدۇ.
        </p>
        <p>
          بۇ يازمىدا بەش روھنى ئىنتېرئاكتىپ كارتىلار ئارقىلىق تونۇشتۇرىمىز — ھەر بىرىنى چېكىپ تەپسىلاتىنى كۆرەلەيسىز!
        </p>
      </section>

      {/* Interactive Wolves Section - Accordion Style */}
      <section className="space-y-6">
        {wolves.map((w, i) => (
          <div
            key={i}
            className={`border-r-8 ${w.color} rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 ${
              expanded === i ? "ring-4 ring-blue-300" : ""
            }`}
            onClick={() => toggleExpand(i)}
          >
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-3xl font-bold text-blue-900">{w.title}</h3>
              <span className="text-3xl text-blue-600 transition-transform duration-300">
                {expanded === i ? "−" : "+"}
              </span>
            </div>

            {expanded === i && (
              <div className="px-6 pb-8 animate-fade-in">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
                />
                <p className="text-lg mb-6">{w.desc}</p>
                <p className="text-md text-gray-700 bg-white p-4 rounded-xl shadow">
                  <strong>زامانىۋى مىسال:</strong> {w.example}
                </p>
                <p className="mt-6 italic text-xl text-blue-800 font-semibold text-center">
                  "{w.quote}"
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedWolf(w);
                  }}
                  className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  بۇ تۇتىم روھىغا ئىگە ئادەم مىسالى كۆرسەت
                </button>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Modal for Example */}
      {selectedWolf && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setSelectedWolf(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{selectedWolf.title} روھىغا مىسال</h3>
            <p className="text-lg mb-6">
              زامانىۋى دۇنيادا بۇ رۇھنىڭ ئەڭ ياخشى ئىپادىسى: <br />
              <strong>{selectedWolf.example}</strong>
            </p>
            <button
              onClick={() => setSelectedWolf(null)}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              تاقا
            </button>
          </div>
        </div>
      )}

      {/* Conclusion */}
      <section className="mt-20 text-lg bg-gradient-to-r from-blue-100 to-green-100 p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">خۇلاسە</h2>
        <p className="mb-4">
          بەش بۆرە بىر مىللەتنىڭ ھاياتتا ياشاش ئىستراتېگىيەسىدۇر. بۇ ئىنتېرئاكتىپ بۆلۈملەر ئارقىلىق ھەر بىر رۇخنى تېخىمۇ چوڭقۇر ھېس قىلالىدىڭىز دەپ ئۈمىد قىلىمەن!
        </p>
        <p className="mt-6 text-2xl font-extrabold text-blue-900 text-center">
          بۆرە — ئۇيغۇر روھىنىڭ جەۋھىردۇر.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t-2 border-gray-300 text-center text-sm text-gray-600">
        © 2025 — ئۇيغۇر مەدەنىيىتى بلوگى |  
      </footer>
    </div>
  );
};

export default Blog44;