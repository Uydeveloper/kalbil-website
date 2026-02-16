// Blog66.jsx - 2026-يىللىق ئەڭ بازارلىق كەسىپلەر بىلوگى
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Blog66 = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const professionsData = {
    trending: [
      {
        id: 1,
        title: 'سۈنئىي ئەقىل مۇتەخەسسىسى',
        englishTitle: 'AI Engineer / Specialist',
        icon: '🤖',
        color: 'from-blue-600 to-indigo-700',
        badgeColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
        description: 'شىركەتلەر ئادەم ئورنىغا AI ئىشلىتىۋاتىدۇ. چىقىمنى ئازايتىدۇ، سۈرئەتنى ئاشۇرىدۇ.',
        whyImportant: 'ChatGPT، Copilot، Autonomous System كەڭ قوللىنىلىدۇ',
        technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
        learningPath: ['Python → ML → Deep Learning → Real Project'],
        salary: '$120,000 - $250,000',
        growthRate: '35%',
        demand: 'بەك يۇقىرى',
        companies: ['Google', 'Microsoft', 'OpenAI', 'Tesla'],
        futureOutlook: '5 يىلدا 50% ئۆسۈش كۈتىلىۋاتىدۇ'
      },
      {
        id: 2,
        title: 'سانلىق مەلۇمات ئالىمى',
        englishTitle: 'Data Scientist / Analyst',
        icon: '📊',
        color: 'from-emerald-600 to-teal-700',
        badgeColor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
        description: '«سانلىق مەلۇمات = يېڭى نېفىت» - شىركەت قارارلىرىنى سانلىق مەلۇمات بويىچە قىلىدۇ',
        whyImportant: 'ھەر بىر كارخانا سانلىق مەلۇماتقا مۇھتاج',
        technologies: ['Python', 'SQL', 'Pandas', 'Power BI', 'Tableau'],
        tasks: ['Data Cleaning', 'Statistical Analysis', 'Visualization', 'Business Insight'],
        learningPath: ['Python → SQL → Data Analysis → ML Basics'],
        salary: '$90,000 - $180,000',
        growthRate: '28%',
        demand: 'يۇقىرى',
        companies: ['Amazon', 'Meta', 'Netflix', 'Uber']
      }
    ],
    emerging: [
      {
        id: 3,
        title: 'سۈنئىي ئەقىل + كەسىپ ئارىلىق',
        englishTitle: 'AI + Domain Specialist',
        icon: '⚕️',
        color: 'from-purple-600 to-pink-700',
        badgeColor: 'bg-gradient-to-r from-purple-500 to-pink-600',
        description: 'پەقەت AI بىلىش يەتمەيدۇ. كەسىپ بىلىمى بىلەن AI نى بىرلەشتۈرگەن ئادەملەر قىممەت',
        examples: [
          { title: 'AI Medical Analyst', desc: 'دوختۇرخانا ساھەسىدە AI' },
          { title: 'AI Financial Risk Analyst', desc: 'مالىيە خەتەرلىرىنى باشقۇرۇش' },
          { title: 'AI Legal Assistant', desc: 'قانۇن ھۆججەتلىرىنى تەھلىل قىلىش' }
        ],
        salary: '$100,000 - $220,000',
        growthRate: '40%'
      },
      {
        id: 4,
        title: 'كىۋانت تېخنىكىسى مۇتەخەسسىسى',
        englishTitle: 'Quantum Computing Specialist',
        icon: '⚛️',
        color: 'from-cyan-600 to-blue-700',
        badgeColor: 'bg-gradient-to-r from-cyan-500 to-blue-600',
        description: 'Google، IBM، Microsoft زور مەبلەغ سالدى. كەلگۈسى 5-10 يىلدا چوڭ ئۆزگىرىش',
        whyImportant: 'كەم ئادەم بىلىدۇ → قىممىتى بەك يۇقىرى',
        specializations: ['Quantum Algorithm Engineer', 'Quantum ML Researcher'],
        learningPath: ['Physics/Math → Quantum Basics → Qiskit/Cirq'],
        salary: '$150,000 - $300,000+',
        growthRate: '45%'
      }
    ],
    newRoles: [
      {
        id: 5,
        title: 'AI Trainer',
        subtitle: 'سۈنئىي ئەقىل ئوقۇتقۇچىسى',
        icon: '👨‍🏫',
        color: 'from-amber-600 to-orange-700',
        description: 'AI نى ئادەمگە توغرا چۈشەندۈرۈش، Prompt Engineering',
        skills: ['Prompt Design', 'Model Fine-tuning', 'AI Behavior Training']
      },
      {
        id: 6,
        title: 'AI Ethics Officer',
        subtitle: 'AI ئەخلاق نازارەتچىسى',
        icon: '⚖️',
        color: 'from-rose-600 to-red-700',
        description: 'AI ئادالەتلىك ئىشلىتىلەمدۇ؟ ئىرق، جىنس، دىنىي كەمسىتىش بارمۇ؟',
        responsibilities: ['Fairness Audit', 'Bias Detection', 'Ethical Guidelines']
      }
    ],
    declining: [
      {
        id: 7,
        title: 'ئاددىي كاتىپلىق',
        icon: '📝',
        color: 'from-gray-600 to-slate-700',
        warning: true,
        reason: 'AI ئاپتوماتىك دوكۇمېنت ياساش ۋە باشقۇرۇشقا قادىر',
        declineRate: '60%'
      },
      {
        id: 8,
        title: 'قايتىلىنىدىغان ئىشلار',
        icon: '🔄',
        color: 'from-gray-600 to-slate-700',
        warning: true,
        reason: 'رېمونتلىق رۇبوتلار ۋە ئاپتوماتلاشتۇرۇش سىستېمىلىرى',
        declineRate: '40%'
      }
    ]
  };

  const allProfessions = [
    ...professionsData.trending,
    ...professionsData.emerging,
    ...professionsData.newRoles,
    ...professionsData.declining
  ];

  const filteredProfessions = allProfessions.filter(profession => {
    const matchesSearch = profession.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profession.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (profession.englishTitle && profession.englishTitle.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'trending') return professionsData.trending.includes(profession) && matchesSearch;
    if (activeTab === 'emerging') return professionsData.emerging.includes(profession) && matchesSearch;
    if (activeTab === 'new') return professionsData.newRoles.includes(profession) && matchesSearch;
    if (activeTab === 'declining') return professionsData.declining.includes(profession) && matchesSearch;
    return matchesSearch;
  });

  const tabItems = [
    { id: 'all', label: 'ھەممىسى', count: allProfessions.length },
    { id: 'trending', label: 'ئىزچىل ئۆسۈۋاتقان', count: professionsData.trending.length },
    { id: 'emerging', label: 'يېڭى كېلىۋاتقان', count: professionsData.emerging.length },
    { id: 'new', label: 'يېڭى روللار', count: professionsData.newRoles.length },
    { id: 'declining', label: 'ئازايىۋاتقان', count: professionsData.declining.length }
  ];

  const StatCard = ({ icon, title, value, color }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-xl`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </motion.div>
  );

  const ProfessionCard = ({ profession }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      onClick={() => setSelectedProfession(profession)}
      className={`relative bg-gradient-to-br ${profession.color} p-6 rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl ${
        profession.warning ? 'border-2 border-red-500' : ''
      }`}
    >
      {profession.warning && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          ⚠️ ئەسكەرتىش
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-4xl mb-2">{profession.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-1">{profession.title}</h3>
          {profession.englishTitle && (
            <p className="text-blue-100 text-sm mb-2">{profession.englishTitle}</p>
          )}
          {profession.subtitle && (
            <p className="text-gray-200 text-sm">{profession.subtitle}</p>
          )}
        </div>
        
        {profession.salary && (
          <div className="bg-black/30 px-3 py-1 rounded-lg">
            <p className="text-yellow-300 font-bold">{profession.salary}</p>
          </div>
        )}
      </div>
      
      <p className="text-gray-100 mb-4">{profession.description}</p>
      
      {profession.technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {profession.technologies.map((tech, idx) => (
            <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {profession.growthRate && !profession.warning && (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-green-300 font-bold mr-2">+{profession.growthRate}</span>
            <span className="text-gray-200 text-sm">يىللىق ئۆسۈش</span>
          </div>
          <span className="text-white text-sm">› تەپسىلاتى</span>
        </div>
      )}
      
      {profession.declineRate && profession.warning && (
        <div className="flex items-center">
          <span className="text-red-300 font-bold mr-2">-{profession.declineRate}</span>
          <span className="text-gray-200 text-sm">كەلگۈسى 5 يىلدا</span>
        </div>
      )}
    </motion.div>
  );

  const ProfessionModal = ({ profession, onClose }) => (
    <AnimatePresence>
      {profession && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className={`bg-gradient-to-br ${profession.color} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-5xl mb-3">{profession.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{profession.title}</h2>
                  {profession.englishTitle && (
                    <p className="text-xl text-blue-100">{profession.englishTitle}</p>
                  )}
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
                  <h3 className="text-xl font-bold text-white mb-3">تەسۋىرى</h3>
                  <p className="text-gray-100 mb-6">{profession.description}</p>
                  
                  {profession.whyImportant && (
                    <>
                      <h3 className="text-xl font-bold text-white mb-3">نېمىشقا مۇھىم؟</h3>
                      <p className="text-gray-100 mb-6">{profession.whyImportant}</p>
                    </>
                  )}
                  
                  {profession.learningPath && (
                    <>
                      <h3 className="text-xl font-bold text-white mb-3">ئۆگىنىش يولى</h3>
                      <div className="space-y-2">
                        {profession.learningPath.map((step, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="text-yellow-300 mr-2">›</span>
                            <span className="text-gray-100">{step}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <div>
                  {profession.salary && (
                    <div className="bg-black/30 p-4 rounded-xl mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">ئوتتۇرىچە مەتبە</h3>
                      <p className="text-2xl font-bold text-yellow-300">{profession.salary}</p>
                    </div>
                  )}
                  
                  {profession.growthRate && !profession.warning && (
                    <div className="bg-black/30 p-4 rounded-xl mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">ئۆسۈش نىسبىتى</h3>
                      <p className="text-2xl font-bold text-green-300">+{profession.growthRate} (يىللىق)</p>
                    </div>
                  )}
                  
                  {profession.technologies && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3">كېرەكلىك تېخنىكىلار</h3>
                      <div className="flex flex-wrap gap-2">
                        {profession.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-white/20 px-3 py-2 rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {profession.companies && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">ئىزدەۋاتقان شىركەتلەر</h3>
                      <div className="flex flex-wrap gap-2">
                        {profession.companies.map((company, idx) => (
                          <span key={idx} className="bg-white/20 px-3 py-1 rounded-full">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {profession.examples && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">مىساللار</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {profession.examples.map((example, idx) => (
                      <div key={idx} className="bg-black/30 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-white mb-2">{example.title}</h4>
                        <p className="text-gray-200">{example.desc}</p>
                      </div>
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-900 text-white p-4 md:p-8">
      {/* باش بەت */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          2026-يىللىق كەلگۈسى كەسىپلەر
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          AI دەۋرىدە تاللاش قىلىش - «بىلىم + سۈنئىي ئەقىل + ئىجادىيەت»
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="كەسىپ ئىزدەش..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            پىلترلەش
          </button>
        </div>
      </motion.header>

      {/* سىتاتىستىكا */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
      >
        <StatCard 
          icon="🚀" 
          title="ئۆسۈش نىسبىتى" 
          value="+35%" 
          color="from-blue-600 to-indigo-700"
        />
        <StatCard 
          icon="💰" 
          title="ئوتتۇرىچە مەتبە" 
          value="$120K+" 
          color="from-emerald-600 to-teal-700"
        />
        <StatCard 
          icon="🎯" 
          title="يېڭى كەسىپلەر" 
          value="12+" 
          color="from-purple-600 to-pink-700"
        />
        <StatCard 
          icon="⚠️" 
          title="ئازايىدىغان" 
          value="8+" 
          color="from-rose-600 to-red-700"
        />
      </motion.div>

      {/* تاختىلار */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-sm">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* كەسىپ كارتىلەر */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredProfessions.map((profession) => (
            <ProfessionCard key={profession.id} profession={profession} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* كەلگۈسى چۈشەنچە */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 p-8 bg-gradient-to-r from-slate-800 to-gray-800 rounded-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">🎯 2026-يىلىدا نېمە ئۆزگىرىدۇ؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-2xl mr-3">💡</div>
              <div>
                <h3 className="text-xl font-bold mb-2">ئەڭ مۇھىم باھا</h3>
                <p className="text-gray-300">
                  AI نى ئىشلىتىدىغان ئادەم → AI ئالماشتۇرالمايدۇ. بۇ كىشىلەر ئۈچۈن چوڭ پۇرسەت.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2">كەلگۈسىنىڭ ئەڭ ياخشى تەرەپلىرى</h3>
                <p className="text-gray-300">
                  «بىلىم + AI + ئىجادىيەت» بار ئادەم كۈچلۈك بولىدۇ. پەقەت دىپلوم ئەمەس، قابىلىيەت قىممەت.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-2xl mr-3">📈</div>
              <div>
                <h3 className="text-xl font-bold mb-2">باشلامچىلىق قىلىش كېرەك</h3>
                <p className="text-gray-300">
                  ئۆز كەسپىڭىز بىلەن تېخنىكىلارنى قانداق بىرلەشتۈرۈشنى ئويلاش ئەڭ مۇھىم.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">🌍</div>
              <div>
                <h3 className="text-xl font-bold mb-2">بىتەرەپ كەسىپ تاللاش</h3>
                <p className="text-gray-300">
                  ھەر بىر كەسىپ ئۆزىگە خاس AI قوللىنىشىنى تەلەپ قىلىدۇ.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl">
          <p className="text-2xl text-center font-bold">
            «2026-يىلى ئۇيغۇر كىۋانىت تېخنىكا يىلى - بىزنىڭ دەۋرىمىز، بىزنىڭ پۇرسىتىمىز»
          </p>
        </div>
      </motion.div>

      {/* مودال */}
      <ProfessionModal 
        profession={selectedProfession} 
        onClose={() => setSelectedProfession(null)} 
      />
    </div>
  );
};

export default Blog66;