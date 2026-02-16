import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Blog102.css';

const Blog106 = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [aiJudging, setAiJudging] = useState(false);
  const [judgmentResult, setJudgmentResult] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [lawProgress, setLawProgress] = useState({
    regulation: 30,
    accountability: 40,
    transparency: 50,
    ethics: 60,
    rights: 35
  });
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // قانۇن بۆلەكلىرى
  const sections = [
    { id: 0, title: "كىرىش سۆز: قانۇنسىز دۇنيا", icon: "⚖️" },
    { id: 1, title: "مەسئۇلىيەت مەسىلىسى", icon: "👤" },
    { id: 2, title: "ئەخلاق ۋە قانۇن", icon: "📜" },
    { id: 3, title: "ئۆلچەم ۋە تەڭشەش", icon: "🌐" },
    { id: 4, title: "ئىنسان ھوقۇقى", icon: "👥" },
    { id: 5, title: "كەلگۈسى قانۇن", icon: "🚀" },
    { id: 6, title: "ھەل ۋە تەكلىپ", icon: "💡" },
  ];

  // تېما بېتىش - قانۇن رەڭلىرى
  const themes = [
    { bg: '#fef7cd', border: '#fde68a', icon: '⚖️' },
    { bg: '#f0f9ff', border: '#bae6fd', icon: '👤' },
    { bg: '#f5f3ff', border: '#ddd6fe', icon: '📜' },
    { bg: '#f0fdf4', border: '#bbf7d0', icon: '🌐' },
    { bg: '#fef2f2', border: '#fecaca', icon: '👥' },
    { bg: '#fffbeb', border: '#fde68a', icon: '🚀' },
    { bg: '#ecfdf5', border: '#a7f3d0', icon: '💡' },
  ];

  // مۇرەككەپ قانۇن ھادىسىلىرى
  const legalCases = [
    {
      id: 1,
      title: 'ئاپتوماتىك ماشىنا قازاسى',
      description: 'ئاپتوماتىك ماشىنا قوشنىنىڭ بالىسىنى ئۇرۇپ قالدى. مەسئۇل كىم؟',
      parties: [
        { name: 'ماشىنا ئىشلەپچىقارغۇچى', role: 'پروگرامما لايىھىلىگۈچى' },
        { name: 'ماشىنا مۇلازىمەتچىسى', role: 'يۇمشاق دېتالنى يېڭىلىغۇچى' },
        { name: 'ماشىنا ئىگىسى', role: 'ماشىنىنى قوللىغۇچى' },
        { name: 'بالىنىڭ ئاتا-ئانىسى', role: 'بالىنى كۆزىتىمىگەن' }
      ],
      aiRecommendation: null
    },
    {
      id: 2,
      title: 'تەبىب روبوت خاتالىقى',
      description: 'روبوت دوختۇر خاتا دىئاگنوز قويۇپ، بىر كىشىنىڭ ھاياتىغا زىيان يەتكۈزدى',
      parties: [
        { name: 'دوستۇرخانا', role: 'روبوتنى سېتىپ ئالغۇچى' },
        { name: 'روبوت ئىشلەپچىقارغۇچى', role: 'دىئاگنوز سىستېمىسىنى ياسىغۇچى' },
        { name: 'تەبىب', role: 'روبوتنى كونترول قىلغۇچى' },
        { name: 'بىما شىركىتى', role: 'روبوتنى تەستىقلىغۇچى' }
      ],
      aiRecommendation: null
    },
    {
      id: 3,
      title: 'AI يالغان خەۋەر تارقىتىش',
      description: 'AI خەۋەر ئىشلەپچىقارغۇچى يالغان خەۋەر تارقىتىپ، بىر شەخسنىڭ ئابرويسىغا زىيان يەتكۈزدى',
      parties: [
        { name: 'AI تەرەققىياتچىسى', role: 'خەۋەر ئىشلەپچىقىرىدىغان مودېلنى ياسىغۇچى' },
        { name: 'خەۋەر تارقىتىش شىركىتى', role: 'AI نى ئىشلىتىپ خەۋەر تارقىتقۇچى' },
        { name: 'مەزمۇن تەكشۈرۈشچى', role: 'خەۋەرنى تەكشۈرمىگەن' },
        { name: 'يالغان خەۋەر ئىشلەتكۈچى', role: 'AI دىن يالغان خەۋەر تەلەپ قىلغۇچى' }
      ],
      aiRecommendation: null
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
      pdf.text('سۈنئىي ئەقىلنىڭ ئەخلاقىي قانۇنى', 105, 15, { align: 'center' });
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= 277;
      
      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 20;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= 277;
        page++;
      }
      
      pdf.save('سۈنئىي_ئەقىل_ئەخلاقىي_قانۇنى.pdf');
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

  // AI ھۆكۈم چىقىرىش
  const aiJudgeCase = (caseId) => {
    setAiJudging(true);
    setSelectedCase(caseId);
    setJudgmentResult(null);
    
    // ئاددىي سىمۇلاتسىيە
    setTimeout(() => {
      const cases = [
        {
          recommendation: "ماشىنا ئىشلەپچىقارغۇچى 60%، ماشىنا مۇلازىمەتچىسى 30%، ماشىنا ئىگىسى 10% مەسئۇل",
          reasoning: "ئىشلەپچىقارغۇچى ئاساسلىق پروگرامما خاتالىقى، مۇلازىمەتچى يېڭىلاش خاتالىقى، ئىگە ئەھمىيەتسىز خاتالىق"
        },
        {
          recommendation: "دوستۇرخانا 40%، روبوت ئىشلەپچىقارغۇچى 40%، تەبىب 20% مەسئۇل",
          reasoning: "دوستۇرخانا سىستېمىنى سېتىپ ئالغان، ئىشلەپچىقارغۇچى خاتا پروگرامما، تەبىب كۆزىتىش مەسئۇلىيىتى"
        },
        {
          recommendation: "خەۋەر تارقىتىش شىركىتى 50%، AI تەرەققىياتچىسى 30%، مەزمۇن تەكشۈرۈشچى 20% مەسئۇل",
          reasoning: "شىركەت ئاكتىپ خەۋەر تارقاتقان، تەرەققىياتچى يالغان خەۋەر يول قويغان، تەكشۈرۈشچى كۆزىتىمىگەن"
        }
      ];
      
      const result = cases[caseId - 1];
      setJudgmentResult(result);
      setAiJudging(false);
      
      // قانۇن تەرەققىياتىنى كۆتۈرۈش
      setLawProgress(prev => ({
        ...prev,
        accountability: Math.min(100, prev.accountability + 15),
        regulation: Math.min(100, prev.regulation + 10)
      }));
    }, 3000);
  };

  // قانۇن تەرەققىياتىنى كۈچەيتىش
  const improveLawArea = (area) => {
    setLawProgress(prev => ({
      ...prev,
      [area]: Math.min(100, prev[area] + 20)
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
  const [themeColor, setThemeColor] = useState('#059669');

  const fontSizes = {
    small: '0.9rem',
    medium: '1rem',
    large: '1.1rem',
    xlarge: '1.2rem'
  };

  // رەڭ پەللىسى - قانۇن رەڭلىرى
  const colorPalette = [
    { name: 'قانۇن يېشىلى', value: '#059669' },
    { name: 'ئەخلاق كۆكى', value: '#3b82f6' },
    { name: 'ئادىل سارى', value: '#f59e0b' },
    { name: 'خەتەر قىزىلى', value: '#ef4444' },
    { name: 'ھوقۇق بىنەپشىسى', value: '#8b5cf6' }
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
            <span className="logo-icon">⚖️</span>
            <span className="logo-text">AI ئەخلاقىي قانۇنى</span>
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

      {/* ئۆزئارا تەسىرلىك قانۇن مۇھاكىمە سىمۇلاتورى */}
      <div className="court-simulator" style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '2px solid #bbf7d0',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#0c4a6e' }}>
            ⚖️ AI قانۇن مۇھاكىمە سىمۇلاتورى
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div className="court-status" style={{
              padding: '0.5rem 1rem',
              backgroundColor: aiJudging ? '#f59e0b' : '#10b981',
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              {aiJudging ? 'مۇھاكىمە داۋامىدا...' : 'مۇھاكىمە ھەزىرى'}
            </div>
          </div>
        </div>
        
        {/* قانۇن تەرەققىيات نىسپىتى */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>AI قانۇنى تەرەققىيات ئەھۋالى:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {Object.entries(lawProgress).map(([key, value]) => (
              <div key={key} style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onClick={() => improveLawArea(key)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#475569' }}>
                    {key === 'regulation' && 'تەرەققىيات قائىدىسى'}
                    {key === 'accountability' && 'مەسئۇلىيەت'}
                    {key === 'transparency' && 'ئاشكارىلىق'}
                    {key === 'ethics' && 'ئەخلاق پرىنسىپى'}
                    {key === 'rights' && 'ئىنسان ھوقۇقى'}
                  </span>
                  <span style={{ fontWeight: 'bold', color: '#059669' }}>{value}%</span>
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
        
        {/* قانۇن ھادىسىلىرى */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>مۇرەككەپ قانۇن ھادىسىلىرى:</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {legalCases.map(legalCase => (
              <div key={legalCase.id} style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                width: '100%',
                maxWidth: '350px',
                cursor: 'pointer',
                transition: 'transform 0.3s, border-color 0.3s'
              }}
              onClick={() => !aiJudging && aiJudgeCase(legalCase.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#059669';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#059669',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {legalCase.id}
                  </div>
                  <h4 style={{ margin: 0, color: '#1e293b' }}>{legalCase.title}</h4>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {legalCase.description}
                </p>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  <strong>تەرەپلەر:</strong>
                  <div style={{ marginTop: '0.5rem' }}>
                    {legalCase.parties.map((party, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span>{party.name}</span>
                        <span style={{ color: '#94a3b8' }}>{party.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  className="toolbar-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    !aiJudging && aiJudgeCase(legalCase.id);
                  }}
                  disabled={aiJudging}
                  style={{ 
                    marginTop: '1rem', 
                    width: '100%',
                    backgroundColor: aiJudging ? '#e2e8f0' : '#059669',
                    color: aiJudging ? '#94a3b8' : 'white'
                  }}
                >
                  {aiJudging && selectedCase === legalCase.id ? 'ھۆكۈم چىقىرىۋاتىدۇ...' : 'AI ھۆكۈمىنى سوراڭ'}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* ھۆكۈم چىقىرىش */}
        {aiJudging && (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <div className="judging-animation" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '2rem' }}>⚖️</div>
              <div className="scale-balance" style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '12px',
                border: '2px solid #fde68a',
                maxWidth: '300px',
                textAlign: 'center'
              }}>
                <div className="thinking-animation">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <p style={{ margin: '0.5rem 0 0 0', color: '#475569', fontStyle: 'italic' }}>
                  AI ئەخلاقىي قانۇن پرىنسىپلىرى بويىچە ھۆكۈم چىقىرىۋاتىدۇ...
                </p>
              </div>
            </div>
          </div>
        )}
        
        {judgmentResult && (
          <div className="judgment-result" style={{
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: '4px solid #059669',
            marginTop: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>📋</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>AI نىڭ قانۇنىي تەكلىپى:</h4>
                <p style={{ margin: '0 0 1rem 0', color: '#059669', fontWeight: 'bold' }}>
                  {judgmentResult.recommendation}
                </p>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <h5 style={{ margin: '0 0 0.5rem 0', color: '#475569' }}>سەۋەبى:</h5>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
                    {judgmentResult.reasoning}
                  </p>
                </div>
              </div>
            </div>
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
            <div className="hero-overlay" style={{ background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.9), rgba(59, 130, 246, 0.7))' }}>
              <h1 className="hero-title">
                سۈنئىي ئەقىلنىڭ ئەخلاقىي قانۇنى: 
                <span className="highlight"> كىم بۇ ماشىنىنىڭ قانۇنىنى يازىدۇ؟</span>
              </h1>
              <p className="hero-subtitle">
                AI نىڭ قارارى خاتا بولۇپ، بىر كىشى زىيان كۆرگەندە، مەسئۇل كىم؟ ئىشلەپچىقارغۇچى؟ قوللىنىشچى؟ ياكى AI ئۆزى؟
              </p>
              <div className="hero-meta">
                <span className="meta-item">⏱️ ئوقۇش ۋاقتى: 8 مىنۇت</span>
                <span className="meta-item">📅 2026-يىلى 1-ئاينىڭ 15-كۈنى</span>
                <span className="meta-item">⚖️ قىيىنچىلىق: ئالى</span>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 1: كىرىش سۆز: قانۇنسىز دۇنيا */}
        <div 
          ref={el => sectionsRef.current[0] = el}
          className="section"
          style={{ backgroundColor: themes[0].bg, borderColor: themes[0].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[0].icon}</span>
            <h2 className="section-title">كىرىش سۆز: قانۇنسىز دۇنيا - ئاخىرىنىڭ يېڭى باشلىنىشى</h2>
          </div>
          
          <div className="section-content">
            <p>
              2026-يىلى، AI مەھكىمىلەرگە كىرىپ، قانۇن ھۆججەتلىرىنى تەھلىل قىلىپ، 
              تېكەشلىك ھۆكۈملەرنى چىقىرىدۇ. لېكىن ئەگەر بۇ AI نىڭ قارىشى خاتا بولۇپ، 
              بىر كىشى زىيان كۆرگەندە...
              <strong> قانۇن كىمنى جازالايدۇ؟</strong>
            </p>
            
            <div className="callout-box" style={{ borderLeft: '4px solid #059669' }}>
              <div className="callout-icon">⚠️</div>
              <div className="callout-content">
                <h3>قانۇنىي بوشلۇق</h3>
                <p>
                  ھازىرقى قانۇن سىستېمىسى <strong>«ئىنسان مەسئۇلىيىتى»</strong> نى چۈشۈنىدۇ. 
                  ئەمما AI — بۇ نە ئىنسان، نە ماشىنا. بۇ <strong>قانۇنىي بوشلۇق</strong> 2030-يىلغىچە قانداق تولدۇرىدۇ؟
                </p>
              </div>
            </div>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>مەسئۇلىيەت ماتېماتىكىسى</h3>
                <p>
                  مەسئۇلىيەت = لايىھە خاتالىقى + قوللىنىش خاتالىقى + باشقۇرۇش خاتالىقى
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👤</div>
                <h3>ئىنسان مەسئۇلىيىتى</h3>
                <p>
                  ئىنسان = ئىرادىلىك تاللاش + ئەخلاقىي چۈشەنچە + جاۋابكارلىق ھېسسىياتى
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>ئارىلاش مەسئۇلىيەت</h3>
                <p>
                  AI مەسئۇلىيىتى = ئىنسان مەسئۇلىيىتى + ماشىنا كۆزىتىش مەسئۇلىيىتى
                </p>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#f0f9ff' }}>
              <div className="example-icon">🚗</div>
              <div className="example-content">
                <h4>مىسال: ئاپتوماتىك ماشىنا ھادىسىسى</h4>
                <p>
                  <em>
                    ئاپتوماتىك ماشىنا قوشنىنىڭ بالىسىنى ئۇرۇپ قالدى. 
                    <strong>مەسئۇل كىم؟</strong>
                    <br/>1. ماشىنا ئىشلەپچىقارغۇچى (پروگرامما خاتالىقى)
                    <br/>2. ماشىنا مۇلازىمەتچىسى (يۇمشاق دېتال خاتالىقى)
                    <br/>3. ماشىنا ئىگىسى (قوللىنىش خاتالىقى)
                    <br/>4. بالىنىڭ ئاتا-ئانىسى (كۆزىتىم خاتالىقى)
                    <br/>5. AI ئۆزى (ئۆزىنىڭ «قارىشى»)
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 2: مەسئۇلىيەت مەسىلىسى */}
        <div 
          ref={el => sectionsRef.current[1] = el}
          className="section"
          style={{ backgroundColor: themes[1].bg, borderColor: themes[1].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[1].icon}</span>
            <h2 className="section-title">1. مەسئۇلىيەت مەسىلىسى: 4 خىل مەسئۇلىيەت مودېلى</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI قانۇنىي مەسئۇلىيىتى ئۈچۈن تۆۋەندىكى 4 خىل مودېل تەكلىپ قىلىنىدۇ:
            </p>
            
            <div className="analogies-container">
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">01</div>
                  <h3>ئىشلەپچىقارغۇچى مەسئۇلىيىتى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>قانۇن: </strong>ماشىنا ئىشلەپچىقارغۇچى ھەممە مەسئۇل
                    <br/><strong>ئۈستۈنلۈكى: </strong>ساددە، روشەن
                    <br/><strong>چەكلىمىسى: </strong>تەرەققىياتنى چەكلەيدۇ
                    <br/><strong>مىسال: </strong>ماشىنا ئىشلەپچىقارغۇچى 100% جازالىنىدۇ
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">02</div>
                  <h3>قوللىنىشچى مەسئۇلىيىتى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>قانۇن: </strong>قوللىغان ئادەم مەسئۇل
                    <br/><strong>ئۈستۈنلۈكى: </strong>ئىنسان مەركەزلىك
                    <br/><strong>چەكلىمىسى: </strong>مۇرەككەپ قارارلاردا زوراۋانلىق
                    <br/><strong>مىسال: </strong>دوختۇر روبوتنى قوللىغاندا جازالىنىدۇ
                  </p>
                </div>
              </div>
              
              <div className="analogy-card">
                <div className="analogy-header">
                  <div className="analogy-number">03</div>
                  <h3>AI ئۆزى مەسئۇلىيىتى</h3>
                </div>
                <div className="analogy-body">
                  <p>
                    <strong>قانۇن: </strong>AI نىڭ «قانۇنىي شەخسىيىتى» بار
                    <br/><strong>ئۈستۈنلۈكى: </strong>ئادىل، ئىلغار
                    <br/><strong>چەكلىمىسى: </strong>جازانى قانداق بېجىرىش؟
                    <br/><strong>مىسال: </strong>AI نىڭ «مۇلکى» بولۇشى مۇمكىن
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
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>04 بۆلۈش مەسئۇلىيىتى</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>قانۇن: </strong>ھەممە تەرەپ بىر قىسىم مەسئۇل
                  <br/><strong>ئۈستۈنلۈكى: </strong>ئادىل، ھەممىگە جاۋابكارلىق
                  <br/><strong>چەكلىمىسى: </strong>مۇرەككەپ، قىيىن ئىجرا قىلىش
                  <br/><strong>مىسال: </strong>ئىشلەپچىقارغۇچى 40%، قوللىغۇچى 30%، AI 30%
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid #fecaca'
              }}>
                <h4 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>ئەڭ ياخشى مودېل</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong>مۇرەككەپلىككە قاراپ:</strong>
                  <br/>• ساددە AI: ئىشلەپچىقارغۇچى
                  <br/>• مۇرەككەپ AI: بۆلۈش مەسئۇلىيىتى
                  <br/>• ئۆز-ئۆزىنى ئۆگىنىشچى AI: AI ئۆزى + ئىشلەپچىقارغۇچى
                  <br/>• ئۆز-ئۆزىنى قۇرۇشچى AI: يېڭى قانۇن كېرەك
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 3: ئەخلاق ۋە قانۇن */}
        <div 
          ref={el => sectionsRef.current[2] = el}
          className="section"
          style={{ backgroundColor: themes[2].bg, borderColor: themes[2].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[2].icon}</span>
            <h2 className="section-title">2. ئەخلاق ۋە قانۇن: ماشىنا «ياخشى-يامان»نى قانداق چۈشىنىدۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              قانۇن پەقەت جازالاش ئەمەس، بەلكى <strong>ئەخلاقىي پرىنسىپلارنى قوغداش</strong>.
              ماشىنا ئەخلاقنى قانداق «ئۆگىنىدۇ»؟
            </p>
            
            <div className="characteristics-list">
              <div className="characteristic-item">
                <div className="char-icon">📊</div>
                <div className="char-content">
                  <h4>سانلىق ئەخلاق</h4>
                  <p>
                    AI ئەخلاقنى سان بويىچە چۈشىنىدۇ:
                    <br/>• ياخشىلىق = كۆپ ئادەمنىڭ پايدىسى
                    <br/>• ئادىللىق = ھەممىگە تەڭ مۇئامىلە
                    <br/>• دۇرۇسلۇق = نەتىجىلەرنىڭ توغرىلىقى
                    <br/>• سەمىمىيەت = ئۇچۇرلارنىڭ توغرىلىقى
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">❤️</div>
                <div className="char-content">
                  <h4>ئىنسان ئەخلاقى</h4>
                  <p>
                    ئىنسان ئەخلاقنى ھېسسىيات بويىچە چۈشىنىدۇ:
                    <br/>• مۇھەببەت = باشقىلارغا بولغان ھېسسىيات
                    <br/>• راھىم-شەپقەت = باشقىلارنىڭ ئازابىنى چۈشىنىش
                    <br/>• ئىخلاس = نىيەتنىڭ پاكلىقى
                    <br/>• جۈرئەت = توغرا ئىش ئۈچۈن تۇرۇش
                  </p>
                </div>
              </div>
              
              <div className="characteristic-item">
                <div className="char-icon">⚖️</div>
                <div className="char-content">
                  <h4>قانۇن-ئەخلاق كېسىشمىسى</h4>
                  <p>
                    قانۇن ئەخلاقنى جەمئىيەت بويىچە چۈشىنىدۇ:
                    <br/>• ئادىللىق = جەمئىيەت پىكىرى بويىچە
                    <br/>• جازا = جەمئىيەت ئۈچۈن ساۋاق
                    <br/>• سۇغۇرما = جەمئىيەت ئۈچۈن ئۆزگىرىش
                    <br/>• قوغداش = جەمئىيەتنىڭ ئەخلاقىي چېگرىسى
                  </p>
                </div>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#fef3f2' }}>
              <div className="example-icon">🤔</div>
              <div className="example-content">
                <h4>مىسال: ماشىنا ئەخلاقىي قارارى</h4>
                <p>
                  <em>
                    <strong>مەسىلە:</strong> ئاپتوماتىك ماشىنا 5 ياشلىق بالىنى ئۇرۇپ قېچىش ياكى 80 ياشلىق قېرىنى ئۇرۇپ قېچىش ئوتتۇرىسىدا تاللاش قىلىش كېرەك.
                    <br/>
                    <strong>AI نىڭ قارىشى:</strong> بالىنىڭ ھايات يىلى ئارتۇقرا (75 يىل) → بالىنى قوغدا
                    <br/>
                    <strong>ئىنسان قارىشى:</strong> قېرىنىڭ ھايات تەجرىبىسى ئارتۇقرا → قېرىنى قوغدا
                    <br/>
                    <strong>قانۇن قارىشى:</strong> ھەر ئىككىسىنىڭ ھايات ھوقۇقى بار → نەتىجىسىز قېچىش قىلىش
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 4: ئۆلچەم ۋە تەڭشەش */}
        <div 
          ref={el => sectionsRef.current[3] = el}
          className="section"
          style={{ backgroundColor: themes[3].bg, borderColor: themes[3].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[3].icon}</span>
            <h2 className="section-title">3. ئۆلچەم ۋە تەڭشەش: دۇنياۋى قانۇننى كىم يازىدۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI قانۇنى پەقەت بىر دۆلەتنىڭ قانۇنى بولۇشى مۇمكىن ئەمەس. 
              بۇ <strong>دۇنياۋى قانۇن</strong> بولۇشى كېرەك:
            </p>
            
            <div className="game-experiment">
              <h3 className="game-title">دۇنياۋى قانۇن يېزىش جەريانى:</h3>
              
              <div className="game-steps">
                <div className="game-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>ئاساسىي پرىنسىپلار</h4>
                    <p>
                      <strong>خەلقئارالىق تەشكىلاتلار:</strong>
                      <br/>• بىرلەشكەن دۆلەتلەر تەشكىلاتى
                      <br/>• ياۋروپا ئىتتىپاقى
                      <br/>• خەلقئارالىق قانۇن مەكتىپى
                      <br/>• تېخنىكا ئەخلاقىي كومىتېتى
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>ئۆلچەم تۈزۈش</h4>
                    <p>
                      <strong>تېخنىكا شىركەتلىرى:</strong>
                      <br/>• Google (AI پرىنسىپلىرى)
                      <br/>• Microsoft (ئەخلاقىي تەكشۈرۈش)
                      <br/>• OpenAI (بىخەتەرلىك ستانداتلىرى)
                      <br/>• Meta (ئىشلەتكۈچى ھوقۇقلىرى)
                    </p>
                  </div>
                </div>
                
                <div className="game-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>دۆلەت قانۇنى</h4>
                    <p>
                      <strong>ئۇلۇس دۆلەتلىرى:</strong>
                      <br/>• ئامېرىكا (تېخنىكا مەركەزلىك)
                      <br/>• خىتاي (دۆلەت كونترول مەركەزلىك)
                      <br/>• ياۋروپا (ئىنسان ھوقۇقى مەركەزلىك)
                      <br/>• ياپونىيە (روھىي تەرەققىيات مەركەزلىك)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="game-outcome" style={{ backgroundColor: '#fef7cd' }}>
                <h4>ئۆزگىچە چەتئەل قانۇنلىرى:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
                  <div>
                    <h5 style={{ color: '#3b82f6' }}>ئامېرىكا</h5>
                    <p style={{ fontSize: '0.9rem' }}>مەسئۇلىيەت = ئىشلەپچىقارغۇچى + قوللىغۇچى</p>
                  </div>
                  <div>
                    <h5 style={{ color: '#dc2626' }}>ياۋروپا</h5>
                    <p style={{ fontSize: '0.9rem' }}>مەسئۇلىيەت = ئىشلەپچىقارغۇچى (80%) + قوللىغۇچى (20%)</p>
                  </div>
                  <div>
                    <h5 style={{ color: '#059669' }}>خىتاي</h5>
                    <p style={{ fontSize: '0.9rem' }}>مەسئۇلىيەت = دۆلەت + ئىشلەپچىقارغۇچى + قوللىغۇچى</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tip-box">
              <div className="tip-icon">🌍</div>
              <div className="tip-content">
                <h4>دۇنياۋى تەڭشەش تەكلىپى:</h4>
                <p>
                  1. <strong>ئاساسىي پرىنسىپلار:</strong> ھەممە دۆلەت ئۈچۈن ئورتاق 10 ئاساسىي پرىنسىپ
                  <br/>
                  2. <strong>مەھەللىي تەڭشەش:</strong> ھەر دۆلەت ئۆزىنىڭ دۆلەت قانۇنى بويىچە تەڭشەيدۇ
                  <br/>
                  3. <strong>خەلقئارالىق مەھكىمە:</strong> AI قانۇنىي ھادىسىلىرى ئۈچۈن خەلقئارالىق مەھكىمە
                  <br/>
                  4. <strong>تېخنىكا تەڭشىكى:</strong> ھەر شىركەت ئۆزىنىڭ ئەخلاقىي كودى
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 5: ئىنسان ھوقۇقى */}
        <div 
          ref={el => sectionsRef.current[4] = el}
          className="section"
          style={{ backgroundColor: themes[4].bg, borderColor: themes[4].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[4].icon}</span>
            <h2 className="section-title">4. ئىنسان ھوقۇقى: ماشىنا ۋە ئىنساننىڭ ھوقۇقى</h2>
          </div>
          
          <div className="section-content">
            <p>
              AI قانۇنى پەقەت جازالاش ئەمەس، بەلكى 
              <strong> ئىنسان ھوقۇقىنى قوغداش ۋە ماشىنا ھوقۇقىنى بېكىتىش</strong>.
            </p>
            
            <div className="comparison-cards">
              <div className="comparison-card comparison-left">
                <div className="card-header">
                  <div className="card-icon">👤</div>
                  <h3>ئىنسان ھوقۇقى</h3>
                </div>
                <ul className="card-list">
                  <li className="positive">ھايات ھوقۇقى</li>
                  <li className="positive">ئەركىنلىك ھوقۇقى</li>
                  <li className="positive">شەخسىي مەخپىيەتلىك ھوقۇقى</li>
                  <li className="positive">ئادىل مۇئامىلە ھوقۇقى</li>
                  <li className="positive">تەنقىدىي پىكىر ھوقۇقى</li>
                </ul>
                <div className="card-footer">
                  <span className="tag positive">ئىنسانغا خاس</span>
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
                  <h3>ماشىنا ھوقۇقى</h3>
                </div>
                <ul className="card-list">
                  <li className="negative">ئاشكارىلىق ھوقۇقى</li>
                  <li className="negative">تەكشۈرۈش ھوقۇقى</li>
                  <li className="negative">تەنقىدىي باھا ھوقۇقى</li>
                  <li className="negative">ئۆزىنى قوغداش ھوقۇقى</li>
                  <li className="negative">ئۆزىنى ئۆزگەرتىش ھوقۇقى</li>
                </ul>
                <div className="card-footer">
                  <span className="tag negative">ماشىناغا خاس</span>
                </div>
              </div>
            </div>
            
            <div className="important-note" style={{ backgroundColor: '#ecfeff' }}>
              <h3>يېڭى ھوقۇق مەسىلىسى:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                <div>
                  <h4 style={{ color: '#059669' }}>ئاشكارىلىق ھوقۇقى</h4>
                  <p style={{ fontSize: '0.9rem' }}>
                    ئىشلەتكۈچى AI نىڭ قارار چىقىرىش جەريانىنى بىلىش ھوقۇقىغا ئىگە
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#3b82f6' }}>تەكشۈرۈش ھوقۇقى</h4>
                  <p style={{ fontSize: '0.9rem' }}>
                    AI نىڭ قارارىنى بىر تەرەپ قىلغۇچى كۆزىتىپ تەكشۈرۈش ھوقۇقىغا ئىگە
                  </p>
                </div>
                <div>
                  <h4 style={{ color: '#8b5cf6' }}>تەنقىدىي باھا ھوقۇقى</h4>
                  <p style={{ fontSize: '0.9rem' }}>
                    AI نىڭ قارارىغا ئىنسان تەرەپىدىن تەنقىدىي باھا بېرىش ھوقۇقى
                  </p>
                </div>
              </div>
              <p style={{ marginTop: '1rem' }}>
                <strong>مۇھىم پرىنسىپ:</strong> 
                AI ھوقۇقى ئىنسان ھوقۇقىنى ئازايتمايدۇ، بەلكى ئۇنى قوغداش ئۈچۈن بولۇشى كېرەك.
              </p>
            </div>
          </div>
        </div>

        {/* بۆلەك 6: كەلگۈسى قانۇن */}
        <div 
          ref={el => sectionsRef.current[5] = el}
          className="section"
          style={{ backgroundColor: themes[5].bg, borderColor: themes[5].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[5].icon}</span>
            <h2 className="section-title">5. كەلگۈسى قانۇن: 2030-يىلى قانداق بولىدۇ؟</h2>
          </div>
          
          <div className="section-content">
            <p>
              2030-يىلى، AI قانۇنى يۇقىرىدىكى مۇرەككەپ مەسىلىلەرنى ھەل قىلىش ئۈچۈن 
              <strong>يېڭى قانۇن سىستېمىسى</strong>نى قۇرىدۇ:
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
                border: '2px solid #e2e8f0'
              }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>AI قانۇن مەھكىمىسى</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', paddingRight: '1rem' }}>
                  <li>• AI قانۇنىي مۇتەخەسسىسلىرى</li>
                  <li>• ماشىنا-ئىنسان مۇھاكىمىسى</li>
                  <li>• ئەخلاقىي تەكشۈرۈش سىستېمىسى</li>
                  <li>• ئۆزلۈكىدىن ھۆكۈم چىقىرىش</li>
                </ul>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0'
              }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>ئاسىيا روبوتى</h4>
                <ul style={{ fontSize: '0.9', color: '#475569', paddingRight: '1rem' }}>
                  <li>• قانۇن ھۆججىتى تەھلىل قىلىش</li>
                  <li>• ئەخلاقىي باھالاش</li>
                  <li>• قانۇنىي تەكلىپ بېرىش</li>
                  <li>• ئۆزىنىڭ قارىشىنى چۈشەندۈرۈش</li>
                </ul>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0'
              }}>
                <h4 style={{ color: '#8b5cf6', marginBottom: '0.5rem' }}>بۆلۈش مەسئۇلىيىتى سىستېمىسى</h4>
                <ul style={{ fontSize: '0.9rem', color: '#475569', paddingRight: '1rem' }}>
                  <li>• مەسئۇلىيەتنى ئۆلچەش ئالگورىتىمى</li>
                  <li>• ھەر تەرەپنىڭ مەسئۇلىيىتى</li>
                  <li>• جازانى ئۆلچەش سىستېمىسى</li>
                  <li>• ئىنسان ۋە ماشىنا ھوقۇقى</li>
                </ul>
              </div>
            </div>
            
            <div className="example-box" style={{ backgroundColor: '#fef7cd', marginTop: '1.5rem' }}>
              <div className="example-icon">🔮</div>
              <div className="example-content">
                <h4>2030-يىللىق مۇھاكىمە مىسالى:</h4>
                <p>
                  <em>
                    <strong>ھادىسە:</strong> ئۆز-ئۆزىنى ئۆگىنىشچى روبوت قوشنىنىڭ باغچىسىنى بۇزۇپ تاشلىدى.
                    <br/>
                    <strong>مۇھاكىمە:</strong> 
                    <br/>• AI قانۇن مۇتەخەسسىسى: روبوتنىڭ ئۆگىنىش جەريانىنى تەھلىل قىلىدۇ
                    <br/>• ئاسىيا روبوتى: روبوتنىڭ نىيەتىنى تەھلىل قىلىدۇ
                    <br/>• ئىنسان قازى: ئەخلاقىي جەھەتتىن باھا بېرىدۇ
                    <br/>• ماشىنا قازى: قانۇنىي جەھەتتىن باھا بېرىدۇ
                    <br/>
                    <strong>ھۆكۈم:</strong> روبوت ئىشلەپچىقارغۇچى 50%، روبوت مۇلازىمەتچىسى 30%، روبوت ئىگىسى 20% مەسئۇل
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* بۆلەك 7: ھەل ۋە تەكلىپ */}
        <div 
          ref={el => sectionsRef.current[6] = el}
          className="section"
          style={{ backgroundColor: themes[6].bg, borderColor: themes[6].border }}
        >
          <div className="section-header">
            <span className="section-icon">{themes[6].icon}</span>
            <h2 className="section-title">6. ھەل ۋە تەكلىپ: بىز قانداق تەييارلىنىشىمىز كېرەك؟</h2>
          </div>
          
          <div className="section-content">
            <div className="summary-quote">
              <div className="quote-icon">❝</div>
              <p className="quote-text">
                سۈنئىي ئەقىلنىڭ ئەخلاقىي قانۇنى — بۇ پەقەت قانۇنچىلارنىڭ مەسىلىسى ئەمەس. 
                بۇ <strong>ھەممىمىزنىڭ مەسىلىسى</strong>.
              </p>
              <div className="quote-icon bottom">❞</div>
            </div>
            
            <div className="advice-cards">
              <div className="advice-card">
                <div className="advice-badge">👨‍💼</div>
                <h4>تېخنىكا شىركەتلىرى ئۈچۈن</h4>
                <p>
                  <strong>ئەخلاقىي كود:</strong>
                  <br/>• AI نىڭ چەكلىمىسىنى ئاشكارىلاش
                  <br/>• مەسئۇلىيەتنى ئېنىق بېكىتىش
                  <br/>• ئاشكارىلىق پرىنسىپىنى قوللاش
                  <br/>• تەكشۈرۈش يولىنى قۇرۇش
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">👨‍⚖️</div>
                <h4>قانۇنچىلار ئۈچۈن</h4>
                <p>
                  <strong>يېڭى قانۇن:</strong>
                  <br/>• AI مەسئۇلىيىتى قانۇنى
                  <br/>• ماشىنا-ئىنسان ھوقۇقى
                  <br/>• ئاشكارىلىق تەلەپلىرى
                  <br/>• تەكشۈرۈش مېخانىزمى
                </p>
              </div>
              
              <div className="advice-card">
                <div className="advice-badge">👨‍👩‍👧‍👦</div>
                <h4>ئىشلەتكۈچىلەر ئۈچۈن</h4>
                <p>
                  <strong>ھوقۇقىڭىزنى بىلىڭ:</strong>
                  <br/>• ئاشكارىلىق تەلەپ قىلىش ھوقۇقى
                  <br/>• تەكشۈرۈش تەلەپ قىلىش ھوقۇقى
                  <br/>• تەنقىدىي باھا بېرىش ھوقۇقى
                  <br/>• مەسئۇلىيەتنى تەلەپ قىلىش ھوقۇقى
                </p>
              </div>
            </div>
            
            <div className="final-message">
              <div className="message-icon">⚖️</div>
              <div className="message-content">
                <h3>ئاخىرقى سۆز:</h3>
                <p>
                  سۈنئىي ئەقىلنىڭ ئەخلاقىي قانۇنى — بۇ 
                  <strong> تېخنىكا، ئەخلاق، قانۇن ۋە ئىنسانلىق</strong>نىڭ بىرلىكتە يازىدىغان يېڭى قانۇنى.
                </p>
                <p className="highlight-text" style={{ marginTop: '1rem' }}>
                  بىز بۇ قانۇننى ئۆزىمىز يازمايدۇ — بۇ قانۇننى بىز 
                  <strong> بىرلىكتە يازىمىز</strong>:
                  <br/>• تېخنىكا شىركەتلىرى ئەخلاقىي پرىنسىپلارنى
                  <br/>• قانۇنچىلار قانۇنىي چەكلىمىلەرنى
                  <br/>• ئىشلەتكۈچىلەر ھوقۇق ۋە مەسئۇلىيەتلەرنى
                  <br/>• ئىنسانىيەت ئەخلاق ۋە قىممەتلەرنى
                </p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#64748b' }}>
                  چۈنكى ئەڭ مۇھىم قانۇن — بۇ ئىنساننىڭ ئەقلى ۋە قەلبىدە ياتقان ئەخلاق قانۇنى.
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
              <h3 style={{ marginBottom: '1rem', color: '#059669' }}>
                سىزنىڭ قانۇنىي پوزىتسىيەڭىز
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
                  border: '2px solid #bbf7d0'
                }}>
                  <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>مەسئۇلىيەت</h4>
                  <p style={{ fontSize: '0.9rem' }}>ئىشلەپچىقارغۇچى ئاساسلىق مەسئۇل بولۇشى كېرەك</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #bae6fd'
                }}>
                  <h4 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>ھوقۇق</h4>
                  <p style={{ fontSize: '0.9rem' }}>ئىشلەتكۈچىلەر ئاشكارىلىق ھوقۇقىغا ئىگە بولۇشى كېرەك</p>
                </div>
                
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '2px solid #fde68a'
                }}>
                  <h4 style={{ color: '#d97706', marginBottom: '0.5rem' }}>ئەخلاق</h4>
                  <p style={{ fontSize: '0.9rem' }}>AI ئەخلاقىي پرىنسىپلارغا بويسۇنۇشى كېرەك</p>
                </div>
              </div>
              
              <button 
                className="toolbar-btn primary"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ minWidth: '200px' }}
              >
                قانۇننى بىرلىكتە يازايلى! ⚖️
              </button>
            </div>
          </div>
        </div>

        {/* تۆۋەنكى قىسىم */}
        <div className="footer-section">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-logo-icon">⚖️</span>
              <span className="footer-logo-text">AI ئەخلاقىي قانۇن پروژىسى</span>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">باش بەت</a>
              <a href="#" className="footer-link">قانۇنىي مەزمۇنلار</a>
              <a href="#" className="footer-link">مۇھاكىمە</a>
              <a href="#" className="footer-link">ئالاقە</a>
            </div>
            
            <div className="footer-social">
              <span className="social-text">بىز بىلەن مۇھاكىمە:</span>
              <div className="social-icons">
                <a href="#" className="social-icon">⚖️</a>
                <a href="#" className="social-icon">👨‍⚖️</a>
                <a href="#" className="social-icon">🤖</a>
                <a href="#" className="social-icon">🌍</a>
              </div>
            </div>
            
            <div className="footer-copyright">
              <p>© 2026 AI ئەخلاقىي قانۇن پروژىسى. بارلىق ھوقۇقلار قوغدىلىدى.</p>
              <p className="footer-note">
                بۇ مەزمۇن قانۇنچىلار، تېخنىكا مۇتەخەسسىسلەرى ۋە ئاممىۋى سىياسەتچىلەر ئۈچۈن تەييارلاندى.
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
        
        .court-simulator {
          animation: ${aiJudging ? 'pulse 2s infinite' : 'none'};
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(5, 150, 105, 0); }
          100% { box-shadow: 0 0 0 0 rgba(5, 150, 105, 0); }
        }
        
        .scale-balance {
          animation: balance 2s infinite ease-in-out;
        }
        
        @keyframes balance {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @media (max-width: 768px) {
          .court-simulator {
            padding: 1.5rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .analogies-container {
            grid-template-columns: 1fr;
          }
          
          .legal-case-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog106;