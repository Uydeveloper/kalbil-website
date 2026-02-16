// src/components/blog/posts/Blog09.jsx
import React, { useState } from 'react';
import { 
  Type, 
  PenTool, 
  Heart, 
  Share2, 
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Award,
  Globe,
  Download,
  Layers,
  Grid3x3,
  Sparkles, // ← ئەسلىگە Sparkle بولغان، لېكىن lucide-react دا Sparkles بار
  Star,
  Target,
  Image,
  BookOpen,
  Eye,
  Copy,
  RotateCw,
  Book,
  MessageCircle,
  Quote,
  Code, // ← ئەسلىگە code (كىچىك ھەرپ) بولغان، خاتا!
  Languages
} from 'lucide-react';

const UyghurCalligraphyDemo = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(342);
  const [activeStyle, setActiveStyle] = useState('chaghatay');
  const [selectedQuote, setSelectedQuote] = useState(0);
  const [fontSize, setFontSize] = useState(48);
  
  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
    }
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ئۇيغۇر خەت نۇسخىلىرى ۋە ئاتا سۆزلەر',
        text: 'بۇ ماقالىنى ئوقۇپ بېقىڭ!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('ئۇلىنىش كۆچۈرۈلدى!');
    }
  };

  // 15 خىل ئۇيغۇر خەت نۇسخىسى
  const calligraphyStyles = [
    {
      id: 'chaghatay',
      name: 'چاغاتاي خەت',
      description: 'قەدىمكى ئۇيغۇر يېزىقىدىن كېلىپ چىققان، ئۇيغۇر ئەدىبلىرى تەرىپىدىن كەڭ قوللىنىلغان خەت نۇسخىسى.',
      features: ['تارىخىي', 'مەدەنىي', 'ئەنئەنىۋى', 'ئادەبىي'],
      usage: 'ئەدىبىي ئەسەرلەر، تارىخىي ماتېرىياللار، مەدەنىيەت بەلگىلىرى',
      era: '15-19 ئەسىرلەر',
      difficulty: 'يۇقىرى',
      example: 'ئۇيغۇر',
      className: 'font-chaghatay'
    },
    {
      id: 'klasik',
      name: 'كلاسسىك خەت',
      description: 'تەربىيىلىك ۋە مەكتەپ ئوقۇتۇشىدا قوللىنىلغان، ئوقۇشچان ۋە تەرتىپلىك خەت نۇسخىسى.',
      features: ['تەرتىپلىك', 'ئوقۇشچان', 'تەربىيىلىك', 'سىستېمىلىق'],
      usage: 'مەكتەپ كىتابلىرى، ئوقۇتۇش ماتېرىيالى، رەسمىي يازما',
      era: '19-20 ئەسىرلەر',
      difficulty: 'تۆۋەن',
      example: 'مائارىپ',
      className: 'font-klasik'
    },
    {
      id: 'modern',
      name: 'زامانىۋى خەت',
      description: 'كومپيۇتېر ۋە رەقەملىك تېخنىكىلارغا ماسلىشىشقا لايىھەلەنگەن خەت نۇسخىسى.',
      features: ['زامانىۋى', 'قولايسىز', 'كۆرۈنەرلىك', 'ماسلىشىشچان'],
      usage: 'كومپيۇتېر، ئەپ، تور بېكەت، رەقەملىك ماتېرىيال',
      era: '21-ئەسىر',
      difficulty: 'تۆۋەن',
      example: 'تېخنىكا',
      className: 'font-modern'
    },
    {
      id: 'sheir',
      name: 'شېئىر خەت',
      description: 'شېئىر ۋە ئەدەبىي ئەسەرلەر ئۈچۈن ماخسۇس لايىھەلەنگەن، گۈزەل ۋە ئىپادىلىك خەت.',
      features: ['گۈزەل', 'ئىپادىلىك', 'ھەرىكەتچان', 'سەنئەتچانە'],
      usage: 'شېئىر كىتابلىرى، ئەدەبىي ژۇرنال، سەنئەت ماتېرىيالى',
      era: '20-ئەسىر',
      difficulty: 'ئوتتۇرا',
      example: 'شېئىر',
      className: 'font-sheir'
    },
    {
      id: 'resmiy',
      name: 'رەسمىي خەت',
      description: 'رەسمىي ھۆججەت ۋە دۆلەت ماتېرىياللىرى ئۈچۈن ماخسۇس لايىھەلەنگەن خەت.',
      features: ['رەسمىي', 'ئېنىق', 'قەتئىي', 'مۇكەممەل'],
      usage: 'رەسمىي ھۆججەت، دۆلەت ماتېرىيالى، قانۇن ھۆججىتى',
      era: '20-ئەسىر',
      difficulty: 'ئوتتۇرا',
      example: 'ھۆكۈمەت',
      className: 'font-resmiy'
    },
    {
      id: 'xettat',
      name: 'خەتتات خەت',
      description: 'خەتتاتلار تەرىپىدىن قولدا يېزىلغان، ئالاھىدە سەنئەت قىممىتىگە ئىگە خەت.',
      features: ['سەنئەتچانە', 'ئالاھىدە', 'قولدا يېزىلغان', 'نادىر'],
      usage: 'خەت سەنئەتى، سەنئەت ئەسىرى، مۇزىيە مەزمۇنى',
      era: 'ھەممە دەۋرلەر',
      difficulty: 'يۇقىرى',
      example: 'سەنئەت',
      className: 'font-xettat'
    },
    {
      id: 'kitap',
      name: 'كىتاب خەت',
      description: 'كىتاب ۋە ژۇرنال بېسىش ئۈچۈن ئالاھىدە لايىھەلەنگەن، ئۇزۇن ئوقۇشقا ماس خەت.',
      features: ['ئوقۇشچان', 'چىداملىق', 'ئاددىي', 'ئەستېتىك'],
      usage: 'كىتاب بېسىش، ژۇرنال، ئۇزۇن مەزمۇن',
      era: '20-ئەسىر',
      difficulty: 'تۆۋەن',
      example: 'كىتاب',
      className: 'font-kitap'
    },
    {
      id: 'logograf',
      name: 'لوگوگراف خەت',
      description: 'ماركا ۋە لوگو دىزايىنى ئۈچۈن ماخسۇس لايىھەلەنگەن، ئىپادىلىك ۋە ئەستېتىك خەت.',
      features: ['ئىپادىلىك', 'ئەستېتىك', 'ئالاھىدە', 'ماركىلىق'],
      usage: 'لوگو دىزايىنى، ماركا بەلگىسى، تىجارەت نامى',
      era: '21-ئەسىر',
      difficulty: 'ئوتتۇرا',
      example: 'ماركا',
      className: 'font-logograf'
    },
    {
      id: 'tarixiy',
      name: 'تارىخىي خەت',
      description: 'تارىخىي ماتېرىياللارنى قايتا نەشر قىلىش ئۈچۈن ماخسۇس لايىھەلەنگەن خەت.',
      features: ['تارىخىي', 'ئەنئەنىۋى', 'ئەسلىي', 'قېمەتلىك'],
      usage: 'تارىخىي ماتېرىيال، ئارخىۋ، تەتقىقات ھۆججىتى',
      era: 'ھەممە دەۋرلەر',
      difficulty: 'يۇقىرى',
      example: 'تارىخ',
      className: 'font-tarixiy'
    },
    {
      id: 'moda',
      name: 'مودا خەت',
      description: 'مودا ۋە دىزايىن ساھەسى ئۈچۈن ماخسۇس لايىھەلەنگەن، زامانىۋى ۋە ئىجادىيەتلىك خەت.',
      features: ['زامانىۋى', 'ئىجادىيەتلىك', 'مودا', 'دىزايىنچان'],
      usage: 'مودا ژۇرنالى، دىزايىن ماتېرىيالى، سەنئەت بەلگىسى',
      era: '21-ئەسىر',
      difficulty: 'ئوتتۇرا',
      example: 'مودا',
      className: 'font-moda'
    },
    {
      id: 'bala',
      name: 'بالا خەت',
      description: 'بالىلار ئۈچۈن ماخسۇس لايىھەلەنگەن، چوڭ ۋە ئوقۇشچان خەت.',
      features: ['چوڭ', 'ئوقۇشچان', 'رەڭدار', 'قىزىقتۇرۇشچان'],
      usage: 'بالىلار كىتابلىرى، مائارىپ ماتېرىيالى، ئويۇن كىتابلىرى',
      era: '21-ئەسىر',
      difficulty: 'تۆۋەن',
      example: 'بالىلار',
      className: 'font-bala'
    },
    {
      id: 'elipbe',
      name: 'ئېلىپبە خەت',
      description: 'ئېلىپبە ئۆگىتىش ئۈچۈن ماخسۇس لايىھەلەنگەن، ئېنىق ۋە تەرتىپلىك خەت.',
      features: ['ئېنىق', 'تەرتىپلىك', 'ئۆگىتىشچان', 'سىستېمىلىق'],
      usage: 'ئېلىپبە كىتابلىرى، تىل ئۆگىتىش ماتېرىيالى، باشلانغۇچ مائارىپ',
      era: '20-ئەسىر',
      difficulty: 'تۆۋەن',
      example: 'ئېلىپبە',
      className: 'font-elipbe'
    },
    {
      id: 'medeniy',
      name: 'مەدەنىي خەت',
      description: 'مەدەنىيەت ۋە سەنئەت ماتېرىياللىرى ئۈچۈن ماخسۇس لايىھەلەنگەن خەت.',
      features: ['مەدەنىي', 'سەنئەتچانە', 'گۈزەل', 'قىممەتلىك'],
      usage: 'مەدەنىيەت ژۇرنالى، سەنئەت ماتېرىيالى، مۇزىيە كىتابلىرى',
      era: '20-ئەسىر',
      difficulty: 'ئوتتۇرا',
      example: 'مەدەنىيەت',
      className: 'font-medeniy'
    },
    {
      id: 'tez',
      name: 'تېز يېزىش خەت',
      description: 'تېز يېزىش ئۈچۈن ماخسۇس لايىھەلەنگەن، ساددە ۋە قولايسىز خەت.',
      features: ['ساددە', 'قولايسىز', 'تېز', 'ئاددىي'],
      usage: 'خاتىرە يېزىش، تېز يېزىش، كۈندىلىك خاتىرە',
      era: '20-ئەسىر',
      difficulty: 'تۆۋەن',
      example: 'تېز يېزىش',
      className: 'font-tez'
    },
    {
      id: '3d',
      name: '3D خەت',
      description: 'دىجىتال ۋە 3D دىزايىن ئۈچۈن ماخسۇس لايىھەلەنگەن، ئۈچ ئۆلچەملىك خەت.',
      features: ['3D', 'دىجىتال', 'زامانىۋى', 'ئىجادىيەتلىك'],
      usage: '3D دىزايىن، دىجىتال سەنئەت، كومپيۇتېر گرافىكىسى',
      era: '21-ئەسىر',
      difficulty: 'يۇقىرى',
      example: '3D دىزايىن',
      className: 'font-3d'
    }
  ];

  // ئۇيغۇر ئاتا سۆزلەر
  const uyghurQuotes = [
    {
      text: "بىلىملىك كىشىنىڭ قانى يوق، بىلىمسىز كىشىنىڭ ئانى يوق.",
      meaning: "بىلىملىك ئىنسان ئۆلۈمدىن قورقمىسا، بىلىمسىز ئىنسان ئانا ھۆرمىتىدىن مەھرۇم قالىدۇ. بىلىم - ھاياتنىڭ نۇرى، ئانا - ھاياتنىڭ مەنبەسىدۇر.",
      category: "بىلىم ۋە ئانا ھۆرمىتى",
      author: "ئۇيغۇر ئاتا سۆزى"
    },
    {
      text: "تاشقى كۆرۈنۈشكە قاراپ كىشىنى باھالىما، ئىچكى سۈپىتىگە قاراپ باھالى.",
      meaning: "كىشىنىڭ سىرتقى كۆرۈنۈشى ئەمەس، ئىچكى سۈپىتى، ئەخلاقى ۋە خاراكتېرى مۇھىم. گۈزەل يۈز ئەمەس، گۈزەل كۆڭۈل ئۇزۇن ياشايدۇ.",
      category: "ئىنسان قىممىتى",
      author: "ئۇيغۇر ھېكمىتى"
    },
    {
      text: "سۆز نە ئاشۇرىدۇ، نە ئۆلتۈرىدۇ، سۆز ئارقىلىق ئىنسانلار ئۆز-ئارا چۈشىنىدۇ.",
      meaning: "سۆز كۈچلۈك ئەسۋاب. توغرا سۆز ياخشىلىق تارقىتىدۇ، خاتا سۆز زىيان كەلتۈرىدۇ. سۆز بىلەن ئىنسانلار ئارىسىدا چۈشەنچە ۋە مۇھەببەت پەيدا بولىدۇ.",
      category: "سۆز ۋە ئالاقە",
      author: "ئۇيغۇر مەدەنىيىتى"
    },
    {
      text: "يولداشنىڭ ياخشىسى يولداش، يامانى يوق.",
      meaning: "ياخشى يولداش ھايات يولىدا ياردەمچى، يامان يولداش ئېغىر يۈك. يولداشتا ساداقەت ۋە ئىشەنچ ئەڭ مۇھىم، بۇ بولمىسا ھايات قىيىنلىشىدۇ.",
      category: "دوستانلىق ۋە يولداشلىق",
      author: "ئۇيغۇر ھېكمىتى"
    },
    {
      text: "ۋاقىت ئالتۇندىن قىممەت، ئالتۇن ۋاقىت بىلەن تاپقىلى بولىدۇ.",
      meaning: "ۋاقىت ھەر قانداق بايلىقتىن قىممەتلىك، چۈنكى ۋاقىت قايتۇرۇلمايدۇ. ئالتۇننى ۋاقىت بىلەن تاپساقمۇ، ئۆتكەن ۋاقىتنى قايتۇرالمايمىز.",
      category: "ۋاقىت قىممىتى",
      author: "ئۇيغۇر ئاتا سۆزى"
    },
    {
      text: "ئەگەر كۆزۈڭنى يۇمۇپ ئاچساڭ، دۇنيا ئۆزگەرمىگەن بولىدۇ، پەقەت سەن ئۆزگەرىسەن.",
      meaning: "دۇنيا ئۆزگەرمەيدۇ، پەقەت بىزنىڭ كۆز قارىشىمىز ۋە چۈشەنچىمىز ئۆزگىرىدۇ. ھاياتقا مۇۋاپىق قاراش بىلەن، ھەممە نەرسە گۈزەل كۆرۈنىدۇ.",
      category: "ھايات ۋە كۆز قاراش",
      author: "ئۇيغۇر پەلسەپىسى"
    },
    {
      text: "ئىشەنچسىز كىشى بىلەن ھېچقانداق ئىشنى باشقۇرۇشقا بولمايدۇ.",
      meaning: "ئىشەنچ بولمىسا، ھېچقانداق مۇناسىۋەت داۋاملاشمايدۇ. ئىشەنچ - مۇناسىۋەتنىڭ ئاساسى، بۇ ئاساسسىز ھېچقانداق بىنا قۇرۇلمايدۇ.",
      category: "ئىشەنچ ۋە مۇناسىۋەت",
      author: "ئۇيغۇر ھېكمىتى"
    },
    {
      text: "سەۋر قىلغان كىشىگە ھەر قانداق نەرسە مۇۋاپىق كېلىدۇ.",
      meaning: "سەۋر ھەر قانداق مەشەققەتنى يېڭىشقا ياردەم بېرىدۇ. سەۋرلىك كىشىگە دۇنيا مۇۋاپىق كېلىدۇ، چۈنكى سەۋر تۇتاشنىڭ كالىسىدۇر.",
      category: "سەۋر ۋە تۇتاش",
      author: "ئۇيغۇر ئاتا سۆزى"
    },
    {
      text: "ياخشىلىق قىلغان كىشىگە ياخشىلىق قايتىدۇ.",
      meaning: "ياخشىلىق قىلغان كىشىگە دۇنيا ياخشىلىق بىلەن مۇئامىلە قىلىدۇ. ياخشىلىق ياخشىلىقنى، يامانلىق يامانلىقنى كەلتۈرىدۇ.",
      category: "ياخشىلىق ۋە ئەخلاق",
      author: "ئۇيغۇر ئەخلاق قائىدىسى"
    },
    {
      text: "ئۆگىنىش چەكسىز، بىلىم چەكسىز.",
      meaning: "ئۆگىنىش ھەرگىز تۈگىمەيدۇ، بىلىم چەكسىز دۇنيادۇر. ئۆگەنگەن نەرسە ئادەمگە، بىلمىگەن نەرسە دۇنياغا قاراپ تېخىمۇ كۆپ.",
      category: "ئۆگىنىش ۋە بىلىم",
      author: "ئۇيغۇر مائارىپ پەلسەپىسى"
    },
    {
      text: "مىللەتنىڭ كۈچى بىرلىكتە، بىرلىكنىڭ كۈچى ئىتتىپاقتا.",
      meaning: "مىللەتنىڭ كۈچى بىرلىكتە، بىرلىكنىڭ كۈچى ئىتتىپاقتا. بىرلىك بولمىسا، كۈچ بولمايدۇ؛ ئىتتىپاق بولمىسا، تەرەققىيات بولمايدۇ.",
      category: "بىرلىك ۋە ئىتتىپاق",
      author: "ئۇيغۇر مىللىي ھېكمىتى"
    },
    {
      text: "تۇپراقسىز ئۆسۈملۈك بولمايدۇ، ۋەتەنسىز مىللەت بولمايدۇ.",
      meaning: "تۇپراق ئۆسۈملۈكنىڭ ھايات مەنبەسى، ۋەتەن مىللەتنىڭ مەدەنىيەت مەنبەسى. ۋەتەنسىز مىللەت، تۇپراقسىز ئۆسۈملۈككە ئوخشايدۇ.",
      category: "ۋەتەن ۋە مىللەت",
      author: "ئۇيغۇر مىللىي شۇئارى"
    },
    {
      text: "تىل مىللەتنىڭ كالىسى، مەدەنىيەتنىڭ ئەنئەسىدۇر.",
      meaning: "تىل مىللەتنىڭ روھى، مەدەنىيەتنىڭ ساقچىسىدۇر. تىل بولمىسا، مىللەت بولمايدۇ؛ مەدەنىيەت بولمىسا، تارىخ بولمايدۇ.",
      category: "تىل ۋە مەدەنىيەت",
      author: "ئۇيغۇر تىلشۇناسلىقى"
    },
    {
      text: "ئەنئەنىنى ساقلا، زامانىغا ماسلىش.",
      meaning: "ئەنئەنىنى ساقلاپ، زامانىغا ماسلىشىش كېرەك. ئەنئەنىسىز زامانىۋىلىق ئاساسسىز، زامانىۋىلىقسىز ئەنئەنى تەرەققىي قىلالمايدۇ.",
      category: "ئەنئەنى ۋە زامانىۋىلىق",
      author: "ئۇيغۇر تەرەققىيات پەلسەپىسى"
    },
    {
      text: "ھەسسىياتسىز كىشى، جانسىز تەنغا ئوخشايدۇ.",
      meaning: "ھەسسىيات ئىنساننىڭ جانى، جانسىز تەن ھاياتسىز. ھەسسىيات بولمىسا، ئىنسان بولمايدۇ؛ مۇھەببەت بولمىسا، ھايات بولمايدۇ.",
      category: "ھەسسىيات ۋە ئىنسانىيەت",
      author: "ئۇيغۇر ئىنسانپەرۋەرلىكى"
    }
  ];

  return (
    <article className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ۋاسىتە */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
            <Languages className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              ئۇيغۇر خەت نۇسخىلىرى ۋە ئاتا سۆزلەر
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              15 خىل ئۇيغۇر خەت نۇسخىسى
            </span>
            <br />
            ۋە ئاتا سۆزلەرنىڭ گۈزەل ئىپادىسى
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ئۇيغۇر خەت نۇسخىلىرى پەقەت يېزىش ئەمەس، مەدەنىيەتنىڭ جانلىق تەرجىمانى. ھەر بىر خەت نۇسخىسى ئۆزىگە خاس گۈزەللىك ۋە مەنىگە ئىگە.
          </p>
        </header>

        {/* خەت نۇسخىلىرى تاختىسى */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  خەت نۇسخىلىرىنى تاللاش
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  ئاستىدىكى تاختىدىن خەت نۇسخىسىنى تاللاڭ
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{calligraphyStyles.length}</div>
                  <div className="text-sm text-gray-500">خەت نۇسخىسى</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{uyghurQuotes.length}</div>
                  <div className="text-sm text-gray-500">ئاتا سۆز</div>
                </div>
              </div>
            </div>
            
            {/* خەت كۆلەنگەنلىرى */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
              {calligraphyStyles.map(style => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style.id)}
                  className={`p-4 rounded-xl transition-all duration-300 transform ${
                    activeStyle === style.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-2xl scale-105'
                      : 'bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 hover:scale-102'
                  }`}
                >
                  <div className={`text-3xl font-bold mb-2 ${style.className}`}>
                    {style.example.charAt(0)}
                  </div>
                  <div className="font-bold text-sm">{style.name}</div>
                  <div className="text-xs opacity-80 mt-1">{style.difficulty}</div>
                </button>
              ))}
            </div>

            {/* فونت چوڭلۇقى تەڭشىگۈچ */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">خەت چوڭلۇقى:</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ئاتا سۆزنىڭ كۆرۈنۈش چوڭلۇقى</p>
                </div>
                <div className="text-2xl font-bold text-indigo-600">{fontSize}px</div>
              </div>
              <input
                type="range"
                min="24"
                max="72"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>كىچىك</span>
                <span>ئوتتۇرا</span>
                <span>چوڭ</span>
              </div>
            </div>
          </div>
        </div>

        {/* تەپسىلىي كۆرسىتىش */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* سول تەرەپ: خەت تەپسىلاتلىرى */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              {calligraphyStyles.map(style => (
                activeStyle === style.id && (
                  <div key={style.id} className="animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {style.name} خەت نۇسخىسى
                        </h3>
                        <div className="text-lg text-gray-600 dark:text-gray-400">{style.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">مۇرەككەپلىكى</div>
                        <div className={`text-xl font-bold ${
                          style.difficulty === 'يۇقىرى' ? 'text-red-500' :
                          style.difficulty === 'ئوتتۇرا' ? 'text-amber-500' : 'text-green-500'
                        }`}>
                          {style.difficulty}
                        </div>
                      </div>
                    </div>
                    
                    {/* ئاتا سۆز كۆرسىتىش */}
                    <div className="mb-8">
                      <div className="text-center p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl">
                        <div 
                          className={`font-bold mb-4 leading-relaxed ${style.className}`}
                          style={{ fontSize: `${fontSize}px` }}
                        >
                          {uyghurQuotes[selectedQuote].text}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {style.name} خەت نۇسخىسىدا يېزىلغان
                        </div>
                      </div>
                    </div>
                    
                    {/* تەسۋىرلەش */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">تەسۋىرى:</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {style.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">ئالاھىدىلىكلىرى:</h4>
                        <ul className="space-y-2">
                          {style.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                              <Sparkles className="w-4 h-4 text-indigo-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">ئۇچۇرلار:</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm text-gray-500">ئىشلىتىلىشى:</div>
                            <div className="font-medium">{style.usage}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">دەۋرى:</div>
                            <div className="font-medium">{style.era}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">ئەھمىيىتى:</div>
                            <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                              style.difficulty === 'يۇقىرى' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                              style.difficulty === 'ئوتتۇرا' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' :
                              'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            }`}>
                              {style.difficulty} دەرىجىلىك
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
          
          {/* ئوڭ تەرەپ: ئاتا سۆزلەر كۆرسىتىش */}
          <div>
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Quote className="w-8 h-8" />
                <h3 className="text-2xl font-bold">ئۇيغۇر ئاتا سۆزلەر</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold">ھازىرقى ئاتا سۆز:</div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {selectedQuote + 1} / {uyghurQuotes.length}
                  </div>
                </div>
                
                <div className="text-center p-6 bg-white/10 rounded-xl mb-4">
                  <div className={`text-3xl md:text-4xl font-bold mb-4 leading-relaxed ${calligraphyStyles.find(s => s.id === activeStyle)?.className}`}>
                    {uyghurQuotes[selectedQuote].text}
                  </div>
                  <div className="text-purple-200 text-sm">
                    {uyghurQuotes[selectedQuote].category}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    مەنىسى:
                  </h4>
                  <p className="text-purple-100 bg-white/5 p-4 rounded-lg">
                    {uyghurQuotes[selectedQuote].meaning}
                  </p>
                </div>
                
                <div className="text-right text-purple-200 text-sm">
                  - {uyghurQuotes[selectedQuote].author}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm font-medium mb-2">باشقا ئاتا سۆزلەر:</div>
                {uyghurQuotes.slice(0, 5).map((quote, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedQuote(index)}
                    className={`w-full text-right p-3 rounded-lg transition-all ${
                      selectedQuote === index
                        ? 'bg-white/20'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-medium truncate">{quote.text}</div>
                    <div className="text-sm text-purple-200">{quote.category}</div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedQuote(selectedQuote > 0 ? selectedQuote - 1 : uyghurQuotes.length - 1)}
                    className="flex-1 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    ← ئالدىنقى
                  </button>
                  <button 
                    onClick={() => setSelectedQuote((selectedQuote + 1) % uyghurQuotes.length)}
                    className="flex-1 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    كېيىنكى →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* خەت نۇسخىلىرىنىڭ تەڭشەش جەدۋىلى */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                ئۇيغۇر خەت نۇسخىلىرىنىڭ تەڭشەش جەدۋىلى
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      <th className="p-4 text-right">خەت نۇسخىسى</th>
                      <th className="p-4 text-right">تەسۋىرى</th>
                      <th className="p-4 text-right">مۇرەككەپلىكى</th>
                      <th className="p-4 text-right">ئاساسلىق ئىشلىتىلىشى</th>
                      <th className="p-4 text-right">مىسال</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calligraphyStyles.map((style, index) => (
                      <tr key={style.id} className={`border-b border-gray-200 dark:border-gray-700 ${
                        index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : ''
                      }`}>
                        <td className="p-4 font-bold">{style.name}</td>
                        <td className="p-4 text-gray-600 dark:text-gray-400">{style.description.substring(0, 80)}...</td>
                        <td className="p-4">
                          <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                            style.difficulty === 'يۇقىرى' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                            style.difficulty === 'ئوتتۇرا' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' :
                            'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          }`}>
                            {style.difficulty}
                          </div>
                        </td>
                        <td className="p-4">{style.usage}</td>
                        <td className="p-4">
                          <div className={`text-2xl font-bold ${style.className}`}>
                            {style.example}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* CSS خەت نۇسخىلىرى */}
        <div className="mb-12 bg-gradient-to-br from-indigo-900 to-purple-900 text-gray-100 rounded-2xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-6 h-6" />
              CSS ئارقىلىق قوللىنىش
            </h3>
            <pre className="bg-gray-800 p-6 rounded-lg overflow-x-auto">
{`/* ئۇيغۇر خەت نۇسخىلىرى CSS كودلىرى */

.font-chaghatay {
  font-family: 'Uyghur Chaghatay', 'UKIJ Tuz', serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.1em;
  line-height: 1.8;
}

.font-klasik {
  font-family: 'Uyghur Klasik', 'UKIJ Tuz', sans-serif;
  font-weight: 500;
  font-style: normal;
  line-height: 1.6;
}

.font-modern {
  font-family: 'Uyghur Modern', 'UKIJ Tuz', sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
}

.font-sheir {
  font-family: 'Uyghur Sheir', 'UKIJ Tuz', serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.05em;
}

.font-resmiy {
  font-family: 'Uyghur Resmiy', 'UKIJ Tuz', sans-serif;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.02em;
}`}
            </pre>
          </div>
        </div>

        {/* ئاتا سۆزلەرنىڭ ئومۇمىي كۆرۈنۈشى */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              ئاتا سۆزلەرنىڭ ھەرخىل خەت نۇسخىلىرىدا يېزىلىشى
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calligraphyStyles.slice(0, 4).map((style, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`text-2xl ${style.className}`}>{style.example.charAt(0)}</div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{style.name}</div>
                      <div className="text-sm text-gray-500">{style.usage}</div>
                    </div>
                  </div>
                  <div className={`text-xl font-bold mb-2 ${style.className}`}>
                    {uyghurQuotes[index].text.substring(0, 60)}...
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {uyghurQuotes[index].category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* خۇلاسە */}
        <div className="mt-16 p-8 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5 rounded-2xl border border-indigo-200/50 dark:border-indigo-800/50">
          <h4 className="text-2xl font-bold mb-6 text-indigo-800 dark:text-indigo-300 flex items-center gap-3">
            <BookOpen className="w-7 h-7" />
            مۇھىم ئەسكەرتىش
          </h4>
          <div className="space-y-4 text-indigo-700 dark:text-indigo-200">
            <p className="text-lg font-medium">
              "ئۇيغۇر خەت نۇسخىلىرى پەقەت يېزىش ئۇسۇلى ئەمەس، مەدەنىيەتنىڭ جانلىق تەرجىمانى. ھەر بىر خەت نۇسخىسى ئۆزىگە خاس تارىخىي ۋە مەدەنىيەت ئېلېمېنتلىرىنى ئۆز ئىچىگە ئالىدۇ."
            </p>
            <p>
              15 خىل ئۇيغۇر خەت نۇسخىسى ئۇيغۇر مەدەنىيىتىنىڭ گۈزەللىكىنى نامايان قىلىدۇ. 
              بۇ خەتلەرنى زامانىۋى تېخنىكا ئارقىلىق ساقلاش ۋە تارقىتىش، مەدەنىيەتنى ساقلاشنىڭ ئەڭ مۇھىم يوللىرىنىڭ بىرى.
            </p>
            <p>
              ئاتا سۆزلەر بولسا ئۇيغۇر ھېكمىتىنىڭ مەركىزىدۇر. ھەر بىر ئاتا سۆز ئۇيغۇر خەلقىنىڭ تەجرىبىسى، ھېكمىتى ۋە پەلسەپىسىنى ئۆز ئىچىگە ئالىدۇ.
            </p>
            <p className="font-bold">
              خەت ئۆلمەيدۇ، پەقەت ئۆزىنىڭ شەكلىنى ئۆزگەرتىدۇ. 
              ئۇيغۇر خەتچىلىكىنىڭ كەلگۈسى، ئۇنىڭ ئەنئەنىسى بىلەن زامانىۋىلىكىنىڭ ھەممىرلىشىشىدۇر.
            </p>
          </div>
        </div>

        {/* ئاخىرقى ھەرەكەتلەر */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                ئۇيغۇر خەت-سەنئىتى ۋە ئاتا سۆزلەرنى قوللاپ، بۇ ماقالىنى ئورتاقلىشىڭ!
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ئ</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">ئۇيغۇر مەدەنىيىتى مەركىزى</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">خەتچىلەر ۋە مەدەنىيەت تەتقىقاتچىلىرى</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleLike}
                className={`px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  liked 
                    ? 'bg-purple-500 text-white hover:bg-purple-600' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                <span>لايىك ({likeCount})</span>
              </button>
              
              <button 
                onClick={handleShare}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                <span>ئورتاقلىشىش</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2024 ئۇيغۇر خەتتاتچىلىك ۋە مەدەنىيەت تەتقىقات مەركىزى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
            <p className="mt-1">بۇ ماقالىدىكى خەت نۇسخىلىرى ۋە ئاتا سۆزلەر ئۇيغۇر مەدەنىيىتىنىڭ قىممەتلىك مىراسلىرىدۇر.</p>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default UyghurCalligraphyDemo;