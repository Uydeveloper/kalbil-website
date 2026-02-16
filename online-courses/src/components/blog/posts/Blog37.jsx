// src/components/Blog37.jsx - 1927 Solvay Conference Quantum Legends
import React, { useState, useEffect } from 'react';
import { 
  FaAward, 
  FaAtom, 
  FaLightbulb, 
  FaUserGraduate, 
  FaFilter,
  FaGlobeAmericas,
  FaMicroscope,
  FaBrain,
  FaCogs,
  FaBook,
  FaQuoteLeft,
  FaUniversity,
  FaChartLine,
  FaSeedling,
  FaFlask,
  FaRadiation,
  FaMagnet,
  FaWaveSquare,
  FaBalanceScale,
  FaCalculator,
  FaCube,
  FaCloud,
  FaStar,
  FaBookOpen,
  FaGraduationCap,
  FaRocket,
  FaCrown,
  FaFire,
  FaShieldAlt,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp
} from 'react-icons/fa';
import { 
  GiAtomicSlashes, 
  GiMagnet,
  GiCrystalGrowth,
  GiChemicalDrop,
  GiMolecule,
  GiCrossedSwords,
  GiCrownedSkull,
  GiSpectacleLenses,
  GiLightningHelix,
  GiAbstract024,
  GiSpinningBlades,
  GiCogLock
} from 'react-icons/gi';
import { 
  SiNobelprize,
  SiCern,
  SiGooglescholar,
  SiPhysics,
  SiMatrix
} from 'react-icons/si';
import { 
  MdScience,
  MdTimeline,
  MdLocationOn,
  MdSchool,
  MdWorkspacePremium
} from 'react-icons/md';

const Blog37 = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScientist, setSelectedScientist] = useState(null);
  const [activeTab, setActiveTab] = useState('contributions');
  const [sortBy, setSortBy] = useState('influence');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState('grid');

  // 29 ئالىمنىڭ تولۇق تىزىملىكى
  const scientists = [
    {
      id: 1,
      name: "Albert Einstein",
      fullName: "Albert Einstein",
      birthDeath: "1879-1955",
      country: "Germany/Switzerland/USA",
      flag: "🇩🇪 🇨🇭 🇺🇸",
      countryCode: "de",
      nobel: { year: 1921, field: "Photoelectric Effect" },
      description: "كىۋانت فىزىكىسىنىڭ ئاتىسى دەپ ئاتىلىدۇ. رېلاتىۋىلىك نەزەرىيەسى ۋە فوتو ئېلېكتىر ئۈنۈمىنى كەشپ قىلدى. كىۋانت فىزىكىسىنىڭ تاسادىپىيلىقىغا قارشى چىقىپ 'خۇدا زار ئوينايدۇ' دېگەن گۇماننى ئوتتۇرىغا قويدى.",
      contributions: [
        "فوتو ئېلېكتىر ئۈنۈمىنى كەشپ قىلىش",
        "ئالاھىدە رېلاتىۋىلىك نەزەرىيەسى",
        "ئومۇمىي رېلاتىۋىلىك نەزەرىيەسى",
        "E=mc² ماسسا-ئېنېرگىيە تەڭلىمىسى",
        "كىۋانت ئىلمىنىڭ ئاساسى"
      ],
      applications: [
        "سولار پانېللار",
        "كامېرا سېنسورلىرى", 
        "GPS سىستېمىسى",
        "ئاتوم ئېنېرگىيەسى",
        "ئاستروفيزىكا"
      ],
      quotes: [
        "ئىنسانىيەتنىڭ ئەڭ گۈزەل تەجرىبىسى سىرنى تېپىش ۋە چۈشىنىشتۇر.",
        "ئەقىل ئىزچىل مۇرەككەپ مەسىلىلەرنى ساددە قىلىشنىڭ نامىدۇر.",
        "ھەممە نەرسىنىڭ مۇمكىن بولۇشى مۇمكىن، ئەمما ئەمەلىيەتتە ئەمەس."
      ],
      education: "ETH Zurich, University of Zurich",
      portrait: "AE",
      category: ["nobel", "theory", "foundational", "relativity", "iconic"],
      timeline: [
        { year: 1905, event: "ئالاھىدە رېلاتىۋىلىك نەزەرىيەسى" },
        { year: 1921, event: "نوبېل مۇكاپاتى" },
        { year: 1915, event: "ئومۇمىي رېلاتىۋىلىك نەزەرىيەسى" },
        { year: 1933, event: "ئامېرىكىغا كۆچۈش" }
      ],
      influence: 10,
      color: "from-yellow-500 via-orange-500 to-red-500",
      signatureColor: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      name: "Niels Bohr",
      fullName: "Niels Henrik David Bohr",
      birthDeath: "1885-1962", 
      country: "Denmark",
      flag: "🇩🇰",
      countryCode: "dk",
      nobel: { year: 1922, field: "Atom Model" },
      description: "بور ئاتوم مودېلىنى ئىجاد قىلىپ، ئېلېكترونلارنىڭ بەلگىلەنگەن ئوربىتالاردا ئايلىنىدىغانلىقىنى ئىسپاتلىدى. كوپېنھاگېن چۈشەنچىسىنىڭ قۇرغۇچىسى بولۇپ، كىۋانت فىزىكىسىنىڭ تەرەققىياتىغا زور تۆھپە قوشتى.",
      contributions: [
        "بور ئاتوم مودېلى",
        "ئېلېكترون ئوربىتالار نەزەرىيەسى", 
        "كۇۋانتلاش شەرتى",
        "كوپېنھاگېن چۈشەنچىسى",
        "يادرو فىزىكىسى"
      ],
      applications: [
        "LED لامپا",
        "لازېر تېخنىكىسى", 
        "سپېكتروسكوپىيە",
        "يادرو فىزىكىسى",
        "كىمىياۋى باغلىنىش"
      ],
      quotes: [
        "ئەگەر كىۋانت مېخانىكىسى سىزنى ھەيران قالدۇرمايدىكەن، سىز ئۇنى چۈشەنمىدىڭىز.",
        "ھەقىقىي مۇرەككەپلىك سىز چۈشەنمەيدىغان نەرسىلەر ئەمەس، چۈشەنگەن نەرسىلەردۇر.",
        "ھەر بىر چۈشەنمە ئۆزىگە خاس چۈشەنمە بولۇپ قالىدۇ."
      ],
      education: "University of Copenhagen",
      portrait: "NB",
      category: ["nobel", "theory", "foundational", "atomic", "quantum"],
      timeline: [
        { year: 1913, event: "بور ئاتوم مودېلى" },
        { year: 1922, event: "نوبېل مۇكاپاتى" },
        { year: 1927, event: "كوپېنھاگېن چۈشەنچىسى" },
        { year: 1943, event: "ئامېرىكىغا قېچىش" }
      ],
      influence: 9,
      color: "from-blue-500 via-cyan-500 to-teal-500",
      signatureColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Marie Curie",
      fullName: "Maria Salomea Skłodowska-Curie",
      birthDeath: "1867-1934",
      country: "Poland/France",
      flag: "🇵🇱 🇫🇷",
      countryCode: "pl",
      nobel: { year: "1903, 1911", field: "Radioactivity, Chemistry" },
      description: "رادىئو ئاكتىپلىقنى كەشپ قىلىپ، رادىيۇم ۋە پولونىيۇم ئېلېمېنتلىرىنى ئايرىپ ئالدى. تارىختىكى بىرىنچى ئايال نوبېل مۇكاپاتىغا ئېرىشكۈچى ۋە ئىككى خىل پەن بويىچە نوبېل مۇكاپاتىغا ئېرىشكەن يەككە ئالىم.",
      contributions: [
        "رادىئو ئاكتىپلىقنى كەشپ قىلىش",
        "رادىيۇم ۋە پولونىيۇمنى ئايرىپ ئېلىش",
        "ئىزوتوپلار ھەققىدە تەتقىقات",
        "رادىئو تېراپىيەنى ئىشقا ئاشۇرۇش",
        "ئايال ئالىملارنىڭ يول باشلىغۇچىسى"
      ],
      applications: [
        "كەمسىتۇر تېراپىيەسى",
        "رادىئو دىاگنوز",
        "ئاتوم ئېنېرگىيەسى",
        "تېببىي ئىمىجلىش",
        "رادىئو ئىزوتوپلار"
      ],
      quotes: [
        "ھاياتتا ھېچنەرسىدىن قورقما، پەقەت چۈشىنىڭ. ھازىر چۈشەنگىلى بولىدىغان نەرسىلەر كۆپ.",
        "ھېچكىم تۇيۇپ بىلمەيدىغان يولدا ماڭغاندا، ئىنسان يېڭى يوللارنى كۆرۈپ چىقىدۇ.",
        "بىز ھاياتتا ئۆزىمىزگە ئەڭ مۇھىم بولغان نەرسىلەرنى ئويلىشىمىز كېرەك."
      ],
      education: "University of Paris, Sorbonne",
      portrait: "MC",
      category: ["nobel", "application", "radioactivity", "woman", "pioneer"],
      timeline: [
        { year: 1903, event: "فىزىكا نوبېل مۇكاپاتى" },
        { year: 1911, event: "كىمىيا نوبېل مۇكاپاتى" },
        { year: 1906, event: "پروفېسسور بولۇش (بىرىنچى ئايال)" },
        { year: 1934, event: "ۋاپات بولدى" }
      ],
      influence: 10,
      color: "from-purple-500 via-pink-500 to-rose-500",
      signatureColor: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Erwin Schrödinger",
      fullName: "Erwin Rudolf Josef Alexander Schrödinger",
      birthDeath: "1887-1961",
      country: "Austria",
      flag: "🇦🇹",
      countryCode: "at",
      nobel: { year: 1933, field: "Wave Equation" },
      description: "شېردىنگېر تەڭلىمىسىنى ئىجاد قىلىپ، ئېلېكترونلارنىڭ دولقۇن خاراكتېرىنى رەسىمىيلاشتۇردى. 'شېردىنگېر مۈشۈكى' دىگەن ئىلمىي تەجرىبە ئارقىلىق كىۋانت سۇپېرپوزىتسىيەسىنى چۈشەندۈردى.",
      contributions: [
        "شېردىنگېر تەڭلىمىسى",
        "كىۋانت مېخانىكىسىنىڭ دولقۇن فورمۇلاسىيەسى",
        "شېردىنگېر مۈشۈكى تەجرىبىسى",
        "كىۋانت سۇپېرپوزىتسىيە نەزەرىيەسى",
        "كىۋانت دولقۇن فونكسىيەسى"
      ],
      applications: [
        "كىۋانت سىمۇلياتسىيەسى",
        "يادرو فىزىكىسى",
        "مولېكۇلا دىنامىكىسى",
        "كىۋانت كېمىسى",
        "كىۋانت كومپيۇتېر"
      ],
      quotes: [
        "مېخانىكا قانۇنلىرى قانچىلىك توغرا بولۇشىدىن قەتئىينەزەر، ئۇلار پەقەت خاتىرىلەرنىڭ ئىپادىسىدۇر.",
        "ھاياتنىڭ مەزمۇنى پەقەت كىملىكىڭىزنى تېپىشتۇر.",
        "ئەڭ گۈزەل تەجرىبە سىرنى تېپىش ئەمەس، سىرنىڭ بارلىقىنى ھېس قىلىشتۇر."
      ],
      education: "University of Vienna",
      portrait: "ES",
      category: ["nobel", "theory", "wave", "quantum"],
      timeline: [
        { year: 1926, event: "شېردىنگېر تەڭلىمىسى" },
        { year: 1933, event: "نوبېل مۇكاپاتى" },
        { year: 1935, event: "شېردىنگېر مۈشۈكى تەجرىبىسى" },
        { year: 1944, event: "ھايات نېمە؟ كىتابى" }
      ],
      influence: 8,
      color: "from-green-500 via-emerald-500 to-lime-500",
      signatureColor: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      id: 5,
      name: "Werner Heisenberg",
      fullName: "Werner Karl Heisenberg",
      birthDeath: "1901-1976",
      country: "Germany",
      flag: "🇩🇪",
      countryCode: "de",
      nobel: { year: 1932, field: "Uncertainty Principle" },
      description: "ئەنسەرلىك پرىنسىپىنى كەشپ قىلىپ، بىر زەررىچىنىڭ ئورۇنى ۋە تېزلىكىنى بىرلا ۋاقىتتا ئېنىق ئۆلچەش مۇمكىن ئەمەسلىكىنى ئىسپاتلىدى. ماترىتسا مېخانىكىسىنى ئىجاد قىلدى.",
      contributions: [
        "ئەنسەرلىك پرىنسىپى",
        "ماترىتسا مېخانىكىسى",
        "يادرو فىزىكىسى",
        "S-ماترىتسا نەزەرىيەسى",
        "كىۋانت تەھلىل"
      ],
      applications: [
        "كىۋانت بىخەتەرلىكى",
        "كىۋانت ئەقىل ماشىنىسى",
        "ئاتوم ئۆلچەش ئۈسكۈنىلىرى",
        "مىكروسكوپىيە",
        "كىۋانت ئالگورىزىم"
      ],
      quotes: [
        "بىز پەقەت بىز كۆرگەن نەرسىلەر توغرىسىدا سۆزلىشىمىز كېرەك، ئەمما بىز كۆرمىگەن نەرسىلەر توغرىسىدا ئەمەس.",
        "بىلىم ئەمەلىيەتنىڭ شەكىللىنىشىگە تەسىر كۆرسىتىدۇ.",
        "ھەر بىر مەسىلىنىڭ ئۆزىگە خاس چەكلىمىسى بار."
      ],
      education: "University of Munich, University of Göttingen",
      portrait: "WH",
      category: ["nobel", "theory", "uncertainty", "matrix"],
      timeline: [
        { year: 1927, event: "ئەنسەرلىك پرىنسىپى" },
        { year: 1932, event: "نوبېل مۇكاپاتى" },
        { year: 1942, event: "يادرو رېئاكتور پروگراممىسى" },
        { year: 1958, event: "CERN نىڭ ئاساسىنى قۇرۇش" }
      ],
      influence: 9,
      color: "from-red-500 via-rose-500 to-pink-500",
      signatureColor: "bg-gradient-to-r from-red-500 to-rose-500"
    },
    {
      id: 6,
      name: "Paul Dirac",
      fullName: "Paul Adrien Maurice Dirac",
      birthDeath: "1902-1984",
      country: "United Kingdom",
      flag: "🇬🇧",
      countryCode: "gb",
      nobel: { year: 1933, field: "Relativistic QM" },
      description: "دىراك تەڭلىمىسى ئارقىلىق ئېلېكتروننىڭ رېلاتىۋىستىك ھەرىكىتىنى چۈشەندۈردى ۋە ئانتىماتېرىيەنىڭ مەۋجۇتلۇقىنى ئالدىن بىلدۈردى. كىۋانت فىزىكىسى ۋە رېلاتىۋىلىك نەزەرىيەسىنى بىرلەشتۈردى.",
      contributions: [
        "دىراك تەڭلىمىسى",
        "ئانتىماتېرىيەنى ئالدىن بىلدۈرۈش",
        "كىۋانت ئەھۋالىنىڭ برا-كېت نۇتۇقى",
        "رېلاتىۋىستىك كىۋانت مېخانىكىسى",
        "دىراك دېلتا فونكسىيەسى"
      ],
      applications: [
        "PET سكانلىرى",
        "بوزون-ئېلېكترون كوللىدېرلىرى",
        "ئاستروفيزىكا",
        "كىۋانت كېمىسى",
        "پارتىكلەر فىزىكىسى"
      ],
      quotes: [
        "گۈزەل تەڭلىمە ئىجاد قىلىش داۋاملىق پەيلاسوپلۇق مەسىلە.",
        "ھەقىقىي بىلىم بىر ئادەمنىڭ كۆڭلىنىڭ ئىچىدە.",
        "ھەر بىر تەڭلىمە سىرلىق بولۇشى كېرەك، ئەمما ھەر بىر سىر ئوچۇق بولۇشى كېرەك."
      ],
      education: "University of Bristol, University of Cambridge",
      portrait: "PD",
      category: ["nobel", "theory", "relativity", "antimatter"],
      timeline: [
        { year: 1928, event: "دىراك تەڭلىمىسى" },
        { year: 1933, event: "نوبېل مۇكاپاتى" },
        { year: 1930, event: "ئانتىماتېرىيەنى ئالدىن بىلدۈرۈش" },
        { year: 1932, event: "پوزىتروننىڭ كەشپ قىلىنىشى" }
      ],
      influence: 8,
      color: "from-indigo-500 via-violet-500 to-purple-500",
      signatureColor: "bg-gradient-to-r from-indigo-500 to-violet-500"
    },
    {
      id: 7,
      name: "Max Planck",
      fullName: "Max Karl Ernst Ludwig Planck",
      birthDeath: "1858-1947",
      country: "Germany",
      flag: "🇩🇪",
      countryCode: "de",
      nobel: { year: 1918, field: "Quantum Theory" },
      description: "كىۋانت فىزىكىسىنىڭ ئاساس قويغۇچىسى. ئېنېرگىيەنىڭ دانە-دانە (كىۋانت) بولۇپ تارقىلىدىغانلىقىنى كۆرسىتىپ، پلانك داۋاملىقىنى كەشپ قىلدى. بۇ كەشپىيات كىۋانت فىزىكىسىنىڭ باشلىنىشى دەپ قارىلىدۇ.",
      contributions: [
        "كىۋانت نەزەرىيەسىنى ئىجاد قىلىش",
        "پلانك داۋاملىقىنى كەشپ قىلىش",
        "قارا جىسىم نۇرى نەزەرىيەسى",
        "ئېنېرگىيە كۇۋانتلىشىشى",
        "تېرمودىنامىكا"
      ],
      applications: [
        "كىۋانت كومپيۇتېرلىرى",
        "لازېر تېخنىكىسى",
        "كىۋانت كۇيىشى",
        "ئاستروفيزىكا",
        "ئىنېرگىيە سىستېمىلىرى"
      ],
      quotes: [
        "يېڭى بىلىم ھەرگىز ئەسكى بىلىمنى تولۇق ئۆچۈرمەيدۇ، پەقەت ئۇنىڭ كۆرۈش دائىرىسىنى كېڭەيتىدۇ.",
        "ئىلمىي مۇۋەپپەقىيەت پەقەت سىرلىقنى سۈرەتلەش بىلەنلا چەكلىنىپ قالمايدۇ، ئۇ يېڭى ئەستايىدىللىقنىڭ كېلىشىدۇر.",
        "ھەقىقىي ئىلمىي كەشپىيات ئىنساننىڭ ئەقىلىگە ئەمەس، تەبىئەتكە قارشى كۈرىشىدۇر."
      ],
      education: "University of Munich, University of Berlin",
      portrait: "MP",
      category: ["nobel", "theory", "foundational", "quantum"],
      timeline: [
        { year: 1900, event: "كىۋانت نەزەرىيەسى" },
        { year: 1918, event: "نوبېل مۇكاپاتى" },
        { year: 1905, event: "پلانك داۋاملىقى" },
        { year: 1930, event: "ماكس پلانك ئىنستىتۇتى" }
      ],
      influence: 10,
      color: "from-gray-700 via-gray-800 to-gray-900",
      signatureColor: "bg-gradient-to-r from-gray-700 to-gray-900"
    },
    {
      id: 8,
      name: "Louis de Broglie",
      fullName: "Louis Victor Pierre Raymond de Broglie",
      birthDeath: "1892-1987",
      country: "France",
      flag: "🇫🇷",
      countryCode: "fr",
      nobel: { year: 1929, field: "Matter Waves" },
      description: "ماتېرىيە دولقۇنلىرى نەزەرىيەسىنى ئوتتۇرىغا قويۇپ، بارلىق ماتېرىيە زەررىچىلىرىنىڭ دولقۇن خاراكتېرىغا ئىگە ئىكەنلىكىنى ئىسپاتلىدى. بۇ كەشپىيات كىۋانت مېخانىكىسىنىڭ دولقۇن-زەررىچە ئىككى خىللىقىغا ئاساس سالدى.",
      contributions: [
        "ماتېرىيە دولقۇنلىرى نەزەرىيەسى",
        "دى بروگلىي مۇناسىۋىتى λ = h/p",
        "كىۋانت دولقۇن مېخانىكىسىنىڭ ئاساسى",
        "ئېلېكترون دولقۇنلىرى",
        "كىۋانت دولقۇن پاكىتى"
      ],
      applications: [
        "ئېلېكترون مىكروسكوپى",
        "نېيترون دىفراكتسىيەسى",
        "كىۋانت ئۆلچەش ئۈسكۈنىلىرى",
        "كىۋانت كۇيىشى",
        "پارتىكۇلەر ئېنىقلىش"
      ],
      quotes: [
        "ھەر بىر ماتېرىيە زەررىچىسىنىڭ دولقۇنلىقى بار، ھەر بىر دولقۇننىڭ زەررىچىلىكى بار.",
        "ئىلمىي تەتقىقات پەقەت ئىجادىيەت ئەمەس، بەلكى ئىجادىيەتنىڭ ئۇچۇرىنى تاپىشتىدۇر.",
        "ئەسلىيەتتە، ھەر بىر نەرسە ئۆزىنىڭ ئىچكى قۇرۇلۇشىغا قاراپ ئىپادىلىنىدۇ."
      ],
      education: "University of Paris, Sorbonne",
      portrait: "LB",
      category: ["nobel", "theory", "wave", "matter"],
      timeline: [
        { year: 1924, event: "ماتېرىيە دولقۇنلىرى" },
        { year: 1929, event: "نوبېل مۇكاپاتى" },
        { year: 1932, event: "ئاكادېمىيە ئەزالىقى" },
        { year: 1945, event: "ئاتوم ئېنېرگىيە كومىتېتى" }
      ],
      influence: 7,
      color: "from-blue-600 via-blue-700 to-blue-800",
      signatureColor: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
      id: 9,
      name: "Max Born",
      fullName: "Max Born",
      birthDeath: "1882-1970",
      country: "Germany/UK",
      flag: "🇩🇪 🇬🇧",
      countryCode: "de",
      nobel: { year: 1954, field: "Probability Interpretation" },
      description: "كىۋانت دولقۇن فونكسىيەسىنىڭ ئىھتىماللىق چۈشەنچىسىنى ئوتتۇرىغا قويدى. شېردىنگېر تەڭلىمىسىنىڭ يەكۈنلىشىنى چۈشەندۈرۈپ، كىۋانت مېخانىكىسىنىڭ تەسىرىنى كېڭەيتتى.",
      contributions: [
        "كىۋانت ئىھتىماللىق چۈشەنچىسى",
        "بورن قائىدىسى",
        "كىۋانت سىستېمىلىرىنىڭ ماتېماتىكلىق مودېللىرى",
        "كىرىستاللار نەزەرىيەسى",
        "ئىھتىماللىق دولقۇن فونكسىيەسى"
      ],
      applications: [
        "كىۋانت ئەقىل ماشىنىسى",
        "كىۋانت ئالگورىزىملىرى",
        "ماتېرىيە ئىلمى",
        "كىرىستاللوگرافىيە",
        "كىۋانت ئىستاتىستىكىسى"
      ],
      quotes: [
        "بىز پەقەت ئىھتىماللارنى ھېسابلاشقا قادىرىمىز، مۇقەررەرلىكلەرنى ئەمەس.",
        "كىۋانت مېخانىكىسىنىڭ ئاساسىي مەسىلىسى ئۇنىڭ مەنىسىنى چۈشىنىشتۇر.",
        "ھەقىقىي ئىلمىي ئىزدىنىش ئىنساننىڭ ئەقىلىنى ئىشلەتكەن ھالدا تەبىئەت بىلەن سۆھبەتلىشىشتۇر."
      ],
      education: "University of Göttingen, University of Cambridge",
      portrait: "MB",
      category: ["nobel", "theory", "probability", "mathematics"],
      timeline: [
        { year: 1926, event: "ئىھتىماللىق چۈشەنچىسى" },
        { year: 1954, event: "نوبېل مۇكاپاتى" },
        { year: 1933, event: "ئامېرىكىغا قېچىش" },
        { year: 1953, event: "كىرىستال نەزەرىيەسى" }
      ],
      influence: 7,
      color: "from-teal-500 via-cyan-500 to-blue-500",
      signatureColor: "bg-gradient-to-r from-teal-500 to-cyan-500"
    },
    {
      id: 10,
      name: "Wolfgang Pauli",
      fullName: "Wolfgang Ernst Pauli",
      birthDeath: "1900-1958",
      country: "Austria/Switzerland",
      flag: "🇦🇹 🇨🇭",
      countryCode: "at",
      nobel: { year: 1945, field: "Exclusion Principle" },
      description: "پاۋلى پرىنسىپىنى كەشپ قىلىپ، بىر ئاتومدىكى ئىككى ئېلېكترون بىرلا كىۋانت ھالىتىگە ئىگە بولالمايدىغانلىقىنى ئىسپاتلىدى. نىيترىنونى ئالدىن بىلدۈرۈپ، يادرو فىزىكىسىغا زور تۆھپە قوشتى.",
      contributions: [
        "پاۋلى پرىنسىپى",
        "نىيترىنونى ئالدىن بىلدۈرۈش",
        "پاۋلى ماترىتسىلىرى",
        "كىۋانت سانى نەزەرىيەسى",
        "يادرو فىزىكىسى"
      ],
      applications: [
        "كىمياۋى پەرىودىك جەدۋەل",
        "يادرو فىزىكىسى",
        "كىۋانت كېمىسى",
        "ماغنېتلىق رېزونانس",
        "پارتىكۇلەر فىزىكىسى"
      ],
      quotes: [
        "بۇ تەڭلىمە ئەقىلگە سىغمايدۇ، بىراق ئۇ توغرا.",
        "مەن بۇ خىل تەڭلىمىلەرنى يازغاندا، ئۇلارنىڭ قانداق ئىشلەيدىغانلىقىنى بىلمەيمەن.",
        "ھەقىقىي ئىلمىي ئىزدىنىش ئىنساننىڭ ئەقىلىنى ئىشلەتكەن ھالدا تەبىئەت بىلەن سۆھبەتلىشىشتۇر."
      ],
      education: "University of Munich, University of Göttingen",
      portrait: "WP",
      category: ["nobel", "theory", "exclusion", "particle"],
      timeline: [
        { year: 1925, event: "پاۋلى پرىنسىپى" },
        { year: 1945, event: "نوبېل مۇكاپاتى" },
        { year: 1930, event: "نىيترىنونى ئالدىن بىلدۈرۈش" },
        { year: 1958, event: "ۋاپات بولدى" }
      ],
      influence: 8,
      color: "from-orange-500 via-amber-500 to-yellow-500",
      signatureColor: "bg-gradient-to-r from-orange-500 to-amber-500"
    },
    {
      id: 11,
      name: "Arthur Compton",
      fullName: "Arthur Holly Compton",
      birthDeath: "1892-1962",
      country: "USA",
      flag: "🇺🇸",
      countryCode: "us",
      nobel: { year: 1927, field: "Compton Effect" },
      description: "كومپتون ئۈنۈمىنى كەشپ قىلىپ، فوتونلارنىڭ زەررىچە خاراكتېرىغا ئىگە ئىكەنلىكىنى ئىسپاتلىدى. بۇ كەشپىيات فوتونلارنىڭ ئېلېكترونلار بىلەن ئۆز-ئارا تەسىر قىلىشىنى كۆرسەتتى.",
      contributions: [
        "كومپتون ئۈنۈمى",
        "نۇرنىڭ زەررىچە تەبىئىتى",
        "X-شۇئا فىزىكىسى",
        "كوسمىك نۇر تەتقىقاتى",
        "رادىئو ئاكتىپلىق"
      ],
      applications: [
        "X-شۇئا ئىمىجلىش",
        "كىۋانت ئۆلچەش ئۈسكۈنىلىرى",
        "رادىئو تېراپىيە",
        "كوسمىك نۇر ئۆلچەش",
        "تېببىي دىاگنوز"
      ],
      quotes: [
        "ئەسلىيەتتە، نۇر پەقەت نۇر ئەمەس، بەلكى زەررىچىلىك خاراكتېرگە ئىگە.",
        "ھەر بىر كەشپىيات يېڭى سوئاللارنى كەلتۈرۈپ چىقىرىدۇ.",
        "ئىلمىي تەتقىقات بىزنىڭ چۈشىنىشىمىزنى كېڭەيتىدۇ ۋە چەكلىمىلەرنى بېكار قىلىدۇ."
      ],
      education: "University of Chicago, Princeton University",
      portrait: "AC",
      category: ["nobel", "application", "radiation", "experimental"],
      timeline: [
        { year: 1923, event: "كومپتون ئۈنۈمى" },
        { year: 1927, event: "نوبېل مۇكاپاتى" },
        { year: 1941, event: "مانھېتتان پىروژېكتى" },
        { year: 1945, event: "ئاتوم بومبىسى" }
      ],
      influence: 6,
      color: "from-red-600 via-red-700 to-red-800",
      signatureColor: "bg-gradient-to-r from-red-600 to-red-700"
    },
    {
      id: 12,
      name: "Peter Debye",
      fullName: "Peter Joseph William Debye",
      birthDeath: "1884-1966",
      country: "Netherlands/USA",
      flag: "🇳🇱 🇺🇸",
      countryCode: "nl",
      nobel: { year: 1936, field: "Dipole Moments" },
      description: "دىبول مومېنتلىرى ۋە X-شۇئا دىفراكتسىيەسى بويىچە تەتقىقات ئېلىپ باردى. مولېكۇلالارنىڭ قۇتۇپلىشىشى ھەققىدە يېتەكچى نەزەرىيەلەرنى ئوتتۇرىغا قويدى.",
      contributions: [
        "دىبول مومېنتلىرى",
        "X-شۇئا دىفراكتسىيەسى",
        "دىباىى قانۇنى",
        "مولېكۇلا قۇتۇپلىشىشى",
        "كىمياۋى باغلىنىش"
      ],
      applications: [
        "ماتېرىيە ئىلمى",
        "كىمياۋى باغلىنىش تەھلىلى",
        "X-شۇئا كرىستاللوگرافىيەسى",
        "پولىمېر ئىلمى",
        "دىيېلېكتىرىك ماتېرىياللار"
      ],
      quotes: [
        "ھەر بىر مولېكۇلا ئۆزىگە خاس قۇتۇپلىقىغا ئىگە.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ، ھەرگىز تۇتاشلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "University of Munich, ETH Zurich",
      portrait: "PD",
      category: ["nobel", "application", "chemistry", "molecular"],
      timeline: [
        { year: 1912, event: "دىبول مومېنتلىرى" },
        { year: 1936, event: "نوبېل مۇكاپاتى" },
        { year: 1940, event: "ئامېرىكىغا كۆچۈش" },
        { year: 1950, event: "دىباىى ئىنستىتۇتى" }
      ],
      influence: 5,
      color: "from-purple-600 via-purple-700 to-purple-800",
      signatureColor: "bg-gradient-to-r from-purple-600 to-purple-700"
    },
    {
      id: 13,
      name: "Hendrik Lorentz",
      fullName: "Hendrik Antoon Lorentz",
      birthDeath: "1853-1928",
      country: "Netherlands",
      flag: "🇳🇱",
      countryCode: "nl",
      nobel: { year: 1902, field: "Electron Theory" },
      description: "لورېنتس ئۆزگەرتىشىنى ئىجاد قىلىپ، رېلاتىۋىلىك نەزەرىيەسىنىڭ ئاساسىنى قۇردى. ئېلېكترون نەزەرىيەسىنى ئىشقا ئاشۇرۇپ، ماغنېتلىق ۋە ئېلېكترىك ھادىسىلەرنى چۈشەندۈردى.",
      contributions: [
        "لورېنتس ئۆزگەرتىشى",
        "ئېلېكترون نەزەرىيەسى",
        "لورېنتس قۇۋىتى",
        "ئېلېكترودىنامىكا",
        "رېلاتىۋىستىك فىزىكا"
      ],
      applications: [
        "رېلاتىۋىستىك فىزىكا",
        "ئېلېكترودىنامىكا",
        "GPS سىستېمىسى",
        "ماغنېتلىق رېزونانس",
        "ئىلكترونىكا"
      ],
      quotes: [
        "ھەر بىر تەتقىقات ئۆزىنىڭ ئۆزگىرىشىنى كەلتۈرۈپ چىقىرىدۇ.",
        "بىز پەقەت تەبىئەتنىڭ قانۇنىيەتلىرىنى چۈشىنىش ئۈچۈن تىرىشىمىز كېرەك.",
        "ئىلمىي تەتقىقات ھەمىشە يېڭى سوئاللارنى كەلتۈرۈپ چىقىرىدۇ."
      ],
      education: "Leiden University",
      portrait: "HL",
      category: ["nobel", "theory", "relativity", "electrodynamics"],
      timeline: [
        { year: 1895, event: "لورېنتس ئۆزگەرتىشى" },
        { year: 1902, event: "نوبېل مۇكاپاتى" },
        { year: 1911, event: "سولۋەي يىغىنى" },
        { year: 1928, event: "ۋاپات بولدى" }
      ],
      influence: 7,
      color: "from-blue-400 via-blue-500 to-blue-600",
      signatureColor: "bg-gradient-to-r from-blue-400 to-blue-500"
    },
    {
      id: 14,
      name: "Paul Langevin",
      fullName: "Paul Langevin",
      birthDeath: "1872-1946",
      country: "France",
      flag: "🇫🇷",
      countryCode: "fr",
      nobel: null,
      description: "پاراماغنېتېزم ۋە پاراناغنېتېزم ھەققىدە تەتقىقات ئېلىپ باردى. ماغنېتلىق ماتېرىياللارنىڭ خۇسۇسىيەتلىرىنى ئۆگەندى ھەم د ئە بروگلىي نەزەرىيەسىنى قوللىدى.",
      contributions: [
        "پاراماغنېتېزم",
        "ماغنېتلىق ماتېرىياللار",
        "لانگېۋىن تەڭلىمىسى",
        "سۇنئىي رادىئاتسىيە",
        "ماغنېتلىق خۇسۇسىيەتلەر"
      ],
      applications: [
        "ماغنېتلىق ماتېرىياللار",
        "ماغنېت رېزونانس",
        "ماغنېتلىك ساقلاش",
        "ئېلېكترونىكا",
        "ماغنېتلىق ئۆلچەش"
      ],
      quotes: [
        "ھەر بىر ماتېرىيال ئۆزىگە خاس ماغنېتلىق خۇسۇسىيەتكە ئىگە.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "École Normale Supérieure, University of Cambridge",
      portrait: "PL",
      category: ["application", "magnetism", "experimental"],
      timeline: [
        { year: 1905, event: "لانگېۋىن تەڭلىمىسى" },
        { year: 1911, event: "سولۋەي يىغىنى" },
        { year: 1934, event: "رادىئو ئاكتىپلىق تەتقىقاتى" },
        { year: 1946, event: "ۋاپات بولدى" }
      ],
      influence: 5,
      color: "from-gray-600 via-gray-700 to-gray-800",
      signatureColor: "bg-gradient-to-r from-gray-600 to-gray-700"
    },
    {
      id: 15,
      name: "Charles Wilson",
      fullName: "Charles Thomson Rees Wilson",
      birthDeath: "1869-1959",
      country: "United Kingdom",
      flag: "🇬🇧",
      countryCode: "gb",
      nobel: { year: 1927, field: "Cloud Chamber" },
      description: "تۇمان كامېرا سىنى ئىجاد قىلىپ، زەررىچە فىزىكىسىدا ئىنقىلاب قىلدى. بۇ ئۈسكۈنە يادرو زەررىچىلىرىنىڭ يولىنى كۆرسىتىپ، يادرو فىزىكىسىنىڭ تەرەققىياتىغا زور تۆھپە قوشتى.",
      contributions: [
        "تۇمان كامېرا سىنى",
        "زەررىچە ئىزى كۆرسىتىش",
        "يادرو زەررىچىلىرىنى ئۆلچەش",
        "كوسمىك نۇر تەتقىقاتى",
        "ئىونتسىيە تەتقىقاتى"
      ],
      applications: [
        "زەررىچە ئېنىقلىش ئۈسكۈنىلىرى",
        "كوسمىك نۇر تەتقىقاتى",
        "يادرو فىزىكىسى",
        "پارتىكۇلەر ئۆلچەش",
        "تۇمان كامېرا تېخنىكىسى"
      ],
      quotes: [
        "ھەر بىر زەررىچە ئۆزىگە خاس ئىز قالدۇرىدۇ.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "University of Cambridge",
      portrait: "CW",
      category: ["nobel", "application", "experimental", "particle"],
      timeline: [
        { year: 1911, event: "تۇمان كامېرا سىنى" },
        { year: 1927, event: "نوبېل مۇكاپاتى" },
        { year: 1935, event: "كوسمىك نۇر تەتقىقاتى" },
        { year: 1959, event: "ۋاپات بولدى" }
      ],
      influence: 5,
      color: "from-cyan-500 via-teal-500 to-green-500",
      signatureColor: "bg-gradient-to-r from-cyan-500 to-teal-500"
    },
    {
      id: 16,
      name: "Owen Richardson",
      fullName: "Owen Willans Richardson",
      birthDeath: "1879-1959",
      country: "United Kingdom",
      flag: "🇬🇧",
      countryCode: "gb",
      nobel: { year: 1928, field: "Thermionic Emission" },
      description: "رىچاردسون قانۇنىنى كەشپ قىلىپ، ئىسسىق مېتاللارنىڭ ئېلېكترون چىقىرىشىنى چۈشەندۈردى. بۇ كەشپىيات ئىسسىق ئېلېكترون ئېمىسىيەسىنىڭ ئاساسىنى قۇردى.",
      contributions: [
        "رىچاردسون قانۇنى",
        "ئىسسىق ئېلېكترون ئېمىسىيەسى",
        "سۇيۇقلۇق دېنامىكىسى",
        "ئېلېكترون ئېمىسىيەسى",
        "تېرمىيونىك ئېمىسىيە"
      ],
      applications: [
        "ۋاكۇۇم تۇيۇبلىرى",
        "ئىلكترونىكا",
        "رادىئو تېخنىكىسى",
        "تېلېۋىزىيە",
        "كومپيۇتېر ئېكرانلىرى"
      ],
      quotes: [
        "ھەر بىر مېتال ئىسسىقتا ئېلېكترون چىقىرىدۇ.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "University of Cambridge, University of London",
      portrait: "OR",
      category: ["nobel", "application", "experimental", "electronics"],
      timeline: [
        { year: 1901, event: "رىچاردسون قانۇنى" },
        { year: 1928, event: "نوبېل مۇكاپاتى" },
        { year: 1939, event: "ئامېرىكىغا كۆچۈش" },
        { year: 1959, event: "ۋاپات بولدى" }
      ],
      influence: 4,
      color: "from-amber-500 via-orange-500 to-red-500",
      signatureColor: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    {
      id: 17,
      name: "Irving Langmuir",
      fullName: "Irving Langmuir",
      birthDeath: "1881-1957",
      country: "USA",
      flag: "🇺🇸",
      countryCode: "us",
      nobel: { year: 1932, field: "Surface Chemistry" },
      description: "لانگمۇيىرنىڭ سىرتقى كىمىيا تەتقىقاتى پلازما فىزىكىسىغا زور تۆھپە قوشتى. ئۇ ئادسورپسىيە ۋە سىرتقى رېئاكسىيەلەرنى چۈشەندۈردى.",
      contributions: [
        "سىرتقى كىمىيا",
        "پلازما فىزىكىسى",
        "لانگمۇيىر پروپى",
        "ئادسورپسىيە قانۇنى",
        "ھىدروجېن كېمىسى"
      ],
      applications: [
        "يېرىم ئۆتكۈزگۈچلەر",
        "پلازما تېخنىكىسى",
        "سىرتقى رېئاكسىيە",
        "ھىدروجېن ئېنېرگىيەسى",
        "كېمىكاۋى ئىندۇسترىيە"
      ],
      quotes: [
        "ھەر بىر سىرتقى يۈز ئۆزىگە خاس كىمىياۋى خۇسۇسىيەتكە ئىگە.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "Columbia University, University of Göttingen",
      portrait: "IL",
      category: ["nobel", "application", "chemistry", "surface"],
      timeline: [
        { year: 1916, event: "سىرتقى كىمىيا تەتقىقاتى" },
        { year: 1932, event: "نوبېل مۇكاپاتى" },
        { year: 1947, event: "پلازما فىزىكىسى" },
        { year: 1957, event: "ۋاپات بولدى" }
      ],
      influence: 5,
      color: "from-lime-500 via-green-500 to-emerald-500",
      signatureColor: "bg-gradient-to-r from-lime-500 to-green-500"
    },
    {
      id: 18,
      name: "William Bragg",
      fullName: "William Henry Bragg",
      birthDeath: "1862-1942",
      country: "United Kingdom",
      flag: "🇬🇧",
      countryCode: "gb",
      nobel: { year: 1915, field: "X-ray Crystal" },
      description: "بىرلىكتە نوبېل مۇكاپاتىغا ئېرىشكەن ئاتا-ئوغۇل جۈپتى. X-شۇئا دىفراكتسىيەسى ئارقىلىق كىرىستاللارنىڭ قۇرۇلۇشىنى ئۆلچەش ئۇسۇلىنى ئىجاد قىلدى.",
      contributions: [
        "براگ قانۇنى",
        "X-شۇئا دىفراكتسىيەسى",
        "كىرىستال قۇرۇلۇشى",
        "X-شۇئا سپېكتروسكوپىيەسى",
        "كىرىستاللوگرافىيە"
      ],
      applications: [
        "كىرىستال قۇرۇلۇشى تەھلىلى",
        "X-شۇئا ئىمىجلىش",
        "ماتېرىيە ئىلمى",
        "كىمىياۋى قۇرۇلۇش",
        "تېببىي دىاگنوز"
      ],
      quotes: [
        "ھەر بىر كىرىستال ئۆزىگە خاس قۇرۇلۇشقا ئىگە.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "University of Cambridge, University of Adelaide",
      portrait: "WB",
      category: ["nobel", "application", "crystallography", "xray"],
      timeline: [
        { year: 1912, event: "براگ قانۇنى" },
        { year: 1915, event: "نوبېل مۇكاپاتى" },
        { year: 1923, event: "لوندون ئۇنىۋېرسىتېتى" },
        { year: 1942, event: "ۋاپات بولدى" }
      ],
      influence: 5,
      color: "from-rose-500 via-pink-500 to-fuchsia-500",
      signatureColor: "bg-gradient-to-r from-rose-500 to-pink-500"
    },
    {
      id: 19,
      name: "Hendrik Kramers",
      fullName: "Hendrik Anthony Kramers",
      birthDeath: "1894-1952",
      country: "Netherlands",
      flag: "🇳🇱",
      countryCode: "nl",
      nobel: null,
      description: "كرامېرز-كرونىگ مۇناسىۋىتىنى كەشپ قىلىپ، دىسپېرسىيە نەزەرىيەسىگە زور تۆھپە قوشتى. كىۋانت مېخانىكىسى ۋە ئېلېكترودىنامىكا بىلەن شۇغۇللاندى.",
      contributions: [
        "كرامېرز-كرونىگ مۇناسىۋىتى",
        "دىسپېرسىيە نەزەرىيەسى",
        "كىۋانت مېخانىكىسى",
        "ئېلېكترودىنامىكا",
        "رېلاتىۋىستىك فىزىكا"
      ],
      applications: [
        "ئوپتىكا",
        "دىسپېرسىيە تەھلىلى",
        "كىۋانت سىستېمىلىرى",
        "ئېلېكترودىنامىكا",
        "ماتېرىيە ئىلمى"
      ],
      quotes: [
        "ھەر بىر دىسپېرسىيە ئۆزىگە خاس قانۇنىيەتكە ئىگە.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "Leiden University, University of Copenhagen",
      portrait: "HK",
      category: ["theory", "optics", "dispersion"],
      timeline: [
        { year: 1927, event: "كرامېرز-كرونىگ مۇناسىۋىتى" },
        { year: 1931, event: "دىسپېرسىيە نەزەرىيەسى" },
        { year: 1946, event: "لوندون ئۇنىۋېرسىتېتى" },
        { year: 1952, event: "ۋاپات بولدى" }
      ],
      influence: 4,
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      signatureColor: "bg-gradient-to-r from-violet-500 to-purple-500"
    },
    {
      id: 20,
      name: "Paul Ehrenfest",
      fullName: "Paul Ehrenfest",
      birthDeath: "1880-1933",
      country: "Austria/Netherlands",
      flag: "🇦🇹 🇳🇱",
      countryCode: "at",
      nobel: null,
      description: "ئېرېنفېست نەزەرىيەسىنى ئوتتۇرىغا قويۇپ، ستاتىستىكا فىزىكىسى ۋە كىۋانت مېخانىكىسىغا زور تۆھپە قوشتى. ئۇنىڭ ئىلمىي مۇنازىرىلىرى كىۋانت فىزىكىسىنىڭ تەرەققىياتىغا تەسىر كۆرسەتتى.",
      contributions: [
        "ئېرېنفېست نەزەرىيەسى",
        "ستاتىستىكا فىزىكىسى",
        "كىۋانت مېخانىكىسى",
        "تېرمودىنامىكا",
        "ئىستاتىستىكىلىق مېخانىكا"
      ],
      applications: [
        "ستاتىستىكا فىزىكىسى",
        "كىۋانت سىستېمىلىرى",
        "تېرمودىنامىكا",
        "ماتېرىيە ئىلمى",
        "ئىستاتىستىكىلىق تەھلىل"
      ],
      quotes: [
        "ھەر بىر سىستېما ئۆزىگە خاس ئىستاتىستىكىلىق خۇسۇسىيەتكە ئىگە.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "University of Vienna, University of Göttingen",
      portrait: "PE",
      category: ["theory", "statistics", "thermodynamics"],
      timeline: [
        { year: 1911, event: "ئېرېنفېست نەزەرىيەسى" },
        { year: 1912, event: "لېيدېن ئۇنىۋېرسىتېتى" },
        { year: 1927, event: "سولۋەي يىغىنى" },
        { year: 1933, event: "ۋاپات بولدى" }
      ],
      influence: 4,
      color: "from-slate-500 via-gray-500 to-zinc-500",
      signatureColor: "bg-gradient-to-r from-slate-500 to-gray-500"
    },
    {
      id: 21,
      name: "Émile Henriot",
      fullName: "Émile Henriot",
      birthDeath: "1885-1961",
      country: "France",
      flag: "🇫🇷",
      countryCode: "fr",
      nobel: null,
      description: "ھېنرىوت ئۇلتراسېنتنىڭ كىرىستاللاردا تارقىلىشىنى تەتقىق قىلىپ، ئاۋاز فىزىكىسىغا زور تۆھپە قوشتى. ئۇ رادىئو ئاكتىپلىق ئۆلچەش ئۇسۇللىرىنى ياخشىلادى.",
      contributions: [
        "ئۇلتراسېنت تارقىلىشى",
        "كىرىستال فىزىكىسى",
        "رادىئو ئاكتىپلىق ئۆلچەش",
        "ئاۋاز فىزىكىسى",
        "كىرىستال دېنامىكىسى"
      ],
      applications: [
        "ئۇلتراسېنت تېخنىكىسى",
        "كىرىستال ئۆلچەش",
        "رادىئو ئاكتىپلىق ئۆلچەش",
        "ماتېرىيە ئىلمى",
        "تېببىي ئىمىجلىش"
      ],
      quotes: [
        "ھەر بىر كىرىستال ئۇلتراسېنتنى ئۆزىگە خاس تارقىتىدۇ.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "École Normale Supérieure",
      portrait: "EH",
      category: ["application", "crystallography", "ultrasound"],
      timeline: [
        { year: 1912, event: "ئۇلتراسېنت تەتقىقاتى" },
        { year: 1927, event: "سولۋەي يىغىنى" },
        { year: 1945, event: "ئاتوم ئېنېرگىيە كومىتېتى" },
        { year: 1961, event: "ۋاپات بولدى" }
      ],
      influence: 3,
      color: "from-sky-500 via-blue-400 to-cyan-500",
      signatureColor: "bg-gradient-to-r from-sky-500 to-blue-400"
    },
    {
      id: 22,
      name: "Auguste Piccard",
      fullName: "Auguste Piccard",
      birthDeath: "1884-1962",
      country: "Switzerland",
      flag: "🇨🇭",
      countryCode: "ch",
      nobel: null,
      description: "پىككار يۇقىرى ھاۋا باللونلىرى بىلەن تەجرىبە ئېلىپ بارىپ، ئاتموسفېرا فىزىكىسىغا زور تۆھپە قوشتى. ئۇ كوسمىك نۇرنى تەتقىق قىلىپ، يۇقىرى ھاۋا تەبىئىتىنى چۈشەندۈردى.",
      contributions: [
        "يۇقىرى ھاۋا باللونلىرى",
        "ئاتموسفېرا فىزىكىسى",
        "كوسمىك نۇر تەتقىقاتى",
        "ھاۋا ئۆلچەش",
        "يۇقىرى ھاۋا تەبىئىتى"
      ],
      applications: [
        "ھاۋارايى تەتقىقاتى",
        "كوسمىك نۇر ئۆلچەش",
        "ئاتموسفېرا فىزىكىسى",
        "ھاۋا باللون تېخنىكىسى",
        "ئاسترونومىيە"
      ],
      quotes: [
        "ھەر بىر يۇقىرى ھاۋا ئۆزىگە خاس تەبىئەتكە ئىگە.",
        "ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
        "بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
      ],
      education: "ETH Zurich",
      portrait: "AP",
      category: ["application", "atmospheric", "experimental"],
      timeline: [
        { year: 1931, event: "يۇقىرى ھاۋا باللونى" },
        { year: 1932, event: "كوسمىك نۇر تەتقىقاتى" },
        { year: 1953, event: "دېڭىز ئاستى تەتقىقاتى" },
        { year: 1962, event: "ۋاپات بولدى" }
      ],
      influence: 3,
      color: "from-cyan-400 via-teal-400 to-emerald-500",
      signatureColor: "bg-gradient-to-r from-cyan-400 to-teal-400"
},
{
id: 23,
name: "Édouard Herzen",
fullName: "Édouard Herzen",
birthDeath: "1877-1936",
country: "Belgium",
flag: "🇧🇪",
countryCode: "be",
nobel: null,
description: "ھېرزېن فىزيولوگىيە ۋە بايولوگىيە فىزىكىسى بىلەن شۇغۇللاندى. ئۇ سولۋەي يىغىنىنىڭ تەشكىلىي قىسمىدا رول ئوينىدى ۋە فىزىكا بىلەن بايولوگىيە ئوتتۇرىسىدىكى باغلىنىشقا تۆھپە قوشتى.",
contributions: [
"فىزيولوگىيە فىزىكىسى",
"بايولوگىيە فىزىكىسى",
"تىرىك ماددىلارنىڭ فىزىكىسى",
"ئىلمىي تەشكىللەش",
"فىزىكا-بايولوگىيە باغلىنىشى"
],
applications: [
"بايوفىزىكا",
"تېببىي فىزىكا",
"فىزيولوگىيە ئۆلچەش",
"تىببىي تەتقىقات",
"فىزىكىلىق بايولوگىيە"
],
quotes: [
"ھەر بىر تىرىك ماددا ئۆزىگە خاس فىزىكىلىق خۇسۇسىيەتكە ئىگە.",
"ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
"بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
],
education: "Free University of Brussels",
portrait: "EH",
category: ["application", "biophysics", "physiology"],
timeline: [
{ year: 1911, event: "بايوفىزىكا تەتقىقاتى" },
{ year: 1927, event: "سولۋەي يىغىنى" },
{ year: 1930, event: "فىزيولوگىيە فىزىكىسى" },
{ year: 1936, event: "ۋاپات بولدى" }
],
influence: 3,
color: "from-emerald-400 via-green-400 to-lime-400",
signatureColor: "bg-gradient-to-r from-emerald-400 to-green-400"
},
{
id: 24,
name: "Théophile de Donder",
fullName: "Théophile de Donder",
birthDeath: "1872-1957",
country: "Belgium",
flag: "🇧🇪",
countryCode: "be",
nobel: null,
description: "دىدوندېر تېرمودىنامىكىدىكى كىمىياۋى ئافىنىتېت نەزەرىيەسى بىلەن تونۇلۇپ، تېرمودىنامىكا ۋە كىمىياۋى كىنىتىكا ئوتتۇرىسىدىكى باغلىنىشقا تۆھپە قوشتى.",
contributions: [
"كىمىياۋى ئافىنىتېت نەزەرىيەسى",
"تېرمودىنامىكا",
"كىمىياۋى كىنىتىكا",
"تېرمودىنامىكىلىق تەڭلىمە",
"كىمىياۋى تەڭپۇڭلۇق"
],
applications: [
"كىمىياۋى رېئاكسىيە تەھلىلى",
"تېرمودىنامىكا سىستېمىلىرى",
"كىمىياۋى ئىندۇسترىيە",
"تېرمودىنامىكىلىق مودېللەش",
"كىمىياۋى پروسېسس"
],
quotes: [
"ھەر بىر كىمىياۋى رېئاكسىيە ئۆزىگە خاس ئافىنىتېتكە ئىگە.",
"ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
"بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
],
education: "Free University of Brussels",
portrait: "TD",
category: ["theory", "thermodynamics", "chemistry"],
timeline: [
{ year: 1920, event: "كىمىياۋى ئافىنىتېت نەزەرىيەسى" },
{ year: 1927, event: "سولۋەي يىغىنى" },
{ year: 1931, event: "تېرمودىنامىكا تەتقىقاتى" },
{ year: 1957, event: "ۋاپات بولدى" }
],
influence: 3,
color: "from-orange-400 via-amber-400 to-yellow-400",
signatureColor: "bg-gradient-to-r from-orange-400 to-amber-400"
},
{
id: 25,
name: "Jules-Émile Verschaffelt",
fullName: "Jules-Émile Verschaffelt",
birthDeath: "1870-1955",
country: "Belgium",
flag: "🇧🇪",
countryCode: "be",
nobel: null,
description: "ۋېرشافېلت كىرىستاللار ۋە مايەرلارنىڭ ئوپتىكىلىق خۇسۇسىيەتلىرىنى تەتقىق قىلىپ، ماتېرىيە ئىلمى ۋە ئوپتىكا بىلەن شۇغۇللاندى.",
contributions: [
"كىرىستال ئوپتىكىسى",
"مايەر ئوپتىكىسى",
"ماتېرىيە ئىلمى",
"ئوپتىكىلىق خۇسۇسىيەتلەر",
"كىرىستال دېنامىكىسى"
],
applications: [
"ئوپتىكىلىق ماتېرىياللار",
"كىرىستال ئوپتىكىسى",
"مايەر ئوپتىكىسى",
"لازېر تېخنىكىسى",
"ئوپتىكىلىق ئۆلچەش"
],
quotes: [
"ھەر بىر ماتېرىيال ئۆزىگە خاس ئوپتىكىلىق خۇسۇسىيەتكە ئىگە.",
"ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
"بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
],
education: "Free University of Brussels",
portrait: "JV",
category: ["application", "optics", "crystallography"],
timeline: [
{ year: 1900, event: "كىرىستال ئوپتىكىسى تەتقىقاتى" },
{ year: 1927, event: "سولۋەي يىغىنى" },
{ year: 1935, event: "مايەر ئوپتىكىسى" },
{ year: 1955, event: "ۋاپات بولدى" }
],
influence: 3,
color: "from-indigo-400 via-violet-400 to-purple-400",
signatureColor: "bg-gradient-to-r from-indigo-400 to-violet-400"
},
{
id: 26,
name: "Albert Portevin",
fullName: "Albert Portevin",
birthDeath: "1880-1962",
country: "France",
flag: "🇫🇷",
countryCode: "fr",
nobel: null,
description: "پورتېۋىن مېتاللارنىڭ مېخانىكىلىق خۇسۇسىيەتلىرى ۋە قاتتىقلىقىنى تەتقىق قىلىپ، ماتېرىيە ئىلمى ۋە مېخانىكا بىلەن شۇغۇللاندى.",
contributions: [
"مېتال مېخانىكىسى",
"مېتال قاتتىقلىقى",
"ماتېرىيە ئىلمى",
"مېخانىكىلىق خۇسۇسىيەتلەر",
"مېتال تەتقىقاتى"
],
applications: [
"مېتال ئىشلەش",
"مېخانىكىلىق ئۆلچەش",
"ماتېرىيە ئىلمى",
"ئىندۇسترىيەلىك ماتېرىياللار",
"مېخانىكىلىق تەتقىقات"
],
quotes: [
"ھەر بىر مېتال ئۆزىگە خاس مېخانىكىلىق خۇسۇسىيەتكە ئىگە.",
"ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
"بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
],
education: "École Centrale Paris",
portrait: "AP",
category: ["application", "materials", "mechanical"],
timeline: [
{ year: 1910, event: "مېتال مېخانىكىسى تەتقىقاتى" },
{ year: 1927, event: "سولۋەي يىغىنى" },
{ year: 1940, event: "ماتېرىيە ئىلمى" },
{ year: 1962, event: "ۋاپات بولدى" }
],
influence: 3,
color: "from-zinc-400 via-neutral-400 to-stone-400",
signatureColor: "bg-gradient-to-r from-zinc-400 to-neutral-400"
},
{
id: 27,
name: "Léon Brillouin",
fullName: "Léon Brillouin",
birthDeath: "1889-1969",
country: "France",
flag: "🇫🇷",
countryCode: "fr",
nobel: null,
description: "بىرىللوېن كىرىستاللاردىكى دولقۇن تارقىلىشىنى تەتقىق قىلىپ، برىللوېن بۆلگىسىنى كەشپ قىلدى. ئۇ كىۋانت مېخانىكىسى ۋە كىرىستال فىزىكىسىغا زور تۆھپە قوشتى.",
contributions: [
"بىرىللوېن بۆلگىسى",
"كىرىستال دولقۇنلىرى",
"كىۋانت مېخانىكىسى",
"كىرىستال فىزىكىسى",
"دولقۇن تارقىلىشى"
],
applications: [
"كىرىستال دىنامىكىسى",
"كۋانت دولقۇن ئۆلچەش",
"ماتېرىيە ئىلمى",
"ئوپتىكىلىق ماتېرىياللار",
"كىۋانت سىستېمىلىرى"
],
quotes: [
"ھەر بىر كىرىستال ئۆزىگە خاس دولقۇن تارقىلىش خۇسۇسىيەتكە ئىگە.",
"ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
"بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
],
education: "École Normale Supérieure",
portrait: "LB",
category: ["theory", "crystallography", "wave"],
timeline: [
{ year: 1914, event: "بىرىللوېن بۆلگىسى" },
{ year: 1927, event: "سولۋەي يىغىنى" },
{ year: 1933, event: "كىۋانت مېخانىكىسى" },
{ year: 1969, event: "ۋاپات بولدى" }
],
influence: 4,
color: "from-blue-300 via-sky-300 to-cyan-300",
signatureColor: "bg-gradient-to-r from-blue-300 to-sky-300"
},
{
id: 28,
name: "John B. Perrin",
fullName: "Jean Baptiste Perrin",
birthDeath: "1870-1942",
country: "France",
flag: "🇫🇷",
countryCode: "fr",
nobel: { year: 1926, field: "Brownian Motion" },
description: "پېررىن قارا دۈككەن ھەرىكىتىنى تەتقىق قىلىپ، ئاتوملارنىڭ مەۋجۇتلۇقىنى ئىسپاتلىدى. ئۇ كولويدلار ۋە كۆپۈك خۇسۇسىيەتلىرىنى ئۆگەندى.",
contributions: [
"قارا دۈككەن ھەرىكىتى",
"ئاتوم مەۋجۇتلۇقىنى ئىسپاتلاش",
"كولويد فىزىكىسى",
"كۆپۈك خۇسۇسىيەتلىرى",
"مولېكۇلا ھەرىكىتى"
],
applications: [
"كولويد تەتقىقاتى",
"ئاتوم فىزىكىسى",
"مولېكۇلا ھەرىكىتى",
"كۆپۈك ئىلمى",
"تېببىي تەتقىقات"
],
quotes: [
"ھەر بىر كولويد ئۆزىگە خاس ھەرىكەت خۇسۇسىيەتكە ئىگە.",
"ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
"بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
],
education: "École Normale Supérieure",
portrait: "JP",
category: ["nobel", "experimental", "atomic", "colloidal"],
timeline: [
{ year: 1908, event: "قارا دۈككەن ھەرىكىتى" },
{ year: 1926, event: "نوبېل مۇكاپاتى" },
{ year: 1935, event: "كولويد فىزىكىسى" },
{ year: 1942, event: "ۋاپات بولدى" }
],
influence: 5,
color: "from-teal-300 via-emerald-300 to-green-300",
signatureColor: "bg-gradient-to-r from-teal-300 to-emerald-300"
},
{
id: 29,
name: "Maurice de Broglie",
fullName: "Maurice de Broglie",
birthDeath: "1875-1960",
country: "France",
flag: "🇫🇷",
countryCode: "fr",
nobel: null,
description: "لۇئىس دى بروگلىينىڭ ئاكىسى بولۇپ، X-شۇئا فىزىكىسى ۋە ئېلېكترون دىفراكتسىيەسى بىلەن شۇغۇللاندى. ئۇ ئېلېكترونلارنىڭ دولقۇن خاراكتېرىنى تەتقىق قىلدى.",
contributions: [
"X-شۇئا فىزىكىسى",
"ئېلېكترون دىفراكتسىيەسى",
"ئېلېكترون دولقۇنلىرى",
"X-شۇئا تەتقىقاتى",
"دى بروگلىي نەزەرىيەسى"
],
applications: [
"X-شۇئا ئىمىجلىش",
"ئېلېكترون مىكروسكوپى",
"ماتېرىيە ئىلمى",
"ئېلېكترون ئۆلچەش",
"تېببىي دىاگنوز"
],
quotes: [
"ھەر بىر ئېلېكترون ئۆزىگە خاس دولقۇن خاراكتېرگە ئىگە.",
"ئىلمىي تەتقىقات ھەرگىز ئاخىرلاشمايدۇ.",
"بىز پەقەت تەبىئەتنىڭ سىرلىرىنى ئېچىپ چىقىش ئۈچۈن تىرىشىمىز كېرەك."
],
education: "École Navale",
portrait: "MB",
category: ["application", "xray", "electron"],
timeline: [
{ year: 1913, event: "X-شۇئا تەتقىقاتى" },
{ year: 1927, event: "سولۋەي يىغىنى" },
{ year: 1934, event: "ئېلېكترون دىفراكتسىيەسى" },
{ year: 1960, event: "ۋاپات بولدى" }
],
influence: 4,
color: "from-violet-300 via-purple-300 to-fuchsia-300",
signatureColor: "bg-gradient-to-r from-violet-300 to-purple-300"
}
];

const categories = [
{ id: 'all', name: 'ھەممە ئالىملار', icon: <FaAtom />, count: 29 },
{ id: 'nobel', name: 'نوبېل مۇكاپاتى', icon: <FaAward />, count: scientists.filter(s => s.nobel).length },
{ id: 'theory', name: 'نەزەرىيە ئىلمى', icon: <FaBrain />, count: scientists.filter(s => s.category.includes('theory')).length },
{ id: 'application', name: 'ئەمەلىي تەتبىق', icon: <FaCogs />, count: scientists.filter(s => s.category.includes('application')).length },
{ id: 'foundational', name: 'ئاساس سالغۇچى', icon: <FaRocket />, count: scientists.filter(s => s.category.includes('foundational')).length },
{ id: 'experimental', name: 'تەجرىبىۋى فىزىكا', icon: <FaMicroscope />, count: scientists.filter(s => s.category.includes('experimental')).length },
];

const filteredScientists = scientists
.filter(scientist => {
if (filter === 'all') return true;
return scientist.category.includes(filter);
})
.filter(scientist => {
return scientist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
scientist.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
scientist.contributions.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
})
.sort((a, b) => {
const multiplier = sortOrder === 'desc' ? -1 : 1;
if (sortBy === 'influence') {
return (a.influence - b.influence) * multiplier;
} else if (sortBy === 'name') {
return a.name.localeCompare(b.name) * multiplier;
} else if (sortBy === 'nobel') {
const aYear = a.nobel ? (typeof a.nobel.year === 'string' ? parseInt(a.nobel.year.split(',')[0]) : a.nobel.year) : Infinity;
const bYear = b.nobel ? (typeof b.nobel.year === 'string' ? parseInt(b.nobel.year.split(',')[0]) : b.nobel.year) : Infinity;
return (aYear - bYear) * multiplier;
}
return 0;
});

const getCategoryIcon = (category) => {
switch(category) {
case 'nobel': return <FaAward className="text-yellow-500" />;
case 'theory': return <FaBrain className="text-blue-500" />;
case 'application': return <FaCogs className="text-green-500" />;
case 'foundational': return <FaRocket className="text-purple-500" />;
case 'experimental': return <FaMicroscope className="text-red-500" />;
default: return <FaAtom className="text-gray-500" />;
}
};

return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8">
{/* سولۋەي يىغىنى تەسۋىرى */}
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-2xl"></div>
<h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
1927 سولۋەي يىغىنى
<span className="block text-2xl md:text-3xl text-cyan-400 mt-2">كىۋانت فىزىكىسىنىڭ داڭلىق ئالىملىرى</span>
</h1>
<p className="text-xl text-gray-300 max-w-4xl mx-auto relative">
29 ئۇلۇغ فىزىكا ئالىملىرى بىرلەشىپ، كىۋانت مېخانىكىسىنىڭ ئاساسىنى قۇردى. بۇ يىغىن فىزىكا تارىخىدىكى ئەڭ مۇھىم ۋەقەلەردىن بىرى بولۇپ قالدى.
</p>
<div className="flex flex-wrap justify-center gap-4 mt-8">
<div className="flex items-center">
<FaAward className="text-yellow-500 mr-2" />
<span className="text-lg">17 نوبېل مۇكاپاتى</span>
</div>
<div className="flex items-center">
<FaGlobeAmericas className="text-cyan-500 mr-2" />
<span className="text-lg">8 دۆلەت ۋەكىلى</span>
</div>
<div className="flex items-center">
<FaAtom className="text-green-500 mr-2" />
<span className="text-lg">كىۋانت فىزىكىسىنىڭ ئاساسى</span>
</div>
</div>
</div>


    {/* سۈزگۈچ ۋە ئىزدەش */}
    <div className="mb-12 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 w-full">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ئالىم ئىزدەش (ئىسىم، دۆلەت، تۆھپە)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <FaSortAmountDown className="text-gray-400" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="influence">تەسىر كۈچى</option>
              <option value="name">ئىسىم</option>
              <option value="nobel">نوبېل ۋاقتى</option>
            </select>
          </div>
          
          <button
            onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
            className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {sortOrder === 'desc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-cyan-500' : 'bg-gray-900'}`}
            >
              <div className="grid grid-cols-2 gap-1 w-4 h-4">
                <div className="bg-white rounded"></div>
                <div className="bg-white rounded"></div>
                <div className="bg-white rounded"></div>
                <div className="bg-white rounded"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-cyan-500' : 'bg-gray-900'}`}
            >
              <div className="flex flex-col gap-1 w-4 h-4">
                <div className="bg-white rounded h-1"></div>
                <div className="bg-white rounded h-1"></div>
                <div className="bg-white rounded h-1"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* كاتېگورىيە سۈزگۈچلىرى */}
      <div className="flex flex-wrap gap-3 mt-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              filter === cat.id 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                : 'bg-gray-900 hover:bg-gray-800 text-gray-300'
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
            <span className="bg-black/30 px-2 py-1 rounded-full text-sm">
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>

    {/* ئالىملار تىزىملىكى */}
    {viewMode === 'grid' ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {filteredScientists.map(scientist => (
          <div
            key={scientist.id}
            onClick={() => setSelectedScientist(scientist)}
            className={`group cursor-pointer bg-gradient-to-br ${scientist.color} rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-700/50`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{scientist.name}</h3>
                  <p className="text-gray-200 mb-2">{scientist.birthDeath}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{scientist.flag}</span>
                    <span className="text-gray-300">{scientist.country}</span>
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${scientist.signatureColor} shadow-lg`}>
                  {scientist.portrait}
                </div>
              </div>

              <p className="text-gray-200 mb-4 line-clamp-2">{scientist.description}</p>

              {scientist.nobel && (
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full">
                    <FaAward className="text-yellow-500" />
                    <span className="text-yellow-300">نوبېل {scientist.nobel.year}</span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {scientist.category.slice(0, 3).map((cat, idx) => (
                  <span key={idx} className="px-2 py-1 bg-black/30 rounded-lg text-xs">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <FaChartLine className="text-green-400" />
                  <span className="text-lg font-bold">تەسىر: {scientist.influence}/10</span>
                </div>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  تەپسىلاتى
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="space-y-4 mb-12">
        {filteredScientists.map(scientist => (
          <div
            key={scientist.id}
            onClick={() => setSelectedScientist(scientist)}
            className="group cursor-pointer bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700/50"
          >
            <div className="flex items-center gap-6">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold ${scientist.signatureColor}`}>
                {scientist.portrait}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{scientist.name}</h3>
                    <p className="text-gray-300">{scientist.fullName}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{scientist.flag}</span>
                      <span>{scientist.country}</span>
                    </div>
                    <p className="text-gray-400">{scientist.birthDeath}</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-3 line-clamp-2">{scientist.description}</p>
                <div className="flex items-center gap-4 mt-4">
                  {scientist.nobel && (
                    <div className="flex items-center gap-2">
                      <FaAward className="text-yellow-500" />
                      <span className="text-yellow-300">نوبېل {scientist.nobel.year}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <FaChartLine className="text-green-400" />
                    <span>تەسىر: {scientist.influence}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* تەپسىلىي كۆرۈنۈش */}
    {selectedScientist && (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
          <div className={`p-8 ${selectedScientist.signatureColor}`}>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold mb-2">{selectedScientist.name}</h2>
                <p className="text-xl">{selectedScientist.fullName}</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-2xl">{selectedScientist.flag}</span>
                  <span className="text-lg">{selectedScientist.country}</span>
                  <span className="text-gray-300">• {selectedScientist.birthDeath}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedScientist(null)}
                className="text-2xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="p-8">
            <div className="flex gap-8">
              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaBookOpen className="text-cyan-400" />
                    تونۇشتۇرۇش
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{selectedScientist.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaGraduationCap className="text-green-400" />
                    ئوقۇش ۋە ئىلمىي ئورنى
                  </h3>
                  <p className="text-gray-300">{selectedScientist.education}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaQuoteLeft className="text-yellow-400" />
                    ئۇلۇغ سۆزلىرى
                  </h3>
                  <div className="space-y-3">
                    {selectedScientist.quotes.map((quote, idx) => (
                      <div key={idx} className="bg-gray-800/50 p-4 rounded-xl border-l-4 border-cyan-500">
                        <p className="text-gray-300 italic">"{quote}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-1/3">
                {selectedScientist.nobel && (
                  <div className="mb-6 p-6 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl border border-yellow-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <FaAward className="text-3xl text-yellow-500" />
                      <div>
                        <h4 className="text-xl font-bold text-yellow-300">نوبېل مۇكاپاتى</h4>
                        <p className="text-yellow-400">{selectedScientist.nobel.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{selectedScientist.nobel.field}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">ئاساسلىق تۆھپىلەر</h4>
                  <div className="space-y-2">
                    {selectedScientist.contributions.slice(0, 5).map((cont, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaLightbulb className="text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{cont}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">ئەمەلىي تەتبىقى</h4>
                  <div className="space-y-2">
                    {selectedScientist.applications.slice(0, 5).map((app, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCogs className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">تەسىر كۈچى</span>
                    <span className="text-2xl font-bold text-cyan-400">{selectedScientist.influence}/10</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${selectedScientist.influence * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MdTimeline className="text-purple-400" />
                ھاياتى ۋە مۇھىم ۋەقەلەر
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedScientist.timeline.map((event, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-4 rounded-xl">
                    <div className="text-cyan-400 font-bold text-lg">{event.year}</div>
                    <div className="text-gray-300 mt-1">{event.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* ئومۇمىي ستاتىستىكا */}
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 border border-gray-700">
      <h3 className="text-3xl font-bold mb-8 text-center">سولۋەي يىغىنى ستاتىستىكىسى</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 p-6 rounded-2xl text-center">
          <div className="text-5xl font-bold text-cyan-400 mb-2">29</div>
          <div className="text-gray-300">ئالىم سانى</div>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl text-center">
          <div className="text-5xl font-bold text-yellow-400 mb-2">17</div>
          <div className="text-gray-300">نوبېل مۇكاپاتى</div>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl text-center">
          <div className="text-5xl font-bold text-green-400 mb-2">8</div>
          <div className="text-gray-300">دۆلەت سانى</div>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-2xl text-center">
          <div className="text-5xl font-bold text-purple-400 mb-2">100+</div>
          <div className="text-gray-300">ئاساسلىق كەشپىيات</div>
        </div>
      </div>
    </div>
    <div><img src="https://rochemamabolo.wordpress.com/wp-content/uploads/2022/08/1659459100671.jpg" alt="" />سولۋاي 1927 – ترېنتو 2017: ئاياللار ۋە فىزىكا  </div>

    <div className="text-center text-gray-500 text-sm">
      <p>© 2024 1927 سولۋەي يىغىنى ئالىملىرى مۇزېيى</p>
      <p className="mt-2">بۇ سانلىق مەلۇماتلار فىزىكا تارىخى ۋە كىۋانت فىزىكىسى ئاساسىدا تەييارلاندى</p>
    </div>
  </div>
</div>
);
};

export default Blog37;