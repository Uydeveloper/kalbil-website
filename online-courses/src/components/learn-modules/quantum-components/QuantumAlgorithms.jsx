// src/components/learn-modules/quantum-components/QuantumAlgorithms.jsx
import React, { useState } from 'react';
import { CircuitBoard, Zap, Target, Clock, Cpu } from 'lucide-react';

const QuantumAlgorithms = ({ onComplete }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('grover');

  const algorithms = [
    { 
      id: 'grover', 
      name: 'گۇرۇ ئالگورىزىمى', 
      description: 'تېز ئىزدەش ئالگورىزىمى',
      complexity: 'O(√n)',
      useCase: 'سانلىق مەلۇمات بازىسى ئىزدەش',
      speedup: '√n'
    },
    { 
      id: 'shor', 
      name: 'شۆر ئالگورىزىمى', 
      description: 'ئامىللاشتۇرۇش ئالگورىزىمى',
      complexity: 'O((log n)³)',
      useCase: 'رەقەم خەت-بەت مەخپىيەتلىكى',
      speedup: 'ئېكسبونېنت'
    },
    { 
      id: 'hhl', 
      name: 'HHL ئالگورىزىمى', 
      description: 'خەت تەڭلىمىسى ھەل قىلىش',
      complexity: 'O(log n)',
      useCase: 'خەت تەڭلىمىسى ھەل قىلىش',
      speedup: 'ئېكسبونېنت'
    },
    { 
      id: 'vqe', 
      name: 'VQE ئالگورىزىمى', 
      description: 'كىۋانىت ئېنېرگىيە تەھلىلى',
      complexity: 'O(n)',
      useCase: 'ماتېرىيال پەنلىرى',
      speedup: 'ئېكسبونېنت'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <CircuitBoard className="w-5 h-5 text-blue-500" />
          كىۋانىت ئالگورىزىملىرى
        </h5>
        <p className="text-gray-700">
          كىۋانىت ئالگورىزىملىرى ئەنئەنىۋى كومپيۇتىرلارغا قارىغاندا ئېكسبونېنت سۈرئەتتە ئىشلەيدۇ
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold text-gray-800 mb-4">ئالگورىزىم تاللاش:</h5>
          <div className="space-y-3">
            {algorithms.map((algo) => (
              <button
                key={algo.id}
                onClick={() => setSelectedAlgorithm(algo.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedAlgorithm === algo.id 
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-300 border-2' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{algo.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{algo.description}</div>
                    <div className="flex items-center gap-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        مۇرەككەپلىك: {algo.complexity}
                      </span>
                      <span className="text-xs text-gray-500">{algo.useCase}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-lg font-bold text-blue-600">{algo.speedup}</div>
                    <div className="text-xs text-gray-500">سۈرئەت</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">
            {algorithms.find(a => a.id === selectedAlgorithm)?.name} مىسالى
          </h5>
          
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
{`import qiskit
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram

# گۇرۇ ئالگورىزىمى (تېز ئىزدەش)
def grover_algorithm(n_qubits, marked_state):
    # كىۋانىت سوخۇرۇق قۇرۇش
    qc = QuantumCircuit(n_qubits, n_qubits)
    
    # باشلانغۇچ ھالەت
    qc.h(range(n_qubits))
    
    # گۇرۇ قەدەملىرى
    iterations = int((3.14/4) * (2**n_qubits)**0.5)
    
    for _ in range(iterations):
        # ئوراكل قۇرۇش (بەلگىلەنگەن ھالەت)
        qc.x(range(n_qubits))
        qc.h(n_qubits-1)
        qc.mct(list(range(n_qubits-1)), n_qubits-1)
        qc.h(n_qubits-1)
        qc.x(range(n_qubits))
        
        # گۇرۇ قۇرۇلمىسى
        qc.h(range(n_qubits))
        qc.x(range(n_qubits))
        qc.h(n_qubits-1)
        qc.mct(list(range(n_qubits-1)), n_qubits-1)
        qc.h(n_qubits-1)
        qc.x(range(n_qubits))
        qc.h(range(n_qubits))
    
    # ئۆلچەش
    qc.measure(range(n_qubits), range(n_qubits))
    
    return qc

# ئىجرا قىلىش
n_qubits = 3
marked = '101'  # بەلگىلەنگەن ھالەت
qc = grover_algorithm(n_qubits, marked)

simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1024).result()
counts = result.get_counts(qc)

print("نەتىجە:", counts)
print("ئەڭ كۆپ ئۇچرىغان:", max(counts, key=counts.get))`}
            </pre>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
              <div className="font-bold text-blue-600 text-lg">
                {selectedAlgorithm === 'grover' ? '√n' :
                 selectedAlgorithm === 'shor' ? 'log n' :
                 selectedAlgorithm === 'hhl' ? 'log n' :
                 'n'}
              </div>
              <div className="text-xs text-gray-600">ۋاقىت مۇرەككەپلىكى</div>
            </div>
            <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div className="font-bold text-purple-600 text-lg">
                {selectedAlgorithm === 'grover' ? 'N/√n' :
                 selectedAlgorithm === 'shor' ? '2ⁿ/n' :
                 selectedAlgorithm === 'hhl' ? 'n³/log n' :
                 'n²/log n'}
              </div>
              <div className="text-xs text-gray-600">سۈرئەت ئاشۇرۇش</div>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
              <div className="font-bold text-green-600 text-lg">
                {selectedAlgorithm === 'grover' ? '99%' :
                 selectedAlgorithm === 'shor' ? '95%' :
                 selectedAlgorithm === 'hhl' ? '97%' :
                 '98%'}
              </div>
              <div className="text-xs text-gray-600">ئىنچىكە</div>
            </div>
          </div>
        </div>
      </div>

      {/* سۈرئەت سېلىشتۇرما */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">كىۋانىت ۋە ئەنئەنىۋى سۈرئەت سېلىشتۇرمىسى:</h5>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-700">كىۋانىت كومپيۇتىر</span>
              </div>
              <span className="text-sm font-semibold text-blue-600">O(log n)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">ئەنئەنىۋى كومپيۇتىر</span>
              </div>
              <span className="text-sm font-semibold text-gray-600">O(n³)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-gray-500 to-slate-500 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{algorithms.length}</span> كىۋانىت ئالگورىزىمنى تونۇشتۇرۇلدى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
        >
          <CircuitBoard className="w-5 h-5" />
          كىۋانىت ئالگورىزىملىرىنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default QuantumAlgorithms;