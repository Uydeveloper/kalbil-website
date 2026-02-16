// src/components/learn-modules/PythonModule.jsx
import React, { useState } from 'react';
import { 
  Code, Zap, Cpu, Database, ChevronRight, 
  BookOpen, Terminal, Package, Globe, BarChart,
  CheckCircle, Play, Download, FileCode
} from 'lucide-react';

// مودۇل كومپونېنتلىرى
import PythonBasics from './python-components/PythonBasics';
import PythonLibraries from './python-components/PythonLibraries';
import PythonDataScience from './python-components/PythonDataScience';
import PythonML from './python-components/PythonML';
import PythonWeb from './python-components/PythonWeb';
import test1 from './python-components/python01';
import test2 from './python-components/python02';
import test3 from './python-components/python03';
import test4 from './python-components/python04';

const PythonModule = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [completedModules, setCompletedModules] = useState([]);

  const modules = [
    { id: 'basics', title: 'پايسون 1 - ئاساسىي ئۇچۇرلار', icon: BookOpen, component: PythonBasics, duration: '10 دەقىقە' },
    { id: 'libraries', title: 'پايسون 2 - كۇتۇپخانىلار', icon: Package, component: PythonLibraries, duration: '15 دەقىقە' },
    { id: 'datascience', title: 'پايسون 3 - سانلىق مەلۇمات پەنى', icon: BarChart, component: PythonDataScience, duration: '20 دەقىقە' },
    { id: 'machinelearning', title: 'پايسون 4 - ماشىنا ئۆگىنىش', icon: Cpu, component: PythonML, duration: '25 دەقىقە' },
    { id: 'web', title: 'پايسون 5 - تور بېكەت قۇرۇش', icon: Globe, component: PythonWeb, duration: '20 دەقىقە' },
    { id: 'imthan1', title: 'پايسون 1 - ئىمتىھان', icon: Globe, component: test1, duration: '20 دەقىقە' },
    { id: 'imthan2', title: 'پايسون 2 - ئىمتىھان', icon: Globe, component: test2, duration: '20 دەقىقە' },
    { id: 'imthan3', title: 'پايسون 3 - ئىمتىھان', icon: Globe, component: test3, duration: '20 دەقىقە' },
    { id: 'imthan4', title: 'پايسون 4 - ئىمتىھان', icon: Globe, component: test4, duration: '20 دەقىقە' },
    
  ];

  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const ActiveComponent = modules.find(m => m.id === activeTab)?.component || PythonBasics;

  return (
    <div className="space-y-6">
      {/* باش بەلگە */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">پايسون - زامانىۋى پروگراممىلاش تىلى</h3>
            <p className="text-gray-600">يۇمشاق سىنتاكس، كۈچلۈك ئىقتىدار ۋە كەڭ كۆلەملىك ئىشلىتىش</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
          <Terminal className="w-5 h-5 text-blue-600" />
          <span className="text-blue-700 font-semibold">{completedModules.length}/5 تاماملاندى</span>
        </div>
      </div>

      {/* ئىلگىرىلىش بارى */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-700">ئىلگىرىلىش:</span>
          <span className="text-sm font-semibold text-blue-600">%{(completedModules.length / 5 * 100).toFixed(0)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(completedModules.length / 5 * 100)}%` }}
          ></div>
        </div>
      </div>

      {/* مودۇل مۇندەرىجىسى */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* سول تەرەپ - مۇندەرىجە */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-4">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            مۇندەرىجە
          </h4>
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                  activeTab === module.id 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    activeTab === module.id 
                      ? 'bg-blue-100 text-blue-600' 
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
                    activeTab === module.id ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* تەمىنلەنگەن كۇتۇپخانىلار */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h5 className="font-semibold text-gray-700 mb-3">مەشھۇر كۇتۇپخانىلار:</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Pandas</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">NumPy</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Matplotlib</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Scikit-learn</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">TensorFlow</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">PyTorch</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Django</span>
              <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">Flask</span>
            </div>
          </div>
        </div>

        {/* ئوڭ تەرەپ - مەزمۇن */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* مودۇل باش بېتى */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {modules.find(m => m.id === activeTab)?.title}
                  </h4>
                  <p className="text-gray-600">
                    {activeTab === 'basics' && 'پايسوننىڭ ئاساسىي قۇرۇلمىسى، سىنتاكسى ۋە ئىبارىلىرى'}
                    {activeTab === 'libraries' && 'پايسون كۇتۇپخانىلىرىنى قانداق ئىشلىتىش'}
                    {activeTab === 'datascience' && 'سانلىق مەلۇمات تەھلىلى ۋە كۆرسىتىش'}
                    {activeTab === 'machinelearning' && 'ماشىنا ئۆگىنىش مودېللىرى قۇرۇش'}
                    {activeTab === 'web' && 'تور بېكەت ۋە API قۇرۇش'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Play className="w-4 h-4" />
                    كود ئىجرا قىلىش
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    مەنبە كود
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
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
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

          {/* تېز ياردەم قۇتىسى */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <FileCode className="w-5 h-5 text-blue-500" />
                <h5 className="font-semibold text-gray-800">مىسال كودلار</h5>
              </div>
              <p className="text-sm text-gray-600">ئەمەلىي مىسال كودلار بىلەن ئۆگىنىڭ</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Terminal className="w-5 h-5 text-green-500" />
                <h5 className="font-semibold text-gray-800">تەجرىبە قىلىش</h5>
              </div>
              <p className="text-sm text-gray-600">كودنى توردا ئىجرا قىلىپ سىناڭ</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-purple-500" />
                <h5 className="font-semibold text-gray-800">سانلىق مەلۇمات</h5>
              </div>
              <p className="text-sm text-gray-600">ئەمەلىي سانلىق مەلۇماتلار بىلەن ئىشلەڭ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonModule;