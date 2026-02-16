// Blog56.jsx
import React, { useState, useEffect } from 'react';

const Blog56 = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const fadeInClass = `transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  const copyCode = () => {
    const code = `# سىنۇس فۇنكسىيەسىنى مودېللارلاش
import pennylane as qml
from pennylane import numpy as np

X = np.linspace(0, 2*np.pi, 5)
Y = np.sin(X)
dev = qml.device('default.qubit', wires=1)

@qml.qnode(dev)
def quantum_circuit(x, params):
    qml.RX(x, wires=0)
    qml.Rot(*params, wires=0)
    return qml.expval(qml.PauliZ(0))

def cost_fn(params):
    pred = [quantum_circuit(x, params) for x in X]
    return np.sum((pred - Y)**2)

opt = qml.GradientDescentOptimizer(stepsize=0.3)
params = np.array([0.1, 0.1, 0.1], requires_grad=True)

for i in range(100):
    params = opt.step(cost_fn, params)
`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 md:py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-uyghur">
      {/* Header */}
      <header className={`${fadeInClass} mb-10 text-center`}>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900/30 dark:text-purple-200">#QuantumAI</span>
          <span className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-900/30 dark:text-indigo-200">#PennyLane</span>
          <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900/30 dark:text-amber-200">#KeLBiL</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
          كۋانت ماشىنا ئۆگىنىشنى قانداق باشلاش كېرەك؟
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          ماشىنا ئۆگىنىش قىزىقارلىق بولسا، كۋانت ماشىنا ئۆگىنىش (QML) ئۇنىڭدىن ئىككى قېتىم قىزىقارلىق! | 2026-يىلى 1-ئاينىڭ 5-كۈنى
        </p>

        {/* Hero Graphic */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center shadow-lg">
              <div className="text-5xl mb-2">⚛️ + 🤖 = 🌌</div>
              <div className="font-bold text-lg">كۋانت + ماشىنا ئۆگىنىش</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">زامانىۋى ئىلمىي ئىنقىلاب</div>
            </div>
            {/* Orbiting particles */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 animate-orbit1"></div>
            <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full -translate-y-1/2 animate-orbit2"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-indigo-400 rounded-full -translate-x-1/2 animate-orbit3"></div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-4 z-10 mb-8 bg-white dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto py-2 space-x-3">
          {[
            { id: 'intro', label: 'كىرىش', icon: '🎯' },
            { id: 'basics', label: 'ئاساسىي بىلىم', icon: '🧮' },
            { id: 'blocks', label: 'ئاساس تاشلىرى', icon: '🧱' },
            { id: 'qml', label: 'QML نى بىرلەشتۈرۈش', icon: '🔗' },
            { id: 'code', label: 'كود مىسالى', icon: '💻' },
            { id: 'next', label: 'كېيىنكى قەدەم', icon: '🚀' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <section className="space-y-10">
        {/* Intro */}
        {activeSection === 'intro' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🎯</span> كىرىش — سىزنىڭ QML سەپىرىڭىز
            </h2>
            <p className="mb-4">
              <strong>ماشىنا ئۆگىنىش قىزىقارلىق بولسا، كۋانت ماشىنا ئۆگىنىش (QML)</strong> ئۇنىڭدىن <em>ئىككى قېتىم</em> قىزىقارلىق! بۇ ئىككى زور ساھەنى بىرلەشتۈرۈش — زامانىۋى ئىلمىي ئىنقىلابنىڭ بىر قەدەملىك باسقۇچى.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              سىز <strong>كۋانت ھېسابلاش ياكى ماشىنا ئۆگىنىشىنىڭ ئالىملىرىدىن بىرى بولۇشىڭىز شەرت ئەمەس</strong>. بەزى ئوتتۇرا مەكتەپ ئوقۇغۇچىلىرى ھازىرقى ۋاقىتتا كۋانت ھېسابلاشنى ئۆگىنىۋاتىدۇ! سىزگە كېرەك بولىدىغانلىرى — نۇرغۇن <em>ئاساسلىق تۈشۈنچىلەر</em> ۋە <em>تىرىشچانلىق</em>.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <h3 className="font-bold text-purple-800 dark:text-purple-200">سەپىر باسقۇچى</h3>
                  <p className="mt-1 text-purple-700 dark:text-purple-300">
                    بۇ ماقالە سىزنىڭ QML سەپىرىڭىزنىڭ <strong>1-قەدەمى</strong>. ئاخىرىغا يېتىپ، سىز <em>ئىلىم، ئانالىز، كۋانت ھېسابلاش</em> نىڭ ئەڭ مۇھىم تۈشۈنچىلىرى بىلەن تونۇشۇپ، <strong>ئۆزىڭىزنىڭ كۋانت ماشىنا ئۆگىنىش پروگراممىسىنى</strong> يېزىشقا ھازىر بولىسىز! 😎
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Basics */}
        {activeSection === 'basics' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🧮</span> ئاساسىي بىلىم — ماتېماتىكا ۋە Python
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border">
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="text-xl mr-2">📐</span> ماتېماتىكا
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  كۋانت ھېسابلاش ۋە ماشىنا ئۆگىنىشىنى چۈشىنىش ئۈچۈن تۆۋەندىكى تۈشۈنچىلەرنى بىلىش كېرەك:
                </p>
                <ul className="space-y-2">
                  {[
                    'تىرىگونومېتىرىيە (sin, cos)',
                    'ۋېكتورلار ۋە ماترىتسىلار',
                    'سېزىقلىق ئارىلاشتۇرۇش',
                    'پولار ۋە دېكارت كوردېناتى',
                    'مۇرەككەپ سانلار',
                    'فۇنكسىيە ۋە گرادىيېنت',
                    'ئۆز قىممەت ۋە ئۆزۋېكتور'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  ⚠️ شۇنى ئېسلاتىپ ئۆتىمەن: بۇلارنىڭ ھەممىسىنى <strong>ئالىم دەرىجىسىدە</strong> بىلىش شەرت ئەمەس — ئاساسىي تۈشۈنچىلىرىنى چۈشىنىش يېتەرلىك.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border">
                <h3 className="font-bold mb-3 flex items-center">
                  <span className="text-xl mr-2">🐍</span> Python
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  كلاسسىك ۋە كۋانت ماشىنا ئۆگىنىشىنىڭ ئەڭ مەشھۇر كۈتۈپخانىلىرى Python تىلدا:
                </p>
                <ul className="space-y-2">
                  <li>✅ <strong>PennyLane</strong> — كۋانت ماشىنا ئۆگىنىشى</li>
                  <li>✅ <strong>scikit-learn</strong> — كلاسسىك ماشىنا ئۆگىنىشى</li>
                  <li>✅ <strong>PyTorch/TensorFlow</strong> — چوڭقۇر ئۆگىنىش</li>
                  <li>✅ <strong>NumPy</strong> — ئىلمىي ھېسابلاش</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-medium mb-1">ئۆگىنىش ئۇسۇللىرى:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                    <li>بەكمەت تورىدىكى مۇھەررىر سىنىپى (freeCodeCamp, Coursera)</li>
                    <li>YouTube دىكى «Python for Beginners» سىنلار</li>
                    <li>NumPy cheat sheet (تۆۋەندىكى جەدۋەل)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* NumPy Cheat Sheet */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
              <h3 className="font-bold mb-2">NumPy تېزلەتمە جەدۋىلى</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-3 py-2 text-left">بايان</th>
                      <th className="px-3 py-2 text-left">كود</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr><td>كۆپ ئۆلچەملىك قاتار قۇرۇش</td><td><code>np.array([[1,2],[3,4]])</code></td></tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td>سىزىقلىق سانلار قاتارى</td>
                      <td><code>np.linspace(0, 2*np.pi, 100)</code></td>
                    </tr>
                    <tr><td>ئۆزگەرگۈچىنى گرادىيېنت قىلىش</td><td><code>x.requires_grad = True</code></td></tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td>ماترىتسا كۆپەيتىش</td>
                      <td><code>np.dot(A, B)</code> ياكى <code>A @ B</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Building Blocks */}
        {activeSection === 'blocks' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🧱</span> ئاساس تاشلىرى — ئانالىز، ماشىنا ئۆگىنىش، كۋانت ھېسابلاش
            </h2>

            <div className="space-y-8">
              {/* Optimization */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📉 ئانالىز (Optimization)</h3>
                <p className="text-blue-700 dark:text-blue-300 mb-3">
                  كۋانت ماشىنا ئۆگىنىشىنىڭ كۆپىنچىلىكى مەسىلىلىرى <strong>ئانالىز مەسىلىلىرى</strong> بولۇپ، بۇ يەردە بىز بىر «چىقىم فۇنكسىيەسى» نى (cost function) ئەڭ تۆۋەن دەرىجىگە يەتكۈزىمىز.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <div className="font-medium">چىقىم فۇنكسىيەسى</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">يۇمشاقلىق مىقدارى، ۋاقىت، خاتالىق</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <div className="font-medium">ئانالىز ئۇسۇلى</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">گرادىيېنت چۈشۈرۈش (Gradient Descent)</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <div className="font-medium">قەدەم چوڭلۇقى</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ئەگەر بەك چوڭ بولسا — سەلخىملىق؛ بەك كىچىك بولسا — تىخىلىق</div>
                  </div>
                </div>
              </div>

              {/* Machine Learning */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">🤖 ماشىنا ئۆگىنىش</h3>
                <p className="text-green-700 dark:text-green-300 mb-3">
                  ماشىنا ئۆگىنىش — كومپيۇتېرلارنىڭ سانلىق مەلۇماتتىن <strong>مۇستەقىل ئىقتىدار سېتىۋېلىشى</strong>. مىسال: «بۇ رەسىم ئەت قىزىمۇ ياكى ئىت قىزىمۇ؟»
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li><strong>تەربىيە سانلىق مەلۇماتى</strong>: 1000 رەسىم (ئىت/ئەت بەلگىلەنگەن)</li>
                  <li><strong>چىقىم فۇنكسىيەسى</strong>: باشقۇچۇلۇش خاتالىقى (مەسىلەن: (چىقىرىش - راست چىقىرىش)²)</li>
                  <li><strong>ئارقا تارقىلىش</strong> (Backpropagation): گرادىيېنت ئارقىلىق سىنىپ ئۆگىتىش</li>
                  <li><strong>سىناق سانلىق مەلۇماتى</strong>: يېڭى رەسىملەر بىلەن تەكشۈرۈش</li>
                </ul>
              </div>

              {/* Quantum Computing */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">⚛️ كۋانت ھېسابلاش</h3>
                <p className="text-purple-700 dark:text-purple-300 mb-3">
                  كۋانت كومپيۇتېرلار ترانزىستورلار ئۇستىدە ئەمەس، <strong>كۇبىت</strong> (qubit) لار ئۇستىدە ئىشلەيدۇ — بۇلار يورۇقلۇق پارچىسى، سۈپەرئۆتكۈرگۈچ، تۇتۇلغان ئىون قاتارلىقلار بولۇشى مۇمكىن.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-1">🪙</div>
                    <div className="text-sm">كلاسسىك بىت: «بېشى» ياكى «قۇيۇرى»</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-1">🌀</div>
                    <div className="text-sm">كۇبىت: «چارخىلىنىۋاتقان تەڭگە» — ئۈستۈنلۈك ھالىتى</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-purple-700 dark:text-purple-300">
                  كۇبىتلارنىڭ ماتېماتىكىلىق بەلگىلىنىشى — <strong>مۇرەككەپ سانلىق ۋېكتورلار</strong>. قاۋۇس بەلگىلىك (Dirac notation):  
                  <code className="bg-purple-100 dark:bg-purple-800 px-1 rounded mx-1">|0⟩</code> ۋە  
                  <code className="bg-purple-100 dark:bg-purple-800 px-1 rounded mx-1">|1⟩</code>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* QML */}
        {activeSection === 'qml' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🔗</span> كۋانت ماشىنا ئۆگىنىشىنى بىرلەشتۈرۈش
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border mb-8">
              <h3 className="font-bold mb-4">سېلىشتۇرۇش: كلاسسىك vs كۋانت ماشىنا ئۆگىنىشى</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-2 text-left">مەزگىل</th>
                      <th className="px-4 py-2 text-left">كلاسسىك ماشىنا ئۆگىنىشى</th>
                      <th className="px-4 py-2 text-left">كۋانت ماشىنا ئۆگىنىشى</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-2 font-medium">ئانالىز ئۇسۇلى</td>
                      <td className="px-4 py-2">ئارقا تارقىلىش (Backpropagation)</td>
                      <td className="px-4 py-2">پارامېتىر يۆتكىلىش (Parameter Shift)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="px-4 py-2 font-medium">ئۈسكۈنە</td>
                      <td className="px-4 py-2">GPU/TPU</td>
                      <td className="px-4 py-2">كۋانت سىمۇلياتورى / رېئال كۋانت كومپيۇتېر</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">ئۇستۇنلۇق</td>
                      <td className="px-4 py-2">تەربىيە سۈرئىتى</td>
                      <td className="px-4 py-2">قوزغاق مۇناسىۋەتلەر، ئۈستۈنلۈك تەسىرى</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">PennyLane — سىزنىڭ QML قورالىڭىز</h3>
              <p className="text-indigo-700 dark:text-indigo-300 mb-3">
                <strong>PennyLane</strong> — بۇ كۆپ پىلاتفورمىنى قوللايدىغان، <em>ئاپتوماتىك گرادىيېنت قىلغىلى بولىدىغان</em> كۋانت پروگرامما تۈزۈش كۈتۈپخانىسى. سىز بۇنى ئىشلىتىپ:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-indigo-700 dark:text-indigo-300">
                <li>كلاسسىك + كۋانت گىبرىد مودېللىرى قۇرالايسىز</li>
                <li>PyTorch/TensorFlow بىلەن ماسلىشىدۇ</li>
                <li>IBM, Rigetti, IonQ قاتارلىق 15+ كۋانت ئۈسكۈنىلىرىگە باغلىنىدۇ</li>
                <li>كۆپ مىقداردا دېمو، كود كىتابچىسى، بىلوگ بار</li>
              </ul>
              <a
                href="https://pennylane.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
              >
                🌐 PennyLane رەسمىي توربېكىتى
              </a>
            </div>
          </div>
        )}

        {/* Code Example */}
        {activeSection === 'code' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">💻</span> مىسال: سىنۇس فۇنكسىيەسىنى كۋانت توك يولى بىلەن مودېللارلاش
            </h2>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-6">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300">
                <span className="text-sm font-mono">qml_sine_demo.py</span>
                <button
                  onClick={copyCode}
                  className={`text-sm px-2 py-1 rounded flex items-center ${
                    copied ? 'bg-green-500 text-white' : 'hover:bg-gray-700'
                  }`}
                >
                  {copied ? '✔ كۆچۈرۈلدى' : '⎘ كۆچۈرۈش'}
                </button>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-green-400 text-left text-sm font-mono whitespace-pre">
{`# 1. ماتېرىيال ۋە كۈتۈپخانىنى ئىمپورت قىلىش
import pennylane as qml
from pennylane import numpy as np
import matplotlib.pyplot as plt

# 2. تەربىيە سانلىق مەلۇماتىنى تەييارلاش
X = np.linspace(0, 2*np.pi, 5)
Y = np.sin(X)

# 3. سىمۇلياتور قۇرالىنى بەلگىلەش (1 كۇبىت)
dev = qml.device('default.qubit', wires=1)

# 4. كۋانت توك يولى QNode نى قۇرۇش
@qml.qnode(dev)
def quantum_circuit(x, params):
    qml.RX(x, wires=0)           # سانلىق مەلۇماتنى كىرگۈزۈش
    qml.Rot(*params, wires=0)    # 3 پارامېتىر بىلەن ئايلاندۇرۇش
    return qml.expval(qml.PauliZ(0))  # Z بويىچە ئۆلچەش نەتىجىسى

# 5. چىقىم فۇنكسىيەسى
def cost_fn(params):
    pred = [quantum_circuit(x, params) for x in X]
    return np.sum((np.array(pred) - Y)**2)

# 6. ئانالىز جەريانى
opt = qml.GradientDescentOptimizer(stepsize=0.3)
params = np.array([0.1, 0.1, 0.1], requires_grad=True)

for i in range(100):
    params = opt.step(cost_fn, params)
    if i % 20 == 0:
        print(f"Epoch {i}: Loss = {cost_fn(params):.4f}")

# 7. نەتىجىنى سىزىش (تېخى ئىشلىتىلمىدى)
# plt.plot(...); plt.show()`}
                </pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">🎯 نەمە ئۈچۈن بۇ مۇھىم؟</h3>
              <p className="text-emerald-700 dark:text-emerald-300">
                بۇ مىسالدا سىز <strong>ئىككى دەرىجىلىك گىبرىد مودېل</strong> قۇرۇۋەتتىڭىز:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-emerald-700 dark:text-emerald-300">
                <li>كىرگۈزۈش — كلاسسىك سان (x)</li>
                <li>ئانالىز — كۋانت توك يولى (quantum_circuit)</li>
                <li>چىقىرىش — كلاسسىك سان (گرادىيېنت چۈشۈرۈش)</li>
              </ul>
              <p className="mt-2">
                بۇ QML نىڭ ئەڭ ئاددىي شەكلى — <strong>ۋارىئاتسىيونلۇق كۋانت توك يولى</strong> (Variational Quantum Circuit).
              </p>
            </div>
          </div>
        )}

        {/* Next Steps */}
        {activeSection === 'next' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🚀</span> كېيىنكى قەدەم — سىزنىڭ يۆلىڭىز
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '📥', title: 'PennyLane نى ئورنىتىڭ', desc: 'pip install pennylane', link: 'https://pennylane.ai/install.html' },
                { icon: '🎓', title: 'ئوقۇش دېموسى', desc: '«Getting Started» دېمۇسىنى ئىجرا قىلىڭ', link: 'https://pennylane.ai/qml/demos.html' },
                { icon: '📚', title: 'كود كىتابچىسى', desc: 'QML بويىچە تولۇق قوللانما', link: 'https://pennylane.ai/qml/' },
                { icon: '🌐', title: 'جەمئىيەت', desc: 'Thursday Community Calls غا قاتنىشىڭ', link: 'https://pennylane.ai/community.html' },
                { icon: '🧠', title: 'ئۆگىنىش', desc: 'Xanadu قۇرۇلمىلىق كۇرسى', link: 'https://learn.pennylane.ai/' },
                { icon: '🏆', title: 'تەپسىلاتىچىلار', desc: 'QHack ياكى QML Challenge غا قاتنىشىڭ', link: 'https://qhack.ai/' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white dark:bg-gray-800 rounded-lg border hover:shadow-md transition"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800">
              <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">💡 كۆرسەتمە</h3>
              <ul className="list-disc pl-5 space-y-1 text-amber-700 dark:text-amber-300">
                <li>ئاۋۋال <strong>سېمۇلياتور</strong> دا تەجرىبە قىلىڭ — رېئال كۋانت كومپيۇتەر تەلەپ قىلمەيدۇ</li>
                <li>ئېنىق بىر مەسىلىنى تاللاڭ: مەسىلەن، «MNIST رەقەملەرنى تۈرگە ئايرىش»</li>
                <li>تەتقىقات ماقالىلىرىنى ئوقۇپ، كودنى قايتا يېزىپ باقىڭ (مەسىلەن: <em>Quantum Convolutional Neural Networks</em>)</li>
                <li>كوللىگىنىز ياكى دوستۇڭىز بىلەن بىرلەشىپ ئىشلەڭ — QML جەمئىيىتى بەك قىزغىن!</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-2">كۋانت ماشىنا ئۆگىنىشى — كەلەچەكتىكى زېرە.</p>
        <p className="text-sm">
          🌌 KeLBiL ماشىنا ئۆگىنىش مەركىزى | 2026-يىلى 1-ئاينىڭ 5-كۈنى، دۈشەنبە
        </p>
        <div className="mt-3 flex justify-center space-x-4">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">PennyLane</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">Xanadu</span>
          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">كۈچلۈك مائارىپ</span>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes orbit1 {
          0% { transform: translateX(0) translateY(-4rem); }
          25% { transform: translateX(4rem) translateY(0); }
          50% { transform: translateX(0) translateY(4rem); }
          75% { transform: translateX(-4rem) translateY(0); }
          100% { transform: translateX(0) translateY(-4rem); }
        }
        @keyframes orbit2 {
          0% { transform: translateX(4rem) translateY(0); }
          25% { transform: translateX(0) translateY(4rem); }
          50% { transform: translateX(-4rem) translateY(0); }
          75% { transform: translateX(0) translateY(-4rem); }
          100% { transform: translateX(4rem) translateY(0); }
        }
        @keyframes orbit3 {
          0% { transform: translateX(0) translateY(4rem); }
          25% { transform: translateX(-4rem) translateY(0); }
          50% { transform: translateX(0) translateY(-4rem); }
          75% { transform: translateX(4rem) translateY(0); }
          100% { transform: translateX(0) translateY(4rem); }
        }
        .animate-orbit1 { animation: orbit1 8s linear infinite; }
        .animate-orbit2 { animation: orbit2 10s linear infinite; }
        .animate-orbit3 { animation: orbit3 12s linear infinite; }
      `}</style>
    </article>
  );
};

export default Blog56;