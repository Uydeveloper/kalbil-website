// src/components/learn-modules/UyghurLanguageModule.jsx
import React, { useState, useEffect } from 'react';

// ======================
// 1. باشلىق ۋە ئىلببە مەلۇماتى
// ======================

const uyghurAlphabet = [
  { letter: 'ا', forms: { isolated: 'ا', initial: 'ا', medial: 'ا', final: 'ا' }, example: 'ئادەم', image: 'https://via.placeholder.com/100?text=ئ' },
  { letter: 'ب', forms: { isolated: 'ب', initial: 'ب', medial: 'ـبـ', final: 'ـب' }, example: 'باغچە', image: 'https://via.placeholder.com/100?text=ب' },
  { letter: 'پ', forms: { isolated: 'پ', initial: 'پ', medial: 'ـپـ', final: 'ـپ' }, example: 'پۈتۈن', image: 'https://via.placeholder.com/100?text=پ' },
  { letter: 'ت', forms: { isolated: 'ت', initial: 'ت', medial: 'ـتـ', final: 'ـت' }, example: 'تام', image: 'https://via.placeholder.com/100?text=ت' },
  { letter: 'ج', forms: { isolated: 'ج', initial: 'ج', medial: 'ـجـ', final: 'ـج' }, example: 'جەم', image: 'https://via.placeholder.com/100?text=ج' },
  { letter: 'چ', forms: { isolated: 'چ', initial: 'چ', medial: 'ـچـ', final: 'ـچ' }, example: 'چاي', image: 'https://via.placeholder.com/100?text=چ' },
  { letter: 'خ', forms: { isolated: 'خ', initial: 'خ', medial: 'ـخـ', final: 'ـخ' }, example: 'خان', image: 'https://via.placeholder.com/100?text=خ' },
  { letter: 'د', forms: { isolated: 'د', initial: 'د', medial: 'ـدـ', final: 'ـد' }, example: 'دەرەخ', image: 'https://via.placeholder.com/100?text=د' },
  { letter: 'ر', forms: { isolated: 'ر', initial: 'ر', medial: 'ـرـ', final: 'ـر' }, example: 'رەڭ', image: 'https://via.placeholder.com/100?text=ر' },
  { letter: 'ز', forms: { isolated: 'ز', initial: 'ز', medial: 'ـزـ', final: 'ـز' }, example: 'زەيتۇن', image: 'https://via.placeholder.com/100?text=ز' },
  { letter: 'ژ', forms: { isolated: 'ژ', initial: 'ژ', medial: 'ـژـ', final: 'ـژ' }, example: 'ژۇرنال', image: 'https://via.placeholder.com/100?text=ژ' },
  { letter: 'س', forms: { isolated: 'س', initial: 'س', medial: 'ـسـ', final: 'ـس' }, example: 'سۇ', image: 'https://via.placeholder.com/100?text=س' },
  { letter: 'ش', forms: { isolated: 'ش', initial: 'ش', medial: 'ـشـ', final: 'ـش' }, example: 'شەھەر', image: 'https://via.placeholder.com/100?text=ش' },
  { letter: 'غ', forms: { isolated: 'غ', initial: 'غ', medial: 'ـغـ', final: 'ـغ' }, example: 'غەرەز', image: 'https://via.placeholder.com/100?text=غ' },
  { letter: 'ف', forms: { isolated: 'ف', initial: 'ف', medial: 'ـفـ', final: 'ـف' }, example: 'فاسىلە', image: 'https://via.placeholder.com/100?text=ف' },
  { letter: 'ق', forms: { isolated: 'ق', initial: 'ق', medial: 'ـقـ', final: 'ـق' }, example: 'قەلەم', image: 'https://via.placeholder.com/100?text=ق' },
  { letter: 'ك', forms: { isolated: 'ك', initial: 'ك', medial: 'ـكـ', final: 'ـك' }, example: 'كۆك', image: 'https://via.placeholder.com/100?text=ك' },
  { letter: 'گ', forms: { isolated: 'گ', initial: 'گ', medial: 'ـگـ', final: 'ـگ' }, example: 'گۈل', image: 'https://via.placeholder.com/100?text=گ' },
  { letter: 'ڭ', forms: { isolated: 'ڭ', initial: '—', medial: 'ـڭـ', final: 'ـڭ' }, example: 'دەڭىز', image: 'https://via.placeholder.com/100?text=ڭ' },
  { letter: 'ل', forms: { isolated: 'ل', initial: 'ل', medial: 'ـلـ', final: 'ـل' }, example: 'لىتىر', image: 'https://via.placeholder.com/100?text=ل' },
  { letter: 'م', forms: { isolated: 'م', initial: 'م', medial: 'ـمـ', final: 'ـم' }, example: 'مىل', image: 'https://via.placeholder.com/100?text=م' },
  { letter: 'ن', forms: { isolated: 'ن', initial: 'ن', medial: 'ـنـ', final: 'ـن' }, example: 'نەن', image: 'https://via.placeholder.com/100?text=ن' },
  { letter: 'ھ', forms: { isolated: 'ھ', initial: 'ھ', medial: 'ـھـ', final: 'ـھ' }, example: 'ھاۋا', image: 'https://via.placeholder.com/100?text=ھ' },
  { letter: 'ۋ', forms: { isolated: 'ۋ', initial: 'ۋ', medial: 'ـۋـ', final: 'ـۋ' }, example: 'ۋاقىت', image: 'https://via.placeholder.com/100?text=ۋ' },
  { letter: 'ئې', forms: { isolated: 'ئې', initial: 'ئې', medial: 'ئې', final: 'ئې' }, example: 'ئېت', image: 'https://via.placeholder.com/100?text=ئې' },
  { letter: 'ئى', forms: { isolated: 'ئى', initial: 'ئى', medial: 'ئى', final: 'ئى' }, example: 'ئىش', image: 'https://via.placeholder.com/100?text=ئى' },
  { letter: 'ئۆ', forms: { isolated: 'ئۆ', initial: 'ئۆ', medial: 'ئۆ', final: 'ئۆ' }, example: 'ئۆي', image: 'https://via.placeholder.com/100?text=ئۆ' },
  { letter: 'ئۈ', forms: { isolated: 'ئۈ', initial: 'ئۈ', medial: 'ئۈ', final: 'ئۈ' }, example: 'ئۈزۈم', image: 'https://via.placeholder.com/100?text=ئۈ' },
  { letter: 'ئو', forms: { isolated: 'ئو', initial: 'ئو', medial: 'ئو', final: 'ئو' }, example: 'ئوچۇق', image: 'https://via.placeholder.com/100?text=ئو' },
  { letter: 'ئۇ', forms: { isolated: 'ئۇ', initial: 'ئۇ', medial: 'ئۇ', final: 'ئۇ' }, example: 'ئۇچۇر', image: 'https://via.placeholder.com/100?text=ئۇ' },
  { letter: 'ئە', forms: { isolated: 'ئە', initial: 'ئە', medial: 'ئە', final: 'ئە' }, example: 'ئەت', image: 'https://via.placeholder.com/100?text=ئە' },
  { letter: 'ي', forms: { isolated: 'ي', initial: 'ي', medial: 'ـيـ', final: 'ـي' }, example: 'يول', image: 'https://via.placeholder.com/100?text=ي' },
];

