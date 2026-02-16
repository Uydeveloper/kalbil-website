// src/components/PhrasesTab.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Star, Filter, Search, Volume2, Copy, ChevronLeft, ChevronRight,
  BookOpen, Download, Grid, List, Shuffle, X, CheckCircle, Sparkles,
  Play, Pause, Bookmark, Share2, Eye, EyeOff, Lock, Unlock, 
  Target, TrendingUp, Award, Brain, Mic, Headphones, Clock,
  Calendar, User, Users, Home, ShoppingBag, Car, Phone, Heart,
  Music, Film, Camera, Coffee, Utensils, Banknote, CreditCard,
  MapPin, Navigation, Cloud, Sun, Moon, Wind, Thermometer,
  Bell, MessageSquare, Mail, PhoneCall, Video, CameraIcon,
  Printer, FileText, Database, Server, Cpu, HardDrive,
  Wifi, Bluetooth, Battery, Zap, Power, Settings, Tool,
  Globe, Map, Compass, Flag, Gift, PartyPopper, Trophy,
  PenTool, Type, AlignLeft, Bold, Italic, Underline,
  Hash, Percent, DollarSign, Euro, Pound, Yen, Bitcoin,
  Calculator, PieChart, BarChart, LineChart, TrendingDown,
  Shield, Key, Fingerprint, Smartphone, Tablet, Monitor,
  Watch, Speaker, HeadphonesIcon, Radio, Tv, Gamepad,
  Book, Newspaper, File, Folder, Archive, Trash2,
  RefreshCw, RotateCcw, RotateCw, ZoomIn, ZoomOut,
  Maximize, Minimize, ExternalLink, Link, Unlink,
  HelpCircle, Info, AlertTriangle, AlertCircle,
  CheckSquare, Square, Circle, RadioButton,
  ToggleLeft, ToggleRight, Switch,
  Sliders, Settings2, Palette, Brush,
  Image, FileImage, FileVideo, FileMusic,
  FolderPlus, FolderMinus, FolderOpen,
  Upload, DownloadCloud, CloudRain,
  CloudSnow, CloudLightning, Sunrise,
  Sunset, Droplets, Umbrella, ThermometerSun,
  WindIcon, Tornado, Hurricane, Earthquake,
  Volcano, Snowflake, Fire, Trees, Leaf, Flower,
  Bug, Fish, Bird, Cat, Dog, Rabbit, Cow, Pig,
  Whale, Dolphin, Shark, Dragon, Ghost, Skull,
  Crown, Castle, Sword, ShieldIcon, FlagIcon,
  Anchor, Ship, Rocket, Airplane, Train, Bus,
  Bicycle, Scooter, Skateboard, CarIcon,
  Ambulance, Firetruck, PoliceCar, Taxi,
  TrafficCone, TrafficLight, Construction,
  Factory, Warehouse, HomeIcon, Building,
  Bridge, Tunnel, Road, Mountain, Forest,
  Island, Beach, Desert, Glacier, River,
  Lake, Ocean, Planet, MoonIcon, SunIcon,
  StarIcon, Galaxy, Telescope, Microscope,
  Flask, Beaker, TestTube, Atom, Dna, BrainIcon,
  HeartIcon, Lung, Bone, EyeIcon, Ear, Nose,
  Mouth, Hand, Foot, Arm, Leg, UserCheck,
  UserPlus, UserMinus, UserX, UsersIcon,
  UserIcon, Smile, Frown, Meh, Laugh,
  ThumbsUp, ThumbsDown, Heartbeat,
  Activity, Pulse, ThermometerIcon,
  Droplet, Wind2, CloudIcon, Sun2,
  Moon2, AlertOctagon, AlertTriangleIcon,
  AlertCircleIcon, CheckCircle2, XCircle,
  XOctagon, XSquare, PlusCircle, MinusCircle,
  DivideCircle, PercentCircle, HashIcon,
  Asterisk, Infinity, Pi, Omega, Alpha,
  Sigma, Delta, Gamma, Lambda, Copyright,
  Registered, Trademark, AtSign, Hash2,
  DollarSignIcon, EuroIcon, PoundIcon,
  YenIcon, BitcoinIcon, CreditCardIcon,
  ShoppingCart, ShoppingBagIcon, Package,
  Box, Cube, Layers, GridIcon, Layout,
  Sidebar, Menu, BarChart2, LineChartIcon,
  PieChartIcon, TrendingUpIcon, TrendingDownIcon
} from 'lucide-react';

// ئۇيغۇر تىلى كاتېگورىيەلىرى
const UYGHUR_CATEGORIES = {
  'greetings': 'سەلمەش ئىبارىلىرى',
  'common-phrases': 'كۈندىلىك ئىبارىلەر',
  'questions': 'سوئال ئىبارىلىرى',
  'directions': 'يۆنىلىش ئىبارىلىرى',
  'food': 'تائام ئىبارىلىرى',
  'shopping': 'سودا-سېتىق ئىبارىلىرى',
  'emergency': 'ئاۋارىچىلىق ئىبارىلىرى',
  'family': 'ئائىلە ئىبارىلىرى',
  'numbers': 'سان-سىفىرلار',
  'time': 'ۋاقىت ئىبارىلىرى',
  'weather': 'ھاۋا-راي ئىبارىلىرى',
  'work': 'خىزمەت ئىبارىلىرى',
  'education': 'مائارىپ ئىبارىلىرى',
  'health': 'ساغلاملىق ئىبارىلىرى',
  'transportation': 'قاتناش ئىبارىلىرى',
  'technology': 'تېخنولوگىيە ئىبارىلىرى',
  'business': 'سودا-سېتىق ئىبارىلىرى',
  'travel': 'سەپەر ئىبارىلىرى',
  'entertainment': 'كۆڭۈل ئېچىش ئىبارىلىرى',
  'sports': 'تەنتەربىيە ئىبارىلىرى',
  'culture': 'مەدەنىيەت ئىبارىلىرى',
  'religion': 'دىن ئىبارىلىرى',
  'other': 'باشقىلار'
};

// ئىبارە مەشىق تۈرلىرى
const PRACTICE_TYPES = {
  'flashcards': 'ئەسكەرتمە خەتلىرى',
  'typing': 'يېزىش مەشىقى',
  'listening': 'ئاڭلاش مەشىقى',
  'speaking': 'سۆزلەش مەشىقى',
  'matching': 'ماسلاشتۇرۇش مەشىقى',
  'multiple-choice': 'كۆپ تاللاش مەشىقى'
};

// ئاساسىي ئۇيغۇر ئىبارىلىرى (مەلۇمات ساندۇقى)
const DEFAULT_UYGHUR_PHRASES = [
  // ========== باشلانغۇچ دەرىجىسى (20 ئىبارە) ==========
  {
    id: 1,
    difficulty: "beginner",
    uyghur: "ياخشىمۇسىز",
    latin: "Yakhshimusi z",
    pronunciation: "Yakh-shimoo-siz",
    english: "Hello / How are you?",
    chinese: "你好",
    turkish: "Merhaba / Nasılsınız?",
    arabic: "مرحبا / كيف حالك؟",
    russian: "Здравствуйте / Как дела?",
    category: "greetings",
    tags: ["basic", "greeting", "formal", "essential"],
    usage: "رەسمىي سەلمەش ئىبارىسى",
    example: "ياخشىمۇسىز، مەن ئۇيغۇرچە ئۆگىنىۋاتىمەن.",
    culturalNote: "بۇ ئىبارە مۇھەررىمە ۋە كەڭ قوللىنىلىدىغان سەلمەش ئىبارىسىدۇر.",
    lessonLink: "/learn/basics/greetings",
    audioUrl: "https://example.com/audio/yakhshimusi z.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 10,
    lastPracticed: "2024-01-15",
    mastered: false
  },
  {
    id: 2,
    difficulty: "beginner",
    uyghur: "مەن ياخشى",
    latin: "Men yakhshi",
    pronunciation: "Men yakh-shee",
    english: "I am fine",
    chinese: "我很好",
    turkish: "Ben iyiyim",
    arabic: "أنا بخير",
    russian: "Я в порядке",
    category: "greetings",
    tags: ["basic", "response", "feeling", "essential"],
    usage: "ھال-ئەھۋال جاۋابى",
    example: "مەن ياخشى، سىزچۇ؟",
    culturalNote: "ئادەتتە 'مەن ياخشى' دېگەندىن كېيىن 'سىزچۇ؟' دېگەن سوئال قوشۇلىدۇ.",
    lessonLink: "/learn/basics/responses",
    audioUrl: "https://example.com/audio/men_yakhshi.mp3",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=300&q=80",
    frequency: 9,
    lastPracticed: "2024-01-14",
    mastered: true
  },
  {
    id: 3,
    difficulty: "beginner",
    uyghur: "رەھمەت",
    latin: "Rakhmet",
    pronunciation: "Rakh-met",
    english: "Thank you",
    chinese: "谢谢",
    turkish: "Teşekkür ederim",
    arabic: "شكرا",
    russian: "Спасибо",
    category: "common-phrases",
    tags: ["basic", "courtesy", "gratitude", "essential"],
    usage: "مەننەتدارلىق بىلدۈرۈش",
    example: "سىزگە رەھمەت، ياردەمىڭىز ئۈچۈن.",
    culturalNote: "ئۇيغۇرلاردا رەھمەت دېگەن سۆز كۆپ قوللىنىلىدۇ ھەم كۈچلۈك مەننەتدارلىقنى بىلدۈرىدۇ.",
    lessonLink: "/learn/basics/courtesy",
    audioUrl: "https://example.com/audio/rakhmet.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 10,
    lastPracticed: "2024-01-15",
    mastered: true
  },
  {
    id: 4,
    difficulty: "beginner",
    uyghur: "كەچۈرۈڭ",
    latin: "Kechurung",
    pronunciation: "Kech-oo-roong",
    english: "Excuse me / Sorry",
    chinese: "对不起 / 打扰一下",
    turkish: "Affedersiniz / Özür dilerim",
    arabic: "عذرًا / آسف",
    russian: "Извините / Простите",
    category: "common-phrases",
    tags: ["basic", "apology", "attention", "courtesy"],
    usage: "كەچۈرۈم سوراش ياكى دىققەت تارتىش",
    example: "كەچۈرۈڭ، سائەت نەچچە؟",
    culturalNote: "ھەر قانداق تەلەپتىن بۇرۇن 'كەچۈرۈڭ' دېيىش ئەدەپلىك ھېسابلىنىدۇ.",
    lessonLink: "/learn/basics/apologies",
    audioUrl: "https://example.com/audio/kechurung.mp3",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=300&q=80",
    frequency: 8,
    lastPracticed: "2024-01-13",
    mastered: false
  },
  {
    id: 5,
    difficulty: "beginner",
    uyghur: "ھەئە",
    latin: "He'e",
    pronunciation: "Heh-eh",
    english: "Yes",
    chinese: "是的",
    turkish: "Evet",
    arabic: "نعم",
    russian: "Да",
    category: "common-phrases",
    tags: ["basic", "agreement", "confirmation", "essential"],
    usage: "جەزملەش ياكى قوبۇل قىلىش",
    example: "ھەئە، مەن چۈشەندىم.",
    culturalNote: "ھەئە دېگەن سۆز مۇھىم جەزملەش سۆزى بولۇپ، رەسمىي ۋە رەسمىي بولمىغان ھاللاردا قوللىنىلىدۇ.",
    lessonLink: "/learn/basics/affirmations",
    audioUrl: "https://example.com/audio/he'e.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 9,
    lastPracticed: "2024-01-14",
    mastered: true
  },
  {
    id: 6,
    difficulty: "beginner",
    uyghur: "ياق",
    latin: "Yaq",
    pronunciation: "Yakh",
    english: "No",
    chinese: "不是",
    turkish: "Hayır",
    arabic: "لا",
    russian: "Нет",
    category: "common-phrases",
    tags: ["basic", "negation", "refusal", "essential"],
    usage: "بەلگىلەش ياكى رەت قىلىش",
    example: "ياق، مەن بىلمەيمەن.",
    culturalNote: "بەزىدە 'ياق' دېگەننىڭ ئورنىغا 'يوق' دېيىلىدۇ.",
    lessonLink: "/learn/basics/negations",
    audioUrl: "https://example.com/audio/yaq.mp3",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=300&q=80",
    frequency: 8,
    lastPracticed: "2024-01-13",
    mastered: true
  },
  {
    id: 7,
    difficulty: "beginner",
    uyghur: "مەن بىلمەيمەن",
    latin: "Men bilmeymen",
    pronunciation: "Men bil-mey-men",
    english: "I don't know",
    chinese: "我不知道",
    turkish: "Bilmiyorum",
    arabic: "لا أعرف",
    russian: "Я не знаю",
    category: "common-phrases",
    tags: ["basic", "uncertainty", "ignorance"],
    usage: "بىلىمىنىڭ يېتەرسىزلىكىنى بىلدۈرۈش",
    example: "كەچۈرۈڭ، مەن بىلمەيمەن.",
    culturalNote: "بۇ ئىبارە ئەدەپلىك بىلەن بىلمەيدىغانلىقنى بىلدۈرۈش ئۈچۈندۇر.",
    lessonLink: "/learn/basics/uncertainty",
    audioUrl: "https://example.com/audio/men_bilmeymen.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 7,
    lastPracticed: "2024-01-12",
    mastered: false
  },
  {
    id: 8,
    difficulty: "beginner",
    uyghur: "چۈشەندىم",
    latin: "Chüshendim",
    pronunciation: "Choo-shen-dim",
    english: "I understand",
    chinese: "我明白了",
    turkish: "Anladım",
    arabic: "فهمت",
    russian: "Я понял",
    category: "common-phrases",
    tags: ["basic", "comprehension", "learning"],
    usage: "چۈشەنگەنلىكنى بىلدۈرۈش",
    example: "ھەئە، چۈشەندىم.",
    culturalNote: "ئوقۇتقۇچىغا ياكى سۆزلەشكۈچىگە دىققەت قىلغانلىقنى كۆرسىتىدۇ.",
    lessonLink: "/learn/basics/comprehension",
    audioUrl: "https://example.com/audio/chushendim.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 8,
    lastPracticed: "2024-01-13",
    mastered: true
  },
  {
    id: 9,
    difficulty: "beginner",
    uyghur: "بىر قەدەر",
    latin: "Bir qeder",
    pronunciation: "Bir khe-der",
    english: "A little",
    chinese: "一点",
    turkish: "Biraz",
    arabic: "قليلا",
    russian: "Немного",
    category: "common-phrases",
    tags: ["basic", "quantity", "measurement"],
    usage: "ئاز مىقدارنى بىلدۈرۈش",
    example: "مەن بىر قەدەر ئۇيغۇرچە سۆزلىشەلەيمەن.",
    culturalNote: "توغرا مىقدارنى ئەستە تۇتۇش ئۈچۈن قوللىنىلىدۇ.",
    lessonLink: "/learn/basics/quantities",
    audioUrl: "https://example.com/audio/bir_qeder.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 6,
    lastPracticed: "2024-01-11",
    mastered: false
  },
  {
    id: 10,
    difficulty: "beginner",
    uyghur: "بۇ نېمە؟",
    latin: "Bu nëme?",
    pronunciation: "Boo ne-me?",
    english: "What is this?",
    chinese: "这是什么？",
    turkish: "Bu nedir?",
    arabic: "ما هذا؟",
    russian: "Что это?",
    category: "questions",
    tags: ["basic", "inquiry", "identification", "essential"],
    usage: "نىسانىنى بىلىش ئۈچۈن سوئال",
    example: "كەچۈرۈڭ، بۇ نېمە؟",
    culturalNote: "يېڭى نەرسىلەرنى ئۆگىنىشتە كۆپ قوللىنىلىدىغان سوئال.",
    lessonLink: "/learn/basics/questions",
    audioUrl: "https://example.com/audio/bu_neme.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 9,
    lastPracticed: "2024-01-14",
    mastered: true
  },
  {
    id: 11,
    difficulty: "beginner",
    uyghur: "قەيەردە؟",
    latin: "Qayerde?",
    pronunciation: "Kha-yer-de?",
    english: "Where?",
    chinese: "在哪里？",
    turkish: "Nerede?",
    arabic: "أين؟",
    russian: "Где?",
    category: "questions",
    tags: ["basic", "location", "direction"],
    usage: "ئورۇن سوراش",
    example: "ھەممام قەيەردە؟",
    culturalNote: "ئادەتتىكى ئورۇن سوراش سوئالى.",
    lessonLink: "/learn/basics/location",
    audioUrl: "https://example.com/audio/qayerde.mp3",
    frequency: 7,
    lastPracticed: "2024-01-12",
    mastered: false
  },
  {
    id: 12,
    difficulty: "beginner",
    uyghur: "قەچەن؟",
    latin: "Qeçen?",
    pronunciation: "Khe-chen?",
    english: "When?",
    chinese: "什么时候？",
    turkish: "Ne zaman?",
    arabic: "متى؟",
    russian: "Когда?",
    category: "questions",
    tags: ["basic", "time", "schedule"],
    usage: "ۋاقىت سوراش",
    example: "قەچەن كېلىسىز؟",
    culturalNote: "ۋاقىت بەلگىلەشكە ئىشلىتىلىدىغان سوئال.",
    lessonLink: "/learn/basics/time",
    audioUrl: "https://example.com/audio/qechen.mp3",
    frequency: 6,
    lastPracticed: "2024-01-11",
    mastered: false
  },
  {
    id: 13,
    difficulty: "beginner",
    uyghur: "نەچچە؟",
    latin: "Neççe?",
    pronunciation: "Nech-che?",
    english: "How many?",
    chinese: "多少？",
    turkish: "Kaç?",
    arabic: "كم؟",
    russian: "Сколько?",
    category: "questions",
    tags: ["basic", "quantity", "number"],
    usage: "سان سوراش",
    example: "سىزگە نەچچە كېرەك؟",
    culturalNote: "مىقدار سوراش ئۈچۈن قوللىنىلىدۇ.",
    lessonLink: "/learn/basics/quantity",
    audioUrl: "https://example.com/audio/necche.mp3",
    frequency: 7,
    lastPracticed: "2024-01-12",
    mastered: false
  },
  {
    id: 14,
    difficulty: "beginner",
    uyghur: "قانچىلىك؟",
    latin: "Qançilik?",
    pronunciation: "Khan-chi-lik?",
    english: "How much?",
    chinese: "多少钱？",
    turkish: "Ne kadar?",
    arabic: "كم سعره؟",
    russian: "Сколько стоит?",
    category: "questions",
    tags: ["basic", "price", "shopping"],
    usage: "باھا سوراش",
    example: "بۇ قانچىلىك؟",
    culturalNote: "سودا-سېتىق قىلغاندا كۆپ ئىشلىتىلىدۇ.",
    lessonLink: "/learn/basics/price",
    audioUrl: "https://example.com/audio/qanchilik.mp3",
    frequency: 8,
    lastPracticed: "2024-01-13",
    mastered: true
  },
  {
    id: 15,
    difficulty: "beginner",
    uyghur: "مەن ئاچتىمەن",
    latin: "Men achttmen",
    pronunciation: "Men acht-ti-men",
    english: "I am hungry",
    chinese: "我饿了",
    turkish: "Acıktım",
    arabic: "أنا جائع",
    russian: "Я голоден",
    category: "food",
    tags: ["basic", "hunger", "food", "need"],
    usage: "ئاچلىقنى بىلدۈرۈش",
    example: "مەن ئاچتىمەن، بىر نەرسە يەيمۇ؟",
    culturalNote: "تائام تەلەپ قىلىشتىن بۇرۇن ئىشلىتىلىدۇ.",
    lessonLink: "/learn/basics/needs",
    audioUrl: "https://example.com/audio/men_achttmen.mp3",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae05?auto=format&fit=crop&w=300&q=80",
    frequency: 6,
    lastPracticed: "2024-01-11",
    mastered: false
  },
  {
    id: 16,
    difficulty: "beginner",
    uyghur: "مەن سۇسايمەن",
    latin: "Men susaymen",
    pronunciation: "Men su-sa-y-men",
    english: "I am thirsty",
    chinese: "我渴了",
    turkish: "Susadım",
    arabic: "أنا عطشان",
    russian: "Я хочу пить",
    category: "food",
    tags: ["basic", "thirst", "drink", "need"],
    usage: "سۇساشنى بىلدۈرۈش",
    example: "مەن سۇسايمەن، بىر ئىچىملىك ئالىمۇ؟",
    culturalNote: "سۇ ياكى ئىچىملىك تەلەپ قىلىشتا ئىشلىتىلىدۇ.",
    lessonLink: "/learn/basics/drinks",
    audioUrl: "https://example.com/audio/men_susaymen.mp3",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
    frequency: 5,
    lastPracticed: "2024-01-10",
    mastered: false
  },
  {
    id: 17,
    difficulty: "beginner",
    uyghur: "سۇ بېرىڭ",
    latin: "Su bëring",
    pronunciation: "Soo be-ring",
    english: "Give me water",
    chinese: "给我水",
    turkish: "Su verin",
    arabic: "أعطني ماء",
    russian: "Дайте воды",
    category: "food",
    tags: ["basic", "request", "drink"],
    usage: "سۇ تەلەپ قىلىش",
    example: "سۇ بېرىڭ، رەھمەت.",
    culturalNote: "ساددە ۋە راۋان تەلەپ ئىبارىسى.",
    lessonLink: "/learn/basics/requests",
    audioUrl: "https://example.com/audio/su_bering.mp3",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80",
    frequency: 4,
    lastPracticed: "2024-01-09",
    mastered: false
  },
  {
    id: 18,
    difficulty: "beginner",
    uyghur: "يېمەكلىك بېرىڭ",
    latin: "Yemeklik bëring",
    pronunciation: "Ye-mek-lik be-ring",
    english: "Give me food",
    chinese: "给我食物",
    turkish: "Yemek verin",
    arabic: "أعطني طعاما",
    russian: "Дайте еды",
    category: "food",
    tags: ["basic", "request", "food"],
    usage: "تائام تەلەپ قىلىش",
    example: "يېمەكلىك بېرىڭ، مەن ئاچتىمەن.",
    culturalNote: "رەسمىي مۇھىتتا ئىشلەتكەندە 'يېمەكلىك' سۆزى قوللىنىلىدۇ.",
    lessonLink: "/learn/basics/food-requests",
    audioUrl: "https://example.com/audio/yemeklik_bering.mp3",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae05?auto=format&fit=crop&w=300&q=80",
    frequency: 4,
    lastPracticed: "2024-01-09",
    mastered: false
  },
  {
    id: 19,
    difficulty: "beginner",
    uyghur: "مەن ياخشى كۆرىمەن",
    latin: "Men yakhshi körimen",
    pronunciation: "Men yakh-shee ko-ri-men",
    english: "I like it",
    chinese: "我喜欢",
    turkish: "Beğeniyorum",
    arabic: "أعجبني",
    russian: "Мне нравится",
    category: "common-phrases",
    tags: ["basic", "preference", "liking"],
    usage: "ياقتۇرۇش ھېسسىياتىنى بىلدۈرۈش",
    example: "مەن بۇ تائامنى ياخشى كۆرىمەن.",
    culturalNote: "قوشۇمچە ھالەت بىلدۈرۈش ئۈچۈن قوللىنىلىدۇ.",
    lessonLink: "/learn/basics/preferences",
    audioUrl: "https://example.com/audio/men_yakhshi_korimen.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 5,
    lastPracticed: "2024-01-10",
    mastered: false
  },
  {
    id: 20,
    difficulty: "beginner",
    uyghur: "مەن ياخشى كۆرمەيمەن",
    latin: "Men yakhshi körmeymen",
    pronunciation: "Men yakh-shee kor-mey-men",
    english: "I don't like it",
    chinese: "我不喜欢",
    turkish: "Beğenmiyorum",
    arabic: "لا يعجبني",
    russian: "Мне не нравится",
    category: "common-phrases",
    tags: ["basic", "preference", "disliking"],
    usage: "ياقتۇرماۋاتقانلىقنى بىلدۈرۈش",
    example: "مەن بۇنى ياخشى كۆرمەيمەن.",
    culturalNote: "ئەدەپلىك بىلەن ياقتۇرماۋاتقانلىقنى بىلدۈرۈش ئۈچۈن قوللىنىلىدۇ.",
    lessonLink: "/learn/basics/dislikes",
    audioUrl: "https://example.com/audio/men_yakhshi_kormeymen.mp3",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=300&q=80",
    frequency: 5,
    lastPracticed: "2024-01-10",
    mastered: false
  },

  // ========== ئوتتۇرا دەرىجىسى (15 ئىبارە) ==========
  {
    id: 21,
    difficulty: "intermediate",
    uyghur: "قانداق ئىشلەۋاتىسىز؟",
    latin: "Qandaq ishlewatsiz?",
    pronunciation: "Khan-dakh ish-le-wa-ti-siz?",
    english: "How are you doing?",
    chinese: "你怎么样？",
    turkish: "Nasıl gidiyor?",
    arabic: "كيف تسير الأمور؟",
    russian: "Как у вас дела?",
    category: "greetings",
    tags: ["intermediate", "greeting", "inquiry", "conversation"],
    usage: "ھال-ئەھۋالنى سوراش",
    example: "ياخشىمۇسىز، قانداق ئىشلەۋاتىسىز؟",
    culturalNote: "دوستانە ۋە ئادەتتىكى سوراشقا ئىنتايىن ماس كېلىدۇ.",
    lessonLink: "/learn/intermediate/greetings",
    audioUrl: "https://example.com/audio/qandaq_ishlewatsiz.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 7,
    lastPracticed: "2024-01-12",
    mastered: false
  },
  {
    id: 22,
    difficulty: "intermediate",
    uyghur: "سىزگە قانداق ياردەم بېرەي؟",
    latin: "Sizge qandaq yardem berey?",
    pronunciation: "Siz-ge khan-dakh yar-dem be-rey?",
    english: "How can I help you?",
    chinese: "我能帮你什么？",
    turkish: "Size nasıl yardım edebilirim?",
    arabic: "كيف يمكنني مساعدتك؟",
    russian: "Чем могу вам помочь?",
    category: "questions",
    tags: ["intermediate", "help", "assistance", "service"],
    usage: "ياردەم تەكلىپى",
    example: "كەچۈرۈڭ، سىزگە قانداق ياردەم بېرەي؟",
    culturalNote: "خىزمەتچىلەر تەرىپىدىن كۆپ قوللىنىلىدىغان ئىبارە.",
    lessonLink: "/learn/intermediate/offers",
    audioUrl: "https://example.com/audio/sizge_qandaq_yardem.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 6,
    lastPracticed: "2024-01-11",
    mastered: false
  },
  {
    id: 23,
    difficulty: "intermediate",
    uyghur: "مەن چۈشەنمەيمەن",
    latin: "Men chüshenmeymen",
    pronunciation: "Men choo-shen-mey-men",
    english: "I don't understand",
    chinese: "我不明白",
    turkish: "Anlamıyorum",
    arabic: "لا أفهم",
    russian: "Я не понимаю",
    category: "common-phrases",
    tags: ["intermediate", "confusion", "clarification", "communication"],
    usage: "چۈشەنمىگەنلىكنى بىلدۈرۈش",
    example: "كەچۈرۈڭ، مەن چۈشەنمەيمەن.",
    culturalNote: "ئەدەپلىك بىلەن تېخىمۇ ئېنىق ئەھۋال سوراش ئۈچۈن بۇ ئىبارە قوللىنىلىدۇ.",
    lessonLink: "/learn/intermediate/clarification",
    audioUrl: "https://example.com/audio/men_chushenmeymen.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 5,
    lastPracticed: "2024-01-10",
    mastered: false
  },
  {
    id: 24,
    difficulty: "intermediate",
    uyghur: "تەكرارلىيەلەمسىز؟",
    latin: "Tekrarliyelemsiz?",
    pronunciation: "Tek-rar-li-ye-lem-si-z?",
    english: "Can you repeat that?",
    chinese: "你能重复一下吗？",
    turkish: "Tekrar eder misiniz?",
    arabic: "هل يمكنك تكرار ذلك؟",
    russian: "Можете повторить?",
    category: "questions",
    tags: ["intermediate", "request", "repetition", "communication"],
    usage: "تەكرارلاش تەلىپى",
    example: "كەچۈرۈڭ، تەكرارلىيەلەمسىز؟",
    culturalNote: "ئاۋاز تۆۋەن بولۇپ ئەدەپلىك بىلەن تەلىپ قىلىنغاندا كۆپ ئىشلىتىلىدۇ.",
    lessonLink: "/learn/intermediate/repetition",
    audioUrl: "https://example.com/audio/tekrarliyelemsiz.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 4,
    lastPracticed: "2024-01-09",
    mastered: false
  },
  {
    id: 25,
    difficulty: "intermediate",
    uyghur: "مېنىڭچە بۇ توغرا",
    latin: "Mëningche bu toghra",
    pronunciation: "Me-ni-ng-che boo togh-ra",
    english: "I think this is correct",
    chinese: "我认为这是正确的",
    turkish: "Bence bu doğru",
    arabic: "أعتقد أن هذا صحيح",
    russian: "Я думаю, это правильно",
    category: "common-phrases",
    tags: ["intermediate", "opinion", "assessment", "certainty"],
    usage: "شەخسىي قاراشنى بىلدۈرۈش",
    example: "مېنىڭچە بۇ توغرا جاۋاب.",
    culturalNote: "ئەستە تۇتۇش بىلەن بىرگە پەزىلەت بىلدۈرىدۇ.",
    lessonLink: "/learn/intermediate/opinions",
    audioUrl: "https://example.com/audio/meningche_bu_toghra.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 3,
    lastPracticed: "2024-01-08",
    mastered: false
  },
  {
    id: 26,
    difficulty: "intermediate",
    uyghur: "بۇنداق بولۇشى مۇمكىن",
    latin: "Bundaq bolushi mümkin",
    pronunciation: "Boon-dakh bo-loo-shi moom-kin",
    english: "This might be possible",
    chinese: "这可能",
    turkish: "Bu mümkün olabilir",
    arabic: "قد يكون هذا ممكنا",
    russian: "Это может быть возможно",
    category: "common-phrases",
    tags: ["intermediate", "possibility", "uncertainty", "speculation"],
    usage: "ئېھتىماللىقنى بىلدۈرۈش",
    example: "بۇنداق بولۇشى مۇمكىن، ئەمما...",
    culturalNote: "ئەستە تۇتۇش بىلەن ئېھتىماللىقنى بىلدۈرىدۇ.",
    lessonLink: "/learn/intermediate/possibility",
    audioUrl: "https://example.com/audio/bundaq_bolushi_mumkin.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 2,
    lastPracticed: "2024-01-07",
    mastered: false
  },
  {
    id: 27,
    difficulty: "intermediate",
    uyghur: "مەن سىز بىلەن قوشۇلىمەن",
    latin: "Men siz bilen qoshulimen",
    pronunciation: "Men siz bi-len kho-shu-li-men",
    english: "I will join you",
    chinese: "我会加入你",
    turkish: "Size katılacağım",
    arabic: "سأنضم إليك",
    russian: "Я присоединюсь к вам",
    category: "common-phrases",
    tags: ["intermediate", "agreement", "participation", "social"],
    usage: "قوشۇلۇش قارارىنى بىلدۈرۈش",
    example: "ياخشى، مەن سىز بىلەن قوشۇلىمەن.",
    culturalNote: "دوستلۇق ۋە ھەمكارلىق رۇھىنى بىلدۈرىدۇ.",
    lessonLink: "/learn/intermediate/participation",
    audioUrl: "https://example.com/audio/men_siz_bilen_qoshulimen.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 3,
    lastPracticed: "2024-01-08",
    mastered: false
  },
  {
    id: 28,
    difficulty: "intermediate",
    uyghur: "مەن سىزگە قوشۇلۇپ قالدۇم",
    latin: "Men sizge qoshulup qaldum",
    pronunciation: "Men siz-ge kho-shu-loop khal-doom",
    english: "I ended up joining you",
    chinese: "我最后加入了你们",
    turkish: "Size katıldım",
    arabic: "انتهى بي إلى الانضمام إليك",
    russian: "В итоге я присоединился к вам",
    category: "common-phrases",
    tags: ["intermediate", "past-action", "result", "social"],
    usage: "ئۆتكەن ۋەقەنى بىلدۈرۈش",
    example: "كەچۈرۈڭ، مەن سىزگە قوشۇلۇپ قالدۇم.",
    culturalNote: "ئادەتتىكى ۋەقەلەرنى بايان قىلىشتا قوللىنىلىدۇ.",
    lessonLink: "/learn/intermediate/past-actions",
    audioUrl: "https://example.com/audio/men_sizge_qoshulup_qaldum.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 2,
    lastPracticed: "2024-01-07",
    mastered: false
  },
  {
    id: 29,
    difficulty: "intermediate",
    uyghur: "بۇنىڭدىن كېيىن نېمە قىلىمىز؟",
    latin: "Buningdin keyin nëme qilimiz?",
    pronunciation: "Boo-ning-din ke-yin ne-me khi-li-miz?",
    english: "What shall we do after this?",
    chinese: "之后我们做什么？",
    turkish: "Bundan sonra ne yapacağız?",
    arabic: "ماذا سنفعل بعد هذا؟",
    russian: "Что мы будем делать после этого?",
    category: "questions",
    tags: ["intermediate", "planning", "future", "decision"],
    usage: "كېلەچەك پىلانلىرىنى سوراش",
    example: "بۇنىڭدىن كېيىن نېمە قىلىمىز، سىزنىڭچە؟",
    culturalNote: "ھەمكارلىق قىلىش ۋە پىلانلاشتا قوللىنىلىدۇ.",
    lessonLink: "/learn/intermediate/planning",
    audioUrl: "https://example.com/audio/buningdin_keyin_neme_qilimiz.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 1,
    lastPracticed: "2024-01-06",
    mastered: false
  },
  {
    id: 30,
    difficulty: "intermediate",
    uyghur: "مەن بۇنى چۈشىنىش ئۈچۈن ۋاقىت كېرەك",
    latin: "Men buni chüshinish üchün waqit kërek",
    pronunciation: "Men boo-ni choo-shi-nish oo-chin wa-khit ke-rek",
    english: "I need time to understand this",
    chinese: "我需要时间来理解这个",
    turkish: "Bunu anlamak için zamana ihtiyacım var",
    arabic: "أحتاج وقتا لفهم هذا",
    russian: "Мне нужно время, чтобы понять это",
    category: "common-phrases",
    tags: ["intermediate", "time", "understanding", "request"],
    usage: "ۋاقىت تەلەپ قىلىش",
    example: "كەچۈرۈڭ، مەن بۇنى چۈشىنىش ئۈچۈن ۋاقىت كېرەك.",
    culturalNote: "مۇرەككەپ مەسىلىلەرنى ھەل قىلىشتا ئىشلىتىلىدۇ.",
    lessonLink: "/learn/intermediate/time-requests",
    audioUrl: "https://example.com/audio/men_buni_chushinish_uchun_waqit.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 2,
    lastPracticed: "2024-01-07",
    mastered: false
  },
  {
    id: 31,
    difficulty: "intermediate",
    uyghur: "بۇنى ئەسلىگە كەلتۈرەي",
    latin: "Buni eslige kelttirey",
    pronunciation: "Boo-ni es-li-ge kel-ti-rey",
    english: "Let me recall this",
    chinese: "让我回忆一下",
    turkish: "Bunu hatırlamama izin verin",
    arabic: "دعني أتذكر هذا",
    russian: "Позвольте мне вспомнить это",
    category: "common-phrases",
    tags: ["intermediate", "memory", "recall", "thinking"],
    usage: "ئەسلىگە كەلتۈرۈش تەلىپى",
    example: "كەچۈرۈڭ، بۇنى ئەسلىگە كەلتۈرەي.",
    culturalNote: "ئادەتتىكى ۋە قوللىنىشى ئاسان بىر ئىبارە.",
    lessonLink: "/learn/intermediate/memory",
    audioUrl: "https://example.com/audio/buni_eslige_keltirey.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 3,
    lastPracticed: "2024-01-08",
    mastered: false
  },
  {
    id: 32,
    difficulty: "intermediate",
    uyghur: "مەن بۇنى بىلەتتىم",
    latin: "Men buni bilettim",
    pronunciation: "Men boo-ni bi-let-tim",
    english: "I knew this",
    chinese: "我知道这个",
    turkish: "Bunu biliyordum",
    arabic: "كنت أعرف هذا",
    russian: "Я знал это",
    category: "common-phrases",
    tags: ["intermediate", "knowledge", "past", "certainty"],
    usage: "ئۆتكەندىكى بىلىمنى بىلدۈرۈش",
    example: "مەن بۇنى بىلەتتىم، ئەمما ئۇنتۇپ قالدۇم.",
    culturalNote: "ئەستە تۇتۇلغان ۋەقەلەرنى بايان قىلىشتا قوللىنىلىدۇ.",
    lessonLink: "/learn/intermediate/past-knowledge",
    audioUrl: "https://example.com/audio/men_buni_bilettim.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 2,
    lastPracticed: "2024-01-07",
    mastered: false
  },
  {
    id: 33,
    difficulty: "intermediate",
    uyghur: "بۇنى قىلىش ئۈچۈن تەييار",
    latin: "Buni qilish üchün teyyar",
    pronunciation: "Boo-ni khi-lish oo-chin tey-yar",
    english: "Ready to do this",
    chinese: "准备好做这个",
    turkish: "Bunu yapmaya hazır",
    arabic: "جاهز لفعل هذا",
    russian: "Готов сделать это",
    category: "common-phrases",
    tags: ["intermediate", "readiness", "preparation", "willingness"],
    usage: "تەييارلىقنى بىلدۈرۈش",
    example: "مەن بۇنى قىلىش ئۈچۈن تەييار.",
    culturalNote: "ئىشەنچ ۋە تەييارلىقنى بىلدۈرىدۇ.",
    lessonLink: "/learn/intermediate/readiness",
    audioUrl: "https://example.com/audio/buni_qilish_uchun_teyyar.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 1,
    lastPracticed: "2024-01-06",
    mastered: false
  },
  {
    id: 34,
    difficulty: "intermediate",
    uyghur: "مەن بۇنى ئويلىشىم كېرەك",
    latin: "Men buni oylishim kërek",
    pronunciation: "Men boo-ni oy-li-shim ke-rek",
    english: "I need to think about this",
    chinese: "我需要考虑一下",
    turkish: "Bunu düşünmem gerekiyor",
    arabic: "أحتاج أن أفكر في هذا",
    russian: "Мне нужно подумать об этом",
    category: "common-phrases",
    tags: ["intermediate", "thinking", "consideration", "decision"],
    usage: "ئويلىشىش زۆرۈرلىكىنى بىلدۈرۈش",
    example: "مەن بۇنى ئويلىشىم كېرەك، كېيىن جاۋاب بېرىمەن.",
    culturalNote: "ئەستە تۇتۇش بىلەن بىرگە قەرەر قوبۇل قىلىشتىن ئىلگىرى ئويلىنىشنى بىلدۈرىدۇ.",
    lessonLink: "/learn/intermediate/thinking",
    audioUrl: "https://example.com/audio/men_buni_oylishim_kerek.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 2,
    lastPracticed: "2024-01-07",
    mastered: false
  },
  {
    id: 35,
    difficulty: "intermediate",
    uyghur: "بۇنىڭدىن پايدىلىنىش كېرەك",
    latin: "Buningdin paydilinish kërek",
    pronunciation: "Boo-ning-din pa-y-di-li-nish ke-rek",
    english: "We need to take advantage of this",
    chinese: "我们需要利用这个",
    turkish: "Bundan yararlanmamız gerekiyor",
    arabic: "نحتاج الاستفادة من هذا",
    russian: "Нам нужно воспользоваться этим",
    category: "common-phrases",
    tags: ["intermediate", "advantage", "opportunity", "strategy"],
    usage: "پايدىلىنىش كېرەكلىكىنى بىلدۈرۈش",
    example: "بۇنىڭدىن پايدىلىنىش كېرەك، چۈنكى...",
    culturalNote: "ئىستراتېگىيەلىك پىكىر بىلدۈرۈش ئۈچۈن قوللىنىلىدۇ.",
    lessonLink: "/learn/intermediate/advantage",
    audioUrl: "https://example.com/audio/buningdin_paydilinish_kerek.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 1,
    lastPracticed: "2024-01-06",
    mastered: false
  },

  // ========== ئالىي دەرىجىسى (15 ئىبارە) ==========
  {
    id: 36,
    difficulty: "advanced",
    uyghur: "ئەسلىدىكى مەقسىتىمىز ئومۇميۈزلۈك ھەمكارلىقنى كۈچەيتىشتىن ئىبارەت",
    latin: "Eslidiki meqsitimiz omumiyüzlik hemkarlikni kücheyitishdin ibaret",
    pronunciation: "Es-li-di-ki mekh-si-ti-miz o-moo-mi-yooz-lik hem-kar-lik-ni koo-che-yi-ti-sh-din i-ba-ret",
    english: "Our original purpose is to strengthen global cooperation",
    chinese: "我们的初衷是加强全球合作",
    turkish: "Asıl amacımız küresel işbirliğini güçlendirmektir",
    arabic: "الغرض الأصلي هو تقوية التعاون العالمي",
    russian: "Наша первоначальная цель - укрепление глобального сотрудничества",
    category: "work",
    tags: ["advanced", "professional", "formal", "global", "cooperation"],
    usage: "رەسمىي مەقسەت بىلدۈرۈش",
    example: "ئەسلىدىكى مەقسىتىمىز ئومۇميۈزلۈك ھەمكارلىقنى كۈچەيتىشتىن ئىبارەت بولۇپ، بۇ جەرياندا...",
    culturalNote: "رەسمىي مۇھاكىمە ۋە ھەمكارلىق مۇزاكىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/professional",
    audioUrl: "https://example.com/audio/eslidiki_meqsitimiz.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 37,
    difficulty: "advanced",
    uyghur: "تارىخىي جەرياندا ئۇيغۇر مەدەنىيىتىنىڭ تەرەققىياتى كۆپ قاتلاملىق بولۇپ كەلدى",
    latin: "Tarihi jerayanda uyghur medeniyitining teraqqiyati köp qatlamliq bolup keldi",
    pronunciation: "Ta-ri-khi je-ra-yan-da uy-ghur me-de-ni-yi-ti-ning te-rak-ki-ya-ti kop khat-lam-likh bo-loop kel-di",
    english: "Historically, the development of Uyghur culture has been multi-layered",
    chinese: "历史上，维吾尔文化的发展是多层次的",
    turkish: "Tarihsel süreçte Uygur kültürünün gelişimi çok katmanlı olmuştur",
    arabic: "تاريخيا، كان تطور الثقافة الأويغورية متعدد الطبقات",
    russian: "Исторически развитие уйгурской культуры было многослойным",
    category: "culture",
    tags: ["advanced", "academic", "cultural", "historical", "analysis"],
    usage: "تارىخىي تەھلىل بىلدۈرۈش",
    example: "تارىخىي جەرياندا ئۇيغۇر مەدەنىيىتىنىڭ تەرەققىياتى كۆپ قاتلاملىق بولۇپ كەلدى، بۇ...",
    culturalNote: "ئالىي مائارىپ ۋە ئەكادېمىك مۇنازىرىلەردە قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/academic",
    audioUrl: "https://example.com/audio/tarihi_Jerayanda_uyghur_medeniyiti.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 38,
    difficulty: "advanced",
    uyghur: "ئىلمىي تەتقىقات نەتىجىلىرىگە ئاساسەن، بۇ قاراش توغرا دەپ ھۆكۈم قىلىشقا بولىدۇ",
    latin: "Ilmiy tetqiqat netijilerige asasen, bu qarash toghra dep höküm qilishqa bolidu",
    pronunciation: "Il-miy tet-ki-khat ne-ti-ji-le-ri-ge a-sa-sen, boo kha-rash togh-ra dep ho-koom khi-lish-kha bo-li-doo",
    english: "Based on scientific research results, this view can be judged as correct",
    chinese: "根据科学研究结果，这个观点可以被认为是正确的",
    turkish: "Bilimsel araştırma sonuçlarına dayanarak, bu görüş doğru olarak değerlendirilebilir",
    arabic: "بناء على نتائج البحث العلمي، يمكن الحكم بأن هذا الرأي صحيح",
    russian: "Основываясь на результатах научных исследований, этот взгляд можно считать правильным",
    category: "education",
    tags: ["advanced", "scientific", "analysis", "research", "evaluation"],
    usage: "ئىلمىي دەلىللەرگە ئاساسەن قاراش بىلدۈرۈش",
    example: "ئىلمىي تەتقىقات نەتىجىلىرىگە ئاساسەن، بۇ قاراش توغرا دەپ ھۆكۈم قىلىشقا بولىدۇ.",
    culturalNote: "ئىلمىي مۇنازىرە ۋە تەتقىقات دوكلاتلىرىدا ئىشلىتىلىدۇ.",
    lessonLink: "/learn/advanced/scientific",
    audioUrl: "https://example.com/audio/ilmiy_tetqiqat_netijilerige.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 39,
    difficulty: "advanced",
    uyghur: "ئىجتىمائىي ئادالەت ۋە ئىقتىسادىي تەڭلىكنى ئومۇميۈزلۈك تەمىنلەش لازىم",
    latin: "Ijtimaiy adalet we iqtisadiy tenglikni omumiyüzlik teminlesh lazim",
    pronunciation: "Ij-ti-ma-iy a-da-let we ik-ti-sa-diy teng-lik-ni o-moo-mi-yooz-lik te-min-lesh la-zim",
    english: "Social justice and economic equality must be provided globally",
    chinese: "必须在全球范围内提供社会正义和经济平等",
    turkish: "Sosyal adalet ve ekonomik eşitlik küresel olarak sağlanmalıdır",
    arabic: "يجب توفير العدالة الاجتماعية والمساواة الاقتصادية على مستوى العالم",
    russian: "Социальная справедливость и экономическое равенство должны обеспечиваться глобально",
    category: "work",
    tags: ["advanced", "political", "social", "economic", "global"],
    usage: "سىياسىي-ئىجتىمائىي مەقسەت بىلدۈرۈش",
    example: "ئىجتىمائىي ئادالەت ۋە ئىقتىسادىي تەڭلىكنى ئومۇميۈزلۈك تەمىنلەش لازىمدۇر، چۈنكى...",
    culturalNote: "سىياسىي مۇنازىرە ۋە ئىجتىمائىي تەشكىلاتلارنىڭ نۇتۇقلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/political",
    audioUrl: "https://example.com/audio/ijtimaiy_adalet_we_iqtisadiy_tenglikni.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 40,
    difficulty: "advanced",
    uyghur: "ئەنئەنىۋى مەدەنىيەتنىڭ زامانىۋى جەمئىيەتكە ماسلىشىش جەريانى ئۇزۇن ۋە مۇرەككەپ بولىدۇ",
    latin: "En'eniwi medeniyetning zamanawi jemiyetke maslishish jerayani uzun we murekke bolidu",
    pronunciation: "En-e-ne-wi me-de-ni-yet-ning za-ma-na-wi je-mi-yet-ke mas-li-shish je-ra-ya-ni u-zoon we moo-rek-kep bo-li-doo",
    english: "The process of traditional culture adapting to modern society is long and complex",
    chinese: "传统文化适应现代社会的过程是漫长而复杂的",
    turkish: "Geleneksel kültürün modern topluma uyum sağlama süreci uzun ve karmaşıktır",
    arabic: "عملية تكيف الثقافة التقليدية مع المجتمع الحديث طويلة ومعقدة",
    russian: "Процесс адаптации традиционной культуры к современному обществу долгий и сложный",
    category: "culture",
    tags: ["advanced", "cultural-evolution", "societal", "adaptation", "complexity"],
    usage: "مەدەنىيەت ئۆزگىرىشى ۋە ماسلىشىش",
    example: "ئەنئەنىۋى مەدەنىيەتنىڭ زامانىۋى جەمئىيەتكە ماسلىشىش جەريانى ئۇزۇن ۋە مۇرەككەپ بولىدۇ، چۈنكى...",
    culturalNote: "مەدەنىيەت تەتقىقاتى ۋە جەمئىيەت ئۆزگىرىشى مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/cultural-evolution",
    audioUrl: "https://example.com/audio/en'eniwi_medeniyetning.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 41,
    difficulty: "advanced",
    uyghur: "ئىلمىي پىرىنسىپلارغا ئاساسەن قارار قىلىش مۇھىملىقى ھەرگىز ئەستە تۇتۇلماسلىقى كېرەك",
    latin: "Ilmiy prinsiplargha asasen qarar qilish muhimliqi hergiz este tutulmasliqi kërek",
    pronunciation: "Il-miy prin-tsip-lar-gha a-sa-sen kha-rar khi-lish mu-khim-li-khi her-giz es-te too-tool-mas-li-khi ke-rek",
    english: "The importance of decision-making based on scientific principles should never be overlooked",
    chinese: "基于科学原则决策的重要性绝不容忽视",
    turkish: "Bilimsel ilkelere dayalı karar vermenin önemi asla göz ardı edilmemelidir",
    arabic: "يجب ألا يُغفل أهمية اتخاذ القرارات على أساس المبادئ العلمية",
    russian: "Важность принятия решений на основе научных принципов никогда не следует недооценивать",
    category: "education",
    tags: ["advanced", "scientific", "decision-making", "importance", "principles"],
    usage: "ئىلمىي قارار قىلىش ئەھمىيىتىنى بىلدۈرۈش",
    example: "ئىلمىي پىرىنسىپلارغا ئاساسەن قارار قىلىش مۇھىملىقى ھەرگىز ئەستە تۇتۇلماسلىقى كېرەك، چۈنكى...",
    culturalNote: "ئالىي مائارىپ ۋە ئىلمىي مۇنازىرىلەردە قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/decision-making",
    audioUrl: "https://example.com/audio/ilmiy_prinsiplargha_asasen_qarar_qilish.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 42,
    difficulty: "advanced",
    uyghur: "تېخنىكىلىق تەرەققىياتنىڭ ئىجتىمائىي تەسىرلىرىنى چوڭقۇر ئويلىشىش لازىم",
    latin: "Tekhnikiy teraqqiyatning ijtimaiy tesirlerini chongqur oylishish lazim",
    pronunciation: "Tekh-ni-kiy te-rak-ki-yat-ning ij-ti-ma-iy te-sir-le-ri-ni chong-khoor oy-li-shish la-zim",
    english: "The social impacts of technological development must be deeply considered",
    chinese: "必须深入考虑技术发展的社会影响",
    turkish: "Teknolojik gelişmenin sosyal etkileri derinlemesine düşünülmelidir",
    arabic: "يجب التفكير بعمق في الآثار الاجتماعية للتطور التكنولوجي",
    russian: "Социальные последствия технологического развития должны быть глубоко продуманы",
    category: "technology",
    tags: ["advanced", "technological", "social-impact", "consideration", "analysis"],
    usage: "تېخنىكا ئىجتىمائىي تەسىرلىرىنى تەھلىل قىلىش",
    example: "تېخنىكىلىق تەرەققىياتنىڭ ئىجتىمائىي تەسىرلىرىنى چوڭقۇر ئويلىشىش لازىم، بۇ...",
    culturalNote: "تېخنىكا سىياسىتى ۋە ئىجتىمائىي تەھلىل مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/tech-social-impact",
    audioUrl: "https://example.com/audio/tekhnikiy_teraqqiyatning_ijtimaiy_tesirlerini.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 43,
    difficulty: "advanced",
    uyghur: "ئىنفورماتسىيە سىستېمىلىرىنىڭ بىخەتەرلىكىنى تەمىنلەش ئۈچۈن كۆپ قاتلاملىق ئۇسۇللار قوللىنىش كېرەك",
    latin: "Informatsiye sistemilerining biheterlikini teminlesh üchün köp qatlamliq usullar qollinish kërek",
    pronunciation: "In-for-ma-tsi-ye sis-te-mi-le-ri-ning bi-khe-ter-li-ki-ni te-min-lesh oo-chin kop khat-lam-likh u-sool-lar khol-li-nish ke-rek",
    english: "Multi-layered methods must be used to ensure the security of information systems",
    chinese: "必须使用多层次的方法来确保信息系统的安全",
    turkish: "Bilgi sistemlerinin güvenliğini sağlamak için çok katmanlı yöntemler kullanılmalıdır",
    arabic: "يجب استخدام أساليب متعددة الطبقات لضمان أمن نظم المعلومات",
    russian: "Для обеспечения безопасности информационных систем необходимо использовать многоуровневые методы",
    category: "technology",
    tags: ["advanced", "information-security", "methods", "systems", "protection"],
    usage: "ئۇچۇر بىخەتەرلىكى ئۇسۇللىرىنى بىلدۈرۈش",
    example: "ئىنفورماتسىيە سىستېمىلىرىنىڭ بىخەتەرلىكىنى تەمىنلەش ئۈچۈن كۆپ قاتلاملىق ئۇسۇللار قوللىنىش كېرەك.",
    culturalNote: "سىبر بىخەتەرلىك ۋە ئۇچۇر تېخنىكىسى مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/information-security",
    audioUrl: "https://example.com/audio/informatsiye_sistemilerining_biheterlikini.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 44,
    difficulty: "advanced",
    uyghur: "ئىقتىسادىي سىستېمىلارنىڭ داۋاملىشىشچانلىقى ئېكولوگىيىلىك تەڭپۇڭلۇقنى ساقلاشقا باغلىق",
    latin: "Iqtisadiy sistemilarning dawamlishishchanliqi ekologiyilik tengpungluqni saqlashqa baghliq",
    pronunciation: "Ik-ti-sa-diy sis-te-mi-lar-ning da-wam-li-shish-chan-li-khi e-ko-lo-gi-yi-lik teng-pung-look-ni sak-lash-kha bagh-likh",
    english: "The sustainability of economic systems depends on maintaining ecological balance",
    chinese: "经济系统的可持续性取决于保持生态平衡",
    turkish: "Ekonomik sistemlerin sürdürülebilirliği ekolojik dengeyi korumaya bağlıdır",
    arabic: "استدامة النظم الاقتصادية تعتمد على الحفاظ على التوازن البيئي",
    russian: "Устойчивость экономических систем зависит от поддержания экологического баланса",
    category: "business",
    tags: ["advanced", "economic", "sustainability", "ecological", "balance"],
    usage: "ئىقتىسادىي داۋاملىشىشچانلىق ۋە ئېكولوگىيە مۇناسىۋىتىنى بىلدۈرۈش",
    example: "ئىقتىسادىي سىستېمىلارنىڭ داۋاملىشىشچانلىقى ئېكولوگىيىلىك تەڭپۇڭلۇقنى ساقلاشقا باغلىق بولۇپ، بۇ...",
    culturalNote: "ئىقتىسادىي ۋە ئېكولوگىيىلىك مۇنازىرىلەردە قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/economic-sustainability",
    audioUrl: "https://example.com/audio/iqtisadiy_sistemilarning_dawamlishishchanliqi.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 45,
    difficulty: "advanced",
    uyghur: "ئۆزئارا ھۆرمەت ۋە چۈشىنىش مىللىي گۇرۇپپىلار ئارىسىدىكى مۇناسىۋەتلەرنىڭ ئاساسىدۇر",
    latin: "Özara hörmet we chüshinish milliy guruppilar arisidiki munasiwetlernin asasidur",
    pronunciation: "O-za-ra hor-met we choo-shi-nish mil-liy go-roop-pi-lar a-ri-si-di-ki moo-na-si-wet-ler-nin a-sa-si-dur",
    english: "Mutual respect and understanding are the basis of relations between national groups",
    chinese: "相互尊重和理解是民族群体关系的基础",
    turkish: "Karşılıklı saygı ve anlayış, ulusal gruplar arasındaki ilişkilerin temelidir",
    arabic: "الاحترام المتبادل والفهم هما أساس العلاقات بين المجموعات الوطنية",
    russian: "Взаимное уважение и понимание являются основой отношений между национальными группами",
    category: "culture",
    tags: ["advanced", "mutual-respect", "understanding", "national-groups", "relations"],
    usage: "مىللىي مۇناسىۋەتلەرنىڭ ئاساسىنى بىلدۈرۈش",
    example: "ئۆزئارا ھۆرمەت ۋە چۈشىنىش مىللىي گۇرۇپپىلار ئارىسىدىكى مۇناسىۋەتلەرنىڭ ئاساسىدۇر.",
    culturalNote: "مىللىي مۇناسىۋەت ۋە دىپلوماتىيە مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/intercultural-relations",
    audioUrl: "https://example.com/audio/ozara_hormet_we_chushinish.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 46,
    difficulty: "advanced",
    uyghur: "ئىجتىمائىي ئۆزگىرىشلەرنىڭ تەسىرى ئاستىدا ئەنئەنىۋى قىممەت قاراشلارنى قوغداش مۇرەككەپ مەسىلە",
    latin: "Ijtimaiy özgirishlernin tesiri astida en'eniwi qimmet qarashlarni qogdash murekke mesile",
    pronunciation: "Ij-ti-ma-iy oz-gi-rish-ler-nin te-sir-li as-ti-da en-e-ne-wi khim-met kha-rash-lar-ni khog-dash moo-rek-kep me-si-le",
    english: "Protecting traditional values under the influence of social changes is a complex issue",
    chinese: "在社会变革的影响下保护传统价值观是一个复杂的问题",
    turkish: "Sosyal değişimlerin etkisi altında geleneksel değerleri korumak karmaşık bir konudur",
    arabic: "حماية القيم التقليدية تحت تأثير التغيرات الاجتماعية مسألة معقدة",
    russian: "Защита традиционных ценностей под влиянием социальных изменений - сложная проблема",
    category: "culture",
    tags: ["advanced", "social-change", "traditional-values", "protection", "complexity"],
    usage: "ئىجتىمائىي ئۆزگىرىش ۋە مەدەنىيەت قوغداش مەسىلىسىنى بىلدۈرۈش",
    example: "ئىجتىمائىي ئۆزگىرىشلەرنىڭ تەسىرى ئاستىدا ئەنئەنىۋى قىممەت قاراشلارنى قوغداش مۇرەككەپ مەسىلە.",
    culturalNote: "مەدەنىيەت سىياسىتى ۋە ئىجتىمائىي ئۆزگىرىش مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/cultural-preservation",
    audioUrl: "https://example.com/audio/ijtimaiy_ozgirishlernin_tesiri.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 47,
    difficulty: "advanced",
    uyghur: "ئوقۇتۇش ئۇسۇللىرىنى زامانىۋى تېخنىكىلار بىلەن بىرلەشتۈرۈش تەربىيە ساھەسىدىكى ئۈنۈملۈك ئىننوۋاتسىيە",
    latin: "Oqutush usullirini zamanawi tekhnikilar bilen birleshtürüsh terbiye sahesidiki ünmülük innovatsiye",
    pronunciation: "O-kho-toosh u-sool-li-ri-ni za-ma-na-wi tekh-ni-ki-lar bi-len bir-lesh-too-roosh ter-bi-ye sa-he-si-di-ki oon-moo-look in-no-va-tsi-ye",
    english: "Integrating teaching methods with modern technologies is an effective innovation in the education sector",
    chinese: "将教学方法与现代技术相结合是教育领域的有效创新",
    turkish: "Öğretim yöntemlerini modern teknolojilerle bütünleştirmek eğitim sektöründe etkili bir yeniliktir",
    arabic: "دمج أساليب التدريس مع التقنيات الحديثة هو ابتكار فعال في مجال التعليم",
    russian: "Интеграция методов обучения с современными технологиями является эффективным нововведением в сфере образования",
    category: "education",
    tags: ["advanced", "teaching-methods", "technology-integration", "innovation", "education"],
    usage: "تەربىيە ساھەسىدىكى ئىننوۋاتسىيىنى بىلدۈرۈش",
    example: "ئوقۇتۇش ئۇسۇللىرىنى زامانىۋى تېخنىكىلار بىلەن بىرلەشتۈرۈش تەربىيە ساھەسىدىكى ئۈنۈملۈك ئىننوۋاتسىيە.",
    culturalNote: "تەربىيە تېخنىكىسى ۋە ئىننوۋاتسىيە مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/education-innovation",
    audioUrl: "https://example.com/audio/oqutush_usullirini_zamanawi_tekhnikilar.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 48,
    difficulty: "advanced",
    uyghur: "ساغلاملىق سىستېمىسىنىڭ ئۈنۈملۈكلىكى ھەممە پۇقرالارنىڭ ساغلاملىق مۇلازىمىتىگە تەڭ كىرىشىگە باغلىق",
    latin: "Saghlamliq sistemisining ünmülükligi hemme puqralarning saghlamliq mulazimitige teng kirishige baghliq",
    pronunciation: "Sagh-lam-likh sis-te-mi-si-ning oon-moo-look-li-gi hem-me pukh-ra-lar-ning sagh-lam-likh moo-la-zi-mi-ti-ge teng ki-ri-shi-ge bagh-likh",
    english: "The effectiveness of the health system depends on equal access to health services for all citizens",
    chinese: "卫生系统的有效性取决于所有公民平等获得卫生服务",
    turkish: "Sağlık sisteminin etkinliği, tüm vatandaşların sağlık hizmetlerine eşit erişimine bağlıdır",
    arabic: "فعالية النظام الصحي تعتمد على الوصول المتكافئ لجميع المواطنين إلى الخدمات الصحية",
    russian: "Эффективность системы здравоохранения зависит от равного доступа всех граждан к медицинским услугам",
    category: "health",
    tags: ["advanced", "health-system", "equality", "access", "effectiveness"],
    usage: "ساغلاملىق سىستېمىسى ۋە تەڭلىك مەسىلىسىنى بىلدۈرۈش",
    example: "ساغلاملىق سىستېمىسىنىڭ ئۈنۈملۈكلىكى ھەممە پۇقرالارنىڭ ساغلاملىق مۇلازىمىتىگە تەڭ كىرىشىگە باغلىق.",
    culturalNote: "ساغلاملىق سىياسىتى ۋە ئىجتىمائىي ئادالەت مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/health-equality",
    audioUrl: "https://example.com/audio/saghlamliq_sistemisining_unmulukligi.mp3",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 49,
    difficulty: "advanced",
    uyghur: "تەرەققىياتنىڭ داۋاملىشىشچانلىقى ئىقتىسادىي، ئىجتىمائىي ۋە مۇھىت ئامىللىرىنىڭ ئۆزئارا تەسىرىگە باغلىق",
    latin: "Teraqqiyatning dawamlishishchanliqi iqtisadiy, ijtimaiy we muhit amillirining özara tesirige baghliq",
    pronunciation: "Te-rak-ki-yat-ning da-wam-li-shish-chan-li-khi ik-ti-sa-diy, ij-ti-ma-iy we moo-khit a-mil-li-ri-ning o-za-ra te-sir-li-ge bagh-likh",
    english: "The sustainability of development depends on the mutual influence of economic, social and environmental factors",
    chinese: "发展的可持续性取决于经济、社会和环境因素的相互影响",
    turkish: "Kalkınmanın sürdürülebilirliği ekonomik, sosyal ve çevresel faktörlerin karşılıklı etkisine bağlıdır",
    arabic: "استدامة التنمية تعتمد على التأثير المتبادل للعوامل الاقتصادية والاجتماعية والبيئية",
    russian: "Устойчивость развития зависит от взаимного влияния экономических, социальных и экологических факторов",
    category: "work",
    tags: ["advanced", "sustainable-development", "economic", "social", "environmental"],
    usage: "داۋاملىشىشچان تەرەققىياتنىڭ مۇرەككەپلىكىنى بىلدۈرۈش",
    example: "تەرەققىياتنىڭ داۋاملىشىشچانلىقى ئىقتىسادىي، ئىجتىمائىي ۋە مۇھىت ئامىللىرىنىڭ ئۆزئارا تەسىرىگە باغلىق.",
    culturalNote: "داۋاملىشىشچان تەرەققىيات ۋە مۇرەككەپ سىستېما مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/sustainable-development",
    audioUrl: "https://example.com/audio/teraqqiyatning_dawamlishishchanliqi.mp3",
    image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  },
  {
    id: 50,
    difficulty: "advanced",
    uyghur: "ئۇزۇن مۇددەتلىك ئىستراتېگىيىلىك پىلانلاش ئورگانلارنىڭ مۇۋەپپەقىيىتى ئۈچۈن ئەڭ مۇھىم ئامىل",
    latin: "Uzun muddetlik strategiyilik pilanlash organlarning müweppeqiyiti üchün eng muhim amil",
    pronunciation: "U-zoon mood-det-lik stra-te-gi-yi-lik pi-lan-lash or-gan-lar-ning moo-wep-pe-ki-yi-ti oo-chin eng moo-khim a-mil",
    english: "Long-term strategic planning is the most important factor for the success of organizations",
    chinese: "长期战略规划是组织成功的最重要因素",
    turkish: "Uzun vadeli stratejik planlama, organizasyonların başarısı için en önemli faktördür",
    arabic: "التخطيط الاستراتيجي طويل الأجل هو أهم عامل لنجاح المنظمات",
    russian: "Долгосрочное стратегическое планирование является наиболее важным фактором успеха организаций",
    category: "business",
    tags: ["advanced", "strategic-planning", "long-term", "success", "organizations"],
    usage: "ئىستراتېگىيىلىك پىلانلاش ئەھمىيىتىنى بىلدۈرۈش",
    example: "ئۇزۇن مۇددەتلىك ئىستراتېگىيىلىك پىلانلاش ئورگانلارنىڭ مۇۋەپپەقىيىتى ئۈچۈن ئەڭ مۇھىم ئامىل.",
    culturalNote: "باشقۇرۇش ۋە ئىستراتېگىيىلىك پىلانلاش مۇنازىرىلىرىدا قوللىنىلىدۇ.",
    lessonLink: "/learn/advanced/strategic-planning",
    audioUrl: "https://example.com/audio/uzun_muddetlik_strategiyilik_pilanlash.mp3",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
    frequency: 0,
    lastPracticed: null,
    mastered: false
  }
];

