// src/components/learn-modules/education/ArabEduModule.jsx
import React, { useState } from 'react';
import { 
  BookOpen, GraduationCap, Globe, Users, Calendar,
  Clock, Map, Star, TrendingUp, Award, Brain, Zap,
  Layers, PieChart, BarChart, LineChart, Coffee,
  Lightbulb, Sparkles, Rocket, Compass, Music,
  Palette, Target, Heart, Shield, Cloud,
  ArrowRight, CheckCircle, XCircle, AlertCircle,
  Building, Cpu, FlaskConical, Calculator, Database,
  Languages, Home, MapPin, Eye, Book, Globe2,
  Scale, HeartHandshake, Crown,
  Users2, Sun, Moon, BookMarked, PenTool, Church, Castle ,School // ← Home ۋە Building نى چىقىرىۋېتىڭ
} from 'lucide-react';

const ArabEduModule = () => {
  const [activeSection, setActiveSection] = useState('structure');
  
  const educationSystem = {
    name: "ئەرەب مائارىپ سىستېمىسى",
    description: "دىنىي بىلىم بىلەن زامانىۋى ئىلىمنى بىرلەشتۈرگەن مائارىپ",
    regions: [
      {
        name: "خەلىج دۆلەتلىرى",
        countries: ["سەئۇدى ئەرەبىستان", "بىرلەشكەن ئەرەب ئەمىرلىكلىرى", "قاتار", "ئومان", "بەھرەين", "كۇۋەيت"],
        features: ["زامانىۋى تېخنىكا", "ئىنگلىز تىلى", "خەلقئارالىق مائارىپ"],
        color: "from-emerald-500 to-green-500"
      },
      {
        name: "شىمالىي ئافرىقا",
        countries: ["مىسىر", "جامەھىرىيە", "جەزائىر", "مەغرىب", "تۇنىس"],
        features: ["فرانسۇز تىلى ئەھمىيىتى", "قەدىمىي ئۇنۋېرسىتېتلار", "ئەرەب مەدەنىيىتى"],
        color: "from-amber-500 to-orange-500"
      },
      {
        name: "ئاشۇرى ۋە لېۋانت",
        countries: ["لۇبنان", "ئىئوردانىيە", "سۇرىيە", "پەلەستىن"],
        features: ["كۆپ تىللىق مائارىپ", "ئائىلە مائارىپى", "تېخنىكىلىق مائارىپ"],
        color: "from-blue-500 to-cyan-500"
      }
    ],
    levels: [
      {
        name: "باشلانغۇچ مائارىپ",
        arabicName: "التعليم الابتدائي",
        duration: "6 يىل",
        age: "6-12 ياش",
        type: "مەجبۇرىي",
        description: "ئاساسىي ساۋات ۋە دىنىي بىلىملەر",
        curriculum: [
          "ئەرەب تىلى ۋە يېزىقى",
          "قۇرئان كەرىم ۋە تەجۋىد",
          "ماتېماتىكا (الحساب)",
          "ئىسلام تارىخى ۋە تەربىيەسى",
          "تەبىئىي پەنلەر",
          "مۇزىكا ۋە سەنئەت (بەزى دۆلەتلەردە)"
        ],
        uniqueFeatures: [
          "قۇرئان ھېپسىز ئېتىش",
          "ئەرەب يېزىقىنى مۇكەممەل ئۆگىنىش",
          "ئىسلام ئەخلاقىي قىممەتلىرى",
          "مەسچىت مائارىپى بىلەن بىرلەشمە"
        ],
        color: "from-green-500 to-emerald-500"
      },
      {
        name: "تولۇقسىز ئوتتۇرا مائارىپ",
        arabicName: "التعليم الإعدادي",
        duration: "3 يىل",
        age: "12-15 ياش",
        type: "مەجبۇرىي",
        description: "ئاساسىي پەنلەرنى چوڭقۇرلاشتۇرۇش ۋە دىنىي بىلىم",
        curriculum: [
          "ئەرەب ئەدەبىياتى ۋە تىلى",
          "ئىسلام دىنى (الفقه والعقيدة)",
          "ماتېماتىكا ۋە ئەندىزە",
          "تارىخ ۋە جۇغراپىيە",
          "ئىنگلىز تىلى ياكى فرانسۇز تىلى",
          "فىزىكا ۋە خىمىيە",
          "جىسمانىي تەربىيە"
        ],
        exams: [
          {
            name: "باشلانغۇچ پۈتتۈرۈش ئىمتىھانى",
            purpose: "تولۇق ئوتتۇرا مائارىپقا كىرىش"
          }
        ],
        uniqueFeatures: [
          "دىنىي ۋە دىنىي بولمىغان بىلىملەر بىرلەشمىسى",
          "ئىسلام قانۇنلىرىنى ئۆگىنىش (بەزى دۆلەتلەردە)",
          "ئەرەب مەدەنىيىتى ۋە تارىخى",
          "ئىسلام پەلسەپىسى"
        ],
        color: "from-blue-500 to-sky-500"
      },
      {
        name: "تولۇق ئوتتۇرا مائارىپ",
        arabicName: "التعليم الثانوي",
        duration: "3 يىل",
        age: "15-18 ياش",
        type: "تاللاشلاش",
        description: "ئالىي مائارىپقا تەييارلىق ۋە كەسپىي يۆنىلىش",
        tracks: [
          {
            name: "ئىلىم-پەن تۈرى (العلمي)",
            percentage: "40%",
            focus: "ئالىي مائارىپقا تەييارلىق",
            subjects: ["ماتېماتىكا", "فىزىكا", "خىمىيە", "بىئولوگىيە"]
          },
          {
            name: "ئەدەبىيات تۈرى (الأدبي)",
            percentage: "35%",
            focus: "ھۇمانىتار پەنلىرى",
            subjects: ["ئەرەب ئەدەبىياتى", "تارىخ", "جۇغراپىيە", "دىن"]
          },
          {
            name: "كەسپىي تۈر (المهني)",
            percentage: "25%",
            focus: "خىزمەت بىلىملىرى",
            subjects: ["مۇھەندىسلىك", "تىجارەت", "كومپيۇتېر", "سانائەت"]
          }
        ],
        exams: [
          {
            name: "ثانوية عامة (تامام ئوتتۇرا مائارىپ ئىمتىھانى)",
            purpose: "ئالىي مائارىپقا كىرىش ئاساسى",
            importance: "ئەڭ مۇھىم مىللىي ئىمتىھان"
          }
        ],
        uniqueFeatures: [
          "دىنىي ۋە دىنىي بولمىغان پەنلەر بىرلەشمىسى",
          "مەدرىسە سىستېمىسى بىلەن بىرلەشمە",
          "ئىسلام بىلىملىرىنىڭ زۆرۈرلىكى",
          "خەلقئارالىق دىپلوم پروگراممىلىرى"
        ],
        color: "from-purple-500 to-violet-500"
      },
      {
        name: "ئالىي مائارىپ",
        arabicName: "التعليم الجامعي",
        duration: "4-6 يىل",
        age: "18+ ياش",
        type: "تاللاشلاش",
        description: "ئىختىساسلاشقان ئىلمىي بىلىم ۋە دىنىي تەتقىقات",
        degrees: [
          {
            level: "باشلانغۇچ (البكالوريوس)",
            duration: "4 يىل",
            focus: "ئاساسىي ئىختىساسلىق بىلىم"
          },
          {
            level: "ماگىستىر (الماجستير)",
            duration: "2 يىل",
            focus: "ئىختىساسلاشقان تەتقىقات"
          },
          {
            level: "دوكتۇر (الدكتوراه)",
            duration: "3-5 يىل",
            focus: "ئىلمىي تەتقىقات ۋە دىنىي تەتقىقات"
          }
        ],
        universityTypes: [
          {
            type: "دىنىي ئۇنۋېرسىتېتلار",
            examples: ["ئەل ئەزھەر ئۇنىۋېرسىتېتى", "ئىسلام ئۇنىۋېرسىتېتى"],
            features: ["دىنىي بىلىملەر ئاساسى", "ئىسلام قانۇنلىرى", "قۇرئان ئىلمى"]
          },
          {
            type: "ئۇمۇميۈزلۈك ئۇنۋېرسىتېتلار",
            examples: ["قاھىرە ئۇنىۋېرسىتېتى", "بەيرۇت ئۇنىۋېرسىتېتى"],
            features: ["دىنىي ۋە دىنىي بولمىغان پەنلەر", "خەلقئارالىق پروگراممىلار", "ئىلمىي تەتقىقات"]
          },
          {
            type: "تېخنىكىلىق ئۇنۋېرسىتېتلار",
            examples: ["شاھىد سەتتام ئۇنىۋېرسىتېتى", "خەلىج تېخنىكا ئۇنىۋېرسىتېتى"],
            features: ["تېخنىكىلىق ئىختىساسلار", "STEM مائارىپى", "سەنائەت بىلەن ھەمكارلىشىش"]
          }
        ],
        uniqueFeatures: [
          "دىنىي ۋە ئىلمىي بىلىملەر بىرلەشمىسى",
          "مەدرىسە ۋە ئۇنۋېرسىتېت سىستېمىسى",
          "ئەرەب تىلىدا ئوقۇتۇش",
          "خەلقئارالىق ئالماشتۇرۇش پروگراممىلىرى"
        ],
        color: "from-amber-500 to-yellow-500"
      }
    ],
    keyPrinciples: [
      {
        title: "دىن ۋە مائارىپ بىرلىكى",
        icon: <Church className="w-5 h-5" />,
        description: "ئىسلام دىنى بىلەن ئىلىم-پەننى بىرلەشتۈرۈش",
        examples: ["قۇرئان ۋە سۈننەت", "ئىسلام ئەخلاقى", "دىنىي ۋە دىنىي بولمىغان بىلىملەر"]
      },
      {
        title: "تىل ۋە مەدەنىيەت",
        icon: <Languages className="w-5 h-5" />,
        description: "ئەرەب تىلى ۋە مەدەنىيىتىنى قوغداش",
        examples: ["ئەرەب يېزىقى ۋە ئەدەبىياتى", "ئەرەب مەدەنىيىتى", "ئىسلام تارىخى"]
      },
      {
        title: "جەمئىيەت ۋە ئائىلە",
        icon: <Users2 className="w-5 h-5" />,
        description: "جەمئىيەت ۋە ئائىلە مائارىپى",
        examples: ["ئائىلە قىممەتلىرى", "جەمئىيەت مەسئۇلىيىتى", "ئىجتىمائىي ھەمكارلىق"]
      },
      {
        title: "زامانىۋىلىشىش ۋە ئەنئەنە",
        icon: <Scale className="w-5 h-5" />,
        description: "زامانىۋى بىلىملەر بىلەن ئەنئەنىۋى قىممەتلەرنى تەڭشەش",
        examples: ["STEM مائارىپى", "خەلقئارالىق ئۆلچەم", "ئەنئەنىۋى قىممەتلەر"]
      }
    ],
    uniqueAspects: [
      {
        title: "دىنىي مائارىپ سىستېمىسى",
        icon: <BookMarked className="w-5 h-5" />,
        aspects: [
          "قۇرئان ھېپسىز ئېتىش (الحفظ)",
          "تەجۋىد ۋە قىرائەت",
          "ئىسلام قانۇنلىرى (الفقه)",
          "ھەدىس ئىلمى (الحديث)"
        ]
      },
      {
        title: "مەدرىسە ۋە مائارىپ",
        icon: <Church className="w-5 h-5" />,
        aspects: [
          "مەسچىت مائارىپى (الكتاتيب)",
          "مەدرىسە سىستېمىسى",
          "ئىسلام ئۇنۋېرسىتېتلىرى",
          "دىنىي ئوقۇتقۇچىلار (المشايخ)"
        ]
      },
      {
        title: "تىل ۋە يېزىق مائارىپى",
        icon: <PenTool className="w-5 h-5" />,
        aspects: [
          "ئەرەب يېزىقىنى مۇكەممەل ئۆگىنىش",
          "قۇرئان تىلى (العربية الفصحى)",
          "ئەرەب ئەدەبىياتى",
          "ئەرەب شېئىرىيىتى"
        ]
      },
      {
        title: "زامانىۋى مائارىپ تەرەققىياتى",
        icon: <Cpu className="w-5 h-5" />,
        aspects: [
          "STEM مائارىپى",
          "دىجىتال مائارىپ",
          "خەلقئارالىق مائارىپ پروگراممىلىرى",
          "ئىنگلىز تىلى ئوقۇتۇش"
        ]
      }
    ]
  };

  const countryComparison = [
    {
      country: "سەئۇدى ئەرەبىستان",
      features: ["قاتتىق دىنىي مائارىپ", "ئەل ئەزھەر تەسىرى", "ئايال-ئەرلەر ئايرىم ئوقۇش"],
      modernizations: ["ۋىزيۆن 2030", "STEM مائارىپى", "خەلقئارالىق ئۇنۋېرسىتېتلار"]
    },
    {
      country: "بىرلەشكەن ئەرەب ئەمىرلىكلىرى",
      features: ["زامانىۋى مائارىپ", "خەلقئارالىق مائارىپ", "ئىنگلىز تىلى ئەھمىيىتى"],
      modernizations: ["ئەل مەكتۇم فوندى", "خەلىج تېخنىكا ئۇنىۋېرسىتېتى", "يۇقىرى تېخنىكا مائارىپى"]
    },
    {
      country: "مىسىر",
      features: ["قەدىمىي مائارىپ سىستېمىسى", "ئەل ئەزھەر مائارىپى", "كۆپ تىللىق مائارىپ"],
      modernizations: ["دىجىتال مائارىپ", "خەلقئارالىق ئالماشتۇرۇش", "ئىلمىي تەرەققىيات"]
    },
    {
      country: "قاتار",
      features: ["زامانىۋى ئىنىۋېستىسىيە", "خەلقئارالىق ئۇنۋېرسىتېتلار", "ئىلمىي تەتقىقات"],
      modernizations: ["قاتار فوندى", "يۇقىرى تېخنىكا مائارىپى", "خەلقئارالىق ھەمكارلىق"]
    }
  ];

  const statistics = [
    { label: "باشلانغۇچ مائارىپ كىرىش نىسبىتى", value: "94.3%", color: "text-green-600" },
    { label: "تولۇق ئوتتۇرا مائارىپ كىرىش نىسبىتى", value: "76.8%", color: "text-blue-600" },
    { label: "ئالىي مائارىپ كىرىش نىسبىتى", value: "38.5%", color: "text-purple-600" },
    { label: "ئەرەب تىلى مائارىپ ئورنى", value: "99.2%", color: "text-amber-600" },
    { label: "دىنىي مائارىپ قاتنىشىشى", value: "87.6%", color: "text-emerald-600" },
    { label: "ئايال ئوقۇغۇچى نىسبىتى", value: "52.4%", color: "text-pink-600" }
  ];

  const challengesAndOpportunities = [
    {
      type: "چەتلىكلەر",
      items: [
        "ئايال مائارىپىدىكى چەكلىمىلەر",
        "دىنىي ۋە دىنىي بولمىغان بىلىملەر تەڭشىكى",
        "زامانىۋى تېخنىكىلارنىڭ يېتىشمەسلىكى",
        "ئىقتىسادىي پەرق ۋە مائارىپ سەۋىيىسى"
      ]
    },
    {
      type: "پۇرسەتلەر",
      items: [
        "دىجىتال مائارىپ ۋە تور ئوقۇتۇش",
        "خەلقئارالىق ھەمكارلىق ۋە پروگراممىلار",
        "ئىسلام مائارىپىنى خەلقئارالىقلاشتۇرۇش",
        "زامانىۋى STEM مائارىپىنى كەڭ قوللىنىش"
      ]
    }
  ];

  return (
    <div className="space-y-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif]" dir="rtl">
      {/* ماۋزۇ باش بەلگىسى */}
      <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white shadow-md">
              <Church className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-green-900 mb-1">ئەرەب مائارىپ سىستېمىسى</h1>
              <p className="text-green-700 text-lg">
                دىنىي بىلىم بىلەن زامانىۋى ئىلىمنى بىرلەشتۈرگەن مائارىپ سىستېمىسى
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSection('structure')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'structure' ? 'bg-green-600 text-white shadow-md' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
            >
              <Layers className="w-4 h-4" />
              قۇرۇلما
            </button>
            <button
              onClick={() => setActiveSection('principles')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'principles' ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}
            >
              <BookMarked className="w-4 h-4" />
              پرىنسىپلار
            </button>
            <button
              onClick={() => setActiveSection('countries')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'countries' ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
            >
              <Globe className="w-4 h-4" />
              دۆلەتلەر
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
              <Layers className="w-6 h-6 text-green-600" />
              {educationSystem.name} - مائارىپ سىستېمىسى قۇرۇلمىسى
            </h2>
            
            {/* مائارىپ باسقۇچلىرى كۆرسىتىمى */}
            <div className="relative mb-8">
              <div className="flex flex-col lg:flex-row items-stretch gap-6">
                {educationSystem.levels.map((level, index) => (
                  <div key={index} className="flex-1">
                    <div className={`bg-gradient-to-r ${level.color} text-white rounded-xl p-5 h-full shadow-md`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          {index === 0 && <BookOpen className="w-6 h-6" />}
                          {index === 1 && <GraduationCap className="w-6 h-6" />}
                          {index === 2 && <School className="w-6 h-6" />}
                          {index === 3 && <Church className="w-6 h-6" />}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{level.name}</h3>
                          <p className="text-white/90 text-sm">{level.arabicName}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{level.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
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
                        
                        {level.degrees && (
                          <div>
                            <div className="text-sm font-medium mb-1">دەرىجىلەر:</div>
                            <div className="space-y-1">
                              {level.degrees.map((degree, idx) => (
                                <div key={idx} className="text-xs flex justify-between">
                                  <span>{degree.level}</span>
                                  <span>{degree.duration}</span>
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
            
            {/* تەپسىلىي مەلۇماتلار */}
            <div className="grid md:grid-cols-2 gap-6">
              {educationSystem.levels.map((level, index) => (
                <div key={index} className={`border-l-4 ${index === 0 ? 'border-green-400' : index === 1 ? 'border-blue-400' : index === 2 ? 'border-purple-400' : 'border-amber-400'} pl-4 py-2`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800">{level.name}</h3>
                      <p className="text-sm text-gray-600">{level.arabicName}</p>
                    </div>
                    <span className="text-sm font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {level.duration}
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
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border">
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
                  
                  {level.universityTypes && (
                    <div className="mt-3">
                      <h4 className="font-medium text-gray-700 mb-1">ئالىي مائارىپ تۈرلىرى:</h4>
                      {level.universityTypes.map((type, idx) => (
                        <div key={idx} className="mb-2 last:mb-0">
                          <div className="font-medium text-gray-700">{type.type}</div>
                          <div className="text-xs text-gray-600 mb-1">
                            مەسىلەن: {type.examples.join('، ')}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {type.features.map((feature, fIdx) => (
                              <span key={fIdx} className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
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

      {/* پرىنسىپلار ۋە ئالاھىدىلىكلەر */}
      {activeSection === 'principles' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BookMarked className="w-6 h-6 text-emerald-600" />
              ئەرەب مائارىپىنىڭ ئاساسىي پرىنسىپلىرى
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {educationSystem.keyPrinciples.map((principle, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-800 text-lg">{principle.title}</h3>
                      <p className="text-emerald-700 text-sm">{principle.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <h4 className="font-medium text-gray-700 mb-2">مىساللار:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {principle.examples.map((example, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-2 text-center border">
                          <div className="text-sm text-gray-800">{example}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* ئالاھىدە ئالاھىدىلىكلەر */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-600" />
              ئەرەب مائارىپىنىڭ ئالاھىدە ئالاھىدىلىكلىرى
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationSystem.uniqueAspects.map((aspect, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg text-white">
                      {aspect.icon}
                    </div>
                    <h3 className="font-bold text-gray-800">{aspect.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {aspect.aspects.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* دىنىي مائارىپ سىستېمىسى */}
            <div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <Church className="w-5 h-5" />
                دىنىي مائارىپ سىستېمىسى
              </h3>
              
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { 
                    level: "كەتتاب (الكتاتيب)", 
                    description: "مەسچىت مائارىپى",
                    age: "4-7 ياش",
                    focus: "قۇرئان ھېپسىز ئېتىش"
                  },
                  { 
                    level: "مەدرىسە (المدرسة)", 
                    description: "ئاساسىي دىنىي مائارىپ",
                    age: "7-15 ياش",
                    focus: "دىنىي بىلىملەر"
                  },
                  { 
                    level: "جامىئە (الجامعة)", 
                    description: "يۇقىرى دىنىي مائارىپ",
                    age: "15+ ياش",
                    focus: "ئىسلام قانۇنلىرى"
                  },
                  { 
                    level: "دارۇلھەدىس (دار الحديث)", 
                    description: "ئىختىساسلاشقان دىنىي مائارىپ",
                    age: "18+ ياش",
                    focus: "ھەدىس ئىلمى"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-emerald-100 shadow-sm">
                    <div className="font-bold text-emerald-800 text-center mb-2">{item.level}</div>
                    <div className="text-sm text-gray-600 text-center mb-2">{item.description}</div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>يېشى: {item.age}</span>
                      <span>{item.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* دۆلەتلەر ۋە رايونلار */}
      {activeSection === 'countries' && (
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-600" />
              ئەرەب دۆلەتلىرىدىكى مائارىپ سىستېمىلىرى
            </h2>
            
            {/* رايونلار */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {educationSystem.regions.map((region, index) => (
                <div key={index} className={`bg-gradient-to-r ${region.color} text-white rounded-xl p-5 shadow-md`}>
                  <h3 className="font-bold text-lg mb-3">{region.name}</h3>
                  <div className="mb-3">
                    <div className="text-sm opacity-90">دۆلەتلەر:</div>
                    <div className="text-sm">{region.countries.join('، ')}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">ئالاھىدىلىكلەر:</div>
                    <ul className="text-sm space-y-1">
                      {region.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <div className="w-2 h-2 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* دۆلەتلەر سېلىشتۇرمىسى */}
            <div className="space-y-6">
              {countryComparison.map((country, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 border-b">
                    <h3 className="font-bold text-lg text-blue-800">{country.country}</h3>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-4 border-l">
                      <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        ئەنئەنىۋى ئالاھىدىلىكلەر:
                      </h4>
                      <ul className="space-y-2">
                        {country.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        زامانىۋىلىشىش:
                      </h4>
                      <ul className="space-y-2">
                        {country.modernizations.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
          
          {/* چەتلىكلەر ۋە پۇرسەتلەر */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                چەتلىكلەر ۋە مەسىلىلەر
              </h3>
              
              <div className="space-y-3">
                {challengesAndOpportunities[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="p-1 bg-red-100 rounded">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-red-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-green-600" />
                پۇرسەتلەر ۋە كەلگۈسى يۆنىلىش
              </h3>
              
              <div className="space-y-3">
                {challengesAndOpportunities[1].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="p-1 bg-green-100 rounded">
                      <Lightbulb className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-green-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* خۇلاسە ۋە كەلگۈسى */}
      <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-6 border border-gray-300 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          ئەرەب مائارىپىنىڭ كەلگۈسى ۋە يۆنىلىشى
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-700 mb-3">كەلگۈسىدىكى ئىسلاھاتلار:</h4>
            <div className="space-y-2">
              {[
                "دىجىتال مائارىپ ۋە تور ئوقۇتۇشنى كەڭ قوللىنىش",
                "ئايال مائارىپىنى كېڭەيتىش ۋە ياخشىلاش",
                "زامانىۋى STEM مائارىپىنى كەڭ قوللىنىش",
                "خەلقئارالىق ھەمكارلىق ۋە ئالماشتۇرۇشنى كۈچەيتىش",
                "دىنىي ۋە دىنىي بولمىغان بىلىملەر تەڭشىكى",
                "ئىسلام مائارىپىنى خەلقئارالىقلاشتۇرۇش"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-3">ئەرەب مائارىپىدىكى مۇھىم سۆزلەر:</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { arabic: "العلم", meaning: "بىلىم" },
                { arabic: "التعليم", meaning: "مائارىپ" },
                { arabic: "الأخلاق", meaning: "ئەخلاق" },
                { arabic: "التربية", meaning: "تەربىيە" },
                { arabic: "المعرفة", meaning: "مەرىپەت" },
                { arabic: "الحكمة", meaning: "ھېكمەت" },
                { arabic: "الإجتهاد", meaning: "تىرىشچانلىق" },
                { arabic: "الإتقان", meaning: "مۇكەممەللىك" }
              ].map((word, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 text-center border shadow-sm">
                  <div className="font-bold text-lg text-emerald-700">{word.arabic}</div>
                  <div className="text-sm text-gray-600">{word.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* مۇھىم ئۇنۋېرسىتېتلار */}
        <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">مۇھىم ئەرەب ئۇنۋېرسىتېتلىرى:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "ئەل ئەزھەر", location: "مىسىر", founded: "970 يىلى", type: "دىنىي" },
              { name: "قاھىرە ئۇنىۋېرسىتېتى", location: "مىسىر", founded: "1908 يىلى", type: "ئۇمۇميۈزلۈك" },
              { name: "شاھىد سەتتام", location: "سەئۇدىيە", founded: "2009 يىلى", type: "تېخنىكىلىق" },
              { name: "بەيرۇت ئۇنىۋېرسىتېتى", location: "لۇبنان", founded: "1866 يىلى", type: "ئۇمۇميۈزلۈك" }
            ].map((uni, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border">
                <div className="font-bold text-amber-800">{uni.name}</div>
                <div className="text-xs text-gray-600">{uni.location} • {uni.founded}</div>
                <div className="text-xs text-amber-600 mt-1">{uni.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArabEduModule;