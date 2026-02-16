// src/components/learn-modules/education/UyghurEduModule.jsx
import React, { useState } from 'react';
import { 
  BookOpen, GraduationCap, Users, History, Globe, Award, 
  Calendar, TrendingUp, Clock, Building, Castle, School,
  Book, Users2, Brain, Zap, Briefcase, Star, Trophy,
  ChevronDown, ChevronUp, Layers, Target, Heart, Eye,
  Calculator, Palette, Music, Globe2, Cpu, Database,
  ArrowLeft, ArrowRight, ChevronLeft, ChevronRight,
  Mehriban, BookMarked, Lightbulb, Sparkles, HeartHandshake, CircleCheck 
} from 'lucide-react';

const UyghurEduModule = () => {
  const [activePeriod, setActivePeriod] = useState('modern'); // qadimki, islam, modern
  
  // قەدىمكى زامان مائارىپى
  const ancientEducation = {
    period: "قەدىمكى زامان مائارىپى (مىلادىدىن ئىلگىرى 3-ئەسىر - مىلادىيە 10-ئەسىر)",
    characteristics: [
      {
        title: "ئورخۇن-يېنسەي مائارىپى",
        icon: <Book className="w-5 h-5" />,
        color: "from-amber-600 to-orange-500",
        features: [
          "ئورخۇن يېزىقى ئارقىلىق بىلىم يېزىپ قالدۇرۇش",
          "قەدىمكى ئۇيغۇر يېزىقلىرىنى ئۆگىنىش",
          "تارىخ، شەجەرە ۋە دىپلوماتىيە بىلىملىرى",
          "سىياسىي ۋە ھەربىي تەربىيە"
        ],
        details: "قەدىمكى ئۇيغۇرلار ئورخۇن يېزىقى ئارقىلىق بىلىملىرىنى نەسللەرگە يەتكۈزگەن. بۇ يېزىق دۆلەت باشقۇرۇش، تارىخ خاتىرىلەش ۋە مەدەنىيەت ئالماشتۇرۇش ئۈچۈن ئىشلىتىلگەن."
      },
      {
        title: "قوچو مائارىپى",
        icon: <Castle className="w-5 h-5" />,
        color: "from-purple-600 to-violet-500",
        features: [
          "بوددا دىنى مائارىپى (مىلادىيە 9-10 ئەسىرلەر)",
          "سەنكىرىت ۋە خەنزۇ تىللىرىنى ئۆگىنىش",
          "موناستىرلاردا ئوقۇش سىستېمىسى",
          "ئەخلاق ۋە دىنىي تەربىيە"
        ],
        details: "قوچو ۋە يارخوتو رايونلىرىدا بوددىزم ئارقىلىق مائارىپ تارقىتىلغان. سەنكىرىت تىلى ئارقىلىق دىنىي ۋە ئىلىمىي مەتبەئاتلار تەرجىمە قىلىنغان."
      },
      {
        title: "قەدىمكى مائارىپ ئۇسۇللىرى",
        icon: <Users className="w-5 h-5" />,
        color: "from-teal-600 to-cyan-500",
        features: [
          "ئۇستاز-شاگىرت مۇناسىۋىتى",
          "ئەمەلىيەت ئارقىلىق ئۆگىنىش",
          "چۆچەك-سۆزلۈك بىلەن ئوقۇتۇش",
          "خەلق ئارىسىدا تارقىتىلغان بىلىم"
        ],
        details: "مائارىپ ئائىلە ۋە جەمئىيەت ئىچىدە ئېلىپ بېرىلغان. ئەنئەنىۋى كەسپلەر ئاتا-بوۋىدىن بالىلارغا يەتكۈزۈلگەن."
      }
    ],
    quotes: [
      "«بىلىم يورۇقلۇق، بىلىمسىزلىك قاراڭغۇلۇقتۇر» - قەدىمكى ئۇيغۇر ھېكمىتى",
      "«ئوقۇمۇ، ئۆگىنمۇ، بىلىملىك بول» - ئۇيغۇر ماقالىسى",
      "«يېزىق - بىلىمنىڭ كۆزى، تىل - بىلىمنىڭ ئانىدۇر»"
    ]
  };

  // ئىسلام دەۋرى مائارىپى
  const islamicEducation = {
    period: "ئىسلام دەۋرى مائارىپى (10-20-ئەسىرلەر)",
    characteristics: [
      {
        title: "مەدرىسىلىك سىستېمىسى",
        icon: <School className="w-5 h-5" />,
        color: "from-emerald-600 to-green-500",
        features: [
          "مەسچىت-مەدرىسىلەر (ئوخشاش كونا مەكتەپلەر)",
          "ئىسلام دىنى ئاساسى، قۇرئان، ھەدىس",
          "ئەرەب تىلى ۋە يېزىقىنى ئۆگىنىش",
          "پەلسەپە، تېببىي پەن، ماتماتىكا",
          "ئۇستاز ھۆرمىتى ۋە ئەخلاق تەربىيەسى"
        ],
        details: "مەدرىسىلەر ئىسلام دۇنياسىدىكى ئاساسلىق مائارىپ مەركەزلىرى بولۇپ، دىنىي ۋە ئىلىمىي بىلىملەرنى بىرلەشتۈرگەن."
      },
      {
        title: "مائارىپ دەرىجىلىرى",
        icon: <Layers className="w-5 h-5" />,
        color: "from-blue-600 to-cyan-500",
        features: [
          "باشلانغۇچ (مەكتەتەب): ئوقۇش-يېزىش، قۇرئان",
          "ئوتتۇرا (مەدرىسە): دىن، تىل، پەنلەر",
          "يۇقىرى (دارۇلپۇنۇن): ئىلىم، پەن، سەنئەت",
          "ئىجتىمائىي دەرىجە: سېپىل، مۇدەررىس، مۇفتى"
        ],
        details: "ھەر بىر دەرىجىدە ئوقۇغۇچىلار مەلۇم بىر مەقسەت ئۈچۈن تەربىيەلىنىپ، جەمئىيەتكە پايدىلىق ئەزالار بولۇپ يېتىشكەن."
      },
      {
        title: "ئۇنىۋانلار ۋە دەرىجىلەر",
        icon: <Trophy className="w-5 h-5" />,
        color: "from-amber-600 to-yellow-500",
        features: [
          "تالەبە: مەكتەپ ئوقۇغۇچىسى",
          "مۇلازىم: ياردەمچى ئوقۇتقۇچى",
          "مۇدەررىس: ئاساسلىق ئوقۇتقۇچى",
          "ئالىم: ئىلمىي دەرىجىگە ئېرىشكەن",
          "مۇفتى: دىنىي مەسلىھەتچى"
        ],
        details: "ھەر بىر دەرىجە ئۆزىگە خاس ئىلمىي ۋە ئەخلاقىي تەلەپلەرنى ئۆز ئىچىگە ئالغان."
      }
    ],
    achievements: [
      "ئەرەب تىلى ئارقىلىق پەن-تېخنىكا بىلىملىرى تەرجىمە قىلىندى",
      "يىپەك يولى بويىچە بىلىم ئالماشتۇرۇش كەڭ تارقىتىلدى",
      "ئۇيغۇر ئالېملىرى خەلقئارالىق ئىلمىي تەرەققىياتقا تۆھپە قوشتى"
    ]
  };

  // زامانىۋى مائارىپ سىستېمىسى
  const modernEducation = {
    period: "زامانىۋى مائارىپ سىستېمىسى (20-21-ئەسىرلەر)",
    structure: {
      levels: [
        {
          name: "باشلانغۇچ مائارىپى",
          uyghurName: "باشلانغۇچ مائارىپ",
          icon: <Heart className="w-6 h-6" />,
          duration: "5 يىل",
          age: "6-11 ياش",
          status: "مەجبۇرىي ۋە ھەقسىز",
          curriculum: [
            "ئۇيغۇر تىلى ۋە يېزىقى",
            "ئاساسىي حساب ۋە ماتېماتىكا",
            "تەبىئىي ۋە ئىجتىمائىي پەنلەر",
            "مەدەنىيەت ۋە سەنئەت",
            "ساغلاملىق تەربىيەسى ۋە جىسمانىي تەربىيە"
          ],
          goals: [
            "ئاساسىي ساۋات ۋە ھېسابلاش قابىلىيىتى",
            "ئانا تىلدا ئىپادىلەش ئىقتىدارى",
            "جەمئىيەتتە ئورۇن ئېلىش",
            "ئەخلاقىي قىممەتلەرنى ئۆگىنىش"
          ],
          color: "from-green-600 to-emerald-500"
        },
        {
          name: "ئوتتۇرا مائارىپ",
          uyghurName: "ئوتتۇرا مائارىپ",
          icon: <BookOpen className="w-6 h-6" />,
          duration: "6 يىل (ئاساسىي 3 يىل + ئالى 3 يىل)",
          age: "11-18 ياش",
          status: "مەجبۇرىي (9 يىل)، تاللاشلاش (3 يىل)",
          branches: [
            {
              type: "ئومۇمىي ئوتتۇرا مائارىپ",
              target: "ئالىي مائارىپقا تەييارلىق",
              duration: "3 يىل",
              subjects: ["ئۇيغۇر تىلى", "ماتېماتىكا", "ئىنگلىز تىلى", "تارىخ", "فىزىكا", "خىمىيە", "بىئولوگىيە"]
            },
            {
              type: "كەسپىي-تېخنىكا مائارىپى",
              target: "خىزمەت بىلىملىرى",
              duration: "3-4 يىل",
              subjects: ["ماشىناسازلىق", "قۇرۇلۇش", "ئېلېكتىر", "كومپيۇتېر تېخنىكىسى", "تىجارەت باشقۇرۇش"]
            },
            {
              type: "سەنئەت مائارىپى",
              target: "سەنئەتچى ۋە مەدەنىيەت ئىشلىرى",
              duration: "3 يىل",
              subjects: ["مۇزىكا", "رەسساملىق", "ئۇسسۇل", "تېياتىر", "ئەدەبىيات"]
            }
          ],
          exams: [
            {
              name: "ئاساسىي مائارىپ پۈتتۈرۈش ئىمتىھانى",
              level: "9-يىللىق مەجبۇرىي مائارىپ",
              purpose: "مەجبۇرىي مائارىپنى تاماملاش"
            },
            {
              name: "ئالىي مائارىپ كىرىش ئىمتىھانى",
              level: "تولۇق ئوتتۇرا مائارىپ",
              purpose: "ئالىي مائارىپقا كىرىش"
            }
          ],
          color: "from-blue-600 to-sky-500"
        },
        {
          name: "ئالىي مائارىپ",
          uyghurName: "ئالىي مائارىپ",
          icon: <GraduationCap className="w-6 h-6" />,
          degrees: [
            {
              level: "باكالاۋر دەرىجىسى",
              uyghurName: "باكالاۋر",
              duration: "4-5 يىل",
              requirements: [
                "ئوتتۇرا مائارىپ پۈتتۈرۈش",
                "ئالىي مائارىپ كىرىش ئىمتىھانى",
                "ئىختىساسلاشقان كىرىش ئىمتىھانى"
              ],
              fields: [
                "گۇمانتار پەنلىرى: ئەدەبىيات، تارىخ، پەلسەپە",
                "تەبىئىي پەنلەر: ماتېماتىكا، فىزىكا، خىمىيە",
                "ئىجتىمائىي پەنلەر: سىياسەت، ئىقتىساد، قانۇن",
                "تېخنىكا پەنلىرى: كومپيۇتېر، قۇرۇلۇش، ماشىناسازلىق",
                "سانائەت پەنلىرى: تىبابەت، پەن، تىجارەت"
              ]
            },
            {
              level: "ماگىستىرلىق دەرىجىسى",
              uyghurName: "ماگىستىر",
              duration: "2-3 يىل",
              requirements: [
                "باكالاۋر دەرىجىسى",
                "ماگىستىر كىرىش ئىمتىھانى",
                "ئوقۇتقۇچى تەۋسىيەسى",
                "ئىلمىي ماقالە يېزىش"
              ],
              focus: "ئىختىساسلاشقان تەتقىقات ۋە تەھلىل"
            },
            {
              level: "دوكتۇرلۇق دەرىجىسى (PhD)",
              uyghurName: "دوكتۇر",
              duration: "3-5 يىل",
              requirements: [
                "ماگىستىر دەرىجىسى",
                "دوكتۇر كىرىش ئىمتىھانى",
                "ئىلمىي تەتقىقات پىلانى",
                "دېسسېرتاتسىيە ۋە مۇداپىئە"
              ],
              focus: "ئىلمىي تەتقىقات ۋە يېڭىلىق يارىتىش"
            }
          ],
          color: "from-purple-600 to-violet-500"
        }
      ],
      teacherTraining: {
        title: "ئوقۇتقۇچىلار تەربىيىلەش سىستېمىسى",
        levels: [
          {
            position: "باشلانغۇچ مائارىپ ئوقۇتقۇچىسى",
            education: "2-3 يىللىق پەن ئوقۇتقۇچىلىق كوللېژى",
            certificate: "ئوقۇتقۇچىلىق گۇۋاھنامىسى",
            responsibilities: ["ئاساسىي بىلىم", "تەربىيە ئۇسۇللىرى", "بالىلار بىلەن ئالاقە"]
          },
          {
            position: "ئوتتۇرا مائارىپ ئوقۇتقۇچىسى",
            education: "4 يىللىق پەن ئوقۇتقۇچىلىق ئىنستىتۇتى",
            certificate: "باكالاۋر دەرىجىسى ۋە ئوقۇتقۇچىلىق گۇۋاھنامىسى",
            responsibilities: ["ئىختىساسلاشقان پەن", "ئوتتۇرا مائارىپ پروگراممىسى", "يېتىلدۈرۈش مەقسەتلىرى"]
          },
          {
            position: "ئالىي مائارىپ ئوقۇتقۇچىسى",
            education: "ماگىستىر ياكى دوكتۇرلۇق دەرىجىسى",
            ranks: ["ئوقۇتقۇچى", "باش ئوقۇتقۇچى", "پروفېسسور", "مۇدىر"],
            responsibilities: ["ئىلمىي تەتقىقات", "ئوقۇتقۇچىلىق", "ئىلمىي يېتەكچىلىك"]
          }
        ]
      }
    }
  };

  // قەدىمكى ۋە زامانىۋى مائارىپنىڭ پەرقلىرى
  const comparison = [
    {
      aspect: "مائارىپ مەقسىتى",
      ancient: "ئەخلاق، دىن، جامائەت ئەزاسى بولۇش",
      modern: "كەسپىي بىلىم، ئىشقا ئورۇنلىشىش، جەمئىيەتكە تۆھپە قوشۇش"
    },
    {
      aspect: "ئوقۇتۇش تىلى",
      ancient: "قەدىمكى ئۇيغۇرچە، سەنكىرىت، ئەرەبچە",
      modern: "ئۇيغۇرچە (لاتىن/ئەرەب يېزىقى)، خەنزۇچە، ئىنگلىزچە"
    },
    {
      aspect: "ئوقۇتۇش ئۇسۇلى",
      ancient: "ئەۋلادتىن-ئەۋلادقا، ئۇستاز-شاگىرت، تەجرىبىي ئۆگىنىش",
      modern: "سىنىپ ئوقۇتۇش، ئاكادېمىك پروگرامما، دىجىتال قوراللار"
    },
    {
      aspect: "بىلىم مەنبەسى",
      ancient: "كوللېكتىپ ھېكمەت، دىنىي مەنبەلەر، تەجرىبە",
      modern: "ئىلمىي تەتقىقات، ئاكادېمىك نەشرىيات، خەلقئارالىق ئالماشتۇرۇش"
    },
    {
      aspect: "كەسپىي تەربىيە",
      ancient: "كەسپىي ئۇستازلار تەربىيىسى، ئائىۋى تارقىتىش",
      modern: "ئاكادېمىك دەرىجە، كەسپىي گۇۋاھنامە، خەلقئارالىق تېپىشلار"
    },
    {
      aspect: "مائارىپ قۇرۇلمىسى",
      ancient: "ئائىلە ۋە ئىجتىمائىي قاتلام",
      modern: "مەكتەپ، كوللېژ، ئۇنۋېرسىتېت، دۆلەت سىستېمىسى"
    },
    {
      aspect: "تەربىيە مەزمۇنى",
      ancient: "ئەخلاق، دىن، ئەنئەنىۋى كەسىپلەر",
      modern: "پەن-تېخنىكا، خەلقئارالىق بىلىم، زامانىۋى كەسىپلەر"
    }
  ];

  // ئوخشاشلىقلار
  const similarities = [
    "ئەخلاق ۋە ئىنسانىي قىممەتلەرنىڭ ئاساس قىلىنىشى",
    "ئۇستاز-شاگىرت مۇناسىۋىتىگە ھۆرمەت",
    "مەدەنىيەت مېراسىنى داۋاملاشتۇرۇش",
    "جەمئىيەت ئىچىدە ئورۇن ئېلىش تەربىيەسى",
    "تىل ۋە يېزىقنىڭ مۇھىم رول ئويناپ تۇرۇشى",
    "بىلىم ۋە ئىلىمنىڭ قىممەتلىك دەپ قارىلىشى",
    "جامائەت پايدىسى ئۈچۈن كەسپىيلەر يېتىلدۈرۈش"
  ];

  // ھازىرقى چەتلىكلەر
  const currentChallenges = [
    {
      challenge: "تىل ۋە يېزىق مەسىلىسى",
      description: "ئۇيغۇر تىلى ۋە يېزىقىنىڭ مائارىپتىكى ئورنى",
      impact: "ئانا تىلدا ئوقۇتۇشنىڭ چەكلىمىسى ۋە قوللىنىش دائىرىسى"
    },
    {
      challenge: "دىجىتال مائارىپ قوراللىرى",
      description: "زامانىۋى تېخنىكىلار بىلەن تەمىنلەش",
      impact: "شەھەر ۋە يېزىلار ئارىسىدىكى دىجىتال پەرق"
    },
    {
      challenge: "مائارىپ سىستېمىسىنىڭ تەرەققىياتى",
      description: "خەلقئارالىق سەۋىيەگە يېتىش",
      impact: "ئوقۇتقۇچى سانى، ئوقۇتۇش قوراللىرى ۋە ئىلمىي مۇھىت"
    },
    {
      challenge: "مەدەنىيەت ۋە زامانىۋىلىق",
      description: "ئەنئەنىۋى مەدەنىيەت بىلەن زامانىۋى بىلىمنى تەڭشەش",
      impact: "ئۇيغۇر مەدەنىيىتىنى ساقلاش ۋە زامانىۋى بىلىم ئېلىش"
    }
  ];

  // ئىستاتىستىكىلار
  const statistics = [
    { label: "باشلانغۇچ مائارىپ ئوقۇغۇچى سانى", value: "1.5 مىليون+", color: "text-green-600" },
    { label: "ئوتتۇرا مائارىپ ئوقۇغۇچى سانى", value: "800,000+", color: "text-blue-600" },
    { label: "ئالىي مائارىپ ئوقۇغۇچى سانى", value: "200,000+", color: "text-purple-600" },
    { label: "ئوقۇتقۇچى سانى", value: "100,000+", color: "text-amber-600" },
    { label: "مائارىپ ئورۇنلىرى سانى", value: "8,000+", color: "text-red-600" },
    { label: "ئالىي مائارىپ ئورۇنلىرى", value: "50+", color: "text-indigo-600" }
  ];

  return (
    <div className="space-y-8 font-['UKIJ_Tuz','UKIJ_Nasq','Microsoft_Uighur',sans-serif]" dir="rtl">
      {/* ماۋزۇ باش بەلگىسى */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl text-white shadow-md">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-amber-900 mb-1">ئۇيغۇر مائارىپ سىستېمىسى</h1>
              <p className="text-amber-700 text-lg">
                قەدىمكى ئەنئەنىدىن زامانىۋى سىستېمىغىچە بولغان تەرەققىيات يولى
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActivePeriod('ancient')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activePeriod === 'ancient' ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            >
              <History className="w-4 h-4" />
              قەدىمكى
            </button>
            <button
              onClick={() => setActivePeriod('islam')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activePeriod === 'islam' ? 'bg-emerald-600 text-white shadow-md' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}
            >
              <BookMarked className="w-4 h-4" />
              ئىسلامىي
            </button>
            <button
              onClick={() => setActivePeriod('modern')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${activePeriod === 'modern' ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
            >
              <Sparkles className="w-4 h-4" />
              زامانىۋى
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

      {/* ھازىرقى زامانىۋى مائارىپ سىستېمىسى */}
      {activePeriod === 'modern' && (
        <div className="space-y-8">
          {/* مائارىپ سىستېمىسى قۇرۇلمىسى */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Layers className="w-6 h-6 text-blue-600" />
              زامانىۋى ئۇيغۇر مائارىپ سىستېمىسى قۇرۇلمىسى
            </h2>
            
            {/* مائارىپ باسقۇچلىرى كۆرسىتىمى */}
            <div className="relative mb-8">
              <div className="flex flex-col lg:flex-row items-stretch gap-6">
                {modernEducation.structure.levels.map((level, index) => (
                  <div key={index} className="flex-1">
                    <div className={`bg-gradient-to-r ${level.color} text-white rounded-xl p-5 h-full shadow-md`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          {level.icon}
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
                        
                        {level.status && (
                          <div className="bg-white/20 px-3 py-1 rounded-full text-center">
                            <span className="text-sm">{level.status}</span>
                          </div>
                        )}
                        
                        {level.curriculum && (
                          <div>
                            <div className="text-sm font-medium mb-1">ئاساسىي پەنلەر:</div>
                            <div className="flex flex-wrap gap-1">
                              {level.curriculum.slice(0, 3).map((subject, idx) => (
                                <span key={idx} className="px-2 py-0.5 bg-white/20 text-xs rounded">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {level.branches && (
                          <div>
                            <div className="text-sm font-medium mb-1">تارماقلار:</div>
                            <div className="space-y-1">
                              {level.branches.map((branch, idx) => (
                                <div key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">
                                  {branch.type}
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
                                  <span>{degree.uyghurName}</span>
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
              
              {/* ئوقۇتقۇچىلار تەربىيىلەش سىستېمىسى */}
              <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-amber-600" />
                  {modernEducation.structure.teacherTraining.title}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {modernEducation.structure.teacherTraining.levels.map((teacher, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2">{teacher.position}</h4>
                      <p className="text-sm text-gray-600 mb-3">{teacher.education}</p>
                      
                      {teacher.certificate && (
                        <div className="mb-3">
                          <div className="text-xs text-gray-500">گۇۋاھنامە:</div>
                          <div className="text-sm font-medium text-blue-600">{teacher.certificate}</div>
                        </div>
                      )}
                      
                      {teacher.ranks && (
                        <div className="mb-3">
                          <div className="text-xs text-gray-500">دەرىجىلەر:</div>
                          <div className="flex flex-wrap gap-1">
                            {teacher.ranks.map((rank, rIdx) => (
                              <span key={rIdx} className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded">
                                {rank}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {teacher.responsibilities && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">مەسئۇلىيەت:</div>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {teacher.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-1">
                                <ChevronLeft className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* تەپسىلىي مەلۇماتلار */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* ئوقۇتۇش پروگراممىلىرى */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                ئوقۇتۇش پروگراممىلىرى ۋە مەزمۇنلار
              </h3>
              
              <div className="space-y-4">
                {modernEducation.structure.levels.map((level, idx) => (
                  <div key={idx} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-800 mb-2">{level.name}</h4>
                    
                    {level.curriculum && (
                      <div className="mb-2">
                        <div className="text-sm text-gray-600 mb-1">ئاساسىي پەنلەر:</div>
                        <div className="flex flex-wrap gap-1">
                          {level.curriculum.map((subject, sIdx) => (
                            <span key={sIdx} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {level.goals && (
                      <div>
                        <div className="text-sm text-gray-600 mb-1">مەقسەتلەر:</div>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {level.goals.map((goal, gIdx) => (
                            <li key={gIdx} className="flex items-start gap-1">
                              <Target className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {level.branches && (
                      <div className="mt-2">
                        <div className="text-sm text-gray-600 mb-1">تارماقلار:</div>
                        {level.branches.map((branch, bIdx) => (
                          <div key={bIdx} className="mb-2 last:mb-0">
                            <div className="font-medium text-gray-700">{branch.type}</div>
                            <div className="text-sm text-gray-600">{branch.target} • {branch.duration}</div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {branch.subjects.slice(0, 3).map((subject, sIdx) => (
                                <span key={sIdx} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {level.exams && (
                      <div className="mt-2">
                        <div className="text-sm text-gray-600 mb-1">مۇھىم ئىمتىھانلار:</div>
                        {level.exams.map((exam, eIdx) => (
                          <div key={eIdx} className="mb-2 last:mb-0">
                            <div className="font-medium text-gray-700">{exam.name}</div>
                            <div className="text-xs text-gray-600">{exam.level} • {exam.purpose}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* ئالىي مائارىپ دەرىجىلىرى */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                ئالىي مائارىپ دەرىجىلىرى ۋە تەلەپلەر
              </h3>
              
              <div className="space-y-4">
                {modernEducation.structure.levels[2].degrees.map((degree, idx) => (
                  <div key={idx} className={`border-l-4 ${idx === 0 ? 'border-green-400' : idx === 1 ? 'border-blue-400' : 'border-purple-400'} pl-4 py-2`}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h4 className="font-bold text-gray-800">{degree.level}</h4>
                        <p className="text-sm text-gray-600">{degree.uyghurName}</p>
                      </div>
                      <span className="text-sm font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {degree.duration}
                      </span>
                    </div>
                    
                    {degree.focus && (
                      <p className="text-sm text-gray-700 mb-2">{degree.focus}</p>
                    )}
                    
                    {degree.requirements && (
                      <div className="mb-2">
                        <div className="text-xs text-gray-500 mb-1">تەلەپلەر:</div>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {degree.requirements.map((req, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-1">
                              <CircleCheck className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {degree.fields && (
                      <div>
                        <div className="text-xs text-gray-500 mb-1">ئىختىساسلار:</div>
                        <div className="flex flex-wrap gap-1">
                          {degree.fields.slice(0, 4).map((field, fIdx) => (
                            <span key={fIdx} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* چەتلىكلەر ۋە كەلگۈسى */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* ھازىرقى چەتلىكلەر */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-red-600" />
                ھازىرقى چەتلىكلەر ۋە مەسىلىلەر
              </h3>
              
              <div className="space-y-4">
                {currentChallenges.map((challenge, idx) => (
                  <div key={idx} className="border-l-4 border-red-300 pl-4 py-2 bg-red-50 rounded-r">
                    <h4 className="font-bold text-red-800">{challenge.challenge}</h4>
                    <p className="text-sm text-gray-700 mb-1">{challenge.description}</p>
                    <div className="text-xs text-red-600">تەسىرى: {challenge.impact}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* پەرقلەر ۋە ئوخشاشلىقلار */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                پەرقلەر ۋە ئوخشاشلىقلار
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">ئوخشاشلىقلار:</h4>
                  <div className="space-y-2">
                    {similarities.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <HeartHandshake className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">مائارىپ قىممەتلىرى:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 bg-white rounded border shadow-sm">
                      <div className="font-bold text-green-700">ئەخلاق</div>
                      <div className="text-xs text-gray-600">ئىنسانىي قىممەتلەر</div>
                    </div>
                    <div className="text-center p-2 bg-white rounded border shadow-sm">
                      <div className="font-bold text-green-700">بىلىم</div>
                      <div className="text-xs text-gray-600">ئىلمىي ئەقىل</div>
                    </div>
                    <div className="text-center p-2 bg-white rounded border shadow-sm">
                      <div className="font-bold text-green-700">مەدەنىيەت</div>
                      <div className="text-xs text-gray-600">مېراسنى قوغداش</div>
                    </div>
                    <div className="text-center p-2 bg-white rounded border shadow-sm">
                      <div className="font-bold text-green-700">جەمئىيەت</div>
                      <div className="text-xs text-gray-600">ئىجتىمائىي مەسئۇلىيەت</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* قەدىمكى مائارىپ */}
      {activePeriod === 'ancient' && (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <History className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-900">{ancientEducation.period}</h2>
                <p className="text-amber-700">
                  قەدىمكى ئۇيغۇرلار ئورخۇن يېزىقى، سەنكىرىت ۋە ئەمەلىيەت ئارقىلىق بىلىم يېتىشتۈرگەن.
                  بۇ دەۋردە مائارىپ ئائىلە ۋە ئىجتىمائىي قاتلام ئىچىدە ئېلىپ بېرىلغان.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {ancientEducation.characteristics.map((char, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br ${char.color} rounded-lg text-white`}>
                      {char.icon}
                    </div>
                    <h3 className="font-bold text-amber-800 text-lg">{char.title}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">{char.details}</p>
                  
                  <ul className="space-y-2">
                    {char.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* ھېكمەتلەر */}
            <div className="mt-6 p-4 bg-amber-100 rounded-xl border border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                قەدىمكى ھېكمەتلەر
              </h4>
              <div className="space-y-2">
                {ancientEducation.quotes.map((quote, idx) => (
                  <div key={idx} className="italic text-amber-800 text-sm border-r-4 border-amber-400 pr-3">
                    "{quote}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ئىسلام دەۋرى مائارىپى */}
      {activePeriod === 'islam' && (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <BookMarked className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-900">{islamicEducation.period}</h2>
                <p className="text-emerald-700">
                  ئىسلام دىنىنىڭ قوبۇل قىلىنىشى بىلەن مەدرىسىلىك سىستېمىسى كەڭ تارقىلىپ، 
                  دىنىي ۋە دىنىي بولمىغان بىلىملەرنىڭ بىرلىكتە ئوقۇتۇلۇشىغا يول قويغان.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {islamicEducation.characteristics.map((char, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br ${char.color} rounded-lg text-white`}>
                      {char.icon}
                    </div>
                    <h3 className="font-bold text-emerald-800 text-lg">{char.title}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">{char.details}</p>
                  
                  <ul className="space-y-2">
                    {char.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* نەتىجىلەر */}
            <div className="mt-6">
              <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                نەتىجىلەر ۋە تۆھپىلەر
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {islamicEducation.achievements.map((achievement, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-emerald-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="font-medium text-emerald-700">مۇھىم نەتىجە</span>
                    </div>
                    <p className="text-sm text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* خۇلاسە ۋە كەلگۈسى */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-300 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          خۇلاسە ۋە كەلگۈسى يۆنىلىش
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-700 mb-3">تەرەققىيات يولى:</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                  ١
                </div>
                <div>
                  <div className="font-bold text-amber-800">قەدىمكى دەۋر</div>
                  <div className="text-sm text-gray-600">ئائىلە ۋە ئەنئەنىۋى بىلىم</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white font-bold">
                  ٢
                </div>
                <div>
                  <div className="font-bold text-emerald-800">ئىسلامىي دەۋر</div>
                  <div className="text-sm text-gray-600">دىنىي-ئىلىمىي بىلىم بىرلىكى</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  ٣
                </div>
                <div>
                  <div className="font-bold text-blue-800">زامانىۋى دەۋر</div>
                  <div className="text-sm text-gray-600">ئاكادېمىك ۋە كەسپىي سىستېما</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-3">كەلگۈسىدە ئەڭ مۇھىم:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { text: "دىجىتال مائارىپ", color: "bg-blue-100 text-blue-800" },
                { text: "تىل ساقلاش", color: "bg-green-100 text-green-800" },
                { text: "خەلقئارالىق ئالماشتۇرۇش", color: "bg-purple-100 text-purple-800" },
                { text: "مەدەنىيەت مېراسى", color: "bg-amber-100 text-amber-800" },
                { text: "ئانا تىلدا ئوقۇتۇش", color: "bg-red-100 text-red-800" },
                { text: "ئىلمىي تەتقىقات", color: "bg-indigo-100 text-indigo-800" },
                { text: "كەسپىي يېتىلدۈرۈش", color: "bg-teal-100 text-teal-800" },
                { text: "ئەخلاق ۋە قىممەتلەر", color: "bg-yellow-100 text-yellow-800" }
              ].map((item, idx) => (
                <span key={idx} className={`px-3 py-1.5 rounded-full text-sm font-medium ${item.color}`}>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UyghurEduModule;