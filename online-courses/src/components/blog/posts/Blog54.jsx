// Blog54.jsx
import React, { useState, useEffect } from 'react';

const Blog54 = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const fadeInClass = `transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 md:py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-2xl font-uyghur">
      {/* Header */}
      <header className={`${fadeInClass} mb-10 text-center`}>
        <div className="inline-flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-200">#PCA</span>
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900/30 dark:text-purple-200">#DataScience</span>
          <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900/30 dark:text-amber-200">#KeLBiL</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          ئاساسلىق تەركىب ئانالىزى (PCA) — سانلىق مەلۇماتنى «ئوق بويىچە قىسقىرتىش» تېخنىكىسى
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          سانلىق مەلۇماتنى چۈشىنىش، كۆرۈش ۋە بىر تەرەپ قىلىشنى ئاسانلاشتۇرۇش ئۈچۈن ئىشلىتىلىدىغان ئىلغار تېخنىكا | 2026-يىلى 1-ئاينىڭ 5-كۈنى
        </p>

        {/* Hero Visual: PCA Concept */}
        <div className="mt-10 flex justify-center">
          <div className="relative">
            {/* Axes */}
            <svg width="400" height="300" viewBox="0 0 400 300" className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              {/* X & Y axis */}
              <line x1="50" y1="250" x2="350" y2="250" stroke="#94a3b8" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="250" stroke="#94a3b8" strokeWidth="1" />
              <text x="340" y="240" fontSize="12" fill="#64748b">ئۆزگەرگۈچى 1 (مەسىلەن: بوي)</text>
              <text x="60" y="60" fontSize="12" fill="#64748b">ئۆزگەرگۈچى 2 (مەسىلەن: ئېغىرلىق)</text>

              {/* Data points (height vs weight) */}
              {[
                [80, 200], [90, 210], [100, 225], [110, 240], [120, 250],
                [85, 205], [95, 215], [105, 230], [115, 245]
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#3b82f6" opacity="0.8" />
              ))}

              {/* Principal Component Line — diagonal */}
              <line x1="70" y1="230" x2="140" y2="160" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,4" />
              <text x="150" y="150" fill="#ef4444" fontSize="14" fontWeight="bold">ئاساسلىق تەركىب (PC1)</text>

              {/* Annotations */}
              <text x="200" y="100" fill="#0f766e" fontSize="13">
                سانلىق مەلۇماتلارنىڭ ئەڭ كۆپ تارقالغان يۆنىلىشى
              </text>
            </svg>

            <div className="mt-4 text-gray-700 dark:text-gray-300 italic">
              ◀️ سانلىق مەلۇماتلارنىڭ ئەڭ كۆپ تارقالغان يۆنىلىشى = بىرىنچى ئاساسلىق تەركىب (PC1)
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-4 z-10 mb-8 bg-white dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto py-2 space-x-3">
          {[
            { id: 'intro', label: 'كىرىش', icon: '🎯' },
            { id: 'why', label: 'نېمە ئۈچۈن؟', icon: '❓' },
            { id: 'how', label: 'قانداق ئىشلەيدۇ؟', icon: '⚙️' },
            { id: 'code', label: 'كود مىسالى', icon: '💻' },
            { id: 'results', label: 'نەتىجىلەر', icon: '📊' },
            { id: 'tips', label: 'ئەڭ ياخشى ئۇسۇللار', icon: '✅' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <section className="space-y-10">
        {/* Intro */}
        {activeSection === 'intro' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🎯</span> ئاساسلىق تەركىب ئانالىزى (PCA) دېگەن نېمە؟
            </h2>
            <p className="mb-4">
              PCA — بۇ <strong>بىر قانچە ئۆزگەرگۈچى مىقدارلارنى ئوخشاش يۆنىلىشتە گۇرۇپپىلاش</strong> ئۇسۇلى. تەخمىنەن ئېيتقاندا، بۇ سانلىق مەلۇمات خاراكتېرىنى <em>ئوق بويىچە قىسقىرتىش</em> تېخنىكىسى.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              مەسىلەن: سىز بىر سىنىپتا «<strong>بوي ئېگىزلىكى</strong>» ۋە «<strong>ئېغىرلىق</strong>» نى ئۆلچىگەن بولسىڭىز. ئەگەر ئېگىز كىشىلەر ئادەتتە ئېغىرراق بولسا، بۇ ئىككى ئۆزگەرگۈچى مىقدار <em>ئوخشاش ئۇچۇرلارنى</em> ئۆز ئىچىگە ئالىدۇ — يەنى، بىر قىسىمنى بىلسىڭىز، يەنە بىر قىسىمنى تەxmin قىلالايسىز.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <h3 className="font-bold text-blue-800 dark:text-blue-200">مەنىسى</h3>
                  <p className="mt-1 text-blue-700 dark:text-blue-300">
                    PCA بۇ ئىككى ئۆزگەرگۈچىنى ئايرىم-ئايرىم ئوق دەپ قاراشنىڭ ئورنىغا، <strong>ئومۇمىي يۈزلىنىشنى ئىپادىلەيدىغان بىرلا ئوققا</strong> بىرلەشتۈرىدۇ — بۇ «ئۆسۈشكە قاراپ ئېگىلىش سىزىقى» دەپ ئاتىلىدۇ. بۇ سىزىق <em>سانلىق مەلۇماتلارنىڭ ئەڭ كۆپ ئۆزگەرگەن يۆنىلىشىنى</em> كۆرسىتىدۇ.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                <h4 className="font-bold mb-2">ئەمەلىيەتتىكى مىسال:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>گۈلنىڭ 4 خىل ئالاھىدىلىكى (چېچەك/يوپۇرماق ئۇزۇنلۇقى ۋە كەڭلىكى)</li>
                  <li>ھاۋا شارائىتى (ھارىقەت، يېغىن، شامال، بولۇت)</li>
                  <li>ئىقتىسادىي كۆرسەتكۈچلەر (GDP، ئىنفلاتسىيە، ئىشسزلىك)</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                <h4 className="font-bold mb-2">PCA نىڭ نىشانى:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>سانلىق مەلۇماتلارنى 2D/3D دا كۆرسىتىش</li>
                  <li>مودېلنى يېڭىلاش سۈرئىتىنى تېزلەشتۈرۈش</li>
                  <li>شاۋقۇن (ئېغىز يۆنىلىش) نى يوقىتىش</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Why Use PCA? */}
        {activeSection === 'why' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">❓</span> PCA نېمە ئۈچۈن ئىشلىتىلىدۇ؟
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">مەقسەت</th>
                    <th className="px-4 py-3 text-left font-bold">چۈشەندۈرۈش</th>
                    <th className="px-4 py-3 text-left font-bold">ئەھمىيىتى</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">كۆرۈش (كۆرۈنۈش)</td>
                    <td className="px-4 py-3">كۆپ ئۆلچەملىك سانلىق مەلۇماتلارنى 2D ياكى 3D دا كۆرۈش</td>
                    <td className="px-4 py-3 text-cyan-600 dark:text-cyan-400">✅ چۈشىنىش ئاسانلاشتۇرىدۇ</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="px-4 py-3 font-medium">ئۆلچەملىكنى ئازايتىش</td>
                    <td className="px-4 py-3">ئۆزگەرگۈچى مىقدار بەك كۆپ بولغاندا قىسقىرىتىش</td>
                    <td className="px-4 py-3 text-cyan-600 dark:text-cyan-400">✅ مودېل تېزلىكى، خاتىرە تەلەپىنى تۆۋەنلەيدۇ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">شاۋقۇننى يوقىتىش</td>
                    <td className="px-4 py-3">ئۇچۇر ئاز بولغان رايونلارنى يوقىتىش (كىچىك تەۋرىنىش)</td>
                    <td className="px-4 py-3 text-cyan-600 dark:text-cyan-400">✅ ئۈنۈملۈك مودېللارنى بىر تەرەپ قىلىدۇ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border border-amber-200 dark:border-amber-800">
              <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">⚠️ دىققەت: PCA «ماجىك بۇتۇل» ئەمەس!</h3>
              <p className="text-amber-700 dark:text-amber-300">
                بۇ تېخنىكا <strong>خەتتىي مۇناسىۋەتلەر</strong> نىلا قىسقىرتىدۇ. ئەگەر سانلىق مەلۇماتتا كۈچلۈك «قوزغاق» مۇناسىۋەت بولسا (مەسىلەن: y = x²)، PCA تولۇق ئۇچۇر ساقلىيالماسلىقى مۇمكىن. بۇنداق ئەھۋالدا، Kernel PCA ياكى t-SNEنى سىناپ بېقىڭ.
              </p>
            </div>
          </div>
        )}

        {/* How PCA Works */}
        {activeSection === 'how' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">⚙️</span> PCA قانداق ئىشلەيدۇ؟
            </h2>

            <div className="space-y-8">
              <StepCard
                step={1}
                title="مەركەزلەشتۈرۈش (ئوتتۇرىچە قىممەتنى چىقىرىش)"
                icon="📍"
                color="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                content="ئالدى بىلەن، سانلىق مەلۇماتلارنى «باش نۇقتا» غا كۆچۈرۈش ئۈچۈن، ھەر بىر ئۆزگەرگۈچىدىن ئوتتۇرىچە قىممەتنى چىقىرىۋېتىمىز. بۇ PCA نىڭ ھېسابلاش جەريانىنى ئاسانلاشتۇرىدۇ."
                formula="𝑋_مەركەزلەشتۈرۈلگەن = 𝑋 − μ"
              />
              <StepCard
                step={2}
                title="ئەڭ چوڭ ئۆزگەرگۈچىلىكنىڭ يۆنىلىشىنى تېپىش"
                icon="🔍"
                color="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200"
                content="سانلىق مەلۇماتلارنىڭ ئەڭ كۆپ تارقالغان يۆنىلىشىنى (ئۇچۇر ئەڭ كۆپ بولغان يۆنىلىش) تېپىمىز — بۇ «بىرىنچى ئاساسلىق تەركىب (PC1)». ئاندىن، بۇ ئوققا تىك بۇلۇڭدا ئەڭ كۆپ تارقالغان يۆنىلىش — «ئىككىنچى ئاساسلىق تەركىب (PC2)» نى تېپىمىز."
              />
              <StepCard
                step={3}
                title="سانلىق مەلۇماتلارنى «پرويېكسىيەلەش»"
                icon="🖼️"
                color="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200"
                content="ئەسلى سانلىق مەلۇماتلارنى يېڭى ئوقلارغا (ئاساسلىق تەركىبلەرگە) «يايدۇرۇپ چىقىرىش» (projection). مەسىلەن: 4 ئۆلچەملىك سانلىق مەلۇماتلارنى 2 ئۆلچەمگە قىسقىرتىپ، ئومۇمىي قۇرۇلمىسىنى ساقلاپ قېلىش."
              />
            </div>

            <div className="mt-10 bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-dashed border-gray-300 dark:border-gray-700">
              <h3 className="font-bold mb-3 text-gray-900 dark:text-gray-100">PCA نىڭ تېخنىكىلىك جەريانى</h3>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-sm">مەركەزلەشتۈرۈش</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="text-center mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-sm">ئاپتوكوررېلىيتسىيە ماتىرىتسىسى</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="text-center mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-sm">ئۆز قىممەت ۋە ئۆزۋېكتور</p>
                </div>
                <div className="text-gray-400">→</div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <p className="text-sm">يېڭى ئۆلچەملىك سانلىق مەلۇمات</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Example */}
        {activeSection === 'code' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">💻</span> Python دا PCA نى ئىجرا قىلىش — Iris مىسالى
            </h2>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-6">
              <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300">
                <span className="text-sm font-mono">pca_demo.py</span>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm text-left font-mono whitespace-pre">
{`# زۆرۈر كۈتۈپخانىلارنى ئىمپورت قىلىش
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import pandas as pd

# 1. سانلىق مەلۇماتلارنى يۈكلەش
iris = load_iris()
X = iris.data      # (150, 4) — 4 خىل ئالاھىدىلىك
y = iris.target    # 3 خىل گۈل: 0=Setosa, 1=Versicolor, 2=Virginica

# 2. ئۆلچەملەشتۈرۈش (Standardization)
scaler = StandardScaler()
X_std = scaler.fit_transform(X)

# 3. PCA ئىجرا قىلىش (2 ئۆلچەمگە قىسقارتىش)
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_std)

# 4. نەتىجىلەرنى سىزىش
plt.figure(figsize=(8, 6))
colors = ['red', 'blue', 'green']
for color, i, name in zip(colors, [0, 1, 2], iris.target_names):
    plt.scatter(X_pca[y == i, 0], X_pca[y == i, 1],
                c=color, label=name, alpha=0.7, s=60)
plt.xlabel("PC1"); plt.ylabel("PC2"); plt.legend()
plt.title("Iris سانلىق مەلۇماتلارىنىڭ PCA كۆرۈنۈشى")
plt.show()`}
                </pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">✅ نېمە ئۈچۈن StandardScaler ئىشلىتىمىز؟</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Iris سانلىق مەلۇماتىدا «چېچەك ئۇزۇنلۇقى» = 4.3–7.9 cm، «يوپۇرماق كەڭلىكى» = 0.1–2.5 cm. بۇنىڭ بىلەن، كەڭلىكنىڭ ئۆزگەرگۈچىلىكى دائىم ئاز كۆرۈنىدۇ. <strong>StandardScaler</strong> بۇ مەسىلىنى ھەل قىلىپ، ھەر بىر ئۆزگەرگۈچىنى «ئوتتۇرا=0، ئۆزگىچىلىك=1» قىلىدۇ.
              </p>
            </div>
          </div>
        )}

        {/* Results */}
        {activeSection === 'results' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">📊</span> نەتىجىلەرنى چۈشىنىش — تۆھپە نىسبىتى ۋە يۈكلىنىشلەر
            </h2>

            {/* Plot Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border mb-8">
              <h3 className="font-bold text-lg mb-3">Iris سانلىق مەلۇماتىنىڭ PCA كۆرۈنۈشى</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center text-gray-500">
                    2D PCA گىرافىكى — 3 خىل گۈل ئانىق ئايرىلغان
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Setosa (قىزىل) باشقا ئىككىسىدىن پۈتۈنلەي ئايرىلغان، Versicolor (كۆك) ۋە Virginica (يېشىل) بىر قىسىم ئارىلاشقان.
                  </p>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2">نەتىجە تېكىستى:</h4>
                  <pre className="bg-gray-900 text-left text-green-400 p-3 rounded text-sm overflow-x-auto">
{`تۆھپە نىسبىتى: [0.7296, 0.2285]
جەمئىي تۆھپە نىسبىتى: [0.7296, 0.9581]

ھەر بىر ئاساسلىق تەركىب ۈچۈن يۈكلىنىشلەر:
                 چېچەك_ئۇزۇن  چېچەك_كەڭ  يوپۇر_ئۇزۇن  يوپۇر_كەڭ
PC1               0.5211     -0.2693      0.5804      0.5649
PC2               0.3774      0.9233      0.0245      0.0669`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Interpretation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">📈 تۆھپە نىسبىتى</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  بۇ ھەر بىر ئاساسلىق تەركىبنىڭ <em>ئومۇمىي ئۇچۇرنىڭ قانچىلىك قىسمىنى ئىپادىلەيدىغانلىقىنى</em> كۆرسىتىدۇ:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  <li><strong>PC1:</strong> 72.96% ئۇچۇر</li>
                  <li><strong>PC2:</strong> 22.85% ئۇچۇر</li>
                  <li><strong>جەمئىي:</strong> 95.81% — يەنى، بىز 4 ئۆزگەرگۈچىدىن 2 سىزىققا قىسقىرتىپ، 95% ئۇچۇرنى ساقلىدۇق!</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">⚖️ يۈكلىنىشلەر (Loadings)</h3>
                <p className="text-purple-700 dark:text-purple-300">
                  بۇ ھەر بىر ئالاھىدىلىكنىڭ تەركىبلەرگە تەسىر دەرىجىسى:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  <li><strong>PC1:</strong> يوپۇرماق ئۇزۇنلۇقى (0.58) ۋە كەڭلىكى (0.56) تەسىرى كۈچلۈك — بۇ «ئومۇمىي گۈل چوڭلۇقى» نى كۆرسىتىدۇ.</li>
                  <li><strong>PC2:</strong> چېچەك كەڭلىكى (0.92) تەسىرى كۈچلۈك — بۇ «چېچەك شەكلى» نى كۆرسىتىدۇ.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Best Practices */}
        {activeSection === 'tips' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">✅</span> PCA نى ئىشلىتىشنىڭ ئەڭ ياخشى ئۇسۇللارى
            </h2>

            <div className="space-y-5">
              <TipCard
                title="كۆلەملەشتۈرۈش (Standardization)"
                icon="📏"
                color="text-blue-600 dark:text-blue-400"
                content="ئۆزگەرگۈچى مىقدارلارنىڭ بىرلىكلىرى ئوخشىمايدىغان بولغاندا (مەسىلەن: مېتىر ۋە كىلوگرامم)، ھەمىشە StandardScaler نى ئىشلىتىڭ. PCA ئۆلچەمگە بەك سەزگۈر."
              />
              <TipCard
                title="قىممەتلەرنىڭ يوقلۇقى"
                icon="⚠️"
                color="text-amber-600 dark:text-amber-400"
                content="يوق قىممەت بولسا، PCA ئىشلىمەيدۇ. يوق قىممەتلەرنى مۇۋاپىق ئۇسۇل بىلەن تولدۇرۇڭ (مەسىلەن: ئوتتۇرا قىممەت) ياكى چىقىرىۋېتىڭ."
              />
              <TipCard
                title="ئاساسلىق تەركىبلەرنىڭ سانى"
                icon="🔢"
                color="text-green-600 dark:text-green-400"
                content="جەمئىي تۆھپە نىسبىتى %80-90 ئەتراپىدا بولغان مىقدارنى تاللاڭ. Iris مىسالىدا 2 تەركىب %95 نى قاپلايدۇ — مۇكەممەل!"
              />
              <TipCard
                title="ئۇچۇر يوقىتىشنى باھالاش"
                icon="📉"
                color="text-red-600 dark:text-red-400"
                content="قانداق ئۇچۇرلار يوقىلىۋاتىدۇ؟ بۇنى يۈكلىنىشلەر ۋە تۆھپە نىسبىتى ئارقىلىق بايقاڭ. قىيىن بولسا، تولۇق سانلىق مەلۇمات ساقلاپ قويۇڭ."
              />
              <TipCard
                title="چۈشىنىش مەۋھۇملىقى"
                icon="🌀"
                color="text-purple-600 dark:text-purple-400"
                content="ئاساسلىق تەركىبلەر «ئابستراكت يۆنىلىشلەر» — مەسىلەن: PC1 نى «تىنچلىق دەرىجىسى» دەپ ئاتاش مۇۋاپىق ئەمەس. سانلىق مەلۇماتقا ئاساسلانغان تەھلىل قىلىڭ."
              />
            </div>

            <div className="mt-10 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">🎯 خۇلاسە</h3>
              <ul className="list-disc pl-5 space-y-1 text-emerald-700 dark:text-emerald-300">
                <li>PCA — كۆپ ئۆزگەرگۈچى مىقدارنى ئازراق ئوققا بىرلەشتۈرۈش ئۇسۇلى.</li>
                <li>سانلىق مەلۇمات قۇرۇلمىسىنى كۆرۈش ۋە بىر تەرەپ قىلىشنى ئاسانلاشتۇرىدۇ.</li>
                <li>Python دا، StandardScaler → PCA دېگەن <strong>2 قەدەم</strong> دە ئاسانلا ئىجرا قىلغىلى بولىدۇ.</li>
                <li>«قانداق ئۇچۇرلار يوقىلىدۇ؟» غا دىققەت قىلىپ، مەسئۇلىيەتچانلىق بىلەن ئىشلىتىڭ.</li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-2">ئاساسلىق تەركىب ئانالىزى — سانلىق مەلۇمات ئىلمىنىڭ ئەڭ قىسقىچە بىر بۇتۇلى.</p>
        <p className="text-sm">
          📊 KeLBiL ماشىنا ئۆگىنىش مەركىزى | 2026-يىلى 1-ئاينىڭ 5-كۈنى، دۈشەنبە
        </p>
        <div className="mt-3 flex justify-center space-x-4">
          {[{ icon: '🐍', text: 'Python' }, { icon: '📊', text: 'scikit-learn' }, { icon: '🔬', text: 'Iris' }].map((item, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
              {item.icon} {item.text}
            </span>
          ))}
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </article>
  );
};

// Reusable Components
const StepCard = ({ step, title, icon, color, content, formula }) => (
  <div className="flex">
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0 mr-4 font-bold`}>
      {step}
    </div>
    <div>
      <h3 className="font-bold text-lg flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{content}</p>
      {formula && (
        <div className="mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded inline-block">
          <code className="text-sm font-mono text-blue-600 dark:text-blue-300">{formula}</code>
        </div>
      )}
    </div>
  </div>
);

const TipCard = ({ title, icon, color, content }) => (
  <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <span className={`text-2xl mr-3 ${color}`}>{icon}</span>
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{content}</p>
    </div>
  </div>
);

export default Blog54;