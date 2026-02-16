// Blog68.jsx - تار تېئورىيىسى (String Theory) دەرسلىكى
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  GitBranch,
  Layers,
  Zap,
  Brain,
  Target,
  BookOpen,
  Code2,
  Globe,
  Cpu,
  TrendingUp,
  Users,
  Award,
  CircuitBoard,
  Database,
  LineChart,
  Sparkles
} from 'lucide-react';

const Blog68 = () => {
  const [activeChapter, setActiveChapter] = useState('introduction');
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [animationMode, setAnimationMode] = useState('strings');

  const stringTheoryData = {
    metadata: {
      title: 'تار تېئورىيىسى - String Theory',
      subtitle: 'كىملىكنىڭ ئاخىرقى تېئورىيىسى',
      duration: '10 سائەت',
      level: 'ئوتتۇرا-ئىلگىرى',
      lastUpdated: '2024'
    },
    
    chapters: [
      {
        id: 'introduction',
        title: 'باشلاش: نېمە تار تېئورىيىسى؟',
        icon: '🌀',
        color: 'from-indigo-500 to-purple-600',
        duration: '1 سائەت',
        description: 'تار تېئورىيىسىنىڭ ئاساسىي تۇشۇنچىسى ۋە ئەھمىيىتى',
        concepts: [
          {
            id: 'what-is-string',
            title: 'تار (String) نېمە؟',
            icon: '🎻',
            color: 'from-blue-500 to-cyan-500',
            description: 'تار تېئورىيىسىدىكى ئاساسلىق تۈزۈلمە بىرلىكى - كىچىك سېلىندىر شەكىللىك ئېنېرگىيە يولى',
            details: {
              definition: 'تارلار 1-ئۆلچەملىك (يەنى قېلىنلىقى يوق) ماددىلار بولۇپ، ئۇلارنىڭ ھەرىكەت ۋە تەۋرەش شەكلى ئاساسىي پارتىكۇللارنىڭ خاراكتېرىنى بەلگىلەيدۇ.',
              analogy: 'پىژنو چەلگرىسىدىكى تارلارغا ئوخشاش، ھەر خىل تەۋرەش شەكلى ھەر خىل پارتىكۇل (ئېلېكترون، فوتون قاتارلىق) قا توغرا كېلىدۇ.',
              keyPoint: 'تارلار پىلانك ئۇزۇنلۇقى (10⁻³⁵ مېتىر) دەرىجىسىدىكى ناھايىتى كىچىك بىرلىكلەر.'
            },
            visualization: 'vibrating-string',
            equation: 'L = α\'p² + (n-1)/α\'',
            resources: [
              { type: 'video', title: 'تارلارنىڭ تەۋرەشى', duration: '15 مىنۇت' },
              { type: 'article', title: 'تار تېئورىيىسى كىرىش سۆز', author: 'د. مىچىو كاكۇ' }
            ]
          },
          {
            id: 'unified-theory',
            title: 'بىرلەشتۈرۈلگەن تېئورىيە',
            icon: '⚛️',
            color: 'from-purple-500 to-pink-500',
            description: '4 ئاساسىي كۈچنى بىر تېئورىيە ئاستىغا بىرلەشتۈرۈش',
            details: {
              definition: 'تار تېئورىيىسى گرافىتاتسىيە، ئېلېكتروماغنىتىزم، كۈچلۈك ۋە ئاجىز نۇكلىئون كۈچلىرىنى بىر تېئورىيە ئاستىغا بىرلەشتۈرۈشنى نىشان قىلىدۇ.',
              forces: [
                { name: 'گراۋىتاتسىيە', strength: '10⁻³⁹', color: 'from-gray-600 to-gray-800' },
                { name: 'ئېلېكتروماغنىتىزم', strength: '10⁻²', color: 'from-blue-400 to-blue-600' },
                { name: 'كۈچلۈك نۇكلىئون', strength: '1', color: 'from-red-500 to-red-700' },
                { name: 'ئاجىز نۇكلىئون', strength: '10⁻⁶', color: 'from-green-500 to-green-700' }
              ],
              keyPoint: 'بارلىق ئاساسىي پارتىكۇللار تارلارنىڭ ھەر خىل تەۋرەش شەكلى پەقەت.'
            }
          }
        ]
      },
      {
        id: 'dimensions',
        title: '10 ئۆلچەملىك ئالەم',
        icon: '🔢',
        color: 'from-cyan-500 to-blue-600',
        duration: '2 سائەت',
        description: 'نىمە ئۈچۈن 10 ئۆلچەم؟ قوشۇمچە ئۆلچەملەرنىڭ مەنىسى',
        concepts: [
          {
            id: 'extra-dimensions',
            title: 'قوشۇمچە ئۆلچەملەر',
            icon: '📐',
            color: 'from-teal-500 to-green-600',
            description: 'بىز كۆرەلەيدىغان 4 ئۆلچەمدىن باشقا 6 قوشۇمچە ئۆلچەم',
            details: {
              explanation: 'تار تېئورىيىسىنىڭ ماتېماتىكىلىق ماسلىشىشى ئۈچۈن 10 ئۆلچەم زۆرۈر: 3 بوشلۇق + 1 ۋاقىت + 6 قوشۇمچە ئۆلچەم.',
              compactification: 'قوشۇمچە 6 ئۆلچەم ناھايىتى كىچىك (پىلانك ئۇزۇنلۇقى دەرىجىسىدە) كۆمۈلۈپ قالغان، شۇڭا بىز كۆرەلمەيمىز.',
              calabiYau: 'قوشۇمچە ئۆلچەملەر كالابى-ياۋ كۆپلىگەنلىرى دەپ ئاتىلىدىغان مۇرەككەپ گېئومېترىيلىك شەكىللەردە كۆمۈلگەن.',
              dimensions: [
                { number: 0, name: 'نۇقتا', description: 'ئۇزۇنلۇق يوق' },
                { number: 1, name: 'سىزىق', description: 'ئۇزۇنلۇق بار' },
                { number: 2, name: 'يۈز', description: 'ئۇزۇنلۇق ۋە كەڭلىك' },
                { number: 3, name: 'ھەجىم', description: 'ئۇزۇنلۇق، كەڭلىك ۋە ئېگىزلىك' },
                { number: 4, name: 'ۋاقىت', description: 'زامان' },
                { number: 5, name: 'بىرىنچى قوشۇمچە', description: 'كىچىك ۋە كۆمۈلگەن' }
              ]
            },
            visualization: 'calabi-yau',
            resources: [
              { type: 'interactive', title: '3D ئۆلچەم تەسۋىرى', duration: 'ئىنتراكتىپ' },
              { type: 'simulation', title: 'كالابى-ياۋ كۆپلىگەنلىكى', author: 'كامبريدژ' }
            ]
          },
          {
            id: 'branes',
            title: 'بىران (Branes)',
            icon: '🥞',
            color: 'from-orange-500 to-red-500',
            description: 'يۇقىرى ئۆلچەملىك تار سىستېمىلىرى',
            details: {
              definition: 'بىرانلار تارلارنىڭ يۇقىرى ئۆلچەملىك ئۇمۇمىيلاشتۇرۇلۇشى: 0-بىران (نۇقتا)، 1-بىران (تار)، 2-بىران (يۈز)، ... p-بىران.',
              types: [
                { name: 'D0-brane', dimensions: '0', description: 'نۇقتا بىران' },
                { name: 'D1-brane', dimensions: '1', description: 'تار بىران' },
                { name: 'D2-brane', dimensions: '2', description: 'يۈز بىران' },
                { name: 'D3-brane', dimensions: '3', description: 'ھەجىم بىران' }
              ],
              keyPoint: 'D-بىرانلار تارلارنىڭ ئاخىرلىرى تۇتاشتۇرۇلغان سىستېمىلار.',
              significance: 'بىرانلار مۇرەككەپ تار سىستېمىلىرىنى چۈشىنىش ئۈچۈن كىرەكلىك ماتېماتىكىلىق قۇرال.'
            }
          }
        ]
      },
      {
        id: 'types',
        title: 'تار تېئورىيىسى تۈرلىرى',
        icon: '🎭',
        color: 'from-green-500 to-emerald-600',
        duration: '2 سائەت',
        description: '5 مۇتلەق تار تېئورىيىسى ۋە M-تېئورىيە',
        concepts: [
          {
            id: 'five-theories',
            title: '5 مۇتلەق تار تېئورىيىسى',
            icon: '5️⃣',
            color: 'from-yellow-500 to-amber-600',
            description: 'بىر-بىرى بىلەن ماسلىشىدىغان 5 خىل تار تېئورىيىسى',
            details: {
              theories: [
                {
                  name: 'Type I',
                  strings: 'ئوچۇق ۋە تۈگىۋېتىلگەن',
                  supersymmetry: 'بار',
                  dimensions: '10',
                  keyFeature: 'N=1 سوپەرسىممېترىيە'
                },
                {
                  name: 'Type IIA',
                  strings: 'تۈگىۋېتىلگەن',
                  supersymmetry: 'بار',
                  dimensions: '10',
                  keyFeature: 'ئوتتۇرىسىغا سىممېترىك'
                },
                {
                  name: 'Type IIB',
                  strings: 'تۈگىۋېتىلگەن',
                  supersymmetry: 'بار',
                  dimensions: '10',
                  keyFeature: 'ئوڭغا سىممېترىك'
                },
                {
                  name: 'Heterotic SO(32)',
                  strings: 'تۈگىۋېتىلگەن',
                  supersymmetry: 'بار',
                  dimensions: '10',
                  keyFeature: 'SO(32) گۇرۇپپىسى'
                },
                {
                  name: 'Heterotic E8×E8',
                  strings: 'تۈگىۋېتىلگەن',
                  supersymmetry: 'بار',
                  dimensions: '10',
                  keyFeature: 'E8×E8 گۇرۇپپىسى'
                }
              ],
              duality: 'بۇ 5 تېئورىيە دۇئاللىق دىيەرلىگەن مۇناسىۋەت ئارقىلىق بىر-بىرىگە باغلانغان.',
              significance: 'ھەممىسى تار تېئورىيىسىنىڭ ھەر خىل چۈشەندۈرۈلۈشى پەقەت.'
            },
            visualization: 'theory-web'
          },
          {
            id: 'm-theory',
            title: 'M-تېئورىيە',
            icon: '🅱️',
            color: 'from-pink-500 to-rose-600',
            description: '5 تېئورىيىنى بىرلەشتۈرىدىغان ئانا تېئورىيە',
            details: {
              definition: 'M-تېئورىيە تار تېئورىيىسىنىڭ ئاساسى بولۇپ، 11 ئۆلچەملىك (10 بوشلۇق + 1 ۋاقىت).',
              meaning: 'M نىڭ مەنىسى: مىستېرىيە (Mystery)، ماترىتسا (Matrix)، مېمبرەن (Membrane) ياكى ئانا (Mother).',
              connection: 'M-تېئورىيەنىڭ چەكلىك شەكلى ئۆزگەرگەندە 5 تار تېئورىيىسىنىڭ ھەر بىرىگە ئايلىنىدۇ.',
              keyPoint: 'M-تېئورىيە بىرانلارنى ئاساس قىلغان بولۇپ، تارلار بىرانلار ئارىسىدىكى كىپىدىكى باغلانغان تارلار پەقەت.',
              dimensions: '11 ئۆلچەم: تار تېئورىيىسىدىكى 10 ئۆلچەم + 1 يېڭى ئۆلچەم.'
            }
          }
        ]
      },
      {
        id: 'mathematics',
        title: 'ماتېماتىكىلىق ئاساس',
        icon: '∫',
        color: 'from-blue-600 to-indigo-700',
        duration: '3 سائەت',
        description: 'تار تېئورىيىسىنىڭ ماتېماتىكىلىق قۇرۇلمىسى',
        concepts: [
          {
            id: 'conformal-field',
            title: 'كونفورمال ساھە تېئورىيىسى',
            icon: '∞',
            color: 'from-purple-600 to-violet-700',
            description: 'تارلارنىڭ ھەرىكىتىنى چۈشەندۈرىدىغان ماتېماتىكا',
            details: {
              definition: 'كونفورمال ساھە تېئورىيىسى بۇرغاقلىق (scaling) ۋە كونفورمال ئۆزگەرتىشلەرگە نىسبەتەن سىممېترىك بولغان ساھە تېئورىيىسى.',
              importance: 'تار تېئورىيىسىنىڭ 2-ئۆلچەملىك دۇنيا يۈزىدىكى ھەرىكىتىنى چۈشەندۈرىدۇ.',
              equation: 'Tᵃₐ = 0 (كونفورمال سىممېترىيە شەرتى)',
              applications: 'تارلارنىڭ ھەرىكىتى، كوانتۇم گرافىتاتسىيە، ئەندىزەلىك سىستېمىلار.'
            }
          },
          {
            id: 'supergravity',
            title: 'سوپېرگراۋىتاتسىيە',
            icon: '⚡',
            color: 'from-cyan-600 to-teal-700',
            description: 'سوپەرسىممېترىيە ۋە گرافىتاتسىيىنى بىرلەشتۈرىدىغان تېئورىيە',
            details: {
              definition: 'سوپېرگراۋىتاتسىيە سوپەرسىممېترىيە بىلەن گرافىتاتسىيىنى بىرلەشتۈرىدىغان تېئورىيە.',
              dimensions: '11 ئۆلچەملىك سوپېرگراۋىتاتسىيە M-تېئورىيىسىنىڭ تۆۋەن ئېنېرگىيە چەكلىمىسى.',
              relation: 'M-تېئورىيە → (تۆۋەن ئېنېرگىيە) → 11D سوپېرگراۋىتاتسىيە',
              significance: 'تار تېئورىيىسى ۋە گرافىتاتسىيە ئوتتۇرىسىدىكى مۇھىم پۈتۈن.'
            }
          }
        ]
      },
      {
        id: 'applications',
        title: 'ئەمەلىي قوللىنىش ۋە كەلگۈسى',
        icon: '🚀',
        color: 'from-amber-500 to-orange-600',
        duration: '2 سائەت',
        description: 'تار تېئورىيىسىنىڭ ئىلمىي قىممىتى ۋە كەلگۈسى',
        concepts: [
          {
            id: 'black-holes',
            title: 'قارا چۇڭقۇرلار ۋە تار تېئورىيىسى',
            icon: '🕳️',
            color: 'from-gray-700 to-black',
            description: 'قارا چۇڭقۇرلارنىڭ ئېنتروپىيەسىنى تار تېئورىيىسى ئارقىلىق چۈشەندۈرۈش',
            details: {
              achievement: 'تار تېئورىيىسى بەك-ئېشىل دېيەرلىگەن قارا چۇڭقۇر ئېنتروپىيە فورمۇلا سىنى ئىزچىل چۈشەندۈرىدۇ.',
              formula: 'S = A/4G (بەك-ئېشىل فورمۇلا)',
              explanation: 'تار تېئورىيىسى قارا چۇڭقۇرلارنىڭ ئىچكى قۇرۇلمىسىنى چۈشەندۈرەلەيدۇ.',
              significance: 'كىملىكنىڭ ئەڭ چوڭ مەسىلىلىرىنىڭ بىرىنى ھەل قىلىش.'
            }
          },
          {
            id: 'cosmology',
            title: 'كوزمولوگىيە ۋە تار تېئورىيىسى',
            icon: '🌌',
            color: 'from-indigo-600 to-blue-800',
            description: 'تار تېئورىيىسى ئاساسىدىكى كوزمولوگىيە',
            details: {
              inflation: 'تار تېئورىيىسى ئىنىش (inflation) دەۋرىنى چۈشەندۈرەلەيدۇ.',
              braneworld: 'بىز بىر يۇقىرى ئۆلچەملىك بىراندا ياشاۋاتقانلىقىمىز دىيەرلىگەن مۆدېل.',
              ekpyrotic: 'ئىككى بىراننىڭ ئۇرۇشۇشى ئارقىلىق بىگ بانگنى چۈشەندۈرىدىغان مۆدېل.',
              multiverse: 'تار تېئورىيىسى كۆپ ئالەم (multiverse) دىيەرلىگەن چۈشەنچىنى بېرىدۇ.'
            }
          }
        ]
      }
    ],
    
    experiments: [
      {
        id: 'lhc',
        name: 'LHC (لاچىق هادرون توپقۇرغۇچى)',
        location: 'سېرن، شۋېتسارىيە',
        purpose: 'سوپەرسىممېترىيە، قوشۇمچە ئۆلچەملەرنى ئىزدەش',
        status: 'ئاكتىپ',
        findings: 'Higgs پارتىكۇلى بايقىلىشى'
      },
      {
        id: 'gravity-waves',
        name: 'گراۋىتاتسىيە دولقۇنلىرى',
        location: 'LIGO، ئامېرىكا',
        purpose: 'تار تېئورىيىسىدىكى گرافىتاتسىيە دولقۇنلىرىنى ئىزدەش',
        status: 'ئاكتىپ',
        findings: 'گراۋىتاتسىيە دولقۇنلىرى بايقىلىشى'
      }
    ],
    
    learningResources: [
      {
        type: 'كتاب',
        title: 'The Elegant Universe',
        author: 'بىرىان گرېيۋىن',
        level: 'باشلانغۇچ',
        description: 'تار تېئورىيىسىنى ئاددىي چۈشەندۈرىدۇ'
      },
      {
        type: 'كۇرس',
        title: 'String Theory and M-Theory',
        platform: 'كامبريدژ',
        level: 'ئىلگىرى',
        description: 'ئاكادېمىك دەرس'
      },
      {
        type: 'سىمۇلىيەت',
        title: 'String Theory Visualizations',
        platform: 'PhET',
        level: 'ھەممە سەۋىيە',
        description: 'تارلارنىڭ تەۋرەشىنى كۆرسىتىش'
      }
    ]
  };

  const ConceptCard = ({ concept }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => setSelectedConcept(concept)}
      className={`bg-gradient-to-br ${concept.color} p-6 rounded-xl shadow-lg cursor-pointer relative overflow-hidden group`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="text-8xl">{concept.icon}</div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-3xl mb-2">{concept.icon}</div>
            <h3 className="text-xl font-bold text-white mb-1">{concept.title}</h3>
          </div>
          {concept.visualization && (
            <span className="bg-black/30 px-3 py-1 rounded-lg text-sm">
              كۆرۈنۈشلۈك
            </span>
          )}
        </div>
        
        <p className="text-gray-100 mb-4">{concept.description}</p>
        
        {concept.details && typeof concept.details === 'object' && (
          <div className="flex flex-wrap gap-2">
            {Object.keys(concept.details).slice(0, 2).map((key, idx) => (
              <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {key}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  const ChapterCard = ({ chapter }) => (
    <motion.div
      whileHover={{ x: 10 }}
      onClick={() => setActiveChapter(chapter.id)}
      className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
        activeChapter === chapter.id 
          ? `bg-gradient-to-r ${chapter.color} shadow-xl` 
          : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{chapter.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-white">{chapter.title}</h3>
            <p className="text-gray-300 text-sm">{chapter.description}</p>
          </div>
        </div>
        <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
          {chapter.duration}
        </span>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-gray-400 text-sm">تۈشۈنچە</p>
          <p className="text-white font-bold">{chapter.concepts.length}</p>
        </div>
        <div className="flex items-center">
          <span className="text-gray-300 text-sm mr-2">ئوقۇش</span>
          <span className="text-yellow-300">›</span>
        </div>
      </div>
    </motion.div>
  );

  const ConceptModal = ({ concept, onClose }) => (
    <AnimatePresence>
      {concept && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className={`bg-gradient-to-br ${concept.color} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-5xl mb-3">{concept.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{concept.title}</h2>
                  <p className="text-xl text-blue-100">{concept.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white text-2xl hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">تەپسىلاتى</h3>
                  
                  {concept.details && Object.entries(concept.details).map(([key, value], idx) => {
                    if (key === 'definition' || key === 'explanation' || key === 'keyPoint') {
                      return (
                        <div key={idx} className="mb-6">
                          <h4 className="text-xl font-bold text-white mb-2">
                            {key === 'definition' ? 'تەرىپ' : 
                             key === 'explanation' ? 'چۈشەندۈرۈش' : 
                             'ئەڭ مۇھىم نۇقتا'}
                          </h4>
                          <p className="text-gray-100">{value}</p>
                        </div>
                      );
                    }
                    
                    if (key === 'forces' || key === 'theories' || key === 'dimensions') {
                      return (
                        <div key={idx} className="mb-6">
                          <h4 className="text-xl font-bold text-white mb-3">
                            {key === 'forces' ? 'كۈچلەر' : 
                             key === 'theories' ? 'تېئورىيەلەر' : 
                             'ئۆلچەملەر'}
                          </h4>
                          <div className="space-y-3">
                            {value.map((item, itemIdx) => (
                              <div key={itemIdx} className="bg-black/30 p-3 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-white font-bold">{item.name || item.number}</span>
                                  {item.strength && (
                                    <span className="text-yellow-300">{item.strength}</span>
                                  )}
                                </div>
                                <p className="text-gray-200 text-sm">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    
                    if (key === 'analogy') {
                      return (
                        <div key={idx} className="mb-6">
                          <h4 className="text-xl font-bold text-white mb-2">مىسال</h4>
                          <div className="bg-black/30 p-4 rounded-lg">
                            <p className="text-gray-100 italic">{value}</p>
                          </div>
                        </div>
                      );
                    }
                    
                    return null;
                  })}
                </div>
                
                <div>
                  {concept.equation && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-3">ماتېماتىكىلىق ئىپادىسى</h4>
                      <div className="bg-black/40 p-6 rounded-xl">
                        <div className="text-2xl font-mono text-center text-yellow-300">
                          {concept.equation}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {concept.visualization && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-3">كۆرۈنۈشلۈك مىسال</h4>
                      <div className="bg-black/30 p-4 rounded-xl">
                        {concept.visualization === 'vibrating-string' && (
                          <div className="text-center">
                            <div className="text-6xl mb-4">〰️</div>
                            <p className="text-gray-200">تارنىڭ ھەر خىل تەۋرەش شەكلى ھەر خىل پارتىكۇلنى بەلگىلەيدۇ</p>
                          </div>
                        )}
                        {concept.visualization === 'calabi-yau' && (
                          <div className="text-center">
                            <div className="text-6xl mb-4">🌀</div>
                            <p className="text-gray-200">كالابى-ياۋ كۆپلىگەنلىكى: قوشۇمچە ئۆلچەملەرنىڭ شەكلى</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {concept.resources && concept.resources.length > 0 && (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">مەنبەلەر</h4>
                      <div className="space-y-3">
                        {concept.resources.map((resource, idx) => (
                          <div key={idx} className="bg-black/30 p-3 rounded-lg hover:bg-black/40 transition-colors">
                            <div className="flex justify-between items-center">
                              <span className="text-white">{resource.title}</span>
                              <span className="bg-white/20 px-2 py-1 rounded text-xs">
                                {resource.type}
                              </span>
                            </div>
                            {resource.duration && (
                              <p className="text-gray-400 text-sm mt-1">{resource.duration}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const AnimationView = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-gray-800/50 rounded-xl mb-8"
    >
      <h3 className="text-2xl font-bold text-white mb-4">تارلارنىڭ تەۋرەشى</h3>
      
      <div className="flex space-x-4 mb-6">
        {['strings', 'dimensions', 'branes'].map((mode) => (
          <button
            key={mode}
            onClick={() => setAnimationMode(mode)}
            className={`px-4 py-2 rounded-lg ${
              animationMode === mode
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {mode === 'strings' ? 'تارلار' :
             mode === 'dimensions' ? 'ئۆلچەملەر' : 'بىرانلار'}
          </button>
        ))}
      </div>
      
      <div className="h-64 bg-gray-900/50 rounded-xl flex items-center justify-center">
        {animationMode === 'strings' && (
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-6xl"
          >
            〰️
          </motion.div>
        )}
        
        {animationMode === 'dimensions' && (
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((dim) => (
              <motion.div
                key={dim}
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  delay: dim * 0.2,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 p-4 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-2xl">{dim}D</div>
                  <div className="text-xs text-gray-300">{dim === 4 ? 'ۋاقىت' : 'بوشلۇق'}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {animationMode === 'branes' && (
          <div className="flex space-x-4">
            {[0, 1, 2, 3].map((dim) => (
              <motion.div
                key={dim}
                animate={{
                  scale: [1, 1.3, 1],
                  rotateY: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  delay: dim * 0.5,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-4 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-2xl">D{dim}</div>
                  <div className="text-xs text-gray-300">بىران</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-4 text-gray-300 text-sm">
        {animationMode === 'strings' && 'تارلارنىڭ تەۋرەشى ھەر خىل پارتىكۇللارنى بەلگىلەيدۇ'}
        {animationMode === 'dimensions' && '10 ئۆلچەملىك ئالەمدە 4 ئۆلچىمىز كۆرۈنىدۇ'}
        {animationMode === 'branes' && 'بىرانلار تارلارنىڭ يۇقىرى ئۆلچەملىك ئۇمۇمىيلاشتۇرۇلۇشى'}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      {/* باش بەت */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          تار تېئورىيىسى (String Theory)
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          كىملىكنىڭ ئاخىرقى تېئورىيىسى - ھەممە نەرسەنى بىرلەشتۈرۈش ئۈمىدى
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-3 rounded-lg">
            <p className="text-lg">
              <span className="text-yellow-300 font-bold">مۇرەككەپلىك: </span>
              ئىلگىرى
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg">
            <p className="text-lg">
              <span className="text-yellow-300 font-bold">ۋاقىت: </span>
              {stringTheoryData.metadata.duration}
            </p>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 p-3 rounded-lg">
            <p className="text-lg">
              <span className="text-yellow-300 font-bold">ئۆلچەملەر: </span>
              10-11
            </p>
          </div>
        </div>
      </motion.header>

      {/* كۆرۈنۈشلۈك مىسال */}
      <AnimationView />

      {/* بۆلەكلەر */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">دەرس بۆلەكلەرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stringTheoryData.chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>

      {/* تۈشۈنچەلەر */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {stringTheoryData.chapters.find(c => c.id === activeChapter)?.title} - تۈشۈنچەلەر
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {stringTheoryData.chapters
            .find(chapter => chapter.id === activeChapter)
            ?.concepts.map(concept => (
              <ConceptCard key={concept.id} concept={concept} />
            ))}
        </div>
      </section>

      {/* تەجرىبىلەر */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">تەجرىبىلەر ۋە بايقاشلار</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stringTheoryData.experiments.map((experiment) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-3">{experiment.name}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-300">
                  <span className="text-yellow-300">ئورنى: </span>
                  {experiment.location}
                </p>
                <p className="text-gray-300">
                  <span className="text-yellow-300">مەقسەت: </span>
                  {experiment.purpose}
                </p>
                <p className="text-gray-300">
                  <span className="text-yellow-300">ھالىتى: </span>
                  <span className={`px-2 py-1 rounded ${
                    experiment.status === 'ئاكتىپ' 
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {experiment.status}
                  </span>
                </p>
              </div>
              {experiment.findings && (
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-white">
                    <span className="font-bold">بايقاش: </span>
                    {experiment.findings}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* مەنبەلەر */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">ئۆگىنىش مەنبەلىرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stringTheoryData.learningResources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">
                  {resource.type === 'كتاب' ? '📚' :
                   resource.type === 'كۇرس' ? '🎓' : '💻'}
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {resource.level}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
              <p className="text-gray-400 text-xs">
                {resource.author && `مۇئەللىف: ${resource.author}`}
                {resource.platform && `پلاتفورما: ${resource.platform}`}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* خۇلاسە */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl md:rounded-2xl border border-purple-500/30"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">تار تېئورىيىسىنىڭ ئەھمىيىتى</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-2xl mr-3">⚛️</div>
              <div>
                <h3 className="text-xl font-bold mb-2">كۇانتۇم گرافىتاتسىيە</h3>
                <p className="text-gray-300">
                  كىچىك (كىملىك) ۋە چوڭ (ئالەم) نى بىرلەشتۈرىدىغان يەككە تېئورىيە
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-2xl mr-3">🌀</div>
              <div>
                <h3 className="text-xl font-bold mb-2">بىرلەشتۈرۈلگەن تېئورىيە</h3>
                <p className="text-gray-300">
                  بارلىق ئاساسىي كۈچلەرنى بىر تېئورىيە ئاستىغا بىرلەشتۈرۈش
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-2xl mr-3">🔢</div>
              <div>
                <h3 className="text-xl font-bold mb-2">ماتېماتىكىلىق گۈزەللىك</h3>
                <p className="text-gray-300">
                  كونفورمال ساھە تېئورىيىسى، كالابى-ياۋ كۆپلىگەنلىكى قاتارلىق زور ماتېماتىكا
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-2xl mr-3">🚀</div>
              <div>
                <h3 className="text-xl font-bold mb-2">كەلگۈسى تەتقىقات</h3>
                <p className="text-gray-300">
                  كىملىكنىڭ ئەڭ چوڭ مەسىلىلىرىنى ھەل قىلىشنىڭ ئۈمىدى
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-center">ئاخىرقى سۆز</h3>
          <p className="text-lg text-center text-gray-200">
            «تار تېئورىيىسى كىملىكنىڭ ئاخىرقى تېئورىيىسى بولۇش ئۈمىدىنى ساقلاپ، 
            ماتېماتىكىلىق گۈزەللىك بىلەن فىزىكىلىق ھەقىقەتنى بىرلەشتۈرۈشنى نىشان قىلىدۇ. 
            10 ئۆلچەملىك ئالەم بىزنىڭ 4 ئۆلچەملىك تەجرىبىمىزنىڭ ئارقىسىدىكى مۇرەككەپ ھەقىقەتتۇر.»
          </p>
        </div>
      </motion.div>

      {/* مودال */}
      <ConceptModal 
        concept={selectedConcept} 
        onClose={() => setSelectedConcept(null)} 
      />
    </div>
  );
};

export default Blog68;