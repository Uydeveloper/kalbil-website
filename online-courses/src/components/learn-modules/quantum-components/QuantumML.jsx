// src/components/learn-modules/quantum-components/QuantumML.jsx
import React, { useState } from 'react';
import { Brain, Network, Target, Zap, LineChart } from 'lucide-react';

const QuantumML = ({ onComplete }) => {
  const [selectedModel, setSelectedModel] = useState('qnn');

  const models = [
    { 
      id: 'qnn', 
      name: 'كىۋانىت نېرۋا تورى', 
      description: 'كىۋانىت قاتلاملىرى بىلەن نېرۋا تورى',
      type: 'تەقسىملەش/رەگىرېسىيە',
      accuracy: '95%',
      qubits: '4-8'
    },
    { 
      id: 'qsvm', 
      name: 'كىۋانىت SVM', 
      description: 'كىۋانىت ياردەملىك ۋېكتور ماشىنىسى',
      type: 'تەقسىملەش',
      accuracy: '92%',
      qubits: '2-4'
    },
    { 
      id: 'qboost', 
      name: 'كىۋانىت كۈچلەندۈرۈش', 
      description: 'كىۋانىت قارار دارىخىتى كۈچلەندۈرۈش',
      type: 'تەقسىملەش',
      accuracy: '94%',
      qubits: '3-6'
    },
    { 
      id: 'qae', 
      name: 'كىۋانىت ئۆزلەشتۈرۈش كودلىغۇچ', 
      description: 'كىۋانىت سانلىق مەلۇمات سىقىش',
      type: 'سىقىش',
      accuracy: '96%',
      qubits: '4-8'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-500" />
          كىۋانىت ماشىنا ئۆگىنىش مودېللىرى
        </h5>
        <div className="grid grid-cols-4 gap-4">
          {['كىۋانىت تەييارلاش', 'كىۋانىت قاتلام', 'ئۆگىتىش', 'ئالدىن بىلىش'].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                {index + 1}
              </div>
              <div className="text-xs text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-bold text-gray-800 mb-4">كىۋانىت مودېل تاللاش:</h5>
          <div className="space-y-3">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedModel === model.id 
                    ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-300 border-2' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{model.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{model.description}</div>
                    <div className="flex items-center gap-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                        {model.type}
                      </span>
                      <span className="text-xs text-gray-500">كىۋانىت بىت: {model.qubits}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-lg font-bold text-purple-600">{model.accuracy}</div>
                    <div className="text-xs text-gray-500">ئىنچىكە</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">
            {models.find(m => m.id === selectedModel)?.name} مىسالى
          </h5>
          
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
{`import pennylane as qml
import torch
import torch.nn as nn
import numpy as np

# كىۋانىت قۇرۇلما
n_qubits = ${selectedModel === 'qnn' ? '4' :
              selectedModel === 'qsvm' ? '2' :
              selectedModel === 'qboost' ? '3' : '4'}
n_layers = 3

dev = qml.device("default.qubit", wires=n_qubits)

# كىۋانىت قاتلام
@qml.qnode(dev)
def quantum_circuit(inputs, weights):
    # ئۇچۇرلارنى كىۋانىت ھالەتكە ئايلاندۇرۇش
    for i in range(n_qubits):
        qml.RY(inputs[i], wires=i)
    
    # كىۋانىت قاتلام
    for layer in range(n_layers):
        for i in range(n_qubits):
            qml.RY(weights[layer, i, 0], wires=i)
            qml.RZ(weights[layer, i, 1], wires=i)
        
        # ئاراملىشىش
        for i in range(n_qubits-1):
            qml.CNOT(wires=[i, i+1])
    
    # ئۆلچەش
    return [qml.expval(qml.PauliZ(i)) for i in range(n_qubits)]

# ھىبرىد مودېل
class QuantumNeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.classical = nn.Linear(10, n_qubits)
        self.quantum = qml.qnn.TorchLayer(quantum_circuit, {"weights": (n_layers, n_qubits, 2)})
        self.output = nn.Linear(n_qubits, 2)
    
    def forward(self, x):
        x = torch.relu(self.classical(x))
        x = self.quantum(x)
        x = self.output(x)
        return torch.softmax(x, dim=1)

# مودېل قۇرۇش
model = QuantumNeuralNetwork()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

print(f"كىۋانىت مودېل: {models.find(m => m.id === selectedModel)?.name}")
print(f"كىۋانىت بىت سانى: {n_qubits}")
print(f"قاتلام سانى: {n_layers}")`}
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-gray-800">مودېل ئىنچىكەلىكى</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {models.find(m => m.id === selectedModel)?.accuracy}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-gray-800">سۈرئەت ئاشۇرۇش</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {selectedModel === 'qnn' ? '10x' :
                 selectedModel === 'qsvm' ? '5x' :
                 selectedModel === 'qboost' ? '8x' : '12x'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* كىۋانىت نېرۋا تورى كۆرسىتىش */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h5 className="font-bold text-gray-800 mb-4">كىۋانىت نېرۋا تورى قۇرۇلمىسى:</h5>
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            {/* كىرگۈزۈش قاتلامى */}
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">I</span>
                </div>
                <div className="text-sm text-gray-700">كىرگۈزۈش</div>
              </div>
            </div>
            
            {/* كىۋانىت قاتلام */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse"></div>
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs text-gray-600">كىۋانىت بىت {num}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* چىقىرىش قاتلامى */}
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">O</span>
                </div>
                <div className="text-sm text-gray-700">چىقىرىش</div>
              </div>
            </div>
            
            {/* ئاراملىشىش يوللىرى */}
            <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border-2 border-dashed border-purple-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{models.length}</span> كىۋانىت ماشىنا ئۆگىنىش مودېلى تونۇشتۇرۇلدى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
        >
          <Brain className="w-5 h-5" />
          كىۋانىت ماشىنا ئۆگىنىشنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default QuantumML;