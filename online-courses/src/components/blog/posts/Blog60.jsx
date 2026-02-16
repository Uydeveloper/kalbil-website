// Blog60.jsx - كۋانت ھېسابلاش: كەلگۈسى ھېسابلاشنىڭ يېڭى پارادىگمىسى
import React, { useState, useEffect, useMemo, useRef } from 'react';

const Blog60 = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('quantumDarkMode') === 'true';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [bookmarked, setBookmarked] = useState(() => {
    const saved = localStorage.getItem('quantumBookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [isMounted, setIsMounted] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('quantumDarkMode', darkMode.toString());
    localStorage.setItem('quantumBookmarks', JSON.stringify(bookmarked));
  }, [darkMode, bookmarked]);

  const fadeInClass = `transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;

  const toggleBookmark = (id) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const sections = [
    {
      id: 0,
      title: 'كۋانت ھېسابلاش دېگەن نېمە؟',
      icon: '⚛️',
      content: `كۋانت ھېسابلاش - بۇ فىزىكىلىق دۇنيانىڭ كۋانت جەھەتلىرىگە كىرىش ئارقىلىق ھەرىكەت قىلىدىغان كلاسسىك كومپيۇتېرلارنىڭ فىزىكىلىق قانۇنلار توپلىمىنى كېڭەيتىدىغان ۋە ئۇچۇرلارنى بىر تەرەپ قىلىشنىڭ يېڭى ئۇسۇللىرىنى ئاچىدىغان تەتقىقات ساھەسى.
      كۋانت پەن-تېخنىكىسىنىڭ يۇقىرى دەرىجىدە كۆپ ساھەلىك ساھەسى بولۇش سۈپىتى بىلەن، كۋانت ھېسابلاش ئالگورىزىم لايىھىلەش، مۇرەككەپلىك نەزەرىيىسى، سىستېما ئارخىتېكتۇرىسى ۋە قاتتىق دېتال تەرەققىياتىنىڭ ئۇچرىشىش نۇقتىسىدا تۇرىدۇ.
      **ئاساسلىق پرىنسىپلار:**
      1. **سۇپەرپوزىتسىيە**: كۇبىتلار بىر ۋاقىتتا ھەم |0⟩ ھەم |1⟩ ھالىتىدە بولۇشى مۇمكىن
      2. **ئارىلىشىش**: ئايرىم كۇبىتلارنىڭ ھالىتى بىرىكمە بولۇپ، بىر كۇبىتنىڭ ھالىتىنى ئۆزگەرتسە، يەنە بىرى ئاپتوماتىك ئۆزگىرىدۇ
      3. **كۋانت ئارىلاشمىسى**: دۆلەك ھادىسىسىگە ئوخشاش، كۋانت دۆلەكلىرى بىر-بىرى بىلەن ئارىلاشقاندا كۈچەيىش ياكى زەئىپلىنىش
      4. **كۋانت ئۆلچەش**: كۋانت ھالىتىنى ئۆلچەش سۇپەرپوزىتسىيىنى بۇزىدۇ، بىرلا نەتىجىگە كېلىدۇ`,
      code: `# ئاددىي كۋانت ھالىتى
import numpy as np
# كۋانت ھالىتى ۋېكتورى
# |ψ⟩ = α|0⟩ + β|1⟩
alpha = 1/np.sqrt(2)  # |0⟩ ئېھتىماللىقى
beta = 1/np.sqrt(2)   # |1⟩ ئېھتىماللىقى
quantum_state = np.array([alpha, beta])
print("كۋانت ھالىتى:", quantum_state)
print("|0⟩ ئېھتىماللىقى:", np.abs(alpha)**2)
print("|1⟩ ئېھتىماللىقى:", np.abs(beta)**2)`
    },
    {
      id: 1,
      title: 'كۋانت ھېسابلاشنىڭ ئەۋزەللىكى ۋە خىرىسى',
      icon: '⚖️',
      content: `**كۋانت ئەۋزەللىكى:**
      - **پاراللېل ھېسابلاش**: N كۇبىت بىر ۋاقىتتا 2ᴺ ھالىتىنى ئىپادىلىيەلەيدۇ
      - **تېز ئالگورىزىملار**: شور ئالگورىزىمى چوڭ سانلارنى كۋانت ماشىنىسىدا ئاسان ئايرىدۇ
      - **كۋانت سىمۇلياتسىيەسى**: كۋانت سىستېمىلىرىنى كلاسسىك كومپيۇتېردا سىمۇلياتسىيە قىلىش قىيىن
      - **يېڭى كېلىپ چىقىرىشلار**: يېڭى ئالگورىزىم ۋە ئۇسۇللارنى تەرەققىي قىلدۇرۇش
      **چوڭ خىرىسلەر:**
      1. **كۋانت خاتالىقى**: مۇھىت بىلەن بولغان ئۆز-ئارا تەسىر كۋانت ھالىتىنى بۇزىدۇ
      2. **ئايرىلىش**: كۋانت ھالىتى ۋاقىت ئۆتۈش بىلەن ئۆزىدىن ئايرىلىدۇ
      3. **مۇناسىۋەتلىك خاتالىقلار**: ئۆلچەش ۋە كونترول قىلىش جەريانىدىكى خاتالىقلار
      4. **قىيىن كونترول**: كۋانت دەرۋازىلىرىنى ئېنىق كونترول قىلىش تېخنىكىلىق قىيىنچىلىق`,
      comparison: [
        { aspect: 'ھېسابلاش كۈچى', quantum: '2ᴺ پاراللېللىق', classical: 'تەدرىجىي ئاشىدۇ' },
        { aspect: 'خاتالىق چىدامچانلىقى', quantum: 'ھەسساس', classical: 'مۇقىم' },
        { aspect: 'پىروگرامما قىيىنچىلىقى', quantum: 'يېڭى پارادىگما', classical: 'پىشىپ يېتىلگەن' },
        { aspect: 'ئىقتىدارلىق قوللىنىش', quantum: 'ئالاھىدە ئەھۋاللار', classical: 'ئومۇميۈزلۈك' }
      ]
    },
    {
      id: 2,
      title: 'يېقىن مۇددەتلىك كۋانت ئۈسكۈنىلىرى (NISQ)',
      icon: '🛠️',
      content: `**NISQ (Noisy Intermediate-Scale Quantum) دەۋرى:**
      بۈگۈنكى كۋانت كومپيۇتېرلىرى كىچىك، شاۋقۇنلۇق ۋە ئۇنىۋېرسال بولمىغان ئۈسكۈنىلەردۇر. بۇ ئۈسكۈنىلەر:
      - 50-1000 كۇبىت ئارلىقىدا
      - چەكلىك كۋانت ئارىلىشىش ۋاقتى
      - بولۇپمۇ خاتالىق نىسبىتى
      - ئىقتىدارلىق خاتالىق تۈزىتىش يوق
      **NISQ ئالگورىزىملىرى:**
      1. **VQE (Variational Quantum Eigensolver)**: كۋانت خىمىيەسى ئۈچۈن
      2. **QAOA (Quantum Approximate Optimization Algorithm)**: ئەلالاشتۇرۇش مەسىلىلىرى ئۈچۈن
      3. **كۋانت ماشىنا ئۆگىنىش**: كۋانت نېرۋا تورى ۋە خەن ئىشلەش
      4. **كۋانت سىمۇلياتسىيەسى**: كىچىك كۋانت سىستېمىلىرىنى سىمۇلياتسىيە قىلىش`,
      code: `# NISQ ئۈسكۈنىسى ئۈچۈن PennyLane كودى
import pennylane as qml
import numpy as np
# NISQ ئۈسكۈنىسى
dev = qml.device("default.mixed", wires=2)  # شاۋقۇنلۇق سىمۇلياتور
@qml.qnode(dev)
def nisq_circuit(params, noise_level=0.01):
    # كۋانت فىچەرلەر كىرگۈزۈش
    qml.RY(params[0], wires=0)
    qml.RY(params[1], wires=1)
    # ئارىلىشىش (شاۋقۇنلۇق)
    qml.CNOT(wires=[0, 1])
    # شاۋقۇنلۇق قوشۇش
    qml.DepolarizingChannel(noise_level, wires=0)
    qml.DepolarizingChannel(noise_level, wires=1)
    return qml.expval(qml.PauliZ(0))
# شاۋقۇنلۇق دەرىجىسىنى سىناپ بېقىش
for noise in [0.01, 0.05, 0.1]:
    result = nisq_circuit([0.5, 0.3], noise)
    print(f"شاۋقۇنلۇق {noise}: {result:.4f}")`
    },
    {
      id: 3,
      title: 'چوڭ رەسىم: كۋانت ئەۋزەللىكى',
      icon: '🚀',
      content: `كۋانت ئەۋزەللىكى - كۋانت كومپيۇتېرى بىر مەسىلىنى ھەل قىلىشتا بارلىق كلاسسىك كومپيۇتېرلاردىن تېزرەك ھېسابلاش قابىلىيىتى.
      **مۇھىم پۇرسەتلەر:**
      - **شور ئالگورىزىمى**: RSA شىفىرىنى بۇزۇش ئىقتىدارى
      - **گرۆۋەر ئالگورىزىمى**: سۈزۈك-سۈزۈك ئىزدەشنى تېزلەش
      - **كۋانت خەن ئىشلەش**: مۇرەككەپ خەن ئىشلەش مەسىلىلىرى
      - **كۋانت سىمۇلياتسىيەسى**: يۇقىرى مولېكۇلالار ۋە ماتېرىياللارنى سىمۇلياتسىيە قىلىش
      **كۋانت ئەۋزەللىكىنى كۆرسىتىش:**
      2023-يىلى، Google 53-كۇبىتلىق Sycamore پروسېسسورى بىلەن كۋانت ئەۋزەللىكىنى كۆرسەتتى. بىر ھېسابلاشنى 200 سېكۇنتتا ئورۇندىغان بولۇپ، ئەگەر دۇنيادىكى ئەڭ تېز سۇپەركومپيۇتېر ئىشلىتىلسە 10 مىڭ يىل كېتىدىكەن.`,
      achievements: [
        { year: '2019', achievement: 'Google Sycamore - 53 كۇبىت', impact: 'بىرىنچى كۋانت ئەۋزەللىكى' },
        { year: '2020', achievement: 'Jiuzhang - 76 فوتون', impact: 'ئىككىنچى كۋانت ئەۋزەللىكى' },
        { year: '2021', achievement: 'IBM Eagle - 127 كۇبىت', impact: 'قانۇن بۇزۇش' },
        { year: '2023', achievement: 'IBM Osprey - 433 كۇبىت', impact: 'يېڭى رېكورد' }
      ]
    },
    {
      id: 4,
      title: 'كۋانت ھېسابلاشنىڭ قوللىنىش ساھەلىرى',
      icon: '🔬',
      content: `**1. كۋانت خىمىيەسى ۋە ماتېرىيال ئىلمى:**
      - يېڭى دورىلارنى تەتقىق قىلىش ۋە لايىھىلەش
      - يېڭى ماتېرىياللارنى كەشپ قىلىش (سۇپەر ئۆتكۈزگۈچى، يېڭى باتارېيەلەر)
      - كىمنوۋىۋىكى كېلىپ چىقىرىش جەريانىنى ئۈنۈملۈكلەشتۈرۈش
      **2. ئامىلاشتۇرۇش ۋە لايىھىلەش:**
      - تاشيول ۋە قاتناش تورىنى ئەلالاشتۇرۇش
      - يېڭى مەھسۇلاتلارنى لايىھىلەش
      - زەئىپ ۋە زىيانلارنى ئالدىن ئېلېمىناتسىيە قىلىش
      **3. مالىيە ۋە ئىگىلىك باشقۇرۇش:**
      - مالىيە بازارلىرىنى مودېللاشتۇرۇش
      - خەتەرنى باشقۇرۇش ۋە ئۆلچەش
      - ئىگىلىك زەنجىرىنى ئەلالاشتۇرۇش
      **4. كۋانت شىفىرلاش ۋە بىخەتەرلىك:**
      - ھازىرقى شىفىرلاش سىستېمىلىرىنىڭ بىخەتەرلىكىنى باھالاش
      - يېڭى كۋانت خەتەرگە چىداملىق شىفىرلاش تېخنىكىلىرى`,
      applications: [
        { field: 'خىمىيە', examples: ['دورا تەتقىقاتى', 'كېلىپ چىقىرىش', 'ماتېرىيال كەشپىياتى'], impact: 'High' },
        { field: 'مالىيە', examples: ['پورتىپول ئەلالاشتۇرۇش', 'خەتەر باشقۇرۇش', 'مۇرەككەپ مالىيە مودېللاشتۇرۇش'], impact: 'Medium' },
        { field: 'لوجىستىكا', examples: ['تاشيول تورى', 'زامانىۋى زەنجىر', 'ئامبار باشقۇرۇش'], impact: 'High' },
        { field: 'كۋانت شىفىرلاش', examples: ['RSA شىفىرىنى بۇزۇش', 'كۋانت تورى', 'بىخەتەر ئالاقە'], impact: 'Critical' }
      ]
    },
    {
      id: 5,
      title: 'كۋانت ھېسابلاش ئۈچۈن PennyLane',
      icon: '🐍',
      content: `PennyLane - بۇ كۋانت ھېسابلاش، كۋانت ماشىنا ئۆگىنىش ۋە كۋانت خىمىيەسى قاتارلىق ساھەلەردە كەڭ دائىرىلىك ۋەزىپىلەرنى قوللايدىغان ئوچۇق كودلۇق كۆپ سۇپا Python كۈتۈپخانىسى.
      **ئاساسىي ئالاھىدىلىكلەر:**
      - **كۋانت پەرقلەندۈرگىلى بولىدىغان پىروگرامما تۈزۈش**: ئۆگىنىلىدىغان كۋانت توك يولى
      - **كەڭ ئۈسكۈنە قوللىشى**: سىمۇلياتور ۋە ھەقىقىي كۋانت ئۈسكۈنىلىرى
      - **كلاسسىك ML بىلەن بىرلەشمە**: PyTorch, TensorFlow, JAX بىلەن مۇكەممەل بىرلەشمە
      - **مۆلچەرلەش قوراللىرى**: كۋانت ماشىنا ئۆگىنىش ۋە كۋانت خىمىيەسى ئۈچۈن ئايرىم مۆلچەرلەش قوراللىرى`,
      code: `# PennyLane بىلەن كۋانت خىمىيە مەسىلىسى
import pennylane as qml
import numpy as np
# ھىدروگېن مولېكۇلىسىنىڭ ئېنېرگىيەسىنى ھېسابلاش
dev = qml.device("default.qubit", wires=2)
@qml.qnode(dev)
def hydrogen_molecule(bond_length, params):
    # كۋانت خىمىيە توك يولى
    qml.BasisState([1, 0], wires=[0, 1])  # باشلانغۇچ ھالىتى
    # قاتلام قۇرۇلما
    qml.RY(params[0], wires=0)
    qml.RY(params[1], wires=1)
    qml.CNOT(wires=[0, 1])
    return qml.expval(qml.PauliZ(0))
# مولېكۇل ئارىلىقىغا قاراپ ئېنېرگىيەنى مۆلچەرلەش
bond_lengths = np.linspace(0.5, 2.0, 10)
for length in bond_lengths:
    energy = hydrogen_molecule(length, [0.1, 0.2])
    print(f"ئارىلىق {length:.2f}: ئېنېرگىيە {energy:.4f}")`
    }
  ];

  const quantumTimeline = [
    { year: '1980', event: 'كۋانت ھېسابلاش ئىدىيەسى', desc: 'فېيمان ۋە بېنىئوف تەرىپىدىن تەكلىپ قىلىندى' },
    { year: '1994', event: 'شور ئالگورىزىمى', desc: 'پىتىر شور تەرىپىدىن ئىشلەپ چىقىلدى' },
    { year: '2019', event: 'Google كۋانت ئۈستۈنلۈكى', desc: 'سىياقۇلاس 53-كۇبىتلىق كومپيۇتېر' },
    { year: '2030+', event: 'خاتالىققا چىداملىق كۋانت', desc: 'ئۇنىۋېرسال كۋانت كومپيۇتېرلىرى' }
  ];

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setBookmarked(prev => [...prev, `copied-${id}`]);
    setTimeout(() => setBookmarked(prev => prev.filter(x => x !== `copied-${id}`)), 2000);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
      style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 py-3 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="بەت تىزىملىكىنى ئاچىش"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="text-2xl">⚛️</div>
              <h1 className="font-bold text-lg">كۋانت ھېسابلاش: كەلگۈسى ھېسابلاشنىڭ يېڭى پارادىگمىسى</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleBookmark('course')}
              className={`p-2 rounded-full ${bookmarked.includes('course') ? 'text-yellow-500' : 'text-gray-500'}`}
              aria-label="بۇ ماقالىنى خاتىرە قىلىش"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={`${darkMode ? 'يورۇق تېما' : 'قارايۇشان تېما'} غا ئالماشتۇرۇش`}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar — Desktop */}
        <aside className="hidden lg:block w-80 pr-6 py-6">
          <div className="sticky top-24">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">📋 تىزىملىك</h2>
            <nav className="space-y-2">
              {sections.map(s => (
                <a
                  key={s.id}
                  href={`#section-${s.id}`}
                  onClick={() => setActiveSection(s.id)}
                  className={`block p-3 rounded-lg transition-all ${
                    activeSection === s.id
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-l-4 border-purple-500'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="font-medium">{s.icon} {s.title}</div>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-6 px-4 lg:px-0">
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
              <div className="absolute left-0 top-0 w-80 h-full bg-white dark:bg-gray-900 shadow-xl overflow-y-auto">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-bold">باب تىزىملىكى</h3>
                  <button onClick={() => setMobileMenuOpen(false)} aria-label="ياپ">✕</button>
                </div>
                <nav className="p-4 space-y-2">
                  {sections.map(s => (
                    <a
                      key={s.id}
                      href={`#section-${s.id}`}
                      onClick={() => { setActiveSection(s.id); setMobileMenuOpen(false); }}
                      className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {s.icon} {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Hero */}
          <section className={`${fadeInClass} mb-12`}>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-2xl text-white p-6 md:p-10 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">كۋانت ھېسابلاش: كەلگۈسى ھېسابلاشنىڭ يېڭى پارادىگمىسى</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                فيزىكا، ئالگورىزىم، تېخنىكا بىلەن بىرلەشتۈرۈلگەن زامانىۋى ئىلمىي ئىنقىلاب
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full">كۈچلۈك ماقالە</span>
                <span className="px-3 py-1 bg-white/20 rounded-full">6 باب</span>
                <span className="px-3 py-1 bg-white/20 rounded-full">كود مىساللىرى بىلەن</span>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className={`${fadeInClass} mb-12`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">⏳ كۋانت ھېسابلاشنىڭ تارىخىي تەرەققىياتى</h2>
            <div className="space-y-6">
              {quantumTimeline.map((item, i) => (
                <div key={i} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      i === 0 ? 'bg-green-500' : i === quantumTimeline.length - 1 ? 'bg-red-500' : 'bg-purple-500'
                    }`}>
                      {item.year}
                    </div>
                    {i < quantumTimeline.length - 1 && (
                      <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.event}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sections */}
          {sections.map(section => (
            <section
              key={section.id}
              id={`section-${section.id}`}
              ref={activeSection === section.id ? contentRef : null}
              className={`${fadeInClass} mb-12`}
            >
              <article className={`rounded-2xl overflow-hidden shadow-lg border-l-4 border-purple-500 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className={`p-5 md:p-6 border-b ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{section.icon} {section.title}</h2>
                    </div>
                    <button
                      onClick={() => toggleBookmark(section.id)}
                      className={`p-2 rounded ${bookmarked.includes(section.id) ? 'text-yellow-500' : 'text-gray-400'}`}
                      aria-label={`${section.title} نى خاتىرە قىلىش`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <p className="mb-4 text-justify">{section.content}</p>

                  {section.comparison && (
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th className="px-4 py-2 text-left">جەھەت</th>
                            <th className="px-4 py-2 text-left">كۋانت</th>
                            <th className="px-4 py-2 text-left">كلاسسىك</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {section.comparison.map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}>
                              <td className="px-4 py-2 font-medium">{row.aspect}</td>
                              <td className="px-4 py-2">{row.quantum}</td>
                              <td className="px-4 py-2">{row.classical}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.achievements && (
                    <div className="mb-6">
                      <h3 className="font-bold mb-2">مۇۋەپپەقىيەتلەر:</h3>
                      <div className="space-y-2">
                        {section.achievements.map((item, idx) => (
                          <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                            <div className="font-medium">{item.year}: {item.achievement}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{item.impact}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.applications && (
                    <div className="mb-6">
                      <h3 className="font-bold mb-2">قوللىنىش ساھەلىرى:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.applications.map((app, idx) => (
                          <div key={idx} className="border rounded-lg p-4">
                            <h4 className="font-bold mb-1">{app.field}</h4>
                            <p className="text-sm mb-2"><strong>مىساللار:</strong> {app.examples.join(', ')}</p>
                            <span className={`px-2 py-1 text-xs rounded ${
                              app.impact === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
                              app.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200' :
                              'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                            }`}>
                              تەسىر: {app.impact}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.code && (
                    <div className="mb-6">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-green-500">💻</span> كود ئۈلگىسى:
                      </h3>
                      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                        <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-300">
                          <span className="text-sm font-mono">quantum_example.py</span>
                          <button
                            onClick={() => copyCode(section.code, section.id)}
                            className={`text-sm px-2 py-1 rounded flex items-center ${
                              bookmarked.includes(`copied-${section.id}`) ? 'bg-green-500 text-white' : 'hover:bg-gray-700'
                            }`}
                          >
                            {bookmarked.includes(`copied-${section.id}`) ? '✔ كۆچۈرۈلدى' : '⎘ كۆچۈرۈش'}
                          </button>
                        </div>
                        <div className="p-4 overflow-x-auto">
                          <pre className="text-green-400 text-left text-sm font-mono whitespace-pre">
                            {section.code}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </section>
          ))}

          {/* Future Outlook */}
          <section className={`${fadeInClass} mb-12`}>
            <h2 className="text-2xl font-bold mb-6">🔮 كەلگۈسى باشقۇچى</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <ul className="list-disc pl-5 space-y-2 text-blue-700 dark:text-blue-300">
                <li><strong>2025:</strong> 1000+ كۇبىتلىق كۋانت كومپيۇتېرلىرى</li>
                <li><strong>2030:</strong> خاتالىققا چىداملىق كۋانت كومپيۇتېرلىرى</li>
                <li><strong>2040:</strong> ھەر خىل سانائەتتە كەڭ قوللىنىلىش</li>
                <li><strong>2050:</strong> كۋانت ئىنترنېت ۋە كۋانت ئالاقە سىستېمىلىرى</li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <h3 className="text-xl font-bold mb-2">كۋانت ھېسابلاش — زامانىۋى ئىلمىي ئىنقىلاب</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
              بۇ ماقالىدە ئۇيغۇر تىلىدا كۈچلۈك، مۇكەممەل تېخنىكىلىق مەزمۇن بار. سىزگە ياردەم بېرىشكە ھەزىر!
            </p>
            <p className="text-sm">
              📚 KeLBiL ماشىنا ئۆگىنىش مەركىزى | 2026-يىلى 1-ئاينىڭ 5-كۈنى، دۈشەنبە
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Blog60;