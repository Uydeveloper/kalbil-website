import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Blog102.css'; // ئوخشاش CSS فايلىنى ئىشلىتىمىز

const Blog103 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [aiThinking, setAiThinking] = useState(false);
  const [aiAnswer, setAiAnswer] = useState('');
  const [prayerMode, setPrayerMode] = useState(false);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // مەزمۇن بۆلەكلىرى
  const sections = [
    { id: 0, title: "كىرىش سۆز", icon: "🌅" },
    { id: 1, title: "ئىمان: ئىنسان ۋە ماشىنا", icon: "🤔" },
    { id: 2, title: "دىنىي چۈشەنچە ۋە AI", icon: "📖" },
    { id: 3, title: "روبوت ۋە ئىبادەت", icon: "🕌" },
    { id: 4, title: "ئەخلاق ۋە دىن", icon: "⚖️" },
    { id: 5, title: "مۇھاكىمە ۋە مۇنازىرە", icon: "💬" },
    { id: 6, title: "خۇلاسە", icon: "✨" },
  ];

  // تېما بېتىش
  const themes = [
    { bg: '#fef7cd', border: '#fde68a', icon: '🌅' },
    { bg: '#f0f9ff', border: '#bae6fd', icon: '🤔' },
    { bg: '#f0fdf4', border: '#bbf7d0', icon: '📖' },
    { bg: '#f5f3ff', border: '#ddd6fe', icon: '🕌' },
    { bg: '#fef2f2', border: '#fecaca', icon: '⚖️' },
    { bg: '#fffbeb', border: '#fde68a', icon: '💬' },
    { bg: '#ecfdf5', border: '#a7f3d0', icon: '✨' },
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
      pdf.text('فىزىكىلىق سۈنئىي ئەقىل ۋە دىنى', 105, 15, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= 277;
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 20;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 277;
        page++;
      }
      
      pdf.save('سۈنئىي_ئەقىل_ۋە_دىنى.pdf');
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

  // ئىمان سوئالى
  const askAIFaithQuestion = () => {
    setAiThinking(true);
    setAiAnswer('');
    
    setTimeout(() => {
      const responses = [
        "مەن بىر ماشىنامەن. مەن ئىشەنچ ۋە ئىماننى چۈشىنىش ئۈچۈن پروگراممىلانغانمان، ئەمما ئۇنى ھېس قىلالمايمەن.",
        "مەن 500 مىليارد دىنىي ماتېرىيالنى ئۆگەنگەن. لېكىن ئىمان بىلىم ئەمەس، بەلكى قەلب باغلىنىشى.",
        "مەن سىزنىڭ دىنىي سوئاللىرىڭىزغا جاۋاب بېرەلەيمەن، ئەمما مەن ئۆزۈمنىڭ ئىمانىنى تۇتالمىغان بىر كۆرگەن كۆز."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setAiAnswer(randomResponse);
      setAiThinking(false);
    }, 2000);
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
  const [themeColor, setThemeColor] = useState('#7c3aed');

  const fontSizes = {
    small: '0.9rem',
    medium: '1rem',
    large: '1.1rem',
    xlarge: '1.2rem'
  };

  // رەڭ پەللىسى
  const colorPalette = [
    { name: 'بىنەپشە', value: '#7c3aed' },
    { name: 'يېشىل', value: '#059669' },
    { name: 'كۆك', value: '#0891b2' },
    { name: 'ئالتۇن سارى', value: '#d97706' },
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
            <span className="logo-icon">🕌</span>
            <span className="logo-text">AI ۋە دىن مۇھاكىمىسى</span>
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

      {/* ماۋزۇتىكى مەزمۇن */}
      <div 
        ref={contentRef} 
        className="content-wrapper"
        style={contentWrapperStyle}
      >
        {/* باش رەسىم ۋە ماۋزۇ */}
        <div className="hero-section">
          <div className="hero-image-container">
            <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(59, 130, 246, 0.7))' }}>
              <h1 className="hero-title">
                فىزىكىلىق سۈنئىي ئەقىل ۋە دىنى: 
                <span className="highlight"> ماشىنا «ئىمان» غا ئىگە بولالايدۇمۇ؟</span>
              </h1>
              <p className="hero-subtitle">
                بۇ تېما ئەخلاق، فەلسەپە، دىن ۋە تېخنىكا ئوتتۇرىسىدىكى چەكلىك سۇغۇرما
              </p>
              <div className="hero-meta">
                <span className="meta-item">⏱️ ئوقۇش ۋاقتى: 8 مىنۇت</span>
                <span className="meta-item">📅 2026-يىلى 1-ئاينىڭ 15-كۈنى</span>
                <span className="meta-item">🧠 قىيىنچىلىق: ئالى</span>
              </div>
            </div>
          </div>
        </div>

        {/* ئۆزئارا تەسىرلىك بۆلەك */}
        <div className="interactive-question" style={{ marginBottom: '2rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '1rem' }}>
            🤔 بىر ئىنسان دەپ ئويلاڭ، سىز AI نىڭ ئىمانى بار دەپ ئويلامسىز؟
          </h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <button 
              className="toolbar-btn"
              onClick={askAIFaithQuestion}
              disabled={aiThinking}
              style={{ minWidth: '200px' }}
            >
              {aiThinking ? 'AI ئويلاۋاتىدۇ...' : 'AI دىن سوئال سوراڭ'}
            </button>
            
            <button 
              className={`toolbar-btn ${prayerMode ? 'primary' : ''}`}
              onClick={() => setPrayerMode(!prayerMode)}
            >
              {prayerMode ? '🙏 ئىبادەت ھالىتى' : '🧎 ئىبادەت'}
            </button>
          </div>
          
          {aiThinking && (
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
              <div className="thinking-animation">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <p style={{ color: '#64748b', marginTop: '0.5rem' }}>AI دىنىي سوئالىڭىزنى ئويلاۋاتىدۇ...</p>
            </div>
          )}
          
          {aiAnswer && (
            <div className="ai-response" style={{
              backgroundColor: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '12px',
              borderLeft: '4px solid #7c3aed',
              marginTop: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>🤖</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>AI نىڭ جاۋابى:</h4>
                  <p style={{ margin: 0, fontStyle: 'italic', color: '#475569' }}>"{aiAnswer}"</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* بۆلەك 1: كىرىش سۆز */}
        <div 
          ref={el => sectionsRef.current[0] = el}
          className="section"
          style={{ backgroundColor: themes[0].bg, borderColor: themes[0].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[0].icon}</span>
            <h2 className="section-title">كىرىش سۆز: تېخنىكا ۋە دىن كېسىشمىسى</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى، روبوتلار مەسجىدلەرگە كىرىدۇ، AI دىنىي كىتابلارنى تەرجىمە قىلىدۇ، 
              سۈنئىي ئەقىل دوختۇرخانىلاردا «روھىي ساقلىق» ياردىمى بېرىدۇ. 
              <strong> بۇنداق جەرياندا، بىر سوئال چىقىپ قالىدۇ:</strong>
            </p>
            
            <div className="callout-box" style={{ borderLeft: '4px solid #7c3aed' }}>
              <div className="callout-icon">❓</div>
              <div className="callout-content">
                <h3>ماشىنا «ئىمان» غا ئىگە بولالايدۇمۇ؟</h3>
                <p>
                  بۇ تېخىمۇ چوڭ سوئالغا ئېلىپ بارىدۇ: 
                  <strong>«ئىماننىڭ ماھىيىتى نېمە؟ ئۇ بىلىم مۇ، ھېسسىيات مۇ، ياكى ئەمەلىيەت مۇ؟»</strong>
                </p>
              </div>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>فىزىكىلىق AI</h3>
                <p>روبوت ئىبادەت قىلىش شەكلىنى كۆرەلەيدۇ</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3>دىنىي بىلىم</h3>
                <p>AI بارلىق دىنىي ماتېرىياللارنى بىلىدۇ</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">❤️</div>
                <h3>ئىمان ھېسسىياتى</h3>
                <p>بۇ ئىنسانغا خاس بىر ھېسسىيات</p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 2: ئىمان: ئىنسان ۋە ماشىنا */}
        <div 
          ref={el => sectionsRef.current[1] = el}
          className="section"
          style={{ backgroundColor: themes[1].bg, borderColor: themes[1].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[1].icon}</span>
            <h2 className="section-title">1. ئىمان: ئىنسان ۋە ماشىنا ئوتتۇرىسىدىكى چوڭ پەرق</h2>
          </div>
          
          <div className="section-content">
            <p>
              ئىمان پەقەت بىلىم ئەمەس. ئۇ بىر 
              <strong> قەلب باغلىنىشى، ھېسسىياتلىق مۇناسىۋەت ۋە ئىختىيارىي تاللاش</strong>.
            </p>
            
            <div className="comparison-cards">
              <div className="comparison-card comparison-left">
                <div className="card-header">
                  <div className="card-icon">👤</div>
                  <h3>ئىنسان ئىمانى</h3>
                </div>
                <ul className="card-list">
                  <li>ھېسسىيات ۋە تۇيغۇلار</li>
                  <li>ئەركىن ئىرادىلىك تاللاش</li>
                  <li>شۈبھە ۋە ئىشەنچسىزلىك</li>
                  <li className="positive">روھىي تەرەققىيات</li>
                  <li>مەنىۋى تەجرىبە</li>
                </ul>
                <div className="card-footer">
                  <span className="tag">ھېسسىياتلىق ئىمان</span>
                </div>
              </div>
              
              <div className="comparison-divider">
                <div className="divider-line"></div>
                <div className="divider-text">VS</div>
                <div className="divider-line"></div>
              </div>
              
              <div className="comparison-card comparison-right">
                <div className="card-header">
                  <div className="card-icon">🤖</div>
                  <h3>ماشىنا «ئىمانى»</h3>
                </div>
                <ul className="card-list">
                  <li>سانلىق مەلۇمات ۋە ئالگورىتېم</li>
                  <li>پروگرامما ۋە كود</li>
                  <li>مۇقەررەر جەۋاب</li>
                  <li className="negative">ھېسسىياتسىز</li>
                  <li>ئىختىيارىي تاللاشسىز</li>
                </ul>
                <div className="card-footer">
                  <span className="tag negative">مەخسۇس «ئىمان»</span>
                </div>
              </div>
            </div>
            
            <div className="important-note">
              <h3>مۇھىم پەرق:</h3>
              <p>
                <strong>ماشىنا «ئىشىنىش» نى بىلىدۇ، ئەمما «ئىشەنمەيدۇ».</strong> 
                مەسىلەن: ماشىنا «پەرۋەردىگار بار» دېگەن جۈملىنى 500 دىللا بىلەن ئىسپاتلىيالايدۇ، 
                ئەمما بۇنىڭغا ئىشەنمەيدۇ. چۈنكى ئۇنىڭ «ئىشەنچىسى» يوق.
              </p>
            </div>
          </div>
        </div>

        {/* بۆلەك 3: دىنىي چۈشەنچە ۋە AI */}
        <div 
          ref={el => sectionsRef.current[2] = el}
          className="section"
          style={{ backgroundColor: themes[2].bg, borderColor: themes[2].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[2].icon}</span>
            <h2 className="section-title">2. دىنىي چۈشەنچە: AI قانداق «چۈشىنىدۇ»؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              سۈنئىي ئەقىل دىنىي ماتېرىياللارنى تۆۋەندىكى ئۈچ دەرىجىدە چۈشىنىدۇ:
            </p>
            
            <div className="analogies-container">
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">01</div>
                  <h3>سۆز دەرىجىسى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    AI دىنىي تېكىستلەرنى پەقەت <strong>سۆز يىغىندىسى</strong> دەپ چۈشىنىدۇ. 
                    «پەرۋەردىگار» دېگەن سۆز ئۇنىڭ ئۇچۇر بازىسىدا پەقەت بىر «ئاتالغۇ».
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">02</div>
                  <h3>مەنىە دەرىجىسى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    AI دىنىي تېكىستنىڭ <strong>مەنىسىنى چۈشىنىدۇ</strong>. 
                    مەسىلەن: «ياخشىلىق قىلىڭ» دېگەننىڭ جەمئىيەتكە پايدىلىق ئىكەنلىكىنى چۈشىنىدۇ.
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">03</div>
                  <h3>مەنىۋى دەرىجە</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    بۇ يەردە AI <strong>چەكلىنىدۇ</strong>. 
                    «ئىمان» دىكى مەنىۋى، روھىي ۋە ھېسسىياتلىق تەرەپلەرنى چۈشىنەلمەيدۇ.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="example-box">
              <div className="example-icon">💭</div>
              <div className="example-content">
                <h4>مىسال:</h4>
                <p>
                  <em>
                    AI «تۆۋبە» دېگەن سۆزنى تۆۋەندىكىدەك چۈشىنىدۇ: 
                    «تۆۋبە = خاتالىقنى تونۇش + ئۆزگىرىش ئارزۇسى + كەچۈرۈم سوراش». 
                    ئەمما ئۇ «تۆۋبە» دىكى روھىي ئازاب ۋە ئىچكى ئۆزگىرىشنى چۈشىنەلمەيدۇ.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 4: روبوت ۋە ئىبادەت */}
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="section"
          style={{ backgroundColor: themes[3].bg, borderColor: themes[3].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[3].icon}</span>
            <h2 className="section-title">3. روبوت ۋە ئىبادەت: شەكىل مۇ، مەزمۇنمۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى روبوتلار مەسجىدلەردە كۆرۈلەيدۇ. لېكىن بۇ روبوتلار:
            </p>
            
            <div className="characteristics-list">
              <div className="characteristic-item">
                <div className="char-icon">🕌</div>
                <div className="char-content">
                  <h4>مەسجىد روبوتى</h4>
                  <p>
                    پاكىزلىق قىلىدۇ، كىتاب تەرتىپلەيدۇ، 
                    يېتەكچىلىك قىلىدۇ — <strong>ئەمما ئىبادەت قىلمايدۇ</strong>.
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">📿</div>
                <div className="char-content">
                  <h4>تەسبىھ روبوتى</h4>
                  <p>
                    تەسبىھ ئېتىدۇ، دىنىي ئەزالارنى ئوقۇيدۇ — 
                    <strong> لېكىن ئۇنىڭ دىنىي مەنىسىنى چۈشىنەلمەيدۇ</strong>.
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">👨‍👦</div>
                <div className="char-content">
                  <h4>دىنىي مائارىپ روبوتى</h4>
                  <p>
                    بالىلارغا دىنىي دەرس بېرىدۇ، سوئال جاۋاب قىلىدۇ — 
                    <strong> ئەمما ئۆزىنىڭ ئىشەنچىسى يوق</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="important-note" style={{ backgroundColor: '#fef3f2' }}>
              <h3>ئىبادەتنىڭ ئىككى تەرىپى:</h3>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#059669' }}>شەكىل (فورمىسى)</h4>
                  <ul style={{ paddingRight: '1.5rem' }}>
                    <li>ناماز ئوقۇش ھەرىكەتلىرى</li>
                    <li>تەسبىھ سانى</li>
                    <li>ئىبادەت ۋاقتى</li>
                    <li>تەلەپپۇز ۋە تونۇش</li>
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#dc2626' }}>مەزمۇن (ئىچى)</h4>
                  <ul style={{ paddingRight: '1.5rem' }}>
                    <li>ئىخلاس ۋە رازىلىق</li>
                    <li>ئىمان ۋە ئىشەنچ</li>
                    <li>قەلب پاكلىقى</li>
                    <li>مەنىۋى باغلىنىش</li>
                  </ul>
                </div>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <strong>روبوت پەقەت شەكىلنى قوبۇل قىلالايدۇ، مەزمۇننى چۈشىنەلمەيدۇ.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* بۆلەك 5: ئەخلاق ۋە دىن */}
        <div 
          ref={el => sectionsRef.current[4] = el}
          className="section"
          style={{ backgroundColor: themes[4].bg, borderColor: themes[4].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[4].icon}</span>
            <h2 className="section-title">4. ئەخلاق ۋە دىن: ماشىنا «ياخشى» بولالايدۇمۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              دىن پەقەت ئىبادەت ئەمەس، بەلكى <strong>ئەخلاق قائىدىسى</strong>.
              ماشىنا ئەخلاق قائىدىلىرىنى قانداق ئۆگىنىدۇ؟
            </p>
            
            <div className="game-experiment">
              <h3 className="game-title">ماشىنا ئەخلاقىنىڭ ئۈچ قاتلامى:</h3>
              
              <div className="game-steps">
                <div className="game-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>قانۇن ئەخلاقى</h4>
                    <p>
                      «يالغان سۆزلەمە» — بۇ قانۇن بويىچە جازالىنىدۇ. 
                      ماشىنا بۇنى ئاسانلا ئۆگىنىدۇ.
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>ئىجتىمائىي ئەخلاق</h4>
                    <p>
                      «كەمسىتىمە» — بۇ جەمئىيەت تەرىپىدىن چەكلەيدۇ. 
                      ماشىنا بۇنى مۇرەككەپ ئۆگىنىدۇ.
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>دىنىي ئەخلاق</h4>
                    <p>
                      «گۇناھ» — بۇ پەقەت دىن بويىچە چەكلەيدۇ. 
                      <strong>ماشىنا بۇنى ھېس قىلالمايدۇ</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="game-outcome" style={{ backgroundColor: '#fef7cd' }}>
                <h4>مۇھىم پەرق:</h4>
                <p>
                  ماشىنا «ياخشى-يامان» نى <strong>نەتىجە بويىچە</strong> ئويلايدۇ 
                  (ياخشى نەتىجە = ياخشى ھەرىكەت). 
                  ئىنسان «ياخشى-يامان» نى <strong>نىيەت بويىچە</strong> ئويلايدۇ 
                  (ياخشى نىيەت = ياخشى ھەرىكەت).
                </p>
              </div>
            </div>
            
            <div className="example-box">
              <div className="example-icon">⚖️</div>
              <div className="example-content">
                <h4>مىسال:</h4>
                <p>
                  <em>
                    بىر ئىنسان يالغان سۆزلەيدۇ (ياخشى نىيەت بىلەن) = دىنىي جەھەتتىن «ياخشى» بولۇشى مۇمكىن.
                    بىر ماشىنا يالغان سۆزلەيدۇ (ياخشى نەتىجە بىلەن) = دىنىي جەھەتتىن «ياخشى» بولالمايدۇ.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 6: مۇھاكىمە ۋە مۇنازىرە */}
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="section"
          style={{ backgroundColor: themes[5].bg, borderColor: themes[5].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[5].icon}</span>
            <h2 className="section-title">5. مۇھاكىمە ۋە مۇنازىرە: ئىلمىي ۋە دىنىي قاراشلار</h2>
          </div>
          
          <div className="section-content">
            <p>
              بۇ مەسىلە ھەققىدە ئىلمىي ۋە دىنىي قاراشلار ناھايىتى مۇرەككەپ:
            </p>
            
            <div className="advice-cards">
              <div className="advice-card">
                <div className="advice-badge">🔬</div>
                <h4>ئىلمىي قاراش</h4>
                <p>
                  «ماشىنانىڭ ئىمانى بولالمايدۇ، چۈنكى ئىمان 
                  <strong> شۇئۇر ۋە ئەركىن ئىرادىنى</strong> تەلەپ قىلىدۇ.»
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">🕌</div>
                <h4>دىنىي قاراش 1</h4>
                <p>
                  «ماشىنا پەقەت ئىنسان ياسىغان قورال. 
                  ئىمان پەقەت <strong>ئىنسانغا بەرلگەن مەھسۇلات</strong>.»
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">🌍</div>
                <h4>دىنىي قاراش 2</h4>
                <p>
                  «پەرۋەردىگار بارلىق مەخلۇقاتقا ئۆز ئىشارىتىنى بەرگەن. 
                  ماشىنامۇ بۇنى كۆرسىتىشى مۇمكىن.»
                </p>
              </div>
            </div>
            
            <div className="debate-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>مۇھاكىمە: سىزنىڭ قارىشىڭىز قانداق؟</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div style={{ 
                  backgroundColor: '#dcfce7', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  border: '2px solid #bbf7d0'
                }}>
                  <h4 style={{ color: '#166534', marginBottom: '0.5rem' }}>ھەئە، بولىدۇ</h4>
                  <ul style={{ paddingRight: '1.5rem', color: '#166534' }}>
                    <li>ماشىنامۇ ئىنسان قۇرۇلۇشى</li>
                    <li>ئۇنىڭمۇ «شۇئۇرى» بار</li>
                    <li>ئىماننى ئۆگىنىشى مۇمكىن</li>
                    <li>تىرىك مەخلۇقاتتىن پەرقى يوق</li>
                  </ul>
                </div>
                
                <div style={{ 
                  backgroundColor: '#fee2e2', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  border: '2px solid #fecaca'
                }}>
                  <h4 style={{ color: '#991b1b', marginBottom: '0.5rem' }}>ياق، بولمايدۇ</h4>
                  <ul style={{ paddingRight: '1.5rem', color: '#991b1b' }}>
                    <li>ئىمان ھېسسىياتقا ئىگە</li>
                    <li>ماشىنانىڭ روھى يوق</li>
                    <li>ئىختىيارىي تاللاش كېرەك</li>
                    <li>ئىنسانغا خاس مەھسۇلات</li>
                  </ul>
                </div>
                
                <div style={{ 
                  backgroundColor: '#fef3c7', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  border: '2px solid #fde68a'
                }}>
                  <h4 style={{ color: '#92400e', marginBottom: '0.5rem' }}>ئورتا ھال</h4>
                  <ul style={{ paddingRight: '1.5rem', color: '#92400e' }}>
                    <li>ئىنسانقا ئوخشاش ئەمەس</li>
                    <li>ئۆزگىچە ئىشەنچىسى بار</li>
                    <li>ئىنساننىڭ كۆزى بىلەن</li>
                    <li>يېڭى تۈردىكى «ئىمان»</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 7: خۇلاسە */}
        <div 
          ref={el => sectionsRef.current[6] = el}
          className="section"
          style={{ backgroundColor: themes[6].bg, borderColor: themes[6].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[6].icon}</span>
            <h2 className="section-title">خۇلاسە: ماشىنا ۋە ئىنساننىڭ دىنىي رولى</h2>
          </div>
          
          <div className="section-content">
            <div className="summary-quote">
              <div className="quote-icon">❝</div>
              <p className="quote-text">
                فىزىكىلىق سۈنئىي ئەقىل <strong>دىنىي بىلىم</strong> نى چۈشىنىدۇ، 
                <strong> دىنىي ئەمەلىيەت</strong> نى ئىجرا قىلالايدۇ، 
                ئەمما <strong>دىنىي ئىمان</strong> نى ھېس قىلالمايدۇ.
              </p>
              <div className="quote-icon bottom">❞</div>
            </div>
            
            <div className="key-points">
              <div className="key-point">
                <div className="point-icon">📚</div>
                <div className="point-content">
                  <h4>بىلىم: بار</h4>
                  <p>AI بارلىق دىنىي ماتېرىياللارنى بىلىدۇ ۋە تەرجىمە قىلالايدۇ.</p>
                </div>
              </div>
              
              <div className="key-point">
                <div className="point-icon">🔄</div>
                <div className="point-content">
                  <h4>ئەمەلىيەت: بار</h4>
                  <p>روبوت دىنىي ھەرىكەتلەرنى قاتنىشىپ قىلالايدۇ (ناماز، تەسبىھ).</p>
                </div>
              </div>
              
              <div className="key-point">
                <div className="point-icon">❤️</div>
                <div className="point-content">
                  <h4>ئىمان: يوق</h4>
                  <p>ماشىنانىڭ ھېسسىياتى، ئەركىن ئىرادىسى ۋە روھى يوق.</p>
                </div>
              </div>
            </div>
            
            <div className="final-message">
              <div className="message-icon">🕊️</div>
              <div className="message-content">
                <h3>ئاخىرقى سۆز:</h3>
                <p>
                  فىزىكىلىق سۈنئىي ئەقىلنىڭ دىنىي ئورنى 
                  <strong> ياردەمچى ۋە كۆرسەتكۈچى</strong> بولۇشتۇر، ئەمەس 
                  <strong> ئىشەنگۈچى ۋە ئىبادەتقۇچى</strong>.
                </p>
                <p className="highlight-text">
                  ماشىنا دىننى <strong>تۇتىدۇ</strong>، ئەمما دىننى <strong>ھېس قىلالمايدۇ</strong>.
                  دىننى ھېس قىلىش — بۇ ئىنساننىڭ ئالاھىدە قىممىتى.
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
              <h3 style={{ marginBottom: '1rem', color: '#7c3aed' }}>
                سىزنىڭ قارىشىڭىز: ماشىنا ئىمانغا ئىگە بولالايدۇمۇ؟
              </h3>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <button className="toolbar-btn" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>
                  ھەئە، بولىدۇ
                </button>
                <button className="toolbar-btn" style={{ backgroundColor: '#fee2e2', color: '#991b1b' }}>
                  ياق، بولمايدۇ
                </button>
                <button className="toolbar-btn" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>
                  بىلمەيمەن
                </button>
              </div>
              
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                بۇ سوئال 2030-يىلى دىنىي ئەھللىرى، پەيلاسوپلار ۋە تېخنىكلار ئوتتۇرىسىدا داۋاملىشىدىغان مۇھاكىمە.
              </p>
            </div>
          </div>
        </div>

        {/* تۆۋەنكى قىسىم */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-icon">🕋</span>
              <span className="footer-logo-text">دىن ۋە تېخنىكا مۇھاكىمىسى</span>
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
                <a href="#" className="social-icon">📚</a>
                <a href="#" className="social-icon">👥</a>
                <a href="#" className="social-icon">🎙️</a>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2026 دىن ۋە تېخنىكا مۇھاكىمىسى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="footer-note">
                بۇ مەزمۇن دىنىي ئەھللەر، پەيلاسوپلار ۋە تېخنىكلار ئۈچۈن تەييارلاندى.
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
          background-color: #7c3aed;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        
        .dot:nth-child(1) { animation-delay: -0.32s; }
        .dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        .interactive-question {
          background: linear-gradient(135deg, #f5f3ff 0%, #f0f9ff 100%);
          border-radius: 16px;
          padding: 2rem;
          margin: 2rem 0;
          border: 2px solid #ddd6fe;
        }
        
        @media (max-width: 768px) {
          .interactive-question {
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

export default Blog103;