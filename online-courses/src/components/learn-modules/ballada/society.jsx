import React, { useState, useEffect } from 'react';

const SocietyComponent = () => {
  const [communityPoints, setCommunityPoints] = useState(150);
  const [selectedRole, setSelectedRole] = useState('doctor');
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [familyRole, setFamilyRole] = useState('child');
  const [currentScenario, setCurrentScenario] = useState(0);
  const [teamworkProgress, setTeamworkProgress] = useState(0);
  const [completedDeeds, setCompletedDeeds] = useState([]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [dailyChallenge, setDailyChallenge] = useState('');
  const [showScenarioModal, setShowScenarioModal] = useState(false);
  const [currentTradition, setCurrentTradition] = useState(0);

  // ئىكونلار ئورنىغا emoji لارنى ئىشلىتىمەن
  const icons = {
    userGroup: '👥',
    heart: '❤️',
    handRaised: '✋',
    home: '🏠',
    academicCap: '🎓',
    buildingOffice: '🏢',
    scale: '⚖️',
    star: '⭐',
    trophy: '🏆',
    sparkles: '✨',
    chatBubble: '💬',
    shieldCheck: '🛡️',
    clock: '⏰',
    gift: '🎁',
    faceSmile: '😊',
    puzzlePiece: '🧩',
    users: '👨‍👩‍👧‍👦',
    checkCircle: '✅',
    refresh: '🔄',
    speakerWave: '🔊',
    camera: '📷',
    mapPin: '📍',
    xMark: '✕'
  };

  const professions = {
    doctor: { 
      emoji: '👨‍⚕️', 
      title: 'دوختۇر', 
      description: 'كىشىلەرنى ساقلىقىغا كەلتۈرىدۇ',
      tasks: ['ھەستەرنى تەكشۈرۈش', 'دورا بېرىش', 'ئوپېراتسىيە قىلىش', 'ساقلىق تەكشۈرۈش'],
      education: '6 يىل ئۇنۋېرسىتېت',
      workplace: 'دوختۇرخانا',
      skills: ['سەۋرچانلىق', 'ئەستايىدىللىق', 'ياردەمچىلىك'],
      color: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-700'
    },
    teacher: { 
      emoji: '👩‍🏫', 
      title: 'ئوقۇتقۇچى', 
      description: 'بالىلارغا بىلىم ئۆگىتىدۇ',
      tasks: ['دەرس ئۆتۈش', 'ئوقۇتقۇچىلىق قىلىش', 'ئىمتىھان تۈزۈش', 'بالىلارنى يېتەكلەش'],
      education: '4 يىل ئۇنۋېرسىتېت',
      workplace: 'مەكتەپ',
      skills: ['ئىجادچانلىق', 'سەۋرچانلىق', 'تىلغا چۈشىنىش'],
      color: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700'
    },
    farmer: { 
      emoji: '👨‍🌾', 
      title: 'دىھقان', 
      description: 'بىزگە ئوزۇق-تۈلۈك تەييارلايدۇ',
      tasks: ['ئېكىز سۈپۈرۈش', 'ئۆسۈملۈك ئۆستۈرۈش', 'ھايۋان بېقىش', 'مەھسۇلات يىغىش'],
      education: '2 يىل ئامالىيەت',
      workplace: 'ئېتىز',
      skills: ['تەبىئەت سۆيۈش', 'قەتئىيەتچىلىك', 'ھەمكارلىق'],
      color: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700'
    },
    firefighter: { 
      emoji: '👨‍🚒', 
      title: 'ئوت ئۆچۈرگۈچى', 
      description: 'ئوت ئۆچۈرۈپ، كىشىلەرنى قۇتقۇزىدۇ',
      tasks: ['ئوت ئۆچۈرۈش', 'قۇتقۇزۇش', 'بىخەتەرلىك تەكشۈرۈش', 'ئەسلىھە تەمىنلەش'],
      education: '2 يىل ئامالىيەت',
      workplace: 'ئوت ئۆچۈرۈش ئىدارىسى',
      skills: ['قاتتىقلىق', 'تېزلىك', 'ھەمكارلىق'],
      color: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700'
    },
    engineer: { 
      emoji: '👷‍♂️', 
      title: 'ئىنژېنېر', 
      description: 'ئۆيلەر، كۆۋرۈكلەر قۇرىدۇ',
      tasks: ['پىلانلاش', 'قۇرۇلۇش', 'تەكشۈرۈش', 'مۇھاندىسلىك'],
      education: '5 يىل ئۇنۋېرسىتېت',
      workplace: 'قۇرۇلۇش رايونى',
      skills: ['ئەستايىدىللىق', 'پىلانلاش', 'ئىجادچانلىق'],
      color: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700'
    },
    artist: { 
      emoji: '🎨', 
      title: 'رەسسام', 
      description: 'سەنئەت ئەسەرلىرى يارىتىدۇ',
      tasks: ['رەسىم سىزىش', 'ھەيكەل قۇرۇش', 'كۆرگەزمە تەييارلاش', 'ئۆرۈنلەش'],
      education: '4 يىل سەنئەت مەكتەپى',
      workplace: 'ستۇدىيە',
      skills: ['ئىجادچانلىق', 'تەسەۋۋۇر', 'تەپسىلچانلىق'],
      color: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700'
    }
  };

  const emotions = [
  { 
    emoji: '😂', 
    name: 'كۈلكىلىك', 
    color: 'bg-yellow-100', 
    description: 'مەززىلىك ھېكايە ياكى كۈلكىلىك ۋەقە سەۋەبىدىن',
    response: 'كۈلۈپ، باشقىلارغا كۈلدۈرۈڭ',
    tips: ['مەززىلىك ھېكايە سۆزلەڭ', 'كۈلكىلىك رەسىم كۆرۈڭ', 'ئويۇنچۇق ئويناڭ']
  },
  { 
    emoji: '😄', 
    name: 'ھەيران قالارلىق خۇشال', 
    color: 'bg-yellow-200', 
    description: 'ھەيران قالارلىق سوۋغا ياكى ئامراق ھەدىسە سەۋەبىدىن',
    response: 'مەسىرە بىلەن تۇرۇڭ ۋە تەبرىكلەڭ',
    tips: ['بايېت ئېيتىڭ', 'يېڭى ئويۇنچۇق ئويناڭ', 'دوستلىرىڭىزنى چاقىرڭ']
  },
  { 
    emoji: '😁', 
    name: 'جازالىق', 
    color: 'bg-yellow-300', 
    description: 'ياخشى پىلان ياكى ئىنتىلما سەۋەبىدىن',
    response: 'مەسىرە بىلەن ئىش قىلىڭ',
    tips: ['ئىشەنچ بىلەن كۈلۈڭ', 'مەقسىتىڭىزنى داۋاملاشتۇرۇڭ', 'مۇۋەپپەقىيەتنى تەبرىكلەڭ']
  },
  { 
    emoji: '😆', 
    name: 'قاقشاش', 
    color: 'bg-orange-50', 
    description: 'كۈلكىلىك ھەرىكەت ياكى مەززىلىك ئويۇن سەۋەبىدىن',
    response: 'قاقشىڭ ۋە ياخشى ۋاق ئۆتكۈزۈڭ',
    tips: ['كۈلۈش ئويۇنى ئويناڭ', 'مەززىلىك تېلېۋىزور كۆرۈڭ', 'ئىجادچان ئويۇن ئويناڭ']
  },
  { 
    emoji: '😍', 
    name: 'سۆيۈش', 
    color: 'bg-red-50', 
    description: 'قىزىقارلىق نەرسە ياكى گۈزەل كۆرۈنۈش سەۋەبىدىن',
    response: 'مۇھەببىتىڭىزنى بىلدۈرۈڭ',
    tips: ['سۆيۈنچىلىك رەسىم سىزىڭ', 'مۇھەببەت توغرىسىدا سۆزلەڭ', 'ياخشىلىق قىلىڭ']
  },
  { 
    emoji: '🥰', 
    name: 'مۇھەببەت', 
    color: 'bg-red-100', 
    description: 'ئائىلە ياكى دوستلار مۇھەببىتى سەۋەبىدىن',
    response: 'مۇھەببىتىڭىزنى ئەركىن بىلدۈرۈڭ',
    tips: ['قۇچاقلىشىڭ', 'مۇھەببەت خەتى يېزىڭ', 'كىچىك سوۋغا تەييارلاڭ']
  },
  { 
    emoji: '😘', 
    name: 'ئۆپۈش', 
    color: 'bg-red-200', 
    description: 'يېقىن دوست ياكى ئائىلە ئەزاسى سەۋەبىدىن',
    response: 'مۇھەببىتىڭىزنى ئىپادىلەڭ',
    tips: ['ئۆپۈڭ', 'سېغىنىش سۆزى سۆزلەڭ', 'يېقىنلىشىڭ']
  },
  { 
    emoji: '😗', 
    name: 'يۇمشاق مۇھەببەت', 
    color: 'bg-pink-50', 
    description: 'يۇمشاق ۋە مۇلايىم ھېسسىيات سەۋەبىدىن',
    response: 'يۇمشاق ھالدا مۇئامىلە قىلىڭ',
    tips: ['سىللىق سۆز سۆزلەڭ', 'ھۆرمەت بىلدۈرۈڭ', 'ئىنچىكە سېغىنىڭ']
  },
  { 
    emoji: '😙', 
    name: 'خۇشالىق بىلەن ئۆپۈش', 
    color: 'bg-pink-100', 
    description: 'ياخشى ۋاقىت ياكى قىزىقارلىق ھادىسە سەۋەبىدىن',
    response: 'خۇشاللىقىڭىزنى ئىپادىلەڭ',
    tips: ['كۈلۈش بىلەن ئۆپۈڭ', 'ياخشى خەۋەر ئورتاقلىشىڭ', 'مۇزىكا ئاڭلاڭ']
  },
  { 
    emoji: '😚', 
    name: 'ھۆرمەت بىلەن ئۆپۈش', 
    color: 'bg-pink-200', 
    description: 'چوڭلارغا ھۆرمەت ياكى ئەخلاقلىق مۇئامىلە سەۋەبىدىن',
    response: 'ھۆرمەت بىلەن مۇئامىلە قىلىڭ',
    tips: ['چوڭلارنى قۇچاقلاڭ', 'ھۆرمەت سۆزى سۆزلەڭ', 'ياردەم بېرىڭ']
  },
  { 
    emoji: '🤗', 
    name: 'قۇچاقلاش', 
    color: 'bg-pink-300', 
    description: 'يېقىنلىشىش ياكى قايغۇنى بۆلۈش سەۋەبىدىن',
    response: 'قۇچاقلاڭ ۋە ياردەم بېرىڭ',
    tips: ['قۇچاقلىشىش ئويۇنى ئويناڭ', 'ياخشى سۆز سۆزلەڭ', 'تېنىڭىزنى قوزغىتىڭ']
  },
  { 
    emoji: '🤩', 
    name: 'ھەيران قالۇش', 
    color: 'bg-orange-100', 
    description: 'ھەيران قالارلىق ئىش ياكى كۆزگە كۆرۈنەرلىك مۇۋەپپەقىيەت سەۋەبىدىن',
    response: 'ھەيران قالۇشىڭىزنى بىلدۈرۈڭ',
    tips: ['ئالاھىدە ۋەقەنى تەبرىكلەڭ', 'سۈرەت تارتىڭ', 'ھېكايە سۆزلەڭ']
  },
  { 
    emoji: '😎', 
    name: 'سەلبىيەت', 
    color: 'bg-blue-50', 
    description: 'مۇۋەپپەقىيەت ياكى ئۆزىگە بولغان ئىشەنچ سەۋەبىدىن',
    response: 'ئۆزىڭىزگە ئىشەنچ بىلەن قاراڭ',
    tips: ['مۇۋەپپەقىيەتلىرىڭىزنى يادلاڭ', 'يېڭى نەرسىلەرنى سىناپ بېقىڭ', 'ئۆزىڭىزنى تەقدىرلەڭ']
  },
  { 
    emoji: '😋', 
    name: 'تەم بىلەش', 
    color: 'bg-yellow-400', 
    description: 'تەملىك تاماق ياكى مەززىلىك نەرسە سەۋەبىدىن',
    response: 'تەمىنى تەقدىرلەڭ ۋە ئورتاقلىشىڭ',
    tips: ['تاماق پىشۇرۇڭ', 'يېڭى تەملىك نەرسىلەرنى تەكشۈرۈڭ', 'تاماق رەسىمى سىزىڭ']
  },
  { 
    emoji: '😛', 
    name: 'مەززىلىك', 
    color: 'bg-yellow-500', 
    description: 'مەززىلىك ھېكايە ياكى كۈلكىلىك ئەھۋال سەۋەبىدىن',
    response: 'مەززىلىك قىلىڭ ۋە كۈلدۈرۈڭ',
    tips: ['مەززىلىك رەسىم سىزىڭ', 'كۈلكىلىك ھېكايە سۆزلەڭ', 'ئويۇن ئويناڭ']
  },
  { 
    emoji: '😜', 
    name: 'جىڭلىق', 
    color: 'bg-yellow-600', 
    description: 'كۈلكىلىك ئويۇن ياكى جىڭلىق ھەرىكەت سەۋەبىدىن',
    response: 'جىڭلىق قىلىڭ ۋە كۈلدۈرۈڭ',
    tips: ['جىڭلىق ئويۇن ئويناڭ', 'مەززىلىك رەسىم كۆرۈڭ', 'كۈلۈش مۇسابىقىسى قىلىڭ']
  },
  { 
    emoji: '😝', 
    name: 'مەززىلىك قاقشاش', 
    color: 'bg-orange-200', 
    description: 'كۈلكىلىك ھادىسە ياكى مەززىلىك ئەھۋال سەۋەبىدىن',
    response: 'قاقشىڭ ۋە ياخشى ۋاق ئۆتكۈزۈڭ',
    tips: ['مەززىلىك تېلېۋىزور پروگراممىسى كۆرۈڭ', 'كۈلۈش ئويۇنى ئويناڭ', 'مەززىلىك رەسىم سىزىڭ']
  },
  { 
    emoji: '🤑', 
    name: 'پۇل سۆيۈش', 
    color: 'bg-green-100', 
    description: 'پۇل تاپقاندا ياكى بايلىق كۆرگەندە',
    response: 'پۇلنى ئەقلىي ئىشلىتىشنى ئويلىنىڭ',
    tips: ['پۇل ئېتىبارغا ئىگە بولۇشنى ئۆگىنىڭ', 'تېجەش پىلانى تۈزۈڭ', 'ياردەم قىلىش توغرىسىدا ئويلىنىڭ']
  },
  { 
    emoji: '🤠', 
    name: 'كاۋبوي', 
    color: 'bg-orange-300', 
    description: 'سەپەر ياكى مەركەپچىلىك ھېسسىياتى',
    response: 'مەركەپچىلىك قىلىڭ ۋە يېڭى نەرسىلەرنى تەكشۈرۈڭ',
    tips: ['سەپەر ھېكايىسى ئوقۇڭ', 'يېڭى يەرلەرنى تەكشۈرۈڭ', 'مەركەپچىلىك ئويۇنى ئويناڭ']
  },
  { 
    emoji: '😢', 
    name: 'غەمگىن', 
    color: 'bg-blue-50', 
    description: 'يوقىتىش ياكى مەغلۇبىيەت سەۋەبىدىن',
    response: 'يىغلىسىڭىز يىغلاڭ، ئانا-ئاتاڭىزغا سۆزلەڭ',
    tips: ['ئائىلەڭىز بىلەن سۆزلەشىڭ', 'ياخشى چۈشەندىڭىز', 'سەپەرگە چىقىڭ']
  },
  { 
    emoji: '😭', 
    name: 'قاتتىق يىغلىش', 
    color: 'bg-blue-100', 
    description: 'چوڭ يوقىتىش ياكى قاتتىق قايغۇ سەۋەبىدىن',
    response: 'يىغلاڭ ۋە ياردەم تەلەپ قىلىڭ',
    tips: ['ئانا-ئاتاڭىزغا ئېيتىڭ', 'مەسلىھەتچى بىلەن سۆزلەشىڭ', 'يىغلىغاندا سۈزۈك سۆز سۆزلەڭ']
  },
  { 
    emoji: '😤', 
    name: 'غەزەپلىنىش', 
    color: 'bg-red-300', 
    description: 'ئادىللىق ياكى ئۆچۈرلۈش سەۋەبىدىن',
    response: 'ئەسكىرىمەڭ، تىنچ ئولتۇرۇپ ئويلىنىڭ',
    tips: ['چوڭقۇر نەپەس ئېلىڭ', 'ئويۇن ئويناڭ', 'ئۆز ئۆيىڭىزدە جىمجىت ئولتۇرۇڭ']
  },
  { 
    emoji: '😡', 
    name: 'ئاچچىقلىق', 
    color: 'bg-red-200', 
    description: 'ئادىللىق ياكى ئۆچۈرلۈش سەۋەبىدىن',
    response: 'تەڭشەڭ ۋە مۇۋاپىق يول ئىزدەڭ',
    tips: ['تەڭشەش ئويۇنى ئويناڭ', 'ھەرىكەت قىلىڭ', 'باشقىلار بىلەن سۆزلەشىڭ']
  },
  { 
    emoji: '🤬', 
    name: 'قاتتىق ئاچچىقلىق', 
    color: 'bg-red-400', 
    description: 'چوڭ ئادىللىق ياكى قاتتىق ئۆچۈرلۈش سەۋەبىدىن',
    response: 'ئەسكىرىمەڭ، بىرەر ئادەم بىلەن سۆزلەشىڭ',
    tips: ['چوڭلارغا ئېيتىڭ', 'تەڭشەش تېخنىكىلىرىنى ئۆگىنىڭ', 'ئويۇن ئارقىلىق تەڭشەڭ']
  },
  { 
    emoji: '🤯', 
    name: 'ھەيران قالۇش', 
    color: 'bg-orange-400', 
    description: 'ئەقلىي جەھەتتىن ھەيران قالارلىق ئىش',
    response: 'ئويلىنىڭ ۋە مەسلىھەت سوراڭ',
    tips: ['مەسلىھەتچى بىلەن سۆزلەشىڭ', 'يازما يېزىڭ', 'باشقىلار بىلەن مۇزاكىرە قىلىڭ']
  },
  { 
    emoji: '🥵', 
    name: 'ئىسسىق', 
    color: 'bg-red-500', 
    description: 'ھارارەت ياكى ئىسسىق ھاۋا سەۋەبىدىن',
    response: 'سۇ ئىچىڭ ۋە سائەتلىك ئولتۇرۇڭ',
    tips: ['سۇ ئىچىڭ', 'سائەتلىك ئولتۇرۇڭ', 'ھاۋا ئالمىشىش']
  },
  { 
    emoji: '🥶', 
    name: 'سوغۇق', 
    color: 'bg-blue-200', 
    description: 'سوغۇق ھاۋا ياكى تۆۋەن ھارارەت سەۋەبىدىن',
    response: 'ئىسسىق كىيىنىڭ ۋە ئىسسىق ئىچىملىكلەر ئىچىڭ',
    tips: ['ئىسسىق كىيىم كىيىڭ', 'ئىسسىق چاي ئىچىڭ', 'ئىسسىق ئۆيدە ئولتۇرۇڭ']
  },
  { 
    emoji: '😱', 
    name: 'قورقۇنچلۇق', 
    color: 'bg-purple-100', 
    description: 'قورقۇنچلۇق ھادىسە ياكى خەتەرلىك ھالەت سەۋەبىدىن',
    response: 'بىخەتەر يەرگە بېرىڭ ۋە ياردەم تەلەپ قىلىڭ',
    tips: ['ئانا-ئاتاڭىزغا ئېيتىڭ', 'بىخەتەر يەردە ئولتۇرۇڭ', 'تەسەللى بېرىدىغان نەرسە ئىزدەڭ']
  },
  { 
    emoji: '😨', 
    name: 'قورقۇش', 
    color: 'bg-purple-200', 
    description: 'خەتەرلىك ھالەت ياكى بىلىنمىگەن نەرسە سەۋەبىدىن',
    response: 'بىخەتەر يەرگە بېرىڭ، ياردەم تەلەپ قىلىڭ',
    tips: ['ئانا-ئاتاڭىزغا ئېيتىڭ', 'بىخەتەر يەردە ئولتۇرۇڭ', 'ئۆزىڭىزنى جەلپ قىلىڭ']
  },
  { 
    emoji: '😰', 
    name: 'ھەيران قالۇش بىلەن قورقۇش', 
    color: 'bg-purple-300', 
    description: 'كۈتۈلمىگەن ھادىسە ياكى ھەيران قالارلىق ئەھۋال سەۋەبىدىن',
    response: 'تۇتاشلىق بولۇڭ ۋە ياردەم تەلەپ قىلىڭ',
    tips: ['چوڭلارغا ئېيتىڭ', 'ئويلىنىڭ ۋە مەسلىھەت سوراڭ', 'تەسەللى بېرىدىغان نەرسە ئىزدەڭ']
  },
  { 
    emoji: '😥', 
    name: 'قايغۇ', 
    color: 'bg-blue-300', 
    description: 'ئەزىيەت ياكى قىيىنچىلىق سەۋەبىدىن',
    response: 'يىغلىڭ ۋە ياردەم تەلەپ قىلىڭ',
    tips: ['ئانا-ئاتاڭىزغا ئېيتىڭ', 'ياخشى چۈشەندىڭىز', 'سەپەرگە چىقىڭ']
  },
  { 
    emoji: '😓', 
    name: 'تارتقىنىش', 
    color: 'bg-blue-400', 
    description: 'تارتقىنىش ياكى ھالەت قىيىنچىلىقى سەۋەبىدىن',
    response: 'دەم ئېلىڭ ۋە ئارام ئېلىڭ',
    tips: ['قىسقا دەم ئېلىڭ', 'ھەرىكەت قىلىڭ', 'مۇزىكا ئاڭلاڭ']
  },
  { 
    emoji: '🤔', 
    name: 'ئويلىنىش', 
    color: 'bg-gray-100', 
    description: 'مەسىلە ياكى قارار سەۋەبىدىن',
    response: 'ئويلىنىڭ، يازىڭ، تەكشۈرۈڭ',
    tips: ['ئويلىنىش ۋاقتى ئايرىڭ', 'يازما يېزىڭ', 'باشقىلاردىن ياردەم سوراڭ']
  },
  { 
    emoji: '😴', 
    name: 'ئۇخلاش', 
    color: 'bg-purple-50', 
    description: 'چۈشكىن ياكى ئۇخلۇق سەۋەبىدىن',
    response: 'ئۇخلاڭ ياكى دەم ئېلىڭ',
    tips: ['قىسقا ئۇخلاش', 'سۇ ئىچىڭ', 'ھاۋا ئالمىشىش']
  },
  { 
    emoji: '😪', 
    name: 'چۈشكىن', 
    color: 'bg-purple-100', 
    description: 'يېتىمچىلىك ياكى ئۇخلۇق ھالەت',
    response: 'ئۇخلاڭ ياكى قىسقا دەم ئېلىڭ',
    tips: ['قىسقا ئۇخلاش', 'تەڭشەش', 'ھەرىكەت قىلىڭ']
  },
  { 
    emoji: '🤤', 
    name: 'سېلىنەي قالۇش', 
    color: 'bg-yellow-100', 
    description: 'تەملىك تاماق ياكى ئامراق نەرسە كۆرگەندە',
    response: 'تەمىنى تەقدىرلەڭ ۋە ئورتاقلىشىڭ',
    tips: ['تاماق پىشۇرۇڭ', 'يېڭى تەملىك نەرسىلەرنى تەكشۈرۈڭ', 'تاماق رەسىمى سىزىڭ']
  },
  { 
    emoji: '😷', 
    name: 'كېسەل', 
    color: 'bg-gray-200', 
    description: 'كېسەل ياكى جاراھەت سەۋەبىدىن',
    response: 'دورا ئىچىڭ ۋە ئارام ئېلىڭ',
    tips: ['دوختۇرغا كۆرۈنۈڭ', 'ئارام ئېلىڭ', 'ساغلام تاماق يېيىڭ']
  },
  { 
    emoji: '🤕', 
    name: 'جاراھەتلەنگەن', 
    color: 'bg-red-100', 
    description: 'جاراھەت ياكى زىيان سەۋەبىدىن',
    response: 'ياردەم تەلەپ قىلىڭ ۋە ئارام ئېلىڭ',
    tips: ['دوختۇرغا كۆرۈنۈڭ', 'ئارام ئېلىڭ', 'ياخشى كۆرۈنگەن بولۇڭ']
  },
  { 
    emoji: '🤢', 
    name: 'يېرىلىش', 
    color: 'bg-green-200', 
    description: 'ناچار تاماق ياكى يامان ھېسسىيات سەۋەبىدىن',
    response: 'تازىلەڭ ۋە ساغلام تاماق يېيىڭ',
    tips: ['سۇ ئىچىڭ', 'ساغلام تاماق يېيىڭ', 'ئارام ئېلىڭ']
  },
  { 
    emoji: '🤮', 
name: 'قۇسۇش', 
    color: 'bg-green-300', 
    description: 'ناچار تاماق ياكى جىسمانىي ئەزىيەت سەۋەبىدىن',
    response: 'تازىلەڭ ۋە دوختۇرغا كۆرۈنۈڭ',
    tips: ['دوختۇرغا كۆرۈنۈڭ', 'سۇ ئىچىڭ', 'ئارام ئېلىڭ']
  },
  { 
    emoji: '🥴', 
    name: 'سەركەش', 
    color: 'bg-purple-400', 
    description: 'سەركەش ياكى ھالەت ئالماشقانلىقى',
    response: 'ئارام ئېلىڭ ۋە دوختۇرغا كۆرۈنۈڭ',
    tips: ['ئارام ئېلىڭ', 'سۇ ئىچىڭ', 'دوختۇرغا كۆرۈنۈڭ']
  },
  { 
    emoji: '🤧', 
    name: 'پورۇش', 
    color: 'bg-blue-50', 
    description: 'سوغۇق تۇتۇش ياكى ئەلەرگىيە سەۋەبىدىن',
    response: 'پورۇڭ ۋە ئارام ئېلىڭ',
    tips: ['پورۇش قەغىزى ئىشلىتىڭ', 'سۇ ئىچىڭ', 'ئارام ئېلىڭ']
  },
  { 
    emoji: '😵', 
    name: 'باش ئېغىرلىشىش', 
    color: 'bg-gray-300', 
    description: 'باش ئېغىرلىشىش ياكى ھالەت ئالماشقانلىقى',
    response: 'ئارام ئېلىڭ ۋە دوختۇرغا كۆرۈنۈڭ',
    tips: ['ئارام ئېلىڭ', 'سۇ ئىچىڭ', 'دوختۇرغا كۆرۈنۈڭ']
  },
  { 
    emoji: '🤯', 
    name: 'مېڭە پارتىلاش', 
    color: 'bg-orange-500', 
    description: 'ئەقلىي جەھەتتىن ھەيران قالارلىق ئىش',
    response: 'ئويلىنىڭ ۋە مەسلىھەت سوراڭ',
    tips: ['مەسلىھەتچى بىلەن سۆزلەشىڭ', 'يازما يېزىڭ', 'باشقىلار بىلەن مۇزاكىرە قىلىڭ']
  },
  { 
    emoji: '🥳', 
    name: 'بايرام', 
    color: 'bg-yellow-200', 
    description: 'بايرام ياكى مەززىلىك ۋەقە',
    response: 'خۇشاللىقىڭىزنى ئىپادىلەڭ ۋە ئورتاقلىشىڭ',
    tips: ['مۇزىكا ئاڭلاڭ', 'ئويۇن ئويناڭ', 'دوستلىرىڭىز بىلەن ئورتاقلىشىڭ']
  },
  { 
    emoji: '😇', 
    name: 'پەرزەنتلىك', 
    color: 'bg-blue-50', 
    description: 'ياخشى ئىش قىلغاندا ياكى ئەخلاقلىق بولغاندا',
    response: 'ياخشى ئىشىڭىزنى داۋاملاشتۇرۇڭ',
    tips: ['ياردەم قىلىڭ', 'ياخشى سۆز سۆزلەڭ', 'ئەخلاقلىق بولۇڭ']
  },
  { 
    emoji: '🤠', 
    name: 'مەركەپچى', 
    color: 'bg-orange-400', 
    description: 'سەپەر ياكى مەركەپچىلىك ھېسسىياتى',
    response: 'مەركەپچىلىك قىلىڭ ۋە يېڭى نەرسىلەرنى تەكشۈرۈڭ',
    tips: ['سەپەر ھېكايىسى ئوقۇڭ', 'يېڭى يەرلەرنى تەكشۈرۈڭ', 'مەركەپچىلىك ئويۇنى ئويناڭ']
  },
  { 
    emoji: '🥺', 
    name: 'يالۋۇرۇش', 
    color: 'bg-pink-300', 
    description: 'ياردەم تەلەپ قىلغاندا ياكى ئىلتىماس قىلغاندا',
    response: 'يالۋۇرۇڭ ۋە ياردەم تەلەپ قىلىڭ',
    tips: ['مۇۋاپىق سۆز بىلەن سوراڭ', 'ھۆرمەت بىلەن سۆزلەڭ', 'چۈشەندۈرۈڭ']
  },
  { 
    emoji: '🤫', 
    name: 'جىمجىت', 
    color: 'bg-gray-400', 
    description: 'مەخپىيەت ساقلىغاندا ياكى جىمجىت بولۇش زۆرۈر بولغاندا',
    response: 'جىمجىت بولۇڭ ۋە دىققەت قىلىڭ',
    tips: ['جىمجىت ئويۇن ئويناڭ', 'دىققەت قىلىڭ', 'مەخپىيەت ساقلاڭ']
  },
  { 
    emoji: '🤭', 
    name: 'مەخپىيەتلىك كۈلۈش', 
    color: 'bg-pink-400', 
    description: 'مەخپىيەتلىك نەرسە ياكى يوشۇرۇن مەززىلىك ھادىسە',
    response: 'مەخپىيەتلىك كۈلۈڭ ۋە بەلگىلەڭ',
    tips: ['مەخپىيەتلىك ھېكايە سۆزلەڭ', 'كۈلۈشنى تۇتۇڭ', 'ئويۇن ئويناڭ']
  },
  { 
    emoji: '🧐', 
    name: 'تەكشۈرۈش', 
    color: 'bg-yellow-300', 
    description: 'ئەسلىدىن تەكشۈرگەندە ياكى ئويلىغاندا',
    response: 'تەكشۈرۈڭ ۋە ئويلىنىڭ',
    tips: ['تەكشۈرۈش ئويۇنى ئويناڭ', 'سوراق سوراڭ', 'ئويلىنىڭ']
  },
  { 
    emoji: '🤓', 
    name: 'ئەقىللىق', 
    color: 'bg-green-400', 
    description: 'ئەقىللىق نەرسە ياكى بىلىم سۆزلەش',
    response: 'ئۆگىنىڭ ۋە بىلىمنى ئورتاقلىشىڭ',
    tips: ['كىتاب ئوقۇڭ', 'يېڭى نەرسىلەرنى ئۆگىنىڭ', 'باشقىلارغا ئۆگىتىڭ']
  },
  { 
    emoji: '😈', 
    name: 'شەيتانلىق', 
    color: 'bg-purple-500', 
    description: 'مەززىلىك شەيتانلىق ياكى جىڭلىق قىلغاندا',
    response: 'جىڭلىق قىلىڭ ۋە مەززىلىك قىلىڭ',
    tips: ['جىڭلىق ئويۇن ئويناڭ', 'مەززىلىك ھېكايە سۆزلەڭ', 'كۈلۈش ئويۇنى ئويناڭ']
  },
  { 
    emoji: '👿', 
    name: 'قاتتىق شەيتانلىق', 
    color: 'bg-red-600', 
    description: 'قاتتىق شەيتانلىق ياكى ئاچچىقلىق بىلەن شەيتانلىق',
    response: 'تەڭشەڭ ۋە مۇۋاپىق يول ئىزدەڭ',
    tips: ['تەڭشەش ئويۇنى ئويناڭ', 'ھەرىكەت قىلىڭ', 'باشقىلار بىلەن سۆزلەشىڭ']
  },
  { 
    emoji: '👹', 
    name: 'ۋەھشى', 
    color: 'bg-red-700', 
    description: 'ۋەھشىلىك ياكى قورقۇنچلۇق ئەھۋال',
    response: 'تەڭشەڭ ۋە بىخەتەر بولۇڭ',
    tips: ['قورقۇنچلۇق ھېكايە سۆزلەڭ', 'تەڭشەش ئويۇنى ئويناڭ', 'بىخەتەر يەردە ئولتۇرۇڭ']
  },
  { 
    emoji: '👺', 
    name: 'جىڭ', 
    color: 'bg-orange-600', 
    description: 'جىڭلىق ياكى مەززىلىك شەيتانلىق',
    response: 'جىڭلىق قىلىڭ ۋە مەززىلىك قىلىڭ',
    tips: ['جىڭلىق ئويۇن ئويناڭ', 'مەززىلىك رەسىم سىزىڭ', 'كۈلۈش ئويۇنى ئويناڭ']
  },
  { 
    emoji: '💀', 
    name: 'ئۆلۈم', 
    color: 'bg-gray-500', 
    description: 'ئۆلۈم ياكى قايغۇلۇق ۋەقە',
    response: 'يىغلاڭ ۋە ياردەم تەلەپ قىلىڭ',
    tips: ['ئانا-ئاتاڭىزغا ئېيتىڭ', 'مەسلىھەتچى بىلەن سۆزلەشىڭ', 'يىغلىغاندا سۈزۈك سۆز سۆزلەڭ']
  },
  { 
    emoji: '☠️', 
    name: 'خەتەر', 
    color: 'bg-gray-600', 
    description: 'خەتەرلىك ھالەت ياكى ئۆلۈم خەۋىرى',
    response: 'بىخەتەر بولۇڭ ۋە ياردەم تەلەپ قىلىڭ',
    tips: ['بىخەتەر يەردە ئولتۇرۇڭ', 'چوڭلارغا ئېيتىڭ', 'ياردەم تەلەپ قىلىڭ']
  },
  { 
    emoji: '🤖', 
    name: 'ماشىنا', 
    color: 'bg-blue-300', 
    description: 'تېخنىكىلىق نەرسە ياكى روبوت',
    response: 'تېخنىكىنى ئۆگىنىڭ ۋە قوللىنىڭ',
    tips: ['روبوت ئويۇنچۇق ئويناڭ', 'كومپيۇتېر ئويۇنى ئويناڭ', 'يېڭى تېخنىكىلارنى تەكشۈرۈڭ']
  },
  { 
    emoji: '👽', 
    name: 'ئەترىتلەر', 
    color: 'bg-green-500', 
    description: 'ئەترىتلەر ياكى ئۇزاي ۋەقەسى',
    response: 'ئويلىنىڭ ۋە تەكشۈرۈڭ',
    tips: ['ئەترىتلەر ھەققىدە كىتاب ئوقۇڭ', 'ئۇزاي ۋەقەسى ئويۇنى ئويناڭ', 'ئىجادچان رەسىم سىزىڭ']
  },
  { 
    emoji: '👾', 
    name: 'ئويۇن ئەترىتى', 
    color: 'bg-purple-600', 
    description: 'ئويۇن ئەترىتى ياكى دىجىتال دۇنيا',
    response: 'ئويۇن ئويناڭ ۋە ئىجاد قىلىڭ',
    tips: ['ئويۇن ئويناڭ', 'ئىجادچان رەسىم سىزىڭ', 'دىجىتال دۇنيا ھەققىدە ئويلىنىڭ']
  },
  { 
    emoji: '🤡', 
    name: 'ماسخارا', 
    color: 'bg-red-300', 
    description: 'ماسخارا ياكى كۈلكىلىك كىيىم',
    response: 'كۈلۈڭ ۋە مەززىلىك قىلىڭ',
    tips: ['ماسخارا كىيىمى كىيىڭ', 'كۈلۈش ئويۇنى ئويناڭ', 'مەززىلىك رەسىم سىزىڭ']
  }
];
  

  const goodDeeds = {
    friendship: [
      { deed: 'دوستۇڭىز بىلەن ئويۇنچۇقلىرىڭىزنى ئورتاقلىشىڭ', points: 15, emoji: '🤝' },
      { deed: 'يېڭى دوستۇڭىزغا ياردەم قىلىڭ', points: 20, emoji: '👫' },
      { deed: 'دوستۇڭىزنىڭ مۇۋەپپەقىيىتىنى قۇتلاڭ', points: 10, emoji: '🎉' },
      { deed: 'كەچۈرۈم سوراڭ', points: 25, emoji: '🙏' }
    ],
    family: [
      { deed: 'ئاناڭىزغا ياردەم قىلىڭ', points: 20, emoji: '👩' },
      { deed: 'ئاتاڭىز بىلەن ھېكايە ئوقۇڭ', points: 15, emoji: '📚' },
      { deed: 'قېرىندىشىڭىزغا ئويۇن ئۆگىتىڭ', points: 18, emoji: '👧' },
      { deed: 'ئائىلەڭىز بىلەن تاماق يېيىڭ', points: 12, emoji: '🍽️' }
    ],
    community: [
      { deed: 'مەھەللەڭىزدە تازىلىق قىلىڭ', points: 30, emoji: '🧹' },
      { deed: 'كۈنە قىلغانغا ياردەم قىلىڭ', points: 35, emoji: '🦽' },
      { deed: 'كېچىكىچە ياردەم تەلەپ قىلغانغا جاۋاب بېرىڭ', points: 40, emoji: '🆘' },
      { deed: 'مەكتەپتىكى تۈزۈمگە ياردەم قىلىڭ', points: 25, emoji: '🏫' }
    ]
  };

  const familyRoles = {
    child: {
      emoji: '👶',
      title: 'بالا',
      responsibilities: ['ئوقۇش', 'ئويۇن', 'ئائىلە قائىدىسىگە بويسۇنۇش', 'ياردەم قىلىش'],
      rights: ['مۇھەببەت', 'قوغدىنىش', 'ئوقۇش', 'ئويۇن'],
      color: 'bg-pink-50'
    },
    parent: {
      emoji: '👨‍👩‍👧',
      title: 'ئاتا-ئانا',
      responsibilities: ['بالىلارنى تەربىيەلەش', 'ئائىلە بىلەن تەمىنلەش', 'قوغداش', 'يېتەكلەش'],
      rights: ['ھۆرمەت', 'ئائىلە قارارى', 'بالىلارنى قوغداش', 'تەربىيە'],
      color: 'bg-blue-50'
    },
    grandparent: {
      emoji: '👵',
      title: 'چوڭ ئانا-بوۋا',
      responsibilities: ['تەجرىبە ئۆتۈش', 'تارىخ سۆزلەش', 'ئائىلە گېپى', 'مەسلىھەت بېرىش'],
      rights: ['ھۆرمەت', 'مەسلىھەت', 'تەجرىبە سۆزلەش', 'ئائىلە مۇھەببىتى'],
      color: 'bg-purple-50'
    },
    sibling: {
      emoji: '👫',
      title: 'قېرىنداش',
      responsibilities: ['ھەمكارلىق', 'ياردەم', 'ئورتاقلىشىش', 'قوغداش'],
      rights: ['دوستانە مۇناسىۋەت', 'ئورتاقلىشىش', 'ياردەم', 'ھەمكارلىق'],
      color: 'bg-green-50'
    }
  };

  const ethicalScenarios = [
    {
      id: 1,
      scenario: 'دوستۇڭىز سىزنىڭ ئويۇنچۇقىڭىزنى ئۈزۈۋەتتى. نېمە قىلىسىز؟',
      options: [
        { text: 'ئۇنىڭدىن كېيىنكى ئويۇنچۇقىنى ئېلىپ ئۇنىڭنىڭغا چېقىم قىلىمەن', correct: false },
        { text: 'ئويۇنچۇقنى قايتۇرۇپ بېرىشنى ئۆگىتىمەن', correct: true },
        { text: 'ھېچنېمە دېمەيمەن، ئۆزۈم يىغلىمەن', correct: false },
        { text: 'مۇئەللىمگە شىكايەت قىلىمەن', correct: false }
      ],
      explanation: 'ئويۇنچۇقلارنى قايتۇرۇپ بېرىشنى ئۆگىتىش ئەڭ ياخشى يول، چۈنكى ئۇ دوستۇڭىزنىڭ خاتالىقىنى چۈشىنىشىگە ياردەم قىلىدۇ'
    },
    {
      id: 2,
      scenario: 'قېرىندىشىڭىز سىزنىڭ شېرىتىڭىزنى ئىستەپ قالدى. نېمە قىلىسىز؟',
      options: [
        { text: 'ئۇنىڭدىن كېيىنكى شېرىتىنى ئېلىمەن', correct: false },
        { text: 'ئۇنىڭغا شېرىتنىڭ يېرىمىنى بېرىمەن', correct: true },
        { text: 'ئاتا-ئانىڭىزغا شىكايەت قىلىمەن', correct: false },
        { text: 'ھېچنېمە دېمەيمەن، ئۆزۈم يېگىنە قالىمەن', correct: false }
      ],
      explanation: 'شېرىتنى بۆلۈش ئەخلاقىي ھەرىكەت، چۈنكى ئۇ قېرىندىشىلىق مۇناسىۋىتىنى كۈچەيتىدۇ'
    },
    {
      id: 3,
      scenario: 'سىز مەكتەپتە زېمىنغا تاشلانغان قەغەزنى كۆردىڭىز. نېمە قىلىسىز؟',
      options: [
        { text: 'ئۆتۈپ كېتىمەن، مەن تاشلىمىدىم', correct: false },
        { text: 'ئېلىپ قۇتىغا تاشلايمەن', correct: true },
        { text: 'باشقىلارغا ئېيتىمەن تاشلىۋەتسۇن', correct: false },
        { text: 'مۇئەللىمگە كىم تاشلىغانلىقىنى ئېيتىمەن', correct: false }
      ],
      explanation: 'تازىلىق قىلىش ھەممىمىزنىڭ مەسئۇلىيىتى، بۇ جەمئىيەتنى تازا قىلىدۇ'
    }
  ];

  const uyghurTraditions = [
    {
      name: 'مەھەللە ھەمكارلىقى',
      description: 'يېڭى ئۆي قۇرۇلغاندا، مەھەللە ئاھالىلىرى بىرلىكتە ياردەم قىلىدۇ',
      emoji: '🏠',
      values: ['ھەمكارلىق', 'بىرلىك', 'ياردەمچىلىك']
    },
    {
      name: 'ئائىلە جەمئىيىتى',
      description: 'ھەر ئائىلە ئەزالىرى بىر-بىرىگە ياردەم قىلىش ۋە ھۆرمەت قىلىش',
      emoji: '👨‍👩‍👧‍👦',
      values: ['ئائىلە مۇھەببىتى', 'ھۆرمەت', 'مەسئۇلىيەت']
    },
    {
      name: 'قوناقچىلىق',
      description: 'مېھمانلارغا ياخشى مۇئامىلە قىلىش ۋە ئېھتىرام قىلىش',
      emoji: '🤝',
      values: ['مېھماندوستلۇق', 'ئېھتىرام', 'سادىقلىق']
    },
    {
      name: 'چوڭلارغا ھۆرمەت',
      description: 'ياشلار چوڭلارغا ھۆرمەت قىلىش ۋە ئۇلارنىڭ سۆزىنى ئاڭلاش',
      emoji: '🙇',
      values: ['ھۆرمەت', 'ئاڭلاش', 'ئەخلاق']
    }
  ];

  const teamworkGames = [
    {
      id: 1,
      name: 'ۋىسا قۇرۇش',
      description: 'بىرلىكتە كېرىدىغان ۋىسا قۇرۇش',
      emoji: '🧱',
      participants: 3,
      goal: 'ھەممە كىشى ۋىسانىڭ بىر قىسمىنى قۇرىدۇ',
      rewards: 50
    },
    {
      id: 2,
      name: 'باغۋەنچىلىك',
      description: 'بىرلىكتە چېچەك ئۆستۈرۈش',
      emoji: '🌻',
      participants: 4,
      goal: 'ھەر بىر ئادەم بىر چېچەك ئۆستۈرىدۇ',
      rewards: 40
    },
    {
      id: 3,
      name: 'مەسىلە ھەل قىلىش',
      description: 'بىرلىكتە مەسىلە ھەل قىلىش',
      emoji: '🧩',
      participants: 2,
      goal: 'ھەممە كىشى پىكىر بېرىدۇ',
      rewards: 30
    }
  ];

  const dailyChallenges = [
    "بۇگۈن بىر دوستۇڭىزغا ياخشىلىق قىلىڭ",
    "ئائىلەڭىزگە رەھمەت دېگىن",
    "مەكتەپتىكى بىر تۈزۈمگە ياردەم قىلىڭ",
    "بىر كىشىگە يول بېرىڭ",
    "ئۆزىڭىزنىڭ خاتالىقىڭىزنى تونۇڭ"
  ];

  useEffect(() => {
    const today = new Date().getDate();
    const challengeIndex = today % dailyChallenges.length;
    setDailyChallenge(dailyChallenges[challengeIndex]);
  }, []);

  const handleGoodDeed = (deed, category) => {
    if (!completedDeeds.includes(deed.deed)) {
      setCommunityPoints(prev => prev + deed.points);
      setCompletedDeeds([...completedDeeds, deed.deed]);
      
      // Show celebration
      const celebration = document.createElement('div');
      celebration.className = 'fixed inset-0 flex items-center justify-center z-50 pointer-events-none';
      celebration.innerHTML = `
        <div class="text-center">
          <div class="text-6xl animate-bounce">${deed.emoji}</div>
          <div class="text-2xl font-bold text-green-600 mt-4">+${deed.points} نۇقتا!</div>
          <div class="text-lg text-gray-700 mt-2">ياخشى ئىش قىلدىڭىز! 🎉</div>
        </div>
      `;
      document.body.appendChild(celebration);
      
      setTimeout(() => {
        document.body.removeChild(celebration);
      }, 2000);
    }
  };

  const handleScenarioAnswer = (isCorrect) => {
    if (isCorrect) {
      setCommunityPoints(prev => prev + 50);
      alert('مۇبارەك! توغرا جاۋاپ بەردىڭىز! +50 نۇقتا 🎊');
    } else {
      alert('ئەسلىدىكىدىن ئۆگىنىڭ، كېلەر قېتىم قايتا سىناپ بېقىڭ! 💪');
    }
    setShowScenarioModal(false);
    setCurrentScenario((prev) => (prev + 1) % ethicalScenarios.length);
  };

  const handleTeamworkComplete = (game) => {
    setTeamworkProgress(prev => Math.min(prev + 25, 100));
    setCommunityPoints(prev => prev + game.rewards);
    alert(`مۇبارەك! ${game.name} ئويۇنىنى تاماملادىڭىز! +${game.rewards} نۇقتا 🎊`);
  };

  const earnCertificate = () => {
    if (communityPoints >= 500 && !showCertificate) {
      setShowCertificate(true);
      setTimeout(() => {
        setShowCertificate(false);
      }, 5000);
    }
  };

  useEffect(() => {
    earnCertificate();
  }, [communityPoints]);

  const ScenarioModal = () => {
    if (!showScenarioModal) return null;
    
    const scenario = ethicalScenarios[currentScenario];
    if (!scenario) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-indigo-800">ئەخلاقىي قارار چىقىرىش</h3>
              <button
                onClick={() => setShowScenarioModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <span className="text-2xl">{icons.xMark}</span>
              </button>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl mb-6">
              <div className="text-4xl mb-4">🤔</div>
              <p className="text-xl font-bold text-gray-800 mb-4">
                {scenario.scenario}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {scenario.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScenarioAnswer(option.correct)}
                  className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-right transition-colors"
                >
                  <p className="font-bold text-gray-800">{option.text}</p>
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={() => {
                  const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-hint-notification-911.mp3');
                  audio.play();
                  alert(`چۈشەندۈرۈش: ${scenario.explanation}`);
                }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
              >
                ياردەمچى چۈشەندۈرۈش
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50" dir="rtl">
      
      {/* بېشىدىكى قىسىم */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <span className="text-4xl">{icons.userGroup}</span>
                <span className="absolute -top-2 -right-2 text-2xl">{icons.sparkles}</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-[UKIJ Tuz] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  جەمئىيەت باغچىسى
                </h1>
                <p className="text-gray-700 mt-2 font-[UKIJ Nasq] text-lg">
                  ئائىلە، دوستلۇق، ھەمكارلىق ۋە ئەخلاق دۇنياسى
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-2xl flex items-center gap-3 border border-indigo-200">
              <div className="relative">
                <span className="text-3xl">{icons.trophy}</span>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm text-indigo-800 font-[UKIJ Nasq]">ياخشىلىق نۇقتىسى</p>
                <span className="font-bold text-2xl text-indigo-900">{communityPoints}</span>
              </div>
            </div>
            
            <button
              onClick={() => setShowScenarioModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
            >
              ئەخلاقىي قارار چىقىرىش
            </button>
          </div>
        </div>
      </div>

      {/* گۇۋاھنامە مودالى */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-2xl max-w-md text-center border-4 border-yellow-300">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">مۇكەممەللىك گۇۋاھنامىسى</h3>
            <p className="text-gray-700 mb-4">500 ياخشىلىق نۇقتىسى توپلىدىڭىز!</p>
            <div className="text-5xl font-bold text-yellow-600 mb-4">🌟 مۇكەممەل ئىنسان 🌟</div>
            <p className="text-gray-600 text-sm">سىز جەمئىيەتنىڭ ئەڭ ياخشى ئەزاسىسىز!</p>
          </div>
        </div>
      )}

      {/* كەسىپلەر ۋە ھېسسىياتلار */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* كەسىپلەر دۇنياسى */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-indigo-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-indigo-800 flex items-center gap-2">
              <span className="text-2xl">{icons.academicCap}</span>
              كەسىپلەر دۇنياسى
            </h3>
            <div className="text-sm text-gray-600">{Object.keys(professions).length} خىل كەسىپ</div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {Object.entries(professions).map(([key, profession]) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`${profession.color} ${profession.borderColor} border-2 p-3 rounded-xl text-center hover:scale-105 transition-transform ${
                  selectedRole === key ? 'ring-2 ring-indigo-500 scale-105' : ''
                }`}
              >
                <div className="text-3xl mb-2">{profession.emoji}</div>
                <p className="font-bold text-sm">{profession.title}</p>
              </button>
            ))}
          </div>

          <div className={`${professions[selectedRole].color} rounded-2xl p-6 border ${professions[selectedRole].borderColor}`}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
              <div className="text-5xl">{professions[selectedRole].emoji}</div>
              <div>
                <h4 className="text-xl font-bold mb-2">{professions[selectedRole].title}</h4>
                <p className="text-gray-700 mb-2 font-[UKIJ Nasq]">{professions[selectedRole].description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl">
                <h5 className="font-bold mb-2 text-gray-800">ۋەزىپىلىرى:</h5>
                <ul className="space-y-1">
                  {professions[selectedRole].tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-xl">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-bold text-gray-800">ئوقۇش:</h5>
                    <p className="text-sm text-gray-700">{professions[selectedRole].education}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">ئىشلەيدىغان يەر:</h5>
                    <p className="text-sm text-gray-700">{professions[selectedRole].workplace}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">كېرەكلىك خۇسۇسىيەتلەر:</h5>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {professions[selectedRole].skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ھېسسىياتلارنى تونۇش */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-pink-800 flex items-center gap-2">
              <span className="text-2xl">😊</span>
              ھېسسىياتلارنى تونۇش
            </h3>
            <div className="text-sm text-gray-600">{emotions.length} خىل ھېسسىيات</div>
          </div>
          
          <div className="grid grid-cols-4 gap-3 mb-6">
            {emotions.map((emotion, index) => (
              <button
                key={index}
                onClick={() => setSelectedEmotion(emotion.name)}
                className={`${emotion.color} p-3 rounded-xl text-center hover:scale-110 transition-transform border-2 ${
                  selectedEmotion === emotion.name ? 'border-pink-400 scale-110' : 'border-transparent'
                }`}
              >
                <div className="text-3xl mb-1">{emotion.emoji}</div>
                <span className="text-xs font-bold text-gray-700">{emotion.name}</span>
              </button>
            ))}
          </div>

          {selectedEmotion && (
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">
                  {emotions.find(e => e.name === selectedEmotion)?.emoji}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{selectedEmotion}</h4>
                  <p className="text-gray-700 font-[UKIJ Nasq]">
                    {emotions.find(e => e.name === selectedEmotion)?.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <h5 className="font-bold mb-2 text-gray-800">نېمە قىلىش كېرەك:</h5>
                  <p className="text-gray-700">
                    {emotions.find(e => e.name === selectedEmotion)?.response}
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <h5 className="font-bold mb-2 text-gray-800">ياردەمچى ئىشلار:</h5>
                  <ul className="space-y-2">
                    {emotions.find(e => e.name === selectedEmotion)?.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-yellow-500">✨</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button
                onClick={() => {
                  const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
                  audio.play();
                  setCommunityPoints(prev => prev + 10);
                }}
                className="mt-4 w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold hover:scale-105 transition-transform"
              >
                ھېسسىياتىمنى چۈشەندىم! +10 نۇقتا
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ياخشى ئىشلار ئويۇنى */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-green-100 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-green-700 flex items-center gap-2">
            <span className="text-2xl">{icons.handRaised}</span>
            ياخشى ئىشلار ئويۇنى
          </h3>
          <div className="text-sm text-gray-600">
            {completedDeeds.length} ئىش تاماملاندى
          </div>
        </div>
        
        <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl">{icons.clock}</span>
            <h4 className="font-bold text-green-800">بۈگۈنكى مەشقەت:</h4>
          </div>
          <p className="text-gray-700 font-[UKIJ Nasq]">{dailyChallenge}</p>
          <button
            onClick={() => {
              setCommunityPoints(prev => prev + 30);
              alert('مۇبارەك! بۈگۈنكى مەشقەتنى تاماملادىڭىز! +30 نۇقتا 🎉');
            }}
            className="mt-3 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
          >
            تاماملاندى دەپ بەلگىلەش
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(goodDeeds).map(([category, deeds]) => (
            <div key={category} className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-bold mb-3 text-gray-800">
                {category === 'friendship' && 'دوستلۇق'}
                {category === 'family' && 'ئائىلە'}
                {category === 'community' && 'جەمئىيەت'}
              </h4>
              <div className="space-y-3">
                {deeds.map((deed, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{deed.emoji}</span>
                      <div>
                        <p className="font-bold text-sm text-gray-800">{deed.deed}</p>
                        <p className="text-xs text-gray-600">+{deed.points} نۇقتا</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleGoodDeed(deed, category)}
                      disabled={completedDeeds.includes(deed.deed)}
                      className={`px-3 py-1 rounded-lg text-sm font-bold ${
                        completedDeeds.includes(deed.deed)
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105 transition-transform'
                      }`}
                    >
                      {completedDeeds.includes(deed.deed) ? 'تاماملاندى ✓' : 'قىلدىم'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ئائىلە ئەزالىرى رولى ۋە ھەمكارلىق ئويۇنلىرى */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* ئائىلە ئەزالىرى رولى */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">{icons.home}</span>
            ئائىلە ئەزالىرى رولى
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {Object.entries(familyRoles).map(([key, role]) => (
              <button
                key={key}
                onClick={() => setFamilyRole(key)}
                className={`${role.color} p-4 rounded-xl text-center hover:scale-105 transition-transform ${
                  familyRole === key ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                <div className="text-4xl mb-2">{role.emoji}</div>
                <p className="font-bold text-gray-800">{role.title}</p>
              </button>
            ))}
          </div>
          
          <div className={`${familyRoles[familyRole].color} rounded-2xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">{familyRoles[familyRole].emoji}</div>
              <div>
                <h4 className="text-xl font-bold">{familyRoles[familyRole].title}</h4>
                <p className="text-gray-700">ئائىلىدىكى رولىڭىز</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl">
                <h5 className="font-bold mb-2 text-gray-800">مەسئۇلىيەتلىرى:</h5>
                <ul className="space-y-2">
                  {familyRoles[familyRole].responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-500">🛡️</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-xl">
                <h5 className="font-bold mb-2 text-gray-800">ھوقۇقلىرى:</h5>
                <ul className="space-y-2">
                  {familyRoles[familyRole].rights.map((right, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">⚖️</span>
                      {right}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* ھەمكارلىق ئويۇنلىرى */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-100">
          <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">{icons.users}</span>
            ھەمكارلىق ئويۇنلىرى
          </h3>
          
          <div className="space-y-4 mb-6">
            {teamworkGames.map((game) => (
              <div key={game.id} className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{game.emoji}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{game.name}</h4>
                      <p className="text-sm text-gray-600">{game.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">{game.participants} كىشى</div>
                    <div className="font-bold text-green-600">+{game.rewards} نۇقتا</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3 font-[UKIJ Nasq]">مەقسەت: {game.goal}</p>
                <button
                  onClick={() => handleTeamworkComplete(game)}
                  className="w-full py-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  ئويۇننى باشلاش
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-blue-800">ھەمكارلىق ئىلەرلەش</h4>
              <span className="text-blue-600 font-bold">{teamworkProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${teamworkProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2 font-[UKIJ Nasq]">
              ھەمكارلىق ئارقىلىق كۈچىڭىزنى كۆرسىتىڭ
            </p>
          </div>
        </div>
      </div>

      {/* ئۇيغۇر ئەنئەنىۋى قىممەتلەرى */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-yellow-100 mb-8">
        <h3 className="text-xl font-bold text-yellow-800 mb-6 flex items-center gap-2">
          <span className="text-2xl">{icons.buildingOffice}</span>
          ئۇيغۇر ئەنئەنىۋى قىممەتلەرى
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {uyghurTraditions.map((tradition, index) => (
            <button
              key={index}
              onClick={() => setCurrentTradition(index)}
              className={`bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl hover:scale-105 transition-transform border-2 ${
                currentTradition === index ? 'border-yellow-400' : 'border-transparent'
              }`}
            >
              <div className="text-4xl mb-3">{tradition.emoji}</div>
              <h4 className="font-bold text-gray-800 mb-2">{tradition.name}</h4>
              <p className="text-sm text-gray-600 font-[UKIJ Nasq]">{tradition.description}</p>
            </button>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">{uyghurTraditions[currentTradition].emoji}</div>
            <div>
              <h4 className="text-xl font-bold">{uyghurTraditions[currentTradition].name}</h4>
              <p className="text-gray-700">{uyghurTraditions[currentTradition].description}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {uyghurTraditions[currentTradition].values.map((value, idx) => (
              <span key={idx} className="px-3 py-2 bg-white text-amber-800 rounded-full font-bold flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ئەخلاقىي قارار مودالى */}
      <ScenarioModal />

      {/* ئاخىرقى ئىبارە */}
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-3xl border-2 border-blue-200">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold text-blue-800 mb-2">💝 ياخشى ئىنسان بولۇشنىڭ ئەڭ گۈزەل يولى</h4>
            <p className="text-blue-700 font-[UKIJ Nasq]">
              ھەممە بالا ياخشى دوست بولالايدۇ، ھەممە بالا جەمئىيەتنىڭ مۇھىم بىر پارچىسى. 
              سەۋر، مۇھەببەت ۋە ھۆرمەت بىلەن، ھەممىمىز بىر تەرەپتىن بولۇشىمىز مۇمكىن.
            </p>
          </div>
          <div className="text-5xl flex gap-2">
            <span>🌟</span>
            <span>🤝</span>
            <span>❤️</span>
          </div>
        </div>
      </div>

      {/* ئانیماتسىيەلەر */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
        {communityPoints % 100 === 0 && communityPoints > 0 && (
          <>
            <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce">✨</div>
            <div className="absolute top-1/3 right-1/4 text-5xl animate-spin">🎊</div>
            <div className="absolute bottom-1/4 left-1/3 text-4xl animate-ping">🏆</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SocietyComponent;