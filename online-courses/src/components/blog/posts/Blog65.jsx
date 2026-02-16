// Blog65.jsx — Next.js ئۈچۈن React Component
'use client';

import { useState, useEffect, useRef } from 'react';

const Blog65 = () => {
  const myRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const containerRef = useRef(null);

  // سكىرول قىلغاندا فېئېل (active slide) نى يېڭىلاش
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const slides = containerRef.current.querySelectorAll('.slide');
      const scrollTop = window.scrollY + window.innerHeight / 2;

      slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const elemTop = rect.top + window.scrollY;
        const elemBottom = elemTop + rect.height;
        if (scrollTop >= elemTop && scrollTop <= elemBottom) {
          setActiveSlide(i);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      title: "دەرىجە 1: كىۋانىت كومپيۇتېر ۋە كىۋانىت ماشىنا ئۆگىتىشنىڭ كىرىشى",
      subtitle: "كىۋانىت كومپيۇتېر دېگەن نېمە؟",
      content: (
        <>
          <p>
            <span className="term">كىۋانىت كومپيۇتېر (Quantum Computer)</span> دېگەن نېمە؟<br />
            ئالاھىدە ھالەت (Suoerposition), چىرمىشىش (Entanglement), ۋە چۈشۈرۈش (Measurement) قاتارلىق كىۋانىت ئىنكاسىلىرىنى پايدىلىنىپ، كلاسسىك كومپيۇتېرلارنىڭ ھەل قىلالمايدىغان مەسىلىلەرنى يېشىش مۇمكىن بولىدىغان ئۈسكۈنە.
          </p>
          <p>
            <span className="term">كىۋانىت ماشىنا ئۆگىتىش (QML)</span><br />
            ماشىنا ئۆگىتىش ئالگورىتىمللىرىنى كىۋانىت دائىرلىرى (quantum circuits) ئارقىلىق ئەمەلگە ئاشۇرۇش. مەسىلەن: كىۋانىت نۇرال تور (QNN)، كىۋانىت كېرنېل (Quantum Kernel).
          </p>
          <div className="note">
            📚 <span className="highlight">مۇھىم ماقالە</span>:<br />
            "<span className="term">Is quantum advantage the right goal for quantum machine learning?</span>"<br />
            بۇ ماقالەدە بىزگە سوئال قويۇلىدۇ: كىۋانىت ئۈستۈنلۈك» نى ئىسپاتلاش — بۇ ماشىنا ئۆگىتىش ئۈچۈن راستىكى ماقسات بولامدۇ؟
          </div>
        </>
      ),
      svg: (
        <div className="flex flex-col items-center justify-center h-full">
          <svg width="120" height="120" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="40" r="5" fill="#fbbf24"/>
            <circle cx="70" cy="60" r="5" fill="#10b981"/>
            <line x1="30" y1="40" x2="70" y2="60" stroke="currentColor" strokeDasharray="4,4"/>
          </svg>
          <p className="mt-2 text-sm opacity-80">كىۋانىت ھالەت: ئالاھىدە ھالەت، توستۇرۇش، چۈشۈرۈش</p>
        </div>
      )
    },
    {
      title: "دەرىجە 2: كوانتم بىت، دائىرە، گېيت",
      content: (
        <>
          <p>
            <span className="term">كىۋانىت بىت (Qubit)</span><br />
            كلاسسىك بىت <code>0</code> ياكى <code>1</code> بولىدۇ. كىۋانىت بىت بولسا:
            <br />
            <code className="example">|ψ⟩ = α|0⟩ + β|1⟩</code>
            <br />
            <span className="highlight">|α|² + |β|² = 1</span> — نورماللاشتۇرۇلۇش شەرتى.
          </p>
          <p>
            <span className="term">كېت-بىرېكېت يېزىش ئۇسۇلى (Bra-ket)</span><br />
            - <code>|ψ⟩</code> — ھالەت (ket)<br />
            - <code>⟨ψ|</code> — قوشۇمچە ھالەت (bra)<br />
            - <code>⟨φ|ψ⟩</code> — ئىچكى كۆپەيتىندى
          </p>
          <p>
            <span className="term">ئاساسىي گېيتلار</span><br />
            - <code>X</code> (NOT), <code>H</code> (Hadamard), <code>CNOT</code>
          </p>
        </>
      ),
      code: `|ψ⟩ = α|0⟩ + β|1⟩\n|α|² + |β|² = 1\n\nمەسىلەن:\n|+⟩ = (|0⟩ + |1⟩)/√2`
    },
    {
      title: "دەرىجە 3: بىلخ سفىرى، دۆلەت ھاسىل قىلىش، ئۆلچەش",
      content: (
        <>
          <p>
            <span className="term">بىلخ سفىرى (Bloch Sphere)</span> — بىر كىۋانىت بىتنىڭ بارلىق مۇمكىن دۆلەتللىرىنى كۆرسىتىدىغان گېئومېتىرىيىلىك مودېل.
          </p>
          <p>
            دۆلەت:  
            <code className="example">|ψ⟩ = cos(θ/2)|0⟩ + eⁱᵠ sin(θ/2)|1⟩</code>
          </p>
          <p>
            <span className="highlight">نىسبىي فازا (φ)</span> — توستۇرۇش، كىرىشتۈرۈش قاتارلىق ئىنكاسىلاردا مۇھىم.
          </p>
          <p>
            <span className="term">كۈزەتكۈچ (Observable)</span>: <code>𝑂</code> — ھېرمىتىيان ماترىتسا.<br />
            كۈتۈلگەن قىممەت: <code>⟨𝑂⟩ = ⟨ψ|𝑂|ψ⟩</code>
          </p>
        </>
      ),
      svg: (
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="currentColor" fill="none"/>
          <line x1="100" y1="100" x2="156" y2="56" stroke="#60a5fa" strokeWidth="3"/>
          <circle cx="156" cy="56" r="5" fill="#fbbf24"/>
          <text x="160" y="50" fill="currentColor" fontSize="12">|ψ⟩</text>
          <text x="90" y="25" fill="currentColor" fontSize="12">θ</text>
          <text x="145" y="110" fill="currentColor" fontSize="12">φ</text>
        </svg>
      )
    },
    {
      title: "دەرىجە 4: كوپ كوانتم بىت، توستۇرۇش، باشقۇرۇش گېيتى",
      content: (
        <>
          <p>
            <span className="term">تېنزور كۆپەيتىندى (⊗)</span> — <code>|0⟩⊗|1⟩ = |01⟩</code>
          </p>
          <p>
            <span className="term">توستۇرۇش (Entanglement)</span><br />
            <code className="example">|Φ⁺⟩ = (|00⟩ + |11⟩)/√2</code><br />
            بىر بىتنى ئۆلچەپ <code>0</code> دەپ چىقىرسا، يەنە بىرى دەرھال <code>0</code> بولىدۇ.
          </p>
          <p>
            <span className="term">باشقۇرۇش گېيتلىرى</span>: <code>CNOT</code>, <code>CZ</code>, <code>Toffoli</code>
          </p>
          <div className="note">
            ⚠️ <span className="highlight">مۇھىم</span>: ئالاھىدە ھالاتتە بولۇشلا يېتەرلىك ئەمەس — <span className="term">توستۇرۇش</span> بولۇشى كېرەك كى، <span className="highlight">ئىككىلىك دەرىجىلىك تېزلەش</span> قىلالايدۇ.
          </div>
        </>
      ),
      svg: (
        <svg width="240" height="120" viewBox="0 0 240 120">
          <rect x="10" y="20" width="220" height="80" fill="none" stroke="currentColor" rx="8"/>
          <circle cx="50" cy="60" r="8" fill="#60a5fa"/>
          <circle cx="100" cy="60" r="8" fill="#fbbf24"/>
          <line x1="50" y1="60" x2="100" y2="60" stroke="currentColor" strokeDasharray="4"/>
          <text x="30" y="100" fill="#10b981" fontSize="11">|Φ⁺⟩ = (|00⟩ + |11⟩)/√2</text>
        </svg>
      )
    },
    {
      title: "دەرىجە 5: فىرقالاندۇرۇشچان دېتالاش",
      content: (
        <>
          <p>
            <span className="term">كىۋانىت گىرادىئېنت</span> — دائىرە چىقىرىشىنىڭ پارامېتىرلارغا نىسبەتەن ئۆزگىرىش سۈرئىتى.
          </p>
          <p>
            <span className="term">پارامېتىر سىلفت ئۇسۇلى</span>:<br />
            <code className="example">∂⟨𝑂⟩/∂θ = [⟨𝑂⟩(θ+π/2) − ⟨𝑂⟩(θ−π/2)] / 2</code>
          </p>
          <div className="note">
            🖥 كلاسسىك سىمۇلاتوردا: <code>backpropagation</code> ئىشلەيدۇ.<br />
            🧪 كىۋانىت ئۈسكۈنىدە: <code>backpropagation</code> ئىشلىمەيدۇ — پارامېتىر سىلفت ياكى <code>SPSA</code> كېرەك.
          </div>
        </>
      ),
      code: `∂⟨𝑂⟩/∂θ = \n  [⟨𝑂⟩(θ + π/2) − ⟨𝑂⟩(θ − π/2)] / 2`
    },
    {
      title: "دەرىجە 6: ھېلىئۇ بولۇپ چىقىرىش دائىرە (VQC)",
      content: (
        <>
          <p>
            <span className="term">VQC</span> — پارامېتىرلىق كىۋانىت دائىرە + كلاسسىك ئوپتىمىزاتور.
          </p>
          <ol className="pl-5 space-y-1">
            <li>ئۇچۇر كىرگۈزۈش (Embedding)</li>
            <li>دائىرىنىڭ چىقىرىشىنى ئۆلچەش</li>
            <li>كلاسسىك ئوپتىمىزاتور پارامېتىرلارنى ياخشىلايدۇ</li>
          </ol>
          <p>
            مەسىلەن: <code className="example">RX(θ₁) → RY(θ₂) → CNOT → Measure</code>
          </p>
          <p>
            <span className="term">كىرگۈزۈش ئۇسۇللىرى</span>: ئامپلىتۇدا، رېڭگە، تەكرارلىق كىرگۈزۈش.
          </p>
        </>
      ),
      svg: (
        <svg width="220" height="130" viewBox="0 0 220 130">
          <rect x="20" y="30" width="60" height="40" fill="#3b82f6" rx="6"/>
          <text x="50" y="55" fill="white" fontSize="10" textAnchor="middle">كلاسسىك</text>
          <rect x="140" y="30" width="60" height="40" fill="#10b981" rx="6"/>
          <text x="170" y="55" fill="white" fontSize="10" textAnchor="middle">كىۋانىت</text>
          <line x1="80" y1="50" x2="140" y2="50" stroke="#fbbf24" strokeWidth="2"/>
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#fbbf24"/>
            </marker>
          </defs>
        </svg>
      )
    },
    {
      title: "دەرىجە 7: QAOA — ئوپتىمىزاتسىيە ئالگورىتىملىرى",
      content: (
        <>
          <p>
            <span className="term">QAOA</span> (Quantum Approximate Optimization Algorithm)<br />
            — تارماقلانغان ئوپتىمىزاتسىيە مەسىلىلىرىنى (مەسىلەن: MaxCut) يېشىش ئۈچۈن ئىشلىتىلىدىغان كىۋانىت ئالگورىتىم.
          </p>
          <p>
            دائىرە: <code>e⁻ⁱᵝᴴᴮ e⁻ⁱᵞᴴᶜ</code> نى <code>p</code> قېتىم تەكرارلاش.
          </p>
          <div className="note">
            📌 QAOA نىڭ ئۈستۈنلۈكى: ھازىرقى نويىزلىق كىۋانىت ئۈسكۈنىلەر (NISQ) دە ئىشلىتىشكە بولىدۇ.
          </div>
        </>
      ),
      svg: <div className="text-center text-3xl">🔄→🔄→🔄</div>
    },
    {
      title: "دەرىجە 8: كوانتم كېرنېل ئۇسۇلى",
      content: (
        <>
          <p>
            <span className="term">كىۋانىت خاسلىق خەرىتىسى</span>: <code>|φ(x)⟩ = U(x)|0⟩</code>
          </p>
          <p>
            كېرنېل: <code className="example">𝐾(x, y) = |⟨φ(x)|φ(y)⟩|²</code>
          </p>
          <p>
            <code>scikit-learn</code> دىكى <code>SVC</code> بىلەن بىللە ئىشلەتكىلى بولىدۇ.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">🪐</div>
    },
    {
      title: "دەرىجە 9: كوانتم نۇرال تور (QNN) — قىسىم 1",
      content: (
        <>
          <p>
            <span className="term">QNN</span> — پارامېتىرلىق كىۋانىت دائىرىسىنى يېتىشىش ئارقىلىق ماشىنا ئۆگىتىش.
          </p>
          <p>
            <span className="highlight">بارىن پلاتولار</span> — دائىرە چوڭ بولغاندا، گىرادىئېنت يېتىشمىغان ھالىتى.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">🧠→⚛️</div>
    },
    {
      title: "دەرىجە 10: بارىن پلاتولارنىڭ يېشىلىشى",
      content: (
        <>
          <p>
            ✅ <span className="highlight"> باھالاش</span>: <code>L = Σ ⟨Zᵢ⟩²</code><br />
            ✅ <span className="highlight">تەڭشەك پارامېتىر</span><br />
            ✅ <span className="highlight">دەرىجىسى تۆۋەن دائىرە</span>
          </p>
          <div className="note">
            📊 تەجرىبە:  باھالاش بىلەن، 10 بىتلىك QNN نىڭ گىرادىئېنتى 100 ھەسسىيچلىك ياخشىلاندۇ.
          </div>
        </>
      ),
      svg: <div className="text-center text-3xl">📉→📈</div>
    },
    {
      title: "دەرىجە 11: QGRNN ۋە QCNN",
      content: (
        <>
          <p>
            <span className="term">QCNN</span> — كىۋانىت تۆھپىلىك تور:<br />
            - يەرلىك قاتلام (Local unitaries)<br />
            - پۇللۇق قاتلام (Pooling)
          </p>
          <p>
            مەسىلەن: رەقەم تونۇش (MNIST) نىڭ سادە نۇسخىسى.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">🖼️→🔍→✅</div>
    },
    {
      title: "دەرىجە 12: دادا-قايتۇرۇش كىرگۈزۈش",
      content: (
        <>
          <p>
            دائىرە مىسالى:<br />
            <code className="example">RX(x₁) → RY(θ₁) → RX(x₂) → RZ(θ₂)</code>
          </p>
          <p>
            تەجرىبىدە: 2 بىت + 3 قەۋەت — 8 بىتلىك دائىرىگە تەڭ كۈچ.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">🔁</div>
    },
    {
      title: "دەرىجە 13: كوانتم GAN (QGAN)",
      content: (
        <>
          <p>
            <span className="term">QGAN</span> — گېنېراتور (كىۋانىت) + دىسسكىرىمېناتور (كلاسسىك).
          </p>
          <p>
            مەسىلەن: سانلىق تارقىلىشنى كۆچۈرۈش.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">🎭</div>
    },
    {
      title: "دەرىجە 14: قۇراللار",
      content: (
        <>
          <p>✅ <span className="term">PennyLane</span> — فىرقالاندۇرۇشچان كىۋانىت دېتالاش</p>
          <p>✅ <span className="term">Qiskit ML</span> — IBM نىڭ ماشىنا ئۆگىتىش كېڭەيتىلمىسى</p>
          <p>✅ <span className="term">TensorFlow Quantum</span> — Google نىڭ نۇسخىسى</p>
        </>
      ),
      svg: <div className="text-center text-3xl">🛠️</div>
    },
    {
      title: "دەرىجە 15: توستۇرۇش چىقىرىشى",
      content: (
        <>
          <p>
            <code>|Φ⁺⟩</code> دۆلەتتە: <code>𝑆 = ln 2 ≈ 0.693</code>
          </p>
          <p>
            <span className="term">قاچىلاش (Decoherence)</span> — توستۇرۇشنىڭ يوقاپ كېتىشى.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">🌀</div>
    },
    {
      title: "دەرىجە 16: دائىرە ئوخشاشلىقى",
      content: (
        <>
          <p>
            <code className="example">𝑠 = |⟨ψ|𝜙⟩|²</code><br />
            - <code>𝑠 = 1</code> → دائىرىلەر بىر خىل<br />
            - <code>𝑠 = 0</code> → دائىرىلەر تولۇق ئوخشىمايدۇ
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">↔️</div>
    },
    {
      title: "دەرىجە 17: كود مىسالى — PennyLane",
      content: (
        <>
          <code className="block bg-gray-800 p-3 rounded text-sm">
            @qml.qnode(dev)<br />
            def circuit(x, θ):<br />
            &nbsp;&nbsp;qml.RX(x, wires=0)<br />
            &nbsp;&nbsp;qml.RY(θ, wires=0)<br />
            &nbsp;&nbsp;return qml.expval(qml.PauliZ(0))
          </code>
          <p className="mt-2">
            <code>qml.grad(circuit)(x, θ)</code> — گىرادىئېنتنى ئاپتوماتىك ھېسابلايدۇ.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">💻</div>
    },
    {
      title: "دەرىجە 18: ھازىرقى دەۋىر — NISQ",
      content: (
        <>
          <p>
            <span className="term">NISQ</span> (Noisy Intermediate-Scale Quantum)<br />
            — نويىزلىق، 50~100 بىتلىك ئۈسكۈنە.
          </p>
          <p>
            <span className="highlight">QML نىڭ ئەنگ مۇۋاپىق دەۋىرى — NISQ!</span>
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">⚠️</div>
    },
    {
      title: "دەرىجە 19: كىۋانىت ئۈستۈنلۈك — ھەقىقەت ياكى ئۇيغۇنما؟",
      content: (
        <>
          <p>
            Google (2019): كىۋانىت تېزلەش» دەپ بايان قىلغان.<br />
            لېكىن كلاسسىك ئالگورىتىملار يېتىلىپ، ئۇنى يېتىشىپ كەتتى.
          </p>
          <p>
            → <span className="highlight">مەسىلىنىڭ ئەمەلىي قىممىتى يوق</span>.
          </p>
        </>
      ),
      svg: <div className="text-center text-3xl">❓</div>
    },
    {
      title: "دەرىجە 20: ئوقۇش مەنبەلىرى",
      content: (
        <>
          <p>📘 <a href="https://pennylane.ai/codebook/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">PennyLane Codebook</a></p>
          <p>📄 <span className="term">Variational quantum algorithms</span> (Cerezo et al., 2021)</p>
          <p>🧪 <a href="https://quantum-computing.ibm.com/lab/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">IBM Quantum Lab</a></p>
        </>
      ),
      svg: <div className="text-center text-3xl">📚</div>
    },
    {
      title: "دەرىجە 21: خۇلاسە — كوانتم ماشىنا ئۆگىتىشنىڭ كەلگۈسى",
      content: (
        <>
          <ul className="space-y-2 pl-5">
            <li>✅ <span className="highlight">بارىن پلاتولار</span> — چوڭ دائىرەلەردە گىرادىئېنت يوقاپ كېتىش</li>
            <li>✅ <span className="highlight">دادا-قايتۇرۇش</span> — ئۇچۇرنى دائىرىنىڭ ھەر قەۋىتىگە قايتا كىرگۈزۈش</li>
            <li>✅ <span className="highlight">كىچىك دائىرە + كلاسسىك قوبۇل</span> — ھازىرقى ئەڭ ئۈنۈملۈك يول</li>
          </ul>
          <div className="note mt-4">
            🎯 <span className="highlight">ئەسلى ماقسات</span>:<br />
            كىۋانىت ئۈستۈنلۈك» نى ئىسپاتلاش ئەمەس، بەلكى <span className="term">يېڭى ئىنكاس، يېڭى مودېل، يېڭى چۈشىنىش</span> يارىتىش.
          </div>
          <p className="mt-6 text-center text-lg">
            رەھمەت سىزگە! 🙏<br />
            <span className="text-blue-400">ئېلېكتىر ئىللىمى، رىغبەت، تىرىشچانلىق — بۇچۇن كىشىنى كىۋانىت دۇنياسىغا قىستۇرالايدۇ.</span>
          </p>
        </>
      ),
      svg: (
        <div className="text-center space-y-2">
          <div className="text-4xl">🌌</div>
          <p>Quantum Advantage ≠ Speedup</p>
          <p className="text-sm opacity-80">→ Utility, Robustness, Insight</p>
        </div>
      )
    }
  ];

  const fullSlides = slides;

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900 text-gray-100' 
          : 'bg-gray-50 text-gray-900'
      }`}
      style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-400">كىۋانىت ماشىنا ئۆگىتىش </h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-gray-800 rounded-full p-2">
          {fullSlides.map((_, i) => (
            <div 
              key={i}
              onClick={() => {
                const el = document.getElementById(`slide-${i}`);
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full mb-2 cursor-pointer transition ${
                activeSlide === i 
                  ? 'bg-blue-500' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              title={`دەرىجە ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slides */}
      <main className="container mx-auto px-4 py-12">
        {fullSlides.map((slide, idx) => (
          <section 
            id={`slide-${idx}`}
            key={idx}
            className="slide mb-24 scroll-mt-20"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="flex flex-col md:flex-row">
                {/* Image/Visual */}
                <div className={`flex-1 min-h-[300px] md:min-h-[500px] flex items-center justify-center p-6 ${
                  darkMode ? 'bg-gray-900' : 'bg-gray-100'
                }`}>
                  {slide.svg || (
                    <pre className={`text-xs md:text-sm p-4 rounded ${
                      darkMode ? 'bg-gray-800 text-green-400' : 'bg-gray-200 text-green-800'
                    }`}>
                      {slide.code || ''}
                    </pre>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-blue-400 font-mono">دەرىجە {idx + 1}/21</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {slide.title.split(' ')[1] || '—'}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-300 mb-6">
                    {slide.title}
                  </h2>
                  <div className="prose prose-lg prose-invert max-w-none">
                    {slide.content}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className={`py-8 text-center ${
        darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-800 text-gray-300'
      }`}>
        <p>© 2026 كىۋانىت ماشىنا ئۆگىتىش — ئۇيغۇرچە   </p>
        <p className="mt-2 text-sm">
          <span className="text-yellow-400">KeLBiL</span> مائارىپىغا خۇش كەلدىڭز
        </p>
      </footer>

      <style jsx>{`
        .term { color: ${darkMode ? '#fbbf24' : '#d97706'}; font-weight: bold; }
        .highlight { 
          background: linear-gradient(120deg, rgba(96,165,250,0.15), transparent);
          padding: 0.15rem 0.3rem;
          border-radius: 4px;
          font-weight: 600;
          color: ${darkMode ? '#93c5fd' : '#2563eb'};
        }
        .example {
          background: ${darkMode ? '#1e293b' : '#f1f5f9'};
          border-left: 4px solid #10b981;
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 0 8px 8px 0;
          font-family: monospace;
          font-size: 0.95rem;
          direction: ltr;
          text-align: left;
          white-space: pre-wrap;
        }
        .note {
          background: ${darkMode ? '#374151' : '#e2e8f0'};
          padding: 1rem;
          border-radius: 8px;
          margin: 1rem 0;
          font-style: italic;
          border-left: 3px solid #ef4444;
        }
        code {
          background: ${darkMode ? '#374151' : '#e5e7eb'};
          padding: 0.15rem 0.3rem;
          border-radius: 4px;
          font-family: monospace;
          direction: ltr;
        }
        .prose :where(p):not(:where([class~="not-prose"] *)) {
          line-height: 1.8;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Blog65;