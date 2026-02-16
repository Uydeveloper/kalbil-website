import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Blog102.css';

const Blog104 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [aiThinking, setAiThinking] = useState(false);
  const [aiAnswer, setAiAnswer] = useState('');
  const [brainActive, setBrainActive] = useState(true);
  const [thinkingLevel, setThinkingLevel] = useState(100);
  const [autoMode, setAutoMode] = useState(false);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // مەزمۇن بۆلەكلىرى
  const sections = [
    { id: 0, title: "كىرىش سۆز", icon: "🧠" },
    { id: 1, title: "ئاپتوماتىك ئويلىشىش", icon: "⚙️" },
    { id: 2, title: "ئويلىشىش قابىلىيىتى", icon: "📉" },
    { id: 3, title: "مەسىلە ھەل قىلىش", icon: "🔍" },
    { id: 4, title: "سوئال قويۇش", icon: "❓" },
    { id: 5, title: "ئىجادچانلىق", icon: "🎨" },
    { id: 6, title: "تەڭشەش ۋە ھەل", icon: "🔧" },
  ];

  // تېما بېتىش
  const themes = [
    { bg: '#fef7cd', border: '#fde68a', icon: '🧠' },
    { bg: '#f0f9ff', border: '#bae6fd', icon: '⚙️' },
    { bg: '#fef2f2', border: '#fecaca', icon: '📉' },
    { bg: '#f0fdf4', border: '#bbf7d0', icon: '🔍' },
    { bg: '#f5f3ff', border: '#ddd6fe', icon: '❓' },
    { bg: '#fffbeb', border: '#fde68a', icon: '🎨' },
    { bg: '#ecfdf5', border: '#a7f3d0', icon: '🔧' },
  ];

  // ئويلىشىش نىسپىتىنى ئۆلچەش
  const [thinkingStats, setThinkingStats] = useState({
    critical: 85,
    creative: 70,
    question: 60,
    memory: 45,
    auto: 30
  });

  // PDF چاپلاش
  const handleDownloadPDF = () => {
    const input = contentRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    html2canvas(input, { 
      scale: 3, 
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      windowWidth: input.scrollWidth,
      windowHeight: input.scrollHeight,
    }).then((canvas) => {
      document.body.style.overflow = originalOverflow;
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;
      let page = 1;
      
      pdf.setFontSize(20);
      pdf.setTextColor(30, 41, 59);
      pdf.text('سۈنئىي ئەقىل بىلەن ئويلىشىش', 105, 15, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= 277;
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 20;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 277;
        page++;
      }
      
      pdf.save('سۈنئىي_ئەقىل_ۋە_ئويلىشىش.pdf');
    }).catch(err => {
      console.error('PDF خاتا:', err);
      document.body.style.overflow = originalOverflow;
    });
  };

  // ئاۋازلىق ئوقۇش
  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = contentRef.current.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.lang = 'ug';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();
    const uyghurVoice = voices.find(voice => 
      voice.lang.includes('ug') || voice.name.includes('Uyghur')
    );
    if (uyghurVoice) utterance.voice = uyghurVoice;

    utterance.onstart = () => {
      setIsSpeaking(true);
      startProgressAnimation();
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setProgress(0);
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      setProgress(0);
    };

    window.speechSynthesis.speak(utterance);
  };

  const startProgressAnimation = () => {
    const duration = 60000;
    const interval = 100;
    const steps = duration / interval;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      if (!isSpeaking) {
        clearInterval(timer);
        return;
      }
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
  };

  // ئىنسان مىسالى سوئال سوراش
  const askHumanQuestion = () => {
    setAiThinking(true);
    setAiAnswer('');
    
    setTimeout(() => {
      const humanQuestions = [
        "نېمە ئۈچۈن؟ بۇنىڭ باشقا چارىسى بارمۇ؟ ئەگەر تەتۈر ئەھۋال بولسا نېمە قىلىمىز؟",
        "بۇ سوئالنىڭ ئارقىسىدا قانداق ئاساسىي چۈشەنچە ياتىدۇ؟ بۇنى قانداق باشقاچە تەپسىللىشىمىز مۇمكىن؟",
        "بۇ جاۋاب توغرامۇ؟ نېمە ئۈچۈن توغرا؟ باشقىلار بۇ ھەققىدە نېمە دەيدۇ؟",
        "بۇ مەسىلىنىڭ قايسى قىسمى ئەڭ مۇھىم؟ نېمە ئۈچۈن مۇھىم؟ بۇنى قانداق ئاددىيلاشتۇرۇش مۇمكىن؟"
      ];
      
      const randomResponse = humanQuestions[Math.floor(Math.random() * humanQuestions.length)];
      setAiAnswer(randomResponse);
      setAiThinking(false);
      
      // ئويلىشىش نىسپىتىنى يۇقىرى كۆتۈرۈش
      setThinkingStats(prev => ({
        ...prev,
        question: Math.min(100, prev.question + 15),
        critical: Math.min(100, prev.critical + 10)
      }));
    }, 2000);
  };

  // ئاپتوماتىك ئويلىشىشنى سىنا
  const testAutoThinking = () => {
    setAutoMode(true);
    setThinkingLevel(thinkingLevel - 5 > 0 ? thinkingLevel - 5 : 0);
    
    setTimeout(() => {
      setAutoMode(false);
      setThinkingStats(prev => ({
        ...prev,
        auto: Math.min(100, prev.auto + 10),
        creative: Math.max(0, prev.creative - 5),
        question: Math.max(0, prev.question - 5)
      }));
    }, 3000);
  };

  // بېيىننى ئاكتىپلاشتۇرۇش
  const activateBrain = () => {
    setBrainActive(true);
    setThinkingLevel(100);
    
    setTimeout(() => {
      setThinkingStats(prev => ({
        ...prev,
        critical: Math.min(100, prev.critical + 20),
        creative: Math.min(100, prev.creative + 15),
        question: Math.min(100, prev.question + 10)
      }));
    }, 1000);
  };

  // بۆلەككە سەكرەش
  const scrollToSection = (index) => {
    setActiveSection(index);
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // تەڭشەك كۆرسىتىش
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [themeColor, setThemeColor] = useState('#0891b2');

  const fontSizes = {
    small: '0.9rem',
    medium: '1rem',
    large: '1.1rem',
    xlarge: '1.2rem'
  };

  // رەڭ پەللىسى
  const colorPalette = [
    { name: 'كۆك', value: '#0891b2' },
    { name: 'يېشىل', value: '#059669' },
    { name: 'بىنەپشە', value: '#7c3aed' },
    { name: 'سارى', value: '#d97706' },
    { name: 'قىزىل', value: '#dc2626' }
  ];

  // ئاۋتوماتىك سىلايد
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        if (sectionsRef.current[index]) {
          const sectionTop = sectionsRef.current[index].offsetTop;
          const sectionBottom = sectionTop + sectionsRef.current[index].offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index);
          }
        }
      });
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // خاتالىقنى تۈزىتىش: style قىممىتىنى ئايرىم ئۆزگەرتىش
  const contentWrapperStyle = {
    fontSize: fontSizes[fontSize],
    '--theme-color': themeColor
  };

  return (
    <div className="blog-container" dir="rtl">
      {/* ئىلگىرىلەش بارى */}
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>

      {/* قورال بالداق */}
      <div className="toolbar">
        <div className="toolbar-left">
          <div className="logo">
            <span className="logo-icon">🧠</span>
            <span className="logo-text">ئويلىشىش ۋە سۈنئىي ئەقىل</span>
          </div>
        </div>
        
        <div className="toolbar-right">
          <button 
            className={`toolbar-btn ${showSettings ? 'active' : ''}`}
            onClick={() => setShowSettings(!showSettings)}
            title="تەڭشەش"
          >
            <span className="btn-icon">⚙️</span>
            <span className="btn-text">تەڭشەش</span>
          </button>
          
          <button 
            className="toolbar-btn"
            onClick={toggleSpeech}
            title={isSpeaking ? 'توختا' : 'ئاۋازلىق ئوقۇ'}
          >
            <span className="btn-icon">{isSpeaking ? '⏸️' : '🔊'}</span>
            <span className="btn-text">
              {isSpeaking ? 'توختا' : 'ئاۋاز'}
            </span>
            {isSpeaking && <div className="speaking-indicator"></div>}
          </button>
          
          <button 
            className="toolbar-btn primary"
            onClick={handleDownloadPDF}
            title="PDF چاپلاش"
          >
            <span className="btn-icon">📥</span>
            <span className="btn-text">PDF چاپلاش</span>
          </button>
        </div>
      </div>

      {/* تەڭشەك پانېلى */}
      {showSettings && (
        <div className="settings-panel">
          <h3 className="settings-title">تەڭشەش</h3>
          <div className="settings-group">
            <label>خەت چوڭلۇقى:</label>
            <div className="font-size-buttons">
              {Object.entries(fontSizes).map(([key, value]) => (
                <button
                  key={key}
                  className={`font-size-btn ${fontSize === key ? 'active' : ''}`}
                  onClick={() => setFontSize(key)}
                >
                  {key === 'small' ? 'A' : key === 'medium' ? 'A' : key === 'large' ? 'A' : 'A'}
                </button>
              ))}
            </div>
          </div>
          
          <div className="settings-group">
            <label>رەڭ تاللاش:</label>
            <div className="color-palette">
              {colorPalette.map(color => (
                <button
                  key={color.value}
                  className="color-btn"
                  style={{ backgroundColor: color.value }}
                  onClick={() => setThemeColor(color.value)}
                  title={color.name}
                >
                  {themeColor === color.value && <span className="checkmark">✓</span>}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="close-settings"
            onClick={() => setShowSettings(false)}
          >
            تامام
          </button>
        </div>
      )}

      {/* تېز يوللاش تاختىسى */}
      <div className="quick-nav">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`quick-nav-btn ${activeSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            style={{ 
              backgroundColor: activeSection === index ? themeColor : 'rgba(255,255,255,0.1)',
              borderColor: activeSection === index ? themeColor : 'rgba(255,255,255,0.2)'
            }}
          >
            <span className="quick-nav-icon">{section.icon}</span>
            <span className="quick-nav-text">{section.title}</span>
          </button>
        ))}
      </div>

      {/* ئۆزئارا تەسىرلىك بېيىن مونىتىرى */}
      <div className="interactive-brain" style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfeff 100%)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid #bae6fd',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#0c4a6e' }}>
            🧠 سىزنىڭ ئويلىشىش قابىلىيىتىڭىز
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className={`toolbar-btn ${brainActive ? 'primary' : ''}`}
              onClick={activateBrain}
              style={{ fontSize: '0.9rem' }}
            >
              {brainActive ? 'بېيىن ئاكتىپ ✅' : 'بېيىننى ئاكتىپلاشتۇرۇش'}
            </button>
            <button 
              className={`toolbar-btn ${autoMode ? 'active' : ''}`}
              onClick={testAutoThinking}
              style={{ fontSize: '0.9rem' }}
            >
              {autoMode ? 'ئاپتوماتىك... ⚙️' : 'ئاپتوماتىك سىناڭ'}
            </button>
          </div>
        </div>
        
        {/* ئويلىشىش نىسپىتى */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ color: '#475569' }}>ئويلىشىش دەرىجىسى</span>
            <span style={{ fontWeight: 'bold', color: '#0c4a6e' }}>{thinkingLevel}%</span>
          </div>
          <div style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#e2e8f0',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${thinkingLevel}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${themeColor}, #7c3aed)`,
              transition: 'width 0.5s ease',
              borderRadius: '10px'
            }}></div>
          </div>
        </div>
        
        {/* قابىلىيەت نىسپىتى */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {Object.entries(thinkingStats).map(([key, value]) => (
            <div key={key} style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#475569' }}>
                  {key === 'critical' && 'تەنقىدىي ئويلىشىش'}
                  {key === 'creative' && 'ئىجادچانلىق'}
                  {key === 'question' && 'سوئال قويۇش'}
                  {key === 'memory' && 'يادلىشىش'}
                  {key === 'auto' && 'ئاپتوماتىكلىشىش'}
                </span>
                <span style={{ fontWeight: 'bold', color: '#0c4a6e' }}>{value}%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e2e8f0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${value}%`,
                  height: '100%',
                  backgroundColor: 
                    value > 80 ? '#10b981' :
                    value > 60 ? '#3b82f6' :
                    value > 40 ? '#f59e0b' : '#ef4444',
                  transition: 'width 0.5s ease'
                }}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* ئىنسان سوئالى سوراش */}
        {aiThinking && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <div className="thinking-animation">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>ئىنسانچە ئويلاۋاتىدۇ...</p>
          </div>
        )}
        
        {aiAnswer && (
          <div className="ai-response" style={{
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: '4px solid #0891b2',
            marginTop: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>🤔</div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>ئىنسانچە سوئال:</h4>
                <p style={{ margin: 0, fontStyle: 'italic', color: '#475569' }}>"{aiAnswer}"</p>
              </div>
            </div>
          </div>
        )}
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button 
            className="toolbar-btn"
            onClick={askHumanQuestion}
            disabled={aiThinking}
            style={{ minWidth: '200px' }}
          >
            {aiThinking ? 'ئويلاۋاتىدۇ...' : 'ئىنسانچە سوئال قويۇڭ'}
          </button>
        </div>
      </div>

      {/* ماۋزۇتىكى مەزمۇن */}
      <div 
        ref={contentRef} 
        className="content-wrapper"
        style={contentWrapperStyle}
      >
        {/* باش رەسىم ۋە ماۋزۇ */}
        <div className="hero-section">
          <div className="hero-image-container">
            <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.9), rgba(59, 130, 246, 0.7))' }}>
              <h1 className="hero-title">
                سۈنئىي ئەقىل بىلەن ئويلىشىش — 
                <span className="highlight"> بىزنىڭ ئويلىشىش قابىلىيتىمۇ «ئاپتوماتىك» بولۇپ قالامدۇ؟</span>
              </h1>
              <p className="hero-subtitle">
                ھەر قانداق سوئالغا جاۋاب تېپىش ئادەتتە بولۇپ قالغاندا، بىز «سوئال قويۇش» نى ئۇنتۇپ قالامدۇ؟
              </p>
              <div className="hero-meta">
                <span className="meta-item">⏱️ ئوقۇش ۋاقتى: 7 مىنۇت</span>
                <span className="meta-item">📅 2026-يىلى 1-ئاينىڭ 15-كۈنى</span>
                <span className="meta-item">🧠 قىيىنچىلىق: ئوتتۇرا</span>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 1: كىرىش سۆز */}
        <div 
          ref={el => sectionsRef.current[0] = el}
          className="section"
          style={{ backgroundColor: themes[0].bg, borderColor: themes[0].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[0].icon}</span>
            <h2 className="section-title">كىرىش سۆز: ماشىنىلاشتۇرۇلغان ئويلىشىش دەۋرى</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى، ھەر بىر سوئالغا 0.3 سېكۇنت ئىچىدە جاۋاب تاپقىلى بولىدۇ. 
              ChatGPT، Gemini، Claude — ھەممىسى «ئىنساندىن تېز» ۋە «ئىنساندىن توغرا». 
              <strong> لېكىن بۇ سورۇن بىزنىڭ ئويلىشىشىمىزگە قانداق تەسىر كۆرسىتىدۇ؟</strong>
            </p>
            
            <div className="callout-box" style={{ borderLeft: '4px solid #0891b2' }}>
              <div className="callout-icon">⚠️</div>
              <div className="callout-content">
                <h3>ئاپتوماتىك ئويلىشىش خەۋپى</h3>
                <p>
                  سىز كۈندە 50 قېتىم سوئال سورايسىز، ھەممىسىگە AI جاۋاب بېرىدۇ. 
                  5 يىل ئۆتكەندە، سىز ئۆزىڭىزنىڭ ئويلىشىشىڭىزدا قانداق ئۆزگىرىشلەرنى ھېس قىلىسىز؟
                </p>
              </div>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>تېزلىك</h3>
                <p>AI: 0.3 سېكۇنت | ئىنسان: 30 سېكۇنت</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>دەقىقىلىك</h3>
                <p>AI: 95% توغرا | ئىنسان: 70% توغرا</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💭</div>
                <h3>چوڭقۇرلۇق</h3>
                <p>AI: سىرتىدىن چوڭقۇر | ئىنسان: ئىچكىدە چوڭقۇر</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>مەلۇمات</h3>
                <p>AI: بارلىق مەلۇمات | ئىنسان: چەكلىك مەلۇمات</p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 2: ئاپتوماتىك ئويلىشىش */}
        <div 
          ref={el => sectionsRef.current[1] = el}
          className="section"
          style={{ backgroundColor: themes[1].bg, borderColor: themes[1].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[1].icon}</span>
            <h2 className="section-title">1. ئاپتوماتىك ئويلىشىش: قانداق يۈز بېرىدۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              ئاپتوماتىك ئويلىشىش — بۇ بىزنىڭ ماشىنىغا ئوخشاش ئويلىشىپ قېلىشىمىز. 
              بۇ جەريان يۇشۇرۇن ۋە ئاستا بولىدۇ:
            </p>
            
            <div className="characteristics-list">
              <div className="characteristic-item">
                <div className="char-icon">🧩</div>
                <div className="char-content">
                  <h4>مەسىلە ھەل قىلىش</h4>
                  <p>
                    «بۇ مەسىلەنى ChatGPT گە سورايمەن» دەپ ئويلاش — 
                    <strong> ئۆزىڭىز ئويلاشتىن ۋاز كېچىش</strong>.
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">📝</div>
                <div className="char-content">
                  <h4>يېزىش</h4>
                  <p>
                    «AI گە ئىدىيە بېرىمەن، ئۇ يازسۇن» — 
                    <strong> ئۆز قابىلىيىتىڭىزنى ئىشلەتمەسلىك</strong>.
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">🤔</div>
                <div className="char-content">
                  <h4>قارار چىقىرىش</h4>
                  <p>
                    «AI نىڭ تەكلىپىنى قوبۇل قىلاي» — 
                    <strong> ئۆز ئەقلىڭىزنىڭ قارىشىنى سۇئال قىلماسلىق</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="important-note" style={{ backgroundColor: '#fef3f2' }}>
              <h3>ئاپتوماتىك ئويلىشىش بەلگىلىرى:</h3>
              <ul style={{ paddingRight: '1.5rem', marginTop: '0.5rem' }}>
                <li>سوئال سوراشتىن بۇرۇن AI نى ئويلاش</li>
                <li>جاۋابقا ھېچقانداق شۈبھە قىلماستىن قوبۇل قىلىش</li>
                <li>ئۆزىڭىزنىڭ قارىشىنى شەكىللەندۈرمەستىن باشقىلارنىڭ قارىشىنى قوبۇل قىلىش</li>
                <li>ئىجادچان ئىدىيەلەرنى ئويلاشتىن چەكلەش</li>
              </ul>
            </div>
          </div>
        </div>

        {/* بۆلەك 3: ئويلىشىش قابىلىيىتى */}
        <div 
          ref={el => sectionsRef.current[2] = el}
          className="section"
          style={{ backgroundColor: themes[2].bg, borderColor: themes[2].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[2].icon}</span>
            <h2 className="section-title">2. ئويلىشىش قابىلىيىتى: قايسىلارى زەيىپلىنىدۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              ئاپتوماتىك ئويلىشىش ھەممە ئويلىشىش قابىلىيىتىنى زەيىپلىمەيدۇ. 
              بەلكى <strong>بەزى قابىلىيەتلەر پەقەت زەيىپلىنىدۇ</strong>:
            </p>
            
            <div className="comparison-cards">
              <div className="comparison-card comparison-left">
                <div className="card-header">
                  <div className="card-icon">📈</div>
                  <h3>كۈچىيىدىغانلار</h3>
                </div>
                <ul className="card-list">
                  <li className="positive">مەلۇمات تەھلىل قىلىش</li>
                  <li className="positive">ئۇچۇر توپلاش</li>
                  <li className="positive">تېز قارار چىقىرىش</li>
                  <li className="positive">سېلىشتۇرما تەھلىل</li>
                </ul>
                <div className="card-footer">
                  <span className="tag positive">ماشىنىغا ماس</span>
                </div>
              </div>
              
              <div className="comparison-divider">
                <div className="divider-line"></div>
                <div className="divider-text">VS</div>
                <div className="divider-line"></div>
              </div>
              
              <div className="comparison-card comparison-right">
                <div className="card-header">
                  <div className="card-icon">📉</div>
                  <h3>زەيىپلىنىدىغانلار</h3>
                </div>
                <ul className="card-list">
                  <li className="negative">تەنقىدىي ئويلىشىش</li>
                  <li className="negative">ئىجادچانلىق</li>
                  <li className="negative">سوئال قويۇش</li>
                  <li className="negative">چوڭقۇر ئويلىنىش</li>
                </ul>
                <div className="card-footer">
                  <span className="tag negative">ئىنسانغا خاس</span>
                </div>
              </div>
            </div>
            
            <div className="example-box">
              <div className="example-icon">🔬</div>
              <div className="example-content">
                <h4>تەجرىبە:</h4>
                <p>
                  <em>
                    بىر توپ ئوقۇغۇچىلار 6 ئاي داۋامىدا ھەر سوئالغا AI جاۋابىنى ئىشلەتكەندە، 
                    ئۇلارنىڭ «تەنقىدىي ئويلىشىش» قابىلىيىتى 30% گە تۆۋەنلىگەن، 
                    «سوئال قويۇش» قابىلىيىتى 50% گە تۆۋەنلىگەن.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 4: مەسىلە ھەل قىلىش */}
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="section"
          style={{ backgroundColor: themes[3].bg, borderColor: themes[3].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[3].icon}</span>
            <h2 className="section-title">3. مەسىلە ھەل قىلىش: بىز قانداق ئۇنتۇپ قالىمىز؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              مەسىلە ھەل قىلىش — بۇ پەقەت جاۋاب تاپماستىن ئىبارەت ئەمەس. 
              بۇ بىر <strong>جەريان، سىناش ۋە ئۆزگىرىش</strong> جەريانىدۇر.
            </p>
            
            <div className="game-experiment">
              <h3 className="game-title">مەسىلە ھەل قىلىش جەريانى:</h3>
              
              <div className="game-steps">
                <div className="game-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>مەسىلىنى تونۇش</h4>
                    <p>
                      «نېمە مەسىلە بار؟» دېگەننى ئۆزىڭىز ئويلاش
                      <br/>
                      <strong>AI دا: ئۇتتۇراھال تونۇيدۇ</strong>
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>چارە ئويلاش</h4>
                    <p>
                      «قانداق ھەل قىلىشىم مۇمكىن؟» دېگەننى ئويلاش
                      <br/>
                      <strong>AI دا: ھەممە چارىلەرنى كۆرسىتىدۇ</strong>
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>سىناۋاتقاندا ئويلىشىش</h4>
                    <p>
                      «بۇ ئىشلىسە نېمە بولىدۇ؟» دېگەننى تەجرىبىلەپ ئويلاش
                      <br/>
                      <strong>AI دا: پەقەت پىششىق چارىنى كۆرسىتىدۇ</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="game-outcome" style={{ backgroundColor: '#fef7cd' }}>
                <h4>پەرق:</h4>
                <p>
                  <strong>AI پەقەت نەتىجىنى بېرىدۇ.</strong> 
                  <strong>ئىنسان جەرياننى ياشايدۇ.</strong> 
                  جەرياننى قىسقارتىش = ئويلىشىشنى قىسقارتىش.
                </p>
              </div>
            </div>
            
            <div className="tip-box">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <h4>تەكلىپ:</h4>
                <p>
                  مەسىلە كەلگەندە، ئاۋۋال <strong>10 مىنۇت ئۆزىڭىز ئويلاپ كۆرۈڭ</strong>، 
                  ئاندىن AI دىن ياردەم سوراڭ. بۇ سىزنىڭ ئويلىشىش قابىلىيىتىڭىزنى ساقلايدۇ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 5: سوئال قويۇش */}
        <div 
          ref={el => sectionsRef.current[4] = el}
          className="section"
          style={{ backgroundColor: themes[4].bg, borderColor: themes[4].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[4].icon}</span>
            <h2 className="section-title">4. سوئال قويۇش: ئەڭ مۇھىم ئويلىشىش قابىلىيىتى</h2>
          </div>
          
          <div className="section-content">
            <p>
              سوئال قويۇش — بۇ پەقەت جاۋاب ئىزدەمەستىن ئىبارەت ئەمەس. 
              بۇ بىر <strong>چوڭقۇر ئويلىنىش، شۈبھە قىلىش ۋە كۆرۈش ئېچىش</strong> جەريانىدۇر.
            </p>
            
            <div className="analogies-container">
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">01</div>
                  <h3>AI سوئالى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    «مېنىڭ پروگرامما خاتالىقىم نېمە؟» — 
                    <strong> جاۋاب ئىزدەيدىغان سوئال</strong>.
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">02</div>
                  <h3>ئىنسان سوئالى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    «بۇ پروگرامما نېمە ئۈچۈن بىزگە كېرەك؟» — 
                    <strong> مەنىە ئىزدەيدىغان سوئال</strong>.
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">03</div>
                  <h3>چوڭقۇر سوئال</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    «بۇ پروگرامما بىزنىڭ ئويلىشىشىمىزغا قانداق تەسىر كۆرسىتىدۇ؟» — 
                    <strong> تەسىر ئىزدەيدىغان سوئال</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="important-note">
              <h3>سوئال قويۇشنىڭ قىممىتى:</h3>
              <p>
                سوئال قويۇش بىزنىڭ ئېڭىمىزنى <strong>ئاچقۇچى</strong>. 
                سوئال بولمىسا، ئېڭىمىز <strong>تاقىلىپ قالىدۇ</strong>. 
                AI ھەممە سوئالغا جاۋاب بېرىدۇ — لېكىن سوئالنىڭ ئۆزىنى يارىتالمايدۇ.
              </p>
            </div>
            
            {/* سوئال قويۇش تەجرىبىسى */}
            <div className="interactive-question" style={{
              backgroundColor: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '12px',
              marginTop: '1.5rem',
              border: '2px dashed #cbd5e1'
            }}>
              <h4 style={{ marginBottom: '1rem', color: '#0c4a6e' }}>سوئال قويۇش مەشىقى:</h4>
              <p style={{ marginBottom: '1rem' }}>
                تۆۋەندىكى مەزمۇنغا 3 سوئال قويۇڭ (AI دىن ياردەم سورىماي):
              </p>
              <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                <p><strong>مەزمۇن:</strong> "2030-يىلى، AI ئوقۇتقۇچىلارنىڭ 30% نى ئالماشتۇرىدۇ."</p>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="toolbar-btn"
                  onClick={() => setThinkingStats(prev => ({
                    ...prev,
                    question: Math.min(100, prev.question + 10)
                  }))}
                  style={{ fontSize: '0.9rem' }}
                >
                  سوئال 1: ...؟
                </button>
                <button 
                  className="toolbar-btn"
                  onClick={() => setThinkingStats(prev => ({
                    ...prev,
                    question: Math.min(100, prev.question + 10)
                  }))}
                  style={{ fontSize: '0.9rem' }}
                >
                  سوئال 2: ...؟
                </button>
                <button 
                  className="toolbar-btn"
                  onClick={() => setThinkingStats(prev => ({
                    ...prev,
                    question: Math.min(100, prev.question + 10)
                  }))}
                  style={{ fontSize: '0.9rem' }}
                >
                  سوئال 3: ...؟
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 6: ئىجادچانلىق */}
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="section"
          style={{ backgroundColor: themes[5].bg, borderColor: themes[5].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[5].icon}</span>
            <h2 className="section-title">5. ئىجادچانلىق: ماشىنا قايتا-قايتا، ئىنسان يېڭىدىن</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI ئىجادچان بولالايدۇ — ئەمما ئۇنىڭ ئىجادچانلىقى 
              <strong> قايتا-قايتا ئويلىشىش</strong>تىن ئىبارەت. 
              ئىنساننىڭ ئىجادچانلىقى <strong>تاسادىپىي ۋە يېڭىدىن</strong>.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>AI ئىجادچانلىقى</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                  <li>• مەۋجۇت ئۇچۇرلارنى بىرلەشتۈرۈش</li>
                  <li>• ئالگورىتېم بويىچە يېڭىلىق</li>
                  <li>• ئىمكانىيەت سانىغا ئاساسەن</li>
                  <li>• پىششىقلاپ ئويلاش</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>ئىنسان ئىجادچانلىقى</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                  <li>• ھېچقانداق ئاساسسىز يېڭىلىق</li>
                  <li>• تۇيغۇ ۋە ھېسسىياتتىن كېلىش</li>
                  <li>• تاسادىپىي چاققان ئىدىيە</li>
                  <li>• جۇشقۇنلۇقتىن پەيدا بولۇش</li>
                </ul>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#fef7cd' }}>
              <div className="example-icon">🎨</div>
              <div className="example-content">
                <h4>مىسال: رەسىم سىزىش</h4>
                <p>
                  <em>
                    AI: 5 مىليون رەسىمدىن ئۆگىنىپ، ئوخشاش ئۇسلۇبتا رەسىم سىزىدۇ.
                    <br/>
                    ئىنسان: ھېچقانداق رەسىم كۆرمىگەن ئۇسلۇبتا، تۇيغۇسىغا قاراپ رەسىم سىزىدۇ.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 7: تەڭشەش ۋە ھەل */}
        <div 
          ref={el => sectionsRef.current[6] = el}
          className="section"
          style={{ backgroundColor: themes[6].bg, borderColor: themes[6].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[6].icon}</span>
            <h2 className="section-title">6. تەڭشەش ۋە ھەل: ئويلىشىشنى قانداق ساقلايمىز؟</h2>
          </div>
          
          <div className="section-content">
            <div className="summary-quote">
              <div className="quote-icon">❝</div>
              <p className="quote-text">
                سۈنئىي ئەقىل بىلەن ئويلىشىش — بۇ بىر <strong>مۇناسىۋەت</strong>. 
                بىز ئۇنى <strong>مۇناسىۋەت قۇرۇش</strong> قىلىشىمىز كېرەك، 
                ئەمەس <strong>مۇناسىۋەت بېرىش</strong>.
              </p>
              <div className="quote-icon bottom">❞</div>
            </div>
            
            <div className="advice-cards">
              <div className="advice-card">
                <div className="advice-badge">⏱️</div>
                <h4>ۋاقىت چەكلىمىسى</h4>
                <p>
                  كۈندە <strong>1 سائەت</strong> AI سىزىدىن. 
                  قېتىپ قالغاندا پەقەت ئۇنى ئىشلىتىڭ.
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">🤔</div>
                <h4>ئاۋۋال ئويلاش</h4>
                <p>
                  ھەر سوئالغا <strong>10 مىنۇت</strong> ئۆزىڭىز ئويلاپ بېقىڭ، 
                  ئاندىن AI دىن ياردەم سوراڭ.
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">❓</div>
                <h4>سوئال ئۇسۇلى</h4>
                <p>
                  AI گە <strong>جاۋاب ئەمەس، سوئال سوراڭ</strong>. 
                  «بۇنى قانداق ئويلاش كېرەك؟» دېگەندەك سوئاللارنى سوراڭ.
                </p>
              </div>
            </div>
            
            <div className="final-message">
              <div className="message-icon">💪</div>
              <div className="message-content">
                <h3>ئاخىرقى سۆز:</h3>
                <p>
                  سۈنئىي ئەقىل بىزنىڭ <strong>ئويلىشىش كۈچىمىزنى ئازايتمايدۇ</strong>، 
                  بەلكى بىزنىڭ <strong>ئويلىشىش ئادەتلىرىمىزنى ئۆزگەرتەلەيدۇ</strong>.
                </p>
                <p className="highlight-text">
                  بىز AI نى <strong>قورال</strong> دەپ قاراشىمىز كېرەك، 
                  ئەمەس <strong>ئەقىل</strong> دەپ قاراشىمىز كېرەك.
                  <br/>
                  چۈنكى ھەقىقىي ئەقىل — بۇ ھەمشە <strong>ئىنساننىڭ ئۆزىدە</strong>.
                </p>
              </div>
            </div>
            
            {/* ئۆزئارا تەسىرلىك نەتىجە */}
            <div className="interactive-result" style={{ 
              backgroundColor: '#f8fafc', 
              padding: '1.5rem', 
              borderRadius: '12px',
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#0891b2' }}>
                سىزنىڭ ئويلىشىش پىلانىڭىز
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #bae6fd'
                }}>
                  <h4 style={{ color: '#0891b2', marginBottom: '0.5rem' }}>كۈندىلىك مەشىق</h4>
                  <p style={{ fontSize: '0.9rem' }}>10 مىنۇت ئۆزىڭىز ئويلاش</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #bbf7d0'
                }}>
                  <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>ھەپتەلىك تەكشۈرۈش</h4>
                  <p style={{ fontSize: '0.9rem' }}>ئويلىشىش نىسپىتىڭىزنى تەكشۈرۈڭ</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #fde68a'
                }}>
                  <h4 style={{ color: '#d97706', marginBottom: '0.5rem' }}>ئايلىق مۇھاكىمە</h4>
                  <p style={{ fontSize: '0.9rem' }}>AI بىلەن مۇناسىۋىتىڭىزنى مۇھاكىمە قىلىڭ</p>
                </div>
              </div>
              
              <button 
                className="toolbar-btn primary"
                onClick={activateBrain}
                style={{ minWidth: '200px' }}
              >
                باشلايمەن! ئويلىشىشنى ساقلايمەن 🧠
              </button>
            </div>
          </div>
        </div>

        {/* تۆۋەنكى قىسىم */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-icon">💭</span>
              <span className="footer-logo-text">ئويلىشىش ۋە تېخنىكا</span>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">باش بەت</a>
              <a href="#" className="footer-link">مەزمۇنلار</a>
              <a href="#" className="footer-link">ھەققىمىزدا</a>
              <a href="#" className="footer-link">ئالاقە</a>
            </div>
            
            <div className="footer-social">
              <span className="social-text">مۇنازىرە:</span>
              <div className="social-icons">
                <a href="#" className="social-icon">💬</a>
                <a href="#" className="social-icon">🧠</a>
                <a href="#" className="social-icon">👥</a>
                <a href="#" className="social-icon">📚</a>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2026 ئويلىشىش ۋە تېخنىكا مۇھاكىمىسى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="footer-note">
                بۇ مەزمۇن ئوقۇتقۇچىلار، ئوقۇغۇچىلار ۋە ئەقىل مۇتەخەسسىسلەرى ئۈچۈن تەييارلاندى.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* قوشۇمچە CSS ئىنېرئاكتىپ ئەنېماتسىيە */}
      <style jsx>{`
        .thinking-animation {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          background-color: ${themeColor};
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        
        .dot:nth-child(1) { animation-delay: -0.32s; }
        .dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        .interactive-brain {
          animation: ${brainActive ? 'pulse 2s infinite' : 'none'};
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(8, 145, 178, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(8, 145, 178, 0); }
          100% { box-shadow: 0 0 0 0 rgba(8, 145, 178, 0); }
        }
        
        @media (max-width: 768px) {
          .interactive-brain {
            padding: 1.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog104;