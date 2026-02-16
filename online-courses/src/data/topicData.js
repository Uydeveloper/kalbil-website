// سۈپەتلىك رەسىم بۇلاقلىرى: Unsplash/Pixabay (ھەقسىز ئىجازەت)
// YouTube ۋىدىئو بۇلاقلىرى: YouTube (ھەقسىز ئىجازەت)

export const topicData = {
  qml: {
    id: "qml",
    title: "كىۋانت ماشىنا ئۈگىتىش",
    slogan: "«كىۋانت ئالىمى — زېھىننىڭ كەلسۈسىگە ئېچىلغان ئىشۈكى.»",
    category: "كىۋانت تېخنىكىسى",
    level: "ئىلگىرىلەشكەن",
    duration: "12 ھەپتە",
    students: 1250,
    rating: 4.9,
    
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
    
    video: "https://www.youtube.com/watch?v=Q0BfgGn8_OI",
    
    instructor: {
      name: "قاۋۇلجان ئابدۇرھىم",
      title: "كىۋانت فېزىكىسى پۈتۈنچىلىك پىروگراممىست",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "10 يىللىق كۋانتۇم كومپيۇتېر تەجرىبىسىگە ئىگە، CERN دا ئىزدىنىش ئۆتكۈزگەن.",
      experience: "10 يىل كۋانتۇم تەتقىقاتى",
      specialty: "كىۋانت ئالگورىتم، QML"
    },
    
    features: [
      "كىۋانت پروگرامما تۈزۈش ئاساسلىرى",
      "كىۋانت ماشىنا ئۆگىنىش ئالگورىتملىرى", 
      "Qiskit ۋە Cirq ئىشلىتىش",
      "كىۋانت نىرۋا تورلىرى",
      "ھەقىقىي كۋانتۇم كومپيۇتېرلاردا ئىجرا"
    ],
    
    prerequisites: [
      "پايتون ئاساسىي بىلىم",
      "سىستېماتىك جەبرە ئاساسلىرى",
      "ئېھتىماللىق نەزەرىيىسى"
    ],
    
    description: `
**كىۋانت ماشىنا ئۆگىنىش** — كىۋانت فېزىكىسى بىلەن ماشىنا ئۆگىنىشنىڭ كۈچلۈك بىرلىكى. بۇ تېخنىكا سانلىق مەلۇماتنى ناھايىتى تېز تەھلىل قىلىپ، مودېل قۇرۇش ۋە پەيشان قىلىش ئىقتىدارىنى كۆتۈرۈدۇ.

## 🎯 ئۆگىنىش نىشانلىرى:
- كىۋانت پروگرامما تۈزۈشنى ئۆگىنىش
- كىۋانت ماشىنا ئۆگىنىش ئالگورىتملىرىنى چۈشىنىش
- ھەقىقىي كۋانتۇم كومپيۇتېرلاردا پروگرامما ئىجرا قىلىش
- كىۋانت نىرۋا تورلىرىنى قۇرۇش

## 📚 دەرس مەزمۇنى:
1. كىۋانت پروگرامما تۈزۈش ئاساسلىرى
2. كىۋانت ئالگورىتملىرى
3. كىۋانت ماشىنا ئۆگىنىش
4. QML ئەمەلىي تەتبىقلار
5. كىۋانت نىرۋا تورلىرى

كىۋانت ئالەملىرىنىڭ سىرىنى ئېچىش — يېڭى ئىمكانيەتلەرگە يول ئېچىشتۇر. بۇ بىلىم سىزنى پەن-تېخنىكا سەھنىسىنىڭ ئالدى قۇرۇقىغا ئېلىپ بارىدۇ.
    `,
    
    resources: {
      documentation: "https://qiskit.org/textbook/preface.html",
      github: "https://github.com/Qiskit/qiskit-machine-learning",
      community: "https://qiskit.slack.com"
    }
  },

  ai: {
    id: "ai",
    title: "سۇنئىي ئەقىل",
    slogan: "«ئەقىلنى قۇرۇش — كەلسۈسىڭنى ياساش.»",
    category: "ئەقلىي ئىقتىدار",
    level: "ئوتتۇرا",
    duration: "10 ھەپتە",
    students: 2850,
    rating: 4.8,
    
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    
    video: "https://www.youtube.com/watch?v=2ePf9rue1Ao",
    
    instructor: {
      name: "ئاي ئابدۇرېھىم",
      title: "ماشىنا ئۆگىنىش مۇتەخەسسىسى",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Stanford دان دوكتۇرلۇق ئۇنۋانىغا ئىگە، AI تەتقىقاتچىسى.",
      experience: "8 يىل AI تەتقىقاتى",
      specialty: "نىرۋا تورى، تەبىئىي تىل بىر تەرەپ قىلىش"
    },
    
    features: [
      "ئەقلىي ئىقتىدار ئاساسلىرى",
      "ماشىنا ئۆگىنىش ئالگورىتملىرى",
      "نىرۋا تور قۇرۇلۇشى",
      "چوڭ تىل مودېللىرى",
      "ئەقلىي ئىقتىدار ئەخلاقى"
    ],
    
    prerequisites: [
      "پايتون ئاساسىي بىلىم",
      "سىستېماتىك جەبرە ئاساسلىرى",
      "ئېھتىماللىق نەزەرىيىسى"
    ],
    
    description: `
**سۇنئىي ئەقىل** — ئادەمنىڭ پىكىر-ئويلاش ۋە ئۆگىنىش قابىلىيىتىنى سىستېمىغا يۈكلەش پەلسەپىسى ۋە تېخنىكىسى. ئۆزى ئۆگىنىدىغان ئەقلىي مودېللار ئارقىلىق سانائەتتىن تەربىگىچە ناھايىتى كۆپ ساھەدە ئىنكىلاب يارىتىدۇ.

## 🎯 ئۆگىنىش نىشانلىرى:
- ئەقلىي ئىقتىدارنىڭ تارىخى ۋە پەلسەپىسىنى چۈشىنىش
- ماشىنا ئۆگىنىش ئالگورىتملىرىنى ئۆگىنىش
- نىرۋا تور قۇرۇلۇشى ۋە تەربىيىلەش
- چوڭ تىل مودېللىرى بىلەن ئىشلەش

## 📚 دەرس مەزمۇنى:
1. ئەقلىي ئىقتىدارنىڭ تارىخى
2. ماشىنا ئۆگىنىش ئاساسلىرى
3. نىرۋا تور قۇرۇلۇشى
4. چوڭ تىل مودېللىرى
5. ئەقلىي ئىقتىدار ئەخلاقى

بۇ بىلىم بىلەن، سىز ئىستېمالچىلا ئەمەس — ياسىغۇچىغا ئايلىنىسىز.
    `,
    
    resources: {
      documentation: "https://www.deeplearning.ai",
      github: "https://github.com/tensorflow/tensorflow",
      community: "https://discuss.tensorflow.org"
    }
  },

  qp: {
    id: "qp",
    title: "كىۋانت فېزىكىسى",
    slogan: "«ئېڭ كىچىك زەررە — ئەڭ چوڭ سىرنى ئېيتىدۇ.»",
    category: "كىۋانت تېخنىكىسى",
    level: "ئىلگىرىلەشكەن",
    duration: "14 ھەپتە",
    students: 890,
    rating: 4.9,
    
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=400&auto=format&fit=crop",
    
    video: "https://www.youtube.com/watch?v=6x-bxIfx_EI",
    
    instructor: {
      name: "قاۋۇلجان ئابدۇرھىم",
      title: "كىۋانت فېزىكىسى پۈتۈنچىلىك پىروگراممىست",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "10 يىللىق كۋانتۇم كومپيۇتېر تەجرىبىسىگە ئىگە، CERN دا ئىزدىنىش ئۆتكۈزگەن.",
      experience: "10 يىل كۋانتۇم تەتقىقاتى",
      specialty: "كىۋانت ئالگورىتم، QML"
    },
    
    features: [
      "كىۋانت مېخانىكىسى ئاساسلىرى",
      "كىۋانت ھېسابلاش نەزەرىيىسى",
      "كىۋانت ئالاقە پروتوكوللىرى",
      "كىۋانت خاتىرىلەش تېخنىكىسى",
      "كىۋانت سىمۇلىئاتورلىرى"
    ],
    
    prerequisites: [
      "ئادەتتىكى فېزىكا ئاساسلىرى",
      "سىستېماتىك جەبرە بىلىمى",
      "كومپيۇتېر فوندىمېنتى"
    ],
    
    description: `
**كىۋانت فېزىكىسى** — ماددى ۋە نۇرىي ئالەمنىڭ ئەڭ كىچىك مىقياستا قانداق ئىشلەيدىغانلىقىنى چۈشەندۈرىدۇ. لەيزېر، كىۋانت ھېسابلاش، بىخەتەر ئالاقە قاتارلىق زامانىۋى تېخنىكىلارنىڭ تۈۋەن تاشىدۇر.

## 🎯 ئۆگىنىش نىشانلىرى:
- كىۋانت مېخانىكىسىنىڭ ئاساسىي پرىنسىپلىرىنى چۈشىنىش
- كىۋانت ھېسابلاش نەزەرىيىسىنى ئۆگىنىش
- كىۋانت ئالاقە پروتوكوللىرى بىلەن تونۇشۇش
- كىۋانت سىمۇلىئاتورلىرىنى ئىشلىتىش

## 📚 دەرس مەزمۇنى:
1. كىۋانت مېخانىكىسى ئاساسلىرى
2. كىۋانت ھالەت ۋە ئۆلچەش
3. كىۋانت ئالاقە پروتوكوللىرى
4. كىۋانت خاتىرىلەش تېخنىكىسى
5. كىۋانت سىمۇلىئاتورلىرى

بۇ بىلىمنى ئىگىلەش، سىزگە ئىجادىيەتكە ئېلىپ بارىدىغان يېڭى بوشلۇقلارنى ئېچىدۇ.
    `,
    
    resources: {
      documentation: "https://qiskit.org/textbook/ch-states/introduction.html",
      github: "https://github.com/Qiskit/qiskit",
      community: "https://quantum-computing.ibm.com"
    }
  },

  nn: {
    id: "nn",
    title: "نىرۋا تورى",
    slogan: "«تورلار ئارقىلىق ئەقىل قۇرۇلۇش.»",
    category: "ئەقلىي ئىقتىدار",
    level: "ئوتتۇرا",
    duration: "8 ھەپتە",
    students: 3200,
    rating: 4.7,
    
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=400&auto=format&fit=crop",
    
    video: "https://www.youtube.com/watch?v=aircAruvnKk",
    
    instructor: {
      name: "ئاي ئابدۇرېھىم",
      title: "ماشىنا ئۆگىنىش مۇتەخەسسىسى",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Stanford دان دوكتۇرلۇق ئۇنۋانىغا ئىگە، AI تەتقىقاتچىسى.",
      experience: "8 يىل AI تەتقىقاتى",
      specialty: "نىرۋا تورى، تەبىئىي تىل بىر تەرەپ قىلىش"
    },
    
    features: [
      "نىرۋا تور ئاساسلىرى",
      "ئارقىغا تارقىتىش ئالگورىتمى",
      "چوڭقۇر ئۆگىنىش",
      "CNN ۋە RNN تورلىرى",
      "Transformer ئارخىتېكتۇرىسى"
    ],
    
    prerequisites: [
      "پايتون ئاساسىي بىلىم",
      "سىستېماتىك جەبرە ئاساسلىرى",
      "ئېھتىماللىق نەزەرىيىسى"
    ],
    
    description: `
**نىرۋا تورى** — مېڭە قۇرۇلمىسىدىن ئىلھام ئېلىنغان كاتتىق-قەۋەتلىك ھېسابلاش ئۈلگىسى. سانلىق مەلۇماتتا يوشۇرۇن شەكىل ۋە مۇناسىۋەتلەرنى ئۆزى ئاڭلاپ تېپىدۇ.

## 🎯 ئۆگىنىش نىشانلىرى:
- نىرۋا تور قۇرۇلۇشىنى چۈشىنىش
- ئارقىغا تارقىتىش ئالگورىتمىنى ئۆگىنىش
- چوڭقۇر ئۆگىنىش تېخنىكىلىرى
- CNN ۋە RNN تورلىرىنى قۇرۇش

## 📚 دەرس مەزمۇنى:
1. نىرۋا تور ئاساسلىرى
2. ئارقىغا تارقىتىش ئالگورىتمى
3. چوڭقۇر ئۆگىنىش
4. CNN ۋە RNN تورلىرى
5. Transformer ئارخىتېكتۇرىسى

سۈرەت/ئاۋاز تونۇشتىن تارتىپ تېلىلۇق تىل ئۆلچىشىغىچە كۆپ سەھنىدە كۈچى بار.
    `,
    
    resources: {
      documentation: "https://www.tensorflow.org/guide/keras",
      github: "https://github.com/keras-team/keras",
      community: "https://discuss.tensorflow.org/c/keras"
    }
  },

  ml: {
    id: "ml",
    title: "ماشىنا ئۆگىنىش",
    slogan: "«ماشىنىغا ئۆگىتىڭ — ئۇ سىزگە ئۆگىتىدۇ.»",
    category: "ئەقلىي ئىقتىدار",
    level: "باشلانغۇچ",
    duration: "6 ھەپتە",
    students: 4500,
    rating: 4.6,
    
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop",
    
    video: "https://www.youtube.com/watch?v=KNAWp2S3w94",
    
    instructor: {
      name: "ئاي ئابدۇرېھىم",
      title: "ماشىنا ئۆگىنىش مۇتەخەسسىسى",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Stanford دان دوكتۇرلۇق ئۇنۋانىغا ئىگە، AI تەتقىقاتچىسى.",
      experience: "8 يىل AI تەتقىقاتى",
      specialty: "نىرۋا تورى، تەبىئىي تىل بىر تەرەپ قىلىش"
    },
    
    features: [
      "ماشىنا ئۆگىنىش ئاساسلىرى",
      "نىزاملىق ۋە نىزamsىز ئۆگىنىش",
      "ئۆلچەملىك ئالگورىتملار",
      "مودېل باھالاش ۋە تەڭشەش",
      "ئەمەلىي پروژېكتلار"
    ],
    
    prerequisites: [
      "پايتون ئاساسىي بىلىم",
      "ئاساسىي ماتېماتىكا بىلىمى"
    ],
    
    description: `
**ماشىنا ئۆگىنىش** — سانلىق مەلۇماتتا مودېل قۇرۇپ، نەتىجىنى پەيشان قىلىش قايدىلىرىنىڭ توپلىمى. ئىقتىدارى سىزنىڭ قولىڭىزدىكى سانلىق مەلۇمات بىلەن بىرگە چوڭايتىلىدۇ.

## 🎯 ئۆگىنىش نىشانلىرى:
- ماشىنا ئۆگىنىشنىڭ ئاساسىي پرىنسىپلىرىنى چۈشىنىش
- نىزاملىق ۋە نىزamsىز ئۆگىنىش ئالگورىتملىرى
- مودېل باھالاش ۋە تەڭشەش تېخنىكىلىرى
- ئەمەلىي پروژېكتلار ئارقىلىق تەجرىبە قازىنىش

## 📚 دەرس مەزمۇنى:
1. ماشىنا ئۆگىنىش كىرىش سۆز
2. نىزاملىق ئۆگىنىش
3. نىزamsىز ئۆگىنىش
4. مودېل باھالاش ۋە تەڭشەش
5. ئەمەلىي پروژېكتلار

ئىجرا، تەھلىل ۋە ئايلىنمىغا كۈچ قوشىدۇ.
    `,
    
    resources: {
      documentation: "https://scikit-learn.org/stable/user_guide.html",
      github: "https://github.com/scikit-learn/scikit-learn",
      community: "https://discuss.scikit-learn.org"
    }
  },

  python: {
    id: "python",
    title: "پايتون پىروگرامما تىلى",
    slogan: "«ئاددىي تىل، چەكسىز ئىقتىدار.»",
    category: "پروگرامما تىلى",
    level: "باشلانغۇچ",
    duration: "4 ھەپتە",
    students: 6800,
    rating: 4.8,
    
    img: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=1600&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1518779660432-4632468eea43?q=80&w=400&auto=format&fit=crop",
    
    video: "https://www.youtube.com/watch?v=o6BD83y-eOA",
    
    instructor: {
      name: "ئەخمەتجان قېيۇم",
      title: "پايتون پىروگرامما تىلى مۇتەخەسسىسى",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Google دا 6 يىل پىروگرامما تۈزۈش تەجرىبىسىگە ئىگە. پايتون ئارقىلىق ئۈنۈملۈك پروگراممىلارنى ياساش ۋە ئۆگىتىشكە ئىختىساس قىلغان.",
      experience: "6 يىل پىروگرامما تۈزۈش",
      specialty: "پايتون، Django، Data Science"
    },
    
    features: [
      "پايتون ئاساسلىرى",
      "مەلۇمات قۇرۇلمىسى ۋە ئالگورىتم",
      "OOP (نەڭ ئوبيېكت پروگرامما تۈزۈش)",
      "مەلۇمات بازىسى بىلەن ئالاقە",
      "ئەمەلىي پروژېكتلار"
    ],
    
    prerequisites: [
      "كومپيۇتېر ئىشلىتىش ئاساسىي بىلىمى",
      "مەنتىقىي پىكىر قابىلىيىتى"
    ],
    
    description: `
**پايتون** — ئاددىي، چۈشەنچىلىك، بىراق ناھايىتى كۈچلۈك پىروگرامما تىلى. تور، سانلىق مەلۇمات، ئاپتوماتسىيەلەشتۈرۈش ۋە AI/ML دە قۇلاي.

## 🎯 ئۆگىنىش نىشانلىرى:
- پايتون پروگرامما تۈزۈشنىڭ ئاساسلىرىنى ئۆگىنىش
- مەلۇمات قۇرۇلمىسى ۋە ئالگورىتملار بىلەن تونۇشۇش
- OOP (نەڭ ئوبيېكت پروگرامما تۈزۈش) پرىنسىپلىرى
- مەلۇمات بازىسى بىلەن ئالاقە قىلىش

## 📚 دەرس مەزمۇنى:
1. پايتون ئاساسلىرى
2. مەلۇمات قۇرۇلمىسى ۋە ئالگورىتم
3. OOP (نەڭ ئوبيېكت پروگرامما تۈزۈش)
4. مەلۇمات بازىسى بىلەن ئالاقە
5. ئەمەلىي پروژېكتلار

پايتوننى بىلىش — پىروگرامماچىلىق دۇنياسىغا ئىنچكە، بىخەتەر قەدەم.
    `,
    
    resources: {
      documentation: "https://docs.python.org/3/tutorial/index.html",
      github: "https://github.com/python/cpython",
      community: "https://www.python.org/community/"
    }
  }
};

// Helper function to get all topics
export const getAllTopics = () => Object.values(topicData);

// Helper function to get topic by ID
export const getTopicById = (id) => topicData[id];

// Helper function to get topics by category
export const getTopicsByCategory = (category) => 
  Object.values(topicData).filter(topic => topic.category === category);

// ✅ تۈزەتكەن YouTube Embed URL چىقىرىش فۇنكسىيەسى — بوشلۇق يوق!
export const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  
  const trimmed = url.trim();
  
  if (trimmed.includes("youtube.com/watch?v=")) {
    const id = trimmed.split("v=")[1]?.split("&")[0];
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
  } else if (trimmed.includes("youtu.be/")) {
    const id = trimmed.split("youtu.be/")[1]?.split("?")[0];
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
  } else if (trimmed.includes("youtube.com/embed/")) {
    const cleanUrl = trimmed.split("?")[0];
    return `${cleanUrl}?autoplay=1&rel=0`;
  }
  
  return null;
};

// ✅ تۈزەتكەن YouTube Thumbnail چىقىرىش — بوشلۇق يوق!
export const getYouTubeThumbnail = (url) => {
  if (!url) return null;
  
  const trimmed = url.trim();
  let videoId = null;
  
  if (trimmed.includes("youtube.com/watch?v=")) {
    videoId = trimmed.split("v=")[1]?.split("&")[0];
  } else if (trimmed.includes("youtu.be/")) {
    videoId = trimmed.split("youtu.be/")[1]?.split("?")[0];
  } else if (trimmed.includes("youtube.com/embed/")) {
    videoId = trimmed.split("embed/")[1]?.split("?")[0];
  }
  
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};