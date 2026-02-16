// src/components/learn-modules/education/RoboticsEduModule.jsx
import React, { useState } from 'react';
import { 
  Cpu, Code, Layers, Target, Brain, Zap, Rocket,
  Clock, Users, Award, BookOpen, Globe, Wrench,
  CircuitBoard, Cog, Cogs, Tool, Settings, Navigation,
  Eye, Video, BarChart, PieChart, LineChart, Cloud,
  ArrowRight, CheckCircle, XCircle, AlertCircle, Star,
  Building, Calculator, FlaskConical, Database, Box,
  Languages, Home, MapPin, TrendingUp, GraduationCap,
  School, Heart, BrainCircuit, Smartphone, Monitor,
  Server, Compass, Thermometer, Factory, Truck,
  Package, ShoppingCart, Music, Palette, Film,
  CameraIcon, Brain as AiBrain, GitBranch, Share2,
  Users2, MessageSquare, FileCode, Terminal,
  Shield, Battery, Wifi, Satellite, BookMarked,
  TargetIcon, Sparkles, Lightbulb, Puzzle, Trophy 
} from 'lucide-react';

const RoboticsEduModule = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeTrack, setActiveTrack] = useState('programming');
  
  const learningMap = {
    levels: {
      beginner: {
        name: "باشلانغۇچ دەرىجە (6-12 ياش)",
        description: "ئاساسىي روبوت قۇرۇلۇشى ۋە بلوك پروگراممىلاش",
        duration: "1-2 يىل",
        focus: "قۇرۇش ۋە ئاساسىي پروگراممىلاش",
        components: [
          {
            title: "LEGO Mindstorms",
            skills: ["بلوك قۇرۇش", "Drag-and-drop پروگراممىلاش", "ئاساسىي ھەرىكەت"],
            projects: ["كۆچمە روبوت", "يورۇق ئىزدەش", "ئارقاۋۇل ھەرىكەت"]
          },
          {
            title: "Makeblock mBot",
            skills: ["ئاساسىي ئېلېكتىرونىكا", "سېزگۈچلەر", "قۇرۇلما لايىھىلەش"],
            projects: ["ئارقاۋۇل يېتەكچى", "توقۇنۇشنى ساقلىغۇچ", "يورۇق ھەرىكەت"]
          }
        ],
        learningPath: [
          { step: "روبوت قۇرۇلۇشى", duration: "3 ئاي" },
          { step: "بلوك پروگراممىلاش", duration: "3 ئاي" },
          { step: "ئاساسىي سېزگۈچلەر", duration: "3 ئاي" },
          { step: "ئاددىي پروژېكتلار", duration: "3 ئاي" }
        ],
        color: "from-blue-500 to-cyan-500",
        icon: <Puzzle className="w-6 h-6" />
      },
      intermediate: {
        name: "ئوتتۇرا دەرىجە (12-16 ياش)",
        description: "ئىلغار پروگراممىلاش ۋە ئېلېكتىرونىكا",
        duration: "2-3 يىل",
        focus: "تېكىست پروگراممىلاش ۋە سىستېما لايىھىلەش",
        components: [
          {
            title: "Arduino",
            skills: ["C++ پروگراممىلاش", "ئېلېكتىرونىكا تۇيۇش", "سېزگۈچ ۋە ماتور"],
            projects: ["ئاپتوماتىك كۆزىتىش", "ئىقتىدارلىق ئۆي", "ئۇچقۇن كونترول"]
          },
          {
            title: "Raspberry Pi",
            skills: ["Python پروگراممىلاش", "Linux مۇھىتى", "تور پروگراممىلاش"],
            projects: ["سۇنئىي ئەقىل روبوت", "ئىنتېرنېت كۆزىتىش", "ئاۋاز كونترول"]
          }
        ],
        learningPath: [
          { step: "C++/Python ئاساسلىرى", duration: "4 ئاي" },
          { step: "ئېلېكتىرونىكا ئاساسلىرى", duration: "4 ئاي" },
          { step: "سېزگۈچ ۋە ماتورلار", duration: "4 ئاي" },
          { step: "ئىلغار پروژېكتلار", duration: "4 ئاي" }
        ],
        color: "from-purple-500 to-pink-500",
        icon: <Code className="w-6 h-6" />
      },
      advanced: {
        name: "يۇقىرى دەرىجە (16-18+ ياش)",
        description: "ماشىنا ئۆگىنىش ۋە مۇرەككەپ سىستېمىلار",
        duration: "2-4 يىل",
        focus: "AI ۋە مۇرەككەپ كونترول سىستېمىلىرى",
        components: [
          {
            title: "ماشىنا ئۆگىنىش",
            skills: ["يۈز تونۇش", "ئاۋاز كونترول", "دەرىجىلىك ئۆگىنىش"],
            projects: ["ئىنسان-ئوخشاش روبوت", "ئاپتوماتىك ھەرىكەت", "كۆرۈش سىستېمىسى"]
          },
          {
            title: "رېئال-ۋاقىت سىستېمىلار",
            skills: ["ROS (Robot Operating System)", "كونكۇررېنت پروگراممىلاش", "سېنسور كۆرسەتكۈچ"],
            projects: ["ئاپتوماتىك ماشىنا", "توقۇنۇش كۆزىتىش", "ئىشلەپچىقىرىش روبوتى"]
          }
        ],
        learningPath: [
          { step: "ماشىنا ئۆگىنىش ئاساسلىرى", duration: "6 ئاي" },
          { step: "كۆرۈش تېخنىكىسى", duration: "6 ئاي" },
          { step: "ROS ۋە سىستېما لايىھىلەش", duration: "6 ئاي" },
          { step: "كەسپىي پروژېكتلار", duration: "6 ئاي" }
        ],
        color: "from-green-500 to-emerald-500",
        icon: <AiBrain className="w-6 h-6" />
      },
      professional: {
        name: "كەسپىي دەرىجە",
        description: "ئىختىساسلاشقان تەتقىقات ۋە سەنائەت ئەپلەرى",
        duration: "داۋاملىق",
        focus: "ئىختىساسلاشقان سىستېمىلار ۋە تەتقىقات",
        components: [
          {
            title: "ئىنسان-ئوخشاش روبوتلار",
            skills: ["ھەرىكەت پىلانلاش", "سۈنئىي ئەقىل", "تەبىئىي تىل بىر تەرەپ قىلىش"],
            projects: ["يېتەكچى روبوت", "باغۋەن روبوت", "ئوقۇتقۇچى روبوت"]
          },
          {
            title: "سەنائەت ئۆلچەملىرى",
            skills: ["سەنائەت باشقۇرۇش", "كۈتۇپخانە لايىھىلەش", "خەتەرلىك مۇھىت"],
            projects: ["ئاپتوماتىك ئىشلەپچىقىرىش", "توقۇنۇش كۆزىتىش", "سانائەت روبوتى"]
          }
        ],
        learningPath: [
          { step: "ئىختىساسلاشقان كەسپىي بىلىم", duration: "12 ئاي" },
          { step: "سەنائەت ئۆلچەملىرى", duration: "12 ئاي" },
          { step: "تەتقىقات ۋە تەرەققىيات", duration: "12 ئاي" },
          { step: "ئىدارە ۋە باشقۇرۇش", duration: "12 ئاي" }
        ],
        color: "from-amber-500 to-orange-500",
        icon: <GraduationCap className="w-6 h-6" />
      }
    },
    
    learningTracks: {
      programming: {
        name: "پروگراممىلاش",
        icon: <Terminal className="w-5 h-5" />,
        levels: {
          beginner: ["Blockly", "Scratch", "LEGO EV3"],
          intermediate: ["Python", "C++", "Java"],
          advanced: ["ROS", "TensorFlow", "OpenCV"],
          professional: ["سەنائەت دېتال", "كۈچلۈك پروگراممىلاش", "ئالگورىزىم"]
        },
        career: "روبوت پروگراممىسى",
        salary: "$70,000-150,000"
      },
      electronics: {
        name: "ئېلېكتىرونىكا",
        icon: <CircuitBoard className="w-5 h-5" />,
        levels: {
          beginner: ["ئاساسىي سىخىمۇتۇرلار", "باتارىيە", "ماتورلار"],
          intermediate: ["Arduino", "سېزگۈچلەر", "مۇرەككەپ قۇرۇلما"],
          advanced: ["Raspberry Pi", "FPGA", "ئاپتوماتىك كونترول"],
          professional: ["سەنائەت ئېلېكتىرونىكىسى", "ساناق سىستېمىسى", "قورال لايىھىلەش"]
        },
        career: "روبوت ئىنژېنېرى",
        salary: "$65,000-140,000"
      },
      ai: {
        name: "سۇنئىي ئەقىل",
        icon: <Brain className="w-5 h-5" />,
        levels: {
          beginner: ["ئاساسىي ئالگورىزىم", "سېزگۈچ مەلۇماتى"],
          intermediate: ["ماشىنا ئۆگىنىش", "يۈز تونۇش"],
          advanced: ["چوڭقۇر ئۆگىنىش", "تەبىئىي تىل بىر تەرەپ قىلىش"],
          professional: ["ئىنسان-ئوخشاش ئەقىل", "ئالاقىدار مەلۇمات", "ئىلغار AI"]
        },
        career: "AI مۇتەخەسسىسى",
        salary: "$90,000-200,000"
      },
      design: {
        name: "لايىھىلەش ۋە قۇرۇش",
        icon: <Cog className="w-5 h-5" />,
        levels: {
          beginner: ["3D چاپ", "ئاساسىي قۇرۇلما"],
          intermediate: ["CAD لايىھىلەش", "مېخانىكا تەھلىلى"],
          advanced: ["مۇرەككەپ قۇرۇلما", "ھەرىكەت سىمۇلاتسىيەسى"],
          professional: ["سەنائەت لايىھىسى", "ئىنسان-روبوت ھەمكارلىقى", "ئىلغار ماتېرىيال"]
        },
        career: "روبوت لايىھىلىگۈچى",
        salary: "$75,000-160,000"
      }
    }
  };

  const globalCompetitions = [
    {
      name: "FIRST Robotics",
      level: "ئالىي مائارىپ",
      description: "دۇنيادىكى ئەڭ چوڭ روبوت مۇسابىقىسى",
      skills: ["گۇرۇپپا خىزمىتى", "مۇرەككەپ لايىھىلەش", "ئاكادېمىك نەتىجە"],
      benefits: ["كوللېژ مۇكاپاتى", "كەسپىي تەرەققىيات", "تور تۈزۈش"]
    },
    {
      name: "VEX Robotics",
      level: "ھەممە سەۋىيە",
      description: "ئالىي مائارىپتىكى ئەڭ كەڭ تارقىتىلغان مۇسابىقە",
      skills: ["ئىجادچانلىق", "تېخنىكىلىق لايىھىلەش", "پروگراممىلاش"],
      benefits: ["بەيلىك مۇكاپاتى", "ئىقتىسادىي ياردەم", "خەلقئارالىق ئېنىق"]
    },
    {
      name: "RoboCup",
      level: "ئىلمىي تەتقىقات",
      description: "ئىنسان-ئوخشاش روبوت ۋە كۆرۈش سىستېمىلىرى",
      skills: ["AI تەتقىقاتى", "كۆرۈش تېخنىكىسى", "ئىلغار پروگراممىلاش"],
      benefits: ["ئىلمىي ئېنىق", "تەتقىقات مالىيىلىشى", "خەلقئارالىق ھەمكارلىق"]
    },
    {
      name: "WRO (World Robot Olympiad)",
      level: "باشلانغۇچ-ئوتتۇرا",
      description: "بالىلار ۋە يىگىتلەر ئۈچۈن روبوت مۇسابىقىسى",
      skills: ["ئىجادچانلىق", "ھەل قىلىش قابىلىيىتى", "STEM ماھارىتى"],
      benefits: ["ئالىي مائارىپ ئېنىق", "خەلقئارالىق تەجرىبە", "ياش مۇتەخەسسىسلەر"]
    }
  ];

  const integrationWithCulture = [
    {
      culture: "ئۇيغۇر مەدەنىيىتى",
      integration: "روبوت + ئەدەبىيات",
      projects: ["شىئىر ئايتقۇچى روبوت", "داستان چۈشەندۈرگۈچ", "مۇقام ئۆگەتكۈچ"],
      benefits: ["مەدەنىيەت ساقلاش", "ياش نەسىللەرنى جەلپ قىلىش", "ئەنئەنە-زامانىۋىلىق بىرلەشمىسى"]
    },
    {
      culture: "خەنزۇ مەدەنىيىتى",
      integration: "روبوت + تارىخ",
      projects: ["تارىخىي شەخس روبوتى", "مەدەنىيەت يادىكارلىقى كۆزىتىش", "ئەنئەنىۋى سەنئەت روبوتى"],
      benefits: ["تارىخىي مەدەنىيەت تارقىتىش", "تېخنىكىلىق تەرەققىيات", "STEM مائارىپى"]
    },
    {
      culture: "ياپون مەدەنىيىتى",
      integration: "روبوت + سەنئەت",
      projects: ["ئەنئەنىۋى رەقىم روبوتى", "چاي مۇراسىمى روبوتى", "كالىگراپىيە روبوتى"],
      benefits: ["سەنئەت ۋە تېخنىكا بىرلەشمىسى", "قائىدە ۋە ئىجادچانلىق", "مەدەنىيەت ساقلاش"]
    },
    {
      culture: "ئامېرىكا مەدەنىيىتى",
      integration: "روبوت + ئىجادچانلىق",
      projects: ["ئىجادچانلىق روبوتى", "كەسپىي تەربىيە روبوتى", "ئىنتېرئاكتىپ ئۆگىنىش"],
      benefits: ["ئىجادچانلىقنى قوزغاش", "كەسپىي تەرەققىيات", "مەركەزلەشتۈرۈلمىگەن تەربىيە"]
    }
  ];

  const careerRoadmap = [
    {
      age: "6-12 ياش",
      focus: "ئاساسىي قۇرۇش ۋە پروگراممىلاش",
      activities: ["LEGO روبوتلار", "بلوك پروگراممىلاش", "ئاددىي مۇسابىقىلەر"],
      skills: ["ئاساسىي قۇرۇش", "ئاساسىي پروگراممىلاش", "گۇرۇپپا خىزمىتى"]
    },
    {
      age: "13-16 ياش",
      focus: "تېكىست پروگراممىلاش ۋە ئېلېكتىرونىكا",
      activities: ["Arduino/Raspberry Pi", "ئىلغار پروژېكتلار", "مەكتەپ مۇسابىقىلىرى"],
      skills: ["Python/C++", "ئېلېكتىرونىكا", "مەسىلە ھەل قىلىش"]
    },
    {
      age: "17-22 ياش",
      focus: "ئالىي مائارىپ ۋە ئىختىساسلاش",
      activities: ["ئالىي مائارىپ پروژېكتلىرى", "خەلقئارالىق مۇسابىقىلەر", "ئىش تەجرىبىسى"],
      skills: ["ماشىنا ئۆگىنىش", "مۇرەككەپ سىستېما", "تەتقىقات ۋە تەرەققىيات"]
    },
    {
      age: "23+ ياش",
      focus: "كەسپىي تەرەققىيات ۋە باشقۇرۇش",
      activities: ["سەنائەت ئەپلىرى", "تەتقىقات ۋە تەرەققىيات", "باشقۇرۇش ۋە يېتەكچىلىك"],
      skills: ["سەنائەت ئۆلچەملىرى", "باشقۇرۇش", "ئىلغار تەتقىقات"]
    }
  ];

  return (
    <div className="space-y-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif]" dir="rtl">
      {/* ماۋزۇ باش بەلگىسى */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl text-white shadow-md">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-1">روبوت مائارىپى (Robotics Education)</h1>
              <p className="text-blue-700 text-lg">
                STEM + ئىجادچانلىق + مەسىلە ھەل قىلىش = كەلگۈسى مۇتەخەسسىسلىرى
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveLevel('beginner')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeLevel === 'beginner' ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
            >
              باشلانغۇچ
            </button>
            <button
              onClick={() => setActiveLevel('intermediate')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeLevel === 'intermediate' ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
            >
              ئوتتۇرا
            </button>
            <button
              onClick={() => setActiveLevel('advanced')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeLevel === 'advanced' ? 'bg-green-600 text-white shadow-md' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
            >
              يۇقىرى
            </button>
            <button
              onClick={() => setActiveLevel('professional')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeLevel === 'professional' ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            >
              كەسپىي
            </button>
          </div>
        </div>
      </div>

      {/* ئۈگىنىش يول خەرىتىسى */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-blue-600" />
          {learningMap.levels[activeLevel].name} - ئۈگىنىش يول خەرىتىسى
        </h2>
        
        {/* دەرىجە كۆرسىتىمى */}
        <div className={`bg-gradient-to-r ${learningMap.levels[activeLevel].color} text-white rounded-xl p-6 mb-8`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
              {learningMap.levels[activeLevel].icon}
            </div>
            <div>
              <h3 className="font-bold text-2xl">{learningMap.levels[activeLevel].name}</h3>
              <p className="text-white/90 text-lg">{learningMap.levels[activeLevel].description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="font-bold text-lg mb-2">ۋاقىت:</div>
              <div className="text-xl">{learningMap.levels[activeLevel].duration}</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="font-bold text-lg mb-2">مەركەز:</div>
              <div>{learningMap.levels[activeLevel].focus}</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="font-bold text-lg mb-2">ئۇسۇللار:</div>
              <div className="flex flex-wrap gap-1">
                {learningMap.levels[activeLevel].components.map((comp, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-white/30 text-xs rounded">
                    {comp.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* ئۈگىنىش يولى */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-blue-600" />
            ئۈگىنىش يولى (Learning Path)
          </h3>
          
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {learningMap.levels[activeLevel].learningPath.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center mb-2 relative z-10">
                    <div className="font-bold text-blue-600">{idx + 1}</div>
                  </div>
                  <div className="text-center max-w-[120px]">
                    <div className="font-bold text-gray-800">{step.step}</div>
                    <div className="text-sm text-gray-600">{step.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* تەپسىلاتلار */}
        <div className="grid md:grid-cols-2 gap-6">
          {learningMap.levels[activeLevel].components.map((component, idx) => (
            <div key={idx} className="border-l-4 border-blue-400 pl-4 py-2">
              <h4 className="font-bold text-gray-800 text-lg mb-3">{component.title}</h4>
              
              <div className="mb-3">
                <div className="font-medium text-gray-700 mb-2">ماھارەتلەر:</div>
                <div className="flex flex-wrap gap-1">
                  {component.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-gray-700 mb-2">لويىھىلەر:</div>
                <ul className="space-y-1 text-sm text-gray-700">
                  {component.projects.map((project, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1">
                      <Rocket className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ئىختىساسلاشقان يوللار */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <TargetIcon className="w-6 h-6 text-purple-600" />
          ئىختىساسلاشقان ئۆگىنىش يوللىرى
        </h2>
        
        {/* يول تاللاش كونۇپكىلىرى */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(learningMap.learningTracks).map(([key, track]) => (
            <button
              key={key}
              onClick={() => setActiveTrack(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTrack === key ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {track.icon}
              {track.name}
            </button>
          ))}
        </div>
        
        {/* ھازىرقى يول تەپسىلاتلىرى */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-purple-700">
              {learningMap.learningTracks[activeTrack].icon}
            </div>
            <div>
              <h3 className="font-bold text-2xl text-purple-800">{learningMap.learningTracks[activeTrack].name}</h3>
              <div className="flex items-center gap-4 mt-2">
                <div className="text-purple-700">
                  <span className="font-bold">كارىيارا: </span>
                  {learningMap.learningTracks[activeTrack].career}
                </div>
                <div className="text-green-700 font-bold">
                  {learningMap.learningTracks[activeTrack].salary}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(learningMap.learningTracks[activeTrack].levels).map(([levelKey, skills]) => (
              <div key={levelKey} className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm">
                <div className="font-bold text-purple-800 mb-2">
                  {learningMap.levels[levelKey].name.split(' ')[0]}
                </div>
                <div className="space-y-1">
                  {skills.slice(0, 3).map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-1 text-sm text-gray-700">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* خەلقئارالىق مۇسابىقىلەر */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-amber-600" />
          خەلقئارالىق روبوت مۇسابىقىلىرى
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalCompetitions.map((competition, idx) => (
            <div key={idx} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-amber-800 text-lg mb-2">{competition.name}</h3>
              <div className="text-sm text-amber-600 mb-3">{competition.level} • {competition.description}</div>
              
              <div className="mb-3">
                <div className="font-medium text-gray-700 mb-1">ئۆگىنىلىدىغان ماھارەتلەر:</div>
                <div className="flex flex-wrap gap-1">
                  {competition.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-gray-700 mb-1">پايدىلىرى:</div>
                <div className="text-sm text-gray-600">
                  {competition.benefits.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مەدەنىيەت بىلەن بىرلەشمە */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-emerald-600" />
          مەدەنىيەت بىلەن بىرلەشمە
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {integrationWithCulture.map((integration, idx) => (
            <div key={idx} className="border-l-4 border-emerald-400 pl-4 py-2">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{integration.culture}</h3>
                  <p className="text-emerald-700">{integration.integration}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="font-medium text-gray-700 mb-1">لويىھىلەر:</div>
                <div className="flex flex-wrap gap-1">
                  {integration.projects.map((project, pIdx) => (
                    <span key={pIdx} className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="font-medium text-gray-700 mb-1">پايدىلىرى:</div>
                <div className="text-sm text-gray-600">
                  {integration.benefits.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* كارىيارا يول خەرىتىسى */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-300 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          كارىيارا يول خەرىتىسى
        </h3>
        
        <div className="relative">
          {/* ئاساسىي لىنىيە */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="flex justify-between relative z-10">
            {careerRoadmap.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center text-center" style={{ width: '25%' }}>
                {/* دەۋر بېلگىسى */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center mb-3 shadow-md">
                  <div className="text-center">
                    <div className="font-bold text-blue-600">{stage.age.split('-')[0]}</div>
                    <div className="text-xs text-gray-600">ياش</div>
                  </div>
                </div>
                
                {/* مەزمۇنلار */}
                <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm min-h-[200px] w-full">
                  <h4 className="font-bold text-gray-800 mb-2">{stage.focus}</h4>
                  
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">پائالىيەتلەر:</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      {stage.activities.map((activity, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-1">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">ماھارەتلەر:</div>
                    <div className="flex flex-wrap gap-1">
                      {stage.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* ئوق يۆنىلىشى */}
                {idx < careerRoadmap.length - 1 && (
                  <div className="mt-4">
                    <ArrowRight className="w-6 h-6 text-blue-500 rotate-180" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* كەسپىي يۆنىلىشلەر */}
        <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
          <h4 className="font-bold text-indigo-800 mb-3">كەسپىي يۆنىلىشلەر ۋە مەلۇمات:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { career: "روبوت پروگراممىسى", demand: "يۇقىرى", growth: "31%" },
              { career: "روبوت ئىنژېنېرى", demand: "يۇقىرى", growth: "28%" },
              { career: "AI مۇتەخەسسىسى", demand: "يۇقىرى", growth: "35%" },
              { career: "روبوت لايىھىلىگۈچى", demand: "ئوتتۇرا", growth: "25%" }
            ].map((career, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border">
                <div className="font-bold text-indigo-800">{career.career}</div>
                <div className="flex justify-between text-xs mt-1">
                  <span className={`font-medium ${career.demand === 'يۇقىرى' ? 'text-green-600' : 'text-amber-600'}`}>
                    تەلەپ: {career.demand}
                  </span>
                  <span className="text-blue-600">+{career.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsEduModule;