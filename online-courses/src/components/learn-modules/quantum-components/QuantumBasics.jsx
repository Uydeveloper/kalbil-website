// src/components/learn-modules/quantum-components/QuantumBasics.jsx
import React, { useState } from 'react';
import { Atom, Zap, Target, Cpu, CheckCircle, AlertCircle } from 'lucide-react';

const QuantumBasics = ({ onComplete }) => {
  const [selectedConcept, setSelectedConcept] = useState('qubit');

  const concepts = [
    { 
      id: 'qubit', 
      name: 'كىۋانىت بىت (Qubit)', 
      description: 'ئەنئەنىۋى بىتنىڭ كىۋانىت نۇسخىسى',
      formula: '|ψ⟩ = α|0⟩ + β|1⟩',
      explanation: 'α ۋە β كۇمپلېكس سان، |α|² + |β|² = 1'
    },
    { 
      id: 'superposition', 
      name: 'سۇپېرپوزىتسىيە', 
      description: 'بىر ۋاقىتتا بىرنېچچە ھالەتتە بولۇش',
      formula: '|+⟩ = (|0⟩ + |1⟩)/√2',
      explanation: 'بىر ۋاقىتتا 0 ۋە 1 ھالەتلىرىدە بولۇش'
    },
    { 
      id: 'entanglement', 
      name: 'كىۋانىت ئاراملىشىش', 
      description: 'ئىككى كىۋانىت بىتنىڭ بىر-بىرىگە باغلىنىشى',
      formula: '|Φ⁺⟩ = (|00⟩ + |11⟩)/√2',
      explanation: 'بىر بىتنىڭ ھالەتى ئۆزگەرگەندە، يەنە بىر بىتنىڭ ھالەتىمۇ ئۆزگىرىدۇ'
    },
    { 
      id: 'interference', 
      name: 'كىۋانىت ئارىلاشما', 
      description: 'كىۋانىت يوللىرىنىڭ بىر-بىرىگە تەسىرى',
      formula: 'P = |Σ ψᵢ|²',
      explanation: 'كىۋانىت يوللىرى ئارىلاشقاندا، ئېھتىماللىق تولۇقلىنىش ياكى يوقىلىشى مۇمكىن'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Atom className="w-5 h-5 text-indigo-500" />
          كىۋانىت كومپيۇتىر ئاساسىي ئۇچۇرلىرى
        </h5>
        <div className="grid grid-cols-4 gap-4">
          {['كىۋانىت بىت', 'سۇپېرپوزىتسىيە', 'ئاراملىشىش', 'ئۆلچەش'].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                {index + 1}
              </div>
              <div className="text-xs text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h5 className="font-bold text-gray-800">كىۋانىت چۈشەنچىلىرى:</h5>
          <div className="space-y-3">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedConcept === concept.id 
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-300 border-2' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">{concept.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{concept.description}</div>
                    <div className="bg-gray-800 text-gray-100 p-2 rounded inline-block">
                      <code className="text-sm font-mono">{concept.formula}</code>
                    </div>
                  </div>
                  {selectedConcept === concept.id && (
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">
            {concepts.find(c => c.id === selectedConcept)?.name} چۈشەندۈرۈش
          </h5>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg mb-4">
            <div className="text-sm text-gray-700">
              {concepts.find(c => c.id === selectedConcept)?.explanation}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-gray-800">ئىقتىدار</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {selectedConcept === 'qubit' ? '2ⁿ' :
                 selectedConcept === 'superposition' ? '∞' :
                 selectedConcept === 'entanglement' ? '2ⁿ' :
                 '√n'}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-gray-800">قىيىنچىلىق</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {selectedConcept === 'qubit' ? 'يۇقىرى' :
                 selectedConcept === 'superposition' ? 'ئوتتۇرا' :
                 selectedConcept === 'entanglement' ? 'يۇقىرى' :
                 'تۆۋەن'}
              </div>
            </div>
          </div>

          {/* كىۋانىت بىت كۆرسىتىش */}
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div className="text-white text-sm">كىۋانىت بىت</div>
              </div>
              <div className="text-white">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse"></div>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-white text-sm">ئۆلچەش</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
        >
          <Atom className="w-5 h-5" />
          كىۋانىت ئاساسىي ئۇچۇرلارنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default QuantumBasics;