// src/components/LearnTab.jsx
import React from 'react';
import { 
  BookOpen, Calculator, FlaskConical, Atom, Feather, Globe, 
  Building, Scale, TreePalm, Map, Users, Brain, ArrowLeft,
  Clock, Book, Lightbulb, Star, Award,
  GitBranch, Database, Cpu, PieChart,
  Network, Cloud, Binary, Workflow,
  // Family ئايكونىنى ئۆچۈرۈڭ
  Layers, 
  Server,
  Users2 // يېڭى Users2 ئايكونى
} from 'lucide-react';

// React Icons تىن ئىشلەتكەن ئايكونلار
import { 
  FaMonument, 
  FaPython,
  FaChartBar,
  FaRobot,
  FaProjectDiagram
} from 'react-icons/fa';

// === Modules ===
import MathModule from './learn-modules/MathModule';
import ChemistryModule from './learn-modules/ChemistryModule';
import PhysicsModule from './learn-modules/PhysicsModule';
import LiteratureModule from './learn-modules/LiteratureModule';
import UyghurLanguageModule from './learn-modules/UyghurLanguageModule';
import AstronomyModule from './learn-modules/AstronomyModule';
import PoliticsModule from './learn-modules/PoliticsModule';
import HistoryModule from './learn-modules/HistoryModule';
import GeographyModule from './learn-modules/GeographyModule';
import BiologyModule from './learn-modules/BiologyModule';
import NationModule from './learn-modules/NationModule';
import PsychologyModule from './learn-modules/PsychologyModule';
import FromAnalogToDigital from './learn-modules/FromAnalogToDigital';
import FamelyTree from './learn-modules/FamelyTree';
import PythonModule from './learn-modules/PythonModule';
import StatisticsModule from './learn-modules/StatisticsModule';
import MachineLearningModule from './learn-modules/MachineLearningModule';
import NeuralNetworkModule from './learn-modules/NeuralNetworkModule';
import QuantumMLModule from './learn-modules/QuantumMLModule';
import BigDataModule from './learn-modules/BigDataModule';
import GitGithubModule from './learn-modules/GitGithubModule';
import TestModule from './learn-modules/tests/TestModule';
import Gates from './learn-modules/GatesModule';
import PointCloudModule from './learn-modules/PointCloudModule';
import EducationHub from './learn-modules/topics/EducationHub';
import DroneEduModule from './learn-modules/droneEduModule';
import RobutEduModule from './learn-modules/robutEduModule'; 
import ExpermentEduModule from './learn-modules/expermentEduModule';
import BrainModule from './learn-modules/BrainModule';



const MODULES = [
  // ئەسلى تېمىلار
  { id: 'math', title: 'ماتماتىكا', description: 'سەل سان، فورمۇلا ۋە مەسىلىلەر', icon: Calculator, difficulty: 'ئوتتۇرا', duration: '30 دەقىقە', Component: MathModule, color: 'from-blue-500 to-cyan-500' },
  { id: 'chemistry', title: 'خىمىيە', description: 'ئېلېمېنتلار، رېئاكىسىيە ۋە لابوراتورىيە', icon: FlaskConical, difficulty: 'قىيىن', duration: '40 دەقىقە', Component: ChemistryModule, color: 'from-red-500 to-orange-500' },
  { id: 'physics', title: 'فىزىكا', description: 'كۈچ، ھەرىكەت ۋە ئېنېرگىيە', icon: Atom, difficulty: 'قىيىن', duration: '35 دەقىقە', Component: PhysicsModule, color: 'from-purple-500 to-fuchsia-500' },
  { id: 'literature', title: 'ئەدەبىيات', description: 'ئۇيغۇر شېئىرىيىتى ۋە ناسىرى', icon: Feather, difficulty: 'ئاسان', duration: '25 دەقىقە', Component: LiteratureModule, color: 'from-amber-500 to-yellow-500' },
  { id: 'uyghurlanguage', title: 'ئۇيغۇر تىلى', description: 'گرامماتىكا، سۆزلىق ۋە سۆز بىلەن تونۇشۇش', icon: BookOpen, difficulty: 'ئوتتۇرا', duration: '20 دەقىقە', Component: UyghurLanguageModule, color: 'from-emerald-500 to-teal-500' },
  { id: 'astronomy', title: 'كىۋانىت', description: 'يۇلتۇزلار، گالاكىتىكا ۋە كۆڭۈل ئاچار تەبىئەت', icon: Globe, difficulty: 'ئاسان', duration: '20 دەقىقە', Component: AstronomyModule, color: 'from-indigo-500 to-blue-500' },
  { id: 'politics', title: 'سىياسەت', description: 'دۆلەت، ھۆكۈمەت ۋە ئىجتىمائىي مۇناسىۋەتلەر', icon: Scale, difficulty: 'ئوتتۇرا', duration: '30 دەقىقە', Component: PoliticsModule, color: 'from-gray-500 to-slate-500' },
  { id: 'history', title: 'تارىخ', description: 'ئۇيغۇر تارىخى ۋە دۇنيا تارىخى', icon: Building, difficulty: 'ئاسان', duration: '25 دەقىقە', Component: HistoryModule, color: 'from-rose-500 to-pink-500' },
  { id: 'geography', title: 'جۇغىراپىيە', description: 'دۇنيا خەرىتىسى، تەبىئىي جايلىرىش ۋە مەدەنىيەت', icon: Map, difficulty: 'ئاسان', duration: '20 دەقىقە', Component: GeographyModule, color: 'from-green-500 to-lime-500' },
  { id: 'biology', title: 'بىئولوگىيە', description: 'تىرىكلىق، ھۈجەيرە ۋە تەبىئىي مۇھىت', icon: TreePalm, difficulty: 'ئوتتۇرا', duration: '30 دەقىقە', Component: BiologyModule, color: 'from-lime-500 to-green-500' },
  { id: 'nation', title: 'مەدەنىيەت ۋە مىللەت', description: 'مىللەت، مەدەنىيەت، دىن، تارىخ، كىملىك', icon: Users, difficulty: 'ئوتتۇرا', duration: '35 دەقىقە', Component: NationModule, color: 'from-violet-500 to-purple-500' },
  { id: 'psychology', title: 'پىسخولوگىيە', description: 'ئوي، ھېس-ھەرىكەت، روھىيات ۋە ئىجتىمائىي ئالاقىلەر', icon: Brain, difficulty: 'ئوتتۇرا', duration: '30 دەقىقە', Component: PsychologyModule, color: 'from-pink-500 to-rose-500' },
  
  // يېڭى تېمىلار
  { id: 'fromanalogtodigital', title: 'دىجىتاللاشتۇرۇش', description: 'ئۇيغۇر مەدەنىيىتىنى زامانىۋى تېخنىكىلار ئارقىلىق ساقلاش', icon: FaMonument, difficulty: 'ئوتتۇرا', duration: '45 دەقىقە', Component: FromAnalogToDigital, color: 'from-amber-700 to-orange-600' },
  { id: 'famelytree', title: 'جەمەت شەجەرىسى', description: 'ئۇيغۇر قانداشلىقنى زامانىۋى تېخنىكىلار ئارقىلىق ساقلاش', icon: Users2, difficulty: 'ئوتتۇرا', duration: '45 دەقىقە', Component: FamelyTree, color: 'from-amber-600 to-yellow-600' },
  { id: 'python', title: 'پايسون', description: 'پروگراممىلاش تىلى، ئامالىيەت ۋە ماتماتىكىلىق مەسىلىلەر', icon: FaPython, difficulty: 'ئوتتۇرا', duration: '40 دەقىقە', Component: PythonModule, color: 'from-blue-600 to-indigo-600' },
  { id: 'statistics', title: 'ستاتىستىكا', description: 'سانلىق مەلۇمات تەھلىلى، ئۆلچەم ۋە پەرەزلەر', icon: PieChart, difficulty: 'ئوتتۇرا', duration: '35 دەقىقە', Component: StatisticsModule, color: 'from-purple-600 to-violet-600' },
  { id: 'machinelearning', title: 'ماشىنا ئۆگىنىش', description: 'ئالگورىزىم، مودېللاش ۋە ئالدىن بىلىش سىستېمىسى', icon: FaRobot, difficulty: 'قىيىن', duration: '50 دەقىقە', Component: MachineLearningModule, color: 'from-red-600 to-pink-600' },
  { id: 'neuralnetwork', title: 'نېرۋا تورى', description: 'سۈنئىي ئەقىل، چوڭقۇر ئۆگىنىش ۋە تور قۇرۇلمىسى', icon: Network, difficulty: 'قىيىن', duration: '55 دەقىقە', Component: NeuralNetworkModule, color: 'from-green-600 to-emerald-600' },
  { id: 'quantumml', title: 'كىۋانىت ماشىنا ئۆگىنىش', description: 'كىۋانىت كومپيۇتىر، كىۋانىت ئالگورىزىم ۋە يۇقىرى سۈرئەتلىك ھېسابلاش', icon: Cpu, difficulty: 'قىيىن', duration: '60 دەقىقە', Component: QuantumMLModule, color: 'from-indigo-600 to-blue-600' },
  { id: 'bigdata', title: 'چوڭ سانلىق مەلۇمات', description: 'كەڭ سانلىق مەلۇمات، ھەجىم ۋە كۆپ خىل مەنبەلەر', icon: Cloud, difficulty: 'قىيىن', duration: '45 دەقىقە', Component: BigDataModule, color: 'from-gray-600 to-slate-600' },
  { id: 'gitgithub', title: 'گىت ۋە گىتخاب', description: 'نەشر قىلىش، ھەمكارلىشىش ۋە كود باشقۇرۇش سىستېمىسى', icon: GitBranch, difficulty: 'ئوتتۇرا', duration: '30 دەقىقە', Component: GitGithubModule, color: 'from-orange-600 to-red-600' },
  { id: 'test', title: 'ئىمتىھان', description: 'پروگراممىلاش تىلى، ئامالىيەت ۋە ماتماتىكىلىق مەسىلىلەر', icon: BookOpen, difficulty: 'ئوتتۇرا', duration: '40 دەقىقە', Component: TestModule, color: 'from-blue-600 to-indigo-600' },
  { id: 'gates', title: 'ئېشىكلەر ۋە لوپىلار', description: 'دىجىتال لوجىكا، ئېشىكلەر ۋە لوپىلار', icon: Layers, difficulty: 'ئاسان', duration: '30 دەقىقە', Component: Gates, color: 'from-teal-600 to-cyan-600' },
  { id: 'pointCloud', title: 'نوقتا بۇلۇت سانلىق مەلۇمات  ', description: 'نوقتا بۇلۇت، مەلۇمات ، فىجىتال', icon: Layers, difficulty: 'ئاسان', duration: '30 دەقىقە', Component: PointCloudModule, color: 'from-teal-600 to-cyan-600' },
  { id: 'education', title: 'مائارىپ ئۇچۇرىلىرى     ', description: ' ئۇيغۇر مائارىپى ۋە دۇنيا مائارىپلىرى', icon: Layers, difficulty: 'ئاسان', duration: '30 دەقىقە', Component: EducationHub, color: 'from-teal-600 to-cyan-600' },
  { id: 'droneEdu', title: 'دۇرون تەربىيىسى     ', description: 'دۇرانلارنى باشقۇرۇش ۋە ئۇچۇرۇش', icon: FaProjectDiagram, difficulty: 'ئاسان', duration: '30 دەقىقە', Component: DroneEduModule, color: 'from-teal-600 to-cyan-600' },
  { id: 'robutEdu', title: 'روبوت تەربىيىسى     ', description: 'رۇبوتلارنى قۇرۇش ۋە پروگرامما قىلىش', icon: FaRobot, difficulty: 'ئاسان', duration: '30 دەقىقە', Component: RobutEduModule, color: 'from-teal-600 to-cyan-600' },
  { id: 'expermentEdu', title: 'تەجىربە دەرسىلىك      ', description: 'ئامالىي تەجىربىلەر ئارقىلىق بىلىم ئېلىش', icon: FlaskConical, difficulty: 'ئاسان', duration: '30 دەقىقە', Component: ExpermentEduModule, color: 'from-teal-600 to-cyan-600' },
  { id: 'brainModule', title: 'مېڭە ۋە نېۋرولوگىيە      ', description: 'ئادەم مېڭىسىنىڭ قۇرۇلمىسى ۋە ئىقتىدارى', icon: Brain, difficulty: 'ئاسان', duration: '30 دەقىقە', Component: BrainModule, color: 'from-teal-600 to-cyan-600' },
];

// قىيىنچىلىق بادجى ئۇسلۇبى
const getDifficultyStyle = (level) => {
  switch (level) {
    case 'ئاسان': return 'bg-green-100 text-green-800 border-green-300';
    case 'ئوتتۇرا': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'قىيىن': return 'bg-red-100 text-red-800 border-red-300';
    default: return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

const LearnTab = ({ 
  activeSubTab, 
  setActiveSubTab, 
  loading, 
  outputText, 
  setOutputText, 
  handleLearn 
}) => {
  const currentModule = MODULES.find(m => m.id === activeSubTab);

  // بوش بولغاندا ئادەتتىكى ھالەت
  if (!activeSubTab && !loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* باش بەلگە */}
        <div className="bg-gradient-to-r from-teal-600 to-indigo-700 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8" />
            <h2 className="text-3xl font-bold">ئۆگىنىش ئۆيى</h2>
          </div>
          <p className="text-teal-100 opacity-90">تېمىڭىزنى تاللاپ، بىلىم جاھانىغا قەدەم قويۇڭ</p>
        </div>

        {/* ئاساسىي مەزمۇن */}
        <div className="p-6">
          {/* بىلىم سەپلىرى كاتىكى */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-uyghur text-2xl text-gray-800">بىلىم سەپلىرى</h3>
              <div className="flex gap-2 font-uyghur text-2xl">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">ئاسان</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">ئوتتۇرا</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">قىيىن</span>
              </div>
            </div>

            <div className="font-uyghur text-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {MODULES.map((module) => {
                const IconComponent = module.icon;
                const difficultyStyle = getDifficultyStyle(module.difficulty);
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveSubTab(module.id)}
                    className="font-uyghur text-xl group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 flex flex-col h-full"
                  >
                    <div className="font-uyghur text-xl flex items-start gap-4 mb-4">
                      <div className={`p-3 font-uyghur text-xl rounded-xl bg-gradient-to-br ${module.color} text-white flex-shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-uyghur text-3xl text-red-700 group-hover:text-teal-700  mb-1">
                          {module.title}
                        </h3>
                        <p className="font-uyghur text-sm text-green-700 line-clamp-2">
                          {module.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between items-center">
                      <span className={`px-2.5 py-1 rounded-full border font-uyghur text-sm font-medium ${difficultyStyle}`}>
                        {module.difficulty}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock className="w-3.5 h-3.5" />
                        {module.duration}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* بوش ھالەت */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-indigo-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-teal-500" />
              </div>
              <Star className="absolute -top-2 -right-2 w-6 h-6 text-amber-400" />
              <Award className="absolute -bottom-2 -left-2 w-5 h-5 text-purple-500" />
            </div>
            <h3 className="font-uyghur text-2xl font-semibold text-gray-800 mb-2">بىلىم سەپلىرىنى كۆرۈش</h3>
            <p className="text-blue-800 font-uyghur  max-w-md">
              يۇقىرىدىكى بىلىم سەپلىرىدىن بىرنى تاللاپ، ئۆگىنىش سەپىرىڭىزنى باشلاڭ!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // يۈكلەۋاتقان ھالەت
  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-teal-600 to-indigo-700 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8" />
            <h2 className="text-3xl font-bold">ئۆگىنىش ئۆيى</h2>
          </div>
          <p className="text-teal-100 opacity-90">تېمىڭىزنى تاللاپ، بىلىم جاھانىغا قەدەم قويۇڭ</p>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-teal-200 rounded-full animate-spin"></div>
              <Lightbulb className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-teal-500" />
            </div>
            <p className="mt-6 text-lg font-medium text-gray-700">كەسپىي مۇئەللىم بىلىم تەييارلاۋاتىدۇ...</p>
            <p className="text-gray-500 mt-2">بىر نەچچە سىكۇنت كۈتۈڭ</p>
          </div>
        </div>
      </div>
    );
  }

  // تېما تاللانغان ھالەت
  if (activeSubTab && currentModule) {
    return (
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-fade-in">
        {/* باش بەلگە */}
        <div className="bg-gradient-to-r from-teal-600 to-indigo-700 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8" />
            <h2 className="text-3xl font-bold">ئۆگىنىش ئۆيى</h2>
          </div>
          <p className="text-teal-100 opacity-90">تېمىڭىزنى تاللاپ، بىلىم جاھانىغا قەدەم قويۇڭ</p>
        </div>

        {/* ئاساسىي مەزمۇن */}
        <div className="p-6">
          {/* قايتىش كونۇپكىسى */}
          <button
            onClick={() => setActiveSubTab(null)}
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            باشقا تېما تاللاش
          </button>

          {/* تېما باش بەلگىسى */}
          <div className={`bg-gradient-to-r ${currentModule.color} text-white rounded-2xl p-6 mb-8`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <currentModule.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{currentModule.title}</h3>
                  <p className="text-white/90">{currentModule.description}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full">
                  <Book className="w-4 h-4" />
                  <span className="text-sm">{currentModule.duration}</span>
                </div>
                <div className={`px-3 py-1.5 rounded-full border ${getDifficultyStyle(currentModule.difficulty)}`}>
                  {currentModule.difficulty}
                </div>
              </div>
            </div>
          </div>

          {/* تېما مەزمۇنى */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <currentModule.Component />
          </div>
        </div>
      </div>
    );
  }

  // ھېچقانداق تېما تاللانمىغان ياكى ئەمەلىيەتتە بولمىغان ھالەت
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-teal-600 to-indigo-700 text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-8 h-8" />
          <h2 className="text-3xl font-bold">ئۆگىنىش ئۆيى</h2>
        </div>
        <p className="text-teal-100 opacity-90">تېمىڭىزنى تاللاپ، بىلىم جاھانىغا قەدەم قويۇڭ</p>
      </div>
      
      <div className="p-6">
        <div className="text-center py-16">
          <div className="mb-6">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">تېما تاللانمىدى</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            بىلىم سەپلىرىدىن بىر تېمانى تاللاپ، ئۆگىنىشنى باشلاڭ.
          </p>
          <button
            onClick={() => setActiveSubTab(null)}
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 font-semibold"
          >
            بىلىم سەپلىرىگە قايتىش
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnTab;