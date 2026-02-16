// src/components/learn-modules/MachineLearningModule.jsx
import React, { useState } from 'react';
import { 
  Brain, TrendingUp, BarChart3, Target, 
  ChevronRight, Database, Cpu, Zap, Play,
  CheckCircle, LineChart, PieChart, Download,
  FileCode, GitBranch, Shield, Globe
} from 'lucide-react';

// ماشىنا ئۆگىنىش كومپونېنتلىرى
import MLSupervised from './ml-components/MLSupervised';
import MLUnsupervised from './ml-components/MLUnsupervised';
import MLDeepLearning from './ml-components/MLDeepLearning';
import MLReinforcement from './ml-components/MLReinforcement';
import MLApplications from './ml-components/MLApplications';

const MachineLearningModule = () => {
  const [activeTab, setActiveTab] = useState('supervised');
  const [completedModules, setCompletedModules] = useState([]);

  const modules = [
    { 
      id: 'supervised', 
      title: 'ماشىنا ئۆگىنىش 1 - نازارەتلىك ئۆگىنىش', 
      icon: Target, 
      component: MLSupervised, 
      duration: '15 دەقىقە',
      description: 'باھالانغان سانلىق مەلۇماتلار بىلەن مودېل قۇرۇش'
    },
    { 
      id: 'unsupervised', 
      title: 'ماشىنا ئۆگىنىش 2 - نازارەتسىز ئۆگىنىش', 
      icon: PieChart, 
      component: MLUnsupervised, 
      duration: '15 دەقىقە',
      description: 'باھالمىغان سانلىق مەلۇماتلارنى تەھلىل قىلىش'
    },
    { 
      id: 'deep', 
      title: 'ماشىنا ئۆگىنىش 3 - چوڭقۇر ئۆگىنىش', 
      icon: Brain, 
      component: MLDeepLearning, 
      duration: '20 دەقىقە',
      description: 'نېرۋا تورلىرى بىلەن مۇرەككەپ مەسىلىلەرنى ھەل قىلىش'
    },
    { 
      id: 'reinforcement', 
      title: 'ماشىنا ئۆگىنىش 4 - كۈچلەندۈرۈش ئۆگىنىشى', 
      icon: Zap, 
      component: MLReinforcement, 
      duration: '20 دەقىقە',
      description: 'مۇكاپات بىلەن ئۆگىنىش سىستېمىسى'
    },
    { 
      id: 'applications', 
      title: 'ماشىنا ئۆگىنىش 5 - ئەمەلىي ئىشلىتىش', 
      icon: Globe, 
      component: MLApplications, 
      duration: '25 دەقىقە',
      description: 'ھەقىقىي دۇنيادىكى ماشىنا ئۆگىنىش ئىشلىتىشى'
    },
  ];

  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const ActiveComponent = modules.find(m => m.id === activeTab)?.component || MLSupervised;

  return (
    <div className="space-y-6">
      {/* باش بەلگە */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">ماشىنا ئۆگىنىش - سۈنئىي ئەقىلنىڭ يادروسى</h3>
            <p className="text-gray-600">سانلىق مەلۇماتلار بىلەن ئۆگىنىپ، ئالدىن بىلىش ۋە قارار چىقىرىش</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
          <Cpu className="w-5 h-5 text-red-600" />
          <span className="text-red-700 font-semibold">{completedModules.length}/5 تاماملاندى</span>
        </div>
      </div>

      {/* ئىلگىرىلىش بارى */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-700">ئىلگىرىلىش:</span>
          <span className="text-sm font-semibold text-red-600">%{(completedModules.length / 5 * 100).toFixed(0)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-red-500 to-pink-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(completedModules.length / 5 * 100)}%` }}
          ></div>
        </div>
      </div>

      {/* مودۇل مۇندەرىجىسى */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* سول تەرەپ - مۇندەرىجە */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-4">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-red-500" />
            ماشىنا ئۆگىنىش بۆلۈملىرى
          </h4>
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  activeTab === module.id 
                    ? 'bg-red-50 border border-red-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    activeTab === module.id 
                      ? 'bg-red-100 text-red-600' 
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
                    activeTab === module.id ? 'text-red-500' : 'text-gray-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* تېز قۇرۇلمىلار */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h5 className="font-semibold text-gray-700 mb-3">تېز قۇرۇلمىلار:</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Scikit-learn</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">TensorFlow</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">PyTorch</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Keras</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">XGBoost</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">LightGBM</span>
            </div>
          </div>
        </div>

        {/* ئوڭ تەرەپ - مەزمۇن */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* مودۇل باش بېتى */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 border-b border-red-100">
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
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    <Play className="w-4 h-4" />
                    مودېل ئىجرا قىلىش
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    سانلىق مەلۇمات چۈشۈرۈش
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
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
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

          {/* ماشىنا ئۆگىنىش ئەھۋاللىرى */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-blue-500" />
                <h5 className="font-semibold text-gray-800">سانلىق مەلۇمات تەييارلاش</h5>
              </div>
              <p className="text-sm text-gray-600">سانلىق مەلۇماتنى پاكلىشىش ۋە تەييارلاش</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-red-500" />
                <h5 className="font-semibold text-gray-800">مودېل قۇرۇش</h5>
              </div>
              <p className="text-sm text-gray-600">تۈرلۈك ئالگورىزىملار بىلەن مودېل قۇرۇش</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <LineChart className="w-5 h-5 text-green-500" />
                <h5 className="font-semibold text-gray-800">بەھالىش</h5>
              </div>
              <p className="text-sm text-gray-600">مودېلنىڭ ئىنچىكەلىكىنى تەكشۈرۈش</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningModule;