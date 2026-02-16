// src/components/learn-modules/education/DroneEduModule.jsx
import React, { useState } from 'react';
import { 
  Drone, Cpu, Code, Layers, Target, Brain, Zap,
  Clock, Users, Award, BookOpen, Globe, Map,
  Camera, Wind, Rocket, Wifi, Satellite, Shield,
  Battery, Settings, Navigation, Eye, Video,
  BarChart, PieChart, LineChart, Cloud,
  ArrowRight, CheckCircle, XCircle, AlertCircle,
  Building, Calculator, FlaskConical, Database,
  Languages, Home, MapPin, Star, TrendingUp,
  GraduationCap, School, Heart, BrainCircuit,
  Smartphone, Tablet, Monitor, Server, Tool,
  Compass, Thermometer, Droplets, Trees,
  Factory, Truck, Package, ShoppingCart,
  Music, Palette, Film, CameraIcon
} from 'lucide-react';

const DroneEduModule = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const [activeApplication, setActiveApplication] = useState('agriculture');
  
  const educationLevels = {
    beginner: {
      name: "باشلانغۇچ سەۋىيە (10-15 ياش)",
      description: "دروننىڭ ئاساسىي قانۇنلىرى ۋە بىخەتەرلىك ئۆگىنىش",
      skills: [
        "دروننىڭ ئاساسىي قۇرۇلمىسى",
        "ئاۋا قانۇنلىرى ۋە بىخەتەرلىك تەلەپلىرى",
        "سىخىمۇتۇرچىلىق ۋە ئىنژېنېرلىك ئاساسلىرى",
        "ئاددىي پروگرامما تەڭشەش"
      ],
      projects: [
        "دروننى كونترول قىلىش ئەمەلىيەتلىرى",
        "ئاددىي ئاۋا سۈرەتلىرى",
        "بىخەتەرلىك پروتوكوللىرىنى ئۆگىنىش",
        "ئاساسىي 3D چاپلاش"
      ],
      tools: ["Tello EDU", "DJI Spark", "Blockly", "Scratch"],
      duration: "6-12 ئاي",
      color: "from-blue-500 to-cyan-500",
      icon: <Drone className="w-6 h-6" />
    },
    intermediate: {
      name: "ئوتتۇرا سەۋىيە (15-18 ياش)",
      description: "درون پروگراممىلاش ۋە ئىختىساسلاشقان لايىھىلەش",
      skills: [
        "Python بىلەن درون پروگراممىلاش",
        "Arduino ۋە Raspberry Pi",
        "FPV (First-Person View) تېخنىكىسى",
        "ئاپتوماتىك ھەرىكەت لايىھىلەش"
      ],
      projects: [
        "درون مۇسابىقىسى لايىھىلەش",
        "ئاپتوماتىك سىكانىرلىق سىستېما",
        "ئاۋا كارتۇغراپىيەسى",
        "ئەقىللىق كۆزىتىش سىستېمىسى"
      ],
      tools: ["DJI SDK", "Python", "Arduino", "OpenCV"],
      duration: "12-18 ئاي",
      color: "from-purple-500 to-pink-500",
      icon: <Code className="w-6 h-6" />
    },
    advanced: {
      name: "يۇقىرى سەۋىيە (ئالىي مائارىپ)",
      description: "ئىختىساسلاشقان تەتقىقات ۋە كەسپىي ئەپلەر",
      skills: [
        "يۇقىرى مۇرەككەپ پروگراممىلاش",
        "ماشىنا ئۆگىنىش ۋە كۆرۈش تېخنىكىسى",
        "ئاۋىياتسىيە ئىنژېنېرلىقى",
        "چوڭقۇر تەتقىقات ۋە تەھلىل"
      ],
      projects: [
        "سۇنئىي ئەقىل بىلەن ماسلاشتۇرۇلغان درونلار",
        "لازېر سىكانىرلىق سىستېما",
        "توقۇنۇشنى ئاۋۋال ئالاقىدار كۆزىتىش",
        "چوڭ مۇناسىۋەتلىك تەكشۈرۈش"
      ],
      tools: ["ROS", "TensorFlow", "LiDAR", "GIS"],
      duration: "2-4 يىل",
      color: "from-green-500 to-emerald-500",
      icon: <Brain className="w-6 h-6" />
    },
    professional: {
      name: "كەسپىي سەۋىيە",
      description: "سەنائەت ئەپلەرى ۋە كەسپىي تەربىيە",
      skills: [
        "درون ئىشلىتىش ئىجازەتنامىسى",
        "سەنائەت ئۆلچەملىرى",
        "مۇرەككەپ سىستېما لايىھىلەش",
        "ئىدارە ۋە ئىشلەپچىقىرىش"
      ],
      projects: [
        "توقۇنۇشنى كۆزىتىش سىستېمىسى",
        "ئۆزۈڭدىن-ئۆزۈڭ يەتكۈزۈش سىستېمىسى",
        "سۇنئىي ئەقىل بىلەن تەمىنلەش سىستېمىسى",
        "ئىنتېگراتسىيەلەشتۈرۈلگەن سىستېما"
      ],
      tools: ["FAA Part 107", "Enterprise SDKs", "AWS", "Azure IoT"],
      duration: "داۋاملىق",
      color: "from-amber-500 to-orange-500",
      icon: <Award className="w-6 h-6" />
    }
  };

  const applications = {
    agriculture: {
      name: "زېرائەت ۋە دېھقانچىلىق",
      icon: <Trees className="w-5 h-5" />,
      description: "درونلارنى زېرائەت باشقۇرۇش ۋە ئەكىن كۆزىتىشكە ئىشلىتىش",
      uses: [
        "زىرائەت ساغلاملىقىنى كۆزىتىش",
        "ئاپتوماتىك سۇغۇت ۋە گۈللەش",
        "دېھقانچىلىق خەرىتىسى",
        "زىرائەت ھېسابلىشى"
      ],
      benefits: [
        "سۇ سۇپىسىنى 90% تۆۋەنلەش",
        "گۈللەش ئۈنۈمىنى 30% ئاشۇرۇش",
        "زىرائەت ھېسابلىشىنى ئادىللىشىش",
        "ئىشچى خىراجىتىنى تۆۋەنلەش"
      ],
      color: "from-green-500 to-emerald-500"
    },
    mapping: {
      name: "خەرىتە ۋە گېودېزىيە",
      icon: <Map className="w-5 h-5" />,
      description: "3D خەرىتە ۋە يەر شەكلى تەھلىلى",
      uses: [
        "3D يەر شەكلى سىكانىرلىشى",
        "قۇرۇلۇش سائىتى باشقۇرۇش",
        "توقۇنۇش يېتەكچىلىكى",
        "مۇنارۋى بازىلار خەرىتىسى"
      ],
      benefits: [
        "خەرىتە ۋاقتىنى 70% قىسقارتۇرۇش",
        "چوڭقۇرلىقنى 1 سم ئەستىمىسىز ئۆلچەش",
        "ئاۋا سۈرەتلىرى بىلەن ماسلاشتۇرۇش",
        "رېئال ۋاقىتتا يېڭىلىش"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    delivery: {
      name: "يەتكۈزۈش ۋە لوجىستىكا",
      icon: <Package className="w-5 h-5" />,
      description: "ئۆز-ئۆزىدىن يەتكۈزۈش سىستېمىلىرى",
      uses: [
        "ساغلاملىق مەھسۇلاتلىرى يەتكۈزۈش",
        "ئېچىلغان رايونلارغا ياردەم",
        "ئىشلەپچىقىرىش زەنجىرى",
        "ئاچچىق مەھسۇلات يەتكۈزۈش"
      ],
      benefits: [
        "يەتكۈزۈش ۋاقتىنى 80% قىسقارتۇرۇش",
        "يەتكۈزۈش چىقىمىنى 60% تۆۋەنلەش",
        "ئېچىلغان رايونلارغا ياردەم",
        "ئېكولوگىيە دوستانە"
      ],
      color: "from-red-500 to-pink-500"
    },
    media: {
      name: "سەنئەت ۋە مېدىيا",
      icon: <CameraIcon className="w-5 h-5" />,
      description: "ئاۋا سۈرەتلىرى ۋە ۋىدىئولار",
      uses: [
        "كىنو ۋە تېلېۋىزىيە سۈرەتلىرى",
        "توقۇنۇش تەسۋىرى",
        "ۋىرتىئال رېئاللىق",
        "تارىخىي يادىكارلىق سىكانىرلىشى"
      ],
      benefits: [
        "يۇقىرى سۈرەتلىك ۋىدىئولار",
        "ئىمكىنىس بولمىغان پوزىتسىيەلەر",
        "رېئال ۋاقىتتا سۈرەتلەش",
        "تارىخىي يادىكارلىقلارنى قوغداش"
      ],
      color: "from-purple-500 to-violet-500"
    },
    emergency: {
      name: "ئېھتىيات ۋە قۇتقۇزۇش",
      icon: <Shield className="w-5 h-5" />,
      description: "توقۇنۇش ۋە قۇتقۇزۇش ھەرىكەتلىرى",
      uses: [
        "توقۇنۇشنى كۆزىتىش",
        "قۇتقۇزۇش ئىزدەش",
        "خەتەرلىك مۇھىتلارغا قاراش",
        "ئالاقىدار كۆزىتىش"
      ],
      benefits: [
        "كىشى ھاياتىنى قوغداش",
        "توقۇنۇشنى تېز بايقاش",
        "خەتەرلىك مۇھىتلاردىن قوغداش",
        "رېئال ۋاقىت مەلۇماتى"
      ],
      color: "from-amber-500 to-yellow-500"
    }
  };

  const stemIntegration = {
    science: [
      "فىزىكا: ھەرىكەت، ھاۋا ھەرىكىتى، ئېنېرگىيە",
      "خىمىيە: باتارىيە كېمىستىرى، ماتېرىيال خۇسۇسىيىتى",
      "بىئولوگىيە: ئېكولوگىيە، زىرائەت ساغلاملىقى",
      "جۇغراپىيە: يەر شەكلى، كلىمات، تەبىئىي بايلىق"
    ],
    technology: [
      "كومپيۇتېر پەنلىرى: پروگراممىلاش، مۇلازىمىت",
      "ئېلېكتىرونىكا: سىخىمۇتۇر، باتارىيە، كامېرا",
      "تۇرالغۇ: خەۋەرلىشىش پروتوكوللىرى، GPS",
      "يۇمشاق دېتال: ئاۋا، بىخەتەرلىك، كونترول"
    ],
    engineering: [
      "مېخانىكا: قۇرۇلۇش، ھەرىكەت سىستېمىسى",
      "ئېلېكتىر: مۇتور، باتارىيە باشقۇرۇش",
      "سىستېما: ئىنتېگراتسىيە، سىناق ۋە بايقاش",
      "مۇھىت: تېمپېراتۇرا، نەملىك، باسىم"
    ],
    mathematics: [
      "ھېسابلاش: ھەرىكەت ھېسابلاش، كۆئوردىنات",
      "گېئومېترىيە: ئۇچۇش يولى، پوزىتسىيە",
      "ئىستاتىستىكا: مەلۇمات تەھلىلى، ئالدىن بىلىش",
      "ئالگېبرا: سىستېما تەڭلىمىسى، كونترول"
    ]
  };

  const careerPaths = [
    {
      name: "درون ئىنژېنېرى",
      education: "باكالاۋر (مۇھەندىسلىك، كومپيۇتېر پەنلىرى)",
      skills: ["مېخانىكا", "ئېلېكتىرونىكا", "پروگراممىلاش"],
      salary: "$70,000-120,000",
      demand: "يۇقىرى"
    },
    {
      name: "درون پروگراممىسى",
      education: "باكالاۋر (كومپيۇتېر پەنلىرى)",
      skills: ["Python/C++", "ROS", "ماشىنا ئۆگىنىش"],
      salary: "$80,000-140,000",
      demand: "يۇقىرى"
    },
    {
      name: "ئاۋا كارتۇغراپىيە ئىنژېنېرى",
      education: "باكالاۋر (جۇغراپىيە، GIS)",
      skills: ["GIS", "Remote Sensing", "3D Modeling"],
      salary: "$60,000-100,000",
      demand: "ئوتتۇرا"
    },
    {
      name: "درون ئىشلىتىش مەسئۇلى",
      education: "ئاسسۇسىيەت دەرىجىسى + FAA ئىجازەتنامىسى",
      skills: ["ھاۋارايى", "بىخەتەرلىك", "ئۆلچەم"],
      salary: "$50,000-90,000",
      demand: "يۇقىرى"
    }
  ];

  const globalComparison = [
    {
      country: "خەنزۇ مائارىپى",
      focus: "STEM باشچىلىقى ۋە ئىلىم-پەن",
      approach: "تېخنىكىلىك تەربىيە، مۇسابىقىلەر",
      examples: ["ئۇنىۋېرسىتېت درون كۇلۇپلىرى", "مىللەت مۇسابىقىلىرى"]
    },
    {
      country: "ئامېرىكا مائارىپى",
      focus: "ياراتقۇچىلىق ۋە كارىيارا تەربىيە",
      approach: "لايىھە ئاساسىدىكى ئۆگىنىش",
      examples: ["FIRST Robotics", "Drone Racing League"]
    },
    {
      country: "ياپون مائارىپى",
      focus: "ھەمكارلىق ۋە تەپسىلاتقا دىققەت",
      approach: "گۇرۇپپا لايىھىسى ۋە قائىدە",
      examples: ["تېخنىكا مەكتەپلىرى", "ئىنتېرنېت مەكتەپلەر"]
    },
    {
      country: "ئۇيغۇر مائارىپى",
      focus: "تەبىئەت ۋە مەدەنىيەت بىلەن بىرلەشمە",
      approach: "ئەنئەنىۋى بىلىم بىلەن تېخنىكىنى بىرلەشتۈرۈش",
      examples: ["تاغ كۆزىتىش", "ئاۋا دىۋانى", "دۆلەت خەرىتىسى"]
    }
  ];

  return (
    <div className="space-y-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif]" dir="rtl">
      {/* ماۋزۇ باش بەلگىسى */}
      <div className="bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 rounded-2xl p-6 border border-emerald-200 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl text-white shadow-md">
              <Drone className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-emerald-900 mb-1">درون مائارىپى (Drone Education)</h1>
              <p className="text-emerald-700 text-lg">
                STEM + ئامالىي تەربىيەنى بىرلەشتۈرگەن يېڭى ئەسىر مائارىپى
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

      {/* ھازىرقى سەۋىيە كۆرسىتىمى */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Layers className="w-6 h-6 text-emerald-600" />
          {educationLevels[activeLevel].name}
        </h2>
        
        <div className={`bg-gradient-to-r ${educationLevels[activeLevel].color} text-white rounded-xl p-6 mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
              {educationLevels[activeLevel].icon}
            </div>
            <div>
              <h3 className="font-bold text-xl">{educationLevels[activeLevel].name}</h3>
              <p className="text-white/90">{educationLevels[activeLevel].description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="font-bold text-lg mb-1">ۋاقىت:</div>
              <div>{educationLevels[activeLevel].duration}</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="font-bold text-lg mb-1">ئاساسلىق قوراللار:</div>
              <div className="flex flex-wrap gap-1">
                {educationLevels[activeLevel].tools.map((tool, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-white/30 text-xs rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="font-bold text-lg mb-1">ماھارەتلەر:</div>
              <div>{educationLevels[activeLevel].skills.length} خىل</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="font-bold text-lg mb-1">لويىھىلەر:</div>
              <div>{educationLevels[activeLevel].projects.length} خىل</div>
            </div>
          </div>
        </div>
        
        {/* تەپسىلاتلار */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-600" />
              ئۆگىنىلىدىغان ماھارەتلەر:
            </h4>
            <ul className="space-y-2">
              {educationLevels[activeLevel].skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-purple-600" />
              ئەمەلىي لويىھىلەر:
            </h4>
            <ul className="space-y-2">
              {educationLevels[activeLevel].projects.map((project, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ئەپلەر ۋە سەھنىلەر */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-600" />
          دروننىڭ ئەمەلىي ئەپلىرى
        </h2>
        
        {/* ئەپ تاللاش كونۇپكىلىرى */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(applications).map(([key, app]) => (
            <button
              key={key}
              onClick={() => setActiveApplication(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activeApplication === key ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {app.icon}
              {app.name}
            </button>
          ))}
        </div>
        
        {/* ھازىرقى ئەپ تەپسىلاتلىرى */}
        <div className={`bg-gradient-to-r ${applications[activeApplication].color} text-white rounded-xl p-6 mb-6`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
              {applications[activeApplication].icon}
            </div>
            <div>
              <h3 className="font-bold text-xl">{applications[activeApplication].name}</h3>
              <p className="text-white/90">{applications[activeApplication].description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">ئىشلىتىش ئۇسۇللىرى:</h4>
              <ul className="space-y-1">
                {applications[activeApplication].uses.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">پايدىلىرى:</h4>
              <ul className="space-y-1">
                {applications[activeApplication].benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* STEM ئىنتېگراتسىيەسى */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BrainCircuit className="w-6 h-6 text-purple-600" />
          STEM ئىنتېگراتسىيەسى
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-blue-800">ئىلىم (Science)</h3>
            </div>
            <ul className="space-y-2">
              {stemIntegration.science.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-5 border border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-emerald-800">تېخنىكا (Technology)</h3>
            </div>
            <ul className="space-y-2">
              {stemIntegration.technology.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-amber-800">مۇھەندىسلىك (Engineering)</h3>
            </div>
            <ul className="space-y-2">
              {stemIntegration.engineering.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-700">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-purple-800">ماتېماتىكا (Mathematics)</h3>
            </div>
            <ul className="space-y-2">
              {stemIntegration.mathematics.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* كارىيارا يوللىرى ۋە خەلقئارالىق سېلىشتۇرما */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* كارىيارا يوللىرى */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            كارىيارا يوللىرى ۋە ئىمكانىيەتلەر
          </h3>
          
          <div className="space-y-4">
            {careerPaths.map((career, idx) => (
              <div key={idx} className="border-l-4 border-emerald-400 pl-4 py-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-gray-800">{career.name}</h4>
                  <span className="text-sm font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                    {career.salary}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{career.education}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {career.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-medium ${career.demand === 'يۇقىرى' ? 'text-green-600' : 'text-amber-600'}`}>
                    تەلەپ: {career.demand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* خەلقئارالىق سېلىشتۇرما */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-600" />
            خەلقئارالىق سېلىشتۇرما
          </h3>
          
          <div className="space-y-4">
            {globalComparison.map((country, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-3 border-b">
                  <h4 className="font-bold text-gray-800">{country.country}</h4>
                </div>
                <div className="p-3">
                  <div className="mb-2">
                    <div className="text-sm font-medium text-gray-700">مەركەز:</div>
                    <div className="text-sm text-gray-600">{country.focus}</div>
                  </div>
                  <div className="mb-2">
                    <div className="text-sm font-medium text-gray-700">يۆنىلىش:</div>
                    <div className="text-sm text-gray-600">{country.approach}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">مىساللار:</div>
                    <div className="text-xs text-gray-600">{country.examples.join('، ')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* خۇلاسە ۋە كەلگۈسى */}
      <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-6 border border-gray-300 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-emerald-500" />
          خۇلاسە ۋە كەلگۈسى يۆنىلىش
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-700 mb-3">كەلگۈسىدىكى تېخنىكىلار:</h4>
            <div className="space-y-2">
              {[
                "سۇنئىي ئەقىل بىلەن ماسلاشتۇرۇلغان درونلار",
                "باتارىيە تېخنىكىسىدىكى تەرەققىيات",
                "خەلقئارالىق ئالاقە ۋە سىستېمىلار",
                "ماشىنا ئۆگىنىش ۋە ئۆز-ئۆزىدىن تەڭشەش",
                "ئېكولوگىيە دوستانە ماتېرىياللار",
                "كىشى بىلەن ماشىنا ھەمكارلىقى"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-3">ئەھمىيەتلىك مائارىپ ئېلېمېنتلىرى:</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { element: "ئامالىي تەربىيە", importance: "يۇقىرى" },
                { element: "STEM ئىنتېگراتسىيەسى", importance: "يۇقىرى" },
                { element: "كەسپىي تەربىيە", importance: "ئوتتۇرا" },
                { element: "بىخەتەرلىك تەربىيەسى", importance: "يۇقىرى" },
                { element: "مۇنازىرە ۋە ھەمكارلىق", importance: "ئوتتۇرا" },
                { element: "ئىجادچانلىق تەربىيەسى", importance: "يۇقىرى" },
                { element: "مەسئۇلىيەت تەربىيەسى", importance: "ئوتتۇرا" },
                { element: "ئىقتىسادىي تەربىيە", importance: "تۆۋەن" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 text-center border shadow-sm">
                  <div className="font-bold text-emerald-700">{item.element}</div>
                  <div className={`text-xs mt-1 ${item.importance === 'يۇقىرى' ? 'text-green-600' : item.importance === 'ئوتتۇرا' ? 'text-amber-600' : 'text-gray-600'}`}>
                    ئەھمىيىتى: {item.importance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* قانات سېستىمىسى */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Drone className="w-4 h-4" />
            درون قانات سېستىمىسى (دەرىجىلىك تەرەققىيات):
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { level: "1-قانات", description: "ئاساسىي كونترول ۋە بىخەتەرلىك", age: "10-13 ياش" },
              { level: "2-قانات", description: "پروگراممىلاش ۋە ئاپتوماتىك", age: "14-16 ياش" },
              { level: "3-قانات", description: "ئىختىساسلاشقان ئەپلەر", age: "17-19 ياش" },
              { level: "4-قانات", description: "كەسپىي ۋە تەتقىقات", age: "20+ ياش" }
            ].map((wing, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border">
                <div className="font-bold text-blue-800 text-center mb-1">{wing.level}</div>
                <div className="text-sm text-gray-600 text-center mb-1">{wing.description}</div>
                <div className="text-xs text-blue-600 text-center">يېشى: {wing.age}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneEduModule;