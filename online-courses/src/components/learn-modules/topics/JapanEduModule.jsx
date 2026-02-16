// src/components/learn-modules/education/JapanEduModule.jsx
import React, { useState } from 'react';
import { 
  School, GraduationCap, Users, TreePine, Brain, Target, 
  Clock, Calendar, Award, Heart, BookOpen, Globe,
  Users2, Shield, Zap, Star, TrendingUp, Book,
  Layers, PieChart, BarChart, LineChart, Coffee,
  Lightbulb, Sparkles, Rocket, Compass, Music,
  Palette, Dumbbell, HeartHandshake, Cloud,
  ArrowRight, CheckCircle, XCircle, AlertCircle,
  Building, Cpu, FlaskConical, Calculator,
  Languages, Home, MapPin, Eye
} from 'lucide-react';

const JapanEduModule = () => {
  const [activeSection, setActiveSection] = useState('structure');
  
  const educationSystem = {
    name: "6-3-3-4 سىستېمىسى",
    levels: [
      {
        name: "باشلانغۇچ مائارىپ",
        uyghurName: "شۆگاكۇ (小学校)",
        duration: "6 يىل",
        age: "6-12 ياش",
        type: "مەجبۇرىي",
        description: "ئاساسىي ئەخلاق ۋە ئىجتىمائىي ئادەت تەربىيەسى",
        curriculum: [
          "ياپون تىلى (国語)",
          "ماتېماتىكا (算数)",
          "جەمئىيەت (社会)",
          "تەبىئەت (理科)",
          "مۇزىكا (音楽)",
          "سەنئەت (図工)",
          "جىسمانىي تەربىيە (体育)",
          "ئەخلاق ۋە ھايات (道徳)"
        ],
        uniqueFeatures: [
          "ئۆزىنى ئۆزى باشقۇرۇش (مەكتەپ ئىشلىرى)",
          "ئورتاق تازىلاش (سووجي)",
          "ھەمكارلىق ۋە جەمئىيەتچىلىك",
          "مەكتەپ مۇھىتىغا ماسلىشىش"
        ],
        color: "from-pink-500 to-rose-500"
      },
      {
        name: "تولۇقسىز ئوتتۇرا مائارىپ",
        uyghurName: "چۇگاكۇ (中学校)",
        duration: "3 يىل",
        age: "12-15 ياش",
        type: "مەجبۇرىي",
        description: "ئاساسىي پەنلەرنى چوڭقۇرلاشتۇرۇش ۋە كەسپىي يۆنىلىش",
        curriculum: [
          "ياپون تىلى ۋە ئەدەبىياتى",
          "ماتېماتىكا (代数، ھېسابلاش)",
          "ئىنگلىز تىلى (英语)",
          "تارىخ ۋە جۇغراپىيە",
          "فىزىكا، خىمىيە، بىئولوگىيە",
          "سەنئەت ۋە مۇزىكا",
          "تېخنىكا ۋە ئۇيۇن ياساش (技术)",
          "جىسمانىي تەربىيە ۋە ساغلاملىق"
        ],
        exams: [
          {
            name: "باشلانغۇچ پۈتتۈرۈش ئىمتىھانى",
            purpose: "تولۇق ئوتتۇرا مائارىپقا كىرىش"
          }
        ],
        uniqueFeatures: [
          "كۇرۇلۇش باشقۇرۇش (كايتۆ)",
          "كۇلۇپ ۋە ئۇنۇفورمىلار",
          "كەسپىي مەشق-تەربىيە",
          "جەمئىيەت خىزمىتى"
        ],
        color: "from-purple-500 to-violet-500"
      },
      {
        name: "تولۇق ئوتتۇرا مائارىپ",
        uyghurName: "كوتۆگاكۇ (高等学校)",
        duration: "3 يىل",
        age: "15-18 ياش",
        type: "تاللاشلاش",
        description: "يۇقىرى مائارىپقا تەييارلىق ۋە ئىجتىمائىي تەرەققىيات",
        tracks: [
          {
            name: "ئادەتتىك ئوقۇش",
            percentage: "70%",
            focus: "ئالىي مائارىپقا تەييارلىق",
            subjects: ["ئىلىم-پەن", "ئەدەبىيات", "تىللار"]
          },
          {
            name: "كەسپىي-تېخنىكا",
            percentage: "20%",
            focus: "خىزمەت بىلىملىرى",
            subjects: ["ماشىناسازلىق", "كومپيۇتېر", "تىجارەت"]
          },
          {
            name: "ئالاھىدە مائارىپ",
            percentage: "10%",
            focus: "ئالاھىدە ئىقتىدارلار",
            subjects: ["سەنئەت", "مۇزىكا", "سپورت"]
          }
        ],
        exams: [
          {
            name: "جاۋۇنېن (大学入学共通テスト)",
            purpose: "ئالىي مائارىپقا كىرىش ئاساسى",
            importance: "ئەڭ مۇھىم مىللىي ئىمتىھان"
          }
        ],
        uniqueFeatures: [
          "مەكتەپ ئۇنىفورمىسى",
          "كۇلۇپ ۋە مەكتەپ باشقۇرۇش",
          "مەكتەپ پائالىيەتلىرى (بوكتۆ)",
          "يۇقىرى مائارىپكە تەييارلىق"
        ],
        color: "from-blue-500 to-cyan-500"
      },
      {
        name: "ئالىي مائارىپ",
        uyghurName: "دايگاكۇ (大学)",
        duration: "4 يىل",
        age: "18+ ياش",
        type: "تاللاشلاش",
        description: "ئىختىساسلاشقان ئىلمىي بىلىم ۋە تەتقىقات",
        degrees: [
          {
            level: "باشلانغۇچ (گاكۇشى)",
            duration: "4 يىل",
            focus: "ئاساسىي ئىختىساسلىق بىلىم"
          },
          {
            level: "ماگىستىر (شۇشى)",
            duration: "2 يىل",
            focus: "ئىختىساسلاشقان تەتقىقات"
          },
          {
            level: "دوكتۇر (ھاكۇشى)",
            duration: "3-5 يىل",
            focus: "ئىلمىي تەتقىقات ۋە يېڭىلىق"
          }
        ],
        universityTypes: [
          {
            type: "دۆلەت ئۇنۋېرسىتېتلىرى",
            examples: ["توكيو ئۇنىۋېرسىتېتى", "كىيوتو ئۇنىۋېرسىتېتى"],
            features: ["يۇقىرى ئىلمىي سەۋىيە", "دۆلەت مالىيىلىشى"]
          },
          {
            type: "شەخسىي ئۇنۋېرسىتېتلار",
            examples: ["ۋاسېدا ئۇنىۋېرسىتېتى", "كىئو ئۇنىۋېرسىتېتى"],
            features: ["ئالاھىدە ئىختىساسلار", "بازارغا ماسلىشىش"]
          },
          {
            type: "پەن-تېخنىكا ئىنستىتۇتلىرى",
            examples: ["توكيو تېخنىكا ئىنستىتۇتى"],
            features: ["تېخنىكىلىق ئىختىساسلار", "ئەمەلىي مەشغۇلات"]
          }
        ],
        uniqueFeatures: [
          "كەسپىي تەشكىللەر (سېمپاي)",
          "ئىلمىي تەتقىقات گۇرۇپپىلىرى",
          "خەلقئارالىق ئالماشتۇرۇش پروگراممىلىرى",
          "شىركەتلەر بىلەن ھەمكارلىشىش"
        ],
        color: "from-green-500 to-emerald-500"
      }
    ],
    keyPrinciples: [
      {
        title: "ھەمكارلىق ۋە جەمئىيەتچىلىك",
        icon: <Users2 className="w-5 h-5" />,
        description: "ئۆز-ئارا ياردەم ۋە جەمئىيەت پائالىيەتلىرى",
        examples: ["گۇرۇپپا خىزمىتى", "مەكتەپ تازىلاش", "بىرگە ئوقۇش"]
      },
      {
        title: "مەسئۇلىيەت ۋە ئۆزلۈكىدىن",
        icon: <Shield className="w-5 h-5" />,
        description: "ئۆز ئىشىنى ئۆزى قىلىش ۋە جاۋابكارلىق",
        examples: ["مەكتەپ ئىشلىرى", "كۇلۇپ باشقۇرۇش", "ئۆز-ئۆزىنى تەرتىپلەش"]
      },
      {
        title: "تەن ۋە روھ تەربىيەسى",
        icon: <Heart className="w-5 h-5" />,
        description: "جىسمانىي ۋە روھىي ساغلاملىقنى تەرەققىي قىلدۇرۇش",
        examples: ["كۇلۇپ پائالىيەتلىرى", "تەبىئەت ساياھىتى", "مەدىتاتسىيە"]
      },
      {
        title: "مۇسابىقە ۋە تىرىشچانلىق",
        icon: <Target className="w-5 h-5" />,
        description: "يۇقىرى مەقسەتلەرگە ئېرىشىش ئۈچۈن تىرىشىش",
        examples: ["جاۋۇنېن ئىمتىھانى", "مەكتەپ مۇسابىقىلىرى", "ئاكادېمىك نەتىجە"]
      }
    ],
    uniqueAspects: [
      {
        title: "مەكتەپ ھاياتى",
        icon: <School className="w-5 h-5" />,
        aspects: [
          "مەكتەپ تازىلاش (سووجي)",
          "ئورتاق يەمەك (كيوۋاشوكۇ)",
          "مەكتەپ پائالىيەتلىرى (بوكتۆ)",
          "مەكتەپ سەپەرلىرى (شۇگاكۇ ريوكۆ)"
        ]
      },
      {
        title: "ئەخلاق ۋە ئادەت",
        icon: <HeartHandshake className="w-5 h-5" />,
        aspects: [
          "ئادەپ ۋە ھۆرمەت (ئاچى)",
          "ۋاقىت بىلەن بولۇش",
          "تازا-پاكىزلىق",
          "جەمئىيەت پائالىيەتلىرى"
        ]
      },
      {
        title: "ئوقۇتۇش ئۇسۇلى",
        icon: <Lightbulb className="w-5 h-5" />,
        aspects: [
          "گۇرۇپپا ئىشلىرى",
          "ئەمەلىي تەجرىبە",
          "ئۆز-ئۆزىنى ئۆگىنىش",
          "مۇھىم قائىدىلەر"
        ]
      },
      {
        title: "مائارىپ تېخنىكىسى",
        icon: <Cpu className="w-5 h-5" />,
        aspects: [
          "دىجىتال ئوقۇتۇش قوراللىرى",
          "روبوت تېخنىكىسى",
          "ئىنتېرنېت ئارقىلىق ئوقۇتۇش",
          "ياپۇن تېخنىكىسىنى ئوقۇتۇش"
        ]
      }
    ]
  };

  const comparisonWithOthers = [
    {
      country: "خەنزۇ مائارىپى",
      similarities: ["قاتتىق ئىمتىھان سىستېمىسى", "قاتتىق تەربىيە", "يۇقىرى ئاكادېمىك تەلەپ"],
      differences: ["خەنزۇ مائارىپىدا مۇسابىقىلىق كۈچلۈك، ياپون مائارىپىدا ھەمكارلىق كۈچلۈك", "ياپوندا ئەخلاق ۋە جەمئىيەتچىلىككە ئەھمىيەت بېرىلىدۇ"]
    },
    {
      country: "ئامېرىكا مائارىپى",
      similarities: ["يۇقىرى مائارىپتىكى ئىلمىي ئەركىنلىك", "ياراتقۇچىلىققا بولغان ئەھمىيەت"],
      differences: ["ئامېرىكا مائارىپىدا شەخسىيلىك ۋە ئىجادچانلىق كۈچلۈك، ياپون مائارىپىدا جەمئىيەتچىلىك ۋە قائىدىلەر كۈچلۈك"]
    },
    {
      country: "ئۇيغۇر مائارىپى",
      similarities: ["ئائىلە ۋە جەمئىيەتنىڭ تەسىرى", "مەدەنىيەت ۋە ئەخلاققا بولغان دىققەت"],
      differences: ["ئۇيغۇر مائارىپىدا ئانا تىل ۋە دىن مۇھىم رول ئوينايدۇ، ياپون مائارىپىدا مەدەنىيەت ۋە جەمئىيەت قائىدىلىرى كۈچلۈك"]
    }
  ];

  const statistics = [
    { label: "باشلانغۇچ مائارىپ كىرىش نىسبىتى", value: "99.9%", color: "text-pink-600" },
    { label: "تولۇق ئوتتۇرا مائارىپ كىرىش نىسبىتى", value: "98.8%", color: "text-purple-600" },
    { label: "ئالىي مائارىپ كىرىش نىسبىتى", value: "54.6%", color: "text-blue-600" },
    { label: "مائارىپ خىراجىتى (GDP نىڭ%)", value: "3.2%", color: "text-green-600" },
    { label: "ئوقۇتقۇچى-ئوقۇغۇچى نىسبىتى", value: "1:16", color: "text-amber-600" },
    { label: "مائارىپ ئورنى سانى", value: "38,000+", color: "text-red-600" }
  ];

  return (
    <div className="space-y-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif]" dir="rtl">
      {/* ماۋزۇ باش بەلگىسى */}
      <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-100 rounded-2xl p-6 border border-pink-200 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl text-white shadow-md">
              <School className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-pink-900 mb-1">ياپون مائارىپ سىستېمىسى</h1>
              <p className="text-pink-700 text-lg">
                6-3-3-4 سىستېمىسى: ھەمكارلىق، مەسئۇلىيەت ۋە تىزگىنگە ئاساسلانغان
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSection('structure')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'structure' ? 'bg-pink-600 text-white shadow-md' : 'bg-pink-100 text-pink-800 hover:bg-pink-200'}`}
            >
              <Layers className="w-4 h-4" />
              قۇرۇلما
            </button>
            <button
              onClick={() => setActiveSection('principles')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'principles' ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
            >
              <Heart className="w-4 h-4" />
              پرىنسىپلار
            </button>
            <button
              onClick={() => setActiveSection('comparison')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeSection === 'comparison' ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
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
              <Layers className="w-6 h-6 text-pink-600" />
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
                          {index === 0 && <Heart className="w-6 h-6" />}
                          {index === 1 && <BookOpen className="w-6 h-6" />}
                          {index === 2 && <School className="w-6 h-6" />}
                          {index === 3 && <GraduationCap className="w-6 h-6" />}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{level.name}</h3>
                          <p className="text-white/90 text-sm">{level.uyghurName}</p>
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
                <div key={index} className={`border-l-4 ${index === 0 ? 'border-pink-400' : index === 1 ? 'border-purple-400' : index === 2 ? 'border-blue-400' : 'border-green-400'} pl-4 py-2`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800">{level.name}</h3>
                      <p className="text-sm text-gray-600">{level.uyghurName}</p>
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
                              <span key={fIdx} className="px-1.5 py-0.5 bg-green-100 text-green-800 text-xs rounded">
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
              <Heart className="w-6 h-6 text-purple-600" />
              ياپون مائارىپىنىڭ ئاساسىي پرىنسىپلىرى
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {educationSystem.keyPrinciples.map((principle, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-800 text-lg">{principle.title}</h3>
                      <p className="text-purple-700 text-sm">{principle.description}</p>
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
              ياپون مائارىپىنىڭ ئالاھىدە ئالاھىدىلىكلىرى
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
            
            {/* مەكتەپ ھاياتى كۆرسىتىمى */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                مەكتەپ ھاياتىدىكى ئالاھىدە پائالىيەتلەر
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { activity: "مەكتەپ تازىلاش", time: "كۈندىلىك", purpose: "مەسئۇلىيەت ۋە پاكىزلىق" },
                  { activity: "يەمەك تارقىتىش", time: "تۇشلۇق", purpose: "ھەمكارلىق ۋە ئورتاقلىق" },
                  { activity: "كۇلۇپ پائالىيەتلىرى", time: "ئاخشامى", purpose: "ھەمكارلىق ۋە ئىجادچانلىق" },
                  { activity: "مەكتەپ سەپەرلىرى", time: "يىلىغا بىر قېتىم", purpose: "تەبىئەت ۋە جەمئىيەت" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                    <div className="font-bold text-blue-800 text-center mb-2">{item.activity}</div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>ۋاقتى: {item.time}</span>
                      <span>{item.purpose}</span>
                    </div>
                  </div>
                ))}
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
              <Globe className="w-6 h-6 text-blue-600" />
              باشقا مائارىپ سىستېمىلىرى بىلەن سېلىشتۇرما
            </h2>
            
            <div className="space-y-6">
              {comparisonWithOthers.map((comparison, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 border-b">
                    <h3 className="font-bold text-lg text-blue-800">{comparison.country} بىلەن سېلىشتۇرما</h3>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-4 border-l">
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
                        <XCircle className="w-4 h-4" />
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
          
          {/* ياپون مائارىپىنىڭ كۈچلۈك تەرەپلىرى */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                ياپون مائارىپىنىڭ كۈچلۈك تەرەپلىرى
              </h3>
              
              <div className="space-y-3">
                {[
                  "يۇقىرى ساۋاتلىقلىق نىسبىتى (نىڭ% 99)",
                  "ئەخلاق ۋە جەمئىيەتچىلىك تەربىيەسى",
                  "ھەمكارلىق ۋە گۇرۇپپا خىزمىتى",
                  "ۋاقىت بىلەن بولۇش ۋە تىزگىن",
                  "ئۆز-ئۆزىنى باشقۇرۇش قابىلىيىتى",
                  "جەمئىيەتكە بولغان مەسئۇلىيەت"
                ].map((item, idx) => (
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
                <AlertCircle className="w-5 h-5 text-amber-600" />
                ياپون مائارىپىدىكى چەتلىكلەر
              </h3>
              
              <div className="space-y-3">
                {[
                  "قاتتىق مۇسابىقىلىك (جاۋۇنېن ئىمتىھانى)",
                  "روھىي بېسىم ۋە ئېچىنىش",
                  "ئىجادچانلىق ۋە تەنقىدىي ئويلىنىشنى چەكلەش",
                  "ئايرىم ئوقۇغۇچىلارغا بولغان دىققەتنىڭ چەكلىمىسى",
                  "قائىدە ۋە تىزگىننىڭ كەڭ قوللىنىشى",
                  "شەخسىي پىكىر ئىپادىلەشنىڭ چەكلىمىسى"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="p-1 bg-amber-100 rounded">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-amber-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* خۇلاسە ۋە كەلگۈسى */}
      <div className="bg-gradient-to-r from-gray-50 to-pink-50 rounded-2xl p-6 border border-gray-300 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-pink-500" />
          ياپون مائارىپىنىڭ كەلگۈسى ۋە يۆنىلىشى
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-700 mb-3">كەلگۈسىدىكى ئىسلاھاتلار:</h4>
            <div className="space-y-2">
              {[
                "دىجىتال مائارىپنى كەڭ قوللىنىش",
                "خەلقئارالىق ئالماشتۇرۇشنى كېڭەيتىش",
                "ئىجادچانلىق ۋە تەنقىدىي ئويلىنىشنى ئۆستۈرۈش",
                "ھەر بىر ئوقۇغۇچىغا بولغان دىققەتنى كۈچەيتىش",
                "ئىنگلىز تىلى ئوقۇتۇشنى ياخشىلاش",
                "مائارىپ بىلەن ئىقتىسادنى تەڭشەش"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-3">ياپون مائارىپىدىكى مۇھىم سۆزلەر:</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { japanese: "和 (ۋا)", meaning: "ئىناقلىق ۋە ھەمكارلىق" },
                { japanese: "礼 (رېي)", meaning: "ئادەپ ۋە ھۆرمەت" },
                { japanese: "勤 (كىن)", meaning: "تىرىشچانلىق ۋە ئەمەلىيەت" },
                { japanese: "譲 (جۆ)", meaning: "سەۋر ۋە بەخت" },
                { japanese: "絆 (كىزانا)", meaning: "مۇناسىۋەت ۋە باغلىنىش" },
                { japanese: "志 (كوكوروزاشى)", meaning: "مەقسەت ۋە ئىرادە" }
              ].map((word, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 text-center border shadow-sm">
                  <div className="font-bold text-lg text-pink-700">{word.japanese}</div>
                  <div className="text-sm text-gray-600">{word.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapanEduModule;