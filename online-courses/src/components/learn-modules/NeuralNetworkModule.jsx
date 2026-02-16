// src/components/learn-modules/NeuralNetworkModule.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Network, Cpu, Layers, Brain, Zap, Activity, ChevronRight, CheckCircle, Play, Download, Target, LineChart, BarChart3, Code, Server, Database } from 'lucide-react';

// نېرۋا تورى ئەزالار
import NNFundamentals from './neural-network-components/NNFundamentals';
import NNArchitecture from './neural-network-components/NNArchitecture';
import NNTraining from './neural-network-components/NNTraining';
import NNTypes from './neural-network-components/NNTypes';
import NNApplications from './neural-network-components/NNApplications';

const NeuralNetworkModule = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');
  const [completedModules, setCompletedModules] = useState([]);
  const networkContainerRef = useRef(null);

  const modules = [
    { 
      id: 'fundamentals', 
      title: 'نېرۋا تورى 1 - ئاساسىي چۈشەنچە', 
      icon: Brain, 
      component: NNFundamentals, 
      duration: '15 دەقىقە',
      description: 'نېرۋا ھۈجەيرىسى، قاتلام ۋە ئۇلانمىلار'
    },
    { 
      id: 'architecture', 
      title: 'نېرۋا تورى 2 - قۇرۇلما', 
      icon: Layers, 
      component: NNArchitecture, 
      duration: '20 دەقىقە',
      description: 'تورنىڭ قاتلاملىق قۇرۇلمىسى ۋە يۆنىلىشى'
    },
    { 
      id: 'training', 
      title: 'نېرۋا تورى 3 - ئۆگىتىش', 
      icon: Activity, 
      component: NNTraining, 
      duration: '25 دەقىقە',
      description: 'كەينىگە تارقىلىش ۋە پارامېتر يېڭىلاش'
    },
    { 
      id: 'types', 
      title: 'نېرۋا تورى 4 - خىللىرى', 
      icon: Network, 
      component: NNTypes, 
      duration: '20 دەقىقە',
      description: 'CNN، RNN، GAN ۋە باشقا تور خىللىرى'
    },
    { 
      id: 'applications', 
      title: 'نېرۋا تورى 5 - ئىشلىتىش', 
      icon: Cpu, 
      component: NNApplications, 
      duration: '25 دەقىقە',
      description: 'ھەقىقىي دۇنيادىكى نېرۋا تورى ئىشلىتىشى'
    },
  ];

  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const ActiveComponent = modules.find(m => m.id === activeTab)?.component || NNFundamentals;

  // نېرۋا تورى ئېنىماتسىيەسى
  useEffect(() => {
    if (!networkContainerRef.current) return;
    
    const container = networkContainerRef.current;
    const circles = container.querySelectorAll('.neuron-circle');
    
    circles.forEach((circle, index) => {
      circle.style.animationDelay = `${index * 0.1}s`;
    });
  }, [activeTab]);

  return (
    <div className="space-y-6">
      {/* باش بەلگە */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
            <Network className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">نېرۋا تورى - ئىنسان مېڭىسىنىڭ سۈنئىي نۇسخىسى</h3>
            <p className="text-gray-600">كۆپ قاتلاملىق قۇرۇلما، مۇرەككەپ مەسىلىلەرنى ھەل قىلىش</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
          <Zap className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-semibold">{completedModules.length}/5 تاماملاندى</span>
        </div>
      </div>

      {/* ئىلگىرىلىش بارى */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-700">ئىلگىرىلىش:</span>
          <span className="text-sm font-semibold text-green-600">%{(completedModules.length / 5 * 100).toFixed(0)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(completedModules.length / 5 * 100)}%` }}
          ></div>
        </div>
      </div>

      {/* مودۇل مۇندەرىجىسى */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* سول تەرەپ - مۇندەرىجە */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-4">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-green-500" />
            نېرۋا تورى بۆلۈملىرى
          </h4>
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  activeTab === module.id 
                    ? 'bg-green-50 border border-green-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    activeTab === module.id 
                      ? 'bg-green-100 text-green-600' 
                      : completedModules.includes(module.id)
                      ? 'bg-green-50 text-green-500 border border-green-200'
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
                    activeTab === module.id ? 'text-green-500' : 'text-gray-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* كىچىك نېرۋا تورى كۆرسىتىش */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div ref={networkContainerRef} className="relative h-32 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100 p-4">
              <div className="absolute top-1/4 left-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs neuron-circle animate-pulse">
                I
              </div>
              <div className="absolute top-1/3 left-1/3">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-4 h-4 bg-green-400 rounded-full neuron-circle animate-pulse"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full neuron-circle animate-pulse"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full neuron-circle animate-pulse"></div>
                </div>
              </div>
              <div className="absolute top-1/4 right-1/3">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-4 h-4 bg-green-600 rounded-full neuron-circle animate-pulse"></div>
                  <div className="w-4 h-4 bg-green-600 rounded-full neuron-circle animate-pulse"></div>
                  <div className="w-4 h-4 bg-green-600 rounded-full neuron-circle animate-pulse"></div>
                  <div className="w-4 h-4 bg-green-600 rounded-full neuron-circle animate-pulse"></div>
                </div>
              </div>
              <div className="absolute top-1/4 right-4 w-6 h-6 bg-green-700 rounded-full flex items-center justify-center text-white text-xs neuron-circle animate-pulse">
                O
              </div>
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <div className="text-xs text-green-700 font-medium">نېرۋا تورى</div>
              </div>
            </div>
          </div>
        </div>

        {/* ئوڭ تەرەپ - مەزمۇن */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* مودۇل باش بېتى */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-100">
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
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <Play className="w-4 h-4" />
                    سىمۇلاتسىيە
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    مودېل چۈشۈرۈش
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
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
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
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
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

          {/* تېز كۆرسەتكۈچلەر */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-5 h-5 text-green-500" />
                <h5 className="font-semibold text-gray-800">نېرۋا ھۈجەيرىسى</h5>
              </div>
              <p className="text-sm text-gray-600">نېرۋا تورىنىڭ ئاساسلىق بىرلىكى، كىرگۈزۈش ۋە چىقىرىشنى بىر تەرەپ قىلىدۇ</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-5 h-5 text-blue-500" />
                <h5 className="font-semibold text-gray-800">ئاكتىۋاتسىيە فۇنكسىيەسى</h5>
              </div>
              <p className="text-sm text-gray-600">نېرۋا ھۈجەيرىسىنىڭ چىقىرىشىنى بەلگىلەيدىغان ماتېماتىكىلىق فۇنكسىيە</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <LineChart className="w-5 h-5 text-purple-500" />
                <h5 className="font-semibold text-gray-800">ئۆگىنىش سۈرئىتى</h5>
              </div>
              <p className="text-sm text-gray-600">مودېلنىڭ پارامېترلىرىنى قانداق تېز يېڭىلايدىغانلىقىنى بەلگىلەيدۇ</p>
            </div>
          </div>
        </div>
      </div>

      {/* قوشۇمچە ئۇچۇرلار */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h4 className="font-bold text-gray-800 mb-4">نېرۋا تورى ھەققىدە قىزىقارلىق پاكىتلار:</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">1943</div>
            <div className="text-sm text-gray-600">بىرىنچى مودېل</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">175+</div>
            <div className="text-sm text-gray-600">مىليارد پارامېتر</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">99%</div>
            <div className="text-sm text-gray-600">رەسىم تونۇش</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">GPT-4</div>
            <div className="text-sm text-gray-600">ئەڭ چوڭ مودېل</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS ئېنىماتسىيە
const styles = `
  @keyframes neuronPulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }
  
  .neuron-circle {
    animation: neuronPulse 2s infinite ease-in-out;
  }
`;

// CSS قوشۇش
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default NeuralNetworkModule;