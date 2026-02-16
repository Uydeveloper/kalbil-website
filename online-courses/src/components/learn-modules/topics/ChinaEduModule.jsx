// src/components/learn-modules/education/ChinaEduModule.jsx
import React, { useState } from 'react';
import { 
  School, GraduationCap, Trophy, Target, Clock, Users, 
  Book, Brain, TrendingUp, Award, BarChart, Calendar,
  BookOpen, BrainCircuit, Users2, PieChart, ChevronRight,
  Shield, Globe, Cpu, TestTube, Calculator, History,
  Map, Zap, Star, CheckCircle, AlertCircle, TrendingDown,
  Layers, Crown, TargetIcon, Database
} from 'lucide-react';

const ChinaEduModule = () => {
  const [activeSection, setActiveSection] = useState('structure');
  
  const educationLevels = [
    {
      name: "باشلانغۇچ مائارىپ (ئىبتىدايى)",
      uyghurName: "باشلانغۇچ مائارىپ",
      duration: "6 يىل",
      age: "6 - 12 ياش",
      type: "مەجبۇرىي",
      description: "ئاساسىي ساۋات ۋە ھېسابلاش قابىلىيىتى",
      curriculum: [
        "خەنزۇ تىلى ۋە يېزىقى",
        "ماتېماتىكا (ئاساسىي)",
        "ئىنگلىز تىلى (باشلانغۇچ)",
        "تەبىئەت ۋە جەمئىيەت",
        "سەنئەت ۋە جىسمانىي تەربىيە",
        "مەدەنىيەت ئاساسى"
      ],
      features: [
        "مەجبۇرىي ۋە ھەقسىز",
        "ھەممە ئوقۇغۇچى ئوخشاش پروگرامما",
        "ئاساسىي ئەخلاق ۋە قائىدە",
        "ئىجتىمائىيلاشتۇرۇش"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "تولۇقسىز ئوتتۇرا مائارىپ (جۇنىئور)",
      uyghurName: "تولۇقسىز ئوتتۇرا مائارىپ",
      duration: "3 يىل",
      age: "12 - 15 ياش",
      type: "مەجبۇرىي",
      description: "ئاساسىي پەنلەرنى چوڭقۇرلاشتۇرۇش",
      curriculum: [
        "خەنزۇ تىلى ۋە ئەدەبىياتى",
        "ماتېماتىكا (ئوتتۇرا)",
        "ئىنگلىز تىلى",
        "فىزىكا، خىمىيە، بىئولوگىيە",
        "تارىخ ۋە جۇغراپىيە",
        "سىياسەت ۋە ئەخلاق"
      ],
      exam: {
        name: "زۇنجىياو (中考)",
        importance: "تولۇق ئوتتۇرا مەكتەپكە كىرىش ئىمتىھانى",
        date: "ھەر يىلى ئىيۇن"
      },
      features: [
        "مەجبۇرىي مائارىپنىڭ ئاخىرقى باسقۇچى",
        "زۇنجىياو ئىمتىھانىغا تەييارلىق",
        "كەسپىي يۆنىلىش بېكىتىش",
        "ئىجتىمائىي پەنلەرگە كىرىش"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "تولۇق ئوتتۇرا مائارىپ (سېنىئور)",
      uyghurName: "تولۇق ئوتتۇرا مائارىپ",
      duration: "3 يىل",
      age: "15 - 18 ياش",
      type: "تاللاشلاش",
      description: "گاۋكۋوغا تەييارلىق ۋە كەسپىي يۆنىلىش",
      tracks: [
        {
          name: "ئىلىم-پەن تۈرى (理科)",
          subjects: ["فىزىكا", "خىمىيە", "بىئولوگىيە", "ماتېماتىكا"],
          for: "تېببىي پەن ۋە ئىنژېنېرلىق",
          percentage: "60%"
        },
        {
          name: "ئەدەبىيات-جەمئىيەت تۈرى (文科)",
          subjects: ["تارىخ", "جۇغراپىيە", "سىياسەت", "ئەخلاق"],
          for: "ھۇمانىتار پەنلىرى",
          percentage: "40%"
        }
      ],
      features: [
        "گاۋكۋو ئىمتىھانىغا 3 يىل تەييارلىق",
        "ئوقۇغۇچى كەسپىي يۆنىلىشىنى تاللايدۇ",
        "ئوقۇتۇش سىستېمىسى قاتتىق باشقۇرۇلىدۇ",
        "ئوقۇش ۋاقتى كۈندە 10-12 سائەت"
      ],
      color: "from-purple-500 to-violet-600"
    },
    {
      name: "گاۋكۋو - يۇقىرى مائارىپ كىرىش ئىمتىھانى",
      uyghurName: "گاۋكۋو (يۇقىرى مائارىپ ئىمتىھانى)",
      duration: "2 كۈن",
      age: "18 ياش",
      type: "مىللەت ئىمتىھانى",
      description: "جۇڭگونىڭ ئەڭ مۇھىم ئاكادېمىك ئىمتىھانى",
      subjects: [
        { name: "خەنزۇ تىلى ۋە ئەدەبىياتى", score: "150", time: "3 سائەت" },
        { name: "ماتېماتىكا", score: "150", time: "2 سائەت" },
        { name: "ئىنگلىز تىلى", score: "150", time: "2 سائەت" },
        { name: "ئىختىيارىي پەن", score: "300", time: "1.5-2 سائەت" }
      ],
      stats: {
        participants: "10 مىليون+",
        universities: "3000+",
        acceptance: "75-80%",
        topUniversityRate: "2%"
      },
      importance: [
        "ئوقۇغۇچىلارنىڭ كەلگۈسىنى بېكىتىدۇ",
        "ئائىلە ۋە جەمئىيەتنىڭ كۆزىتىشى",
        "ئالىي مەكتەپ ۋە كەسپىي تاللاش",
        "ئىجتىمائىي ئورۇن ۋە ھۆرمەت"
      ],
      color: "from-red-500 to-orange-600"
    },
    {
      name: "ئالىي مائارىپ (يۇقىرى مائارىپ)",
      uyghurName: "ئالىي مائارىپ",
      levels: [
        {
          degree: "باشلانغۇچ (باكالاۋر)",
          duration: "4 يىل",
          description: "ئاساسىي ئىختىساسلىق بىلىم",
          types: [
            "ئىلىم-پەن (理科): تېببىي پەن، ئىنژېنېرلىق",
            "ھۇمانىتار (文科): ئەدەبىيات، ئىجتىمائىي پەن",
            "سەنئەت (艺术): سەنئەت، مۇزىكا، رەسساملىق",
            "ئىقتىساد (经济): ئىقتىساد، تىجارەت، مالىيە"
          ],
          requirements: "گاۋكۋو ئىمتىھانىدا مۇۋاپىق نەتىجە"
        },
        {
          degree: "ماگىستىرلىق",
          duration: "2-3 يىل",
          description: "ئىختىساسلاشقان تەتقىقات ۋە بىلىم",
          requirements: [
            "باكالاۋر دەرىجىسى",
            "ماگىستىر كىرىش ئىمتىھانى",
            "ئوقۇتقۇچى تەۋسىيەسى",
            "ئىلمىي ماقالە يېزىش"
          ]
        },
        {
          degree: "دوكتۇرلۇق",
          duration: "3-5 يىل",
          description: "ئەڭ يۇقىرى ئىلمىي دەرىجە",
          requirements: [
            "ماگىستىر دەرىجىسى",
            "دوكتۇر كىرىش ئىمتىھانى",
            "ئىلمىي تەتقىقات پىلانى",
            "دېسسېرتاتسىيە ۋە مۇداپىئە"
          ]
        }
      ],
      features: [
        "ئالىي مەكتەپ تۈزۈمى ھەم دۆلەت، ھەم ئۆزىدىن",
        "مۇھىم ئۇنۋېرسىتېتلار (C9, 985, 211)",
        "ئاكادېمىك تەرتىپ ۋە كۇردلار سىستېمىسى",
        "ئىلمىي تەتقىقات ۋە خەلقئارالىق ئالماشتۇرۇش"
      ],
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const uniqueFeatures = [
    {
      title: "مۇسابىقىلىك سىستېما",
      description: "دۇنيادىكى ئەڭ قاتتىق مۇسابىقىلىك مائارىپ سىستېمىسى",
      details: [
        "10 مىليوندىن ئارتۇق گاۋكۋو ئىمتىھانىدا",
        "پەقەت 2% ئوقۇغۇچىلا ئەڭ يۇقىرى ئۇنۋېرسىتېتلارغا كىرەلەيدۇ",
        "ئوقۇغۇچىلار كۈندە 10-12 سائەت ئوقۇيدۇ",
        "ھەپتىسىگە 6 كۈن، يىلىغا 2 ئاي دەم ئېلىش"
      ],
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "مەركەزلەشتۈرۈلگەن باشقۇرۇش",
      description: "دۆلەت بىر تىپتىكى مائارىپ پروگراممىسى",
      details: [
        "مىللەت دەرىجىسىدىكى ئوقۇتۇش پىلانى",
        "بارلىق مەكتەپلەر ئوخشاش دىرسلىكنى ئۆتىدۇ",
        "مىللەت دەرىجىسىدىكى ئىمتىھان سىستېمىسى",
        "مائارىپ سىياسىتى مەركىزىي ھۆكۈمەت تەرىپىدىن بېكىتىلىدۇ"
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "مەسئۇلىيەت ۋە بەلگىلەش",
      description: "ئوقۇتقۇچى ۋە ئوقۇغۇچىنىڭ قاتتىق مەسئۇلىيىتى",
      details: [
        "ئوقۇتقۇچىلار يۇقىرى نەتىجىلەر ئۈچۈن جاۋابكار",
        "ئوقۇغۇچىلار ئائىلە ۋە جەمئىيەت كۈتىۈشى ئاستىدا",
        "ھەر خىل مۇسابىقىلەر ۋە ئىمتىھانلار",
        "ئۇتۇق ۋە مەغلۇبيەتنىڭ ئوچۇق كۆرسىتىلىشى"
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "تېخنىكا ۋە زامانىۋىلاشتۇرۇش",
      description: "دىجىتال مائارىپ ۋە يېڭى تېخنىكىلار",
      details: [
        "ئىنتېرنېت ئارقىلىق ئوقۇتۇش سىستېمىلىرى",
        "سون مائارىپ ۋە ۋىرتىئال سىنىپلار",
        "ھەرۋى، تېنچېنت قاتارلىق شىركەتلەرنىڭ قاتنىشىشى",
        "ياساشچانلىق ۋە تېخنىكا مائارىپىغا ئەھمىيەت"
      ],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const comparisonWithOthers = [
    {
      country: "ئۇيغۇر مائارىپى",
      similarities: [
        "مەجبۇرىي 9 يىللىق مائارىپ",
        "ئالىي مائارىپتىكى دەرىجىلەر",
        "تىل ۋە مەدەنىيەتكە بولغان دىققەت"
      ],
      differences: [
        "ئۇيغۇر مائارىپىدا مۇسابىقىلىك تۆۋەن",
        "خەنزۇ مائارىپىدا گاۋكۋو قاتتىق مۇسابىقىلىق",
        "خەنزۇ مائارىپى مەركەزلەشتۈرۈلگەن، ئۇيغۇر مائارىپىدا تىل ئالاھىدىلىكى بار"
      ]
    },
    {
      country: "ياپون مائارىپى",
      similarities: [
        "قاتتىق ئىمتىھان سىستېمىسى",
        "ئەخلاق ۋە قائىدە تەربىيەسى",
        "ئاتالمىش ئۇتۇق ئۈچۈن تىرىشچانلىق"
      ],
      differences: [
        "ياپوندا باشلانغۇچ مائارىپ ئاساسەن ئويۇن ئارقىلىق",
        "خەنزۇ مائارىپى ئىلمىي پەنگە تېخىمۇ كۈچ بېرىدۇ",
        "ياپوندا كەسپىي يېتىلدۈرۈش ئۈچۈن ئالاھىدە تەربىيە بار"
      ]
    },
    {
      country: "ئامېرىكا مائارىپى",
      similarities: [
        "ئالىي مائارىپتىكى ئاكادېمىك دەرىجىلەر",
        "ئىلمىي تەتقىقاتقا بولغان ئىنتىلىش",
        "خەلقئارالىق ئالماشتۇرۇش پروگراممىلىرى"
      ],
      differences: [
        "ئامېرىكا مائارىپىدا ياراتقۇچىلىققا ئەھمىيەت بېرىلىدۇ",
        "خەنزۇ مائارىپىدا ئىمتىھان نەتىجىسىگە تېخىمۇ كۆپ قىممەت بېرىلىدۇ",
        "ئامېرىكا مائارىپىدا تاللاش ھوقۇقى كۆپ، خەنزۇ مائارىپىدا مەركەزلەشتۈرۈلگەن"
      ]
    }
  ];

  const statistics = [
    { label: "ئوقۇغۇچى سانى", value: "260 مىليون+", change: "+" },
    { label: "مائارىپ خىراجىتى", value: "GDP نىڭ 4%", change: "+" },
    { label: "ئالىي مائارىپ كىرىش نىسبىتى", value: "80%", change: "↑" },
    { label: "كەسپىي مائارىپ ئوقۇغۇچىسى", value: "30 مىليون", change: "+" }
  ];

  return (
    <div className="space-y-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif]" dir="rtl">
      {/* ماۋزۇ باش بەلگىسى */}
      <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-100 rounded-2xl p-6 border border-red-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl text-white">
              <School className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-red-900 mb-1">خەنزۇ مائارىپ سىستېمىسى (جۇڭگو)</h1>
              <p className="text-red-700 text-lg">
                مۇسابىقىلىك، مەركەزلەشتۈرۈلگەن ۋە ئىمتىھانغا ئاساسلانغان مائارىپ سىستېمىسى
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSection('structure')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSection === 'structure' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}
            >
              قۇرۇلما
            </button>
            <button
              onClick={() => setActiveSection('features')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSection === 'features' ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-800 hover:bg-orange-200'}`}
            >
              ئالاھىدىلىك
            </button>
            <button
              onClick={() => setActiveSection('comparison')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${activeSection === 'comparison' ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            >
              سېلىشتۇرما
            </button>
          </div>
        </div>
      </div>

      {/* ئىستاتىستىكىلار */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
            <div className="text-2xl font-bold text-red-700 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
            <div className={`text-xs mt-1 ${stat.change === '+' || stat.change === '↑' ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} ئۆسۈش
            </div>
          </div>
        ))}
      </div>

      {/* مائارىپ سىستېمىسى قۇرۇلمىسى */}
      {activeSection === 'structure' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-red-600" />
              مائارىپ سىستېمىسى قۇرۇلمىسى
            </h2>
            
            {/* مائارىپ باسقۇچلىرى تىزىملىكى */}
            <div className="space-y-4">
              {educationLevels.map((level, index) => (
                <div key={index} className="relative">
                  {/* باسقۇچ كۆرسىتىمى */}
                  <div className={`bg-gradient-to-r ${level.color} text-white rounded-xl p-5 mb-2`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold">{level.name}</h3>
                        </div>
                        <p className="text-white/90 opacity-90">{level.uyghurName}</p>
                      </div>
                      <div className="flex gap-3">
                        {level.duration && (
                          <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span>{level.duration}</span>
                          </div>
                        )}
                        {level.age && (
                          <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full">
                            <Users className="w-4 h-4" />
                            <span>{level.age}</span>
                          </div>
                        )}
                        {level.type && (
                          <div className="bg-white/20 px-3 py-1.5 rounded-full">
                            {level.type}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* تەپسىلاتلار */}
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    {level.description && (
                      <p className="text-gray-700 mb-4">{level.description}</p>
                    )}

                    {level.curriculum && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-1">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          ئوقۇتۇش پروگراممىسى:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {level.curriculum.map((subject, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {level.exam && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <h4 className="font-bold text-red-800 mb-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          مۇھىم ئىمتىھان: {level.exam.name}
                        </h4>
                        <p className="text-red-700">{level.exam.importance}</p>
                        <p className="text-red-600 text-sm mt-1">ۋاقتى: {level.exam.date}</p>
                      </div>
                    )}

                    {level.tracks && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">كەسپىي يۆنىلىشلەر:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {level.tracks.map((track, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border">
                              <h5 className="font-bold text-gray-800 mb-1">{track.name}</h5>
                              <div className="text-sm text-gray-600 mb-2">{track.for}</div>
                              <div className="text-xs text-purple-600 mb-2">ئوقۇغۇچى نىسبىتى: {track.percentage}</div>
                              <div className="flex flex-wrap gap-1">
                                {track.subjects.map((subject, sIdx) => (
                                  <span key={sIdx} className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded">
                                    {subject}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {level.subjects && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-800 mb-2">ئىمتىھان تەركىبى:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {level.subjects.map((subject, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3 border">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium text-gray-800">{subject.name}</span>
                                <span className="font-bold text-red-600">{subject.score} نومۇر</span>
                              </div>
                              <div className="text-xs text-gray-500">ۋاقتى: {subject.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {level.stats && (
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 mb-4">
                        <h4 className="font-bold text-red-800 mb-2">ئىستاتىستىكا:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-700">{level.stats.participants}</div>
                            <div className="text-xs text-gray-600">ئىشتىراكچى</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-700">{level.stats.universities}</div>
                            <div className="text-xs text-gray-600">ئالىي مەكتەپ</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-700">{level.stats.acceptance}</div>
                            <div className="text-xs text-gray-600">كىرىش نىسبىتى</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-700">{level.stats.topUniversityRate}</div>
                            <div className="text-xs text-gray-600">چوڭ ئۇنۋېرسىتېت</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {level.levels && (
                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-800">ئالىي مائارىپ دەرىجىلىرى:</h4>
                        {level.levels.map((deg, idx) => (
                          <div key={idx} className="border-l-4 border-indigo-400 pl-4 py-2">
                            <div className="flex justify-between items-start mb-1">
                              <h5 className="font-bold text-gray-800">{deg.degree}</h5>
                              <span className="text-sm font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                                {deg.duration}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm mb-2">{deg.description}</p>
                            {deg.types && (
                              <div className="flex flex-wrap gap-1 mb-2">
                                {deg.types.map((type, tIdx) => (
                                  <span key={tIdx} className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded">
                                    {type}
                                  </span>
                                ))}
                              </div>
                            )}
                            {deg.requirements && (
                              <div className="text-xs text-gray-600">
                                <span className="font-medium">تەلەپ:</span> {Array.isArray(deg.requirements) ? deg.requirements.join('، ') : deg.requirements}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {level.features && (
                      <div className="mt-4">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500" />
                          ئالاھىدىلىكلەر:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ئالاھىدىلىكلەر */}
      {activeSection === 'features' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <TargetIcon className="w-6 h-6 text-orange-600" />
              خەنزۇ مائارىپىنىڭ ئالاھىدە ئالاھىدىلىكلىرى
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-700">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-800 text-lg">{feature.title}</h3>
                      <p className="text-orange-700 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* گاۋكۋو ئىمتىھانىنىڭ ئەھمىيىتى */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              گاۋكۋو (高考) ئىمتىھانىنىڭ ئەھمىيىتى
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">ئىجابىي تەرەپلىرى:</h4>
                <ul className="space-y-2">
                  {[
                    "ئادىل كىرىش ئىمكانىيىتى",
                    "مىللەت دەرىجىسىدىكى ئوخشاش پرىنسىپ",
                    "يۇقىرى ئىقتىدارلىق ئوقۇغۇچىلارنى تاللاش",
                    "ئوقۇغۇچىلارنىڭ تىرىشچانلىقىنى ئۆستۈرۈش"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-green-700">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">سالبىي تەرەپلىرى:</h4>
                <ul className="space-y-2">
                  {[
                    "قاتتىق بېسىم ۋە روھىي جەلپ",
                    "ياراتقۇچىلىق ۋە تەنقىدىي ئويلىنىش چەكلىمىسى",
                    "ئوقۇغۇچىلارنىڭ ئۆزگىچە ئىقتىدارلىرىنى چەكلەش",
                    "ساغلاملىق ۋە ئىجتىمائىي تەرەققىياتقا تەسىر"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-red-700">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* باشقا مائارىپلار بىلەن سېلىشتۇرما */}
      {activeSection === 'comparison' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-amber-600" />
              باشقا مائارىپ سىستېمىلىرى بىلەن سېلىشتۇرما
            </h2>

            <div className="space-y-6">
              {comparisonWithOthers.map((comparison, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 border-b">
                    <h3 className="font-bold text-lg text-amber-800">{comparison.country} بىلەن سېلىشتۇرما</h3>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-4 border-r">
                      <h4 className="font-bold text-green-700 mb-3 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        ئوخشاشلىقلار:
                      </h4>
                      <ul className="space-y-2">
                        {comparison.similarities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-red-700 mb-3 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        پەرقلەر:
                      </h4>
                      <ul className="space-y-2">
                        {comparison.differences.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* خۇلاسە ۋە كەلگۈسى */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              كەلگۈسىدىكى يۆنىلىشلەر ۋە ئىسلاھاتلار
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">يۆنىلىشلەر:</h4>
                <div className="space-y-2">
                  {[
                    "ئاتالمىش مائارىپتىن ياراتقۇچىلىققا يۆتۈلۈش",
                    "دىجىتال تېخنىكىلارنىڭ كەڭ قوللىنىشى",
                    "خەلقئارالىق ئالماشتۇرۇشنى كېڭەيتىش",
                    "ئوقۇغۇچىلارنىڭ كۆپ تەرەپلىمە تەرەققىياتى"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-2">ئىسلاھاتلار:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "گاۋكۋو ئىمتىھانى سىستېمىسىنى يۇمشىتىش",
                    "ئىختىيارىي ئوقۇتۇش سىستېمىسى",
                    "ھەر قايسى رايونلار ئارىسىدىكى ئادىللىق",
                    "ئوقۇتقۇچىلارنىڭ كەسپىي تەرەققىياتى"
                  ].map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChinaEduModule;