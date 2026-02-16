// src/components/learn-modules/QuantumMLModule.jsx
import React, { useState } from 'react';
import { 
  Cpu, Zap, Atom, Rocket, Binary, Target,
  ChevronRight, Brain, Globe, Lock, Flask,
  CheckCircle, Play, Download, LineChart,
  CircuitBoard, QuantumCircuit, Sparkles, Shield
} from 'lucide-react';

// كىۋانىت ماشىنا ئۆگىنىش كومپونېنتلىرى
import QuantumBasics from './quantum-components/QuantumBasics';
import QuantumAlgorithms from './quantum-components/QuantumAlgorithms';
import QuantumML from './quantum-components/QuantumML';
import QuantumHardware from './quantum-components/QuantumHardware';
import QuantumFuture from './quantum-components/QuantumFuture';

const QuantumMLModule = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [completedModules, setCompletedModules] = useState([]);

  const modules = [
    { 
      id: 'basics', 
      title: 'كىۋانىت 1 - ئاساسىي ئۇچۇرلار', 
      icon: Atom, 
      component: QuantumBasics, 
      duration: '15 دەقىقە',
      description: 'كىۋانىت كومپيۇتىرنىڭ ئاساسىي پرىنسىپلىرى'
    },
    { 
      id: 'algorithms', 
      title: 'كىۋانىت 2 - ئالگورىزىملىرى', 
      icon: CircuitBoard, 
      component: QuantumAlgorithms, 
      duration: '20 دەقىقە',
      description: 'كىۋانىت ئالگورىزىملىرى ۋە ئىشلىتىشى'
    },
    { 
      id: 'ml', 
      title: 'كىۋانىت 3 - ماشىنا ئۆگىنىش', 
      icon: Brain, 
      component: QuantumML, 
      duration: '25 دەقىقە',
      description: 'كىۋانىت ماشىنا ئۆگىنىش مودېللىرى'
    },
    { 
      id: 'hardware', 
      title: 'كىۋانىت 4 - ئۈسكۈنىلەر', 
      icon: Cpu, 
      component: QuantumHardware, 
      duration: '20 دەقىقە',
      description: 'كىۋانىت كومپيۇتىر ئۈسكۈنىلىرى ۋە تېخنىكىلىرى'
    },
    { 
      id: 'future', 
      title: 'كىۋانىت 5 - كەلگۈسى', 
      icon: Rocket, 
      component: QuantumFuture, 
      duration: '15 دەقىقە',
      description: 'كىۋانىت تېخنىكىسىنىڭ كەلگۈسى ۋە ئىشلىتىشى'
    },
  ];

  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const ActiveComponent = modules.find(m => m.id === activeTab)?.component || QuantumBasics;

  return (
    <div className="space-y-6">
      {/* باش بەلگە */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">كىۋانىت ماشىنا ئۆگىنىش</h3>
            <p className="text-gray-600">كەلگۈسى تېخنىكىسى - ئېكسبونېنت سۈرئەتتە ھېسابلاش</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <span className="text-indigo-700 font-semibold">{completedModules.length}/5 تاماملاندى</span>
        </div>
      </div>

      {/* ئىلگىرىلىش بارى */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-700">ئىلگىرىلىش:</span>
          <span className="text-sm font-semibold text-indigo-600">%{(completedModules.length / 5 * 100).toFixed(0)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(completedModules.length / 5 * 100)}%` }}
          ></div>
        </div>
      </div>

      {/* مودۇل مۇندەرىجىسى */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* سول تەرەپ - مۇندەرىجە */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-4">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CircuitBoard className="w-5 h-5 text-indigo-500" />
            كىۋانىت بۆلۈملىرى
          </h4>
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  activeTab === module.id 
                    ? 'bg-indigo-50 border border-indigo-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    activeTab === module.id 
                      ? 'bg-indigo-100 text-indigo-600' 
                      : completedModules.includes(module.id)
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <module.icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-800">{module.title}</div>
                    <div className="text-xs text-gray-500">{module.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {completedModules.includes(module.id) && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                  <ChevronRight className={`w-4 h-4 ${
                    activeTab === module.id ? 'text-indigo-500' : 'text-gray-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* كىۋانىت ئالاھىدىلىكلىرى */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h5 className="font-semibold text-gray-700 mb-3">كىۋانىت ئالاھىدىلىكلىرى:</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs rounded-full">سۇپېرپوزىتسىيە</span>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-xs rounded-full">ئاراملىشىش</span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs rounded-full">ئېكسبونېنت</span>
              <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs rounded-full">كۇرېيەت</span>
            </div>
          </div>
        </div>

        {/* ئوڭ تەرەپ - مەزمۇن */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* مودۇل باش بېتى */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-indigo-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {modules.find(m => m.id === activeTab)?.title}
                  </h4>
                  <p className="text-gray-600">
                    {modules.find(m => m.id === activeTab)?.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    <Play className="w-4 h-4" />
                    كىۋانىت سىمۇلاتسىيە
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    كۇتۇپخانا چۈشۈرۈش
                  </button>
                </div>
              </div>
            </div>

            {/* مودۇل مەزمۇنى */}
            <div className="p-6">
              <ActiveComponent onComplete={() => handleModuleComplete(activeTab)} />
            </div>

            {/* ئىلگىرى-كەينى كونۇپكىلىرى */}
            <div className="px-6 pb-6 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    const currentIndex = modules.findIndex(m => m.id === activeTab);
                    if (currentIndex > 0) {
                      setActiveTab(modules[currentIndex - 1].id);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    modules.findIndex(m => m.id === activeTab) > 0
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={modules.findIndex(m => m.id === activeTab) === 0}
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  ئالدىنقىسى
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {modules.findIndex(m => m.id === activeTab) + 1} / {modules.length}
                  </span>
                  {!completedModules.includes(activeTab) && (
                    <button
                      onClick={() => handleModuleComplete(activeTab)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                    >
                      <CheckCircle className="w-4 h-4" />
                      تاماملا
                    </button>
                  )}
                </div>
                
                <button
                  onClick={() => {
                    const currentIndex = modules.findIndex(m => m.id === activeTab);
                    if (currentIndex < modules.length - 1) {
                      setActiveTab(modules[currentIndex + 1].id);
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    modules.findIndex(m => m.id === activeTab) < modules.length - 1
                      ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={modules.findIndex(m => m.id === activeTab) === modules.length - 1}
                >
                  كېيىنكىسى
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* كىۋانىت ئەھۋاللىرى */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-yellow-500" />
                <h5 className="font-semibold text-gray-800">ئېكسبونېنت سۈرئەت</h5>
              </div>
              <p className="text-sm text-gray-600">كىۋانىت كومپيۇتىر مۇرەككەپ مەسىلىلەرنى ئېكسبونېنت سۈرئەتتە ھەل قىلىدۇ</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Atom className="w-5 h-5 text-green-500" />
                <h5 className="font-semibold text-gray-800">سۇپېرپوزىتسىيە</h5>
              </div>
              <p className="text-sm text-gray-600">بىر ۋاقىتتا بىرنېچچە ھالەتتە بولۇش ئىقتىدارى</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-red-500" />
                <h5 className="font-semibold text-gray-800">خەۋپسىزلىك</h5>
              </div>
              <p className="text-sm text-gray-600">كىۋانىت خەت-بەت مەخپىيەتلىك ۋە خەۋپسىزلىك سىستېمىسى</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumMLModule;