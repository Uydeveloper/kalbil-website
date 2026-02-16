// src/components/learn-modules/NationModule.jsx
import React, { useState, useEffect } from 'react';
import { Star, BookOpen, Target, Globe, Users, Flag, Heart, Award, Clock, ChevronRight } from 'lucide-react';

// ======================
// 5 ئاساسىي دەرس مەزمۇنى (مىللەت، ئەل، قەبىلە)
// ======================

const enhancedLessons = [
  // === 1. مىللەت ===
  {
    id: 'nation',
    title: 'مىللەت',
    description: 'ئورتاق تىل، مەدەنىيەت، تارىخ ۋە كىملىككە ئىگە ئىنسانلار گۇرۇپپىسى',
    icon: '👥',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    keywords: ['مىللەت', 'مەدەنىيەت', 'تىل', 'كىملىك', 'ئورتاق تارىخ'],
    usage: 'مىللەتلەرنىڭ ئۆزئارا چۈشىنىشى ۋە ھۆرمىتىنى ئاشۇرۇش',
    difficulty: 'باشلانغۇچ',
    estimatedTime: '10 مىنۇت',
    fullContent: {
      intro: 'مىللەت دېگەنلىك ئورتاق تىل، مەدەنىيەت، تارىخ، ئادەت-قائىدە ۋە كىملىككە ئىگە بولغان ئىنسانلار گۇرۇپپىسىدۇر.',
      
      detailedExplanation: `مىللەت دېگەنلىك ئورتاق تىل، مەدەنىيەت، تارىخ، ئادەت-قائىدە ۋە كىملىككە ئىگە بولغان ئىنسانلار گۇرۇپپىسىدۇر. مىللەتلەر ئادەتتە ئۇزۇن تارىخىي جەرياندا شەكىللەنگەن بولۇپ، ئۆزىگە خاس مەدەنىيەت ۋە ئەنئەنىلەرگە ئىگە.

مىللەتنىڭ ئاساسىي ئەلېمېنتلىرى:
1. ئورتاق تىل - مىللەتنىڭ ئاساسىي ئالاقە ۋاسىتىسى
2. ئورتاق مەدەنىيەت - ئادەت-قائىدە، دىن، سەنئەت، بايراملار
3. ئورتاق تارىخ - مۇشەرەك تارىخىي تەجرىبە
4. ئورتاق كىملىك - "بىز كىم؟" دېگەن سوئالغا جاۋاب
5. ئورتاق زېمىن - تارىخىي ياشاش رايونى

مىللەت بىلەن دۆلەت ئوتتۇرىسىدا پەرق بار بولۇپ، بىر دۆلەتتە كۆپ مىللەت ياشىشى مۇمكىن. مەسىلەن، جۇڭگو دۆلىتىدە 56 مىللەت ياشايدۇ، ھەر بىر مىللەتنىڭ ئۆزىگە خاس تىلى، مەدەنىيىتى بار.`,
      
      examples: [
        'ئۇيغۇر مىللىتى — ئورتاق ئۇيغۇر تىلى، ئىسلام دىنى، موقام سەنئىتى، نەۋرۇز بايرىمى، 6700 يىلدىن ئاشقان تارىخقا ئىگە.',
        'خەنزۇ مىللىتى — جۇڭگونىڭ ئەڭ كۆپ سانلىق مىللىتى، خەنزۇ تىلى، كونفۇچىيچىلىق مەدەنىيىتى، چىن بايرىمى، 1500 يىللىق تارىخ.',
        'تۈرك مىللىتى — تۈركىيە، ئەزەربەيجان، ئۆزبېكىستان قاتارلىق دۆلەتلەردە ياشايدۇ. ئورتاق تۈرك تىل ئائىلىسى، ئىسلام دىنى، كۆك بەيرەم ئېتىقادى.',
        'ئەرەب مىللىتى — ئورتاق ئەرەب تىلى، ئىسلام دىنى، ئەرەب يېزىقى، بەدەۋىي تۇرمۇش ئەنئەنىسى. 22 دۆلەتتە تارقالغان.'
      ],
      
      keyConcepts: [
        { 
          term: 'مىللەت نېمە؟', 
          definition: 'ئورتاق تىل، مەدەنىيەت، تارىخ ۋە كىملىككە ئىگە بولغان ئىنسانلار گۇرۇپپىسى.',
          icon: '👥'
        },
        { 
          term: 'مىللەت نېمە ئۈچۈن مۇھىم؟', 
          definition: 'مەدەنىيەتنى ساقلاش، كىملىكنى قوغداش، مىللەتلەر ئارا ھۆرمەتنى ئاشۇرۇش ئۈچۈن.',
          icon: '🛡️'
        },
        { 
          term: 'مىللەت قانداق شەكىللەنگەن؟', 
          definition: 'تارىخىي جەرياندا ئورتاق تىل، دىن، مەدەنىيەت ئارقىلىق شەكىللەنگەن.',
          icon: '📜'
        },
        { 
          term: 'مىللەتنىڭ مۇھىم ئەلېمېنتلىرى', 
          definition: 'تىل، دىن، مەدەنىيەت، تارىخ، ئادەت-قائىدە، كىملىك',
          icon: '🧩'
        },
        { 
          term: 'مىللەتنىڭ مەسىلىلىرى', 
          definition: 'زوراۋانلىق، مەدەنىيەت ئىتتىپاقسىزلىقى، تىل يوقىلىشى',
          icon: '⚠️'
        }
      ],
      
      statistics: [
        { label: 'دۇنيادىكى مىللەت سانى', value: '5000+', icon: '🌍' },
        { label: 'خەنزۇ مىللىتى سانى', value: '1.4 مىليارد', icon: '👨‍👩‍👧‍👦' },
        { label: 'ئۇيغۇر مىللىتى سانى', value: '12 مىليون', icon: '🎭' },
        { label: 'ئىنگلىز تىلى سۆزلىگۈچى', value: '1.5 مىليارد', icon: '🗣️' }
      ],
      
      practicalApplication: `ھەر بىر كىشى ئۆز مىللىتىنىڭ مەدەنىيىتىنى ئۆگىنىش ۋە ساقلاش، شۇنداقلا باشقا مىللەتلەرنىڭ مەدەنىيىتىگە ھۆرمەت قىلىشى كېرەك. مىللەتلەر ئارا ھۆرمەت ۋە چۈشىنىش:
1. باشقا مىللەتلەرنىڭ بايراملىرىنى ھۆرمەتلەش
2. باشقا مىللەتلەرنىڭ تىلىنى ئۆگىنىش
3. مەدەنىيەت ئالماشتۇرۇش پائالىيەتلىرىگە قاتنىشىش
4. نەپرەتتىن ساقلانش ۋە تۆلەمچىلىككە قارشى تۇرۇش`,
      
      quizQuestions: [
        {
          question: 'مىللەتنىڭ ئەڭ مۇھىم ئەلېمېنتى قايسى؟',
          options: ['پۇل', 'تىل', 'ئۇرۇش', 'ئۆسۈملۈك'],
          correct: 1,
          explanation: 'تىل مىللەتنىڭ ئاساسىي ئەلېمېنتى بولۇپ، مەدەنىيەت ۋە كىملىكنى ساقلايدۇ.'
        },
        {
          question: 'بىر دۆلەتتە نەچچە مىللەت ياشاشى مۇمكىن؟',
          options: ['1', '2', '3', 'كۆپ'],
          correct: 3,
          explanation: 'بىر دۆلەتتە كۆپ مىللەت ياشاشى مۇمكىن، بۇنى كۆپ مىللەتلىك دۆلەت دەيمىز.'
        }
      ],
      
      resources: [
        { type: 'كىتاب', title: 'مىللەتلەرنىڭ كېلىپ چىقىشى', author: 'ئەنتونى سىمىت' },
        { type: 'ھۈججەت', title: 'مىللەتلەر ئارا مۇناسىۋەتلەر قانۇنى', year: '2020' },
        { type: 'تور بېكەت', title: 'مىللەتلەر ئارا ھۆرمەت پائالىيەتلىرى', url: 'www.respect-culture.org' }
      ]
    }
  },

  // === 2. ئېتنىك گۇرۇپپا ===
  {
    id: 'ethnic-group',
    title: 'ئېتنىك گۇرۇپپا',
    description: 'ئورتاق مەدەنىيەت ۋە ئاتا-بابا كەلپىچىسىغا ئىگە كىشىلەر گۇرۇپپىسى',
    icon: '🧬',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-800',
    keywords: ['ئېتنىك', 'گۇرۇپپا', 'مەدەنىيەت', 'ئاتا-بابا', 'كىملىك'],
    usage: 'مەدەنىيەت ۋە ئاتا-بابا كەلپىچىسىنى ساقلاش',
    difficulty: 'باشلانغۇچ',
    estimatedTime: '12 مىنۇت',
    fullContent: {
      intro: 'ئېتنىك گۇرۇپپا — ئورتاق مەدەنىيەت، تىل، دىن، ئادەت-قائىدە ۋە ئاتا-بابا كەلپىچىسىغا ئىگە بولغان كىشىلەر گۇرۇپپىسى.',
      
      detailedExplanation: `ئېتنىك گۇرۇپپا دېگەنلىك ئورتاق مەدەنىيەت، تىل، دىن، ئادەت-قائىدە ۋە ئاتا-بابا كەلپىچىسىغا ئىگە بولغان كىشىلەر گۇرۇپپىسىدۇر. ئېتنىك گۇرۇپپىلار ئادەتتىكى بىر دۆلەت ئىچىدە ياكى خەلقئارا دەرىجىدە ياشايدۇ.

ئېتنىك گۇرۇپپىنىڭ خۇسۇسىيەتلىرى:
1. ئورتاق ئاتا-بابا كەلپىچىسى
2. ئورتاق مەدەنىيەت ۋە ئەنئەنىلەر
3. ئورتاق تىل ياكى دىئالىكت
4. ئورتاق دىنىي ئېتىقاد
5. ئورتاق جۇغراپىيىلىك كېلىپ چىقىش

ئېتنىك گۇرۇپپا بىلەن مىللەت ئوتتۇرىسىدا پەرق بار: مىللەت كۆپىنچە دۆلەت بىلەن مۇناسىۋەتلىك بولسا، ئېتنىك گۇرۇپپا مەدەنىيەت ۋە ئاتا-بابا كەلپىچىسى بىلەن مۇناسىۋەتلىك.`,
      
      examples: [
        'ئۇيغۇرلار  رايونىدا ياشايدىغان ئېتنىك گۇرۇپپا. ئورتاق ئۇيغۇر تىلى، ئىسلام دىنى، ئالتاي كەلپىچىسى.',
        'كۇردلار — تۈركىيە، ئىراق، سۇرىيە، ئىران قاتارلىق دۆلەتلەردە ياشايدىغان ئېتنىك گۇرۇپپا. كۇرد تىلى، ئىسلام دىنى (كۆپىنچە سۇننىي)، ئۆزىگە خاس بايراملار.',
        'تىبەتلىكلەر — جۇڭگونىڭ تىبەت ئاپتونوم رايونىدا ياشايدىغان ئېتنىك گۇرۇپپا. تىبەت تىلى، بوددىزم دىنى، تىبەت يېزىقى.',
        'بېلۇجىلار — پاكىستان، ئىران، ئافغانىستان قاتارلىق دۆلەتلەردە ياشايدىغان ئېتنىك گۇرۇپپا. بېلۇجى تىلى، ئىسلام دىنى (كۆپىنچە سۇننىي)، بېلۇجى كىيىم-كېچەكى.'
      ],
      
      keyConcepts: [
        { 
          term: 'ئېتنىك گۇرۇپپا نېمە؟', 
          definition: 'ئورتاق مەدەنىيەت، تىل، دىن ۋە ئاتا-بابا كەلپىچىسىغا ئىجە كىشىلەر گۇرۇپپىسى.',
          icon: '🧬'
        },
        { 
          term: 'ئېتنىك گۇرۇپپا نېمە ئۈچۈن مۇھىم؟', 
          definition: 'مەدەنىيەت ۋە ئاتا-بابا كەلپىچىسىنى ساقلاش، كىملىكنى قوغداش ئۈچۈن.',
          icon: '🏺'
        },
        { 
          term: 'ئېتنىك گۇرۇپپا قانداق شەكىللەنگەن؟', 
          definition: 'تارىخىي جەرياندا ئورتاق مەدەنىيەت، تىل، دىن ئارقىلىق شەكىللەنگەن.',
          icon: '🕰️'
        },
        { 
          term: 'ئېتنىك گۇرۇپپىنىڭ مۇھىم ئەلېمېنتلىرى', 
          definition: 'تىل، دىن، مەدەنىيەت، ئاتا-بابا كەلپىچىسى، ئادەت-قائىدە',
          icon: '📋'
        },
        { 
          term: 'ئېتنىك گۇرۇپپىنىڭ مەسىلىلىرى', 
          definition: 'ئايرىمچىلىق، كىملىك يوقىتىلىشى، تىل يوقىلىشى',
          icon: '😔'
        }
      ],
      
      statistics: [
        { label: 'دۇنيادىكى ئېتنىك گۇرۇپپا سانى', value: '5000+', icon: '🌏' },
        { label: 'ئەڭ كۆپ سانلىق ئېتنىك گۇرۇپپا', value: 'خەنزۇلار', icon: '🥇' },
        { label: 'تۈركىيەدىكى ئېتنىك گۇرۇپپا', value: '25+', icon: '🇹🇷' },
        { label: 'ئامېرىكىدىكى ئېتنىك گۇرۇپپا', value: '300+', icon: '🇺🇸' }
      ],
      
      practicalApplication: `ھەر بىر ئېتنىك گۇرۇپپا ئۆز مەدەنىيىتىنى ساقلاش ۋە تەرەققىي قىلدۇرۇش، شۇنداقلا باشقا ئېتنىك گۇرۇپپىلارنىڭ مەدەنىيىتىگە ھۆرمەت قىلىشى كېرەك. پرىكتىك قوللىنىشلار:
1. ئۆز ئېتنىك گۇرۇپپىنىڭ تىلىنى ئۆگىنىش
2. ئۆز ئېتنىك گۇرۇپپىنىڭ بايراملىرىنى ئۆتكۈزۈش
3. باشقا ئېتنىك گۇرۇپپىلارنىڭ بايراملىرىغا ھۆرمەت قىلىش
4. ئېتنىك گۇرۇپپىلار ئارا ئالاقە ۋە ھەمكارلىقنى ئىلگىرى سۈرۈش`,
      
      quizQuestions: [
        {
          question: 'ئېتنىك گۇرۇپپىنىڭ ئەڭ مۇھىم ئەلېمېنتى قايسى؟',
          options: ['پۇل', 'مەدەنىيەت', 'ئۇرۇش', 'ئۆسۈملۈك'],
          correct: 1,
          explanation: 'مەدەنىيەت ئېتنىك گۇرۇپپىنىڭ ئاساسىي ئەلېمېنتى بولۇپ، ئۇنى باشقىلاردىن پەرقلىق قىلىدۇ.'
        },
        {
          question: 'ئېتنىك گۇرۇپپا بىلەن مىللەت ئوتتۇرىسىدا پەرق بارمۇ؟',
          options: ['يوق', 'بار', 'ئاتالماش', 'بىلىنەلمەيدۇ'],
          correct: 1,
          explanation: 'ئېتنىك گۇرۇپپا كۆپىنچە مەدەنىيەت ۋە ئاتا-بابا كەلپىچىسى بىلەن مۇناسىۋەتلىك بولسا، مىللەت دۆلەت بىلەن مۇناسىۋەتلىك.'
        }
      ],
      
      resources: [
        { type: 'كىتاب', title: 'ئېتنىك گۇرۇپپىلارنىڭ سوتسىئولوگىيەسى', author: 'نېتان گلايزەر' },
        { type: 'ھۈججەت', title: 'ئېتنىك گۇرۇپپىلارنىڭ ھوقۇقلىرى دېكلاراتسىيەسى', year: '1992' },
        { type: 'تور بېكەت', title: 'ئېتنىك گۇرۇپپىلار مەركىزى', url: 'www.ethnic-groups.org' }
      ]
    }
  },

  // === 3. قەبىلە ===
  {
    id: 'tribe',
    title: 'قەبىلە',
    description: 'ئورتاق ئاتا-بابا، تارىخ ۋە رەھبەرگە ئىگە بولغان ئىجتىمائىي گۇرۇپپا',
    icon: '🏕️',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    keywords: ['قەبىلە', 'ئاتا-بابا', 'رەھبەر', 'ئىجتىمائىي', 'ئەنئەنە'],
    usage: 'ئىجتىمائىي تەشكىللەش ۋە ئورتاق مەنپەئەتنى قوغداش',
    difficulty: 'ئوتتۇرا',
    estimatedTime: '15 مىنۇت',
    fullContent: {
      intro: 'قەبىلە — ئورتاق ئاتا-بابا، تارىخ، رەھبەر ۋە ئىجتىمائىي تۈزۈمگە ئىجە بولغان ئىجتىمائىي گۇرۇپپا.',
      
      detailedExplanation: `قەبىلە دېگەنلىك ئورتاق ئاتا-بابا، تارىخ، رەھبەر ۋە ئىجتىمائىي تۈزۈمگە ئىجە بولغان ئىجتىمائىي گۇرۇپپىدۇر. قەبىلىلەر ئادەتتە ئىلگىرىكى زامانلاردا كۈچلۈك بولغان بولۇپ، ئۇلارنىڭ ئۆزىگە خاس ئىجتىمائىي تۈزۈمى، قانۇنى ۋە رەھبەرلىكى بولغان.

قەبىلىنىڭ خۇسۇسىيەتلىرى:
1. ئورتاق ئاتا-بابا كەلپىچىسى
2. قەبىلە رەھبىرى (باشلىق ياكى شيخ)
3. قەبىلە قانۇنلىرى ۋە ئەنئەنىلىرى
4. ئورتاق زېمىن ۋە تۇرمۇش رايونى
5. ئورتاق ئىقتىسادىي ۋە ئىجتىمائىي تۈزۈم

قەبىلىلەر ئادەتتە بىر يەردە ياشاپ، ئورتاق ئىشلارنى بىرلىكتە قىلىدۇ. قەبىلە تۈزۈمى كۆپىنچە ئافرىقا، ئوتتۇرا شەرق ۋە ئاسىيادىكى بەزى رايونلاردا داۋام قىلىۋاتىدۇ.`,
      
      examples: [
        'ئەرەب قەبىلىلىرى — ئىلگىرىكى زامانلاردا ئەرەب يېرىم ئارىلىدا كۈچلۈك بولغان قەبىلىلەر. مەسىلەن: قۇرەيش قەبىلىسى (مۇھەممەد ئەلەيھىسسالامنىڭ قەبىلىسى)، بەنۇ ھاشىم، بەنۇ ئۇمەييە.',
        'موڭغۇل قەبىلىلىرى — موڭغۇلىيە ۋە ئوتتۇرا ئاسىيادا كۈچلۈك بولغان قەبىلىلەر. مەسىلەن: بۆرىجىگىن قەبىلىسى (چەنگىزخاننىڭ قەبىلىسى)، خېيەت، نەيمان.',
        'ئافرىقا قەبىلىلىرى — ئافرىقا قىتئەسىدە كۆپلىگەن قەبىلىلەر مەۋجۇت. مەسىلەن: زۇلۇ قەبىلىسى (جەنۇبىي ئافرىقا)، ماساھى قەبىلىسى (كىنىيە، تانزانىيە).',
        'ھىندىستان قەبىلىلىرى — ھىندىستاندا 700 دىن ئارتۇق قەبىلە مەۋجۇت. مەسىلەن: ئادىۋاسى قەبىلىلىرى (يەرلىك خەلق)، گوند قەبىلىسى، بىھار قەبىلىسى.'
      ],
      
      keyConcepts: [
        { 
          term: 'قەبىلە نېمە؟', 
          definition: 'ئورتاق ئاتا-بابا، تارىخ، رەھبەر ۋە ئىجتىمائىي تۈزۈمگە ئىجە بولغان ئىجتىمائىي گۇرۇپپا.',
          icon: '🏕️'
        },
        { 
          term: 'قەبىلە نېمە ئۈچۈن مۇھىم؟', 
          definition: 'ئىجتىمائىي تەشكىللەش، ئورتاق مەنپەئەتنى قوغداش، مەدەنىيەتنى ساقلاش ئۈچۈن.',
          icon: '🤝'
        },
        { 
          term: 'قەبىلە قانداق شەكىللەنگەن؟', 
          definition: 'ئورتاق ئاتا-بابا، تارىخ ۋە ئىجتىمائىي تۈزۈم ئارقىلىق شەكىللەنگەن.',
          icon: '🌳'
        },
        { 
          term: 'قەبىلىنىڭ مۇھىم ئەلېمېنتلىرى', 
          definition: 'ئاتا-بابا، رەھبەر، ئىجتىمائىي تۈزۈم، قانۇن، زېمىن',
          icon: '🗺️'
        },
        { 
          term: 'قەبىلىنىڭ مەسىلىلىرى', 
          definition: 'قەبىلە ئۇرۇشى، زوراۋانلىق، مۇتەخەسسىسلىشىش',
          icon: '⚔️'
        }
      ],
      
      statistics: [
        { label: 'ھىندىستاندا قەبىلە سانى', value: '700+', icon: '🇮🇳' },
        { label: 'ئافرىقادا قەبىلە سانى', value: '3000+', icon: '🌍' },
        { label: 'قەبىلىلەر ئارا ئۇرۇش قۇربانى', value: 'يىلدا 100,000+', icon: '☠️' },
        { label: 'قەبىلىلەر ئىقتىسادىي تۆھپە', value: 'دۇنيا GDP نىڭ 5%', icon: '💰' }
      ],
      
      practicalApplication: `قەبىلىلەر ئۆز ئىجتىمائىي تۈزۈمى ۋە مەدەنىيىتىنى ساقلاش، شۇنداقلا باشقا قەبىلىلەر بىلەن ھەمكارلىق قىلىشى كېرەك. پرىكتىك قوللىنىشلار:
1. قەبىلە ئەنئەنىلىرىنى ساقلاش ۋە تارقىتىش
2. قەبىلە ئىچىدىكى ئىجتىمائىي ھەمكارلىقنى كۈچەيتىش
3. قەبىلە ئارا تىنچلىق ۋە ھەمكارلىقنى ئىلگىرى سۈرۈش
4. قەبىلە قانۇنلىرىنى مودېرنلىشىش جەريانىغا ماسلاشتۇرۇش`,
      
      quizQuestions: [
        {
          question: 'قەبىلىنىڭ ئاساسىي خۇسۇسىيىتى قايسى؟',
          options: ['پۇل', 'ئاتا-بابا كەلپىچىسى', 'ئۇرۇش', 'ئۆسۈملۈك'],
          correct: 1,
          explanation: 'قەبىلىنىڭ ئاساسىي خۇسۇسىيىتى ئورتاق ئاتا-بابا كەلپىچىسى بولۇپ، بۇ قەبىلىنىڭ بىرلىكىنى بەلگىلەيدۇ.'
        },
        {
          question: 'قەبىلە تۈزۈمى كەلگۈسىدە داۋام قىلالامدۇ؟',
          options: ['ھەرگىز', 'ئۇزۇن مۇددەت', 'مۇۋەققەت', 'بىلىنەلمەيدۇ'],
          correct: 2,
          explanation: 'قەبىلە تۈزۈمى مودېرنلىشىش جەريانىدا مۇۋەققەت قىلىشى مۇمكىن، ئەمما ئۇنىڭ بەزى ئەنئەنىلىرى ۋە قىممەت قاراشلىرى داۋام قىلالايدۇ.'
        }
      ],
      
      resources: [
        { type: 'كىتاب', title: 'قەبىلىلەرنىڭ ئانتروپولوگىيەسى', author: 'ئېلزابېت كۆلبرېت' },
        { type: 'ھۈججەت', title: 'قەبىلىلەرنىڭ ھوقۇقلىرى خەلقئارا قانۇنى', year: '1989' },
        { type: 'تور بېكەت', title: 'قەبىلىلەر مەركىزى', url: 'www.tribes-world.org' }
      ]
    }
  },

  // === 4. ئىندىجىنىس خەلق ===
  {
    id: 'indigenous',
    title: 'ئىندىجىنىس خەلق',
    description: 'بىر رايونغا ئەڭ ئاۋۋال كەلگەن ۋە ئۇ يەردە ئۇزۇن مۇددەت ياشاپ كەلگەن خەلق',
    icon: '🌿',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-800',
    keywords: ['ئىندىجىنىس', 'يەرلىك', 'مەدەنىيەت', 'ھوقۇق', 'ئەنئەنە'],
    usage: 'يەرلىك خەلقنىڭ مەدەنىيىتى ۋە ھوقۇقىنى قوغداش',
    difficulty: 'ئوتتۇرا',
    estimatedTime: '18 مىنۇت',
    fullContent: {
      intro: 'ئىندىجىنىس خەلق — بىر رايونغا ئەڭ ئاۋۋال كەلگەن ۋە ئۇ يەردە ئۇزۇن مۇددەت ياشاپ كەلگەن، ئۆزىگە خاس مەدەنىيەت، تىل ۋە ئەنئەنىلەرگە ئىجە بولغان خەلق.',
      
      detailedExplanation: `ئىندىجىنىس خەلق دېگەنلىك بىر رايونغا ئەڭ ئاۋۋال كەلگەن ۋە ئۇ يەردە ئۇزۇن مۇددەت ياشاپ كەلگەن خەلقتۇر. ئىندىجىنىس خەلق ئادەتتە ئۆزىگە خاس مەدەنىيەت، تىل، دىن، ئادەت-قائىدە ۋە ئەنئەنىلەرگە ئىجە بولۇپ، ئۇلارنىڭ مەدەنىيىتى ۋە ھوقۇقىنى قوغداش خەلقئارالىق دەرىجىدە مۇھىم.

ئىندىجىنىس خەلقنىڭ خۇسۇسىيەتلىرى:
1. يەرلىك رايونغا ئاۋۋال كەلگەن
2. ئۆزىگە خاس تىل ۋە مەدەنىيەتكە ئىجە
3. زېمىن بىلەن مەدەنىي ۋە روھىي باغلىنىش
4. مۇستەملىكە ۋە زوراۋانلىققا دۇچ كەلگەن
5. ئۆز كىملىكىنى ساقلاش ئۇرۇنۇشى

خەلقئارا بىرلەشمە تەشكىلاتى ئىندىجىنىس خەلقنىڭ ھوقۇقلىرىنى قوغداش ئۈچۈن بىر قانچە كېلىشىملەرنى قوبۇل قىلغان.`,
      
      examples: [
        'ئامېرىكا يەرلىك خەلقلىرى (ئىندىئانلار) — ئامېرىكا قىتئەسىگە ئەڭ ئاۋۋال كەلگەن خەلق. 500 دىن ئارتۇق قەبىلە، 170 دىن ئارتۇق تىل. مەسىلەن: ناۋاخو قەبىلىسى، شېيېن قەبىلىسى، سىۋۇ قەبىلىسى.',
        'ئاۋسترالىيە يەرلىك خەلقلىرى (ئابورىگىنلار) — ئاۋسترالىيەگە ئەڭ ئاۋۋال كەلگەن خەلق. 250 دىن ئارتۇق تىل گۇرۇپپىسى، 50,000 يىلدىن ئارتۇق تارىخ.',
        'كانادا يەرلىك خەلقلىرى — كاناداغا ئەڭ ئاۋۋال كەلگەن خەلق. ئۈچ تۈرگە بۆلۈنىدۇ: بىرىنچى نەسىل، ئىنۇئىت، مېتىس.',
        'يېڭى زېلاندىيە يەرلىك خەلقلىرى (ماۋرىلار) — يېڭى زېلاندىيەگە ئەڭ ئاۋۋال كەلگەن خەلق. ماۋرى تىلى، ماۋرى مەدەنىيىتى، ھاكا رەقىسى.'
      ],
      
      keyConcepts: [
        { 
          term: 'ئىندىجىنىس خەلق نېمە؟', 
          definition: 'بىر رايونغا ئەڭ ئاۋۋال كەلگەن ۋە ئۇ يەردە ئۇزۇن مۇددەت ياشاپ كەلگەن خەلق.',
          icon: '🌿'
        },
        { 
          term: 'ئىندىجىنىس خەلق نېمە ئۈچۈن مۇھىم؟', 
          definition: 'يەرلىك خەلقنىڭ مەدەنىيىتى ۋە ھوقۇقىنى قوغداش، ئۇلارنىڭ كىملىكىنى ساقلاش ئۈچۈن.',
          icon: '⚖️'
        },
        { 
          term: 'ئىندىجىنىس خەلق قانداق شەكىللەنگەن؟', 
          definition: 'ئۇزۇن تارىخىي جەرياندا بىر رايوندا ياشاپ، ئۆزىگە خاس مەدەنىيەت شەكىللەندۈرگەن.',
          icon: '🏞️'
        },
        { 
          term: 'ئىندىجىنىس خەلقنىڭ مۇھىم ئەلېمېنتلىرى', 
          definition: 'يەرلىك مەدەنىيەت، تىل، ئەنئەنە، زېمىن باغلىنىشى، ھوقۇق',
          icon: '📜'
        },
        { 
          term: 'ئىندىجىنىس خەلقنىڭ مەسىلىلىرى', 
          definition: 'زېمىن ئالىش، مەدەنىيەت يوقىلىشى، تىل يوقىلىشى، ئىقتىسادىي كەمسىتىلىش',
          icon: '😢'
        }
      ],
      
      statistics: [
        { label: 'دۇنيادىكى ئىندىجىنىس خەلق سانى', value: '476 مىليون', icon: '👥' },
        { label: 'ئىندىجىنىس تىللار سانى', value: '4000+', icon: '🗣️' },
        { label: 'ئىندىجىنىس خەلق يوقىلىۋاتقان تىللار', value: 'ھەر 2 ھەپتە بىر', icon: '⏳' },
        { label: 'ئىندىجىنىس خەلق دۇنيا نوپۇسىنىڭ', value: '6%', icon: '📊' }
      ],
      
      practicalApplication: `ئىندىجىنىس خەلقنىڭ مەدەنىيىتى ۋە ھوقۇقىنى قوغداش، ئۇلارنىڭ تىلى ۋە ئەنئەنىلىرىنى ساقلاش، شۇنداقلا ئۇلارغا ھۆرمەت قىلىش كېرەك. پرىكتىك قوللىنىشلار:
1. ئىندىجىنىس خەلقنىڭ زېمىن ھوقۇقىنى ھۆرمەتلەش
2. ئىندىجىنىس تىللارنى ئۆگىنىش ۋە قوللاش
3. ئىندىجىنىس مەدەنىيىتىنى ئۆگىنىش ۋە ھۆرمەتلەش
4. ئىندىجىنىس خەلقنىڭ سىياسىي ۋە ئىقتىسادىي ھوقۇقىنى قوللاش`,
      
      quizQuestions: [
        {
          question: 'ئىندىجىنىس خەلقنىڭ ئەڭ مۇھىم خۇسۇسىيىتى قايسى؟',
          options: ['پۇل', 'يەرلىك رايونغا ئاۋۋال كېلىش', 'ئۇرۇش', 'ئۆسۈملۈك'],
          correct: 1,
          explanation: 'ئىندىجىنىس خەلقنىڭ ئاساسىي خۇسۇسىيىتى بىر رايونغا ئەڭ ئاۋۋال كەلگەن ۋە ئۇ يەردە ئۇزۇن مۇددەت ياشاپ كەلگەنلىكى.'
        },
        {
          question: 'ئىندىجىنىس خەلقنىڭ تىللىرى قانداق ھالەتتە؟',
          options: ['كۈچىيىۋاتىدۇ', 'يوقىلىۋاتىدۇ', 'ئۆزگەرمەيدۇ', 'بىلىنەلمەيدۇ'],
          correct: 1,
          explanation: 'ئىندىجىنىس خەلقنىڭ تىللىرىنىڭ 40% ئېتى بار، ھەر 2 ھەپتە بىر ئىندىجىنىس تىل يوقىلىپ بولدى.'
        }
      ],
      
      resources: [
        { type: 'كىتاب', title: 'ئىندىجىنىس خەلقنىڭ ھوقۇقلىرى', author: 'جەيمز ئانايا' },
        { type: 'ھۈججەت', title: 'ئىندىجىنىس خەلقنىڭ ھوقۇقلىرى دېكلاراتسىيەسى', year: '2007' },
        { type: 'تور بېكەت', title: 'ئىندىجىنىس خەلق مەركىزى', url: 'www.indigenous-peoples.org' }
      ]
    }
  },

  // === 5. مەدەنىيەت ===
  {
    id: 'culture',
    title: 'مەدەنىيەت',
    description: 'بىر مىللەت ياكى جامائەتنىڭ ئادەت-قائىدىسى، دىنى، تىلى، سەنئىتى ۋە تۇرمۇش ئۇسۇلى',
    icon: '🎭',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    keywords: ['مەدەنىيەت', 'ئادەت', 'دىن', 'سەنئەت', 'تىل'],
    usage: 'مىللەتلەرنىڭ مەدەنىيەت ئالماشىشى ۋە چۈشىنىشى',
    difficulty: 'باشلانغۇچ',
    estimatedTime: '20 مىنۇت',
    fullContent: {
      intro: 'مەدەنىيەت — بىر مىللەت ياكى جامائەتنىڭ ئادەت-قائىدىسى، دىنى، تىلى، سەنئىتى، ئەخلاقى ۋە تۇرمۇش ئۇسۇلىنى ئۆز ئىچىگە ئالىدۇ.',
      
      detailedExplanation: `مەدەنىيەت دېگەنلىك بىر مىللەت ياكى جامائەتنىڭ ئادەت-قائىدىسى، دىنى، تىلى، سەنئىتى، ئەخلاقى ۋە تۇرمۇش ئۇسۇلىنى ئۆز ئىچىگە ئالىدۇ. مەدەنىيەت ئادەتتىكى ئۇزۇن تارىخىي جەرياندا شەكىللەنگەن بولۇپ، ئىنسانلارنىڭ تۇيغۇسى، قىممەت قاراشلىرى ۋە ھايات ئۇسۇلىنى ئەكس ئەتتۈرىدۇ.

مەدەنىيەتنىڭ تەركىبىي قىسىملىرى:
1. ماددىي مەدەنىيەت: بىنالار، كىيىم-كېچەك، ئەسۋابلار، تېخنىكا
2. مەنىۋى مەدەنىيەت: دىن، پەلسەپە، سەنئەت، ئەدەبىيات
3. ئىجتىمائىي مەدەنىيەت: ئائىلە تۈزۈمى، تەربىيە، سىياسەت
4. تىل ۋە ئالاقە: تىل، يېزىق، ئىپادىلەش ئۇسۇللىرى

مەدەنىيەت ئالماشىشى دۇنيا تىنچلىقى ۋە چۈشىنىشى ئۈچۈن مۇھىم. مەدەنىيەتلەر ئارا چۈشىنىش ۋە ھۆرمەت خەلقئارالىق مۇناسىۋەتلەرنى ياخشىلايدۇ.`,
      
      examples: [
        'ئۇيغۇر مەدەنىيىتى — موقام، ناخشا-ئۇسۇل، بېسىم سەنئىتى، ئۇيغۇر تىلى، نەۋرۇز بايرىمى، ئۇيغۇر تاماقلىرى (پۆلۈ، لەڭمەن)، دوپا كىيىمى.',
        'خەنزۇ مەدەنىيىتى — كونا جۇڭگو مەدەنىيىتى، كونفۇچىيچىلىق، كالىگرافىيە، رەسساملىق، چىن بايرىمى، جۇڭگو خەنزۇ تىلى، چايلەت ئەنئەنىسى.',
        'ئەرەب مەدەنىيىتى — ئىسلام دىنى، ئەرەب تىلى، ئەرەب يېزىقى، ئەرەب مۇزىكىسى، ئەرەب گېئومېتىرىيەلىك نەقىشى، رامىزان بايرىمى، بۇرگۇت تاماقلىرى.',
        'ھىندى مەدەنىيىتى — ھىندى دىنى، يوقا، ھىندى تىلى، ھىندى سەنئىتى، ھولى بايرىمى، دىۋالى بايرىمى، ھىندى تاماقلىرى (كۇرى، بىرىيانى).'
      ],
      
      keyConcepts: [
        { 
          term: 'مەدەنىيەت نېمە؟', 
          definition: 'بىر مىللەت ياكى جامائەتنىڭ ئادەت-قائىدىسى، دىنى، تىلى، سەنئىتى ۋە تۇرمۇش ئۇسۇلى.',
          icon: '🎭'
        },
        { 
          term: 'مەدەنىيەت نېمە ئۈچۈن مۇھىم؟', 
          definition: 'مىللەتلەرنىڭ كىملىكىنى ساقلاش، مەدەنىيەت ئالماشىشى ۋە چۈشىنىشىنى ئاشۇرۇش ئۈچۈن.',
          icon: '🌍'
        },
        { 
          term: 'مەدەنىيەت قانداق شەكىللەنگەن؟', 
          definition: 'تارىخىي جەرياندا ئادەت-قائىدە، دىن، تىل، سەنئەت ئارقىلىق شەكىللەنگەن.',
          icon: '📚'
        },
        { 
          term: 'مەدەنىيەتنىڭ مۇھىم ئەلېمېنتلىرى', 
          definition: 'تىل، دىن، سەنئەت، ئادەت-قائىدە، ئەخلاق، تۇرمۇش ئۇسۇلى',
          icon: '🧩'
        },
        { 
          term: 'مەدەنىيەتنىڭ مەسىلىلىرى', 
          definition: 'مەدەنىيەت ئىتتىپاقسىزلىقى، مەدەنىيەت يوقىلىشى، مەدەنىيەت زوراۋانلىقى',
          icon: '⚡'
        }
      ],
      
      statistics: [
        { label: 'دۇنيادىكى مەدەنىيەت سانى', value: '5000+', icon: '🌐' },
        { label: 'مەدەنىيەت ساقلىغۇچى تەشكىلات', value: '10,000+', icon: '🏛️' },
        { label: 'يۇنىسېكو مەدەنىيەت مىراسلىرى', value: '1154', icon: '🏆' },
        { label: 'مەدەنىيەت سانائەتى بازارى', value: '2.25 تريليون دوللار', icon: '💰' }
      ],
      
      practicalApplication: `ھەر بىر كىشى ئۆز مەدەنىيىتىنى ئۆگىنىش ۋە ساقلاش، شۇنداقلا باشقا مەدەنىيەتلەرنى چۈشىنىش ۋە ھۆرمەت قىلىشى كېرەك. پرىكتىك قوللىنىشلار:
1. ئۆز مەدەنىيىتىنىڭ تىلى، دىنى، ئەنئەنىلىرىنى ئۆگىنىش
2. باشقا مەدەنىيەتلەرنىڭ بايراملىرىنى ھۆرمەتلەش ۋە قاتنىشىش
3. مەدەنىيەت ئالماشتۇرۇش پائالىيەتلىرىگە قاتنىشىش
4. مەدەنىيەت مىراسلىرىنى قوغداش ۋە تارقىتىش`,
      
      quizQuestions: [
        {
          question: 'مەدەنىيەتنىڭ ئاساسىي ئەلېمېنتى قايسى؟',
          options: ['پۇل', 'تىل', 'ئۇرۇش', 'ئۆسۈملۈك'],
          correct: 1,
          explanation: 'تىل مەدەنىيەتنىڭ ئاساسىي ئەلېمېنتى بولۇپ، مەدەنىيەتنىڭ ساقلانشى ۋە تارقىلىشى ئۈچۈن مۇھىم.'
        },
        {
          question: 'مەدەنىيەت ئالماشتۇرۇش نېمە ئۈچۈن مۇھىم؟',
          options: ['پۇل قازىنىش', 'دۇنيا تىنچلىقى', 'ئۇرۇش', 'ئۆسۈملۈك'],
          correct: 1,
          explanation: 'مەدەنىيەت ئالماشتۇرۇش خەلقئارالىق چۈشىنىش ۋە تىنچلىقنى ئىلگىرى سۈرۈش ئۈچۈن مۇھىم.'
        }
      ],
      
      resources: [
        { type: 'كىتاب', title: 'مەدەنىيەتنىڭ ئاساسىي ئەلېمېنتلىرى', author: 'ئېدوارد تەيلور' },
        { type: 'ھۈججەت', title: 'مەدەنىيەت مىراسلىرىنى قوغداش خەلقئارا كېلىشىمى', year: '1972' },
        { type: 'تور بېكەت', title: 'يۇنىسېكو مەدەنىيەت بۆلۈمى', url: 'www.unesco.org/culture' }
      ]
    }
  }
];

const NationModule = () => {
  const [activeLesson, setActiveLesson] = useState(null);
  const [savedLessons, setSavedLessons] = useState(() => {
    const saved = localStorage.getItem('nation-savedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [completedLessons, setCompletedLessons] = useState(() => {
    const completed = localStorage.getItem('nation-completedLessons');
    return completed ? JSON.parse(completed) : [];
  });
  const [quizAnswers, setQuizAnswers] = useState({});
  const [studyTime, setStudyTime] = useState(0);
  const [viewMode, setViewMode] = useState('grid');

  // ۋاقىت ھېسابلاش
  useEffect(() => {
    if (activeLesson) {
      const timer = setInterval(() => {
        setStudyTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeLesson]);

  const toggleSaveLesson = (lessonId) => {
    let updated = [];
    if (savedLessons.includes(lessonId)) {
      updated = savedLessons.filter(id => id !== lessonId);
    } else {
      updated = [...savedLessons, lessonId];
    }
    setSavedLessons(updated);
    localStorage.setItem('nation-savedLessons', JSON.stringify(updated));
  };

  const markAsCompleted = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      const updated = [...completedLessons, lessonId];
      setCompletedLessons(updated);
      localStorage.setItem('nation-completedLessons', JSON.stringify(updated));
    }
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const calculateQuizScore = () => {
    if (!activeLesson?.fullContent?.quizQuestions) return 0;
    
    let score = 0;
    activeLesson.fullContent.quizQuestions.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        score++;
      }
    });
    return score;
  };

  const getProgress = () => {
    return Math.round((completedLessons.length / enhancedLessons.length) * 100);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} مىن ${secs} سېك`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* باش تونۇشتۇرۇش */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8 rounded-3xl shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🌍 مىللەت ۋە مەدەنىيەت ئۆگىنىش مەركىزى</h1>
          <p className="text-xl opacity-90 mb-6">دۇنيا مىللەتلىرىنى چۈشىنىڭ، مەدەنىيەت زەنگىرىنى ئاشكارىلاڭ</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">👥 مىللەت</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🧬 ئېتنىك گۇرۇپپا</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🏕️ قەبىلە</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🌿 ئىندىجىنىس</div>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">🎭 مەدەنىيەت</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>ئۆگىنىش ئىلگىرىلىشى: {getProgress()}%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>بەلگە قىلىنغان: {savedLessons.length} دەرس</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span>تاماملانغان: {completedLessons.length}/{enhancedLessons.length}</span>
            </div>
            {activeLesson && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>ئۆگىنىش ۋاقتى: {formatTime(studyTime)}</span>
              </div>
            )}
          </div>
        </div>

        {/* ئىلگىرىلەش ستاتىستىكىسى */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border-2 border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">📊 ئۆگىنىش ئىلگىرىلىشىڭىز</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                🔲
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                📋
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">ئومۇمىي ئىلگىرىلىش</span>
              <span className="font-medium">{getProgress()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>

        {!activeLesson ? (
          // دەرسلەر تىزىملىكى
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">📚 مىللەت ۋە مەدەنىيەت دەرسلىرى</h3>
              <div className="text-sm text-gray-600">
                {enhancedLessons.length} دەرس
              </div>
            </div>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enhancedLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    onClick={() => setActiveLesson(lesson)}
                    className={`${lesson.bgColor} p-6 rounded-2xl border-2 ${lesson.borderColor} cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{lesson.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{lesson.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full ${lesson.textColor} ${lesson.bgColor.replace('bg-gradient-to-br', 'bg')}`}>
                              {lesson.difficulty}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock size={12} /> {lesson.estimatedTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveLesson(lesson.id);
                        }}
                        className="text-gray-400 hover:text-yellow-500"
                      >
                        <Star
                          size={20}
                          className={savedLessons.includes(lesson.id) ? 'fill-yellow-400 text-yellow-400' : ''}
                        />
                      </button>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{lesson.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {lesson.keywords.slice(0, 3).map((keyword, i) => (
                        <span key={i} className="text-xs bg-white/50 px-2 py-1 rounded">
                          #{keyword}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {completedLessons.includes(lesson.id) ? (
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            ✓
                          </div>
                          <span>تاماملاندى</span>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">
                          ئۆگىنىلمىدى
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-blue-600 text-sm">
                        <span>ئۆگىنىش</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List view
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-gray-700">دەرس</th>
                      <th className="text-left p-4 text-gray-700">خىل</th>
                      <th className="text-left p-4 text-gray-700">ۋاقىت</th>
                      <th className="text-left p-4 text-gray-700">ھالەت</th>
                      <th className="text-left p-4 text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {enhancedLessons.map((lesson) => (
                      <tr 
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson)}
                        className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{lesson.icon}</span>
                            <div>
                              <div className="font-medium text-gray-800">{lesson.title}</div>
                              <div className="text-sm text-gray-600">{lesson.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${lesson.textColor} ${lesson.bgColor.replace('bg-gradient-to-br', 'bg')}`}>
                            {lesson.difficulty}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock size={14} />
                            <span>{lesson.estimatedTime}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          {completedLessons.includes(lesson.id) ? (
                            <div className="flex items-center gap-2 text-green-600">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                ✓
                              </div>
                              <span className="text-sm">تاماملاندى</span>
                            </div>
                          ) : (
                            <div className="text-gray-400 text-sm">ئۆگىنىلمىدى</div>
                          )}
                        </td>
                        <td className="p-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSaveLesson(lesson.id);
                            }}
                            className="text-gray-400 hover:text-yellow-500"
                          >
                            <Star
                              size={18}
                              className={savedLessons.includes(lesson.id) ? 'fill-yellow-400 text-yellow-400' : ''}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          // دەرس تەپسىلاتى
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-200">
            {/* دەرس باشلانغۇچى */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className={`text-4xl p-4 rounded-2xl bg-gradient-to-r ${activeLesson.color} text-white`}>
                  {activeLesson.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{activeLesson.title}</h2>
                  <p className="text-gray-600 mt-1">{activeLesson.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Target size={14} /> {activeLesson.difficulty}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock size={14} /> {activeLesson.estimatedTime}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <BookOpen size={14} /> {activeLesson.usage}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleSaveLesson(activeLesson.id)}
                  className={`p-2 rounded-full ${savedLessons.includes(activeLesson.id) ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400 hover:text-yellow-500'}`}
                >
                  <Star size={20} className={savedLessons.includes(activeLesson.id) ? 'fill-yellow-400' : ''} />
                </button>
                <button
                  onClick={() => setActiveLesson(null)}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {activeLesson.keywords.map((keyword, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* مەزمۇن بۆلەكلىرى */}
            <div className="space-y-8">
              {/* كىرىش سۆز */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-400">
                <h3 className="font-bold text-blue-800 text-xl mb-3 flex items-center gap-2">
                  <span>🎯</span> كىرىش سۆز
                </h3>
                <p className="text-blue-700 text-lg">{activeLesson.fullContent.intro}</p>
              </div>

              {/* تەپسىلىي چۈشەندۈرۈش */}
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
                <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                  <span>📖</span> تەپسىلىي چۈشەندۈرۈش
                </h3>
                <div className="text-gray-700 space-y-4 leading-relaxed">
                  {activeLesson.fullContent.detailedExplanation.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* مىساللار */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-400">
                <h3 className="font-bold text-green-800 text-xl mb-4 flex items-center gap-2">
                  <span>🌍</span> ئەمەلىي مىساللار
                </h3>
                <div className="space-y-4">
                  {activeLesson.fullContent.examples.map((example, i) => (
                    <div key={i} className="bg-white/70 p-4 rounded-xl">
                      <div className="font-bold text-green-700 mb-2">مىسال {i + 1}:</div>
                      <p className="text-green-800">{example}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ئاساسىي تۈشۇنچىلەر */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-purple-400">
                <h3 className="font-bold text-purple-800 text-xl mb-4 flex items-center gap-2">
                  <span>🧩</span> ئاساسىي تۈشۇنچىلەر
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeLesson.fullContent.keyConcepts.map((concept, i) => (
                    <div key={i} className="bg-white/70 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{concept.icon}</span>
                        <div className="font-bold text-purple-700">{concept.term}</div>
                      </div>
                      <p className="text-purple-800 text-sm">{concept.definition}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ستاتىستىكا */}
              {activeLesson.fullContent.statistics && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-l-4 border-amber-400">
                  <h3 className="font-bold text-amber-800 text-xl mb-4 flex items-center gap-2">
                    <span>📊</span> قىزىقارلىق ستاتىستىكا
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activeLesson.fullContent.statistics.map((stat, i) => (
                      <div key={i} className="bg-white/70 p-4 rounded-xl text-center">
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="font-bold text-amber-800 text-lg mb-1">{stat.value}</div>
                        <div className="text-amber-700 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ئەمەلىي قوللىنىش */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-teal-400">
                <h3 className="font-bold text-teal-800 text-xl mb-4 flex items-center gap-2">
                  <span>💡</span> ئەمەلىي قوللىنىش
                </h3>
                <div className="text-teal-700 space-y-4">
                  {activeLesson.fullContent.practicalApplication.split('\n').map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="bg-teal-200 text-teal-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-1 flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* تېست سۇئاللىرى */}
              {activeLesson.fullContent.quizQuestions && (
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-2xl border-l-4 border-red-400">
                  <h3 className="font-bold text-red-800 text-xl mb-4 flex items-center gap-2">
                    <span>🎯</span> بىلىمىڭىزنى سىناڭ
                  </h3>
                  <div className="space-y-6">
                    {activeLesson.fullContent.quizQuestions.map((question, qIndex) => (
                      <div key={qIndex} className="bg-white/70 p-5 rounded-xl">
                        <div className="font-bold text-gray-800 mb-4">
                          {qIndex + 1}. {question.question}
                        </div>
                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => (
                            <button
                              key={oIndex}
                              onClick={() => handleQuizAnswer(qIndex, oIndex)}
                              className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                                quizAnswers[qIndex] === oIndex
                                  ? oIndex === question.correct
                                    ? 'border-green-500 bg-green-50 text-green-800'
                                    : 'border-red-500 bg-red-50 text-red-800'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  quizAnswers[qIndex] === oIndex
                                    ? oIndex === question.correct
                                      ? 'bg-green-500 text-white'
                                      : 'bg-red-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                                }`}>
                                  {String.fromCharCode(65 + oIndex)}
                                </div>
                                <span>{option}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                        {quizAnswers[qIndex] !== undefined && (
                          <div className={`mt-3 p-3 rounded-lg ${
                            quizAnswers[qIndex] === question.correct
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : 'bg-red-50 text-red-700 border border-red-200'
                          }`}>
                            <span className="font-bold">چۈشەندۈرۈش: </span>
                            {question.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {Object.keys(quizAnswers).length === activeLesson.fullContent.quizQuestions.length && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl text-center">
                        <div className="text-3xl mb-3">🎉</div>
                        <div className="font-bold text-blue-800 text-xl mb-2">
                          تېست نەتىجىڭىز: {calculateQuizScore()}/{activeLesson.fullContent.quizQuestions.length}
                        </div>
                        <div className="text-blue-600">
                          نەتىجە: {(calculateQuizScore() / activeLesson.fullContent.quizQuestions.length * 100).toFixed(0)}%
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* قوشۇمچە مەنبەلەر */}
              {activeLesson.fullContent.resources && (
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border-l-4 border-gray-400">
                  <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                    <span>📚</span> قوشۇمچە مەنبەلەر
                  </h3>
                  <div className="space-y-3">
                    {activeLesson.fullContent.resources.map((resource, i) => (
                      <div key={i} className="bg-white/70 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm px-2 py-1 bg-gray-200 rounded">{resource.type}</span>
                          <span className="font-medium text-gray-800">{resource.title}</span>
                        </div>
                        {resource.author && (
                          <div className="text-sm text-gray-600">ئاپتور: {resource.author}</div>
                        )}
                        {resource.year && (
                          <div className="text-sm text-gray-600">يىلى: {resource.year}</div>
                        )}
                        {resource.url && (
                          <div className="text-sm text-blue-600">تور بېكەت: {resource.url}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* پۈتۈم قىسمى */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                <button
                  onClick={() => {
                    setActiveLesson(null);
                    setQuizAnswers({});
                    setStudyTime(0);
                  }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  ← دەرسلەرگە قايتىش
                </button>
                
                <div className="flex gap-3">
                  {!completedLessons.includes(activeLesson.id) && (
                    <button
                      onClick={() => {
                        markAsCompleted(activeLesson.id);
                        setActiveLesson(null);
                        setQuizAnswers({});
                        setStudyTime(0);
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 shadow-lg flex items-center gap-2"
                    >
                      <Award size={18} />
                      دەرسنى تاماملاش
                    </button>
                  )}
                  
                  {completedLessons.includes(activeLesson.id) && (
                    <button
                      onClick={() => {
                        setActiveLesson(null);
                        setQuizAnswers({});
                        setStudyTime(0);
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 shadow-lg"
                    >
                      كېيىنكى دەرس
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* سېغىنگە ساقلانغان دەرسلەر */}
        {savedLessons.length > 0 && !activeLesson && (
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border-2 border-yellow-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="text-yellow-500" size={20} />
              سېغىنگە ساقلانغان دەرسلەر ({savedLessons.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {savedLessons.map((lessonId) => {
                const lesson = enhancedLessons.find(l => l.id === lessonId);
                return lesson ? (
                  <div
                    key={lessonId}
                    onClick={() => setActiveLesson(lesson)}
                    className={`${lesson.bgColor} p-3 rounded-xl border ${lesson.borderColor} cursor-pointer hover:shadow-md transition-shadow flex items-center gap-2`}
                  >
                    <span className="text-xl">{lesson.icon}</span>
                    <div>
                      <div className="font-medium text-sm text-gray-800">{lesson.title}</div>
                      <div className="text-xs text-gray-600">{lesson.difficulty}</div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* پەقەت 5 دەرس مەزمۇنى كۆرسىتىلدى، قالغانلىرى ئوخشاش فورماتتا تەييارلىنىشى مۇمكىن */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>مىللەت ۋە مەدەنىيەت ئۆگىنىش مەركىزى - ھەممە ئادەم ئۆز مەدەنىيىتىنى ھۆرمەتلەش ۋە باشقىلارنىڭ مەدەنىيىتىنى چۈشىنىش كېرەك 🌍</p>
        </div>
      </div>
    </div>
  );
};

export default NationModule;