// ======================
// 2. ئاسلى تەپلەر
// ======================

const defaultLessons = [
  {
    id: 'alphabet',
    title: 'ئۇيغۇر ئىلببەسى',
    description: 'ئۇيغۇر تىلىنىڭ 32 ھەرپى ۋە يېزىش شەكىللىرى',
    icon: '📚',
    keywords: '32 ھەرپ، يېزىش، ئوقۇش، ھەرپ شەكلى، ئۇلگە',
    usage: 'ئىلخانلىق دەۋرىدىن باشلاپ، زامانىۋى ئۇيغۇر يېزىقى تارقىتىلدى. ھەرپتىن باشلاپ سۆز تۈزۈش، ئوقۇش، يېزىشقا قوللىنىلىدۇ.',
    fullContent: {
      keyConcepts: [
        { term: 'يالغۇز ھەرپ', definition: 'سۆزدە ئالاھىدە تۇرۇشى' },
        { term: 'باش ھەرپ', definition: 'سۆزنى باشلايدىغان شەكلى' },
        { term: 'ئوتتۇرا ھەرپ', definition: 'سۆزنىڭ ئوتتۇرىسىدا تۇرۇشى' },
        { term: 'ئاخىر ھەرپ', definition: 'سۆزنى ئاخىرلىشىتىدۇ' },
        { term: 'ئۇلگە سۆز', definition: 'شۇ ھەرپ بىلەن باشلىنىدىغان ئۇيغۇر سۆزى' }
      ]
    }
  },
  {
    id: 'noun',
    title: 'ئىسم (ناون)',
    description: 'كىشى، نەرسە، ئورۇن نامى',
    icon: '👤',
    keywords: 'ئىسم، زات نامى، كىشى، نەرسە، ئورۇن',
    usage: 'كۈندىلىك سۆزلىنىشتە، جۈملىنىڭ باش ۋە ھالەت قىسىملىرىدا ئىشلىتىلىدۇ.',
    fullContent: {
      intro: 'ئىسم — كىشى، نەرسە، ئورۇن، ھېسسىيات قاتارلىق نامى.',
      examples: [
        'دوسۇتۇمنىڭ ئىسمى ئابدۇللا.',
        'بۇ يېڭى ماكتەپ بەك زۆر.',
        'ئۈرۈمچىنىڭ بازىرى كەڭ.'
      ],
      keyConcepts: [
        { term: 'كىشى ئىسمى', definition: 'ئابدۇللا، گۈلچىن' },
        { term: 'نەرسە ئىسمى', definition: 'كىتاب، ماشىنا' },
        { term: 'ئورۇن ئىسمى', definition: 'ماكتەپ، ئۈرۈمچى' },
        { term: 'كىچىكلىتىش ئىسمى', definition: 'بەچچە، باغچە، قىزچە' },
        { term: 'بىرلىك/كۆپلۈك', definition: 'كىتاب → كىتابلار' }
      ]
    }
  },
  {
    id: 'adjective',
    title: 'سۇپەت (ئادجېكتىپ)',
    description: 'ئىسمنىڭ خۇسۇسىيىتىنى ئىپادىلەيدۇ',
    icon: '🎨',
    keywords: 'سىفات، تۈس، چوڭ-كىچىك، ياخشى-يامان',
    usage: 'ئىسمغا قوشۇلۇپ ئۇنىڭ خۇسۇسىيىتىنى كۆرسىتىدۇ.',
    fullContent: {
      intro: 'سۇپەت — ئىسمنىڭ خۇسۇسىيىتىنى، رەڭگىنى، چوڭلۇقىنى ۋە باھاسىنى بىلدۈرىدۇ.',
      examples: [
        'بۇ يېشىل مېۋە بەك شىرىن.',
        'ئۇ ياخشىراق كىتاب ئوقۇيدۇ.',
        'بۇ كىچىك باغچە بەك گۈزەل.'
      ],
      keyConcepts: [
        { term: 'رەڭ سىفاتى', definition: 'يېشىل، قىزىل، كۆك' },
        { term: 'چوڭلۇق سىفاتى', definition: 'چوڭ، كىچىك، ئوتتۇرا' },
        { term: 'باھا سىفاتى', definition: 'ياخشى، يامان، ئاجايىپ' },
        { term: 'دەرىجە', definition: 'ياخشى → ياخشىراق → ئەڭ ياخشى' },
        { term: 'تەنھا-كۆپلۈك', definition: 'بىر قىز → ئىككى قىز' }
      ]
    }
  },
  {
    id: 'verb',
    title: 'پىئىل (فىل)',
    description: 'ھەرىكەت ياكى ھالەت',
    icon: '🏃',
    keywords: 'ھەرىكەت، ئىش، قىلىش، بولۇش',
    usage: 'جۈملىنىڭ ھەرىكەت قىسىمى بولۇپ، ۋاقىت بىلەن باغلىنىدۇ.',
    fullContent: {
      intro: 'پىئىل — كىشى ياكى نەرسىنىڭ قانداق ھەرىكەت قىلغانلىقى ياكى قانداق ھالەتتە ئىكەنلىكىنى بىلدۈرىدۇ.',
      examples: [
        'مەن دەرىجىلىك ئۆگەندۈم.',
        'ئۇ ھازىر ياتماقچى.',
        'ئەتە ماكتەپكە بارىمەن.'
      ],
      keyConcepts: [
        { term: 'ئۆتكەن زامان', definition: 'كەلدى، قىلدى' },
        { term: 'ھازىرقى زامان', definition: 'كېلىۋاتىدۇ، قىلىۋاتىدۇ' },
        { term: 'كەلگۈسى زامان', definition: 'كېلىدۇ، قىلىدۇ' },
        { term: 'بەيتلىك فىل', definition: 'كەلەي، باراي' },
        { term: 'ئەمرىي فىل', definition: 'كەل!، بار!' }
      ]
    }
  },
  {
    id: 'adverb',
    title: 'رەۋش (ئادۋېرب)',
    description: 'پىئىلنى تەپسىلىي قىلىدۇ',
    icon: '⏱️',
    keywords: 'ۋاقىت، ئورۇن، قانچىلىك، قانداق',
    usage: 'قانداق؟ قەچەن؟ قاچان؟ دېگەن سوئالغا جاۋاب بېرىدۇ.',
    fullContent: {
      intro: 'رەۋش — جۈملىدە پىئىل، سۇپەت ياكى باشقا رەۋشنى تەپسىلىي قىلىدۇ.',
      examples: [
        'ئۇ تېز يۈگۈردى.',
        'بۇ ئىشنى بەك ياخشى قىلدى.',
        'بۈگۈن مەكتەپكە باردىم.'
      ],
      keyConcepts: [
        { term: 'ۋاقىت رەۋشى', definition: 'بۈگۈن، ئەتە، ھازىر' },
        { term: 'ئورۇن رەۋشى', definition: 'بۇ يەرگە، ئۇ يەردىن' },
        { term: 'مىقدار رەۋشى', definition: 'كۆپ، ئاز، بەك' },
        { term: 'ھالەت رەۋشى', definition: 'تېز، ئاستا، ياخشى' },
        { term: 'تەكلىپ رەۋشى', definition: 'بولۇپمۇ، ئەمما' }
      ]
    }
  },
  {
    id: 'tense',
    title: 'ھالەت (زەمنىي/جەزىمە)',
    description: 'ۋاقىت بويىچە جۈملىنىڭ ھالىتى',
    icon: '⏳',
    keywords: 'ۋاقىت، كەلگۈسى، ھازىرقى، ئۆتكەن',
    usage: 'ۋاقىت بويىچە ھەرىكەتنىڭ بولۇش ۋەقىتىنى بىلدۈرىدۇ.',
    fullContent: {
      intro: 'ئۇيغۇر تىلىدا ۋاقىت بويىچە بىر قانچە ھالەت (زامان) بار بولۇپ، ھەرىكەتنىڭ ۋاقىتىنى كۆرسىتىدۇ.',
      examples: [
        'ئۇ ئۆتكەن ھەپتە مەكتەپكە باردى.',
        'مەن ھازىر دەرىجىلىك ئۆگەنۋاتىمەن.',
        'تومان كەلگۈسى ھەپتە ئۇيغۇرچە سۆزلىشىشنى باشلايدۇ.'
      ],
      keyConcepts: [
        { term: 'ئۆتكەن ھالەت', definition: 'مەن كەلدىم' },
        { term: 'ھازىرقى ھالەت', definition: 'مەن كېلىۋاتىمەن' },
        { term: 'كەلگۈسى ھالەت', definition: 'مەن كېلىمەن' },
        { term: 'داۋاملىش ھالەت', definition: 'كېلىۋاتىدۇ' },
        { term: 'تاماملاش ھالەت', definition: 'كەلدىلا' }
      ]
    }
  }
];

// ======================
// 3. گرامماتىكا تېمىسى
// ======================

const grammarLesson = {
  id: 'grammar',
  title: 'ئۇيغۇر تىلى گرامماتىكىسى',
  description: 'جۈملىنىڭ ئەزالىرى: خەۋەر، ئىگە، تولدۇرغۇچى، ئېنىقلىغۇچى ۋە باشقالار',
  icon: '📝',
  keywords: 'جۈملىە ئەزالىرى، خەۋەر، ئىگە، تولدۇرغۇچى، ئېنىقلىغۇچى',
  usage: 'ئۇيغۇر جۈملىسىنى تۈزۈش، تەھلىل قىلىش ۋە سۆزلىنىشتە تولۇق مەنى بىلدۈرۈش ئۈچۈن ئىشلىتىلىدۇ.',
  fullContent: {
    intro: 'ئۇيغۇرچە جۈملىدە 6 ئاساسىي ئەزا بار. ھەر بىرى جۈملىنىڭ تولۇق ۋە مەنلىق بولۇشىغا ياردەم بېرىدۇ.',
    examples: [
      'مەن (ئىگە) دەرىجىلىك (ئېنىقلىغۇچى) ئۆگىنەم (خەۋەر).',
      'ئۇ (ئىگە) بۇ كىتابنى (تولدۇرغۇچى) ئوقۇدى (خەۋەر).',
      'دوسۇتۇمنىڭ (ئېنىقلىغۇچى) ياخشى دوستى (خەۋەر) كەلدى.'
    ],
    keyConcepts: [
      { term: 'ئىگە', definition: 'جۈملەدىكى ھەرىكەتنى قىلىپ ياكى ھالەتتە تۇرغۇچى.' },
      { term: 'خەۋەر', definition: 'جۈملىدىكى ھەرىكەت، ھالەت ياكى خۇسۇسىيەت.' },
      { term: 'تولدۇرغۇچى', definition: 'خەۋەرنى تولۇقلايدىغان ئىسم ياكى ئىسمنىڭ ئورۇن بېسەيدىغان سۆز.' },
      { term: 'ئېنىقلىغۇچى', definition: 'ئىسم ياكى خەۋەرنىڭ ئالدىدا تۇرۇپ ئۇنى ئېنىقلايدۇ.' },
      { term: 'زامان ۋە ھالەت', definition: 'پىئىلنىڭ نۇرغۇنلىقى، زامانى، بىرلىك-كۆپلۈك قاتارلىق خۇسۇسىيىتى.' }
    ]
  }
};

// ======================
// 4. كومپونېنت
// ======================

const UyghurLanguageModule = () => {
  const [lessons, setLessons] = useState([]);
  const [userLessons, setUserLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  const [modalData, setModalData] = useState({
    title: '',
    description: '',
    icon: '📚',
    keywords: '',
    usage: '',
    fullContent: {
      intro: '',
      examples: [''],
      keyConcepts: [{ term: '', definition: '' }]
    }
  });

  // localStorage دىن يۈكلەش
  useEffect(() => {
    const saved = localStorage.getItem('uyghurLanguageUserLessons');
    const parsed = saved ? JSON.parse(saved) : [];
    setUserLessons(parsed);
    setLessons([...defaultLessons, grammarLesson, ...parsed]);
  }, []);

  const saveUserLessons = (newLessons) => {
    localStorage.setItem('uyghurLanguageUserLessons', JSON.stringify(newLessons));
    setLessons([...defaultLessons, grammarLesson, ...newLessons]);
  };

  // === تەپ قوشۇش ===
  const handleOpenAddModal = () => {
    setEditingLesson(null);
    setModalData({
      title: '',
      description: '',
      icon: '📚',
      keywords: '',
      usage: '',
      fullContent: {
        intro: '',
        examples: [''],
        keyConcepts: [{ term: '', definition: '' }]
      }
    });
    setShowAddModal(true);
  };

  // === تەپ ئىدىت قىلىش ===
  const handleEditLesson = (lesson) => {
    if (defaultLessons.some(l => l.id === lesson.id) || lesson.id === 'grammar') {
      alert('ئاسلى تەپلەرنى ئىدىت قىلىش مۇمكىن ئەمەس.');
      return;
    }
    setEditingLesson(lesson);
    setModalData({ ...lesson });
    setShowAddModal(true);
  };

  // === ساقلاش ===
  const handleSaveLesson = () => {
    if (!modalData.title.trim()) {
      alert('تېما ئىسمىنى كىرگۈزۈڭ!');
      return;
    }

    const newLesson = {
      ...modalData,
      id: editingLesson ? editingLesson.id : `user-${Date.now()}`
    };

    if (editingLesson) {
      const updated = userLessons.map(l => l.id === editingLesson.id ? newLesson : l);
      setUserLessons(updated);
      saveUserLessons(updated);
    } else {
      const updated = [...userLessons, newLesson];
      setUserLessons(updated);
      saveUserLessons(updated);
    }

    setShowAddModal(false);
    setSelectedLesson(newLesson.id);
  };

  // === مىسال/سۆز قوشۇش ===
  const addExample = () => {
    setModalData({
      ...modalData,
      fullContent: {
        ...modalData.fullContent,
        examples: [...modalData.fullContent.examples, '']
      }
    });
  };

  const updateExample = (index, value) => {
    const newExamples = [...modalData.fullContent.examples];
    newExamples[index] = value;
    setModalData({
      ...modalData,
      fullContent: {
        ...modalData.fullContent,
        examples: newExamples
      }
    });
  };

  const addConcept = () => {
    setModalData({
      ...modalData,
      fullContent: {
        ...modalData.fullContent,
        keyConcepts: [...modalData.fullContent.keyConcepts, { term: '', definition: '' }]
      }
    });
  };

  const updateConcept = (index, field, value) => {
    const newConcepts = [...modalData.fullContent.keyConcepts];
    newConcepts[index][field] = value;
    setModalData({
      ...modalData,
      fullContent: {
        ...modalData.fullContent,
        keyConcepts: newConcepts
      }
    });
  };

  // === باشقا ===
  const handleLessonComplete = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
    setSelectedLesson(null);
  };

  const getCompletionPercentage = () => {
    return Math.round((completedLessons.length / lessons.length) * 100);
  };

  // ======================
  // 5. كۆرسىتىش
  // ======================

  return (
    <div className="space-y-6 pr-[15%]">
      {/* ئىلگىرىلەش */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">ئىلگىرىلەش ھالىتى</h3>
          <span className="text-teal-600 font-bold">{getCompletionPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-teal-600 to-cyan-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* باشلىق */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-5 rounded-xl border border-teal-200">
        <h3 className="text-2xl font-bold text-teal-800">ئۇيغۇر تىلى — دىل تىلىم، مىللەت تىلى</h3>
        <p className="text-gray-700 mt-2">
          بۇ دەرىجىدە سىز ئۇيغۇر تىلىنىڭ ئاساسىي قۇرۇلمىسى، گرامماتىكىسى ۋە سۆز بېكىتىشنى ئۆگىنىدۇ.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
          <li>32 ھەرپ ۋە ئوقۇلۇشى</li>
          <li>سۆز تۈزۈلۈشى (مۇرەككەپ سۆزلەر)</li>
          <li>جۈملىە قۇرۇلۇشى</li>
          <li>ئىجتىمائىي سۆزلىنىش ئۇسلۇبى</li>
        </ul>
      </div>

      {/* تەپ كەكچىلەر */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`bg-white p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              selectedLesson === lesson.id
                ? 'border-teal-500 ring-2 ring-teal-200'
                : completedLessons.includes(lesson.id)
                ? 'border-green-500'
                : 'border-gray-200'
            }`}
            onClick={() => setSelectedLesson(lesson.id)}
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-2">{lesson.icon}</span>
              <div>
                <h4 className="font-bold text-gray-800">{lesson.title}</h4>
                {completedLessons.includes(lesson.id) && (
                  <span className="text-green-500 text-xs">✓ تاماملاندى</span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
            <div className="text-xs text-gray-500">{lesson.keywords}</div>
          </div>
        ))}
      </div>

      {/* تەپ مەزمۇنى */}
      {selectedLesson && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          {lessons
            .filter((l) => l.id === selectedLesson)
            .map((lesson) => (
              <div key={lesson.id}>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{lesson.icon}</span>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{lesson.title}</h4>
                      <p className="text-gray-600">{lesson.description}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedLesson(null)} className="text-gray-500 hover:text-gray-700 text-xl">✕</button>
                </div>

                {lesson.id === 'alphabet' ? (
                  <div>
                    <p className="text-gray-700 mb-4">ھەر بىر ھەرپنى چەككەندە ئۇنىڭ شەكلى، ئۇلگە سۆزى ۋە رەسىمى ئودۇلدا كۆرۈنىدۇ.</p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                      {uyghurAlphabet.map((h, idx) => (
                        <div key={idx} className="text-center cursor-pointer group" onClick={() => setSelectedLetter(h)}>
                          <div className="text-2xl font-bold text-teal-700 group-hover:text-3xl transition-all">{h.letter}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                      <p className="text-blue-700">{lesson.fullContent.intro}</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-bold text-gray-800 mb-2">مۇھىم مىساللار:</h5>
                      <ul className="list-disc pl-5 text-gray-700">
                        {lesson.fullContent.examples.filter(ex => ex.trim()).map((ex, i) => <li key={i}>{ex}</li>)}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                    <h5 className="font-bold text-teal-800 mb-4">ئاچقۇچلۇق سۆزلەر (15%)</h5>
                    <div className="space-y-3">
                      {lesson.fullContent.keyConcepts
                        .filter(c => c.term.trim() && c.definition.trim())
                        .map((c, i) => (
                          <div key={i} className="bg-white p-3 rounded border border-teal-200">
                            <div className="font-bold text-teal-700 text-sm">{c.term}</div>
                            <div className="text-gray-600 text-xs mt-1">{c.definition}</div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                    <h5 className="font-bold text-cyan-800 mb-4">ئىشلىتىش ساھەلىرى (5%)</h5>
                    <p className="text-cyan-700 leading-relaxed">{lesson.usage}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button onClick={() => setSelectedLesson(null)} className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                    ئارقا
                  </button>
                  <div className="space-x-3">
                    <button
                      onClick={() => handleEditLesson(lesson)}
                      className="px-6 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50"
                    >
                      ئىدىت قىلىش
                    </button>
                    <button
                      onClick={() => handleLessonComplete(lesson.id)}
                      className="px-8 py-2 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-lg hover:from-teal-700 hover:to-cyan-600 shadow-md transition-all"
                    >
                      تاماملاش
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* ھەرپ ئودۇلى */}
      {selectedLetter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <div className="text-center">
              <div className="text-8xl font-bold text-teal-700 mb-4">{selectedLetter.letter}</div>
              <img src={selectedLetter.image} alt={selectedLetter.letter} className="w-24 h-24 mx-auto mb-4 rounded shadow" />
              <p className="text-gray-600 text-sm mb-2">ئۇلگە: <strong>{selectedLetter.example}</strong></p>
              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                {Object.entries(selectedLetter.forms).map(([key, val]) => (
                  <div key={key}>
                    <div className="font-bold text-gray-700">
                      {key === 'isolated' ? 'يالغۇز' : key === 'initial' ? 'باش' : key === 'medial' ? 'ئوتتۇرا' : 'ئاخىر'}:
                    </div>
                    <div className="text-2xl">{val || '—'}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setSelectedLetter(null)} className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                ياخشى
              </button>
            </div>
          </div>
        </div>
      )}

      {/* تەپ قوشۇش/ئىدىت مودالى */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">{editingLesson ? 'تەپنى ئىدىت قىلىش' : 'يېڭى تەپ قوشۇش'}</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">تېما</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={modalData.title}
                  onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ئىزاھات</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="2"
                  value={modalData.description}
                  onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ئىكون (ئىشلىتىش مۇمكىن: 📚, 👤, 🎨, 🏃, ⏱️, ⏳, 📝)</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={modalData.icon}
                  onChange={(e) => setModalData({ ...modalData, icon: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ئاچقۇچلۇق سۆزلەر</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={modalData.keywords}
                  onChange={(e) => setModalData({ ...modalData, keywords: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ئىشلىتىش ساھەسى</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="2"
                  value={modalData.usage}
                  onChange={(e) => setModalData({ ...modalData, usage: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ئاساسى مەزمۇن (كىرىش سۆز)</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="3"
                  value={modalData.fullContent.intro}
                  onChange={(e) => setModalData({
                    ...modalData,
                    fullContent: { ...modalData.fullContent, intro: e.target.value }
                  })}
                />
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">مىساللار</label>
                  <button type="button" onClick={addExample} className="text-blue-600 text-sm">+ قوشۇش</button>
                </div>
                {modalData.fullContent.examples.map((ex, i) => (
                  <input
                    key={i}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    value={ex}
                    onChange={(e) => updateExample(i, e.target.value)}
                  />
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">ئاچقۇچلۇق سۆزلەر</label>
                  <button type="button" onClick={addConcept} className="text-blue-600 text-sm">+ قوشۇش</button>
                </div>
                {modalData.fullContent.keyConcepts.map((c, i) => (
                  <div key={i} className="flex gap-2 mt-1">
                    <input
                      type="text"
                      placeholder="ئاتى"
                      className="flex-1 p-2 border border-gray-300 rounded"
                      value={c.term}
                      onChange={(e) => updateConcept(i, 'term', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="ئىزاھات"
                      className="flex-1 p-2 border border-gray-300 rounded"
                      value={c.definition}
                      onChange={(e) => updateConcept(i, 'definition', e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                بىكار قىلىش
              </button>
              <button
                onClick={handleSaveLesson}
                className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                {editingLesson ? 'يېڭىلاش' : 'ساقلاش'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* تېست */}
      <div className="text-center">
        <button className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-lg hover:from-teal-700 hover:to-cyan-600 shadow-md transition-all">
          ئۇيغۇر تىلى تېستىنى باشلاش
        </button>
        <p className="text-gray-500 text-sm mt-2">12 سۇئال • 15 دەقىقە</p>
      </div>

      {/* يېڭى تەپ قوشۇش */}
      <div className="text-center pt-4 border-t border-gray-200">
        <button
          onClick={handleOpenAddModal}
          className="px-6 py-2.5 bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-lg hover:from-gray-700 hover:to-gray-600 shadow-md transition-all"
        >
          + يېڭى تەپ قوشۇش
        </button>
      </div>
    </div>
  );
};

export default UyghurLanguageModule;