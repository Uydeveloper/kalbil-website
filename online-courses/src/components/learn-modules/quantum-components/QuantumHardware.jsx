// src/components/learn-modules/quantum-components/QuantumHardware.jsx
import React from 'react';
import { Cpu, Thermometer, Zap, Shield, Clock, Database } from 'lucide-react';

const QuantumHardware = ({ onComplete }) => {
  const hardwareTypes = [
    {
      type: 'سۇپېر ئۆتكۈزگۈچ',
      description: 'ئەڭ كەڭ تارقالغان كىۋانىت كومپيۇتىر',
      temperature: '0.015K (-273.135°C)',
      qubits: '50-100',
      companies: ['IBM', 'Google', 'Rigetti'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'ئىيون تۇتقۇچ',
      description: 'ئىيونلارنى ئېلېكتر مەيدانىدا تۇتۇش',
      temperature: 'ئوتتۇرا',
      qubits: '10-50',
      companies: ['IonQ', 'Honeywell'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      type: 'فوتون',
      description: 'يورۇقلۇق بىلەن كىۋانىت ھېسابلاش',
      temperature: 'ئاتموسفېرا',
      qubits: '10-30',
      companies: ['Xanadu', 'PsiQuantum'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      type: 'توپاز دىامانىت',
      description: 'دىامانىت ئېلېكتىرونلار بىلەن',
      temperature: 'ئوتتۇرا',
      qubits: '5-10',
      companies: ['Quantum Brilliance'],
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-green-500" />
          كىۋانىت كومپيۇتىر ئۈسكۈنىلىرى
        </h5>
        <p className="text-gray-700">
          كىۋانىت كومپيۇتىرلار ئىنتايىن سۇيۇق ھالەتتە ياكى ئالاھىدە مۇھىتتا ئىشلەيدۇ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hardwareTypes.map((hw, index) => (
          <div key={index} className={`bg-gradient-to-br ${hw.color} text-white rounded-xl p-6`}>
            <div className="flex flex-col items-center text-center">
              <Cpu className="w-8 h-8 mb-3" />
              <div className="font-bold text-lg mb-2">{hw.type}</div>
              <div className="text-sm opacity-90 mb-4">{hw.description}</div>
              
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4" />
                    <span className="text-sm">تېمپېراتۇرا</span>
                  </div>
                  <span className="text-sm font-semibold">{hw.temperature}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">كىۋانىت بىت</span>
                  </div>
                  <span className="text-sm font-semibold">{hw.qubits}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-white/20 w-full">
                <div className="text-xs opacity-80 mb-2">شىركەتلەر:</div>
                <div className="flex flex-wrap justify-center gap-1">
                  {hw.companies.map((company, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/20 text-xs rounded">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">كىۋانىت كومپيۇتىر تەلەپلىرى:</h5>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Thermometer className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-800">سۇيۇقلاشتۇرۇش</span>
              </div>
              <div className="text-sm text-gray-600">
                كىۋانىت بىتلەرنىڭ قىزىلىشىنى كونترول قىلىش ئۈچۈن ئىنتايىن سۇيۇق ھالەتتە ساقلاش
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-purple-500" />
                <span className="font-medium text-gray-800">ئايرىش</span>
              </div>
              <div className="text-sm text-gray-600">
                تاشقى مەيدان ۋە شۇڭگۇردىن قوغداش ئۈچۈن ۋاكۇم ياكى ئايرىش سىستېمىسى
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-800">ۋاقىت</span>
              </div>
              <div className="text-sm text-gray-600">
                كىۋانىت ھالەتنىڭ ئۇزۇن ۋاقىت ساقلانشى (Coherence Time)
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">كىۋانىت كومپيۇتىر ئىلگىرىلىشى:</h5>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">كىۋانىت بىت سانى</span>
                <span className="text-sm font-semibold text-blue-600">127</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">كواھېرېنس ۋاقتى</span>
                <span className="text-sm font-semibold text-green-600">400µs</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">ئېرۇر نىسبىتى</span>
                <span className="text-sm font-semibold text-red-600">0.1%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{hardwareTypes.length}</span> كىۋانىت ئۈسكۈنە تىپى تونۇشتۇرۇلدى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
        >
          <Cpu className="w-5 h-5" />
          كىۋانىت ئۈسكۈنىلىرىنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default QuantumHardware;