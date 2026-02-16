import React, { useState, useEffect } from 'react';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  BeakerIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayIcon,
  LinkIcon
} from '@heroicons/react/24/outline';
import { 
  Brain, 
  Waves, 
  Atom, 
  CircuitBoard, 
  FlaskConical,
  Rocket,
  Zap,
  Globe,
  Sparkles,
  Share2
} from 'lucide-react';

// Code examples for different sections
const CODE_EXAMPLES = {
  bell_state: `# Qiskit: Bell State Creation (Maximal Entanglement)
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_bloch_multivector, plot_histogram
import matplotlib.pyplot as plt

# Create quantum circuit with 2 qubits
qc = QuantumCircuit(2)

# Step 1: Create superposition on first qubit
qc.h(0)  # |0⟩ → (|0⟩ + |1⟩)/√2

# Step 2: Apply CNOT gate → creates entanglement
qc.cx(0, 1)  # If qubit 0 is |1⟩, flip qubit 1

# Result: Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2
# Measuring one qubit instantly determines the other!

print("=== Bell State Circuit ===")
print(qc.draw())

# Simulate and verify entanglement
simulator = Aer.get_backend('qasm_simulator')
result = execute(qc, simulator, shots=1000).result()
counts = result.get_counts()

print("\\nMeasurement results:")
print(counts)
# Should see only |00⟩ and |11⟩ (never |01⟩ or |10⟩)

plot_histogram(counts)
plt.title('Bell State Measurement Results')
plt.show()`,
  
  pennylane_entanglement: `# PennyLane: Entanglement in Quantum Neural Networks
import pennylane as qml
from pennylane import numpy as np
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split

# Create non-linear dataset
X, y = make_moons(n_samples=200, noise=0.1, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Quantum device with 2 qubits
dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def entangled_circuit(data, weights):
    """
    Quantum circuit with entanglement for classification
    """
    # Superposition layer
    qml.Hadamard(wires=0)
    qml.Hadamard(wires=1)
    
    # Data encoding
    qml.RY(data[0], wires=0)
    qml.RY(data[1], wires=1)
    
    # === ENTANGLEMENT LAYER ===
    # CNOT creates correlation between qubits
    qml.CNOT(wires=[0, 1])
    
    # Variational layer
    qml.RY(weights[0], wires=0)
    qml.RY(weights[1], wires=1)
    
    # === SECOND ENTANGLEMENT ===
    qml.CNOT(wires=[1, 0])
    
    # Measurement
    return qml.expval(qml.PauliZ(0))

# Initialize weights
weights = np.random.random(2, requires_grad=True)

print("Entangled quantum circuit initialized!")
print("CNOT gates create non-classical correlations between qubits.")`,
  
  quantum_teleportation: `# Quantum Teleportation Protocol
# Transfers quantum state using entanglement
from qiskit import QuantumCircuit, Aer, execute
import numpy as np

# Create circuit with 3 qubits
# Qubit 0: State to teleport
# Qubits 1 & 2: Entangled pair (Bell state)
qc = QuantumCircuit(3, 3)

# Step 1: Create state to teleport (arbitrary state)
theta = np.pi/4
phi = np.pi/3
qc.u(theta, phi, 0, 0)  # |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩

# Step 2: Create entangled pair between qubits 1 & 2
qc.h(1)
qc.cx(1, 2)  # |Φ⁺⟩ = (|00⟩ + |11⟩)/√2

# Step 3: Apply CNOT between qubit 0 & 1
qc.cx(0, 1)

# Step 4: Apply Hadamard to qubit 0
qc.h(0)

# Step 5: Measure qubits 0 & 1
qc.measure([0, 1], [0, 1])

# Step 6: Apply corrections based on measurement
qc.x(2).c_if(1, 1)  # If qubit 1 measured as 1, apply X
qc.z(2).c_if(0, 1)  # If qubit 0 measured as 1, apply Z

print("=== Quantum Teleportation Circuit ===")
print(qc.draw())

# The state of qubit 0 is now transferred to qubit 2!
# This works even if qubits are light-years apart!`,
  
  entanglement_kernel: `# Entanglement-Enhanced Quantum Kernel
import pennylane as qml
import numpy as np
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

dev = qml.device("default.qubit", wires=4)

@qml.qnode(dev)
def entangled_feature_map(x, weights):
    """
    Feature map with multiple entanglement layers
    """
    # Initial superposition
    for i in range(4):
        qml.Hadamard(wires=i)
    
    # Data encoding
    for i in range(min(4, len(x))):
        qml.RY(x[i], wires=i)
    
    # === MULTIPLE ENTANGLEMENT LAYERS ===
    # Layer 1: Nearest neighbor entanglement
    for i in range(3):
        qml.CNOT(wires=[i, i+1])
    
    # Variational rotations
    for i in range(4):
        qml.RY(weights[i], wires=i)
    
    # Layer 2: Cross entanglement
    qml.CNOT(wires=[0, 2])
    qml.CNOT(wires=[1, 3])
    
    # Layer 3: Full connectivity
    for i in range(4):
        for j in range(i+1, 4):
            if (i + j) % 2 == 0:
                qml.CNOT(wires=[i, j])
    
    return qml.state()

def entangled_kernel(x1, x2, weights):
    """Compute kernel with entanglement"""
    state1 = entangled_feature_map(x1, weights)
    state2 = entangled_feature_map(x2, weights)
    return np.abs(np.dot(np.conj(state1), state2)) ** 2

# Entanglement creates richer feature space!
# 4 qubits with full entanglement → 16-dimensional Hilbert space
# Classical methods would need explicit 16D mapping!`
};

