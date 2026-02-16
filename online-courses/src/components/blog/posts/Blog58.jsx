// Blog58.jsx
import React, { useState, useEffect } from 'react';

const Blog58 = () => {
  const [activeTab, setActiveTab] = useState('pennylane');
  const [copiedId, setCopiedId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const fadeInClass = `transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  const copyToClipboard = async (code, id) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const circuits = {
    pennylane: {
      title: 'PennyLane دا كۈچلۈك كۆرۈنۈش تېخنىكىسى',
      icon: '⚛️',
      examples: [
        {
          id: 'basic',
          name: 'ئاساسىي توك يولى كۆرۈنۈشى',
          code: `import pennylane as qml

dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def circuit(params):
    qml.RY(params[0], wires=0)
    qml.RY(params[1], wires=1)
    qml.CNOT(wires=[0, 1])
    return qml.expval(qml.PauliZ(1))

params = [0.1, 0.3]
print(qml.draw(circuit)(params))`,
          output: `0: ──RY(0.1)──╭C──┤\n1: ──RY(0.3)──╰X──┤ ⟨Z⟩`,
          desc: 'qml.draw() ئارقىلىق سادە توك يولىنى تېكىست شەكلىدە كۆرۈش'
        },
        {
          id: 'advanced',
          name: 'ئىلغار تەڭشەكلەر — wire_order & show_all_wires',
          code: `drawer = qml.draw(circuit, 
    show_all_wires=True, 
    wire_order=[2, 1, 0, 3]
)
print(drawer(params))`,
          output: `2: ───────────────┤\n1: ──RY(0.3)──╭X──┤ ⟨Z⟩\n0: ──RY(0.1)──╰C──┤\n3: ───────────────┤`,
          desc: 'بوش سىملارنى كۆرسىتىش ۋە سىما تەرتىپىنى ئۆزگەرتىش'
        }
      ]
    },
    cirq: {
      title: 'Cirq قىستۇرمىسى ئارقىلىق كۆرۈنۈش',
      icon: '🟢',
      examples: [
        {
          id: 'cirq-draw',
          name: 'qml.draw() بىلەن PennyLane فورماتىدا',
          code: `dev = qml.device("cirq.simulator", wires=4)

@qml.qnode(dev)
def circuit(weights):
    qml.templates.StronglyEntanglingLayers(weights, wires=[0,1,2,3])
    return qml.expval(qml.PauliX(0) @ qml.PauliZ(2))

print(qml.draw(circuit)(weights))`,
          output: `0: ──Rot(0.428,0.885,0.374)───╭C───────────────────────╭X──Rot(0.589,0.038,0.381)───┤ ⟨X ⊗ Z⟩\n1: ──Rot(0.099,0.112,0.375)───╰X──╭C─────────────────────│─────────────────────────╭C───┤\n2: ──Rot(0.411,0.204,0.432)───────╰X──╭C─────────────────│─────────────────────────╰X───┤\n3: ──Rot(0.069,0.709,0.658)──────────╰X─────────────────╰C──Rot(0.252,0.032,0.263)───╯`,
          desc: 'توك يولىنىڭ تولۇق ۋارىئاتسىيونلۇق شەكلى'
        },
        {
          id: 'cirq-native',
          name: 'Cirq ئاسلى فورماتى (dev.circuit)',
          code: `# بىر قېتىم ئىجرا قىلىپ، dev.circuit دىن ئوقۇڭ
print(dev.circuit)`,
          output: `┌───────────┐                                          ┌──┐   ┌──┐\n0: ─Rz(0.049π)─Ry(0.139π)─Rz(0.28π)─@─────────────────X───Rz(0.284π)─...\n1: ─Rz(0.164π)─Ry(0.229π)─Rz(0.013π)─X─@─Rz(0.272π)─┼Ry(0.229π)─...\n   ...`,
          desc: 'Cirq نىڭ ئەسلى كۆرۈنۈشى — پىي ۋە باشقا سىمۋوللار بىلەن'
        }
      ]
    },
    qiskit: {
      title: 'Qiskit قىستۇرمىسى ئارقىلىق كۆرۈنۈش',
      icon: '🔵',
      examples: [
        {
          id: 'qiskit-text',
          name: 'تېكىست فورماتى (ئاساسىي)',
          code: `dev = qml.device("qiskit.aer", wires=4)
# ... circuit definition ...
dev._circuit.draw()`,
          output: `     ┌─────────────┐\nq_0: ┤ RZ(0.52063) ├─ ...\nq_1: ┤ RY(0.17518) ├─ ...\nc: 4/════════════════`,
          desc: 'Qiskit نىڭ كلاسسىك تېكىست كۆرۈنۈشى'
        },
        {
          id: 'qiskit-visual',
          name: 'كۆرۈنۈش (matplotlib/LaTeX)',
          code: `# matplotlib سىزمىسى\ndev._circuit.draw(output="mpl")\n\n# LaTeX چىقىرىش\nprint(dev._circuit.draw(output="latex_source"))`,
          output: `[matplotlib سىزمىسى ياكى LaTeX كود]`,
          desc: 'ئىككى رەسىملىك چىقىرىش ئۇسۇلى: mpl ۋە latex'
        },
        {
          id: 'qiskit-options',
          name: 'قوللىنىشچان تەڭشەكلەر',
          code: `dev._circuit.draw(\n    output="mpl",\n    reverse_bits=True,\n    plot_barriers=False\n)`,
          desc: 'بىت تەرتىپىنى تەتۈرلەش، توسالغۇلارنى يوقىتىش'
        }
      ]
    },
    plugins: {
      title: 'باشقا قىستۇرما مەنبەلىرى',
      icon: '🔌',
      plugins: [
        { name: 'PennyLane-Qulacs', color: 'bg-emerald-100 dark:bg-emerald-900/30', desc: 'يېمۇرۇق كۇبىت سىمۇلياتورى' },
        { name: 'PennyLane-Q#', color: 'bg-purple-100 dark:bg-purple-900/30', desc: 'Microsoft Q# ھېسابلاش' },
        { name: 'PennyLane-Forest', color: 'bg-amber-100 dark:bg-amber-900/30', desc: 'Rigetti Forest SDK' },
        { name: 'PennyLane-Braket', color: 'bg-indigo-100 dark:bg-indigo-900/30', desc: 'Amazon Braket Cloud' }
      ]
    }
  };

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 md:py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-uyghur text-2xl">
      {/* Header */}
      <header className={`${fadeInClass} mb-10 text-center`}>
        <div className="inline-flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900/30 dark:text-purple-200">#PennyLane</span>
          <span className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-900/30 dark:text-indigo-200">#QuantumCircuit</span>
          <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900/30 dark:text-amber-200">#KeLBiL</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
          PennyLane دا كۋانت توك يوللىرىنى قانداق كۆرۈنۈشكە بولىدۇ؟
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          تېكىست، رەسىم، ياكى باشقا فورماتتا — ھەر خىل ئۇسۇل بىلەن كۆرۈنۈش | 2026-يىلى 1-ئاينىڭ 5-كۈنى
        </p>

        {/* Hero Visual */}
        <div className="mt-8 flex justify-center">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">0: ──RY(0.1)──╭C──┤</div>
              <div className="text-3xl mb-2">1: ──RY(0.3)──╰X──┤ ⟨Z⟩</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                ← بۇ سىزنىڭ كۋانت توك يولىڭىز — ھازىر سىز بۇنى قانداق كۆرۈشنى بىلىسىز!
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-4 z-10 mb-8 bg-white dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto py-2 space-x-3">
          {[
            { id: 'pennylane', label: 'PennyLane', icon: '⚛️' },
            { id: 'cirq', label: 'Cirq', icon: '🟢' },
            { id: 'qiskit', label: 'Qiskit', icon: '🔵' },
            { id: 'plugins', label: 'باشقا قىستۇرمالار', icon: '🔌' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                activeTab === item.id
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

      {/* Content */}
      <section className="space-y-10">
        {/* PennyLane Tab */}
        {activeTab === 'pennylane' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">⚛️</span> {circuits.pennylane.title}
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              PennyLane دا توك يوللىرىنى كۆرۈش ئۈچۈن <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">qml.draw()</code> فۇنكسىيەسى ئەڭ ئاددىي ۋە كۈچلۈك قورال. بۇ فۇنكسىيە <strong>تېكىست شەكلىدە</strong> توك يولىنى گىرافىك سىزىق بىلەن كۆرسىتىدۇ.
            </p>

            {circuits.pennylane.examples.map((ex) => (
              <div key={ex.id} className="mb-8">
                <h3 className="font-bold text-lg mb-3">{ex.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{ex.desc}</p>

                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-4">
                  <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300">
                    <span className="text-sm font-mono">circuit_{ex.id}.py</span>
                    <button
                      onClick={() => copyToClipboard(ex.code, ex.id)}
                      className={`text-sm px-2 py-1 rounded flex items-center ${
                        copiedId === ex.id ? 'bg-green-500 text-white' : 'hover:bg-gray-700'
                      }`}
                    >
                      {copiedId === ex.id ? '✔ كۆچۈرۈلدى' : '⎘ كۆچۈرۈش'}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-green-400 text-left text-sm font-mono whitespace-pre">
                      {ex.code}
                    </pre>
                  </div>
                </div>

                {ex.output && (
                  <div className="bg-gray-800 text-cyan-300 p-4 rounded-lg border-l-4 border-cyan-500">
                    <div className="text-xs text-gray-400 mb-1">چىقىرىش (Output):</div>
                    <pre className="font-mono text-left whitespace-pre">
                      {ex.output}
                    </pre>
                  </div>
                )}
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">💡 نۇرغۇن قىزىقارلىق ئاچقۇچلۇق سۆزلەر</h3>
              <ul className="list-disc pl-5 space-y-1 text-blue-700 dark:text-blue-300">
                <li><code>show_all_wires=True</code> — بوش سىملارنىمۇ كۆرسىتىدۇ</li>
                <li><code>wire_order=[2,1,0]</code> — سىما تەرتىپىنى ئۆزگەرتىدۇ</li>
                <li><code>decimals=3</code> — پارامېتىر دەللىكىنى بەلگىلەيدۇ</li>
                <li><code>max_length=100</code> — قۇر تېكىستنى سىزىققا بۆلىدۇ</li>
              </ul>
            </div>
          </div>
        )}

        {/* Cirq Tab */}
        {activeTab === 'cirq' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🟢</span> {circuits.cirq.title}
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              PennyLane-Cirq قىستۇرمىسى ئارقىلىق سىز <strong>Cirq سىمۇلياتۇرى</strong> (cirq.simulator) نى ئىشلىتىپ، PennyLane نىڭ قۇۋۋىتىنى Cirq نىڭ كۈچلۈك كۆرۈنۈش ئىقتىدارى بىلەن بىرلەشتۈرەلەيسىز.
            </p>

            {circuits.cirq.examples.map((ex) => (
              <div key={ex.id} className="mb-8">
                <h3 className="font-bold text-lg mb-3">{ex.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{ex.desc}</p>

                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-4">
                  <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300">
                    <span className="text-sm font-mono">cirq_{ex.id}.py</span>
                    <button
                      onClick={() => copyToClipboard(ex.code, ex.id)}
                      className={`text-sm px-2 py-1 rounded flex items-center ${
                        copiedId === ex.id ? 'bg-green-500 text-white' : 'hover:bg-gray-700'
                      }`}
                    >
                      {copiedId === ex.id ? '✔ كۆچۈرۈلدى' : '⎘ كۆچۈرۈش'}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-green-400 text-left text-sm font-mono whitespace-pre">
                      {ex.code}
                    </pre>
                  </div>
                </div>

                {ex.output && (
                  <div className="bg-gray-800 text-cyan-300 p-4 rounded-lg border-l-4 border-cyan-500">
                    <div className="text-xs text-gray-400 mb-1">چىقىرىش:</div>
                    <pre className="font-mono text-left text-xs whitespace-pre">
                      {ex.output}
                    </pre>
                  </div>
                )}
              </div>
            ))}

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">🎯 Cirq نىڭ ئالاھىدىلىكى</h3>
              <p className="text-green-700 dark:text-green-300">
                Cirq توك يولى <strong>π</strong>، رەڭگارەڭ سىمۋوللار ۋە ئارقىلىق لىنىيىلار بىلەن كۆرۈنىدۇ — بۇ ئىلمىي ماقالىلەردە ئىشلىتىلىدىغان فورماتقا يېقىن.
              </p>
            </div>
          </div>
        )}

        {/* Qiskit Tab */}
        {activeTab === 'qiskit' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🔵</span> {circuits.qiskit.title}
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Qiskit قىستۇرمىسى سىزگە <strong>تېكىست، matplotlib، LaTeX</strong> دېگەن ئۈچ خىل چىقىرىش فورماتىنى تەمىنلەيدۇ — تېخىمۇ كۆپ تاللاش بار.
            </p>

            {circuits.qiskit.examples.map((ex) => (
              <div key={ex.id} className="mb-8">
                <h3 className="font-bold text-lg mb-3">{ex.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{ex.desc}</p>

                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-4">
                  <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300">
                    <span className="text-sm font-mono">qiskit_{ex.id}.py</span>
                    <button
                      onClick={() => copyToClipboard(ex.code, ex.id)}
                      className={`text-sm px-2 py-1 rounded flex items-center ${
                        copiedId === ex.id ? 'bg-green-500 text-white' : 'hover:bg-gray-700'
                      }`}
                    >
                      {copiedId === ex.id ? '✔ كۆچۈرۈلدى' : '⎘ كۆچۈرۈش'}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-green-400 text-left text-sm font-mono whitespace-pre">
                      {ex.code}
                    </pre>
                  </div>
                </div>

                {ex.output && ex.id === 'qiskit-text' && (
                  <div className="bg-gray-800 text-cyan-300 p-4 rounded-lg border-l-4 border-cyan-500">
                    <div className="text-xs text-gray-400 mb-1">تېكىست چىقىرىش (ئۈلگى):</div>
                    <pre className="font-mono text-left text-xs">
{`     ┌─────────────┐
q_0: ┤ RZ(0.52063) ├─ ...
q_1: ┤ RY(0.17518) ├─ ...
c: 4/════════════════`}
                    </pre>
                  </div>
                )}

                {ex.id === 'qiskit-visual' && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-3 border border-dashed border-cyan-500">
                      <h4 className="font-bold text-cyan-400 mb-1">matplotlib (mpl)</h4>
                      <div className="bg-gray-200 border-2 border-dashed rounded h-24 flex items-center justify-center text-gray-500">
                        سىزىلغان توك يولى رەسىمى
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 border border-dashed border-amber-500">
                      <h4 className="font-bold text-amber-400 mb-1">LaTeX</h4>
                      <pre className="text-amber-300 text-left text-xs bg-gray-900 p-2 rounded">
{`\\documentclass{standalone}
\\usepackage[output=...]{qasm2circ}
\\begin{document}
\\begin{tikzpicture}
  % Qiskit-generated LaTeX circuit
\\end{tikzpicture}
\\end{document}`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">🛠️ Qiskit نىڭ قوشۇمچە تەڭشەكلەرى</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">reverse_bits=True</code> — سىما تەرتىپىنى ئۈستىدىن تۆۋەنگە ئۆزگەرتىدۇ
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">plot_barriers=False</code> — توسالغۇ چىزىقلارنى يوقىتىدۇ
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">initial_state=True</code> — باشلانغۇچ ھالەتنى كۆرسىتىدۇ
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">cregbundle=False</code> — كلاسسىك سىمالارنى ئايرىم-ئايرىم كۆرسىتىدۇ
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Plugins Tab */}
        {activeTab === 'plugins' && (
          <div className={`${fadeInClass}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">🔌</span> {circuits.plugins.title}
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              PennyLane نىڭ قۇۋۋىتى — ئۇنىڭ <strong>كېڭەيتىلىشچان ئېكولوگىيە سىستېمىسى</strong>. سىز ھازىر يېتىلدۇرۇلغان قىستۇرما مەنبەلىرىنى ئىشلىتىپ، ھەر خىل كۈچلۈك ۋە ئالاھىدە كۆرۈنۈش ئۇسۇللىرىنى قوللىنىش ئىقتىدارىغا ئىگە بولىسىز.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {circuits.plugins.plugins.map((plugin, i) => (
                <div key={i} className={`${plugin.color} p-4 rounded-xl border`}>
                  <h3 className="font-bold mb-1">{plugin.name}</h3>
                  <p className="text-sm">{plugin.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">⚠️ مۇھىم كۆرسەتمە</h3>
              <p className="text-purple-700 dark:text-purple-300">
                ھەر بىر قىستۇرما ئۆزىگە خاس <code>draw()</code> فۇنكسىيىگە ئىگە. سىز <strong>دائىم قىستۇرما ھۆججىتىگە مۇراجىئەت قىلىشىڭىز</strong> كېرەك. مەسىلەن:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-purple-700 dark:text-purple-300">
                <li>PennyLane-Braket: <code>dev.circuit_diagram()</code></li>
                <li>PennyLane-Q#: <code>dev._operation_repr()</code></li>
                <li>PennyLane-Qulacs: <code>dev.get_circuit().to_string()</code></li>
              </ul>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <h3 className="font-bold mb-3">كۈچلۈك تەۋسىيە — توك يولى كۆرۈنۈشىنى تاللاش جەدۋىلى</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-2 text-left">قارار</th>
                      <th className="px-4 py-2 text-left">ئۇسۇل</th>
                      <th className="px-4 py-2 text-left">ئىشلىتىش ئورنى</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr><td className="px-4 py-2 font-medium">سىزىم تېزلاشتۇرۇش</td><td className="px-4 py-2"><code>qml.draw()</code></td><td className="px-4 py-2">ئەمەلىيەتچىلەر، تەجرىبە</td></tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="px-4 py-2 font-medium">ئىلمىي ماقالە</td>
                      <td className="px-4 py-2">Qiskit + <code>output="latex"</code></td>
                      <td className="px-4 py-2">ماتېماتىكىيە، فيزىكا</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">تەقدىم سىلىدېسى</td>
                      <td className="px-4 py-2">Qiskit + <code>output="mpl"</code></td>
                      <td className="px-4 py-2">كونفىرېنسىيە، دەرىجىلىك قىلىش</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800/50">
                      <td className="px-4 py-2 font-medium">ئەمەلىي تۈزۈش</td>
                      <td className="px-4 py-2">Cirq + <code>dev.circuit</code></td>
                      <td className="px-4 py-2">تۈزۈشچىلەر، تېخنىكىلار</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-2">كۆرۈنۈش — كۋانت پروگراممىنى چۈشىنىشنىڭ ئەڭ مۇھىم قەدەمى.</p>
        <p className="text-sm">
          🖥️ KeLBiL ماشىنا ئۆگىنىش مەركىزى | 2026-يىلى 1-ئاينىڭ 5-كۈنى، دۈشەنبە
        </p>
        <div className="mt-3 flex justify-center space-x-4">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">PennyLane</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">Cirq</span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">Qiskit</span>
          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">Qulacs، Q#، Braket</span>
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

export default Blog58;