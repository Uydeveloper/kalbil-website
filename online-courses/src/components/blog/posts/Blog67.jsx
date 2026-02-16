// Blog67.jsx - كىۋانت ماشىنا ئۆگىنىش يول خەرىتىسى
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Code2, 
  BookOpen, 
  Rocket, 
  Target,
  Layers,
  GitBranch,
  TrendingUp,
  Users,
  Award,
  Globe,
  Zap,
  Atom,
  CircuitBoard,
  Database,
  LineChart
} from 'lucide-react';

const Blog67 = () => {
  const [activePhase, setActivePhase] = useState('foundation');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [progress, setProgress] = useState({
    foundation: 0,
    intermediate: 0,
    advanced: 0,
    specialization: 0
  });
  const [timeEstimate, setTimeEstimate] = useState('6-12 ئاي');
  const [difficulty, setDifficulty] = useState('مۇرەككەپ');

  const roadmapData = {
    phases: [
      {
        id: 'foundation',
        title: 'ئاساسىي بىلىم',
        icon: '📚',
        color: 'from-blue-500 to-cyan-500',
        duration: '2-3 ئاي',
        description: 'كىۋانت كومپيۇتېرنىڭ ئاساسىي تۇشۇنچىلىرى',
        topics: [
          {
            id: 'math-basics',
            title: 'ماتېماتىكا ئاساسى',
            icon: '∑',
            color: 'from-indigo-500 to-purple-500',
            prerequisites: [],
            resources: [
              { name: 'Linear Algebra', type: 'كتاب', link: '#' },
              { name: 'Complex Numbers', type: 'ۋىدىئو', link: '#' },
              { name: 'Probability Theory', type: 'تەرجىمە', link: '#' }
            ],
            skills: ['ماترىتسا', 'كومپلېكس سان', 'ئېھتىماللىق'],
            projects: ['Basic Math Exercises', 'Matrix Operations'],
            time: '2-3 ھەپتە'
          },
          {
            id: 'physics-basics',
            title: 'كىۋانت پىزىكىسى',
            icon: '⚛️',
            color: 'from-purple-500 to-pink-500',
            prerequisites: ['math-basics'],
            resources: [
              { name: 'Quantum Mechanics', type: 'كتاب', link: '#' },
              { name: 'Superposition', type: 'ۋىدىئو', link: '#' },
              { name: 'Entanglement', type: 'تەرجىمە', link: '#' }
            ],
            skills: ['سۇپېرپوزىتسىيە', 'ئەنتېڭلىمە', 'ھالەت'],
            projects: ['Qubit Simulation', 'Quantum States'],
            time: '3-4 ھەپتە'
          },
          {
            id: 'programming-basics',
            title: 'پروگراممىلاش',
            icon: '💻',
            color: 'from-green-500 to-emerald-500',
            prerequisites: [],
            resources: [
              { name: 'Python Basics', type: 'كۇرس', link: '#' },
              { name: 'NumPy/Pandas', type: 'ۋىدىئو', link: '#' },
              { name: 'Jupyter Notebook', type: 'قوللانما', link: '#' }
            ],
            skills: ['Python', 'Data Structures', 'Libraries'],
            projects: ['Basic Python Programs', 'Data Analysis'],
            time: '2-3 ھەپتە'
          }
        ]
      },
      {
        id: 'intermediate',
        title: 'كىۋانت ئاساسى',
        icon: '⚡',
        color: 'from-cyan-500 to-blue-500',
        duration: '2-3 ئاي',
        description: 'كىۋانت كومپيۇتېر ۋە ئالگورىتملار',
        topics: [
          {
            id: 'quantum-computing',
            title: 'كىۋانت كومپيۇتېر',
            icon: '🖥️',
            color: 'from-blue-600 to-indigo-600',
            prerequisites: ['physics-basics', 'math-basics'],
            resources: [
              { name: 'Qubits & Gates', type: 'كتاب', link: '#' },
              { name: 'Quantum Circuits', type: 'كۇرس', link: '#' },
              { name: 'IBM Quantum', type: 'پلاتفورما', link: '#' }
            ],
            skills: ['Qubit', 'Quantum Gates', 'Circuits'],
            projects: ['Simple Circuits', 'Gate Implementations'],
            time: '3-4 ھەپتە'
          },
          {
            id: 'quantum-algorithms',
            title: 'كىۋانت ئالگورىتملىرى',
            icon: '🧮',
            color: 'from-violet-500 to-purple-600',
            prerequisites: ['quantum-computing'],
            resources: [
              { name: 'Shor\'s Algorithm', type: 'تەرجىمە', link: '#' },
              { name: 'Grover\'s Search', type: 'ۋىدىئو', link: '#' },
              { name: 'Quantum Fourier', type: 'كتاب', link: '#' }
            ],
            skills: ['Algorithm Design', 'Complexity Analysis', 'Implementation'],
            projects: ['Algorithm Simulations', 'Basic Implementations'],
            time: '4-5 ھەپتە'
          },
          {
            id: 'qiskit-basics',
            title: 'Qiskit ئاساسى',
            icon: '🐍',
            color: 'from-emerald-500 to-green-600',
            prerequisites: ['programming-basics'],
            resources: [
              { name: 'Qiskit Tutorials', type: 'رەسمىي', link: '#' },
              { name: 'Quantum Programming', type: 'كۇرس', link: '#' },
              { name: 'IBM Q Experience', type: 'پلاتفورما', link: '#' }
            ],
            skills: ['Qiskit SDK', 'Circuit Building', 'Simulation'],
            projects: ['First Quantum Program', 'Circuit Design'],
            time: '2-3 ھەپتە'
          }
        ]
      },
      {
        id: 'advanced',
        title: 'كىۋانت ماشىنا ئۆگىنىش',
        icon: '🧠',
        color: 'from-purple-500 to-pink-600',
        duration: '3-4 ئاي',
        description: 'كىۋانت ۋە ئەقىلنى بىرلەشتۈرۈش',
        topics: [
          {
            id: 'qml-theory',
            title: 'QML نەزەرىيەسى',
            icon: '📖',
            color: 'from-pink-500 to-rose-600',
            prerequisites: ['quantum-algorithms', 'qiskit-basics'],
            resources: [
              { name: 'Quantum ML Papers', type: 'تەتقىقات', link: '#' },
              { name: 'Variational Circuits', type: 'تەرجىمە', link: '#' },
              { name: 'QML Algorithms', type: 'كتاب', link: '#' }
            ],
            skills: ['Variational QML', 'Parameterized Circuits', 'Hybrid Models'],
            projects: ['QML Literature Review', 'Theory Summary'],
            time: '3-4 ھەپتە'
          },
          {
            id: 'qml-implementation',
            title: 'QML ئەمەلىيەت',
            icon: '⚙️',
            color: 'from-orange-500 to-red-500',
            prerequisites: ['qml-theory'],
            resources: [
              { name: 'Pennylane Tutorials', type: 'قۇرال', link: '#' },
              { name: 'Quantum Classifiers', type: 'كۇرس', link: '#' },
              { name: 'QML Projects', type: 'گىتخاب', link: '#' }
            ],
            skills: ['QML Models', 'Training', 'Optimization'],
            projects: ['Quantum Classifier', 'QNN Implementation'],
            time: '4-6 ھەپتە'
          },
          {
            id: 'quantum-data',
            title: 'كىۋانت سانلىق مەلۇمات',
            icon: '📊',
            color: 'from-teal-500 to-cyan-600',
            prerequisites: ['qml-theory'],
            resources: [
              { name: 'Data Encoding', type: 'تەرجىمە', link: '#' },
              { name: 'Quantum Embedding', type: 'ۋىدىئو', link: '#' },
              { name: 'Feature Maps', type: 'كتاب', link: '#' }
            ],
            skills: ['Data Encoding', 'Feature Maps', 'Quantum Embedding'],
            projects: ['Data Encoding Schemes', 'Feature Implementation'],
            time: '3-4 ھەپتە'
          }
        ]
      },
      {
        id: 'specialization',
        title: 'ئىختىساسلاش',
        icon: '🎯',
        color: 'from-yellow-500 to-orange-500',
        duration: '3-6 ئاي',
        description: 'ئالاھىدە ساھەلەردە ئىختىساسلاش',
        topics: [
          {
            id: 'quantum-chemistry',
            title: 'كىۋانت خىمىيە',
            icon: '🧪',
            color: 'from-lime-500 to-green-600',
            prerequisites: ['qml-implementation'],
            resources: [
              { name: 'Quantum Chemistry', type: 'تەتقىقات', link: '#' },
              { name: 'Material Science', type: 'كۇرس', link: '#' },
              { name: 'Drug Discovery', type: 'تەرجىمە', link: '#' }
            ],
            skills: ['Molecular Simulation', 'Chemical Computing', 'Quantum Chemistry'],
            projects: ['Molecule Simulation', 'Chemical Reaction'],
            time: '4-6 ھەپتە'
          },
          {
            id: 'quantum-finance',
            title: 'كىۋانت مالىيە',
            icon: '💰',
            color: 'from-amber-500 to-yellow-600',
            prerequisites: ['quantum-algorithms'],
            resources: [
              { name: 'Financial Models', type: 'تەتقىقات', link: '#' },
              { name: 'Risk Analysis', type: 'كۇرس', link: '#' },
              { name: 'Portfolio Optimization', type: 'تەرجىمە', link: '#' }
            ],
            skills: ['Financial Modeling', 'Risk Assessment', 'Optimization'],
            projects: ['Portfolio Optimization', 'Risk Analysis'],
            time: '3-5 ھەپتە'
          },
          {
            id: 'quantum-optimization',
            title: 'كىۋانت ئوپتىمىزاتسىيە',
            icon: '📈',
            color: 'from-rose-500 to-pink-600',
            prerequisites: ['qml-implementation'],
            resources: [
              { name: 'Optimization Problems', type: 'تەتقىقات', link: '#' },
              { name: 'QAOA Algorithm', type: 'كۇرس', link: '#' },
              { name: 'Combinatorial Problems', type: 'تەرجىمە', link: '#' }
            ],
            skills: ['Optimization Algorithms', 'Problem Solving', 'QAOA'],
            projects: ['Optimization Problems', 'QAOA Implementation'],
            time: '4-6 ھەپتە'
          }
        ]
      }
    ],
    careerPaths: [
      {
        id: 'researcher',
        title: 'تەتقىقاتچى',
        icon: '🔬',
        description: 'ئۇنۋېرسىتېت ياكى تەتقىقات ئورنىدا',
        skills: ['Research', 'Paper Writing', 'Experimentation'],
        companies: ['IBM Research', 'Google Quantum', 'Academic Institutions']
      },
      {
        id: 'engineer',
        title: 'مۇھەندىس',
        icon: '⚙️',
        description: 'شىركەتتە كىۋانت سىستېمىلىرىنى لايىھەلەش',
        skills: ['Software Development', 'System Design', 'Testing'],
        companies: ['IBM', 'Microsoft', 'Amazon Quantum']
      },
      {
        id: 'developer',
        title: 'يۇمشاق دېتال ئىجادكارى',
        icon: '💻',
        description: 'كىۋانت پروگرامما ۋە قۇراللارنى ياساش',
        skills: ['Programming', 'API Development', 'Tool Creation'],
        companies: ['Quantum Startups', 'Tech Companies', 'Open Source']
      },
      {
        id: 'consultant',
        title: 'مەسلىھەتچى',
        icon: '👔',
        description: 'كارخانىلارغا كىۋانت تېخنىكىسىنى كىرگۈزۈش',
        skills: ['Consultation', 'Strategy', 'Implementation'],
        companies: ['Consulting Firms', 'Enterprise Clients', 'Government']
      }
    ],
    tools: [
      { name: 'Qiskit', type: 'SDK', link: '#', icon: '🐍' },
      { name: 'Cirq', type: 'Google', link: '#', icon: '⚡' },
      { name: 'Pennylane', type: 'Xanadu', link: '#', icon: '💎' },
      { name: 'IBM Quantum', type: 'پلاتفورما', link: '#', icon: '🖥️' },
      { name: 'Amazon Braket', type: 'AWS', link: '#', icon: '☁️' },
      { name: 'Microsoft Q#', type: 'مىكروسوفت', link: '#', icon: '🔷' }
    ],
    statistics: {
      growth: '40% يىللىق',
      salary: '$120,000 - $300,000',
      demand: 'يۇقىرى',
      companies: '50+ ئاكتىپ',
      timeline: '5-10 يىل كۈچلۈك تەرەققىيات'
    }
  };

  useEffect(() => {
    // Simulate progress calculation
    const calculateProgress = () => {
      const newProgress = { ...progress };
      roadmapData.phases.forEach((phase, index) => {
        newProgress[phase.id] = Math.min(100, (index + 1) * 25);
      });
      setProgress(newProgress);
    };
    
    calculateProgress();
  }, []);

  const StatCard = ({ icon, title, value, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br ${color} p-4 md:p-6 rounded-xl shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-200 text-sm md:text-base mb-1">{title}</p>
          <p className="text-white text-lg md:text-2xl font-bold">{value}</p>
        </div>
        <div className="text-2xl md:text-3xl">{icon}</div>
      </div>
    </motion.div>
  );

  const PhaseCard = ({ phase }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setActivePhase(phase.id)}
      className={`cursor-pointer p-4 md:p-6 rounded-xl transition-all duration-300 ${
        activePhase === phase.id 
          ? `bg-gradient-to-br ${phase.color} shadow-xl` 
          : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <span className="text-2xl md:text-3xl mr-3">{phase.icon}</span>
          <h3 className="text-lg md:text-xl font-bold text-white">{phase.title}</h3>
        </div>
        <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
          {phase.duration}
        </span>
      </div>
      
      <p className="text-gray-300 text-sm md:text-base mb-4">{phase.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-32 md:w-40 bg-gray-700 rounded-full h-2 mr-3">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress[phase.id]}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-300">{progress[phase.id]}%</span>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-gray-400">تېمىلار</p>
          <p className="text-white font-bold">{phase.topics.length}</p>
        </div>
      </div>
    </motion.div>
  );

  const TopicCard = ({ topic }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ y: -5 }}
      onClick={() => setSelectedTopic(topic)}
      className={`bg-gradient-to-br ${topic.color} p-4 md:p-6 rounded-xl shadow-lg cursor-pointer`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="text-2xl mb-2">{topic.icon}</div>
          <h4 className="text-lg md:text-xl font-bold text-white mb-1">{topic.title}</h4>
        </div>
        <span className="bg-black/30 px-3 py-1 rounded-lg text-sm">
          {topic.time}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-200 text-sm mb-2">تەلەپ قىلىنىدىغان ماھارەتلەر:</p>
        <div className="flex flex-wrap gap-2">
          {topic.skills.map((skill, idx) => (
            <span key={idx} className="bg-white/20 px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-300 text-sm">مەنبەلەر</p>
          <p className="text-white font-semibold">{topic.resources.length}+</p>
        </div>
        <div className="text-right">
          <p className="text-gray-300 text-sm">قويۇلۇشلار</p>
          <p className="text-white font-semibold">{topic.projects.length}</p>
        </div>
      </div>
    </motion.div>
  );

  const TopicModal = ({ topic, onClose }) => (
    <AnimatePresence>
      {topic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className={`bg-gradient-to-br ${topic.color} rounded-xl md:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-4xl mb-3">{topic.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{topic.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-white text-2xl hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">مەنبەلەر</h3>
                  <div className="space-y-3">
                    {topic.resources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.link}
                        className="block bg-black/30 p-3 rounded-lg hover:bg-black/40 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{resource.name}</span>
                          <span className="bg-white/20 px-2 py-1 rounded text-xs">
                            {resource.type}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">ۋاقىت تەخمىنىسى</h3>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-yellow-300">{topic.time}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">قويۇلۇشلار</h3>
                    <div className="space-y-2">
                      {topic.projects.map((project, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-yellow-300 mr-2">›</span>
                          <span className="text-white">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {topic.prerequisites.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-3">ئالدىنقى تەلەپلەر</h3>
                  <div className="flex flex-wrap gap-2">
                    {topic.prerequisites.map((preq, idx) => (
                      <span key={idx} className="bg-white/20 px-3 py-2 rounded-lg">
                        {preq}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const CareerPathCard = ({ path }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-3xl mb-4">{path.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{path.title}</h3>
      <p className="text-gray-300 mb-4">{path.description}</p>
      
      <div className="mb-4">
        <p className="text-gray-400 text-sm mb-2">ماھارەتلەر:</p>
        <div className="flex flex-wrap gap-2">
          {path.skills.map((skill, idx) => (
            <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <p className="text-gray-400 text-sm mb-2">شىركەتلەر:</p>
        <div className="flex flex-wrap gap-2">
          {path.companies.slice(0, 2).map((company, idx) => (
            <span key={idx} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
              {company}
            </span>
          ))}
          {path.companies.length > 2 && (
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
              +{path.companies.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ToolCard = ({ tool }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{tool.icon}</span>
        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
          {tool.type}
        </span>
      </div>
      <h4 className="text-white font-bold mb-1">{tool.name}</h4>
      <a href={tool.link} className="text-blue-400 text-sm hover:text-blue-300">
        تەپسىلاتى ›
      </a>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      {/* باش بەت */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          كىۋانت ماشىنا ئۆگىنىش يول خەرىتىسى
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          2024-2026 | تولۇق يول يېتەكلەش ۋە مەنبەلەر
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-xl border border-blue-500/30">
            <p className="text-lg">
              <span className="text-yellow-300 font-bold">ئومۇمىي ۋاقىت: </span>
              {timeEstimate}
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-xl border border-purple-500/30">
            <p className="text-lg">
              <span className="text-yellow-300 font-bold">مۇرەككەپلىك: </span>
              {difficulty}
            </p>
          </div>
        </div>
      </motion.header>

      {/* سىتاتىستىكا */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12"
      >
        <StatCard 
          icon="🚀" 
          title="ئۆسۈش نىسبىتى" 
          value={roadmapData.statistics.growth} 
          color="from-blue-600 to-indigo-700"
        />
        <StatCard 
          icon="💰" 
          title="مەتبە" 
          value={roadmapData.statistics.salary} 
          color="from-emerald-600 to-teal-700"
        />
        <StatCard 
          icon="📈" 
          title="تەلەپ" 
          value={roadmapData.statistics.demand} 
          color="from-purple-600 to-pink-700"
        />
        <StatCard 
          icon="🏢" 
          title="شىركەتلەر" 
          value={roadmapData.statistics.companies} 
          color="from-amber-600 to-orange-700"
        />
        <StatCard 
          icon="⏱️" 
          title="كەلگۈسى" 
          value={roadmapData.statistics.timeline} 
          color="from-rose-600 to-red-700"
        />
      </motion.div>

      {/* ئاساسىي باسقۇچلار */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">ئۆگىنىش باسقۇچلىرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {roadmapData.phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </section>

      {/* تېمىلار */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {roadmapData.phases.find(p => p.id === activePhase)?.title} - تېمىلار
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {roadmapData.phases
            .find(phase => phase.id === activePhase)
            ?.topics.map(topic => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
        </div>
      </section>

      {/* قۇراللار */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">كىۋانت قۇراللىرى</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {roadmapData.tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </section>

      {/* كەسىپ يوللىرى */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">كەسىپ يوللىرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {roadmapData.careerPaths.map(path => (
            <CareerPathCard key={path.id} path={path} />
          ))}
        </div>
      </section>

      {/* خۇلاسە */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl md:rounded-2xl border border-gray-700"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">باشلاش ئۇسۇلى</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">1. ئاساسىي بىلىملەر</h3>
            <p className="text-gray-300">
              ماتېماتىكا، پىزىكا ۋە پروگراممىلاشنى ئۆگىنىڭ
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-2">2. قۇراللارنى تونۇش</h3>
            <p className="text-gray-300">
              Qiskit، IBM Quantum قاتارلىق قۇراللارنى ئىشلىتىشنى ئۆگىنىڭ
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">3. ئەمەلىي قويۇلۇشلار</h3>
            <p className="text-gray-300">
              كىچىك لابوراتورىيە قويۇلۇشلىرىدىن باشلاڭ
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-center">مۇھىم كۆرسەتمە</h3>
          <p className="text-lg text-center text-gray-200">
            «كىۋانت ماشىنا ئۆگىنىش تېخنىكىلىق سىناق باسقۇچىدا، ئەمما كەلگۈسى پارلاق.
            بۈگۈن ئۆگىنىش - ئەتىرەك تەتقىقات - ئەتىگەن يېڭىلىق»
          </p>
        </div>
      </motion.div>

      {/* مودال */}
      <TopicModal 
        topic={selectedTopic} 
        onClose={() => setSelectedTopic(null)} 
      />
    </div>
  );
};

export default Blog67;