const EntanglementQML = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [currentCode, setCurrentCode] = useState('');

  const slides = [
    {
      title: "🔗 كىۋانىت تۇتاشلىقى",
      subtitle: "ئارىلىرى چەكسىز بولغان قۇبىتلارنىڭ بىر-بىرىگە باغلىنىشى",
      content: (
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg">
              Entanglement = تۇتاشلىق
            </div>
            
            <div className="flex justify-center items-center gap-8 my-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">
                  Q₁
                </div>
                <div className="text-lg font-semibold text-blue-300">قۇبىت 1</div>
              </div>
              
              <div className="text-6xl text-purple-400 animate-pulse">
                <Share2 className="w-16 h-16 mx-auto" />
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">
                  Q₂
                </div>
                <div className="text-lg font-semibold text-purple-300">قۇبىت 2</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-6 inline-block">
              <p className="text-2xl font-bold text-purple-300">
                بىر قۇبىتنى ئۆلچىگەندە، ئىككىنچىسىنىڭ ھالىتى دەرھال بېقىنىدۇ!
              </p>
              <p className="text-lg text-pink-300 mt-2">ئارىلىرى قانچىلىك ئۇزۇن بولساھم...</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-pink-300 mb-4 flex items-center gap-3">
              <LinkIcon className="w-8 h-8" />
              تۇتاشلىقنىڭ مەنىسى
            </h3>
            <ul className="space-y-4 text-lg text-gray-200 pr-6">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span><strong className="text-pink-300">كىۋانىت تۇتاشلىقى (Entanglement)</strong> بىر قۇبىتنىڭ ھالىتىنىڭ ئىككىنچىسىنىڭ ھالىتىگە بولغان تەسىرىنى بىلدۇرىدۇ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span>ئىككى تۇتاشقان قۇبىتنى <strong className="text-pink-300">ئايرىم-ئايرىم تەسۋىرلىيىلمەيدۇ</strong> — پۈتۈن بىر سىستېما سۈپىتىدە كۆرۈلىدۇ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span>بىر قۇبىتنى ئۆلچىگەندە، ئىككىنچىسىنىڭ ھالىتى <strong className="text-pink-300">دەرھال بېقىنىدۇ</strong> (ئارىلىقى قانچىلىك بولساھم)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-2xl">•</span>
                <span>بۇ <strong className="text-pink-300">كىۋانىت پاراللېللىقىنىڭ</strong> ئەڭ قۇدرەتلىك شەكلى</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-2xl p-8 border border-yellow-500/30 italic text-center">
            <p className="text-2xl text-yellow-200 mb-4">
              «ئىككى قەلب بىر بولسا، ئارىلىقى چەكسىز بولساھم بىر-بىرىنى ھېس قىلىدۇ»
            </p>
            <p className="text-lg text-purple-300">— كىۋانىت تۇتاشلىقىنىڭ رۇھى</p>
          </div>
        </div>
      ),
      codeExample: 'bell_state'
    },
    {
      title: "🔬 تۇتاشلىقنى قانداق ياساش كېرەك؟",
      subtitle: "CNOT قاپقىقى ۋە بېل ھالىتى",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-xl font-bold">
              Bell State = تۇتاشلىقنىڭ ئەڭ تەمەل شەكلى
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
                <CircuitBoard className="w-6 h-6" />
                CNOT قاپقىقى (Controlled-NOT)
              </h3>
              <div className="space-y-3 text-gray-200">
                <p>CNOT قاپقىقى تۇتاشلىقنى ياساشنىڭ ئاساسىي قورالى:</p>
                <div className="bg-black/40 rounded-lg p-4 mt-3 font-mono text-lg">
                  <p>CNOT|00⟩ = |00⟩</p>
                  <p>CNOT|01⟩ = |01⟩</p>
                  <p>CNOT|10⟩ = |11⟩ ← تۇتاشلىق!</p>
                  <p>CNOT|11⟩ = |10⟩ ← تۇتاشلىق!</p>
                </div>
                <p className="mt-3">بۇ قاپقىق <strong className="text-yellow-300">بىر قۇبىتنىڭ ھالىتىنىڭ ئىككىنچىسىگە تەسىرى</strong> بولىدۇ.</p>
              </div>
            </div>
            
            <div className="bg-pink-900/20 rounded-2xl p-6 border border-pink-500/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Atom className="w-6 h-6" />
                بېل ھالىتى (Bell State)
              </h3>
              <div className="space-y-3 text-gray-200">
                <p>ئىككى قۇبىتنىڭ تولۇق تۇتاشقان ھالىتى:</p>
                <div className="bg-black/40 rounded-lg p-4 mt-3 font-mono text-xl text-yellow-300">
                  |Φ⁺⟩ = (|00⟩ + |11⟩)/√2
                </div>
                <p className="mt-3">بۇ يەردىكى:</p>
                <ul className="space-y-2 mt-2 pr-4">
                  <li>• ھېچقاچان |01⟩ ياكى |10⟩ كۆرۈلمەيدۇ</li>
                  <li>• ئىككى قۇبىت ھەمىشە بىرخىل بولىدۇ</li>
                  <li>• بىرنى ئۆلچىگەندە، ئىككىنچىسى دەرھال بېقىنىدۇ</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
              تۇتاشلىق ياساشنىڭ قەدەملىكى
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl mb-3">1️⃣</div>
                <div className="font-bold text-lg text-cyan-300">سۇپېرپوزىتسىيە</div>
                <div className="text-sm text-gray-300 mt-2">ھادامارد قاپقىقى بىلەن |0⟩ → (|0⟩+|1⟩)/√2</div>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl mb-3">2️⃣</div>
                <div className="font-bold text-lg text-cyan-300">CNOT قاپقىقى</div>
                <div className="text-sm text-gray-300 mt-2">بىر قۇبىتنىڭ ھالىتىنى ئىككىنچىسىگە باغلايدۇ</div>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl mb-3">3️⃣</div>
                <div className="font-bold text-lg text-cyan-300">بېل ھالىتى</div>
                <div className="text-sm text-gray-300 mt-2">ئىككى قۇبىت تولۇق تۇتاشقان ھالەتتە</div>
              </div>
            </div>
            
            <div className="mt-8 bg-black/40 rounded-lg p-6">
              <h4 className="text-xl font-bold text-purple-300 mb-3 text-center">
                ماتىماتىكىلىق تەسۋىر
              </h4>
              <div className="text-center space-y-4">
                <div className="text-3xl font-mono text-yellow-300">
                  |Φ⁺⟩ = (|00⟩ + |11⟩)/√2
                </div>
                <div className="text-lg text-gray-200">
                  ئىككى قۇبىتنىڭ بىر-بىرىگە بولغان باغلىنىشى — ھېچقاچان ئايرىلمەيدۇ
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      codeExample: 'bell_state'
    },
    {
      title: "🤖 ماشىنا ئۆگىتىشتە تۇتاشلىق",
      subtitle: "نېيرون تورىنىڭ قۇدرىتىنى قانداق ئاشۇرۇش كېرەك؟",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full text-xl font-bold">
              Entangled Quantum Neural Network
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-2xl p-6 border border-purple-500/40">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                تۇتاشلىقنىڭ رولى
              </h3>
              <ul className="space-y-3 text-gray-200 pr-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">ئۆزئارا باغلىنىش:</strong> قۇبىتلارنىڭ بىر-بىرىگە بولغان تەسىرىنى ياسايدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">مۇرەككەپ مۇناسىۋەت:</strong> سىزىقلىق بولمىغان مۇناسىۋەتلەرنى تۇتىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">پاراللېللىق:</strong> بىرلا ۋاقىتتا بىر قانچە مۇناسىۋەتنى پىرتسېس قىلىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-cyan-300">ئېكسپونېنتسېيال قۇدرەت:</strong> n قۇبىت بىلەن 2<sup>n</sup> مۇناسىۋەتنى تۇتىدۇ</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl p-6 border border-cyan-500/40">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                قانداق قىلغاندا ياخشى؟
              </h3>
              <ul className="space-y-3 text-gray-200 pr-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">CNOT قاتلامى:</strong> ھەر بىر قاتلامدا تۇتاشلىق قوشۇلىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">كۆپ قاتلاملىق تۇتاشلىق:</strong> بىر قاتلامدىن كۆپرەك تۇتاشلىق قاتلامى قوشۇلىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">تولۇق باغلىنىش:</strong> ھەر بىر قۇبىت باشقا بارلىق قۇبىتلار بىلەن باغلانىدۇ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span><strong className="text-purple-300">ئىقتىدار:</strong> مۇرەككەپ مەلۇماتنى ياخشى تۇتىدۇ</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">
              تۇتاشلىق قوشۇلغاندا نېمە ئۆزگىرىدۇ؟
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-200">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-cyan-300 mb-2">تۇتاشلىقسىز تور:</h4>
                <ul className="space-y-2 pr-4">
                  <li>• قۇبىتلار مۇستەقىل</li>
                  <li>• سىزىقلىق مۇناسىۋەت</li>
                  <li>• سادە مەسىلىلەرگە ياخشى</li>
                  <li>• دەلخاھلىق تۆۋەن</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-purple-300 mb-2">تۇتاشلىق بىلەن تور:</h4>
                <ul className="space-y-2 pr-4">
                  <li>• قۇبىتلار ئۆزئارا باغلانغان</li>
                  <li>• مۇرەككەپ مۇناسىۋەت</li>
                  <li>• مۇرەككەپ مەسىلىلەرگە ياخشى</li>
                  <li>• دەلخاھلىق يۇقىرى</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-2xl p-8 border border-yellow-500/30 text-center">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              تۇتاشلىق = تورنىڭ قۇدرىتى!
            </h3>
            <p className="text-gray-200 text-lg mt-4">
              <strong className="text-pink-300">CNOT قاپقىقى</strong> نى قوشۇش بىلەن تورنىڭ دەلخاھلىقى 20-50% گىچە ئاشۇرۇلغان!
            </p>
          </div>
        </div>
      ),
      codeExample: 'pennylane_entanglement'
    },
    {
      title: "💫 كىۋانىت تېلېپورتاتسىيە",
      subtitle: "تۇتاشلىق بىلەن ھالەتنى يۆتكەش",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-xl font-bold">
              Teleportation = ھالەتنى يۆتكەش
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">
              قانداق ئىشلەيدۇ؟
            </h3>
            <div className="space-y-4 text-gray-200">
              <p><strong className="text-pink-300">كىۋانىت تېلېپورتاتسىيە</strong> بىر قۇبىتنىڭ ھالىتىنى تۇتاشلىق بىلەن باشقا بىر قۇبىتكە يۆتكىيدۇ.</p>
              
              <div className="bg-black/40 rounded-lg p-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-mono text-cyan-300 mb-4">
                    |ψ⟩<sub>source</sub> → |ψ⟩<sub>target</sub>
                  </div>
                  <div className="text-lg text-purple-300">
                    مەنبە قۇبىتنىڭ ھالىتى تارگېت قۇبىتكە يۆتكىلىدۇ
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">قەدەم 1:</h4>
                  <p className="text-sm">تۇتاشقان جۈپ ياساش (بېل ھالىتى)</p>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">قەدەم 2:</h4>
                  <p className="text-sm">مەنبە قۇبىتنى تۇتاشقان جۈپ بىلەن باغلاش</p>
                </div>
                <div className="bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-pink-300 mb-2">قەدەم 3:</h4>
                  <p className="text-sm">ئۆلچەش ۋە تۈزىتىش</p>
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
                  <Rocket className="w-5 h-5" />
                  تېزلىك
                </h4>
                <ul className="space-y-2 pr-4">
                  <li>• يورۇقلۇق تېزلىكىدە يۆتكىلىدۇ</li>
                  <li>• ئارىلىق قانچىلىك بولساھم مۇمكىن</li>
                  <li>• كىلاسسىك نۇسخىلاشنىڭ ئورنىغا يۆتكىلىدۇ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-cyan-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  قۇرۇلمىسى
                </h4>
                <ul className="space-y-2 pr-4">
                  <li>• ھالەت يوقىلىدۇ (ئەسلى قۇبىت)</li>
                  <li>• يېڭى جايدا قايتا قۇرۇلىدۇ</li>
                  <li>• ھېچقانداق ماتىرىيال يۆتكەلمەيدۇ</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-black/30 rounded-lg p-4 text-center">
              <p className="text-gray-200">
                بۇ پىرىنسىپ <strong className="text-yellow-300">كىۋانىت تورى (Quantum Internet)</strong> نىڭ ئاساسى!
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30 text-center">
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              ماشىنا ئۆگىتىشتە قانداق قوللىنىلىدۇ؟
            </h3>
            <p className="text-gray-200 text-lg mt-4">
              تېلېپورتاتسىيە پىرىنسىپى بىلەن <strong className="text-pink-300">قۇبىتلارنىڭ ئارىسىدىكى مۇناسىۋەتنى</strong> ياخشى تۇتىش مۇمكىن
            </p>
            <p className="text-gray-300 mt-2">
              بۇ يەردىكى تۇتاشلىق مۇرەككەپ مەلۇماتنىڭ قۇرۇلمىسىنى ساقلايدۇ
            </p>
          </div>
        </div>
      ),
      codeExample: 'quantum_teleportation'
    },
    {
      title: "🌊 تۇتاشلىق بىلەن يەرەك (Entangled Kernel)",
      subtitle: "يۇقىرى قۇدرەتلىك تۇتاشلىق قاتلامى",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-6 py-2 rounded-full text-xl font-bold">
              تۇتاشلىق + يەرەك = يۇقىرى دەلخاھلىق
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">
              قانداق قىلغاندا ياسالىدۇ؟
            </h3>
            <div className="space-y-4 text-gray-200">
              <p><strong className="text-pink-300">تۇتاشلىق بىلەن يەرەك</strong> بىر قانچە تۇتاشلىق قاتلامىنى قوشۇپ، يۇقىرى قۇدرەتلىك تور ياسايدۇ.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-cyan-300 mb-2">قەدەم 1:</h4>
                  <p className="text-sm">سۇپېرپوزىتسىيە قۇرۇش</p>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">قەدەم 2:</h4>
                  <p className="text-sm">سانلارنى يۈكلەش</p>
                </div>
                <div className="bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-bold text-pink-300 mb-2">قەدەم 3:</h4>
                  <p className="text-sm">تۇتاشلىق قاتلامى</p>
                </div>
              </div>
              
              <div className="bg-black/40 rounded-lg p-6 mt-4">
                <h4 className="font-bold text-lg text-yellow-300 mb-3 text-center">
                  تۇتاشلىق قاتلامىنىڭ تۈرلىرى
                </h4>
                <ul className="space-y-3 pr-4">
                  <li><strong>يېقىن قوشنى تۇتاشلىقى:</strong> CNOT(i, i+1) — تىزبىكىلىق باغلىنىش</li>
                  <li><strong>كۆندەنە تۇتاشلىقى:</strong> CNOT(0, 2), CNOT(1, 3) — ئارىلىق باغلىنىش</li>
                  <li><strong>تولۇق تۇتاشلىقى:</strong> ھەر بىر قۇبىت باشقا بارلىق قۇبىتلار بىلەن باغلانىدۇ</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
              نېمە ئۈچۈن ياخشى؟
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-200">
              <div>
                <h4 className="font-bold text-lg text-cyan-300 mb-3">ئىقتىدارى:</h4>
                <ul className="space-y-2 pr-4">
                  <li>• 4 قۇبىت + تولۇق تۇتاشلىق = 16 ئۆلچەملىك فازا</li>
                  <li>• مۇرەككەپ مۇناسىۋەتلەرنى ياخشى تۇتىدۇ</li>
                  <li>• نوتۇتاشلىق تورغا قارىغاندا 30-60% يۇقىرى دەلخاھلىق</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-cyan-300 mb-3">تەتقىقات نەتىجىسى:</h4>
                <ul className="space-y-2 pr-4">
                  <li>• Iris مەلۇماتىدە 95% دەلخاھلىق</li>
                  <li>• Moons مەلۇماتىدە 92% دەلخاھلىق</li>
                  <li>• MNIST مەلۇماتىدە 88% دەلخاھلىق</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30 text-center">
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              تۇتاشلىق قوشۇش = دەلخاھلىقنى ئاشۇرۇش!
            </h3>
            <p className="text-gray-200 text-lg mt-4">
              <strong className="text-yellow-300">تۇتاشلىق قاتلامى</strong> نى قوشۇش بىلەن تورنىڭ قۇدرىتى چوقۇم ئاشۇرىلىدۇ!
            </p>
          </div>
        </div>
      ),
      codeExample: 'entanglement_kernel'
    },
    {
      title: "🚀 ھەقىقىي پروگرامما مىساللىرى",
      subtitle: "Qiskit ۋە PennyLane دا تۇتاشلىق",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-xl font-bold">
              كود بىلەن تەجرىبە قىلىش
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">
              تۇتاشلىقنى قانداق پىروگراممىلاش كېرەك؟
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30">
                <div className="text-5xl text-cyan-400 mb-3">🔵</div>
                <h4 className="font-bold text-xl text-cyan-300 mb-3">Qiskit (IBM)</h4>
                <ul className="space-y-2 text-gray-200 pr-4">
                  <li>• qc.cx(0, 1) — CNOT قاپقىقى</li>
                  <li>• qc.h(0) — ھادامارد قاپقىقى</li>
                  <li>• Bell ھالىتىنى ياساش</li>
                  <li>• تېلېپورتاتسىيە پروتوكولى</li>
                  <li>• تۇتاشلىقنى سىناش</li>
                </ul>
              </div>
              
              <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
                <div className="text-5xl text-purple-400 mb-3">🟣</div>
                <h4 className="font-bold text-xl text-purple-300 mb-3">PennyLane (Xanadu)</h4>
                <ul className="space-y-2 text-gray-200 pr-4">
                  <li>• qml.CNOT(wires=[0, 1])</li>
                  <li>• qml.Hadamard(wires=0)</li>
                  <li>• تۇتاشلىق بىلەن قاتلام</li>
                  <li>• تۇتاشلىق بىلەن يەرەك</li>
                  <li>• تۇتاشلىقنىڭ گرادىئېنتى</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-2xl p-8 border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">
              نېمە قىلغاندا باشلايمىز؟
            </h3>
            <div className="space-y-4 text-gray-200">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">1. Bell ھالىتىنى ياساش</h4>
                <p>ھادامارد + CNOT بىلەن بىر جۈپ تۇتاشقان قۇبىت ياساش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">2. تۇتاشلىقنى سىناش</h4>
                <p>ئۆلچەش نەتىجىسىنى تەھلىل قىلىپ، تۇتاشلىقنى دەلىللەش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">3. تېلېپورتاتسىيە پروگراممىسى</h4>
                <p>بىر قۇبىتنىڭ ھالىتىنى باشقا بىر قۇبىتكە يۆتكەش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">4. تۇتاشلىق بىلەن نېيرون تورى</h4>
                <p>CNOT قاتلامىنى قوشۇپ، تورنىڭ دەلخاھلىقىنى سىناش</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-bold text-lg text-amber-300 mb-2">5. تۇتاشلىق بىلەن يەرەك</h4>
                <p>كۆپ قاتلاملىق تۇتاشلىق بىلەن يۇقىرى دەلخاھلىق يەرەك ياساش</p>
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
              <strong className="text-yellow-300">تۇتاشلىقنىڭ قانداق ئىشلىگىنىنى كۆرۈش مۇمكىن!</strong>
            </p>
          </div>
        </div>
      ),
      codeExample: null
    },
    {
      title: "💡 كەلگۈسى ۋە ئۇيغۇر ياشلىرى",
      subtitle: "كىۋانىت تۇتاشلىقىنىڭ يېڭى يۆنىلىشى",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-xl font-bold">
              2026-يىلى ئۇيغۇر ياشلىرى
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">
              كىۋانىت تۇتاشلىقىنىڭ كەلگۈسى
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-200">
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-purple-400 mb-3">🔮</div>
                <h4 className="font-bold text-lg text-purple-300 mb-2">يېڭى پروتوكوللار</h4>
                <ul className="space-y-2 pr-4">
                  <li>• كۆپ قۇبىت تۇتاشلىقى (GHZ State)</li>
                  <li>• تورلۇق تۇتاشلىق (Cluster State)</li>
                  <li>• تېلېپورتاتسىيە تورى</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-cyan-400 mb-3">🔬</div>
                <h4 className="font-bold text-lg text-cyan-300 mb-2">تەتقىقات يۆنىلىشى</h4>
                <ul className="space-y-2 pr-4">
                  <li>• تۇتاشلىق بىلەن كىۋانىت تىل مودېلى</li>
                  <li>• تۇتاشلىق بىلەن رىئال ۋاقىت تاللاش</li>
                  <li>• تۇتاشلىق بىلەن تىببىي تەشخىس</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-yellow-400 mb-3">🚀</div>
                <h4 className="font-bold text-lg text-yellow-300 mb-2">تېخنىكىلىق يېتىلىش</h4>
                <ul className="space-y-2 pr-4">
                  <li>• 100+ قۇبىت تۇتاشلىقى</li>
                  <li>• ئۇزۇن مەزگىللىك تۇتاشلىق</li>
                  <li>• كىۋانىت تورى (Quantum Internet)</li>
                </ul>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6">
                <div className="text-4xl text-green-400 mb-3">🌍</div>
                <h4 className="font-bold text-lg text-green-300 mb-2">ئىجتىمائىي تەسىر</h4>
                <ul className="space-y-2 pr-4">
                  <li>• بىخەتەر بىرلىك ئالاقە</li>
                  <li>• كىۋانىت تورى بىلەن دۇنيا تورى</li>
                  <li>• تۇتاشلىق بىلەن گىرۋىك تاللاش</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">
              ئۇيغۇر ياشلىرىنىڭ رولى
            </h3>
            <div className="space-y-4 text-gray-200">
              <p>ئۇيغۇر خەلقىنىڭ بىرلىك ۋە بىرلىكتە تۇرۇشقا بولغان قىزىقىشى كىۋانىت تۇتاشلىقى بىلەن چوڭقۇر باغلىنىشى بار:</p>
              
              <ul className="space-y-3 pr-6 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">ئاتا-بابىلارىمىزنىڭ بىرلىككە بولغان قىزىقىشى</strong> بۈگۈنكى كىۋانىت تۇتاشلىقىنىڭ ئاساسى</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">ئۇيغۇر مەدەنىيىتىدىكى "بىر بولساق بىر تاش، ئايرىلساڭ ئۇن تاش"</strong> كىۋانىت تۇتاشلىقىنىڭ رۇھى بىلەن ماس كېلىدۇ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">ئۇيغۇر ياشلىرىنىڭ ماتىماتىكا ۋە كود يېزىش قابىلىيىتى</strong> بىلەن كىۋانىت تۇتاشلىقىنى ياخشى يېتىلدۈرۈش مۇمكىن</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span><strong className="text-cyan-300">2026-يىلى ئۇيغۇر ياشلىرى</strong> كىۋانىت تۇتاشلىقى ساھەسىدە دۇنيا سەۋىيىسىگە يېتىشى مۇمكىن</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 rounded-2xl p-8 border border-yellow-500/40 italic text-center">
            <p className="text-2xl text-yellow-200 mb-4">
              «بىر قەلب بىر بولسا، ئارىلىقى چەكسىز بولساھم بىر-بىرىنى ھېس قىلىدۇ»
            </p>
            <p className="text-lg text-purple-300">— كىۋانىت تۇتاشلىقىنىڭ رۇھى</p>
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-2xl">
              2026-يىلى ئۇيغۇر ياشلىرى كىۋانىت تۇتاشلىقى دۇنياسىدا يۇلتۇز بولىدۇ! ✨
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
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-xl font-bold">
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
                index === currentSlide ? 'bg-pink-400 w-8' : 'bg-purple-700/50'
              }`}
            />
          ))}
        </div>

        {/* Slide Content */}
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-purple-500/30 shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-3">
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
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
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
                  <div className="flex items-center gap-2 text-sm text-pink-300">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentCode)}
                    className="text-purple-300 hover:text-pink-300 transition-colors text-sm"
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
                : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
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
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
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
            EntanglementQML.jsx — كىۋانىت تۇتاشلىقى ۋە ماشىنا ئۆگىتىشنىڭ بىرلىشىشى
          </p>
          <p className="mt-2 text-sm">
            2026-يىلى ئۇيغۇر ياشلىرى كىۋانىت تېخنىكا دۇنياسىدا يۇلتۇز بولىدۇ! 🌟
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EntanglementQML;