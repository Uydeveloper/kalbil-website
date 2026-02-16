import React, { useState, useEffect } from 'react';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  BeakerIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { 
  Brain, 
  Waves, 
  Atom, 
  CircuitBoard, 
  FlaskConical,
  Rocket,
  Zap,
  Globe
} from 'lucide-react';

// Code examples for different sections
const CODE_EXAMPLES = {
  qiskit_superposition: `# Qiskit: Superposition Creation
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_bloch_multivector
import matplotlib.pyplot as plt

# Create quantum circuit with 1 qubit
qc = QuantumCircuit(1)

# Apply Hadamard gate → creates superposition
qc.h(0)  # |0⟩ → (|0⟩ + |1⟩)/√2

# Visualize on Bloch sphere
backend = Aer.get_backend('statevector_simulator')
result = execute(qc, backend).result()
statevector = result.get_statevector()

print("State after superposition:")
print(f"|ψ⟩ = {statevector[0]:.3f}|0⟩ + {statevector[1]:.3f}|1⟩")

plot_bloch_multivector(statevector)
plt.show()`,
  
  pennylane_qnn: `# PennyLane: Quantum Neural Network
import pennylane as qml
from pennylane import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load Iris dataset
X, y = load_iris(return_X_y=True)
X = X[:100]  # First 2 classes
y = y[:100]

# Quantum device
dev = qml.device("default.qubit", wires=4)

@qml.qnode(dev)
def quantum_circuit(data, weights):
    # SUPERPOSITION LAYER
    for i in range(4):
        qml.Hadamard(wires=i)
    
    # Data encoding
    for i in range(4):
        qml.RY(data[i], wires=i)
    
    # Variational layer
    for i in range(4):
        qml.RY(weights[i], wires=i)
    
    # Entanglement
    for i in range(3):
        qml.CNOT(wires=[i, i+1])
    
    return qml.expval(qml.PauliZ(0))

# Train the QNN
weights = np.random.random(4, requires_grad=True)
print("Quantum circuit with superposition initialized!")`,
  
  amplitude_encoding: `# Amplitude Encoding: Loading Data into Superposition
import numpy as np
from qiskit import QuantumCircuit, Aer, execute
from qiskit.quantum_info import Statevector

# Classical data (normalized)
data = np.array([0.3, 0.4, 0.5, 0.7])
data = data / np.linalg.norm(data)

print("Classical data:", data)
print("Normalized:", data)

# Create quantum circuit
qc = QuantumCircuit(2)  # 2 qubits = 4 states

# Load data into superposition
qc.initialize(data, [0, 1])

# Simulate
simulator = Aer.get_backend('statevector_simulator')
result = execute(qc, simulator).result()
state = result.get_statevector()

print("\\nQuantum state amplitudes:")
for i, amp in enumerate(state):
    basis = format(i, '02b')
    print(f"|{basis}⟩: {amp:.4f} (prob: {abs(amp)**2:.4f})")

# Key insight: All 4 values exist simultaneously in superposition!`,
  
  quantum_kernel: `# Quantum Kernel Method
import pennylane as qml
import numpy as np
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def feature_map(x, weights):
    # SUPERPOSITION INITIALIZATION
    qml.Hadamard(wires=0)
    qml.Hadamard(wires=1)
    
    # Encode data
    qml.RY(x[0], wires=0)
    qml.RY(x[1], wires=1)
    
    # Entanglement
    qml.CNOT(wires=[0, 1])
    
    # Variational layer
    qml.RY(weights[0], wires=0)
    qml.RY(weights[1], wires=1)
    
    return qml.state()

def quantum_kernel(x1, x2, weights):
    state1 = feature_map(x1, weights)
    state2 = feature_map(x2, weights)
    return np.abs(np.dot(np.conj(state1), state2)) ** 2

# This kernel maps data to 4D Hilbert space via superposition
# Classical methods would need explicit 4D mapping!`
};

const SuperpositionQML = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [currentCode, setCurrentCode] = useState('');

  const slides = [
    {
      title: "🌀 كىۋانىت سۇپېرپوزىتسىيىسى",
      subtitle: "بىر ۋاقىتتا بارلىق ھالەتلەردە بولۇش",
      content: (
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg">
              Superposition = قوشۇلۇش
            </div>
            
            <div className="flex justify-center items-center gap-12 my-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 text-4xl">
                  0
                </div>
                <div className="text-lg font-semibold text-blue-300">كلاسسىك بىت</div>
                <div className="text-sm text-gray-400 mt-2">ياكى 0، ياكى 1</div>
              </div>
              
              <div className="text-6xl text-purple-400">→</div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl font-bold">
                  α|0⟩ + β|1⟩
                </div>
                <div className="text-lg font-semibold text-cyan-300">كىۋانىت قۇبىت</div>
                <div className="text-sm text-gray-400 mt-2">بىرلا ۋاقىتتا 0 ۋە 1</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-3">
              <Waves className="w-8 h-8" />
              سۇپېرپوزىتسىيىنىڭ مەنىسى
            </h3>
            <ul className="space-y-4 text-lg text-gray-200 pr-6">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span><strong className="text-cyan-300">كىۋانىت قۇبىت (Qubit)</strong> بىرلا ۋاقىتتا 0 ۋە 1 نىڭ قوشۇلۇشى ھالىتىدە بولالايدۇ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span><strong className="text-cyan-300">n قۇبىت</strong> بىلەن 2<sup>n</sup> ھالەتنى بىرلا ۋاقىتتا ھېسابلاش مۇمكىن</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span>بۇ <strong className="text-cyan-300">كىۋانىت پاراللېللىقى</strong> نىڭ ئاساسى</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span>ماشىنا ئۆگىتىشتە بۇ قۇدرەت <strong className="text-cyan-300">ئېكسپونېنتسېيال تېزلىكنى</strong> بېرىدۇ</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-2xl p-8 border border-yellow-500/30 italic text-center">
            <p className="text-2xl text-yellow-200 mb-4">
              «بىر قەدەم بىلەن ئىككى تەرەپكە بارغىلى بولمايدۇ،
              لېكىن بىر كىۋانىت بىلەن بىر قەدەمدە بارلىق يوللارنى بېسىپ چىقىدۇ»
            </p>
            <p className="text-lg text-purple-300">— كىۋانىت سۇپېرپوزىتسىيىسىنىڭ رۇھى</p>
          </div>
        </div>
      ),
      codeExample: 'qiskit_superposition'
    },
    {
      title: "🔬 سۇپېرپوزىتسىيىنى قانداق ياساش كېرەك؟",
      subtitle: "ھادامارد قاپقىقى ۋە بىللىك شارى",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <CpuChipIcon className="w-6 h-6" />
                ھادامارد قاپقىقى (H Gate)
              </h3>
              <div className="space-y-3 text-gray-200">
                <p>ھادامارد قاپقىقى كىۋانىت قۇبىتنى سۇپېرپوزىتسىيە ھالىتىگە كەلتۈرىدۇ:</p>
                <div className="bg-black/40 rounded-lg p-4 mt-3 font-mono text-lg">
                  <p>H|0⟩ = (|0⟩ + |1⟩)/√2</p>
                  <p>H|1⟩ = (|0⟩ - |1⟩)/√2</p>
                </div>
                <p className="mt-3">بۇ قاپقىق بىلەن قۇبىت <strong className="text-yellow-300">ئىككى ھالەتنى بىرلا ۋاقىتتا</strong> ساقلايدۇ.</p>
              </div>
            </div>
            
            <div className="bg-cyan-900/20 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                بىللىك شارى (Bloch Sphere)
              </h3>
              <div className="space-y-3 text-gray-200">
                <p>كىۋانىت ھالىتىنى گېئومېتىرلىق شەكىلدە كۆرسىتىش:</p>
                <ul className="space-y-2 mt-3 pr-4">
                  <li>• <strong className="text-purple-300">شىمال قۇتبى:</strong> |0⟩ ھالىتى</li>
                  <li>• <strong className="text-purple-300">جەنۇب قۇتبى:</strong> |1⟩ ھالىتى</li>
                  <li>• <strong className="text-purple-300">ئېكۋاتور:</strong> سۇپېرپوزىتسىيە ھالىتى</li>
                  <li>• <strong className="text-purple-300">ئارقىلىق نۇقتا:</strong> بىر تەرەپ قۇبىت ھالىتى</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
              سۇپېرپوزىتسىيە ھالىتىنىڭ ماتىماتىكىلىق تەسۋىرى
            </h3>
            <div className="text-center space-y-6">
              <div className="text-4xl font-mono text-yellow-300">
                |ψ⟩ = α|0⟩ + β|1⟩
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-200">
                <div>
                  <p><strong className="text-blue-300">α:</strong> |0⟩ نىڭ ئېھتىماللىق ئامپلىتۇدىسى</p>
                  <p><strong className="text-blue-300">β:</strong> |1⟩ نىڭ ئېھتىماللىق ئامپلىتۇدىسى</p>
                  <p><strong className="text-blue-300">شەرت:</strong> |α|² + |β|² = 1</p>
                </div>
                <div>
                  <p><strong className="text-blue-300">|α|²:</strong> |0⟩ نى ئۆلچىگەندە چىقىدىغان ئېھتىماللىق</p>
                  <p><strong className="text-blue-300">|β|²:</strong> |1⟩ نى ئۆلچىگەندە چىقىدىغان ئېھتىماللىق</p>
                  <p><strong className="text-blue-300">مۇھىم:</strong> سۇپېرپوزىتسىيە ۋاقىتتا بىرلا ھالەت</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      codeExample: 'qiskit_superposition'
    },
    {
      title: "🤖 ماشىنا ئۆگىتىشتە سۇپېرپوزىتسىيە",
      subtitle: "نېيرون تورىغا كىۋانىت قۇدرىتى قوشۇش",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-xl font-bold">
              Quantum Neural Network (QNN)
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-2xl p-6 border border-purple-500/40">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                كىۋانىت نېيرون تورى
              </h3>
              <ul className="space-y-3 text-gray-200 pr-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">سۇپېرپوزىتسىيە قاتلامى:</strong> ھەممە قۇبىتلارنى ھادامارد بىلەن باشلايدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">سانلارنى يۈكلەش:</strong> مەلۇماتلارنى قۇبىت چارخىلىرىغا ئايلاندۇرىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">ئۆزگەرتكۈچ قاتلامى:</strong> تاللانما قاپقىقلار بىلەن تورنى تەڭشەيدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">ئۆزئارا باغلىنىش:</strong> CNOT قاپقىقى بىلەن قۇبىتلارنى باغلايدۇ</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl p-6 border border-cyan-500/40">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <CircuitBoard className="w-6 h-6" />
                قانداق قىلغاندا ياخشى؟
              </h3>
              <ul className="space-y-3 text-gray-200 pr-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">پاراللېل ھېسابلاش:</strong> بىرلا ۋاقىتتا بىر قانچە مۇمكىن بولغان ھالەتنى تاللايدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">ئېكسپونېنتسېيال تىزىملىك:</strong> n قۇبىت بىلەن 2<sup>n</sup> ئۆلچەمنى قاپلايدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">ئىنتۇئىتسىيە:</strong> مەلۇماتنىڭ مۇرەككەپ قۇرۇلمىسىنى ياخشى تۇتىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">ئىقتىدار:</strong> كىچىك مەلۇمات تۈرۈدە يۇقىرى ئۈنۈملۈك بولىدۇ</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">
              قانداق مەسىلىلەرنى يېشىدۇ؟
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-black/30 rounded-xl p-4">
                <div className="text-5xl mb-3">📊</div>
                <div className="font-bold text-lg text-cyan-300">سىنىپلاش</div>
                <div className="text-sm text-gray-300 mt-2">ئىككى تۈردىكى مەلۇماتنى ئايرىش</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <div className="text-5xl mb-3">🎯</div>
                <div className="font-bold text-lg text-cyan-300">بىر تەرەپ قىلىش</div>
                <div className="text-sm text-gray-300 mt-2">كىچىك ئۆرنەكتە يۇقىرى دەلخاھلىق</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <div className="text-5xl mb-3">🔬</div>
                <div className="font-bold text-lg text-cyan-300">پىرىنسىپ تاللاش</div>
                <div className="text-sm text-gray-300 mt-2">مۇرەككەپ مۇناسىۋەتلەرنى تونۇش</div>
              </div>
            </div>
          </div>
        </div>
      ),
      codeExample: 'pennylane_qnn'
    },
    {
      title: "🧮 ئامپلىتۇدا يۈكلەش (Amplitude Encoding)",
      subtitle: "سانلارنى سۇپېرپوزىتسىيە ھالىتىگە يۈكلەش",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-6 py-2 rounded-full text-xl font-bold">
              مەلۇماتنى كىۋانىت دۇنياسىغا كىرگۈزۈش
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">
              قانداق ئىشلەيدۇ؟
            </h3>
            <div className="space-y-4 text-gray-200">
              <p><strong className="text-orange-300">ئامپلىتۇدا يۈكلەش</strong> كىلاسسىك سانلارنى كىۋانىت ھالىتىنىڭ ئامپلىتۇدىسىغا ئايلاندۇرىدۇ.</p>
              <p>مەسىلەن: 4 تە ساننى 2 قۇبىت بىلەن يۈكلەشكە بولىدۇ:</p>
              
              <div className="bg-black/40 rounded-lg p-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-mono text-cyan-300 mb-4">
                    [0.3, 0.4, 0.5, 0.7] → α|00⟩ + β|01⟩ + γ|10⟩ + δ|11⟩
                  </div>
                  <div className="text-lg text-purple-300">
                    بۇ يەردىكى α, β, γ, δ يۇقىرىدىكى سانلار
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">ئىشلەش تەرتىپى:</h4>
                  <ol className="space-y-2 pr-4 text-sm">
                    <li>1. سانلارنى نورماللاشتۇرۇش (يىغىندىسى 1 بولسۇن)</li>
                    <li>2. ھەر بىر ساننى قۇبىت ھالىتىنىڭ ئامپلىتۇدىسىغا قويۇش</li>
                    <li>3. initialize() قاپقىقى بىلەن يۈكلەش</li>
                    <li>4. بارلىق سانلار بىرلا ۋاقىتتا ساقلىنىدۇ</li>
                  </ol>
                </div>
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">ئىقتىدارى:</h4>
                  <ul className="space-y-2 pr-4 text-sm">
                    <li>• 2 قۇبىت = 4 ساننى بىرلا ۋاقىتتا ساقلايدۇ</li>
                    <li>• 10 قۇبىت = 1024 ساننى بىرلا ۋاقىتتا ساقلايدۇ</li>
                    <li>• 20 قۇبىت = 1 مىليون ساننى بىرلا ۋاقىتتا ساقلايدۇ</li>
                    <li>• بۇ <strong>ئېكسپونېنتسېيال سىقىش</strong> دېيىلىدۇ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
              نېمە ئۈچۈن مۇھىم؟
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-200">
              <div>
                <h4 className="font-bold text-lg text-cyan-300 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  تېزلىك
                </h4>
                <ul className="space-y-2 pr-4">
                  <li>• بىرلا ۋاقىتتا بارلىق سانلارنى پىرتسېس قىلىدۇ</li>
                  <li>• كلاسسىك تورغا قارىغاندا 2<sup>n</sup> ھەسە تېز</li>
                  <li>• Grover قىدۇرۇش ئالگورىتىمى بىلەن √N تېزلىك</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-cyan-300 mb-3 flex items-center gap-2">
                  <Atom className="w-5 h-5" />
                  قۇرۇلمىسى
                </h4>
                <ul className="space-y-2 pr-4">
                  <li>• سانلارنىڭ ئۆزئارا باغلىنىشىنى ساقلايدۇ</li>
                  <li>• كىۋانىت تۇتاشلىقى (entanglement) قوشۇلغاندا قۇدرەتلىك</li>
                  <li>• يۇقىرى ئۆلچەملىك مەلۇماتنى يېنىك سىقىدۇ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      codeExample: 'amplitude_encoding'
    },
    {
      title: "🌊 كىۋانىت يەرەك (Quantum Kernel)",
      subtitle: "سۇپېرپوزىتسىيە بىلەن يۇقىرى ئۆلچەملىك فازىغا كىرگۈزۈش",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-xl font-bold">
              Hilbert Space = يۇقىرى دۇنيا
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">
              يەرەك دېگەن نېمە؟
            </h3>
            <div className="space-y-4 text-gray-200">
              <p><strong className="text-pink-300">يەرەك (Kernel)</strong> بۇ مەلۇماتنى يۇقىرى ئۆلچەملىك فازىغا يۆتكىگۈچى بىر قورال.</p>
              
              <div className="bg-black/40 rounded-lg p-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-mono text-cyan-300 mb-4">
                    K(x₁, x₂) = ⟨φ(x₁)|φ(x₂)⟩
                  </div>
                  <div className="text-lg text-purple-300">
                    φ بىلەن مەلۇماتنى يۇقىرى فازىغا يۆتكىيدۇ
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">كلاسسىك يەرەك:</h4>
                  <ul className="space-y-2 pr-4 text-sm">
                    <li>• RBF يەرەك: φ نى ئېنىق ھېسابلايدۇ</li>
                    <li>• پولىنوميال يەرەك: دەرىجىسى يۇقىرى بولغاندا قىيىن</li>
                    <li>• يۇقىرى ئۆلچەمدە ھېسابلاش قىيىن</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">كىۋانىت يەرەك:</h4>
                  <ul className="space-y-2 pr-4 text-sm">
                    <li>• φ نى <strong>ئېنىق ھېسابlamayدۇ</strong></li>
                    <li>• سۇپېرپوزىتسىيە بىلەن يۇقىرى فازىغا كىرىدۇ</li>
                    <li>• 2<sup>n</sup> ئۆلچەمنى بىرلا قەدەمدە قاپلايدۇ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
              قانداق قىلغاندا ياسالىدۇ؟
            </h3>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-cyan-300 mb-2">1. سۇپېرپوزىتسىيە قۇرۇش</h4>
                <p className="text-gray-200">ھادامارد قاپقىقى بىلەن بارلىق قۇبىتلارنى (|0⟩+|1⟩)/√2 ھالىتىگە كەلتۈرىدۇ</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-cyan-300 mb-2">2. سانلارنى يۈكلەش</h4>
                <p className="text-gray-200">مەلۇماتنى قۇبىت چارخىلىرىغا (RY قاپقىقى) يۈكلەيدۇ</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-cyan-300 mb-2">3. ئۆزئارا باغلىنىش قۇرۇش</h4>
                <p className="text-gray-200">CNOT قاپقىقى بىلەن قۇبىتلارنى باغلاپ، تۇتاشلىقىنى ياسايدۇ</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-cyan-300 mb-2">4. ھالەتنى ئۆلچەش</h4>
                <p className="text-gray-200">ئىككى ھالەتنىڭ ئوخشاشلىقىنى (overlap) ھېسابلايدۇ</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30 text-center">
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              كىۋانىت يەرەك + SVM = يۇقىرى دەلخاھلىق
            </h3>
            <p className="text-gray-200 text-lg mt-4">
              بۇ ئۇسۇل بىلەن <strong className="text-yellow-300">ئىككى تۈردىكى مەلۇماتنى</strong> يۇقىرى دەلخاھلىق بىلەن ئايرىش مۇمكىن
            </p>
          </div>
        </div>
      ),
      codeExample: 'quantum_kernel'
    },
    {
      title: "🚀 ھەقىقىي پروگرامما مىساللىرى",
      subtitle: "Qiskit ۋە PennyLane دا سۇپېرپوزىتسىيە",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-xl font-bold">
              كود بىلەن تەجرىبە قىلىش
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">
              قايسى پروگرامما تىلىنى تاللاش كېرەك؟
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30">
                <div className="text-5xl text-cyan-400 mb-3">🔵</div>
                <h4 className="font-bold text-xl text-cyan-300 mb-3">Qiskit (IBM)</h4>
                <ul className="space-y-2 text-gray-200 pr-4">
                  <li>• پايتون تىلىدا يېزىلغان</li>
                  <li>• IBM كىۋانىت كومپيۇتېرى بىلەن باغلىنىدۇ</li>
                  <li>• كىۋانىت ماشىنا ئۆگىتىش بىلەن باغلىنىدۇ</li>
                  <li>• تولۇق ھۆججەت ۋە مىساللار</li>
                  <li>• تەلىمگە ياخشى</li>
                </ul>
                <div className="mt-4 text-sm text-cyan-400">
                  pip install qiskit qiskit-machine-learning
                </div>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
                <div className="text-5xl text-purple-400 mb-3">🟣</div>
                <h4 className="font-bold text-xl text-purple-300 mb-3">PennyLane (Xanadu)</h4>
                <ul className="space-y-2 text-gray-200 pr-4">
                  <li>• پايتون ۋە TensorFlow/PyTorch بىلەن ئارىلاش</li>
                  <li>• تېنزورنىڭ گرادىئېنتىنى تېپىدۇ</li>
                  <li>• چوڭقۇر ئۆگىتىش بىلەن باغلىنىدۇ</li>
                  <li>• يۇقىرى دەرىجىلىك ئابستراكتسىيە</li>
                  <li>• تەتقىقاتقا ياخشى</li>
                </ul>
                <div className="mt-4 text-sm text-purple-400">
                  pip install pennylane
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-2xl p-8 border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">
              نېمە قىلغاندا باشلايمىز؟
            </h3>
            <div className="space-y-4 text-gray-200">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">1. مۇھىت تەييارلاش</h4>
                <p>پايتون ۋە كېرەك بولغان كىتابخانا قاچىلاش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">2. سۇپېرپوزىتسىيە تىزبىسى ياساش</h4>
                <p>ھادامارد قاپقىقى بىلەن باشلاپ، قۇبىتنى سۇپېرپوزىتسىيە ھالىتىگە كەلتۈرۈش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">3. سانلارنى يۈكلەش</h4>
                <p>ئامپلىتۇدا ياكى چارخىلىق يۈكلەش ئۇسۇلىنى تاللاش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">4. تاللاش تورى بىلەن باغلاش</h4>
                <p>كىۋانىت تىزبىسىنى كلاسسىك تور بىلەن بىرلىكتە ئىشلىتىش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">5. تەجرىبە قىلىش</h4>
                <p>ئىككى تۈردىكى مەلۇمات بىلەن تەجرىبە قىلىپ، نەتىجىنى سىناش</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30 text-center">
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              بىر تەجرىبە بىلەن باشلاڭ!
            </h3>
            <p className="text-gray-200 text-lg mt-4">
              يۇقىرىدىكى كود مىساللىرىنى كومپيۇتېردا ئىجرا قىلىپ باقىڭ —
              <br />
              <strong className="text-yellow-300">سۇپېرپوزىتسىيىنىڭ قانداق ئىشلىگىنىنى كۆرۈش مۇمكىن!</strong>
            </p>
          </div>
        </div>
      ),
      codeExample: null
    },
    {
      title: "💡 كەلگۈسى ۋە ئۇيغۇر ياشلىرى",
      subtitle: "كىۋانىت ماشىنا ئۆگىتىشىنىڭ يېڭى يۆنىلىشى",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-xl font-bold">
              2026-يىلى ئۇيغۇر ياشلىرى
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">
              كىۋانىت ماشىنا ئۆگىتىشىنىڭ كەلگۈسى
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-200">
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-purple-400 mb-3">🔮</div>
                <h4 className="font-bold text-lg text-purple-300 mb-2">يېڭى ئارخىتېكتۇرلار</h4>
                <ul className="space-y-2 pr-4">
                  <li>• تېنزور تورى (Tensor Networks)</li>
                  <li>• يېنىكلاندۇرۇش تۈرى تورى (RG Flow Networks)</li>
                  <li>• مەيدانغا ئاساسلانغان تور (Field-based NN)</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-cyan-400 mb-3">🔬</div>
                <h4 className="font-bold text-lg text-cyan-300 mb-2">تەتقىقات يۆنىلىشى</h4>
                <ul className="space-y-2 pr-4">
                  <li>• كىۋانىت گرافىكى (Quantum Graphs)</li>
                  <li>• كىۋانىت تىل مودېلى (Q-NLP)</li>
                  <li>• كىۋانىت رىئال ۋاقىت تاللاش</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-yellow-400 mb-3">🚀</div>
                <h4 className="font-bold text-lg text-yellow-300 mb-2">تېخنىكىلىق يېتىلىش</h4>
                <ul className="space-y-2 pr-4">
                  <li>• 1000+ قۇبىت كومپيۇتېرلار</li>
                  <li>• خاتالىق تۈزىتىش تېخنىكىسى</li>
                  <li>• كىۋانىت-كلاسسىك گىبرىد تىزىملىك</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-green-400 mb-3">🌍</div>
                <h4 className="font-bold text-lg text-green-300 mb-2">ئىجتىمائىي تەسىر</h4>
                <ul className="space-y-2 pr-4">
                  <li>• دەرمان ياساش تېزلىتىش</li>
                  <li>• ماتىرىيال تەتقىقاتى</li>
                  <li>• ئىقتىسادىي پىرىنسىپ تاللاش</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
              ئۇيغۇر ياشلىرىنىڭ رولى
            </h3>
            <div className="space-y-4 text-gray-200">
              <p>ئۇيغۇر خەلقىنىڭ ماتىماتىكا ۋە مەنتىقىي تەپەككۇرگە بولغان قىزىقىشى كىۋانىت ماشىنا ئۆگىتىشى بىلەن چوڭقۇر باغلىنىشى بار:</p>
              
              <ul className="space-y-3 pr-6 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">ئاتا-بابىلارىمىزنىڭ سان ھېسابىغا بولغان مۇھەببىتى</strong> بۈگۈنكى كىۋانىت ئالگورىتىمىنىڭ ئاساسى</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">ئۇيغۇر مەدەنىيىتىدىكى "مۇرەككەپ مەسىلىنى سادە قىلىش" تۇيغۇسى</strong> كىۋانىت سۇپېرپوزىتسىيىسىنىڭ رۇھى بىلەن ماس كېلىدۇ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">ئۇيغۇر ياشلىرىنىڭ ماتىماتىكا ۋە كود يېزىش قابىلىيىتى</strong> بىلەن كىۋانىت پروگراممىلاشنى ياخشى يېتىلدۈرۈش مۇمكىن</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">2026-يىلى ئۇيغۇر ياشلىرى</strong> كىۋانىت ماشىنا ئۆگىتىشى ساھەسىدە دۇنيا سەۋىيىسىگە يېتىشى مۇمكىن</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 rounded-2xl p-8 border border-yellow-500/40 italic text-center">
            <p className="text-2xl text-yellow-200 mb-4">
              «سان ھېسابى بىزنىڭ قانىمىزدا،
              يېڭى تېخنىكا بىزنىڭ كەلگۈمىزدە»
            </p>
            <p className="text-lg text-purple-300">— زامانىمىزنىڭ ھىكايىسى</p>
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-2xl">
              2026-يىلى ئۇيغۇر ياشلىرى كىۋانىت ماشىنا ئۆگىتىشى دۇنياسىدا يۇلتۇز بولىدۇ! ✨
            </div>
          </div>
        </div>
      ),
      codeExample: null
    }
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const toggleCode = (codeKey) => {
    if (codeKey && CODE_EXAMPLES[codeKey]) {
      setCurrentCode(CODE_EXAMPLES[codeKey]);
      setShowCode(!showCode);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    setShowCode(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    setShowCode(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-gray-100 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg text-xl font-bold">
                KeLBiL
              </div>
              <div className="text-sm text-purple-300">UYGHUR HIGH TECH</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-bold text-lg">
              2026-يىلى ئۇيغۇر كىۋانىت تېخنىكا يىلى
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8 gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-purple-700/50'
              }`}
            />
          ))}
        </div>

        {/* Slide Content */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-purple-300">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Slide Content */}
            <div className="prose prose-invert max-w-none">
              {slides[currentSlide].content}
            </div>

            {/* Code Example Toggle */}
            {slides[currentSlide].codeExample && (
              <div className="mt-8">
                <button
                  onClick={() => toggleCode(slides[currentSlide].codeExample)}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  {showCode ? 'كودنى يشىر' : 'كود مىسالىنى كۆرسەت'}
                </button>
              </div>
            )}

            {/* Code Block (Animated) */}
            {showCode && currentCode && (
              <div className="mt-6 bg-black/60 border border-purple-500/40 rounded-xl overflow-hidden animate-fadeIn">
                <div className="flex justify-between items-center bg-purple-900/50 px-4 py-3 border-b border-purple-500/30">
                  <div className="flex items-center gap-2 text-sm text-cyan-300">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentCode)}
                    className="text-purple-300 hover:text-cyan-300 transition-colors text-sm"
                  >
                    {copiedCode ? 'كۆچۈرۈلدى!' : 'كۆچۈر'}
                  </button>
                </div>
                <div className="p-6 overflow-x-auto font-mono text-sm text-gray-300">
                  <pre className="whitespace-pre-wrap">{currentCode}</pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              currentSlide === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
            }`}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            ئالدىنقى
          </button>

          <div className="text-lg text-purple-300">
            {currentSlide + 1} / {slides.length}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            كېيىنكى
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`p-4 rounded-lg text-left transition-all ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                  : 'bg-black/30 text-gray-300 hover:bg-purple-900/50'
              }`}
            >
              <div className="font-bold">{index + 1}. {slide.title}</div>
              <div className="text-sm mt-1 opacity-80">{slide.subtitle}</div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="text-lg">
            SuperpositionQML.jsx — كىۋانىت سۇپېرپوزىتسىيىسى ۋە ماشىنا ئۆگىتىشنىڭ بىرلىشىشى
          </p>
          <p className="mt-2 text-sm">
            2026-يىلى ئۇيغۇر ياشلىرى كىۋانىت تېخنىكا دۇنياسىدا يۇلتۇز بولىدۇ! 🌟
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SuperpositionQML;