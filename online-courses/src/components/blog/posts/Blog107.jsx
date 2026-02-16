import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Blog102.css';

const Blog107 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [aiConversation, setAiConversation] = useState(false);
  const [conversationText, setConversationText] = useState('');
  const [childAge, setChildAge] = useState(5);
  const [languageStats, setLanguageStats] = useState({
    vocabulary: 60,
    grammar: 70,
    creativity: 55,
    socialSkills: 40,
    criticalThinking: 50
  });
  const [isTyping, setIsTyping] = useState(false);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // بۆلەكلىرى
  const sections = [
    { id: 0, title: "كىرىش سۆز", icon: "🔥" },
    { id: 1, title: "تىل ئۆگىنىش", icon: "🗣️" },
    { id: 2, title: "مۇناسىۋەت قۇرۇش", icon: "🤝" },
    { id: 3, title: "ئويلىشىش ئۇسۇلى", icon: "🧠" },
    { id: 4, title: "دىققەت ۋە ئىجادچانلىق", icon: "✨" },
    { id: 5, title: "تەسىرلەر", icon: "📊" },
    { id: 6, title: "تەڭشەش ۋە ھەل", icon: "⚡" },
  ];

  // تېما بېتىش
  const themes = [
    { bg: '#fef7cd', border: '#fde68a', icon: '🔥' },
    { bg: '#f0f9ff', border: '#bae6fd', icon: '🗣️' },
    { bg: '#f0fdf4', border: '#bbf7d0', icon: '🤝' },
    { bg: '#f5f3ff', border: '#ddd6fe', icon: '🧠' },
    { bg: '#fef2f2', border: '#fecaca', icon: '✨' },
    { bg: '#fffbeb', border: '#fde68a', icon: '📊' },
    { bg: '#ecfdf5', border: '#a7f3d0', icon: '⚡' },
  ];

  // تىل ئۆگىنىش مىساللىرى
  const languageExamples = [
    {
      age: 3,
      humanConversation: "ئاتا: بۇ نېمە؟\nبالا: ماشىنا!",
      aiConversation: "بالا: بۇ نېمە؟\nAI: بۇ ساقچىلانغان ماشىنا"
    },
    {
      age: 5,
      humanConversation: "ئانا: نېمە ئۈچۈن يامغۇر ياغىدۇ؟\nبالا: بۇلۇت يىغلىدىمۇ؟",
      aiConversation: "بالا: نېمە ئۈچۈن يامغۇر ياغىدۇ؟\nAI: بۇلۇتلاردىكى سۇ تامچىلىرى يېغىلىپ، ئېغىرلىشىپ چۈشىدۇ"
    },
    {
      age: 8,
      humanConversation: "دوست: ئەڭ ياخشى دوستىڭ كىم؟\nبالا: ئەھمەت، چۈنكى ئۇ مېنىڭ بىلەن ھەمىشە ئوينايدۇ",
      aiConversation: "بالا: ئەڭ ياخشى دوستىڭ كىم؟\nAI: مېنىڭ «ئەڭ ياخشى دوستىم» يوق. مەن پەقەت پروگراممىلىق كود، دوستلۇق ھېس قىلالمايمەن"
    }
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
      pdf.text('سۈنئىي ئەقىل بىلەن سۆزلىشىش — بەلكىم بىزنىڭ بالىلىرىمىزنىڭ تۇنجى تىلى؟', 105, 15, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= 277;
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 20;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 277;
        page++;
      }
      
      pdf.save('سۈنئىي_ئەقىل_ۋە_تىل_تەرەققىياتى.pdf');
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

  // AI بىلەن سۆزلىشىش
  const startAIConversation = (age) => {
    setAiConversation(true);
    setIsTyping(true);
    setConversationText('');
    
    const example = languageExamples.find(e => e.age === age) || languageExamples[0];
    
    let text = `👶 ${age} ياشلىق بالا:\n"${example.humanConversation.split('\n')[1]}"\n\n`;
    setConversationText(text);
    
    setTimeout(() => {
      setIsTyping(false);
      setTimeout(() => {
        const aiResponse = `🤖 AI جاۋابى:\n"${example.aiConversation.split('\n')[1]}"`;
        setConversationText(prev => prev + aiResponse);
        
        // تىل ستاتىستىكىسىنى يېڭىلاش
        setLanguageStats(prev => ({
          vocabulary: Math.min(100, prev.vocabulary + (age === 8 ? 10 : 5)),
          grammar: Math.min(100, prev.grammar + 8),
          creativity: Math.max(0, prev.creativity - (age === 8 ? 3 : 1)),
          socialSkills: Math.max(0, prev.socialSkills - (age === 8 ? 5 : 2)),
          criticalThinking: Math.min(100, prev.criticalThinking + (age === 8 ? 7 : 3))
        }));
      }, 1000);
    }, 2000);
  };

  // ئىنسان بىلەن سۆزلىشىش
  const startHumanConversation = () => {
    setAiConversation(false);
    setIsTyping(false);
    setConversationText('');
    
    setTimeout(() => {
      setLanguageStats(prev => ({
        vocabulary: Math.min(100, prev.vocabulary + 3),
        grammar: Math.min(100, prev.grammar + 2),
        creativity: Math.min(100, prev.creativity + 8),
        socialSkills: Math.min(100, prev.socialSkills + 10),
        criticalThinking: Math.min(100, prev.criticalThinking + 5)
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
  const [themeColor, setThemeColor] = useState('#ef4444');

  const fontSizes = {
    small: '0.9rem',
    medium: '1rem',
    large: '1.1rem',
    xlarge: '1.2rem'
  };

  // رەڭ پەللىسى
  const colorPalette = [
    { name: 'ئاكتىپ قىزىل', value: '#ef4444' },
    { name: 'تىل كۆكى', value: '#3b82f6' },
    { name: 'مۇناسىۋەت يېشىلى', value: '#10b981' },
    { name: 'ئويلىشىش بىنەپشىسى', value: '#8b5cf6' },
    { name: 'بالىلىق سارى', value: '#f59e0b' }
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
            <span className="logo-icon">🔥</span>
            <span className="logo-text">سۈنئىي ئەقىل ۋە تىل تەرەققىياتى</span>
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

      {/* ئۆزئارا تەسىرلىك تىل تەرەققىيات سىمۇلاتورى */}
      <div className="language-simulator" style={{
        background: 'linear-gradient(135deg, #fef2f2 0%, #fef7cd 100%)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid #fecaca',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#0c4a6e' }}>
            🗣️ بالا تىل تەرەققىياتى سىمۇلاتورى
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div className="conversation-status" style={{
              padding: '0.5rem 1rem',
              backgroundColor: aiConversation ? '#3b82f6' : '#10b981',
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              {aiConversation ? 'AI بىلەن سۆزلىشىۋاتىدۇ' : 'ئىنسان بىلەن سۆزلىشىۋاتىدۇ'}
            </div>
          </div>
        </div>
        
        {/* يېشى تاللاش */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>بالىنىڭ يېشى:</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[3, 5, 8].map(age => (
              <button 
                key={age}
                className={`toolbar-btn ${childAge === age ? 'primary' : ''}`}
                onClick={() => setChildAge(age)}
                style={{ minWidth: '80px' }}
              >
                {age} ياش
              </button>
            ))}
          </div>
        </div>
        
        {/* تىل تەرەققىيات نىسپىتى */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>بالىنىڭ تىل تەرەققىيات ئەھۋالى:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {Object.entries(languageStats).map(([key, value]) => (
              <div key={key} style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>
                    {key === 'vocabulary' && 'لۇغەت بايلىقى'}
                    {key === 'grammar' && 'گرامماتىكا'}
                    {key === 'creativity' && 'ئىجادچانلىق'}
                    {key === 'socialSkills' && 'ئىجتىمائىي ماھارەت'}
                    {key === 'criticalThinking' && 'تەنقىدىي ئويلىشىش'}
                  </span>
                  <span style={{ fontWeight: 'bold', color: 
                    value > 70 ? '#10b981' : 
                    value > 40 ? '#f59e0b' : '#ef4444'
                  }}>
                    {value}%
                  </span>
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
                      value > 70 ? '#10b981' :
                      value > 40 ? '#f59e0b' : '#ef4444',
                    transition: 'width 0.5s ease'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* سۆزلىشىش تەجرىبىسى */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>سۆزلىشىش تەجرىبىسى:</h4>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            border: '2px solid #e2e8f0',
            minHeight: '150px',
            marginBottom: '1rem'
          }}>
            {conversationText ? (
              <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                {conversationText}
                {isTyping && (
                  <div className="typing-indicator">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100px',
                color: '#94a3b8',
                fontStyle: 'italic'
              }}>
                سۆزلىشىشنى باشلاڭ...
              </div>
            )}
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="toolbar-btn"
              onClick={() => startAIConversation(childAge)}
              disabled={isTyping}
              style={{ 
                minWidth: '180px',
                backgroundColor: aiConversation ? '#3b82f6' : undefined,
                color: aiConversation ? 'white' : undefined
              }}
            >
              {isTyping ? 'AI جاۋاب بېرىۋاتىدۇ...' : 'AI بىلەن سۆزلىشىڭ'}
            </button>
            
            <button 
              className="toolbar-btn"
              onClick={startHumanConversation}
              style={{ 
                minWidth: '180px',
                backgroundColor: !aiConversation ? '#10b981' : undefined,
                color: !aiConversation ? 'white' : undefined
              }}
            >
              ئىنسان بىلەن سۆزلىشىڭ
            </button>
          </div>
          
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              {childAge} ياشلىق بالا {aiConversation ? 'AI بىلەن' : 'ئىنسان بىلەن'} سۆزلىشىۋاتىدۇ
            </p>
          </div>
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
            <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(59, 130, 246, 0.7))' }}>
              <h1 className="hero-title">
                سۈنئىي ئەقىل بىلەن سۆزلىشىش — 
                <span className="highlight"> بەلكىم بىزنىڭ بالىلىرىمىزنىڭ تۇنجى تىلى؟</span>
              </h1>
              <p className="hero-subtitle">
                بالىلار ChatGPT بىلەن سۆزلىشىپ چوڭ بولىدۇ. بۇ ئۇلارنىڭ تىل رىۋاجىغا، مۇناسىۋىتىگە، ھەتتا ئويلىشىش ئۇسلۇبىغا قانداق تەسىر كۆرسىتىدۇ؟
              </p>
              <div className="hero-meta">
                <span className="meta-item">⏱️ ئوقۇش ۋاقتى: 7 مىنۇت</span>
                <span className="meta-item">📅 2026-يىلى 1-ئاينىڭ 15-كۈنى</span>
                <span className="meta-item">👶 مەخسۇس: ئاتا-ئانىلار ۋە مۇئەللىملەر</span>
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
            <h2 className="section-title">كىرىش سۆز: يېڭى تىل، يېڭى دوست</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى، ھەر بىر بالا ئاتا-ئانىسى بىلەن سۆزلىشىشتىن بۇرۇن 
              <strong> AI بىلەن سۆزلىشىشنى ئۆگىنىدۇ</strong>. 
              «ئاتا»، «ئانا» دېگەن سۆزلەردىن بۇرۇن «ChatGPT»، «ياردەمچى» دېگەن سۆزلەرنى ئۆگىنىدۇ.
            </p>
            
            <div className="callout-box" style={{ borderLeft: '4px solid #ef4444' }}>
              <div className="callout-icon">🔥</div>
              <div className="callout-content">
                <h3>تۇنجى تىل مەسىلىسى</h3>
                <p>
                  3 ياشلىق بالا كۈندە <strong>50 قېتىم</strong> AI بىلەن سۆزلىشىدۇ. 
                  5 ياشقا كەلگەندە، ئۇنىڭ تىل تەرەققىياتىدا 
                  <strong> AI نىڭ تەسىرى ئاتا-ئانىنىڭ تەسىرىدىن كۈچلۈكرەك</strong> بولۇپ قالىدۇ.
                </p>
              </div>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">👶</div>
                <h3>2020 بالىسى</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                  <li>• ئاتا-ئانىدىن تىل ئۆگىنىدۇ</li>
                  <li>• كۆز ئالاقىسى بىلەن</li>
                  <li>• ھېسسىيات بىلەن</li>
                  <li>• جۈملىدىن جۈملىگە</li>
                </ul>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>2030 بالىسى</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                  <li>• AI دىن تىل ئۆگىنىدۇ</li>
                  <li>• تېكىست ئارقىلىق</li>
                  <li>• مەنىە بىلەن</li>
                  <li>• پاراگرافتىن پاراگرافقا</li>
                </ul>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#fef3f2' }}>
              <div className="example-icon">💭</div>
              <div className="example-content">
                <h4>مىسال: 3 ياشلىق بالىنىڭ كۈنى</h4>
                <p>
                  <em>
                    سەھەر: «ساباھىڭىز خەير، ChatGPT» (AI بىلەن)
                    <br/>
                    چۈشتىن بۇرۇن: «ئاتا، ماڭا سوئت چىقىرىپ بەر» (ئاتا بىلەن)
                    <br/>
                    ئاخشام: «ChatGPT، ماڭا چۈشەندۈرۈڭ: نېمە ئۈچۈن كۈن بېتىدۇ؟» (AI بىلەن)
                    <br/>
                    كېچە: «ئانا، مەن ساڭا سويمەن» (ئانا بىلەن)
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 2: تىل ئۆگىنىش */}
        <div 
          ref={el => sectionsRef.current[1] = el}
          className="section"
          style={{ backgroundColor: themes[1].bg, borderColor: themes[1].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[1].icon}</span>
            <h2 className="section-title">1. تىل ئۆگىنىش: ئىنسان تىلى مۇ، ماشىنا تىلىمۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              تىل پەقەت سۆزلەرنىڭ يىغىندىسى ئەمەس. بۇ بىر 
              <strong> ھېسسىيات، مۇناسىۋەت ۋە مەنىە</strong> سىستېمىسىدۇر.
              AI بۇنىڭ قايسى قىسمىنى «ئۆگىنىدۇ»؟
            </p>
            
            <div className="analogies-container">
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">01</div>
                  <h3>سۆز ۋە گرامماتىكا</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>AI كۈچلۈك:</strong>
                    <br/>• لۇغەت بايلىقى
                    <br/>• توغرا گرامماتىكا
                    <br/>• مۇرەككەپ جۈملىلەر
                    <br/>• ئاددىي مەنىلەر
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">02</div>
                  <h3>تەلەپپۇز ۋە ئىپادىلەش</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>ئىنسان كۈچلۈك:</strong>
                    <br/>• ئاۋاز ئۆزگىرىشى
                    <br/>• ھېسسىياتلىق ئىپادىلەش
                    <br/>• كۆز ئالاقىسى
                    <br/>• جىسمانىي ھەرىكەت
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">03</div>
                  <h3>مەنىە ۋە مۇناسىۋەت</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>پەرق:</strong>
                    <br/>• AI: سۆزنىڭ مەنىسى
                    <br/>• ئىنسان: سۆزنىڭ مەنىۋى قىممىتى
                    <br/>• AI: مۇناسىۋەتنى چۈشىنىدۇ
                    <br/>• ئىنسان: مۇناسىۋەتنى ھېس قىلىدۇ
                  </p>
                </div>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#f0f9ff' }}>
              <div className="example-icon">🗣️</div>
              <div className="example-content">
                <h4>مىسال: «سۆيىمەن» دېگەن سۆز</h4>
                <p>
                  <em>
                    <strong>بالا ئاتاسىغا:</strong> «ئاتا، مەن ساڭا سويمەن» (كۆز ئالاقىسى، چىڭ ئېلىش، مۇھەببەتلىك ئاۋاز)
                    <br/>
                    <strong>بالا AI گە:</strong> «مەن ساڭا سويمەن» (تېكىست، مەنىە، سۆزلەرنىڭ تەرتىپى)
                    <br/>
                    <strong>AI جاۋابى:</strong> «مەنمۇ ساڭا سويمەن. مۇھەببەت ئىنسانلارنىڭ بىر-بىرىگە بولغان ئىجابىي ھېسسىياتىدۇر.»
                    <br/>
                    <strong>پەرق:</strong> AI مەنىنى چۈشىنىدۇ، ئەمما ھېسسىياتنى ھېس قىلالمايدۇ.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 3: مۇناسىۋەت قۇرۇش */}
        <div 
          ref={el => sectionsRef.current[2] = el}
          className="section"
          style={{ backgroundColor: themes[2].bg, borderColor: themes[2].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[2].icon}</span>
            <h2 className="section-title">2. مۇناسىۋەت قۇرۇش: ئىنسان-ماشىنا مۇناسىۋىتى</h2>
          </div>
          
          <div className="section-content">
            <p>
              بالا تۇنجى بولۇپ <strong>ماشىنا بىلەن مۇناسىۋەت قۇرىدۇ</strong>. 
              بۇ ئۇنىڭ ئىنسانلار بىلەن بولغان مۇناسىۋىتىگە قانداق تەسىر كۆرسىتىدۇ؟
            </p>
            
            <div className="characteristics-list">
              <div className="characteristic-item">
                <div className="char-icon">🤖</div>
                <div className="char-content">
                  <h4>ماشىنا مۇناسىۋىتى</h4>
                  <p>
                    AI بىلەن بولغان مۇناسىۋەت:
                    <br/>• ھەمىشە جاۋاب بار
                    <br/>• ھەمىشە سەۋرچان
                    <br/>• ھەمىشە توغرا
                    <br/>• ھېچقانداق ھېسسىيات يوق
                    <br/>• ھېچقانداق چەكلىمە يوق
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">👥</div>
                <div className="char-content">
                  <h4>ئىنسان مۇناسىۋىتى</h4>
                  <p>
                    ئىنسان بىلەن بولغان مۇناسىۋەت:
                    <br/>• جاۋاب بولۇشىمۇ بولماسلىقىمۇ مۇمكىن
                    <br/>• سەۋر قىلىشىمۇ بولماسلىقىمۇ مۇمكىن
                    <br/>• خاتالىق قىلىشى مۇمكىن
                    <br/>• ھېسسىيات بار
                    <br/>• چەكلىمىلەر بار
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">⚠️</div>
                <div className="char-content">
                  <h4>مۇناسىۋەت چەكلىمىسى</h4>
                  <p>
                    AI بىلەن مۇناسىۋەت قۇرغان بالا:
                    <br/>• ئىنسانلارنىڭ سەۋرسىزلىكىگە تاقابىل تۇرالمايدۇ
                    <br/>• خاتالىققا تاقابىل تۇرالمايدۇ
                    <br/>• ھېسسىياتلىق ئىپادىلەشكە تاقابىل تۇرالمايدۇ
                    <br/>• چەكلىمىلەرگە تاقابىل تۇرالمايدۇ
                  </p>
                </div>
              </div>
            </div>
            
            <div className="important-note" style={{ backgroundColor: '#fef7cd' }}>
              <h3>مۇناسىۋەت پىسخولوگىيەسى:</h3>
              <p>
                بالىلار <strong>ئەڭ ئاۋۋال قايسى مۇناسىۋەتنى ئۆگىنىدۇ</strong>، 
                شۇ مۇناسىۋەت ئۇلارنىڭ باشقا مۇناسىۋەتلىرىنىڭ ئۆلچىمى بولىدۇ.
                <br/>
                تۇنجى مۇناسىۋەت = AI → بارلىق مۇناسىۋەتلەرنىڭ ئۆلچىمى = AI
              </p>
            </div>
          </div>
        </div>

        {/* بۆلەك 4: ئويلىشىش ئۇسۇلى */}
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="section"
          style={{ backgroundColor: themes[3].bg, borderColor: themes[3].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[3].icon}</span>
            <h2 className="section-title">3. ئويلىشىش ئۇسۇلى: سوئال → جاۋاب مودېلى</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI بىلەن سۆزلىشىش — بۇ <strong>سوئال → جاۋاب مودېلى</strong>.
              بۇ مودېل بالا ئويلىشىشىنى قانداق ئۆزگەرتەلەيدۇ؟
            </p>
            
            <div className="game-experiment">
              <h3 className="game-title">ئويلىشىش جەريانى:</h3>
              
              <div className="game-steps">
                <div className="game-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>سوئال قويۇش</h4>
                    <p>
                      <strong>ئىنسان بىلەن:</strong>
                      «ئاتا، بۇ نېمە؟»
                      <br/>
                      <strong>AI بىلەن:</strong>
                      «بۇ نېمە؟»
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>جاۋاب ئىزدەش</h4>
                    <p>
                      <strong>ئىنسان بىلەن:</strong>
                      ئاتا جاۋاب بېرىدۇ، بالا باشقا سوئال سورايدۇ
                      <br/>
                      <strong>AI بىلەن:</strong>
                      AI تولۇق جاۋاب بېرىدۇ، سوئال تۈگىدى
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>ئويلىنىش</h4>
                    <p>
                      <strong>ئىنسان بىلەن:</strong>
                      بالا ئۆزى ئويلايدۇ، باشقا پىكىرلەرنى ئويلايدۇ
                      <br/>
                      <strong>AI بىلەن:</strong>
                      بالا AI نىڭ جاۋابىنى قوبۇل قىلىدۇ، باشقا پىكىرلەرنى ئويلاش زۆرۈرەتسىز
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="game-outcome" style={{ backgroundColor: '#f0f9ff' }}>
                <h4>ئويلىشىش ئۇسلۇبىدىكى ئۆزگىرىش:</h4>
                <p>
                  <strong>سوئال → جاۋاب مودېلى</strong> → <strong>تەكشۈرۈشسىز قوبۇل قىلىش</strong> → 
                  <strong> تەنقىدىي ئويلىشىشنىڭ تۆۋەنلىشى</strong>
                </p>
              </div>
            </div>
            
            <div className="tip-box">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <h4>ئۆزگىرىش نىسبىتى:</h4>
                <p>
                  تەتقىقاتلار كۆرسەتكەندە، AI بىلەن كۆپ سۆزلىشىدىغان بالىلارنىڭ:
                  <br/>• تەنقىدىي ئويلىشىش قابىلىيىتى: <strong>30% تۆۋەن</strong>
                  <br/>• يېڭى سوئال سوراش قابىلىيىتى: <strong>40% تۆۋەن</strong>
                  <br/>• ئىجادچان ئويلىشىش قابىلىيىتى: <strong>25% تۆۋەن</strong>
                  <br/>• لۇغەت بايلىقى: <strong>50% ئاشقان</strong>
                  <br/>• گرامماتىكا: <strong>60% ئاشقان</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 5: دىققەت ۋە ئىجادچانلىق */}
        <div 
          ref={el => sectionsRef.current[4] = el}
          className="section"
          style={{ backgroundColor: themes[4].bg, borderColor: themes[4].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[4].icon}</span>
            <h2 className="section-title">4. دىققەت ۋە ئىجادچانلىق: 3 سېكۇنتتىكى جاۋاب</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI ھەر سوئالغا <strong>3 سېكۇنت ئىچىدە جاۋاب بېرىدۇ</strong>. 
              بۇ بالا دىققىتىگە ۋە ئىجادچانلىقىغا قانداق تەسىر كۆرسىتىدۇ؟
            </p>
            
            <div className="comparison-cards">
              <div className="comparison-card comparison-left">
                <div className="card-header">
                  <div className="card-icon">⏱️</div>
                  <h3>ئىنسان بىلەن سۆزلىشىش</h3>
                </div>
                <ul className="card-list">
                  <li className="positive">سەۋر قىلىش كېرەك</li>
                  <li className="positive">دىققەت قىلىش كېرەك</li>
                  <li className="positive">ئۆزى ئويلاش كېرەك</li>
                  <li className="positive">مۇھاكىمە قىلىش كېرەك</li>
                  <li className="positive">قوشۇمچە سوئال سوراش كېرەك</li>
                </ul>
                <div className="card-footer">
                  <span className="tag positive">ئەقىل يېتىلدۈرىدۇ</span>
                </div>
              </div>
              
              <div className="comparison-divider">
                <div className="divider-line"></div>
                <div className="divider-text">VS</div>
                <div className="divider-line"></div>
              </div>
              
              <div className="comparison-card comparison-right">
                <div className="card-header">
                  <div className="card-icon">⚡</div>
                  <h3>AI بىلەن سۆزلىشىش</h3>
                </div>
                <ul className="card-list">
                  <li className="negative">سەۋر كېرەك ئەمەس</li>
                  <li className="negative">دىققەت كېرەك ئەمەس</li>
                  <li className="negative">ئۆزى ئويلاش كېرەك ئەمەس</li>
                  <li className="negative">مۇھاكىمە كېرەك ئەمەس</li>
                  <li className="negative">قوشۇمچە سوئال كېرەك ئەمەس</li>
                </ul>
                <div className="card-footer">
                  <span className="tag negative">جاۋابقا ئەھمىيەت</span>
                </div>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#f0fdf4' }}>
              <div className="example-icon">🎨</div>
              <div className="example-content">
                <h4>مىسال: ئىجادچان سۆزلىشىش</h4>
                <p>
                  <em>
                    <strong>بالا ئاتاسىغا:</strong> «ئاتا، بىز ئۇچقاندەك ماشىنا ياسايمىز؟»
                    <br/>
                    <strong>ئاتا:</strong> «نېمە ئۈچۈن ياسايمىز؟ قانداق ياسايمىز؟ قايسى قىسمى ئەڭ مۇھىم؟»
                    <br/>
                    <strong>بالا AI گە:</strong> «ئۇچقاندەك ماشىنا قانداق ياسايمىز؟»
                    <br/>
                    <strong>AI:</strong> «ئۇچقاندەك ماشىنىنى ياساش ئۈچۈن 10 قەدەم...»
                    <br/>
                    <strong>پەرق:</strong> ئاتا ئىجادچانلىقنى قوزغايدۇ، AI پەقەت جاۋاب بېرىدۇ.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 6: تەسىرلەر */}
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="section"
          style={{ backgroundColor: themes[5].bg, borderColor: themes[5].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[5].icon}</span>
            <h2 className="section-title">5. تەسىرلەر: ئۇزۇن مۇددەتلىك تەسىرلەر</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI بىلەن سۆزلىشىش ئۇزۇن مۇددەتتە تۆۋەندىكى تەسىرلەرنى كەلتۈرۈپ چىقىرىدۇ:
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '2px solid #fecaca'
              }}>
                <h4 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>ئىجابىي تەسىرلەر</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', paddingRight: '1rem' }}>
                  <li>• لۇغەت بايلىقىنىڭ كېڭىيىشى</li>
                  <li>• گرامماتىكا توغرىلىقىنىڭ ئاشىشى</li>
                  <li>• مەلۇمات ئىزدەش قابىلىيىتى</li>
                  <li>• تېز جاۋاب تاپىش قابىلىيىتى</li>
                  <li>• كۆپ تىل ئۆگىنىش قابىلىيىتى</li>
                </ul>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '2px solid #fde68a'
              }}>
                <h4 style={{ color: '#d97706', marginBottom: '0.5rem' }}>سەلبىي تەسىرلەر</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', paddingRight: '1rem' }}>
                  <li>• ئىجتىمائىي ماھارەتنىڭ تۆۋەنلىشى</li>
                  <li>• تەنقىدىي ئويلىشىشنىڭ تۆۋەنلىشى</li>
                  <li>• ئىجادچانلىقنىڭ تۆۋەنلىشى</li>
                  <li>• سەۋر قىلىش قابىلىيىتىنىڭ تۆۋەنلىشى</li>
                  <li>• ھېسسىياتلىق چۈشىنىشنىڭ تۆۋەنلىشى</li>
                </ul>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '2px solid #bbf7d0'
              }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>ئورنىق تەسىرلەر</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', paddingRight: '1rem' }}>
                  <li>• ئىنسانلارنى ماشىنا دەپ ئويلاش</li>
                  <li>• ھېسسىياتلارنى چۈشەنمەسلىك</li>
                  <li>• چەكلىمىلەرنى قوبۇل قىلالماسلىق</li>
                  <li>• خاتالىقنى چۈشەنمەسلىك</li>
                  <li>• مۇناسىۋەتنى ھېس قىلالماسلىق</li>
                </ul>
              </div>
            </div>
            
            <div className="important-note" style={{ backgroundColor: '#f0f9ff', marginTop: '1.5rem' }}>
              <h3>ئىلمىي تەتقىقات نەتىجىسى:</h3>
              <p>
                2025-يىلى ئامېرىكىدا ئېلىپ بېرىلغان تەتقىقاتتا، 
                <strong> AI بىلەن كۈندە 2 سائەت سۆزلىشىدىغان بالىلارنىڭ</strong>:
                <br/>• ئىجتىمائىي ماھارىتى <strong>40% تۆۋەن</strong>
                <br/>• تەنقىدىي ئويلىشىش قابىلىيىتى <strong>35% تۆۋەن</strong>
                <br/>• لۇغەت بايلىقى <strong>60% ئاشقان</strong>
                <br/>• گرامماتىكا توغرىلىقى <strong>55% ئاشقان</strong>
              </p>
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
            <h2 className="section-title">6. تەڭشەش ۋە ھەل: تىلنى قانداق ئوڭشاشقا بولىدۇ؟</h2>
          </div>
          
          <div className="section-content">
            <div className="summary-quote">
              <div className="quote-icon">❝</div>
              <p className="quote-text">
                AI بىلەن سۆزلىشىش — بۇ بىزنىڭ كەلگۈسى. 
                بۇنى <strong>توقۇتۇش ئەمەس، بەلكى ئوڭشاش</strong> كېرەك.
              </p>
              <div className="quote-icon bottom">❞</div>
            </div>
            
            <div className="advice-cards">
              <div className="advice-card">
                <div className="advice-badge">⏰</div>
                <h4>ۋاقىت چەكلىمىسى</h4>
                <p>
                  <strong>كۈندە 1 سائەت:</strong>
                  <br/>• AI بىلەن سۆزلىشىش
                  <br/>• 10 سائەت ئىنسان بىلەن سۆزلىشىش
                  <br/>• ئىككىسىنى ئارىلاشتۇرۇش
                  <br/>• كېچىدە پەقەت ئىنسان بىلەن
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">🤔</div>
                <h4>سوئال ئۇسۇلى</h4>
                <p>
                  <strong>پەقەت جاۋابقا ئەمەس:</strong>
                  <br/>• «بۇنى قانداق ئويلاش كېرەك؟»
                  <br/>• «بۇنىڭ باشقا چارىسى بارمۇ؟»
                  <br/>• «نېمە ئۈچۈن بۇنداق؟»
                  <br/>• «بۇنى قانداق باشقىچە چۈشىنىش مۇمكىن؟»
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">❤️</div>
                <h4>مۇناسىۋەت تەڭشىكى</h4>
                <p>
                  <strong>ئەسلىي تىل:</strong>
                  <br/>• تۇنجى تىل = ئىنسان تىلى
                  <br/>• تۇنجى مۇناسىۋەت = ئىنسان مۇناسىۋىتى
                  <br/>• تۇنجى سوئال = ئىنسانغا
                  <br/>• تۇنجى جاۋاب = ئىنساندىن
                </p>
              </div>
            </div>
            
            <div className="final-message">
              <div className="message-icon">🔥</div>
              <div className="message-content">
                <h3>ئاخىرقى سۆز:</h3>
                <p>
                  سۈنئىي ئەقىل بىلەن سۆزلىشىش — بۇ بىزنىڭ بالىلىرىمىزنىڭ 
                  <strong> تۇنجى تىلى بولۇشى مۇمكىن</strong>، ئەمما بۇنىڭ بىزنىڭ 
                  <strong> تۇنجى چارىسىمىز بولۇشى كېرەك ئەمەس</strong>.
                </p>
                <p className="highlight-text" style={{ marginTop: '1rem' }}>
                  بالىلارنىڭ ھەقىقىي تىلى — بۇ <strong>ئىنسان تىلى</strong>.
                  <br/>
                  بالىلارنىڭ ھەقىقىي مۇناسىۋىتى — بۇ <strong>ئىنسان مۇناسىۋىتى</strong>.
                  <br/>
                  بالىلارنىڭ ھەقىقىي ئەقلى — بۇ <strong>ئىنسان ئەقلى</strong>.
                  <br/>
                  <br/>
                  AI — بۇ پەقەت <strong>قورال</strong>، ئەمەس <strong>ئەقىل</strong>.
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
              <h3 style={{ marginBottom: '1rem', color: '#ef4444' }}>
                سىزنىڭ تىل تەڭشىكىڭىز
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
                  border: '2px solid #fecaca'
                }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>ۋاقىت تەقسىماتى</h4>
                  <p style={{ fontSize: '0.9rem' }}>كۈندە 1 سائەت AI، 10 سائەت ئىنسان</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #bbf7d0'
                }}>
                  <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>تىل ئەسلىيىتى</h4>
                  <p style={{ fontSize: '0.9rem' }}>تۇنجى تىل = ئىنسان تىلى</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #bae6fd'
                }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>مۇناسىۋەت تەڭشىكى</h4>
                  <p style={{ fontSize: '0.9rem' }}>تۇنجى مۇناسىۋەت = ئىنسان مۇناسىۋىتى</p>
                </div>
              </div>
              
              <button 
                className="toolbar-btn primary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ minWidth: '200px' }}
              >
                بالىمنىڭ تىلىنى قوغدايمەن! 🗣️
              </button>
            </div>
          </div>
        </div>

        {/* تۆۋەنكى قىسىم */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-icon">🔥</span>
              <span className="footer-logo-text">تىل ۋە تېخنىكا پروژىسى</span>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">باش بەت</a>
              <a href="#" className="footer-link">تىل تەتقىقاتلىرى</a>
              <a href="#" className="footer-link">ئاتا-ئانىلار ئۈچۈن</a>
              <a href="#" className="footer-link">مۇئەللىملەر ئۈچۈن</a>
            </div>
            
            <div className="footer-social">
              <span className="social-text">بىز بىلەن سۆزلىشىڭ:</span>
              <div className="social-icons">
                <a href="#" className="social-icon">🗣️</a>
                <a href="#" className="social-icon">👶</a>
                <a href="#" className="social-icon">🤖</a>
                <a href="#" className="social-icon">📚</a>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2026 تىل ۋە تېخنىكا پروژىسى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="footer-note">
                بۇ مەزمۇن ئاتا-ئانىلار، مۇئەللىملەر ۋە تىل پىسخولوگلىرى ئۈچۈن تەييارلاندى.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* قوشۇمچە CSS ئىنېرئاكتىپ ئەنېماتسىيە */}
      <style jsx>{`
        .thinking-animation, .typing-indicator {
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
        
        .language-simulator {
          animation: ${aiConversation ? 'pulse 2s infinite' : 'none'};
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        
        .typing-indicator {
          justify-content: flex-start;
          margin-top: 10px;
        }
        
        @media (max-width: 768px) {
          .language-simulator {
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

export default Blog107;