// Blog87.jsx
import React, { useState } from 'react';

const TransformerCourse = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    { id: 1, title: "نېمە؟ ۋە نېمىشقا مۇھىم؟" },
    { id: 2, title: "ئۆزىگە دىققەت مېخانىزمى" },
    { id: 3, title: "قۇرۇلمىسى: سوئال-ئاچقۇچ-قىممەت" },
    { id: 4, title: "كۆپ باشلىق دىققەت" },
    { id: 5, title: "مەشھۇر مودېللار" },
    { id: 6, title: "ئەمەلىي مىسال 1: LLM سۆز تەxminى" },
    { id: 7, title: "ئەمەلىي مىسال 2: ViT رەسىم تەھلىلى" },
    { id: 8, title: "React كودى (Qiskit ئىشلىتىش)" },
  ];

  const content = [
    // 1. نېمە؟ ۋە نېمىشقا مۇھىم؟
    <>
      <p className="mb-4">
        <strong>ئۆزگەرتكۈچ مودېل** — بۇ 2017-يىلى "دېققىت سىزگە كېرەكلىك بولغان ھەممە نەرسە" (Attention is All You Need) ماقالەسى بىلەن پەيدا بولغان، چوڭ تىپتىكى تىل مودېلى (LLM) نىڭ ئاساسى بولغان نېرۋا تورى قۇرۇلمىسى. </strong>
      </p>
      <div className="bg-green-50 p-4 rounded mb-4">
        <p><strong>ئالدىنقى مودېللار بىلەن سېلىشتۇرۇش:</strong></p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>RNN/LSTM:</strong> تىزىملىك بىر تەرەپ قىلىش، ئۇزۇن مۇددەتلىك باغلىنىشنى بايقالمايدۇ.</li>
          <li><strong>CNN:</strong> يەرلىك ئۇچۇرغا تايىنىدۇ، غەيرىيەرلىك تەسىرلەرنى بايقالمايدۇ.</li>
          <li><strong>ئۆزگەرتكۈچ:</strong> <span className="text-blue-700 font-bold">پاراللېللاشتۇرۇش + ئۆزىگە دىققەت</span> — ھەممىنى بىرلا ۋاقىتتا بايقالايدۇ!</li>
        </ul>
      </div>
      <p>بۇ مودېل ChatGPT, Claude, Llama قاتارلىق بارلىق زامانىۋى LLM لارنىڭ ئاساسى.</p>
    </>,

    // 2. ئۆزىگە دىققەت مېخانىزمى
    <>
      <p>ئۆزىگە دىققەت — بۇ مودېلنىڭ <strong>"نېمەگە دىققەت قىلىش كېرەك؟"</strong> دېگەن سۇئالغا جاۋاب بېرىش ئۇسۇلى.</p>
      <div className="mt-4 bg-blue-50 p-4 rounded">
        <p><strong>مىسال:</strong> "جۈمە كۈنى، سوتچى بىر ھۆكۈم چىقاردى."</p>
        <p>بۇ يەردە "ھۆكۈم" نى چۈشەندۈرۈش ئۈچۈن مودېل "سوتچى" ۋە "چىقىرىلغان" غا <span className="text-red-600">ئېغىر دىققىت</span> قىلىشى كېرەك.</p>
      </div>
      <div className="mt-4 bg-gray-100 p-3 rounded">
        <h4 className="font-bold mb-2">مېخانىزم بېسقۇچلىرى:</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li>ھەر بىر سۆزنى <strong>ۋېكتور قىستۇرمىسى</strong> (Embedding) غا ئايلاندۇرۇش</li>
          <li>سىزىقلۇق مۇناسىۋەتنى <strong>نۇقتا كۆپەيتمىسى</strong> (Dot Product) بىلەن ھېسابلاش</li>
          <li>نەتىجىنى <strong>Softmax</strong> بىلەن 0-1 ئىلىپكىلىك <strong>دىققەت ئېغىرلىقى</strong> غا ئايلاندۇرۇش</li>
          <li>قىممەت ۋېكتورلىرىنى دىققەت ئېغىرلىقى بىلەن كۆپەيتىپ، <strong>يىغىندى</strong> قىلىش</li>
        </ol>
      </div>
    </>,

    // 3. قۇرۇلمىسى: سوئال-ئاچقۇچ-قىممەت
    <>
      <p>ئۆزگەرتكۈچ مودېل ھەر بىر سۆز ئۈچۈن ئۈچ خىل ۋېكتور ھاسىل قىلىدۇ:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-purple-100 p-3 rounded">
          <h4 className="font-bold">سوئال (Query - Q)</h4>
          <p>بۇ سۆز "نېمەنى ئىزدەيدۇ؟"</p>
        </div>
        <div className="bg-indigo-100 p-3 rounded">
          <h4 className="font-bold">ئاچقۇچ (Key - K)</h4>
          <p>بۇ سۆز "نېمە بىلەن تونۇشتۇرۇلۇشى كېرەك؟"</p>
        </div>
        <div className="bg-cyan-100 p-3 rounded">
          <h4 className="font-bold">قىممەت (Value - V)</h4>
          <p>بۇ سۆزنىڭ ئاسلى مەزمۇنى</p>
        </div>
      </div>
      <div className="mt-4 bg-yellow-50 p-3 rounded">
        <p className="font-mono">
          دىققەت(Q, K, V) = softmax( (Q · Kᵀ) / √d ) · V
        </p>
        <p className="text-sm mt-1">بۇ يەردىكى <code>d</code> — ۋېكتور ئۆلچىمى</p>
      </div>
    </>,

    // 4. كۆپ باشلىق دىققەت
    <>
      <p>بىرلا دىققەت بىلەن سۆزنىڭ ھەممە جەھەتلىرىنى بايقالمايدۇ. شۇڭا:</p>
      <div className="mt-3 bg-amber-50 p-4 rounded">
        <p><strong>كۆپ باشلىق دىققەت (Multi-Head Attention)</strong> — سۆزنىڭ تۈرلۈك جەھەتلىرىنى (مەنى, گرامماتىكا, ئۇچۇر) ئايرىم-ئايرىم بايقالىشى.</p>
      </div>
      <div className="mt-4">
        <p>مەسىلەن: GPT-3 دا <code>h = 96</code> ياكى ئۇنىڭدىن كۆپرەك باش بار! ھەر بىر باش بىر جەھەتنى بايقالىدۇ.</p>
      </div>
    </>,

    // 5. مەشھۇر مودېللار
    <>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-bold text-blue-800">GPT (OpenAI)</h4>
          <p>پەقەت <strong>كودلىغۇچ</strong> (Decoder-only) — سۆزنى بىر-بىر كېيىنكى سۆزنى پەرەز قىلىدۇ. ChatGPT نىڭ ئاساسى.</p>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <h4 className="font-bold text-green-800">BERT (Google)</h4>
          <p>پەقەت <strong>كودئاچقۇچ</strong> (Encoder-only) — سۆزنىڭ ئوتتۇرىسىدىكى يوشۇرۇلغان سۆزلەرنى تولدۇرىدۇ. Google ئىزدەشنىڭ ئاساسى.</p>
        </div>
        <div className="bg-violet-50 p-4 rounded">
          <h4 className="font-bold text-violet-800">Vision Transformer (ViT)</h4>
          <p>رەسىمنى ياماقلىرىغا بۆلۈپ، ھەر بىرىنى "سۆز" دەپ تەسەۋۋۇر قىلىدۇ. رەسىم تەھلىلىدە CNN دىن ئېشىپ كەتتى!</p>
        </div>
      </div>
    </>,

    // 6. مىسال 1: LLM سۆز تەxminى
    <>
      <div className="bg-gray-50 p-4 rounded">
        <p><strong>كىرگۈزۈش:</strong> "جۈمە كۈنى، سوتچى بىر..."</p>
        <p><strong>چىقىرىش:</strong> مودېل "ھۆكۈم" دېگەن سۆزگە ئېغىرلىق بېرىدۇ، چۈنكى "سوتچى" ۋە "جۈمە" بىلەن مۇناسىۋىتى بار.</p>
      </div>
      <div className="mt-4 bg-black text-green-400 p-3 rounded font-mono">
        Input: ["جۈمە", "كۈنى", "،", "سوتچى", "بىر"]<br/>
        Output probabilities: ["..." : 0.01, "جۈملە": 0.05, "ھۆكۈم": <span className="text-yellow-300">0.82</span>, "...": 0.12]
      </div>
    </>,

    // 7. مىسال 2: ViT رەسىم تەھلىلى
    <>
      <p>ViT رەسىمنى 14x14 پىكسېللىك <strong>ياماقلارغا</strong> بۆلۈپ، ھەر بىر ياماقنى بىر "سۆز" دەپ قارايدۇ.</p>
      <div className="mt-3 bg-gray-100 p-3 rounded">
        <p><strong>قەدەم-بەقدەم:</strong></p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>224x224 رەسىمنى → 256 دانە 14x14 ياماققا بۆلۈش</li>
          <li>ھەر بىر ياماقنى → ۋېكتور قىستۇرمىسىغا ئايلاندۇرۇش</li>
          <li>ئورۇن ئۇچۇرى قوشۇش</li>
          <li>ئۆزگەرتكۈچ مودېل بىلەن بىر تەرەپ قىلىش</li>
          <li>چىقىرىش: "بۇ رەسىمدە بىر پىل ۋە بىر دەرەخ بار"</li>
        </ol>
      </div>
    </>,

    // 8. React كودى
    <>
      <h4 className="font-bold mb-3">Qiskit بىلەن كۋانتۇم دىققەت مودېلىنى سىمىلاتېر قىلىش</h4>
      <div className="bg-gray-900 text-green-300 p-4 rounded font-mono text-sm">
        {`# كۇۋانتىم دىققىت سىرىتى (Quantum Attention Circuit)
from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator

qc = QuantumCircuit(4)  # 2 قۇبىت كىرگۈزۈش + 2 ياردەمچى

# سوئال (Q) = |0⟩, ئاچقۇچ (K) = |1⟩
qc.x(1)  # K نى |1⟩ غا ئۆزگەرتىش

# دىققەت ئېغىرلىقىنى كۇۋانتىم ئۆلچەش بىلەن بەكىتىش
qc.h(2)  # ياردەمچى قۇبىت
qc.ccx(0,1,2)  # Controlled-Controlled-NOT

# چىقىرىش
qc.measure_all()

# سىمىلاتېر
sim = AerSimulator()
compiled = transpile(qc, sim)
result = sim.run(compiled, shots=1000).result()
print(result.get_counts())`}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        <em>ئەمەلىي LLM لارنىڭ دىققەت مېخانىزمى كۇۋانتىمغا ئوخشىمايدۇ، لېكىن بۇ كود دىققەت ئېغىرلىقىنى قانداق باشقۇرۇشنى كۆرسىتىدۇ.</em>
      </p>
    </>,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 text-right" dir="rtl">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800">
            ئۆزگەرتكۈچ مودېلى (Transformer) — مۇكەممەل دەرسلىك
          </h1>
          <p className="text-gray-600 mt-2">
            LLM, ViT, BERT, GPT نىڭ ئاساسى • 8 باب • قاۋۇلجان تەرىپىدىن تەييارلانغان
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-5 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">مەزمۇن</h2>
              <nav className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
                {sections.map((sec, idx) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-right py-2 px-3 rounded-lg transition-all duration-200 ${
                      activeTab === idx
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
                    }`}
                  >
                    {sec.id}. {sec.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-indigo-700 mb-5">
                {sections[activeTab].id}. {sections[activeTab].title}
              </h2>
              <div className="prose prose-indigo max-w-none">
                {content[activeTab]}
              </div>
            </div>

            <footer className="mt-8 text-center text-gray-600 text-sm">
              <p>© 2026 • KeLBiL  سۈنئىي ئەقىل ئۆگىنىش دەرسلىكلىرى •   </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TransformerCourse;