const PhrasesTab = ({ 
  uyghurPhrases = DEFAULT_UYGHUR_PHRASES,
  selectedCategory = '',
  setSelectedCategory, 
  savedPhrases = [],
  savePhrase,
  onViewPhraseDetail,
  onPracticePhrase
}) => {
  // Local state
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedTags, setSelectedTags] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [copiedPhrase, setCopiedPhrase] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [randomPhrase, setRandomPhrase] = useState(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('frequency'); // 'frequency', 'alphabetical', 'difficulty'
  const [selectedPracticeType, setSelectedPracticeType] = useState(null);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(null);
  const [showPhraseDetails, setShowPhraseDetails] = useState(null);
  const [studyMode, setStudyMode] = useState(false);
  const [selectedPhrases, setSelectedPhrases] = useState([]);
  const [translationLanguage, setTranslationLanguage] = useState('english');

  // مەلۇماتلارنى كاتېگورىيەلەر بويىچە گۇرۇپپىلاش
  const groupedPhrases = useMemo(() => {
    return uyghurPhrases.reduce((acc, phrase) => {
      const category = phrase.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(phrase);
      return acc;
    }, {});
  }, [uyghurPhrases]);

  const categories = Object.keys(groupedPhrases).filter(cat => 
    groupedPhrases[cat] && groupedPhrases[cat].length > 0
  );

  // Tanlangan kategoriya
  const validCategory = useMemo(() => {
    if (categories.length === 0) return null;
    return categories.includes(selectedCategory)
      ? selectedCategory
      : categories[0];
  }, [selectedCategory, categories]);

  // Filter phrases
  const filteredPhrases = useMemo(() => {
    if (!validCategory) return [];
    let phrases = groupedPhrases[validCategory] || [];
    
    if (showSavedOnly) {
      phrases = phrases.filter(phrase => 
        savedPhrases.some(saved => saved.uyghur === phrase.uyghur)
      );
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      phrases = phrases.filter(phrase =>
        phrase.uyghur?.toLowerCase().includes(query) ||
        phrase.latin?.toLowerCase().includes(query) ||
        phrase.english?.toLowerCase().includes(query) ||
        phrase.chinese?.toLowerCase().includes(query) ||
        phrase.turkish?.toLowerCase().includes(query) ||
        phrase.arabic?.toLowerCase().includes(query) ||
        phrase.russian?.toLowerCase().includes(query) ||
        (phrase.tags && phrase.tags.some(tag => tag.toLowerCase().includes(query))) ||
        phrase.usage?.toLowerCase().includes(query) ||
        phrase.example?.toLowerCase().includes(query) ||
        phrase.culturalNote?.toLowerCase().includes(query)
      );
    }
    
    if (selectedTags.length > 0) {
      phrases = phrases.filter(phrase =>
        phrase.tags && selectedTags.every(tag => phrase.tags.includes(tag))
      );
    }
    
    if (difficultyFilter !== 'all') {
      phrases = phrases.filter(phrase => phrase.difficulty === difficultyFilter);
    }

    // Sort phrases
    phrases = [...phrases].sort((a, b) => {
      switch (sortBy) {
        case 'frequency':
          return b.frequency - a.frequency;
        case 'alphabetical':
          return a.uyghur.localeCompare(b.uyghur, 'ug');
        case 'difficulty':
          const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case 'mastered':
          return (a.mastered === b.mastered) ? 0 : a.mastered ? -1 : 1;
        default:
          return 0;
      }
    });
    
    return phrases;
  }, [groupedPhrases, validCategory, searchQuery, selectedTags, difficultyFilter, showSavedOnly, savedPhrases, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPhrases.length / itemsPerPage);
  const paginatedPhrases = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPhrases.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPhrases, currentPage, itemsPerPage]);

  // All available tags
  const allTags = useMemo(() => {
    const tags = new Set();
    uyghurPhrases.forEach(phrase => {
      if (phrase.tags) {
        phrase.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [uyghurPhrases]);

  // Sound functions
  const speakPhrase = (phrase) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(phrase.uyghur);
      utterance.lang = 'ug';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      setAudioPlaying(phrase.id);
      utterance.onend = () => setAudioPlaying(null);
      utterance.onerror = () => setAudioPlaying(null);
      
      speechSynthesis.speak(utterance);
    }
  };

  const playAudio = (phrase) => {
    if (phrase.audioUrl) {
      const audio = new Audio(phrase.audioUrl);
      setAudioPlaying(phrase.id);
      audio.play();
      audio.onended = () => setAudioPlaying(null);
      audio.onerror = () => setAudioPlaying(null);
    } else {
      speakPhrase(phrase);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPhrase(text);
      setTimeout(() => setCopiedPhrase(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getRandomPhrase = () => {
    if (!validCategory) return;
    const phrases = groupedPhrases[validCategory] || [];
    if (phrases.length > 0) {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setRandomPhrase(phrases[randomIndex]);
    }
  };

  const handleSavePhrase = (phrase) => {
    savePhrase(phrase);
    // Show success feedback
    const savedIndex = savedPhrases.findIndex(p => p.uyghur === phrase.uyghur);
    if (savedIndex === -1) {
      // Newly saved
      const event = new CustomEvent('phraseSaved', { detail: phrase });
      window.dispatchEvent(event);
    }
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setDifficultyFilter('all');
    setShowSavedOnly(false);
    setCurrentPage(1);
    setSortBy('frequency');
    setShowAdvancedSearch(false);
    setStudyMode(false);
    setSelectedPhrases([]);
  };

  const exportPhrases = () => {
    if (!validCategory) return;
    const data = JSON.stringify(filteredPhrases, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `uyghur-phrases-${validCategory}-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    if (!validCategory) return;
    const headers = ['Uyghur', 'Latin', 'Pronunciation', 'English', 'Chinese', 'Turkish', 'Arabic', 'Russian', 'Difficulty', 'Category', 'Tags'];
    const csvData = filteredPhrases.map(phrase => [
      phrase.uyghur,
      phrase.latin,
      phrase.pronunciation,
      phrase.english,
      phrase.chinese,
      phrase.turkish,
      phrase.arabic,
      phrase.russian,
      phrase.difficulty,
      phrase.category,
      phrase.tags?.join('; ')
    ].map(field => `"${(field || '').toString().replace(/"/g, '""')}"`).join(','));
    
    const csvContent = [headers.join(','), ...csvData].join('\n');
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `uyghur-phrases-${validCategory}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const togglePhraseSelection = (phrase) => {
    if (selectedPhrases.find(p => p.id === phrase.id)) {
      setSelectedPhrases(selectedPhrases.filter(p => p.id !== phrase.id));
    } else {
      setSelectedPhrases([...selectedPhrases, phrase]);
    }
  };

  const toggleStudyMode = () => {
    setStudyMode(!studyMode);
    if (studyMode) {
      setSelectedPhrases([]);
    }
  };

  const startPracticeSession = () => {
    if (selectedPhrases.length > 0) {
      onPracticePhrase && onPracticePhrase({
        type: 'custom',
        phrases: selectedPhrases,
        practiceType: selectedPracticeType || 'flashcards'
      });
    }
  };

  // Statistics
  const stats = useMemo(() => {
    const totalPhrases = uyghurPhrases.length;
    const masteredPhrases = uyghurPhrases.filter(p => p.mastered).length;
    const beginnerPhrases = uyghurPhrases.filter(p => p.difficulty === 'beginner').length;
    const intermediatePhrases = uyghurPhrases.filter(p => p.difficulty === 'intermediate').length;
    const advancedPhrases = uyghurPhrases.filter(p => p.difficulty === 'advanced').length;
    
    const averageFrequency = uyghurPhrases.reduce((sum, p) => sum + p.frequency, 0) / totalPhrases;
    const recentlyPracticed = uyghurPhrases.filter(p => p.lastPracticed && new Date(p.lastPracticed) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length;

    return {
      totalPhrases,
      masteredPhrases,
      beginnerPhrases,
      intermediatePhrases,
      advancedPhrases,
      averageFrequency: averageFrequency.toFixed(1),
      recentlyPracticed,
      savedPhrases: savedPhrases.length
    };
  }, [uyghurPhrases, savedPhrases]);

  // Hech qanday kategoriya yo'q
  if (categories.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ئورتاق ئىبارىلەر</h2>
        <p className="text-gray-500">ئوقۇش ئۈچۈن ئىبارە تۈرى تېپىلمىدى.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">ئۇيغۇر ئىبارىلەر مەركىزى</h2>
          <p className="text-gray-600">ئۇيغۇر تىلىدىكى ئاساسىي ئىبارىلەرنى ئۆگىنىڭ ۋە مەشىق قىلىڭ</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {studyMode && selectedPhrases.length > 0 && (
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-lg">
              <Target className="w-4 h-4" />
              <span>{selectedPhrases.length} ئىبارە تاللاندى</span>
            </div>
          )}
          
          <button
            onClick={getRandomPhrase}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all flex items-center gap-2"
          >
            <Shuffle className="w-4 h-4" />
            تاسادىپى ئىبارە
          </button>
          
          <div className="relative group">
            <button
              onClick={exportPhrases}
              className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              چىقىرىۋېلىش
            </button>
            <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 hidden group-hover:block">
              <button
                onClick={exportPhrases}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-t-lg"
              >
                JSON فورماتىدا
              </button>
              <button
                onClick={exportToCSV}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-b-lg"
              >
                CSV فورماتىدا
              </button>
            </div>
          </div>
          
          <button
            onClick={toggleStudyMode}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              studyMode
                ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {studyMode ? 'ئوقۇش ھالىتى' : 'ئوقۇش ھالىتى'}
          </button>
          
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            title={viewMode === 'grid' ? 'تىزىملىك كۆرۈنۈشى' : 'تور كۆرۈنۈشى'}
          >
            {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Random Phrase Banner */}
      {randomPhrase && (
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">بۈگۈنكى تەكلىپ قىلىنغان ئىبارە</span>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-serif text-gray-900" dir="rtl" lang="ug">
                  {randomPhrase.uyghur}
                </div>
                <div className="text-sm font-mono text-gray-600">{randomPhrase.latin}</div>
                <div className="text-gray-700">{randomPhrase.english}</div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={() => playAudio(randomPhrase)}
                  className="p-1.5 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-purple-600" />
                </button>
                <button
                  onClick={() => handleSavePhrase(randomPhrase)}
                  className="p-1.5 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <Star className={`w-4 h-4 ${savedPhrases.some(p => p.uyghur === randomPhrase.uyghur) ? 'fill-yellow-400 text-yellow-400' : 'text-purple-600'}`} />
                </button>
              </div>
            </div>
            <button
              onClick={() => setRandomPhrase(null)}
              className="p-1 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-purple-600" />
            </button>
          </div>
        </div>
      )}

      {/* Stats Dashboard */}
      <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">ئىبارە ئۇچۇر پانېلى</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-teal-600">{stats.totalPhrases}</div>
            <div className="text-sm text-gray-600">ئومۇمىي ئىبارە</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">{stats.masteredPhrases}</div>
            <div className="text-sm text-gray-600">ئىگىلەنگەن</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-yellow-600">{stats.savedPhrases}</div>
            <div className="text-sm text-gray-600">ساقلانغان</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">{stats.beginnerPhrases}</div>
            <div className="text-sm text-gray-600">باشلانغۇچ</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-indigo-600">{stats.intermediatePhrases}</div>
            <div className="text-sm text-gray-600">ئوتتۇرا</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">{stats.advancedPhrases}</div>
            <div className="text-sm text-gray-600">ئالىي</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">{stats.recentlyPracticed}</div>
            <div className="text-sm text-gray-600">يېقىنقى مەشىق</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-red-600">{stats.averageFrequency}</div>
            <div className="text-sm text-gray-600">ئوتتۇرا مەشىق</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ئىبارە ئىزدەش... (ئۇيغۇر، ئىنگلىز، خەنزۇ، تۈركىيە ياكى تېگىلار بويىچە)"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              showFilters 
                ? 'bg-teal-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Filter className="w-4 h-4" />
            سۈزۈش
            {(selectedTags.length > 0 || difficultyFilter !== 'all' || showSavedOnly || sortBy !== 'frequency') && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                !
              </span>
            )}
          </button>

          <button
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              showAdvancedSearch 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Settings className="w-4 h-4" />
            ئىلغار سۈزۈش
          </button>

          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              showSavedOnly 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Star className={`w-4 h-4 ${showSavedOnly ? 'fill-current' : ''}`} />
            ساقلانغانلار ({savedPhrases.length})
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none"
          >
            <option value="frequency">مەشىق تەرتىپى</option>
            <option value="alphabetical">ئېلىپبە تەرتىپى</option>
            <option value="difficulty">قىيىنلىق تەرتىپى</option>
            <option value="mastered">ئىگىلەنگەن</option>
          </select>

          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none"
          >
            <option value="6">6 ئىبارە</option>
            <option value="9">9 ئىبارە</option>
            <option value="12">12 ئىبارە</option>
            <option value="15">15 ئىبارە</option>
            <option value="20">20 ئىبارە</option>
          </select>

          {(selectedTags.length > 0 || difficultyFilter !== 'all' || searchQuery || showSavedOnly || sortBy !== 'frequency') && (
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              سۈزۈشنى تازىلاش
            </button>
          )}
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">ئۇسۇل</h4>
                <div className="flex flex-wrap gap-2">
                  {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficultyFilter(level)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                        difficultyFilter === level
                          ? 'bg-teal-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {level === 'all' ? 'ھەممىسى' : 
                       level === 'beginner' ? 'باشلانغۇچ' :
                       level === 'intermediate' ? 'ئوتتۇرا' : 'ئالىي'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-3">بەلگىلەر</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-teal-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-3">تەرجىمە تىلى</h4>
                <select
                  value={translationLanguage}
                  onChange={(e) => setTranslationLanguage(e.target.value)}
                  className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="english">ئىنگلىزچە</option>
                  <option value="chinese">خەنزۇچە</option>
                  <option value="turkish">تۈركچە</option>
                  <option value="arabic">ئەرەبچە</option>
                  <option value="russian">رۇسچە</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Advanced Search */}
        {showAdvancedSearch && (
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-medium text-blue-700 mb-3">ئىلغار ئىزدەش</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ئىشلىتىش مىسالى</label>
                <input
                  type="text"
                  placeholder="ئىبارە ئىشلىتىلىشىنى ئىزدە..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">مەدەنىيەت تەپسىلاتى</label>
                <input
                  type="text"
                  placeholder="مەدەنىيەت تەپسىلاتىنى ئىزدە..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Study Mode Controls */}
        {studyMode && (
          <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-orange-600" />
                <div>
                  <h4 className="font-medium text-orange-700">ئوقۇش ھالىتى</h4>
                  <p className="text-sm text-orange-600">{selectedPhrases.length} ئىبارە تاللاندى</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <select
                  value={selectedPracticeType}
                  onChange={(e) => setSelectedPracticeType(e.target.value)}
                  className="px-4 py-2 bg-white border border-orange-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">مەشىق تۈرىنى تاللاڭ</option>
                  {Object.entries(PRACTICE_TYPES).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                
                <button
                  onClick={startPracticeSession}
                  disabled={selectedPhrases.length === 0 || !selectedPracticeType}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    selectedPhrases.length > 0 && selectedPracticeType
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Play className="w-4 h-4" />
                  مەشىقنى باشلاش
                </button>
                
                <button
                  onClick={toggleStudyMode}
                  className="px-4 py-2 bg-white border border-orange-300 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  ئاخىرلاشتۇرۇش
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
              validCategory === category
                ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {category === 'greetings' && <Users className="w-4 h-4" />}
            {category === 'common-phrases' && <MessageSquare className="w-4 h-4" />}
            {category === 'questions' && <HelpCircle className="w-4 h-4" />}
            {category === 'directions' && <Navigation className="w-4 h-4" />}
            {category === 'food' && <Utensils className="w-4 h-4" />}
            {category === 'shopping' && <ShoppingBag className="w-4 h-4" />}
            {category === 'emergency' && <AlertCircle className="w-4 h-4" />}
            {category === 'family' && <Home className="w-4 h-4" />}
            {category === 'numbers' && <Hash className="w-4 h-4" />}
            {category === 'time' && <Clock className="w-4 h-4" />}
            {category === 'weather' && <Cloud className="w-4 h-4" />}
            {category === 'work' && <Briefcase className="w-4 h-4" />}
            {category === 'education' && <BookOpen className="w-4 h-4" />}
            {category === 'health' && <Heart className="w-4 h-4" />}
            {category === 'transportation' && <Car className="w-4 h-4" />}
            {category === 'technology' && <Cpu className="w-4 h-4" />}
            {category === 'business' && <TrendingUp className="w-4 h-4" />}
            {category === 'travel' && <Globe className="w-4 h-4" />}
            {category === 'entertainment' && <Film className="w-4 h-4" />}
            {category === 'sports' && <Trophy className="w-4 h-4" />}
            {category === 'culture' && <Palette className="w-4 h-4" />}
            {category === 'religion' && <Church className="w-4 h-4" />}
            {category === 'other' && <MoreHorizontal className="w-4 h-4" />}
            
            {UYGHUR_CATEGORIES[category] || category}
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {groupedPhrases[category]?.length || 0}
            </span>
          </button>
        ))}
      </div>

      {/* Phrases List/Grid */}
      {filteredPhrases.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-700">
              <span className="font-semibold">{filteredPhrases.length}</span> ئىبارە تېپىلدى
              {searchQuery && (
                <span className="text-gray-500"> - "{searchQuery}" ئۈچۈن ئىزدەش نەتىجىسى</span>
              )}
            </div>
            
            {studyMode && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPhrases(filteredPhrases)}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                >
                  ھەممىسىنى تاللاش
                </button>
                <button
                  onClick={() => setSelectedPhrases([])}
                  className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                >
                  ھەممىسىنى بىكار قىلىش
                </button>
              </div>
            )}
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedPhrases.map((phrase) => (
                <PhraseCard 
                  key={phrase.id}
                  phrase={phrase}
                  savedPhrases={savedPhrases}
                  onSave={handleSavePhrase}
                  onSpeak={speakPhrase}
                  onCopy={copyToClipboard}
                  copiedPhrase={copiedPhrase}
                  onViewDetail={onViewPhraseDetail}
                  onPractice={onPracticePhrase}
                  studyMode={studyMode}
                  isSelected={selectedPhrases.find(p => p.id === phrase.id)}
                  onToggleSelection={togglePhraseSelection}
                  audioPlaying={audioPlaying}
                  onPlayAudio={playAudio}
                  translationLanguage={translationLanguage}
                  showDetails={showPhraseDetails === phrase.id}
                  onToggleDetails={() => setShowPhraseDetails(showPhraseDetails === phrase.id ? null : phrase.id)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4 mb-8">
              {paginatedPhrases.map((phrase) => (
                <PhraseListItem 
                  key={phrase.id}
                  phrase={phrase}
                  savedPhrases={savedPhrases}
                  onSave={handleSavePhrase}
                  onSpeak={speakPhrase}
                  onCopy={copyToClipboard}
                  copiedPhrase={copiedPhrase}
                  onViewDetail={onViewPhraseDetail}
                  onPractice={onPracticePhrase}
                  studyMode={studyMode}
                  isSelected={selectedPhrases.find(p => p.id === phrase.id)}
                  onToggleSelection={togglePhraseSelection}
                  audioPlaying={audioPlaying}
                  onPlayAudio={playAudio}
                  translationLanguage={translationLanguage}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                ئالدىنقى
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        currentPage === pageNum
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                {totalPages > 5 && <span className="text-gray-500">... {totalPages}</span>}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                كېيىنكى
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-2">ئىزدەگەن ئىبارە تېپىلمىدى</p>
          <p className="text-gray-400">باشقا سۆز ياكى سۈزۈش تاللانمىلىرىنى سىناڭ</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            سۈزۈشنى تازىلاش
          </button>
        </div>
      )}

      {/* Saved Phrases Section */}
      {savedPhrases.length > 0 && (
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            سېغىنگە ساقلانغان ئىبارىلەر ({savedPhrases.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {savedPhrases.slice(0, 8).map((phrase, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200 hover:shadow-sm transition-all group"
              >
                <div 
                  className="text-lg font-serif text-gray-800 mb-2 leading-relaxed"
                  dir="rtl"
                  lang="ug"
                >
                  {phrase.uyghur || '—'}
                </div>
                <div className="text-sm text-gray-600 font-mono mb-1">
                  {phrase.pronunciation || phrase.latin || '—'}
                </div>
                <div className="text-sm text-gray-700 line-clamp-2">
                  {phrase.english || '—'}
                </div>
                <div className="mt-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => speakPhrase(phrase)}
                    className="p-1.5 hover:bg-yellow-100 rounded-lg transition-colors"
                    title="ئاۋازلاش"
                  >
                    <Volume2 className="w-4 h-4 text-yellow-600" />
                  </button>
                  <button
                    onClick={() => copyToClipboard(phrase.uyghur)}
                    className="p-1.5 hover:bg-yellow-100 rounded-lg transition-colors"
                    title="كۆچۈرۈش"
                  >
                    <Copy className="w-4 h-4 text-yellow-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {savedPhrases.length > 8 && (
            <div className="text-center mt-4">
              <button className="text-teal-600 hover:text-teal-700 font-medium">
                تېخىمۇ كۆپىنى كۆرۈش →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Learning Tips */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" />
          ئۆگىنىش ئۇسۇللىرى
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-blue-700">كۈنلۈك مەشىق</h4>
            </div>
            <p className="text-sm text-gray-600">كۈنىگە 5-10 ئىبارە مەشىق قىلىش ئۆگىنىش ئۈچۈن ئۈنۈملۈك</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="w-4 h-4 text-green-600" />
              <h4 className="font-semibold text-green-700">ئاۋازلاش مەشىقى</h4>
            </div>
            <p className="text-sm text-gray-600">ئىبارىلەرنى ئاۋازلاش ئۇسلۇبىنى ياخشىلاشقا ياردەم بېرىدۇ</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-purple-600" />
              <h4 className="font-semibold text-purple-700">ساقلاش ۋە تەكرارلاش</h4>
            </div>
            <p className="text-sm text-gray-600">ئۆگەنگەن ئىبارىلەرنى مۇتەخەسسىسلەپ ساقلاپ، ۋاقتى-ۋاقتىدا تەكرارلاش</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Phrase Card Component (Grid view)
const PhraseCard = ({ 
  phrase, 
  savedPhrases, 
  onSave, 
  onSpeak, 
  onCopy, 
  copiedPhrase, 
  onViewDetail, 
  onPractice,
  studyMode,
  isSelected,
  onToggleSelection,
  audioPlaying,
  onPlayAudio,
  translationLanguage,
  showDetails,
  onToggleDetails
}) => {
  const isSaved = savedPhrases.some(p => p.uyghur === phrase.uyghur);
  const isCopied = copiedPhrase === phrase.uyghur;
  
  const getTranslation = () => {
    switch (translationLanguage) {
      case 'chinese': return phrase.chinese;
      case 'turkish': return phrase.turkish;
      case 'arabic': return phrase.arabic;
      case 'russian': return phrase.russian;
      default: return phrase.english;
    }
  };

  return (
    <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 hover:shadow-lg transition-all duration-300 group ${
      isSelected 
        ? 'border-orange-500 bg-orange-50' 
        : phrase.mastered 
          ? 'border-green-300' 
          : 'border-gray-200'
    }`}>
      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              phrase.difficulty === 'beginner' ? 'bg-green-100 text-green-800 border border-green-200' :
              phrase.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
              'bg-purple-100 text-purple-800 border border-purple-200'
            }`}>
              {phrase.difficulty === 'beginner' ? 'باشلانغۇچ' :
               phrase.difficulty === 'intermediate' ? 'ئوتتۇرا' : 'ئالىي'}
            </span>
            {phrase.frequency > 0 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200">
                {phrase.frequency} مەشىق
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {studyMode && (
              <button
                onClick={() => onToggleSelection && onToggleSelection(phrase)}
                className={`p-1.5 rounded-lg transition-colors ${
                  isSelected 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'hover:bg-gray-100 text-gray-400'
                }`}
              >
                {isSelected ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </button>
            )}
            <button
              onClick={() => onSave(phrase)}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              title={isSaved ? 'ساقلانغان' : 'ساقلاش'}
            >
              <Star className={`w-5 h-5 ${
                isSaved ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 group-hover:text-yellow-500'
              }`} />
            </button>
          </div>
        </div>

        {/* Phrase Text */}
        <div 
          className="text-2xl font-serif text-gray-900 mb-3 leading-relaxed min-h-[4rem] cursor-pointer hover:text-teal-700 transition-colors"
          dir="rtl"
          lang="ug"
          onClick={() => onViewDetail && onViewDetail(phrase)}
        >
          {phrase.uyghur}
        </div>
        
        {/* Pronunciation and Translation */}
        <div className="space-y-2 mb-4">
          <div className="text-sm font-mono text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-200">
            {phrase.latin}
            {phrase.pronunciation && (
              <div className="text-xs text-gray-500 mt-1">{phrase.pronunciation}</div>
            )}
          </div>
          <div className="text-gray-700 text-sm line-clamp-2">
            {getTranslation()}
          </div>
          {phrase.usage && (
            <div className="text-xs text-gray-500 italic border-l-2 border-teal-500 pl-2">
              {phrase.usage}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPlayAudio(phrase)}
              className={`p-2 rounded-lg transition-colors ${
                audioPlaying === phrase.id 
                  ? 'bg-teal-100 text-teal-600' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
              title={audioPlaying === phrase.id ? 'ئاۋازلانماقتا...' : 'ئاۋازلاش'}
            >
              {audioPlaying === phrase.id ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => onCopy(phrase.uyghur)}
              className={`p-2 rounded-lg transition-colors relative ${
                isCopied ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100 text-gray-600'
              }`}
              title={isCopied ? 'كۆچۈرۈلدى!' : 'كۆچۈرۈش'}
            >
              <Copy className="w-4 h-4" />
              {isCopied && (
                <CheckCircle className="w-3 h-3 absolute -top-1 -right-1" />
              )}
            </button>
            <button
              onClick={onToggleDetails}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
              title="تەپسىلاتلار"
            >
              <Eye className={`w-4 h-4 ${showDetails ? 'text-teal-600' : ''}`} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            {phrase.lastPracticed && (
              <span className="text-xs text-gray-500">
                {new Date(phrase.lastPracticed).toLocaleDateString('ug')}
              </span>
            )}
            <button
              onClick={() => onPractice && onPractice(phrase)}
              className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors text-sm font-medium"
            >
              مەشىق قىلىش
            </button>
          </div>
        </div>

        {/* Detailed View */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-gray-700 mb-1">مىسال:</h5>
                <p className="text-sm text-gray-600" dir="rtl">{phrase.example}</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-1">مەدەنىيەت تەپسىلاتى:</h5>
                <p className="text-sm text-gray-600">{phrase.culturalNote}</p>
              </div>
              {phrase.tags && (
                <div>
                  <h5 className="font-medium text-gray-700 mb-1">بەلگىلەر:</h5>
                  <div className="flex flex-wrap gap-1">
                    {phrase.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Phrase List Item Component (List view)
const PhraseListItem = ({ 
  phrase, 
  savedPhrases, 
  onSave, 
  onSpeak, 
  onCopy, 
  copiedPhrase, 
  onViewDetail, 
  onPractice,
  studyMode,
  isSelected,
  onToggleSelection,
  audioPlaying,
  onPlayAudio,
  translationLanguage
}) => {
  const isSaved = savedPhrases.some(p => p.uyghur === phrase.uyghur);
  const isCopied = copiedPhrase === phrase.uyghur;

  const getTranslation = () => {
    switch (translationLanguage) {
      case 'chinese': return phrase.chinese;
      case 'turkish': return phrase.turkish;
      case 'arabic': return phrase.arabic;
      case 'russian': return phrase.russian;
      default: return phrase.english;
    }
  };

  return (
    <div className={`p-5 rounded-xl border hover:shadow-sm transition-all group ${
      isSelected 
        ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-300' 
        : phrase.mastered 
          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
          : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
    }`}>
      <div className="flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              phrase.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              phrase.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {phrase.difficulty === 'beginner' ? 'باشلانغۇچ' :
               phrase.difficulty === 'intermediate' ? 'ئوتتۇرا' : 'ئالىي'}
            </span>
            {phrase.tags && phrase.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">
                {tag}
              </span>
            ))}
            {phrase.frequency > 0 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                {phrase.frequency} مەشىق
              </span>
            )}
          </div>
          
          <div 
            className="text-xl font-serif text-gray-900 mb-2 leading-relaxed cursor-pointer hover:text-teal-700 transition-colors"
            dir="rtl"
            lang="ug"
            onClick={() => onViewDetail && onViewDetail(phrase)}
          >
            {phrase.uyghur}
          </div>
          
          <div className="text-sm font-mono text-gray-600 mb-1">
            {phrase.latin}
          </div>
          
          <div className="text-gray-700 text-sm mb-2">
            {getTranslation()}
          </div>
          
          {phrase.usage && (
            <div className="text-xs text-gray-500 italic">
              {phrase.usage}
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center gap-3">
          {studyMode && (
            <button
              onClick={() => onToggleSelection && onToggleSelection(phrase)}
              className={`p-2 rounded-full transition-colors ${
                isSelected 
                  ? 'bg-orange-100 text-orange-600' 
                  : 'hover:bg-gray-200 text-gray-400'
              }`}
            >
              {isSelected ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </button>
          )}
          
          <button
            onClick={() => onSave(phrase)}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            title={isSaved ? 'ساقلانغان' : 'ساقلاش'}
          >
            <Star className={`w-5 h-5 ${
              isSaved ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-yellow-500'
            }`} />
          </button>
          
          <div className="flex flex-col gap-1">
            <button
              onClick={() => onPlayAudio(phrase)}
              className={`p-1.5 rounded-lg transition-colors ${
                audioPlaying === phrase.id 
                  ? 'bg-teal-100 text-teal-600' 
                  : 'hover:bg-gray-200 text-gray-600'
              }`}
              title={audioPlaying === phrase.id ? 'ئاۋازلانماقتا...' : 'ئاۋازلاش'}
            >
              {audioPlaying === phrase.id ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            
            <button
              onClick={() => onCopy(phrase.uyghur)}
              className={`p-1.5 rounded-lg transition-colors relative ${
                isCopied ? 'bg-green-100 text-green-600' : 'hover:bg-gray-200 text-gray-600'
              }`}
              title={isCopied ? 'كۆچۈرۈلدى!' : 'كۆچۈرۈش'}
            >
              <Copy className="w-4 h-4" />
              {isCopied && (
                <CheckCircle className="w-3 h-3 absolute -top-1 -right-1" />
              )}
            </button>
          </div>
          
          <button
            onClick={() => onPractice && onPractice(phrase)}
            className="px-3 py-1.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium whitespace-nowrap"
          >
            مەشىق
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhrasesTab;