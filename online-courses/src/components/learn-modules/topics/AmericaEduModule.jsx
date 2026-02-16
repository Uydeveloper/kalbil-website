// src/components/learn-modules/education/AmericaEduModule.jsx
import React, { useState } from 'react';
import { 
  School, GraduationCap, Users, Globe, Target, Lightbulb,
  Clock, Calendar, Award, Heart, BookOpen, Brain, Zap,
  Layers, PieChart, BarChart, LineChart, Coffee, Sparkles,
  Rocket, Compass, Music, Palette, Dumbbell, HeartHandshake,
  Cloud, ArrowRight, CheckCircle, XCircle, AlertCircle,
  Building, Cpu, FlaskConical, Calculator, Database,
  Languages, Home, MapPin, Eye, Book, Globe2, TargetIcon,
  Users2, Sun, Moon, PenTool, Briefcase, Flag, Star,
  TrendingUp, Activity, CreditCard, DollarSign, ThumbsUp
} from 'lucide-react';

const AmericaEduModule = () => {
  const [activeSection, setActiveSection] = useState('structure');
  
  const educationSystem = {
    name: "K-12 + ئالىي مائارىپ سىستېمىسى",
    description: "شەخسىي سەلەھىيەت، ئىزدىنىش ۋە ياراتقۇچىلىققا ئاساسلانغان مائارىپ",
    keyFeatures: [
      {
        title: "ئەركىنلىك ۋە تاللاش ھوقۇقى",
        icon: <Target className="w-5 h-5" />,
        description: "ھەر ئوقۇغۇچى ئۆزىگە ماس كەسپى ۋە دىرسلىكنى تاللايدۇ"
      },
      {
        title: "ياراتقۇچىلىق ۋە تەنقىدىي ئويلىنىش",
        icon: <Lightbulb className="w-5 h-5" />,
        description: "ئىجادچانلىق ۋە مۇستەقىل ئويلىنىش كۈچلۈك قوزغىتىلىدۇ"
      },
      {
        title: "ھەمكارلىق ۋە مۇھاكىمە",
        icon: <Users2 className="w-5 h-5" />,
        description: "گۇرۇپپا خىزمىتى ۋە مۇنازىرە ئارقىلىق ئۆگىنىش"
      },
      {
        title: "چوڭقۇر تەتقىقات ۋە لايىھە",
        icon: <FlaskConical className="w-5 h-5" />,
        description: "ئەمەلىي تەتقىقات ۋە لايىھە ئىشلىرى ئاساسىي ئۇسۇل"
      }
    ],
    levels: [
      {
        name: "باشلانغۇچ مائارىپ (Elementary)",
        grades: "K-5 (باشلانغۇچ 6 يىل)",
        age: "5-11 ياش",
        type: "مەجبۇرىي",
        description: "ئاساسىي بىلىم ۋە ئىجتىمائىي ماھارەتلەر",
        curriculum: [
          "ئىنگلىز تىلى ۋە ئەدەبىياتى",
          "ماتېماتىكا (ئاساسىي)",
          "سوتسىيال سىستېملار",
          "تەبىئىي پەنلەر",
          "سەنئەت ۋە مۇزىكا",
          "جىسمانىي تەربىيە",
          "سوتسىيال-ھېسسىيات پەنلىرى"
        ],
        uniqueFeatures: [
          "ئويۇن ئارقىلىق ئۆگىنىش",
          "ئىجتىمائىي ماھارەتلەرنى تەرەققىي قىلدۇرۇش",
          "ھەر بىر ئوقۇغۇچىغا ئالاھىدە دىققەت",
          "ئىجابىي ئۆگىنىش مۇھىتى"
        ],
        color: "from-blue-500 to-cyan-500"
      },
      {
        name: "ئوتتۇرا مائارىپ (Middle School)",
        grades: "6-8 (3 يىل)",
        age: "11-14 ياش",
        type: "مەجبۇرىي",
        description: "ئاساسىي پەنلەرنى چوڭقۇرلاشتۇرۇش ۋە كەسپىي يۆنىلىش",
        curriculum: [
          "ئىنگلىز تىلى ۋە ئەدەبىياتى",
          "ماتېماتىكا (Algebra، Geometry)",
          "تارىخ ۋە سوتسىيال پەنلەر",
          "فىزىكا، خىمىيە، بىئولوگىيە",
          "ئىختىيارىي پەنلەر",
          "چەت ئەل تىللىرى",
          "جىسمانىي تەربىيە ۋە ساغلاملىق"
        ],
        uniqueFeatures: [
          "ئىختىيارىي دىرسلىكلەر",
          "كەسپىي يۆنىلىش باشلىنىشى",
          "مۇستەقىل ئوقۇش ماھارىتى",
          "ئۆز-ئۆزىنى باشقۇرۇش"
        ],
        color: "from-indigo-500 to-purple-500"
      },
      {
        name: "يۇقىرى مائارىپ (High School)",
        grades: "9-12 (4 يىل)",
        age: "14-18 ياش",
        type: "مەجبۇرىي",
        description: "كەسپىي يۆنىلىش ۋە ئالىي مائارىپقا تەييارلىق",
        tracks: [
          {
            name: "ئاكادېمىك تۈر",
            percentage: "65%",
            focus: "كوللېژ ۋە ئۇنۋېرسىتېتقا تەييارلىق",
            subjects: ["AP دىرسلىكلەر", "مۇنازىرە", "ئىلمىي تەتقىقات"]
          },
          {
            name: "كەسپىي-تېخنىكا تۈرى",
            percentage: "25%",
            focus: "خىزمەت بىلىملىرى",
            subjects: ["مۇھەندىسلىك", "تىجارەت", "ساغلاملىق", "تېخنىكا"]
          },
          {
            name: "ئۆزگىچە ئىقتىدار تۈرى",
            percentage: "10%",
            focus: "ئالاھىدە ئىقتىدارلار",
            subjects: ["سەنئەت", "مۇزىكا", "سپورت", "ئىجادچانلىق"]
          }
        ],
        exams: [
          {
            name: "SAT (Scholastic Assessment Test)",
            purpose: "كوللېژ كىرىش ئىمتىھانى",
            importance: "ئاساسلىق ئاكادېمىك ئىمتىھان"
          },
          {
            name: "ACT (American College Testing)",
            purpose: "كوللېژ كىرىش ئىمتىھانى",
            importance: "مۇناسىۋەتلىك ئاكادېمىك ئىمتىھان"
          },
          {
            name: "AP (Advanced Placement)",
            purpose: "كوللېژ دىرسلىقلىرىنى ئالدىن ئېلىش",
            importance: "ئالىي مائارىپتا دىرس كېتىرىش"
          }
        ],
        uniqueFeatures: [
          "يۇقىرى مائارىپقا تەييارلىق پروگراممىلىرى",
          "ئىختىيارىي دىرسلىكلەر ۋە كۇلۇپلار",
          "ھەمكارلىق ۋە مۇنازىرە ئەندىزىسى",
          "ئىجتىمائىي ۋە ئەمەلىي تەجرىبىلەر"
        ],
        color: "from-red-500 to-pink-500"
      },
      {
        name: "ئالىي مائارىپ (Higher Education)",
        description: "ئىختىساسلاشقان ئىلمىي بىلىم ۋە تەتقىقات",
        institutions: [
          {
            type: "كەسپىي كوللېژ (Community College)",
            duration: "2 يىل",
            degree: "ئاسسوسىيەت دەرىجىسى",
            focus: "ئاساسىي كەسپىي بىلىم"
          },
          {
            type: "ئالىي كوللېژ (College)",
            duration: "4 يىل",
            degree: "باكالاۋر دەرىجىسى",
            focus: "ئاساسىي ئىختىساسلىق بىلىم"
          },
          {
            type: "ئۇنۋېرسىتېت (University)",
            duration: "4+ يىل",
            degree: "باكالاۋر، ماگىستىر، دوكتۇرلۇق",
            focus: "ئىلمىي تەتقىقات ۋە ئىختىساسلاشقان بىلىم"
          }
        ],
        uniqueFeatures: [
          "كەڭ تاللاش ھوقۇقى ۋە يۆنىلىش",
          "ئىلمىي ئەركىنلىك ۋە تەتقىقات",
          "ئەمەلىي تەجرىبە ۋە خىزمەت ئېلىش",
          "خەلقئارالىق ئالماشتۇرۇش ۋە ھەمكارلىق"
        ],
        color: "from-green-500 to-emerald-500"
      }
    ],
    admissionProcess: {
      title: "كوللېژ كىرىش جەريانى",
      components: [
        {
          name: "ئاكادېمىك نەتىجە",
          weight: "40%",
          items: ["GPA (ئومۇمىي ئوتتۇرىچە نومۇر)", "SAT/ACT نومۇرى", "AP دىرسلىقلىرى"]
        },
        {
          name: "ئەمەلىي تەجرىبە",
          weight: "30%",
          items: ["كۇلۇپ ۋە پائالىيەتلەر", "ئىختىيارىي خىزمەت", "ئىشقا ئورۇنلىشىش"]
        },
        {
          name: "شەخسىي سەلەھىيەت",
          weight: "20%",
          items: ["ئىجادچانلىق", "يېتەكچىلىك", "ئىجتىمائىي ماھارەت"]
        },
        {
          name: "باشقىلار",
          weight: "10%",
          items: ["تەۋسىيە خەتلىرى", "تىلغا ئېلىش", "ئائىلە ئەھۋالى"]
        }
      ]
    },
    comparisonWithOthers: [
      {
        country: "خەنزۇ مائارىپى",
        differences: [
          "ئامېرىكا مائارىپىدا تاللاش ھوقۇقى كۆپ، خەنزۇ مائارىپىدا مەركەزلەشتۈرۈلگەن",
          "ئامېرىكا مائارىپىدا ئىجادچانلىق كۈچلۈك، خەنزۇ مائارىپىدا ئىمتىھان نەتىجىسى كۈچلۈك",
          "ئامېرىكا مائارىپىدا گۇرۇپپا خىزمىتى كۈچلۈك، خەنزۇ مائارىپىدا ئۇستاز-شاگىرت مۇناسىۋىتى كۈچلۈك"
        ]
      },
      {
        country: "ياپون مائارىپى",
        differences: [
          "ئامېرىكا مائارىپىدا شەخسىيلىك كۈچلۈك، ياپون مائارىپىدا جەمئىيەتچىلىك كۈچلۈك",
          "ئامېرىكا مائارىپىدا مۇنازىرە ۋە تەنقىد كۈچلۈك، ياپون مائارىپىدا قائىدە ۋە ھۆرمەت كۈچلۈك",
          "ئامېرىكا مائارىپىدا ئىختىيارىيلىق كۆپ، ياپون مائارىپىدا تىزگىن ۋە تەرتىپ كۈچلۈك"
        ]
      },
      {
        country: "ئەرەب مائارىپى",
        differences: [
          "ئامېرىكا مائارىپىدا دىن ۋە مائارىپ ئايرىم، ئەرەب مائارىپىدا دىن ۋە مائارىپ بىرلەشمە",
          "ئامېرىكا مائارىپىدا كۆپ تىللىقلىققا قارشى تۇتۇش، ئەرەب مائارىپىدا ئەرەب تىلى كۈچلۈك",
          "ئامېرىكا مائارىپىدا ئىلمىي ئەركىنلىك كۈچلۈك، ئەرەب مائارىپىدا دىنىي ئەخلاق كۈچلۈك"
        ]
      }
    ]
  };

  const statistics = [
    { label: "باشلانغۇچ مائارىپ كىرىش نىسبىتى", value: "99%", color: "text-blue-600" },
    { label: "يۇقىرى مائارىپ پۈتتۈرۈش نىسبىتى", value: "85%", color: "text-indigo-600" },
    { label: "كوللېژ كىرىش نىسبىتى", value: "66%", color: "text-purple-600" },
    { label: "كىچىك سىن ئوقۇغۇچى سانى", value: "15-20", color: "text-red-600" },
    { label: "مائارىپ خىراجىتى (يىللىق)", value: "$15,000", color: "text-green-600" },
    { label: "چەت ئەل ئوقۇغۇچى سانى", value: "1.1 مىليون", color: "text-amber-600" }
  ];

  const strengthsAndChallenges = [
    {
      type: "كۈچلۈك تەرەپلىرى",
      items: [
        "شەخسىي سەلەھىيەت ۋە ئىجادچانلىقنى تەرەققىي قىلدۇرۇش",
        "تاللاش ھوقۇقى ۋە كەسپىي يۆنىلىش كۆپلۈكى",
        "ئىلمىي ئەركىنلىك ۋە تەتقىقات ئىمكانىيىتى",
        "خەلقئارالىق ئوقۇغۇچىلارنى جەلپ قىلىش",
        "ئەمەلىي تەجرىبە ۋە لايىھە ئاساسىدىكى ئوقۇتۇش",
        "ھەر بىر ئوقۇغۇچىغا ئالاھىدە دىققەت قىلىش"
      ]
    },
    {
      type: "چەتلىكلەر ۋە مەسىلىلەر",
      items: [
        "مائارىپ خىراجىتىنىڭ يۇقىرى بولۇشى",
        "ئىقتىسادىي پەرق ۋە ئادىللىق مەسىلىسى",
        "ئاكادېمىك نەتىجە پەرقىنىڭ چوڭ بولۇشى",
        "ساغلاملىق ۋە روھىي بېسىم مەسىلىسى",
        "ئوقۇتقۇچى سانى ۋە مائاش مەسىلىسى",
        "بىلىنگۋال ۋە كۆپ تىللىق مائارىپ تەلەپى"
      ]
    }
  ];

  const topUniversities = [
    {
      name: "ھارۋارد ئۇنىۋېرسىتېتى",
      location: "ماسساچۇسېتس",
      founded: "1636",
      ranking: "#1",
      specialties: ["قانۇن", "تىبابەت", "بىزنىس", "ئىلمىي تەتقىقات"]
    },
    {
      name: "ستانفورد ئۇنىۋېرسىتېتى",
      location: "كالىفورنىيە",
      founded: "1885",
      ranking: "#2",
      specialties: ["تېخنىكا", "كومپيۇتېر پەنلىرى", "بىزنىس", "ئىجادچانلىق"]
    },
    {
      name: "MIT (ماسساچۇسېتس تېخنىكا ئىنستىتۇتى)",
      location: "ماسساچۇسېتس",
      founded: "1861",
      ranking: "#3",
      specialties: ["مۇھەندىسلىك", "تېخنىكا", "فىزىكا", "ماتېماتىكا"]
    },
    {
      name: "يەل ئۇنىۋېرسىتېتى",
      location: "كونېكتىكات",
      founded: "1701",
      ranking: "#4",
      specialties: ["ھۇمانىتار پەنلىرى", "قانۇن", "سىياسەت", "مۇزىكا"]
    }
  ];

  return (
    <div className="space-y-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif]" dir="rtl">
      {/* ماۋزۇ باش بەلگىسى */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100 rounded-2xl p-6 border border-blue-200 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl text-white shadow-md">
              <School className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-1">ئامېرىكا مائارىپ سىستېمىسى</h1>
              <p className="text-blue-700 text-lg">
                شەخسىي سەلەھىيەت، ئىزدىنىش ۋە ياراتقۇچىلىققا ئاساسلانغان مائارىپ
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSection('structure')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'structure' ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
            >
              <Layers className="w-4 h-4" />
              قۇرۇلما
            </button>
            <button
              onClick={() => setActiveSection('admission')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'admission' ? 'bg-indigo-600 text-white shadow-md' : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'}`}
            >
              <TargetIcon className="w-4 h-4" />
              كىرىش جەريانى
            </button>
            <button
              onClick={() => setActiveSection('comparison')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'comparison' ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
            >
              <Globe className="w-4 h-4" />
              سېلىشتۇرما
            </button>
          </div>
        </div>
      </div>

      {/* ئىستاتىستىكىلار */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
            <div className={`text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* مائارىپ سىستېمىسى قۇرۇلمىسى */}
      {activeSection === 'structure' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-blue-600" />
              {educationSystem.name} - مائارىپ سىستېمىسى قۇرۇلمىسى
            </h2>
            
            {/* ئاساسىي ئالاھىدىلىكلەر */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {educationSystem.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800">{feature.title}</h3>
                      <p className="text-blue-700 text-xs">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* مائارىپ باسقۇچلىرى كۆرسىتىمى */}
            <div className="relative mb-8">
              <div className="flex flex-col lg:flex-row items-stretch gap-6">
                {educationSystem.levels.slice(0, 3).map((level, index) => (
                  <div key={index} className="flex-1">
                    <div className={`bg-gradient-to-r ${level.color} text-white rounded-xl p-5 h-full shadow-md`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          {index === 0 && <BookOpen className="w-6 h-6" />}
                          {index === 1 && <School className="w-6 h-6" />}
                          {index === 2 && <GraduationCap className="w-6 h-6" />}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{level.name}</h3>
                          <p className="text-white/90 text-sm">{level.grades}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{level.age}</span>
                          </div>
                        </div>
                        
                        <div className="bg-white/20 px-3 py-1 rounded-full text-center">
                          <span className="text-sm">{level.type}</span>
                        </div>
                        
                        <p className="text-white/90 text-sm">{level.description}</p>
                        
                        {level.tracks && (
                          <div>
                            <div className="text-sm font-medium mb-1">تارماقلار:</div>
                            <div className="space-y-1">
                              {level.tracks.map((track, idx) => (
                                <div key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">
                                  <div className="flex justify-between">
                                    <span>{track.name}</span>
                                    <span>{track.percentage}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* ئالىي مائارىپ تەپسىلاتلىرى */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-green-600" />
                ئالىي مائارىپ (Higher Education)
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {educationSystem.levels[3].institutions.map((institution, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-green-800 text-lg mb-2">{institution.type}</h4>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                        {institution.duration}
                      </span>
                      <span className="text-sm font-medium text-gray-700">{institution.degree}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{institution.focus}</p>
                    
                    {idx === 2 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-sm font-medium text-gray-700 mb-2">ئالىي مائارىپ ئالاھىدىلىكلىرى:</div>
                        <div className="space-y-1">
                          {educationSystem.levels[3].uniqueFeatures.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-1 text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* تەپسىلىي مەلۇماتلار */}
            <div className="grid md:grid-cols-3 gap-6">
              {educationSystem.levels.slice(0, 3).map((level, index) => (
                <div key={index} className={`border-l-4 ${index === 0 ? 'border-blue-400' : index === 1 ? 'border-indigo-400' : 'border-red-400'} pl-4 py-2`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800">{level.name}</h3>
                      <p className="text-sm text-gray-600">{level.grades}</p>
                    </div>
                    <span className="text-sm font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {level.age}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{level.description}</p>
                  
                  {level.curriculum && (
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <Book className="w-4 h-4" />
                        ئاساسىي پەنلەر:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {level.curriculum.slice(0, 4).map((subject, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {level.uniqueFeatures && (
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-700 mb-1">ئالاھىدىلىكلەر:</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {level.uniqueFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <Star className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {level.exams && (
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 border">
                      <h4 className="font-medium text-gray-700 mb-1">مۇھىم ئىمتىھانلار:</h4>
                      {level.exams.map((exam, idx) => (
                        <div key={idx} className="mb-1 last:mb-0">
                          <div className="font-medium text-gray-800">{exam.name}</div>
                          <div className="text-xs text-gray-600">{exam.purpose}</div>
                          {exam.importance && (
                            <div className="text-xs text-blue-600">{exam.importance}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* كوللېژ كىرىش جەريانى */}
      {activeSection === 'admission' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <TargetIcon className="w-6 h-6 text-indigo-600" />
              كوللېژ كىرىش جەريانى ۋە تەلەپلەر
            </h2>
            
            {/* كىرىش كومپونېنتلىرى */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {educationSystem.admissionProcess.components.map((component, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-indigo-800">{component.name}</h3>
                    <div className="text-lg font-bold text-purple-600">{component.weight}</div>
                  </div>
                  
                  <div className="space-y-2">
                    {component.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* مۇھىم ئىمتىھانلار */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">مۇھىم ئىمتىھانلار ۋە ئىمتىھان تەييارلىقى</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    exam: "SAT",
                    sections: ["ئىنگلىز تىلى", "ماتېماتىكا", "ئىختىيارىي يېزىش"],
                    score: "400-1600",
                    importance: "كوللېژ كىرىشنىڭ ئاساسىي ئۆلچىمى"
                  },
                  {
                    exam: "ACT",
                    sections: ["ئىنگلىز تىلى", "ماتېماتىكا", "ئوقۇش", "ئىلمىي ئىزدىنىش"],
                    score: "1-36",
                    importance: "مۇناسىۋەتلىك كوللېژ كىرىش ئىمتىھانى"
                  },
                  {
                    exam: "AP (Advanced Placement)",
                    sections: ["38 خىل دىرسلىق", "كوللېژ سەۋىيىسى", "ئالىي مائارىپتا كېتىرىش"],
                    score: "1-5",
                    importance: "ئالىي مائارىپتا دىرس كېتىرىش ۋە كوللېژ كىرىش ئۈستۈنلۈكى"
                  }
                ].map((exam, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                    <h4 className="font-bold text-blue-800 text-lg mb-2">{exam.exam}</h4>
                    <div className="mb-3">
                      <div className="text-sm text-gray-600 mb-1">بۆلەكلەر:</div>
                      <div className="flex flex-wrap gap-1">
                        {exam.sections.map((section, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                            {section}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-gray-500">نومۇر:</div>
                        <div className="font-bold text-blue-700">{exam.score}</div>
                      </div>
                      <div className="text-xs text-gray-600 text-right max-w-[150px]">
                        {exam.importance}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* چوڭ ئۇنۋېرسىتېتلار */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">دۇنيادىكى ئەڭ چوڭ ئامېرىكا ئۇنۋېرسىتېتلىرى</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topUniversities.map((uni, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800">{uni.name}</h4>
                        <p className="text-sm text-gray-600">{uni.location}</p>
                      </div>
                      <span className="text-sm font-bold bg-amber-100 text-amber-800 px-2 py-1 rounded">
                        {uni.ranking}
                      </span>
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-2">قۇرۇلغان: {uni.founded} يىلى</div>
                    
                    <div>
                      <div className="text-xs text-gray-500 mb-1">ئالاھىدە ئىختىساسلار:</div>
                      <div className="flex flex-wrap gap-1">
                        {uni.specialties.slice(0, 3).map((specialty, sIdx) => (
                          <span key={sIdx} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* كۈچلۈك تەرەپلەر ۋە چەتلىكلەر */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                كۈچلۈك تەرەپلىرى ۋە ئۈستۈنلۈكلىرى
              </h3>
              
              <div className="space-y-3">
                {strengthsAndChallenges[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="p-1 bg-green-100 rounded">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-green-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                چەتلىكلەر ۋە مەسىلىلەر
              </h3>
              
              <div className="space-y-3">
                {strengthsAndChallenges[1].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="p-1 bg-red-100 rounded">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-red-800">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* مائارىپ خىراجىتى */}
              <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-2">مائارىپ خىراجىتى (يىللىق):</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="text-lg font-bold text-amber-700">$10,000-50,000</div>
                    <div className="text-xs text-gray-600">ئۇمۇميۈزلۈك ئۇنۋېرسىتېت</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="text-lg font-bold text-amber-700">$30,000-70,000</div>
                    <div className="text-xs text-gray-600">شەخسىي ئۇنۋېرسىتېت</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="text-lg font-bold text-amber-700">$3,000-10,000</div>
                    <div className="text-xs text-gray-600">كەسپىي كوللېژ</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded border">
                    <div className="text-lg font-bold text-amber-700">$15,000-30,000</div>
                    <div className="text-xs text-gray-600">چەت ئەل ئوقۇغۇچى</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* باشقا مائارىپلار بىلەن سېلىشتۇرما */}
      {activeSection === 'comparison' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-purple-600" />
              باشقا مائارىپ سىستېمىلىرى بىلەن سېلىشتۇرما
            </h2>
            
            <div className="space-y-6">
              {educationSystem.comparisonWithOthers.map((comparison, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 border-b">
                    <h3 className="font-bold text-lg text-purple-800">{comparison.country} بىلەن سېلىشتۇرما</h3>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-700 mb-3">ئاساسلىق پەرقلەر:</h4>
                    <ul className="space-y-2">
                      {comparison.differences.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* ئامېرىكا مائارىپىنىڭ ئالاھىدىلىكلىرى */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              ئامېرىكا مائارىپىنىڭ ئالاھىدە ئالاھىدىلىكلىرى
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-3">ئوقۇتۇش ئۇسۇلى:</h4>
                <div className="space-y-2">
                  {[
                    "سۆھبەت ۋە مۇنازىرە ئاساسىدىكى ئوقۇتۇش",
                    "لايىھە ۋە تەتقىقات ئاساسىدىكى ئوقۇتۇش",
                    "ھەمكارلىق ۋە گۇرۇپپا خىزمىتى",
                    "ئەمەلىي تەجرىبە ۋە ئىشقا ئورۇنلىشىش",
                    "ئىجادچانلىق ۋە مۇستەقىل ئويلىنىش",
                    "ھەر بىر ئوقۇغۇچىغا ئالاھىدە دىققەت"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-3">مائارىپ قىممەتلىرى:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { text: "ئەركىنلىك", color: "bg-blue-100 text-blue-800" },
                    { text: "ئىزدىنىش", color: "bg-indigo-100 text-indigo-800" },
                    { text: "شەخسىي سەلەھىيەت", color: "bg-purple-100 text-purple-800" },
                    { text: "ياراتقۇچىلىق", color: "bg-pink-100 text-pink-800" },
                    { text: "ھەمكارلىق", color: "bg-green-100 text-green-800" },
                    { text: "تەنقىدىي ئويلىنىش", color: "bg-amber-100 text-amber-800" },
                    { text: "ئىجادچانلىق", color: "bg-red-100 text-red-800" },
                    { text: "ئادىللىق", color: "bg-teal-100 text-teal-800" }
                  ].map((item, idx) => (
                    <span key={idx} className={`px-3 py-1.5 rounded-full text-sm font-medium ${item.color}`}>
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* كەلگۈسى يۆنىلىشى */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
              <h4 className="font-bold text-gray-700 mb-2">كەلگۈسىدىكى يۆنىلىشلەر:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { trend: "دىجىتال مائارىپ", icon: "💻" },
                  { trend: "كەسپىي مائارىپ", icon: "🎯" },
                  { trend: "خەلقئارالىقلىشىش", icon: "🌍" },
                  { trend: "شەخسىيلەشتۈرۈلگەن مائارىپ", icon: "👤" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-sm font-medium text-gray-800">{item.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmericaEduModule;