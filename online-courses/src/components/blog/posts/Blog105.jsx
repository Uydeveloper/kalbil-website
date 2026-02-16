import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Blog102.css';

const Blog105 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [aiTeaching, setAiTeaching] = useState(false);
  const [studentProgress, setStudentProgress] = useState({
    criticalThinking: 75,
    creativity: 80,
    collaboration: 70,
    emotionalIntelligence: 85,
    techLiteracy: 90
  });
  const [activeClass, setActiveClass] = useState('math');
  const [classInSession, setClassInSession] = useState(false);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // مەكتەپ بۆلەكلىرى
  const sections = [
    { id: 0, title: "مەكتەپكە خۇش كەپسىز!", icon: "🏫" },
    { id: 1, title: "بىلىمدىن ئەمەس، ماھارەتتىن", icon: "🎯" },
    { id: 2, title: "شەخسىيلەشتۈرۈلگەن مەكتەپ", icon: "👤" },
    { id: 3, title: "مۇھاكىمە ۋە ھەمكارلىق", icon: "💬" },
    { id: 4, title: "ئەقىل ۋە قەلب", icon: "❤️" },
    { id: 5, title: "كەلگۈسى كەسىپلەر", icon: "🚀" },
    { id: 6, title: "مەكتەپ ۋە ئائىلە", icon: "👨‍👩‍👧‍👦" },
  ];

  // تېما بېتىش - مەكتەپ رەڭلىرى
  const themes = [
    { bg: '#fef7cd', border: '#fde68a', icon: '🏫' },
    { bg: '#f0f9ff', border: '#bae6fd', icon: '🎯' },
    { bg: '#f0fdf4', border: '#bbf7d0', icon: '👤' },
    { bg: '#f5f3ff', border: '#ddd6fe', icon: '💬' },
    { bg: '#fef2f2', border: '#fecaca', icon: '❤️' },
    { bg: '#fffbeb', border: '#fde68a', icon: '🚀' },
    { bg: '#ecfdf5', border: '#a7f3d0', icon: '👨‍👩‍👧‍👦' },
  ];

  // مەكتەپتە ئۆگىتىلىدىغان يېڭى كەسىپلەر
  const futureSubjects = [
    { id: 1, name: 'AI ھەمكارلىقى', icon: '🤖', description: 'ماشىنا بىلەن قانداق ھەمكارلىشىش' },
    { id: 2, name: 'رەقەملىك ئەخلاق', icon: '⚖️', description: 'ئىنتېرنېتتا ياخشى-يامان' },
    { id: 3, name: 'مەسىلە ھەل قىلىش', icon: '🧩', description: 'مۇرەككەپ مەسىلىلەرنى پارچىلاش' },
    { id: 4, name: 'ئىجادچانلىق تېخنىكىسى', icon: '🎨', description: 'يېڭىلىقنى قانداق يارىتىش' },
    { id: 5, name: 'روھىي ساغلاملىق', icon: '🧠', description: 'ئەقىل ۋە قەلب تەڭپۇڭلۇقى' },
    { id: 6, name: 'تېخنولوگىيە مەدەنىيىتى', icon: '💻', description: 'ماشىنىنى ئىنسانلاشتۇرۇش' }
  ];

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
      pdf.text('سۈنئىي ئەقىل مەكتىپى: 2030-يىلىدىكى مەكتەپ', 105, 15, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= 277;
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 20;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 277;
        page++;
      }
      
      pdf.save('سۈنئىي_ئەقىل_مەكتىپى.pdf');
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

  // AI ئوقۇتقۇچى دەرس بېرىش
  const startAIClass = (subject) => {
    setActiveClass(subject);
    setClassInSession(true);
    setAiTeaching(true);
    
    // تەلەپپۇز ئۆزگەرتىش
    setTimeout(() => {
      setAiTeaching(false);
      setClassInSession(false);
      
      // ئوقۇغۇچى پىروگرېسسىنى يۇقىرى كۆتۈرۈش
      setStudentProgress(prev => ({
        ...prev,
        techLiteracy: Math.min(100, prev.techLiteracy + 5),
        criticalThinking: Math.min(100, prev.criticalThinking + 3)
      }));
    }, 3000);
  };

  // ماھارەتتىكى ئۆزگىرىشلەر
  const improveSkill = (skill) => {
    setStudentProgress(prev => ({
      ...prev,
      [skill]: Math.min(100, prev[skill] + 10)
    }));
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
  const [themeColor, setThemeColor] = useState('#3b82f6');

  const fontSizes = {
    small: '0.9rem',
    medium: '1rem',
    large: '1.1rem',
    xlarge: '1.2rem'
  };

  // رەڭ پەللىسى - مەكتەپ رەڭلىرى
  const colorPalette = [
    { name: 'مەكتەپ كۆكى', value: '#3b82f6' },
    { name: 'ئوقۇغۇچى يېشىلى', value: '#10b981' },
    { name: 'ئىجادچان سارى', value: '#f59e0b' },
    { name: 'مۇھەببەت قىزىلى', value: '#ef4444' },
    { name: 'خىيال بىنەپشىسى', value: '#8b5cf6' }
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
            <span className="logo-icon">🏫</span>
            <span className="logo-text">2030-يىلى مەكتىپى</span>
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

      {/* ئۆزئارا تەسىرلىك مەكتەپ سىمۇلاتورى */}
      <div className="school-simulator" style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #fef7cd 100%)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid #bae6fd',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#0c4a6e' }}>
            🏫 2030-يىلى مەكتىپ سىمۇلاتورى
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div className="class-indicator" style={{
              padding: '0.5rem 1rem',
              backgroundColor: classInSession ? '#10b981' : '#ef4444',
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              {classInSession ? 'دەرس داۋامىدا...' : 'دەرس يوق'}
            </div>
          </div>
        </div>
        
        {/* ئوقۇغۇچى پىروگرېسى */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>ئوقۇغۇچىنىڭ ماھارەت ئەھۋالى:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {Object.entries(studentProgress).map(([key, value]) => (
              <div key={key} style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onClick={() => improveSkill(key)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>
                    {key === 'criticalThinking' && 'تەنقىدىي ئويلىشىش'}
                    {key === 'creativity' && 'ئىجادچانلىق'}
                    {key === 'collaboration' && 'ھەمكارلىق'}
                    {key === 'emotionalIntelligence' && 'ھېسسىياتلىق ئەقىل'}
                    {key === 'techLiteracy' && 'تېخنىكا ساۋاتلىقى'}
                  </span>
                  <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>{value}%</span>
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
        </div>
        
        {/* دەرسلەر */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>يېڭى دەرسلەر:</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              className={`toolbar-btn ${activeClass === 'math' ? 'primary' : ''} ${classInSession ? 'disabled' : ''}`}
              onClick={() => startAIClass('math')}
              disabled={classInSession}
              style={{ minWidth: '120px' }}
            >
              🧮 ماتېماتىكا
            </button>
            <button 
              className={`toolbar-btn ${activeClass === 'science' ? 'primary' : ''} ${classInSession ? 'disabled' : ''}`}
              onClick={() => startAIClass('science')}
              disabled={classInSession}
              style={{ minWidth: '120px' }}
            >
              🔬 پەن
            </button>
            <button 
              className={`toolbar-btn ${activeClass === 'ai' ? 'primary' : ''} ${classInSession ? 'disabled' : ''}`}
              onClick={() => startAIClass('ai')}
              disabled={classInSession}
              style={{ minWidth: '120px' }}
            >
              🤖 AI ھەمكارلىقى
            </button>
            <button 
              className={`toolbar-btn ${activeClass === 'creativity' ? 'primary' : ''} ${classInSession ? 'disabled' : ''}`}
              onClick={() => startAIClass('creativity')}
              disabled={classInSession}
              style={{ minWidth: '120px' }}
            >
              🎨 ئىجادچانلىق
            </button>
          </div>
        </div>
        
        {/* دەرس بېرىش */}
        {aiTeaching && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <div className="teaching-animation" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '2rem' }}>🤖</div>
              <div className="speech-bubble" style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '12px',
                border: '2px solid #bae6fd',
                maxWidth: '300px',
                textAlign: 'right'
              }}>
                <div className="thinking-animation">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <p style={{ margin: 0, color: '#475569', fontStyle: 'italic' }}>
                  {activeClass === 'math' && 'مەن بۇ مەسىلىنى قانداق چۈشەندۈرۈشىم كېرەك؟...'}
                  {activeClass === 'science' && 'بۇ تەجرىبىنى قانداق كۆرسىتىشىم كېرەك؟...'}
                  {activeClass === 'ai' && 'ماشىنا بىلەن قانداق ھەمكارلىشىشنى ئۆگىتىشىم كېرەك؟...'}
                  {activeClass === 'creativity' && 'بۇ بالىنىڭ ئىجادچانلىقىنى قانداق قوزغىشىم كېرەك؟...'}
                </p>
              </div>
            </div>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
              AI ئوقۇتقۇچى {activeClass === 'math' ? 'ماتېماتىكا' : 
                          activeClass === 'science' ? 'پەن' :
                          activeClass === 'ai' ? 'AI ھەمكارلىقى' : 'ئىجادچانلىق'} دەرسىنى بېرىۋاتىدۇ...
            </p>
          </div>
        )}
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
            <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(16, 185, 129, 0.7))' }}>
              <h1 className="hero-title">
                سۈنئىي ئەقىل مەكتىپى: 
                <span className="highlight"> 2030-يىلىدىكى «سىزنىڭ بالىڭىز» نېمە ئۆگىنىدۇ؟</span>
              </h1>
              <p className="hero-subtitle">
                بىلىم ئەمەس، بەلكى «قارار چىقىرىش»، «مۇھاكىمە»، «مۇناسىۋەت قۇرۇش» ئۆگىتىلىدۇ
              </p>
              <div className="hero-meta">
                <span className="meta-item">⏱️ ئوقۇش ۋاقتى: 8 مىنۇت</span>
                <span className="meta-item">📅 2026-يىلى 1-ئاينىڭ 15-كۈنى</span>
                <span className="meta-item">👨‍🏫 مەخسۇس: مۇئەللىملەر ۋە ئاتا-ئانىلار</span>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 1: مەكتەپكە خۇش كەپسىز! */}
        <div 
          ref={el => sectionsRef.current[0] = el}
          className="section"
          style={{ backgroundColor: themes[0].bg, borderColor: themes[0].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[0].icon}</span>
            <h2 className="section-title">مەكتەپكە خۇش كەپسىز! 2030-يىلى مەكتىپى</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى، مەكتەپتىكى ئەڭ چوڭ ئۆزگىرىش — 
              <strong> «بىلىم ئۆگىتىش»تىن «ماھارەت ئۆگىتىش»كە ئۆزگىرىش</strong>. 
              نېمە ئۈچۈن؟ چۈنكى:
            </p>
            
            <div className="callout-box" style={{ borderLeft: '4px solid #3b82f6' }}>
              <div className="callout-icon">🎯</div>
              <div className="callout-content">
                <h3>بىلىمنىڭ يېڭى رولى</h3>
                <p>
                  2030-يىلى، ھەر قانداق بىلىم 0.5 سېكۇنت ئىچىدە تېپىلىدۇ. 
                  مۇھىم بولغىنى — بۇ بىلىمنى <strong>قانداق ئىشلىتىش، قانداق تەنقىد قىلىش، 
                  قانداق يېڭىلىق بىلەن بىرلەشتۈرۈش</strong>.
                </p>
              </div>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>2024 مەكتىپى</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                  <li>• بىلىم يادلىتىش</li>
                  <li>• ئىمتىھان بېرىش</li>
                  <li>• توغرا جاۋاب تاپىش</li>
                  <li>• ئوقۇتقۇچى مەركەزلىك</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>2030 مەكتىپى</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                  <li>• ماھارەت يېتىلدۈرۈش</li>
                  <li>• مەسىلە ھەل قىلىش</li>
                  <li>• تەنقىدىي ئويلىشىش</li>
                  <li>• ئوقۇغۇچى مەركەزلىك</li>
                </ul>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#f0f9ff' }}>
              <div className="example-icon">🏫</div>
              <div className="example-content">
                <h4>مىسال: تارىخ دەرسى</h4>
                <p>
                  <em>
                    2024: «جۇڭگو سۇلالىلىرىنىڭ تەرتىپىنى يادلاڭ»
                    <br/>
                    2030: «جۇڭگو سۇلالىلىرىنىڭ قۇرۇلۇش ئۇسۇللىرى بىزگە قانداق ساۋاق بېرىدۇ؟ 
                    بۇ ساۋاقلارنى بۈگۈنكى جەمئىيەتتە قانداق ئىشلىتىشىمىز مۇمكىن؟»
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 2: بىلىمدىن ئەمەس، ماھارەتتىن */}
        <div 
          ref={el => sectionsRef.current[1] = el}
          className="section"
          style={{ backgroundColor: themes[1].bg, borderColor: themes[1].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[1].icon}</span>
            <h2 className="section-title">1. بىلىمدىن ئەمەس، ماھارەتتىن: 5 ئاساسلىق ماھارەت</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى مەكتىپىدە ئۆگىتىلىدىغان 5 ئاساسلىق ماھارەت:
            </p>
            
            <div className="analogies-container">
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">01</div>
                  <h3>مەسىلە ھەل قىلىش</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>بۇنىڭ ئىچىدە:</strong>
                    <br/>• مۇرەككەپ مەسىلىلەرنى پارچىلاش
                    <br/>• ئىمكانىيەتلەرنى تەھلىل قىلىش
                    <br/>• ئەڭ ياخشى چارىنى تاللاش
                    <br/>• نەتىجىلەرنى باھالاش
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">02</div>
                  <h3>تەنقىدىي ئويلىشىش</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>بۇنىڭ ئىچىدە:</strong>
                    <br/>• ئۇچۇرلارنى تەكشۈرۈش
                    <br/>• پەرەزلەرنى سۇئال قىلىش
                    <br/>• سەۋەب-نەتىجىلەرنى چۈشىنىش
                    <br/>• تەنقىدىي باھا بېرىش
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">03</div>
                  <h3>ھەمكارلىق ۋە مۇھاكىمە</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>بۇنىڭ ئىچىدە:</strong>
                    <br/>• باشقىلار بىلەن ھەمكارلىشىش
                    <br/>• پىكىر ئالماشتۇرۇش
                    <br/>• مۇنازىرە قىلىش
                    <br/>• بىرلىكتە قارار چىقىرىش
                  </p>
                </div>
              </div>
            </div>
            
            <div className="additional-skills" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid #bbf7d0'
              }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>04 ئىجادچانلىق</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  يېڭى ئىدىيەلەرنى يارىتىش، ئۆزگىچە يەكۈنلەش، 
                  تاسادىپىي يەكۈنلەرنى قوبۇل قىلىش
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid #fecaca'
              }}>
                <h4 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>05 ھېسسىياتلىق ئەقىل</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  ئۆز ھېسسىياتلىرىنى چۈشىنىش، باشقىلارنىڭ ھېسسىياتلىرىنى 
                  چۈشىنىش، مۇناسىۋەت قۇرۇش، كېلىشىم قىلىش
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 3: شەخسىيلەشتۈرۈلگەن مەكتەپ */}
        <div 
          ref={el => sectionsRef.current[2] = el}
          className="section"
          style={{ backgroundColor: themes[2].bg, borderColor: themes[2].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[2].icon}</span>
            <h2 className="section-title">2. شەخسىيلەشتۈرۈلگەن مەكتەپ: ھەر بىر بالىغا ئايرىم پىلان</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى، ھەر بىر ئوقۇغۇچىنىڭ ئۆزىگە خاس 
              <strong> «ئۆگىنىش پىلانى»</strong> بولىدۇ. 
              بۇ پىلاننى AI ۋە ئوقۇتقۇچى بىرلىكتە تۈزىدۇ:
            </p>
            
            <div className="characteristics-list">
              <div className="characteristic-item">
                <div className="char-icon">🎯</div>
                <div className="char-content">
                  <h4>شەخسىي قابىلىيەت تەھلىلى</h4>
                  <p>
                    AI ھەر بىر ئوقۇغۇچىنىڭ:
                    <br/>• ئۆگىنىش ئۇسلۇبى
                    <br/>• كۈچلۈك تەرەپلىرى
                    <br/>• تەرەققىيات زۆرۈرەتلىرى
                    <br/>• قىزىقىش دائىرىسى
                    دىكى سانلىق مەلۇماتلارنى تەھلىل قىلىدۇ.
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">📊</div>
                <div className="char-content">
                  <h4>ئىزچىل كۆزىتىش</h4>
                  <p>
                    ھەر كۈنى ئوقۇغۇچىنىڭ:
                    <br/>• ئۆگىنىش سۈرئىتى
                    <br/>• قىيىنچىلىق كۆرگەن جايلىرى
                    <br/>• ئىلھام تاپقان ۋاقىتلىرى
                    <br/>• ئارزۇ قىلغان تەرەپلىرى
                    دىكى ئۇچۇرلار توپلىنىدۇ.
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">🔄</div>
                <div className="char-content">
                  <h4>ئىزچىل ماسلاشتۇرۇش</h4>
                  <p>
                    ھەر ھەپتە ئوقۇغۇچىنىڭ پىلانى:
                    <br/>• ئۆگىنىش مەزمۇنى
                    <br/>• ئۆگىنىش سۈرئىتى
                    <br/>• مەشىق تىپى
                    <br/>• مەقسەتلىرى
                    دائىم ماسلاشتۇرۇلىدۇ.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#ecfeff' }}>
              <div className="example-icon">👧</div>
              <div className="example-content">
                <h4>مىسال: ئالىمەنىڭ پىلانى</h4>
                <p>
                  <em>
                    ئالىمە (10 ياش): كۆرۈشچان ئۆگىنىش ئۇسلۇبى، ماتېماتىكىدا كۈچلۈك، 
                    ئىجادچان يېزىشتا زەيىپ.
                    <br/>
                    <strong>پىلانى:</strong> ماتېماتىكىدا ئىلگىرىلەش (AI بىلەن مەشىق)، 
                    ئىجادچان يېزىشتا تەرەققىيات (ئوقۇتقۇچى بىلەن مۇھاكىمە)، 
                    ۋىرتىۇئال رېئاللىقتا ھېسسىياتىي ئىپادىلەش.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 4: مۇھاكىمە ۋە ھەمكارلىق */}
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="section"
          style={{ backgroundColor: themes[3].bg, borderColor: themes[3].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[3].icon}</span>
            <h2 className="section-title">3. مۇھاكىمە ۋە ھەمكارلىق: ئىنسان ۋە ماشىنا بىرلىكتە</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى مەكتىپىدە مۇھىم بولغىنى — 
              <strong> ئىنسان بىلەن ماشىنا ئارىسىدىكى ھەمكارلىقنى ئۆگىنىش</strong>:
            </p>
            
            <div className="game-experiment">
              <h3 className="game-title">مۇھاكىمە ئەمەلىيىتى:</h3>
              
              <div className="game-steps">
                <div className="game-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>AI دىن ئۇچۇر توپلاش</h4>
                    <p>
                      «بۇ مەسىلە ھەققىدە AI نېمە دېيدۇ؟»
                      <br/>
                      AI: 10 خىل ئىمكانىيەت كۆرسىتىدۇ
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>ئىنسانچە تەھلىل قىلىش</h4>
                    <p>
                      «بۇ ئىمكانىيەتلەرنىڭ قايسىلىرى ئەڭ مۇۋاپىق؟»
                      <br/>
                      ئوقۇغۇچىلار: مۇھاكىمە قىلىش
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>ھەمكارلىقچە قارار چىقىرىش</h4>
                    <p>
                      «بىز قانداق قارار چىقىرىشىمىز كېرەك؟»
                      <br/>
                      ئوقۇغۇچىلار + AI: بىرلىكتە ئەڭ ياخشى قارارنى تاللاش
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="game-outcome" style={{ backgroundColor: '#fef7cd' }}>
                <h4>مۇھىم ماھارەت:</h4>
                <p>
                  <strong>ماشىنىنىڭ كۈچىنى ئىشلىتىشنى بىلىش</strong> + 
                  <strong> ئىنساننىڭ تەنقىدىي ئويلىشىشىنى قوللىنىش</strong> = 
                  <strong> ئەڭ ياخشى نەتىجە</strong>
                </p>
              </div>
            </div>
            
            <div className="tip-box">
              <div className="tip-icon">🤝</div>
              <div className="tip-content">
                <h4>ھەمكارلىق تىپلىرى:</h4>
                <ul style={{ paddingRight: '1.5rem', marginTop: '0.5rem' }}>
                  <li><strong>ئىنسان-ئىنسان ھەمكارلىقى:</strong> گۇرۇپپا ئىشلىرى، مۇنازىرىلەر</li>
                  <li><strong>ئىنسان-AI ھەمكارلىقى:</strong> مەسىلە ھەل قىلىش، ئىجادچان يېزىش</li>
                  <li><strong>AI-ئىنسان ھەمكارلىقى:</strong> شەخسىي مەشىق، ئىزچىل باھالاش</li>
                  <li><strong>ئىنسان-AI-ئىنسان ھەمكارلىقى:</strong> مۇرەككەپ تەتقىقات، يېڭىلىق يارىتىش</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 5: ئەقىل ۋە قەلب */}
        <div 
          ref={el => sectionsRef.current[4] = el}
          className="section"
          style={{ backgroundColor: themes[4].bg, borderColor: themes[4].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[4].icon}</span>
            <h2 className="section-title">4. ئەقىل ۋە قەلب: ئىنسانغا خاس قابىلىيەتلەر</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI ھەممە بىلىمنى بىلىدۇ، ئەمما <strong>ھېسسىياتلارنى چۈشەنمەيدۇ</strong>. 
              شۇڭا 2030-يىلى مەكتىپىدە ئەڭ مۇھىم بولغىنى — 
              <strong> «ئىنسانلاشتۇرۇش»</strong>:
            </p>
            
            <div className="comparison-cards">
              <div className="comparison-card comparison-left">
                <div className="card-header">
                  <div className="card-icon">🧠</div>
                  <h3>AI ئۆگىتىدىغانلار</h3>
                </div>
                <ul className="card-list">
                  <li className="positive">بىلىم تەھلىلى</li>
                  <li className="positive">مەسىلە ھەل قىلىش</li>
                  <li className="positive">سانلىق مەلۇمات تەھلىلى</li>
                  <li className="positive">ئۇچۇر توپلاش</li>
                  <li className="positive">تېز ھېسابلاش</li>
                </ul>
                <div className="card-footer">
                  <span className="tag positive">ماشىنىغا خاس</span>
                </div>
              </div>
              
              <div className="comparison-divider">
                <div className="divider-line"></div>
                <div className="divider-text">VS</div>
                <div className="divider-line"></div>
              </div>
              
              <div className="comparison-card comparison-right">
                <div className="card-header">
                  <div className="card-icon">❤️</div>
                  <h3>ئىنسان ئۆگىتىدىغانلار</h3>
                </div>
                <ul className="card-list">
                  <li className="negative">ھېسسىياتلىق چۈشىنىش</li>
                  <li className="negative">ئەخلاقىي قارار چىقىرىش</li>
                  <li className="negative">سەمىمىي مۇناسىۋەت</li>
                  <li className="negative">ئىنسانىي مۇھەببەت</li>
                  <li className="negative">مەنىۋى تەرەققىيات</li>
                </ul>
                <div className="card-footer">
                  <span className="tag negative">ئىنسانغا خاس</span>
                </div>
              </div>
            </div>
            
            <div className="important-note" style={{ backgroundColor: '#fef3f2' }}>
              <h3>يېڭى «ئەقىل-قەلب» دىنىسى:</h3>
              <p>
                2030-يىلى مەكتىپىدە ھەر كۈنى <strong>30 مىنۇت «روھىي ساغلاملىق» دىنىسى</strong> بولىدۇ. 
                بۇ دىنىسدا:
                <br/>• ئۆز ھېسسىياتلىرىنى چۈشىنىش
                <br/>• باشقىلارنىڭ ھېسسىياتلىرىنى چۈشىنىش
                <br/>• مۇناسىۋەت قانداق قۇرۇش
                <br/>• كېلىشىم قانداق قىلىش
                دىكى ماھارەتلەر ئۆگىتىلىدۇ.
              </p>
            </div>
          </div>
        </div>

        {/* بۆلەك 6: كەلگۈسى كەسىپلەر */}
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="section"
          style={{ backgroundColor: themes[5].bg, borderColor: themes[5].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[5].icon}</span>
            <h2 className="section-title">5. كەلگۈسى كەسىپلەر: بۈگۈن ئۆگىنىدىغانلار كەلگۈسىدە ئىشلەيدۇ</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى بالىلار بۈگۈن ئۆگىنىدىغان ماھارەتلەر بىلەن 
              <strong> 2040-يىلى ئىشلەيدىغان كەسىپلەرگە تەييارلىنىدۇ</strong>:
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              {futureSubjects.map(subject => (
                <div key={subject.id} style={{
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '2px solid #e2e8f0',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
                >
                  <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                    {subject.icon}
                  </div>
                  <h4 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>
                    {subject.name}
                  </h4>
                  <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>
                    {subject.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#fef7cd', marginTop: '1.5rem' }}>
              <div className="example-icon">🚀</div>
              <div className="example-content">
                <h4>كەلگۈسى كەسىپ مىسالى: AI مۇتەخەسسىسى</h4>
                <p>
                  <em>
                    <strong>ئۆگىنىدىغان ماھارەتلەر (2030):</strong>
                    <br/>• ماشىنا بىلەن مۇھاكىمە قىلىش
                    <br/>• ئەخلاقىي قارار چىقىرىش
                    <br/>• ئىنسانلاشتۇرۇش تېخنىكىسى
                    <br/>• تەنقىدىي ئويلىشىش
                    
                    <br/><br/>
                    <strong>ئىشلىتىدىغان كەسىپ (2040):</strong>
                    <br/>• AI ئەخلاق مۇتەخەسسىسى
                    <br/>• ماشىنا-ئىنسان ھەمكارلىقى لايىھىلەش
                    <br/>• سۈنئىي ئەقىلنى ئىنسانلاشتۇرۇش
                    <br/>• دىنىي تېخنىكا مەسلىھەتچىسى
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 7: مەكتەپ ۋە ئائىلە */}
        <div 
          ref={el => sectionsRef.current[6] = el}
          className="section"
          style={{ backgroundColor: themes[6].bg, borderColor: themes[6].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[6].icon}</span>
            <h2 className="section-title">6. مەكتەپ ۋە ئائىلە: ئورتاق تەرەققىيات</h2>
          </div>
          
          <div className="section-content">
            <div className="summary-quote">
              <div className="quote-icon">❝</div>
              <p className="quote-text">
                2030-يىلى مەكتەپ — بۇ پەقەت بالىلار ئۆگىنىدىغان جاي ئەمەس. 
                بۇ <strong>ئائىلە ۋە جەمئىيەتنىڭ بىرلىكتە ئۆگىنىدىغان جايى</strong>.
              </p>
              <div className="quote-icon bottom">❞</div>
            </div>
            
            <div className="advice-cards">
              <div className="advice-card">
                <div className="advice-badge">👨‍👩‍👧‍👦</div>
                <h4>ئاتا-ئانىلار ئۈچۈن</h4>
                <p>
                  <strong>مەكتەپ ئۇچۇر سىستېمىسى:</strong>
                  <br/>• كۈندىلىك ئۆگىنىش ئەھۋالى
                  <br/>• ئەڭ ياخشى ئۆگىنىش ۋاقتى
                  <br/>• ئارزۇ قىلغان تەرەپلىرى
                  <br/>• تەرەققىيات زۆرۈرەتلىرى
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">🏠</div>
                <h4>ئائىلىۋى مەشىق</h4>
                <p>
                  <strong>ئائىلە بىلەن مەشىق:</strong>
                  <br/>• ئائىلە مۇھاكىمىسى
                  <br/>• بىرلىكتە مەسىلە ھەل قىلىش
                  <br/>• ئائىلە ئىجادچانلىق پروژىسى
                  <br/>• دىنىي تەتقىقات
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">🌍</div>
                <h4>جەمئىيەت بىلەن باغلىنىش</h4>
                <p>
                  <strong>جەمئىيەت پروژىلىرى:</strong>
                  <br/>• جەمئىيەت مەسىلىلىرىنى ھەل قىلىش
                  <br/>• كەسپىي ماھىرلار بىلەن ئۇچرىشىش
                  <br/>• رېئال ھايات مەسىلىلىرى
                  <br/>• جەمئىيەت پائالىيىتى
                </p>
              </div>
            </div>
            
            <div className="final-message">
              <div className="message-icon">🎓</div>
              <div className="message-content">
                <h3>ئاخىرقى سۆز:</h3>
                <p>
                  2030-يىلى مەكتىپى — بۇ <strong>بالىنىڭ پۇقرا بولۇش يولى</strong>.
                  بۇ يولدا ئۇ:
                </p>
                <ul style={{ paddingRight: '1.5rem', marginTop: '0.5rem' }}>
                  <li><strong>بىلىمنى ئىزدەيدۇ</strong> (ئەمما ئۇنىڭغا تايىنمايدۇ)</li>
                  <li><strong>ماھارەتنى يېتىلدۈرىدۇ</strong> (ئەمما ئۇنى قوغداش ئۈچۈن ئىشلىتىدۇ)</li>
                  <li><strong>ماشىنا بىلەن ھەمكارلىشىدۇ</strong> (ئەمما ئۇنىڭغا بېرىلمايدۇ)</li>
                  <li><strong>ئىنسانلىقنى ساقلايدۇ</strong> (ئەمما تېخنىكىنى قوبۇل قىلىدۇ)</li>
                </ul>
                <p className="highlight-text" style={{ marginTop: '1rem' }}>
                  2030-يىلى بالىڭىزنىڭ مەكتىپى — بۇ 
                  <strong> ئەقىل ۋە قەلب، ماشىنا ۋە ئىنسان، بىلىم ۋە ماھارەت</strong>
                  نىڭ ئۇيغۇنلاشتۇرۇلغان باغچىسى.
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
              <h3 style={{ marginBottom: '1rem', color: '#3b82f6' }}>
                بالىڭىزنىڭ 2030-يىللىق مەكتەپ پىلانى
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
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>ئاساسىي ماھارەتلەر</h4>
                  <p style={{ fontSize: '0.9rem' }}>مەسىلە ھەل قىلىش، تەنقىدىي ئويلىشىش، ھەمكارلىق</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #bbf7d0'
                }}>
                  <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>ئەقىل-قەلب تەڭپۇڭلۇقى</h4>
                  <p style={{ fontSize: '0.9rem' }}>روھىي ساغلاملىق، ئەخلاق، مۇناسىۋەت قۇرۇش</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #fde68a'
                }}>
                  <h4 style={{ color: '#d97706', marginBottom: '0.5rem' }}>تېخنىكا ھەمكارلىقى</h4>
                  <p style={{ fontSize: '0.9rem' }}>AI بىلەن ھەمكارلىشىش، دىنىي تېخنىكا، ئىنسانلاشتۇرۇش</p>
                </div>
              </div>
              
              <button 
                className="toolbar-btn primary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ minWidth: '200px' }}
              >
                باشلايمەن! بالىمنىڭ كەلگۈسىنى قۇرۇيمەن 🚀
              </button>
            </div>
          </div>
        </div>

        {/* تۆۋەنكى قىسىم */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-icon">🏫</span>
              <span className="footer-logo-text">2030-يىلى مەكتىپى پروژىسى</span>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">باش بەت</a>
              <a href="#" className="footer-link">مەكتەپ پىلانلىرى</a>
              <a href="#" className="footer-link">ئاتا-ئانىلار ئۈچۈن</a>
              <a href="#" className="footer-link">مۇئەللىملەر ئۈچۈن</a>
            </div>
            
            <div className="footer-social">
              <span className="social-text">بىز بىلەن باغلىنىڭ:</span>
              <div className="social-icons">
                <a href="#" className="social-icon">👨‍🏫</a>
                <a href="#" className="social-icon">👨‍👩‍👧‍👦</a>
                <a href="#" className="social-icon">🏫</a>
                <a href="#" className="social-icon">🤖</a>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2026 2030-يىلى مەكتىپى پروژىسى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="footer-note">
                بۇ مەزمۇن ئاتا-ئانىلار، مۇئەللىملەر ۋە تەربىيە مۇتەخەسسىسلەرى ئۈچۈن تەييارلاندى.
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
        
        .school-simulator {
          animation: ${classInSession ? 'pulse 2s infinite' : 'none'};
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        
        .toolbar-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
          .school-simulator {
            padding: 1.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .analogies-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog105;