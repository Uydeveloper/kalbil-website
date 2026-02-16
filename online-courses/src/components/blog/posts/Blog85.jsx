// quantumCourse.jsx
import React, { useState } from 'react';

const QuantumCourse = () => {
  const [activeTab, setActiveTab] = useState(0);

  const chapters = [
    { id: 1, title: "كىرشۈش: نىمە ئۈچۈن كۋانتۇم؟" },
    { id: 2, title: "ماتېماتېكا تەييارلىقى" },
    { id: 3, title: "تولقۇن-زارا نازارىتى" },
    { id: 4, title: "شىروگېنگېر تەڭلىمەسى" },
    { id: 5, title: "ئۆپراتورلار ۋە Eigenstates" },
    { id: 6, title: "ئۆلچەش ۋە Decoherence" },
    { id: 7, title: "Spin ۋە Pauli ماترىتسىلار" },
    { id: 8, title: "ئانتەنھالانما" },
    { id: 9, title: "Fermions vs Bosons" },
    { id: 10, title: "پەرتۇرپاتسىيە ۋە WKB" },
    { id: 11, title: "كۋانتۇم سانائەت" },
    { id: 12, title: "ئەمەلىي قوللىنىشلار" },
    { id: 13, title: "مەشھۇر تەجرىبىلەر" },
    { id: 14, title: "كۋانتۇم قوراللار" },
    { id: 15, title: "كەلگۈسى ۋە ئەھۋال" },
    { id: 16, title: "مەسىلە-توپلام" },
    { id: 17, title: "كىتاب ۋە رېسۇرسلار" },
  ];

  const content = [
    // 1
    <>
      <p className="mb-4">كلاسسىك فىزىكا مىكرو دۇنيانى چۈشەندۈرەلمەيدۇ. مەسىلەن:</p>
      <ul className="list-disc pr-5 space-y-2 mb-4">
        <li>فوتولېكتىر ئۈچۈرۈش: نۇر زىچلىقى يۇقىرى بولسىمۇ، ئەگەر تالغۇنۇزۇنلۇقى تۆۋەن بولسا electron چىقىقمايدۇ.</li>
        <li>ئاتوم سپېكتىرلار: كلاسسىك نەزەرىيە بويىچە ئاتوم يوقىلىپ كېتىشى كېرەك.</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
        <h4 className="font-bold text-blue-800">مېسال: فوتون ئېنېرگىيىسى</h4>
        <p><code className="bg-gray-100 px-1 rounded">E = hν</code> — بۇ يەردىكى <code>h</code> پلانك دۆلىتى، <code>ν</code> تالغۇنۇزۇنلۇق.</p>
      </div>
    </>,

    // 2
    <>
      <p className="mb-4">كۋانتۇم ھېسابلىرىنى ئىشلىتىش ئۈچۈن تۆۋەندىكى ماتېماتىكا زۆرۈر:</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <li className="flex items-start">
          <span className="text-green-600 mr-2">✓</span> سىزىقلىق ئالگېبىرا (ماترىتسا، eigenvalue)
        </li>
        <li className="flex items-start">
          <span className="text-green-600 mr-2">✓</span> Fourier تەگشۈكۈرۈش
        </li>
        <li className="flex items-start">
          <span className="text-green-600 mr-2">✓</span> دېففىرېنسىئال تەڭلەمە
        </li>
        <li className="flex items-start">
          <span className="text-green-600 mr-2">✓</span> ئېھتىمالىيەت نەزەرىيىسى
        </li>
      </ul>
      <div className="bg-gray-50 p-4 rounded">
        <p><strong>مەشىق:</strong> <code>[[0,1],[1,0]]</code> نىڭ eigenvalue لىرى: <code>+1</code> ۋە <code>-1</code></p>
      </div>
    </>,

    // 3
    <>
      <p>كۋانتۇم دۇنياسىدا زەررە <code>Ψ(x,t)</code> دېگەن تولقۇن فۇنكسىيىسى بىلەن سۈرەتلىنىدۇ.</p>
      <div className="mt-4 bg-indigo-50 p-4 rounded">
        <p><strong>ئېھتىمالىيەت:</strong> <code>|Ψ(x,t)|^2</code> — بۇ زەررە x نۇقتىسىدا بولۇش اېتىمالىيىتى.</p>
      </div>
      <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r">
        <p className="font-mono">Ψ(x) = A e^(ikx) → |Ψ|^2 = |A|^2</p>
        <p className="text-sm mt-1">بۇ توغرىسىز تولقۇن — زەررە ھەممىلا جايدا بىردەك بولىدۇ.</p>
      </div>
    </>,

    // 4
    <>
      <p className="mb-3"><strong>ۋاقىتلىق:</strong> <code>iħ ∂Ψ/∂t = ĤΨ</code></p>
      <p className="mb-4"><strong>ۋاقىتسىز:</strong> <code>Ĥψ = Eψ</code></p>
      <div className="bg-emerald-50 p-4 rounded">
        <h4 className="font-bold text-emerald-800">چەكسىز تۆتتۈر قۇرۇلمىسى</h4>
        <p>ψ_n(x) = √(2/L) sin(nπx/L)</p>
        <p>E_n = (n^2 π^2 ħ^2) / (2m L^2)</p>
      </div>
    </>,

    // 5
    <>
      <ul className="space-y-2 mb-4">
        <li><code>x̂ = x</code> — پوزىتسىيە ئۆپراتورى</li>
        <li><code>p̂ = -iħ ∂/∂x</code> — موۋامەت ئۆپراتورى</li>
        <li><code>[x̂, p̂] = iħ</code> — كوممۇتاتور</li>
      </ul>
      <div className="bg-amber-50 p-4 rounded border border-amber-200">
        <p className="font-bold">ھەيزېنبېرگ ئانچىلىق نازارىيىسى:</p>
        <p>Δx Δp ≥ ħ/2</p>
      </div>
    </>,

    // 6
    <>
      <p className="mb-3">ئۆلچەش — بۇ تولقۇن فۇنكسىيىسىنى "collapse" قىلىش دېگەن سۆز.</p>
      <div className="bg-red-50 p-4 rounded">
        <p className="font-bold">Double-slit تەجرىبىسى:</p>
        <p>ئەگەر قايسى تېشىقتىن ئۆتكەنلىكىنى تېكشۈرسەڭىز، interference سۈرەت يوقىلىدۇ!</p>
      </div>
      <p className="mt-3 text-sm text-gray-600">Decoherence — مۇھىت بىلەن ئۆزئارا تەسىر سەۋەبلىك كۋانتۇم خۇسۇسىيەتنىڭ يوقىلىشى.</p>
    </>,

    // 7
    <>
      <p>Spin-1/2 زەررىلەر (مەسىلەن، electron) نىڭ ئىككى ھالىتى بار: ↑ ۋە ↓</p>
      <div className="mt-4 bg-cyan-50 p-4 rounded">
        <p><strong>Pauli ماترىتسىلار:</strong></p>
        <p>σ_x = [[0,1],[1,0]], σ_z = [[1,0],[0,-1]]</p>
      </div>
      <div className="mt-3 bg-blue-50 p-3 rounded">
        <p><code>|ψ⟩ = (|↑⟩ + |↓⟩)/√2</code> — بۇ ھالەتتە z-يۆنىلىش بويىچە ↑ ياكى ↓ چىقىش ئېھتىمالىيىتى 50%.</p>
      </div>
    </>,

    // 8
    <>
      <p>ئانتەنھالانما — ئىككى زەررە ئارىلىق مۇناسىۋەت، ھەتتا ئۇلار مىڭلەگەن كىلومېتىر ئۇزاقلىقتا بولسىمۇ.</p>
      <div className="mt-4 bg-violet-50 p-4 rounded">
        <p><strong>Bell state:</strong> <code>|Φ⁺⟩ = (|00⟩ + |11⟩)/√2</code></p>
        <p>بۇ ھالەتتە ئىككى قۇبىتنىڭ ئۆلچىمى بىردەك بولىدۇ!</p>
      </div>
      <p className="mt-3">كۋانتۇم تېلېپورتاتسىيە — ھالەتنى ئۇچۇرتۇش، ئەمما ماتېرىيە ئۇچۇرمىيدۇ.</p>
    </>,

    // 9
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-red-50 p-4 rounded">
          <h4 className="font-bold text-red-800">Fermions (electron)</h4>
          <p>Pauli چەكلىش پرىنسىپى: بىر ھالەتكە ئوخشاش فېرمىيون كىرمەيدۇ.</p>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <h4 className="font-bold text-green-800">Bosons (فوتون)</h4>
          <p>بارلىق زەررىلەر بىر ھالەتكە توپلانغاندا Bose-Einstein condensate پەيدا بولىدۇ.</p>
        </div>
      </div>
    </>,

    // 10
    <>
      <p><strong>1-تەرتىپلىق پەرتۇرپاتسىيە:</strong></p>
      <p className="bg-gray-100 p-2 rounded my-2 font-mono">E_n^(1) = ⟨ψ_n^0| H' |ψ_n^0⟩</p>
      <div className="bg-orange-50 p-3 rounded mt-3">
        <p>مەسىلەن: SHO غا <code>εx^4</code> قوشۇلسۇن → <code>E_0</code> ئۆزگىرىدۇ.</p>
      </div>
    </>,

    // 11
    <>
      <ul className="space-y-2 mb-4">
        <li><strong>Fermi-Dirac:</strong> <code>1 / (exp((E-μ)/kT) + 1)</code> — electron لار</li>
        <li><strong>Bose-Einstein:</strong> <code>1 / (exp((E-μ)/kT) - 1)</code> — فوتونلار</li>
      </ul>
      <p>سېمىكوندۇكتورلاردىكى carriers — Fermi-Dirac تارقىلىشى بويىچە.</p>
    </>,

    // 12
    <>
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mr-2">لەزر</span>
          <p>سۇپېرستىمۇلاتېد ئېمېتتىن — فوتوننىڭ فوتوننى چىقىرىشى.</p>
        </div>
        <div className="flex items-start">
          <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded mr-2">MRI</span>
          <p>پروتون سپىنىنىڭ مەغنايتىك مەيداندىكى رېزونانسى.</p>
        </div>
        <div className="flex items-start">
          <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-2 py-1 rounded mr-2">قۋانتۇم ھېسابلاش</span>
          <p>قۇبىتلار، گېيتلار، xata تۈزىتىش — كەلگۈسىنىڭ ئاساسى.</p>
        </div>
      </div>
    </>,

    // 13
    <>
      <ul className="list-disc pr-5 space-y-2">
        <li><strong>Double-slit:</strong> تولقۇن خۇسۇسىيىتىنىڭ دەلىلى</li>
        <li><strong>Stern-Gerlach:</strong> spin quantization نىڭ دەلىلى</li>
        <li><strong>Bell test:</strong> "يەرلىك رېئالىزىم" نىڭ يالغانلىقىنى ئىسپاتلايدۇ</li>
      </ul>
    </>,

    // 14
    <>
      <div className="bg-gray-50 p-4 rounded mb-4">
        <p><strong>Qiskit (IBM)</strong> — Python ئارقىلىق كۋانتۇم دەسلەپكىسى بىلەن ئىشلەش.</p>
      </div>
      <div className="bg-black text-green-400 p-3 rounded font-mono text-sm whitespace-pre">
        {`from qiskit import QuantumCircuit\nqc = QuantumCircuit(2)\nqc.h(0)\nqc.cx(0,1)`}
      </div>
    </>,

    // 15
    <>
      <p className="font-bold mb-2">تېخنىكا چەكلىمىلىرى:</p>
      <ul className="list-disc pr-5 mb-3">
        <li>Coherence time قىسقىچىلىك</li>
        <li>Xاتا دەرىجىسى يۇقىرى</li>
        <li>قۇبىت سانى كۆپەيتىش قىيىن</li>
      </ul>
      <p className="font-bold">ئىجتىمائىي تەسىر:</p>
      <p>كلاسسىك شىفىرلىش (RSA) چۈشۈرۈلۈشى مۇمكىن — shu sababli "post-quantum cryptography" زۆرۈر.</p>
    </>,

    // 16
    <>
      <div className="space-y-4">
        <div className="bg-yellow-50 p-3 rounded">
          <p><strong>مەسىلە:</strong> چەكسىز تۆتتۈر قۇرۇلمىسىدا <code>L = 1 nm</code> بولغاندا <code>E_1 = ?</code></p>
          <p><strong>جىواب:</strong> ≈ 0.376 eV</p>
        </div>
        <div className="bg-blue-50 p-3 rounded">
          <p>H گېيتى <code>|0⟩</code> نى <code>(|0⟩ + |1⟩)/√2</code> غا ئۆگۈرتىدۇ. |1⟩ چىقىش ئېھتىمالىيىتى؟</p>
          <p><strong>جىواب:</strong> 50%</p>
        </div>
      </div>
    </>,

    // 17
    <>
      <div className="space-y-3">
        <div className="bg-gray-100 p-3 rounded">
          <p className="font-bold">ئاساسىي كىتابلار:</p>
          <ul className="list-disc pr-5 mt-1">
            <li>Nielsen & Chuang — Quantum Computation</li>
            <li>Griffiths — Introduction to QM</li>
            <li>Sakurai — Modern Quantum Mechanics</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">ئۈنۈملۈك مەنبەلەر:</p>
          <p>qiskit.org/textbook • MIT OCW 8.04 • Cirq Tutorials</p>
        </div>
      </div>
    </>,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-right" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            كۋانتۇم فىزىكىسى — مۇكەممەل دەرسلىك
          </h1>
          <p className="text-gray-600 mt-2">
            باشلىغۇچتىن يۇقىرى سەۋىيەگىچە 17 باب • قاۋۇلجان تەرىپىدىن تەييارلانغان
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Chapters */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-5 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">مەزمۇن</h2>
              <nav className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
                {chapters.map((ch, idx) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-right py-2 px-3 rounded-lg transition-all duration-200 ${
                      activeTab === idx
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    <span className="font-medium">{ch.id}.</span> {ch.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-5">
                {chapters[activeTab].id}. {chapters[activeTab].title}
              </h2>
              <div className="prose prose-blue max-w-none">
                {content[activeTab]}
              </div>
            </div>

            <footer className="mt-8 text-center text-gray-600 text-sm">
              <p>© 2026 •  KeLBiL  كۋانتۇم فىزىكىسى تەتقىقاتى  •   </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default QuantumCourse;