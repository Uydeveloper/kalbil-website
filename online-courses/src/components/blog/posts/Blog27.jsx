// Blog27.jsx

import React from 'react';

const Blog27 = () => {
  return (
    <article dir="rtl" lang="ug" className="max-w-4xl mx-auto px-4 py-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif] text-gray-800 leading-relaxed">
      {/* Header with enhanced styling */}
      <header className="mb-12 border-b pb-8">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5612AQH1bcGro1841w/article-cover_image-shrink_600_2000/B56ZdJl7_lH8AU-/0/1749286376204?e=2147483647&v=beta&t=0ITY1hLdD4xcOaPQbwpAZyE_xsyZlpJqMBQVnUtOKqs" 
          alt="باش رەسىم: پايساندا كۋانت ئالگورىزىمىنى يولغا قويۇش" 
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl mb-8"
        />
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            پايساندا كۋانت ئالگورىزىمىنى يولغا قويۇش
          </h1>
          <div className="inline-flex items-center gap-4 text-gray-600 text-lg">
            <span className="font-semibold">قاۋۇلجان</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <time dateTime="2025-12-09" className="bg-gray-100 px-3 py-1 rounded-full">
              2025-يىلى 12-ئاينىڭ 9-كۈنى
            </time>
          </div>
        </div>
      </header>

      {/* Table of Contents with modern design */}
      <nav className="mb-16 bg-gradient-to-l from-blue-50 to-white p-6 rounded-2xl border-r-4 border-blue-200 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <span className="text-blue-600">📑</span>
          مۇندەرىجە
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-2xl">
          {[
            "ئاساسلىق تېما",
            "بىرىنچى، كۋانت ئۇچۇرى دېگەن نېمە؟",
            "كۋانت ئۇچۇرىنىڭ تارىخى",
            "پايسان كۋانت ئالگورىزىمىنى يولغا قويۇش (Qiskit)",
            "كۋانت تەڭگىسىنى تاشلاش (ئۈستۈنكى ئورۇن)",
            "ئىككى كۇبىت بىلەن چىرمىشىپ كېتىشنى تەكشۈرۈش",
            "كۋانت ئۈستۈنكى ئورۇن ۋە كۋانت چىرمىشىپ كېتىشنىڭ ئاددىي تەجرىبىسى",
            "ئاخىرىدا",
            "تەۋسىيە قىلىنغان فىلىملەر"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start group">
              <span className="text-blue-500 mr-3 mt-1">•</span>
              <a href={`#section-${idx}`} className="text-gray-700 hover:text-blue-600 hover:translate-x-1 transition-all duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Sections with improved typography */}
      <div className="space-y-16">
        <section id="section-0" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">ئاساسلىق تېما</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-2xl leading-9">
              يېقىنقى ئىزدىنىشىم كىۋانىت دۇنياسىدا   ئۆتكۈزۈلگەن چەكلىك ۋاقىتلىق بلگەنلىرم  — 
              <strong className="text-blue-700"> «چىرمىشىپ كەتكەن پەيت: [كۋانت، ئوكيان، ئالەم] × سەنئەت» </strong> 
              — مېنىڭ كۋانت ئۇچۇرى ساھەسىگە بولغان قىزىقىشىمنى قوزغىدى.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border-l-4 border-purple-300 my-6">
              <p className="italic text-lg">
                مەن فىزىكا ياكى ئۇچۇر ساھەسىدىن كۋانت مېخانىكىسىنى ياكى كۋانت ئۇقۇملىرىنى تولۇق تەتقىق قىلمىغان بولساممۇ، 
                ئىزدىنىشمدىكى <em className="font-semibold text-purple-700">كۋانت سەنئىتى</em> مېنىڭ بۇ يىل ئىچىدە جۇش ئۇرغان 
                ئەڭ ئاجايىپ ھېسسىياتلىرىمنىڭ بىرى بولۇپ قالدى.
              </p>
            </div>
          </div>
        </section>

        <section id="section-1" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">❓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">بىرىنچى، كۋانت ئۇچۇرى دېگەن نېمە؟</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-xl font-bold text-green-700 mb-4">ئاددىي چۈشەندۈرۈش:</h3>
            <p className="text-lg mb-4">
              كۋانت ئۇچۇرى — <strong className="text-green-700">كۋانت مېخانىكىسىنىڭ خۇسۇسىيەتلىرىنى ئۇچۇر بىر تەرەپ قىلىشتا ئىشلىتىدىغان</strong> ساھە.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-300">
                <h4 className="font-bold text-lg mb-3 text-gray-800">كلاسسىك ئۇچۇر</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white">0</div>
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white">1</div>
                  </div>
                  <p className="text-gray-700">پەقەت 0 ياكى 1 بولالايدۇ</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-5 rounded-xl border border-green-300">
                <h4 className="font-bold text-lg mb-3 text-gray-800">كۋانت ئۇچۇرى</h4>
                <div className="space-y-2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      0+1
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      ⚛
                    </div>
                  </div>
                  <p className="text-gray-700">0 ۋە 1 نى بىرلا ۋاقىتتا ساقلايدۇ</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-6 text-gray-800">كۋانت ئۇچۇرىنىڭ تۆت ئاساسىي خۇسۇسىيىتى:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "ئۈستۈن-ئۈستى ھالەت",
                desc: "كۋانت بىت 0 ۋە 1 نى بىرلا ۋاقىتتا ساقلايدۇ",
                icon: "🌀",
                color: "from-blue-100 to-cyan-100"
              },
              {
                title: "كۋانت چىرمىشىشى",
                desc: "ئىككى كۋانت جىسىم بىر-بىرى بىلەن ماسلىشىدۇ",
                icon: "🔗",
                color: "from-purple-100 to-pink-100"
              },
              {
                title: "ھالەت يىكىلىشى",
                desc: "كۆزىتىش بىلەن كۋانت ھالىتى 0 ياكى 1 گە قارارلايدۇ",
                icon: "👁️",
                color: "from-green-100 to-emerald-100"
              },
              {
                title: "كىلونلاشقا بولمايدىغانلىق",
                desc: "كۋانت ھالىتىنى مۇكەممەل كۆچۈرۈش مۇمكىن ئەمەس",
                icon: "🚫",
                color: "from-red-100 to-orange-100"
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Code sections with enhanced styling */}
        <section id="section-4" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">پايساندا كۋانت ئالگورىزىمىنى يولغا قويۇش</h2>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Qiskit ئورنىتىش:</h3>
            <div className="bg-gray-900 text-left rounded-xl p-4 overflow-x-auto">
              <code className="text-green-300 text-lg font-mono">
                pip install qiskit qiskit-aer
              </code>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-300 font-mono">coin.py</span>
              </div>
              <pre className="p-6 overflow-x-auto text-left text-sm">
                <code className="text-green-400  font-mono leading-relaxed">
{`from qiskit import QuantumCircuit
from qiskit_aer import Aer
from qiskit import transpile

# كۋانت زەنجىر قۇرۇش
qc = QuantumCircuit(1, 1)
qc.h(0)          # سوپەرپوزىتسىيە
qc.measure(0, 0)

# ماۋھۇملاشتۇرغۇچ
backend = Aer.get_backend("qasm_simulator")
compiled = transpile(qc, backend)

job = backend.run(compiled, shots=1000)
result = job.result()

# نەتىجىنى كۆرسىتىش
print(result.get_counts())`}
                </code>
              </pre>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-blue-200">
              <h4 className="text-xl font-bold mb-3 text-blue-700">نەتىجە:</h4>
              <div className="bg-white p-4 text-left rounded-xl border border-blue-300">
                <code className="text-lg font-mono text-gray-800">
                  {'{'}'1': 527, '0': 473{'}'}
                </code>
                <p className="mt-2 text-gray-600">≈ 50% 0، 50% 1</p>
              </div>
            </div>
          </div>
        </section>

        {/* History timeline */}
        <section id="section-2" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📜</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">كۋانت ئۇچۇرىنىڭ تارىخى</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-purple-300 ml-4">
            {[
              {year: "1900", event: "كۋانت مېخانىكىسىنىڭ تۇغۇلۇشى", icon: "🌌"},
              {year: "1935", event: "شرۆدىنگېرنىڭ مۈشۈكى", icon: "🐱"},
              {year: "1935", event: "EPR پارادوكسى", icon: "⚛️"},
              {year: "1982", event: "كۋانت كومپيۇتېر پەرەزى", icon: "💻"},
              {year: "1994", event: "شور ئالگورىتىمى", icon: "🔐"},
              {year: "2000+", event: "ھازىرقى زامان", icon: "🚀"}
            ].map((item, idx) => (
              <div key={idx} className="mb-8 relative">
                <div className="absolute -left-[34px] w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-lg text-gray-800">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion section */}
        <section id="section-7" className="scroll-mt-20">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">ئاخىرىدا</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                كۋانت ئۇچۇرى ھەققىدە بۇ ماقالىنى يېزىپ باققاندىن كېيىن، مەن باشىدا 
                <strong className="text-blue-700"> «بۇ قانداق قىيىن نەرسە» </strong>
                دەپ سەزگەن بولساممۇ، ھەقىقەتەن تەكشۈرۈپ باققاندا ئۇ ناھايىتى قىزىقارلىق ۋە بىزنىڭ ئىزچىل چۈشىنىشىمىزگە ئىگە بولۇشى مۇمكىن ئىكەنلىكىنى بايْقىدىم.
              </p>
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-xl italic border-l-4 border-blue-400 my-6">
                <p className="text-gray-800">
                  ئەگەر سىز راستىلا كىۋانىت مېخانىكىسىنى ئۆگىنسىڭىز، بۇ تېخىمۇ چوڭ دۇنيا ئىچىگە كىرىپ كېتىشىڭىزگە يول قويىدۇ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended film */}
        <section id="section-8" className="scroll-mt-20">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <span className="text-amber-600">🎬</span>
              تەۋسىيە قىلىنغان فىلىملەر
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">«تەقلىد قىلىش ئويۇنى»</h3>
              <p className="text-gray-700 text-lg mb-4">
                <em>(The Imitation Game - ئېنگىما ۋە گېنىي ماتېماتىكىنىڭ سىرى)</em>
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">2014</span>
                <span>بېنېدىكت كەمبەربەچ</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p className="mb-2">© 2025 قاۋۇلجان. بارلىق ھوقۇقلار مۇھاپىزەتلەنگەن.</p>
        <p className="text-sm">بۇ ماقالىدە IBM Qiskit قوللىنىلدى</p>
      </footer>
    </article>
  );
};

export default Blog27;