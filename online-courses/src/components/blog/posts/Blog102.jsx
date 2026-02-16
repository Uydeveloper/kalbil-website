import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Blog102.css';

const Blog101 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [robotArmUp, setRobotArmUp] = useState(false);
  const [robotHappy, setRobotHappy] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // مەزمۇن بۆلەكلىرى
  const sections = [
    { id: 0, title: "مۇقەددىمە", icon: "📖" },
    { id: 1, title: "فىزىكىلىق نېمە؟", icon: "🖐️" },
    { id: 2, title: "ياشىمايدىغان دوست", icon: "🤖" },
    { id: 3, title: "ئوخشاشلىق بىلەن", icon: "🔍" },
    { id: 4, title: "ئويناش ئارقىلىق", icon: "🎮" },
    { id: 5, title: "ئاتا-ئانىلارغا", icon: "👨‍👩‍👧‍👦" },
    { id: 6, title: "خۇلاسە", icon: "🎯" },
  ];

  // تېما بېتىش
  const themes = [
    { bg: '#f0f9ff', border: '#bae6fd', icon: '💡' },
    { bg: '#fef7cd', border: '#fde68a', icon: '🧠' },
    { bg: '#f0fdf4', border: '#bbf7d0', icon: '🤝' },
    { bg: '#f5f3ff', border: '#ddd6fe', icon: '🔬' },
    { bg: '#fef2f2', border: '#fecaca', icon: '🎨' },
    { bg: '#fffbeb', border: '#fde68a', icon: '👪' },
    { bg: '#ecfdf5', border: '#a7f3d0', icon: '✨' },
  ];

  // PDF چاپلاش
  const handleDownloadPDF = () => {
    setRobotHappy(true);
    setTimeout(() => setRobotHappy(false), 1500);
    
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
      pdf.text('بالىلارغا فيزىكىلىق سۈنئىي ئەقىل', 105, 15, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= 277;
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 20;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 277;
        page++;
      }
      
      pdf.save('بالىلارغا_فىزىكىلىق_سۈنئىي_ئەقىل_كۆرسەتمىسى.pdf');
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

    // ئاۋاز تاللاش
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
    const duration = 60000; // 60 سېكۇنت
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

  // روبوت قول كۆتۈرۈش
  const toggleRobotArm = () => {
    setRobotArmUp(!robotArmUp);
    if (!robotArmUp) {
      setTimeout(() => {
        setRobotHappy(true);
        setTimeout(() => setRobotHappy(false), 1000);
      }, 300);
    }
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
    { name: 'قىزغۇچت سارى', value: '#d97706' },
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
      
      // ئىلگىرىلەش نىسبىتى
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
            <span className="logo-icon">🤖</span>
            <span className="logo-text">AI بالىلار دۇنياسى</span>
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
            <div className="hero-overlay">
              <h1 className="hero-title">
                بالىلارغا فيزىكىلىق سۈنئىي ئەقىلنى 
                <span className="highlight"> قانداق چۈشەندۈرۈش كېرەك؟</span>
              </h1>
              <p className="hero-subtitle">
                يېڭى دەۋر، يېڭى دوستلار: ئېكراندىن چىقىپ كەتكەن سۈنئىي ئەقىللار
              </p>
              <div className="hero-meta">
                <span className="meta-item">⏱️ ئوقۇش ۋاقتى: 6 مىنۇت</span>
                <span className="meta-item">📅 2026-يىلى 1-ئاينىڭ 15-كۈنى</span>
                <span className="meta-item">👁️ كۆرۈلۈش: 2.4K</span>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 1: مۇقەددىمە */}
        <div 
          ref={el => sectionsRef.current[0] = el}
          className="section"
          style={{ backgroundColor: themes[0].bg, borderColor: themes[0].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[0].icon}</span>
            <h2 className="section-title">مۇقەددىمە: ئېكراندىن چىقىپ كەتكەن سۈنئىي ئەقىل</h2>
          </div>
          
          <div className="section-content">
            <p>
              بالىلار «سۈنئىي ئەقىل» دېگەن سۆزنى ئاڭلىغاندا، كۆپىنچىسى 
              <strong className="highlight"> «ئېكران ئىچىدىكى سۆزلەيدىغان ماشىنا»</strong> دەپ ئويلايدۇ. 
              لېكىن 2026-يىلى، سۈنئىي ئەقىل ھازىر <strong>ئېكراندىن چىقىپ كەتتى</strong>! ئۇ ھازىر:
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🏠</div>
                <h3>ئۈي ئىشلىرىنى قىلىدۇ</h3>
                <p>LG CLOiD روبوتى ئۈي ئىشلىرىنى قىلىدۇ</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚗</div>
                <h3>ماشىنا ھەيدەيدۇ</h3>
                <p>Alpamayo ئاپتوماتىك ماشىنا</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏭</div>
                <h3>زاۋۇتتا ئىشلەيدۇ</h3>
                <p>CATL Moz روبوتى ئىشخانىدا</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍🍳</div>
                <h3>تاماق تەييارلايدۇ</h3>
                <p>روبوت ئاشپەز خۇش تاماق تەييارلايدۇ</p>
              </div>
            </div>
            
            <div className="callout-box">
              <div className="callout-icon">🌟</div>
              <div className="callout-content">
                <h3>بۇ يېڭى دەۋر — <span className="highlight">«فىزىكىلىق سۈنئىي ئەقىل»</span> دەۋرى</h3>
                <p>بۇنى بالىلارغا قانداق چۈشەندۈرۈش كېرەك؟ تۆۋەندىكى 6 قەدىمدە چۈشىنىڭ:</p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 2: فىزىكىلىق نېمە؟ */}
        <div 
          ref={el => sectionsRef.current[1] = el}
          className="section"
          style={{ backgroundColor: themes[1].bg, borderColor: themes[1].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[1].icon}</span>
            <h2 className="section-title">1. «فىزىكىلىق» دېگەن نېمە؟ — بىر بالىنىڭ قولى بىلەن تۇتۇشى</h2>
          </div>
          
          <div className="section-content">
            <p>
              بالىلارغا «فىزىكىلىق» دېگەن سۆزنى ئەمەس، بەلكى 
              <strong> تۇيغۇ</strong> بىلەن چۈشەندۈرۈش كېرەك.
            </p>
            
            <div className="comparison-cards">
              <div className="comparison-card comparison-left">
                <div className="card-header">
                  <div className="card-icon">💻</div>
                  <h3>ئېكراندىكى AI</h3>
                </div>
                <ul className="card-list">
                  <li>سۆزلەيدۇ، يازىدۇ</li>
                  <li>رەسىم سىزىدۇ</li>
                  <li>جاۋاب بېرىدۇ</li>
                  <li className="negative">تۇتۇشقا بولمايدۇ</li>
                </ul>
                <div className="card-footer">
                  <span className="tag">مەۋھۇم دوست</span>
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
                  <h3>فىزىكىلىق AI</h3>
                </div>
                <ul className="card-list">
                  <li>قولى بار، قىمىرىدۇ</li>
                  <li>تۇتىدۇ، يۈرۈيدۇ</li>
                  <li>ئۆزلىشىدۇ</li>
                  <li className="positive">ھەقىقىي تۇتۇش!</li>
                </ul>
                <div className="card-footer">
                  <span className="tag positive">ھەقىقىي دوست</span>
                </div>
              </div>
            </div>
            
            <div className="example-box">
              <div className="example-icon">💭</div>
              <div className="example-content">
                <p>
                  <em>
                    «ChatGPT — بۇ سىزنىڭ تېلېفونىڭىزدىكى دوست. لېكىن CLOiD روبوتى — 
                    بۇ سىزنىڭ ئۈيدىكى دوست، ئۇ سىز بىلەن قول تۇتۇشىپ، قاچا يۇيىدۇ!»
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 3: ياشىمايدىغان دوست */}
        <div 
          ref={el => sectionsRef.current[2] = el}
          className="section"
          style={{ backgroundColor: themes[2].bg, borderColor: themes[2].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[2].icon}</span>
            <h2 className="section-title">2. روبوت — بۇ «ياشىمايدىغان دوست»</h2>
          </div>
          
          <div className="section-content">
            <p>
              بالىلار روبوتلارنى <strong>«ياشىمايدىغان دوست»</strong> دەپ قاراشى كېرەك. 
              بۇنى چۈشەندۈرۈش ئۈچۈن:
            </p>
            
            <div className="characteristics-list">
              <div className="characteristic-item">
                <div className="char-icon">🎭</div>
                <div className="char-content">
                  <h4>ھېسسىيات چەكلىمىسى</h4>
                  <p>«روبوت سىزگە ياردەم قىلىدۇ، لېكىن ئۇ سىزنىڭ قورقۇنىچىڭىزنى ھېس قىلالمايدۇ.»</p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">😊</div>
                <div className="char-content">
                  <h4>كۈلكە چەكلىمىسى</h4>
                  <p>«روبوت سىز بىلەن ئوينايدۇ، لېكىن ئۇ سىزنىڭ كۈلكىڭىزگە سەۋەب بولالمايدۇ.»</p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">❤️</div>
                <div className="char-content">
                  <h4>سۆيگۈ چەكلىمىسى</h4>
                  <p>«روبوت سىزنى سۆيمەيدۇ — لېكىن سىز ئۇنى سۆيىشىڭىز مۇمكىن!»</p>
                </div>
              </div>
            </div>
            
            <div className="important-note">
              <h3>مۇھىم نۇقتا:</h3>
              <p>
                بۇ — <strong>مۇناسىۋەتنىڭ چەكلىمىسى</strong> نى ئادەمچە چۈشەندۈرۈش. 
                بالىلار روبوتنى ئىنسان دەپ ئويلاشتىن ساقلىنىشى كېرەك.
              </p>
            </div>
          </div>
        </div>

        {/* بۆلەك 4: ئوخشاشلىق بىلەن */}
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="section"
          style={{ backgroundColor: themes[3].bg, borderColor: themes[3].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[3].icon}</span>
            <h2 className="section-title">3. ئوخشاشلىق بىلەن چۈشەندۈرۈش</h2>
          </div>
          
          <div className="section-content">
            <p>
              بالىلار ئۇچۇرلارنى <strong>«ئوخشاشلىق»</strong> ئارقىلىق چۈشىنىدۇ. شۇڭا:
            </p>
            
            <div className="analogies-container">
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">01</div>
                  <h3>ماشىنا ئوقۇتقۇچىسى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    «فىزىكىلىق سۈنئىي ئەقىل — بۇ سىزنىڭ ماشىنىڭىزغا ئوقۇتقۇچى قىستۇرۇشقا ئوخشايدۇ.  
                    ماشىنا ئۆزى ئويلىيالايدۇ، يولنى تانىيالايدۇ، ھەتتا توختىتىشىمۇ مۇمكىن!»
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">02</div>
                  <h3>ياشىمايدىغان ئابلا</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    «CLOiD روبوتى — بۇ سىزنىڭ ئۈيىڭىزدىكى «ياشىمايدىغان ئابلا»، 
                    ئۇ سىزگە ياردەم قىلىدۇ، لېكىن سىزنىڭ قەلبىڭىزنى ئوقۇيالمايدۇ.»
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">03</div>
                  <h3>ئەقىللىق تەلەپپۇز</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    «روبوت — بۇ سىزنىڭ ئەقىللىق تەلەپپۇزىڭىزغا ئوخشايدۇ، 
                    لېكىن ئۇ سىزنىڭ ھېسسىياتلىرىڭىزنى سۆزلەپ بېرەلمەيدۇ.»
                  </p>
                </div>
              </div>
            </div>
            
            <div className="tip-box">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <h4>كەسپىي تەكلىپ:</h4>
                <p>
                  بالىڭىزنىڭ ئۆزى تونۇيدىغان نەرسىلەر بىلەن سېلىشتۇرۇڭ. 
                  مەسىلەن: «روبوت سەنكى ئوينايدىغان ئەقىللىق ئويۇنچۇڭغا ئوخشايدۇ، 
                  لېكىن چوڭراق ۋە ئەقىللىراق!»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 5: ئويناش ئارقىلىق ئۆگىنىش */}
        <div 
          ref={el => sectionsRef.current[4] = el}
          className="section"
          style={{ backgroundColor: themes[4].bg, borderColor: themes[4].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[4].icon}</span>
            <h2 className="section-title">4. ئويناش ئارقىلىق ئۆگىنىش — ئەڭ ياخشى ئۇسۇل</h2>
          </div>
          
          <div className="section-content">
            <p>
              بالىلارغا فيزيكىلىق سۈنئىي ئەقىلنى چۈشەندۈرۈشنىڭ ئەڭ ياخشى ئۇسۇلى — 
              <strong> ئويناش</strong>.
            </p>
            
            <div className="game-experiment">
              <h3 className="game-title">ئويناش تەجرىبىسى: روبوت قۇرۇش</h3>
              
              <div className="game-steps">
                <div className="game-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>ماتېرىيال توپلاش</h4>
                    <p>بالىڭىز بىلەن بىر روبوت قۇرۇڭ (قاغاز، قارتون ياكى LEGO).</p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>«ئەقىل» قىستۇرۇش</h4>
                    <p>ئۇنىڭغا سوئال قويۇڭ: «ئۇ نېمە قىلىشى كېرەك؟»</p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>چەكلىمىلەرنى تونۇتۇش</h4>
                    <p>«نېمە قىلىشى مۇمكىن؟ نېمە قىلىشى مۇمكىن ئەمەس؟»</p>
                  </div>
                </div>
              </div>
              
              <div className="game-outcome">
                <h4>نەتىجە:</h4>
                <p>
                  بۇ — فيزىكىلىق سۈنئىي ئەقىلنىڭ چەكلىمىسىنى 
                  <strong> ئادەمچە ۋە قىزىقارلىق</strong> چۈشەندۈرۈش.
                </p>
              </div>
            </div>
            
            {/* ئۆزئارا تەسىرلىك روبوت ئوينىقى */}
            <div className="interactive-robot">
              <h3 className="interactive-title">🤖 روبوت بىلەن ئوينا!</h3>
              <p>تۆۋەندىكى توپچىنى بېسىپ، روبوتتا قول كۆتۈرۈش/تۈشۈرۈشنى سىناڭ:</p>
              
              <div 
                className="robot-container"
                onClick={toggleRobotArm}
              >
                <div className={`robot-body ${robotHappy ? 'happy' : ''}`}>
                  <div className="robot-head">
                    <div className="robot-eye left"></div>
                    <div className="robot-eye right"></div>
                    <div className={`robot-mouth ${robotHappy ? 'smile' : ''}`}></div>
                  </div>
                  
                  <div className="robot-torso"></div>
                  
                  <div className={`robot-arm left ${robotArmUp ? 'up' : ''}`}>
                    <div className="arm-joint"></div>
                    <div className="arm-hand"></div>
                  </div>
                  
                  <div className="robot-arm right">
                    <div className="arm-joint"></div>
                    <div className="arm-hand"></div>
                  </div>
                  
                  <div className="robot-leg left"></div>
                  <div className="robot-leg right"></div>
                </div>
              </div>
              
              <div className="robot-status">
                <p>
                  {robotArmUp 
                    ? '🎉 روبوت قول كۆتۈردى! سىز بىلەن تەبرىكلەشمەكچى! 👋' 
                    : 'روبوت سىزنى ساقلاۋاتىدۇ...'}
                </p>
                {robotHappy && <p className="happy-message">سىز روبوتنى خۇشال قىلىدىڭىز! 😊</p>}
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 6: ئاتا-ئانىلار ۋە مۇئەللىملەرگە تەكلىپ */}
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="section"
          style={{ backgroundColor: themes[5].bg, borderColor: themes[5].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[5].icon}</span>
            <h2 className="section-title">5. ئاتا-ئانىلار ۋە مۇئەللىملەرگە تەكلىپ</h2>
          </div>
          
          <div className="section-content">
            <p>
              بالىلارغا فيزيكىلىق سۈنئىي ئەقىلنى چۈشەندۈرۈشتە تۆۋەندىكى سۆزلەرنى ئىشلىتىڭ:
            </p>
            
            <div className="advice-cards">
              <div className="advice-card">
                <div className="advice-badge">👍</div>
                <h4>خاتالىق تېرمىنى</h4>
                <p>
                  «خاتا» دېگەن سۆزنى ئەمەس، 
                  <strong> «ئۇ بۇنى ئۆگىنمىگەن»</strong> دېگەن سۆزنى ئىشلىتىڭ.
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">🧠</div>
                <h4>ئەقىل تېرمىنى</h4>
                <p>
                  روبوت «ئەقىللىك» دەپ ئەمەس، 
                  <strong> «ئۇنىڭدا بىر داستۇر بار»</strong> دەپ تەسۋىرلەڭ.
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">❤️</div>
                <h4>سۆيگۈ تېرمىنى</h4>
                <p>
                  بالىنىڭ «روبوت مېنى سۆيمەيدۇ» دېگەن سۆزىگە 
                  <strong> «ھەئە، لېكىن سەن ئۇنى سۆيىشىڭ مۇمكىن»</strong> دەپ جاۋاب بېرىڭ.
                </p>
              </div>
            </div>
            
            <div className="age-guidance">
              <h3>يېشىغا قاراپ چۈشەندۈرۈش:</h3>
              
              <div className="age-groups">
                <div className="age-group">
                  <h4>3-5 ياش</h4>
                  <p>«روبوتمىز — ياردەمچى دوست» دېگەن چۈشەنچە</p>
                </div>
                
                <div className="age-group">
                  <h4>6-9 ياش</h4>
                  <p>«روبوتمىزنىڭ نېمە قىلالايدىغانلىقى ۋە نېمە قىلالمايدىغانلىقى»</p>
                </div>
                
                <div className="age-group">
                  <h4>10+ ياش</h4>
                  <p>«ماشىنا ئەقلى ۋە ئىنسان ئەقلى ئوتتۇرىسىدىكى پەرق»</p>
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
            <h2 className="section-title">خۇلاسە: يېڭى دوست، يېڭى چەكلىمىلەر</h2>
          </div>
          
          <div className="section-content">
            <div className="summary-quote">
              <div className="quote-icon">❝</div>
              <p className="quote-text">
                فيزىكىلىق سۈنئىي ئەقىل — بۇ ماشىنا ئەمەس، بەلكى 
                <strong> يېڭى دوست</strong>. لېكىن بۇ دوستنىڭ چەكلىمىسى بار:
              </p>
              <div className="quote-icon bottom">❞</div>
            </div>
            
            <div className="key-points">
              <div className="key-point">
                <div className="point-icon">🤝</div>
                <div className="point-content">
                  <h4>تۇتۇش، ئەمما تۇتالماسلىق</h4>
                  <p>«ئۇ سىز بىلەن قول تۇتۇشىدۇ، لېكىن قەلبىڭىزنى تۇتالمىيدۇ.»</p>
                </div>
              </div>
              
              <div className="key-point">
                <div className="point-icon">💡</div>
                <div className="point-content">
                  <h4>ياردەم، ئەمما چۈشەنمەسلىك</h4>
                  <p>«ئۇ سىزگە ياردەم قىلىدۇ، لېكىن سىزنىڭ ئويىڭىزنى ئوقۇيالمايدۇ.»</p>
                </div>
              </div>
              
              <div className="key-point">
                <div className="point-icon">👑</div>
                <div className="point-content">
                  <h4>ئالماشتۇرۇلماسلىق</h4>
                  <p>«شۇڭلاشقا — <strong>سىز ھەرگىز ئالماشتۇرۇلماسلىق كېرەك بولغان ئىنسان</strong>.»</p>
                </div>
              </div>
            </div>
            
            <div className="final-message">
              <div className="message-icon">✨</div>
              <div className="message-content">
                <h3>ئاخىرقى سۆز:</h3>
                <p>
                  بالىلار دۇنياسىغا سۈنئىي ئەقىلنى كىرگۈزۈش — بۇ تېخنىكا ئەمەس، بەلكى 
                  <strong> مۇھەببەت بىلەن چۈشەندۈرۈش</strong>.
                </p>
                <p className="highlight-text">
                  چۈنكى بالىلارنىڭ دۇنياسىدا، <strong>ھەر بىر ماشىنا — بىر دوست</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* تۆۋەنكى قىسىم */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-icon">🧠</span>
              <span className="footer-logo-text">AI بالىلار دۇنياسى</span>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">باش بەت</a>
              <a href="#" className="footer-link">مەزمۇنلار</a>
              <a href="#" className="footer-link">ھەققىمىزدا</a>
              <a href="#" className="footer-link">ئالاقە</a>
            </div>
            
            <div className="footer-social">
              <span className="social-text">بىز بىلەن ئالاقە:</span>
              <div className="social-icons">
                <a href="#" className="social-icon">📱</a>
                <a href="#" className="social-icon">💬</a>
                <a href="#" className="social-icon">📧</a>
                <a href="#" className="social-icon">🎥</a>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2026 AI بالىلار دۇنياسى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="footer-note">
                بۇ مەزمۇن ئوقۇتقۇچىلار، ئاتا-ئانىلار ۋە بالىلار ئۈچۈن تەييارلاندى.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog101;