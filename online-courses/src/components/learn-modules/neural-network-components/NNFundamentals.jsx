// src/components/learn-modules/neural-network-components/NNFundamentals.jsx
import React, { useState } from 'react';
import { Brain, Target, Zap, Activity, CheckCircle, Play } from 'lucide-react';

const NNFundamentals = ({ onComplete }) => {
  const [selectedNeuron, setSelectedNeuron] = useState('perceptron');
  const [quizAnswers, setQuizAnswers] = useState({});

  const neuronTypes = [
    { 
      id: 'perceptron', 
      name: 'پېرسېپترون', 
      description: 'ئەڭ ساددە نېرۋا ھۈجەيرىسى',
      formula: 'y = σ(w·x + b)',
      discovered: '1957',
      use: 'ساددە تەقسىملەش'
    },
    { 
      id: 'sigmoid', 
      name: 'سىگمويد', 
      description: 'ئاكتىۋاتسىيە فۇنكسىيەسى',
      formula: 'σ(x) = 1/(1+e⁻ˣ)',
      discovered: '1970',
      use: 'ئېھتىماللىق چىقىرىش'
    },
    { 
      id: 'relu', 
      name: 'ReLU', 
      description: 'تېز ئاكتىۋاتسىيە',
      formula: 'f(x) = max(0, x)',
      discovered: '2010',
      use: 'چوڭقۇر ئۆگىنىش'
    },
  ];

  const handleQuizChange = (questionId, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="space-y-8">
      {/* ئاساسىي چۈشەنچە */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-green-500" />
          نېرۋا ھۈجەيرىسى قۇرۇلمىسى
        </h5>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="font-semibold text-gray-800">كىرگۈزۈش</div>
            <div className="text-sm text-gray-600">سانلىق مەلۇمات</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-green-700" />
              </div>
            </div>
            <div className="font-semibold text-gray-800">ھېسابلاش</div>
            <div className="text-sm text-gray-600">w·x + b</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-800" />
              </div>
            </div>
            <div className="font-semibold text-gray-800">چىقىرىش</div>
            <div className="text-sm text-gray-600">σ(w·x + b)</div>
          </div>
        </div>
      </div>

      {/* نېرۋا ھۈجەيرىسى تىپلىرى */}
      <div>
        <h5 className="font-bold text-gray-800 mb-4">نېرۋا ھۈجەيرىسى تىپلىرى:</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {neuronTypes.map((neuron) => (
            <button
              key={neuron.id}
              onClick={() => setSelectedNeuron(neuron.id)}
              className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                selectedNeuron === neuron.id 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 border-2' 
                  : 'bg-white border-gray-200 hover:border-green-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-bold text-gray-800 text-lg mb-1">{neuron.name}</div>
                  <div className="text-sm text-gray-600 mb-3">{neuron.description}</div>
                </div>
                {selectedNeuron === neuron.id && (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-800 text-gray-100 p-3 rounded">
                  <code className="text-sm font-mono">{neuron.formula}</code>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">بايقىلىش: {neuron.discovered}</span>
                  <span className="text-green-600 font-medium">{neuron.use}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* مىسال كود */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">نېرۋا ھۈجەيرىسى مىسالى:</h5>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import numpy as np

class Neuron:
    def __init__(self, input_size):
        # ئېغىرلىق ۋە bias قۇرۇش
        self.weights = np.random.randn(input_size)
        self.bias = np.random.randn()
    
    def forward(self, inputs):
        # ھېسابلاش: w·x + b
        weighted_sum = np.dot(inputs, self.weights) + self.bias
        
        # ئاكتىۋاتسىيە فۇنكسىيەسى
        activation = self.activation_function(weighted_sum)
        return activation
    
    def activation_function(self, x):
        # ${selectedNeuron === 'perceptron' ? 'پېرسېپترون' : 
          selectedNeuron === 'sigmoid' ? 'سىگمويد' : 'ReLU'} ئاكتىۋاتسىيەسى
        ${selectedNeuron === 'perceptron' ? 'return 1 if x > 0 else 0' :
          selectedNeuron === 'sigmoid' ? 'return 1 / (1 + np.exp(-x))' :
          'return np.maximum(0, x)'}

# ئىشلىتىش
neuron = Neuron(3)
inputs = np.array([0.5, -0.2, 0.8])
output = neuron.forward(inputs)

print(f"كىرگۈزۈش: {inputs}")
print(f"چىقىرىش: {output:.4f}")
print(f"ئېغىرلىقلار: {neuron.weights}")
print(f"Bias: {neuron.bias:.4f}")`}
            </pre>
          </div>
        </div>

        <div className="space-y-6">
          {/* كۆرسەتكۈچلەر */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <h6 className="font-semibold text-gray-800 mb-4">نېرۋا ھۈجەيرىسى پارامېترلىرى:</h6>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-700">ئېغىرلىقلار (Weights)</span>
                  <span className="text-sm font-semibold text-green-600">[-0.3, 0.7, 0.1]</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-700">Bias</span>
                  <span className="text-sm font-semibold text-green-600">0.2</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* تەكشۈرۈش */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h6 className="font-semibold text-gray-800 mb-4">تەكشۈرۈڭ:</h6>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-700 mb-2">نېرۋا ھۈجەيرىسىنىڭ قانداق قىسمى كىرگۈزۈشنى قوبۇل قىلىدۇ؟</div>
                <div className="grid grid-cols-2 gap-2">
                  {['ئېغىرلىقلار', 'Bias', 'ئاكتىۋاتسىيە', 'ھېسابلاش'].map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizChange('q1', option)}
                      className={`p-2 text-sm rounded-lg border ${
                        quizAnswers.q1 === option 
                          ? 'bg-green-100 text-green-800 border-green-300' 
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تاماملا كونۇپكىسى */}
      <div className="flex justify-end pt-4 border-t border-gray-200">
        <button
          onClick={onComplete}
          className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">بۇ بۆلۈمنى تاماملا</span>
        </button>
      </div>
    </div>
  );
};

export default NNFundamentals;